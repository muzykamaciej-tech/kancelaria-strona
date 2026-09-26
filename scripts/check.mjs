/* check.mjs — automated verification of dist/ (run after `npm run build`).
   Static: canonical, titles, JSON-LD parses, internal links resolve, every sitemap URL reachable
   from the home page through real <a href> links, no leftover #/ links.
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
const jsonDates = (o, out = []) => { if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) { if (/^date(Published|Modified|Created)$/.test(k)) out.push(v); else jsonDates(v, out); } return out; };
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
}
for (const [p, d] of Object.entries(pages)) for (const l of d.internal) if (!exists(l)) fail.push(`${p}: broken internal link ${l}`);

const dupTitles = Object.entries(Object.entries(pages).filter(([, d]) => !d.noindex).reduce((a, [p, d]) => ((a[d.title] = a[d.title] || []).push(p), a), {})).filter(([, ps]) => ps.length > 1);
dupTitles.forEach(([t, ps]) => warn.push(`duplicate <title> "${t}": ${ps.join(', ')}`));

const sitemapXml = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const sitemap = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, '') || '/');
[...sitemapXml.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)].filter((m) => !ISO_DATE.test(m[1])).forEach((m) => fail.push(`sitemap: lastmod "${m[1]}" is not YYYY-MM-DD`));
sitemap.forEach((p) => { if (!pages[p]) fail.push(`sitemap URL without page: ${p}`); });

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
