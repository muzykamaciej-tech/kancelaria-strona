/* services-b2b.jsx — Blok 11 (B2B) subpage content, PACZKA 1 (7 podstron).
   Loads AFTER services-content.jsx; merges into the existing SERVICE_CONTENT object
   so these tiles render the full service template instead of the lite fallback. */

Object.assign(window.SERVICE_CONTENT, {

  'obsluga-prawna-zarzadcow': {
    h1: 'Obsługa prawna zarządców nieruchomości',
    h1Full: 'Obsługa prawna zarządców nieruchomości: umowy, odpowiedzialność, windykacja',
    topic: 'Zarządzanie nieruchomościami',
    metaDesc: 'Zarządca odpowiada za nienależyte wykonanie umowy o zarządzanie (art. 471 k.c.) i musi mieć OC (art. 186 u.g.n.). Piszę umowy i prowadzę spory zarządców.',
    subtitle: 'Zarządzasz wspólnotami albo budynkami komercyjnymi i chcesz wiedzieć, za co odpowiadasz, gdy coś pójdzie źle? Obsługa prawna zarządcy nieruchomości obejmuje umowę o zarządzanie, granice odpowiedzialności, obowiązkowe OC (art. 186 ust. 3 u.g.n.) i windykację zaliczek. Piszę i opiniuję umowy, protokoły przejęcia i pisma oraz prowadzę spory.',
    short: {
      q: 'Za co odpowiada zarządca nieruchomości, skoro nie ma już licencji?',
      a: 'Odpowiadasz za szkodę z niewykonania lub nienależytego wykonania umowy o zarządzanie (art. 471 k.c.). Staranność ocenia się z uwzględnieniem zawodowego charakteru Twojej działalności (art. 355 § 2 k.c.). Za pracowników i podwykonawców odpowiadasz jak za siebie (art. 474 k.c.). Licencji ustawa nie wymaga: zarządcą jest przedsiębiorca prowadzący działalność z zakresu zarządzania nieruchomościami (art. 184a u.g.n.).',
      facts: [
        [
          'Forma umowy o zarządzanie',
          'Pisemna lub elektroniczna pod rygorem nieważności (art. 185 ust. 2 u.g.n.)',
        ],
        [
          'OC zarządcy',
          'Obowiązkowe, także za szkody osób działających pod Twoim nadzorem; kopia polisy to załącznik do umowy (art. 186 ust. 3 zd. 2 i ust. 3a u.g.n.)',
        ],
        [
          'Czego umowa nie wyłączy',
          'Odpowiedzialności za szkodę, którą wyrządzisz umyślnie (art. 473 § 2 k.c.)',
        ],
        [
          'Czynności ponad zwykły zarząd we wspólnocie',
          'Uchwała właścicieli z pełnomocnictwem, np. na wysokość opłat (art. 22 ust. 2 i 3 u.w.l.); przy zarządzie powierzonym umowa może stanowić inaczej (art. 33); przy najwyżej 3 lokalach – przepisy k.c. o współwłasności (art. 19 u.w.l.)',
        ],
      ],
    },
    introHeading: 'Umowa o zarządzanie wyznacza, za co odpowiadasz',
    intro: 'Zarządzanie nieruchomością to decyzje i czynności dla racjonalnej gospodarki nieruchomością, m.in. bieżące administrowanie (art. 184b u.g.n.). Co robisz w konkretnym budynku, określa umowa z właścicielem albo wspólnotą (art. 185 ust. 2 u.g.n.). Prawo budowlane wymaga kontroli budynku przez właściciela lub zarządcę co najmniej raz w roku i raz na 5 lat (art. 62 ust. 1 pkt 1 i 2 Pb). Dlatego zaczynam od umowy: czy jej zakres zgadza się z tym, co faktycznie robisz.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Wezwanie o polisę, przejęcie budynku, roszczenie za zalanie',
    when: [
      {
        b: 'Wspólnota albo właściciel wezwał Cię na piśmie do pokazania aktualnej polisy OC.',
        t: 'Masz 7 dni od otrzymania wezwania; bez kopii polisy druga strona może wypowiedzieć umowę ze skutkiem natychmiastowym (art. 186 ust. 3b u.g.n.).',
      },
      {
        b: 'Przejmujesz budynek po innym zarządcy albo od dewelopera i nie wiesz, co wpisać do protokołu.',
        t: 'Przy zarządzie powierzonym sporządzasz protokół przejęcia nieruchomości i dokumentacji technicznej (art. 29 ust. 1b u.w.l.).',
      },
      { b: 'Dostałeś do podpisu umowę o zarządzanie napisaną przez wspólnotę albo właściciela.', t: 'Umowa może rozszerzyć Twoją odpowiedzialność ponad ustawową (art. 473 § 1 k.c.).' },
      {
        b: 'Właściciele lokali od miesięcy nie płacą zaliczek, a wspólnota chce iść do sądu.',
        t: 'Przy zarządzie powierzonym prowadzisz dla każdej nieruchomości ewidencję zaliczek (art. 29 ust. 1 u.w.l.); z niej powstaje zestawienie zaległości do pozwu.',
      },
      {
        b: 'Wspólnota albo właściciel żąda od Ciebie odszkodowania za zalanie, awarię albo przegapiony przegląd.',
        t: 'Odpowiadasz za niezachowanie należytej staranności (art. 472 k.c.); na takie szkody ustawa wymaga OC (art. 186 ust. 3 u.g.n.).',
      },
    ],
    doForTitle: 'Umowy, protokoły, windykacja i spory zarządcy',
    doFor: [
      'Piszę i opiniuję umowy o zarządzanie: zakres obowiązków, umocowanie, wynagrodzenie, wypowiedzenie, załącznik z polisą OC.',
      'Przygotowuję protokół przejęcia budynku i wezwanie do wydania brakujących dokumentów od poprzedniego zarządcy albo dewelopera.',
      'Piszę projekty uchwał na czynności ponad zwykły zarząd, z pełnomocnictwem do ich wykonania.',
      'Prowadzę windykację zaliczek w kilku wspólnotach naraz, na podstawie Twojej ewidencji: wezwanie, pozew, wniosek do komornika.',
      'Odpowiadam na roszczenia o odszkodowanie i reprezentuję Cię w sporze z właścicielem, wspólnotą, wykonawcą albo ubezpieczycielem.',
      'Odpowiadam mailowo na bieżące pytania, przy jednej sprawie albo stale.',
    ],
    stepsHeading: 'Od opisu Twojego portfela do umowy i pisma',
    steps: [
      'Opisujesz w formularzu, czym zarządzasz i co Cię dziś niepokoi: umowa, przejęcie budynku, dłużnik albo roszczenie.',
      'W 24 h roboczych odpisuję bezpłatnie, czego wymaga sprawa, np. przeglądu umowy albo pozwu o zaliczki. Podaję też cenę i termin tej pracy. To nie jest jeszcze opinia o umowie; do akceptacji oferty nic nie płacisz.',
      'Po akceptacji czytam umowę, polisę i uchwały i oddaję poprawki z listą ryzyk. Podpisana umowa albo aneks Cię wiąże, więc zmiany negocjujesz przed podpisem.',
      'Przy sporze odpowiadam na wezwanie albo pozew drugiej strony; przy windykacji piszę wezwanie, pozew i wniosek do komornika.',
    ],
    faq: [
      {
        q: 'Co wpisać do umowy o zarządzanie, żeby ograniczyć odpowiedzialność?',
        a: 'Dokładny zakres obowiązków i czynności, których nie wykonujesz, bo zakres zarządzania wyznacza umowa (art. 185 ust. 2 u.g.n.). Odpowiedzialności za umyślne wyrządzenie szkody nie wyłączysz żadnym zapisem (art. 473 § 2 k.c.). Sprawdź też, czy projekt nie każe Ci odpowiadać za okoliczności, za które z ustawy nie odpowiadasz (art. 473 § 1 k.c.).',
      },
      {
        q: 'Czy polisa OC musi być załącznikiem do umowy o zarządzanie?',
        a: 'Tak. Do umowy dołączasz kopię polisy aktualnej w dniu jej zawarcia, a o zmianach polisy informujesz drugą stronę niezwłocznie (art. 186 ust. 3a u.g.n.). Bez tego druga strona może wezwać Cię na piśmie do przedłożenia kopii. Jeżeli nie przedłożysz jej w 7 dni od otrzymania wezwania, może wypowiedzieć umowę ze skutkiem natychmiastowym (art. 186 ust. 3b u.g.n.).',
      },
      {
        q: 'Czy obowiązkowe OC zarządcy obejmuje szkody wyrządzone przez pracowników?',
        a: 'Tak, jeżeli wykonują czynności pod Twoim nadzorem: obowiązek ubezpieczenia obejmuje wtedy także szkody wyrządzone ich działaniem (art. 186 ust. 3 u.g.n.). Niezależnie od polisy wobec wspólnoty albo właściciela odpowiadasz za osoby, przy pomocy których wykonujesz umowę, jak za siebie (art. 474 k.c.).',
      },
      {
        q: 'Czy zarządca może podpisać umowę z wykonawcą bez uchwały?',
        a: 'Tak, jeżeli zlecenie mieści się w zwykłym zarządzie i w Twoim umocowaniu z umowy. Czynność ponad zwykły zarząd wymaga uchwały właścicieli z pełnomocnictwem (art. 22 ust. 2 u.w.l.), np. zmiana przeznaczenia części wspólnej albo zgoda na nadbudowę (art. 22 ust. 3). Przy zarządzie powierzonym te zasady stosuje się, jeżeli umowa nie stanowi inaczej (art. 33 u.w.l.).',
      },
      {
        q: 'Jak przejąć budynek od poprzedniego zarządcy i co wpisać do protokołu?',
        a: 'Przy zarządzie powierzonym sporządzasz protokół przejęcia nieruchomości i dokumentacji technicznej: budowlanej, powykonawczej i książki obiektu budowlanego (art. 29 ust. 1b u.w.l.). Od tej chwili przechowujesz tę dokumentację i prowadzisz spis właścicieli z udziałami. Do książki obiektu dołącza się protokoły kontroli (art. 64 ust. 3 Pb), więc odnotuj każdy brak, także tych protokołów.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 184a, 184b, 185 ust. 2, 186 ust. 3–3b', act: 'Ustawa o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Zarządca, forma i zakres umowy, obowiązkowe OC.' },
        {
          ref: 'art. 18 ust. 1, 19, 22, 29 ust. 1 i 1b, 33',
          act: 'Ustawa o własności lokali',
          tj: 'Dz.U. 2026 poz. 232',
          eli: 'DU/1994/388',
          note: 'Zarząd powierzony, czynności ponad zwykły zarząd, ewidencja zaliczek, protokół przejęcia.',
        },
        { ref: 'art. 355 § 2, 471, 472, 473, 474', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Odpowiedzialność za nienależyte wykonanie umowy i za osoby, którym je powierzasz.' },
        { ref: 'art. 62 ust. 1, 64 ust. 3', act: 'Prawo budowlane', tj: 'Dz.U. 2026 poz. 524', eli: 'DU/1994/414', note: 'Kontrole okresowe budynku, książka obiektu (art. 64 ust. 3 w brzmieniu z Dz.U. 2026 poz. 605).' },
      ],
    },
    docs: [
      'Umowa o zarządzanie albo jej projekt, z aneksami',
      'Aktualna polisa OC zarządcy',
      'Akt notarialny albo uchwała, na podstawie której zarządzasz, jeśli masz',
      'Protokół przejęcia budynku i protokoły kontroli okresowych, jeśli są',
      'Wezwanie, reklamacja albo pozew od właściciela, wspólnoty lub wykonawcy, jeśli są',
      'Ewidencja zaliczek albo zestawienie zaległości, jeśli chodzi o windykację',
    ],
    guides: [],
    seeAlso: ['windykacja-czynszu', 'nadzor-budowlany-pinb', 'wady-czesci-wspolnych'],
    cta: {
      heading: 'Zarządzaj spokojnie — prawną stronę wezmę na siebie.',
      lead: 'Opisz, czym zarządzasz i co dziś wymaga decyzji: umowa, przejęcie budynku, dłużnik albo roszczenie. W 24 h roboczych dostaniesz bezpłatną informację, co trzeba zrobić, oraz cenę i termin pracy; płacisz dopiero po akceptacji oferty.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-spoldzielni': {
    h1: 'Obsługa prawna spółdzielni mieszkaniowych',
    h1Full: 'Obsługa prawna spółdzielni mieszkaniowych: walne zgromadzenie, uchwały, przekształcenia',
    topic: 'Spółdzielnia mieszkaniowa',
    metaDesc: 'Obsługa prawna spółdzielni mieszkaniowej to walne według zasad z 28.01.2026, obrona uchwał w sądzie i przeniesienie własności lokali.',
    subtitle: 'Zbliża się walne, członek zapowiada pozew o uchylenie uchwały albo żąda przeniesienia własności mieszkania. Obsługa prawna spółdzielni mieszkaniowej to walne według zasad z 28.01.2026, obrona uchwał w sądzie i przeniesienie własności lokali. Zarząd i rada nadzorcza mogą zlecić mi jedną sprawę albo stałą obsługę.',
    short: {
      q: 'Co zmieniła nowelizacja z 4.12.2025 na walnym zgromadzeniu?',
      a: 'Nowelizacja ustawy o spółdzielniach mieszkaniowych od 28.01.2026 określa, kto może być pełnomocnikiem członka na walnym. Pełnomocnikiem członka będącego osobą fizyczną może być osoba bliska, adwokat lub radca prawny albo inny członek tej samej spółdzielni (art. 8³ ust. 1² u.s.m.). Pełnomocnictwo trzeba doręczyć spółdzielni najpóźniej 3 dni przed walnym lub jego pierwszą częścią (ust. 1⁵). Pełnomocnik nie głosuje przy wyborze i odwołaniu członków rady nadzorczej i zarządu (ust. 1⁶).',
      facts: [
        [
          'Pełnomocnik członka (osoby fizycznej)',
          'osoba bliska (bez osoby we wspólnym pożyciu), adwokat lub radca prawny, inny członek; jeden pełnomocnik – jeden członek (art. 8³ ust. 1¹–1² u.s.m.)',
        ],
        [
          'Zawiadomienie o walnym',
          'na piśmie, co najmniej 21 dni przed walnym; projekty uchwał wyłożone co najmniej 14 dni przed (art. 8³ ust. 6 i 10 u.s.m.)',
        ],
        [
          'Pozew o uchylenie uchwały walnego',
          '6 tygodni od dnia odbycia walnego (art. 42 § 6 pr. spółdz.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '200 zł od pozwu o uchylenie uchwały organu spółdzielni (art. 27 pkt 8 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Która ustawa rozstrzyga o ważności uchwały walnego',
    intro: 'Spółdzielnię mieszkaniową regulują dwie ustawy: ustawa o spółdzielniach mieszkaniowych, a w sprawach w niej nieuregulowanych Prawo spółdzielcze (art. 1 ust. 7 u.s.m.). Przy każdej uchwale najpierw sprawdzam, który przepis ją reguluje. Przykład: według Prawa spółdzielczego uchwały zapadają zwykłą większością głosów w obecności co najmniej połowy uprawnionych, chyba że ustawa lub statut stanowią inaczej (art. 41 § 2). Tymczasem walne spółdzielni mieszkaniowej jest ważne niezależnie od liczby obecnych członków (art. 8³ ust. 8 u.s.m.). Przy stałej obsłudze sprawdzam zawiadomienie i projekty uchwał przed każdym walnym.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pozew członka, zbliżające się walne, żądanie przeniesienia własności',
    when: [
      {
        b: 'Członek zapowiedział albo złożył pozew o uchylenie uchwały walnego',
        t: 'ma 6 tygodni od walnego; jeżeli nie był obecny z powodu wadliwego zwołania, 6 tygodni od dowiedzenia się o uchwale, najpóźniej przed upływem roku od walnego (art. 42 § 6 pr. spółdz.).',
      },
      {
        b: 'Członek żąda przeniesienia własności mieszkania, a grunt pod blokiem nie jest uregulowany',
        t: 'spółdzielnia zawiera umowę w 6 miesięcy od wniosku, chyba że stan prawny nieruchomości jest nieuregulowany albo spółdzielnia nie ma własności lub użytkowania wieczystego gruntu (art. 12 ust. 1² i art. 17¹⁴ ust. 1¹ u.s.m.).',
      },
      {
        b: 'Mieszkaniec lokatorskiego mieszkania od pół roku nie płaci opłat',
        t: 'przy zaległości za co najmniej 6 miesięcy spółdzielnia może pozwać o wygaśnięcie spółdzielczego lokatorskiego prawa; sąd go nie orzeknie, jeżeli członek spłaci wszystkie zaległe opłaty przed zamknięciem rozprawy w I instancji, a po apelacji – w II instancji (art. 11 ust. 1¹ u.s.m.).',
      },
      {
        b: 'Członkowie zbierają podpisy pod żądaniem zwołania walnego',
        t: 'na pisemne żądanie co najmniej 1/10 członków, nie mniej niż 3 (statut może wymagać więcej), zarząd zwołuje walne tak, by odbyło się w ciągu 4 tygodni (art. 8³ ust. 3–5 u.s.m.).',
      },
    ],
    doForEyebrow: 'Zakres współpracy',
    doForTitle: 'Co przygotowuję przed walnym i w sporze z członkiem',
    doFor: [
      'Przygotowuję zawiadomienie o walnym, porządek obrad i projekty uchwał w terminach 21 i 14 dni (art. 8³ ust. 6 i 10 u.s.m.).',
      'Dostosowuję regulamin walnego do zmian z 28.01.2026: wzór oświadczenia osoby bliskiej i sprawdzenie pełnomocnictw przed obradami.',
      'Odpowiadam na pozew o uchylenie uchwały albo o ustalenie jej nieważności (art. 42 § 2 i 6 pr. spółdz.).',
      'Prowadzę przeniesienie własności lokali: sprawdzam spłatę zobowiązań związanych z budową i zaległych opłat, przygotowuję dokumenty do aktu (art. 12 ust. 1 i art. 17¹⁴ ust. 1 u.s.m.).',
      'Przygotowuję pozew o wygaśnięcie prawa lokatorskiego albo o licytację lokalu przy prawie własnościowym, z którym zarząd występuje na wniosek rady (art. 11 ust. 1¹ i art. 17¹⁰ u.s.m.).',
      'Opiniuję zmiany statutu i wybory do rady nadzorczej: najwyżej 2 kolejne kadencje po maksymalnie 3 lata, bez pracowników spółdzielni (art. 8² ust. 2–4 u.s.m.).',
    ],
    stepsHeading: 'Od formularza zarządu do pisma w sądzie albo dokumentów na walne',
    steps: [
      'Opisujesz w formularzu sprawę spółdzielni: datę walnego, treść uchwały, pozew członka albo żądanie przeniesienia własności z datą wpływu.',
      'Najpóźniej w 24 h roboczych odpowiadam, czego wymaga sprawa: projektu uchwały, odpowiedzi na pozew czy sprawdzenia gruntu przed przeniesieniem własności. Dołączam ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Po akceptacji oferty przygotowuję dokumenty na walne albo pismo do sądu. W sprawie sądowej pełnomocnictwa udziela mi zarząd, który reprezentuje spółdzielnię na zewnątrz (art. 48 § 1 pr. spółdz.).',
      'Tego kroku nie powtórzysz na sali: termin doręczenia pełnomocnictw i oświadczeń osób bliskich mija 3 dni przed walnym (art. 8³ ust. 1⁵ u.s.m.), więc sprawdzam je wcześniej.',
    ],
    faq: [
      {
        q: 'Kto może być pełnomocnikiem członka i co zarząd sprawdza przed walnym?',
        a: 'Pełnomocnikiem członka będącego osobą fizyczną może być osoba bliska (bez osoby we wspólnym pożyciu), adwokat lub radca prawny albo inny członek tej samej spółdzielni (art. 8³ ust. 1² u.s.m.). Zarząd sprawdza, czy pełnomocnictwo jest na piśmie i wpłynęło najpóźniej 3 dni przed walnym (ust. 1¹ i 1⁵). Pełnomocnictwo dla osoby bliskiej bez jej oświadczenia jest nieważne (ust. 1⁴). W spółdzielni liczącej ponad 10 członków pełnomocnikiem nie może być członek zarządu (art. 36 § 5 pr. spółdz.).',
      },
      {
        q: 'W jakim terminie członek może zaskarżyć uchwałę walnego zgromadzenia?',
        a: 'W ciągu 6 tygodni od dnia odbycia walnego (art. 42 § 6 pr. spółdz.). Jeżeli ustawa lub statut wymagają zawiadomienia członka o uchwale, termin biegnie od zawiadomienia (art. 42 § 7). Sąd może nie uwzględnić upływu terminu (art. 42 § 8). Warunki: utrzymanie uchwały wywołałoby dla członka szczególnie dotkliwe skutki, a opóźnienie usprawiedliwiają wyjątkowe okoliczności i nie jest nadmierne.',
      },
      {
        q: 'Jak przekształcić lokatorskie mieszkanie we własność i ile ma na to spółdzielnia?',
        a: 'Członek składa spółdzielni pisemne żądanie (art. 12 ust. 1 u.s.m.). Wcześniej spłaca przypadającą na lokal część zobowiązań spółdzielni związanych z budową, w tym kredytu z odsetkami, oraz zaległe opłaty. Spółdzielnia zawiera umowę w 6 miesięcy od wniosku (art. 12 ust. 1²). Ten termin nie obowiązuje, jeżeli stan prawny nieruchomości jest nieuregulowany albo spółdzielnia nie ma własności ani użytkowania wieczystego gruntu. Wynagrodzenie notariusza i koszty wpisu do księgi wieczystej ponosi członek (art. 12 ust. 4).',
      },
      {
        q: 'Członek nie płaci opłat. Co może zrobić spółdzielnia?',
        a: 'Pozwać o zapłatę, a przy zaległości za co najmniej 6 miesięcy żądać w sądzie wygaśnięcia spółdzielczego lokatorskiego prawa (art. 11 ust. 1¹ u.s.m.). Przy prawie własnościowym i długotrwałych zaległościach zarząd na wniosek rady żąda sprzedaży lokalu w drodze licytacji (art. 17¹⁰ u.s.m. i art. 16 u.w.l.). Opłaty są płatne z góry do 10. dnia miesiąca; statut może przewidzieć późniejszy termin (art. 4 ust. 6²).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1 ust. 7, art. 4, 8², 8³, 11, 12, 17¹⁰ i 17¹⁴ u.s.m.',
          act: 'Ustawa o spółdzielniach mieszkaniowych',
          tj: 'Dz.U. 2026 poz. 889',
          eli: 'DU/2001/27',
          note: 'opłaty, rada nadzorcza, walne zgromadzenie i pełnomocnicy, przeniesienie własności lokali',
        },
        {
          ref: 'art. 1 pkt 1 i art. 8',
          act: 'Ustawa z 4.12.2025 o zmianie ustawy o spółdzielniach mieszkaniowych oraz niektórych innych ustaw',
          tj: 'Dz.U. 2026 poz. 39',
          eli: 'DU/2026/39',
          note: 'nowe zasady pełnomocnictw na walnym, w życiu od 28.01.2026',
        },
        {
          ref: 'art. 36, 41, 42 i 48 pr. spółdz.',
          act: 'Ustawa – Prawo spółdzielcze',
          tj: 'Dz.U. 2026 poz. 521',
          eli: 'DU/1982/210',
          note: 'pełnomocnik na walnym, większość głosów, zaskarżenie uchwał walnego, reprezentacja przez zarząd',
        },
        { ref: 'art. 16 u.w.l.', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'sprzedaż lokalu w drodze licytacji, stosowana odpowiednio przez art. 17¹⁰ u.s.m.' },
        { ref: 'art. 27 pkt 8 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłata od pozwu o uchylenie uchwały organu spółdzielni' },
      ],
    },
    docs: [
      'Statut i regulamin walnego zgromadzenia w aktualnym brzmieniu',
      'Uchwała, której dotyczy sprawa, z protokołem walnego i listą pełnomocnictw',
      'Pozew albo pismo członka z datą doręczenia spółdzielni',
      'Przy przeniesieniu własności: żądanie członka z datą wpływu i dokumenty prawa do gruntu (jeśli masz)',
      'Przy zaległościach: zestawienie opłat i wpłat lokalu',
    ],
    guides: [],
    seeAlso: ['uregulowanie-stanu-prawnego', 'uzytkowanie-wieczyste'],
    cta: {
      heading: 'Uchwały, które się obronią. Procedury bez potknięć.',
      lead: 'Napisz, kiedy jest walne albo czego dotyczy pozew lub żądanie członka. Najpóźniej w 24 h roboczych wskażę, co jest potrzebne, i prześlę ofertę z ceną i terminem; płacisz dopiero po jej akceptacji.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-firm-budowlanych': {
    h1: 'Obsługa prawna generalnych wykonawców i firm budowlanych',
    h1Full: 'Generalni wykonawcy i firmy budowlane: gwarancja zapłaty, kary, roboty dodatkowe',
    topic: 'Roboty budowlane',
    metaDesc: 'Obsługa prawna firmy budowlanej zaczyna się od gwarancji zapłaty. Bez niej w wyznaczonym terminie (min. 45 dni) możesz odstąpić od umowy (art. 649⁴ k.c.).',
    subtitle: 'Inwestor zalega z płatnościami, nalicza kary za opóźnienie albo nie chce zapłacić za roboty dodatkowe. Obsługę prawną firmy budowlanej zaczynam od zabezpieczenia zapłaty: gwarancji możesz co do zasady żądać w każdym czasie (art. 649³ § 1 k.c.). Przygotowuję umowy i pisma do inwestora oraz prowadzę spory o wynagrodzenie, stale albo przy jednym kontrakcie.',
    short: {
      q: 'Inwestor nie chce dać gwarancji zapłaty – czy mogę odstąpić od umowy?',
      a: 'Tak. Wyznacz inwestorowi termin na gwarancję zapłaty, nie krótszy niż 45 dni. Jeżeli jej nie dostaniesz, możesz odstąpić od umowy z winy inwestora (art. 649⁴ § 1 k.c.). Odstąpienie inwestora spowodowane Twoim żądaniem gwarancji jest bezskuteczne (art. 649² § 2 k.c.).',
      facts: [
        [
          'Kiedy żądać gwarancji zapłaty',
          'W każdym czasie; także podwykonawca wobec generalnego wykonawcy (art. 649³ § 1, art. 649⁵ k.c.). Gdy inwestorem jest Skarb Państwa, art. 649¹ § 1 k.c. nie stosuje się (§ 1¹)',
        ],
        [
          'Forma gwarancji',
          'Gwarancja bankowa lub ubezpieczeniowa, akredytywa bankowa albo poręczenie banku; udokumentowane koszty strony dzielą po połowie (art. 649¹ § 2–3 k.c.)',
        ],
        [
          'Brak gwarancji w terminie',
          'Odstąpienie z winy inwestora ze skutkiem na dzień odstąpienia; brak gwarancji jest przeszkodą z przyczyn dotyczących inwestora (art. 649⁴ § 1–2 k.c.)',
        ],
        [
          'Zapłata podwykonawcy przez inwestora',
          'Solidarnie z generalnym wykonawcą, jeżeli roboty zgłoszono mu na piśmie przed ich rozpoczęciem, a on w 30 dni (albo krótszym terminie z umowy) nie złożył sprzeciwu (art. 647¹ § 1, § 1¹ i § 4 k.c.)',
        ],
      ],
    },
    introHeading: 'Które prawa wykonawcy działają mimo zapisów w umowie',
    intro: 'Umowa o roboty budowlane zobowiązuje inwestora między innymi do przekazania terenu budowy, dostarczenia projektu, odebrania obiektu i zapłaty umówionego wynagrodzenia (art. 647 k.c.). Dwóch zasad nie zmieni żaden zapis kontraktu, także przygotowanego przez inwestora. Prawa wykonawcy do żądania gwarancji zapłaty nie można wyłączyć ani ograniczyć (art. 649² § 1 k.c.). Postanowienia sprzeczne z przepisami o odpowiedzialności inwestora wobec podwykonawców są nieważne (art. 647¹ § 6 k.c.). Kary, odbiory i roboty dodatkowe zależą już od treści kontraktu i od dokumentów z budowy.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Inwestor nie płaci, nalicza kary albo kwestionuje roboty',
    when: [
      { b: 'Inwestor przysłał notę z karą umowną za opóźnienie.', t: 'Liczy się treść umowy i przyczyna opóźnienia (art. 476 k.c.).' },
      {
        b: 'Faktury za odebrane etapy wiszą, a budowę finansujesz z własnych pieniędzy.',
        t: 'Możesz żądać gwarancji zapłaty (art. 649³ § 1 k.c.) albo wyznaczyć dodatkowy termin na zapłatę z zagrożeniem odstąpienia (art. 491 § 1 k.c.).',
      },
      { b: 'Jesteś podwykonawcą, a generalny wykonawca nie płaci.', t: 'Zapłaty możesz żądać od inwestora, jeżeli przed rozpoczęciem robót zgłoszono mu je na piśmie i nie złożył sprzeciwu (art. 647¹ k.c.).' },
      { b: 'Inwestor zlecił roboty dodatkowe ustnie, a teraz mówi, że były w cenie.', t: 'Spór dotyczy tego, co obejmował projekt z umowy (art. 649 k.c.), i akceptacji inwestora.' },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Umowy i pisma, które przygotowuję dla wykonawcy',
    doFor: [
      'Sprawdzam umowę o roboty budowlane albo kontrakt FIDIC przed podpisem: kary, odbiory częściowe, terminy zapłaty, roboty dodatkowe.',
      'Przygotowuję żądanie gwarancji zapłaty z terminem co najmniej 45 dni, a jeżeli gwarancji nie będzie, oświadczenie o odstąpieniu.',
      'Piszę zgłoszenia podwykonawców do inwestora na piśmie i pilnuję terminu na jego sprzeciw (art. 647¹ § 1¹ i § 4 k.c.).',
      'Odpowiadam na noty z karami umownymi: kwestionuję zwłokę albo żądam zmniejszenia kary (art. 484 § 2 k.c.).',
      'Prowadzę spory o wynagrodzenie, kary i roboty dodatkowe, od wezwania do zapłaty po pozew.',
    ],
    lists: [
      {
        eyebrow: 'Roszczenia wykonawcy',
        title: 'Czego żądasz, na jakiej podstawie i czym to udowodnisz',
        items: [
          {
            b: 'Zapłata od inwestora dla podwykonawcy',
            t: 'Art. 647¹ k.c. Dowód: pisemne zgłoszenie doręczone przed rozpoczęciem robót albo pisemna umowa inwestora z wykonawcą, która określa szczegółowy przedmiot Twoich robót.',
          },
          {
            b: 'Roboty dodatkowe',
            t: 'Podstawa: umowa i jej zmiany. Roboty zaakceptowane na piśmie wchodzą też do kwoty gwarancji zapłaty (art. 649³ § 1 k.c.). Dowód: opis prac spoza projektu (art. 649 k.c.) i pisemna akceptacja inwestora.',
          },
          { b: 'Obrona przed karą za zwłokę', t: 'Art. 476, art. 651 k.c. Dowód: zawiadomienia o przeszkodach, wpisy w dzienniku budowy, daty przekazania terenu i projektu.' },
          { b: 'Zapłata za odebrany etap', t: 'Art. 654 k.c., jeżeli umowa nie stanowi inaczej. Dowód: żądanie odbioru częściowego i protokół.' },
        ],
      },
    ],
    stepsHeading: 'Od opisu kontraktu do pisma do inwestora',
    steps: [
      'Opisujesz kontrakt albo spór: Twoją rolę na budowie i kwotę zaległości albo kary.',
      'W ciągu 24 h roboczych dostajesz listę pism potrzebnych w tym kontrakcie, np. żądanie gwarancji zapłaty. Dołączam ofertę z ceną i terminem wykonania tych pism; do jej przyjęcia nic nie płacisz.',
      'Po akceptacji analizuję umowę, harmonogram i korespondencję z budowy, potem piszę do inwestora, w tym zawiadomienia o przeszkodach (art. 651 k.c.).',
      'Krok nieodwracalny: odstąpienie od umowy. Wysyłam je po Twojej decyzji, bo po dojściu do inwestora nie da się go odwołać (art. 61 § 1 k.c.). Wcześniej spisujemy z datą stan wykonanych robót.',
      'Jeżeli zapłaty nadal nie ma, składam pozew o wynagrodzenie.',
    ],
    faq: [
      {
        q: 'Czy podwykonawca może żądać zapłaty od inwestora?',
        a: 'Tak, jeżeli szczegółowy przedmiot Twoich robót zgłoszono inwestorowi na piśmie przed ich rozpoczęciem (art. 647¹ § 1 i § 4 k.c.). Inwestor może w ciągu 30 dni złożyć sprzeciw; umowa może ten termin skrócić (§ 1¹). Zgłoszenie nie jest potrzebne, jeżeli Twoje roboty określa pisemna umowa inwestora z wykonawcą (§ 2). Inwestor odpowiada do kwoty z Twojej umowy z wykonawcą, ale nie ponad wynagrodzenie należne wykonawcy za te roboty (§ 3).',
      },
      {
        q: 'Jak obniżyć naliczone kary umowne?',
        a: 'Możesz wykazać, że nie było zwłoki, albo żądać zmniejszenia kary. Zwłoki nie ma, jeżeli opóźnienie wynika z okoliczności, za które nie odpowiadasz (art. 476 k.c.). Przykład: inwestor późno przekazał teren budowy albo projekt (art. 647 k.c.). Umowa może jednak rozszerzyć Twoją odpowiedzialność (art. 473 § 1 k.c.). Zmniejszenia kary możesz żądać, jeżeli wykonałeś zobowiązanie w znacznej części albo kara jest rażąco wygórowana (art. 484 § 2 k.c.).',
      },
      {
        q: 'Jak udokumentować roboty dodatkowe, żeby za nie zapłacono?',
        a: 'Zanim zaczniesz, weź od inwestora pisemną akceptację z opisem zakresu. Roboty dodatkowe lub konieczne zaakceptowane na piśmie wchodzą do kwoty gwarancji zapłaty (art. 649³ § 1 k.c.). Jeżeli roboty zlecono ustnie, zbierz maile, wpisy w dzienniku budowy i protokoły, które pokazują zlecenie i jego zakres. W razie wątpliwości roboty objęte projektem z umowy należą do Twojego zakresu (art. 649 k.c.).',
      },
      {
        q: 'Czy mogę zejść z budowy, gdy inwestor nie płaci?',
        a: 'Nie, jeżeli nie masz do tego podstawy w umowie albo w ustawie. Przerwanie robót bez podstawy może oznaczać zwłokę i karę umowną, jeżeli umowa ją przewiduje (art. 476, art. 484 § 1 k.c.). Podstawę daje żądanie gwarancji zapłaty: po bezskutecznym upływie terminu możesz odstąpić od umowy (art. 649⁴ § 1 k.c.). Jeżeli byłeś gotów pracować, a przeszkodą był brak gwarancji, inwestor nie może odmówić zapłaty; odliczy to, co zaoszczędziłeś (art. 649⁴ § 2–3 k.c.).',
      },
      {
        q: 'FIDIC czy kodeks cywilny – co podpisać?',
        a: 'Nie musisz wybierać: warunki FIDIC to wzór kontraktu, a do umowy podlegającej prawu polskiemu stosuje się kodeks. Strony mogą ułożyć umowę według swego uznania, ale nie wbrew ustawie (art. 353¹ k.c.). Postanowienie sprzeczne z ustawą jest co do zasady nieważne (art. 58 § 1 k.c.). Przed podpisem sprawdzam przede wszystkim warunki szczególne.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 647, art. 649, art. 651, art. 654',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Obowiązki stron, zakres robót, przeszkody, odbiory częściowe.',
        },
        { ref: 'art. 647¹', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Zapłata podwykonawcy przez inwestora.' },
        { ref: 'art. 649¹–649⁵', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Gwarancja zapłaty i odstąpienie.' },
        { ref: 'art. 473 § 1, art. 476, art. 484', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Zwłoka, kara umowna i jej zmniejszenie.' },
        {
          ref: 'art. 58 § 1, art. 61 § 1, art. 353¹, art. 491 § 1',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Granice swobody umów, odwołanie oświadczenia, termin dodatkowy.',
        },
      ],
    },
    docsHeading: 'Roboty budowlane: co przesłać do wstępnej analizy.',
    docs: [
      'Umowę o roboty budowlane albo podwykonawczą z aneksami, harmonogramem i kosztorysem.',
      'Faktury, protokoły odbioru częściowego i potwierdzenia zapłat.',
      'Maile z inwestorem, wpisy w dzienniku budowy, zawiadomienia z budowy, jeśli je masz.',
      'Notę z karą umowną albo wezwanie do zapłaty, jeśli je dostałeś.',
      'Zgłoszenie podwykonawcy do inwestora i odpowiedź inwestora, jeśli są.',
    ],
    guides: [],
    seeAlso: ['umowa-o-roboty-budowlane', 'spory-z-wykonawca'],
    cta: {
      heading: 'Zabezpieczona umowa i pewna zapłata — zanim wejdziesz na budowę.',
      lead: 'Opisz kontrakt albo spór z inwestorem lub generalnym wykonawcą. W 24 h roboczych wskażę, które pismo wysłać najpierw, a w tej samej wiadomości przyjdzie oferta z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-architektow': {
    h1: 'Obsługa prawna pracowni architektonicznych i projektantów',
    h1Full: 'Pracownie architektoniczne i projektanci: prawa autorskie do projektu i umowy',
    topic: 'Prawa autorskie do projektu',
    metaDesc: 'Prawa autorskie do projektu ma co do zasady twórca. Inwestor korzysta z niego na polach z umowy, a bez innego zapisu ma prawo do jednej budowy.',
    subtitle: 'Inwestor stawia drugi budynek z Twojego projektu albo zleca jego przeróbkę innemu projektantowi. Prawa autorskie do projektu architektonicznego ma co do zasady twórca, a inwestor korzysta z niego według umowy i ustawy (art. 8 ust. 1, art. 41 ust. 2, art. 61 pr. aut.). Piszę umowy projektowe i licencje, a gdy inwestor wyjdzie poza ich zakres albo nie płaci, prowadzę spór.',
    short: {
      q: 'Kto ma prawa autorskie do projektu architektonicznego i co może z nim zrobić inwestor?',
      a: 'Co do zasady twórca projektu (art. 8 ust. 1 pr. aut.). Przeniesienie praw i licencja obejmują tylko pola eksploatacji wyraźnie wymienione w umowie (art. 41 ust. 2 pr. aut.). Bez wyraźnego zapisu o przeniesieniu umowa jest licencją (art. 65 pr. aut.).',
      facts: [
        [
          'Przeniesienie praw',
          'na polach eksploatacji z umowy, w formie pisemnej pod rygorem nieważności (art. 41 ust. 2, art. 53 pr. aut.)',
        ],
        ['Licencja bez zapisu o czasie', '5 lat, potem wygasa (art. 66 pr. aut.)'],
        [
          'Druga budowa z projektu',
          'egzemplarz projektu daje prawo do jednej budowy, jeżeli umowa nie stanowi inaczej (art. 61 pr. aut.)',
        ],
        [
          'Zmiany w projekcie',
          'bez zgody twórcy tylko z oczywistej konieczności i gdy twórca nie miałby słusznej podstawy się sprzeciwić (art. 49 ust. 2 pr. aut.)',
        ],
        [
          'Wynagrodzenie za prawa',
          'należy się twórcy za przeniesienie praw i licencję, chyba że z umowy wynika nieodpłatność (art. 43 ust. 1 pr. aut.)',
        ],
      ],
    },
    introHeading: 'Kiedy projekt jest utworem i kto ma do niego prawa w pracowni, a kto u inwestora',
    intro: 'Projekt architektoniczny o twórczym i indywidualnym charakterze jest utworem chronionym od chwili ustalenia, bez żadnych formalności (art. 1 ust. 1, ust. 2 pkt 6, ust. 3 i 4 pr. aut.). Od pracownika pracownia nabywa autorskie prawa majątkowe z chwilą przyjęcia projektu i w granicach celu umowy o pracę (art. 12 ust. 1 pr. aut.). Od projektanta na umowie cywilnej pracownia potrzebuje pisemnej umowy przeniesienia praw, żeby przenieść je dalej na inwestora (art. 53, art. 41 ust. 1 pkt 2 pr. aut.). Prawo do nienaruszalności treści i formy projektu zostaje przy twórcy i nie można go zbyć (art. 16 pkt 3 pr. aut.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Inwestor nie płaci, buduje drugi raz, przerabia projekt albo wzywa na nadzór',
    when: [
      {
        b: 'Inwestor odebrał projekt, ale nie zapłacił ostatniej raty.',
        t: 'Jeżeli umowa przenosi prawa i nie ustala innego momentu, przeszły one na inwestora z chwilą przyjęcia projektu (art. 64 pr. aut.). Zostaje roszczenie o zapłatę: wezwanie z terminem, a po nim pozew.',
      },
      {
        b: 'Inwestor postawił drugi budynek według Twojego projektu.',
        t: 'Jeżeli umowa nie dała mu więcej, egzemplarz projektu dawał prawo do jednej budowy (art. 61 pr. aut.). Na drugą potrzebna jest zgoda tego, kto ma autorskie prawa majątkowe (art. 17 pr. aut.).',
      },
      {
        b: 'Inny projektant przerabia Twój projekt na zlecenie inwestora.',
        t: 'Korzystanie z przerobionego projektu wymaga Twojego zezwolenia, także gdy przeniosłeś całość praw majątkowych, chyba że umowa stanowi inaczej (art. 2 ust. 2, art. 46 pr. aut.).',
      },
      {
        b: 'Umowa mówi „przenoszę prawa autorskie”, ale nie wymienia pól eksploatacji.',
        t: 'Przeniesienie obejmuje tylko pola wyraźnie wymienione (art. 41 ust. 2 pr. aut.). Na pozostałych prawo zostaje przy tym, kto przenosił prawa: twórcy albo pracowni (art. 17 pr. aut.).',
      },
      {
        b: 'Inwestor wzywa Cię na budowę, a umowa milczy o nadzorze autorskim.',
        t: 'Inwestor może zobowiązać projektanta do nadzoru autorskiego (art. 18 ust. 3 Pb); obejmuje on zgodność robót z projektem i rozwiązania zamienne (art. 20 ust. 1 pkt 4 Pb).',
      },
    ],
    doForTitle: 'Co przygotowuję dla pracowni i projektanta',
    doFor: [
      'Umowę projektową albo wzór umowy pracowni na kolejne zlecenia, także w stałej współpracy: zakres opracowań, terminy etapów, odbiór i wynagrodzenie.',
      'Zapisy o prawach: przeniesienie albo licencja, pola eksploatacji, liczba budów, czas licencji, zgoda na zmiany i moment przejścia praw (art. 41, 61, 64 pr. aut.).',
      'Zasady nadzoru autorskiego: liczba pobytów na budowie, tryb uzgadniania rozwiązań zamiennych, osobne wynagrodzenie.',
      'Ograniczenie rękojmi za wady projektu w umowie z inwestorem-przedsiębiorcą (art. 638 § 1 i art. 558 § 1 k.c.). Wobec inwestora-konsumenta ograniczenie wymaga podstawy w przepisie szczególnym.',
      'Umowy z projektantami współpracującymi z pracownią. Wezwania do zapłaty za projekt i nadzór, a przy naruszeniu praw wezwanie do inwestora i pozew.',
    ],
    stepsHeading: 'Jak zaczynamy: od nowej umowy albo od sporu o projekt',
    steps: [
      'Przesyłasz umowę z inwestorem albo swój wzór. Piszesz, czy chodzi o nowy kontrakt, czy o spór o oddany projekt lub niezapłaconą fakturę.',
      'Odpisuję w 24 h roboczych, co trzeba zrobić przy tym projekcie, np. przepisać klauzulę o prawach, przygotować licencję na kolejną budowę albo wezwanie do inwestora. Dołączam ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Po akceptacji oferty przy nowej umowie wysyłam projekt klauzul o polach eksploatacji, liczbie budów i nadzorze. Przy sporze wysyłam inwestorowi wezwanie z terminem, a po jego bezskutecznym upływie składam pozew.',
      'Krok nieodwracalny: podpis umowy przenoszącej prawa. Z chwilą przyjęcia projektu inwestor ma wyłączne prawo korzystania z niego na polach z umowy (art. 64 pr. aut.), więc listę pól i liczbę budów zamykamy przed podpisem.',
    ],
    faq: [
      {
        q: 'Inwestor wykorzystał mój projekt drugi raz – co mogę zrobić?',
        a: 'Możesz żądać zaniechania naruszania, usunięcia jego skutków, naprawienia szkody lub wydania uzyskanych korzyści (art. 79 ust. 1 pr. aut.). Roszczenia przysługują Ci, jeżeli nie przeniosłeś autorskich praw majątkowych. Najpierw sprawdzam, czy umowa nie dała inwestorowi prawa do więcej niż jednej budowy (art. 61 pr. aut.), potem wysyłam wezwanie.',
      },
      {
        q: 'Licencja czy przeniesienie praw – co wpisać do umowy?',
        a: 'Przeniesienie, jeżeli inwestor ma przejąć prawa na polach z umowy (art. 64 pr. aut.). Licencję, jeżeli prawa mają zostać przy Tobie. Licencja wyłączna daje inwestorowi wyłączność, a niewyłączna pozwala Ci udzielać jej także innym (art. 67 ust. 2 pr. aut.). Przeniesienie i licencja wyłączna wymagają formy pisemnej pod rygorem nieważności (art. 53, art. 67 ust. 5 pr. aut.).',
      },
      {
        q: 'Czy inwestor może zmieniać projekt bez mojej zgody?',
        a: 'Co do zasady nie, nawet gdy nabył całość praw majątkowych (art. 49 ust. 2 pr. aut.). Wyjątek: zmianę wymusza oczywista konieczność, a Ty nie masz słusznej podstawy się sprzeciwić. Gdy zmiana zagraża nienaruszalności projektu, możesz żądać zaniechania (art. 78 ust. 1 pr. aut.).',
      },
      {
        q: 'Ile lat odpowiadam za błędy w projekcie?',
        a: 'Nie ma jednego terminu dla wszystkich roszczeń. Osobne przepisy dotyczą roszczeń z umowy o dzieło, rękojmi za wady i szkody osoby spoza umowy (art. 646, art. 568, art. 442¹ k.c.). Właściwy termin ustalam na Twojej umowie i na tym, kto czego żąda. Klauzula zwalniająca Cię z odpowiedzialności za umyślnie wyrządzoną szkodę jest nieważna (art. 473 § 2 k.c.).',
      },
      {
        q: 'Jak rozliczać zmiany projektu w ramach nadzoru autorskiego?',
        a: 'Według umowy, bo Prawo budowlane określa zakres nadzoru (zgodność robót z projektem, rozwiązania zamienne), a nie jego wynagrodzenie (art. 20 ust. 1 pkt 4 Pb). Dlatego w umowie oddzielam nadzór od zmian wymagających nowego opracowania i wpisuję dla nich osobne wynagrodzenie.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1, 2, 8, 12, 16, 17, 41, 43, 46, 49, 53, 61, 64–67, 78, 79',
          act: 'Ustawa o prawie autorskim i prawach pokrewnych',
          tj: 'Dz.U. 2025 poz. 24',
          eli: 'DU/1994/83',
          note: 'Projekt jako utwór, prawa twórcy i pracodawcy, przeniesienie i licencja, wynagrodzenie twórcy, jedna budowa, zmiany w projekcie, roszczenia przy naruszeniu.',
        },
        {
          ref: 'art. 442¹ § 1, art. 473 § 2, art. 558 § 1, art. 568 § 1, art. 638 § 1, art. 646',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Umowa o dzieło i rękojmia za wady, granice ograniczenia odpowiedzialności, przepisy o przedawnieniu.',
        },
        { ref: 'art. 18 ust. 3, art. 20 ust. 1 pkt 4', act: 'Prawo budowlane', tj: 'Dz.U. 2026 poz. 524', eli: 'DU/1994/414', note: 'Nadzór autorski na żądanie inwestora albo organu.' },
      ],
    },
    docsHeading: 'Umowa, projekt, korespondencja: co przesłać do wstępnej analizy',
    docs: [
      'Umowa z inwestorem albo jej projekt, z aneksami; jeśli masz, także wzór umowy pracowni.',
      'Projekt albo jego strona tytułowa z wykazem autorów.',
      'Umowy z projektantami, którzy pracowali przy projekcie.',
      'Korespondencja z inwestorem o zmianach, nadzorze albo płatnościach, z datami, oraz niezapłacone faktury.',
      'Przy sporze: zdjęcia albo ogłoszenie drugiej budowy według Twojego projektu, jeśli masz.',
    ],
    guides: ['warunki-zabudowy-dla-czesci-dzialki', 'przebudowa-czy-nowy-zjazd-nsa'],
    seeAlso: ['pozwolenie-na-budowe', 'warunki-zabudowy'],
    cta: {
      heading: 'Twój projekt, Twoje prawa, Twoje honorarium — dobrze zabezpieczone.',
      lead: 'Opisz, dla kogo projektujesz i na jakiej umowie. W 24 h roboczych odpiszę, co trzeba zrobić z prawami do projektu, nadzorem albo zaległym wynagrodzeniem, i prześlę ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-geodetow': {
    h1: 'Obsługa prawna geodetów',
    h1Full: 'Obsługa prawna geodetów: odpowiedzialność za pomiar, operat i rozgraniczenie',
    topic: 'Prace geodezyjne',
    metaDesc: 'Za szkodę z błędnego pomiaru wykonawca odpowiada wobec zamawiającego (art. 471 k.c.), geodeta także dyscyplinarnie. Piszę umowy, prowadzę spory.',
    subtitle: 'Zamawiający kwestionuje Twój pomiar, starostwo zwróciło operat albo napisał rzecznik dyscyplinarny? Za szkodę z błędnego pomiaru wykonawca prac odpowiada wobec zamawiającego, jeżeli nie zachował należytej staranności (art. 471 i 472 k.c.). Przy umowie o dzieło dochodzi rękojmia za wady (art. 638 § 1 k.c.), a postępowanie dyscyplinarne może być wszczęte niezależnie (art. 46b p.g.k.).',
    short: {
      q: 'Kto odpowiada za błędny pomiar geodety i na jak długo?',
      a: 'Wobec zamawiającego odpowiada wykonawca prac, który zawarł umowę, także za pracowników i podwykonawców (art. 471 i 474 k.c.). Miarą jest staranność zawodowa (art. 355 § 2 k.c., art. 42 ust. 3 p.g.k.). Przy umowie o dzieło zamawiający może z rękojmi obniżyć wynagrodzenie albo odstąpić od umowy, chyba że niezwłocznie usuniesz wadę (art. 638 § 1, art. 560 § 1 k.c.).',
      facts: [
        [
          'Roszczenia z umowy o dzieło, także o Twoje wynagrodzenie',
          'Przedawnienie 2 lata od oddania dzieła, z końcem roku kalendarzowego (art. 646 i 118 k.c.)',
        ],
        [
          'Szkoda osoby spoza umowy, np. sąsiada',
          '3 lata od dowiedzenia się (albo od chwili, gdy mógł się dowiedzieć) o szkodzie i osobie odpowiedzialnej, z końcem roku; najwyżej 10 lat od zdarzenia (art. 442¹ § 1 i 118 k.c.)',
        ],
        [
          'Negatywna weryfikacja w starostwie',
          '14 dni od otrzymania protokołu na stanowisko na piśmie, 3 miesiące na poprawione wyniki (art. 12b ust. 7 i 7a p.g.k.)',
        ],
        [
          'Postępowanie dyscyplinarne',
          'Kary od upomnienia do odebrania uprawnień; wszczęcie co do zasady w 3 lata od czynu, karalność ustaje po 5 latach (art. 46a ust. 1, art. 46c p.g.k.)',
        ],
      ],
    },
    introHeading: 'Jeden błąd w pomiarze, trzy tory: starostwo, zamawiający, rzecznik dyscyplinarny',
    intro: 'Jeden błąd w pomiarze może mieć trzy skutki naraz: negatywną weryfikację zgłoszonych prac w starostwie (art. 12b p.g.k.), roszczenie zamawiającego albo sąsiada (art. 471 i 415 k.c.) i postępowanie dyscyplinarne (art. 46 p.g.k.). Każdy tor ma inny organ i inny termin, więc zaczynam od ustalenia, który już biegnie. Odpowiedzialność dyscyplinarna dotyczy samodzielnych funkcji, czyli czynności wymagających uprawnień zawodowych, m.in. kierowania zgłoszonymi pracami, czynności przy rozgraniczeniu i wytyczania obiektów budowlanych (art. 42 ust. 1 i 2 p.g.k.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pismo ze starostwa, od zamawiającego albo od rzecznika dyscyplinarnego',
    when: [
      { b: 'Starostwo zwróciło wyniki prac z protokołem negatywnej weryfikacji.', t: 'Bez poprawionych wyników w 3 miesiące od otrzymania protokołu prace uznaje się za zaniechane (art. 12b ust. 7b p.g.k.).' },
      {
        b: 'Rzecznik dyscyplinarny zawiadomił Cię o postępowaniu wyjaśniającym.',
        t: 'Jeżeli złoży wniosek o ukaranie, jako obwiniony masz prawo do obrońcy, którym może być adwokat (art. 46e ust. 2, art. 46l ust. 3, art. 46m ust. 2 p.g.k.).',
      },
      { b: 'Strona rozgraniczenia nie zgadza się z granicą z Twojego protokołu.', t: 'Bez ugody i podstaw do decyzji tymczasowo utrwalasz punkty graniczne i sporządzasz opinię dla wójta (art. 34 ust. 1 p.g.k.).' },
      {
        b: 'Zamawiający nie płaci, bo „pomiar jest zły”.',
        t: 'Wynagrodzenie należy się przy oddaniu dzieła, jeżeli umowa nie stanowi inaczej (art. 642 § 1 k.c.); przy wadzie zamawiający może je obniżyć (art. 638 § 1, art. 560 § 1 k.c.).',
      },
    ],
    doForTitle: 'Od umowy na pomiar po komisję dyscyplinarną',
    doFor: [
      'Piszę i opiniuję umowy na prace geodezyjne: cel opracowania, termin oddania, odbiór i oznaczone okoliczności, za które przyjmujesz odpowiedzialność, choć ustawa jej nie przewiduje (art. 473 § 1 k.c.).',
      'Piszę stanowisko do protokołu negatywnej weryfikacji i odwołanie od decyzji o odmowie przyjęcia wyników do zasobu (art. 12b ust. 7 i 8 p.g.k.).',
      'Odpowiadam na reklamacje i wezwania do zapłaty odszkodowania, dochodzę Twojego wynagrodzenia i reprezentuję Cię w sądzie; jeśli masz OC, włączam ubezpieczyciela.',
      'Bronię Cię przed wojewódzką komisją dyscyplinarną, Odwoławczą Komisją Dyscyplinarną i sądem apelacyjnym (art. 46g, 46n, 46p p.g.k.).',
    ],
    stepsHeading: 'Jak prowadzę sprawę geodety',
    steps: [
      'Opisujesz w formularzu, czego dotyczy sprawa, i podajesz datę otrzymania protokołu, reklamacji albo zawiadomienia rzecznika, bo od niej liczą się terminy.',
      'Na podstawie protokołu albo reklamacji w 24 h roboczych bezpłatnie odpisuję, czy potrzebne jest stanowisko do starostwa, odpowiedź zamawiającemu czy obrona przed rzecznikiem, i wysyłam ofertę z ceną i terminem. Nie oceniam jeszcze, czy pomiar był prawidłowy; do akceptacji oferty nic nie płacisz.',
      'Po akceptacji czytam operat i korespondencję. Odpowiedź na reklamację piszemy razem: uznanie roszczenia przerywa przedawnienie, które potem biegnie od nowa (art. 123 § 1 pkt 2, art. 124 § 1 k.c.).',
      'Przy sporze reprezentuję Cię przed starostą, wojewódzkim inspektorem, komisją dyscyplinarną albo sądem.',
    ],
    faq: [
      {
        q: 'Pracownik źle wytyczył budynek – kto odpowiada wobec inwestora?',
        a: 'Wykonawca prac, który zawarł umowę z inwestorem, czyli Twoja firma: za pracownika odpowiada jak za własne działanie (art. 474 k.c.). Zwolnisz się, jeżeli wykażesz, że błąd wynika z okoliczności, za które nie odpowiadasz (art. 471 k.c.). Gdy inwestor przyczynił się do szkody, odszkodowanie się zmniejsza, zwłaszcza według stopnia winy obu stron (art. 362 k.c.).',
      },
      {
        q: 'Ile lat zamawiający może dochodzić roszczeń za mój pomiar?',
        a: 'Przy umowie o dzieło 2 lata od oddania dzieła albo od dnia, w którym miało być oddane (art. 646 k.c.). Sąsiad spoza umowy ma 3 lata od dowiedzenia się o szkodzie i osobie odpowiedzialnej, najwyżej 10 lat od zdarzenia (art. 442¹ § 1 k.c.). Terminy 2 i 3 lat kończą się ostatniego dnia roku kalendarzowego (art. 118 k.c.). Rękojmia za wady ma własne terminy (art. 568 k.c.).',
      },
      {
        q: 'Mam OC – czy zamawiający może żądać odszkodowania od mojego ubezpieczyciela?',
        a: 'Tak, poszkodowany może dochodzić odszkodowania bezpośrednio od ubezpieczyciela OC (art. 822 § 4 k.c.). Polisa obejmuje szkody ze zdarzeń w okresie ubezpieczenia, chyba że umowa stanowi inaczej (art. 822 § 2 i 3 k.c.). Dlatego przy reklamacji sprawdzam datę pomiaru i okres polisy.',
      },
      {
        q: 'Starostwo nie przyjęło operatu do zasobu – co mogę zrobić?',
        a: 'Masz 14 dni od otrzymania protokołu negatywnej weryfikacji na stanowisko na piśmie (art. 12b ust. 7 p.g.k.). Gdy organ go nie uwzględni, wydaje decyzję o odmowie przyjęcia wyników (art. 12b ust. 8). Od decyzji starosty odwołujesz się do wojewódzkiego inspektora nadzoru geodezyjnego (WINGiK) za pośrednictwem starosty, w 14 dni od doręczenia decyzji (art. 7b ust. 2 pkt 2 p.g.k., art. 129 § 1 i 2 k.p.a.).',
      },
      {
        q: 'Strony nie zawarły przede mną ugody – co dalej z rozgraniczeniem?',
        a: 'Wójt wyda decyzję, jeżeli granicę ustaliłeś z dowodów albo zgodnego oświadczenia stron (art. 33 ust. 1 p.g.k.). Wcześniej ocenia Twoje czynności i przy wadach zwraca dokumentację do poprawy i uzupełnienia (art. 33 ust. 2 pkt 1). Gdy podstaw do decyzji nie ma, po Twojej opinii wójt umarza postępowanie i z urzędu przekazuje sprawę sądowi (art. 34 ust. 1 i 2).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 6a ust. 1, 7b ust. 2, 12b, 33, 34, 42, 46–46p',
          act: 'Ustawa – Prawo geodezyjne i kartograficzne',
          tj: 'Dz.U. 2024 poz. 1151',
          eli: 'DU/1989/163',
          note: 'Weryfikacja wyników, rozgraniczenie, uprawnienia, odpowiedzialność dyscyplinarna.',
        },
        {
          ref: 'art. 118, 123, 124, 355 § 2, 362, 415, 442¹, 471–474, 560, 568, 638, 642, 646, 822',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Odpowiedzialność za szkodę i wady dzieła, przedawnienie, wynagrodzenie, OC.',
        },
        { ref: 'art. 127 § 1, 129 § 1–2', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'Odwołanie od decyzji o odmowie przyjęcia wyników.' },
      ],
    },
    docs: [
      'Umowa albo zlecenie prac z korespondencją z zamawiającym',
      'Zgłoszenie prac i protokół weryfikacji, jeśli jest',
      'Operat, mapa albo szkic, którego dotyczy spór',
      'Reklamacja, wezwanie, pozew albo zawiadomienie rzecznika, jeśli przyszły',
      'Polisa OC, jeśli masz',
    ],
    guides: ['zawyzony-podatek-od-nieruchomosci-blad-w-ewidencji'],
    seeAlso: ['uregulowanie-stanu-prawnego', 'zniesienie-wspolwlasnosci', 'droga-konieczna'],
    cta: {
      heading: 'Tam, gdzie kończy się pomiar, a zaczyna spór — jestem po Twojej stronie.',
      lead: 'Napisz, czego dotyczy sprawa i kiedy otrzymałeś protokół, reklamację albo zawiadomienie rzecznika. W 24 h roboczych bezpłatnie odpiszę, co trzeba zrobić, i wyślę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-rzeczoznawcow': {
    h1: 'Obsługa prawna rzeczoznawców majątkowych',
    h1Full: 'Obsługa prawna rzeczoznawców majątkowych: operaty i odpowiedzialność zawodowa',
    topic: 'Wycena nieruchomości',
    metaDesc: 'Rzeczoznawca odpowiada zawodowo za naruszenie art. 175 ust. 1–3 u.g.n. Karę orzeka minister po postępowaniu przed Komisją. Możesz mieć obrońcę.',
    subtitle: 'Dostałeś zawiadomienie o postępowaniu z tytułu odpowiedzialności zawodowej albo strona podważa Twój operat? Rzeczoznawca majątkowy odpowiada zawodowo, jeżeli narusza obowiązki z art. 175 ust. 1–3 u.g.n. (art. 178 ust. 1 u.g.n.). Występuję jako Twój obrońca przed Komisją Odpowiedzialności Zawodowej, odpowiadam na zarzuty do operatu i piszę umowy o wycenę.',
    short: {
      q: 'Na czym polega odpowiedzialność zawodowa rzeczoznawcy majątkowego?',
      a: 'Odpowiadasz, jeżeli naruszysz m.in. szczególną staranność, zasady etyki zawodowej, bezstronność, obowiązek doskonalenia kwalifikacji albo tajemnicę zawodową (art. 175 ust. 1–3, art. 178 ust. 1 u.g.n.). Sprawę wyjaśnia Komisja Odpowiedzialności Zawodowej, a karę albo umorzenie orzeka minister w decyzji (art. 194 ust. 2, art. 195a ust. 1 u.g.n.). Postępowania nie wszczyna się, jeżeli minister dowiedział się o zdarzeniu po upływie 3 lat od niego (art. 194 ust. 1c u.g.n.).',
      facts: [
        [
          'Kto wszczyna postępowanie',
          'minister właściwy do spraw budownictwa; wobec biegłego sądowego tylko na skargę sądu albo prokuratora (art. 194 ust. 1a i 1b u.g.n.)',
        ],
        [
          'Kary',
          'upomnienie, nagana, zawieszenie uprawnień na 3 miesiące do 1 roku albo do ponownego egzaminu, pozbawienie uprawnień (art. 178 ust. 2 u.g.n.)',
        ],
        [
          'Obrońca',
          'z wyboru albo z urzędu; o obrońcę z urzędu prosisz najpóźniej 7 dni przed posiedzeniem zespołu (art. 195 ust. 2 u.g.n., § 10 ust. 2 rozporządzenia z 28.08.2025)',
        ],
        [
          'Od decyzji o karze',
          'wniosek o ponowne rozpatrzenie sprawy w 14 dni od doręczenia albo od razu skarga do sądu administracyjnego w 30 dni (art. 127 § 3 i art. 129 § 2 k.p.a., art. 52 § 3 i art. 53 § 1 p.p.s.a.)',
        ],
        [
          'Kiedy kara jest wykonywana',
          '14 dni po bezskutecznym upływie terminu na wniosek o ponowne rozpatrzenie sprawy, przez wpis do centralnego rejestru rzeczoznawców majątkowych (art. 195a ust. 1a, art. 178 ust. 2c u.g.n.)',
        ],
      ],
    },
    introHeading: 'Za operat odpowiadasz zawodowo przed ministrem i cywilnie przed zamawiającym',
    intro: 'Operat szacunkowy to Twoja opinia o wartości nieruchomości sporządzona na piśmie (art. 156 ust. 1 u.g.n.). Za jego sporządzenie odpowiadasz zawodowo przed ministrem (art. 178 ust. 1 u.g.n.) i cywilnie przed zamawiającym, jeżeli wyrządzisz mu szkodę nienależytym wykonaniem umowy (art. 471 k.c.). Na podstawie umowy prawidłowość operatu ocenia organizacja zawodowa rzeczoznawców, najpóźniej w 2 miesiące od zawarcia umowy o ocenę (art. 157 ust. 1 u.g.n.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Zawiadomienie o postępowaniu zawodowym, decyzja o karze albo zarzuty do operatu',
    when: [
      {
        b: 'Dostałeś zawiadomienie o pierwszym posiedzeniu zespołu Komisji z terminem na wyjaśnienia.',
        t: 'Na posiedzeniu przewodniczący zespołu przedstawia zarzuty wobec Ciebie i informuje Cię o Twoich prawach i obowiązkach (§ 14 ust. 1 pkt 3 i 4 rozporządzenia z 28.08.2025).',
      },
      {
        b: 'Minister wydał decyzję o karze, np. o zawieszeniu uprawnień.',
        t: 'Jeżeli po wniosku o ponowne rozpatrzenie minister przekaże sprawę Komisji, bada ją zespół z innych członków (art. 195a ust. 2 u.g.n., § 7 ust. 4 rozporządzenia z 28.08.2025).',
      },
      { b: 'Strona podważa Twój operat wyceną innego rzeczoznawcy.', t: 'Inna wycena tej samej nieruchomości nie może być podstawą oceny prawidłowości Twojego operatu przez organizację zawodową (art. 157 ust. 2 u.g.n.).' },
      {
        b: 'Bank, kupujący albo urząd użył Twojego operatu bez Twojej zgody do innego celu niż ten, dla którego go robiłeś.',
        t: 'Za wykorzystanie operatu bez Twojej zgody do innego celu nie odpowiadasz (art. 156 ust. 2 u.g.n.).',
      },
      {
        b: 'Jako biegły sądowy dostałeś zarzuty stron do swojej opinii.',
        t: 'O ocenę operatu biegłego może wnioskować tylko sąd, a postępowanie zawodowe wszczyna się wtedy wyłącznie na skargę sądu albo prokuratora (art. 157 ust. 3, art. 194 ust. 1b u.g.n.).',
      },
    ],
    doForTitle: 'Co robię dla rzeczoznawcy majątkowego w postępowaniu zawodowym i w sporze o operat',
    doFor: [
      'Sprawdzam, czy postępowanie mogło być wszczęte: termin 3 lat, a przy biegłym skargę sądu albo prokuratora.',
      'Piszę wyjaśnienia na pierwsze posiedzenie zespołu i występuję jako Twój obrońca przed Komisją.',
      'Od decyzji o karze składam wniosek o ponowne rozpatrzenie sprawy albo skargę do sądu administracyjnego.',
      'Odpowiadam na zarzuty do operatu przed organem i w sądzie, a gdy to pomaga, zlecam ocenę operatu organizacji zawodowej.',
      'Prowadzę spór z zamawiającym, który żąda odszkodowania za operat.',
      'Piszę umowy o wycenę: cel wyceny, zgoda na inne użycie operatu, granice odpowiedzialności bez wyłączenia szkody umyślnej (art. 473 § 2 k.c.).',
      'Jeżeli sprawy związane z wycenami wracają regularnie, zakres stałej współpracy opisuję w ofercie.',
    ],
    stepsHeading: 'Jak przebiega postępowanie przed Komisją Odpowiedzialności Zawodowej',
    steps: [
      'Minister zawiadamia Cię o wszczęciu postępowania i przekazuje sprawę Komisji (§ 6 ust. 1 rozporządzenia). Przesyłasz mi zawiadomienie i operat, którego dotyczą zarzuty.',
      'Na podstawie zawiadomienia w 24 h roboczych odpisuję, czy przed pierwszym posiedzeniem trzeba złożyć wyjaśnienia i zgłosić obrońcę. Dołączam ofertę obrony z ceną i terminem, a płacisz dopiero, gdy ją przyjmiesz.',
      'Trzyosobowy zespół Komisji ma wyjaśnić sprawę już na pierwszym posiedzeniu, więc wyjaśnienia i dokumenty składamy wcześniej (§ 7 ust. 2, § 11 ust. 1 rozporządzenia). Protokół podpisujesz po jego odczytaniu (§ 11 ust. 4).',
      'Zespół kończy postępowanie protokołem z wnioskiem o karę albo o umorzenie, a minister wydaje decyzję (§ 15 ust. 1 pkt 8 rozporządzenia, art. 195a ust. 1 u.g.n.).',
      'Od doręczenia decyzji o karze masz 14 dni na wniosek o ponowne rozpatrzenie sprawy. Bez wniosku po kolejnych 14 dniach kara trafia do centralnego rejestru rzeczoznawców majątkowych (art. 195a ust. 1a, art. 178 ust. 2c u.g.n.).',
    ],
    faqHeading: 'Odpowiedzialność zawodowa rzeczoznawcy: najczęstsze pytania.',
    faq: [
      {
        q: 'Dostałem zawiadomienie o postępowaniu przed Komisją Odpowiedzialności Zawodowej – co teraz?',
        a: 'Zapisz termin na wyjaśnienia z zawiadomienia i zdecyduj o obrońcy. Nieusprawiedliwione niestawiennictwo nie wstrzyma postępowania (art. 195 ust. 1 u.g.n.). Sprawdź też datę zdarzenia. Jeżeli minister dostał informację o nim po 3 latach, postępowania się nie wszczyna (art. 194 ust. 1c u.g.n.).',
      },
      {
        q: 'Czy w postępowaniu przed komisją mogę mieć obrońcę?',
        a: 'Tak, z wyboru albo z urzędu (art. 195 ust. 2 u.g.n.). Obrońcę z wyboru zgłaszasz Komisji najpóźniej w dniu posiedzenia, z imieniem, nazwiskiem i adresem. Od adwokata i radcy prawnego nie trzeba oświadczenia o zgodzie. O obrońcę z urzędu prosisz najpóźniej 7 dni przed posiedzeniem (§ 10 ust. 1 i 2 rozporządzenia).',
      },
      { q: 'Czy odpowiadam za operat użyty do innego celu?', a: 'Nie, jeżeli użyto go do innego celu bez Twojej zgody (art. 156 ust. 2 u.g.n.). Dlatego cel wyceny wpisz w umowie wprost.' },
      {
        q: 'Jak bronić operatu w sądzie, gdy biegły wycenił inaczej?',
        a: 'Jeżeli jesteś stroną sprawy, np. pozwał Cię zamawiający, możesz wnieść o uzupełnienie lub wyjaśnienie opinii biegłego albo opinię innego biegłego (art. 232, art. 286 k.p.c.). Opinia biegłego powinna zawierać uzasadnienie (art. 285 § 1 k.p.c.). Pokazujesz więc, czy biegły uzasadnił wybór podejścia, metody i nieruchomości podobnych (art. 154 ust. 1 u.g.n.).',
      },
      {
        q: 'Czy zamawiający może żądać odszkodowania za błędny operat?',
        a: 'Tak, jeżeli poniósł szkodę wskutek nienależytego wykonania umowy, chyba że nienależyte wykonanie wynikło z okoliczności, za które nie odpowiadasz (art. 471 k.c.). Przedsiębiorca wyceniający nieruchomości musi mieć obowiązkowe OC. Kopia polisy aktualnej na dzień operatu jest załącznikiem do operatu albo umowy (art. 175 ust. 4 i 4a u.g.n.).',
      },
    ],
    lawHeading: 'Odpowiedzialność zawodowa rzeczoznawcy: podstawa prawna.',
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 154 ust. 1, art. 156, 157, 175, 178, 194, 195, 195a',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'Operat i jego ocena, obowiązki rzeczoznawcy, kary i ich wykonanie, wszczęcie postępowania, obrońca.',
        },
        {
          ref: '§ 6, 7, 9–11, 14, 15',
          act: 'Rozporządzenie Ministra Finansów i Gospodarki z dnia 28 sierpnia 2025 r. w sprawie postępowania z tytułu odpowiedzialności zawodowej rzeczoznawców majątkowych',
          tj: 'Dz.U. 2025 poz. 1198',
          eli: 'DU/2025/1198',
          note: 'Zespół Komisji, posiedzenie, obrońca, prawa rzeczoznawcy, protokół końcowy.',
        },
        { ref: 'art. 127 § 3, art. 129 § 2', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'Wniosek o ponowne rozpatrzenie sprawy.' },
        { ref: 'art. 52 § 3, art. 53 § 1', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'Skarga na decyzję ministra.' },
        { ref: 'art. 471, art. 473 § 2', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Odpowiedzialność wobec zamawiającego.' },
        { ref: 'art. 232, art. 285 § 1, art. 286', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Wnioski dowodowe stron i opinia biegłego w sądzie.' },
      ],
    },
    docsHeading: 'Postępowanie zawodowe i spór o operat: co przesłać do wstępnej analizy.',
    docs: [
      'Zawiadomienie o wszczęciu postępowania albo o posiedzeniu zespołu, z datą doręczenia.',
      'Operat, którego dotyczą zarzuty, z klauzulą aktualności, jeśli była.',
      'Umowa albo zlecenie wyceny z celem wyceny, jeśli masz je na piśmie.',
      'Pisma z zarzutami do operatu, opinia biegłego albo decyzja ministra, jeśli są.',
      'Przy roszczeniu zamawiającego: jego wezwanie i polisa OC aktualna na dzień operatu.',
    ],
    guides: ['wycena-sluzebnosci-przesylu-rzeczoznawca'],
    seeAlso: ['odszkodowanie-wywlaszczenie', 'oplaty-odszkodowania-planistyczne'],
    cta: {
      heading: 'Bronię Twoich wycen — i Ciebie.',
      lead: 'Prześlij zawiadomienie z Komisji albo pismo z zarzutami do operatu, a w 24 h roboczych odpiszę, co trzeba zrobić. Dołączę ofertę z ceną i terminem; przed jej przyjęciem nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-tbs-sim-kooperatyw': {
    metaDesc: 'Kooperatywę mieszkaniową tworzą co najmniej 3 osoby fizyczne na podstawie umowy u notariusza. Piszę tę umowę, a dla SIM i TBS przygotowuję umowy najmu.',
    h1: 'Obsługa prawna TBS, SIM i kooperatyw mieszkaniowych',
    h1Full: 'TBS / SIM i kooperatywy mieszkaniowe: umowa kooperatywy, grunt od gminy, czynsz i partycypacja',
    topic: 'Kooperatywa mieszkaniowa i SIM',
    subtitle: 'Chcesz z innymi rodzinami zbudować dom bez dewelopera albo zarządzasz SIM lub TBS? Kooperatywę mieszkaniową zakładają co najmniej 3 osoby fizyczne, które podpisują umowę u notariusza (art. 4 ust. 2, art. 5 ust. 2 u.k.m.). Piszę umowę kooperatywy, sprawdzam umowę zakupu gruntu od gminy i przygotowuję dokumenty SIM i TBS.',
    short: {
      q: 'Jak założyć kooperatywę mieszkaniową?',
      a: 'Podpisujecie u notariusza umowę kooperatywy albo umowę spółki cywilnej z nazwą „kooperatywa mieszkaniowa” (art. 5, art. 7 u.k.m.). Umowa kooperatywy określa m.in. finansowanie i rozliczenie budowy, reprezentację oraz zasady przystąpienia i odstąpienia członka (art. 6 ust. 1 u.k.m.). Umowa spółki cywilnej wskazuje m.in. inwestycję, planowaną liczbę lokali i udziały na wypadek rozwiązania (art. 7 pkt 2 u.k.m.).',
      facts: [
        ['Ile osób', 'Co najmniej 3, tylko osoby fizyczne (art. 4 ust. 2 u.k.m.)'],
        ['Forma umowy', 'Akt notarialny (art. 5 ust. 2 u.k.m.)'],
        [
          'Długi inwestycji',
          'Członkowie odpowiadają solidarnie (art. 6 ust. 2 u.k.m.; w spółce cywilnej art. 864 k.c.)',
        ],
        [
          'Wpłaty członków',
          'Rachunek powierniczy, chyba że umowa stanowi inaczej; bez ochrony Deweloperskiego Funduszu Gwarancyjnego (art. 8 pkt 1, art. 10 u.k.m.)',
        ],
        [
          'Zostały 2 osoby',
          'Umowa wygasa po 6 miesiącach, jeżeli nikt nie dołączy; nie dotyczy śmierci członka (art. 9 u.k.m.)',
        ],
        [
          'SIM: najem z dojściem do własności',
          'Czynsz i miesięczne raty ceny; po zapłacie całej ceny własność lokalu przechodzi na najemcę (art. 19k ust. 1, art. 19l ust. 4 u.o.p.l.)',
        ],
      ],
    },
    introHeading: 'Wspólna budowa dla siebie czy mieszkania na wynajem',
    intro: 'Kooperatywa mieszkaniowa to co najmniej 3 osoby, które wspólnie kupują grunt i budują mieszkania albo domy dla siebie i swoich dzieci (art. 2 ust. 1 u.k.m.). Ustawa o kooperatywach obowiązuje od 1.03.2023 (art. 39 u.k.m.). SIM (społeczna inicjatywa mieszkaniowa) to spółka z o.o., spółka akcyjna albo spółdzielnia osób prawnych, która buduje mieszkania na wynajem (art. 23 ust. 1, art. 27 ust. 1 u.s.f.r.m.). TBS (towarzystwo budownictwa społecznego) utworzone przed wejściem w życie nowelizacji z 10.12.2020 r. traktuje się jak SIM (art. 24 ust. 5 u.s.f.r.m.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kiedy grupa, gmina albo SIM stawia Cię przed terminem',
    when: [
      {
        b: 'Gmina ogłosiła przetarg na grunt dla kooperatyw, a Wy nie macie jeszcze umowy.',
        t: 'Ofertę składają członkowie działający już na podstawie umowy; jej kopię dołączacie do oferty (art. 13 ust. 2 pkt 1 lit. a, art. 14 ust. 3 pkt 2 lit. c u.k.m.).',
      },
      {
        b: 'Najemca złożył w SIM wniosek o zmianę umowy z rozliczeniem partycypacji.',
        t: 'W 30 dni SIM przedstawia mu na piśmie warunki nowej umowy i daje co najmniej 30 dni na ich przyjęcie albo uwagi (art. 33db ust. 2 u.s.f.r.m.).',
      },
      {
        b: 'Jeden z członków chce wyjść z kooperatywy w trakcie budowy.',
        t: 'Decydują zasady odstąpienia zapisane w umowie kooperatywy (art. 6 ust. 1 pkt 7 u.k.m.). Gdy zostaną 2 osoby, macie 6 miesięcy na znalezienie trzeciej, inaczej umowa wygaśnie (art. 9 ust. 1 u.k.m.).',
      },
      {
        b: 'Wspólnicy SIM albo TBS chcą podnieść czynsz, a rada nadzorcza nie wydała opinii.',
        t: 'Bez opinii rady wyrażonej w uchwale zmiana stawki jest nieważna (art. 28 ust. 1b u.s.f.r.m.). Roczny czynsz to najwyżej 4% wartości odtworzeniowej lokalu z kredytu BGK (wnioski do 30.09.2009), a 5% przy finansowaniu zwrotnym albo w SIM z udziałem KZN (art. 28 ust. 2 u.s.f.r.m.).',
      },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Umowa grupy, przetarg gminy, umowy najmu w SIM',
    doFor: [
      'Piszę umowę kooperatywy albo spółki cywilnej: wkłady, głosowanie, reprezentację, wejście i wyjście członka, rozliczenie budowy (art. 6, art. 7 u.k.m.).',
      'Przygotowuję ofertę do przetargu gminy z oświadczeniami członków i sprawdzam umowę zakupu gruntu: termin zakończenia budowy, prawo odkupu, raty, kary umowne (art. 12–14, art. 16, art. 19 u.k.m.).',
      'Dla SIM i TBS przygotowuję wzory umów najmu, partycypacji i kaucji oraz projekty uchwał o stawkach czynszu (art. 28, art. 29a, art. 32 u.s.f.r.m.).',
      'Przygotowuję warunki umowy z rozliczeniem partycypacji, które SIM przedstawia najemcy w 30 dni od jego wniosku (art. 33db ust. 2 u.s.f.r.m.).',
    ],
    stepsHeading: 'Od umowy grupy do własnego mieszkania',
    steps: [
      'Piszesz w formularzu, na jakim etapie jesteście. W 24 h roboczych odpisuję, od czego zacząć, np. od umowy grupy przed terminem przetargu, i wysyłam ofertę z ceną i terminem. Nic nie płacisz, dopóki nie przyjmiesz oferty.',
      'Ustalam z grupą wkłady, głosowanie i skutki wyjścia członka. Potem podpisujecie umowę u notariusza (art. 5 ust. 2 u.k.m.).',
      'Najważniejszy krok to zakup gruntu. Grunt od gminy kupujecie z zastrzeżeniem prawa odkupu (art. 19 ust. 1 u.k.m.), więc umowę sprawdzam przed podpisem.',
      'Po zakończeniu budowy prowadzę wyodrębnienie lokali albo podział działki między członków (art. 11 ust. 1 u.k.m.).',
    ],
    faq: [
      {
        q: 'Czy odpowiadamy solidarnie za długi kooperatywy?',
        a: 'Tak, za zobowiązania związane z realizacją inwestycji (art. 6 ust. 2 u.k.m.). Wykonawca może żądać całej kwoty od jednego członka (art. 366 § 1 k.c.). Ten członek odzyskuje części od pozostałych według umowy, a gdy umowa milczy, w częściach równych (art. 376 § 1 k.c.).',
      },
      {
        q: 'Co, gdy ktoś chce wyjść z kooperatywy?',
        a: 'Wychodzi na zasadach z umowy kooperatywy, bo ustawa każe je w niej określić (art. 6 ust. 1 pkt 7 u.k.m.). W spółce cywilnej na czas nieoznaczony wspólnik wypowiada udział na 3 miesiące naprzód, na koniec roku obrachunkowego (art. 869 § 1 k.c.).',
      },
      {
        q: 'Czy partycypacja w SIM wraca i jest waloryzowana?',
        a: 'Tak, w lokalach zbudowanych z kredytu BGK (wnioski do 30.09.2009) albo z finansowania zwrotnego. SIM zwraca ją najpóźniej 12 miesięcy po opróżnieniu lokalu (art. 29a ust. 3 u.s.f.r.m.). Kwotę waloryzuje się wskaźnikiem GUS ceny 1 m² budynku mieszkalnego i pomniejsza o 0,75% za każdy rok najmu liczony w pełnych kwartałach.',
      },
      {
        q: 'Jak działa najem z dojściem do własności w SIM?',
        a: 'Płacisz czynsz i miesięczne raty ceny, a po zapłacie ceny SIM przenosi na Ciebie własność lokalu (art. 19k ust. 1, art. 19l ust. 4 u.o.p.l.). Przy partycypacji od 10% kosztów budowy umowa jest na czas nieoznaczony albo z dojściem do własności (art. 29a ust. 2b u.s.f.r.m.). Zmiana starej umowy na taki najem z rozliczeniem partycypacji nie przysługuje w mieście będącym siedzibą wojewody lub sejmiku (art. 33dk ust. 1 u.s.f.r.m.). To samo dotyczy miast na prawach powiatu powyżej 100 tys. mieszkańców.',
      },
      {
        q: 'Czy gmina może sprzedać kooperatywie grunt?',
        a: 'Tak, jeżeli rada gminy uchwali zbycie gruntu wyłącznie członkom kooperatyw i spółdzielniom mieszkaniowym (art. 12 ust. 1 u.k.m.). Sprzedaż odbywa się w przetargu pisemnym ograniczonym (art. 12 ust. 2 u.k.m.). Rada może zgodzić się na raty na 5–20 lat i na bonifikatę (art. 12 ust. 3 i 5 u.k.m.). Gmina ma prawo odkupu, a przez 20 lat od zbycia także prawo pierwokupu (art. 19 ust. 1, art. 27 ust. 1 u.k.m.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2, art. 4–14, art. 16, art. 19, art. 27, art. 39',
          act: 'Ustawa z dnia 4 listopada 2022 r. o kooperatywach mieszkaniowych oraz zasadach zbywania nieruchomości należących do gminnego zasobu nieruchomości w celu wsparcia realizacji inwestycji mieszkaniowych (u.k.m.)',
          tj: 'Dz.U. 2025 poz. 9',
          eli: 'DU/2023/28',
          note: 'Członkowie, umowa kooperatywy i spółki cywilnej, solidarność, wpłaty, przetarg i zbycie gruntu gminy, prawo odkupu i pierwokupu.',
        },
        {
          ref: 'art. 23, art. 24 ust. 5, art. 27, art. 28, art. 29a, art. 32, art. 33db, art. 33dk',
          act: 'Ustawa z dnia 26 października 1995 r. o społecznych formach rozwoju mieszkalnictwa (u.s.f.r.m.)',
          tj: 'Dz.U. 2026 poz. 1242',
          eli: 'DU/1995/654',
          note: 'SIM i dawne TBS, stawki czynszu i ich limit, partycypacja, jej zwrot i rozliczenie.',
        },
        {
          ref: 'art. 19k, art. 19l',
          act: 'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego (u.o.p.l.)',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Najem instytucjonalny z dojściem do własności.',
        },
        {
          ref: 'art. 366 § 1, art. 376 § 1, art. 864, art. 869 § 1',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny (k.c.)',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Solidarność dłużników; spółka cywilna jako forma kooperatywy i wystąpienie wspólnika.',
        },
      ],
    },
    docs: [
      'Lista członków grupy i planowana liczba mieszkań albo domów, jeśli ją macie',
      'Ogłoszenie przetargu gminy albo oznaczenie działki, jeśli już jest',
      'Projekt umowy kooperatywy albo spółki cywilnej, jeśli powstał',
      'Dla SIM i TBS: umowa spółki albo statut i uchwała o stawkach czynszu',
      'Dla SIM: wniosek najemcy o rozliczenie partycypacji i jego umowa partycypacji',
    ],
    guides: [],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'umowa-o-roboty-budowlane'],
    cta: {
      heading: 'Społeczne budownictwo ma swoje reguły — poprowadzę Cię przez nie bezpiecznie.',
      lead: 'Opisz etap kooperatywy albo sprawę w SIM, a w 24 h roboczych odpiszę, czy zacząć od umowy, oferty do przetargu czy rozliczenia partycypacji. Razem z tym wyślę ofertę z ceną i terminem, a płacisz dopiero po jej przyjęciu.',
    },
    updated: '2026-10-10',
  },

});

Object.assign(window.SERVICE_CONTENT, {

  'obsluga-prawna-funduszy-prs': {
    h1: 'Obsługa prawna inwestorów instytucjonalnych i funduszy (PRS)',
    h1Full: 'Inwestorzy instytucjonalni i fundusze (PRS): due diligence portfela i najem instytucjonalny',
    topic: 'Najem instytucjonalny',
    metaDesc: 'Obsługa prawna PRS to badanie lokali i umów najmu, umowa nabycia portfela i wzór najmu. Kupując lokale, wstępujesz w najem (art. 678 § 1 k.c.).',
    subtitle: 'Kupujesz pakiet mieszkań na wynajem albo portfel z najemcami? Obsługa prawna PRS to due diligence (czyli sprawdzenie stanu prawnego) lokali i umów najmu, umowa nabycia i wzór najmu instytucjonalnego (art. 19f–19j u.o.p.l.). Pracuję przy jednej transakcji albo stale przy portfelu; zacznij od listy lokali w formularzu.',
    short: {
      q: 'Co sprawdzić w due diligence portfela mieszkań na wynajem?',
      a: 'Każdy lokal osobno, potem portfel jako całość. Przy lokalu: księgę wieczystą i umowę najmu. Najem instytucjonalny musi być pisemny, na czas oznaczony i z aktem notarialnym najemcy (art. 19f ust. 2–3, art. 19g ust. 1 u.o.p.l.). Przy portfelu: umowy, w które wstąpisz (art. 678 § 1 k.c.), i zasady podwyżki czynszu (art. 19h ust. 2 u.o.p.l.).',
      facts: [
        [
          'Kto zawiera najem instytucjonalny',
          'Wynajmujący prowadzący działalność gospodarczą w zakresie wynajmowania lokali, także spółka (art. 19f ust. 1 u.o.p.l.)',
        ],
        [
          'Forma i czas trwania',
          'Na piśmie pod rygorem nieważności, także zmiany; zawsze na czas oznaczony, bez przekształcenia po 10 latach (art. 19f ust. 2, art. 19g ust. 1 u.o.p.l.)',
        ],
        [
          'Zakup od dewelopera przez spółkę lub fundusz',
          'Ani spółka, ani fundusz nie jest nabywcą w rozumieniu ustawy deweloperskiej; nabywcą jest tylko osoba fizyczna (art. 2 ust. 1, art. 5 pkt 5 u.d.)',
        ],
      ],
    },
    introHeading: 'Co kupujesz, kiedy kupujesz mieszkania z najemcami',
    intro: 'Portfel PRS (ang. private rented sector, czyli mieszkania na wynajem jednego profesjonalnego właściciela) to w prawie zbiór lokali i umów najmu. Każdy lokal może stanowić odrębną nieruchomość (art. 2 ust. 1 u.w.l.), więc badam go osobno. Najem instytucjonalny zawiera wynajmujący, który prowadzi działalność gospodarczą w zakresie wynajmowania lokali (art. 19f ust. 1 u.o.p.l.). Ustalam, czy sprzedający go stosował, bo od tego zależy droga odzyskania lokalu. W najmie instytucjonalnym po końcu umowy właściciel doręcza żądanie opróżnienia, a po bezskutecznym terminie składa do sądu wniosek o klauzulę wykonalności dla aktu notarialnego najemcy (art. 19i ust. 2–5 u.o.p.l.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kupujesz pakiet, budynek w budowie albo lokale z najemcami',
    when: [
      {
        b: 'Deweloper proponuje Ci pakiet mieszkań w budynku, który dopiero powstaje (model forward).',
        t: 'Umowa przedwstępna w formie aktu notarialnego pozwala dochodzić zawarcia umowy przyrzeczonej (art. 390 § 2 k.c.). Twoje roszczenie o przeniesienie własności może trafić do księgi wieczystej nieruchomości (art. 16 ust. 2 pkt 2 u.k.w.h.).',
      },
      {
        b: 'Przejmujesz lokale, w których mieszkają już najemcy.',
        t: 'Wstępujesz w ich umowy (art. 678 § 1 k.c.). Najpierw ustalam, czy to najem instytucjonalny; jeżeli tak, sprawdzam formę pisemną, akt notarialny najemcy i kaucję do 6-krotności czynszu (art. 19f ust. 3 i 5, art. 19g ust. 1 u.o.p.l.).',
      },
      { b: 'Wahasz się: kupić lokale (asset deal) czy udziały spółki, która je ma (share deal).', t: 'Przy share deal lokale zostają w spółce, więc badam także ją: umowy, zobowiązania i spory.' },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co przygotowuję przed zakupem i po nim',
    doFor: [
      'Przeglądam księgi wieczyste lokali i budynku: właściciela, hipoteki, służebności i roszczenia; przy share deal także spółkę celową.',
      'Sprawdzam każdą umowę najmu: formę, czas trwania, akt notarialny najemcy, kaucję i zasady podwyżki czynszu, w tabeli lokal po lokalu.',
      'Piszę i negocjuję umowę nabycia: warunki zawieszające, harmonogram płatności i zabezpieczenia wpłat.',
      'Przygotowuję wzór najmu instytucjonalnego dla portfela: umowę, projekt oświadczenia najemcy do aktu notarialnego i wzór żądania opróżnienia lokalu (art. 19i ust. 2–3 u.o.p.l.).',
    ],
    stepsHeading: 'Jak pracujemy od listu intencyjnego do podpisu umowy',
    steps: [
      'Opisujesz w formularzu portfel i strukturę transakcji. W 24 h roboczych odpisuję, jaki zakres badania ma sens (same umowy najmu albo także księgi i spółka), i wysyłam ofertę z ceną i terminem raportu. Do jej akceptacji nic nie płacisz.',
      'Po akceptacji oferty udostępniasz dokumenty i dostajesz raport: tabelę lokali z ryzykami i listę zmian do umowy nabycia.',
      'Zmiany z raportu negocjujemy przed pierwszą umową ze sprzedającym, także przedwstępną (art. 390 § 2 k.c.), a przy share deal przed umową zbycia udziałów.',
    ],
    faqHeading: 'Portfel mieszkań na wynajem: najczęstsze pytania inwestora.',
    faq: [
      {
        q: 'Asset deal czy share deal przy portfelu mieszkań: co się zmienia prawnie?',
        a: 'Zmienia się to, kto jest właścicielem lokali i stroną umów najmu. Przy asset deal kupujesz lokale aktem notarialnym (art. 158 k.c.) i wstępujesz w umowy najmu (art. 678 § 1 k.c.). Przy share deal właścicielem pozostaje spółka, a jej zobowiązania zostają przy niej.',
      },
      {
        q: 'Jak ujednolicić umowy najmu w kupionym portfelu?',
        a: 'Nowym wzorem najmu instytucjonalnego dla nowych najemców i aneksami dla obecnych. Aneks podpisujesz z najemcą na piśmie pod rygorem nieważności (art. 19g ust. 1 u.o.p.l.). Do tego czasu czynsz podnosisz tylko według dotychczasowej umowy (art. 19h ust. 2 u.o.p.l.).',
      },
      {
        q: 'Kupujemy pakiet mieszkań od dewelopera. Czy chroni nas ustawa deweloperska?',
        a: 'Nie, jeżeli kupuje spółka albo fundusz. Ustawa chroni wpłaty nabywcy, czyli osoby fizycznej kupującej w celu niezwiązanym bezpośrednio z działalnością gospodarczą lub zawodową (art. 1 pkt 1, art. 5 pkt 5 u.d.). Zabezpieczenie wpłat i kary za opóźnienie wpisujemy więc do umowy.',
      },
      {
        q: 'Jakie podatki przy zakupie pakietu mieszkań (PCC, VAT) i czy dotyczą nas planowane zmiany?',
        a: 'Nie oceniam podatków: PCC, VAT i skutki planowanych zmian oceni Twój doradca podatkowy. Z raportu due diligence dostaje osobną tabelę. Są w niej sprzedawca, przedmiot umowy (lokale albo udziały) i umowy najmu objęte transakcją.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 19f–19j',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Najem instytucjonalny: forma, kaucja, podwyżka czynszu, żądanie opróżnienia i klauzula wykonalności.',
        },
        { ref: 'art. 158, art. 390 § 2, art. 661 § 1, art. 678 § 1', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Forma umowy nabycia, umowa przedwstępna, najem po zbyciu lokalu.' },
        {
          ref: 'art. 1 pkt 1, art. 2 ust. 1, art. 5 pkt 5',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Kogo i jakie wpłaty chroni ustawa deweloperska.',
        },
        { ref: 'art. 2 ust. 1', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'Lokal jako odrębna nieruchomość.' },
        { ref: 'art. 16 ust. 2 pkt 2', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Ujawnienie roszczenia o przeniesienie własności.' },
      ],
    },
    docsHeading: 'Portfel najmu: co przesłać do wstępnej analizy.',
    docs: [
      'Lista lokali z numerami ksiąg wieczystych albo numer księgi budynku',
      'Wzór umowy najmu i zestawienie najemców (czynsz, kaucja, koniec umowy), jeśli masz',
      'List intencyjny albo projekt umowy nabycia, jeśli już są',
      'Przy share deal: nazwa i numer KRS spółki, której udziały kupujesz',
      'Planowana data podpisu i termin wyłączności, jeśli go uzgodniłeś',
    ],
    guides: [],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'bezpieczny-najem'],
    cta: {
      heading: 'Skala wymaga precyzji. Zapewnię ją na każdym etapie inwestycji.',
      lead: 'Napisz, ile lokali obejmuje transakcja i kiedy chcesz podpisać umowę. W 24 h roboczych dostaniesz informację, co trzeba zbadać, oraz ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-inwestorow-flipping': {
    h1: 'Obsługa prawna inwestorów i firm flippingowych',
    h1Full: 'Obsługa prawna inwestorów i firm flippingowych: umowy inwestycyjne, cesje, sprawdzenie zakupów',
    topic: 'Flipping',
    metaDesc: 'Prawnik dla flipperów: piszę umowę z inwestorem i sprawdzam zakupy przed zadatkiem. Prywatną cesję umowy deweloperskiej zrobisz co do zasady raz na 3 lata.',
    subtitle: 'Inwestor daje pieniądze na zakup, a podział zysku jest tylko w mailach? Jako prawnik dla flipperów spisuję umowę z inwestorem, sprawdzam zakupy przed zadatkiem i pilnuję limitu cesji (art. 37a ustawy deweloperskiej). Pracuję przy pojedynczej transakcji albo stale; zacznij od opisu swojego modelu w formularzu.',
    short: {
      q: 'Co zmienia się prawnie, gdy robisz kilka flipów w roku?',
      a: 'Jeżeli Ty i inwestor zobowiązujecie się dążyć do wspólnego celu gospodarczego, np. wnosząc wkłady, Wasza umowa odpowiada definicji umowy spółki (art. 860 § 1 k.c.). Bez innego zapisu w umowie zysk i stratę dzielicie po równo (art. 867 § 1 k.c.). Osoba prywatna przeniesie prawa z umowy deweloperskiej co do zasady raz na 3 lata (art. 37a ust. 1 ustawy deweloperskiej, dalej: u.d.).',
      facts: [
        [
          'Podział zysku w spółce cywilnej bez zapisu w umowie',
          'po równo, bez względu na rodzaj i wartość wkładu; nikogo nie można wyłączyć od zysku (art. 867 § 1 k.c.)',
        ],
        [
          'Wypłata zysku w spółce cywilnej według ustawy',
          'po rozwiązaniu spółki, a przy spółce zawartej na czas dłuższy z końcem każdego roku obrachunkowego (art. 868 k.c.)',
        ],
        [
          'Kolejna cesja umowy deweloperskiej zawartej prywatnie',
          'przy umowie o 1 lokal i bez innej cesji w ostatnich 3 latach; bez limitu przy cesji na osobę z I lub II grupy podatkowej (art. 37a ust. 1–2 u.d.)',
        ],
        [
          'Umowa deweloperska zawarta przez spółkę z o.o.',
          'bez limitu z art. 37a u.d., bo nabywcą w tej ustawie jest tylko osoba fizyczna (art. 5 pkt 5 u.d.)',
        ],
        [
          'Flipy a działalność gospodarcza w PIT',
          'definicja nie podaje liczby transakcji (art. 5a pkt 6 u.p.d.o.f.); Twój model ocenia doradca podatkowy',
        ],
      ],
    },
    introHeading: 'Kto podpisuje umowę, kto dzieli zysk, kto ocenia podatek',
    intro: '„Nabywca” w ustawie deweloperskiej to osoba fizyczna, która zawiera umowę z deweloperem w celu niezwiązanym bezpośrednio z jej działalnością gospodarczą lub zawodową (art. 5 pkt 5 u.d.). Od tej definicji zależy, czy przy odsprzedaży „na cesję” obowiązuje Cię limit z art. 37a u.d. Przy kolejnych transakcjach ustalamy więc, kto kupuje (Ty prywatnie, firma czy spółka z inwestorem) i jak dzielicie zysk. Umowy i stan prawny prowadzę ja, podatek ustalasz z doradcą podatkowym. Pojedynczy flip opisuję w usłudze „Flip mieszkania”.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pieniądze inwestora, kolejna cesja, zakup przez spółkę',
    when: [
      {
        b: 'Inwestor daje pieniądze na zakup, Ty robisz remont i sprzedaż, a ustalenia są tylko w mailach.',
        t: 'Wkładem do spółki może być własność, np. pieniądze, albo świadczenie usług, np. prowadzenie remontu (art. 861 § 1 k.c.). Bez zapisu w umowie pieniądze i praca dają taki sam udział w zysku (art. 867 § 1 k.c.).',
      },
      {
        b: 'Chcesz odsprzedać kolejną umowę deweloperską przed odbiorem kluczy.',
        t: 'Umowę przeniesienia zawierasz u notariusza i oświadczasz w niej pod rygorem odpowiedzialności karnej, że w ostatnich 3 latach nie było innej cesji (art. 37a ust. 4, art. 40 ust. 1 u.d.). Naruszenie limitu nie unieważnia cesji (art. 37a ust. 3 u.d.).',
      },
      {
        b: 'Kupujesz mieszkania od dewelopera przez spółkę z o.o., żeby je potem odsprzedać.',
        t: 'Limit z art. 37a u.d. Cię nie dotyczy, ale przelew praw może wyłączyć zastrzeżenie w umowie z deweloperem (art. 509 § 1 k.c.). Dlatego czytam ją przed podpisaniem, nie przed odsprzedażą.',
      },
      { b: 'Licytujesz u komornika kilka mieszkań w roku.', t: 'Zasady licytacji, rękojmi i lokatora po przysądzeniu własności opisuję w usłudze „Flip mieszkania”.' },
    ],
    doForTitle: 'Co przygotowuję dla Ciebie i Twojego inwestora',
    doFor: [
      'Piszę umowę inwestycyjną: wkłady, podział zysku z każdego flipa, termin wypłaty, decyzja o cenie sprzedaży, wyjście inwestora i strata.',
      'Każdą kolejną okazję sprawdzam przed zadatkiem: dział III i IV księgi wieczystej (służebności, roszczenia, hipoteki), sprzedającego i jego tytuł do lokalu.',
      'Przy cesji umowy deweloperskiej sprawdzam limit z art. 37a u.d., Twoje cesje z ostatnich 3 lat i zastrzeżenia w umowie, a potem przygotowuję projekt umowy przeniesienia dla notariusza.',
      'Układam wzory na kolejne transakcje: umowę z inwestorem, umowę przedwstępną i protokół wydania lokalu; umowę sprzedaży przygotowuję jako projekt dla notariusza.',
      'Reprezentuję Cię w negocjacjach i sporach z inwestorem, sprzedającym albo kupującym, także przed sądem.',
    ],
    stepsHeading: 'Od opisu modelu do pierwszego zadatku',
    steps: [
      'Opisujesz model: ile transakcji robisz w roku, kto je finansuje i czy kupujesz prywatnie, przez firmę czy w spółce z inwestorem.',
      'W 24 h roboczych odpisuję, od czego zacząć przy Twoim modelu, np. od umowy z inwestorem przed kolejnym zakupem. Razem z tą odpowiedzią dostajesz ofertę z ceną i terminem; dopóki jej nie przyjmiesz, nic nie płacisz.',
      'Po akceptacji przygotowuję umowę z inwestorem i wzory. Stali klienci mają u mnie pierwszeństwo; odpowiadam mailem, na piśmie.',
      'Kolejną okazję przesyłasz z terminem zadatku od sprzedającego. Zadatek to krok nieodwracalny: jeżeli nie wykonasz umowy, sprzedający może co do zasady od niej odstąpić i zadatek zachować (art. 394 § 1 k.c.).',
    ],
    faq: [
      {
        q: 'Czy cesja umowy deweloperskiej wymaga zgody dewelopera?',
        a: 'Samo przeniesienie praw z umowy co do zasady nie wymaga zgody dewelopera (art. 509 § 1 k.c.). Wyjątek: sprzeciwia się temu ustawa, zastrzeżenie w umowie albo właściwość zobowiązania. Jeżeli kupujący ma przejąć też obowiązek zapłaty reszty ceny, potrzebna jest zgoda dewelopera (art. 519 § 2 pkt 2 k.c.). Przy umowie zawartej prywatnie umowę przeniesienia zawierasz u notariusza (art. 40 ust. 1 u.d.).',
      },
      {
        q: 'Jak zapisać podział zysku z inwestorem?',
        a: 'Wprost w umowie: procent albo kwota z każdej sprzedaży, termin wypłaty i udział w stracie. Bez takiego zapisu wspólnicy dzielą zysk i stratę po równo (art. 867 § 1 k.c.). Ustawa przewiduje wypłatę zysku po rozwiązaniu spółki, a przy spółce zawartej na czas dłuższy z końcem roku obrachunkowego (art. 868 k.c.). Termin wypłaty po każdym flipie wpisz do umowy.',
      },
      {
        q: 'Czy kilka flipów w roku to już działalność gospodarcza w PIT?',
        a: 'Ustawa o PIT nie podaje progu liczby transakcji. Działalność gospodarcza to m.in. zarobkowa działalność handlowa prowadzona we własnym imieniu, „w sposób zorganizowany i ciągły” (art. 5a pkt 6 u.p.d.o.f.). Czy Twój model spełnia tę definicję i ile zapłacisz, ocenia doradca podatkowy. Ja układam umowy pod model, który z nim ustalisz.',
      },
      {
        q: 'Jak zapisać wyjście inwestora ze wspólnego flipa?',
        a: 'Jeżeli łączy Was umowa spółki, wpisz w niej wartość wkładu inwestora i zasady wyjścia. Występującemu wspólnikowi wypłaca się w pieniądzu wartość wkładu oznaczoną w umowie, a bez oznaczenia wartość z chwili wniesienia (art. 871 § 1 k.c.). Przy spółce zawartej na czas nieoznaczony inwestor wychodzi, wypowiadając swój udział z trzymiesięcznym wyprzedzeniem, na koniec roku obrachunkowego (art. 869 § 1 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 394, art. 509, art. 519, art. 860–861, art. 867–869, art. 871 § 1',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Zadatek, przelew i przejęcie długu, umowa spółki: wkłady, zysk, wypłata, wystąpienie wspólnika.',
        },
        {
          ref: 'art. 5 pkt 5, art. 37a, art. 40 ust. 1',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Kto jest nabywcą, limit cesji umowy deweloperskiej, akt notarialny przy cesji.',
        },
        { ref: 'art. 25', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Działy księgi wieczystej: III (służebności, roszczenia) i IV (hipoteki).' },
        { ref: 'art. 5a pkt 6', act: 'Ustawa o podatku dochodowym od osób fizycznych', tj: 'Dz.U. 2026 poz. 592', eli: 'DU/1991/350', note: 'Definicja działalności gospodarczej.' },
      ],
    },
    docs: [
      'Lista Twoich transakcji z ostatnich 3 lat: data, forma zakupu (prywatnie, firma, spółka) i cesje.',
      'Umowa albo korespondencja z inwestorem, jeśli macie ustalenia na piśmie.',
      'Numery ksiąg wieczystych lokali, które teraz oglądasz, jeśli je masz.',
      'Umowa deweloperska, którą chcesz przenieść, jeśli planujesz cesję.',
    ],
    guides: ['jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: ['flip-mieszkania', 'stwierdzenie-nabycia-spadku'],
    cta: {
      heading: 'Nadążam za rynkiem — żeby prawo nie hamowało Twoich transakcji.',
      lead: 'Napisz, ile transakcji robisz rocznie i kto je finansuje. W 24 h roboczych dostaniesz pierwszy krok dla Twojego modelu i ofertę z ceną i terminem; płacisz dopiero po jej akceptacji.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-deweloperow-oze': {
    metaDesc: 'Due diligence gruntu pod farmę PV to księga wieczysta, klasy użytków, plan miejscowy i trasa kabla. Przygotowuję dzierżawy i zgody właścicieli pod bank.',
    h1: 'Obsługa prawna deweloperów OZE i firm dzierżawiących grunty',
    h1Full: 'Deweloperzy OZE i firmy dzierżawiące grunty: bankowalny tytuł do gruntu',
    topic: 'Grunty pod OZE',
    subtitle: 'Zbierasz grunty pod farmę fotowoltaiczną albo wiatraki, a bank pyta o tytuł do każdej działki? Due diligence gruntów pod farmę fotowoltaiczną (badanie stanu prawnego) obejmuje księgę wieczystą, klasy użytków, plan miejscowy i trasę kabla. Sprawdzam grunty, piszę umowy dzierżawy i zbieram zgody właścicieli, zanim projekt trafi do banku.',
    short: {
      q: 'Co obejmuje due diligence gruntu pod farmę fotowoltaiczną?',
      a: 'Dla każdej działki ustalam, kto podpisuje umowę, co obciąża księgę wieczystą, czy plan pozwala na farmę i którędy przejdzie kabel. Każdą odpowiedź opieram na dokumencie: odpisie księgi, wypisie z rejestru gruntów, planie miejscowym albo podpisanej umowie.',
      facts: [
        [
          'Kiedy farma wymaga planu miejscowego',
          'Na użytkach rolnych klas I–III; na klasie IV, gdy moc przekracza 150 kW albo instalacja służy działalności w wytwarzaniu energii elektrycznej; na pozostałych gruntach powyżej 1000 kW (art. 14 ust. 6a pkt 2 u.p.z.p.)',
        ],
        [
          'Decyzja o wyłączeniu z produkcji rolnej',
          'Wydaje ją starosta dla klas I–III i dla klas IV–VI z gleb organicznych; dołączasz ją do wniosku o pozwolenie na budowę (art. 5 ust. 1, art. 11 ust. 1 i 4a u.o.g.r.l.)',
        ],
        [
          'Sprzedaż działki w trakcie dzierżawy',
          'Kupujący wchodzi w umowę na miejsce sprzedającego. Nie wypowie jej, jeżeli zawarto ją na czas oznaczony, pisemnie, z datą pewną, a grunt już Ci wydano (art. 678 w zw. z art. 694 k.c.)',
        ],
      ],
    },
    introHeading: 'Z czego składa się tytuł do gruntu pod farmę',
    intro: 'Farmę na cudzym gruncie budujesz zwykle na podstawie dzierżawy: płacisz czynsz za używanie gruntu i pobieranie z niego pożytków (art. 693 § 1 k.c.). Po wpisie do księgi wieczystej dzierżawa jest skuteczna także wobec praw, które ktoś nabędzie później przez czynność prawną, np. hipoteki ustanowionej umową (art. 16 ust. 2 pkt 1, art. 17 u.k.w.h.). Błąd w tytule do jednej działki potrafi zablokować przyłączenie albo finansowanie całego przedsięwzięcia.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Zbierasz grunty pod farmę i szykujesz projekt do finansowania',
    when: [
      { b: 'Bank albo kupujący projekt zapowiedział due diligence gruntów.', t: 'Sprawdzam, czy każda działka z mapy projektu ma umowę i czy żadna umowa nie kończy się przed końcem eksploatacji.' },
      {
        b: 'Właściciel jednej z działek wystawił ją na sprzedaż.',
        t: 'Sprawdzam, czy Twoja umowa spełnia łącznie 4 warunki ochrony z art. 678 § 2 k.c. Jeżeli brakuje choć jednego, nabywca może ją wypowiedzieć z zachowaniem ustawowych terminów (art. 678 § 1 w zw. z art. 694 k.c.).',
      },
      {
        b: 'Kabel do stacji musi przejść przez działki sąsiadów.',
        t: 'Jeżeli kabel wchodzi w zakres pozwolenia na budowę, potrzebujesz prawa do dysponowania każdą działką na trasie na cele budowlane (art. 32 ust. 4 pkt 2 p.b.). Dzierżawa pasa je daje, gdy przewiduje roboty budowlane (art. 3 pkt 11 p.b.).',
      },
      { b: 'Chcesz przenieść umowy na spółkę projektową przed sprzedażą projektu.', t: 'Sprawdzam, które umowy zawierają zgodę właściciela; bez niej zgody zbierasz działka po działce.' },
    ],
    doForTitle: 'Co przygotowuję przy gruntach pod farmę',
    doFor: [
      'Sprawdzam dla każdej działki księgę wieczystą, wypis z rejestru gruntów, plan miejscowy i dostęp do drogi publicznej.',
      'Piszę wzór umowy dzierżawy dla portfela i negocjuję go z właścicielami: czas trwania, data pewna, wydanie gruntu protokołem, zgoda na przeniesienie. Potem składam wnioski o wpis dzierżaw do ksiąg wieczystych.',
      'Uzgadniam z właścicielami działek na trasie kabla dzierżawę pasa gruntu z prawem do robót budowlanych albo służebność i przygotowuję projekty umów.',
      'Zapisuję w umowie, czy oprócz czynszu ponosisz podatki związane z gruntem (art. 702 k.c.); skutki podatkowe farmy ocenia doradca podatkowy.',
      'Przygotowuję przeniesienie dzierżaw na spółkę projektową i zbieram zgody właścicieli, których brakuje w umowach.',
      'Przy zaległym albo spornym czynszu piszę wezwanie i aneks; jeżeli właściciel wypowie umowę, odpowiadam na wypowiedzenie i prowadzę sprawę w sądzie.',
    ],
    stepsHeading: 'Od listy działek do tytułu gotowego na badanie banku',
    steps: [
      'Przesyłasz listę działek, mapę projektu i umowy, które masz. W ciągu 24 h roboczych dostajesz informację, czego wymaga portfel, np. sprawdzenia wszystkich działek albo aneksów do części umów, razem z ofertą z ceną i terminem. Oceny samych umów ta informacja jeszcze nie zawiera.',
      'Po akceptacji oferty dostajesz raport działka po działce: właściciel, obciążenia, klasa użytków, plan, ryzyko i sposób jego usunięcia.',
      'Poprawiam umowy i zbieram brakujące zgody: na przeniesienie, na trasę kabla, na wpis do księgi.',
      'Podpisujesz przeniesienie umów na spółkę projektową. Powrót umowy do Ciebie to kolejne przejęcie obowiązku płacenia czynszu, które wymaga zgody właściciela, chyba że wyraził ją już w umowie (art. 519 § 2 pkt 2, art. 63 § 1 k.c.). Ten krok robimy więc po sprawdzeniu wszystkich umów.',
    ],
    faq: [
      {
        q: 'Co czyni umowę dzierżawy pod farmę PV akceptowalną dla banku?',
        a: 'Okres obejmujący całą eksploatację, opis terenu zgodny z księgą i ewidencją, zgoda na przeniesienie umowy i wpis do księgi wieczystej. Dzierżawę na ponad 30 lat po tym czasie poczytuje się za zawartą na czas nieoznaczony (art. 695 § 1 k.c.). Dlatego okres umowy dopasowuję do eksploatacji w granicach 30 lat.',
      },
      {
        q: 'Jak zabezpieczyć przebieg kabla przez działki sąsiadów?',
        a: 'Umową z każdym właścicielem na trasie: dzierżawą pasa gruntu albo służebnością. Przy służebności oświadczenie właściciela wymaga aktu notarialnego (art. 245 § 2 k.c.). Roszczenie o ustanowienie służebności można ujawnić w księdze wieczystej, także jako roszczenie przyszłe (art. 16 ust. 2 pkt 2 u.k.w.h.).',
      },
      {
        q: 'Czy pod farmę fotowoltaiczną trzeba wyłączyć grunt z produkcji rolnej?',
        a: 'Co do zasady tak, bo wyłączeniem jest rozpoczęcie innego niż rolnicze użytkowania gruntu (art. 4 pkt 11 u.o.g.r.l.). Decyzja zezwalająca jest potrzebna tylko dla klas I–III i dla klas IV–VI z gleb organicznych (art. 11 ust. 1 u.o.g.r.l.). Należność i opłaty roczne płaci ten, kto uzyskał zezwolenie, od dnia faktycznego wyłączenia (art. 12 ust. 1 u.o.g.r.l.).',
      },
      {
        q: 'Czy przeniesienie umowy dzierżawy na spółkę projektową wymaga zgody właściciela?',
        a: 'Tak, bo spółka przejmuje obowiązek płacenia czynszu, a przejęcie długu wymaga zgody wierzyciela, czyli właściciela (art. 519 § 2 pkt 2 k.c.). Zgodę można wyrazić także przed przeniesieniem (art. 63 § 1 k.c.). Dlatego do wzoru umowy wpisuję zgodę na przeniesienie na wskazaną spółkę projektową.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 63, 245, 519, 678, 693–695, 702',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Dzierżawa, granica 30 lat, sprzedaż działki, przeniesienie umowy, forma służebności.',
        },
        { ref: 'art. 16, 17', act: 'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Wpis dzierżawy i roszczeń do księgi.' },
        { ref: 'art. 14 ust. 6a', act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym', tj: 'Dz.U. 2026 poz. 538', eli: 'DU/2003/717', note: 'Kiedy farma wymaga planu miejscowego.' },
        {
          ref: 'art. 4 pkt 11, art. 5, 11, 12',
          act: 'Ustawa z dnia 3 lutego 1995 r. o ochronie gruntów rolnych i leśnych',
          tj: 'Dz.U. 2024 poz. 82',
          eli: 'DU/1995/78',
          note: 'Wyłączenie z produkcji rolnej, decyzja starosty, należność.',
        },
        { ref: 'art. 3 pkt 11, art. 32 ust. 4', act: 'Ustawa z dnia 7 lipca 1994 r. – Prawo budowlane', tj: 'Dz.U. 2026 poz. 524', eli: 'DU/1994/414', note: 'Prawo do dysponowania działką na trasie kabla na cele budowlane.' },
      ],
    },
    docs: [
      'Lista działek projektu z numerami ksiąg wieczystych',
      'Podpisane umowy dzierżawy i umowy przedwstępne, jeśli są',
      'Mapa projektu z trasą kabla do punktu przyłączenia',
      'Wypisy z rejestru gruntów, jeśli masz',
      'Lista dokumentów gruntowych wymaganych przez bank albo kupującego, jeśli ją dostałeś',
    ],
    guides: ['farma-fotowoltaiczna-na-dzialce-rolnej', 'dzierzawa-pod-fotowoltaike-a-vat'],
    seeAlso: ['dzierzawa-oze', 'odszkodowanie-sluzebnosc-przesylu', 'plan-ogolny'],
    cta: {
      heading: 'Projekt OZE jest tyle wart, ile pewny jest tytuł do gruntu.',
      lead: 'Prześlij listę działek i umowy, które już masz: w 24 h roboczych odpiszę, czego wymaga Twój portfel gruntów przed finansowaniem, i dołączę ofertę z ceną oraz terminem. Do akceptacji tej oferty nie ponosisz żadnych kosztów.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-operatorow-najmu': {
    metaDesc: 'Operator najmu przejmuje lokale w najem z prawem podnajmu albo w zarządzanie. Od tego zależy, kiedy właściciel może wypowiedzieć umowę.',
    h1: 'Obsługa prawna operatorów najmu, PRS i condohoteli',
    h1Full: 'Operatorzy najmu, PRS i condohoteli: umowy z inwestorami i gwarancje czynszu',
    topic: 'Operator najmu',
    subtitle: 'Właściciele apartamentów grożą wypowiedzeniem umowy, a obłożenie nie pokrywa obiecanego im czynszu? Operator najmu przejmuje lokale od inwestorów w najem z prawem podnajmu albo w zarządzanie (art. 659 § 1, art. 750 k.c.). Piszę umowy z właścicielami i oferty dla nabywców, a w sporze z właścicielem reprezentuję operatora.',
    short: {
      q: 'Najem czy zarządzanie: na jakiej umowie przejmujesz lokale od właścicieli?',
      a: 'Na najmie z prawem podnajmu albo na umowie o zarządzanie; umowa może też łączyć obie konstrukcje (art. 659 § 1, art. 750, art. 353¹ k.c.). W najmie płacisz czynsz w terminie umówionym, także w miesiącu bez gości, jeżeli umowa nie wiąże go z przychodem (art. 669 § 1 k.c.). Do zarządzania stosuje się odpowiednio przepisy o zleceniu, więc wydajesz właścicielowi wszystko, co dla niego uzyskałeś (art. 740, art. 750 k.c.).',
      facts: [
        [
          'Podnajem lokalu',
          'Tylko za zgodą właściciela (art. 688² k.c.); kończy się najpóźniej z końcem najmu (art. 668 § 2 k.c.)',
        ],
        [
          'Zaległość w czynszu za lokal użytkowy',
          'Przy zwłoce za 2 pełne okresy: pisemne uprzedzenie, miesiąc na zapłatę, potem możliwe wypowiedzenie bez terminów (art. 672, 687 k.c.)',
        ],
        [
          'Wypowiedzenie umowy o zarządzanie',
          'W każdym czasie; właściciel zwraca wydatki i część wynagrodzenia, a bez ważnego powodu naprawia też szkodę (art. 746 § 1, art. 750 k.c.)',
        ],
        [
          '„Gwarantowany zysk” w ofercie dla konsumentów',
          'Nie może wprowadzać w błąd co do spodziewanych wyników i ryzyka (art. 5 ust. 3 pkt 2 u.p.n.p.r.)',
        ],
      ],
    },
    introHeading: 'Na czym zarabiasz i co ryzykujesz w umowie z właścicielem lokalu',
    intro: 'Operator najmu zarabia na lokalach inwestorów w condohotelu, aparthotelu albo budynku mieszkań na wynajem (PRS). Ani „umowa operatorska”, ani „gwarancja czynszu” nie mają w Kodeksie cywilnym własnych przepisów. Strony układają je według swojego uznania w granicach ustawy, natury stosunku i zasad współżycia społecznego (art. 353¹ k.c.). To umowa rozstrzyga, czy czynsz zależy od obłożenia, kto płaci za wyposażenie i co z rezerwacjami, gdy właściciel odejdzie. Przy sprzedaży apartamentów konsumentom z obietnicą dochodu dochodzą przepisy o nieuczciwych praktykach rynkowych.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Właściciele grożą wypowiedzeniem, obłożenie spada albo sprzedajesz apartamenty z gwarancją',
    when: [
      { b: 'Właściciel przysłał pismo: masz miesiąc na zapłatę zaległego czynszu, inaczej wypowie umowę.', t: 'To dodatkowy termin do zapłaty, który art. 687 k.c. przewiduje przed wypowiedzeniem najmu lokalu bez terminów.' },
      {
        b: 'Obiecałeś właścicielom stały czynsz, a obłożenie spadło i przychody nie pokrywają wypłat.',
        t: 'Czynsz należy się w terminie umówionym (art. 669 § 1 k.c.), więc przejście na czynsz zależny od przychodu musisz uzgodnić z każdym właścicielem w aneksie.',
      },
      {
        b: 'Sprzedajesz albo pomagasz sprzedać apartamenty z hasłem „gwarantowany zysk” albo „stała stopa zwrotu”.',
        t: 'Ocenia się cały przekaz, także pominięte informacje o ryzyku (art. 5 ust. 4, art. 6 ust. 1 u.p.n.p.r.). Przy naruszeniu zbiorowych interesów konsumentów Prezes UOKiK może nałożyć karę do 10% obrotu (art. 24, art. 106 ust. 1 pkt 4 u.o.k.k.).',
      },
      {
        b: 'Inwestor sprzedał apartament, a nowy właściciel chce go odebrać przed końcem umowy.',
        t: 'Nabywca wstępuje w najem na miejsce zbywcy. Ustawowego prawa wypowiedzenia nie ma, jeżeli umowa jest na czas oznaczony, pisemna, z datą pewną, a lokal był Ci wydany (art. 678 k.c.).',
      },
    ],
    doForTitle: 'Co przygotowuję: umowy z właścicielami, oferty dla nabywców, spory',
    doFor: [
      'Piszę umowę najmu zwrotnego (inwestor, który kupił apartament, wynajmuje go operatorowi): czynsz stały albo zależny od przychodu, zgodę na podnajem (art. 688² k.c.), koszty wyposażenia, zwrot lokalu.',
      'Piszę umowę o zarządzanie: pełnomocnictwo do umów z gośćmi, raporty i wypłaty, wynagrodzenie, wypowiedzenie i przekazanie lokalu następcy.',
      'Sprawdzam materiały sprzedażowe i umowę z nabywcą apartamentu: kto daje gwarancję czynszu, na ile lat i co po jej końcu.',
      'Sprawdzam kary umowne i zapisy wzorców, które mogą nie wiązać właściciela będącego konsumentem (art. 385¹ § 1 k.c.).',
      'Prowadzę spory z właścicielami i nabywcami (czynsz, rozliczenia, wypowiedzenie) oraz sprawy o opróżnienie lokalu, gdy podnajemca go nie oddaje.',
    ],
    stepsHeading: 'Jak pracujemy nad umową z właścicielami albo sporem o czynsz',
    steps: [
      'Przesyłasz umowę z właścicielami albo jej projekt i liczbę lokali. W 24 h roboczych odpisuję, czego wymaga sprawa, np. nowego wzoru umowy albo sprawdzenia materiałów sprzedażowych, i dołączam ofertę z ceną i terminem. Za pracę płacisz dopiero, gdy ją przyjmiesz.',
      'Po akceptacji dostajesz listę ryzyk w obecnym wzorze i nowe brzmienie zapisów; jeżeli właściciele mają pełnomocnika, negocjuję z nim zmiany.',
      'W sporze o czynsz odpowiadam na wezwanie albo uprzedzenie właściciela przed upływem terminu z pisma; jeżeli ugoda się nie uda, reprezentuję Cię przed sądem.',
      'Materiały dla nabywców zatwierdzamy razem z umową przed wysyłką, bo tego, co nabywcy już przeczytali, nie cofniesz.',
    ],
    faq: [
      {
        q: 'Właściciel grozi wypowiedzeniem najmu za zaległy czynsz. Co mogę zrobić?',
        a: 'Zapłacić zaległość w dodatkowym miesięcznym terminie z pisemnego uprzedzenia (art. 687 k.c.). Jeżeli nie zapłacisz, a zwłoka obejmuje co najmniej 2 pełne okresy płatności, właściciel może wypowiedzieć najem bez terminów (art. 672, 687 k.c.). Za czas opóźnienia należą mu się odsetki, nawet bez szkody (art. 481 § 1 k.c.).',
      },
      {
        q: 'Czy kara umowna dla właściciela, który odbiera lokal przed końcem umowy, jest legalna?',
        a: 'Tak, jeżeli zabezpiecza zobowiązanie niepieniężne, np. oddanie lokalu operatorowi do używania na czas umowy (art. 483 § 1 k.c.). Właściciel może żądać zmniejszenia kary rażąco wygórowanej (art. 484 § 2 k.c.). Jeżeli jest konsumentem, a zapisu nie uzgodniono z nim indywidualnie, taką karę w razie wątpliwości uważa się za niedozwoloną (art. 385³ pkt 17 k.c.). Wtedy go nie wiąże (art. 385¹ § 1 k.c.).',
      },
      {
        q: 'Jak skonstruować gwarancję czynszu, żeby nie wprowadzała nabywców w błąd?',
        a: 'Napisać wprost, kto daje gwarancję dochodu, w jakiej wysokości, przez ile lat, czym jest zabezpieczona i co po jej końcu. W błąd mogą wprowadzać też prawdziwe informacje podane w mylący sposób i zatajenie istotnych informacji (art. 5 ust. 2 pkt 2, art. 6 ust. 3 pkt 1 u.p.n.p.r.). Konsument może wtedy żądać naprawienia szkody, w tym unieważnienia umowy ze zwrotem świadczeń (art. 12 ust. 1 pkt 4 u.p.n.p.r.).',
      },
      {
        q: 'Czy właściciele mogą odejść do innego operatora przed końcem umowy?',
        a: 'Przy umowie o zarządzanie tak, w każdym czasie, ale wtedy zwracają Ci wydatki i część wynagrodzenia (art. 746 § 1 w zw. z art. 750 k.c.). Przy najmie na czas oznaczony tylko w przypadkach z umowy (art. 673 § 3 k.c.) albo z ustawy, np. art. 672 k.c. Prawa wypowiedzenia zarządzania z ważnych powodów nie można się zrzec z góry (art. 746 § 3 k.c.).',
      },
      {
        q: 'Czy nabywca apartamentu w condohotelu jest chroniony ustawą deweloperską?',
        a: 'Nie, jeżeli kupuje lokal użytkowy bez lokalu mieszkalnego albo kupuje w celu bezpośrednio związanym ze swoją działalnością (art. 2 ust. 2, art. 5 pkt 5 u.d.). Tak, jeżeli osoba fizyczna kupuje od dewelopera lokal mieszkalny poza działalnością (art. 2 ust. 1, art. 5 pkt 2 u.d.). Przy pierwszej sprzedaży lokalu mieszkalnego przez innego przedsiębiorcę stosuje się część przepisów ustawy (art. 4 u.d.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 659–669, 672–673, 678, 680, 687, 688²', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Najem, podnajem, wypowiedzenie, zbycie lokalu.' },
        {
          ref: 'art. 353¹, 385¹, 385³, 481, 483–484, 734, 740, 746, 750',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Swoboda umów, klauzule niedozwolone, kara umowna, zlecenie.',
        },
        {
          ref: 'art. 2, 4, art. 5 pkt 2 i 5',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Zakres ustawy deweloperskiej i pojęcie nabywcy.',
        },
        {
          ref: 'art. 5, 6, 12',
          act: 'Ustawa z dnia 23 sierpnia 2007 r. o przeciwdziałaniu nieuczciwym praktykom rynkowym',
          tj: 'Dz.U. 2023 poz. 845',
          eli: 'DU/2007/1206',
          note: 'Praktyki wprowadzające w błąd, roszczenia konsumenta.',
        },
        { ref: 'art. 24, 106', act: 'Ustawa z dnia 16 lutego 2007 r. o ochronie konkurencji i konsumentów', tj: 'Dz.U. 2025 poz. 1714', eli: 'DU/2007/331', note: 'Decyzja i kara Prezesa UOKiK.' },
      ],
    },
    docs: [
      'Umowa z właścicielami lokali (najem, zarządzanie albo inna) z aneksami albo projekt, który chcesz im przedstawić',
      'Materiały sprzedażowe i wzór umowy z nabywcą apartamentu, w których pada „gwarantowany zysk”, stały czynsz albo stopa zwrotu, jeśli masz',
      'Rozliczenia z właścicielami (przychody, koszty, wypłaty), jeśli spór dotyczy pieniędzy',
      'Pisma od właścicieli: wezwania, uprzedzenia, wypowiedzenia, z datą doręczenia, jeśli je dostałeś',
    ],
    guides: [],
    seeAlso: ['obsluga-wynajmujacych', 'eksmisja'],
    cta: {
      heading: 'Model operatorski, który się broni — finansowo i prawnie.',
      lead: 'Opisz model: ilu masz właścicieli, czy to najem, czy zarządzanie, i czy nabywcy dostają gwarancję czynszu. W 24 h roboczych dostaniesz odpowiedź, co zrobić najpierw, razem z ofertą z ceną i terminem; płacisz po jej przyjęciu.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-najemcow-komercyjnych': {
    metaDesc: 'Najem lokalu na czas oznaczony wypowiesz w przypadkach z umowy albo z ustawy, np. przy wadach lokalu. Negocjuję wyjście, indeksację i adaptację.',
    h1: 'Obsługa prawna najemców komercyjnych i sieci handlowych',
    h1Full: 'Najemcy komercyjni i sieci handlowe: negocjacja umowy najmu lokalu użytkowego',
    topic: 'Najem komercyjny',
    subtitle: 'Podpisujesz najem lokalu pod sklep, biuro albo kolejną placówkę sieci, a umowę przygotował wynajmujący? Sprawdź przede wszystkim 4 zapisy: wcześniejsze wypowiedzenie, indeksację czynszu, rozliczenie adaptacji i datę pewną (art. 673 § 3, 676, 678 k.c.). Negocjuję je po stronie najemcy przed podpisem umowy albo aneksu.',
    short: {
      q: 'Umowa najmu lokalu użytkowego: na co zwrócić uwagę jako najemca?',
      a: 'Najpierw na wyjście z umowy. Najem na czas oznaczony wypowiesz w przypadkach określonych w umowie (art. 673 § 3 k.c.). Z ustawy wypowiesz go bez terminów przy niektórych wadach lokalu (art. 664 § 2, art. 682 k.c.). Potem na indeksację czynszu, rozliczenie adaptacji i to, czy umowa przetrwa sprzedaż budynku.',
      facts: [
        [
          'Wcześniejsze wypowiedzenie (break option)',
          'Działa, jeżeli umowa określa przypadki wypowiedzenia (art. 673 § 3 k.c.); poza umową wypowiesz bez terminów przy wadach z art. 664 § 2 albo art. 682 k.c.',
        ],
        [
          'Najem między przedsiębiorcami na ponad 30 lat',
          'Po 30 latach poczytuje się go za zawarty na czas nieoznaczony (art. 661 § 2 k.c.)',
        ],
        [
          'Sprzedaż budynku',
          'Nowy właściciel przejmuje umowę. Nie wypowie jej, jeżeli ma ona datę pewną, formę pisemną, czas oznaczony, a lokal już zajmujesz (art. 678 k.c.)',
        ],
        [
          'Nakłady na adaptację',
          'Bez zapisu w umowie wynajmujący wybiera: płaci wartość ulepszeń albo żąda przywrócenia stanu poprzedniego (art. 676 k.c.)',
        ],
        [
          'Kaucja',
          'Limit 12-krotności czynszu dotyczy lokali mieszkalnych (art. 6 ust. 1, art. 2 ust. 1 pkt 4 u.o.p.l.); przy lokalu użytkowym kwotę ustala umowa',
        ],
      ],
    },
    introHeading: 'Umowę pisze wynajmujący. Co z tego wynika dla najemcy lokalu użytkowego',
    intro: 'Najem to umowa, w której wynajmujący oddaje lokal do używania, a najemca płaci umówiony czynsz (art. 659 § 1 k.c.). Wiele przepisów o najmie działa tylko wtedy, gdy umowa nie mówi inaczej, np. rozliczenie ulepszeń (art. 676 k.c.) albo terminy wypowiedzenia najmu na czas nieoznaczony (art. 673 § 1 k.c.). Projekt umowy przygotowuje zwykle wynajmujący, więc te miejsca wypełnia na swoją korzyść. W sieci handlowej zapis przyjęty w jednej umowie może wrócić w kolejnych lokalizacjach.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Nowy właściciel budynku, podwyżka czynszu albo lokalizacja, która nie zarabia',
    when: [
      {
        b: 'Dostałeś wypowiedzenie od nowego właściciela budynku.',
        t: 'Sprawdź najpierw, czy umowa spełnia 4 warunki z art. 678 § 2 k.c.; jeżeli tak, nabywca nie może jej wypowiedzieć. Jeżeli ich brakuje, a wypowiedzenie zmusza Cię do oddania lokalu przed końcem umowy, niezwłocznie zawiadom sprzedającego (art. 679 § 2 k.c.).',
      },
      {
        b: 'Wynajmujący co roku podnosi czynsz o inflację, a Ty nie wiesz, czy umowa mu na to pozwala.',
        t: 'Waloryzację według wskaźnika, np. cen, strony zastrzegają w umowie (art. 358¹ § 2 k.c.). Sprawdź, od kiedy, jak często i do jakiej wysokości klauzula ją dopuszcza.',
      },
      { b: 'Inwestujesz w adaptację lokalu, a umowa milczy, co z nią po zakończeniu najmu.', t: 'Wtedy o losie ulepszeń po zakończeniu najmu decyduje wynajmujący (art. 676 k.c.).' },
      {
        b: 'Lokalizacja przestała zarabiać, a do końca umowy zostały lata.',
        t: 'Bez umownego prawa wypowiedzenia i bez wad lokalu pozostaje przede wszystkim porozumienie z wynajmującym albo jego zgoda na podnajem (art. 673 § 3, art. 688² k.c.).',
      },
      {
        b: 'Masz zaległość w czynszu, a wynajmujący grozi wypowiedzeniem i zatrzymaniem towaru.',
        t: 'Wypowiedzenie bez terminów wymaga zwłoki za co najmniej 2 pełne okresy płatności i pisemnego uprzedzenia z miesiącem na zapłatę (art. 672, 687 k.c.). Zastaw ustawowy obejmuje tylko Twoje rzeczy ruchome podlegające zajęciu i czynsz zaległy nie dłużej niż rok; do zapłaty albo zabezpieczenia czynszu wynajmujący może sprzeciwić się ich usunięciu z lokalu (art. 670 § 1, art. 671 § 2 k.c.).',
      },
    ],
    doForTitle: 'Co negocjuję i sprawdzam po stronie najemcy',
    doFor: [
      'Negocjuję opcję wcześniejszego wypowiedzenia (break option): od kiedy działa, z jakim okresem wypowiedzenia i na jakich warunkach finansowych.',
      'Ustalam klauzulę indeksacji: jeden wskaźnik, np. ogłaszany przez GUS, datę pierwszej waloryzacji, częstotliwość i górny limit wzrostu.',
      'Rozpisuję adaptację lokalu (fit-out): kto wykonuje i finansuje prace, czy wynajmujący dopłaca albo zwalnia z czynszu na czas prac i w jakim stanie oddajesz lokal.',
      'Pilnuję daty pewnej umowy i aneksów: wzmianka notariusza na dokumencie albo kwalifikowany elektroniczny znacznik czasu (art. 81 § 2 pkt 2 i 3 k.c.).',
      'Zapisuję zgodę wynajmującego na podnajem, przeniesienie umowy na inną spółkę z Twojej grupy i zmianę branży w lokalu.',
      'Dla sieci przygotowuję listę warunków minimalnych i wzór zmian do umów w kolejnych lokalizacjach; każdą nową umowę porównuję z tą listą przed podpisem.',
      'Prowadzę spory z wynajmującym: o obniżenie czynszu za czas trwania wad lokalu (art. 664 § 1 k.c.), zwrot nakładów i rozliczenie kaucji.',
    ],
    lists: [
      {
        eyebrow: 'Słownik najmu komercyjnego',
        title: 'Break option, fit-out, indeksacja: jak te pojęcia nazywa Kodeks cywilny',
        kind: 'check',
        items: [
          { b: 'Break option', t: 'umowne prawo wcześniejszego wypowiedzenia najmu na czas oznaczony; umowa musi określać, kiedy z niego skorzystasz (art. 673 § 3 k.c.).' },
          { b: 'Fit-out', t: 'adaptacja lokalu pod Twoją działalność; w kodeksie to nakłady i ulepszenia rzeczy najętej (art. 676, art. 677 k.c.).' },
          { b: 'Indeksacja', t: 'waloryzacja czynszu według miernika wybranego w umowie, np. wskaźnika cen (art. 358¹ § 2 k.c.).' },
          { b: 'Okres bez czynszu (rent free)', t: 'zapis umowy, który przesuwa początek płacenia czynszu, np. na czas prac adaptacyjnych.' },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega negocjacja umowy najmu po stronie najemcy',
    steps: [
      'Przesyłasz projekt umowy albo ofertę wynajmującego i planowaną datę otwarcia. W 24 h roboczych odpisuję, co trzeba zrobić, np. sprawdzić całą umowę albo wynegocjować tylko zapisy o wyjściu i adaptacji, i wysyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Po przyjęciu oferty dostajesz listę zmian z brzmieniem zapisów, od najważniejszej dla Twojego biznesu. W sporze zamiast listy przygotowuję pismo do wynajmującego, np. żądanie obniżenia czynszu za czas trwania wad (art. 664 § 1 k.c.).',
      'Negocjuję z wynajmującym albo jego pełnomocnikiem; każde uzgodnienie trafia do kolejnej wersji umowy.',
      'Podpisem umowy albo aneksu kończysz negocjacje, dlatego przed nim porównuję wersję końcową z ustaleniami i sprawdzam, jak umowa uzyska datę pewną.',
    ],
    faq: [
      {
        q: 'Jak ograniczyć waloryzację czynszu w najmie komercyjnym?',
        a: 'Zapisem w umowie: jeden wskaźnik, data i częstotliwość waloryzacji oraz górny limit wzrostu. Powiązanie czynszu z innym niż pieniądz miernikiem wartości dopuszcza art. 358¹ § 2 k.c. Przy najmie związanym z Twoją firmą nie zażądasz od sądu zmiany czynszu z powodu istotnej zmiany siły nabywczej pieniądza (art. 358¹ § 3 i 4 k.c.). Dlatego liczy się brzmienie klauzuli.',
      },
      {
        q: 'Kto płaci za adaptację lokalu i co z nakładami po zakończeniu najmu?',
        a: 'Ten, kogo wskaże umowa. Z ustawy wynajmujący musi wydać lokal w stanie przydatnym do umówionego użytku i utrzymywać go w takim stanie (art. 662 § 1 k.c.). Drobne nakłady obciążają Ciebie (art. 662 § 2 k.c.). Bez zapisu o ulepszeniach wynajmujący wybiera: płaci ich wartość z chwili zwrotu albo żąda przywrócenia stanu poprzedniego (art. 676 k.c.). Zwrotu nakładów dochodzisz w ciągu roku od zwrotu lokalu (art. 677 k.c.).',
      },
      {
        q: 'Właściciel sprzedał budynek. Czy nowy może wypowiedzieć mi najem?',
        a: 'Tak, w terminach ustawowych, chyba że spełnione są 4 warunki z art. 678 § 2 k.c. Są to: czas oznaczony, forma pisemna, data pewna i wydany Ci lokal. Datę pewną daje m.in. wzmianka notariusza na umowie (art. 81 § 2 pkt 2 k.c.). Za szkodę z przedwczesnego zwrotu lokalu odpowiada wobec Ciebie sprzedający (art. 679 § 1 k.c.).',
      },
      {
        q: 'Ile kaucji albo gwarancji bankowej może żądać wynajmujący lokalu użytkowego?',
        a: 'Tyle, ile zapiszecie w umowie. Ustawowy limit 12-krotności miesięcznego czynszu dotyczy lokali mieszkalnych (art. 6 ust. 1 w zw. z art. 2 ust. 1 pkt 4 u.o.p.l.). Przy lokalu pod działalność negocjujesz kwotę, formę (kaucja albo gwarancja), warunki jej wykorzystania i termin zwrotu.',
      },
      {
        q: 'Na ile lat mogę podpisać najem między firmami?',
        a: 'Na czas oznaczony skutecznie do 30 lat. Po ich upływie najem między przedsiębiorcami poczytuje się za zawarty na czas nieoznaczony (art. 661 § 2 k.c.). Jeżeli wynajmujący nie jest przedsiębiorcą, ta granica wynosi 10 lat (art. 661 § 1 k.c.). Umowę na ponad rok zawrzyj na piśmie, bo bez pisma poczytuje się ją za zawartą na czas nieoznaczony (art. 660 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 659–679',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Najem: forma, okres, wady, zastaw, wypowiedzenie, ulepszenia, sprzedaż rzeczy najętej.',
        },
        {
          ref: 'art. 680, 682, 687, 688²',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Najem lokalu: wady zagrażające zdrowiu, uprzedzenie przed wypowiedzeniem za zaległy czynsz, podnajem.',
        },
        { ref: 'art. 81, 358¹', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Data pewna i waloryzacja świadczeń pieniężnych.' },
        {
          ref: 'art. 2 ust. 1 pkt 4, art. 6',
          act: 'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Limit kaucji dotyczy lokali mieszkalnych.',
        },
      ],
    },
    docs: [
      'Projekt umowy najmu z załącznikami (rzut lokalu, opis stanu przy wydaniu, regulamin obiektu) albo podpisana umowa z aneksami',
      'Oferta albo list intencyjny wynajmującego z warunkami: czynsz, okres, opłaty eksploatacyjne, okres bez czynszu',
      'Zakres i budżet planowanej adaptacji lokalu, jeśli masz',
      'Pisma od wynajmującego albo nowego właściciela budynku (podwyżka, wezwanie, wypowiedzenie) z datą doręczenia',
      'Przy sieci: Twoja lista warunków minimalnych albo umowa z innej lokalizacji, którą uważasz za wzorcową',
    ],
    guides: [],
    seeAlso: ['analiza-umowy-najmu', 'negocjacje-nieruchomosci', 'kaucja-najem'],
    cta: {
      heading: 'Najem po stronie najemcy — policzalny, elastyczny, uczciwy.',
      lead: 'Prześlij projekt umowy najmu albo pismo od wynajmującego, a w 24 h roboczych napiszę, czego wymaga sprawa: negocjacji wybranych zapisów, przeglądu całej umowy albo pisma w sporze. Razem z tym dostaniesz ofertę z ceną i terminem; płacisz dopiero po jej przyjęciu.',
    },
    updated: '2026-10-10',
  },

  'obsluga-prawna-przedsiebiorstw-rolnych': {
    metaDesc: 'Gospodarstwo przekażesz dziecku darowizną albo umową z następcą w akcie notarialnym. Przed aktem spisuję grunty, dzierżawy i długi gospodarstwa.',
    h1: 'Obsługa prawna przedsiębiorstw rolnych i właścicieli dużych areałów',
    h1Full: 'Przedsiębiorstwa rolne i właściciele dużych areałów: przekazanie gospodarstwa, zakup ziemi, dzierżawy',
    topic: 'Gospodarstwo rolne',
    subtitle: 'Chcesz przekazać gospodarstwo synowi albo córce, dokupić ziemię albo wydzierżawić część pól pod farmę? Obsługa prawna gospodarstwa rolnego to głównie przekazanie gospodarstwa w akcie notarialnym (art. 85 u.s.r.) i zakup ziemi w limicie 300 ha użytków rolnych (art. 2a ust. 2 u.k.u.r.). Spisuję grunty, dzierżawy i długi gospodarstwa, potem piszę umowy i wnioski do KOWR.',
    short: {
      q: 'Jak przekazać gospodarstwo rolne synowi albo córce?',
      a: 'W akcie notarialnym: darowizną albo umową z następcą (art. 158 i art. 890 § 1 k.c., art. 85 u.s.r.). Dziecko jest osobą bliską, więc nie musi być rolnikiem indywidualnym (art. 2a ust. 3 pkt 1 lit. a u.k.u.r.). KOWR nie ma wtedy prawa nabycia tej ziemi (art. 4 ust. 4 pkt 2 lit. b i pkt 3 u.k.u.r.).',
      facts: [
        [
          'Umowa z następcą',
          'Następca młodszy o co najmniej 15 lat i pracuje w gospodarstwie; przekazanie, gdy nabędziesz prawo do emerytury lub renty inwalidzkiej (art. 84 u.s.r.)',
        ],
        [
          'Darowizna a małżeństwo dziecka',
          'Majątek osobisty obdarowanego, chyba że darczyńca postanowił inaczej (art. 33 pkt 2 k.r.o.)',
        ],
        [
          'Długi gospodarstwa',
          'Nabywca odpowiada solidarnie ze zbywcą do wartości gospodarstwa, chyba że o długach nie wiedział mimo należytej staranności (art. 55⁴ k.c.)',
        ],
        [
          'Świadczenia po przekazaniu',
          'Jeżeli umowa nie stanowi inaczej, możesz żądać świadczeń jak przy dożywociu, na miarę potrzeb Twoich i rodziny oraz warunków następcy (art. 88 ust. 1 u.s.r.)',
        ],
      ],
    },
    introHeading: 'Gospodarstwo to nie tylko ziemia: co wchodzi w jego skład',
    intro: 'Gospodarstwo rolne to grunty rolne razem z lasem, budynkami, urządzeniami, inwentarzem i prawami związanymi z jego prowadzeniem, jeżeli tworzą albo mogą tworzyć zorganizowaną całość gospodarczą (art. 55³ k.c.). Dlatego umowę o gospodarstwo zaczynam od wykazu: działki z księgami wieczystymi, maszyny, dzierżawy, kredyty.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Przekazujesz gospodarstwo, dokupujesz ziemię albo firma chce dzierżawić pole',
    when: [
      {
        b: 'Kupiłeś pole niecałe 5 lat temu, a firma OZE proponuje dzierżawę jego części.',
        t: 'Przez 5 lat od zakupu co do zasady nie wolno oddać tej ziemi w posiadanie bez zgody Dyrektora Generalnego KOWR (art. 2b ust. 2–3 u.k.u.r.). Dzierżawa zawarta bez tej zgody jest nieważna (art. 9 ust. 1 pkt 2 u.k.u.r.).',
      },
      {
        b: 'Syn pracuje z Tobą w gospodarstwie, a Ty myślisz o emeryturze rolniczej.',
        t: 'Umową z następcą zobowiązujesz się przekazać gospodarstwo, a własność przenosi druga umowa, zawarta w celu jej wykonania. Obie wymagają aktu notarialnego (art. 84–85 u.s.r.).',
      },
      {
        b: 'Z dzierżawami gospodarujesz blisko 300 ha i chcesz dokupić ziemię.',
        t: 'Co do zasady kupowana ziemia razem z gospodarstwem rodzinnym nabywcy nie może przekroczyć 300 ha użytków rolnych (art. 2a ust. 2 u.k.u.r.). Przy współwłasności łącznej, np. małżeńskiej, liczy się cała powierzchnia (art. 5 ust. 2 u.k.u.r.).',
      },
      {
        b: 'Przez pola biegnie linia albo gazociąg, a starosta zapowiada decyzję pod nową sieć.',
        t: 'Gdy firma odmawia umowy, a służebność jest konieczna do korzystania z jej urządzeń, możesz żądać odpowiedniego wynagrodzenia za jej ustanowienie (art. 305² § 2 k.c.). Jeżeli nie zgadzasz się na nową sieć, starosta może na nią zezwolić decyzją; decyzję poprzedzają rokowania firmy z Tobą (art. 124 ust. 1 i 3 u.g.n.).',
      },
    ],
    doForTitle: 'Co robię dla gospodarstwa i jego właściciela',
    doFor: [
      'Spisuję skład gospodarstwa: działki z księgami wieczystymi, użytki rolne z ewidencji, budynki, dzierżawy i długi, bo odpowiedzialności nabywcy za długi umowa nie wyłączy bez zgody wierzyciela (art. 55⁴ k.c.).',
      'Przygotowuję z notariuszem darowiznę albo umowę z następcą, z zapisami o świadczeniach dla Ciebie i o majątku obdarowanego (art. 84–88 u.s.r., art. 33 pkt 2 k.r.o.).',
      'Przed zakupem ziemi liczę użytki rolne własne, dzierżawione i współposiadane (art. 5 ust. 2–3 u.k.u.r.).',
      'Przed dzierżawą pod OZE sprawdzam daty zakupu każdego pola i w razie potrzeby składam wniosek o zgodę z art. 2b ust. 3 u.k.u.r.',
      'W scaleniu składam zażalenie na wszczęcie, propozycje dla geodety-projektanta i odwołanie do wojewody (art. 7 ust. 6, art. 7b ust. 1, art. 3 ust. 1 u.s.w.g.).',
      'Kilka spraw naraz, np. zakup, dzierżawę i przekazanie, rozpisuję w ofercie na etapy z ceną i terminem każdego.',
    ],
    stepsHeading: 'Od spisu ziemi i długów do aktu notarialnego albo decyzji KOWR',
    steps: [
      'Opisujesz gospodarstwo: ile hektarów masz na własność, ile w dzierżawie, co chcesz zrobić (przekazać, dokupić, wydzierżawić) i do kiedy.',
      'W 24 h roboczych odpowiadam, od czego zacząć w Twoim gospodarstwie, np. od policzenia limitu 300 ha przed zakupem albo od umowy z następcą. Cenę i termin pracy podaję w ofercie dołączonej do tej odpowiedzi; płacisz dopiero, gdy ją zaakceptujesz.',
      'Po akceptacji zbieram wypisy z ewidencji i księgi wieczyste, piszę projekt umowy albo wniosek do KOWR i uzgadniam treść aktu z notariuszem.',
      'Krok kluczowy: akt przenoszący własność na następcę. Potem rozwiązania tej umowy możesz żądać przed sądem z przyczyn z art. 89 u.s.r., np. gdy następca uporczywie nie wywiązuje się z obowiązków. Dlatego świadczenia dla Ciebie zapisujemy przed podpisem.',
    ],
    faq: [
      {
        q: 'Czy gospodarstwo przekazane synowi wejdzie do majątku wspólnego jego małżeństwa?',
        a: 'Przy darowiźnie co do zasady nie: gospodarstwo trafia do majątku osobistego syna, chyba że darczyńca postanowił inaczej (art. 33 pkt 2 k.r.o.). Jeżeli chcesz, żeby weszło do majątku wspólnego syna i synowej, zapisujemy to w akcie. Przy umowie z następcą skutek dla majątku małżonków omawiamy przed wyborem umowy.',
      },
      {
        q: 'Czy scalenie gruntów jest dobrowolne?',
        a: 'Nie zawsze. Starosta może wszcząć scalenie na wniosek większości właścicieli gospodarstw albo właścicieli ponad połowy obszaru (art. 3 ust. 2 u.s.w.g.). W przypadkach z art. 4 ust. 1 może je wszcząć z urzędu. Dobrowolna jest wymiana gruntów, bo wymaga zgodnego wniosku właścicieli (art. 5 ust. 1).',
      },
      {
        q: 'Jak dokupić ziemię, gdy gospodarstwo zbliża się do 300 ha?',
        a: 'Bez limitu 300 ha nabędziesz ziemię od osoby bliskiej albo nieruchomość mniejszą niż 1 ha (art. 2a ust. 3 pkt 1 lit. a i pkt 1a u.k.u.r.). Limit nie obejmuje też działu spadku ani zniesienia współwłasności (pkt 10). Przy innym zakupie najpierw liczę, ile użytków rolnych zostało Ci do limitu.',
      },
      {
        q: 'Jak rozliczyć dzierżawę pod OZE na części areału?',
        a: 'Według umowy: dzierżawca płaci umówiony czynsz za oddaną mu część gruntu (art. 693 § 1 k.c.). Skutki podatkowe czynszu, np. VAT, ocenia doradca podatkowy. Przy polu kupionym mniej niż 5 lat temu sprawdzam też, czy potrzebna jest zgoda KOWR (art. 2b ust. 3 u.k.u.r.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2a, 2b, 4, 5, 9',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Nabywca ziemi rolnej, limit 300 ha, 5 lat po zakupie, prawo nabycia KOWR, nieważność.',
        },
        { ref: 'art. 84–89', act: 'Ustawa z dnia 20 grudnia 1990 r. o ubezpieczeniu społecznym rolników', tj: 'Dz.U. 2025 poz. 1770', eli: 'DU/1991/24', note: 'Umowa z następcą, świadczenia dla rolnika i rozwiązanie umowy.' },
        {
          ref: 'art. 55³, 55⁴, 158, 305², 693, 890, 908 § 1',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Gospodarstwo rolne i jego długi, akt notarialny, darowizna, dzierżawa, służebność przesyłu, dożywocie.',
        },
        { ref: 'art. 33', act: 'Ustawa z dnia 25 lutego 1964 r. - Kodeks rodzinny i opiekuńczy', tj: 'Dz.U. 2026 poz. 236', eli: 'DU/1964/59', note: 'Darowizna a majątek osobisty małżonka.' },
        {
          ref: 'art. 3, 4, 5, 7, 7b',
          act: 'Ustawa z dnia 26 marca 1982 r. o scalaniu i wymianie gruntów',
          tj: 'Dz.U. 2023 poz. 1197',
          eli: 'DU/1982/80',
          note: 'Wszczęcie scalenia, zażalenie i odwołanie, propozycje uczestnika, wymiana gruntów.',
        },
        { ref: 'art. 124 ust. 1 i 3', act: 'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Zezwolenie starosty na sieć bez zgody właściciela.' },
      ],
    },
    docs: [
      'Wypisy z ewidencji gruntów albo numery działek, z podziałem na grunty własne i dzierżawione',
      'Akty notarialne zakupu ziemi z ostatnich 5 lat',
      'Umowy dzierżawy, w tym projekt umowy od inwestora OZE, jeśli go masz',
      'Lista kredytów i innych długów gospodarstwa, jeśli ją masz',
      'Przy przekazaniu: wiek następcy, czy pracuje w gospodarstwie i czy jest w związku małżeńskim',
    ],
    guides: ['farma-fotowoltaiczna-na-dzialce-rolnej', 'dzierzawa-pod-fotowoltaike-a-vat'],
    seeAlso: [
      'status-rolnika',
      'odszkodowanie-sluzebnosc-przesylu',
      'ograniczenie-korzystania-nieruchomosci',
    ],
    cta: {
      heading: 'Duży areał wymaga jednego prawnika do wszystkiego. Jestem nim.',
      lead: 'Napisz, ile hektarów masz na własność i w dzierżawie i co planujesz: przekazanie, zakup czy dzierżawę pod OZE. W ciągu 24 h roboczych dowiesz się, czy zaczynamy od spisu gospodarstwa, umowy z następcą czy wniosku do KOWR, i dostaniesz ofertę z ceną i terminem; zapłacisz dopiero, gdy ją przyjmiesz.',
    },
    updated: '2026-10-10',
  },

});
