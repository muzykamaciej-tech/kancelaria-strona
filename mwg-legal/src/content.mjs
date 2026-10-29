/* content.mjs — all texts of the site in one place: firm data, practice areas, sectors, people, publications.
   Items marked DO_POTWIERDZENIA (see README) need the partners' confirmation before publication. */

export const SITE = {
  name: 'MWG Legal',
  fullName: 'MWG Legal – Muzyka Goździewski Wspólnicy',
  url: 'https://mwglegal.pl', // DO_POTWIERDZENIA: docelowa domena
  description: 'Kancelaria adwokacka dla biznesu: prawo korporacyjne, podatkowe, nieruchomości i prawo pracy. Lublin i Warszawa.',
  email: 'maciej.muzyka@mecenasodnieruchomosci.pl', // DO_POTWIERDZENIA: wspólny adres kancelarii
  phone: '+48 884 784 984', // DO_POTWIERDZENIA: wspólny numer kancelarii
  year: 2026,
};

export const OFFICES = [
  {
    slug: 'lublin',
    city: 'Lublin',
    street: 'ul. Cicha 4/5', // DO_POTWIERDZENIA
    postal: '20-078 Lublin',
    img: 'lublin',
    text: 'Biuro w Lublinie obsługuje klientów z Lubelszczyzny i wschodniej Polski. Spotkania odbywają się po wcześniejszym umówieniu terminu.',
  },
  {
    slug: 'warszawa',
    city: 'Warszawa',
    street: 'ul. Bracka 20/7A', // DO_POTWIERDZENIA
    postal: '00-028 Warszawa',
    img: 'warsaw',
    text: 'W Warszawie spotykamy się z klientami w biurze w Śródmieściu. Spotkania odbywają się po wcześniejszym umówieniu terminu.',
  },
];

