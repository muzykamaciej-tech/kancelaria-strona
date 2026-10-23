/* IndexNow: zgłasza adresy do Binga (i innych wyszukiwarek IndexNow) po wdrożeniu na produkcję.
   Użycie: node scripts/indexnow.mjs            → adresy z dist/sitemap.xml z lastmod z ostatnich 3 dni
           node scripts/indexnow.mjs --all      → wszystkie adresy z dist/sitemap.xml
           node scripts/indexnow.mjs /blog/x …  → wskazane ścieżki
   Klucz: scripts/indexnow.key, plik klucza: assets/<klucz>.txt, pod adresem /<klucz>.txt (rewrite w vercel.json). */
import fs from 'node:fs';
const HOST = 'www.mecenasodnieruchomosci.pl';
const key = fs.readFileSync(new URL('./indexnow.key', import.meta.url), 'utf8').trim();
const args = process.argv.slice(2);
const sm = fs.readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const entries = [...sm.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map((m) => ({ loc: m[1], lastmod: m[2] }));
let urls;
if (args.includes('--all')) urls = entries.map((e) => e.loc);
else if (args.length) urls = args.map((p) => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`);
else { const since = new Date(Date.now() - 3 * 864e5).toISOString().slice(0, 10); urls = entries.filter((e) => e.lastmod && e.lastmod >= since).map((e) => e.loc); }
if (!urls.length) { console.log('IndexNow: brak adresów do zgłoszenia'); process.exit(0); }
const check = await fetch(`https://${HOST}/${key}.txt`);
if (!check.ok || (await check.text()).trim() !== key) { console.error('IndexNow: plik klucza nie jest dostępny na produkcji – najpierw wdrożenie'); process.exit(1); }
const r = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls }) });
console.log(`IndexNow: ${urls.length} adresów → HTTP ${r.status} ${r.status === 200 || r.status === 202 ? '(przyjęte)' : await r.text()}`);
