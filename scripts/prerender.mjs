/* prerender.mjs — renders every route in headless Chrome and saves the finished HTML,
   so Google and AI crawlers (which do not run JS) get the full content, title, canonical and JSON-LD.
   Also writes sitemap.xml, robots.txt and llms.txt from the same data the site renders. */
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import { createServer } from './serve.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(ROOT, 'dist');
const ORIGIN = 'https://www.mecenasodnieruchomosci.pl';
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TODAY = new Date().toISOString().slice(0, 10);
const CONCURRENCY = 4;

if (!fs.existsSync(path.join(DIST, '__shell.html'))) throw new Error('run scripts/build.mjs first');

/* live Google rating so the prerendered badge matches production */
let rating = { rating: 5, count: 63 };
try {
  const r = await fetch(ORIGIN + '/api/google-rating');
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
  page.on('request', (req) => {
    const u = req.url();
    if (/googletagmanager|google-analytics|fonts\.(googleapis|gstatic)|script\.google\.com|formspree/.test(u)) return req.abort();
    req.continue();
  });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
  page._errors = errors;
  return page;
}

/* 1. discover routes from the data the app itself uses */
const probe = await newPage();
await probe.goto(BASE + '/', { waitUntil: 'networkidle0' });
const data = await probe.evaluate(() => ({
  blocks: window.SERVICE_BLOCKS.map((b) => ({ id: b.id, title: b.title, tagline: b.tagline || '', services: b.services.map((s) => ({ slug: s.slug, title: s.title, desc: s.desc || '' })) })),
  blog: (window.BLOG || []).map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt || '', iso: p.iso, updated: p.updated || '' })),
}));
await probe.close();

const routes = [
  { path: '/', lastmod: TODAY, priority: '1.0' },
  { path: '/uslugi', lastmod: TODAY, priority: '0.8' },
  ...data.blocks.flatMap((b) => [
    { path: `/uslugi/${b.id}`, lastmod: TODAY, priority: '0.8' },
    ...b.services.map((s) => ({ path: `/uslugi/${b.id}/${s.slug}`, lastmod: TODAY, priority: '0.7' })),
  ]),
  { path: '/blog', lastmod: TODAY, priority: '0.7' },
  ...data.blog.map((p) => ({ path: `/blog/${p.slug}`, lastmod: (p.updated || p.iso || TODAY).slice(0, 10), priority: '0.6' })),
  { path: '/o-mnie', lastmod: TODAY, priority: '0.7' },
  { path: '/kontakt', lastmod: TODAY, priority: '0.6' },
  { path: '/faq', lastmod: TODAY, priority: '0.5' },
  { path: '/kalkulator-slupy', lastmod: TODAY, priority: '0.6' },
  { path: '/polityka-prywatnosci', lastmod: TODAY, priority: '0.2' },
  { path: '/regulamin', lastmod: TODAY, priority: '0.2' },
  { path: '/rodo', lastmod: TODAY, priority: '0.2' },
  { path: '/404', noindex: true },
];

function outFile(p) {
  if (p === '/') return 'index.html';
  if (p === '/404') return '404.html';
  return p.slice(1) + '.html';
}

/* 2. render each route */
const failures = [];
async function render(page, r) {
  page._errors.length = 0;
  await page.goto(BASE + r.path, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForSelector('#app main', { timeout: 15000 });
  await page.waitForFunction(() => !document.querySelector('#app i[data-lucide]'), { timeout: 5000 }).catch(() => {});
  await new Promise((res) => setTimeout(res, 250));
  const res = await page.evaluate((isNotFound) => {
    const main = document.querySelector('#app main');
    const is404 = main && main.getAttribute('data-screen-label') === '404';
    /* any leftover legacy hash links → real paths */
    document.querySelectorAll('a[href^="#/"]').forEach((a) => a.setAttribute('href', a.getAttribute('href').slice(1).replace(/\/+$/, '') || '/'));
    const canonical = document.querySelector('link[rel="canonical"]');
    return {
      is404, wrong404: is404 !== isNotFound,
      title: document.title,
      canonical: canonical && canonical.href,
      words: (main ? main.innerText : '').split(/\s+/).filter(Boolean).length,
      html: '<!doctype html>\n' + document.documentElement.outerHTML,
    };
  }, !!r.noindex);
  if (res.wrong404) failures.push(`${r.path}: rendered ${res.is404 ? '404' : 'content'} unexpectedly`);
  if (!r.noindex && res.canonical !== ORIGIN + r.path) failures.push(`${r.path}: canonical ${res.canonical}`);
  if (page._errors.length) failures.push(`${r.path}: JS errors: ${page._errors.slice(0, 3).join(' | ')}`);
  const file = path.join(DIST, outFile(r.path));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, res.html);
  r.words = res.words; r.title = res.title;
}

