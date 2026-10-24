import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseMeta, mergeText, snippets, fileSafe, normalize } from '../src/text.mjs';
import { searchUrl, documentUrl } from '../src/categories.mjs';
import { itemsFromJson } from '../src/lex.mjs';

test('parseMeta: sygnatury i daty', () => {
  assert.deepEqual(parseMeta('Uchwała Sądu Najwyższego z dnia 22 lutego 2017 r., III CZP 27/17'), { sygnatura: 'III CZP 27/17', data: '22 lutego 2017' });
  assert.equal(parseMeta('Wyrok WSA w Warszawie z 2020-05-04, II SA/Wa 1234/19').sygnatura, 'II SA/Wa 1234/19');
  assert.equal(parseMeta('Wyrok SA w Krakowie, I ACa 123/19').sygnatura, 'I ACa 123/19');
  assert.equal(parseMeta('Wyrok SN, IV CSKP 1/22').sygnatura, 'IV CSKP 1/22');
  assert.equal(parseMeta('Wyrok TK z 6.12.2016, P 10/16').sygnatura, 'P 10/16');
  assert.equal(parseMeta('Wyrok TK z 6.12.2016, P 10/16').data, '6.12.2016');
  assert.equal(parseMeta('Komentarz do art. 305(2) Kodeksu cywilnego').sygnatura, null);
});

test('mergeText: dopisywanie i przesuwane okno', () => {
  assert.equal(mergeText('a\nb\nc', 'a\nb\nc\nd\ne'), 'a\nb\nc\nd\ne');
  assert.equal(mergeText('a\nb\nc\nd', 'c\nd\ne\nf'), 'a\nb\nc\nd\ne\nf');
  assert.equal(mergeText('a\nb\nc', 'b\nc'), 'a\nb\nc');
  assert.equal(mergeText('a\nb', 'x\ny'), 'a\nb\n[…]\nx\ny');
  // powtarzające się linie (np. „§ 1.”) nie gubią treści
  assert.equal(mergeText('Art. 1\n§ 1.\nTekst A\n§ 2.\nTekst B', '§ 2.\nTekst B\nArt. 2\n§ 1.\nTekst C'),
    'Art. 1\n§ 1.\nTekst A\n§ 2.\nTekst B\nArt. 2\n§ 1.\nTekst C');
});

test('snippets: bez polskich znaków i wielkości liter, scalanie okien', () => {
  const t = 'x'.repeat(2000) + ' Dobra wiara posiadacza ' + 'y'.repeat(100) + ' dobrej WIARY ' + 'z'.repeat(2000);
  const [s] = snippets(t, ['dobra wiara'], { radius: 50 });
  assert.equal(s.trafienia, 1);
  const [s2] = snippets(t, ['wiar'], { radius: 100 });
  assert.equal(s2.trafienia, 2);
  assert.equal(s2.fragmenty.length, 1);
  assert.equal(snippets('Służebność przesyłu', ['sluzebnosc'])[0].trafienia, 1);
});

test('adresy LEX', () => {
  const u = new URL(searchUrl({ q: 'służebność przesyłu', kategoria: 'orzeczenia_sadow', sort: 'najnowsze' }));
  assert.equal(u.origin, 'https://sip.lex.pl');
  assert.equal(u.hash.split('?')[0], '#/search-by-category/orzeczenia-i-pisma-urzedowe/orzeczenia-sadow');
  const p = new URLSearchParams(u.hash.split('?')[1]);
  assert.equal(p.get('q'), 'służebność przesyłu');
  assert.equal(p.get('sortBy'), 'publicationDateDESC');
  assert.deepEqual(JSON.parse(p.get('p')), { documentMainType: 'JURISPRUDENCE', documentType: ['COURT_JURISPRUDENCE'] });
  assert.ok(!new URLSearchParams(new URL(searchUrl({ q: 'x' })).hash.split('?')[1]).has('p'));
  assert.throws(() => searchUrl({ q: 'x', kategoria: 'nie-ma' }));
  assert.equal(documentUrl({ nro: '522417383', typ: 'orzeczenie' }), 'https://sip.lex.pl/#/jurisprudence/522417383');
  assert.equal(documentUrl({ nro: 'nr 522417383' }), 'https://sip.lex.pl/#/document/522417383');
  assert.equal(documentUrl({ url: '#/commentary/587806000' }), 'https://sip.lex.pl/#/commentary/587806000');
  assert.throws(() => documentUrl({ url: 'https://example.com/x' }));
});

test('itemsFromJson: wyniki z odpowiedzi API', () => {
  const body = JSON.stringify({ data: { documents: [
    { nro: 522417383, title: '<b>Uchwała</b> SN III CZP 27/17', court: 'Sąd Najwyższy' },
    { nro: '123', title: 'za krótki numer' },
  ] } });
  const items = itemsFromJson([body, 'nie-json']);
  assert.equal(items.length, 1);
  assert.equal(items[0].tytul, 'Uchwała SN III CZP 27/17');
  assert.match(items[0].opis, /court: Sąd Najwyższy/);
});

test('fileSafe i normalize', () => {
  assert.equal(fileSafe('III CZP 27/17 – Uchwała: "test"'), 'III CZP 27 17 – Uchwała test');
  assert.equal(normalize('a\u00a0 b \n\n\n\n c'), 'a b\n\nc');
});

test('sygnatury TSUE i tytuły z plakietką', async () => {
  const { cleanTitle } = await import('../src/text.mjs');
  assert.equal(parseMeta('Nowość C-681/24, KOMISJA EUROPEJSKA PRZECIWKO REPUBLICE CZESKIEJ').sygnatura, 'C-681/24');
  assert.equal(parseMeta('T-358/25, ROMAN A. PRZECIWKO RADZIE').sygnatura, 'T-358/25');
  assert.equal(cleanTitle('NowośćT-358/25, ROMAN'), 'T-358/25, ROMAN');
});
