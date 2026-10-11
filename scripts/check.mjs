/* check.mjs — automated verification of dist/ (run after `npm run build`).
   Static: canonical, titles, JSON-LD parses, internal links resolve, every sitemap URL reachable
   from the home page through real <a href> links, no leftover #/ links; titles frozen in scripts/frozen-titles.json;
   service/pillar pages with the content standard (main[data-std]): legal-basis links only to eli.gov.pl, dates not
   in the future, dates in JSON-LD visible on the page, no FAQ question / H2 / paragraph copied from other pages.
   Browser: legacy #/ URLs land on the right path, client-side navigation works, no JS errors.
   --visual: full-page screenshots of key routes, production (old #/ URLs) vs local build, with pixel diff.
   Report: .check/report.json (+ .check/visual/*.png). Exit code 1 on any hard failure. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { createServer } from './serve.mjs';
import { sourceHash } from './source-hash.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, '.check');
const ORIGIN = 'https://www.mecenasodnieruchomosci.pl';
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const VISUAL = process.argv.includes('--visual');
fs.rmSync(path.join(OUT, 'visual'), { recursive: true, force: true });
fs.rmSync(path.join(OUT, 'report.json'), { force: true });
fs.mkdirSync(path.join(OUT, 'visual'), { recursive: true });

const fail = [], warn = [];
/* dist/ is committed and served as is: it must come from the current sources */
{
  const built = fs.existsSync(path.join(DIST, '.source-hash')) ? fs.readFileSync(path.join(DIST, '.source-hash'), 'utf8').trim() : '(none)';
  const now = sourceHash(ROOT);
  if (built !== now) fail.push(`dist/ is stale: built from sources ${built}, sources now ${now} (run npm run build)`);
}
const ISO_DATE = /^\d{4}-\d{2}-\d{2}($|T)/;
const jsonDates = (o, out = []) => { if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) { if (/^(date(Published|Modified|Created)|lastReviewed)$/.test(k)) out.push(v); else jsonDates(v, out); } return out; };
/* "today" in Polish time: toISOString() is UTC, so after 22:00 in summer today's date would look like the future */
const TODAY = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Warsaw' });
const jsonNodes = (o, out = []) => { if (Array.isArray(o)) o.forEach((x) => jsonNodes(x, out)); else if (o && typeof o === 'object') { if (o['@type']) out.push(o); Object.values(o).forEach((v) => jsonNodes(v, out)); } return out; };

