/* test-server.mjs — testy logiki serwera na symulacji usług Google (bez wdrażania).
   Uruchom: node crm/dev/test-server.mjs  → wynik „fail 0”. */
import { createRequire } from 'node:module';
import { serverBundle } from './build-demo.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const DIR = path.dirname(fileURLToPath(import.meta.url));
fs.mkdirSync(path.join(DIR, 'out'), { recursive: true });
fs.writeFileSync(path.join(DIR, 'out', 'server-bundle.js'), serverBundle());
const { createServer } = require('./out/server-bundle.js');
const { createGasMock } = require('./gas-mock.js');
const { seedDemo, demoGmail, DEMO_USERS: U } = require('./demo-seed.js');

let pass = 0, fail = 0;
const ok = (cond, msg) => { if (cond) pass++; else { fail++; console.log('FAIL', msg); } };
const eq = (a, b, msg) => ok(JSON.stringify(a) === JSON.stringify(b), msg + ' — oczekiwano ' + JSON.stringify(b) + ', jest ' + JSON.stringify(a));
const throws = (fn, code, msg) => { try { fn(); ok(false, msg + ' (nie rzuciło)'); } catch (e) { ok(String(e.message).indexOf(code) === 0, msg + ' — błąd: ' + e.message); } };

const mock = createGasMock({ user: U.OWNER, owner: U.OWNER, gmail: demoGmail() });
const api = createServer(mock.globals);
const SH = api._priv.sharedFactory_();
const as = (u, fn) => { mock.setUser(u); return fn(); };

/* ---------- Daty: święta, 24 h robocze, kalkulator terminów ---------- */
eq(SH.ymdOf(SH.easter(2026)), '2026-04-05', 'Wielkanoc 2026');
eq(SH.holidayName('2026-06-04'), 'Boże Ciało', 'Boże Ciało 2026');
eq(SH.holidayName('2026-12-24'), 'Wigilia', 'Wigilia od 2025');
eq(SH.holidayName('2024-12-24'), '', 'Wigilia przed 2025 to dzień roboczy');
eq(SH.addWorkingHours('2026-10-23T15:00', 24), '2026-10-26T15:00', 'pt 15:00 + 24 h robocze = pon 15:00');
eq(SH.addWorkingHours('2026-11-10T12:00', 24), '2026-11-12T12:00', '10.11 + 24 h z 11 listopada');
eq(SH.addWorkingHours('2026-10-24T10:00', 24), '2026-10-27T00:00', 'zgłoszenie w sobotę: liczy się od poniedziałku');
eq(SH.termEnd('2026-10-21', 14, 'd').end, '2026-11-04', '14 dni od 21.10.2026');
eq(SH.termEnd('2026-10-17', 14, 'd').end, '2026-11-02', 'koniec 31.10 (sobota) → 2.11 (1.11 niedziela-święto)');
eq(SH.termEnd('2026-10-28', 2, 'w').end, '2026-11-12', '2 tygodnie: koniec 11.11 (święto) → 12.11');
eq(SH.termEnd('2026-01-31', 1, 'm').end, '2026-03-02', '1 miesiąc od 31.01: 28.02 (sobota) → 2.03');
eq(SH.termEnd('2026-03-31', 1, 'm').raw, '2026-04-30', 'miesiąc bez 31. dnia → ostatni dzień');

