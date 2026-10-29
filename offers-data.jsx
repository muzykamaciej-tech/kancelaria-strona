/* offers-data.jsx — dane ofert z cenami pakietów (/oferta/<slug>) i pomocnicze funkcje cen.
   Osobno od komponentów (offers.jsx), bo z cen korzysta też treść usług (services-content.jsx).
   Wyjątek od zasady „bez cennika na stronie” (decyzja Macieja 29.10.2026). Loaded before services-content.jsx. */

/* Ceny netto w złotych; brutto = netto + 23% VAT, liczone w jednym miejscu (karty i JSON-LD) */
const VAT_RATE = 0.23;
function grossPrice(net) { return Math.round(net * (1 + VAT_RATE) * 100) / 100; }
/* 2990 → '2 990 zł', 602.7 → '602,70 zł' (twarde spacje, żeby kwota nie łamała się między wierszami) */
function formatPln(v) {
  const [int, dec] = v.toFixed(2).split('.');
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (dec === '00' ? '' : ',' + dec) + ' zł';
}
/* zwykłe spacje: do meta description i tekstów, które idą poza stronę */
function plainPln(v) { return formatPln(v).replace(/\u00a0/g, ' '); }

/* Ceny pakietów sprawdzenia umowy deweloperskiej (netto, zł). Zmiana tutaj zmienia karty, JSON-LD, meta, llms.txt
   i odpowiedź „Ile kosztuje…” na stronie usługi. */
const DEV_NET = { szybkie: 490, pelna: 990, premium: 2990 };