/* Minimal HTML tree for the prerendered pages (React output: every element closed, attributes quoted). */
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' };
const decodeEnt = (t) => t.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : (ENT[e] !== undefined ? ENT[e] : m));
function parseHtml(h) {
  const root = { tag: '#root', attrs: {}, children: [], parent: null };
  let cur = root;
  const re = /<!--[\s\S]*?-->|<!doctype[^>]*>|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>|([^<]+)/gi;
  let m;
  while ((m = re.exec(h))) {
    if (m[4] !== undefined) { cur.children.push(m[4]); continue; }
    if (!m[2]) continue;
    const tag = m[2].toLowerCase();
    if (m[1]) { let n = cur; while (n && n.tag !== tag) n = n.parent; if (n && n.parent) cur = n.parent; continue; }
    const attrs = {};
    for (const a of m[3].matchAll(/([^\s=\/]+)(?:="([^"]*)"|='([^']*)')?/g)) attrs[a[1].toLowerCase()] = decodeEnt(a[2] !== undefined ? a[2] : a[3] !== undefined ? a[3] : '');
    const el = { tag, attrs, children: [], parent: cur };
    cur.children.push(el);
    if (tag === 'script' || tag === 'style') { const end = h.indexOf('</' + tag, re.lastIndex); el.children.push(h.slice(re.lastIndex, end < 0 ? h.length : end)); re.lastIndex = end < 0 ? h.length : end; continue; }
    if (!VOID.has(tag) && !/\/\s*$/.test(m[3])) cur = el;
  }
  return root;
}
const elText = (n) => typeof n === 'string' ? decodeEnt(n) : (n.tag === 'script' || n.tag === 'style' || n.tag === 'svg' ? '' : n.children.map(elText).join(''));
const norm = (t) => t.replace(/[\s\u00a0]+/g, ' ').trim();
const hasClass = (n, c) => typeof n !== 'string' && (' ' + (n.attrs.class || '') + ' ').includes(' ' + c + ' ');
const findAll = (n, pred, out = []) => { if (typeof n !== 'string') { if (pred(n)) out.push(n); n.children.forEach((ch) => findAll(ch, pred, out)); } return out; };
const closest = (n, pred) => { for (let x = n.parent; x; x = x.parent) if (pred(x)) return x; return null; };
const words = (t) => t.split(' ').filter(Boolean).length;
/* paragraphs that may repeat on many pages: the disclaimer under the document list and the default form leads */
const KT_PARAGRAPH_OK = new Set([
  'Nie masz wszystkich dokumentów? Napisz, co masz. Do wstępnej analizy i oferty zwykle wystarczy kilka zdań i jeden dokument. Wstępna analiza nie jest opinią prawną ani pełnym sprawdzeniem dokumentów; szczegółowa analiza to zakres oferty.',
  'Kupujesz, sprzedajesz, inwestujesz albo masz spór o nieruchomość? Opisz sprawę. W ciągu 24 h roboczych odpiszę, co trzeba w niej zrobić — audyt, pismo czy sprawa sądowa — i od razu prześlę ofertę z ceną i terminem.',
  'Napisz w kilku zdaniach, z czym się mierzysz — w ciągu 24 h roboczych odpiszę, co trzeba zrobić, i prześlę ofertę z ceną. Do jej akceptacji nic nie płacisz.',
].map(norm));
/* page text pieces compared across /uslugi/* pages (KT): FAQ questions, content H2, paragraphs and list items ≥ 12 words.
   Modules (report, calculator, plan alert, related services, guides) and the form itself are left out. */
function stdPieces(main) {
  const inModule = (n) => closest(n, (x) => hasClass(x, 'report-showcase') || hasClass(x, 'tool-teaser') || x.attrs.id === 'plan-alert' || hasClass(x, 'case-form-card'));
  const faq = findAll(main, (n) => hasClass(n, 'faq-acc-item')).map((it) => { const b = it.children.find((x) => typeof x !== 'string' && x.tag === 'button'); return b ? norm(elText(b)) : ''; }).filter(Boolean);
  const h2 = findAll(main, (n) => n.tag === 'h2' && (closest(n, (x) => hasClass(x, 'service-section-body')) || closest(n, (x) => x.tag === 'section' && findAll(x, (y) => hasClass(y, 'eyebrow') && norm(elText(y)) === 'Usługi w tym obszarze').length > 0))).map((n) => norm(elText(n)));
  const paras = findAll(main, (n) => ((n.tag === 'p' && (hasClass(n, 'lead') || hasClass(n, 'body')) && n.attrs['data-asof'] === undefined && n.attrs['data-updated'] === undefined) || hasClass(n, 'faq-acc-body') || (n.tag === 'li' && closest(n, (x) => hasClass(x, 'service-section-body')) && !closest(n, (x) => x.attrs['data-law-list'] !== undefined))) && !inModule(n))
    .map((n) => norm(elText(n))).filter((t) => words(t) >= 12 && !KT_PARAGRAPH_OK.has(t));
  return { faq, h2, paras };
}
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const toPath = (f) => { const r = '/' + path.relative(DIST, f).replace(/\.html$/, ''); return r === '/index' ? '/' : r; };
const exists = (p) => { const clean = p.split('#')[0].split('?')[0]; if (clean === '/') return true; return [clean, clean + '.html', clean + '/index.html'].some((c) => fs.existsSync(path.join(DIST, decodeURIComponent(c))) && fs.statSync(path.join(DIST, decodeURIComponent(c))).isFile()); };

/* ---------- static ---------- */
const pages = {};
for (const f of htmlFiles) {
  const p = toPath(f);
  const h = fs.readFileSync(f, 'utf8');
  const canonical = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || null;
  const title = ((h.match(/<title>([^<]*)<\/title>/) || [])[1] || '').trim();
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const noindex = /<meta name="robots" content="noindex"/.test(h);
  const links = [...h.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, '&'));
  const internal = links.filter((l) => l.startsWith('/') && !l.startsWith('//') && !/^\/(assets|vendor|api)\//.test(l) && !/\.[a-z0-9]{2,4}$/i.test(l.split('#')[0]));
  const hashLinks = links.filter((l) => l.startsWith('#/'));
  const jsonld = [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  jsonld.forEach((j, i) => {
    let data; try { data = JSON.parse(j); } catch (e) { return fail.push(`${p}: JSON-LD #${i} does not parse`); }
    jsonDates(data).filter((d) => !ISO_DATE.test(String(d))).forEach((d) => fail.push(`${p}: JSON-LD date "${d}" is not ISO 8601`));
  });
  /* FAQ: every answer in the HTML, not only the open one (crawlers do not click) */
  const faqItems = (h.match(/class="faq-acc-item"/g) || []).length, faqBodies = (h.match(/class="[^"]*\bfaq-acc-body\b/g) || []).length;
  if (faqItems !== faqBodies) fail.push(`${p}: ${faqItems} FAQ questions but ${faqBodies} answers in the HTML`);
  for (const [prop, val] of [['og:url', canonical], ['og:title', null], ['og:description', null]]) {
    const v = (h.match(new RegExp(`<meta property="${prop}" content="([^"]*)"`)) || [])[1];
    if (!noindex && (v == null || (val && v !== val))) fail.push(`${p}: ${prop} ${v == null ? 'missing' : v}`);
  }
  if (/<i [^>]*data-lucide=/.test(h)) fail.push(`${p}: unrendered lucide icon placeholder in HTML`);
  if (/text\/babel|babel\.min\.js|unpkg\.com/.test(h)) fail.push(`${p}: still references Babel/unpkg`);
  if (!noindex && canonical !== ORIGIN + (p === '/' ? '/' : p)) fail.push(`${p}: canonical ${canonical}`);
  if (!noindex && h1 !== 1) warn.push(`${p}: ${h1} <h1>`);
  if (hashLinks.length) fail.push(`${p}: legacy #/ links: ${[...new Set(hashLinks)].slice(0, 5).join(', ')}`);
  const bodyText = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  pages[p] = { title, desc, canonical, noindex, internal: [...new Set(internal.map((l) => l.split('#')[0]))], words: bodyText.split(/\s+/).filter(Boolean).length };

  /* service and pillar pages: parsed once for the standard checks below */
  if (p.startsWith('/uslugi/')) {
    const main = findAll(parseHtml(h), (n) => n.tag === 'main')[0];
    if (main) {
      const std = main.attrs['data-std'];
      const route = jsonld.map((j) => { try { return JSON.parse(j); } catch (e) { return null; } }).filter(Boolean);
      const nodes = jsonNodes(route);
      pages[p].std = std || null;
      pages[p].pieces = stdPieces(main);
      if (std !== undefined && (!/^\d{4}-\d{2}-\d{2}$/.test(std) || std > TODAY)) fail.push(`${p}: updated "${std}" is not a past ISO date (today ${TODAY}, Europe/Warsaw)`);
      /* „Podstawa prawna”: links only to eli.gov.pl, asOf/updated ISO and not in the future */
      for (const ul of findAll(main, (n) => n.attrs['data-law-list'] !== undefined)) {
        const as = findAll(ul, (n) => n.tag === 'a');
        if (!as.length) fail.push(`${p}: legal basis list without links`);
        as.filter((a) => !/^https:\/\/eli\.gov\.pl\/eli\/(DU|MP)\/\d{4}\/\d+\/ogl$/.test(a.attrs.href || '')).forEach((a) => fail.push(`${p}: legal basis link "${a.attrs.href}" is not an ELI address (https://eli.gov.pl/eli/DU/RRRR/poz/ogl)`));
      }
      const asOfEl = findAll(main, (n) => n.attrs['data-asof'] !== undefined || n.attrs['data-updated'] !== undefined);
      for (const el of asOfEl) for (const k of ['data-asof', 'data-updated']) {
        const v = el.attrs[k];
        if (v === undefined) continue;
        if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) fail.push(`${p}: ${k} "${v}" is not YYYY-MM-DD`);
        else if (v > TODAY) fail.push(`${p}: ${k} ${v} is in the future (today ${TODAY}, Europe/Warsaw)`);
      }
      /* JSON-LD dates must be the dates shown on the page */
      const shown = asOfEl[0] ? asOfEl[0].attrs : {};
      for (const n of nodes) {
        if (n.dateModified !== undefined && /WebPage|CollectionPage/.test(n['@type']) && n.dateModified !== shown['data-updated']) fail.push(`${p}: JSON-LD dateModified ${n.dateModified} is not the date shown on the page (${shown['data-updated'] || 'none'})`);
        if (n.lastReviewed !== undefined && n.lastReviewed !== shown['data-asof']) fail.push(`${p}: JSON-LD lastReviewed ${n.lastReviewed} is not the date shown on the page (${shown['data-asof'] || 'none'})`);
      }
      if (std === undefined && nodes.some((n) => /^(WebPage|CollectionPage|FAQPage)$/.test(n['@type']))) fail.push(`${p}: WebPage/FAQPage in JSON-LD, but the page data has no \`updated\` (main[data-std]); add updated: 'YYYY-MM-DD'`);
    }
  }
  /* FAQPage may not hold more questions than the page shows (+1 for „W skrócie”) */
  for (const j of jsonld) {
    let d; try { d = JSON.parse(j); } catch (e) { continue; }
    for (const n of jsonNodes(d).filter((x) => x['@type'] === 'FAQPage')) {
      const qn = (n.mainEntity || []).length;
      if (qn > faqItems + 1) fail.push(`${p}: FAQPage has ${qn} questions, the page shows ${faqItems}`);
    }
  }
}