/* ---------- Konfiguracja i dostęp ---------- */
eq(as('ktos@gmail.com', () => api.bootstrap()).state, 'setup', 'przed konfiguracją: ekran konfiguracji');
eq(as('ktos@gmail.com', () => api.bootstrap()).canSetup, false, 'obcy nie może konfigurować');
throws(() => as('ktos@gmail.com', () => api.apiSetup({})), 'FORBIDDEN', 'obcy nie uruchomi konfiguracji');
const today = '2026-10-21';
seedDemo(api, mock, SH, today);
const boot = as(U.OWNER, () => api.bootstrap());
eq(boot.state, 'ok', 'administrator: stan ok');
eq(boot.myFirms, ['KN', 'KR'], 'administrator widzi obie kancelarie');
ok(boot.data.sprawy.length === 11, 'sprawy w obu kancelariach: ' + boot.data.sprawy.length);
ok(boot.errors.length === 0, 'bez błędów: ' + boot.errors.join('; '));
const kw = as(U.KW, () => api.bootstrap());
eq(kw.myFirms, ['KR'], 'aplikantka KR widzi tylko KR');
ok(kw.data.sprawy.every((s) => s.kancelaria === 'KR') && kw.data.sprawy.length === 5, 'tylko sprawy KR');
throws(() => as(U.KW, () => api.apiSave('klienci', { kancelaria: 'KN', nazwa: 'X' })), 'FORBIDDEN', 'zapis do KN bez dostępu');
const knDb = boot.firms.find((f) => f.kod === 'KN').db_url.split('/d/')[1].split('/')[0];
throws(() => as(U.KW, () => mock.globals.SpreadsheetApp.openById(knDb)), 'Nie znaleziono', 'arkusz KN niedostępny dla KR także poza aplikacją');
eq(as('ktos@gmail.com', () => api.bootstrap()).state, 'denied', 'konto spoza zespołu: brak dostępu');
throws(() => as(U.JULIA, () => api.apiTeamSave({ email: 'a@b.pl', rola: 'admin', kancelarie: 'KN' })), 'FORBIDDEN', 'asystentka nie zarządza zespołem');
throws(() => as(U.JULIA, () => api.apiDelete('terminy', 'KN', boot.data.terminy[0].id)), 'FORBIDDEN', 'asystentka nie usuwa');

/* ---------- Numeracja, wyliczenia, konflikty zapisu ---------- */
const s593 = boot.data.sprawy.filter((s) => /^\d+$/.test(s.numer)).map((s) => +s.numer);
eq(Math.min(...s593), 593, 'pierwsza sprawa dostaje 593 (po 592 z Listy Spraw)');
ok(boot.data.sprawy.some((s) => s.numer === 'P28'), 'seria P: P28');
eq(boot.data.umowy.map((u) => u.nr).sort(), ['097/2026', '098/2026', '099/2026', '100/2026'].map((x) => x.replace(/^0/, '')).sort(), 'umowy 97–100/2026');
const zMazur = boot.data.zapytania.find((z) => z.nazwa === 'Robert Mazur');
ok(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(zMazur.termin_odpowiedzi), 'termin odpowiedzi 24 h robocze wyliczony');
const zKR = boot.data.zapytania.find((z) => z.nazwa === 'Sylwia Baran');
eq(zKR.termin_odpowiedzi || '', '', 'KR (model konsultacja): bez terminu 24 h');
const kor = boot.data.korespondencja.map((k) => k.nr).sort();
ok(kor.includes('P/2026/001') && kor.includes('W/2026/001'), 'rejestr korespondencji P/ i W/: ' + kor.join(','));
const stale = boot.data.klienci[0];
as(U.OWNER, () => api.apiSave('klienci', { kancelaria: stale.kancelaria, id: stale.id, telefon: '+48 111', _ver: stale.zmieniono }));
throws(() => as(U.JULIA, () => api.apiSave('klienci', { kancelaria: stale.kancelaria, id: stale.id, telefon: '+48 222', _ver: stale.zmieniono })), 'CONFLICT', 'równoczesna edycja wykryta');
const withCase = boot.data.sprawy[0];
throws(() => as(U.OWNER, () => api.apiDelete('klienci', withCase.kancelaria, withCase.klient_id)), 'IN_USE', 'nie usunie klienta ze sprawami');
throws(() => as(U.OWNER, () => api.apiSave('klienci', { kancelaria: 'KN', nazwa: 'Y', email: 'zly-adres' })), 'INVALID', 'walidacja e-maila');
throws(() => as(U.OWNER, () => api.apiSave('sprawy', { kancelaria: 'KN', tytul: 'Bez klienta' })), 'INVALID', 'sprawa wymaga klienta');
const formula = as(U.OWNER, () => api.apiSave('klienci', { kancelaria: 'KN', nazwa: '=HYPERLINK("x")', telefon: '+48 600 000 000' }));
eq(formula.telefon, '+48 600 000 000', 'telefon z plusem zapisany jako tekst');