/* ---------- Practice areas ---------- */
export const PRACTICES = [
  {
    slug: 'prawo-korporacyjne',
    name: 'Prawo korporacyjne i transakcje',
    short: 'Prawo korporacyjne',
    img: 'towers',
    teaser: 'Zakładanie i przekształcanie spółek, umowy wspólników, obsługa organów spółki, sprzedaż udziałów i przedsiębiorstw.',
    lead: 'Zakładamy, porządkujemy i przekształcamy spółki. Przygotowujemy umowy wspólników i dokumenty korporacyjne oraz prowadzimy transakcje sprzedaży udziałów i przedsiębiorstw.',
    intro: [
      'Forma prawna firmy i relacje między wspólnikami decydują o tym, kto ma wpływ na spółkę, kto odpowiada za jej zobowiązania i jak można z niej wyjść. Dlatego dokumenty korporacyjne przygotowujemy z myślą o konkretnych ludziach i planach, a nie z wzoru.',
      'Przy transakcjach łączymy pracę korporacyjną z badaniem nieruchomości, umów i spraw pracowniczych spółki, tak aby kupujący wiedział, co nabywa, a sprzedający, za co odpowiada po zamknięciu transakcji.',
    ],
    help: [
      'zakładanie spółek i wybór formy prowadzenia działalności',
      'umowy i statuty spółek, umowy wspólników i inwestycyjne',
      'zgromadzenia, uchwały, zmiany w KRS i księga udziałów',
      'przekształcenia, połączenia i podziały spółek',
      'przekształcenie jednoosobowej działalności w spółkę',
      'badanie spółki (due diligence) przed transakcją',
      'sprzedaż i nabycie udziałów, akcji i przedsiębiorstw',
      'sukcesja w firmach rodzinnych i fundacja rodzinna',
      'odpowiedzialność członków zarządu',
      'spory wspólników i zaskarżanie uchwał',
    ],
    who: ['założyciele i wspólnicy spółek', 'zarządy i rady nadzorcze', 'firmy rodzinne', 'inwestorzy i kupujący przedsiębiorstwa'],
    contacts: ['rafal-gozdziewski', 'maciej-muzyka'],
    related: ['prawo-podatkowe', 'obsluga-stala', 'spory-sadowe'],
    insights: ['wydruki-ksiag-wieczystych-i-alerty-krs-2026'],
    keywords: 'spółka z o.o. KRS umowa spółki M&A due diligence udziały akcje fundacja rodzinna sukcesja',
  },
  {
    slug: 'prawo-podatkowe',
    name: 'Prawo podatkowe',
    short: 'Prawo podatkowe',
    img: 'coins',
    teaser: 'Skutki podatkowe transakcji i inwestycji, interpretacje indywidualne, kontrole oraz spory z organami podatkowymi.',
    lead: 'Oceniamy skutki podatkowe decyzji biznesowych, zanim zostaną podjęte, i reprezentujemy klientów w postępowaniach przed organami podatkowymi oraz sądami administracyjnymi.',
    intro: [
      'Podatek jest częścią każdej transakcji: sprzedaży udziałów, aportu nieruchomości, dzierżawy gruntu czy zmiany formy działalności. Analizujemy go razem z umową, a nie po jej podpisaniu.',
      'Gdy organ podatkowy kwestionuje rozliczenia, prowadzimy sprawę od kontroli, przez postępowanie podatkowe, po skargę do wojewódzkiego sądu administracyjnego i skargę kasacyjną do NSA.',
    ],
    help: [
      'skutki podatkowe transakcji i restrukturyzacji (CIT, PIT, VAT, PCC)',
      'podatki przy nieruchomościach: sprzedaż, aport, najem i dzierżawa',
      'dzierżawa gruntów pod farmy fotowoltaiczne a VAT',
      'podatek od nieruchomości i błędy w ewidencji gruntów i budynków',
      'wnioski o interpretacje indywidualne',
      'kontrole podatkowe i celno-skarbowe',
      'odwołania od decyzji podatkowych',
      'skargi do WSA i skargi kasacyjne do NSA',
      'podatkowe aspekty sukcesji i fundacji rodzinnej',
      'odpowiedzialność podatkowa członków zarządu',
    ],
    who: ['spółki i przedsiębiorcy', 'inwestorzy w nieruchomości', 'właściciele gruntów dzierżawionych pod OZE', 'zarządy spółek'],
    contacts: ['rafal-gozdziewski', 'maciej-muzyka'],
    related: ['prawo-korporacyjne', 'prawo-nieruchomosci', 'spory-sadowe'],
    insights: ['dzierzawa-pod-fotowoltaike-a-vat', 'zawyzony-podatek-od-nieruchomosci-blad-w-ewidencji'],
    keywords: 'podatki VAT CIT PIT PCC interpretacja indywidualna kontrola podatkowa WSA NSA podatek od nieruchomości',
  },
  {
    slug: 'prawo-nieruchomosci',
    name: 'Prawo nieruchomości i proces inwestycyjny',
    short: 'Prawo nieruchomości',
    img: 'crane',
    teaser: 'Zakup i sprzedaż nieruchomości, warunki zabudowy i plany miejscowe, umowy budowlane, służebność przesyłu, grunty rolne i OZE.',
    lead: 'Prowadzimy zakupy i sprzedaż nieruchomości, przygotowujemy grunt pod inwestycje i reprezentujemy inwestorów w sprawach z urzędami, wykonawcami i operatorami sieci.',
    intro: [
      'Wartość nieruchomości zależy od jej stanu prawnego: wpisów w księdze wieczystej, dostępu do drogi, przeznaczenia w planie, służebności i sieci przebiegających przez działkę. Sprawdzamy to przed zakupem i porządkujemy, gdy coś blokuje inwestycję.',
      'Prowadzimy sprawy w całym procesie inwestycyjnym: od warunków zabudowy i planu ogólnego gminy, przez umowy z wykonawcami, po spory sądowe i skargi do sądów administracyjnych.',
    ],
    help: [
      'badanie stanu prawnego nieruchomości przed zakupem',
      'umowy sprzedaży, przedwstępne, deweloperskie i rezerwacyjne',
      'najem i dzierżawa komercyjna',
      'warunki zabudowy, plan miejscowy i plan ogólny gminy',
      'pozwolenia na budowę i postępowania przed nadzorem budowlanym',
      'umowy o roboty budowlane i spory z wykonawcami',
      'służebność przesyłu i bezumowne korzystanie z gruntu przez sieci',
      'grunty rolne: nabycie, zgoda KOWR, dzierżawy pod OZE',
      'opłaty adiacenckie, renta planistyczna i odszkodowania planistyczne',
      'skargi do WSA i NSA w sprawach budowlanych i planistycznych',
    ],
    who: ['inwestorzy i deweloperzy', 'przedsiębiorcy kupujący lub sprzedający nieruchomości', 'właściciele gruntów', 'wynajmujący i najemcy powierzchni komercyjnych'],
    contacts: ['maciej-muzyka'],
    related: ['prawo-podatkowe', 'spory-sadowe', 'prawo-korporacyjne'],
    insights: ['umowa-o-roboty-budowlane', 'oplata-adiacencka-renta-planistyczna', 'wypowiedzenie-najmu-lokalu-uzytkowego'],
    keywords: 'nieruchomości księga wieczysta warunki zabudowy plan ogólny pozwolenie na budowę służebność przesyłu KOWR dzierżawa najem deweloper',
  },
  {
    slug: 'prawo-pracy',
    name: 'Prawo pracy',
    short: 'Prawo pracy',
    img: 'factory',
    teaser: 'Umowy i regulaminy, rozwiązywanie stosunku pracy, spory przed sądem pracy, kontrole PIP, prawo pracy w transakcjach.',
    lead: 'Doradzamy pracodawcom na co dzień: od umów i regulaminów, przez rozstania z pracownikami, po spory przed sądem pracy.',
    intro: [
      'W sprawach pracowniczych liczy się przygotowanie: dobrze napisana umowa, regulamin zgodny z praktyką firmy i udokumentowana decyzja kadrowa ograniczają ryzyko sporu.',
      'Gdy do sporu dochodzi, reprezentujemy pracodawców przed sądami pracy i w postępowaniach przed Państwową Inspekcją Pracy.',
    ],
    help: [
      'umowy o pracę, kontrakty menedżerskie i umowy B2B',
      'zakaz konkurencji i ochrona tajemnicy przedsiębiorstwa',
      'regulaminy pracy, wynagradzania i premiowania',
      'praca zdalna, monitoring, procedury zgłaszania naruszeń',
      'rozwiązywanie umów i zwolnienia grupowe',
      'postępowania wyjaśniające w sprawach mobbingu i dyskryminacji',
      'kontrole Państwowej Inspekcji Pracy',
      'spory przed sądem pracy',
      'przejście zakładu pracy przy transakcjach',
    ],
    who: ['pracodawcy z sektora prywatnego', 'działy HR i kadry', 'zarządy spółek', 'kupujący przedsiębiorstwa'],
    contacts: ['rafal-gozdziewski'],
    related: ['obsluga-stala', 'spory-sadowe', 'prawo-korporacyjne'],
    insights: [],
    keywords: 'prawo pracy umowa o pracę kodeks pracy regulamin zwolnienie sąd pracy PIP zakaz konkurencji mobbing sygnaliści',
  },
  {
    slug: 'spory-sadowe',
    name: 'Spory sądowe i administracyjne',
    short: 'Spory sądowe',
    img: 'court',
    teaser: 'Spory gospodarcze, dochodzenie należności, kary umowne i odszkodowania, sprawy przed WSA i NSA.',
    lead: 'Prowadzimy spory gospodarcze i administracyjne: od wezwania do zapłaty, przez proces przed sądem, po skargę kasacyjną.',
    intro: [
      'Spór zaczynamy od oceny dowodów i kosztów, a dopiero potem wybieramy drogę: negocjacje, mediację albo proces. Klient od początku wie, na czym opiera się jego stanowisko i jakie ma ryzyka.',
      'Reprezentujemy klientów przed sądami powszechnymi oraz wojewódzkimi sądami administracyjnymi i Naczelnym Sądem Administracyjnym.',
    ],
    help: [
      'spory gospodarcze przed sądami powszechnymi',
      'dochodzenie należności, nakazy zapłaty i zabezpieczenia',
      'spory o wykonanie umów, kary umowne i odszkodowania',
      'spory korporacyjne i odpowiedzialność członków zarządu',
      'spory z wykonawcami robót budowlanych',
      'sprawy przed organami administracji',
      'skargi do WSA i skargi kasacyjne do NSA',
      'negocjacje ugodowe i mediacje',
      'postępowanie egzekucyjne',
    ],
    who: ['przedsiębiorcy i spółki', 'inwestorzy', 'zarządy spółek', 'właściciele nieruchomości'],
    contacts: ['maciej-muzyka', 'rafal-gozdziewski'],
    related: ['prawo-nieruchomosci', 'prawo-korporacyjne', 'prawo-podatkowe'],
    insights: ['kara-umowna-za-opoznienie-dewelopera-uchwala-sn', 'czy-sasiad-moze-zablokowac-budowe'],
    keywords: 'spór sądowy proces pozew windykacja nakaz zapłaty kara umowna odszkodowanie WSA NSA mediacja egzekucja',
  },
  {
    slug: 'obsluga-stala',
    name: 'Stała obsługa prawna firm',
    short: 'Stała obsługa firm',
    img: 'pen',
    teaser: 'Bieżące doradztwo dla zarządu, opiniowanie i negocjowanie umów, wzorce umów i regulaminy, nadzór nad sprawami spornymi.',
    lead: 'Dla firm, które potrzebują prawnika na bieżąco. Jeden zespół zna spółkę, jej umowy i ludzi, więc odpowiada szybciej i bez wdrażania się od nowa.',
    intro: [
      'Stała obsługa obejmuje sprawy, które w firmie wracają co tydzień: umowy z kontrahentami, pytania zarządu, kwestie pracownicze, należności. Zakres i sposób współpracy ustalamy z klientem na początku.',
      'W jednym zespole łączymy prawo korporacyjne, podatkowe, nieruchomości i prawo pracy, dlatego sprawa, która dotyczy kilku dziedzin, nie musi trafiać do kilku kancelarii.',
    ],
    help: [
      'opiniowanie i negocjowanie umów handlowych',
      'ogólne warunki umów, regulaminy i wzorce',
      'bieżące doradztwo dla zarządu',
      'umowy dystrybucji, współpracy i poufności',
      'wsparcie działu HR w sprawach pracowniczych',
      'nadzór nad windykacją i sprawami spornymi',
      'dokumentacja korporacyjna spółki',
      'szkolenia dla zespołu klienta',
    ],
    who: ['spółki bez własnego działu prawnego', 'firmy rodzinne', 'zarządy i dyrektorzy finansowi', 'przedsiębiorcy rozwijający działalność'],
    contacts: ['rafal-gozdziewski', 'maciej-muzyka'],
    related: ['prawo-korporacyjne', 'prawo-pracy', 'prawo-podatkowe'],
    insights: [],
    keywords: 'stała obsługa prawna firm umowy handlowe regulaminy zarząd outsourcing prawny',
  },
];

