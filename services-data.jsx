/* services-data.jsx — thematic blocks (v4 structure).
   Loaded after data.jsx. Each service = its own subpage (slug).
   No prices anywhere — every path leads to the free-analysis form. */

const SERVICE_BLOCKS = [
  {
    id: 'sprawdzenie-przed-zakupem', n: '1', icon: 'search-check',
    title: 'Sprawdzenie nieruchomości przed zakupem',
    tagline: 'Zanim podpiszesz — sprawdźmy, co kupujesz.',
    intro: 'Najczęstsze i najważniejsze sprawy. Zanim wpłacisz zadatek i podpiszesz umowę, sprawdzam, co naprawdę kupujesz — księgę wieczystą, dokumenty i realny stan prawny nieruchomości.',
    services: [
      { slug: 'audyt-stanu-prawnego-nieruchomosci', icon: 'shield-check', title: 'Audyt stanu prawnego nieruchomości', desc: 'Pełny prawny „rentgen” działki, domu lub mieszkania — zanim podpiszesz.' },
      { slug: 'sprawdzenie-umowy-deweloperskiej', icon: 'file-search', title: 'Sprawdzenie umowy deweloperskiej', desc: 'Audyt umowy z deweloperem paragraf po paragrafie — zanim podpiszesz u notariusza.' },
      { slug: 'analiza-umowy-przedwstepnej', icon: 'file-text', title: 'Umowa przedwstępna', desc: 'Zadatek, termin, forma, warunek kredytowy — sprawdzam albo przygotowuję umowę, zanim wpłacisz zadatek.' },
      { slug: 'sprawdzenie-umowy-rezerwacyjnej', icon: 'file-check', title: 'Sprawdzenie umowy rezerwacyjnej', desc: 'Czy odzyskasz opłatę, gdy nie dostaniesz kredytu albo deweloper zmieni warunki.' },
    ],
  },
  {
    id: 'transakcje-umowy', n: '2', icon: 'file-signature',
    title: 'Obsługa transakcji i umowy',
    tagline: 'Od oferty do aktu — i wszystko, co trzeba podpisać po drodze.',
    intro: 'Prowadzę Cię przez całą transakcję — od oferty i umowy przedwstępnej, przez negocjacje, po bezpieczny akt notarialny i rozliczenie.',
    services: [
      { slug: 'obsluga-zakupu', icon: 'shopping-bag', title: 'Kompleksowa obsługa zakupu nieruchomości', desc: 'Prowadzę Cię od oferty, przez umowy, po akt notarialny.' },
      { slug: 'obsluga-sprzedazy', icon: 'badge-dollar-sign', title: 'Kompleksowa obsługa sprzedaży nieruchomości', desc: 'Przygotowanie dokumentów, umowy i bezpieczne sfinalizowanie sprzedaży.' },
      { slug: 'negocjacje-nieruchomosci', icon: 'handshake', title: 'Negocjacje na rynku nieruchomości', desc: 'Wsparcie prawne w rozmowach z deweloperem, sprzedającym lub najemcą.' },
      { slug: 'dozywocie-renta', icon: 'heart-handshake', title: 'Umowa dożywocia, renta, odwrócona hipoteka', desc: 'Bezpieczne przekazanie nieruchomości w zamian za opiekę lub dożywotnią rentę.' },
      { slug: 'darowizna-nieruchomosci', icon: 'gift', title: 'Darowizna nieruchomości i jej odwołanie', desc: 'Przekazanie w rodzinie — i co zrobić, gdy darowiznę trzeba cofnąć.' },
      { slug: 'flip-mieszkania', icon: 'repeat', title: 'Flip mieszkania — zakup i odsprzedaż', desc: 'Okazja spadkowa, zadłużona, z licytacji? Sprawdzam ją przed zadatkiem i prowadzę zakup oraz sprzedaż tak, żeby zysk został u Ciebie.' },
    ],
  },
  {
    id: 'warunki-zabudowy-planowanie', n: '3', icon: 'map',
    title: 'Warunki zabudowy i planowanie przestrzenne',
    tagline: 'Czy i co można zbudować na tej działce.',
    intro: 'Sprawdzam i wywalczam to, co wolno zbudować na Twojej działce — warunki zabudowy, plan ogólny, MPZP i roszczenia, gdy plan obniża wartość gruntu.',
    services: [
      { slug: 'warunki-zabudowy', icon: 'map', title: 'Warunki zabudowy (WZ)', desc: 'Decyzja o warunkach zabudowy — od wniosku po odwołanie.' },
      { slug: 'plan-ogolny', icon: 'layout-grid', title: 'Plan ogólny gminy', desc: 'Gminy zastępują studium planem ogólnym — sprawdzam, jak klasyfikuje Twoją działkę i co z tego wynika.' },
      { slug: 'skarga-na-plan-miejscowy', icon: 'scale', title: 'Skarga na plan miejscowy (MPZP)', desc: 'Plan niesłusznie ogranicza Twoją nieruchomość? Analizuję MPZP i zaskarżam go do sądu.' },
      { slug: 'oplaty-odszkodowania-planistyczne', icon: 'coins', title: 'Opłaty i odszkodowania planistyczne', desc: 'Renta planistyczna i opłata adiacencka — obrona; odszkodowanie lub wykup, gdy plan odebrał wartość.' },
    ],
  },
  {
    id: 'proces-budowlany', n: '4', icon: 'hard-hat',
    title: 'Proces budowlany i samowole',
    tagline: 'Pozwolenia, samowole, spory z wykonawcą — cały proces budowlany.',
    intro: 'Prowadzę cały proces budowlany od strony prawnej — pozwolenia, zgłoszenia, legalizacje samowoli i spory z wykonawcą lub nadzorem budowlanym.',
    services: [
      { slug: 'pozwolenie-na-budowe', icon: 'file-check', title: 'Pozwolenie na budowę', desc: 'Przygotowanie wniosku i prowadzenie postępowania.' },
      { slug: 'zgloszenie-budowy', icon: 'clipboard-list', title: 'Zgłoszenie budowy i robót', desc: 'Dom do 70 m², rozbudowa, drobne roboty — bez zbędnych formalności.' },
      { slug: 'legalizacja-samowoli', icon: 'building', title: 'Legalizacja samowoli budowlanej', desc: 'Legalizacja zwykła i uproszczona (obiekty starsze niż 20 lat).' },
      { slug: 'umowa-o-roboty-budowlane', icon: 'file-signature', title: 'Umowa o roboty budowlane', desc: 'Sprawdzenie i sporządzenie umowy — kary, terminy, odbiory, zabezpieczenie pieniędzy.' },
      { slug: 'spory-z-wykonawca', icon: 'gavel', title: 'Spory z wykonawcą robót budowlanych', desc: 'Wady, opóźnienia, kary, odstąpienie — po stronie inwestora.' },
      { slug: 'nadzor-budowlany-pinb', icon: 'shield-alert', title: 'Reprezentacja przed nadzorem budowlanym (PINB)', desc: 'Kontrole, nakazy, postępowania naprawcze.' },
    ],
  },
  {
    id: 'ksiegi-wieczyste-stan-prawny', n: '5', icon: 'scroll-text',
    title: 'Księgi wieczyste, stan prawny i użytkowanie wieczyste',
    tagline: 'Porządkujemy papiery — księgi, granice, własność.',
    intro: 'Porządkuję papiery: księgi wieczyste, hipoteki, granice, użytkowanie wieczyste i nieuregulowane stany prawne — tak, żeby nieruchomość była naprawdę Twoja.',
    services: [
      { slug: 'zasiedzenie-nieruchomosci', icon: 'hourglass', title: 'Zasiedzenie nieruchomości', desc: 'Nabycie własności przez wieloletnie posiadanie — i obrona przed zasiedzeniem.' },
      { slug: 'uregulowanie-stanu-prawnego', icon: 'folder-tree', title: 'Uregulowanie stanu prawnego nieruchomości', desc: 'Błędne wpisy, brak księgi, nieuregulowany spadek, granice — porządkuję papiery.' },
      { slug: 'uzytkowanie-wieczyste', icon: 'replace', title: 'Użytkowanie wieczyste: przekształcenie i opłaty', desc: 'Wykup gruntu, bonifikaty i sprzeciw od zawyżonej opłaty rocznej.' },
    ],
  },
  {
    id: 'wspolwlasnosc-podzialy', n: '6', icon: 'split',
    title: 'Współwłasność i sprawy działowe',
    tagline: 'Wspólna nieruchomość, spadek, podział po rozwodzie.',
    intro: 'Pomagam wyjść ze wspólnej nieruchomości i podzielić majątek — po spadku, rozwodzie albo gdy współwłaściciele nie potrafią się dogadać.',
    services: [
      { slug: 'zniesienie-wspolwlasnosci', icon: 'split', title: 'Zniesienie współwłasności', desc: 'Wyjście ze współwłasności — podział, spłata, rozliczenie nakładów, bez licytacji.' },
      { slug: 'dzial-spadku', icon: 'scroll', title: 'Dział spadku z nieruchomością', desc: 'Sprawiedliwy podział odziedziczonego majątku z realną spłatą.' },
      { slug: 'zachowek', icon: 'coins', title: 'Zachowek', desc: 'Dochodzenie i obrona — ile realnie się należy i czy da się obniżyć.' },
      { slug: 'stwierdzenie-nabycia-spadku', icon: 'file-check', title: 'Stwierdzenie nabycia spadku', desc: 'Potwierdzenie, kto dziedziczy — u notariusza albo w sądzie.' },
      { slug: 'podzial-majatku-po-rozwodzie', icon: 'split-square-horizontal', title: 'Podział majątku po rozwodzie', desc: 'Nieruchomość, spłata, nakłady i kredyt hipoteczny po rozwodzie.' },
    ],
  },
  {
    id: 'najem', n: '7', icon: 'key-round',
    title: 'Najem nieruchomości',
    tagline: 'Bezpieczny najem — dla wynajmującego i dla najemcy.',
    intro: 'Zabezpieczam najem po obu stronach — skrojona pod Ciebie umowa zamiast szablonu z internetu, najem okazjonalny, eksmisja i windykacja czynszu.',
    services: [
      { slug: 'bezpieczny-najem', icon: 'key-round', title: 'Bezpieczny najem dla wynajmującego', desc: 'Najem okazjonalny i instytucjonalny, umowa skrojona pod Ciebie, nie szablon z internetu.' },
      { slug: 'analiza-umowy-najmu', icon: 'file-search', title: 'Analiza umowy najmu (dla najemcy)', desc: 'Sprawdzam umowę, zanim ją podpiszesz jako najemca.' },
      { slug: 'eksmisja', icon: 'door-open', title: 'Eksmisja', desc: 'Odzyskanie lokalu — od pozwu po egzekucję, także z najmu okazjonalnego.' },
      { slug: 'windykacja-czynszu', icon: 'banknote', title: 'Windykacja czynszu', desc: 'Odzyskiwanie zaległego czynszu i opłat.' },
      { slug: 'kaucja-najem', icon: 'piggy-bank', title: 'Kaucja — rozliczenie i spory', desc: 'Zwrot, potrącenia, waloryzacja kaucji.' },
      { slug: 'obsluga-wynajmujacych', icon: 'layers', title: 'Stała obsługa wynajmujących (abonament)', desc: 'Pakiet dla właścicieli kilku lokali — bieżące wsparcie w jednej opłacie.' },
    ],
  },
  {
    id: 'sluzebnosci-odszkodowania', n: '8', icon: 'zap',
    title: 'Służebności i odszkodowania (przesył, wywłaszczenia)',
    tagline: 'Słupy, rury i drogi na Twojej działce — odzyskaj należne pieniądze.',
    intro: 'Słupy, linie, rury i drogi na Twojej działce to pieniądze, które Ci się należą. Dochodzę wynagrodzeń za przesył, bezumowne korzystanie i wywłaszczenia.',
    services: [
      { slug: 'odszkodowanie-sluzebnosc-przesylu', icon: 'zap', title: 'Odszkodowanie za słupy i służebność przesyłu', desc: 'Słupy, linie i rury na działce — wynagrodzenie i uregulowanie służebności.' },
      { slug: 'bezumowne-korzystanie', icon: 'circle-dollar-sign', title: 'Wynagrodzenie za bezumowne korzystanie z gruntu', desc: 'Firma lub sąsiad korzysta z Twojej ziemi bez tytułu — dochodzę zapłaty.' },
      { slug: 'droga-konieczna', icon: 'route', title: 'Droga konieczna', desc: 'Brak dostępu do drogi publicznej — ustanowienie przejazdu lub obrona.' },
      { slug: 'odszkodowanie-wywlaszczenie', icon: 'construction', title: 'Odszkodowanie za wywłaszczenie i drogi (ZRID)', desc: 'Działka pod drogę lub inwestycję publiczną — kwestionowanie zaniżonych operatów.' },
      { slug: 'wykup-dzialki-resztkowej', icon: 'scissors', title: 'Wykup działki resztkowej', desc: 'Po wywłaszczeniu została bezużyteczna część? Żądam jej wykupu.' },
      { slug: 'ograniczenie-korzystania-nieruchomosci', icon: 'lock', title: 'Ograniczenie korzystania z nieruchomości (art. 124 UGN)', desc: 'Zezwolenia na wejście w teren i odszkodowania za urządzenia.' },
    ],
  },
  {
    id: 'grunty-rolne-oze', n: '9', icon: 'sprout',
    title: 'Grunty rolne i OZE',
    tagline: 'Ziemia rolna, KOWR, dzierżawy pod fotowoltaikę i wiatraki.',
    intro: 'Prowadzę sprawy ziemi rolnej — UKUR i KOWR, status rolnika, odrolnienie oraz długoletnie dzierżawy pod fotowoltaikę i wiatraki.',
    services: [
      { slug: 'nieruchomosci-rolne', icon: 'wheat', title: 'Nieruchomości rolne (UKUR, KOWR)', desc: 'Czy grunt jest „rolny”, czy potrzeba KOWR, oświadczenia i transakcja.' },
      { slug: 'zgoda-kowr', icon: 'stamp', title: 'Zgoda KOWR na nabycie ziemi rolnej', desc: 'Pełne prowadzenie wniosku o zgodę Dyrektora KOWR.' },
      { slug: 'status-rolnika', icon: 'tractor', title: 'Status rolnika indywidualnego', desc: 'Wykazanie kwalifikacji, zamieszkania i prowadzenia gospodarstwa.' },
      { slug: 'dzierzawa-rolna', icon: 'file-text', title: 'Umowy dzierżawy rolnej', desc: 'Wzory, czas trwania, czynsz, wypowiedzenia — i spory z dzierżawcą.' },
      { slug: 'dzierzawa-oze', icon: 'sun', title: 'Dzierżawa pod fotowoltaikę i wiatraki', desc: 'Analiza i negocjacja umów OZE wiążących grunt na 25–30 lat.' },
      { slug: 'odrolnienie', icon: 'shuffle', title: 'Odrolnienie i wyłączenie z produkcji rolnej', desc: 'Zmiana przeznaczenia gruntu i optymalizacja opłat za wyłączenie.' },
    ],
  },
  {
    id: 'obsluga-podmiotow-profesjonalnych', n: '10', icon: 'briefcase',
    title: 'Podmioty profesjonalne rynku nieruchomości',
    tagline: 'Stała, abonamentowa obsługa firm i instytucji rynku nieruchomości.',
    intro: 'Stała, abonamentowa obsługa prawna firm i instytucji rynku nieruchomości — od deweloperów i biur, po fundusze, wykonawców i przedsiębiorstwa rolne.',
    services: [
      { slug: 'obsluga-prawna-deweloperow', icon: 'building-2', title: 'Deweloperzy (mieszkaniowi i komercyjni)', desc: 'Od zabezpieczenia gruntu, przez dokumenty sprzedażowe, po posprzedaż.' },
      { slug: 'obsluga-prawna-biur-nieruchomosci', icon: 'home', title: 'Biura nieruchomości i pośrednicy', desc: 'Umowy pośrednictwa, AML, RODO, audyt ogłoszeń, bieżące wsparcie.' },
      { slug: 'obsluga-prawna-zarzadcow', icon: 'clipboard-list', title: 'Zarządcy nieruchomości', desc: 'Umowy o zarządzanie, odpowiedzialność, windykacja, obsługa wspólnot.' },
      { slug: 'obsluga-prawna-wspolnot', icon: 'users', title: 'Wspólnoty mieszkaniowe', desc: 'Uchwały, regulaminy, windykacja zaliczek, spory z deweloperem.' },
      { slug: 'obsluga-prawna-spoldzielni', icon: 'users-round', title: 'Spółdzielnie mieszkaniowe', desc: 'Uchwały organów, przekształcenia praw do lokali, walne zgromadzenia.' },
      { slug: 'obsluga-prawna-funduszy-prs', icon: 'landmark', title: 'Inwestorzy instytucjonalni i fundusze (PRS)', desc: 'Portfele najmu instytucjonalnego, transakcje pakietowe, due diligence.' },
      { slug: 'obsluga-prawna-inwestorow-flipping', icon: 'trending-up', title: 'Profesjonalni inwestorzy i firmy flippingowe', desc: 'Szybkie DD, umowy inwestycyjne, cesje, obsługa transakcji w tempie rynku.' },
      { slug: 'obsluga-prawna-firm-budowlanych', icon: 'hard-hat', title: 'Generalni wykonawcy i firmy budowlane', desc: 'Umowy o roboty (KC/FIDIC), podwykonawcy, kary, gwarancja zapłaty, spory.' },
      { slug: 'obsluga-prawna-architektow', icon: 'pen-tool', title: 'Pracownie architektoniczne i projektanci', desc: 'Umowy projektowe, prawa autorskie do projektu, odpowiedzialność.' },
      { slug: 'obsluga-prawna-geodetow', icon: 'ruler', title: 'Geodeci', desc: 'Rozgraniczenia, podziały, aktualizacja ewidencji, spory i odpowiedzialność.' },
      { slug: 'obsluga-prawna-rzeczoznawcow', icon: 'bar-chart-3', title: 'Rzeczoznawcy majątkowi', desc: 'Operaty, odpowiedzialność zawodowa, spory o wyceny, obsługa bieżąca.' },
      { slug: 'obsluga-prawna-deweloperow-oze', icon: 'sun', title: 'Deweloperzy OZE i firmy dzierżawiące grunty', desc: 'Portfele umów dzierżawy (land lease), służebności, cesje, zabezpieczenia.' },
      { slug: 'obsluga-prawna-operatorow-najmu', icon: 'key-round', title: 'Operatorzy najmu, PRS i condohoteli', desc: 'Umowy najmu zwrotnego, gwarancje czynszu, modele podnajmu i zarządzania.' },
      { slug: 'obsluga-prawna-najemcow-komercyjnych', icon: 'store', title: 'Najemcy komercyjni i sieci handlowe', desc: 'Negocjacje najmu, indeksacja, fit-out, wyjście z umowy.' },
      { slug: 'obsluga-prawna-przedsiebiorstw-rolnych', icon: 'wheat', title: 'Przedsiębiorstwa rolne i właściciele dużych areałów', desc: 'UKUR/KOWR, dzierżawy, OZE, scalenia, sukcesja gospodarstwa.' },
      { slug: 'obsluga-prawna-tbs-sim-kooperatyw', icon: 'building', title: 'TBS / SIM i kooperatywy mieszkaniowe', desc: 'Obsługa społecznych form mieszkalnictwa i przedsięwzięć kooperatyw.' },
    ],
  },
  {
    id: 'roszczenia-deweloper', n: '11', icon: 'gavel',
    title: 'Roszczenia i spory z deweloperem',
    tagline: 'Deweloper zawiódł? Dochodzę tego, co Ci się należy.',
    intro: 'Deweloper się spóźnił, lokal ma wady albo metraż się nie zgadza? Dochodzę kar umownych, roszczeń z rękojmi i gwarancji — aż do sądu.',
    services: [
      { slug: 'kary-za-opoznienie-dewelopera', icon: 'alarm-clock', title: 'Kary umowne za opóźnienie dewelopera', desc: 'Deweloper się spóźnia? Sprawdzam, ile Ci się należy, i egzekwuję.' },
      { slug: 'rekojmia-wady-lokalu', icon: 'wrench', title: 'Rękojmia za wady lokalu', desc: 'Usterki w mieszkaniu po odbiorze — naprawa, obniżenie ceny lub odstąpienie.' },
      { slug: 'wady-czesci-wspolnych', icon: 'building', title: 'Wady i usterki części wspólnych budynku', desc: 'Dach, elewacja, garaż, instalacje — roszczenia za wady wspólnych części.' },
      { slug: 'usuniecie-wad-protokol', icon: 'clipboard-check', title: 'Egzekwowanie usunięcia wad z protokołu odbioru', desc: 'Wpisałeś wady do protokołu, a deweloper zwleka — wymuszam naprawę.' },
      { slug: 'spory-o-metraz', icon: 'ruler', title: 'Spory o powierzchnię (metraż) lokalu', desc: 'Mieszkanie mniejsze niż w umowie? Rozliczenie różnicy ceny.' },
      { slug: 'klauzule-abuzywne-deweloper', icon: 'file-warning', title: 'Klauzule abuzywne w umowie deweloperskiej', desc: 'Niedozwolone postanowienia — analiza, UOKiK, droga sądowa.' },
      { slug: 'gwarancja-jakosci-lokal', icon: 'badge-check', title: 'Roszczenia z gwarancji jakości na lokal', desc: 'Egzekwowanie zobowiązań gwarancyjnych dewelopera.' },
      { slug: 'roszczenia-wspolnota-deweloper', icon: 'users', title: 'Przejęcie roszczeń nabywców przez wspólnotę', desc: 'Wspólnota dochodzi wad części wspólnych — uchwały i reprezentacja.' },
    ],
  },
];

