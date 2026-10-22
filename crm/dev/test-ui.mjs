/* test-ui.mjs — test podglądu w Chromium (Playwright): wszystkie widoki, formularz, przyjęcie
   zapytania, kalkulator, dostęp per osoba, ekran konfiguracji, telefon i tryb ciemny.
   Uruchom: node crm/dev/build-demo.mjs && node crm/dev/test-ui.mjs [katalog_na_zrzuty] */
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch (e) { pw = require('/opt/node22/lib/node_modules/playwright'); }
const DIR = path.dirname(fileURLToPath(import.meta.url));
const URL = 'file://' + path.join(DIR, '..', 'demo', 'index.html');
const SHOTS = process.argv[2] || path.join(DIR, 'out', 'shots');
fs.mkdirSync(SHOTS, { recursive: true });

let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('FAIL', m); } };
const browser = await pw.chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium') ? undefined : undefined });
const errors = [];
async function open(opts) {
  const ctx = await browser.newContext(opts);
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.(googleapis|gstatic)|ERR_|net::/.test(m.text())) errors.push('console: ' + m.text()); });
  await page.goto(URL);
  await page.waitForSelector('.shell', { timeout: 15000 });
  return page;
}
const shot = (page, name) => page.screenshot({ path: path.join(SHOTS, name + '.png'), fullPage: false });
const noViewError = async (page, label) => ok(!(await page.locator('.banner:has-text("Błąd widoku")').count()), 'widok bez błędu: ' + label);

const page = await open({ viewport: { width: 1440, height: 900 } });
await page.waitForTimeout(300);
ok(await page.locator('.stat').count() === 4, 'pulpit: 4 kafle');
ok(await page.locator('text=Do odpowiedzi').count() > 0, 'pulpit: lista do odpowiedzi');
await shot(page, '01-pulpit');

for (const v of ['zadania', 'zapytania', 'klienci', 'sprawy', 'terminy', 'korespondencja', 'czas', 'umowy', 'rozliczenia', 'konflikt', 'zespol', 'ustawienia', 'import']) {
  await page.click(`.nav a[data-go="${v}"]`);
  await page.waitForTimeout(120);
  await noViewError(page, v);
  if (['zadania', 'zapytania', 'sprawy', 'terminy', 'zespol', 'ustawienia', 'import'].includes(v)) await shot(page, '02-' + v);
}

/* Karta sprawy i zakładki */
await page.click('.nav a[data-go="sprawy"]');
await page.click('table.t tbody tr >> nth=0');
await page.waitForSelector('.rec-head');
await shot(page, '03-sprawa');
for (const t of ['zad', 'terminy', 'kor', 'czas', 'rozl', 'mail', 'hist']) {
  await page.click(`.tabs button[data-tab="${t}"]`);
  await page.waitForTimeout(500);
  await noViewError(page, 'sprawa/' + t);
}
ok(await page.locator('.hist').count() > 0, 'historia sprawy wczytana');

/* Nowa sprawa z formularza: nowy klient wpisany w polu wyboru */
await page.click('[data-act="quick"]');
await page.click('.modal [data-act="new"][data-t="sprawy"]');
await page.waitForSelector('#frm');
await page.fill('#f-tytul', 'Test: zniesienie współwłasności');
await page.fill('#f-klient_id', 'Klient Testowy Nowy');
await page.keyboard.press('Escape').catch(() => {});
if (!(await page.locator('#frm').count())) { await page.click('[data-act="quick"]'); await page.click('.modal [data-act="new"][data-t="sprawy"]'); await page.fill('#f-tytul', 'Test: zniesienie współwłasności'); await page.fill('#f-klient_id', 'Klient Testowy Nowy'); }
await page.click('#frm h2');
await page.click('#frm button[type=submit]');
await page.waitForSelector('.toast', { timeout: 5000 });
ok((await page.locator('.toast').first().textContent()).includes('Dodano'), 'zapis nowej sprawy');

/* Zapytanie z konfliktem interesów (Iwona Adamczyk = strona przeciwna w sprawie KR) */
await page.fill('#q', 'Iwona Adamczyk');
await page.waitForTimeout(250);
await page.click('.search-res a[data-go^="zapytanie"]');
await page.waitForSelector('.rec-head');
ok(await page.locator('.chip:has-text("Strona przeciwna")').count() > 0, 'konflikt: strona przeciwna wykryta na karcie zapytania');
await shot(page, '04-zapytanie-konflikt');

/* Przyjęcie zapytania → sprawa */
await page.click('.nav a[data-go="zapytania"]');
await page.click('.card:has-text("Joanna Kamińska")');
await page.waitForSelector('[data-act="zap-accept"]');
await page.click('[data-act="zap-accept"]');
await page.fill('#a-tytul', 'Gazociąg — służebność przesyłu');
await page.click('#acc-form button[type=submit]');
await page.waitForSelector('.teczka', { timeout: 5000 });
ok(/\(\d+\)/.test(await page.locator('.rec-head .teczka').textContent()), 'przyjęcie: sprawa z numerem teczki');

/* Kalkulator terminu */
await page.click('.nav a[data-go="terminy"]');
await page.fill('#c-start', '2026-01-31');
await page.selectOption('#c-u', 'm');
await page.fill('#c-n', '1');
await page.waitForTimeout(100);
ok((await page.locator('#c-out .mono').textContent()).trim() === '2026-03-02', 'kalkulator: 31.01 + 1 mies. → 2.03.2026');

