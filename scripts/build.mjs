/* build.mjs — compiles the Claude Design sources once, instead of Babel in every visitor's browser.
   Input:  index.html (script order), *.jsx, *.css, assets/
   Output: .dist-build/__shell.html (template for prerender), app.<hash>.js, styles.<hash>.css,
           content/<rodzaj>/<klucz>.<hash>.js (treść wpisów, usług i filarów, niżej 1b), vendor/*, assets/*, .source-hash. prerender.mjs renders the pages into .dist-build/ and only then
           replaces dist/, so a failed build never leaves the repo without a working dist/.
   Semantics match the old in-browser Babel: JSX → React.createElement, const/let → var
   (files share one global scope, exactly like separate <script type="text/babel"> tags). */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import babel from '@babel/core';
import * as esbuild from 'esbuild';
import { sourceHash } from './source-hash.mjs';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, '.dist-build');
const rel = (p) => path.join(ROOT, p);
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 10);

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'vendor'), { recursive: true });

const src = fs.readFileSync(rel('index.html'), 'utf8');

/* 1. JSX in the exact order of index.html */
const jsxFiles = [...src.matchAll(/<script type="text\/babel" src="([^"]+)"><\/script>/g)].map((m) => m[1]);
if (!jsxFiles.length) throw new Error('no text/babel scripts found in index.html');

/* Tweaks panel is a Claude Design editing tool: production gets inert stand-ins. */
const TWEAKS_STUB = `
function useTweaks(defaults) { return [defaults, function () {}]; }
function TweaksPanel() { return null; }
function TweakSection() { return null; }
function TweakRadio() { return null; }
function TweakToggle() { return null; }
Object.assign(window, { useTweaks: useTweaks, TweaksPanel: TweaksPanel, TweakSection: TweakSection, TweakRadio: TweakRadio, TweakToggle: TweakToggle });
`;

/* Ocena z wizytówki Google do gotowego HTML: prerender nie ma dostępu do /api, więc bez tego
   w HTML (dla Google i asystentów AI) zostaje wartość zapasowa z landing.jsx. Brak sieci = wartość z kodu. */
let rating = null;
try {
  const r = await fetch('https://www.mecenasodnieruchomosci.pl/api/google-rating', { signal: AbortSignal.timeout(8000) });
  const d = r.ok ? await r.json() : null;
  if (d && typeof d.rating === 'number' && typeof d.count === 'number' && d.count > 0) rating = d;
} catch (e) { /* offline build */ }
console.log('build: ocena Google ' + (rating ? rating.rating + ' / ' + rating.count + ' opinii (z wizytówki)' : 'z wartości zapasowej w landing.jsx'));

/* Treść ładowana na żądanie. Wpisy bloga (blog-data*.jsx, ok. 3,3 MB) i treść stron usług i filarów (services-content
   i pliki, które do niej dopisują, ok. 0,85 MB) nie trafiają do app.js. Build wykonuje te pliki danych raz (w kolejności
   index.html, razem z plikami danych przed nimi: data.jsx, services-data.jsx, offers-data.jsx) i dzieli wynik:
   - w app.js zostaje lekki indeks w miejscu tych plików: przy wpisach wszystko poza treścią (tytuły, daty, excerpt,
     okładki, tagi, related, meta), przy usługach i filarach tylko pola potrzebne poza ich stroną (`keep`);
   - reszta pól każdego wpisu, usługi i filaru idzie do /content/<rodzaj>/<klucz>.<hash>.js, ładowanego tylko na jego
     trasie (app.jsx: contentReady / loadContent); prerender dopisuje ten plik jako <script defer> przed app.js.
   Pliki źródłowe zostają bez zmian (blog_publish.py pisze do blog-data*.jsx jak dotąd). */
