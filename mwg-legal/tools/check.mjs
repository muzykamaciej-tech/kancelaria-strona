/* check.mjs — checks the built dist/: every internal link and asset resolves, every page has one h1,
   a title, a description and a canonical, and search-index.json parses. Usage: node build.mjs && node tools/check.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const html = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const f = path.join(d, e.name);
  if (e.isDirectory()) walk(f); else if (f.endsWith('.html')) html.push(f);
});
walk(DIST);

const exists = (u) => {
  const p = decodeURIComponent(u.split('#')[0].split('?')[0]);
  const f = path.join(DIST, p);
  return fs.existsSync(f) && fs.statSync(f).isFile() || fs.existsSync(path.join(f, 'index.html')) || fs.existsSync(f + '.html');
};
let fail = 0;
const err = (file, msg) => { fail++; console.log(`✗ ${path.relative(DIST, file)}: ${msg}`); };
for (const file of html) {
  const s = fs.readFileSync(file, 'utf8');
  for (const [, u] of s.matchAll(/(?:href|src)="(\/[^"]*)"/g)) if (!u.startsWith('//') && !exists(u)) err(file, `brak ${u}`);
  for (const [, set] of s.matchAll(/srcset="([^"]+)"/g)) for (const part of set.split(',')) { const u = part.trim().split(' ')[0]; if (!exists(u)) err(file, `brak ${u}`); }
  for (const [, id] of s.matchAll(/href="#([^"]+)"/g)) if (!s.includes(`id="${id}"`)) err(file, `brak kotwicy #${id}`);
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) err(file, `h1: ${h1}`);
  if (!/<title>[^<]{5,}<\/title>/.test(s)) err(file, 'brak <title>');
  if (!/<meta name="description" content="[^"]{20,}"/.test(s)) err(file, 'brak opisu');
  if (!/<link rel="canonical"/.test(s)) err(file, 'brak canonical');
  for (const [, j] of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(j); } catch { err(file, 'zły JSON-LD'); } }
}
JSON.parse(fs.readFileSync(path.join(DIST, 'search-index.json'), 'utf8'));
console.log(`${html.length} plików HTML, fail ${fail}`);
process.exit(fail ? 1 : 0);
