/* extract.mjs — funkcje wykonywane wewnątrz strony LEX (page.evaluate). Muszą być samowystarczalne:
   Puppeteer przesyła do przeglądarki sam tekst funkcji, bez importów i zmiennych z modułu.
   Nie zależą od klas CSS aplikacji LEX (mogą się zmieniać): wyniki rozpoznają po linkach do dokumentów
   (#/jurisprudence/<nro>, #/commentary/<nro>…, albo adresy openLEX …-<nro>), treść po największym bloku tekstu. */

// Stan strony podczas logowania i ładowania.
export function pageState() {
  const host = location.host;
  if (/wolterskluwer\.pl$/.test(host)) {
    if (!document.querySelector('#password, input[type="password"]')) return { state: null };
    const errors = [...document.querySelectorAll('.validation-summary-errors, .field-validation-error, .wk-field-error, .wk-alert, .alert, [class*="error"]')]
      .map((e) => (e.innerText || '').trim())
      .filter((t) => t && t.length < 400);
    return errors.length ? { state: 'login-error', message: [...new Set(errors)].join(' | ') } : { state: 'login' };
  }
  if (host === 'sip.lex.pl' && !/^\/(borg_login|\.sso)/.test(location.pathname) && document.readyState !== 'loading') {
    return { state: 'app' };
  }
  return { state: null };
}