const OFFERS = {
  'sprawdzenie-umowy-deweloperskiej': {
    service: 'sprawdzenie-umowy-deweloperskiej',
    photo: 'oferta-umowa-deweloperska',
    updated: '2026-10-29',
    metaTitle: 'Sprawdzenie umowy deweloperskiej: pakiety i ceny',
    metaDesc: `Umowę deweloperską sprawdzę, zanim ją podpiszesz: od ${plainPln(DEV_NET.szybkie)} netto (${plainPln(grossPrice(DEV_NET.szybkie))} brutto) z wynikiem w 2 dni robocze, aż po negocjacje z deweloperem.`,
    crumb: 'Pakiety i ceny',
    packagesHeading: 'Trzy zakresy sprawdzenia umowy deweloperskiej.',
    faqHeading: 'Zanim wybierzesz pakiet.',
    h1: ['Kupujesz mieszkanie lub dom od dewelopera?', 'Sprawdzę umowę, zanim ją podpiszesz'],
    intro: 'Umowę deweloperską pisze prawnik dewelopera i zabezpiecza w niej przede wszystkim jego interes. Zmiany najłatwiej wprowadzić przed podpisaniem – po akcie notarialnym każda poprawka wymaga zgody dewelopera. Wybierz zakres, który odpowiada Twojej sytuacji.',
    packages: [
      {
        id: 'szybkie-sprawdzenie',
        photo: 'pakiet-szybkie-sprawdzenie',
        name: 'Szybkie sprawdzenie umowy',
        net: DEV_NET.szybkie,
        term: 'wynik w 2 dni robocze',
        forWhom: 'Dla osób, które mają już projekt umowy i chcą szybko wiedzieć, czy jest w nim coś groźnego.',
        scope: [
          'sprawdzam projekt umowy deweloperskiej, rezerwacyjnej albo przedwstępnej,',
          'wskazuję najważniejsze ryzyka – zapisy niekorzystne, nietypowe albo sprzeczne z przepisami,',
          'przesyłam krótkie pisemne podsumowanie z oceną, czy umowę można podpisać, czy najpierw trzeba coś zmienić.',
        ],
      },
      {
        id: 'pelna-analiza',
        photo: 'pakiet-pelna-analiza',
        name: 'Pełna analiza dokumentów',
        label: 'Najczęściej wybierany',
        net: DEV_NET.pelna,
        term: 'wynik w 5 dni roboczych',
        forWhom: 'Dla osób, które chcą mieć pewność, że sprawdzone jest wszystko – umowa, deweloper i nieruchomość.',
        includes: 'Wszystko z pakietu „Szybkie sprawdzenie umowy”, a dodatkowo:',
        scope: [
          'analiza umowy razem ze wszystkimi załącznikami (harmonogram płatności, standard wykończenia, rzuty, umowy na garaż, komórkę lub udział w drodze),',
          'porównanie umowy z prospektem informacyjnym,',
          'sprawdzenie dewelopera w KRS, Krajowym Rejestrze Zadłużonych i jego sprawozdań finansowych,',
          'sprawdzenie księgi wieczystej działki i drogi dojazdowej (własność, hipoteki, służebności, roszczenia),',
          'sprawdzenie zasad wpłat na rachunek powierniczy i warunków zwrotu pieniędzy,',
          'pisemny raport z uwagami do poszczególnych paragrafów,',
          'lista zapisów do negocjacji z gotowym brzmieniem zmian, do przekazania deweloperowi,',
          'poprawki naniesione na tekst umowy w trybie śledzenia zmian,',
          'omówienie wyników telefonicznie lub online.',
        ],
      },
      {
        id: 'premium',
        photo: 'pakiet-premium',
        name: 'Pakiet premium – negocjacje i opieka do podpisania aktu',
        net: DEV_NET.premium,
        term: 'pierwsze wyniki w 3 dni robocze',
        forWhom: 'Dla osób, które nie chcą same spierać się z deweloperem i oczekują, że prawnik doprowadzi umowę do bezpiecznej wersji.',
        includes: 'Wszystko z pakietu „Pełna analiza dokumentów”, a dodatkowo:',
        scope: [
          'prowadzę negocjacje z deweloperem w Twoim imieniu – wysyłam poprawki, odpowiadam na jego stanowisko i pilnuję, żeby uzgodnienia trafiły do umowy, aż do uzgodnienia ostatecznej wersji umowy,',
          'sprawdzam ostateczny projekt aktu notarialnego przed podpisaniem,',
          'sprawdzam projekt umowy przenoszącej własność, kiedy deweloper go przygotuje,',
          'realizuję zlecenie w trybie priorytetowym i możesz kontaktować się ze mną bezpośrednio przez cały czas trwania transakcji.',
        ],
      },
    ],
    faq: [
      { q: 'Jakie dokumenty trzeba przesłać?', a: 'Projekt umowy z załącznikami i prospekt informacyjny. Deweloper ma obowiązek wydać je na Twoje żądanie przed podpisaniem umowy. Resztę (księgi wieczyste, rejestry, dane dewelopera) sprawdzam sam.' },
      { q: 'Czy mogę zmienić pakiet w trakcie?', a: 'Tak. Jeśli po szybkim sprawdzeniu zdecydujesz się na pełną analizę albo pakiet premium, dopłacasz tylko różnicę w cenie.' },
      { q: 'Czy działacie zdalnie?', a: 'Tak. Dokumenty przesyłasz mailem, a wyniki omawiamy telefonicznie lub online. Obsługuję klientów z całej Polski.' },
      { q: 'Od kiedy liczy się termin?', a: 'Od otrzymania kompletu dokumentów i wpłaty wynagrodzenia. Jeśli termin podpisania umowy jest bliski, napisz o tym w zgłoszeniu.' },
    ],
    form: {
      eyebrow: 'Wybrany pakiet',
      title: ['Prześlij', 'dokumenty,', 'zaczynam.'],
      lead: 'Wybrany pakiet trafi do tematu zgłoszenia. Dołącz projekt umowy z załącznikami i prospekt informacyjny. W ciągu 24 h roboczych potwierdzę zakres i termin.',
      situation: 'Kupuję nieruchomość',
      placeholder: 'Np. Kupuję mieszkanie od dewelopera, mam projekt umowy i prospekt, termin u notariusza jest…',
    },
  },
};

function getOffer(slug) { return OFFERS[slug] || null; }
/* oferta podpięta pod usługę (link w nagłówku strony usługi) */
function offerForService(serviceSlug) {
  return Object.keys(OFFERS).find((k) => OFFERS[k].service === serviceSlug) || null;
}

Object.assign(window, { OFFERS, getOffer, offerForService, grossPrice, formatPln, plainPln });