/* Zadania: szybkie dodawanie jedną linijką (sprawa po numerze, osoba po @, data słownie, pilne) */
await page.click('.nav a[data-go="pulpit"]');
await page.fill('#qa-pulpit', 'Sprawdzić akta #600 @Bednarek jutro !');
await page.waitForTimeout(100);
ok((await page.locator('#qa-pulpit-hint').textContent()).includes('Maciej Bednarek'), 'szybkie dodawanie: podpowiedź z osobą');
await page.press('#qa-pulpit', 'Enter');
await page.waitForSelector('.toast:has-text("Zlecono: Maciej Bednarek")', { timeout: 5000 });
ok(true, 'szybkie dodawanie: zlecono');
/* Własne zadanie: odhaczenie w karcie zadania */
await page.click('.nav a[data-go="zadania"]');
await page.click('li.task:has-text("Przejrzeć i wysłać draft oferty")');
await page.waitForSelector('.modal [data-act="task-do"][data-a="zrobione"]');
await shot(page, '10-zadanie-karta');
await page.click('.modal [data-act="task-do"][data-a="zrobione"]');
await page.waitForSelector('.toast:has-text("Zrobione")', { timeout: 5000 });
ok(await page.locator('.modal .chip:has-text("Zrobione")').count() > 0, 'zadanie zamknięte w karcie');
await page.click('.modal [data-act="close"]');
/* Import kalendarza */
await page.click('.nav a[data-go="import"]');
await page.click('[data-act="cal-load"]');
await page.waitForSelector('[data-act="cal-commit"]', { timeout: 5000 });
ok(/wpisów TERMIN/.test(await page.locator('.banner.info').last().textContent()), 'kalendarz: podsumowanie wczytanych wpisów');
ok(await page.locator('.chip:has-text("pewne")').count() >= 3, 'kalendarz: pewne dopasowania do spraw');
await shot(page, '11-import-kalendarza');
await page.click('[data-act="cal-commit"]');
await page.waitForSelector('.banner.info:has-text("KR:")', { timeout: 8000 });
await page.click('.nav a[data-go="terminy"]');
ok(await page.locator('h2:has-text("Do weryfikacji")').count() === 1, 'terminy: grupa do weryfikacji po imporcie');
/* Wspólniczka: zwrot do poprawy */
await page.selectOption('#demo-as', 'katarzyna.popik@kancelariarodzinna.com');
await page.waitForSelector('.shell');
await page.waitForTimeout(600);
await page.click('.nav a[data-go="zadania"]');
await page.click('button[data-val="sprawdz"]');
await page.click('li.task:has-text("Wniosek dowodowy")');
await page.click('.modal [data-act="task-do"][data-a="zwroc"]');
await page.fill('#tk-note', 'Dodaj świadka z przedszkola');
await page.click('.modal [data-go-now="1"]');
await page.waitForSelector('.toast:has-text("Zwrócono do poprawy")', { timeout: 5000 });
ok(await page.locator('.modal .kom:has-text("Do poprawy: Dodaj świadka")').count() === 1, 'zwrot: komentarz w karcie zadania');
await page.click('.modal [data-act="close"]');
await page.click('button[data-val="zespol"]');
ok(await page.locator('table.t tbody tr').count() >= 5, 'zadania: widok zespołu');
await shot(page, '12-zadania-zespol');

/* Dostęp: starsza prawniczka KR */
await page.selectOption('#demo-as', 'katarzyna.walaszek@kancelariarodzinna.com');
await page.waitForTimeout(900);
ok(await page.locator('.seg').count() === 0, 'KR: brak przełącznika kancelarii');
await page.click('.nav a[data-go="sprawy"]');
ok(await page.locator('.firm.KN').count() === 0, 'KR: brak spraw KN');
ok(await page.locator('.nav a[data-go="ustawienia"]').count() === 0, 'KR: brak ustawień');
await shot(page, '05-dostep-kr');
await page.selectOption('#demo-as', 'ktos.obcy@gmail.com');
await page.waitForTimeout(900);
ok(await page.locator('h1:has-text("Brak dostępu")').count() === 1, 'obce konto: brak dostępu');

/* Nowa instalacja */
await page.selectOption('#demo-as', 'setup');
await page.waitForSelector('h1:has-text("Konfiguracja CRM")');
await shot(page, '06-konfiguracja');
await page.click('[data-act="setup-go"]');
await page.waitForSelector('.shell', { timeout: 8000 });
await page.waitForSelector('.modal h2:has-text("Udostępnienia")');
ok(await page.locator('.modal .small:has-text("edycja")').count() > 0, 'po konfiguracji: raport udostępnień');
await page.click('.modal [data-act="close"]');
await page.click('.nav a[data-go="zespol"]');
ok(await page.locator('table.t tbody tr').count() >= 4, 'po konfiguracji: zespół dodany (administrator + 3 osoby ze stron)');
await page.close();

/* Telefon + tryb ciemny */
const phone = await open({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await phone.waitForTimeout(300);
const overflow = await phone.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
ok(!overflow, 'telefon: bez przewijania w poziomie');
await shot(phone, '07-telefon-pulpit');
await phone.click('[data-act="menu"]');
await phone.waitForTimeout(250);
await phone.click('.nav a[data-go="sprawy"]');
await phone.waitForTimeout(250);
await shot(phone, '08-telefon-sprawy');
const dark = await open({ viewport: { width: 1280, height: 820 }, colorScheme: 'dark' });
await dark.click('.nav a[data-go="zapytania"]');
await shot(dark, '09-ciemny-zapytania');

ok(errors.length === 0, 'błędy JS: ' + errors.join(' | '));
await browser.close();
console.log(`pass ${pass}, fail ${fail}; zrzuty: ${SHOTS}`);
process.exit(fail ? 1 : 0);
