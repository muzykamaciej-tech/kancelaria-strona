/* build.mjs — compiles the Claude Design sources once, instead of Babel in every visitor's browser.
   Input:  index.html (script order), *.jsx, *.css, assets/
   Output: dist/__shell.html (template for prerender), dist/app.<hash>.js, dist/styles.<hash>.css,
           dist/vendor/*, dist/assets/*
   Semantics match the old in-browser Babel: JSX → React.createElement, const/let → var
   (files share one global scope, exactly like separate <script type="text/babel"> tags). */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import babel from '@babel/core';
import * as esbuild from 'esbuild';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(ROOT, 'dist');
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

/* 2. CSS in the order of index.html */
const cssFiles = [...src.matchAll(/<link rel="stylesheet" href="((?!https?:)[^"]+\.css)" \/>/g)].map((m) => m[1]);
const cssJoined = cssFiles.map((f) => `/* ${f} */\n` + fs.readFileSync(rel(f), 'utf8')).join('\n');
const cssMin = await esbuild.transform(cssJoined, { loader: 'css', minify: true, legalComments: 'none', charset: 'utf8' });
const cssName = `styles.${hash(cssMin.code)}.css`;
fs.writeFileSync(path.join(DIST, cssName), cssMin.code);

/* 3. Vendor files, self-hosted and pinned (no unpkg, no @latest) */
const vendor = {
  'react.production.min.js': path.join(ROOT, 'node_modules/react/umd/react.production.min.js'),
  'react-dom.production.min.js': path.join(ROOT, 'node_modules/react-dom/umd/react-dom.production.min.js'),
  'lucide.min.js': path.join(ROOT, 'node_modules/lucide/dist/umd/lucide.min.js'),
};
const vendorNames = {};
for (const [name, file] of Object.entries(vendor)) {
  const buf = fs.readFileSync(file);
  const hashed = name.replace(/\.js$/, `.${hash(buf)}.js`);
  fs.writeFileSync(path.join(DIST, 'vendor', hashed), buf);
  vendorNames[name] = '/vendor/' + hashed;
}

/* 4. Assets */
fs.cpSync(rel('assets'), path.join(DIST, 'assets'), { recursive: true });

/* 5. HTML shell */
let html = src;
html = html.replace(/<template id="__bundler_thumbnail"[\s\S]*?<\/template>\s*/, '');
html = html.replace(/<meta name="ext-resource-dependency"[^>]*>\s*/g, '');
html = html.replace(/<script src="https:\/\/unpkg\.com\/[^"]+"[^>]*><\/script>\s*/g, '');
html = html.replace(/<link rel="stylesheet" href="(?!https?:)[^"]+\.css" \/>\s*/g, '');
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
fs.writeFileSync(path.join(DIST, '__shell.html'), html);

console.log(`build: ${jsxFiles.length} JSX → ${appName} (${(min.code.length / 1024).toFixed(0)} KB), ${cssFiles.length} CSS → ${cssName} (${(cssMin.code.length / 1024).toFixed(0)} KB)`);