const LAZY = [
  { files: /^blog-data(-\d+)?\.jsx$/, split: { BLOG: { kind: 'blog', key: 'slug', lazy: ['body', 'faq', 'source'] } } },
  { files: /^(services-content|pillars-content|services-b2b|services-lite-fill|services-flip)\.jsx$/,
    split: { SERVICE_CONTENT: { kind: 'usluga', keep: ['h1', 'metaDesc', 'updated', 'guides'] }, BLOCK_CONTENT: { kind: 'blok', keep: ['updated'] } } },
];
LAZY.forEach((g) => { g.list = []; });
const lazyGroup = (f) => LAZY.find((g) => g.files.test(f));
const parts = [], partFiles = [];
const compiled = {}; /* plik → kod po Babelu (do wykonania w build) */
for (const f of jsxFiles) {
  if (f === 'tweaks-panel.jsx') { parts.push(compiled[f] = `/* ${f} (production stub) */\n${TWEAKS_STUB}`); partFiles.push(f); continue; }
  /* relative 'assets/…' paths break on nested URLs (/blog/x → /blog/assets/…); new content often uses them, so normalise */
  let code = fs.readFileSync(rel(f), 'utf8').replace(/(["'`(])assets\//g, '$1/assets/');
  if (f === 'landing.jsx' && rating) code = code
    .replace(/const GOOGLE_RATING_FALLBACK = [\d.]+;/, `const GOOGLE_RATING_FALLBACK = ${rating.rating};`)
    .replace(/const GOOGLE_REVIEWS_COUNT_FALLBACK = \d+;/, `const GOOGLE_REVIEWS_COUNT_FALLBACK = ${rating.count};`);
  const out = babel.transformSync(code, {
    filename: f,
    babelrc: false,
    configFile: false,
    sourceType: 'script',
    presets: [[require.resolve('@babel/preset-react'), { runtime: 'classic' }]],
    plugins: [require.resolve('@babel/plugin-transform-block-scoping')],
    compact: false,
  });
  compiled[f] = `/* ${f} */\n${out.code}`;
  const g = lazyGroup(f);
  if (g) {
    if (!g.list.length) { g.at = parts.length; parts.push(null); partFiles.push(f); } /* miejsce na indeks grupy */
    else if (g.list.at(-1) !== jsxFiles[jsxFiles.indexOf(f) - 1]) throw new Error(`${f}: pliki tej grupy muszą stać w index.html jeden po drugim`);
    g.list.push(f);
    continue;
  }
  parts.push(compiled[f]); partFiles.push(f);
}

/* esbuild + kontrola zdublowanych kluczy (w literale danych pierwszy wpis ginie bez ostrzeżenia): stop i nazwa pliku */
async function minifyChecked(chunks, files) {
  const min = await esbuild.transform(chunks.join('\n;\n'), { loader: 'js', minify: true, target: 'es2019', legalComments: 'none', charset: 'utf8' });
  const starts = []; let line = 1;
  chunks.forEach((p, i) => { starts.push([line, files[i]]); line += p.split('\n').length + 1; });
  const fileAt = (l) => (starts.filter(([s]) => s <= l).pop() || [0, '?'])[1];
  const dup = (min.warnings || []).filter((w) => /Duplicate key/.test(w.text));
  if (dup.length) throw new Error('zdublowane klucze w danych (pierwszy wpis ginie bez ostrzeżenia): ' + dup.map((w) => `${w.text} [${w.location ? fileAt(w.location.line) : '?'}]`).join('; '));
  return min;
}

/* 1b. treść na żądanie: wykonanie plików danych w piaskownicy → indeks w app.js + /content/<rodzaj>/<klucz>.<hash>.js */
const isData = (v) => JSON.stringify(v, function (k, x) {
  if (typeof x === 'function' || x === undefined || (typeof x === 'number' && !Number.isFinite(x))) throw new Error(`pole "${k}" nie jest danymi JSON (${typeof x})`);
  return x;
});
const sandbox = { window: {} }; sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
const globalsOf = () => new Set([...Object.keys(sandbox), ...Object.keys(sandbox.window)].filter((k) => k !== 'window'));
const valueOf = (k) => (k in sandbox.window ? sandbox.window[k] : sandbox[k]);
const chunkStats = {};
let evaluated = 0;
for (const g of LAZY.filter((x) => x.list.length)) {
  /* pliki przed grupą (dane, od których zależy: np. plainPln z offers-data.jsx) */
  for (const f of jsxFiles.slice(evaluated, jsxFiles.indexOf(g.list[0]))) {
    try { vm.runInContext(compiled[f], sandbox, { filename: f }); }
    catch (e) { throw new Error(`build: ${f} stoi przed plikami ${g.list[0]}… i musi dać się wykonać bez przeglądarki (same dane): ${e.message}`); }
  }
  await minifyChecked(g.list.map((f) => compiled[f]), g.list); /* zdublowane klucze w danych */
  const before = globalsOf();
  const snapshot = [...before].filter((k) => typeof valueOf(k) !== 'function').map((k) => [k, JSON.stringify(valueOf(k))]);
  for (const f of g.list) vm.runInContext(compiled[f], sandbox, { filename: f });
  evaluated = jsxFiles.indexOf(g.list.at(-1)) + 1;
  for (const [k, json] of snapshot) if (JSON.stringify(valueOf(k)) !== json) throw new Error(`build: ${g.list.join(', ')} zmieniają ${k}, a mogą tylko dodawać własne dane`);
  let code = `/* indeks: ${g.list.join(', ')} */\n`;
  for (const name of [...globalsOf()].filter((k) => !before.has(k))) {
    if (name in sandbox.window && name in sandbox && sandbox.window[name] !== sandbox[name]) throw new Error(`build: ${name} ma dwie różne wartości (window i zmienna globalna)`);
    let value;
    try { value = JSON.parse(isData(valueOf(name))); } catch (e) { throw new Error(`build: ${name} z ${g.list.join(', ')}: ${e.message}`); }
    const cfg = g.split[name];
    if (cfg) {
      const hashes = {}, lazyKey = (k) => (cfg.lazy ? cfg.lazy.includes(k) : !cfg.keep.includes(k));
      const entries = Array.isArray(value) ? value.map((x) => [x && x[cfg.key], x]) : Object.entries(value);
      const seen = new Set();
      fs.mkdirSync(path.join(DIST, 'content', cfg.kind), { recursive: true });
      for (const [key, entry] of entries) {
        if (typeof key !== 'string' || !/^[a-z0-9-]+$/.test(key)) throw new Error(`build: ${name}: niepoprawny klucz "${key}"`);
        if (seen.has(key)) throw new Error(`build: ${name}: zdublowany klucz "${key}"`);
        seen.add(key);
        const rest = {};
        for (const k of Object.keys(entry)) if (lazyKey(k)) { rest[k] = entry[k]; delete entry[k]; }
        if (!Object.keys(rest).length) continue;
        const chunk = `(window.CONTENT_LOADED=window.CONTENT_LOADED||{})[${JSON.stringify(cfg.kind + '/' + key)}]=${JSON.stringify(rest)};\n`;
        hashes[key] = hash(chunk);
        fs.writeFileSync(path.join(DIST, 'content', cfg.kind, `${key}.${hashes[key]}.js`), chunk);
        const st = (chunkStats[cfg.kind] = chunkStats[cfg.kind] || { n: 0, bytes: 0 }); st.n++; st.bytes += Buffer.byteLength(chunk);
      }
      code += `(window.CONTENT_CHUNKS=window.CONTENT_CHUNKS||{})[${JSON.stringify(cfg.kind)}]=${JSON.stringify(hashes)};\n`;
    }
    /* JSON.parse: duży literał danych parsuje się szybciej jako JSON niż jako kod JS */
    const json = JSON.stringify(value);
    code += `var ${name} = ${json.length > 10000 ? `JSON.parse(${JSON.stringify(json)})` : json};\nwindow.${name} = ${name};\n`;
  }
  for (const name of Object.keys(g.split)) if (!code.includes(`var ${name} =`)) throw new Error(`build: ${g.list.join(', ')} nie definiują ${name}`);
  parts[g.at] = code;
}
const min = await minifyChecked(parts, partFiles);
const appName = `app.${hash(min.code)}.js`;
fs.writeFileSync(path.join(DIST, appName), min.code);

/* 2. CSS in the order of index.html. Local @imports (styles.css → assets/tokens.css) are inlined, so the tokens
   travel in the hashed bundle instead of a second, render-blocking, never-revalidated request; a remote
   @import is dropped only when index.html already links the same stylesheet (Google Fonts). */
const LOCAL_CSS_LINK = /<link rel="stylesheet" href="((?!https?:)[^"]+\.css)"\s*\/?>/g;
const cssFiles = [...src.matchAll(LOCAL_CSS_LINK)].map((m) => m[1]);
function readCss(file) {
  /* @import url('x') | url(x) | 'x' — quoted URLs may contain ';' (Google Fonts) */
  return fs.readFileSync(rel(file), 'utf8').replace(/@import\s+(?:url\(\s*(?:(['"])(.*?)\1|([^)\s]+))\s*\)|(['"])(.*?)\4)\s*;/g, (m, q1, u1, u2, q2, u3) => {
    const url = u1 || u2 || u3;
    if (/^https?:/.test(url)) {
      if (!src.includes(url)) throw new Error(`${file}: remote @import ${url} is not linked in index.html`);
      return `/* ${url} (linked in <head>) */`;
    }
    const f = path.join(path.dirname(file), url);
    const css = readCss(f);
    if (path.dirname(f) !== path.dirname(file) && /url\(\s*['"]?(?!https?:|data:|\/)/.test(css)) throw new Error(`${f}: relative url() would break when inlined into ${file}`);
    return `/* ${f} */\n${css}`;
  });
}
const cssJoined = cssFiles.map((f) => `/* ${f} */\n` + readCss(f)).join('\n');
if (/@import/.test(cssJoined.replace(/\/\*[\s\S]*?\*\//g, ''))) throw new Error('CSS bundle still contains @import');
const cssMin = await esbuild.transform(cssJoined, { loader: 'css', minify: true, legalComments: 'none', charset: 'utf8' });
const cssName = `styles.${hash(cssMin.code)}.css`;
fs.writeFileSync(path.join(DIST, cssName), cssMin.code);

/* 3. Vendor files, self-hosted and pinned (no unpkg, no @latest) */
const vendor = {
  'react.production.min.js': fs.readFileSync(path.join(ROOT, 'node_modules/react/umd/react.production.min.js')),
  'react-dom.production.min.js': fs.readFileSync(path.join(ROOT, 'node_modules/react-dom/umd/react-dom.production.min.js')),
};

/* 3b. lucide: only icons the sources can name (~100 of ~2100). Superset on purpose: every string literal in
   index.html/JSX that is a lucide icon name, so names kept in data (icon: 'map') or picked by a condition
   (open ? 'x' : 'menu') are included. Same createIcons as the full UMD build, same SVG output.
   prerender.mjs fails if any <i data-lucide> is left unconverted. */
const toPascal = (s) => s.split(/[-_\s]+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
const allIcons = new Set(Object.keys(require('lucide').icons));
const iconNames = new Set();
for (const f of ['index.html', ...jsxFiles]) {
  for (const m of fs.readFileSync(rel(f), 'utf8').matchAll(/["'`]([a-z][a-z0-9]*(?:-[a-z0-9]+)*)["'`]/g)) if (allIcons.has(toPascal(m[1]))) iconNames.add(toPascal(m[1]));
}
const iconList = [...iconNames].sort();
const lucideOut = await esbuild.build({
  stdin: {
    contents: `import { createIcons, ${iconList.join(', ')} } from 'lucide';
const icons = { ${iconList.join(', ')} };
window.lucide = { icons: icons, createIcons: function (o) { return createIcons(Object.assign({ icons: icons }, o)); } };`,
    resolveDir: ROOT, sourcefile: 'lucide-subset.js',
  },
  bundle: true, minify: true, format: 'iife', target: 'es2019', legalComments: 'none', write: false,
});
vendor['lucide.min.js'] = Buffer.from(lucideOut.outputFiles[0].text);

const vendorNames = {};
for (const [name, buf] of Object.entries(vendor)) {
  const hashed = name.replace(/\.js$/, `.${hash(buf)}.js`);
  fs.writeFileSync(path.join(DIST, 'vendor', hashed), buf);
  vendorNames[name] = '/vendor/' + hashed;
}

/* 4. Assets. The two logos are 2036 px wide PNGs (130 + 109 KB) shown at most 343 CSS px wide:
   resampled to 686 px (2x) for dist (macOS sips; elsewhere the originals are copied unchanged). */
fs.cpSync(rel('assets'), path.join(DIST, 'assets'), { recursive: true, filter: (f) => path.basename(f) !== '.DS_Store' });
for (const logo of ['logo.png', 'logo-on-dark.png']) {
  try { execFileSync('sips', ['--resampleWidth', '686', rel('assets/' + logo), '--out', path.join(DIST, 'assets', logo)], { stdio: 'ignore' }); }
  catch (e) { console.warn(`build: ${logo} not resized (sips unavailable), original copied`); }
}
/* 4b. Lżejsze warianty obrazów (LCP na telefonie): okładki wpisów jako WebP 640/1200 + 64 px do rozmytego tła,
   zdjęcia Macieja jako AVIF. Strona się do nich odwołuje (pages.jsx coverImg, landing.jsx SectionPhoto), więc bez nich
   build się zatrzymuje. Pamięć podręczna w .img-cache/ (poza repozytorium). */
try { execFileSync('python3', [rel('scripts/image-variants.py'), rel('assets'), path.join(DIST, 'assets'), rel('.img-cache')], { stdio: 'inherit' }); }
catch (e) { throw new Error('build: scripts/image-variants.py nie zadziałał (potrzebny python3 z Pillow obsługującym WebP i AVIF)'); }

/* 5. HTML shell */
let html = src;
html = html.replace(/<template id="__bundler_thumbnail"[\s\S]*?<\/template>\s*/, '');
html = html.replace(/<meta name="ext-resource-dependency"[^>]*>\s*/g, '');
html = html.replace(/<script src="https:\/\/unpkg\.com\/[^"]+"[^>]*><\/script>\s*/g, '');
html = html.replace(new RegExp(LOCAL_CSS_LINK.source + '\\s*', 'g'), '');
html = html.replace(/<script type="text\/babel" src="[^"]+"><\/script>\s*/g, '');
html = html.replace(/https:\/\/mecenasodnieruchomosci\.pl/g, 'https://www.mecenasodnieruchomosci.pl');
html = html.replace('</head>', `<link rel="stylesheet" href="/${cssName}" />
<script defer src="${vendorNames['react.production.min.js']}"></script>
<script defer src="${vendorNames['react-dom.production.min.js']}"></script>
<script defer src="${vendorNames['lucide.min.js']}"></script>
<script defer src="/${appName}"></script>
</head>`);
if (/text\/babel|unpkg\.com|babel\.min/.test(html)) throw new Error('shell still references Babel/unpkg');
const leftCss = html.match(/<link\b[^>]*rel="stylesheet"[^>]*href="(?!https?:|\/)[^"]*"[^>]*>/);
if (leftCss) throw new Error(`relative stylesheet left in the shell (not bundled, 404 on sub-pages): ${leftCss[0]}`);
fs.writeFileSync(path.join(DIST, '__shell.html'), html);
fs.writeFileSync(path.join(DIST, '.source-hash'), sourceHash(ROOT) + '\n');

console.log(`build: ${jsxFiles.length} JSX → ${appName} (${(min.code.length / 1024).toFixed(0)} KB) + content/ ${Object.entries(chunkStats).map(([k, v]) => `${k} ${v.n} (${(v.bytes / 1024).toFixed(0)} KB)`).join(', ')}, ${cssFiles.length} CSS → ${cssName} (${(cssMin.code.length / 1024).toFixed(0)} KB), lucide ${iconList.length} icons (${(vendor['lucide.min.js'].length / 1024).toFixed(0)} KB)`);
