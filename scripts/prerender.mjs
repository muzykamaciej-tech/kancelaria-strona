/* prerender.mjs — renders every route in headless Chrome and saves the finished HTML,
   so Google and AI crawlers (which do not run JS) get the full content, title, canonical and JSON-LD.
   Also writes sitemap.xml, robots.txt and llms.txt from the same data the site renders.
   Works in .dist-build/ (from build.mjs) and replaces dist/ only when every route rendered cleanly. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { createServer } from './serve.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, '.dist-build');
const FINAL = path.join(ROOT, 'dist');
const ORIGIN = 'https://www.mecenasodnieruchomosci.pl';
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const CONCURRENCY = 4;

if (!fs.existsSync(path.join(DIST, '__shell.html'))) throw new Error('run scripts/build.mjs first (no .dist-build/__shell.html)');

/* live Google rating so the prerendered badge matches production */
let rating = { rating: 5, count: 63 };
try {
  const r = await fetch(ORIGIN + '/api/google-rating', { signal: AbortSignal.timeout(8000) });
  const j = await r.json();
  if (typeof j.rating === 'number' && typeof j.count === 'number') rating = j;
} catch (e) { console.warn('google-rating: using fallback', rating); }

const server = createServer(DIST, { fallback: '__shell.html', fallbackStatus: 200, api: { '/api/google-rating': rating } });
await new Promise((r) => server.listen(0, r));
const BASE = `http://localhost:${server.address().port}`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--lang=pl-PL'] });

async function newPage() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.evaluateOnNewDocument(() => { window.__PRERENDER__ = true; });
  await page.setRequestInterception(true);
  /* only our own files: no analytics, fonts or third parties can stall a render */
  page.on('request', (req) => (req.url().startsWith(BASE) || req.url().startsWith('data:') ? req.continue() : req.abort()));
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
  page._errors = errors;
  return page;
}

/* 1. discover routes from the data the app itself uses */
const probe = await newPage();
await probe.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 });
await probe.waitForSelector('#app main', { timeout: 30000 });
const data = await probe.evaluate(() => ({
  blocks: window.SERVICE_BLOCKS.map((b) => ({ id: b.id, title: b.title, tagline: b.tagline || '',
    updated: ((window.BLOCK_CONTENT || {})[b.id] || {}).updated || null,
    services: b.services.map((s) => ({ slug: s.slug, title: s.title, desc: s.desc || '', updated: ((window.SERVICE_CONTENT || {})[s.slug] || {}).updated || null })) })),
  blog: (window.BLOG || []).map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt || '', metaDesc: p.metaDesc || '', iso: p.iso, modified: window.postModifiedIso(p), category: p.category || '',
    cat: (window.blogCategoryOfPost(p) || {}).id || '' })),
  blogCats: window.BLOG_CATEGORIES.filter((c) => window.postsInCategory(c).length).map((c) => ({ id: c.id, title: c.title, desc: c.desc,
    modified: window.postsInCategory(c).map((p) => window.postModifiedIso(p)).sort().pop() })),
  offers: Object.entries(window.OFFERS || {}).map(([slug, o]) => ({ slug, title: o.metaTitle, desc: o.metaDesc, updated: o.updated || null })),
  downloads: Object.values(window.DOWNLOADS || {}).map((d) => ({ href: d.href, title: d.title })),
  uncategorized: (window.BLOG || []).filter((p) => !window.blogCategoryOfPost(p)).map((p) => p.slug + ' (' + p.category + ')'),
}));
await probe.close();

