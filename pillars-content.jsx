/* pillars-content.jsx — treści 10 stron filarów (obszarów praktyki). Ten sam format co
   BLOCK_CONTENT['roszczenia-deweloper'] w services-content.jsx. Ładowane po services-content.jsx. */
Object.assign(window.BLOCK_CONTENT, {

  'sprawdzenie-przed-zakupem': {
    h1: 'Sprawdzenie nieruchomości przed zakupem',
    topic: 'Sprawdzenie przed zakupem',
    subtitle: 'Masz kilka dni na decyzję o zadatku albo deweloper przysłał umowę „do podpisu bez zmian”? Sprawdzenie nieruchomości przed zakupem obejmuje księgę wieczystą, plan dla działki, dostęp do drogi i pierwszą umowę, przy której płacisz. Wskazuję, która z czterech usług pasuje do Twojego etapu, najlepiej przed pierwszą wpłatą.',
    short: {
      q: 'Kupujesz działkę albo mieszkanie: co sprawdzić przed rezerwacją, zadatkiem i aktem notarialnym?',
      a: 'Sprawdź wszystkie 4 działy księgi wieczystej (art. 25 ust. 1 u.k.w.h.), plan dla działki, dostęp do drogi publicznej i umowę, przy której płacisz. Zrób to przed pierwszym przelewem: opłatą rezerwacyjną albo zadatkiem. Zgłoś się kilka dni roboczych wcześniej, bo sprawdzenie księgi i umowy trwa zwykle 2–4 dni robocze.',
      facts: [
        [
          'Przed opłatą rezerwacyjną u dewelopera',
          'czy opłata nie przekracza 1% ceny z prospektu i kiedy wraca (art. 32 ust. 2, art. 34 ust. 1 u.d.). Usługa: Sprawdzenie umowy rezerwacyjnej',
        ],
        [
          'Przed zadatkiem i umową przedwstępną',
          'kto zatrzyma zadatek, gdy umowa nie zostanie wykonana (art. 394 § 1 i 3 k.c., jeżeli umowa ani zwyczaj nie stanowią inaczej). Usługa: Umowa przedwstępna',
        ],
        [
          'Przed umową deweloperską u notariusza',
          'które zapisy są mniej korzystne niż ustawa i przez to nieważne (art. 42 u.d.). Usługa: Sprawdzenie umowy deweloperskiej',
        ],
        [
          'Przed zakupem z rynku wtórnego albo działki',
          'czy sprzedający jest właścicielem według księgi, bo księga co do zasady chroni kupującego w dobrej wierze (art. 5 i 6 u.k.w.h.); planu dla działki w niej nie ma. Usługa: Audyt stanu prawnego nieruchomości',
        ],
      ],
    },
    introHeading: 'Kto przy zakupie pilnuje tylko Twojego interesu',
    intro: 'Zakup nieruchomości to zwykle największa transakcja w życiu, a decyzję podejmuje się w kilka dni, pod presją „zaraz weźmie ktoś inny”. Sprzedający, pośrednik i deweloper są po jednej stronie stołu. Ja siadam po Twojej. Notariusz ma obowiązek czuwać nad zabezpieczeniem praw każdej strony aktu, także sprzedającego (art. 80 § 2 Prawa o notariacie). Ja czytam dokumenty wyłącznie pod Twój interes: księgę wieczystą razem z dokumentami, na podstawie których dokonano wpisów, plan dla działki i umowę zdanie po zdaniu. Problemy rzadko biorą się ze złej woli sprzedającego, częściej z historii nieruchomości: nieuregulowanego spadku, starej służebności, granic niezgodnych z ewidencją. Dlatego sprawdzenie ma sens także przy zakupie od rodziny albo znajomych.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Masz kilka dni na decyzję i nie wiesz, czego nie widać w ogłoszeniu',
    when: [
      {
        b: 'Sprzedający wyznaczył Ci termin na zadatek i umowę przedwstępną.',
        t: 'Bez innego zapisu w umowie: gdy jej nie wykonasz, sprzedający może odstąpić i zatrzymać zadatek, a gdy on jej nie wykona, żądasz sumy dwukrotnie wyższej (art. 394 § 1 k.c.).',
      },
      {
        b: 'Deweloper przysłał umowę rezerwacyjną albo deweloperską „do podpisu bez zmian”.',
        t: 'Prospekt informacyjny dostajesz przed umową (art. 21 ust. 1 u.d.), a od umowy deweloperskiej niezgodnej z prospektem co do zasady możesz odstąpić (art. 43 ust. 1 pkt 2 u.d.).',
      },
      { b: 'Kupujesz działkę i nie wiesz, czy postawisz na niej dom.', t: 'Sprawdzam plan miejscowy, plan ogólny gminy i dostęp do drogi publicznej, bez którego WZ się nie wydaje (art. 61 ust. 1 pkt 2 u.p.z.p.).' },
      {
        b: 'Kupujesz ziemię rolną, a nie prowadzisz gospodarstwa.',
        t: 'Zasada, że nabywcą nieruchomości rolnej jest rolnik indywidualny, nie obejmuje m.in. nieruchomości mniejszej niż 1 ha (art. 2a ust. 1 i ust. 3 pkt 1a u.k.u.r.); resztę wyjątków opisuje usługa Nieruchomości rolne.',
      },
      {
        b: 'W księdze wieczystej są wpisy, których nie rozumiesz, albo boisz się, że działka jest zadłużona.',
        t: 'Hipoteki są w dziale IV księgi (art. 25 ust. 1 pkt 4 u.k.w.h.) i nie znikają ze sprzedażą (art. 65 ust. 1 u.k.w.h.), dlatego umowa ma wskazać, kto i kiedy je spłaci.',
      },
      {
        b: 'Sprzedaje spadkobierca, kilku współwłaścicieli albo pełnomocnik.',
        t: 'Spadkobierca wykazuje prawa stwierdzeniem nabycia spadku albo zarejestrowanym aktem poświadczenia dziedziczenia (art. 1027 k.c.). Całość sprzedaje się za zgodą wszystkich współwłaścicieli; bez niej rozstrzygnięcia sądu mogą żądać tylko współwłaściciele z co najmniej połową udziałów (art. 199 k.c.). Pełnomocnictwo do sprzedaży wymaga aktu notarialnego (art. 99 § 1 i art. 158 k.c.).',
      },
    ],
    lists: [
      {
        eyebrow: 'Trzy umowy przed przeniesieniem własności',
        title: 'Umowa rezerwacyjna, przedwstępna i deweloperska: czym się różnią',
        kind: 'check',
        items: [
          {
            b: 'Umowa rezerwacyjna',
            t: 'deweloper przez czas umowy nie oferuje wybranego lokalu innym (art. 29 ust. 2 u.d.); forma pisemna pod rygorem nieważności (art. 30 ust. 1 u.d.), a opłatę rezerwacyjną zalicza się na poczet ceny (art. 32 ust. 3 u.d.).',
          },
          {
            b: 'Umowa przedwstępna',
            t: 'jedna albo obie strony zobowiązują się zawrzeć umowę sprzedaży (art. 389 § 1 k.c.); bez formy aktu notarialnego, gdy druga strona uchyla się od umowy, żądasz odszkodowania, a nie zawarcia umowy (art. 390 § 1–2 i art. 158 k.c.).',
          },
          {
            b: 'Umowa deweloperska',
            t: 'budowa i przeniesienie własności w jednym zobowiązaniu: deweloper buduje i przenosi na Ciebie lokal, Ty płacisz (art. 5 pkt 6 u.d.); forma aktu notarialnego (art. 40 ust. 1 u.d.), wpłaty na mieszkaniowy rachunek powierniczy według postępu budowy (art. 8 ust. 1 u.d.).',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Na którym etapie zlecić sprawdzenie: przed rezerwacją, umową przedwstępną czy aktem notarialnym?',
        a: 'Przed pierwszą umową, przy której płacisz: rezerwacyjną u dewelopera albo przedwstępną z zadatkiem. Wtedy zapisy o zwrocie pieniędzy, terminach i karach są jeszcze do negocjacji. Po podpisie sprawdzenie przed aktem przenoszącym własność nadal pokaże, czego możesz żądać.',
      },
      {
        q: 'Mieszkanie od dewelopera czy z rynku wtórnego: co sprawdza się inaczej?',
        a: 'Od dewelopera kupujesz zwykle lokal, którego jeszcze nie ma. Liczą się wtedy umowa, prospekt informacyjny i harmonogram wpłat na rachunek powierniczy (art. 8 ust. 1–2 i art. 21 ust. 1 u.d.). Na rynku wtórnym sprawdzasz księgę wieczystą i dokument, z którego sprzedający ma własność.',
      },
      {
        q: 'Kupuję działkę budowlaną. Co zmieniło się po 1.09.2026?',
        a: 'Jeżeli działka nie ma planu miejscowego, WZ z wniosku złożonego od 1.09.2026 urząd wyda tylko w gminie z obowiązującym planem ogólnym (art. 59 ust. 3 ustawy z 7.07.2023). Od 1.01.2027 WZ z nowego wniosku będzie wydawana tylko wnioskodawcy, który ma prawo do dysponowania działką na cele budowlane (art. 63 ust. 1a u.p.z.p.). Przed zadatkiem sprawdź w BIP gminy plan ogólny i ustal w umowie przedwstępnej los zadatku na wypadek odmowy WZ.',
      },
      {
        q: 'Ile trwa sprawdzenie przed zakupem, gdy podpis jest za kilka dni?',
        a: 'Analiza księgi wieczystej i umowy: zwykle 2–4 dni robocze. Pełny audyt działki z planowaniem przestrzennym: 5–7 dni. Datę podpisu albo przelewu podaj w formularzu: sprawdzę, czy zdążę przed nią, i termin wpiszę do oferty.',
      },
      {
        q: 'Co, jeśli sprawdzenie wykaże problem?',
        a: 'Dostajesz propozycję, co z tym zrobić, a nie samo „jest ryzyko”: zmianę zapisu, warunek w umowie albo dokument od sprzedającego przed podpisem. Problem, który obniża wartość zakupu, to argument do negocjacji ceny. Przy poważnym piszę wprost, że bez zmian bym nie podpisał; decyzję podejmujesz Ty.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 5, 6, 25 ust. 1, 65 ust. 1',
          act: 'Ustawa o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'rękojmia wiary publicznej ksiąg wieczystych, cztery działy księgi i hipoteka',
        },
        {
          ref: 'art. 99, 158, 199, 389, 390, 394, 1027',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'forma umowy i pełnomocnictwa, współwłasność, umowa przedwstępna, zadatek, dowód dziedziczenia',
        },
        {
          ref: 'art. 5 pkt 6, 8, 21, 29, 30, 32, 34, 40, 42, 43',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz o Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'umowa rezerwacyjna, prospekt informacyjny, umowa deweloperska, rachunek powierniczy',
        },
        {
          ref: 'art. 61 ust. 1 pkt 2, art. 63 ust. 1a',
          act: 'Ustawa o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538 (art. 63 ust. 1a dodany ustawą z 30.04.2026, Dz.U. 2026 poz. 781, od 1.01.2027)',
          eli: 'DU/2003/717',
          note: 'dostęp do drogi publicznej jako warunek WZ; prawo do dysponowania działką od 1.01.2027',
        },
        {
          ref: 'art. 59 ust. 3',
          act: 'Ustawa z 7.07.2023 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm. (bez tekstu jednolitego)',
          eli: 'DU/2023/1688',
          note: 'WZ z wniosków złożonych od 1.09.2026 tylko w gminie z planem ogólnym',
        },
        {
          ref: 'art. 2a ust. 1 i ust. 3 pkt 1a',
          act: 'Ustawa o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'kto może kupić nieruchomość rolną i wyjątek dla nieruchomości mniejszej niż 1 ha',
        },
      ],
    },
    guides: ['warunki-zabudowy-2026-lublin', 'zniesienie-sluzebnosci-przesylu-nieistniejaca-linia'],
    seeAlso: ['droga-konieczna', 'warunki-zabudowy', 'nieruchomosci-rolne'],
    cta: {
      heading: 'Nie podpisuj w ciemno.',
      lead: 'Prześlij numer księgi wieczystej, etap zakupu i umowę, jeśli ją masz. W 24 h roboczych bezpłatnie odpiszę, co trzeba sprawdzić przed podpisem, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'transakcje-umowy': {
    h1: 'Transakcje i umowy',
    topic: 'Transakcje nieruchomościami',
    subtitle: 'Kupujesz, sprzedajesz albo przepisujesz mieszkanie w rodzinie i nie wiesz, czy umowa od drugiej strony Cię chroni? Obsługa prawna transakcji nieruchomości to projekt umowy, negocjacje i sprawdzenie aktu notarialnego przed podpisem, wyłącznie w Twoim interesie. Wskazuję, która z sześciu usług pasuje do Twojej sytuacji, i zaczynam przed zadatkiem albo przed terminem u notariusza.',
    short: {
      q: 'Po co prawnik przy zakupie albo sprzedaży, skoro akt sporządza notariusz?',
      a: 'Notariusz ma czuwać nad słusznymi interesami wszystkich stron aktu, a nie tylko Twoimi (art. 80 § 2 Prawa o notariacie). Pracuję wyłącznie dla Ciebie i zaczynam wcześniej: przed zadatkiem, przy projekcie umowy i w negocjacjach. Akt notarialny jest obowiązkowy przy sprzedaży, darowiźnie i dożywociu nieruchomości (art. 158 k.c.); którą usługę wybrać, pokazuje tabela.',
      facts: [
        [
          'Boisz się zapłacić, zanim trafisz do księgi wieczystej',
          'notariusz składa wniosek o wpis Twojej własności nie później niż w dniu aktu (art. 92 § 4 Prawa o notariacie). Usługa: Kompleksowa obsługa zakupu nieruchomości',
        ],
        [
          'Sprzedajesz i chcesz pieniędzy przed wydaniem kluczy',
          'bez innego zapisu w umowie cenę i klucze strony wymieniają w tym samym czasie (art. 488 § 1 k.c.). Usługa: Kompleksowa obsługa sprzedaży nieruchomości',
        ],
        [
          'Druga strona przysłała swój projekt umowy',
          'umowa powstaje dopiero po uzgodnieniu każdego negocjowanego punktu (art. 72 § 1 k.c.). Usługa: Negocjacje na rynku nieruchomości',
        ],
        [
          'Przepisujesz mieszkanie na dziecko albo chcesz cofnąć darowiznę',
          'darowiznę odwołasz, jeżeli obdarowany dopuścił się wobec Ciebie rażącej niewdzięczności (art. 898 § 1 k.c.). Usługa: Darowizna nieruchomości i jej odwołanie',
        ],
        [
          'Oddajesz mieszkanie w zamian za opiekę do końca życia',
          'nabywca dostaje je obciążone prawem dożywocia (art. 910 § 1 k.c.). Usługa: Umowa dożywocia, renta, odwrócona hipoteka',
        ],
        [
          'Kupujesz mieszkanie do remontu i odsprzedaży',
          'sprzedając, odpowiadasz wobec kupującego z rękojmi za wady (art. 556 k.c.). Usługa: Flip mieszkania — zakup i odsprzedaż',
        ],
      ],
    },
    introHeading: 'Umowa sprzedaży mieszkania to podział ryzyka, nie formalność',
    intro: 'Umowa dotycząca nieruchomości rozstrzyga na lata, kto traci zadatek, kto płaci karę za opóźnienie, kto odpowiada za wady i co się dzieje, gdy bank nie da kredytu albo druga strona zmieni zdanie. Większość sporów, które trafiają do mnie później, wynika z jednego niedopisanego zdania. Dlatego pracuję na etapie, gdy to zdanie można jeszcze dopisać. Umowa sprzedaży, darowizny albo dożywocia co do zasady przenosi własność już przy podpisie aktu (art. 155 § 1 k.c.), więc każde ustalenie musi trafić do projektu przed terminem u notariusza.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Termin u notariusza się zbliża, a Ty nie wiesz, co podpisujesz',
    when: [
      {
        b: 'Notariusz wyznaczył termin aktu, a Ty jeszcze nie przeczytałeś projektu.',
        t: 'Przed podpisem notariusz odczyta akt i sprawdzi, czy rozumiesz jego treść (art. 94 § 1 Prawa o notariacie). Poprawki wysyłam mu wcześniej, żeby dzień aktu nie był dniem negocjacji.',
      },
      {
        b: 'Masz wpłacić zadatek przy podpisaniu umowy przedwstępnej.',
        t: 'Jeżeli umowa nie stanowi inaczej, a jedna strona jej nie wykona, druga może odstąpić i zatrzymać otrzymany zadatek albo, jeśli sama go dała, żądać zwrotu dwukrotności (art. 394 § 1 k.c.). Gdy za niewykonanie nie odpowiada żadna strona, zadatek wraca (art. 394 § 3), a zaliczki ten przepis w ogóle nie dotyczy.',
      },
      { b: 'Zakup zależy od kredytu, sprzedaży innego mieszkania albo decyzji urzędu.', t: 'Warunek wpisujemy do umowy zobowiązującej, bo samej własności nieruchomości nie przenosi się pod warunkiem (art. 157 k.c.).' },
      {
        b: 'Rodzice chcą przepisać na Ciebie mieszkanie i mieszkać w nim do końca życia.',
        t: 'Dożywocie co do zasady obejmuje mieszkanie dla rodziców i obciąża lokal także po jego sprzedaży (art. 908 § 1 i art. 910 k.c.). Prawo do konkretnego lokalu daje służebność mieszkania: przy dożywociu wchodzi do treści tego prawa (art. 908 § 2), przy darowiźnie ustanawia się ją osobno (art. 296 i 301 k.c.).',
      },
    ],
    lists: [
      {
        eyebrow: 'Koszty u notariusza (nie honorarium)',
        title: 'Podatek, opłata sądowa i taksa przy sprzedaży, darowiźnie i dożywociu',
        kind: 'check',
        items: [
          {
            b: 'Sprzedaż',
            t: 'PCC 2% wartości rynkowej, płaci kupujący (art. 4 pkt 1, art. 6 ust. 1 pkt 1 i art. 7 ust. 1 pkt 1 lit. a u.p.c.c.). Co do zasady bez PCC, jeżeli sprzedaż jest opodatkowana VAT, np. zakup od dewelopera (art. 2 pkt 4 lit. a). Zwolniona jest też osoba fizyczna, która kupuje mieszkanie albo dom i nie miała dotąd mieszkania, domu ani spółdzielczego prawa do nich, także w udziale; nie przeszkadza udział do 50% nabyty w spadku (art. 9 pkt 17).',
          },
          { b: 'Umowa dożywocia', t: 'nabywca mieszkania albo domu płaci PCC 2% jego wartości rynkowej (art. 4 pkt 4, art. 6 ust. 1 pkt 4 i art. 7 ust. 1 pkt 2 lit. a u.p.c.c.).' },
          {
            b: 'Darowizna',
            t: 'najbliższa rodzina (m.in. dzieci, rodzice, rodzeństwo, małżonek) nie płaci podatku od spadków i darowizn, a przy akcie notarialnym nie zgłasza darowizny do urzędu skarbowego (art. 4a ust. 1 i ust. 4 pkt 2 u.p.s.d.).',
          },
          {
            b: 'Opłata sądowa (nie honorarium)',
            t: 'wniosek o wpis Ciebie jako właściciela w księdze wieczystej kosztuje 200 zł, a dla nieruchomości rolnej o powierzchni do 5 ha 150 zł (art. 42 ust. 1 i art. 43 pkt 2 u.k.s.c.). Opłatę pobiera notariusz przy akcie (art. 7 § 2 Prawa o notariacie). Stan na 10.10.2026.',
          },
          { b: 'Wynagrodzenie notariusza (taksa)', t: 'ustalasz je z notariuszem, najwyżej do maksymalnej stawki taksy dla danej czynności (art. 5 § 1 Prawa o notariacie). Kwot nie podaję, bo to nie opłata publiczna.' },
        ],
      },
    ],
    faq: [
      {
        q: 'Czy notariusz może odmówić sporządzenia aktu?',
        a: 'Tak, i musi, jeżeli czynność byłaby sprzeczna z prawem (art. 81 Prawa o notariacie). Na pisemne żądanie złożone w tygodniu od odmowy notariusz sporządza uzasadnienie (art. 82). Na odmowę przysługuje zażalenie do sądu okręgowego (art. 83 § 1). Dlatego dokumenty uzgadniam z notariuszem przed terminem.',
      },
      {
        q: 'Darowizna, dożywocie czy sprzedaż: jak przekazać mieszkanie w rodzinie?',
        a: 'Zacznij od tego, co chcesz dostać w zamian. Przy darowiźnie nic, przy dożywociu utrzymanie do końca życia, przy sprzedaży cenę (art. 888 § 1, 908 § 1, 535 k.c.). Darowizna dla najbliższej rodziny jest zwolniona z podatku. Od dożywocia płaci się PCC 2%, od sprzedaży co do zasady też, a zwolnienia opisuje tabela wyżej. Darowizna zwiększa podstawę zachowku, bo dolicza się ją do spadku (art. 993 § 1 k.c.).',
      },
      {
        q: 'Kupuję ziemię rolną. Co sprawdzić przed umową u notariusza?',
        a: 'Najpierw sprawdź, czy możesz być nabywcą: jeżeli ustawa nie przewiduje wyjątku, kupującym nieruchomość rolną może być wyłącznie rolnik indywidualny (art. 2a ust. 1 u.k.u.r.). Nabycie wbrew ustawie jest nieważne (art. 9 ust. 1). Wyjątki, progi powierzchni i pierwokup KOWR opisuję na stronie o nieruchomościach rolnych.',
      },
      {
        q: 'Notariusz przysłał projekt aktu dzień przed terminem. Zdążysz?',
        a: 'Zwykle tak, jeżeli napiszesz od razu: sprawdzenie projektu aktu to kilka godzin pracy. Zaznacz w formularzu, że sprawa jest pilna, i podaj datę aktu. Następnym razem poproś o projekt wcześniej: notariusz sporządza projekty aktów na żądanie stron (art. 79 pkt 8 Prawa o notariacie).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 72, 155, 157, 158, 296, 301, 394, 488, 535, 556, 888, 898, 908, 910, 993',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'forma i skutki sprzedaży, darowizny i dożywocia, zadatek, odwołanie darowizny',
        },
        { ref: 'art. 5, 7, 79, 80, 81–83, 92 § 4, 94', act: 'Prawo o notariacie', tj: 'Dz.U. 2026 poz. 614', eli: 'DU/1991/91', note: 'obowiązki notariusza przy akcie i wniosek o wpis' },
        {
          ref: 'art. 2 pkt 4 lit. a, art. 4, 6, 7, 9 pkt 17',
          act: 'Ustawa o podatku od czynności cywilnoprawnych',
          tj: 'Dz.U. 2026 poz. 191',
          eli: 'DU/2000/959',
          note: 'PCC przy sprzedaży i dożywociu, wyłączenie przy VAT, zwolnienie przy pierwszym mieszkaniu',
        },
        { ref: 'art. 4a', act: 'Ustawa o podatku od spadków i darowizn', tj: 'Dz.U. 2026 poz. 478', eli: 'DU/1983/207', note: 'zwolnienie najbliższej rodziny' },
        { ref: 'art. 42, 43', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłata od wniosku o wpis własności' },
        { ref: 'art. 2a, 9', act: 'Ustawa o kształtowaniu ustroju rolnego', tj: 'Dz.U. 2026 poz. 941', eli: 'DU/2003/592', note: 'nabycie nieruchomości rolnej' },
      ],
    },
    guides: ['jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'zachowek', 'uregulowanie-stanu-prawnego'],
    cta: {
      heading: 'Jedno zdanie w umowie potrafi kosztować więcej niż cała obsługa prawna.',
      lead: 'Opisz, co kupujesz, sprzedajesz albo przekazujesz w rodzinie, i podaj datę u notariusza, jeżeli już jest. W 24 h roboczych bezpłatnie odpiszę, której usługi potrzebujesz (sprawdzenie projektu aktu, nowa umowa czy negocjacje), i wyślę ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'warunki-zabudowy-planowanie': {
    h1: 'Warunki zabudowy i planowanie przestrzenne: WZ, plan ogólny i plan miejscowy',
    topic: 'Planowanie przestrzenne',
    subtitle: 'Nie wiesz, czy na swojej działce jeszcze postawisz dom, bo gmina zmienia plan albo odmówiła Ci „wuzetki”. Warunki zabudowy (WZ) z wniosku od 1.09.2026 urząd wyda tylko w gminie, w której wszedł w życie plan ogólny (art. 59 ust. 3 ustawy z 7.07.2023). Ustalam, która procedura dotyczy Twojej działki, i prowadzę sprawę w urzędzie, radzie gminy albo sądzie administracyjnym.',
    short: {
      q: 'Która procedura dotyczy mojej działki: WZ, plan miejscowy czy plan ogólny?',
      a: 'Najpierw sprawdź, czy działkę obejmuje plan miejscowy (art. 4 ust. 1 u.p.z.p.). Jeżeli tak, budujesz według niego także po wejściu w życie planu ogólnego (art. 34 ust. 1a). Jeżeli nie, potrzebujesz decyzji o warunkach zabudowy, a jej podstawą prawną jest plan ogólny gminy (art. 59 ust. 1, art. 13a ust. 5).',
      facts: [
        [
          'Brak planu miejscowego, chcesz budować',
          'Wniosek o WZ; z wniosku od 1.09.2026 decyzja tylko tam, gdzie obowiązuje plan ogólny gminy (art. 59 ust. 3 ustawy z 7.07.2023). Usługa: Warunki zabudowy (WZ)',
        ],
        [
          'Gmina pracuje nad planem',
          'Wniosek w terminie z ogłoszenia (co najmniej 21 dni), potem uwaga w konsultacjach społecznych (art. 13i ust. 3 pkt 1, art. 17 pkt 1, art. 8i ust. 1 pkt 1 u.p.z.p.). Usługa: Plan ogólny gminy',
        ],
        [
          'Plan już uchwalony i blokuje Ci budowę',
          'Skarga do sądu administracyjnego, gdy uchwała narusza Twój interes prawny lub uprawnienie, np. prawo własności działki (art. 101 ust. 1 u.s.g.). Usługi: Plan ogólny gminy, Skarga na plan miejscowy (MPZP)',
        ],
        [
          'Plan obniżył wartość działki',
          'Odszkodowanie albo wykup ustawa o planowaniu przewiduje przy planie miejscowym, nie przy planie ogólnym (art. 36 ust. 1 i 3 u.p.z.p.). Usługa: Opłaty i odszkodowania planistyczne',
        ],
      ],
    },
    introHeading: 'Plan miejscowy, plan ogólny i WZ: co o czym decyduje',
    intro: 'O tym, co wolno zbudować na działce, rozstrzygają najczęściej trzy dokumenty: plan miejscowy (MPZP), plan ogólny gminy i decyzja o warunkach zabudowy. Plan ogólny dzieli gminę na strefy planistyczne i może wyznaczyć obszary uzupełnienia zabudowy (art. 13a ust. 4 u.p.z.p.). Gdy działka nie ma planu miejscowego, urząd wyda WZ na nowy budynek co do zasady wyłącznie w takim obszarze (art. 61 ust. 1 pkt 1a). Oba plany możesz przejrzeć sam: każdy ma prawo do nich wglądu i do wypisu (art. 30 ust. 1).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Gmina zmienia plan, urząd odmawia „wuzetki” albo kupujesz działkę pod dom',
    when: [
      {
        b: 'Sąsiad słyszał w gminie, że w nowym planie Twoja działka dostanie zakaz zabudowy, a Ty nie wiesz, o który plan chodzi.',
        t: 'Sposoby, miejsca i terminy konsultacji społecznych wójt ogłasza m.in. w BIP urzędu (art. 8h ust. 1 pkt 3 u.p.z.p.). Uwagę składasz na formularzu, papierowo albo mailem (art. 8g ust. 1).',
      },
      { b: 'Urząd odmówił WZ albo od miesięcy nie wydaje decyzji.', t: 'Na odmowę służy odwołanie, a na przewlekłość postępowania ponaglenie (art. 127 § 1, art. 37 § 1 pkt 2 k.p.a.).' },
      {
        b: 'Kupujesz działkę „pod dom”, a sprzedający pokazuje decyzję WZ.',
        t: 'WZ nie daje praw do terenu (art. 63 ust. 2 u.p.z.p.), a urząd stwierdza jej wygaśnięcie m.in. wtedy, gdy na tym terenie pozwolenie na budowę uzyskał inny wnioskodawca (art. 65 ust. 1 pkt 1). Sprawdza to audyt stanu prawnego nieruchomości.',
      },
      {
        b: 'Planujesz na gruncie rolnym domy, magazyn albo farmę fotowoltaiczną.',
        t: 'WZ wymaga, żeby teren nie potrzebował zgody na zmianę przeznaczenia gruntów rolnych na cele nierolnicze (art. 61 ust. 1 pkt 4 u.p.z.p.); tym zajmuje się usługa Odrolnienie.',
      },
    ],
    lists: [
      {
        eyebrow: 'Daty reformy',
        title: 'Co zmieniło się 1.09.2026 i co zmieni się 1.01.2027: kalendarz reformy',
        intro: 'Stan prawny na 10.10.2026, od najstarszej daty.',
        kind: 'check',
        items: [
          { b: '16.10.2025', t: 'sprawy o WZ wszczęte przed tym dniem kończą się decyzją bez terminu ważności (art. 62 ustawy z 7.07.2023).' },
          { b: '1.01.2026', t: 'WZ, która uprawomocniła się od tego dnia w sprawie wszczętej od 16.10.2025, wygasa 5 lat po uprawomocnieniu (art. 64c u.p.z.p.).' },
          {
            b: '31.08.2026',
            t: 'ostatni dzień, w którym mogły obowiązywać studia uwarunkowań; w sprawach o WZ wszczętych przed utratą mocy studium nie wymaga się obszaru uzupełnienia zabudowy (art. 65 ust. 1, art. 59 ust. 2 pkt 2 ustawy z 7.07.2023).',
          },
          { b: '1.09.2026', t: 'wniosek o WZ złożony od tego dnia może zakończyć się wydaniem WZ tylko w gminie, w której obowiązuje plan ogólny (art. 59 ust. 3 ustawy z 7.07.2023).' },
          {
            b: '1.01.2027',
            t: 'w sprawach o WZ wszczętych od tego dnia (liczy się wpływ wniosku do urzędu) decyzję dostanie tylko osoba z prawem do dysponowania działką na cele budowlane (art. 63 ust. 1a u.p.z.p.; art. 61 § 3 k.p.a.); spraw wszczętych wcześniej ten wymóg nie dotyczy (art. 12 ustawy z 30.04.2026).',
          },
        ],
      },
      {
        eyebrow: 'Jak pracuję',
        title: 'Co robię przed wnioskiem, w konsultacjach planu i po decyzji',
        kind: 'deliverables',
        items: [
          'Sprawdzam plan miejscowy, plan ogólny albo jego projekt, decyzje WZ w okolicy, klasę gruntu i dostęp do drogi publicznej. Taka analiza planistyczna trwa orientacyjnie 5–7 dni roboczych.',
          'Wskazuję jedną ścieżkę: WZ, udział w pracach nad planem albo skargę, i pilnuję jej terminów.',
          'Reprezentuję Cię przed samorządowym kolegium odwoławczym, wojewodą i sądami administracyjnymi.',
        ],
      },
    ],
    faq: [
      {
        q: 'Mam WZ sprzed reformy. Czy nadal jest ważna?',
        a: 'Tak, jeżeli stała się prawomocna przed 1.01.2026 albo zapadła w sprawie wszczętej przed 16.10.2025: wtedy nie wygasa po 5 latach (art. 62 ustawy z 7.07.2023, art. 64c u.p.z.p.). Urząd może jednak stwierdzić wygaśnięcie każdej WZ z przyczyn z art. 65 ust. 1 u.p.z.p., np. gdy nowy plan miejscowy ustalił dla terenu coś innego.',
      },
      {
        q: 'Jak sprawdzić, czy w mojej gminie obowiązuje już plan ogólny?',
        a: 'Znajdź uchwałę rady gminy o planie ogólnym w dzienniku urzędowym województwa i sprawdź wpisany w niej dzień wejścia w życie. Ten dzień przypada co najmniej 14 dni po ogłoszeniu uchwały (art. 29 ust. 1 u.p.z.p.). Do tego dnia urząd nie wyda WZ z wniosku złożonego od 1.09.2026 (art. 59 ust. 3 ustawy z 7.07.2023).',
      },
      {
        q: 'Nie zgadzam się z decyzją o WZ albo z planem. Gdzie to zaskarżę i w jakim terminie?',
        a: 'Od decyzji o WZ wnosisz odwołanie do samorządowego kolegium odwoławczego; masz na to 14 dni od doręczenia (art. 17 pkt 1, art. 129 § 2 k.p.a.). Skargę na plan ogólny albo miejscowy wnosisz do sądu administracyjnego w każdym czasie, jeżeli plan narusza Twój interes prawny lub uprawnienie (art. 101 ust. 1 u.s.g., art. 53 § 2a p.p.s.a.).',
      },
      {
        q: 'Gmina chce przeznaczyć moją działkę pod zieleń albo rolnictwo. Kiedy mogę zareagować?',
        a: 'W trzech momentach. Po ogłoszeniu o przystąpieniu do planu składasz wniosek w terminie nie krótszym niż 21 dni (art. 13i ust. 3 pkt 1, art. 17 pkt 1 u.p.z.p.). Gdy projekt trafi do konsultacji społecznych, składasz uwagę (art. 8i ust. 1 pkt 1). Po uchwaleniu zostaje skarga do sądu administracyjnego (art. 101 ust. 1 u.s.g.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 4, 8g–8i, 13a, 13i, 14, 17, 29, 30, 34, 36, 59, 61, 63–65 u.p.z.p.',
          act: 'Ustawa o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538',
          eli: 'DU/2003/717',
          note: 'plany, konsultacje społeczne, warunki zabudowy i ich ważność; art. 8g ust. 1 w brzmieniu z Dz.U. 2026 poz. 781',
        },
        {
          ref: 'art. 59 ust. 2–3, art. 62, art. 65 ust. 1',
          act: 'Ustawa z 7.07.2023 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm. (bez tekstu jednolitego)',
          eli: 'DU/2023/1688',
          note: 'przepisy przejściowe reformy',
        },
        {
          ref: 'art. 1 pkt 21, art. 12, art. 15 pkt 4',
          act: 'Ustawa z 30.04.2026 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2026 poz. 781',
          eli: 'DU/2026/781',
          note: 'WZ tylko z prawem do dysponowania działką w sprawach wszczętych od 1.01.2027',
        },
        { ref: 'art. 101 ust. 1', act: 'Ustawa o samorządzie gminnym', tj: 'Dz.U. 2026 poz. 662', eli: 'DU/1990/95', note: 'skarga na uchwałę rady gminy' },
        { ref: 'art. 3 § 2 pkt 5, art. 53 § 2a', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'skarga na akt prawa miejscowego bez terminu' },
        { ref: 'art. 17, 37, 61, 127, 129', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'wszczęcie sprawy, odwołanie do SKO i ponaglenie' },
      ],
    },
    guides: [
      'warunki-zabudowy-ile-wazne',
      'warunki-zabudowy-2026-lublin',
      'jak-przygotowac-sie-na-zmiany-w-planowaniu-przestrzennym',
    ],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'pozwolenie-na-budowe', 'odrolnienie'],
    cta: {
      heading: 'Sprawdźmy Twoją działkę, zanim zmienią się przepisy.',
      lead: 'Podaj gminę i numer działki, a w 24 h roboczych bezpłatnie odpiszę, którą procedurę trzeba sprawdzić i od czego zacząć. Razem z tym dostaniesz ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'proces-budowlany': {
    h1: 'Proces budowlany i samowole: pozwolenie, zgłoszenie, legalizacja, nadzór',
    topic: 'Proces budowlany',
    subtitle: 'Urząd odmówił pozwolenia, nadzór budowlany wstrzymał budowę albo wykonawca zostawił ją w połowie? Prawnik od prawa budowlanego pilnuje najpierw terminu: na odwołanie od decyzji masz co do zasady 14 dni od doręczenia (art. 129 § 2 k.p.a.). Po wstrzymaniu budowy na wniosek o legalizację masz 30 dni od doręczenia postanowienia (art. 48a ust. 1 Pb).',
    short: {
      q: 'Pozwolenie na budowę, zgłoszenie czy legalizacja: która procedura dotyczy mojej budowy?',
      a: 'Roboty budowlane zaczynasz co do zasady na podstawie pozwolenia na budowę, a wyjątki wymieniają art. 29–31 Pb (art. 28 ust. 1 Pb). Wolno stojący dom jednorodzinny, którego obszar oddziaływania mieści się w całości na Twojej działce, budujesz na zgłoszenie (art. 29 ust. 1 pkt 1 Pb). Budynek postawiony bez pozwolenia albo zgłoszenia legalizuje powiatowy inspektor nadzoru budowlanego (art. 48 ust. 1, art. 83 ust. 1 Pb).',
      facts: [
        [
          'Budowa, rozbudowa albo nadbudowa wymagająca pozwolenia',
          'Pozwolenie starosty, przy niektórych obiektach wojewody; urząd ma co do zasady 65 dni od złożenia wniosku (art. 28 ust. 1, art. 35 ust. 6, art. 82 ust. 2–3 Pb). Usługa: pozwolenie na budowę.',
        ],
        [
          'Wolno stojący dom, oddziaływanie tylko na Twojej działce',
          'Zgłoszenie; start, jeżeli starosta w 21 dni od doręczenia nie wniesie sprzeciwu. Dom o powierzchni zabudowy do 70 m², najwyżej dwukondygnacyjny, na własne potrzeby mieszkaniowe: start od doręczenia zgłoszenia (art. 29 ust. 1 pkt 1 i 1a, art. 30 ust. 5 i 5k Pb). Usługa: zgłoszenie budowy i robót.',
        ],
        [
          'Samowola, mniej niż 20 lat do wstrzymania budowy',
          'PINB wstrzymuje budowę; wniosek o legalizację w 30 dni od doręczenia, potem opłata legalizacyjna, bez wniosku nakaz rozbiórki (art. 48 ust. 1 i 3, art. 48a ust. 1, art. 49e Pb). Usługa: legalizacja samowoli budowlanej.',
        ],
        [
          'Budowa zakończona co najmniej 20 lat przed wstrzymaniem',
          'Uproszczone postępowanie legalizacyjne przed PINB; 20 lat musi upłynąć przed postanowieniem o wstrzymaniu budowy (art. 49f ust. 1 i 5 Pb). Usługa: legalizacja samowoli budowlanej.',
        ],
        [
          'Kontrola, wstrzymanie robót albo nakaz z nadzoru',
          'PINB, a w drugiej instancji WINB (art. 83 ust. 1–2 Pb). Usługa: reprezentacja przed nadzorem budowlanym.',
        ],
        [
          'Wykonawca spóźnia się, zostawił wady albo żąda zapłaty',
          'Spór z umowy o roboty budowlane rozstrzyga sąd powszechny, nie urząd (art. 647 k.c., art. 2 § 1 k.p.c.). Usługi: umowa o roboty budowlane, spory z wykonawcą.',
        ],
      ],
    },
    introHeading: 'Kto może zatrzymać Twoją budowę i na jakiej podstawie',
    intro: 'Budowa to ciąg decyzji administracyjnych, terminów i osób, które mogą ją zablokować: urząd, nadzór budowlany, sąsiad, wykonawca. Pozwolenia i zgłoszenia prowadzi co do zasady starosta, a kontrole i samowole powiatowy inspektor nadzoru budowlanego (art. 82 ust. 2, art. 83 ust. 1 Pb). Sąsiad jest stroną postępowania o pozwolenie, jeżeli jego działka leży w obszarze oddziaływania obiektu, czyli tam, gdzie przepisy ograniczają zabudowę z powodu Twojego budynku (art. 3 pkt 20, art. 28 ust. 2 Pb).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Nadzór wstrzymał budowę, urząd odmówił albo ekipa zeszła z budowy',
    when: [
      {
        b: 'Nadzór budowlany wstrzymał budowę, bo dom, garaż albo dobudówka stoją bez pozwolenia lub zgłoszenia.',
        t: 'Postanowienie musi informować o możliwości złożenia wniosku o legalizację, o opłacie legalizacyjnej i zasadach jej obliczania (art. 48 ust. 3 Pb).',
      },
      {
        b: 'Starosta odmówił pozwolenia na budowę albo wniósł sprzeciw od Twojego zgłoszenia.',
        t: 'Odwołanie kierujesz do wojewody, ale składasz je przez starostę, który wydał decyzję (art. 129 § 1 k.p.a., art. 82 ust. 3 Pb).',
      },
      {
        b: 'Sąsiad odwołał się od Twojego pozwolenia albo to Ty nie zgadzasz się na budowę za płotem.',
        t: 'Odwołanie wniesione w terminie co do zasady wstrzymuje wykonanie pozwolenia; wyjątek to rygor natychmiastowej wykonalności (art. 130 § 2–3 k.p.a.).',
      },
      {
        b: 'Projekt nie mieści się w jednym z przepisów techniczno-budowlanych i projektant mówi o odstępstwie.',
        t: 'Odstępstwo jest dopuszczalne tylko w przypadkach szczególnie uzasadnionych i po spełnieniu warunków zamiennych, a zgodę wydaje co do zasady starosta po upoważnieniu ministra (art. 9 ust. 1–2 Pb).',
      },
      { b: 'Wykonawca nie trzyma terminów, zostawił wady albo zszedł z budowy i żąda zapłaty.', t: 'Zanim zapłacisz ostatnią fakturę albo odstąpisz od umowy, sprawdź, co umowa mówi o odbiorach, karach i terminach.' },
    ],
    lists: [
      {
        eyebrow: 'Jak pracuję',
        title: 'Co robię w sprawie budowlanej, zanim minie termin',
        kind: 'deliverables',
        items: [
          'Piszę odwołania, zażalenia, wnioski o legalizację i odpowiedzi na wezwania. Reprezentuję Cię przed starostą, wojewodą, PINB, WINB i sądami administracyjnymi.',
          'Orientacyjny czas przygotowania odpowiedzi na wezwanie albo odwołania: 3–5 dni roboczych.',
          'W sporze z wykonawcą zaczynam od umowy, protokołów i zdjęć stanu robót, potem piszę wezwanie, a gdy ono nie wystarczy, pozew.',
        ],
      },
    ],
    faq: [
      {
        q: 'Dostałem pismo z nadzoru budowlanego. Jak sprawdzić, ile mam czasu?',
        a: 'Najczęściej 7, 14 albo 30 dni od doręczenia, zależnie od rodzaju pisma; inne terminy nadzór wyznacza w samym piśmie (np. art. 48b ust. 1 Pb). Pouczenie wskaże, czy to postanowienie z zażaleniem w 7 dni, czy decyzja z odwołaniem w 14 dni (art. 107 § 1, art. 124 § 1, art. 129 § 2, art. 141 § 2 k.p.a.). Po wstrzymaniu budowy na wniosek o legalizację masz 30 dni (art. 48a ust. 1 Pb). Zapisz datę doręczenia, zanim wyślesz wyjaśnienia.',
      },
      {
        q: 'Co grozi za samowolę budowlaną?',
        a: 'Wstrzymanie budowy, a bez wniosku o legalizację w terminie nakaz rozbiórki (art. 48 ust. 1, art. 49e pkt 1 Pb). Rozbiórkę nadzór nakazuje też, gdy nie przedłożysz dokumentów legalizacyjnych albo nie wniesiesz opłaty legalizacyjnej w wyznaczonym terminie (art. 49e pkt 3 i 5 Pb). Tryby legalizacji i opłatę opisuję na stronie legalizacji samowoli.',
      },
      {
        q: 'Spór z wykonawcą czy sprawa w urzędzie: kto rozstrzyga?',
        a: 'Spór z wykonawcą rozstrzyga sąd powszechny, bo to sprawa cywilna z umowy (art. 647 k.c., art. 2 § 1 k.p.c.). Pozwolenia i zgłoszenia rozpatruje co do zasady starosta, a w drugiej instancji wojewoda (art. 82 ust. 2–3 Pb). Samowole i nakazy rozpatruje PINB, a w drugiej instancji WINB (art. 83 ust. 1–2 Pb). Na decyzję drugiej instancji możesz w 30 dni od doręczenia wnieść skargę do sądu administracyjnego (art. 3 § 2 pkt 1, art. 53 § 1 p.p.s.a.).',
      },
      {
        q: 'Przegapiłem termin na odwołanie od decyzji budowlanej. Czy to koniec?',
        a: 'Nie zawsze: w 7 dni od ustania przyczyny możesz złożyć prośbę o przywrócenie terminu razem z odwołaniem (art. 58 § 1–2 k.p.a.). Warunek: uprawdopodobnisz, że termin minął bez Twojej winy. Wznowienie postępowania i nieważność decyzji wchodzą w grę tylko z przyczyn wymienionych w ustawie (art. 145 § 1, art. 156 § 1 k.p.a.). Nieważności pozwolenia na budowę nie stwierdza się po 5 latach od jego doręczenia (art. 37b ust. 1 Pb).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 3 pkt 20, art. 9, 28–30, 35 ust. 6, 37b, 48–49f, 82–83 Pb',
          act: 'Ustawa z dnia 7 lipca 1994 r. – Prawo budowlane',
          tj: 'Dz.U. 2026 poz. 524',
          eli: 'DU/1994/414',
          note: 'Pozwolenie, zgłoszenie, odstępstwo, legalizacja samowoli i organy.',
        },
        {
          ref: 'art. 58, 107, 124, 129, 130, 141, 145 i 156 k.p.a.',
          act: 'Kodeks postępowania administracyjnego',
          tj: 'Dz.U. 2025 poz. 1691',
          eli: 'DU/1960/168',
          note: 'Pouczenie, odwołanie, zażalenie, przywrócenie terminu, wznowienie i nieważność.',
        },
        { ref: 'art. 3 § 2 pkt 1 i art. 53 § 1 p.p.s.a.', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'Skarga do sądu administracyjnego w 30 dni.' },
        { ref: 'art. 647 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Umowa o roboty budowlane.' },
        { ref: 'art. 2 § 1 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Sąd powszechny w sprawach cywilnych.' },
      ],
    },
    guides: ['przebudowa-czy-nowy-zjazd-nsa'],
    seeAlso: ['warunki-zabudowy', 'droga-konieczna', 'obsluga-prawna-firm-budowlanych'],
    cta: {
      heading: 'Budowa nie może stać, bo urząd czeka na pismo.',
      lead: 'Prześlij decyzję, postanowienie z nadzoru budowlanego albo umowę z wykonawcą i napisz, kiedy je doręczono. W ciągu 24 h roboczych bezpłatnie odpiszę, co trzeba zrobić (np. odwołanie, wniosek o legalizację albo pozew), i wyślę ofertę z ceną i terminem tej pracy; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'ksiegi-wieczyste-stan-prawny': {
    h1: 'Księgi wieczyste i stan prawny nieruchomości: wpisy, zasiedzenie, użytkowanie wieczyste',
    topic: 'Księga wieczysta',
    servicesHeading: 'Trzy rodzaje spraw: zasiedzenie, porządek we wpisach, użytkowanie wieczyste',
    subtitle: 'Dom po rodzicach nie ma księgi wieczystej, w księdze figuruje zmarły właściciel albo płot stoi inaczej niż granica na mapie? Prawo wpisane w księdze wieczystej domniemywa się jako zgodne z rzeczywistym stanem prawnym, ale to domniemanie można obalić (art. 3 ust. 1 u.k.w.h.). Ustalam, czy wystarczy wniosek o wpis, czy potrzebny jest proces, zasiedzenie albo rozgraniczenie, i prowadzę sprawę do wpisu.',
    short: {
      q: 'Księga wieczysta, ewidencja gruntów i mapa podają co innego: który dokument rozstrzyga?',
      a: 'Co do zasady księga wieczysta, bo ustawa domniemywa, że wpisane w niej prawo jest zgodne z rzeczywistym stanem prawnym (art. 3 ust. 1 u.k.w.h.). Ewidencja gruntów służy do oznaczenia działki w księdze, a granicę ustala rozgraniczenie (art. 26 ust. 1 u.k.w.h., art. 29 p.g.k.). Masz dokument nabycia: wystarczy wniosek o wpis; nie masz: proces albo zasiedzenie (art. 31 ust. 2 i art. 10 ust. 1 u.k.w.h., art. 172 k.c.).',
      facts: [
        ['Księga wieczysta', 'Własność, służebności, hipoteki (art. 25 ust. 1 u.k.w.h.)'],
        [
          'Ewidencja gruntów i budynków',
          'Położenie, granice, powierzchnia działki i numer jej księgi; prowadzi starosta (art. 20 ust. 1 pkt 1, art. 7d p.g.k.)',
        ],
        [
          'Akt notarialny, postanowienie sądu, akt poświadczenia dziedziczenia',
          'Podstawa wniosku o wpis (art. 626² § 3 k.p.c.). Usługa: Uregulowanie stanu prawnego nieruchomości',
        ],
        [
          'Płot, miedza, mapa',
          'Granicę ustala w rozgraniczeniu wójt, burmistrz albo prezydent miasta; bez ugody i podstaw do decyzji sprawę przejmuje sąd (art. 29 ust. 3, art. 34 p.g.k.)',
        ],
        [
          'Samo posiadanie',
          'Domniemanie z posiadania ustępuje wpisowi (art. 4 u.k.w.h.); po 20 albo 30 latach może dać zasiedzenie (art. 172 k.c.). Usługa: Zasiedzenie nieruchomości',
        ],
        [
          'Odpis księgi z internetu (od 31.03.2026)',
          'Plik i jego wydruk mają moc dokumentu wydawanego przez sąd, jeżeli da się je sprawdzić w centralnej bazie (art. 36⁴ ust. 4 u.k.w.h.)',
        ],
      ],
    },
    introHeading: 'Co pokazuje wpis i co zrobić, gdy nie zgadza się z rzeczywistością',
    intro: 'Księgi wieczyste prowadzą sądy rejonowe i są jawne, więc nikt nie może zasłaniać się nieznajomością wpisu (art. 2 i 23 u.k.w.h.). Wpis nie zawsze nadąża za życiem: spadkobierca jest właścicielem od chwili śmierci spadkodawcy, choć w księdze dalej figuruje zmarły (art. 922 § 1 k.c.). Ustalam, jakie dokumenty istnieją, czego brakuje i którą drogą, wieczystoksięgową, sądową czy administracyjną, doprowadzić księgę do zgodności z rzeczywistością.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Dom po rodzicach, przesunięty płot, pismo z gminy: która sprawa jest Twoja',
    when: [
      {
        b: 'Wójt albo burmistrz wydał decyzję o rozgraniczeniu, a Twoim zdaniem granica biegnie gdzie indziej.',
        t: 'Masz 14 dni od doręczenia decyzji, żeby zażądać, by granicę ustalił sąd (art. 33 ust. 3 p.g.k.). Wynik trafia z urzędu do księgi i ewidencji (art. 37 ust. 2).',
      },
      {
        b: 'Przyszło pismo z urzędu, że opłata za grunt w użytkowaniu wieczystym będzie wyższa.',
        t: 'To wypowiedzenie opłaty: w 30 dni od jego otrzymania możesz złożyć wniosek do samorządowego kolegium odwoławczego (art. 78 ust. 1–2 u.g.n.). To sprawa z zakresu użytkowania wieczystego.',
      },
      {
        b: 'Chcesz sprzedać dom po rodzicach, który nie ma księgi wieczystej.',
        t: 'Notariusz złoży wniosek o wpis kupującego także wtedy, gdy księgi nie było (art. 92 § 4 Prawa o notariacie). Najpierw potrzebny jest dowód dziedziczenia z sądu albo od notariusza (art. 1025 § 1 i art. 1027 k.c.), czyli uregulowanie stanu prawnego.',
      },
      {
        b: 'Notariusz albo bank zauważył, że numer lub powierzchnia działki w księdze nie zgadza się z ewidencją.',
        t: 'Błąd w ewidencji poprawia starosta (art. 24 ust. 2a p.g.k.), a oznaczenie w księdze sąd prostuje według ewidencji, na wniosek albo z urzędu (art. 27 u.k.w.h.). Tym też zajmuje się uregulowanie stanu prawnego.',
      },
      {
        b: 'Od 30 lat kosisz i ogradzasz pas łąki przy domu, a w księdze ta część należy do sąsiada.',
        t: 'Własność mogłeś nabyć przez zasiedzenie: po 20 latach posiadania samoistnego, czyli jak właściciel, a przy złej wierze po 30 (art. 172 i 336 k.c.). Księgę zmienia orzeczenie sądu o zasiedzeniu (art. 31 ust. 2 u.k.w.h.).',
      },
    ],
    lists: [
      {
        eyebrow: 'Jak pracuję',
        title: 'Od odpisu księgi do wpisu: co robię w sprawie o stan prawny',
        kind: 'deliverables',
        items: [
          'Czytam wszystkie działy księgi i jej akta z dokumentami dotyczącymi nieruchomości (art. 28 u.k.w.h.).',
          'Zestawiam księgę z ewidencją, aktami notarialnymi, postanowieniami spadkowymi i aktami własności ziemi, a potem ustalam, czego brakuje i kto to wydaje.',
          'Piszę wniosek o wpis, pozew o uzgodnienie treści księgi albo wniosek o rozgraniczenie i reprezentuję Cię przed sądem, wójtem i starostą.',
          'W bezpłatnej wstępnej analizie wskazuję, która droga wchodzi w grę. Czytanie akt księgi i dokumentów to już zakres oferty.',
        ],
      },
    ],
    faq: [
      {
        q: 'Co zmieniło się w księgach wieczystych w 2026 r.?',
        a: 'Od 31.03.2026 r. moc dokumentu wydawanego przez sąd ma odpis albo wyciąg z księgi pobrany przez internet jako plik i jego wydruk (art. 36⁴ ust. 4 u.k.w.h.). Warunek: da się je sprawdzić w centralnej bazie danych ksiąg wieczystych. Wydruki sprzed tej daty zachowują moc (art. 3 ustawy z 9.01.2026 r.). Wydruk z bezpłatnego przeglądania księgi takiej mocy nie ma (art. 36⁴ ust. 7).',
      },
      {
        q: 'W księdze wpisany jest ktoś, kto nie jest właścicielem. Czym to grozi?',
        a: 'Tym, że sprzeda albo obciąży nieruchomość, a nabywca co do zasady zachowa nabyte prawo. Chroni go rękojmia wiary publicznej ksiąg wieczystych, gdy nabył odpłatnie i w dobrej wierze (art. 5 i 6 u.k.w.h.). Rękojmię wyłącza ostrzeżenie w księdze, wpisywane m.in. na podstawie postanowienia o zabezpieczeniu w sprawie o usunięcie niezgodności (art. 8 i art. 10 ust. 2).',
      },
      {
        q: 'Nie znam numeru księgi wieczystej. Jak go ustalić po numerze działki?',
        a: 'Z ewidencji gruntów i budynków, bo obejmuje ona oznaczenie ksiąg wieczystych (art. 20 ust. 1 pkt 1 p.g.k.). Udostępnienia informacji z ewidencji może żądać u starosty każdy (art. 24 ust. 4 p.g.k.). Dane właściciela starosta wydaje m.in. właścicielowi, osobie władającej działką i temu, kto ma interes prawny (art. 24 ust. 5).',
      },
      {
        q: 'Wniosek do sądu wieczystoksięgowego czy proces: od czego zacząć?',
        a: 'Od dokumentów, które masz. Gdy niezgodność wykazuje akt notarialny albo orzeczenie, wystarczy wniosek, bo sąd bada tylko wniosek, dokumenty i treść księgi (art. 626⁸ § 2 k.p.c.). Bez dokumentu zostaje proces (art. 10 ust. 1 u.k.w.h.) albo, po 20 lub 30 latach posiadania, zasiedzenie (art. 172 k.c.). Rozgraniczenie wójt przeprowadza na wniosek albo z urzędu (art. 30 ust. 1 p.g.k.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2–6, 8, 10, 23, 25–28, 31 i 36⁴ u.k.w.h.',
          act: 'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'Jawność, domniemanie z wpisu, rękojmia i ostrzeżenie, usunięcie niezgodności, oznaczenie nieruchomości, odpisy i wydruki (art. 36⁴ ust. 4 w brzmieniu ustawy z 9.01.2026 r., Dz.U. 2026 poz. 119, od 31.03.2026 r.; art. 3 tej ustawy).',
        },
        { ref: 'art. 626² i 626⁸ k.p.c.', act: 'Ustawa z dnia 17 listopada 1964 r. Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Wniosek o wpis i zakres badania przez sąd.' },
        {
          ref: 'art. 7d, 20, 24, 29, 30, 33, 34 i 37 p.g.k.',
          act: 'Ustawa z dnia 17 maja 1989 r. Prawo geodezyjne i kartograficzne',
          tj: 'Dz.U. 2024 poz. 1151',
          eli: 'DU/1989/163',
          note: 'Ewidencja gruntów i budynków, rozgraniczenie (art. 24 ust. 5 w brzmieniu ustawy Dz.U. 2023 poz. 1615).',
        },
        {
          ref: 'art. 172, 336, 922, 1025 i 1027 k.c.',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Zasiedzenie i posiadanie samoistne, dziedziczenie i dowód dziedziczenia.',
        },
        { ref: 'art. 92 § 4 Prawa o notariacie', act: 'Ustawa z dnia 14 lutego 1991 r. Prawo o notariacie', tj: 'Dz.U. 2026 poz. 614', eli: 'DU/1991/91', note: 'Wniosek notariusza o wpis, także bez księgi.' },
        { ref: 'art. 78 ust. 1–2 u.g.n.', act: 'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Wypowiedzenie opłaty rocznej i wniosek do SKO.' },
      ],
    },
    guides: [
      'zawyzony-podatek-od-nieruchomosci-blad-w-ewidencji',
      'zasiedzenie-sluzebnosci-drogi-po-30-latach',
    ],
    seeAlso: ['stwierdzenie-nabycia-spadku', 'obsluga-prawna-geodetow'],
    cta: {
      heading: 'Nieuregulowany stan prawny nie naprawi się sam.',
      lead: 'Podaj numer księgi wieczystej albo napisz, że jej nie ma, i opisz, co się nie zgadza. W 24 h roboczych bezpłatnie odpiszę, czy wystarczy wniosek o wpis, czy trzeba procesu albo rozgraniczenia, i wyślę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'wspolwlasnosc-podzialy': {
    h1: 'Współwłasność i sprawy działowe: wspólny dom po spadku albo rozwodzie',
    topic: 'Sprawy działowe',
    servicesHeading: 'Sprawy działowe, spadek i zachowek: rodzaje spraw',
    subtitle: 'Masz dom po rodzicach, mieszkanie po rozwodzie albo działkę kupioną z bratem i nie możesz dogadać się z pozostałymi? Sprawy działowe (zniesienie współwłasności, dział spadku, podział majątku po rozwodzie) możesz wszcząć wnioskiem do sądu, nawet gdy pozostali się nie zgadzają (art. 210 § 1 i art. 1037 § 1 k.c., art. 46 k.r.o.). Ustalam, która z nich jest Twoja, liczę spłaty i prowadzę ją u notariusza albo w sądzie.',
    short: {
      q: 'Zniesienie współwłasności, dział spadku czy podział majątku: która sprawa jest moja?',
      a: 'Decyduje to, skąd masz udział w nieruchomości. Spadek dzieli się w dziale spadku (art. 1037 k.c.), majątek po ustaniu wspólności małżeńskiej w podziale majątku (art. 46 k.r.o.), a resztę w zniesieniu współwłasności (art. 210 § 1 k.c.). Spadek i współwłasność z innego tytułu, np. z darowizny, sąd może podzielić w jednej sprawie (art. 689 k.p.c.).',
      facts: [
        [
          'Dom albo działka z zakupu lub darowizny',
          'Zniesienie współwłasności: żądać może każdy współwłaściciel, bez przedawnienia (art. 210 § 1 i art. 220 k.c.)',
        ],
        [
          'Dom po rodzicach, a spadkobierców jest kilku',
          'Dział spadku: umowa wszystkich albo sąd na żądanie każdego z nich (art. 1037 § 1 k.c.)',
        ],
        [
          'Mieszkanie kupione w czasie małżeństwa, po rozwodzie',
          'Podział majątku wspólnego, udziały co do zasady równe (art. 43 § 1 i art. 46 k.r.o.)',
        ],
        [
          'Nikt nie ma dokumentu, kto dziedziczy',
          'Stwierdzenie nabycia spadku: sąd albo notariusz (art. 1025 § 1 k.c.); w sprawie o dział spadku sąd stwierdza je sam (art. 681 k.p.c.)',
        ],
        [
          'Rodzic przekazał majątek innym, a Ciebie pominął',
          'Zachowek: roszczenie o pieniądze, nie o udział w domu (art. 991 § 2 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Zniesienie współwłasności i podział majątku 1000 zł, dział spadku 500 zł, dział ze zniesieniem 1000 zł; ze zgodnym projektem 300 zł, w sprawie łączonej 600 zł (art. 38, 41 i 51 u.k.s.c.; stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Co znaczy, że dom należy do kilku osób naraz',
    intro: 'Współwłasność oznacza, że ta sama rzecz należy niepodzielnie do kilku osób (art. 195 k.c.). Przy współwłasności w częściach ułamkowych (art. 196 § 1 k.c.) masz ułamek całego domu, a nie wybrane pokoje. Dom jako całość sprzedasz tylko razem z pozostałymi, bo rozporządzenie rzeczą wspólną wymaga co do zasady zgody każdego (art. 199 k.c.). Jedna osoba może więc zablokować sprzedaż całości, ale nie zniesienie współwłasności (art. 210 § 1 k.c.). Najpierw rachunek, potem emocje: ustalam udziały, nakłady, długi i to, kto ma pieniądze na spłatę. Sprawa sporna w sądzie trwa z mojej praktyki zwykle od roku, głównie przez opinię biegłego, więc zaczynam od porozumienia. Zgodny projekt obniża opłatę sądową (tabela wyżej), a sąd i tak nakłania do zgody (art. 622 § 1 k.p.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Rodzeństwo, były małżonek albo wspólnik blokuje decyzję o wspólnym domu',
    when: [
      {
        b: 'Sprawa o dział spadku już się toczy, ale czujesz, że idzie w złą stronę.',
        t: 'Skład i wartość spadku ustala sąd w tej sprawie (art. 684 k.p.c.). Nakłady i inne rozliczenia zgłaszasz w jej toku (pytanie o własne pieniądze niżej).',
      },
      {
        b: 'Dom po rodzicach odziedziczyłeś z rodzeństwem i nie ma zgody, co z nim zrobić.',
        t: 'Do działu dom należy do wszystkich spadkobierców wspólnie (art. 1035 k.c.). Tę wspólność kończy dział spadku: umowa u notariusza albo postanowienie sądu (art. 1037 § 1 k.c.).',
      },
      {
        b: 'Po rozwodzie została wspólna nieruchomość, często z kredytem hipotecznym.',
        t: 'Podział majątku nie zmienia umowy z bankiem, więc z kredytu zwolnić Cię może tylko bank (art. 508 i 519 § 2 k.c.). Sam podział przeprowadza się według odpowiednio stosowanych przepisów o dziale spadku (art. 46 k.r.o.).',
      },
      {
        b: 'Brat mieszka w domu, który rodzice przepisali Tobie i jemu, nie płaci podatku i utrudnia sprzedaż po złości.',
        t: 'Jego zgoda jest potrzebna do sprzedaży całego domu (art. 199 k.c.), a do wniosku o zniesienie współwłasności nie (art. 210 § 1 k.c.). Wobec gminy obowiązek podatkowy od nieruchomości ciąży na Tobie i bracie solidarnie (art. 3 ust. 4 u.p.o.l.), a z bratem rozliczasz podatek według udziałów (art. 207 k.c.).',
      },
    ],
    lists: [
      {
        eyebrow: 'Jak pracuję',
        title: 'Od udziałów w księdze do aktu notarialnego albo postanowienia sądu',
        kind: 'deliverables',
        items: [
          'Ustalam udziały i skład majątku: księga wieczysta, tytuł nabycia, stwierdzenie nabycia spadku albo wyrok rozwodowy.',
          'Liczę warianty podziału i spłat. Sprawdzam, czy osoba, która chce przejąć dom, ma z czego spłacić pozostałych.',
          'Przygotowuję umowę do aktu notarialnego albo zgodny wniosek. Bez porozumienia prowadzę sprawę w sądzie, zgłaszam rozliczenia i pilnuję wyceny biegłego (art. 278 § 1 k.p.c.).',
        ],
      },
    ],
    faq: [
      {
        q: 'Mogę sprzedać swój udział bez zgody pozostałych?',
        a: 'Tak, jeżeli to udział we współwłasności, np. z zakupu albo darowizny (art. 198 k.c.). Udział w samym domu ze spadku sprzedasz także bez zgody rodzeństwa. Jeżeli jednak choć jeden spadkobierca się nie zgodzi, umowa nie wiąże go w części naruszającej jego uprawnienia przy dziale (art. 1036 k.c.). Udział w całym spadku możesz zbyć po jego przyjęciu, w formie aktu notarialnego (art. 1051 i 1052 § 3 k.c.).',
      },
      {
        q: 'Kiedy wystarczy notariusz, a kiedy trzeba iść do sądu?',
        a: 'Notariusz wystarczy, jeżeli wszyscy współwłaściciele, spadkobiercy albo byli małżonkowie zgadzają się co do podziału i spłat. Przy nieruchomości umowa wymaga aktu notarialnego (art. 158 i art. 1037 § 2 k.c.). Bez zgody choćby jednej osoby zostaje sąd. Na wspólny wniosek wszystkich sąd wydaje postanowienie o jego treści. Odmówi, jeżeli projekt narusza prawo, zasady współżycia społecznego albo rażąco interes uprawnionych, a przy podziale działki także bez planu (art. 621 i 622 § 2 k.p.c.).',
      },
      {
        q: 'Włożyłem własne pieniądze we wspólny dom. Kiedy muszę to zgłosić?',
        a: 'W toku sprawy działowej. Po prawomocnym postanowieniu tych roszczeń już nie dochodzisz, nawet niezgłoszonych (art. 618 § 3 k.p.c.; przy spadku art. 688, po rozwodzie art. 567 § 3 k.p.c.). Przy spadku sąd rozlicza nakłady, pożytki i spłacone długi spadkowe (art. 686 k.p.c.), a po rozwodzie nakłady między majątkiem wspólnym a osobistym (art. 567 § 1 k.p.c.). Zbierz przelewy i faktury.',
      },
      {
        q: 'Współwłaściciel wynajmuje wspólny lokal i zatrzymuje cały czynsz. To legalne?',
        a: 'Nie. Czynsz to pożytek cywilny (art. 53 § 2 k.c.), a pożytki z rzeczy wspólnej przypadają współwłaścicielom według udziałów (art. 207 k.c.). Według udziałów dzieli się też wydatki, więc żądasz swojej części czynszu po odliczeniu kosztów lokalu. Od tego, kto zarządza lokalem, możesz też żądać rachunku z zarządu (art. 208 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 53, 158, 195–199, 207–210, 220, 508 i 519 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'współwłasność, zbycie udziału, zgoda na sprzedaż całości, pożytki i ciężary, zniesienie współwłasności, zwolnienie z długu',
        },
        {
          ref: 'art. 991, 1025, 1035–1037 i 1051–1052 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'zachowek, stwierdzenie nabycia spadku, wspólność spadku, dział spadku i zbycie udziału w spadku',
        },
        { ref: 'art. 43 i 46 k.r.o.', act: 'Kodeks rodzinny i opiekuńczy', tj: 'Dz.U. 2026 poz. 236', eli: 'DU/1964/59', note: 'równe udziały, podział majątku po ustaniu wspólności' },
        {
          ref: 'art. 278, 567, 618, 621–622, 681, 684, 686 i 688–689 k.p.c.',
          act: 'Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'postępowanie działowe, biegły, rozliczenia i ich termin, zgodny wniosek, łączenie spraw',
        },
        { ref: 'art. 38, 41 i 51 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty od wniosków w sprawach działowych' },
        { ref: 'art. 3 ust. 4 u.p.o.l.', act: 'Ustawa o podatkach i opłatach lokalnych', tj: 'Dz.U. 2025 poz. 707', eli: 'DU/1991/31', note: 'solidarny obowiązek podatkowy współwłaścicieli' },
      ],
    },
    guides: [],
    seeAlso: ['obsluga-sprzedazy', 'darowizna-nieruchomosci'],
    cta: {
      heading: 'Współwłasność da się zakończyć — bez wojny w rodzinie.',
      lead: 'Napisz, skąd masz udział (spadek, rozwód, zakup) i czego chcesz, a w 24 h roboczych bezpłatnie odpiszę, którą sprawę działową prowadzić i gdzie. W tej samej odpowiedzi podam w ofercie cenę i termin pracy; dopóki jej nie zaakceptujesz, nie płacisz nic.',
    },
    updated: '2026-10-10',
  },

  'najem': {
    h1: 'Najem nieruchomości: umowa, kaucja, czynsz i eksmisja',
    topic: 'Najem',
    subtitle: 'Lokator nie płaci, właściciel nie oddaje kaucji albo umowa najmu czeka na Twój podpis? Prowadzę sprawy najmu dla wynajmujących i najemców: umowa, kaucja, zaległy czynsz i eksmisja, nigdy dla obu stron jednej sprawy. Najem mieszkania chroni ustawa o ochronie praw lokatorów, a najem sklepu czy biura głównie umowa i Kodeks cywilny (art. 2 ust. 1 pkt 4 u.o.p.l.).',
    short: {
      q: 'Lokal mieszkalny czy użytkowy: które przepisy chronią najemcę?',
      a: 'Ustawa o ochronie praw lokatorów obejmuje lokal służący do mieszkania i pracownię twórcy, a nie sklep, biuro czy magazyn (art. 2 ust. 1 pkt 4 u.o.p.l.). Najemcy mieszkania przy zwykłym najmie daje m.in. zamkniętą listę przyczyn wypowiedzenia (art. 11 ust. 1) i orzeczenie o lokalu socjalnym w wyroku eksmisyjnym (art. 14 ust. 1). Przy zgłoszonym najmie okazjonalnym i przy instytucjonalnym tych dwóch przepisów się nie stosuje (art. 19e, 19j). Która usługa pasuje do Twojej sytuacji, pokazuje tabela.',
      facts: [
        [
          'Chcesz wynająć mieszkanie i odzyskać je bez procesu',
          'Najem okazjonalny z aktem notarialnym najemcy, zgłoszony do urzędu skarbowego w 14 dni (art. 19a ust. 2, art. 19b ust. 1 u.o.p.l.); usługa: bezpieczny najem',
        ],
        [
          'Masz podpisać umowę najmu mieszkania',
          'Umowa z prywatnym właścicielem może inaczej niż ustawa rozłożyć naprawy i odnowienie lokalu (art. 6f u.o.p.l.); usługa: analiza umowy najmu',
        ],
        [
          'Najemca nie płaci czynszu',
          'Mieszkanie: wypowiedzenie przy zaległości za 3 pełne okresy (art. 11 ust. 2 pkt 2 u.o.p.l.), lokal użytkowy: za 2 (art. 687 k.c.); w obu przypadkach po pisemnym uprzedzeniu z miesiącem na zapłatę; usługa: windykacja czynszu',
        ],
        [
          'Najem się skończył, a lokator nie wychodzi',
          'Zwykły najem: pozew o opróżnienie lokalu, całość zwykle od kilkunastu miesięcy do kilku lat (z mojej praktyki); zgłoszony najem okazjonalny: klauzula wykonalności do aktu najemcy, bez procesu (art. 19d ust. 4 u.o.p.l.); usługa: eksmisja',
        ],
        [
          'Właściciel nie oddaje kaucji za mieszkanie',
          'Na zwrot ma miesiąc od dnia opróżnienia lokalu; przy najmie okazjonalnym i instytucjonalnym potrąca z kaucji także koszty egzekucji opróżnienia (art. 6 ust. 4, art. 19a ust. 4–5, art. 19f ust. 4 i 6 u.o.p.l.); usługa: kaucja – rozliczenie i spory',
        ],
        [
          'Wynajem mieszkań to Twoja działalność gospodarcza',
          'Do wyboru masz najem instytucjonalny: umowa na czas oznaczony i akt notarialny najemcy (art. 19f ust. 1–3 u.o.p.l.); usługa: bezpieczny najem, a przy kilku lokalach także stała obsługa wynajmujących',
        ],
      ],
    },
    introHeading: 'Mieszkanie czy lokal pod firmę: od tego zależą Twoje prawa',
    intro: 'Umowa najmu to oddanie rzeczy do używania w zamian za umówiony czynsz (art. 659 § 1 k.c.). Przy mieszkaniu do Kodeksu cywilnego dochodzi ustawa o ochronie praw lokatorów, która zna kilka rodzajów najmu. Od rodzaju umowy zależą wypowiedzenie, górna granica kaucji i to, czy odzyskanie lokalu wymaga procesu. Najwięcej problemów bierze się z umów pisanych „ze wzoru z internetu”.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Lokator nie płaci, przyszło wypowiedzenie albo ktoś wymienił zamki',
    when: [
      {
        b: 'Dostałeś od właściciela wypowiedzenie najmu mieszkania.',
        t: 'Przy zwykłym najmie wypowiedzenie musi być na piśmie i podawać przyczynę z ustawy, pod rygorem nieważności (art. 11 ust. 1 u.o.p.l.). Tę przyczynę sprawdzam z umową i datami płatności.',
      },
      {
        b: 'Najemca przestał płacić, a rachunki za mieszkanie dalej idą na Ciebie.',
        t: 'Najem nie kończy się w dniu wypowiedzenia. Po zaległości za 3 pełne okresy i bezskutecznym miesiącu z pisemnego uprzedzenia wypowiadasz go najpóźniej na miesiąc naprzód, na koniec miesiąca kalendarzowego (art. 11 ust. 2 pkt 2 u.o.p.l.).',
      },
      {
        b: 'Właściciel wymienił zamki albo odciął prąd, żebyś się wyprowadził.',
        t: 'Możesz żądać przywrócenia stanu poprzedniego w ciągu roku od naruszenia, nawet gdy właściciel kwestionuje Twoje prawo do lokalu (art. 344 § 1 i 2 k.c.). Ściganie za uporczywe utrudnianie mieszkania, żeby wymusić wyprowadzkę, następuje na Twój wniosek (art. 191 § 1a i § 3 k.k.).',
      },
      {
        b: 'Mieszkasz za granicą i wynajmujesz mieszkanie w Polsce.',
        t: 'Umowę najmu okazjonalnego podpisze za Ciebie pełnomocnik z pełnomocnictwem na piśmie (art. 19a ust. 6 u.o.p.l., art. 99 § 1 k.c.). Do notariusza idzie najemca, bo to on poddaje się egzekucji (art. 19a ust. 2 pkt 1).',
      },
    ],
    lists: [
      {
        eyebrow: 'Porównanie trybów',
        title: 'Zwykły, okazjonalny czy instytucjonalny: co zmienia wybór umowy przy mieszkaniu',
        kind: 'check',
        items: [
          {
            b: 'Zwykły najem mieszkania',
            t: 'wypowiedzenie przez właściciela tylko z przyczyn z ustawy (art. 11 ust. 1 u.o.p.l.); kaucja do 12 czynszów (art. 6 ust. 1); w wyroku eksmisyjnym orzeczenie o lokalu socjalnym (art. 14 ust. 1).',
          },
          {
            b: 'Najem okazjonalny',
            t: 'właściciel będący osobą fizyczną bez działalności w zakresie wynajmowania lokali, umowa do 10 lat (art. 19a ust. 1 u.o.p.l.); kaucja do 6 czynszów (art. 19a ust. 4); akt notarialny najemcy, a po zgłoszeniu w urzędzie skarbowym opróżnienie lokalu bez procesu, lokalu socjalnego i przerwy zimowej (art. 19a ust. 2, art. 19d, 19e).',
          },
          {
            b: 'Najem instytucjonalny',
            t: 'wynajmowanie lokali jako działalność gospodarcza, umowa na czas oznaczony (art. 19f ust. 1 i 2 u.o.p.l.); kaucja do 6 czynszów (art. 19f ust. 5); akt notarialny najemcy i opróżnienie lokalu bez procesu (art. 19f ust. 3, art. 19i ust. 5), bez lokalu socjalnego, pomieszczenia tymczasowego i przerwy zimowej (art. 19j, art. 25d pkt 4).',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Najemca przestał płacić. Najpierw odzyskać pieniądze czy mieszkanie?',
        a: 'Nie musisz wybierać, obie sprawy mogą biec równolegle. Pozew o zaległe raty nie czeka na koniec najmu: każda rata była wymagalna w terminie z umowy (art. 669 § 1 k.c.). Mieszkanie odzyskasz dopiero po skutecznym wypowiedzeniu, więc tę drogę też zacznij od razu. Po końcu najmu każdy miesiąc zajmowania lokalu kosztuje lokatora odszkodowanie równe czynszowi, który lokal przyniósłby Ci z najmu (art. 18 ust. 1 i 2 u.o.p.l.).',
      },
      {
        q: 'Jestem najemcą. W czym mi pomożesz, skoro część usług jest dla właścicieli?',
        a: 'W czterech sprawach: umowa przed podpisem, zwrot kaucji, wypowiedzenie od właściciela i obrona w sprawie o eksmisję. Przy najmie okazjonalnym zacznij od żądania potwierdzenia, że właściciel zgłosił umowę do urzędu skarbowego; ma obowiązek je pokazać (art. 19b ust. 2 u.o.p.l.). Bez zgłoszenia właściciel nie odzyska lokalu bez procesu na podstawie Twojego aktu notarialnego (art. 19b ust. 3 u.o.p.l.).',
      },
      {
        q: 'Wynajmuję lokal pod sklep. Czy przepisy o ochronie lokatorów mnie dotyczą?',
        a: 'Nie. Sklep nie jest lokalem w rozumieniu tej ustawy, bo nie zaspokaja potrzeb mieszkaniowych (art. 2 ust. 1 pkt 4 u.o.p.l.). Nie działa więc lista przyczyn wypowiedzenia z art. 11 ani wstrzymanie wykonania eksmisji od 1 listopada do 31 marca (art. 16). Resztę ustalają umowa i Kodeks cywilny (art. 659–692 k.c.).',
      },
      {
        q: 'Najemca zmarł, a w mieszkaniu została osoba, z którą żył. Czy najem się skończył?',
        a: 'Nie, jeżeli ta osoba stale mieszkała z najemcą do jego śmierci: wstępuje wtedy w najem (art. 691 § 1 i 2 k.c.). Tak samo jest z małżonkiem, dziećmi i osobami, wobec których najemca miał obowiązek alimentacyjny. Gdy takich osób nie ma, najem wygasa (art. 691 § 3). Kto wstąpił w najem, może go wypowiedzieć z terminami ustawowymi, nawet przy umowie na czas oznaczony (art. 691 § 4).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2 ust. 1 pkt 4, art. 6, 6f, 11, 14, 16, 18, 19a–19f, 19i, 19j, 25d',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Zakres ustawy, kaucja, wypowiedzenie, lokal socjalny, okres zimowy, odszkodowanie, najem okazjonalny i instytucjonalny.',
        },
        {
          ref: 'art. 99, 222, 344, 659–692 (m.in. 669, 675, 687, 691)',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Najem i najem lokalu, wypowiedzenie przy zaległości, śmierć najemcy, ochrona posiadania, forma pełnomocnictwa.',
        },
        { ref: 'art. 191 § 1a i § 3', act: 'Kodeks karny', tj: 'Dz.U. 2025 poz. 383', eli: 'DU/1997/553', note: 'Zmuszanie do opuszczenia mieszkania przez utrudnianie korzystania z niego; ściganie na wniosek.' },
      ],
    },
    guides: ['5-nielegalnych-sposobow-na-wyrzucenie-lokatora', 'ile-trwa-eksmisja-lokatora'],
    seeAlso: [
      'obsluga-prawna-najemcow-komercyjnych',
      'obsluga-prawna-operatorow-najmu',
      'flip-mieszkania',
    ],
    cta: {
      heading: 'Dobra umowa najmu kosztuje mniej niż jeden miesiąc bez czynszu.',
      lead: 'Prześlij umowę albo opisz problem z najmem. W ciągu 24 h roboczych bezpłatnie wskażę, czego wymaga Twoja sprawa: analizy umowy, pisma czy pozwu, i dołączę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'sluzebnosci-odszkodowania': {
    h1: 'Służebności, słupy i odszkodowania: przesył, droga konieczna, wywłaszczenie',
    topic: 'Służebności i odszkodowania',
    subtitle: 'Na Twojej działce stoi słup albo biegnie gazociąg, sąsiad potrzebuje przejazdu albo grunt idzie pod drogę publiczną? Gdy sąd ustanawia służebność przesyłu albo drogę konieczną, należy Ci się wynagrodzenie, a za decyzję starosty lub wywłaszczenie odszkodowanie (art. 305², 145 k.c., art. 128 u.g.n.). Ustalam, czego i od kogo możesz żądać, i prowadzę sprawę od wezwania do sądu albo organu.',
    short: {
      q: 'Ktoś korzysta z mojej działki. Co mi się należy: wynagrodzenie czy odszkodowanie?',
      a: 'Rozstrzyga tytuł prawny drugiej strony. Bez tytułu żądasz wydania gruntu albo usunięcia urządzeń (art. 222 k.c.), a od zajmującego w złej wierze także wynagrodzenia za bezumowne korzystanie (art. 224–225 k.c.). Gdy działkę obciążyła decyzja starosty albo przejęła ją decyzja o zezwoleniu na realizację inwestycji drogowej (ZRID), odszkodowanie ustala organ w osobnej decyzji.',
      facts: [
        [
          'Słup, linia albo gazociąg bez umowy i bez decyzji',
          'Wynagrodzenie za przeszłość od firmy w złej wierze i za ustanowienie służebności przesyłu (art. 224–225, 305² § 2 k.c.). Usługa: odszkodowanie za słupy',
        ],
        [
          'Sąsiad, firma albo gmina zajmuje część gruntu',
          'Wydanie gruntu i wynagrodzenie za bezumowne korzystanie (art. 222 § 1, 224–225 k.c.). Usługa: bezumowne korzystanie',
        ],
        [
          'Starosta zezwolił decyzją na sieć przez Twoją działkę',
          'Odszkodowanie za szkody, powiększone o kwotę spadku wartości (art. 128 ust. 4 u.g.n.). Usługa: ograniczenie korzystania z nieruchomości',
        ],
        [
          'Działka bez dojazdu albo sąsiad żąda przejazdu przez Twój grunt',
          'Droga konieczna za wynagrodzeniem dla właściciela gruntu (art. 145 § 1 k.c.). Usługa: droga konieczna',
        ],
        [
          'Grunt przejęty pod drogę publiczną decyzją ZRID',
          'Odszkodowanie w decyzji organu, który wydał ZRID (art. 12 ust. 4a specustawy drogowej). Usługa: odszkodowanie za wywłaszczenie',
        ],
        [
          'Reszta działki po budowie drogi nie nadaje się do dotychczasowych celów',
          'Zarządca drogi jest obowiązany ją nabyć, jeżeli o to wystąpisz (art. 13 ust. 3 specustawy drogowej). Usługa: wykup działki resztkowej',
        ],
      ],
    },
    introHeading: 'Czy firma albo sąsiad ma prawo do Twojej działki?',
    intro: 'Służebność przesyłu to prawo firmy do korzystania w oznaczonym zakresie z Twojej nieruchomości, zgodnie z przeznaczeniem jej urządzeń (art. 305¹ k.c.). Gdy firma nie ma żadnego tytułu, możesz żądać wynagrodzenia za bezumowne korzystanie (potocznie: odszkodowania za słupy). Firma w dobrej wierze płaci je za czas od dowiedzenia się o wytoczeniu powództwa o wydanie rzeczy, a dobrą wiarę ustawa domniemywa (art. 224 § 2, art. 7 k.c.). Termin przedawnienia wynosi co do zasady 6 lat; może wynosić 3 lata, jeżeli roszczenie jest związane z prowadzeniem działalności gospodarczej; kończy się ostatniego dnia roku (art. 118 k.c.). Przejazd przez cudzy grunt daje z kolei umowa, zasiedzenie służebności (art. 292 k.c.) albo droga konieczna (art. 145 k.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Słup, gazociąg, przejazd albo droga publiczna na Twoim gruncie',
    when: [
      {
        b: 'Dostałeś decyzję starosty o sieci przez działkę albo decyzję o odszkodowaniu za grunt pod drogę.',
        t: 'Odwołanie wnosisz w 14 dni od doręczenia, za pośrednictwem organu, który wydał decyzję (art. 129 § 1 i 2 k.p.a.).',
      },
      {
        b: 'Na działce od lat stoi słup albo biegnie gazociąg, a zakład energetyczny ani gazownia nic Ci nie płacą.',
        t: 'Bez tytułu firmy przysługuje Ci żądanie służebności przesyłu za wynagrodzeniem na przyszłość (art. 305² § 2 k.c.), a za przeszłość płaci firma w złej wierze (art. 225 k.c.).',
      },
      {
        b: 'Twoja działka nie ma odpowiedniego dostępu do drogi publicznej albo sąsiad zamknął dojazd, z którego korzystałeś od lat.',
        t: 'Sąd może ustanowić drogę konieczną (art. 145 § 1 k.c.). Jeżeli przejazd ma trwałe i widoczne urządzenie, wchodzi w grę zasiedzenie służebności (art. 292 k.c.).',
      },
      {
        b: 'Sąsiad żąda od Ciebie opłat za przejazd, który działa od pokoleń.',
        t: 'Za drogę konieczną wynagrodzenie sąsiadowi się należy (art. 145 § 1 k.c.), a przy umowie o opłacie decyduje umowa. Bez żadnej podstawy sąsiad może żądać zaniechania przejazdu (art. 222 § 2 k.c.).',
      },
      { b: 'Część Twojej działki idzie pod drogę publiczną.', t: 'Z mocy prawa grunt staje się własnością Skarbu Państwa albo samorządu w dniu, w którym ZRID stała się ostateczna (art. 12 ust. 4 specustawy drogowej).' },
    ],
    faq: [
      {
        q: 'Czy w sprawie o słupy, przejazd albo grunt pod drogę muszę od razu iść do sądu?',
        a: 'Nie. Przy słupach i zajętym gruncie zaczynasz od wezwania, a sąd jest potrzebny, gdy druga strona odmawia. Wezwanie nie zatrzymuje jednak przedawnienia zapłaty; robi to np. pozew albo uznanie roszczenia przez dłużnika (art. 123 § 1 k.c.). Od decyzji organu najpierw składasz odwołanie (art. 127 § 1 k.p.a.).',
      },
      {
        q: 'Sprawa ciągnie się od lat. Co się przedawnia, a co nie?',
        a: 'Nie przedawnia się żądanie wydania gruntu ani usunięcia urządzeń od kogoś, kto nie ma tytułu (art. 222, art. 223 § 1 k.c.). Przedawnia się zapłata za przeszłość (art. 118 k.c.); terminy liczę na stronie o odszkodowaniu za słupy. Na odwołanie od decyzji masz tylko 14 dni od doręczenia (art. 129 § 2 k.p.a.).',
      },
      {
        q: 'Kto wyliczy, ile mi się należy: urząd czy sąd?',
        a: 'Przy decyzji starosty o sieci i przy przejęciu gruntu pod drogę kwotę ustala organ w decyzji, po opinii rzeczoznawcy majątkowego (art. 129 ust. 5, art. 130 ust. 2 u.g.n.; art. 12 ust. 4a i 5 specustawy drogowej). Przy służebności przesyłu, drodze koniecznej i bezumownym korzystaniu ustala ją umowa albo sąd, który może powołać biegłego (art. 278 § 1 k.p.c.).',
      },
      {
        q: 'Skąd mam wiedzieć, czy na mojej działce jest służebność?',
        a: 'Zacznij od działu III księgi wieczystej, w którym wpisuje się służebności (art. 25 ust. 1 pkt 3 u.k.w.h.). Pusty dział III nie przesądza sprawy: tytułem firmy bywa decyzja starosty (art. 124 ust. 1 u.g.n.), a służebność można nabyć przez zasiedzenie (art. 292 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 7, 118, 123, 145, 222–225, 292, 305¹ i 305² k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Przedawnienie, droga konieczna, ochrona własności, bezumowne korzystanie i służebności.',
        },
        { ref: 'art. 124, 128, 129 ust. 5 i 130 ust. 2 u.g.n.', act: 'Ustawa o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Decyzja starosty o sieci, wywłaszczenie i odszkodowanie.' },
        {
          ref: 'art. 12 ust. 4–5 i art. 13 ust. 3 specustawy drogowej',
          act: 'Ustawa o szczególnych zasadach przygotowania i realizacji inwestycji w zakresie dróg publicznych',
          tj: 'Dz.U. 2024 poz. 311',
          eli: 'DU/2003/721',
          note: 'Grunt pod drogę publiczną, odszkodowanie i resztówka.',
        },
        { ref: 'art. 127 i 129 k.p.a.', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'Odwołanie w 14 dni.' },
        { ref: 'art. 278 § 1 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Biegły w sądzie.' },
        { ref: 'art. 25 ust. 1 pkt 3 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Służebności w dziale III.' },
      ],
    },
    guides: [
      'sluzebnosc-przesylu-jak-obliczyc-wynagrodzenie',
      'wynagrodzenie-za-sluzebnosc-drogi-koniecznej',
    ],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'uregulowanie-stanu-prawnego'],
    cta: {
      heading: 'Słup stoi na Twoim gruncie. Pieniądze należą się Tobie.',
      lead: 'Opisz, co dzieje się z Twoją działką i od kiedy. W 24 h roboczych bezpłatnie odpiszę, która z tych spraw wchodzi w grę i co trzeba zrobić, razem z ofertą z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'grunty-rolne-oze': {
    h1: 'Prawo rolne: grunty, dzierżawa, KOWR i umowy pod fotowoltaikę',
    topic: 'Prawo rolne',
    servicesHeading: 'Którą sprawę masz: zakup, dzierżawę czy budowę na ziemi rolnej?',
    subtitle: 'Firma OZE proponuje dzierżawę pola na 25–30 lat, sprzedajesz ziemię albo planujesz na niej dom? Prawo rolne rozstrzyga, kto kupi ziemię, kiedy Krajowy Ośrodek Wsparcia Rolnictwa (KOWR) ma pierwokup, kiedy grunt trzeba odrolnić i co obowiązuje w dzierżawie. Sprawdzam działkę i projekt umowy przed podpisem.',
    short: {
      q: 'Jakie przepisy dotyczą Cię, gdy kupujesz, dzierżawisz albo zabudowujesz ziemię rolną?',
      a: 'Zakup ziemi i pierwokup KOWR reguluje ustawa o kształtowaniu ustroju rolnego (art. 2a i art. 3 u.k.u.r.). Gdy użytki rolne w nieruchomości mają poniżej 0,3 ha, ustawy tej nie stosuje się (art. 1a pkt 1 lit. b). Wyłączenie gruntu z produkcji (potocznie: odrolnienie) reguluje ustawa o ochronie gruntów rolnych i leśnych (art. 11 u.o.g.r.l.), a dzierżawę kodeks cywilny (art. 693–709 k.c.). O tym, czy wolno postawić dom, decyduje plan miejscowy, a bez planu decyzja o warunkach zabudowy, czyli WZ (art. 4 ust. 1–2 u.p.z.p.).',
      facts: [
        [
          'Kupujesz ziemię rolną, a nie jesteś rolnikiem',
          'Bez statusu rolnika możesz kupić nieruchomość poniżej 1 ha (art. 2a ust. 3 pkt 1a u.k.u.r.). Usługa: Nieruchomości rolne (UKUR, KOWR)',
        ],
        [
          'Nie jesteś rolnikiem, a nieruchomość ma 1 ha lub więcej',
          'Zgoda Dyrektora Generalnego KOWR, chyba że zachodzi wyjątek, np. gdy jesteś osobą bliską sprzedającego (art. 2a ust. 3–4 u.k.u.r.). Usługa: Zgoda KOWR na nabycie ziemi rolnej',
        ],
        [
          'Notariusz pyta, czy jesteś rolnikiem indywidualnym',
          'Kwalifikacje rolnicze, 5 lat zamieszkania w gminie i osobiste prowadzenie gospodarstwa przez te 5 lat (art. 6 ust. 1 u.k.u.r.). Usługa: Status rolnika indywidualnego',
        ],
        [
          'Wydzierżawiasz pole rolnikowi',
          'Bez innego zapisu w umowie: wypowiedzenie z rocznym wyprzedzeniem, na koniec roku dzierżawnego (art. 704 k.c.). Usługa: Umowy dzierżawy rolnej',
        ],
        [
          'Firma OZE chce dzierżawić grunt pod farmę',
          'Klasy I–III: tylko z planem miejscowym; klasa IV: z planem przy mocy ponad 150 kW albo działalności gospodarczej (art. 14 ust. 6a pkt 2 u.p.z.p.). Usługa: Dzierżawa pod fotowoltaikę i wiatraki',
        ],
        [
          'Chcesz budować na działce rolnej',
          'Plan miejscowy albo WZ; na klasach I–III i glebach organicznych również decyzja starosty o wyłączeniu z produkcji (art. 11 ust. 1 u.o.g.r.l.). Usługa: Odrolnienie i wyłączenie z produkcji rolnej',
        ],
      ],
    },
    introHeading: 'Jedna działka rolna, trzy urzędy i trzy różne pytania',
    intro: 'Nieruchomością rolną kodeks nazywa grunt, który jest lub może być wykorzystywany do produkcji roślinnej i zwierzęcej (art. 46¹ k.c.). Notariusz i KOWR: kto kupuje, jaką powierzchnię ma nieruchomość i ile w niej użytków rolnych (art. 1a i art. 2a u.k.u.r.). Starosta: jaką klasę gleby pokazuje ewidencja (art. 2 ust. 1 pkt 1, art. 5 ust. 1 i art. 11 u.o.g.r.l.). Gmina: czy plan miejscowy albo WZ pozwala na dom lub farmę (art. 4 u.p.z.p.). Widziałem umowy pod OZE, które blokowały grunt na lata bez złotówki czynszu, przenosiły na właściciela ryzyko podatkowe i uniemożliwiały sprzedaż działki. Byłem pracownikiem naukowym Katedry Prawa Rolnego i Gospodarki Gruntami UMCS.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Umowa od firmy OZE, sprzedaż pola albo dom na działce rolnej',
    when: [
      {
        b: 'Firma OZE przysłała umowę dzierżawy pod farmę fotowoltaiczną i czeka na podpis.',
        t: 'Od klasy gruntu i planu miejscowego zależy, czy farma powstanie (art. 14 ust. 6a pkt 2 u.p.z.p.). Po 30 latach dłuższa dzierżawa staje się umową na czas nieoznaczony, którą można wypowiedzieć (art. 695 § 1, art. 673 § 1 w zw. z art. 694 k.c.).',
      },
      {
        b: 'Sprzedajesz ziemię rolną komuś spoza rodziny, kto nie jest rolnikiem.',
        t: 'Przy nieruchomości mniejszej niż 1 ha KOWR ma co do zasady pierwokup (art. 3 ust. 4 u.k.u.r.). Od 1 ha kupujący potrzebuje zgody Dyrektora Generalnego KOWR, a sprzedaży za tą zgodą pierwokup nie dotyczy (art. 2a ust. 4, art. 3 ust. 5 pkt 2).',
      },
      {
        b: 'Masz już działkę rolną i planujesz na niej dom.',
        t: 'Na klasach I–III i glebach organicznych najpierw decyzja starosty, która wyłącza grunt z produkcji, potem pozwolenie albo zgłoszenie budowy (art. 11 ust. 1 i 4 u.o.g.r.l.).',
      },
      { b: 'Na polu stoją słupy albo biegnie gazociąg, a nikt za to nie zapłacił.', t: 'Gdy firma przesyłowa odmawia umowy, możesz żądać odpowiedniego wynagrodzenia w zamian za ustanowienie służebności (art. 305² § 2 k.c.).' },
    ],
    faq: [
      {
        q: 'Firma OZE chce dzierżawić pole, a planu miejscowego nie ma. Co to znaczy?',
        a: 'Na użytkach rolnych klas I–III farma bez planu miejscowego nie powstanie. Na klasie IV plan jest potrzebny przy mocy ponad 150 kW. Tak samo, gdy farma służy działalności gospodarczej w wytwarzaniu energii elektrycznej. Na pozostałych gruntach plan jest potrzebny przy mocy ponad 1000 kW (art. 14 ust. 6a pkt 2 u.p.z.p.). Umowa podpisana bez planu może jednak wiązać działkę, choć farma nie powstanie.',
      },
      {
        q: 'Wydzierżawić ziemię rolnikowi czy firmie OZE – czym różnią się te umowy?',
        a: 'Przede wszystkim pierwokupem: może go mieć dzierżawca-rolnik, a spółka OZE nie. Pierwokup ma dzierżawca, którego pisemna umowa z datą pewną jest wykonywana od co najmniej 3 lat. Grunt musi też wchodzić w jego gospodarstwo rodzinne (art. 3 ust. 1 u.k.u.r.), a takie gospodarstwo prowadzi rolnik indywidualny, czyli osoba fizyczna (art. 5 ust. 1, art. 6 ust. 1). Dzierżawca nie może bez Twojej zgody zmienić przeznaczenia gruntu (art. 696 k.c.), więc cel dzierżawy zapisz w umowie wprost.',
      },
      {
        q: 'Działka rolna pod dom po 1.09.2026: od czego zacząć?',
        a: 'Od tego, czy wolno tam budować: decyduje plan miejscowy albo WZ, nie KOWR (art. 4 u.p.z.p.). WZ na wniosek złożony od 1.09.2026 wydaje się tylko w gminie, w której wszedł w życie plan ogólny (art. 59 ust. 3 ustawy z 7.07.2023). Nowy dom wymaga też co do zasady obszaru uzupełnienia zabudowy, wyznaczonego w tym planie (art. 61 ust. 1 pkt 1a, art. 13a ust. 4 u.p.z.p.). Przy zakupie sprawdź pierwokup KOWR (art. 3 ust. 4 u.k.u.r.).',
      },
      {
        q: 'Mam umowę dzierżawy z firmą OZE. Czy mogę sprzedać ziemię?',
        a: 'Tak, bo umową nie można wyłączyć ani ograniczyć uprawnienia do przeniesienia własności (art. 57 § 1 k.c.). Umowa może jednak zawierać Twoje zobowiązanie, że gruntu nie sprzedasz (art. 57 § 2). Kupujący wstępuje w dzierżawę na Twoje miejsce (art. 678 § 1 w zw. z art. 694 k.c.). Nie wypowie jej, gdy umowa na czas oznaczony ma formę pisemną i datę pewną, a grunt został wydany (art. 678 § 2).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1a, art. 2, art. 2a, art. 3, art. 5, art. 6',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Kto kupi ziemię rolną, zgoda KOWR, pierwokup KOWR i dzierżawcy, rolnik indywidualny.',
        },
        {
          ref: 'art. 2, art. 5, art. 11',
          act: 'Ustawa z dnia 3 lutego 1995 r. o ochronie gruntów rolnych i leśnych',
          tj: 'Dz.U. 2024 poz. 82 ze zm.',
          eli: 'DU/1995/78',
          note: 'Grunty rolne w ewidencji i decyzja starosty o wyłączeniu z produkcji.',
        },
        {
          ref: 'art. 46¹, art. 57, art. 305², art. 673, art. 678, art. 693–709',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Nieruchomość rolna, zbywalność gruntu, służebność przesyłu i dzierżawa.',
        },
        {
          ref: 'art. 4, art. 13a ust. 4, art. 14 ust. 6a, art. 61 ust. 1',
          act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538 ze zm.',
          eli: 'DU/2003/717',
          note: 'Plan miejscowy, plan ogólny i obszar uzupełnienia zabudowy, WZ, lokalizacja farm OZE.',
        },
        {
          ref: 'art. 59 ust. 3',
          act: 'Ustawa z dnia 7 lipca 2023 r. o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm.',
          eli: 'DU/2023/1688',
          note: 'WZ na wniosek złożony od 1.09.2026 tylko w gminie, w której wszedł w życie plan ogólny (termin zmieniony ustawą Dz.U. 2026 poz. 781).',
        },
      ],
    },
    guides: ['farma-fotowoltaiczna-na-dzialce-rolnej'],
    seeAlso: ['odszkodowanie-sluzebnosc-przesylu', 'dzial-spadku', 'plan-ogolny'],
    cta: {
      heading: 'Zanim podpiszesz umowę z inwestorem — przeczytajmy ją razem.',
      lead: 'Napisz, co chcesz zrobić z ziemią, i dołącz wypis z rejestru gruntów albo projekt umowy. W 24 h roboczych bezpłatnie odpiszę, co trzeba zrobić, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-podmiotow-profesjonalnych': {
    h1: 'Podmioty profesjonalne rynku nieruchomości: stała obsługa prawna firm',
    topic: 'Obsługa firm',
    servicesHeading: 'Dla jakiej firmy pracuję: 16 branż rynku nieruchomości',
    subtitle: 'Budujesz, sprzedajesz, pośredniczysz albo zarządzasz budynkami i szukasz prawnika, który zna Twoje umowy? Stała obsługa prawna firmy z branży nieruchomości to jeden prawnik do wzorów umów, pism i sporów. Odpowiadam w 24 h roboczych, a zakres i cenę zapisuję w ofercie.',
    short: {
      q: 'Stała obsługa prawna czy jedno zlecenie: co wybrać dla firmy z rynku nieruchomości?',
      a: 'Stałą obsługę wybierz, jeżeli te same wzory umów, terminy i spory wracają co miesiąc. Jedno zlecenie wystarczy na jedną transakcję, inwestycję albo spór. Tabela niżej pokazuje, czego przepisy wymagają od Twojej branży.',
      facts: [
        [
          'Deweloper przed startem sprzedaży',
          'Rachunek powierniczy i prospekt informacyjny; prospekt z załącznikami doręczasz przed umową rezerwacyjną albo deweloperską (art. 7 ust. 1, art. 20 ust. 1, art. 21 ust. 1 u.d.). Usługa: deweloperzy',
        ],
        [
          'Biuro nieruchomości',
          'Umowa pośrednictwa tylko na piśmie albo w formie elektronicznej, inaczej jest nieważna (art. 180 ust. 3 u.g.n.). Usługa: biura nieruchomości i pośrednicy',
        ],
        [
          'Zarządca nieruchomości',
          'Obowiązkowe OC, a kopia polisy to załącznik do umowy o zarządzanie (art. 186 ust. 3 i 3a u.g.n.). Usługa: zarządcy nieruchomości',
        ],
        [
          'Generalny wykonawca',
          'Gwarancji zapłaty żądasz od inwestora w każdym czasie; bez niej, po wyznaczonym przez Ciebie terminie co najmniej 45 dni, możesz odstąpić od umowy (art. 649³ § 1, art. 649⁴ § 1 k.c.). Usługa: firmy budowlane',
        ],
        [
          'Zarząd wspólnoty',
          'Właściciel lokalu może zaskarżyć uchwałę w 6 tygodni, co do zasady od jej podjęcia na zebraniu; pozew idzie przeciwko wspólnocie (art. 25 ust. 1 i 1a u.w.l.). Usługa: wspólnoty mieszkaniowe',
        ],
      ],
    },
    introHeading: 'Wzory umów, terminy i spory: gdzie firma potrzebuje prawnika od nieruchomości',
    intro: 'Firma z rynku nieruchomości zawiera umowy na własnych wzorach: z nabywcami, najemcami, zleceniodawcami i podwykonawcami. Wzór wiąże drugą stronę, jeżeli dostała go przed zawarciem umowy (art. 384 § 1 k.c.). Gdy zapis z wzoru okaże się niedozwolony, nie wiąże konsumenta, ale reszta umowy obowiązuje (art. 385¹ § 1–2 k.c.). Dlatego w stałej obsłudze sprawdzam wzór raz, a potem poprawiam go, gdy zmieniają się przepisy. Po latach pracy w kancelarii SPCG, jednej z czołowych w Polsce, prowadzę wyłącznie sprawy z prawa nieruchomości.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Klient podważa umowę, kontrahent nie płaci albo przyszła decyzja z terminem',
    when: [
      {
        b: 'Firma dostała decyzję urzędu i nie zgadzasz się z nią.',
        t: 'Odwołanie wnosisz co do zasady w 14 dni od doręczenia (art. 129 § 2 k.p.a.). Skargę do sądu administracyjnego wnosisz co do zasady dopiero po odwołaniu, w 30 dni od doręczenia decyzji odwoławczej (art. 52 § 1, art. 53 § 1 p.p.s.a.). Datę doręczenia podaj w formularzu.',
      },
      {
        b: 'Kontrahent nie płaci od miesięcy, a pozew ciągle odkładasz.',
        t: 'Roszczenia związane z działalnością gospodarczą przedawniają się co do zasady po 3 latach, z końcem roku (art. 118 k.c.), a m.in. ze sprzedaży w zakresie działalności przedsiębiorstwa i z umowy o dzieło po 2 latach (art. 554, 646 k.c.). Podaj datę najstarszej faktury.',
      },
      {
        b: 'Kolejny klient kwestionuje ten sam zapis z Twojego wzoru umowy.',
        t: 'Poprawiam wzór raz, dla wszystkich kolejnych umów. Nowy wzór w trwającej umowie, np. o zarządzanie, wiąże drugą stronę, jeżeli dostanie go zgodnie z art. 384 k.c. i nie wypowie umowy w najbliższym terminie wypowiedzenia (art. 384¹ k.c.).',
      },
      {
        b: 'Masz prawnika od wszystkiego, a nieruchomości są dla niego marginesem.',
        t: 'Przejmuję umowy, stan prawny gruntów i lokali, postępowania przed urzędami i spory. Po pierwszym przeglądzie znam Twoje wzory i historię spraw, więc kolejna sprawa nie zaczyna się od zera.',
      },
    ],
    lists: [
      {
        eyebrow: 'Formy współpracy',
        title: 'Stała obsługa albo jedno zlecenie: co dostaje Twoja firma',
        kind: 'check',
        items: [
          { b: 'Stała obsługa', t: 'bieżące pytania, wzory umów, pisma i spory w zakresie, czasie odpowiedzi i sposobie rozliczenia z oferty; co miesiąc zestawienie wykonanych czynności.' },
          { b: 'Jedno zlecenie', t: 'transakcja, inwestycja (np. od zakupu gruntu po ostatni akt notarialny) albo spór, z ceną i terminem ustalonymi z góry.' },
          { b: 'Przegląd wzorów umów', t: 'lista ryzyk i nowe brzmienie zapisów, gotowe dla kolejnego klienta.' },
          { b: 'Zastępstwo procesowe', t: 'sądy cywilne i administracyjne w całej Polsce.' },
        ],
      },
    ],
    faq: [
      {
        q: 'Ile kosztuje stała obsługa prawna firmy?',
        a: 'Cenę podaję w ofercie dla Twojej firmy; na stronie nie ma cennika. Opisz w formularzu branżę, wzory umów i sprawy w toku. W 24 h roboczych odpiszę, od czego zacząć, np. od przeglądu wzorów albo odpowiedzi na pozew, i wyślę ofertę z zakresem, ceną i terminem. To jeszcze nie opinia o Twoich umowach. Do akceptacji oferty nic nie płacisz.',
      },
      {
        q: 'Czy zajmujesz się też podatkami, RODO i prawem pracy w firmie?',
        a: 'Nie. Prowadzę prawo nieruchomości: umowy, stan prawny gruntów i lokali, postępowania przed urzędami i spory w sądach. Skutki podatkowe transakcji oceni doradca podatkowy; ustalenia z umów, od których zależy jego ocena, mogę mu przekazać bezpośrednio. Przy RODO i prawie pracy polecę specjalistę.',
      },
      {
        q: 'Czy wzór umowy wiąże kontrahenta, jeśli wyślę go dopiero po podpisaniu umowy?',
        a: 'Co do zasady nie: wzór musi trafić do drugiej strony przed zawarciem umowy (art. 384 § 1 k.c.). Wyjątek dotyczy umów, w których wzory są zwyczajowo przyjęte, a kontrahent mógł łatwo poznać ich treść; z konsumentem tylko w drobnych sprawach życia codziennego (art. 384 § 2 k.c.). Wzór elektroniczny udostępniasz przed umową tak, żeby druga strona mogła go zapisać i odtworzyć (art. 384 § 4 k.c.).',
      },
      {
        q: 'Jak szybko odpowiadasz, gdy firma dostanie pismo z terminem?',
        a: 'W 24 h roboczych od Twojej wiadomości. Termin z decyzji albo pisma sądu liczy się zwykle od doręczenia, więc podaj datę doręczenia i dołącz skan pisma. W stałej obsłudze czas odpowiedzi zapisujemy w ofercie.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 118, 384 § 1, 2 i 4, 384¹, 385¹ § 1–2, 554, 646, 649³ § 1, 649⁴ § 1',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Przedawnienie roszczeń firmy (w tym 2 lata przy sprzedaży i dziele), wzorce umów i zmiana wzorca w umowie trwającej, skutek niedozwolonego postanowienia, gwarancja zapłaty za roboty budowlane.',
        },
        {
          ref: 'art. 7 ust. 1, art. 20 ust. 1, art. 21 ust. 1',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz o Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Rachunek powierniczy, prospekt informacyjny i jego doręczenie przed umową rezerwacyjną albo deweloperską.',
        },
        { ref: 'art. 180 ust. 3, art. 186 ust. 3 i 3a', act: 'Ustawa o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Forma umowy pośrednictwa, obowiązkowe OC zarządcy nieruchomości.' },
        { ref: 'art. 25 ust. 1 i 1a', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'Termin na zaskarżenie uchwały wspólnoty mieszkaniowej.' },
        { ref: 'art. 129 § 2', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'Termin na odwołanie od decyzji.' },
        {
          ref: 'art. 52 § 1, art. 53 § 1',
          act: 'Prawo o postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2026 poz. 143',
          eli: 'DU/2002/1270',
          note: 'Wyczerpanie środków zaskarżenia i termin na skargę do sądu administracyjnego.',
        },
      ],
    },
    guides: [
      'kara-umowna-za-opoznienie-dewelopera-uchwala-sn',
      'farma-fotowoltaiczna-na-dzialce-rolnej',
    ],
    seeAlso: ['flip-mieszkania', 'umowa-o-roboty-budowlane', 'dzierzawa-oze'],
    cta: {
      heading: 'Prawnik, który zna Twoją branżę, kosztuje mniej niż ten, który się jej uczy.',
      lead: 'Opisz firmę i sprawy, które dziś masz na biurku: wzór umowy, spór albo decyzję z terminem. W 24 h roboczych bezpłatnie odpiszę, co trzeba zrobić, np. przegląd wzorów, pismo albo pozew, i prześlę ofertę z ceną i terminem. Do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

});
