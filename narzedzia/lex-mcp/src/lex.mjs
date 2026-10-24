/* lex.mjs — klient LEX: ukryty Chrome (Puppeteer) z trwałym profilem, logowanie przez formularz Wolters Kluwer,
   wyszukiwanie i odczyt dokumentów w zalogowanej aplikacji sip.lex.pl.

   Co przyspiesza względem prowadzenia zwykłego Chrome:
   - przeglądarka działa w tle i zostaje uruchomiona między zapytaniami (zamyka się po LEX_IDLE_MIN minutach);
   - sesja (ciasteczka) jest zapisywana w ~/.lex-mcp/cookies.json, więc ponowne logowanie jest rzadkie;
   - karty są używane ponownie (aplikacja LEX jest już załadowana, zmienia się tylko adres #/…);
   - obrazki, czcionki, filmy i skrypty analityczne nie są pobierane;
   - do LEX_MAX_PAGES zapytań naraz (osobne karty, jedna sesja). */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import puppeteer from 'puppeteer-core';
import { config, ensureHome } from './config.mjs';
import { getCredentials } from './credentials.mjs';
import { LEX_ORIGIN, searchUrl, documentUrl, routeLabel } from './categories.mjs';
import { pageState, extractResults, extractDocument, scrollDocument, scrollResultsToEnd } from './extract.mjs';
import { mergeText, normalize, parseMeta, snippets, fileSafe, cleanTitle } from './text.mjs';

const BLOCKED_HOSTS = /(googletagmanager|google-analytics|analytics\.google|doubleclick|googlesyndication|cookielaw|onetrust|hotjar|facebook|clarity\.ms|sentry|nr-data|newrelic|hubspot|linkedin|tiktok|criteo|gemius|youtube|vimeo|smartlook|survicate|userlike|livechat)/i;
const BLOCKED_TYPES = new Set(['image', 'media', 'font']);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const T0 = Date.now();
const dbg = process.env.LEX_DEBUG ? (...a) => console.error(`[lex ${((Date.now() - T0) / 1000).toFixed(1)}s]`, ...a) : () => {};