/* lastmod only where there is a real date (blog: published/updated; service and pillar pages: `updated`, set by hand
   when that page's content changes). A build date on every other page would change on each build without any
   content change, and Google stops trusting lastmod that is not accurate. */
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const routes = [
  { path: '/', priority: '1.0' },
  { path: '/uslugi', priority: '0.8' },
  ...data.blocks.flatMap((b) => [
    { path: `/uslugi/${b.id}`, priority: '0.8', lastmod: b.updated || undefined },
    ...b.services.map((s) => ({ path: `/uslugi/${b.id}/${s.slug}`, priority: '0.7', lastmod: s.updated || undefined })),
  ]),
  ...data.offers.map((o) => ({ path: `/oferta/${o.slug}`, priority: '0.7', lastmod: o.updated || undefined })),
  { path: '/blog', priority: '0.7' },
  ...data.blogCats.map((c) => ({ path: `/blog/kategoria/${c.id}`, lastmod: c.modified, priority: '0.6' })),
  ...data.blog.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.modified, priority: '0.6', blogSlug: p.slug })),
  { path: '/o-mnie', priority: '0.7' },
  { path: '/kontakt', priority: '0.6' },
  { path: '/faq', priority: '0.5' },
  { path: '/kalkulator-slupy', priority: '0.6' },
  { path: '/polityka-prywatnosci', priority: '0.2' },
  { path: '/regulamin', priority: '0.2' },
  { path: '/rodo', priority: '0.2' },
  { path: '/404', noindex: true },
];

function outFile(p) {
  if (p === '/') return 'index.html';
  if (p === '/404') return '404.html';
  return p.slice(1) + '.html';
}

