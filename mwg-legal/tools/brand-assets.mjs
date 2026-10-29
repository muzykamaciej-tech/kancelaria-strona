/* brand-assets.mjs — renders raster brand files from the SVG logo: og.png (1200x630), logo.png, favicon.png,
   apple-touch-icon.png. Local tool (Playwright); outputs are committed to static/. Usage: node tools/brand-assets.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { logo } from '../src/layout.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch {
  ({ chromium } = require(path.join(execFileSync('npm', ['root', '-g']).toString().trim(), 'playwright')));
}
const font = (f) => `data:font/woff2;base64,${fs.readFileSync(path.join(ROOT, 'static/fonts', f)).toString('base64')}`;
const img = (f) => `data:image/webp;base64,${fs.readFileSync(path.join(ROOT, 'static/img/ill', f)).toString('base64')}`;
const css = `@font-face{font-family:Jost;font-weight:400;src:url(${font('jost-latin-400-normal.woff2')})}
@font-face{font-family:Jost;font-weight:400;src:url(${font('jost-latin-ext-400-normal.woff2')});unicode-range:U+0100-02BA}
@font-face{font-family:Jost;font-weight:300;src:url(${font('jost-latin-300-normal.woff2')})}
@font-face{font-family:Jost;font-weight:300;src:url(${font('jost-latin-ext-300-normal.woff2')});unicode-range:U+0100-02BA}
body{margin:0}`;

const jobs = [
  ['static/img/og.png', 1200, 630, `<div style="width:1200px;height:630px;position:relative;overflow:hidden;background:linear-gradient(180deg,#e7e9ec,#f7f8f9);font-family:Jost">
<img src="${img('hero-800.webp')}" style="position:absolute;right:-40px;top:-30px;height:700px;mix-blend-mode:multiply">
<div style="position:absolute;left:80px;top:120px;width:560px;color:#17212d">${logo().replace('class="logo"', 'style="width:520px"')}
<div style="margin-top:70px;font-size:40px;letter-spacing:.09em;text-transform:uppercase;color:#2b3746">Kancelaria dla biznesu</div>
<div style="margin-top:18px;font-size:24px;font-weight:300;color:#4a5562;line-height:1.45">Prawo korporacyjne i podatkowe,<br>prawo nieruchomości i prawo pracy</div>
<div style="margin-top:34px;width:120px;height:3px;background:#1763d8"></div></div></div>`],
  ['static/img/logo.png', 1200, 195, `<div style="width:1200px;height:195px;color:#17212d;background:transparent">${logo().replace('class="logo"', 'style="width:1200px;display:block"')}</div>`],
  ['static/favicon.png', 64, 64, `<img src="data:image/svg+xml;base64,${fs.readFileSync(path.join(ROOT, 'static/favicon.svg')).toString('base64')}" style="width:64px;height:64px;display:block">`],
  ['static/apple-touch-icon.png', 180, 180, `<div style="width:180px;height:180px;background:#0d1f3c;display:grid;place-items:center"><svg viewBox="0 0 64 64" width="120" height="120"><path d="M15 50L32 13l17 37" fill="none" stroke="#fff" stroke-width="3"/></svg></div>`],
];
const browser = await chromium.launch();
const page = await browser.newPage();
for (const [out, w, h, html] of jobs) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(`<html><head><style>${css}</style></head><body>${html}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(ROOT, out), omitBackground: out.endsWith('logo.png'), clip: { x: 0, y: 0, width: w, height: h } });
  console.log(out);
}
await browser.close();