/* titles frozen until the 23.10.2026 reading (Search Console); H1 changes go to h1Full, never to h1 */
const FROZEN = path.join(ROOT, 'scripts', 'frozen-titles.json');
if (fs.existsSync(FROZEN)) for (const [p, t] of Object.entries(JSON.parse(fs.readFileSync(FROZEN, 'utf8')))) {
  if (!pages[p]) fail.push(`${p}: frozen page missing from dist/`);
  else if (pages[p].title !== t) fail.push(`${p}: <title> "${pages[p].title}" ≠ zamrożony "${t}" (odczyt 23.10.2026; nowy H1 wpisz w h1Full, nie w h1)`);
}

/* KT: pages with the content standard may not repeat FAQ questions, content H2 or paragraphs of other service pages */
{
  const svc = Object.entries(pages).filter(([p, d]) => p.startsWith('/uslugi/') && d.pieces);
  const where = { faq: new Map(), h2: new Map(), paras: new Map() };
  for (const [p, d] of svc) for (const k of Object.keys(where)) for (const t of new Set(d.pieces[k])) where[k].set(t, (where[k].get(t) || []).concat(p));
  for (const [p, d] of svc.filter(([, x]) => x.std)) {
    for (const t of new Set(d.pieces.faq)) { const o = where.faq.get(t).filter((x) => x !== p); if (o.length) fail.push(`${p}: FAQ question also on ${o.slice(0, 3).join(', ')}${o.length > 3 ? ` (+${o.length - 3})` : ''}: "${t}"`); }
    if (d.pieces.faq.length !== new Set(d.pieces.faq).size) fail.push(`${p}: the same FAQ question twice on the page`);
    for (const t of new Set(d.pieces.h2)) { const o = where.h2.get(t); if (o.length > 3) fail.push(`${p}: H2 on ${o.length} service pages (max 3): "${t}"`); }
    for (const t of new Set(d.pieces.paras)) { const o = where.paras.get(t).filter((x) => x !== p); if (o.length) fail.push(`${p}: paragraph also on ${o.slice(0, 3).join(', ')}: "${t.slice(0, 90)}…"`); }
  }
}
for (const [p, d] of Object.entries(pages)) for (const l of d.internal) if (!exists(l)) fail.push(`${p}: broken internal link ${l}`);