/* 2. render each route */
const failures = [];
/* every post must land in a Skarbnica category (pages.jsx BLOG_CATEGORIES) — otherwise /blog has no link to it */
if (data.uncategorized.length) failures.push(`posts without a /blog category (add the category to BLOG_CATEGORIES in pages.jsx): ${data.uncategorized.join(', ')}`);
async function render(page, r) {
  page._errors.length = 0;
  await page.goto(BASE + r.path, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#app main', { timeout: 30000 });
  /* wpis, usługa, filar: treść z /content/<rodzaj>/<klucz>.<hash>.js musi się wczytać (app.jsx: loadContent) */
  await page.waitForFunction(() => !document.querySelector('#app [data-content-loading]'), { timeout: 30000 });
  await page.waitForFunction(() => !document.querySelector('#app i[data-lucide]'), { timeout: 5000 }).catch(() => {});
  await new Promise((res) => setTimeout(res, 250));
  const res = await page.evaluate((isNotFound) => {
    const main = document.querySelector('#app main');
    const is404 = main && main.getAttribute('data-screen-label') === '404';
    /* any leftover legacy hash links → real paths */
    document.querySelectorAll('a[href^="#/"]').forEach((a) => a.setAttribute('href', a.getAttribute('href').slice(1).replace(/\/+$/, '') || '/'));
    /* until the app mounts, Enter in a field must not submit the form natively (GET with the typed text in the URL) */
    document.querySelectorAll('#app form').forEach((f) => f.setAttribute('onsubmit', 'return false'));
    /* treść strony wczytana przez aplikację → <script defer> przed app.js: na wejściu bezpośrednim przychodzi równolegle
       z app.js i jest gotowa przed pierwszym renderem (bez stanu ładowania) */
    const app = document.querySelector('script[src^="/app."]');
    document.querySelectorAll('script[data-content-chunk]').forEach((s) => { s.defer = true; app.parentNode.insertBefore(s, app); });
    /* LCP: obraz z fetchpriority="high" (zdjęcie na stronie głównej, okładka wpisu) → <link rel="preload"> na początku <head>,
       żeby pobieranie ruszyło przed arkuszami stylów; z <picture> bierze pierwsze <source> (AVIF) z jego typem */
    const lcpImg = document.querySelector('#app img[fetchpriority="high"]');
    if (lcpImg) {
      const source = lcpImg.parentElement.tagName === 'PICTURE' ? lcpImg.parentElement.querySelector('source[srcset]') : null;
      const from = source || lcpImg;
      const link = document.createElement('link');
      link.rel = 'preload'; link.as = 'image'; link.setAttribute('fetchpriority', 'high');
      if (from.getAttribute('srcset')) {
        link.setAttribute('imagesrcset', from.getAttribute('srcset'));
        if (from.getAttribute('sizes')) link.setAttribute('imagesizes', from.getAttribute('sizes'));
      } else link.href = from.getAttribute('src');
      if (source && source.type) link.type = source.type;
      document.head.insertBefore(link, document.head.querySelector('link[rel="preconnect"], link[rel="stylesheet"]'));
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    return {
      icons: [...new Set([...document.querySelectorAll('#app i[data-lucide]')].map((i) => i.getAttribute('data-lucide')))],
      is404, wrong404: is404 !== isNotFound,
      title: document.title,
      canonical: canonical && canonical.href,
      words: (main ? main.innerText : '').split(/\s+/).filter(Boolean).length,
      html: '<!doctype html>\n' + document.documentElement.outerHTML,
    };
  }, !!r.noindex);
  if (res.wrong404) failures.push(`${r.path}: rendered ${res.is404 ? '404' : 'content'} unexpectedly`);
  if (res.icons.length) failures.push(`${r.path}: lucide icons not rendered (missing from the subset?): ${res.icons.join(', ')}`);
  if (!r.noindex && res.canonical !== ORIGIN + r.path) failures.push(`${r.path}: canonical ${res.canonical}`);
  if (page._errors.length) failures.push(`${r.path}: JS errors: ${page._errors.slice(0, 3).join(' | ')}`);
  const file = path.join(DIST, outFile(r.path));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, res.html);
  r.words = res.words; r.title = res.title;
  /* llms.txt: blok „Krótka odpowiedź” wpisu (treść wpisu jest tylko w jego pliku content/, nie w app.js) */
  if (r.blogSlug) r.shortAnswer = await page.evaluate((slug) => {
    const p = (window.BLOG || []).find((x) => x.slug === slug);
    const b = ((p && p.body) || []).find((x) => x && (x[0] === 'lead' || x[0] === 'p') && /^\*\*Krótka odpowiedź\.?\*\*/.test(String(x[1])));
    return b ? String(b[1]) : '';
  }, r.blogSlug);
}

const queue = [...routes];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  const page = await newPage();
  while (queue.length) {
    const r = queue.shift();
    try { await render(page, r); }
    catch (e) {
      try { await render(page, r); } /* one retry (sleep/wake, slow machine) */
      catch (e2) { failures.push(`${r.path}: ${e2.message}`); }
    }
  }
  await page.close();
}));
await browser.close();
server.closeAllConnections();
server.close();
fs.rmSync(path.join(DIST, '__shell.html'));

/* 3. sitemap.xml, robots.txt, llms.txt */
const indexable = routes.filter((r) => !r.noindex);
indexable.filter((r) => r.lastmod && !ISO_DATE.test(r.lastmod)).forEach((r) => failures.push(`${r.path}: lastmod "${r.lastmod}" is not YYYY-MM-DD`));
/* a date from the future is a typo; "today" in Polish time (toISOString() is UTC: after 22:00 in summer today would look like the future) */
const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Warsaw' });
indexable.filter((r) => r.lastmod && r.lastmod > today).forEach((r) => failures.push(`${r.path}: lastmod ${r.lastmod} is in the future (today ${today}, Europe/Warsaw)`));
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexable.map((r) => `  <url><loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc>${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : ''}<priority>${r.priority}</priority></url>`).join('\n') +
  `\n</urlset>\n`);