/* ---------- Przyjęcie zapytania ---------- */
const zW = boot.data.zapytania.find((z) => z.nazwa === 'Ewa Szymańska');
const acc = as(U.OWNER, () => api.apiAccept('KN', zW.id, { tytul: 'WZ a plan ogólny', folder: true }));
ok(acc.klient && acc.klient.nazwa === 'Ewa Szymańska', 'przyjęcie: nowy klient');
ok(/^\d+$/.test(acc.sprawa.numer) && +acc.sprawa.numer > 593, 'przyjęcie: kolejny numer teczki ' + acc.sprawa.numer);
ok(/drive\.google\.com\/drive\/folders\//.test(acc.sprawa.folder), 'przyjęcie: folder sprawy');
eq(acc.zapytanie.status, 'Przyjęte', 'zapytanie ma status Przyjęte');
const offer = as(U.OWNER, () => api.apiSave('zapytania', { kancelaria: 'KN', id: zMazur.id, status: 'Oferta wysłana' }));
ok(offer.odpowiedz && offer.przypomnienie, 'oferta wysłana: data odpowiedzi i przypomnienie');
const hist = as(U.OWNER, () => api.apiHistory('KN', 'zapytania', zMazur.id));
ok(hist.length >= 2 && hist[0].akcja === 'zmiana', 'historia zmian zapytania');

/* ---------- Gmail ---------- */
const mails = as(U.OWNER, () => api.apiGmail(['tomasz.zielinski@example.com', 'zly"adres']));
eq(mails.length, 2, 'Gmail: dwa wątki klienta');

/* ---------- Zespół i udostępnienia ---------- */
const before = mock.st.files[knDb];
as(U.OWNER, () => api.apiTeamSave({ email: 'nowa.osoba@mecenasodnieruchomosci.pl', imie_nazwisko: 'Nowa Osoba', rola: 'odczyt', kancelarie: 'KN' }));
ok(before.viewers.has('nowa.osoba@mecenasodnieruchomosci.pl') && !before.editors.has('nowa.osoba@mecenasodnieruchomosci.pl'), 'rola „odczyt” = udostępnienie tylko do wyświetlania');
eq(as('nowa.osoba@mecenasodnieruchomosci.pl', () => api.bootstrap()).myFirms, ['KN'], 'nowa osoba widzi KN');
throws(() => as('nowa.osoba@mecenasodnieruchomosci.pl', () => api.apiSave('klienci', { kancelaria: 'KN', nazwa: 'Z' })), 'FORBIDDEN', 'odczyt: bez zapisu');
as(U.OWNER, () => api.apiTeamSave({ email: 'nowa.osoba@mecenasodnieruchomosci.pl', imie_nazwisko: 'Nowa Osoba', rola: 'odczyt', kancelarie: 'KN', aktywny: 'nie' }));
ok(!before.viewers.has('nowa.osoba@mecenasodnieruchomosci.pl'), 'wyłączenie dostępu zabiera udostępnienie');
eq(as('nowa.osoba@mecenasodnieruchomosci.pl', () => api.bootstrap()).state, 'denied', 'wyłączona osoba: brak dostępu');
throws(() => as(U.OWNER, () => api.apiTeamSave({ email: U.OWNER, rola: 'prawnik', kancelarie: 'KN' })), 'INVALID', 'administrator nie odbierze sobie roli');

/* ---------- Import: formularz strony ---------- */
const P = api._priv;
const parsed = P.parseFormText_('Imię i nazwisko: Jan Test\n\nemail: jan@example.com\n\nTelefon: \n\nPreferowany kontakt: TELEFON — klient prosi o oddzwonienie\n\nSytuacja: Słupy, rury, służebności\n\nNumer KW: —\n\nPilne: TAK — klient zaznaczył pilne terminy\n\nOpis sprawy: Akapit pierwszy.\n\nAkapit drugi: z dwukropkiem.\n\nStrona: Blog · https://mecenasodnieruchomosci.pl/blog/x');
eq(parsed['Opis sprawy'], 'Akapit pierwszy.\n\nAkapit drugi: z dwukropkiem.', 'opis wieloakapitowy');
eq(parsed.Strona, 'Blog · https://mecenasodnieruchomosci.pl/blog/x', 'pole Strona');
as(U.OWNER, () => {
  const D = mock.globals.DriveApp;
  const root = D.createFolder('Zgłoszenia ze strony');
  root.createFolder('2026-10-20 14.05 — Jan Test').createFile('opis-sprawy.txt', 'Imię i nazwisko: Jan Test\n\nemail: jan@example.com\n\nTelefon: +48 500 500 500\n\nPreferowany kontakt: TELEFON — klient prosi o oddzwonienie\n\nSytuacja: Słupy, rury, służebności\n\nNumer KW: —\n\nPilne: nie\n\nOpis sprawy: Słup na środku działki.\n\nStrona: Strona główna · https://mecenasodnieruchomosci.pl/');
  root.createFolder('2026-10-20 15.00 — anna@example.com').createFile('opis-sprawy.txt', 'Typ zgłoszenia: Powiadomienie o planie ogólnym\n\nGmina: Konopnica\n\nemail: anna@example.com');
});
const imp1 = as(U.OWNER, () => api.apiImportWebsite('KN', ''));
eq([imp1.imported, imp1.alerts], [1, 1], 'import zgłoszeń: 1 sprawa, 1 zapis na powiadomienia pominięty');
const zj = imp1.records[0];
eq([zj.nazwa, zj.kontakt, zj.kategoria, zj.data_wplywu, zj.kw], ['Jan Test', 'Telefon', 'Przesył i bezumowne korzystanie', '2026-10-20T14:05', ''], 'pola zgłoszenia ze strony');
eq(as(U.OWNER, () => api.apiImportWebsite('KN', '')).imported, 0, 'powtórny import nie dubluje');

/* ---------- Import: rejestry (zapis po mapowaniu) ---------- */
const items = [
  { kancelaria: 'KR', table: 'sprawy', klient: { nazwa: 'Klient Importowany', email: 'ki@example.com' }, rec: { numer: '120', tytul: 'rozwód', status: 'Zakończona', zrodlo_id: 'lista:120' } },
  { kancelaria: 'KR', table: 'sprawy', klient: { nazwa: 'Klient  importowany', telefon: '500' }, rec: { numer: '121', tytul: 'alimenty', status: 'Aktywna', zrodlo_id: 'lista:121' } },
  { kancelaria: 'KR', table: 'umowy', klient: { nazwa: 'Klient Importowany' }, rec: { nr: '13/2023', data_zawarcia: '2023-05-02', przedmiot: 'Umowa', zrodlo_id: 'umowy:13/2023' } }
];
const rep = as(U.OWNER, () => api.apiImportCommit('lista', items));
eq([rep.KR.klienci, rep.KR.sprawy, rep.KR.umowy], [1, 2, 1], 'import: 1 klient (scalony po nazwie), 2 sprawy, 1 umowa');
eq(as(U.OWNER, () => api.apiImportCommit('lista', items)).KR.pominiete, 3, 'powtórny import pomija');
const fm = P.parseFrontmatter_('---\nnumer: "(512)"\nklient: Jan Kowalski\ntags:\n  - sprawa\nstatus: aktywna\n---\nTreść notatki');
eq([fm.meta.numer, fm.meta.tags, fm.body], ['(512)', 'sprawa', 'Treść notatki'], 'frontmatter Obsidiana');
eq(P.idFromLink_('https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStU?usp=sharing'), '1AbCdEfGhIjKlMnOpQrStU', 'identyfikator z linku Dysku');

console.log(`pass ${pass}, fail ${fail}`);
process.exit(fail ? 1 : 0);