/* ---------- Sectors ---------- */
export const SECTORS = [
  {
    slug: 'nieruchomosci-i-budownictwo',
    name: 'Nieruchomości i budownictwo',
    img: 'crane',
    teaser: 'Deweloperzy, inwestorzy, wykonawcy i właściciele nieruchomości komercyjnych.',
    lead: 'Pracujemy z firmami, które kupują grunty, budują, wynajmują i sprzedają: od pierwszego badania działki po odbiór inwestycji.',
    matters: ['badanie gruntu przed zakupem i warunki zabudowy', 'umowy z generalnym wykonawcą i podwykonawcami', 'najem powierzchni komercyjnych', 'spory o kary umowne i wady robót', 'skargi na plany miejscowe i decyzje budowlane'],
    practices: ['prawo-nieruchomosci', 'spory-sadowe', 'prawo-podatkowe'],
  },
  {
    slug: 'energetyka-i-oze',
    name: 'Energetyka i OZE',
    img: 'pylon',
    teaser: 'Inwestycje w fotowoltaikę i wiatr, dzierżawy gruntów, sieci przesyłowe.',
    lead: 'Doradzamy przy projektach odnawialnych źródeł energii oraz w sprawach sieci przesyłowych, które przebiegają przez cudze grunty.',
    matters: ['dzierżawy gruntów pod farmy fotowoltaiczne i wiatrowe', 'warunki zabudowy i plan miejscowy dla instalacji OZE', 'podatkowe skutki dzierżawy gruntu pod OZE', 'służebność przesyłu i wynagrodzenie za bezumowne korzystanie', 'przeniesienie słupów i urządzeń przesyłowych'],
    practices: ['prawo-nieruchomosci', 'prawo-podatkowe', 'spory-sadowe'],
  },
  {
    slug: 'rolnictwo-i-agrobiznes',
    name: 'Rolnictwo i agrobiznes',
    img: 'fields',
    teaser: 'Gospodarstwa, przetwórstwo i obrót ziemią rolną.',
    lead: 'Obsługujemy przedsiębiorstwa rolne i inwestorów kupujących grunty rolne, z uwzględnieniem ograniczeń w obrocie ziemią.',
    matters: ['nabycie nieruchomości rolnych i zgoda KOWR', 'dzierżawy rolne', 'przekształcenie gruntu rolnego pod zabudowę', 'umowy kontraktacji i dostaw', 'sukcesja gospodarstw i firm rodzinnych'],
    practices: ['prawo-nieruchomosci', 'prawo-korporacyjne', 'prawo-podatkowe'],
  },
  {
    slug: 'produkcja-handel-i-uslugi',
    name: 'Produkcja, handel i usługi',
    img: 'factory',
    teaser: 'Małe i średnie przedsiębiorstwa, które potrzebują jednego zespołu do spraw firmy.',
    lead: 'Dla firm produkcyjnych, handlowych i usługowych prowadzimy bieżącą obsługę: od umów z kontrahentami, przez sprawy pracownicze, po spory o zapłatę.',
    matters: ['umowy z dostawcami, odbiorcami i dystrybutorami', 'ogólne warunki sprzedaży i regulaminy', 'zatrudnienie i regulaminy pracy', 'dochodzenie należności', 'zakup i najem hal, magazynów i biur'],
    practices: ['obsluga-stala', 'prawo-pracy', 'spory-sadowe'],
  },
  {
    slug: 'firmy-rodzinne',
    name: 'Firmy rodzinne',
    img: 'lublin',
    teaser: 'Sukcesja, ład korporacyjny i majątek rodziny przedsiębiorców.',
    lead: 'Pomagamy właścicielom firm rodzinnych uporządkować własność, zarządzanie i przekazanie firmy następnemu pokoleniu.',
    matters: ['plan sukcesji i wybór struktury (spółka, fundacja rodzinna)', 'umowy wspólników i zasady zarządzania', 'przeniesienie nieruchomości firmowych', 'podatkowe skutki zmian właścicielskich', 'spory między wspólnikami'],
    practices: ['prawo-korporacyjne', 'prawo-podatkowe', 'prawo-nieruchomosci'],
  },
];