fs.writeFileSync(path.join(DIST, 'robots.txt'),
  `# mecenasodnieruchomosci.pl — treści są otwarte dla wyszukiwarek i asystentów AI\nUser-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);

const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
/* opis wpisu w llms.txt: metaDesc, a bez niego pierwsze zdanie bloku „Krótka odpowiedź” (do ok. 160 znaków).
   Nie excerpt: we wpisach z WIX to narracyjny wstęp („Dostajesz decyzję…”), który nie mówi, o czym jest wpis;
   wtedy zostaje sam tytuł. */
const shorten = (s, n = 160) => { s = clean(s); if (s.length <= n) return s; const cut = s.slice(0, n - 1); return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:–-]+$/, '') + '…'; };
const shortAnswerOf = new Map(routes.filter((r) => r.blogSlug).map((r) => [r.blogSlug, r.shortAnswer || '']));
function llmsPostDesc(p) {
  if (p.metaDesc) return shorten(p.metaDesc);
  const sa = clean(String(shortAnswerOf.get(p.slug) || '').replace(/^\*\*Krótka odpowiedź\.?\*\*\s*/, '').replace(/\*\*/g, ''));
  return sa ? shorten(sa.split(/(?<=[.!?])\s+(?=[A-ZĄĆĘŁŃÓŚŹŻ„])/)[0]) : '';
}
/* poradniki pogrupowane jak w Skarbnicy wiedzy (BLOG_CATEGORIES), w kategorii najnowsze najpierw */
const llmsPosts = (cat) => data.blog.filter((p) => p.cat === cat.id).map((p, i) => [p, i])
  .sort((a, b) => (b[0].iso || '').localeCompare(a[0].iso || '') || a[1] - b[1]).map((x) => x[0]);
const llms = [
  '# Kancelaria Nieruchomości adw. dr Maciej Muzyka (Mecenas od Nieruchomości)',
  '',
  '> Kancelaria Nieruchomości adw. dr Maciej Muzyka (marka: Mecenas od Nieruchomości) to kancelaria adwokacka z Lublina zajmująca się wyłącznie prawem nieruchomości. Adwokat: Lubelska Izba Adwokacka, wpis LUB/ADW/1702. Sprawy z całej Polski, kontakt zdalny, przede wszystkim mailowo; spotkania w Lublinie i w Warszawie. Sprawę opisuje się w formularzu na stronie. W ciągu 24 h roboczych klient dostaje bezpłatną wstępną analizę (co trzeba zrobić: np. szczegółowy audyt, pismo albo sprawa sądowa) i jednocześnie ofertę z ceną i terminem. Wstępna analiza nie jest opinią prawną ani pełnym sprawdzeniem dokumentów. Bez płatnych konsultacji. Cenę ustala się osobno dla każdej sprawy; wyjątek to stałe pakiety z cenami podanymi na stronach ofert (sekcja „Oferty z cenami”).',
  '',
  `- Strona: ${ORIGIN}/`,
  `- O kancelarii i kwalifikacjach: ${ORIGIN}/o-mnie`,
  `- Kontakt i formularz: ${ORIGIN}/kontakt`,
  `- Prawnik nieruchomości w Lublinie: sądy i urzędy, przed którymi prowadzone są sprawy w Lublinie i okolicy, najczęstsze sprawy, poradniki lokalne i pytania o współpracę (sekcja strony głównej): ${ORIGIN}/#lublin`,
  '- E-mail: maciej.muzyka@mecenasodnieruchomosci.pl, tel. +48 884 784 984, ul. Cicha 4/5, 20-078 Lublin (siedziba); spotkania także: ul. Bracka 20/lok. 7A, 00-028 Warszawa',
  '- Wizytówka w Mapach Google: https://maps.google.com/?cid=8576864712077445002',
  `- Kalkulator wynagrodzenia za słupy i rury na działce: ${ORIGIN}/kalkulator-slupy`,
  `- Kalkulator ostatniego dnia ważności warunków zabudowy (WZ), we wpisie: ${ORIGIN}/blog/warunki-zabudowy-ile-wazne`,
  ...(data.downloads.length ? [`- Do pobrania (listy kontrolne PDF, bez rejestracji): ${data.downloads.map((d) => `[${clean(d.title)}](${ORIGIN}${d.href})`).join(', ')}`] : []),
  '',
  '## Usługi',
  '',
  ...data.blocks.flatMap((b) => [
    `### [${b.title}](${ORIGIN}/uslugi/${b.id})`,
    ...b.services.map((s) => `- [${s.title}](${ORIGIN}/uslugi/${b.id}/${s.slug})${s.desc ? ': ' + clean(s.desc) : ''}`),
    '',
  ]),
  ...(data.offers.length ? ['## Oferty z cenami', '', ...data.offers.map((o) => `- [${clean(o.title)}](${ORIGIN}/oferta/${o.slug}): ${clean(o.desc)}`), ''] : []),
  ...data.blogCats.flatMap((c) => [
    `## Poradniki: ${c.title}`,
    '',
    `Wszystkie wpisy z kategorii: ${ORIGIN}/blog/kategoria/${c.id}`,
    '',
    ...llmsPosts(c).map((p) => { const d = llmsPostDesc(p); return `- [${clean(p.title)}](${ORIGIN}/blog/${p.slug})${d ? ': ' + d : ''}`; }),
    '',
  ]),
  '## Optional',
  '',
  `- [FAQ](${ORIGIN}/faq)`,
  `- [Mapa strony](${ORIGIN}/sitemap.xml)`,
  `- [Kanał RSS z nowymi poradnikami](${ORIGIN}/feed.xml)`,
  '',
].join('\n');
fs.writeFileSync(path.join(DIST, 'llms.txt'), llms);