const dupTitles = Object.entries(Object.entries(pages).filter(([, d]) => !d.noindex).reduce((a, [p, d]) => ((a[d.title] = a[d.title] || []).push(p), a), {})).filter(([, ps]) => ps.length > 1);
dupTitles.forEach(([t, ps]) => warn.push(`duplicate <title> "${t}": ${ps.join(', ')}`));

const sitemapXml = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const sitemap = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, '') || '/');
[...sitemapXml.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)].filter((m) => !ISO_DATE.test(m[1])).forEach((m) => fail.push(`sitemap: lastmod "${m[1]}" is not YYYY-MM-DD`));
sitemap.forEach((p) => { if (!pages[p]) fail.push(`sitemap URL without page: ${p}`); });
/* lastmod of a standard page = its `updated` (KF); other service pages have none */
{
  const lm = Object.fromEntries([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>(?:<lastmod>([^<]*)<\/lastmod>)?/g)].map((m) => [m[1].replace(ORIGIN, '') || '/', m[2] || null]));
  for (const [p, d] of Object.entries(pages)) if (p.startsWith('/uslugi/') && (lm[p] || null) !== (d.std || null)) fail.push(`${p}: sitemap lastmod ${lm[p] || 'none'} ≠ updated ${d.std || 'none'}`);
  Object.entries(lm).filter(([, v]) => v && v > TODAY).forEach(([p, v]) => fail.push(`sitemap: ${p} lastmod ${v} is in the future (today ${TODAY})`));
}

