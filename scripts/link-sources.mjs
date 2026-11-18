/* link-sources.mjs — plan SEO 2.7: w sekcji „Źródła” wpisów (listy ul/ol po h2 „Źródła”, do następnego h2)
   zamienia rozpoznane odwołania na linki markdown [tekst](https://…), które blogInline (pages.jsx) renderuje jako <a>.
   Uruchamiany ręcznie, nie w buildzie:
     node scripts/link-sources.mjs --dry      raport bez zapisu (rozpoznane / zlinkowane wg typu, przykłady)
     node scripts/link-sources.mjs            zapis do blog-data*.jsx
     --offline                                 tylko pamięć podręczna ELI (.check/eli-cache.json), bez zapytań do API
   Linkuje TYLKO adresy budowane deterministycznie i sprawdzone (18.11.2026):
   - akty: „Dz.U. 2026 poz. 781”, „Dz.U. z 2024 r. poz. 351”, „Dz.U. 2004 nr 268 poz. 2663”, to samo dla „M.P.”
     → https://eli.gov.pl/eli/DU|MP/<rok>/<poz>/ogl, wyłącznie gdy API Sejmu (api.sejm.gov.pl/eli/acts/…) zna akt;
     odwołania bez roku („Dz.U. Nr 84 poz. 386”) zostają bez linku;
   - Sąd Najwyższy: sygnatura repertorium SN poprzedzona datą orzeczenia z lat 2000-01-01…2016-06-21 (zakres SN w SAOS;
     nowszych orzeczeń SN SAOS nie ma, a sn.pl blokuje automaty, więc adresu nie da się potwierdzić)
     → https://www.saos.org.pl/search?signature=III+CZP+36%2F13;
   - NSA/WSA: sygnatury z lat 2004+ (OSK, FSK, GSK, OZ, OPS…, SA/xx, SAB/xx)
     → https://orzeczenia.nsa.gov.pl/cbo/find?q=SYGNATURA%5BII+OSK+1220%2F21%5D (wyszukiwanie CBOSA po sygnaturze).
   Zmienia wyłącznie tekst pozycji list w sekcji „Źródła”: wstawia [ … ](…) wokół rozpoznanego fragmentu. Po zapisie
   wczytuje dane ponownie i sprawdza, że po usunięciu linków każdy wpis jest identyczny z wersją sprzed zmiany.
   Ponowne uruchomienie jest bezpieczne (fragmenty już w linkach są pomijane). */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry');
const OFFLINE = process.argv.includes('--offline');
const CACHE = path.join(ROOT, '.check', 'eli-cache.json');

const num = (f) => +((f.match(/-(\d+)\.jsx$/) || [0, 1])[1]);
const FILES = fs.readdirSync(ROOT).filter((f) => /^blog-data(-\d+)?\.jsx$/.test(f)).sort((a, b) => num(a) - num(b));

const MD_LINK = /\[([^\]\n]+)\]\((https:\/\/[^\s()]+)\)/g;
const stripLinks = (s) => s.replace(MD_LINK, '$1');

/* akty: grupa 1 = wydawca, 2 = rok, 3 = pozycja */
const ACT_RE = /(Dz\.\s?U\.|M\.\s?P\.)\s(?:z\s)?(\d{4})(?:\sr\.)?(?:,?\s[Nn]r\s\d+,?)?\s?poz\.\s?(\d+)/g;
/* SN: repertoria występujące tylko w Sądzie Najwyższym */
const SN_SIG = '(?:I{1,3}|IV|V|VI|VII)\\s(?:CSKP|CSK|CZP|CNPP|CNP|CZ|CO|CKN|CK|CN|CRN|PK|UK|PZP|UZP|PSKP|PSK|KK|KZP|NSNc|NSNZP|NSNK|NSNP)\\s\\d+\\/\\d{2}';
const SN_ANY = new RegExp('\\b' + SN_SIG + '\\b', 'g');
const SN_DATED = new RegExp('(\\d{1,2})\\.(\\d{1,2})\\.(\\d{4})(?:\\s?r\\.)?,?\\s+(' + SN_SIG + ')\\b', 'g');
const SN_FROM = '2000-01-01', SN_TO = '2016-06-21';
/* sądy administracyjne (format od 2004) */
const ADM_RE = /\b((?:I{1,3}|IV|V|VI|VII|VIII)\s(?:OSK|FSK|GSK|OZ|OPS|FPS|GPS|OW|OSP|FZ|GZ|SA\/[A-Z][a-z]{1,2}|SAB\/[A-Z][a-z]{1,2})\s\d+\/(\d{2}))\b/g;