/* feed.xml (RSS 2.0): 50 najnowszych poradników, dla czytników i agregatorów */
const xmlEsc = (s) => clean(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rfc822 = (iso) => new Date(iso + 'T08:00:00+01:00').toUTCString();
const feedPosts = [...data.blog].filter((p) => p.iso).sort((a, b) => b.iso.localeCompare(a.iso)).slice(0, 50);
fs.writeFileSync(path.join(DIST, 'feed.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n` +
  `  <title>Skarbnica wiedzy – Kancelaria Nieruchomości adw. dr Maciej Muzyka</title>\n  <link>${ORIGIN}/blog</link>\n` +
  `  <atom:link href="${ORIGIN}/feed.xml" rel="self" type="application/rss+xml"/>\n` +
  `  <description>Poradniki o prawie nieruchomości: warunki zabudowy, plan ogólny, służebności, najem, spadki i spory z deweloperem. Autor: adw. dr Maciej Muzyka.</description>\n` +
  `  <language>pl</language>\n  <lastBuildDate>${feedPosts.length ? rfc822(feedPosts[0].modified || feedPosts[0].iso) : new Date().toUTCString()}</lastBuildDate>\n` +
  feedPosts.map((p) => `  <item>\n    <title>${xmlEsc(p.title)}</title>\n    <link>${ORIGIN}/blog/${p.slug}</link>\n    <guid isPermaLink="true">${ORIGIN}/blog/${p.slug}</guid>\n    <pubDate>${rfc822(p.iso)}</pubDate>\n` +
    (p.category ? `    <category>${xmlEsc(p.category)}</category>\n` : '') + `    <description>${xmlEsc(p.excerpt)}</description>\n  </item>`).join('\n') +
  `\n</channel>\n</rss>\n`);

const thin = routes.filter((r) => !r.noindex && r.words < 250).map((r) => `${r.path} (${r.words})`);
if (thin.length) console.log(`thin pages (<250 words in <main>): ${thin.join(', ')}`);
if (failures.length) { console.error('FAILURES (dist/ left unchanged, see .dist-build/):\n' + failures.join('\n')); process.exit(1); }
fs.rmSync(FINAL, { recursive: true, force: true });
fs.renameSync(DIST, FINAL);
console.log(`prerender: ${routes.length} routes → dist/, sitemap ${indexable.length} URLs, llms.txt ${llms.length} B`);
process.exit(0);