// Lista wyników wyszukiwania widoczna na stronie.
export function extractResults(max) {
  const DESKTOP = /#\/([a-z][a-z-]*)\/(\d{6,14})(?=[/?&#]|$)/;
  const MOBILE = /^(?:https:\/\/sip\.lex\.pl)?\/(orzeczenia-i-pisma-urzedowe|komentarze-i-publikacje|akty-prawne|pytania-i-odpowiedzi|wzory-i-narzedzia|procedury|analizy)\/[^?#]*?-(\d{8,14})(?=[/?#]|$)/;
  const MOBILE_ROUTE = {
    'orzeczenia-i-pisma-urzedowe': 'jurisprudence', 'komentarze-i-publikacje': 'publication', 'akty-prawne': 'act',
    'pytania-i-odpowiedzi': 'question-and-answer', 'wzory-i-narzedzia': 'template', procedury: 'procedure', analizy: 'analysis',
  };
  const NOT_DOCS = new Set(['search', 'search-by-category', 'search-relation', 'search-resources', 'search-codexes']);
  const CHROME = 'header, nav, footer, [role="navigation"], [role="banner"], [role="contentinfo"]';
  const parse = (href) => {
    if (!href) return null;
    let m = DESKTOP.exec(href);
    if (m && !NOT_DOCS.has(m[1])) return { route: m[1], nro: m[2] };
    m = MOBILE.exec(href);
    return m ? { route: MOBILE_ROUTE[m[1]] || 'document', nro: m[2] } : null;
  };
  const text = (el) => (el.innerText || el.textContent || '').replace(/\u00a0/g, ' ').replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();

  const anchors = [...document.querySelectorAll('a[href]')]
    .map((a) => ({ a, doc: parse(a.getAttribute('href')) }))
    .filter((x) => x.doc && !x.a.closest(CHROME));

  // Kontener wyniku: najwyższy przodek, który zawiera linki tylko do tego jednego dokumentu.
  // Jedno przejście w górę od każdego linku: element → nro jego linków (MULTI, gdy różne dokumenty).
  const MULTI = '*';
  const owner = new Map();
  for (const { a, doc } of anchors) {
    for (let el = a.parentElement; el && el !== document.body; el = el.parentElement) {
      const cur = owner.get(el);
      if (cur === MULTI) break; // wyżej też już są różne dokumenty
      if (cur === undefined) owner.set(el, doc.nro);
      else if (cur !== doc.nro) owner.set(el, MULTI);
      else break; // ta gałąź jest już opisana
    }
  }
  const container = (a, nro) => {
    let el = a;
    while (el.parentElement && el.parentElement !== document.body && owner.get(el.parentElement) === nro
      && el.parentElement.textContent.length < 4000) el = el.parentElement;
    return el;
  };

  const byNro = new Map();
  const groups = new Map(); // rodzic kontenera → numer grupy (lista wyników, panel boczny…)
  for (const { a, doc } of anchors) {
    const title = text(a);
    const prev = byNro.get(doc.nro);
    if (prev) {
      if (title.length > prev.tytul.length) prev.tytul = title;
      continue;
    }
    const box = container(a, doc.nro);
    if (!groups.has(box.parentElement)) groups.set(box.parentElement, groups.size);
    byNro.set(doc.nro, {
      nro: doc.nro,
      route: doc.route,
      url: new URL(a.getAttribute('href'), location.href).href,
      tytul: title,
      opis: text(box).slice(0, 900),
      grupa: groups.get(box.parentElement),
    });
  }

  // Lista wyników to grupa z najdłuższymi opisami (wyniki mają tezy i metryki, panele „ostatnio otwierane” same tytuły).
  // Inne grupy zostają, jeśli wyglądają podobnie (np. wyniki podzielone na sekcje).
  const all = [...byNro.values()];
  const stats = new Map();
  for (const it of all) {
    const s = stats.get(it.grupa) || { n: 0, len: 0 };
    s.n++;
    s.len += it.opis.length;
    stats.set(it.grupa, s);
  }
  let best = null;
  for (const [g, s] of stats) if (!best || s.len > stats.get(best).len) best = g;
  const bestAvg = best === null ? 0 : stats.get(best).len / stats.get(best).n;
  const keep = new Set([...stats].filter(([g, s]) => g === best || (s.n >= 2 && s.len / s.n >= bestAvg * 0.6)).map(([g]) => g));
  const items = all.filter((it) => keep.has(it.grupa));

  const body = text(document.body);
  // „90 z 3302206 wyników”, „Znaleziono 1 234 dokumenty”, „1 234 wyników”
  const total = /\bz\s+(\d[\d \u00a0.]{0,12}?)\s+(?:wyników|wyniki|dokumentów|dokumenty)/i.exec(body)
    || /znaleziono\D{0,20}?(\d[\d \u00a0.]{0,12}?)\s+(?:wyników|wyniki|wynik|dokumentów|dokumenty|dokument)/i.exec(body)
    || /(\d[\d \u00a0.]{0,12}?)\s+(?:wyników|dokumentów)(?![a-ząćęłńóśźż])/i.exec(body);
  return {
    items: items.slice(0, max).map(({ grupa, ...it }) => it),
    pominiete: all.length - items.length,
    lacznie: total ? total[1].replace(/[\s.\u00a0]/g, '') : null,
    brakWynikow: /brak wyników|nie znaleziono (?:żadnych )?(?:dokumentów|wyników)|0 wyników/i.test(body),
    hrefs: items.map((it) => it.url),
  };
}

// Główna treść otwartego dokumentu (największy blok tekstu, bez menu i nagłówków aplikacji).
export function extractDocument() {
  const text = (el) => (el.innerText || '').replace(/\u00a0/g, ' ');
  const SELECTORS = ['[class*="document-content"]', '[class*="documentContent"]', '[class*="document-body"]',
    '[class*="doc-content"]', '[class*="document-text"]', '[class*="content-text"]', 'article', 'main', '[role="main"]'];
  const seen = new Set();
  const candidates = [];
  for (const sel of SELECTORS) {
    for (const el of document.querySelectorAll(sel)) {
      if (seen.has(el)) continue;
      seen.add(el);
      candidates.push({ el, len: text(el).length });
    }
  }
  candidates.sort((x, y) => y.len - x.len);
  let best = candidates[0];
  if (best) {
    // zejdź do węższego kandydata, jeśli ma prawie cały tekst (odcina spis treści i panele boczne)
    for (;;) {
      const inner = candidates.find((c) => c.el !== best.el && best.el.contains(c.el) && c.len >= best.len * 0.7);
      if (!inner) break;
      best = inner;
    }
  }
  if (!best || best.len < 300) {
    const clone = document.body.cloneNode(true);
    clone.querySelectorAll('header, nav, footer, aside, script, style, noscript, [role="navigation"], [role="banner"], '
      + '#onetrust-consent-sdk, [id*="cookie"], [class*="cookie"], [id*="consent"], [class*="consent"]').forEach((e) => e.remove());
    best = { el: null, len: 0, fallback: (clone.textContent || '').replace(/\u00a0/g, ' ') };
  }
  window.__lexContent = best.el;
  const h1 = document.querySelector('h1');
  return {
    tytul: ((h1 && h1.innerText) || document.title || '').trim(),
    tekst: best.el ? text(best.el) : best.fallback,
    url: location.href,
  };
}

// Przewiń treść dokumentu o ekran (dla dokumentów doładowywanych przy przewijaniu).
// Zwraca 'moved', 'end' (doszło do końca) albo null (nie było czego przewijać).
export function scrollDocument() {
  const scrollable = (el) => {
    for (let e = el; e && e !== document.body; e = e.parentElement) {
      const s = getComputedStyle(e);
      if (/(auto|scroll)/.test(s.overflowY) && e.scrollHeight > e.clientHeight + 10) return e;
    }
    return document.scrollingElement || document.documentElement;
  };
  const box = scrollable(window.__lexContent || document.querySelector('main') || document.body);
  const before = box.scrollTop;
  box.scrollTop = before + Math.max(200, box.clientHeight * 0.85);
  if (box.scrollTop === before) return null;
  return box.scrollTop + box.clientHeight >= box.scrollHeight - 5 ? 'end' : 'moved';
}

// Przewiń listę wyników na koniec (doładowanie kolejnych wyników).
export function scrollResultsToEnd() {
  const boxes = [document.scrollingElement, ...document.querySelectorAll('*')]
    .filter((e) => e && e.scrollHeight > e.clientHeight + 50 && (e === document.scrollingElement || /(auto|scroll)/.test(getComputedStyle(e).overflowY)));
  let moved = false;
  for (const b of boxes) {
    const before = b.scrollTop;
    b.scrollTop = b.scrollHeight;
    if (b.scrollTop !== before) moved = true;
  }
  return moved;
}