/* ---------- People ---------- */
export const PEOPLE = [
  {
    slug: 'maciej-muzyka',
    name: 'dr Maciej Muzyka',
    sortName: 'Muzyka',
    initials: 'MM',
    role: 'Adwokat, wspólnik',
    offices: ['Lublin', 'Warszawa'],
    photo: '/img/people/maciej-muzyka.webp',
    photoSmall: '/img/people/maciej-muzyka-480.webp',
    email: 'maciej.muzyka@mecenasodnieruchomosci.pl',
    phone: '+48 884 784 984',
    practices: ['prawo-nieruchomosci', 'spory-sadowe', 'prawo-podatkowe'],
    sectors: ['nieruchomosci-i-budownictwo', 'energetyka-i-oze', 'rolnictwo-i-agrobiznes'],
    bio: [
      'Adwokat i doktor nauk prawnych. Od lat zajmuje się prawem nieruchomości i procesem inwestycyjnym: stanem prawnym gruntów, warunkami zabudowy i planowaniem przestrzennym, umowami budowlanymi, służebnością przesyłu oraz gruntami rolnymi i projektami OZE.',
      'Studia prawnicze ukończył na Uniwersytecie Jagiellońskim, a doktorat z postępowania cywilnego obronił na UMCS w Lublinie. Doświadczenie zawodowe zdobywał w kancelarii SPCG. Pracował naukowo w Katedrze Prawa Rolnego i Gospodarki Gruntami UMCS.',
      'Jako wykładowca Okręgowej Rady Adwokackiej w Lublinie prowadzi dla aplikantów adwokackich zajęcia z postępowania sądowoadministracyjnego. Prowadzi także serwis mecenasodnieruchomosci.pl z artykułami o prawie nieruchomości.',
    ],
    facts: [
      ['Uprawnienia', 'Adwokat, Izba Adwokacka w Lublinie (LUB/ADW/1702)'],
      ['Wykształcenie', 'Uniwersytet Jagielloński (prawo); doktor nauk prawnych, UMCS w Lublinie'],
      ['Dydaktyka', 'Wykładowca Okręgowej Rady Adwokackiej w Lublinie (postępowanie sądowoadministracyjne)'],
    ],
    links: [['mecenasodnieruchomosci.pl', 'https://mecenasodnieruchomosci.pl']],
  },
  {
    slug: 'rafal-gozdziewski',
    name: 'Rafał Goździewski',
    sortName: 'Goździewski',
    initials: 'RG',
    role: 'Adwokat, wspólnik',
    offices: ['Warszawa', 'Lublin'],
    photo: null, // DO_POTWIERDZENIA: zdjęcie portretowe
    email: null, // DO_POTWIERDZENIA
    phone: null, // DO_POTWIERDZENIA
    practices: ['prawo-korporacyjne', 'prawo-podatkowe', 'prawo-pracy', 'obsluga-stala'], // DO_POTWIERDZENIA
    sectors: ['produkcja-handel-i-uslugi', 'firmy-rodzinne'], // DO_POTWIERDZENIA
    bio: [
      'Adwokat wpisany na listę adwokatów Izby Adwokackiej w Warszawie od 2013 roku. Współzałożyciel i wspólnik kancelarii Goździewski i Wspólnicy Kancelaria Adwokatów i Radców Prawnych, działającej od 2013 roku w Warszawie i w Lublinie.',
      'W MWG Legal zajmuje się obsługą przedsiębiorców i spółek, w tym sprawami korporacyjnymi, podatkowymi i pracowniczymi.', // DO_POTWIERDZENIA
    ],
    facts: [
      ['Uprawnienia', 'Adwokat, Izba Adwokacka w Warszawie (od 2013 r.)'],
    ],
    links: [],
  },
];

