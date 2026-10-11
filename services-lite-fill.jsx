/* services-lite-fill.jsx — full content for 7 pages that previously rendered the
   lite fallback. Loads AFTER services-b2b.jsx; merges into window.SERVICE_CONTENT.
   4 usługowe ("Ty" → doFor = "Co dla Ciebie robię"); 3 B2B (doFor = "Zakres współpracy"). */

Object.assign(window.SERVICE_CONTENT, {

  'nieruchomosci-rolne': {
    h1: 'Nieruchomości rolne (UKUR, KOWR)',
    h1Full: 'Nieruchomości rolne (UKUR, KOWR): kto może kupić ziemię rolną',
    topic: 'Nieruchomość rolna',
    metaDesc: 'Ziemię rolną kupuje co do zasady rolnik indywidualny. Nieruchomość mniejszą niż 1 ha kupisz bez tego statusu, ale KOWR ma co do zasady pierwokup.',
    subtitle: 'Chcesz kupić działkę rolną, np. pod dom, i nie wiesz, czy bez statusu rolnika w ogóle możesz? Co do zasady ziemię rolną kupuje tylko rolnik indywidualny (art. 2a ustawy o kształtowaniu ustroju rolnego). Nieruchomość mniejszą niż 1 ha kupisz bez tego statusu; progi, pierwokup KOWR i wyjątki rodzinne sprawdzam przed aktem.',
    short: {
      q: 'Kto może kupić ziemię rolną?',
      a: 'Co do zasady tylko rolnik indywidualny (art. 2a ust. 1 u.k.u.r.). Bez statusu kupisz m.in. nieruchomość poniżej 1 ha, ziemię od osoby bliskiej albo za zgodą KOWR (art. 2a ust. 3–4). Przy sprzedaży pierwokup ma co do zasady KOWR, więc umowa jest warunkowa (art. 3 ust. 4 u.k.u.r., art. 597 k.c.).',
      facts: [
        [
          'Mniej niż 0,3 ha użytków rolnych',
          'Ustawy nie stosuje się (art. 1a pkt 1 lit. b u.k.u.r.)',
        ],
        [
          'Nieruchomość mniejsza niż 1 ha',
          'Kupi ją także osoba, która nie jest rolnikiem (art. 2a ust. 3 pkt 1a u.k.u.r.); przy sprzedaży co do zasady pierwokup KOWR (art. 3 ust. 4)',
        ],
        [
          '1 ha i więcej',
          'Rolnik indywidualny, nabywca z wyjątku z art. 2a ust. 3 (np. osoba bliska sprzedającego, dział spadku, nabycie w toku egzekucji) albo kupujący ze zgodą Dyrektora Generalnego KOWR (art. 2a ust. 1, 3 i 4 u.k.u.r.)',
        ],
        [
          'Limit dla rolnika',
          '300 ha użytków rolnych razem z jego gospodarstwem rodzinnym (art. 2a ust. 2 u.k.u.r.)',
        ],
        [
          'Próg 5 ha',
          'Od 30.04.2026 ziemię państwową z Zasobu Własności Rolnej Skarbu Państwa do 5 ha wolno sprzedawać mimo wstrzymania sprzedaży (art. 2 ust. 1 pkt 4 ustawy z 14.04.2016). Przy zakupie od osoby prywatnej progu 5 ha nie ma',
        ],
        [
          'Termin na pierwokup',
          'Miesiąc od otrzymania zawiadomienia (art. 598 § 2 k.c.); zawiadamia notariusz (art. 3 ust. 2 u.k.u.r.)',
        ],
      ],
    },
    introHeading: 'Czy działka jest rolna i jak to sprawdzić',
    intro: 'Nieruchomość rolna to nieruchomość, która jest lub może być wykorzystywana do produkcji rolnej (art. 46¹ k.c.). Liczy się więc możliwość uprawy, a nie to, czy ktoś dziś na działce gospodaruje. Ustawa o kształtowaniu ustroju rolnego (u.k.u.r.) nie obejmuje nieruchomości położonych na obszarach przeznaczonych w planach zagospodarowania przestrzennego na cele inne niż rolne (art. 2 pkt 1). Nie stosuje się jej też do nieruchomości, w których użytków rolnych jest mniej niż 0,3 ha (art. 1a pkt 1 lit. b). Użytki rolne to m.in. grunty orne, sady, łąki, pastwiska i grunty rolne zabudowane (art. 2 pkt 5), a las się do nich nie wlicza. Przykład (liczby umowne): nieruchomość to jedna działka w księdze wieczystej, 0,5 ha, w tym 0,25 ha gruntu ornego i las; ustawy nie stosuje się.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kupujesz działkę na wsi, sprzedajesz ziemię albo dostajesz ją w rodzinie',
    when: [
      { b: 'Notariusz przysłał projekt umowy warunkowej i wspomniał o pierwokupie KOWR.', t: 'KOWR ma miesiąc od otrzymania zawiadomienia (art. 598 § 2 k.c.); do tego czasu sprzedaż jest warunkowa (art. 597 § 1 k.c.).' },
      {
        b: 'Chcesz kupić działkę rolną pod dom, a nie jesteś rolnikiem.',
        t: 'Poniżej 1 ha możesz (art. 2a ust. 3 pkt 1a u.k.u.r.), ale o prawie do budowy decyduje plan miejscowy albo decyzja o warunkach zabudowy (art. 4 u.p.z.p.). To, czy po zakupie musisz przez 5 lat prowadzić gospodarstwo (art. 2b ust. 1 u.k.u.r.), trzeba ustalić przed aktem.',
      },
      {
        b: 'Rodzice chcą przepisać Ci ziemię albo kupujesz ją od brata.',
        t: 'Osoba bliska nie musi być rolnikiem, a KOWR nie ma pierwokupu ani prawa nabycia (art. 2a ust. 3 pkt 1 lit. a, art. 3 ust. 5, art. 4 ust. 4 pkt 2 lit. b u.k.u.r.).',
      },
      {
        b: 'Sprzedajesz ziemię komuś spoza rodziny, a działkę ktoś dzierżawi.',
        t: 'Dzierżawca z pisemną umową z datą pewną, wykonywaną co najmniej 3 lata, może mieć pierwokup (art. 3 ust. 1 u.k.u.r.), a umowa sprzedaży bez warunku byłaby wtedy nieważna (art. 599 § 2 k.c.).',
      },
    ],
    doForTitle: 'Status działki, kupującego i pierwokup: co sprawdzam przed aktem',
    doFor: [
      'Ustalam z ewidencji, planu miejscowego i księgi wieczystej, czy działka jest nieruchomością rolną i ile ma użytków rolnych (art. 1a, art. 2 pkt 1 i 5 u.k.u.r.).',
      'Sprawdzam, czy kupujący jest rolnikiem indywidualnym (art. 6 u.k.u.r.) albo czy pasuje zwolnienie z art. 2a ust. 3: mniej niż 1 ha, osoba bliska, spadek, zniesienie współwłasności.',
      'Ustalam, komu przysługuje pierwokup i czy działa wyjątek z art. 3 ust. 5 albo 7 u.k.u.r.; przy darowiźnie, zamianie albo dożywociu sprawdzam prawo nabycia KOWR (art. 4).',
      'Przygotowuję oświadczenia kupującego do aktu (art. 7 u.k.u.r.) i uzgadniam z notariuszem umowę warunkową oraz umowę przenoszącą własność (art. 597–598 k.c.).',
      'Ustalam, czy po zakupie działa obowiązek z art. 2b ust. 1–2 u.k.u.r. (5 lat prowadzenia gospodarstwa, zakaz zbycia), czy wyjątek z ust. 4. Jeżeli potrzebna jest zgoda KOWR, prowadzę ją osobno.',
    ],
    stepsHeading: 'Jak przebiega zakup ziemi rolnej z pierwokupem KOWR',
    steps: [
      'Przesyłasz numer księgi wieczystej albo działek i piszesz, kto sprzedaje, kto kupuje i czy jesteście rodziną. W 24 h roboczych odpowiadam, co jest do zrobienia przed aktem, i wysyłam ofertę z ceną oraz terminem. Dopóki jej nie przyjmiesz, nic nie płacisz.',
      'Umowa warunkowa u notariusza: sprzedaż pod warunkiem, że dzierżawca albo KOWR nie wykona pierwokupu. Notariusz zawiadamia uprawnionych (art. 3 ust. 2 u.k.u.r.).',
      'Miesiąc na pierwokup (art. 598 § 2 k.c.). Jeżeli KOWR go wykona, dochodzi do skutku umowa sprzedaży tej samej treści z KOWR działającym na rzecz Skarbu Państwa, a Ty działki nie kupisz (art. 600 § 1 k.c., art. 3 ust. 4 u.k.u.r.).',
      'Krok nieodwracalny: akt notarialny przenoszący własność (art. 158 k.c.). Nabycie niezgodne z ustawą jest nieważne (art. 9 ust. 1 u.k.u.r.), dlatego status działki i kupującego zamykam przed tym podpisem.',
    ],
    faq: [
      {
        q: 'Do ilu hektarów kupię ziemię rolną, nie będąc rolnikiem?',
        a: 'Bez zgody KOWR kupisz nieruchomość mniejszą niż 1 ha (art. 2a ust. 3 pkt 1a u.k.u.r.). Próg 0,3 ha z art. 1a liczy się od samych użytków rolnych, a próg 1 ha od powierzchni nieruchomości. Popularne „5 ha” dotyczy sprzedaży ziemi państwowej, nie zakupu od osoby prywatnej. Od 1 ha potrzebujesz zgody Dyrektora Generalnego KOWR (art. 2a ust. 4). Bez zgody kupisz też m.in. od osoby bliskiej (ust. 3) albo do wspólności z małżonkiem-rolnikiem (ust. 3a).',
      },
      {
        q: 'Czy KOWR może mi „zabrać” działkę przez pierwokup?',
        a: 'Może kupić działkę zamiast Ciebie, na warunkach Twojej umowy i za tę samą cenę (art. 600 § 1 k.c.). Jeżeli cena rażąco odbiega od wartości rynkowej, KOWR może wystąpić do sądu o jej ustalenie (art. 3 ust. 8 u.k.u.r.). Ma na to 14 dni od wykonania pierwokupu. Pierwokupu KOWR nie ma m.in. przy zakupie przez osobę bliską sprzedającego (art. 3 ust. 5 pkt 1 lit. c).',
      },
      {
        q: 'Czy mogę kupić ziemię od rodziców albo rodzeństwa bez ograniczeń?',
        a: 'Tak, co do statusu rolnika i pierwokupu (art. 2a ust. 3 pkt 1 lit. a, art. 3 ust. 5 u.k.u.r.). Ziemi zbywanej osobie bliskiej nie dotyczą 5 lat gospodarstwa i zakaz zbycia (art. 2b ust. 4 pkt 1 lit. a). Osobą bliską są m.in. dzieci, rodzice, rodzeństwo, dzieci rodzeństwa i małżonek (art. 2 pkt 6). Kuzyna ani szwagra na tej liście nie ma.',
      },
      {
        q: 'Co grozi, jeśli podpiszemy umowę bez zgody KOWR albo z pominięciem pierwokupu?',
        a: 'Nabycie jest nieważne, więc kupujący nie zostaje właścicielem (art. 9 ust. 1 u.k.u.r.). Pozew o stwierdzenie nieważności może wnieść także KOWR (art. 9 ust. 2). Jeżeli kupujący nie prowadzi gospodarstwa przez wymagane 5 lat, KOWR może pozwać o nabycie tej ziemi (art. 9 ust. 3). Zapłaci wtedy jej wartość rynkową, więc to nie konfiskata.',
      },
      {
        q: 'Działka ma warunki zabudowy. Czy dalej jest rolna?',
        a: 'Decyzja o warunkach zabudowy sama nie zmienia przeznaczenia terenu; przeznaczenie wyznacza miejscowy plan (art. 4 ust. 1 u.p.z.p.). Decyzja określa tylko sposób zagospodarowania i warunki zabudowy (art. 4 ust. 2). Czy działka z warunkami zabudowy podlega u.k.u.r., sprawdzam w Twojej sprawie przed aktem. Plan miejscowy uchwalony po zakupie, który przeznacza ją na cele nierolne, wyłącza art. 2b ust. 1–2 (ust. 4 pkt 9).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1a, art. 2, art. 2a, art. 6',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Zakres ustawy, progi 0,3 ha i 1 ha, osoba bliska, rolnik indywidualny.',
        },
        {
          ref: 'art. 2b, art. 3, art. 4, art. 9',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: '5 lat po zakupie, pierwokup, prawo nabycia KOWR, nieważność.',
        },
        { ref: 'art. 46¹, art. 158, art. 597–600', act: 'Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Nieruchomość rolna, akt notarialny, umowa warunkowa i pierwokup.' },
        {
          ref: 'art. 2 ust. 1 pkt 4',
          act: 'Ustawa z dnia 14 kwietnia 2016 r. o wstrzymaniu sprzedaży nieruchomości Zasobu Własności Rolnej Skarbu Państwa oraz o zmianie niektórych ustaw',
          tj: 'Dz.U. 2025 poz. 559',
          eli: 'DU/2016/585',
          note: 'Ziemia państwowa do 5 ha wyłączona ze wstrzymania sprzedaży; brzmienie od 30.04.2026 (Dz.U. 2026 poz. 317).',
        },
        { ref: 'art. 4', act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym', tj: 'Dz.U. 2026 poz. 538', eli: 'DU/2003/717', note: 'Przeznaczenie terenu w planie, warunki zabudowy w decyzji.' },
      ],
    },
    docs: [
      'Numer księgi wieczystej albo numery działek z nazwą obrębu',
      'Wypis z ewidencji gruntów i budynków z rodzajami użytków, jeśli masz',
      'Wypis z planu miejscowego dla tej działki albo wydana dla niej decyzja WZ, jeśli są',
      'Kim jest kupujący: czy jest rolnikiem i czy jest spokrewniony ze sprzedającym',
      'Umowa dzierżawy z datą zawarcia, jeśli ktoś dzierżawi tę ziemię',
      'Projekt umowy od notariusza, jeśli już go masz',
    ],
    guides: [],
    seeAlso: ['analiza-umowy-przedwstepnej', 'dzial-spadku'],
    cta: {
      heading: 'Ziemia rolna to osobne przepisy — sprawdźmy je, zanim podpiszesz.',
      lead: 'Napisz, jaką działkę rolną kupujesz albo sprzedajesz i czy po drugiej stronie jest rodzina, rolnik albo dzierżawca. W 24 h roboczych odpiszę, co trzeba zrobić przed aktem, np. zawrzeć umowę warunkową, i prześlę ofertę z ceną i terminem.',
    },
    updated: '2026-10-10',
  },

  'dzierzawa-oze': {
    metaDesc: 'Dzierżawa ziemi pod fotowoltaikę wiąże grunt zwykle na 25–30 lat. Negocjuję umowę po stronie właściciela: czynsz, waloryzację, przeniesienie, demontaż.',
    h1: 'Dzierżawa pod fotowoltaikę i wiatraki',
    h1Full: 'Dzierżawa pod fotowoltaikę i wiatraki: umowa po stronie właściciela gruntu',
    topic: 'Dzierżawa pod OZE',
    subtitle: 'Firma OZE chce wydzierżawić Twoją ziemię pod farmę fotowoltaiczną albo wiatraki i przysłała gotową umowę? Dzierżawa ziemi pod fotowoltaikę to zwykle umowa na 25–30 lat. Sprawdzam i negocjuję taką umowę po stronie właściciela gruntu.',
    short: {
      q: 'Na co uważać w umowie dzierżawy ziemi pod fotowoltaikę?',
      a: 'Przede wszystkim na czas trwania, czynsz przed budową, waloryzację, przeniesienie umowy, podatek od gruntu i zwrot gruntu. Kodeks reguluje je ogólnie, a zwrot gruntu wprost zostawia umowie (art. 705 k.c.: „w braku odmiennej umowy”).',
      facts: [
        [
          'Umowa na ponad 30 lat',
          'Po 30 latach poczytuje się ją za zawartą na czas nieoznaczony (art. 695 § 1 k.c.)',
        ],
        [
          'Waloryzacja czynszu',
          'Zapisujesz ją w umowie; bez niej co do zasady płaci się kwotę nominalną (art. 358¹ § 1 i 2 k.c.)',
        ],
        [
          'Przeniesienie umowy',
          'Przejęcie obowiązku płacenia czynszu przez inną spółkę i poddzierżawa wymagają Twojej zgody (art. 519 § 2, art. 698 § 1 k.c.)',
        ],
        [
          'Podatek od gruntu pod farmą',
          'Podatnikiem jest właściciel, chyba że grunt ma posiadacz samoistny (art. 3 ust. 1 pkt 1 i ust. 3 u.p.o.l.); inwestor oddaje Ci ten podatek, jeżeli umowa tak stanowi (art. 702 k.c.)',
        ],
        [
          'Szkoda na gruncie po zwrocie',
          'Rok od dnia zwrotu gruntu na roszczenie o naprawienie szkody z powodu jego pogorszenia (art. 677 w zw. z art. 694 k.c.)',
        ],
      ],
    },
    introHeading: 'Co podpisujesz, gdy oddajesz ziemię pod farmę',
    intro: 'Umowa dzierżawy pod panele albo turbiny wiatrowe zobowiązuje Cię oddać grunt inwestorowi do używania i pobierania pożytków, a jego do płacenia umówionego czynszu (art. 693 § 1 k.c.). Na użytkach rolnych klas I–III nowa farma co do zasady może powstać tylko na podstawie planu miejscowego (art. 14 ust. 6a pkt 2 u.p.z.p.). Inwestor zwykle podpisuje umowę, zanim ma decyzje potrzebne do budowy, więc grunt bywa związany umową przez cały okres przygotowawczy.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Firma OZE chce dzierżawić Twoją ziemię',
    when: [
      {
        b: 'Inwestor przysłał umowę do podpisu i naciska na szybki termin.',
        t: 'Poprawki najprościej wprowadzić przed podpisem. Później każda zmiana wymaga zgody inwestora i co najmniej formy pisemnej (art. 77 § 1, art. 660 w zw. z art. 694 k.c.).',
      },
      { b: 'W umowie jest zgoda na przeniesienie umowy na spółkę celową albo na bank.', t: 'Zgoda wpisana z góry dotyczy dzierżawcy, którego dziś nie znasz.' },
      {
        b: 'Inwestor chce wpisać dzierżawę do księgi wieczystej.',
        t: 'Po wpisie dzierżawa działa także wobec osoby, która później kupi Twoją działkę, bo wiąże prawa nabyte przez czynność prawną po ujawnieniu (art. 16 ust. 2 pkt 1, art. 17 u.k.w.h.).',
      },
      { b: 'Martwisz się, kto po 29 latach usunie panele albo turbiny, fundamenty i kable.', t: 'O zakresie demontażu decyduje umowa, bo kodeksowy obowiązek zwrotu gruntu działa „w braku odmiennej umowy” (art. 705 k.c.).' },
    ],
    lists: [
      {
        eyebrow: 'Przed podpisem',
        title: 'Zapisy, które sprawdzam w każdej umowie pod farmę',
        kind: 'check',
        items: [
          { b: 'Okres przygotowawczy', t: 'ryzyko: grunt związany umową bez czynszu albo za symboliczną kwotę. Negocjuję czynsz za ten czas i datę graniczną budowy, po której możesz wypowiedzieć umowę.' },
          { b: 'Waloryzacja', t: 'ryzyko: kwota z pierwszego roku obowiązuje do końca. Negocjuję coroczną waloryzację według wskaźnika z umowy.' },
          { b: 'Przeniesienie umowy', t: 'ryzyko: zgoda na dowolny podmiot. Negocjuję zgodę tylko na wskazane podmioty i odpowiedzialność pierwszego dzierżawcy za czynsz.' },
          { b: 'Wyjście inwestora', t: 'ryzyko: odstąpienie w każdej chwili i bez kosztów. Negocjuję termin odstąpienia (art. 395 § 1 k.c.) albo odstępne (art. 396 k.c.).' },
          { b: 'Demontaż', t: 'ryzyko: brak zapisu o fundamentach, kablach i drogach. Negocjuję demontaż na koszt inwestora, termin i zabezpieczenie finansowe, np. gwarancję bankową.' },
        ],
      },
    ],
    doForTitle: 'Co robię przy umowie z inwestorem OZE',
    doFor: [
      'Sprawdzam w KRS spółkę, która ma zostać dzierżawcą, a w wypisie z rejestru gruntów klasy użytków.',
      'Sprawdzam datę zakupu ziemi: przez 5 lat od nabycia oddanie jej w posiadanie co do zasady wymaga zgody Dyrektora Generalnego KOWR (art. 2b ust. 2–3 u.k.u.r.).',
      'Przygotowuję protokół wydania gruntu ze stanem pola, dróg i rowów, do porównania przy zwrocie.',
      'Dopisuję podstawy wypowiedzenia szersze niż zwłoka z czynszem (art. 703 k.c.), np. brak zabezpieczenia demontażu w terminie.',
    ],
    stepsHeading: 'Od propozycji inwestora do podpisanej umowy dzierżawy',
    steps: [
      'Przesyłasz projekt umowy od firmy OZE. W 24 h roboczych odpisuję, czy umowę wystarczy sprawdzić, czy trzeba ją negocjować, i wysyłam ofertę z ceną oraz terminem. Oceny poszczególnych zapisów ta odpowiedź jeszcze nie zawiera.',
      'Po akceptacji dostajesz tabelę: zapis inwestora, ryzyko, proponowane brzmienie. Wybierasz, które zmiany zgłaszamy.',
      'Wysyłam inwestorowi tabelę zmian i prowadzę rundy uzgodnień. Nie obiecuję, że przyjmie każdą zmianę; mówię, które zapisy uważam za warunek podpisu.',
      'Podpisujesz na piśmie ostatnią uzgodnioną wersję (art. 660 w zw. z art. 694 k.c.). Od tej chwili zapisy zmienisz tylko aneksem, na który musi zgodzić się inwestor.',
    ],
    faq: [
      {
        q: 'Ile płacą za hektar pod farmę fotowoltaiczną?',
        a: 'Nie ma stawki ustawowej: czynsz ustalasz z inwestorem w umowie (art. 693 § 1–2 k.c.). Porównując oferty, sprawdź czynsz za hektar rocznie, kwotę przed budową i waloryzację. Te trzy liczby zestawiam w tabeli zmian.',
      },
      {
        q: 'Kto zapłaci podatek od nieruchomości za grunt pod farmą?',
        a: 'Co do zasady Ty jako właściciel gruntu, a nie inwestor (art. 3 ust. 1 pkt 1 u.p.o.l.). Jeżeli inwestor ma Ci ten podatek oddawać, zapisz to w umowie (art. 702 k.c.). Użytki rolne zajęte na prowadzenie działalności gospodarczej podlegają podatkowi od nieruchomości (art. 2 ust. 2 u.p.o.l.). Wysokość podatku i VAT od czynszu oceni doradca podatkowy.',
      },
      {
        q: 'Co jeśli inwestor nie dostanie pozwoleń – czy płaci cokolwiek?',
        a: 'Tyle, ile zapisano w umowie na okres przed budową. Umowne prawo odstąpienia można zastrzec tylko na oznaczony termin (art. 395 § 1 k.c.). Przy odstępnym odstąpienie działa dopiero razem z zapłatą (art. 396 k.c.). Dlatego negocjuję czynsz za czas oczekiwania i datę graniczną budowy.',
      },
      {
        q: 'Czy do czasu budowy mogę dalej uprawiać ziemię?',
        a: 'Tak, jeżeli umowa wiąże wydanie gruntu z rozpoczęciem budowy, a nie z dniem podpisu. Gdy termin wydania nie wynika z umowy, inwestor może co do zasady żądać gruntu niezwłocznie po wezwaniu (art. 455 k.c.). Dlatego wpisuję, że uprawiasz pole do dnia wydania potwierdzonego protokołem.',
      },
      {
        q: 'Kto usunie panele albo turbiny po 29 latach?',
        a: 'Ten, kogo wskaże umowa. Kodeksowy obowiązek zwrotu gruntu działa tylko „w braku odmiennej umowy” (art. 705 k.c.). Stan gruntu spisz w protokole przy odbiorze. Masz rok od zwrotu, żeby dochodzić naprawienia szkody za pogorszenie gruntu; potem roszczenie się przedawnia (art. 677 w zw. z art. 694 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 693–705', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Dzierżawa: czynsz, 30 lat, poddzierżawa, podatki, zwrot gruntu.' },
        {
          ref: 'art. 77, 358¹, 395, 396, 455, 519, 660, 677',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Forma, waloryzacja, odstąpienie, wydanie gruntu, przejęcie długu.',
        },
        { ref: 'art. 2 ust. 2, art. 3 ust. 1', act: 'Ustawa z dnia 12 stycznia 1991 r. o podatkach i opłatach lokalnych', tj: 'Dz.U. 2025 poz. 707', eli: 'DU/1991/31', note: 'Kto płaci podatek od nieruchomości.' },
        { ref: 'art. 14 ust. 6a', act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym', tj: 'Dz.U. 2026 poz. 538', eli: 'DU/2003/717', note: 'Kiedy farma wymaga planu miejscowego.' },
        { ref: 'art. 16 ust. 2 pkt 1, art. 17', act: 'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Wpis dzierżawy do księgi wieczystej.' },
        { ref: 'art. 2b ust. 2–4', act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego', tj: 'Dz.U. 2026 poz. 941', eli: 'DU/2003/592', note: 'Zgoda KOWR przed upływem 5 lat od zakupu.' },
      ],
    },
    docs: [
      'Projekt umowy dzierżawy albo umowy przedwstępnej od firmy OZE',
      'Oferta albo list intencyjny inwestora, jeśli są',
      'Wypis z rejestru gruntów z klasami użytków, jeśli masz',
      'Numer księgi wieczystej działki, jeśli masz',
      'Akt notarialny zakupu ziemi, jeśli kupiłeś ją w ostatnich 5 latach',
      'Mapa z zaznaczonym terenem farmy, jeśli inwestor ją przysłał',
    ],
    guides: ['farma-fotowoltaiczna-na-dzialce-rolnej', 'dzierzawa-pod-fotowoltaike-a-vat'],
    seeAlso: ['negocjacje-nieruchomosci', 'plan-ogolny', 'obsluga-prawna-deweloperow-oze'],
    cta: {
      heading: 'Twój grunt na 30 lat — podpisz dopiero, gdy umowa naprawdę Cię chroni.',
      lead: 'Prześlij projekt umowy od firmy OZE. W 24 h roboczych dostaniesz informację, jakiego zakresu pracy wymaga Twoja umowa, i ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'negocjacje-nieruchomosci': {
    h1: 'Negocjacje na rynku nieruchomości',
    h1Full: 'Negocjacje na rynku nieruchomości: cena i warunki umowy z deweloperem lub sprzedającym',
    topic: 'Negocjacje',
    metaDesc: 'Cena przy umowie wyższa niż na stronie dewelopera? Możesz żądać umowy po cenie najkorzystniejszej (art. 19a ust. 6 u.d.). Negocjuję za Ciebie.',
    subtitle: 'Chcesz zapłacić mniej za mieszkanie albo działkę, a druga strona ma pośrednika i gotową umowę? Jeżeli deweloper przy umowie podaje cenę wyższą niż na swojej stronie, możesz żądać umowy po cenie dla Ciebie najkorzystniejszej (art. 19a ust. 6 ustawy deweloperskiej). Prowadzę rozmowy w Twoim imieniu i pilnuję, żeby każde ustalenie trafiło do umowy.',
    short: {
      q: 'Jak negocjować z deweloperem cenę i warunki umowy?',
      a: 'Na cenach, które deweloper musi podać na swojej stronie (art. 19a ust. 1 u.d.), i cenach podobnych lokali z rejestru cen nieruchomości. Poza ceną ustalacie m.in. termin przeniesienia własności, termin odbioru i kary umowne (art. 35 ust. 1 u.d.).',
      facts: [
        [
          'Cena na stronie dewelopera',
          'cena za 1 m² każdego oferowanego lokalu; nowa cena z datą zmiany, wcześniejsze zostają (art. 19a ust. 1–2 u.d.)',
        ],
        [
          'Cena w umowie inna niż na stronie',
          'możesz żądać umowy po cenie dla Ciebie najkorzystniejszej (art. 19a ust. 6 u.d.)',
        ],
        [
          'Ceny transakcji w okolicy',
          'rejestr cen nieruchomości prowadzi i udostępnia starosta; od 13.02.2026 bez opłaty (art. 7d pkt 1 lit. b, art. 40a ust. 2 pkt 1 lit. k p.g.k.)',
        ],
        [
          'Działka: obciążenia w księdze wieczystej',
          'sprawdzasz dział III (np. służebność) i dział IV (hipoteka) księgi (art. 25 ust. 1 pkt 3–4 u.k.w.h.)',
        ],
      ],
    },
    introHeading: 'Jak zbić cenę mieszkania i nie podpisać przy tym złej umowy',
    intro: 'W transakcji negocjuje się nie tylko cenę, ale też termin, zadatek, warunki odstąpienia, stan wydania i podział kosztów. Najmocniejszy argument to liczba, którą druga strona może sprawdzić, np. cena z rejestru cen nieruchomości: trafiają do niego dane z aktów notarialnych (art. 23 ust. 2 pkt 1 i ust. 7 p.g.k.). Kupując od dewelopera jako konsument, pamiętaj: zapis, który zmienisz w negocjacjach, jest uzgodniony indywidualnie (miałeś wpływ na jego treść), więc potem nie podważysz go jako niedozwolonego (art. 385¹ § 1 i 3 k.c.). Przy zakupie od osoby prywatnej tej ochrony w ogóle nie ma (art. 22¹ k.c.). W jednej transakcji reprezentuję tylko jedną stronę.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Chcesz zbić cenę albo zmienić umowę, zanim cokolwiek podpiszesz',
    when: [
      {
        b: 'Deweloper chce umowy rezerwacyjnej i opłaty, zanim porozmawiacie o cenie.',
        t: 'Już umowa rezerwacyjna podaje cenę lokalu (art. 30 ust. 2 pkt 2 u.d.), więc o cenie rozmawiamy przed rezerwacją i przed przelewem opłaty.',
      },
      { b: 'W projekcie umowy cena jest wyższa niż ta, którą widziałeś na stronie dewelopera.', t: 'Wcześniejsze ceny zostają na stronie z datą zmiany (art. 19a ust. 2 u.d.), więc zapisuję je przed rozmową.' },
      {
        b: 'Mieszkanie z drugiej ręki sprzedaje biuro nieruchomości, a Ty rozmawiasz tylko z agentem.',
        t: 'Agent działa w granicach umowy pośrednictwa, zawartej na piśmie albo elektronicznie (art. 180 ust. 3 u.g.n.). Rozmowę o cenie prowadzę za Ciebie.',
      },
      { b: 'Rozmowy utknęły, a każda strona pamięta ustalenia inaczej.', t: 'Spisuję sporne punkty z propozycją i terminem odpowiedzi, bo umowa powstaje dopiero po uzgodnieniu wszystkich (art. 72 § 1 k.c.).' },
    ],
    doForTitle: 'Co robię, zanim usiądziesz do stołu z deweloperem albo sprzedającym',
    doFor: [
      'Ustalam z Tobą cel i granice: cenę, terminy i warunki, z których możesz ustąpić.',
      'Zbieram ceny z rejestru cen nieruchomości i ze strony dewelopera, prospekt informacyjny i księgę wieczystą.',
      'Wysyłam drugiej stronie albo pośrednikowi propozycję na piśmie, z uzasadnieniem i terminem odpowiedzi.',
      'Piszę zmiany do umowy rezerwacyjnej, przedwstępnej albo deweloperskiej w brzmieniu gotowym do wpisania.',
      'Przed podpisem sprawdzam, czy projekt aktu notarialnego zawiera wszystko, co uzgodniliśmy.',
    ],
    stepsHeading: 'Od ogłoszenia do podpisu u notariusza: 4 etapy',
    steps: [
      'Opis transakcji. Przesyłasz ogłoszenie albo ofertę i cel. W 24 h roboczych odpisuję, co trzeba zrobić (np. same negocjacje ceny albo także sprawdzenie umowy), i wysyłam ofertę z ceną i terminem. Do jej akceptacji nic nie płacisz.',
      'Przygotowanie. Zbieram ceny i dokumenty, a Ty decydujesz, do jakiej ceny możesz dojść.',
      'Rozmowy. Prowadzę je do uzgodnienia wszystkich punktów albo do Twojej decyzji o rezygnacji.',
      'Umowa. Uzgodnienia wpisuję do projektu i sprawdzam akt przed terminem u notariusza. Krok nieodwracalny: podpis.',
    ],
    faq: [
      {
        q: 'Ile procent można zbić z ceny mieszkania?',
        a: 'Ustawa nie podaje takiej liczby: granicę wyznaczają ceny podobnych lokali i wady, które wykażesz. Porównaj cenę za 1 m² z kilkoma transakcjami z tej samej okolicy w rejestrze cen nieruchomości.',
      },
      {
        q: 'Co poza ceną da się wynegocjować z deweloperem?',
        a: 'Standard wykończenia, termin przeniesienia własności, termin odbioru i kary umowne (art. 35 ust. 1 pkt 6, 7, 14 i 17 u.d.). Sposobu pomiaru powierzchni nie negocjujesz, bo wyznacza go Polska Norma (art. 5a u.d.). Umowa nie może dać Ci mniej niż ustawa (art. 42 u.d.), więc rozmawiasz o tym, co ponad minimum.',
      },
      {
        q: 'Jak negocjować cenę działki?',
        a: 'Cenami podobnych działek z rejestru cen i obciążeniami z księgi wieczystej; księgi wieczyste są jawne (art. 2 u.k.w.h.). Każda służebność albo hipoteka to argument do ceny albo warunek umowy, np. wykreślenie hipoteki przed aktem.',
      },
      {
        q: 'Jak negocjować z pośrednikiem?',
        a: 'Najpierw ustal, z kim zawarł umowę pośrednictwa, bo ona wyznacza zakres jego czynności (art. 180 ust. 3 u.g.n.). Jeżeli zawarł ją ze sprzedającym, Ty nie jesteś jej stroną. Propozycję ceny składaj na piśmie, z terminem odpowiedzi.',
      },
      {
        q: 'Co, jeśli negocjacje się nie powiodą?',
        a: 'Nie zawierasz umowy. Jeżeli druga strona negocjowała wbrew dobrym obyczajom, np. bez zamiaru zawarcia umowy, naprawia szkodę, którą poniosłeś, licząc na umowę (art. 72 § 2 k.c.). Skutki wpłaconego już zadatku opisuję na stronie o umowie przedwstępnej.',
      },
      {
        q: 'Po co mi prawnik do negocjacji z deweloperem?',
        a: 'Żeby ustalenia z rozmów trafiły do umowy w brzmieniu, które da się wyegzekwować. Rozmawiam jako Twój pełnomocnik, więc nie musisz sam grać twardo. Przed podpisem sprawdzam, czy akt zawiera każdą zmianę. Nie mogę obiecać obniżki ceny.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 22¹, art. 72, art. 158, art. 385¹',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Konsument, zawarcie umowy w negocjacjach i szkoda z negocjacji wbrew dobrym obyczajom, forma aktu notarialnego, zapisy niedozwolone.',
        },
        {
          ref: 'art. 5a, art. 19a, art. 30, art. 35, art. 40, art. 42',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Cena i powierzchnia w umowie, ceny na stronie dewelopera, umowa rezerwacyjna, treść i forma umowy deweloperskiej, nieważność zapisów gorszych niż ustawa.',
        },
        {
          ref: 'art. 4 ust. 1a pkt 7, art. 7d pkt 1 lit. b, art. 23 ust. 2 i 7, art. 40a ust. 2 pkt 1 lit. k',
          act: 'Prawo geodezyjne i kartograficzne',
          tj: 'Dz.U. 2024 poz. 1151',
          eli: 'DU/1989/163',
          note: 'Rejestr cen nieruchomości; udostępnianie danych bez opłaty od 13.02.2026 (zmiana Dz.U. 2025 poz. 1542).',
        },
        { ref: 'art. 179b, art. 180 ust. 3', act: 'Ustawa o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Pośrednictwo w obrocie nieruchomościami i umowa pośrednictwa.' },
        {
          ref: 'art. 2, art. 25 ust. 1',
          act: 'Ustawa o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'Jawność ksiąg wieczystych; działy księgi, w tym służebności (dział III) i hipoteki (dział IV).',
        },
      ],
    },
    docs: [
      'Ogłoszenie albo oferta, a przy deweloperze link do jego strony z cenami.',
      'Prospekt informacyjny z załącznikami, jeśli deweloper już go doręczył.',
      'Projekt umowy rezerwacyjnej, przedwstępnej albo deweloperskiej, jeśli go masz.',
      'Numer księgi wieczystej, jeśli podano go w ogłoszeniu albo w ofercie.',
      'Dotychczasowa korespondencja z drugą stroną albo pośrednikiem i propozycje ceny.',
    ],
    guides: ['jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: ['analiza-umowy-przedwstepnej', 'dzierzawa-oze', 'obsluga-prawna-najemcow-komercyjnych'],
    cta: {
      heading: 'Nie negocjuj sam pod presją emocji. Zrobię to za Ciebie.',
      lead: 'Opisz transakcję i cel. W 24 h roboczych odpiszę, co trzeba zrobić przed rozmową z drugą stroną, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'zgloszenie-budowy': {
    h1: 'Zgłoszenie budowy i robót',
    h1Full: 'Zgłoszenie budowy i robót: dom do 70 m² i sprzeciw urzędu',
    topic: 'Zgłoszenie budowy',
    metaDesc: 'Wolno stojący dom do 70 m² na własne potrzeby budujesz po doręczeniu zgłoszenia. Sprawdzam, czy wystarczy zgłoszenie, i odwołuję się od sprzeciwu.',
    subtitle: 'Chcesz postawić dom albo garaż bez pozwolenia na budowę i boisz się sprzeciwu urzędu? Wolno stojący dom do 70 m² na własne potrzeby mieszkaniowe zbudujesz na zgłoszenie i zaczniesz po jego doręczeniu urzędowi (art. 29 ust. 1 pkt 1a, art. 30 ust. 5k Pb). Sprawdzam, czy Twoja budowa mieści się w zgłoszeniu, i odwołuję się od sprzeciwu.',
    short: {
      q: 'Czy dom do 70 m² można zbudować na zgłoszenie?',
      a: 'Tak, jeżeli dom stoi wolno, ma najwyżej 2 kondygnacje i do 70 m² powierzchni zabudowy (art. 29 ust. 1 pkt 1a Pb). Budujesz go na własne potrzeby mieszkaniowe, a jego obszar oddziaływania mieści się w całości na działce, na której go zaprojektowano. Urząd nie wnosi tu sprzeciwu, więc budowę zaczynasz po doręczeniu zgłoszenia (art. 30 ust. 5j–5k Pb).',
      facts: [
        [
          'Dom do 70 m²',
          'Budowę zaczynasz po doręczeniu zgłoszenia, bez terminu na sprzeciw (art. 30 ust. 5j–5k Pb)',
        ],
        [
          'Ważność zgłoszenia',
          'Roboty zaczynasz w ciągu 3 lat od terminu rozpoczęcia podanego w zgłoszeniu; później tylko po ponownym zgłoszeniu (art. 30 ust. 5b Pb)',
        ],
        [
          'Sprzeciw urzędu',
          'Decyzja starosty w 21 dni od doręczenia zgłoszenia, nie przy domu do 70 m²; odwołanie do wojewody w 14 dni (art. 30 ust. 5 i 5j, art. 82 ust. 2–3 Pb, art. 129 § 2 k.p.a.)',
        ],
        [
          'Opłata skarbowa (nie honorarium)',
          'Dom z art. 29 ust. 1 pkt 1 Pb, bez sprzeciwu: 1 zł za każdy m² niemieszkalnej powierzchni użytkowej, nie więcej niż 539 zł; powierzchnia mieszkalna bez opłaty (załącznik do u.o.s., część I ust. 9a; art. 2 ust. 1 pkt 2 u.o.s.). Stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Kiedy urząd może zablokować budowę w 21 dni',
    intro: 'Zgłoszenie to pismo do starosty z opisem rodzaju, zakresu, miejsca i sposobu robót oraz terminu ich rozpoczęcia (art. 30 ust. 1b–2, art. 82 ust. 2 Pb). Jeżeli w 21 dni od doręczenia zgłoszenia urząd nie wniesie sprzeciwu w drodze decyzji, możesz zacząć roboty (art. 30 ust. 5 Pb), potocznie: milcząca zgoda. Sprzeciw musi wnieść m.in. wtedy, gdy obiekt wymaga pozwolenia albo narusza plan miejscowy lub decyzję o warunkach zabudowy (art. 30 ust. 6 Pb). Przy domu granicę wyznacza obszar oddziaływania obiektu, czyli teren wokół budynku, na którym przepisy odrębne ograniczają przez niego zabudowę (art. 3 pkt 20 Pb). Jeżeli wychodzi poza działkę, na której dom zaprojektowano, potrzebujesz pozwolenia na budowę (art. 28 ust. 1, art. 29 ust. 1 pkt 1 Pb).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Planujesz mały dom, starosta przysłał pismo albo budowa wciąż nie ruszyła',
    when: [
      { b: 'Urząd wniósł sprzeciw wobec Twojego zgłoszenia', t: 'to decyzja, od której odwołujesz się w 14 dni od jej doręczenia (art. 129 § 2 k.p.a.).' },
      { b: 'Starosta wezwał Cię do uzupełnienia zgłoszenia', t: 'jeżeli nie uzupełnisz braków w wyznaczonym terminie, urząd wnosi sprzeciw (art. 30 ust. 5c Pb).' },
      {
        b: 'Chcesz postawić mały dom do 70 m² dla siebie',
        t: 'budowę zaczynasz po doręczeniu zgłoszenia, ale oświadczenie o własnych potrzebach mieszkaniowych składasz pod rygorem odpowiedzialności karnej (art. 30 ust. 5k i ust. 2a pkt 6 Pb).',
      },
      { b: 'Zgłoszenie leży w szufladzie, a budowa nie ruszyła', t: 'po 3 latach od terminu rozpoczęcia wpisanego w zgłoszeniu roboty zaczniesz dopiero po ponownym zgłoszeniu (art. 30 ust. 5b Pb).' },
    ],
    doForTitle: 'Co robię przed złożeniem dokumentów i po decyzji starosty',
    doFor: [
      'Sprawdzam, czy Twój obiekt mieści się w katalogu art. 29 Pb, czy wymaga pozwolenia. Rozbudowa i nadbudowa to w ustawie także budowa (art. 3 pkt 6 Pb).',
      'Z Twoim projektantem sprawdzam, czy obszar oddziaływania domu mieści się w całości na działce, na której go zaprojektowano. Porównuję projekt z ustaleniami planu miejscowego albo decyzji o warunkach zabudowy, bo ich naruszenie to podstawa sprzeciwu (art. 30 ust. 6 pkt 2 Pb).',
      'Kompletuję załączniki z art. 30 ust. 2a i 4b Pb, w tym oświadczenie o prawie do dysponowania nieruchomością na cele budowlane i decyzję o warunkach zabudowy, jeżeli jest wymagana. Przy domu do 70 m² starosta nie wzywa do uzupełnień (art. 30 ust. 5j Pb), więc dokumenty muszą być kompletne od razu; w innych sprawach uzupełniam je po postanowieniu (art. 30 ust. 5c Pb).',
      'Po sprzeciwie piszę odwołanie, a jeżeli wojewoda utrzyma sprzeciw w mocy, skargę do wojewódzkiego sądu administracyjnego, na którą masz 30 dni od doręczenia jego decyzji (art. 138 § 1 pkt 1 k.p.a., art. 53 § 1 p.p.s.a.). Albo przygotowuję nowe zgłoszenie bez wady wskazanej w decyzji.',
    ],
    lists: [
      {
        eyebrow: 'Zgłoszenie czy pozwolenie',
        title: 'Co przy domu wymaga zgłoszenia, a co pozwolenia na budowę',
        kind: 'check',
        intro: 'Pozwolenie na budowę jest zasadą, a zgłoszenie wystarczy tylko dla obiektów i robót z art. 29 ust. 1 i 3 Pb (art. 28 ust. 1 Pb).',
        items: [
          { b: 'Wolno stojący dom jednorodzinny', t: 'zgłoszenie z projektem, jeżeli obszar oddziaływania mieści się w całości na działce, na której dom zaprojektowano (art. 29 ust. 1 pkt 1, art. 30 ust. 4b Pb).' },
          {
            b: 'Dom do 70 m² powierzchni zabudowy na własne potrzeby',
            t: 'zgłoszenie, jeżeli stoi wolno, ma najwyżej 2 kondygnacje, a jego obszar oddziaływania mieści się w całości na działce, na której go zaprojektowano (art. 29 ust. 1 pkt 1a Pb).',
          },
          {
            b: 'Dom w zabudowie bliźniaczej albo z obszarem oddziaływania na działce sąsiada',
            t: 'pozwolenie na budowę; zgłoszenie obejmuje tylko domy wolno stojące z obszarem oddziaływania w całości na działce, na której je zaprojektowano (art. 28 ust. 1, art. 29 ust. 1 pkt 1 Pb).',
          },
          { b: 'Garaż, wiata albo parterowy budynek gospodarczy, wolno stojący, do 35 m² powierzchni zabudowy', t: 'zgłoszenie; łącznie najwyżej 2 takie obiekty na każde 500 m² działki (art. 29 ust. 1 pkt 14 Pb).' },
        ],
      },
    ],
    stepsHeading: 'Od opisu działki do pierwszych robót: 4 kroki',
    steps: [
      'Wysyłasz przez formularz opis obiektu i działki, a jeśli masz, projekt albo pismo urzędu.',
      'Bezpłatnie, w 24 h roboczych, odpisuję, jaki jest następny krok, np. sprawdzenie projektu pod kątem art. 29 Pb, odpowiedź na wezwanie starosty albo odwołanie od sprzeciwu. Ofertę z ceną i terminem wysyłam razem z tą odpowiedzią; przed jej przyjęciem nic nie płacisz.',
      'Składasz zgłoszenie u starosty papierowo albo przez portal e-Budownictwo, przed zamierzonym terminem rozpoczęcia robót (art. 30 ust. 1b, 4d i 5 Pb); dokumenty i oświadczenia przygotowuję wcześniej.',
      'Krok nieodwracalny: start robót. Dom do 70 m² zaczynasz po doręczeniu zgłoszenia, inne obiekty po 21 dniach bez sprzeciwu (art. 30 ust. 5 i 5k Pb); wcześniejszy start to podstawa sprzeciwu (art. 30 ust. 6 pkt 4 Pb). Przy domu najpierw zawiadamiasz nadzór budowlany i projektanta o zamierzonym terminie startu (art. 41 ust. 4 Pb).',
    ],
    faqHeading: 'Kierownik budowy, 21 dni, sprzeciw i opłata: najczęstsze pytania',
    faq: [
      {
        q: 'Dom do 70 m² na zgłoszenie: czy potrzebny jest kierownik budowy?',
        a: 'Nie, przy domu do 70 m² ustawa nie wymaga kierownika budowy (art. 42 ust. 1 pkt 2 lit. b Pb). Wymaga go przy zwykłym domu na zgłoszenie z art. 29 ust. 1 pkt 1. Jeżeli kierownika nie ustanowisz, w zgłoszeniu oświadczasz, że sam przyjmujesz odpowiedzialność za kierowanie budową (art. 30 ust. 2a pkt 7 lit. a Pb).',
      },
      {
        q: 'Ile się czeka po zgłoszeniu budowy, zanim można zacząć?',
        a: '21 dni od doręczenia zgłoszenia urzędowi, jeżeli w tym czasie nie wniesie sprzeciwu (art. 30 ust. 5 Pb). Przy domu do 70 m² nie czekasz (art. 30 ust. 5k Pb). Wcześniej zaczniesz też, gdy urząd wyda zaświadczenie o braku podstaw do sprzeciwu (art. 30 ust. 5aa Pb). Postanowienie o uzupełnieniu dokumentów przerywa bieg 21 dni (art. 30 ust. 5d Pb). Za dzień wniesienia sprzeciwu uznaje się dzień nadania decyzji, więc może ona dotrzeć do Ciebie po 21 dniach (art. 30 ust. 6a Pb).',
      },
      {
        q: 'Urząd wniósł sprzeciw od zgłoszenia. Co dalej?',
        a: 'Masz dwie drogi: odwołanie albo nowe zgłoszenie bez wady wskazanej w sprzeciwie. Odwołanie do wojewody wysyłasz przez starostę w 14 dni od doręczenia decyzji (art. 129 § 1–2 k.p.a., art. 82 ust. 3 Pb). Wskazujesz w nim zarzuty wobec sprzeciwu, czego żądasz i jakie masz dowody (art. 10b ust. 1 Pb). Jeżeli urząd nałożył obowiązek uzyskania pozwolenia (art. 30 ust. 7 Pb), potrzebujesz pozwolenia albo uchylenia tej decyzji. Nie zaczynaj budowy: prowadzoną mimo sprzeciwu nadzór budowlany wstrzymuje (art. 48 ust. 1 pkt 2 Pb).',
      },
      {
        q: 'Czy zgłoszenie robót budowlanych ma termin ważności?',
        a: 'Tak, 3 lata od terminu rozpoczęcia wpisanego w zgłoszeniu. Jeżeli do tego czasu nie zaczniesz robót, potrzebne jest ponowne zgłoszenie (art. 30 ust. 5b Pb). Za początek budowy ustawa uznaje już prace przygotowawcze, np. niwelację terenu albo przyłącza do sieci na potrzeby budowy (art. 41 ust. 1–2 Pb).',
      },
      {
        q: 'Ile kosztuje zgłoszenie budowy?',
        a: 'Opłatę skarbową płacisz tylko za niemieszkalną powierzchnię użytkową domu: 1 zł za m², nie więcej niż 539 zł (załącznik do u.o.s., część I ust. 9a). Dotyczy to domu z art. 29 ust. 1 pkt 1 Pb, od którego urząd nie wniósł sprzeciwu. Koszt projektu ustalasz z projektantem, a cenę sprawdzenia projektu albo odwołania podaję w ofercie.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 3 pkt 6 i 20, art. 10b, 28–30, 33, 41–42, 48 i 82 Pb',
          act: 'Prawo budowlane',
          tj: 'Dz.U. 2026 poz. 524',
          eli: 'DU/1994/414',
          note: 'katalog obiektów na zgłoszenie, dom do 70 m², termin na sprzeciw, załączniki, ważność zgłoszenia, kierownik budowy, odwołanie, organ',
        },
        { ref: 'art. 129 i 138 k.p.a.', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'odwołanie od decyzji o sprzeciwie i rozstrzygnięcie wojewody' },
        { ref: 'art. 53 § 1 p.p.s.a.', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'termin skargi do WSA' },
        { ref: 'art. 2 ust. 1 pkt 2, załącznik, część I ust. 9a u.o.s.', act: 'Ustawa o opłacie skarbowej', tj: 'Dz.U. 2025 poz. 1154', eli: 'DU/2006/1635', note: 'opłata skarbowa za przyjęcie zgłoszenia domu' },
      ],
    },
    docs: [
      'Projekt zagospodarowania działki i projekt architektoniczno-budowlany (jeśli masz)',
      'Decyzja o warunkach zabudowy dla działki albo wypis i wyrys z planu miejscowego',
      'Akt notarialny albo numer księgi wieczystej działki',
      'Złożone zgłoszenie z datą doręczenia urzędowi (jeśli już je złożyłeś)',
      'Postanowienie o uzupełnieniu albo decyzja o sprzeciwie z datą doręczenia (jeśli je dostałeś)',
    ],
    guides: ['warunki-zabudowy-ile-wazne'],
    seeAlso: ['warunki-zabudowy', 'odrolnienie'],
    cta: {
      heading: 'Zgłoszenie zamiast pozwolenia — szybciej, o ile zrobione bez błędu.',
      lead: 'Opisz obiekt i działkę albo dołącz sprzeciw: w 24 h roboczych napiszę bezpłatnie, czy pierwszym krokiem jest projekt, uzupełnienie czy odwołanie. W tej wiadomości podam też cenę i termin; płacisz tylko wtedy, gdy przyjmiesz ofertę.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-deweloperow': {
    h1: 'Obsługa prawna deweloperów',
    h1Full: 'Obsługa prawna deweloperów: grunt, prospekt, umowy, DFG i posprzedaż',
    topic: 'Obsługa deweloperów',
    metaDesc: 'Zanim ogłosisz sprzedaż lokali, musisz mieć rachunek powierniczy, prospekt i ceny za m² na stronie. Obsługa prawna dewelopera obejmuje je, umowy i odbiory.',
    subtitle: 'Kupujesz grunt pod budynek z mieszkaniami albo szykujesz start sprzedaży i chcesz mieć dokumenty zgodne z ustawą. Obsługa prawna dewelopera to przede wszystkim rachunek powierniczy i prospekt informacyjny gotowe przed ogłoszeniem sprzedaży (art. 7 i 20 ustawy deweloperskiej – u.d.). Potem przygotowuję umowy z nabywcami i procedurę odbioru, na stałe albo przy jednym przedsięwzięciu.',
    short: {
      q: 'Co musisz przygotować, zanim podpiszesz z klientem pierwszą umowę rezerwacyjną?',
      a: 'Zanim ogłosisz sprzedaż lokali, musisz mieć umowę rachunku powierniczego, prospekt informacyjny i stronę z ceną za 1 m² każdego lokalu (art. 7 ust. 1, art. 19a ust. 1, art. 20 ust. 1 u.d.). Prospekt z załącznikami doręczasz klientowi bezpłatnie na trwałym nośniku przed umową rezerwacyjną (art. 21 u.d.). Jeżeli grunt ma hipotekę, potrzebujesz też zgody wierzyciela hipotecznego (np. banku) na przeniesienie lokali bez obciążenia albo jego zobowiązania do jej udzielenia (art. 25 ust. 1 pkt 1 u.d.).',
      facts: [
        [
          'Od kiedy obowiązki',
          'od podania do publicznej wiadomości, że zaczynasz oferować lokale i jesteś gotów zawierać umowy deweloperskie (art. 5 pkt 12 u.d.)',
        ],
        [
          'Cena w umowach zawartych od 13.02.2026',
          'mnożysz powierzchnię użytkową lokalu przez cenę za 1 m² i tak zapisujesz cenę w umowie (art. 5a u.d.)',
        ],
        [
          'Składka na Deweloperski Fundusz Gwarancyjny (DFG)',
          'od każdej wpłaty nabywcy, najwyżej 1% przy rachunku otwartym i 0,1% przy zamkniętym (art. 49 ust. 2 i 7 u.d.)',
        ],
        [
          'Sprzedaż bez rachunku albo prospektu',
          'bez rachunku: grzywna, ograniczenie albo pozbawienie wolności do 2 lat (art. 57 u.d.); bez prospektu: grzywna (art. 58 u.d.)',
        ],
      ],
    },
    introHeading: 'Za co odpowiadasz jako deweloper, od zakupu gruntu do ostatniego aktu',
    intro: 'Ustawa deweloperska nie zaczyna się od budowy. Przedsięwzięcie deweloperskie obejmuje też nabycie praw do gruntu, projekt, pozwolenia i przygotowanie umów z nabywcami (art. 5 pkt 7 u.d.). Ustawa chroni osoby fizyczne, które kupują mieszkanie lub dom poza swoją działalnością gospodarczą (art. 5 pkt 5 u.d.). Postanowienie mniej korzystne dla nabywcy niż ustawa jest nieważne i zastępuje je przepis (art. 42 u.d.). Dlatego najpierw ustawiam to, czego wymaga ustawa, a potem to, co możesz uzgodnić z nabywcą: terminy, kary i zasady odbioru.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kupujesz grunt, zmieniasz ofertę albo nabywca przysłał wezwanie',
    when: [
      {
        b: 'Nabywca wyznaczył Ci 120 dni na przeniesienie własności, bo minął termin z umowy.',
        t: 'Po bezskutecznym upływie tych 120 dni może odstąpić i zachowuje karę umowną za opóźnienie (art. 43 ust. 3 u.d.). Środki wypłacone Ci z rachunku otwartego zwracasz w 30 dni od odstąpienia (art. 44 ust. 3 u.d.).',
      },
      {
        b: 'Negocjujesz zakup działki pod budynek wielorodzinny.',
        t: 'Hipoteki i służebności gruntu wpiszesz potem do każdej umowy deweloperskiej (art. 35 ust. 1 pkt 3 u.d.), a prospekt podaje plan ogólny gminy i plan miejscowy dla terenu (załącznik do u.d.).',
      },
      {
        b: 'W trakcie sprzedaży zmieniasz ceny, standard albo harmonogram.',
        t: 'Nową cenę publikujesz z datą, nie usuwając starych (art. 19a ust. 2 u.d.). Zmianę prospektu doręczasz przed umową, a w umowie deweloperskiej wyraźnie ją podkreślasz (art. 22 ust. 3, art. 35 ust. 2 u.d.).',
      },
      {
        b: 'Sprzedajesz lokale usługowe albo biura w budynku z mieszkaniami.',
        t: 'Ustawa obejmuje lokal użytkowy kupowany razem z mieszkaniem w tym samym przedsięwzięciu (art. 2 ust. 2 u.d.). Jeżeli sam lokal użytkowy kupuje osoba fizyczna poza działalnością gospodarczą lub zawodową, przed umową przekazujesz jej na trwałym nośniku informację, że lokal nie jest mieszkalny, a jej wpłaty nie mają ochrony z ustawy (art. 28 u.d.).',
      },
    ],
    doForEyebrow: 'Zakres współpracy',
    doForTitle: 'Co przygotowuję i prowadzę dla dewelopera',
    doFor: [
      'Sprawdzam grunt przed zakupem: księgę wieczystą, hipoteki, służebności i przeznaczenie terenu w planie, potem piszę umowę nabycia.',
      'Przygotowuję prospekt według wzoru ustawowego, harmonogram i treść strony z cenami za 1 m² (art. 19a, 20 i 24 u.d.).',
      'Piszę wzory umowy rezerwacyjnej, deweloperskiej i sprzedaży gotowych lokali i sprawdzam je pod kątem niedozwolonych postanowień umownych (art. 385¹ § 1 k.c.).',
      'Układam procedurę odbioru: wzór protokołu, wzór odpowiedzi na wady i kalendarz terminów z art. 41 u.d.',
      'Odpowiadam na wezwania nabywców i oświadczenia o odstąpieniu, a gdy pismo nie wystarcza, prowadzę sprawę w sądzie.',
      'Przy inwestycji komercyjnej piszę umowy najmu i sprzedaży lokali użytkowych.',
    ],
    lists: [
      {
        eyebrow: 'Etapy przedsięwzięcia',
        title: 'Etap inwestycji, obowiązek z ustawy i ryzyko dla dewelopera',
        items: [
          {
            b: 'Grunt',
            t: 'Przed każdą wypłatą z rachunku otwartego bank sprawdza Twój tytuł do gruntu (art. 17 ust. 4 pkt 1 lit. a u.d.). Bez zgody wierzyciela hipotecznego na przeniesienie lokali bez obciążenia albo jego zobowiązania do jej udzielenia nabywca może odstąpić w 60 dni od zawarcia umowy (art. 43 ust. 1 pkt 8 i ust. 5 u.d.).',
          },
          {
            b: 'Start sprzedaży',
            t: 'Rachunek, prospekt i strona z cenami muszą być gotowe w dniu ogłoszenia sprzedaży (art. 5 pkt 12, art. 7 ust. 1, art. 19a ust. 1, art. 20 ust. 1 u.d.). Jeżeli cena przy umowie różni się od ceny ze strony, nabywca może żądać umowy po cenie dla siebie najkorzystniejszej (art. 19a ust. 6 u.d.).',
          },
          {
            b: 'Rezerwacja',
            t: 'Forma pisemna pod rygorem nieważności, opłata do 1% ceny z prospektu (art. 30 ust. 1, art. 32 ust. 2 u.d.). Jeżeli nie wykonasz umowy rezerwacyjnej, oddajesz opłatę w podwójnej wysokości (art. 34 ust. 1 pkt 2 i ust. 3 u.d.).',
          },
          { b: 'Umowa deweloperska', t: 'Akt notarialny z elementami z art. 35 ust. 1 u.d. Brak elementu albo niezgodność z prospektem daje nabywcy 30 dni na odstąpienie (art. 43 ust. 1 pkt 1–2 i ust. 2 u.d.).' },
          { b: 'Budowa i wypłaty', t: 'Harmonogram ma co najmniej 4 etapy, każdy za 10–25% kosztów (art. 24 ust. 2 u.d.). Przy nieprawidłowościach bank wstrzymuje wypłatę do ich usunięcia (art. 17 ust. 7–8 u.d.).' },
          {
            b: 'Odbiór i po sprzedaży',
            t: 'Na wady z protokołu odpowiadasz w 14 dni, inaczej uznaje się, że je uznałeś; uznane usuwasz w 30 dni od podpisania protokołu (art. 41 ust. 4–6 u.d.). Po przeniesieniu własności, w zakresie nieuregulowanym w art. 41, stosuje się odpowiednio przepisy k.c. o rękojmi przy sprzedaży (art. 41a u.d.).',
          },
        ],
      },
    ],
    stepsHeading: 'Od opisu inwestycji do dokumentów przed ogłoszeniem sprzedaży',
    steps: [
      'Opisujesz przedsięwzięcie: etap, liczbę lokali i dokumenty, które już masz.',
      'W 24 h roboczych piszę Ci, od czego zacząć przy tym przedsięwzięciu, np. od przeglądu obecnych wzorów umów albo od pakietu dokumentów przed ogłoszeniem sprzedaży. Razem z tą odpowiedzią przesyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Po akceptacji przygotowuję dokumenty w kolejności terminów. Przy stałej współpracy odpowiadam też na pisma nabywców i banku i poprawiam wzory po zmianach ustawy.',
      'Krok nieodwracalny: ogłoszenie sprzedaży lokali. Od tej chwili musisz mieć rachunek i prospekt (art. 5 pkt 12, art. 7 ust. 1, art. 20 ust. 1 u.d.), dlatego dokumenty zamykamy przed tym dniem.',
    ],
    faq: [
      {
        q: 'Ile wynosi składka na DFG i czy płacę ją też przy starszej inwestycji?',
        a: 'Najwyżej 1% każdej wpłaty nabywcy przy rachunku otwartym i 0,1% przy zamkniętym (art. 49 ust. 2 i 7 u.d.). Dokładną stawkę określa rozporządzenie ministra, a stosujesz tę z dnia rozpoczęcia sprzedaży (art. 49 ust. 6 i 8 u.d.). Przy starszej inwestycji, w której sprzedaż i pierwsza umowa ruszyły jeszcze pod ustawą z 2011 r., od umów zawartych po 22.08.2025 płacisz według stawki z 1.07.2022 (art. 76 ust. 1 i 1a u.d.).',
      },
      {
        q: 'Jak zmienić prospekt w trakcie sprzedaży: aneksem czy nową wersją?',
        a: 'Możesz wybrać: aneks z aktualnymi danymi albo nowy prospekt z oznaczoną zmianą, np. przypisem (art. 22 ust. 1 u.d.). Doręczasz go w tej samej formie co prospekt, chyba że klient wcześniej wyraźnie zgodził się na inną (art. 22 ust. 2 u.d.). Jeżeli nie poinformujesz o zmianie osoby z umową rezerwacyjną, zwracasz jej opłatę rezerwacyjną (art. 33 ust. 1, art. 34 ust. 1 pkt 3 u.d.).',
      },
      {
        q: 'Jak publikować ceny mieszkań na stronie i przekazywać je do portalu danych?',
        a: 'Na swojej stronie podajesz z VAT cenę za 1 m² każdego oferowanego lokalu (art. 19a ust. 1 u.d.). Osobno podajesz cenę pomieszczeń przynależnych (np. komórki) i praw niezbędnych do korzystania z lokalu, jeśli nie ma ich w cenie, oraz inne świadczenia nabywcy. Te dane raz na dobę przekazujesz ministrowi do spraw informatyzacji, który publikuje je na portalu danych (art. 19b ust. 1 i 3 u.d.). Od 11.11.2026 przekazujesz je dokumentem elektronicznym o strukturze określonej przez ministra.',
      },
      {
        q: 'Jak ograniczyć ryzyko roszczeń nabywców o kary za opóźnienie i wady?',
        a: 'Przede wszystkim wpisz termin przeniesienia własności, który dotrzymasz przy swoim harmonogramie. Po jego upływie nabywca może wyznaczyć Ci 120 dni, a potem odstąpić (art. 43 ust. 3 u.d.). Odsetki zastrzeżone na Twoją rzecz nie mogą przewyższać kar umownych zastrzeżonych na rzecz nabywcy (art. 39 ust. 1 u.d.). Na wady z protokołu odbioru odpowiadasz w 14 dni, bo milczenie oznacza ich uznanie (art. 41 ust. 5 u.d.).',
      },
      {
        q: 'Kiedy zaangażować prawnika: przy zakupie gruntu czy przed sprzedażą?',
        a: 'Przy zakupie gruntu. Bank sprawdza Twój tytuł do gruntu przed każdą wypłatą z rachunku otwartego (art. 17 ust. 4 pkt 1 lit. a u.d.), a hipoteki z księgi wieczystej wpisujesz do prospektu (załącznik do u.d.). Jeżeli grunt już masz, zacznij najpóźniej przed ogłoszeniem sprzedaży lokali, bo wtedy powstają obowiązki z ustawy (art. 5 pkt 12, art. 7 ust. 1 u.d.).',
      },
      {
        q: 'Obsługujesz też inwestycje komercyjne?',
        a: 'Tak: biurowe, handlowe i magazynowe, w tym umowy najmu, sprzedaży i zabezpieczenia. Lokal użytkowy sprzedawany bez mieszkania jest poza ochroną wpłat z ustawy deweloperskiej (art. 2 ust. 2, art. 28 ust. 1 pkt 2 u.d.), więc warunki ustalasz w umowie.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2, art. 5, art. 5a, art. 6–8, art. 16–17, art. 19a–25',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Zakres ustawy, rozpoczęcie sprzedaży, cena za 1 m², rachunek powierniczy, ceny na stronie, prospekt, harmonogram, zgoda wierzyciela hipotecznego.',
        },
        {
          ref: 'art. 28–44, art. 49, art. 57–58, art. 76 ust. 1 i 1a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Rezerwacja, umowa deweloperska, odbiór i wady, odstąpienie, składka na DFG, odpowiedzialność karna.',
        },
        {
          ref: 'art. 1 (art. 19b ust. 1 od 11.11.2026)',
          act: 'Ustawa z dnia 17 lipca 2026 r. o zmianie ustawy o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 1077',
          eli: 'DU/2026/1077',
          note: 'Dane o cenach w formie dokumentu elektronicznego.',
        },
        { ref: 'art. 385¹', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Niedozwolone postanowienia we wzorach umów.' },
      ],
    },
    docsHeading: 'Obsługa deweloperów: co przesłać do wstępnej analizy.',
    docs: [
      'Opis przedsięwzięcia: etap, liczba lokali, rodzaj zabudowy.',
      'Numer księgi wieczystej gruntu albo projekt umowy jego nabycia.',
      'Prospekt i harmonogram, jeśli już są.',
      'Obecne wzory umów rezerwacyjnej i deweloperskiej oraz protokołu odbioru.',
      'Pisma nabywców lub banku czekające na odpowiedź, z datą doręczenia.',
    ],
    guides: ['kara-umowna-za-opoznienie-dewelopera-uchwala-sn', 'warunki-zabudowy-ile-wazne'],
    seeAlso: ['plan-ogolny', 'klauzule-abuzywne-deweloper'],
    cta: {
      heading: 'Cały cykl inwestycji — od gruntu po posprzedaż — pod jedną prawną opieką.',
      lead: 'Opisz przedsięwzięcie i etap, na którym jesteś. W 24 h roboczych odpiszę, które dokumenty przygotować albo poprawić najpierw, a w tej samej wiadomości prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-biur-nieruchomosci': {
    h1: 'Obsługa prawna biur nieruchomości i pośredników',
    h1Full: 'Biura nieruchomości i pośrednicy: umowa pośrednictwa, prowizja, AML',
    topic: 'Pośrednictwo w obrocie nieruchomościami',
    metaDesc: 'Umowa pośrednictwa wymaga formy pisemnej lub elektronicznej pod rygorem nieważności, a pośrednik musi mieć procedurę AML. Piszę wzory i dochodzę prowizji.',
    subtitle: 'Klient ominął biuro, kwestionuje prowizję albo nie wiesz, czy Twoja procedura AML wystarczy? Obsługa prawna biura nieruchomości zaczyna się od ważnej umowy pośrednictwa (art. 180 ust. 3 u.g.n.) i od procedury AML dopasowanej do biura (art. 50 ustawy AML). Piszę wzory i procedury, dochodzę prowizji; pracuję z biurami na stałe albo przy jednej sprawie.',
    short: {
      q: 'Czego wymagają przepisy od biura nieruchomości i jak chronić prowizję?',
      a: 'Prowizję chroni zapis w umowie pośrednictwa: u.g.n. nie reguluje wynagrodzenia pośrednika, więc transakcję z kupującym wskazanym przez biuro opisz w umowie wprost (art. 353¹ k.c.). Umowa wymaga formy pisemnej lub elektronicznej i ma w załączniku kopię polisy OC (art. 180 ust. 3, art. 181 ust. 3a u.g.n.); ustawa AML dokłada ocenę ryzyka i wewnętrzną procedurę (art. 27 i 50).',
      facts: [
        [
          'Forma umowy pośrednictwa',
          'Pisemna albo elektroniczna (kwalifikowany podpis elektroniczny), pod rygorem nieważności (art. 180 ust. 3 u.g.n., art. 78¹ § 1 k.c.)',
        ],
        [
          'Polisa OC',
          'Obowiązkowa; kopię polisy aktualnej w dniu zawarcia umowy dołączasz do umowy; za brak OC kara od 2- do 5-krotności przeciętnego miesięcznego wynagrodzenia w gospodarce narodowej (art. 181 ust. 3 i 3a, art. 198d u.g.n.)',
        ],
        [
          'AML przy najmie',
          'Tylko gdy miesięczny czynsz wynosi co najmniej równowartość 10 000 euro według średniego kursu NBP (art. 2 ust. 1 pkt 18, art. 5 ustawy AML)',
        ],
        [
          'Obowiązki AML',
          'Ocena ryzyka aktualizowana co najmniej co 2 lata, procedura wewnętrzna, środki bezpieczeństwa finansowego wobec klientów, przechowywanie dokumentów przez 5 lat (art. 27, 33, 49, 50 ustawy AML)',
        ],
        [
          'Kara za brak procedury AML',
          'Do dwukrotności korzyści osiągniętej albo straty unikniętej dzięki naruszeniu, a gdy nie da się jej ustalić, do równowartości 1 000 000 euro; osobie odpowiedzialnej do 1 000 000 zł (art. 147 pkt 7, art. 150 ust. 2, art. 154 ust. 1 ustawy AML)',
        ],
      ],
    },
    introHeading: 'Co przepisy wymagają od biura nieruchomości',
    intro: 'Pośrednictwo w obrocie nieruchomościami to odpłatne wykonywanie czynności zmierzających do zawarcia przez inne osoby umów, m.in. nabycia, zbycia, najmu i dzierżawy nieruchomości (art. 179b u.g.n.). Ustawa o gospodarce nieruchomościami reguluje formę umowy, niekaralność, obowiązkowe OC i prawo wglądu do rejestrów (art. 180–181a), a zakres czynności zostawia umowie. O prowizji, wyłączności i transakcji po wygaśnięciu umowy decyduje więc przede wszystkim umowa, w granicach art. 353¹ i 385¹ k.c. Drugi filar to ustawa o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (ustawa AML): pośrednik jest w niej instytucją obowiązaną (art. 2 ust. 1 pkt 18).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Klient ominął biuro, podważa umowę, żąda polisy albo brakuje procedury AML',
    when: [
      {
        b: 'Klient napisał, że nie dostał kopii polisy OC, i zapowiada wypowiedzenie umowy.',
        t: 'Wypowiedzieć umowę ze skutkiem natychmiastowym może, jeżeli po jego pisemnym wezwaniu nie przekażesz kopii polisy w 7 dni od otrzymania wezwania (art. 181 ust. 3a i 3b u.g.n.).',
      },
      {
        b: 'Klient sprzedał mieszkanie kupującemu, którego przyprowadziłeś, ale już bez biura.',
        t: 'Warunki prowizji ustala umowa pośrednictwa (art. 180 ust. 3 u.g.n., art. 353¹ k.c.): czy obejmuje transakcję z osobą wskazaną przez biuro i przez jaki czas po wygaśnięciu umowy.',
      },
      {
        b: 'Umowę z klientem zawarłeś zwykłym e-mailem albo kliknięciem „akceptuję”, bez podpisu własnoręcznego ani kwalifikowanego.',
        t: 'Umowa pośrednictwa bez formy pisemnej lub elektronicznej jest nieważna (art. 73 § 1 k.c., art. 180 ust. 3 u.g.n.).',
      },
      {
        b: 'Klient, który jest konsumentem, podpisał Twój wzór, a teraz twierdzi, że zapis o prowizji go nie wiąże.',
        t: 'Zapis z wzorca uważa się w szczególności za nieuzgodniony indywidualnie, a uzgodnienie musi wykazać biuro (art. 385¹ § 3 i 4 k.c.). Nie wiąże konsumenta, gdy jest sprzeczny z dobrymi obyczajami i przy tym rażąco narusza jego interesy, chyba że jednoznacznie określa wynagrodzenie (art. 385¹ § 1 k.c.).',
      },
      {
        b: 'Prowadzisz biuro sam i nie masz procedury AML albo masz wzór z internetu.',
        t: 'W jednoosobowej działalności za AML odpowiadasz Ty (art. 9 ustawy AML), a procedura ma pasować do Twojej działalności (art. 50 ust. 2).',
      },
    ],
    doForEyebrow: 'Zakres współpracy',
    doForTitle: 'Umowy, procedura AML i prowizja: co robię dla biura',
    doFor: [
      'Piszę i poprawiam wzory umów pośrednictwa: forma, prowizja, wyłączność, transakcja z osobą wskazaną przez biuro; wzór dla konsumentów sprawdzam pod kątem art. 385¹ k.c.',
      'Przygotowuję ocenę ryzyka, procedurę AML i formularze środków bezpieczeństwa finansowego dla Twojego biura.',
      'Odpowiadam klientom, którzy kwestionują prowizję albo wypowiadają umowę; wzywam do zapłaty i prowadzę sprawę w sądzie.',
      'Przed publikacją oferty sprawdzam księgę wieczystą, plan miejscowy albo plan ogólny i opisuję w raporcie, co z nich wynika dla kupującego.',
      'W stałej współpracy odpowiadam na pytania z bieżących transakcji, np. o umowę rezerwacyjną albo wskazanie kupującego; czas odpowiedzi zapisujemy w ofercie.',
    ],
    stepsHeading: 'Jak pracuję z biurem: od wzoru umowy do sporu o prowizję',
    steps: [
      'Opisujesz w formularzu, jak pracuje biuro: wzór umowy, procedura AML, polisa OC, a przy sporze umowa z klientem.',
      'W 24 h roboczych odpisuję, co w Twoim biurze trzeba zrobić najpierw, np. poprawić wzór, napisać procedurę AML albo wezwać klienta do zapłaty, i wysyłam ofertę z ceną i terminem. Ta odpowiedź nie jest przeglądem Twoich dokumentów. Do akceptacji oferty nic nie płacisz.',
      'Po akceptacji oddaję wzór umowy, polisę i procedurę AML z listą zmian i przepisem przy każdej zmianie.',
      'Wdrożenie: procedurę AML przed wprowadzeniem akceptuje kadra kierownicza wyższego szczebla, a w jednoosobowym biurze Ty (art. 50 ust. 3, art. 9 ustawy AML). Nowy wzór umowy stosujesz od wybranego dnia.',
      'Spór o prowizję: wezwanie do zapłaty z terminem, potem pozew. Pozwu nie wycofasz dowolnie: bez zgody klienta cofniesz go tylko do rozpoczęcia rozprawy, chyba że zrzekasz się roszczenia (art. 203 § 1 k.p.c.).',
    ],
    faq: [
      {
        q: 'Klient sprzedał mieszkanie bez nas kupującemu, którego mu przyprowadziliśmy. Czy należy się prowizja?',
        a: 'Tak, jeżeli umowa pośrednictwa obejmuje transakcję z osobą wskazaną przez biuro. U.g.n. nie reguluje wynagrodzenia pośrednika, więc jego warunki ustalacie w umowie (art. 353¹ k.c.). Przy kliencie-konsumencie zapis z wzorca podlega dodatkowo kontroli z art. 385¹ k.c. W sporze liczy się też dowód, że to biuro wskazało kupującego, np. podpisany protokół prezentacji.',
      },
      {
        q: 'Jak zapisać okres ochronny po wygaśnięciu umowy pośrednictwa?',
        a: 'Wprost i z liczbą miesięcy: kto jest osobą wskazaną przez biuro, przez ile miesięcy po wygaśnięciu umowy zachowujesz prawo do prowizji i jak dokumentujesz wskazanie (np. protokół prezentacji). U.g.n. takiego okresu nie przewiduje, dlatego zapisz go w umowie. We wzorcu dla konsumentów taki zapis nie wiąże klienta, jeżeli jest sprzeczny z dobrymi obyczajami, a przy tym rażąco narusza jego interesy (art. 385¹ § 1 k.c.).',
      },
      {
        q: 'Czy umowa pośrednictwa musi być na piśmie i z polisą OC?',
        a: 'Tak. Bez formy pisemnej albo elektronicznej umowa pośrednictwa jest nieważna (art. 180 ust. 3 u.g.n.). Forma elektroniczna to oświadczenie z kwalifikowanym podpisem elektronicznym (art. 78¹ § 1 k.c.); zwykły e-mail daje tylko formę dokumentową (art. 77² k.c.). Do umowy dołączasz kopię polisy OC ważnej w dniu podpisania (art. 181 ust. 3a u.g.n.).',
      },
      {
        q: 'Czy biuro musi mieć procedurę AML i co grozi za jej brak?',
        a: 'Tak, chyba że pośredniczysz wyłącznie w najmie lub dzierżawie z czynszem poniżej równowartości 10 000 euro miesięcznie (art. 2 ust. 1 pkt 18, art. 50 ust. 1 ustawy AML). Za brak procedury grozi kara administracyjna (art. 147 pkt 7). Kara pieniężna sięga dwukrotności korzyści osiągniętej albo straty unikniętej dzięki naruszeniu, a gdy nie da się jej ustalić, równowartości 1 000 000 euro (art. 150 ust. 2).',
      },
      {
        q: 'Czy pośrednictwo w najmie też podlega AML?',
        a: 'Tak, gdy miesięczny czynsz wynosi co najmniej równowartość 10 000 euro. Pośrednictwo przy najmie lub dzierżawie z niższym czynszem ustawa AML wyłącza (art. 2 ust. 1 pkt 18). Euro przeliczasz według średniego kursu NBP (art. 5 ustawy AML). Przy lokalach użytkowych i halach sprawdź to przed podpisaniem umowy pośrednictwa.',
      },
      {
        q: 'Czy wzór procedury AML z internetu wystarczy?',
        a: 'Nie, jeżeli nie dopasujesz go do biura. Procedura ma uwzględniać charakter, rodzaj i rozmiar Twojej działalności (art. 50 ust. 2 ustawy AML) i opisywać, jak ograniczasz ryzyko z Twojej oceny ryzyka (art. 50 ust. 2 pkt 1–3, art. 27 ust. 1). Ocenę aktualizujesz co najmniej co 2 lata (art. 27 ust. 3). Klientów, transakcje i kanały pozyskania opisujesz własne.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 179a–181a, 198d', act: 'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Pośrednik, forma umowy, obowiązkowe OC i kopia polisy.' },
        {
          ref: 'art. 2 ust. 1 pkt 18, art. 5, 9, 27, 33, 49, 50, 147, 150, 154',
          act: 'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu',
          tj: 'Dz.U. 2025 poz. 644',
          eli: 'DU/2018/723',
          note: 'Pośrednik jako instytucja obowiązana, procedura, kary.',
        },
        { ref: 'art. 73, 77², 78, 78¹, 353¹, 385¹', act: 'Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Forma umowy, swoboda umów, klauzule wobec konsumentów.' },
        { ref: 'art. 203 § 1', act: 'Ustawa z dnia 17 listopada 1964 r. Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Cofnięcie pozwu w sporze o prowizję.' },
      ],
    },
    docs: [
      'Wzór umowy pośrednictwa, którego używasz (z wyłącznością i bez, jeśli masz dwa)',
      'Aktualna polisa OC pośrednika',
      'Procedura AML i ocena ryzyka, jeśli je masz',
      'Przy sporze: podpisana umowa z klientem, protokoły prezentacji i korespondencja z klientem oraz kupującym',
      'Wezwanie albo wypowiedzenie od klienta, jeśli je dostałeś',
    ],
    guides: ['jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: ['obsluga-sprzedazy', 'audyt-stanu-prawnego-nieruchomosci'],
    cta: {
      heading: 'Pewna umowa i chroniona prowizja — żebyś dostał zapłatę za swoją pracę.',
      lead: 'Opisz, czy chodzi o wzór umowy, procedurę AML czy prowizję od konkretnej transakcji. W ciągu 24 h roboczych odpiszę, co trzeba zrobić w Twoim biurze, i prześlę ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-wspolnot': {
    h1: 'Obsługa prawna wspólnot mieszkaniowych',
    h1Full: 'Obsługa prawna wspólnot mieszkaniowych: uchwały, zaliczki, spory z deweloperem',
    topic: 'Wspólnota mieszkaniowa',
    metaDesc: 'Obsługa prawna wspólnoty to uchwały, zaliczki i spory w sądzie. Właściciel ma 6 tygodni na pozew o uchylenie uchwały (art. 25 ust. 1a u.w.l.).',
    subtitle: 'Właściciel zaskarżył uchwałę, ktoś od miesięcy nie płaci zaliczek albo nie wiesz, czy zarząd może sam podpisać umowę? Obsługa prawna wspólnoty mieszkaniowej obejmuje uchwały, windykację zaliczek i spory, w których wspólnota pozywa albo jest pozwana (art. 6 u.w.l.). Jeżeli jesteś w zarządzie albo zarządzasz wspólnotą, pracuję z Tobą przy jednej sprawie albo w stałej współpracy.',
    short: {
      q: 'Właściciel zaskarżył uchwałę wspólnoty. Co teraz musi zrobić zarząd?',
      a: 'Zarząd dalej wykonuje uchwałę, bo zaskarżona uchwała podlega wykonaniu, chyba że sąd wstrzyma jej wykonanie do końca sprawy (art. 25 ust. 2 u.w.l.). Pozwana jest wspólnota, nie zarząd ani zarządca (art. 25 ust. 1a u.w.l.). Zarząd składa w jej imieniu odpowiedź na pozew w terminie wyznaczonym przez sąd, nie krótszym niż 2 tygodnie (art. 205¹ § 1 k.p.c.).',
      facts: [
        [
          'Termin na pozew właściciela',
          '6 tygodni od podjęcia uchwały na zebraniu albo od powiadomienia o uchwale podjętej w trybie indywidualnego zbierania głosów (art. 25 ust. 1a u.w.l.)',
        ],
        [
          'Kto działa za wspólnotę',
          'Zarząd; przy zarządzie kilkuosobowym oświadczenia woli składa co najmniej 2 członków (art. 21 ust. 1 i 2 u.w.l.)',
        ],
        [
          'Zaliczki na koszty zarządu',
          'Płatne z góry do 10. dnia każdego miesiąca (art. 15 ust. 1 u.w.l.); za czas opóźnienia odsetki (art. 481 § 1 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '200 zł od pozwu właściciela o uchylenie uchwały (art. 27 pkt 9 u.k.s.c.); od pozwu wspólnoty o zaliczki w elektronicznym postępowaniu upominawczym (e-sąd) czwarta część opłaty, nie mniej niż 30 zł (art. 19 ust. 2 pkt 2 i art. 20 ust. 1 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Kiedy zarząd działa sam, a kiedy potrzebuje uchwały właścicieli',
    intro: 'Wspólnotę mieszkaniową tworzy ogół właścicieli lokali w danej nieruchomości; może ona pozywać i być pozwana (art. 6 u.w.l.). Jeżeli lokali jest więcej niż trzy, właściciele wybierają zarząd, który kieruje sprawami wspólnoty i reprezentuje ją na zewnątrz (art. 20 ust. 1 i art. 21 ust. 1 u.w.l.). Czynności zwykłego zarządu zarząd podejmuje sam. Na czynność przekraczającą ten zakres, np. plan gospodarczy, wysokość opłat albo pozew o licytację lokalu dłużnika, potrzebuje uchwały (art. 22 ust. 1–3 u.w.l.). Dlatego w każdej sprawie wspólnoty najpierw sprawdzam, czy zarząd mógł działać sam.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pozew od właściciela, dłużnik w zaliczkach, duża umowa do podpisu',
    when: [
      {
        b: 'Właściciel złożył pozew o uchylenie uchwały albo zapowiedział go na zebraniu',
        t: 'może zaskarżyć uchwałę niezgodną z prawem lub umową właścicieli, naruszającą zasady prawidłowego zarządzania albo jego interesy (art. 25 ust. 1 u.w.l.).',
      },
      {
        b: 'Jeden właściciel nie płaci od pół roku, a sąsiedzi pytają zarząd, dlaczego nic się nie dzieje',
        t: 'zaliczki są płatne z góry do 10. dnia każdego miesiąca (art. 15 ust. 1 u.w.l.), więc odsetki za opóźnienie (art. 481 § 1 k.c.) biegną od każdej raty osobno.',
      },
      {
        b: 'Masz podpisać umowę na duże pieniądze i nie wiesz, czy zarząd może to zrobić bez uchwały',
        t: 'na czynność przekraczającą zakres zwykłego zarządu potrzebna jest uchwała wyrażająca zgodę i udzielająca zarządowi pełnomocnictwa (art. 22 ust. 2 u.w.l.).',
      },
      { b: 'Zarząd nie zbiera wymaganej większości właścicieli na potrzebną czynność', t: 'zarząd może wtedy żądać rozstrzygnięcia przez sąd w postępowaniu nieprocesowym (art. 24 u.w.l.); przygotowuję taki wniosek.' },
      {
        b: 'Po deweloperze zostały wady dachu, elewacji albo garażu',
        t: 'rękojmia przysługuje kupującym lokale (art. 556 k.c.), nie wspólnocie; jak zebrać te roszczenia w jednej sprawie, opisuję na stronie o roszczeniach wspólnoty wobec dewelopera.',
      },
    ],
    doForEyebrow: 'Zakres współpracy',
    doForTitle: 'Od projektu uchwały do licytacji lokalu dłużnika',
    doFor: [
      'Piszę projekty uchwał i zawiadomień o zebraniu, także corocznym, które zarząd zwołuje nie później niż w pierwszym kwartale (art. 30 ust. 1 pkt 3 u.w.l.).',
      'Gdy właściciel pozywa o uchylenie uchwały, piszę odpowiedź na pozew i odpowiadam na żądanie wstrzymania wykonania uchwały (art. 25 ust. 2 u.w.l.).',
      'Odzyskuję zaległe zaliczki: wezwanie, pozew z odsetkami od każdej raty, egzekucja.',
      'Przy długotrwałych zaległościach przygotowuję uchwałę i pozew o sprzedaż lokalu dłużnika w drodze licytacji (art. 16 ust. 1 i art. 22 ust. 3 pkt 7 u.w.l.).',
      'Sprawdzam umowy wspólnoty z zarządcą i wykonawcami przed podpisem, a przy wadach części wspólnych przygotowuję spór z deweloperem.',
    ],
    stepsHeading: 'Od uchwały albo pisma z sądu do egzekucji u komornika',
    steps: [
      'W formularzu podajesz datę uchwały albo doręczenia pozwu, kwotę zaległości albo przedmiot umowy.',
      'W 24 h roboczych odpowiadam, czy wspólnocie wystarczy nowa uchwała, czy trzeba odpowiedzieć na pozew albo pozwać dłużnika. Wraz z odpowiedzią dostajesz ofertę z ceną i terminem wykonania; dopóki jej nie przyjmiesz, nic nie płacisz.',
      'Jeżeli potrzebna jest uchwała, piszę jej projekt i zawiadomienie: zarząd zawiadamia każdego właściciela na piśmie przynajmniej na tydzień przed terminem zebrania, z porządkiem obrad (art. 32 u.w.l.).',
      'Gdy sprawa trafia do sądu, zarząd udziela mi w imieniu wspólnoty pełnomocnictwa procesowego (art. 87 § 1 k.p.c.). Odpowiedź na pozew złożoną po terminie sąd zwraca (art. 205¹ § 2 k.p.c.), więc pozew przekaż mi zaraz po doręczeniu.',
      'Po wyroku albo nakazie zapłaty z klauzulą wykonalności składam wniosek o egzekucję do komornika (art. 776 k.p.c.).',
    ],
    faq: [
      {
        q: 'Ile czasu ma właściciel na zaskarżenie uchwały wspólnoty?',
        a: '6 tygodni. Przy uchwale podjętej na zebraniu liczy się je od dnia jej podjęcia (art. 25 ust. 1a u.w.l.). Przy głosach zbieranych indywidualnie termin biegnie od dnia powiadomienia właściciela o treści uchwały. O takiej uchwale każdy właściciel ma być powiadomiony na piśmie (art. 23 ust. 3 u.w.l.); zachowaj dowód doręczenia.',
      },
      {
        q: 'Jak odzyskać zaległe zaliczki od właściciela lokalu?',
        a: 'Pozwem o zapłatę, a po wyroku albo nakazie zapłaty przez egzekucję komorniczą. Zaliczki wymagalne w ciągu 3 lat przed wniesieniem pozwu można dochodzić w elektronicznym postępowaniu upominawczym (art. 505²⁹a k.p.c.). Dłużnik, który przegra, zwraca wspólnocie na jej żądanie koszty procesu (art. 98 § 1 k.p.c.).',
      },
      {
        q: 'Czy wspólnota może doprowadzić do licytacji mieszkania dłużnika?',
        a: 'Może tego żądać w sądzie, jeżeli właściciel długotrwale zalega z opłatami albo rażąco lub uporczywie narusza porządek domowy (art. 16 ust. 1 u.w.l.). Na pozew potrzebna jest uchwała właścicieli (art. 22 ust. 3 pkt 7 u.w.l.). Ustawa nie mówi, od ilu miesięcy zaległość jest długotrwała.',
      },
      {
        q: 'Kto reprezentuje wspólnotę mieszkaniową w sądzie?',
        a: 'Zarząd, bo to on reprezentuje wspólnotę na zewnątrz (art. 21 ust. 1 u.w.l.). Jeżeli zarząd powierzono zarządcy umową notarialną (art. 18 ust. 1), działa on według tej umowy, a w braku odmiennych postanowień według przepisów o zarządzie (art. 33). Pełnomocnikiem procesowym może być adwokat (art. 87 § 1 k.p.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 6, 15, 16, 18, 20–25, 30, 32 i 33 u.w.l.', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'zarząd, zaliczki, uchwały, zebrania' },
        { ref: 'art. 481 i 556 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'odsetki, rękojmia' },
        { ref: 'art. 87, 98, 205¹, 505²⁹a i 776 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'pełnomocnik, koszty, terminy, egzekucja' },
        { ref: 'art. 19 ust. 2 pkt 2, art. 20 ust. 1 i art. 27 pkt 9 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty od pozwów' },
      ],
    },
    docs: [
      'Zaskarżona albo planowana uchwała z protokołem zebrania lub listą głosów zebranych indywidualnie',
      'Zawiadomienie o zebraniu i powiadomienia właścicieli o uchwale, z datami doręczenia (jeśli masz)',
      'Pozew od właściciela razem z kopertą, na której widać datę doręczenia',
      'Przy zaległościach: uchwała o wysokości zaliczek, zestawienie wpłat dłużnika i wysłane wezwania',
      'Projekt umowy, którą zarząd ma podpisać, z uchwałą, jeśli ją podjęto',
    ],
    guides: [],
    seeAlso: ['roszczenia-wspolnota-deweloper', 'nadzor-budowlany-pinb', 'gwarancja-jakosci-lokal'],
    cta: {
      heading: 'Uchwały, które się bronią. Pieniądze, które wracają. Deweloper, który odpowiada.',
      lead: 'Napisz, czego dotyczy sprawa wspólnoty: uchwały, zaległości czy umowy. W 24 h roboczych odpiszę, od czego zarząd powinien zacząć, i dołączę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

});
