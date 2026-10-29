/* render.mjs — writes every scene to SVG and rasterises it to WebP (flattened on white).
   Local tool only (needs Playwright + ImageMagick); the WebP files are committed to static/img/ill/.
   Usage: node tools/illustrations/render.mjs [name ...] */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import * as scenes from './scenes.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = path.join(ROOT, 'static/img/ill');
const SVG = path.join(ROOT, 'tools/illustrations/out');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(SVG, { recursive: true });

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch {
  ({ chromium } = require(path.join(execFileSync('npm', ['root', '-g']).toString().trim(), 'playwright')));
}

const only = process.argv.slice(2);
const names = Object.keys(scenes).filter((n) => !only.length || only.includes(n));
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
for (const name of names) {
  const svg = scenes[name]();
  fs.writeFileSync(path.join(SVG, `${name}.svg`), svg);
  const [, vw, vh] = svg.match(/viewBox="0 0 (\d+) (\d+)"/).map(Number);
  const W = 1600, H = Math.round((vh / vw) * W);
  await page.setViewportSize({ width: W, height: H });
  await page.setContent(`<html><body style="margin:0;background:transparent">${svg.replace(/width="\d+" height="\d+"/, `width="${W}" height="${H}"`)}</body></html>`);
  await page.waitForTimeout(150);
  const png = path.join(SVG, `${name}.png`);
  await page.screenshot({ path: png, omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
  // Flattened on white: the page shows them with mix-blend-mode: multiply, so white disappears on any light background.
  const enc = ['-background', '#ffffff', '-flatten', '-quality', '78', '-define', 'webp:method=6'];
  execFileSync('convert', [png, ...enc, path.join(OUT, `${name}.webp`)]);
  execFileSync('convert', [png, ...enc, '-resize', '800x', path.join(OUT, `${name}-800.webp`)]);
  console.log(name, `${W}x${H}`, Math.round(fs.statSync(path.join(OUT, `${name}.webp`)).size / 1024) + ' KB');
}
await browser.close();