/* ---------- Publications (articles by dr Maciej Muzyka on mecenasodnieruchomosci.pl) ---------- */
export const INSIGHTS = [
  { slug: 'umowa-o-roboty-budowlane', title: 'Umowa o roboty budowlane: co to jest i co musi zawierać, żeby chroniła inwestora', date: '27 października 2026', iso: '2026-10-27', cat: 'Nieruchomości', img: 'crane', excerpt: 'Kary umowne, odbiory, podwykonawcy, gwarancja zapłaty i rękojmia: co wpisać do umowy z wykonawcą.' },
  { slug: 'wypowiedzenie-najmu-lokalu-uzytkowego', title: 'Wypowiedzenie najmu lokalu użytkowego: terminy, tryb natychmiastowy i treść pisma', date: '27 października 2026', iso: '2026-10-27', cat: 'Nieruchomości', img: 'towers', excerpt: 'Terminy wypowiedzenia najmu lokalu użytkowego, umowa na czas określony i tryb natychmiastowy.' },
  { slug: 'oplata-adiacencka-renta-planistyczna', title: 'Opłata adiacencka a renta planistyczna: kiedy gmina może żądać pieniędzy i jak się bronić', date: '27 października 2026', iso: '2026-10-27', cat: 'Nieruchomości', img: 'fields', excerpt: 'Kiedy gmina nalicza opłatę adiacencką i rentę planistyczną, w jakich terminach i jak się od nich bronić.' },
  { slug: 'zgoda-kowr-nabycie-ziemi-rolnej', title: 'Zgoda KOWR na nabycie nieruchomości rolnej: kiedy jest potrzebna i jak ją uzyskać', date: '27 października 2026', iso: '2026-10-27', cat: 'Rolnictwo i OZE', img: 'fields', excerpt: 'Kiedy nabywca ziemi rolnej potrzebuje zgody KOWR, kto składa wniosek i co dzieje się po jej wydaniu.' },
  { slug: 'wydruki-ksiag-wieczystych-i-alerty-krs-2026', title: 'Wydruki ksiąg wieczystych z mocą urzędową i alerty KRS w telefonie', date: '1 marca 2026', iso: '2026-03-01', cat: 'Spółki', img: 'towers', excerpt: 'Zmiany z 2026 r., które odczuje każdy inwestor i przedsiębiorca: odpisy z księgi wieczystej i powiadomienia o wpisach w KRS.' },
  { slug: 'zawyzony-podatek-od-nieruchomosci-blad-w-ewidencji', title: 'Zawyżony podatek od nieruchomości przez błąd w ewidencji', date: '28 lutego 2026', iso: '2026-02-28', cat: 'Podatki', img: 'coins', excerpt: 'Gdy decyzja podatkowa opiera się na błędnych danych z ewidencji gruntów i budynków: z kim i jak to wyjaśnić.' },
  { slug: 'czy-sasiad-moze-zablokowac-budowe', title: 'Czy sąsiad może zablokować Twoją budowę?', date: '26 lutego 2026', iso: '2026-02-26', cat: 'Spory', img: 'crane', excerpt: 'Gdzie kończą się prawa sąsiada, a zaczyna prawo inwestora do zabudowy.' },
  { slug: 'kara-umowna-za-opoznienie-dewelopera-uchwala-sn', title: 'Kara umowna za opóźnienie dewelopera to nie wszystko. Uchwała Sądu Najwyższego', date: '23 lutego 2026', iso: '2026-02-23', cat: 'Spory', img: 'court', excerpt: 'Czy kara umowna zamyka drogę do odszkodowania za opóźnienie? Stanowisko Sądu Najwyższego.' },
  { slug: 'dzierzawa-pod-fotowoltaike-a-vat', title: 'Czy dzierżawa gruntu pod fotowoltaikę jest zwolniona z VAT?', date: '30 grudnia 2025', iso: '2025-12-30', cat: 'Podatki', img: 'pylon', excerpt: 'Dzierżawa ziemi rolnej pod farmę fotowoltaiczną a zwolnienie z VAT: na co uważać przy wystawianiu faktury.' },
  { slug: 'farma-fotowoltaiczna-na-dzialce-rolnej', title: 'Czy na każdej działce rolnej można postawić farmę fotowoltaiczną?', date: '18 grudnia 2025', iso: '2025-12-18', cat: 'Rolnictwo i OZE', img: 'pylon', excerpt: 'Od czego zależy, czy na gruncie rolnym da się zbudować farmę fotowoltaiczną.' },
  { slug: 'wyrok-tk-zasiedzenie-sluzebnosci-przesylu', title: 'Wyrok TK: koniec z „darmowym” zasiedzeniem służebności przesyłu?', date: '15 grudnia 2025', iso: '2025-12-15', cat: 'Rolnictwo i OZE', img: 'pylon', excerpt: 'Co orzeczenie Trybunału Konstytucyjnego oznacza dla właścicieli gruntów, przez które biegną sieci przesyłowe.' },
].map((a) => ({ ...a, author: 'maciej-muzyka', url: `https://mecenasodnieruchomosci.pl/blog/${a.slug}` }));

/* Home carousel: sectors shown like AG's case-study slider. */
export const HOME_SLIDES = ['nieruchomosci-i-budownictwo', 'energetyka-i-oze', 'produkcja-handel-i-uslugi', 'rolnictwo-i-agrobiznes', 'firmy-rodzinne'];
