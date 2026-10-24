/* categories.mjs — adresy wyszukiwarki i dokumentów zalogowanego LEX (aplikacja „Andromeda” na sip.lex.pl).
   Schemat wzięty z publicznego kodu sip.lex.pl (konwersja linków openLEX → aplikacja desktopowa):
   wyszukiwanie  /#/search?sl=PL&q=…&sortBy=…&p={"documentMainType":…,"documentType":[…]}
   kategoria     /#/search-by-category/<ścieżka>?… (ten sam zestaw parametrów)
   dokument      /#/<typ>/<nro>  (np. /#/jurisprudence/522417383), awaryjnie /#/document/<nro> */

export const LEX_ORIGIN = 'https://sip.lex.pl';

// klucz (używany w narzędziu) → ścieżka listy w LEX + filtr typu dokumentu
export const CATEGORIES = {
  wszystko: { label: 'wszystkie źródła', path: '/#/search' },
  orzeczenia: { label: 'orzeczenia i pisma urzędowe', path: '/#/search-by-category/orzeczenia-i-pisma-urzedowe', main: 'JURISPRUDENCE' },
  orzeczenia_sadow: { label: 'orzeczenia sądów', path: '/#/search-by-category/orzeczenia-i-pisma-urzedowe/orzeczenia-sadow', main: 'JURISPRUDENCE', type: 'COURT_JURISPRUDENCE' },
  orzeczenia_administracji: { label: 'orzeczenia organów administracji', path: '/#/search-by-category/orzeczenia-i-pisma-urzedowe/orzeczenia-administracji', main: 'JURISPRUDENCE', type: 'ADMINISTRATIVE_JURISPRUDENCE' },
  pisma_urzedowe: { label: 'pisma urzędowe', path: '/#/search-by-category/orzeczenia-i-pisma-urzedowe/pisma-urzedowe', main: 'JURISPRUDENCE', type: 'GUIDELINE' },
  publikacje: { label: 'komentarze i publikacje (wszystkie)', path: '/#/search-by-category/komentarze-i-publikacje', main: 'PUBLICATION' },
  komentarze: { label: 'komentarze', path: '/#/search-by-category/komentarze-i-publikacje/komentarze', main: 'PUBLICATION', type: 'COMMENTARY' },
  komentarze_praktyczne: { label: 'komentarze praktyczne', path: '/#/search-by-category/komentarze-i-publikacje/komentarze-praktyczne', main: 'PUBLICATION', type: 'PRACTICAL_COMMENTARY' },
  monografie: { label: 'monografie', path: '/#/search-by-category/komentarze-i-publikacje/monografie', main: 'PUBLICATION', type: 'MONOGRAPH' },
  systemy_prawa: { label: 'systemy prawa', path: '/#/search-by-category/komentarze-i-publikacje/systemy-prawa', main: 'PUBLICATION', type: 'LAW_SYSTEM' },
  artykuly: { label: 'artykuły', path: '/#/search-by-category/komentarze-i-publikacje/artykuly', main: 'PUBLICATION', type: 'ARTICLE' },
  glosy: { label: 'glosy', path: '/#/search-by-category/komentarze-i-publikacje/glosy', main: 'PUBLICATION', type: 'GLOSSE' },
  linie_orzecznicze: { label: 'linie orzecznicze', path: '/#/search-by-category/komentarze-i-publikacje/linie-orzecznicze', main: 'PUBLICATION', type: 'JURISPRUDENCE_LINE' },
  akty_prawne: { label: 'akty prawne', path: '/#/search-by-category/akty-prawne', main: 'ACT' },
  pytania_i_odpowiedzi: { label: 'pytania i odpowiedzi', path: '/#/search-by-category/pytania-i-odpowiedzi', main: 'QA' },
  wzory: { label: 'wzory pism i umów', path: '/#/search-by-category/wzory-i-narzedzia/wzory', main: 'TOOLS', type: 'TEMPLATE' },
  procedury: { label: 'procedury', path: '/#/search-by-category/procedury', main: 'PROCEDURE', type: 'PROCEDURE' },
};

// sortowanie: nazwy z enumu wyszukiwarki LEX
export const SORTS = {
  trafnosc: 'default',
  najnowsze: 'publicationDateDESC',
  najstarsze: 'publicationDateASC',
  waga_orzeczenia: 'jurisprudenceImportanceDESC',
};

// typ dokumentu (narzędzie) → trasa dokumentu w LEX
export const DOC_ROUTES = {
  orzeczenie: 'jurisprudence',
  komentarz: 'commentary',
  akt: 'act',
  publikacja: 'publication',
  monografia: 'monograph',
  pytanie: 'question-and-answer',
  wzor: 'template',
  procedura: 'procedure',
  pismo: 'guideline',
  analiza: 'analysis',
};

const ROUTE_LABELS = {
  jurisprudence: 'orzeczenie', commentary: 'komentarz', act: 'akt prawny', publication: 'publikacja',
  monograph: 'monografia', 'question-and-answer': 'pytanie i odpowiedź', template: 'wzór', procedure: 'procedura',
  guideline: 'pismo urzędowe', analysis: 'analiza', news: 'wiadomość', 'external-news': 'wiadomość', training: 'szkolenie',
  norm: 'norma', dictionary: 'słownik', ebistyp: 'eBistyp', 'act-translation': 'tłumaczenie aktu', author: 'publikacja',
  'bibliography-pan': 'bibliografia PAN', 'accounting-plan': 'plan kont', document: 'dokument',
};
export const routeLabel = (route) => ROUTE_LABELS[route] || route || 'dokument';

export function searchUrl({ q, kategoria = 'wszystko', sort = 'trafnosc' }) {
  const cat = CATEGORIES[kategoria];
  if (!cat) throw new Error(`Nieznana kategoria „${kategoria}”. Dostępne: ${Object.keys(CATEGORIES).join(', ')}`);
  const sortBy = SORTS[sort];
  if (!sortBy) throw new Error(`Nieznane sortowanie „${sort}”. Dostępne: ${Object.keys(SORTS).join(', ')}`);
  const params = new URLSearchParams({ sl: 'PL', q, sortBy });
  if (cat.main) params.set('p', JSON.stringify(cat.type ? { documentMainType: cat.main, documentType: [cat.type] } : { documentMainType: cat.main }));
  return `${LEX_ORIGIN}${cat.path}?${params}`;
}

// Adres dokumentu z: pełnego linku LEX (aplikacja albo openLEX), samego numeru (nro) albo numeru + typu.
export function documentUrl({ url, nro, typ }) {
  if (url) {
    const u = String(url).trim();
    if (/^https:\/\/sip\.lex\.pl\//.test(u)) return u;
    if (/^#?\//.test(u)) return LEX_ORIGIN + (u.startsWith('#') ? '/' + u : u);
    throw new Error(`To nie jest link do LEX (sip.lex.pl): ${u}`);
  }
  const n = String(nro ?? '').replace(/\D/g, '');
  if (n.length < 6) throw new Error('Podaj url dokumentu LEX albo jego numer (nro, 6–14 cyfr).');
  const route = typ ? DOC_ROUTES[typ] : 'document';
  if (!route) throw new Error(`Nieznany typ „${typ}”. Dostępne: ${Object.keys(DOC_ROUTES).join(', ')}`);
  return `${LEX_ORIGIN}/#/${route}/${n}`;
}
