/* build.mjs — oferta „Obsługa prawna flipów mieszkaniowych”.
   content.json → oferta.html (+ styles.css, fonts/, assets/) → PDF A4 przez Playwright/Chromium.
   Po drodze sprawdza: fonty załadowane, nic nie wystaje poza stronę, PDF ma dokładnie 2 strony i < 4 MB.
   Użycie: npm run build            (PDF)
           npm run preview          (PDF + podgląd PNG 150 dpi w podglad/) */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const C = JSON.parse(fs.readFileSync(path.join(ROOT, 'content.json'), 'utf8'));
const WANT_PNG = process.argv.includes('--png');
const MAX_BYTES = 4 * 1024 * 1024;
const NB = ' ';

/* ---------- typografia polska ---------- */
function typo(input) {
  let s = String(input).replaceAll('{{VALID_UNTIL}}', C.validUntil);
  s = s.replace(/"([^"]*)"/g, '„$1”');                               // cudzysłowy „…”
  s = s.replace(/ - /g, ' – ');                                       // półpauza we wtrąceniach
  s = s.replace(/(\d) (?=\S)/g, `$1${NB}`);                           // liczba łączy się z następnym słowem (1 500 zł, 12 miesięcy)
  s = s.replace(/(^|[\s(„])(adw\.|dr|ul\.|m\.in\.|nr) /g, `$1$2${NB}`); // skróty
  for (let i = 0; i < 2; i++) s = s.replace(/(^|[\s („])([aiouwzAIOUWZ]) /g, `$1$2${NB}`); // spójniki/przyimki jednoliterowe
  s = s.replace(/ –/g, `${NB}–`);                                     // półpauza nie zaczyna wiersza
  return s;
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const t = (s) => esc(typo(s));
const money = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, NB);  // 1500 → 1 500

const icon = (name, cls = 'ic') => fs.readFileSync(path.join(ROOT, 'icons', `${name}.svg`), 'utf8').trim()
  .replace(/class="[^"]*"/, `class="${cls}" aria-hidden="true"`).replace(/ width="24" height="24"/, '');

/* ---------- strona 1 ---------- */
const P1 = C.page1, P2 = C.page2, F = C.firm;

const check = icon('check', 'tick');

// tytuł: końcówka z titleAccent idzie do drugiego wiersza w jasnym błękicie (jak na okładkach bloga)
const title = (() => {
  const a = P1.titleAccent;
  if (!a || !P1.title.endsWith(a)) return t(P1.title);
  return `${t(P1.title.slice(0, -a.length).trim())}<br><span class="accent">${t(a)}</span>`;
})();

const card = (p) => `
      <article class="card${p.featured ? ' featured' : ''}">
        ${p.badge ? `<span class="badge">${t(p.badge)}</span>` : ''}
        <div class="card-art">${icon(p.icon, 'art')}</div>
        <p class="kicker">${t(p.name)}</p>
        <h2 class="card-title">${t(p.subtitle)}</h2>
        <p class="price"><span class="amount">${money(p.price)}</span><span class="unit">${t(P1.priceUnit)}</span></p>
        <h3 class="label">${t(P1.forWhomLabel)}</h3>
        <p class="forwhom">${t(p.forWhom)}</p>
        <h3 class="label">${t(P1.itemsLabel)}</h3>
        <ul class="items">${p.items.map((i) => `<li>${check}<span>${t(i)}</span></li>`).join('')}</ul>
      </article>`;

const page1 = `
  <section class="page p1">
    <header class="hero">
      <img class="hero-img" src="assets/hero.jpg" alt="">
      <div class="hero-shade"></div>
      <div class="hero-top">
        <img class="logo" src="assets/logo-on-dark.png" alt="${esc(F.name)}">
        <p class="tag">${t(P1.headerTag)}</p>
      </div>
      <div class="hero-text">
        <p class="eyebrow">${t(P1.eyebrow)}</p>
        <h1>${title}</h1>
        <p class="lead">${t(P1.lead)}</p>
      </div>
      <p class="hero-url">${esc(F.www)}</p>
    </header>
    <main class="p1-main">
      <div class="cards">${P1.packages.map(card).join('')}
      </div>
      <ul class="highlights">
        ${P1.highlights.map((h) => `<li><span class="tile">${icon(h.icon)}</span><span>${t(h.text)}</span></li>`).join('\n        ')}
      </ul>
    </main>
    <footer class="p1-foot">
      <div class="fcols">
        <p><strong>${t(F.nameLine1)}</strong><br>${t(F.nameLine2)}<br>${t(F.street)}, ${t(F.city)}</p>
        <p>tel. ${t(F.phone)}<br>${esc(F.email)}<br>${esc(F.www)}</p>
      </div>
      <p class="fnote">${t(P1.footerNote)}</p>
    </footer>
  </section>`;

/* ---------- strona 2 ---------- */
const dash = '<span class="no">–</span>';
const pk = P1.packages;
const col = (i, extra = '') => `${extra}${pk[i].featured ? ' f' : ''}`.trim();

// tytuł pierwszej sekcji siedzi w nagłówku tabeli (oszczędza wiersz)
const tableRows = P2.sections.map((sec, si) => `${si ? `
        <tr class="sec"><th colspan="${pk.length + 1}">${t(sec.title)}</th></tr>` : ''}${sec.rows.map((r, ri) => `
        <tr class="${ri % 2 ? 'alt' : ''}"><td class="item">${t(r.label)}</td>${r.in.map((v, i) => `<td class="${col(i, 'mark')}">${v ? check : dash}</td>`).join('')}</tr>`).join('')}`).join('');

const page2 = `
  <section class="page p2">
    <header class="p2-head">
      <p class="eyebrow">${t(P2.eyebrow)}</p>
      <h2 class="p2-title">${t(P2.title)}</h2>
    </header>
    <table class="cmp">
      <colgroup><col class="c-item">${pk.map(() => '<col class="c-pk">').join('')}</colgroup>
      <thead>
        <tr class="sec first"><th class="item">${t(P2.sections[0].title)}</th>${pk.map((p, i) => `<th class="${col(i, 'pk')}"><span class="pk-name">${t(p.short)}</span></th>`).join('')}</tr>
      </thead>
      <tbody>${tableRows}
      </tbody>
      <tfoot>
        <tr class="price-row"><th class="item">${t(P2.priceRowLabel)}</th>${pk.map((p, i) => `<td class="${col(i, 'mark')}">${money(p.price)}${NB}${C.currency}</td>`).join('')}</tr>
      </tfoot>
    </table>

    <section class="steps">
      <h3 class="h3">${t(P2.steps.title)}</h3>
      <ol>${P2.steps.items.map((s, i) => `<li><span class="num">${i + 1}</span><p>${t(s)}</p></li>`).join('')}</ol>
    </section>

    <div class="two">
      <section class="extras">
        <h3 class="h3">${t(P2.extras.title)}</h3>
        <ul>${P2.extras.items.map((x) => `<li>${t(x.label)}${NB}– <b>${t(x.price.length <= 22 ? x.price.replaceAll(' ', NB) : x.price)}</b></li>`).join('')}</ul>
      </section>
      <section class="terms">
        <h3 class="h3">${t(P2.terms.title)}</h3>
        <ul>${P2.terms.items.map((x) => `<li>${t(x)}</li>`).join('')}</ul>
      </section>
    </div>

    <aside class="cta">
      <p class="cta-text">${t(P2.cta.text)}</p>
      <ul class="cta-contacts">
        <li>${icon('phone')}<span>${t(F.phone)}</span></li>
        <li>${icon('mail')}<span>${esc(F.email)}</span></li>
        <li>${icon('globe')}<span>${esc(F.www)}</span></li>
      </ul>
    </aside>
    <footer class="pnum">${esc(P2.pageNumber)}</footer>
  </section>`;

const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>${esc(typo(P1.title))} – ${esc(typo(F.nameLine1))}</title>
<meta name="author" content="${esc(F.name)}">
<link rel="stylesheet" href="styles.css">
</head>
<body>${page1}
${page2}
</body>
</html>
`;

const htmlPath = path.join(ROOT, 'oferta.html');
fs.writeFileSync(htmlPath, html);

/* ---------- render ---------- */
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: WANT_PNG ? 150 / 96 : 1 });
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

const report = await page.evaluate(() => {
  const out = { fonts: {}, overflow: [], pages: document.querySelectorAll('.page').length };
  for (const f of ['Lora']) out.fonts[f] = document.fonts.check(`12px "${f}"`) && [...document.fonts].some((x) => x.family.replace(/"/g, '') === f && x.status === 'loaded');
  document.querySelectorAll('.page').forEach((pg, n) => {
    const P = pg.getBoundingClientRect();
    pg.querySelectorAll('*').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;
      if (r.bottom > P.bottom + 0.5 || r.right > P.right + 0.5 || r.left < P.left - 0.5 || r.top < P.top - 0.5) {
        out.overflow.push(`strona ${n + 1}: <${el.tagName.toLowerCase()} class="${el.className?.baseVal ?? el.className}"> wystaje o ${Math.max(r.bottom - P.bottom, r.right - P.right).toFixed(1)} px`);
      }
    });
    // zapas: luka nad blokiem dociśniętym do dołu (pasek wyróżników / ramka CTA)
    const pinned = pg.querySelector('.highlights, .cta');
    const prev = pinned?.previousElementSibling;
    if (pinned && prev) out[`free${n + 1}`] = +((pinned.getBoundingClientRect().top - prev.getBoundingClientRect().bottom) * 25.4 / 96).toFixed(1);
  });
  return out;
});

const pdfPath = path.join(ROOT, C.output);
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true });

if (WANT_PNG) {
  const dir = path.join(ROOT, 'podglad');
  fs.mkdirSync(dir, { recursive: true });
  const pages = await page.$$('.page');
  for (let i = 0; i < pages.length; i++) await pages[i].screenshot({ path: path.join(dir, `strona-${i + 1}.png`) });
}
await browser.close();

/* ---------- kontrola ---------- */
const pdf = fs.readFileSync(pdfPath);
const pdfPages = (pdf.toString('latin1').match(/\/Type\s*\/Page(?!s)/g) || []).length;
const problems = [];
if (Object.values(report.fonts).includes(false)) problems.push(`fonty nie załadowane: ${JSON.stringify(report.fonts)}`);
if (report.overflow.length) problems.push(...report.overflow.slice(0, 10));
if (pdfPages !== 2) problems.push(`PDF ma ${pdfPages} stron(y), a powinien mieć 2`);
if (pdf.length >= MAX_BYTES) problems.push(`PDF ma ${(pdf.length / 1048576).toFixed(2)} MB (limit 4 MB)`);

console.log(`PDF: ${path.relative(process.cwd(), pdfPath)} – ${pdfPages} str., ${(pdf.length / 1024).toFixed(0)} KB`);
console.log(`Zapas miejsca: str. 1 – ${report.free1} mm, str. 2 – ${report.free2} mm`);
if (WANT_PNG) console.log('Podgląd: podglad/strona-1.png, podglad/strona-2.png');
if (problems.length) {
  console.error('\nPROBLEMY:\n- ' + problems.join('\n- '));
  process.exit(1);
}
console.log('OK: 2 strony, nic nie wystaje, fonty osadzone.');