/* reachability through real links, from the home page */
const seen = new Set(['/']), depth = { '/': 0 }, q = ['/'];
while (q.length) { const p = q.shift(); for (const l of (pages[p] || { internal: [] }).internal) if (!seen.has(l) && pages[l]) { seen.add(l); depth[l] = depth[p] + 1; q.push(l); } }
const orphans = sitemap.filter((p) => !seen.has(p));
orphans.forEach((p) => fail.push(`not reachable via <a href> from /: ${p}`));
const deep = sitemap.filter((p) => depth[p] > 3);
if (deep.length) warn.push(`deeper than 3 clicks: ${deep.join(', ')}`);

/* ---------- browser ---------- */
const server = createServer(DIST, { fallback: '404.html', fallbackStatus: 404 });
await new Promise((r) => server.listen(0, r));
const BASE = `http://localhost:${server.address().port}`;
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--lang=pl-PL'] });
async function page(width = 1280, height = 900) {
  const pg = await browser.newPage();
  await pg.setViewport({ width, height });
  await pg.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.evaluateOnNewDocument(() => { try { localStorage.setItem('cookie-consent', 'denied'); } catch (e) {} });
  await pg.setRequestInterception(true);
  /* local pages: only local files; production pages (visual): block analytics and form endpoints */
  pg.on('request', (r) => { const u = r.url(); if (/googletagmanager|google-analytics|script\.google\.com|formspree/.test(u)) return r.abort(); if (u.startsWith('http://localhost') || u.startsWith('data:') || /mecenasodnieruchomosci\.pl|fonts\.(googleapis|gstatic)|unpkg\.com/.test(u)) return r.continue(); return r.abort(); });
  pg._errors = [];
  pg.on('pageerror', (e) => pg._errors.push(String(e)));
  pg.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) pg._errors.push(m.text()); });
  return pg;
}
const browserChecks = [];
{
  const pg = await page();
  const firstPost = sitemap.find((p) => p.startsWith('/blog/'));
  for (const legacy of ['/#/uslugi/sluzebnosci-odszkodowania', '/#/blog/' + firstPost.split('/')[2], '/#/kontakt']) {
    await pg.goto(BASE + legacy, { waitUntil: 'domcontentloaded', timeout: 60000 }); await pg.waitForSelector('#app main', { timeout: 30000 }); await new Promise((r) => setTimeout(r, 300));
    const got = await pg.evaluate(() => location.pathname + location.hash);
    const want = legacy.slice(2); /* '/#/kontakt' → '/kontakt' */
    browserChecks.push({ test: `legacy ${legacy}`, got, ok: got === want });
    if (got !== want) fail.push(`legacy hash ${legacy} → ${got} (want ${want})`);
  }
  /* client-side navigation: marker survives = no full reload */
  await pg.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 }); await pg.waitForSelector('#app main', { timeout: 30000 });
  await pg.evaluate(() => { window.__marker = 1; });
  const targets = await pg.$$eval('#app a[href^="/"]', (as) => [...new Set(as.map((a) => a.getAttribute('href')))].filter((h) => !/^\/(assets|vendor|api)\//.test(h) && h !== '/').slice(0, 6));
  for (const t of targets) {
    await pg.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 }); await pg.waitForSelector('#app main', { timeout: 30000 });
    await pg.evaluate(() => { window.__marker = 1; });
    const clicked = await pg.evaluate((t) => { const a = [...document.querySelectorAll(`#app a[href="${t}"]:not([target="_blank"])`)].find((x) => x.offsetParent !== null); if (!a) return false; a.click(); return true; }, t);
    if (!clicked) { warn.push(`client nav: no visible link to ${t} on /`); continue; }
    await new Promise((r) => setTimeout(r, 400));
    const res = await pg.evaluate(() => ({ path: location.pathname, marker: window.__marker === 1, h1: (document.querySelector('#app h1') || {}).innerText || '' }));
    const ok = res.path === t && res.marker;
    browserChecks.push({ test: `click ${t}`, ...res, ok });
    if (!ok) fail.push(`client nav to ${t}: path=${res.path} spa=${res.marker}`);
  }
  /* back button */
  await pg.goBack(); await new Promise((r) => setTimeout(r, 300));
  browserChecks.push({ test: 'back', path: await pg.evaluate(() => location.pathname) });
  if (pg._errors.length) fail.push(`JS errors during navigation: ${pg._errors.slice(0, 3).join(' | ')}`);
  await pg.close();
}
/* unknown path → 404 page with noindex */
{
  const pg = await page();
  const resp = await pg.goto(BASE + '/to-nie-istnieje', { waitUntil: 'domcontentloaded', timeout: 60000 }); await pg.waitForSelector('#app main', { timeout: 30000 });
  const label = await pg.evaluate(() => (document.querySelector('#app main') || {}).getAttribute && document.querySelector('#app main').getAttribute('data-screen-label'));
  browserChecks.push({ test: '404', status: resp.status(), label });
  if (resp.status() !== 404 || label !== '404') fail.push(`unknown path: status ${resp.status()}, main=${label}`);
  await pg.close();
}