const queue = [...routes];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  const page = await newPage();
  while (queue.length) {
    const r = queue.shift();
    try { await render(page, r); } catch (e) { failures.push(`${r.path}: ${e.message}`); }
  }
  await page.close();
}));
await browser.close();
server.close();
fs.rmSync(path.join(DIST, '__shell.html'));

/* 3. sitemap.xml, robots.txt, llms.txt */
const indexable = routes.filter((r) => !r.noindex);
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexable.map((r) => `  <url><loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc><lastmod>${r.lastmod}</lastmod><priority>${r.priority}</priority></url>`).join('\n') +
  `\n</urlset>\n`);

fs.writeFileSync(path.join(DIST, 'robots.txt'),
  `# mecenasodnieruchomosci.pl — treści są otwarte dla wyszukiwarek i asystentów AI\nUser-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);

const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
const llms = [
  '# Kancelaria Nieruchomości – adw. dr Maciej Muzyka',
  '',
  '> Kancelaria adwokacka z Lublina zajmująca się wyłącznie prawem nieruchomości. Prowadzi adw. dr Maciej Muzyka (Lubelska Izba Adwokacka, wpis LUB/ADW/1702). Sprawy z całej Polski, kontakt zdalny, przede wszystkim mailowo. Sprawę opisuje się w formularzu na stronie; odpowiedź w ciągu 24 h roboczych.',
  '',
  `- Strona: ${ORIGIN}/`,
  `- O kancelarii i kwalifikacjach: ${ORIGIN}/o-mnie`,
  `- Kontakt i formularz: ${ORIGIN}/kontakt`,
  '- E-mail: maciej.muzyka@mecenasodnieruchomosci.pl, tel. +48 884 784 984, ul. Cicha 4/5, 20-078 Lublin',
  `- Kalkulator wynagrodzenia za słupy i rury na działce: ${ORIGIN}/kalkulator-slupy`,
  '',
  '## Usługi',
  '',
  ...data.blocks.flatMap((b) => [
    `### [${b.title}](${ORIGIN}/uslugi/${b.id})`,
    ...b.services.map((s) => `- [${s.title}](${ORIGIN}/uslugi/${b.id}/${s.slug})${s.desc ? ': ' + clean(s.desc) : ''}`),
    '',
  ]),
  '## Poradniki',
  '',
  ...data.blog.map((p) => `- [${clean(p.title)}](${ORIGIN}/blog/${p.slug})${p.excerpt ? ': ' + clean(p.excerpt) : ''}`),
  '',
  '## Opcjonalne',
  '',
  `- [FAQ](${ORIGIN}/faq)`,
  `- [Mapa strony](${ORIGIN}/sitemap.xml)`,
  '',
].join('\n');
fs.writeFileSync(path.join(DIST, 'llms.txt'), llms);

const thin = routes.filter((r) => !r.noindex && r.words < 250).map((r) => `${r.path} (${r.words})`);
console.log(`prerender: ${routes.length} routes → dist/, sitemap ${indexable.length} URLs, llms.txt ${llms.length} B`);
if (thin.length) console.log(`thin pages (<250 words in <main>): ${thin.join(', ')}`);
if (failures.length) { console.error('FAILURES:\n' + failures.join('\n')); process.exit(1); }