const plus = (s) => encodeURIComponent(s).replace(/%20/g, '+');
const eliUrl = (pub, y, pos) => `https://eli.gov.pl/eli/${pub}/${y}/${pos}/ogl`;
const saosUrl = (sig) => 'https://www.saos.org.pl/search?signature=' + plus(sig);
const cbosaUrl = (sig) => 'https://orzeczenia.nsa.gov.pl/cbo/find?q=SYGNATURA%5B' + plus(sig) + '%5D';
const pubOf = (s) => (/^M/.test(s) ? 'MP' : 'DU');

/* ---------- 1. pozycje list w sekcjach „Źródła” (numery linii w źródle) ---------- */
const ITEM_LINE = /^(\s*)'((?:[^'\\]|\\.)*)'(,?\s*)$/;
function sourceItems(lines) {
  const out = [];
  let inSrc = false, inList = false;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*\['h2', 'Źródła'\],\s*$/.test(l)) { inSrc = true; inList = false; continue; }
    if (!inSrc) continue;
    if (/^\s*\['h2',/.test(l) || (!inList && /^\s*\],?\s*$/.test(l))) { inSrc = false; continue; }
    if (/^\s*\['(ul|ol)', \[\s*$/.test(l)) { inList = true; continue; }
    if (inList && /^\s*\]\],?\s*$/.test(l)) { inList = false; continue; }
    if (inList) {
      const m = ITEM_LINE.exec(l);
      if (!m) throw new Error(`nieoczekiwana linia w liście Źródeł: ${l.slice(0, 120)}`);
      out.push({ i, indent: m[1], text: m[2], tail: m[3] });
    }
  }
  return out;
}

/* ---------- 2. rozpoznanie odwołań w tekście (poza istniejącymi linkami) ---------- */
function segments(text) {
  const segs = []; let last = 0;
  for (const m of text.matchAll(MD_LINK)) { if (m.index > last) segs.push({ t: text.slice(last, m.index) }); segs.push({ t: m[0], link: true }); last = m.index + m[0].length; }
  if (last < text.length) segs.push({ t: text.slice(last) });
  return segs;
}
function findRefs(seg) {
  const refs = [];
  for (const m of seg.matchAll(ACT_RE)) refs.push({ type: 'akt', start: m.index, end: m.index + m[0].length, label: m[0], pub: pubOf(m[1]), y: m[2], pos: m[3] });
  const dated = new Map();
  for (const m of seg.matchAll(SN_DATED)) {
    const iso = `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
    dated.set(m.index + m[0].length - m[4].length, iso);
  }
  for (const m of seg.matchAll(SN_ANY)) refs.push({ type: 'SN', start: m.index, end: m.index + m[0].length, label: m[0], date: dated.get(m.index) || null });
  for (const m of seg.matchAll(ADM_RE)) refs.push({ type: 'NSA/WSA', start: m.index, end: m.index + m[0].length, label: m[1], yy: +m[2] });
  return refs.sort((a, b) => a.start - b.start);
}

/* ---------- 3. ELI: czy akt istnieje (API Sejmu), z pamięcią podręczną ---------- */
let cache = {};
try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch (e) { /* brak pamięci */ }
async function eliExists(pub, y, pos) {
  const k = `${pub}/${y}/${pos}`;
  if (k in cache) return cache[k];
  if (OFFLINE) return null;
  await new Promise((r) => setTimeout(r, 150));
  const res = await fetch(`https://api.sejm.gov.pl/eli/acts/${k}`, { headers: { accept: 'application/json' } });
  if (res.status === 200) { const j = await res.json(); cache[k] = { title: j.title, display: j.displayAddress }; }
  else if (res.status === 404) cache[k] = false;
  else throw new Error(`api.sejm.gov.pl ${k}: HTTP ${res.status}`);
  return cache[k];
}

/* ---------- 4. przebieg ---------- */
const stats = {}; const bump = (t, k) => { stats[t] = stats[t] || { rozpoznane: 0, zlinkowane: 0, pominiete: {} }; if (k === 'ok') { stats[t].rozpoznane++; stats[t].zlinkowane++; } else { stats[t].rozpoznane++; stats[t].pominiete[k] = (stats[t].pominiete[k] || 0) + 1; } };
const examples = []; const skipped = [];
let changedItems = 0;
const oldTexts = {};
for (const f of FILES) {
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  oldTexts[f] = src;
  const lines = src.split('\n');
  for (const it of sourceItems(lines)) {
    let out = '';
    for (const s of segments(it.text)) {
      if (s.link) { out += s.t; continue; }
      let last = 0;
      for (const r of findRefs(s.t)) {
        if (r.start < last) continue;
        let url = null, why = null;
        if (r.type === 'akt') {
          const e = await eliExists(r.pub, r.y, r.pos);
          if (e) url = eliUrl(r.pub, r.y, r.pos); else why = e === null ? 'brak w pamięci (offline)' : 'akt nieznany w API ELI';
        } else if (r.type === 'SN') {
          if (!r.date) why = 'bez daty tuż przed sygnaturą';
          else if (r.date < SN_FROM || r.date > SN_TO) why = 'data poza zakresem SAOS (2000-01-01…2016-06-21)';
          else url = saosUrl(r.label);
        } else {
          if (r.yy < 4 || r.yy > 26) why = 'sygnatura sprzed 2004';
          else url = cbosaUrl(r.label);
        }
        bump(r.type, url ? 'ok' : why);
        if (!url) { if (skipped.length < 400) skipped.push(`${f}:${it.i + 1} [${r.type}] ${r.label}${r.date ? ' (' + r.date + ')' : ''}: ${why}`); continue; }
        out += s.t.slice(last, r.start) + `[${r.label}](${url})`;
        last = r.end;
      }
      out += s.t.slice(last);
    }
    if (out !== it.text) {
      changedItems++;
      if (examples.length < 6) examples.push(`${f}:${it.i + 1}\n  - ${it.text}\n  + ${out}`);
      lines[it.i] = `${it.indent}'${out}'${it.tail}`;
    }
  }
  if (!DRY) fs.writeFileSync(path.join(ROOT, f), lines.join('\n'));
}
fs.mkdirSync(path.dirname(CACHE), { recursive: true });
fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));

