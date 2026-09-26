/* build.mjs — compiles the Claude Design sources once, instead of Babel in every visitor's browser.
   Input:  index.html (script order), *.jsx, *.css, assets/
   Output: .dist-build/__shell.html (template for prerender), app.<hash>.js, styles.<hash>.css,
           vendor/*, assets/*, .source-hash. prerender.mjs renders the pages into .dist-build/ and only then
           replaces dist/, so a failed build never leaves the repo without a working dist/.
   Semantics match the old in-browser Babel: JSX → React.createElement, const/let → var
   (files share one global scope, exactly like separate <script type="text/babel"> tags). */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
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

const parts = [];
for (const f of jsxFiles) {
  if (f === 'tweaks-panel.jsx') { parts.push(`/* ${f} (production stub) */\n${TWEAKS_STUB}`); continue; }
  const code = fs.readFileSync(rel(f), 'utf8');
  const out = babel.transformSync(code, {
    filename: f,
    babelrc: false,
    configFile: false,
    sourceType: 'script',
    presets: [[require.resolve('@babel/preset-react'), { runtime: 'classic' }]],
    plugins: [require.resolve('@babel/plugin-transform-block-scoping')],
    compact: false,
  });
  parts.push(`/* ${f} */\n${out.code}`);
}
const joined = parts.join('\n;\n');
const min = await esbuild.transform(joined, { loader: 'js', minify: true, target: 'es2019', legalComments: 'none', charset: 'utf8' });
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

/* 5. HTML shell */
let html = src;
html = html.replace(/<template id="__bundler_thumbnail"[\s\S]*?<\/template>\s*/, '');
html = html.replace(/<meta name="ext-resource-dependency"[^>]*>\s*/g, '');
html = html.replace(/<script src="https:\/\/unpkg\.com\/[^"]+"[^>]*><\/script>\s*/g, '');
html = html.replace(new RegExp(LOCAL_CSS_LINK.source + '\\s*', 'g'), '');
html = html.replace(/<script type="text\/babel" src="[^"]+"><\/script>\s*/g, '');
html = html.replace('<link rel="icon" href="assets/favicon.ico" />', '<link rel="icon" href="/assets/favicon.ico" />');
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

console.log(`build: ${jsxFiles.length} JSX → ${appName} (${(min.code.length / 1024).toFixed(0)} KB), ${cssFiles.length} CSS → ${cssName} (${(cssMin.code.length / 1024).toFixed(0)} KB), lucide ${iconList.length} icons (${(vendor['lucide.min.js'].length / 1024).toFixed(0)} KB)`);