// null zamiast wyjątku, gdy trwa nawigacja (kontekst strony zniszczony) albo strona nie odpowiada w 8 s
async function evalSafe(page, fn, ...args) {
  let timer;
  try {
    return await Promise.race([
      page.evaluate(fn, ...args),
      new Promise((resolve) => { timer = setTimeout(() => resolve(null), 8000); }),
    ]);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export class Lex {
  #browser = null;
  #launching = null;
  #free = [];
  #busy = 0;
  #waiters = [];
  #idleTimer = null;
  #loginPromise = null;
  #rejected = null; // { key, message }: te dane LEX już odrzucił — bez ponownych prób (blokada konta)
  #json = new WeakMap(); // page → przechwycone odpowiedzi JSON z LEX (zapasowe źródło wyników)
  #net = new WeakMap(); // page → żądania w toku
  lastLogin = null;
  profileNote = '';

  // ---------- przeglądarka i karty ----------

  async #launch() {
    ensureHome();
    if (!fs.existsSync(config.chrome)) {
      throw new Error(`Nie znaleziono Chrome (${config.chrome}). Zainstaluj Google Chrome albo wskaż go w LEX_CHROME.`);
    }
    const options = {
      executablePath: config.chrome,
      headless: config.headless,
      defaultViewport: { width: 1400, height: 1000 },
      args: ['--lang=pl-PL', '--no-first-run', '--no-default-browser-check', '--window-size=1400,1000', ...config.extraArgs],
    };
    let browser;
    dbg('start Chrome', config.chrome);
    try {
      browser = await puppeteer.launch({ ...options, userDataDir: config.profileDir });
      this.profileNote = '';
    } catch (e) {
      // profil zajęty (np. działa już serwer MCP, a uruchamiasz CLI): tymczasowy profil + zapisane ciasteczka
      if (!/already running|SingletonLock|ProcessSingleton/i.test(String(e.message))) throw e;
      browser = await puppeteer.launch(options);
      this.profileNote = 'profil tymczasowy (główny profil zajęty przez inny proces)';
    }
    browser.on('disconnected', () => {
      if (this.#browser === browser) {
        this.#browser = null;
        this.#free = [];
      }
    });
    await this.#restoreCookies(browser);
    this.#browser = browser;
    dbg('Chrome gotowy');
    return browser;
  }

  async browser() {
    if (this.#browser?.connected) return this.#browser;
    this.#launching ??= this.#launch().finally(() => { this.#launching = null; });
    return this.#launching;
  }

  async #newPage(browser) {
    const page = await browser.newPage();
    page.setDefaultTimeout(config.timeoutMs);
    // Aplikacja LEX zawiesza się w karcie, którą uważa za niewidoczną (a przy kilku kartach widoczna jest jedna),
    // i blokuje przy tym inne karty LEX w tym samym procesie. Każda karta udaje więc widoczną.
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
      Object.defineProperty(document, 'hidden', { get: () => false });
      document.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);
    });
    await page.setRequestInterception(true);
    // własny licznik żądań w toku (page.waitForNetworkIdle przy przechwytywaniu żądań czeka tu do limitu czasu)
    const net = { inflight: new Map(), last: Date.now() };
    this.#net.set(page, net);
    page.on('request', (req) => {
      if (req.isInterceptResolutionHandled()) return;
      let host = '';
      try { host = new URL(req.url()).host; } catch {}
      if (BLOCKED_TYPES.has(req.resourceType()) || BLOCKED_HOSTS.test(host)) {
        req.abort().catch(() => {});
        return;
      }
      net.inflight.set(req, Date.now());
      net.last = Date.now();
      req.continue().catch(() => {});
    });
    const done = (req) => {
      if (net.inflight.delete(req)) net.last = Date.now();
    };
    page.on('requestfinished', done);
    page.on('requestfailed', done);
    page.on('response', (res) => this.#onResponse(page, res));
    return page;
  }

  async #onResponse(page, res) {
    const url = res.url();
    if (!url.startsWith(LEX_ORIGIN)) return;
    const type = res.headers()['content-type'] || '';
    if (!/json/.test(type)) return;
    const store = this.#json.get(page);
    if (!store && !config.trace) return;
    let body;
    try { body = await res.text(); } catch { return; }
    if (store && body.length < 5e6) store.push(body);
    if (config.trace) {
      const req = res.request();
      const line = { ts: new Date().toISOString(), method: req.method(), url, status: res.status(),
        post: req.postData()?.slice(0, 4000) || null, body: body.slice(0, 60000) };
      fs.appendFile(config.traceFile, JSON.stringify(line) + '\n', { mode: 0o600 }, () => {});
    }
  }

  async #withPage(fn) {
    while (this.#busy >= config.maxPages) await new Promise((r) => this.#waiters.push(r));
    this.#busy++;
    clearTimeout(this.#idleTimer);
    let page = null;
    try {
      const browser = await this.browser();
      page = this.#free.pop();
      if (!page || page.isClosed()) page = await this.#newPage(browser);
      return await fn(page);
    } catch (e) {
      if (page && !page.isClosed()) await page.close().catch(() => {});
      page = null; // karta w nieznanym stanie — nie wraca do puli
      throw e;
    } finally {
      this.#busy--;
      if (page && !page.isClosed()) this.#free.push(page);
      this.#waiters.shift()?.();
      if (this.#busy === 0) {
        this.#idleTimer = setTimeout(() => this.close().catch(() => {}), config.idleMinutes * 60000);
        this.#idleTimer.unref?.();
      }
    }
  }

  async close() {
    clearTimeout(this.#idleTimer);
    const b = this.#browser;
    if (!b) return;
    await this.#saveCookies().catch(() => {});
    this.#browser = null;
    this.#free = [];
    await b.close().catch(() => {});
  }

  // ---------- sesja ----------

  async #saveCookies() {
    const b = this.#browser;
    if (!b?.connected) return;
    const cookies = (await b.cookies()).filter((c) => /lex\.pl$|wolterskluwer\.pl$/.test(c.domain.replace(/^\./, '')));
    ensureHome();
    fs.writeFileSync(config.cookieFile, JSON.stringify(cookies), { mode: 0o600 });
  }

  async #restoreCookies(browser) {
    try {
      const now = Date.now() / 1000;
      const cookies = JSON.parse(fs.readFileSync(config.cookieFile, 'utf8'))
        .filter((c) => !c.expires || c.expires < 0 || c.expires > now)
        // ciasteczka __Host- (m.in. uwierzytelnienie LEX) Chrome przyjmuje tylko z url, bez domain
        .map(({ domain, ...c }) => (c.name.startsWith('__Host-')
          ? { ...c, url: `https://${domain.replace(/^\./, '')}${c.path || '/'}` }
          : { domain, ...c }));
      if (cookies.length) await browser.setCookie(...cookies);
    } catch {}
  }

  async #waitState(page, ms = config.timeoutMs) {
    const deadline = Date.now() + ms;
    while (Date.now() < deadline) {
      const s = await evalSafe(page, pageState);
      if (s?.state) return s;
      await sleep(200);
    }
    const text = await evalSafe(page, () => (document.body?.innerText || '').slice(0, 500));
    throw new Error(`LEX nie odpowiedział w ${ms / 1000} s (adres: ${page.url()}).\n${text || ''}`);
  }

  async #login(page) {
    if (this.#loginPromise) return this.#loginPromise; // inna karta już loguje — poczekaj na nią
    this.#loginPromise = (async () => {
      const { login, password } = await getCredentials();
      const key = createHash('sha256').update(`${login}\0${password}`).digest('hex');
      if (this.#rejected?.key === key) {
        throw new Error(`${this.#rejected.message} Nie ponawiam logowania tymi samymi danymi (ryzyko blokady konta). `
          + 'Popraw dane: npm run setup w narzedzia/lex-mcp.');
      }
      dbg('logowanie jako', login);
      await page.waitForSelector('#username');
      // Wypełnienie i wysłanie w DOM, bez symulowania klawiatury: zdarzenia klawiszy do karty w tle
      // potrafią zawiesić Chrome (i pozostałe karty) do czasu jej aktywowania.
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => null),
        page.evaluate((user, pass) => {
          const set = (el, v) => {
            el.value = v;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          };
          set(document.querySelector('#username'), user);
          set(document.querySelector('#password'), pass);
          const form = document.querySelector('#login_form') || document.querySelector('#password').form;
          const button = document.querySelector('#login_btn');
          if (form.requestSubmit) form.requestSubmit(button || undefined);
          else form.submit();
        }, login, password),
      ]);
      const deadline = Date.now() + config.timeoutMs;
      while (Date.now() < deadline) {
        const s = await evalSafe(page, pageState);
        if (s?.state === 'app') {
          this.lastLogin = new Date();
          await this.#saveCookies().catch(() => {});
          return;
        }
        if (s?.state === 'login-error') {
          const message = `Logowanie do LEX nieudane: ${s.message}`;
          if (/nieprawidłow|błędn|hasło|password/i.test(s.message)) this.#rejected = { key, message };
          throw new Error(message);
        }
        await sleep(250);
      }
      const text = await evalSafe(page, () => (document.body?.innerText || '').slice(0, 600));
      throw new Error(`Logowanie do LEX nie zakończyło się (adres: ${page.url()}).\n${text || ''}`);
    })().finally(() => { this.#loginPromise = null; });
    return this.#loginPromise;
  }

  // Otwórz adres w aplikacji LEX; zaloguj, jeśli trzeba.
  async #goto(page, url) {
    dbg('goto', url);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    let s = await this.#waitState(page);
    dbg('stan', s.state, page.url());
    if (s.state === 'login-error') throw new Error(`Logowanie do LEX nieudane: ${s.message}`);
    if (s.state === 'login') {
      await this.#login(page);
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      s = await this.#waitState(page);
      if (s.state !== 'app') throw new Error('LEX nadal wymaga logowania. Sprawdź dane: npm run setup (w narzedzia/lex-mcp).');
    }
  }

  // Cisza w sieci przez idleTime ms (żądania wiszące ponad 10 s, np. long polling, nie blokują).
  async #idle(page, idleTime = 400, timeout = 12000) {
    const net = this.#net.get(page);
    const end = Date.now() + timeout;
    while (net && Date.now() < end) {
      const now = Date.now();
      const busy = [...net.inflight.values()].some((t) => now - t < 10000);
      if (!busy && now - net.last >= idleTime) return;
      await sleep(80);
    }
  }

  // ---------- wyszukiwanie ----------

  // q (+ kategoria, sort) albo url: gotowa lista wyników z LEX, np. z filtrami ustawionymi ręcznie w LEX
  async search({ q, kategoria = 'wszystko', sort = 'trafnosc', limit = 20, url: listUrl }) {
    const query = String(q || '').trim();
    if (!query && !listUrl) throw new Error('Puste zapytanie.');
    const max = Math.max(1, Math.min(100, Number(limit) || 20));
    const url = listUrl ? documentUrl({ url: listUrl }) : searchUrl({ q: query, kategoria, sort });
    return this.#withPage(async (page) => {
      const started = Date.now();
      // linki z poprzedniego wyszukiwania w tej karcie (żeby nie odczytać starej listy)
      const old = new Set((await evalSafe(page, extractResults, 1000))?.hrefs || []);
      const json = [];
      this.#json.set(page, json);
      try {
        let res = null;
        for (let attempt = 0; attempt < 2; attempt++) {
          await this.#goto(page, url);
          res = await this.#waitForResults(page, max, old);
          // sesja wygasła w trakcie (aplikacja przekierowała do logowania) — zaloguj i powtórz raz
          if ((await evalSafe(page, pageState))?.state !== 'login') break;
        }
        await this.#idle(page, 300, 4000);
        res = (await evalSafe(page, extractResults, max)) || res || { items: [] };
        // doładuj kolejne wyniki przewijaniem, jeśli trzeba
        for (let i = 0; res.items.length < max && i < 8 && !res.brakWynikow; i++) {
          if (!(await evalSafe(page, scrollResultsToEnd))) break;
          await sleep(300);
          await this.#idle(page, 400, 6000);
          const more = await evalSafe(page, extractResults, max);
          if (!more || more.items.length <= res.items.length) break;
          res = more;
        }
        let items = res.items;
        let source = 'strona';
        if (!items.length && json.length) {
          items = itemsFromJson(json).slice(0, max);
          if (items.length) source = 'API (JSON)';
        }
        const diagnostic = items.length || res.brakWynikow ? null
          : await evalSafe(page, () => (document.body?.innerText || '').replace(/\s+/g, ' ').slice(0, 700));
        return {
          zapytanie: query || '(lista z linku)', kategoria: listUrl ? 'link' : kategoria, sort: listUrl ? 'jak w linku' : sort,
          url: page.url(), lacznie: res.lacznie, brakWynikow: !!res.brakWynikow,
          pominiete: res.pominiete || 0,
          zrodlo: source, czas_s: ((Date.now() - started) / 1000).toFixed(1), diagnostyka: diagnostic,
          wyniki: items.map((it) => ({ ...it, tytul: cleanTitle(it.tytul), typ: routeLabel(it.route), ...parseMeta(`${it.tytul}\n${it.opis}`) })),
        };
      } finally {
        this.#json.delete(page);
      }
    });
  }

  async #waitForResults(page, max, old) {
    const deadline = Date.now() + config.timeoutMs;
    let res = null;
    let idleAt = 0;
    while (Date.now() < deadline) {
      res = await evalSafe(page, extractResults, max);
      dbg('wyniki na stronie:', res ? res.items.length : 'brak odczytu', res?.brakWynikow ? '(brak wyników)' : '');
      if (res?.items.length && res.hrefs.some((h) => !old.has(h))) return res;
      if ((await evalSafe(page, pageState))?.state === 'login') return res;
      if (!idleAt) {
        await this.#idle(page, 500, 8000);
        idleAt = Date.now();
        continue;
      }
      // komunikat „brak wyników” dopiero po wyciszeniu sieci (wcześniej może być ze starej listy)
      if (res?.brakWynikow) return res;
      if (res?.items.length && Date.now() - idleAt > 5000) return res; // te same wyniki co poprzednio
      await sleep(250);
    }
    return res;
  }

  // ---------- dokument ----------

  // Poczekaj, aż treść dokumentu się wyrenderuje i przestanie rosnąć.
  async #waitForContent(page) {
    const deadline = Date.now() + config.timeoutMs;
    let doc = null;
    let lastLen = -1;
    let stable = 0;
    await this.#idle(page, 400, 10000);
    while (Date.now() < deadline) {
      doc = (await evalSafe(page, extractDocument)) || doc;
      const len = doc?.tekst?.length || 0;
      stable = len > 0 && len === lastLen ? stable + 1 : 0;
      if (stable >= (len > 300 ? 2 : 6)) break; // krótki tekst: dłużej sprawdzaj, czy to już cała treść
      if ((await evalSafe(page, pageState))?.state === 'login') break;
      lastLen = len;
      await sleep(300);
    }
    return doc;
  }

  async open({ url, nro, typ, od = 0, ile = 20000, szukaj = [], zapisz = false }) {
    const target = documentUrl({ url, nro, typ });
    const phrases = (Array.isArray(szukaj) ? szukaj : [szukaj]).filter(Boolean);
    const from = Math.max(0, Number(od) || 0);
    const size = Math.max(1000, Math.min(100000, Number(ile) || 20000));
    return this.#withPage(async (page) => {
      const started = Date.now();
      let doc = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        await this.#goto(page, target);
        doc = await this.#waitForContent(page);
        // sesja wygasła w trakcie (aplikacja przekierowała do logowania) — zaloguj i powtórz raz
        if ((await evalSafe(page, pageState))?.state !== 'login') break;
      }
      if (!doc) throw new Error(`Nie udało się odczytać dokumentu: ${target}`);
      let text = normalize(doc.tekst);
      // długie dokumenty (komentarze, akty) doładowują się przy przewijaniu
      const need = zapisz || phrases.length ? 2_000_000 : from + size;
      const maxSteps = zapisz || phrases.length ? 150 : 60;
      for (let i = 0, still = 0; text.length < need && i < maxSteps && still < 3; i++) {
        const moved = await evalSafe(page, scrollDocument);
        if (!moved && still) break;
        await sleep(200);
        await this.#idle(page, 250, 4000);
        const next = await evalSafe(page, extractDocument);
        const merged = next ? mergeText(text, normalize(next.tekst)) : text;
        still = merged.length === text.length ? still + 1 : 0;
        text = merged;
      }
      const result = {
        tytul: cleanTitle(doc.tytul), url: page.url(), znaki: text.length, od: from,
        tekst: text.slice(from, from + size), czas_s: null, zapisano: null, fragmenty: null,
        ...parseMeta(`${doc.tytul}\n${text.slice(0, 1500)}`),
      };
      if (phrases.length) {
        result.fragmenty = snippets(text, phrases).map((s) => ({
          fraza: s.fraza, trafienia: s.trafienia,
          fragmenty: s.fragmenty.map((w) => ({ od: w.start, tekst: text.slice(w.start, w.end) })),
        }));
      }
      if (zapisz) result.zapisano = saveDocument(result, text);
      result.czas_s = ((Date.now() - started) / 1000).toFixed(1);
      return result;
    });
  }

  // ---------- stan ----------

  async status({ sprawdzLogowanie = true } = {}) {
    let creds = null;
    let credError = null;
    try {
      const c = await getCredentials();
      creds = { login: c.login, zrodlo: c.source };
    } catch (e) {
      credError = e.message;
    }
    const out = {
      chrome: config.chrome, chromeIstnieje: fs.existsSync(config.chrome), profil: config.profileDir,
      zapis: config.saveDir, trybUkryty: config.headless, slad: config.trace ? config.traceFile : 'wyłączony',
      dane: creds || credError, przegladarkaDziala: !!this.#browser?.connected,
      ostatnieLogowanie: this.lastLogin?.toISOString() || null,
    };
    if (sprawdzLogowanie && creds) {
      const started = Date.now();
      await this.#withPage(async (page) => {
        await this.#goto(page, `${LEX_ORIGIN}/#/`);
        out.zalogowany = true;
        out.czasLogowania_s = ((Date.now() - started) / 1000).toFixed(1);
      });
      out.ostatnieLogowanie = this.lastLogin?.toISOString() || out.ostatnieLogowanie;
    }
    if (this.profileNote) out.uwaga = this.profileNote;
    return out;
  }
}