/* ---------- 5. kontrola: po usunięciu linków dane wpisów są takie jak przed zmianą ---------- */
function loadBlog(read) {
  const ctx = { window: {} }; vm.createContext(ctx);
  for (const f of FILES) vm.runInContext(read(f), ctx, { filename: f });
  return ctx.window.BLOG;
}
if (!DRY) {
  const before = loadBlog((f) => oldTexts[f]);
  const after = loadBlog((f) => fs.readFileSync(path.join(ROOT, f), 'utf8'));
  const strip = (v) => (typeof v === 'string' ? stripLinks(v) : Array.isArray(v) ? v.map(strip) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, strip(x)])) : v);
  const a = JSON.stringify(before.map(strip)), b = JSON.stringify(after.map(strip));
  if (before.length !== after.length || a !== b) { console.error('BŁĄD: po usunięciu linków treść różni się od wersji sprzed zmiany — przywracam pliki.'); for (const f of FILES) fs.writeFileSync(path.join(ROOT, f), oldTexts[f]); process.exit(1); }
  /* poza sekcjami Źródła nie może przybyć żaden link */
  const outside = (blog) => blog.flatMap((p) => { const body = p.body || []; const s = body.findIndex((x) => x[0] === 'h2' && x[1] === 'Źródła'); return body.filter((x, i) => s < 0 || i < s).filter((x) => /\]\(https:\/\//.test(JSON.stringify(x))).map(() => p.slug); });
  const linksOutside = outside(after), linksOutsideBefore = outside(before);
  if (linksOutside.length !== linksOutsideBefore.length) { console.error('BŁĄD: link poza sekcją Źródła — przywracam pliki.'); for (const f of FILES) fs.writeFileSync(path.join(ROOT, f), oldTexts[f]); process.exit(1); }
}

console.log(`${DRY ? '[dry] ' : ''}pliki: ${FILES.length}, zmienione pozycje list: ${changedItems}`);
for (const [t, s] of Object.entries(stats)) {
  console.log(`  ${t}: rozpoznane ${s.rozpoznane}, zlinkowane ${s.zlinkowane}`);
  for (const [k, n] of Object.entries(s.pominiete)) console.log(`      bez linku – ${k}: ${n}`);
}
console.log('\nPrzykłady:\n' + examples.join('\n'));
if (process.argv.includes('--skipped')) console.log('\nBez linku:\n' + skipped.join('\n'));
