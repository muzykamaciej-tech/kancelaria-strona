/* build-demo.mjs — składa podgląd CRM do jednego pliku HTML: interfejs z src/ + kod serwera
   uruchomiony w przeglądarce na symulacji usług Google (gas-mock.js) + dane fikcyjne.
   Wynik: crm/demo/index.html (pełna strona do otwarcia lokalnie) i opcjonalnie wersja bez
   szkieletu <html> do publikacji jako Artifact (argument: ścieżka pliku wyjściowego).
   Tworzy też dev/out/server-bundle.js do testów w Node. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(DIR, '..', 'src');
const read = (f) => fs.readFileSync(path.join(SRC, f), 'utf8');
const SERVER_FILES = ['Konfiguracja.js', 'Wspolne.js', 'Baza.js', 'Dostep.js', 'Api.js', 'Zadania.js', 'Admin.js', 'Import.js'];

export function serverBundle() {
  const src = SERVER_FILES.map(read).join('\n\n');
  const names = [...src.matchAll(/^function ([A-Za-z][A-Za-z0-9]*[A-Za-z0-9])\s*\(/gm)].map((m) => m[1]);
  const globals = ['SpreadsheetApp', 'DriveApp', 'Utilities', 'ScriptApp', 'Gmail', 'Calendar', 'CalendarApp', 'MailApp', 'Session', 'PropertiesService', 'CacheService', 'LockService', 'MimeType', 'HtmlService'];
  return `function createServer(G) {\n  var ${globals.map((g) => `${g} = G.${g}`).join(', ')};\n${src}\n  return { ${names.join(', ')}, _priv: { parseFormText_: parseFormText_, sharedFactory_: sharedFactory_, idFromLink_: idFromLink_, parseFrontmatter_: parseFrontmatter_ } };\n}\nif (typeof module !== 'undefined' && module.exports) module.exports = { createServer };\n`;
}

function clientHtml(demoScripts) {
  const shared = /function sharedFactory_\(\)[\s\S]*$/.exec(read('Wspolne.js'))[0];
  return read('Index.html')
    .replace("<?!= include_('Styl') ?>", () => read('Styl.html'))
    .replace("<?!= sharedSource_() ?>", () => shared)
    .replace("<?!= include_('Aplikacja') ?>", () => demoScripts + '\n' + read('Aplikacja.html'))
    .replace("<?!= include_('Widoki') ?>", () => read('Widoki.html'));
}

const DEMO_RUNTIME = `
(function () {
  var today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  var mock, server, seeded;
  function fresh(seed) {
    mock = createGasMock({ user: DEMO_USERS.OWNER, owner: DEMO_USERS.OWNER, gmail: demoGmail(), calendars: demoCalendars(SH, today) });
    server = createServer(mock.globals);
    seeded = !!seed;
    if (seed) seedDemo(server, mock, SH, today);
  }
  fresh(true);
  function runner(ok, bad) {
    return new Proxy({}, { get: function (_, name) {
      if (name === 'withSuccessHandler') return function (fn) { return runner(fn, bad); };
      if (name === 'withFailureHandler') return function (fn) { return runner(ok, fn); };
      return function () {
        var args = JSON.parse(JSON.stringify(Array.prototype.slice.call(arguments)));
        setTimeout(function () {
          var out;
          try {
            if (typeof server[name] !== 'function' || /_$/.test(name)) throw new Error('Script function not found: ' + name);
            out = server[name].apply(null, args);
            out = out === undefined ? null : JSON.parse(JSON.stringify(out));
          } catch (e) { if (bad) bad(e); else console.error(e); return; }
          if (ok) ok(out);
        }, 90 + Math.random() * 160);
      };
    } });
  }
  window.google = { script: { run: runner(null, null) } };
  var USERS = [
    [DEMO_USERS.OWNER, 'Maciej Muzyka — administrator, obie kancelarie'],
    [DEMO_USERS.KPK, 'Katarzyna Popik-Konarzewska — wspólniczka, KR'],
    [DEMO_USERS.KW, 'Katarzyna Walaszek — starsza prawniczka, KR'],
    [DEMO_USERS.JUN1, (window.DEMO_NAMES && DEMO_NAMES.JUN1 || 'Młodsza prawniczka A') + ' — młodsza prawniczka, KN i KR'],
    [DEMO_USERS.JUN2, (window.DEMO_NAMES && DEMO_NAMES.JUN2 || 'Młodsza prawniczka B') + ' — młodsza prawniczka, KR'],
    ['ktos.obcy@gmail.com', 'Konto spoza zespołu (brak dostępu)'],
    ['setup', 'Nowa instalacja — ekran konfiguracji']
  ];
  var pill = document.createElement('div');
  pill.className = 'demo-pill';
  pill.innerHTML = '<b>Podgląd</b><span>dane fikcyjne</span><label for="demo-as">Zobacz jako</label><select id="demo-as">' +
    USERS.map(function (u) { return '<option value="' + u[0] + '">' + u[1] + '</option>'; }).join('') + '</select>';
  document.body.appendChild(pill);
  document.getElementById('demo-as').addEventListener('change', function (e) {
    var v = e.target.value;
    if (v === 'setup') { fresh(false); S.setup = null; }
    else { if (!seeded) fresh(true); mock.setUser(v); }
    S.route = 'pulpit'; S.cache = { gmail: {}, hist: {} }; S.tab = {}; S.filt = {};
    reload(true);
  });
})();
`;
const DEMO_CSS = `<style>
.demo-pill { position: fixed; right: max(12px, env(safe-area-inset-right, 0px)); bottom: calc(12px + env(safe-area-inset-bottom, 0px)); z-index: 90; display: flex; align-items: center; gap: 8px; padding: 6px 8px 6px 12px; border-radius: 99px; background: var(--fg); color: var(--bg); font-size: 12px; box-shadow: var(--shadow-pop); max-width: calc(100vw - 24px); }
.demo-pill b { font-weight: 700; }
.demo-pill span { opacity: 0.75; }
.demo-pill label { opacity: 0.75; }
.demo-pill select { background: var(--bg); color: var(--fg); border: 0; border-radius: 99px; padding: 3px 8px; font-size: 12px; max-width: 46vw; }
.work { padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px)) !important; }
.toasts { bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important; }
@media (max-width: 560px) { .demo-pill span, .demo-pill label { display: none; } }
</style>`;

export function build(artifactOut, namesFile) {
  const outDir = path.join(DIR, 'out');
  fs.mkdirSync(outDir, { recursive: true });
  const bundle = serverBundle();
  fs.writeFileSync(path.join(outDir, 'server-bundle.js'), bundle);
  /* Prawdziwe imiona młodszych prawników tylko w prywatnym podglądzie (plik poza repozytorium). */
  const names = namesFile ? fs.readFileSync(namesFile, 'utf8') : '{}';
  const demoScripts = ['<script>window.DEMO_NAMES = ' + JSON.stringify(JSON.parse(names)) + ';</script>', '<script>', fs.readFileSync(path.join(DIR, 'gas-mock.js'), 'utf8'), '</script>',
    '<script>', bundle, '</script>', '<script>', fs.readFileSync(path.join(DIR, 'demo-seed.js'), 'utf8'), '</script>',
    '<script>', DEMO_RUNTIME, '</script>'].join('\n');
  let html = clientHtml(demoScripts).replace('</head>', DEMO_CSS + '\n</head>');
  html = html.replace('<title>CRM Kancelarii</title>', '<title>CRM Kancelarii</title>');
  const demoDir = path.join(DIR, '..', 'demo');
  fs.mkdirSync(demoDir, { recursive: true });
  fs.writeFileSync(path.join(demoDir, 'index.html'), html);
  if (artifactOut) {
    /* Artifact: bez <!DOCTYPE>/<html>/<head>/<body> — platforma dodaje własny szkielet. */
    const head = /<head>([\s\S]*?)<\/head>/.exec(html)[1].replace(/<base[^>]*>\s*/, '').replace(/<meta charset[^>]*>\s*/, '').replace(/<meta name="viewport"[^>]*>\s*/, '');
    const body = /<body>([\s\S]*?)<\/body>/.exec(html)[1];
    fs.writeFileSync(artifactOut, head.trim() + '\n' + body.trim() + '\n');
  }
  return path.join(demoDir, 'index.html');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const i = process.argv.indexOf('--names');
  const names = i > 0 ? process.argv[i + 1] : '';
  const out = process.argv.slice(2).filter((a, j, all) => a !== '--names' && all[j - 1] !== '--names')[0];
  console.log('Zbudowano:', build(out, names));
}