// Zapasowe odczytanie wyników z odpowiedzi API (gdy lista na stronie nie ma zwykłych linków).
export function itemsFromJson(bodies) {
  const items = new Map();
  const idKey = (o) => ['nro', 'documentNro', 'docNro', 'nroDoc'].find((k) => /^\d{6,14}$/.test(String(o[k] ?? '')));
  const titleOf = (o) => ['title', 'documentTitle', 'name', 'tytul', 'caption', 'header'].map((k) => o[k]).find((v) => typeof v === 'string' && v.trim());
  const walk = (v, depth) => {
    if (depth > 8 || !v || typeof v !== 'object') return;
    if (Array.isArray(v)) {
      for (const x of v) walk(x, depth + 1);
      return;
    }
    const k = idKey(v);
    const title = k && titleOf(v);
    if (k && title && !items.has(String(v[k]))) {
      const extra = Object.entries(v)
        .filter(([key, val]) => key !== k && typeof val === 'string' && val.length < 400 && !/^https?:/.test(val))
        .map(([key, val]) => `${key}: ${val}`).join(' · ');
      items.set(String(v[k]), { nro: String(v[k]), route: 'document', url: `${LEX_ORIGIN}/#/document/${v[k]}`,
        tytul: title.replace(/<[^>]+>/g, '').trim(), opis: extra.replace(/<[^>]+>/g, '').slice(0, 900) });
    }
    for (const val of Object.values(v)) walk(val, depth + 1);
  };
  for (const body of bodies) {
    try { walk(JSON.parse(body), 0); } catch {}
  }
  return [...items.values()];
}

function saveDocument(doc, fullText) {
  fs.mkdirSync(config.saveDir, { recursive: true });
  const day = new Date().toISOString().slice(0, 10);
  const name = fileSafe([doc.sygnatura, doc.tytul].filter(Boolean).join(' – '));
  const file = path.join(config.saveDir, `${day} ${name}.md`);
  const header = `# ${doc.tytul}\n\nŹródło: LEX (Wolters Kluwer), ${doc.url}\nPobrano: ${day}\n\n---\n\n`;
  fs.writeFileSync(file, header + fullText + '\n');
  return file;
}