/* 12 najczęstszych spraw — kafelki na stronie „Usługi” (odpowiednik płaskiej listy u konkurencji) */
const FEATURED_SLUGS = [
  'audyt-stanu-prawnego-nieruchomosci',
  'sprawdzenie-umowy-deweloperskiej',
  'warunki-zabudowy',
  'plan-ogolny',
  'odszkodowanie-sluzebnosc-przesylu',
  'rekojmia-wady-lokalu',
  'bezpieczny-najem',
  'negocjacje-nieruchomosci',
  'pozwolenie-na-budowe',
  'nieruchomosci-rolne',
  'flip-mieszkania',
  'obsluga-prawna-deweloperow',
];

/* ---- Lookup helpers -------------------------------------------------- */
const SERVICE_INDEX = {};
const SERVICE_BLOCK_OF = {};
SERVICE_BLOCKS.forEach((b) => {
  b.services.forEach((s) => {
    SERVICE_INDEX[s.slug] = s;
    SERVICE_BLOCK_OF[s.slug] = b.id;
  });
});
const BLOCK_INDEX = {};
SERVICE_BLOCKS.forEach((b) => { BLOCK_INDEX[b.id] = b; });

function getService(slug) { return SERVICE_INDEX[slug] || null; }
function getBlock(id) { return BLOCK_INDEX[id] || null; }
function getBlockOfService(slug) { return getBlock(SERVICE_BLOCK_OF[slug]); }
function getFeatured() { return FEATURED_SLUGS.map((s) => ({ ...SERVICE_INDEX[s], blockId: SERVICE_BLOCK_OF[s] })); }

const TOTAL_SERVICES = SERVICE_BLOCKS.reduce((n, b) => n + b.services.length, 0);

Object.assign(window, {
  SERVICE_BLOCKS, FEATURED_SLUGS, SERVICE_INDEX, BLOCK_INDEX,
  getService, getBlock, getBlockOfService, getFeatured, TOTAL_SERVICES,
});
