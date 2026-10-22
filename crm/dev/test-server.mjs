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

/* ---------- Zadania i delegowanie ---------- */
const KNB = as(U.OWNER, () => api.bootstrap());
ok(KNB.data.zadania.length >= 10, 'zadania w danych: ' + KNB.data.zadania.length);
const tRev = KNB.data.zadania.find((z) => z.tytul === 'Wniosek dowodowy — świadkowie (projekt)');
eq(tRev.status, 'Do sprawdzenia', 'po wykonaniu z kontrolą: do sprawdzenia');
ok(KNB.data.komentarze.some((k) => k.zadanie_id === tRev.id), 'komentarz przy oddaniu do sprawdzenia');
ok(as(U.JUN2, () => api.bootstrap()).data.zadania.every((z) => z.kancelaria === 'KR'), 'osoba z KR nie widzi zadań KN');
mock.st.sent.length = 0;
const nt = as(U.OWNER, () => api.apiSave('zadania', { kancelaria: 'KN', tytul: 'Analiza umowy dzierżawy', przypisane: U.JUN1, termin: '2026-10-30', sprawdzenie: 'tak' }));
eq([nt.status, nt.zlecil, nt.przypisane], ['Nowe', U.OWNER, U.JUN1], 'zlecenie: status Nowe, zlecił, przypisane');
ok(mock.st.sent.length === 1 && /\[CRM KN\] Nowe zadanie: Analiza umowy dzierżawy/.test(mock.st.sent[0].subject) && mock.st.sent[0].to === U.JUN1, 'e-mail do adresata nowego zadania');
ok(/#zadanie\/KN\//.test(mock.st.sent[0].body), 'e-mail z linkiem do zadania');
throws(() => as(U.OWNER, () => api.apiSave('zadania', { kancelaria: 'KN', tytul: 'X', przypisane: U.KW })), 'INVALID', 'adresat bez dostępu do kancelarii');
throws(() => as(U.OWNER, () => api.apiSave('zadania', { kancelaria: 'KN', tytul: 'X', przypisane: 'ktos@example.com' })), 'INVALID', 'adresat spoza zespołu');
const own = as(U.OWNER, () => api.apiSave('zadania', { kancelaria: 'KN', tytul: 'Moje własne' }));
eq([own.status, own.przypisane], ['W toku', U.OWNER], 'zadanie dla siebie od razu w toku');
let r = as(U.JUN1, () => api.apiTask('KN', nt.id, 'przyjmij', {}));
eq(r.zadanie.status, 'W toku', 'przyjęcie zadania');
throws(() => as(U.JUN1, () => api.apiTask('KN', nt.id, 'zatwierdz', {})), 'FORBIDDEN', 'wykonawca nie zatwierdza sam');
mock.st.sent.length = 0;
r = as(U.JUN1, () => api.apiTask('KN', nt.id, 'zrobione', { komentarz: 'gotowe' }));
eq(r.zadanie.status, 'Do sprawdzenia', 'oddanie do sprawdzenia');
ok(mock.st.sent.some((m) => m.to === U.OWNER && /Do sprawdzenia/.test(m.subject)), 'e-mail do zlecającego: do sprawdzenia');
throws(() => as(U.OWNER, () => api.apiTask('KN', nt.id, 'zwroc', {})), 'INVALID', 'zwrot wymaga komentarza');
r = as(U.OWNER, () => api.apiTask('KN', nt.id, 'zwroc', { komentarz: 'Dopisz ryzyka wypowiedzenia' }));
eq([r.zadanie.status, r.komentarz.tresc], ['W toku', 'Do poprawy: Dopisz ryzyka wypowiedzenia'], 'zwrot do poprawy z komentarzem');
as(U.JUN1, () => api.apiTask('KN', nt.id, 'zrobione', {}));
r = as(U.OWNER, () => api.apiTask('KN', nt.id, 'zatwierdz', {}));
eq([r.zadanie.status, r.zadanie.wykonal], ['Zrobione', U.JUN1], 'zatwierdzenie: zrobione, wykonał wykonawca');
throws(() => as(U.MB, () => api.apiTask('KN', nt.id, 'otworz', {})), 'FORBIDDEN', 'osoba bez dostępu do KN');
throws(() => as(U.KW, () => api.apiTask('KR', tRev.id, 'zatwierdz', {})), 'FORBIDDEN', 'osoba trzecia nie zatwierdza');
throws(() => as(U.MB, () => api.apiSave('zadania', { kancelaria: 'KR', id: tRev.id, tytul: 'zmiana' })), 'FORBIDDEN', 'osoba trzecia nie edytuje zadania');
const t7 = KNB.data.zadania.find((z) => z.tytul === 'Przygotować świadków do rozprawy');
r = as(U.KPK, () => api.apiTask('KR', t7.id, 'przekaz', { do: U.JUN2, komentarz: 'Kasia jest na rozprawie' }));
eq([r.zadanie.przypisane, r.zadanie.zlecil, r.zadanie.status], [U.JUN2, U.KPK, 'Nowe'], 'przekazanie innej osobie');
throws(() => as(U.JUN2, () => api.apiTask('KR', t7.id, 'odrzuc', {})), 'INVALID', 'odrzucenie wymaga powodu');
r = as(U.JUN2, () => api.apiTask('KR', t7.id, 'odrzuc', { komentarz: 'jestem na urlopie' }));
eq([r.zadanie.przypisane, r.zadanie.status], [U.KPK, 'Nowe'], 'odrzucone wraca do zlecającego');
throws(() => as(U.KPK, () => api.apiTask('KR', t7.id, 'przyjmij', { _ver: 'stara-wersja' })), 'CONFLICT', 'równoczesna zmiana zadania');
throws(() => as(U.OWNER, () => api.apiSave('komentarze', { kancelaria: 'KN', zadanie_id: nt.id, tresc: 'x' })), 'FORBIDDEN', 'komentarze tylko przez zadanie');
const faktura = KNB.data.zadania.find((z) => z.tytul === 'Faktura za dojazd do sądu');
throws(() => as(U.JUN2, () => api.apiDelete('zadania', 'KR', faktura.id)), 'FORBIDDEN', 'cudzego zadania nie usuniesz');
eq(as(U.KW, () => api.apiDelete('zadania', 'KR', faktura.id)).ok, true, 'autor usuwa swoje nieprzyjęte zadanie');
throws(() => as(U.OWNER, () => api.apiDelete('zadania', 'KN', nt.id)), 'IN_USE', 'zadanie z komentarzami: tylko anulowanie');
as(U.OWNER, () => api.apiTeamSave({ email: U.JUN1, imie_nazwisko: 'Młodsza Prawniczka A', stanowisko: 'Młodszy prawnik', rola: 'asystent', kancelarie: 'KN,KR', powiadomienia: 'nie' }));
mock.st.sent.length = 0;
as(U.OWNER, () => api.apiSave('zadania', { kancelaria: 'KN', tytul: 'Cicho', przypisane: U.JUN1 }));
eq(mock.st.sent.length, 0, 'wyłączone powiadomienia: bez e-maila');

/* ---------- Domeny kont i aliasy ---------- */
throws(() => as(U.OWNER, () => api.apiTeamSave({ email: 'ktos.prywatny@gmail.com', rola: 'prawnik', kancelarie: 'KN' })), 'INVALID', 'prywatny Gmail nie wejdzie do zespołu');
as(U.OWNER, () => api.apiTeamSave({ email: U.OWNER, imie_nazwisko: 'Maciej Muzyka', stanowisko: 'Wspólnik', rola: 'admin', kancelarie: 'KN,KR', aliasy: 'maciej.muzyka@kancelariarodzinna.com' }));
const viaAlias = as('maciej.muzyka@kancelariarodzinna.com', () => api.bootstrap());
eq([viaAlias.state, viaAlias.email, viaAlias.login], ['ok', U.OWNER, 'maciej.muzyka@kancelariarodzinna.com'], 'logowanie drugim kontem = ta sama osoba');
ok(mock.st.files[knDb].editors.has('maciej.muzyka@kancelariarodzinna.com'), 'alias dostaje udostępnienie bazy');
throws(() => as(U.OWNER, () => api.apiTeamSave({ email: U.KW, rola: 'prawnik', kancelarie: 'KR', aliasy: 'maciej.muzyka@kancelariarodzinna.com' })), 'INVALID', 'alias zajęty przez inną osobę');

/* ---------- Kalendarz: TERMIN - … ---------- */
eq(SH.addWorkingDays('2026-11-12', -3), '2026-11-06', '3 dni robocze przed 12.11 (bez 11.11)');
const pt = (t) => SH.parseTermin(t, ['Katarzyna Walaszek']);
eq([pt('(zrobione)TERMIN - Kowalski wniosek o uzasadnienie').done, pt('(zrobione)TERMIN - Kowalski wniosek o uzasadnienie').klient], [true, 'Kowalski'], 'zrobione bez spacji');
eq(pt('TERMIN – Jan Kowalski – apelacja I C 123/26 - Katarzyna Walaszek').prawnik, 'Katarzyna Walaszek', 'prawnik z końcówki tytułu');
eq(pt('TERMIN – Jan Kowalski – apelacja I C 123/26 - Katarzyna Walaszek').sygn, 'I C 123/26', 'sygnatura z tytułu');
eq([pt('TERMIN - wniosek o uzasadnienie Nowak Przemoc').klient, pt('TERMIN - Anna Nowak-Kowalska zażalenie (593)').teczka], ['', '593'], 'czynność przed klientem; numer teczki');
eq([pt('(ODWOŁANA) TERMIN - Jan Kowalski EPU').cancel, pt('Jan Kowalski rozprawa').isTermin], [true, false], 'odwołany; wpis bez prefiksu');
eq([pt('TERMIN (593) - Jan Kowalski - apelacja').czynnosc, pt('TERMIN - - Kowalski apelacja').czynnosc, pt('TERMIN [zrobione] - Kowalski - apelacja').klient], ['apelacja', 'apelacja', 'Kowalski'], 'czynność za klientem także po pominiętym „-”');
const ics = SH.parseIcs('BEGIN:VCALENDAR\r\nBEGIN:VEVENT\r\nDTSTART:20251015T050000Z\r\nDTEND:20251016T050000Z\r\nSUMMARY:(zrobione) TERMIN - Kowalski wniosek\r\nUID:a1\r\nEND:VEVENT\r\nBEGIN:VEVENT\r\nDTSTART;VALUE=DATE:20260115\r\nSUMMARY:TERMIN - Nowak odpowied\r\n ź\r\nUID:a2\r\nEND:VEVENT\r\nEND:VCALENDAR');
eq(ics.map((e) => [e.date, e.start, e.hours, e.title]), [['2025-10-15', '2025-10-15T07:00', 24, '(zrobione) TERMIN - Kowalski wniosek'], ['2026-01-15', '2026-01-15', 24, 'TERMIN - Nowak odpowiedź']], 'plik .ics: czas polski, zawijane linie, wydarzenie całodniowe');
mock.st.calendars = require('./demo-seed.js').demoCalendars(SH, today);
const cal = as(U.OWNER, () => api.apiCalendarEvents('', '2025-01-01', '2027-12-31'));
eq(cal.events.length, 10, 'kalendarz: wydarzenia ≥ 23 h (bez godzinnej konsultacji)');
ok(cal.events.every((e) => /^\d{4}-\d{2}-\d{2}$/.test(e.date)), 'daty wydarzeń w strefie Warszawy');
mock.st.calendars[U.SEKRETARIAT].readers = [];
throws(() => as(U.OWNER, () => api.apiCalendarEvents('', '2025-01-01', '2027-12-31')), 'NO_CAL', 'brak dostępu do kalendarza');
throws(() => as(U.KW, () => api.apiCalendarEvents('', '', '')), 'FORBIDDEN', 'import tylko dla administratora');
const r5 = KNB.data.sprawy.find((x) => x.tytul.indexOf('Oskarżyciel') === 0);
const calItems = [
  { kancelaria: 'KR', table: 'terminy', rec: { opis: 'zażalenie', data: '2026-11-03', typ: 'Termin procesowy', status: 'Otwarty', sprawa_id: r5.id, odpowiedzialny: U.KPK, zrodlo_id: 'cal:x1:2026-11-03' }, zadanie: { tytul: 'Przygotować: zażalenie', przypisane: U.JUN2, termin: '2026-10-29' } },
  { kancelaria: 'KR', table: 'terminy', rec: { opis: 'odpowiedź', data: '2026-09-01', typ: 'Termin procesowy', status: 'Do weryfikacji', odpowiedzialny: U.KPK, zrodlo_id: 'cal:x2:2026-09-01' } }
];
let rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', calItems));
eq([rc.KR.terminy, rc.KR.zadania], [2, 1], 'import kalendarza: 2 terminy i zadanie przygotowania');
const prep = as(U.KPK, () => api.bootstrap()).data.zadania.find((z) => z.tytul === 'Przygotować: zażalenie');
ok(prep && prep.termin_id && prep.status === 'Nowe' && prep.zlecil === U.OWNER, 'zadanie przygotowania powiązane z terminem');
calItems[1].rec.status = 'Wykonany';
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', calItems));
eq([rc.KR.zaktualizowane, rc.KR.pominiete], [1, 1], 'ponowny import: dopisane „(zrobione)” zamyka termin, reszta pominięta');

/* Ponowny import: przesunięcie w kalendarzu zmienia datę i zadanie przygotowania; poprawka w CRM ma pierwszeństwo. */
const termX1 = () => as(U.KPK, () => api.bootstrap()).data.terminy.find((t) => t.zrodlo_id === 'cal:x1:2026-11-03');
const prepX1 = () => as(U.KPK, () => api.bootstrap()).data.zadania.find((z) => z.tytul === 'Przygotować: zażalenie');
const later = (d) => (d < today ? today : d);
calItems[0].rec.data = '2026-11-10';
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', calItems));
eq([rc.KR.zaktualizowane, termX1().data, termX1().zrodlo_data], [1, '2026-11-10', '2026-11-10'], 'ponowny import: przesunięty termin dostaje nową datę, bez duplikatu');
eq(prepX1().termin, later('2026-11-05'), 'zadanie przygotowania przesunięte razem z terminem (3 dni robocze)');
const tx = termX1();
as(U.KPK, () => api.apiSave('terminy', { kancelaria: 'KR', id: tx.id, data: '2026-11-12', _ver: tx.zmieniono }));
calItems[0].rec.data = '2026-11-17';
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', calItems));
eq([rc.KR.zaktualizowane || 0, termX1().data], [0, '2026-11-12'], 'data poprawiona w CRM nie jest nadpisywana z kalendarza');
calItems[0].rec.status = 'Nieaktualny';
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', calItems));
eq([termX1().status, prepX1().status], ['Nieaktualny', 'Anulowane'], '„(ODWOŁANA)” unieważnia termin i anuluje zadanie przygotowania');
calItems[0].rec.status = 'Otwarty';
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', calItems));
eq([termX1().status, rc.KR.zaktualizowane || 0], ['Nieaktualny', 0], 'zamknięty w CRM termin nie wraca do otwartych');
ok(as(U.KPK, () => api.apiHistory('KR', 'terminy', tx.id)).length >= 3, 'zmiany z importu są w Historii terminu');

/* Kalendarz: usługa zaawansowana (iCalUID, stronicowanie, domyślny zakres) i zapasowo CalendarApp. */
mock.st.calendars[U.SEKRETARIAT].readers = [U.OWNER, U.KPK];
mock.st.calPage = 3;
const calAdv = as(U.OWNER, () => api.apiCalendarEvents('', '', ''));
eq([calAdv.events.length, calAdv.calendar], [10, 'Sekretariat KR'], 'kalendarz: stronicowanie i domyślny zakres dat (do 3 lat naprzód)');
ok(calAdv.events.every((e) => /@google\.com$/.test(e.uid)), 'klucz importu = iCalUID (zgodny z UID z pliku .ics)');
ok(calAdv.events.some((e) => e.allDay && e.hours === 24), 'wydarzenie całodniowe: 24 h');
mock.st.calendars[U.SEKRETARIAT].events.push({ id: 'cal-rec@google.com', title: 'TERMIN - co tydzień', allDay: true, start: SH.addDays(today, 5) + 'T00:00:00', end: SH.addDays(today, 6) + 'T00:00:00', recurringEventId: 'serie1' });
ok(as(U.OWNER, () => api.apiCalendarEvents('', '', '')).events.some((e) => e.recurring), 'wystąpienia serii oznaczone jako cykliczne');
delete mock.st.calPage;
const apiNoAdv = createServer(Object.assign({}, mock.globals, { Calendar: undefined }));
eq(as(U.OWNER, () => apiNoAdv.apiCalendarEvents('', '', '')).events.length, 11, 'kalendarz bez usługi zaawansowanej: CalendarApp');

/* Administruje tylko osoba z dostępem do wszystkich kancelarii: zespół i ustawienia są we wspólnym arkuszu. */
throws(() => as(U.OWNER, () => api.apiTeamSave({ email: 'nowy.kr@kancelariarodzinna.com', imie_nazwisko: 'Nowy KR', rola: 'admin', kancelarie: 'KR' })), 'INVALID', 'rola administratora tylko z dostępem do wszystkich kancelarii');
throws(() => as(U.KPK, () => api.apiTeamSave({ email: 'nowy.kr@kancelariarodzinna.com', imie_nazwisko: 'Nowy KR', rola: 'prawnik', kancelarie: 'KR' })), 'FORBIDDEN', 'wspólniczka jednej kancelarii nie zarządza zespołem');
throws(() => as(U.KPK, () => api.apiFirmSave({ kod: 'KR', telefon: '1' })), 'FORBIDDEN', 'dane kancelarii zmienia administrator');
throws(() => as(U.KPK, () => api.apiSeqSave('SEQ_TECZKA', 1)), 'FORBIDDEN', 'wspólna numeracja: tylko administrator');
throws(() => as(U.KPK, () => api.apiAllowedSave('gmail.com')), 'FORBIDDEN', 'domeny: tylko administrator');
throws(() => as(U.KPK, () => api.apiResync()), 'FORBIDDEN', 'ponowne udostępnienie: tylko administrator');
eq(as(U.KPK, () => api.bootstrap()).role, 'prawnik', 'wspólniczka KR: pełna edycja w KR');
ok(!mock.st.files[mock.globals.PropertiesService.getScriptProperties().getProperty('SETTINGS_ID')].editors.has(U.KPK), 'arkusz zespołu i ustawień: edycja tylko dla administratora');
{
  /* Konfiguracja: admin z jedną kancelarią zapisuje się jako „Pełna edycja”; aliasy właściciela sprawdzane. */
  const m2 = createGasMock({ user: U.OWNER, owner: U.OWNER, gmail: demoGmail() });
  const a2 = createServer(m2.globals);
  const res = a2.apiSetup({ me: { imie_nazwisko: 'Maciej Muzyka', aliasy: 'maciej.muzyka@kancelariarodzinna.com, prywatny@gmail.com, ' + U.KW }, team: [{ email: U.KPK, imie_nazwisko: 'KPK', rola: 'admin', kancelarie: 'KR' }, { email: U.KW, imie_nazwisko: 'KW', rola: 'prawnik', kancelarie: 'KR' }] });
  m2.setUser(U.KPK);
  eq(a2.bootstrap().role, 'prawnik', 'konfiguracja: admin jednej kancelarii zapisany jako pełna edycja');
  ok(res.shareLog.some((x) => x.email === U.KPK && /wszystkich kancelarii/.test(x.log.join(' '))), 'konfiguracja: informacja o zmianie roli');
  m2.setUser(U.OWNER);
  eq(a2.bootstrap().me.aliasy, 'maciej.muzyka@kancelariarodzinna.com', 'konfiguracja: alias spoza domen i adres członka zespołu odrzucone');
  m2.setUser('maciej.muzyka@kancelariarodzinna.com');
  eq(a2.bootstrap().email, U.OWNER, 'konfiguracja: alias właściciela działa od razu');
}

/* Odrzucenie i przekazanie przez wykonawcę nie zmieniają, kto sprawdza zadanie. */
const mbT = as(U.MB, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Odpowiedź na pozew — projekt', przypisane: U.JUN2, sprawdzenie: 'tak' }));
throws(() => as(U.JUN2, () => api.apiSave('zadania', { kancelaria: 'KR', id: mbT.id, sprawdzenie: '', _ver: mbT.zmieniono })), 'FORBIDDEN', 'wykonawca nie wyłączy kontroli w formularzu');
r = as(U.JUN2, () => api.apiTask('KR', mbT.id, 'odrzuc', { komentarz: 'urlop' }));
eq([r.zadanie.przypisane, r.zadanie.zlecil], [U.MB, U.MB], 'odrzucone: zadanie własne zlecającego, nie „zlecone” przez odrzucającego');
throws(() => as(U.JUN2, () => api.apiTask('KR', mbT.id, 'anuluj', {})), 'FORBIDDEN', 'odrzucający nie anuluje cudzego zadania');
as(U.MB, () => api.apiTask('KR', mbT.id, 'przyjmij', {}));
eq(as(U.MB, () => api.apiTask('KR', mbT.id, 'zrobione', {})).zadanie.status, 'Zrobione', 'po odrzuceniu zlecający kończy zadanie bez sprawdzania przez odrzucającego');
const mbT2 = as(U.MB, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Zestawienie dowodów', przypisane: U.JUN2, sprawdzenie: 'tak' }));
r = as(U.JUN2, () => api.apiTask('KR', mbT2.id, 'przekaz', { do: U.KW }));
eq([r.zadanie.przypisane, r.zadanie.zlecil], [U.KW, U.MB], 'wykonawca przekazuje dalej: sprawdza nadal pierwotny zlecający');
throws(() => as(U.JUN2, () => api.apiTask('KR', mbT2.id, 'przekaz', { do: U.JUN2 })), 'FORBIDDEN', 'przekazanie „tam i z powrotem” nie omija kontroli');
as(U.KW, () => api.apiTask('KR', mbT2.id, 'przyjmij', {}));
eq(as(U.KW, () => api.apiTask('KR', mbT2.id, 'zrobione', {})).zadanie.status, 'Do sprawdzenia', 'po przekazaniu zadanie wraca do sprawdzenia zlecającemu');
const mbT3 = as(U.MB, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Kwerenda akt', przypisane: U.JUN2, sprawdzenie: 'tak' }));
const moved = as(U.JUN2, () => api.apiSave('zadania', { kancelaria: 'KR', id: mbT3.id, przypisane: U.KW, _ver: mbT3.zmieniono }));
eq(moved.zlecil, U.MB, 'zmiana osoby w formularzu przez wykonawcę: zlecający bez zmian');
const back = as(U.MB, () => api.apiTask('KR', mbT3.id, 'przekaz', { do: U.JUN2 })).zadanie;
r = as(U.JUN2, () => api.apiTask('KR', back.id, 'przekaz', { do: U.MB }));
eq([r.zadanie.przypisane, r.zadanie.zlecil, r.zadanie.status], [U.MB, U.MB, 'Nowe'], 'oddanie zlecającemu: jego własne zadanie');

/* Wyłączenie dostępu działa także dla konta spoza domen; alias osoby nieaktywnej można przenieść. */
as(U.OWNER, () => api.apiAllowedSave('example.com,partner.pl'));
as(U.OWNER, () => api.apiTeamSave({ email: 'ext@partner.pl', imie_nazwisko: 'Zewnętrzny', rola: 'odczyt', kancelarie: 'KN', aliasy: 'wspolny@partner.pl' }));
as(U.OWNER, () => api.apiAllowedSave('example.com'));
const off = as(U.OWNER, () => api.apiTeamSave({ email: 'ext@partner.pl', imie_nazwisko: 'Zewnętrzny', rola: 'odczyt', kancelarie: 'KN', aktywny: 'nie' }));
eq(off.team.find((m) => m.email === 'ext@partner.pl').aktywny, 'nie', 'wyłączenie konta spoza domen');
throws(() => as(U.OWNER, () => api.apiTeamSave({ email: 'ext@partner.pl', rola: 'odczyt', kancelarie: 'KN' })), 'INVALID', 'ponowne włączenie konta spoza domen zablokowane');
as(U.OWNER, () => api.apiTeamSave({ email: 'stary@kancelariarodzinna.com', imie_nazwisko: 'Stary', rola: 'odczyt', kancelarie: 'KR', aliasy: 'Biuro.KR@kancelariarodzinna.com', aktywny: 'nie' }));
ok(as(U.OWNER, () => api.apiTeamSave({ email: 'nowy2@kancelariarodzinna.com', imie_nazwisko: 'Nowy', rola: 'odczyt', kancelarie: 'KR', aliasy: 'biuro.kr@kancelariarodzinna.com' })).team.some((m) => m.email === 'nowy2@kancelariarodzinna.com'), 'alias osoby nieaktywnej można przypisać innej');
throws(() => as(U.OWNER, () => api.apiTeamSave({ email: 'nowy3@kancelariarodzinna.com', rola: 'odczyt', kancelarie: 'KR', aliasy: 'BIURO.KR@kancelariarodzinna.com' })), 'INVALID', 'zajęty alias rozpoznany bez względu na wielkość liter');


/* ---------- Drugi przegląd: regresje ---------- */
const krDb = boot.firms.find((f) => f.kod === 'KR').db_url.split('/d/')[1].split('/')[0];
as(U.OWNER, () => api.apiResync());
ok(mock.st.files[krDb].viewers.has('biuro.kr@kancelariarodzinna.com'), 'alias przeniesiony z konta wyłączonego zostaje udostępniony po „Udostępnij ponownie”');
/* Przekazanie zadania bez kontroli: przekazująca zostaje zlecającą (zachowuje kontrolę). */
const ownT = as(U.OWNER, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Pismo do sądu', przypisane: U.KPK }));
r = as(U.KPK, () => api.apiTask('KR', ownT.id, 'przekaz', { do: U.JUN2 }));
eq(r.zadanie.zlecil, U.KPK, 'przekazanie zadania bez sprawdzenia: przekazująca zostaje zlecającą');
const ownT2 = as(U.KPK, () => api.apiSave('zadania', { kancelaria: 'KR', id: ownT.id, sprawdzenie: 'tak', _ver: r.zadanie.zmieniono }));
eq(ownT2.sprawdzenie, 'tak', '…i może włączyć „wraca do sprawdzenia”');
/* Zamknięcie i ponowne otwarcie przez zlecającego: e-mail do wykonawcy. */
const ex = as(U.MB, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Wezwanie do zapłaty', przypisane: U.JUN2 }));
as(U.JUN2, () => api.apiTask('KR', ex.id, 'przyjmij', {}));
mock.st.sent.length = 0;
as(U.MB, () => api.apiTask('KR', ex.id, 'zrobione', { komentarz: 'Zrobiłem sam' }));
ok(mock.st.sent.some((m) => m.to === U.JUN2 && /Zrobione/.test(m.subject)), 'zlecający zamyka: e-mail do wykonawcy');
mock.st.sent.length = 0;
as(U.MB, () => api.apiTask('KR', ex.id, 'otworz', {}));
ok(mock.st.sent.some((m) => m.to === U.JUN2 && /Ponownie otwarte/.test(m.subject)), 'ponowne otwarcie: e-mail do wykonawcy');
/* Zlecający, który odszedł, nie blokuje zadania w „Do sprawdzenia”. */
const dep = as(U.MB, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Projekt umowy', przypisane: U.JUN2, sprawdzenie: 'tak' }));
as(U.JUN2, () => api.apiTask('KR', dep.id, 'przyjmij', {}));
as(U.OWNER, () => api.apiTeamSave({ email: U.MB, imie_nazwisko: 'Maciej Bednarek', stanowisko: 'Starszy prawnik', rola: 'prawnik', kancelarie: 'KR', aktywny: 'nie' }));
r = as(U.JUN2, () => api.apiTask('KR', dep.id, 'zrobione', {}));
eq([r.zadanie.status, /Bez sprawdzenia/.test(r.komentarz.tresc)], ['Zrobione', true], 'zlecający bez dostępu: zadanie zamknięte z adnotacją');
as(U.OWNER, () => api.apiTeamSave({ email: U.MB, imie_nazwisko: 'Maciej Bednarek', stanowisko: 'Starszy prawnik', rola: 'prawnik', kancelarie: 'KR' }));
/* Domeny: zmiana adresu kancelarii nikogo nie odetnie; usunięcie domeny odbiera też Dysk. */
throws(() => as(U.OWNER, () => api.apiFirmSave({ kod: 'KR', email: 'kancelaria.rodzinna@gmail.com' })), 'INVALID', 'zmiana adresu kancelarii odcinająca zespół zablokowana');
as(U.OWNER, () => api.apiAllowedSave(''));
ok(!mock.st.files[knDb].editors.has(U.JUN1) && !mock.st.files[knDb].viewers.has(U.JUN1), 'usunięcie domeny: odebrane udostępnienie bazy');
as(U.OWNER, () => api.apiAllowedSave('example.com'));
as(U.OWNER, () => api.apiResync());
{
  const m3 = createGasMock({ user: 'wlasciciel@gmail.com', owner: 'wlasciciel@gmail.com', gmail: demoGmail() });
  const a3 = createServer(m3.globals);
  throws(() => a3.apiSetup({}), 'INVALID', 'konfiguracja kontem spoza domen kancelarii zablokowana (zanim cokolwiek powstanie)');
  eq(a3.bootstrap().state, 'setup', 'po odmowie: nadal ekran konfiguracji');
}
/* Kalendarz: znaczniki, duplikaty, rekordy usunięte, zadania dopisane ręcznie. */
eq([pt('TERMIN - Jabłoński wniosek (wykonanie kontaktów)').done, pt('TERMIN - Kowalski apelacja (zrobione - KW)').done, pt('TERMIN - Kowalski apelacja - zrobione').done], [false, true, true], '„(wykonanie …)” to treść, nie znacznik wykonania');
eq(SH.stripDone('(zrobione 12.10) TERMIN - Kowalski apelacja - zrobione'), 'TERMIN - Kowalski apelacja', 'stripDone: znaczniki na początku, w nawiasie i na końcu');
const ci = (o) => Object.assign({ kancelaria: 'KR', table: 'terminy' }, o);
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ alt: ['cal:dup-b'], rec: { opis: 'apelacja', data: '2026-12-01', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:dup-a', zrodlo_data: '2026-12-01', podstawa: 'Import z kalendarza: TERMIN - X apelacja' }, zadanie: { tytul: 'Przygotować: apelacja', przypisane: U.KPK, termin: '2026-11-26' } })]));
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'apelacja', data: '2026-12-01', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:dup-b', zrodlo_data: '2026-12-01' } })]));
eq([rc.KR.terminy || 0, rc.KR.pominiete], [0, 1], 'scalony duplikat: drugi identyfikator zapamiętany, bez drugiego terminu');
const dupT = as(U.OWNER, () => api.bootstrap()).data.terminy.find((t) => /cal:dup-a/.test(t.zrodlo_id));
const manual = as(U.KPK, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Napisać apelację (projekt)', przypisane: U.JUN2, termin_id: dupT.id }));
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'apelacja', data: '2026-12-01', typ: 'Termin procesowy', status: 'Wykonany', odpowiedzialny: U.KPK, zrodlo_id: 'cal:dup-a', podstawa: 'Import z kalendarza: TERMIN - X apelacja (wykonanie kontaktów)' } })]));
eq(rc.KR.zaktualizowane, 1, 'zmieniony tytuł ze znacznikiem: status przeniesiony');
const dupT2 = as(U.OWNER, () => api.bootstrap()).data.terminy.find((t) => t.id === dupT.id);
eq(dupT2.status, 'Wykonany', 'termin zamknięty z kalendarza');
const dupT3 = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'b', data: '2026-12-08', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:corr', zrodlo_data: '2026-12-08', podstawa: 'Import z kalendarza: TERMIN - Y (wykonanie wyroku)' } })]));
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'b', data: '2026-12-08', typ: 'Termin procesowy', status: 'Wykonany', odpowiedzialny: U.KPK, zrodlo_id: 'cal:corr', podstawa: 'Import z kalendarza: TERMIN - Y (wykonanie wyroku)' } })]));
eq(rc.KR.zaktualizowane || 0, 0, 'status poprawiony w podglądzie (ten sam tytuł) nie jest nadpisywany przy ponownym imporcie');
const odw = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'c', data: '2026-12-15', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:odw', zrodlo_data: '2026-12-15', podstawa: 'Import z kalendarza: TERMIN - Z' }, zadanie: { tytul: 'Przygotować: c', przypisane: U.KPK, termin: '2026-12-10' } })]));
const odwT = as(U.OWNER, () => api.bootstrap()).data.terminy.find((t) => t.zrodlo_id === 'cal:odw');
const hand = as(U.KPK, () => api.apiSave('zadania', { kancelaria: 'KR', tytul: 'Notatka dla klienta', przypisane: U.JUN2, termin_id: odwT.id }));
as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'c', data: '2026-12-15', typ: 'Termin procesowy', status: 'Nieaktualny', odpowiedzialny: U.KPK, zrodlo_id: 'cal:odw', podstawa: 'Import z kalendarza: (ODWOŁANA) TERMIN - Z' } })]));
const afterOdw = as(U.OWNER, () => api.bootstrap()).data.zadania;
eq([afterOdw.find((z) => z.tytul === 'Przygotować: c').status, afterOdw.find((z) => z.id === hand.id).status], ['Anulowane', 'Nowe'], 'odwołanie anuluje tylko zadanie przygotowania, nie zadania dopisane ręcznie');
/* Rekord usunięty w CRM nie wraca. */
const delT = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'd', data: '2026-12-22', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:del' } })]));
const delId = as(U.OWNER, () => api.bootstrap()).data.terminy.find((t) => t.zrodlo_id === 'cal:del').id;
as(U.OWNER, () => api.apiDelete('terminy', 'KR', delId));
rc = as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'd', data: '2026-12-22', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:del' } })]));
eq([rc.KR.terminy || 0, rc.KR.pominiete], [0, 1], 'termin usunięty w CRM nie wraca przy ponownym imporcie');
/* Po zgodzie dat kalendarz znowu przesuwa termin. */
const sy = () => as(U.OWNER, () => api.bootstrap()).data.terminy.find((t) => t.zrodlo_id === 'cal:sync');
as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'e', data: '2027-01-05', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:sync', zrodlo_data: '2027-01-05' } })]));
as(U.OWNER, () => api.apiSave('terminy', { kancelaria: 'KR', id: sy().id, data: '2027-01-12', _ver: sy().zmieniono }));
as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'e', data: '2027-01-12', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:sync' } })]));
as(U.OWNER, () => api.apiImportCommit('kalendarz', [ci({ rec: { opis: 'e', data: '2027-01-19', typ: 'Termin procesowy', status: 'Otwarty', odpowiedzialny: U.KPK, zrodlo_id: 'cal:sync' } })]));
eq(sy().data, '2027-01-19', 'po zgodzie dat z CRM kolejne przesunięcie w kalendarzu jest przenoszone');

console.log(`pass ${pass}, fail ${fail}`);
process.exit(fail ? 1 : 0);