/* ---------- visual (optional) ---------- */
const visual = [];
if (VISUAL) {
  const key = ['/', '/uslugi', '/uslugi/sluzebnosci-odszkodowania', '/uslugi/sluzebnosci-odszkodowania/odszkodowanie-sluzebnosc-przesylu', '/uslugi/warunki-zabudowy-planowanie/plan-ogolny', '/blog', sitemap.find((p) => p.startsWith('/blog/')), '/faq', '/kontakt', '/kalkulator-slupy', '/polityka-prywatnosci'];
  for (const [w, h, tag] of [[1280, 900, 'desktop'], [390, 844, 'mobile']]) {
    for (const p of key) {
      const shots = {};
      for (const [who, url] of [['prod', ORIGIN + '/' + (p === '/' ? '' : '#' + p)], ['local', BASE + p]]) {
        const pg = await page(w, h);
        await pg.goto(url, { waitUntil: 'load', timeout: 90000 }); await pg.waitForSelector('#app main', { timeout: 30000 });
        await new Promise((r) => setTimeout(r, 1200));
        await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
        await new Promise((r) => setTimeout(r, 600));
        /* screenshot only after finite CSS transitions (sticky nav growing back at the top) have finished */
        await pg.waitForFunction(() => window.scrollY === 0 && !document.getAnimations().some((a) => a.playState === 'running' && a.effect && a.effect.getComputedTiming().iterations !== Infinity), { timeout: 3000 }).catch(() => {});
        const file = path.join(OUT, 'visual', `${tag}${p.replace(/\//g, '_') || '_home'}.${who}.png`);
        await pg.screenshot({ path: file, fullPage: true });
        shots[who] = file;
        await pg.close();
      }
      const a = PNG.sync.read(fs.readFileSync(shots.prod)), b = PNG.sync.read(fs.readFileSync(shots.local));
      const W = Math.min(a.width, b.width), H = Math.min(a.height, b.height);
      const crop = (img) => { const o = new PNG({ width: W, height: H }); PNG.bitblt(img, o, 0, 0, W, H, 0, 0); return o; };
      const diff = new PNG({ width: W, height: H });
      const n = pixelmatch(crop(a).data, crop(b).data, diff.data, W, H, { threshold: 0.15 });
      const dfile = shots.local.replace('.local.png', '.diff.png');
      fs.writeFileSync(dfile, PNG.sync.write(diff));
      visual.push({ route: p, view: tag, diffPct: +(100 * n / (W * H)).toFixed(2), heightProd: a.height, heightLocal: b.height, prod: shots.prod, local: shots.local, diff: dfile });
    }
  }
}

await browser.close();
server.closeAllConnections();
server.close();
const report = { pages: Object.keys(pages).length, sitemap: sitemap.length, reachable: seen.size, maxDepth: Math.max(...Object.values(depth)), fail, warn, browserChecks, visual };
fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 1));
console.log(`check: ${report.pages} pages, sitemap ${report.sitemap}, reachable via links ${report.reachable}, max depth ${report.maxDepth}`);
console.log(`fail: ${fail.length}, warn: ${warn.length}${VISUAL ? `, visual: ${visual.map((v) => `${v.view}${v.route}=${v.diffPct}%`).join(' ')}` : ''}`);
fail.slice(0, 40).forEach((f) => console.log('  FAIL ' + f));
warn.slice(0, 20).forEach((w) => console.log('  warn ' + w));
process.exit(fail.length ? 1 : 0);
