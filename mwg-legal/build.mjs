/* build.mjs — builds the static site into dist/. Node built-ins only, so it also runs as the Vercel build.
   Each route becomes dist/<path>/index.html; plus static assets, search index, sitemap.xml, robots.txt, 404.html. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { page } from './src/layout.mjs';
import { allPages } from './src/pages.mjs';
import { SITE } from './src/content.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'static'), DIST, { recursive: true });

const hash = (f) => crypto.createHash('sha256').update(fs.readFileSync(path.join(DIST, f))).digest('hex').slice(0, 10);
const cssHash = hash('css/site.css'), jsHash = hash('js/site.js');
const finish = (html) => html.replace('__CSS_HASH__', cssHash).replace('__JS_HASH__', jsHash);

const { pages, notFound } = allPages();
const write = (p, html) => {
  const file = p === '/' ? path.join(DIST, 'index.html') : path.join(DIST, p.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
for (const p of pages) write(p.path, finish(page(p)));
fs.writeFileSync(path.join(DIST, '404.html'), finish(page(notFound)));

// Search index: title, description, kind and searchable text without markup.
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
const kind = (p) => (p.path.startsWith('/specjalizacje/') ? 'Specjalizacja' : p.path.startsWith('/sektory/') ? 'Sektor' : p.path.startsWith('/zespol/') ? 'Zespół' : 'Strona');
const index = pages.filter((p) => !p.noindex && p.path !== '/mapa-strony').map((p) => ({
  u: p.path, t: p.path === '/' ? 'Strona główna' : p.title, d: p.description, k: kind(p),
  x: `${p.keywords || ''} ${strip(p.body)}`.slice(0, 2500),
}));
fs.writeFileSync(path.join(DIST, 'search-index.json'), JSON.stringify(index));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter((p) => !p.noindex).map((p) => `<url><loc>${SITE.url}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log(`dist/: ${pages.length} stron + 404, css ${cssHash}, js ${jsHash}`);
