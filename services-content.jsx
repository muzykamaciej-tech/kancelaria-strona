/* services-content.jsx — full editorial content for detailed service pages.
   Pages without an entry here render the "lite" template (intro + standard blocks).
   BLOCK_CONTENT holds authored umbrella (pillar) content keyed by block id.
   Loaded after services-data.jsx. */

/* Standard copy reused where a page needs the generic cost line (no prices anywhere) */
const COST_TEXT = 'Stałą cenę i termin podaję w ofercie, którą wysyłam razem z bezpłatną wstępną analizą Twojej sprawy — zanim cokolwiek zlecisz.';

const SERVICE_CONTENT = {
  /* ===== WZORCOWA (flagowa) — Audyt stanu prawnego ===== */
  'audyt-stanu-prawnego-nieruchomosci': {
    h1Full: 'Audyt stanu prawnego nieruchomości: sprawdzenie działki, domu lub mieszkania przed zakupem',
    topic: 'Audyt nieruchomości',
    metaDesc: 'Przed zakupem działki, domu lub mieszkania sprawdzam księgę wieczystą, ewidencję, plan i dostęp do drogi. Dostajesz raport z ryzykami i zmianami do umowy.',
    subtitle: 'Kupujesz działkę, dom albo mieszkanie i nie wiesz, czy sprzedający mówi Ci wszystko? Sprawdzenie działki przed zakupem obejmuje księgę wieczystą, ewidencję gruntów, plan i dostęp do drogi publicznej. Robię to przed zadatkiem, a wynik dostajesz w raporcie z ryzykami i zmianami do umowy.',
    short: {
      q: 'Sprawdzenie działki przed zakupem: czy wystarczy księga wieczysta?',
      a: 'Nie. Ochrona kupującego, który polega na księdze (rękojmia wiary publicznej), nie działa przeciwko służebności przesyłu ani drogi koniecznej, także niewpisanej (art. 7 pkt 4 i 5 u.k.w.h.). Przeznaczenia działki w księdze też nie ma: ustala je plan miejscowy (art. 4 ust. 1 u.p.z.p.).',
      facts: [
        [
          'Co jest w księdze wieczystej',
          'Dział I: oznaczenie nieruchomości; II: właściciel; III: służebności, ograniczenia i roszczenia; IV: hipoteki (art. 25 ust. 1 u.k.w.h.)',
        ],
        [
          'Czy księgę sprawdzisz bezpłatnie',
          'Tak, jeżeli znasz jej numer; wydruk z przeglądania nie ma mocy dokumentu sądowego (art. 36⁴ ust. 6 i 7 u.k.w.h.)',
        ],
        [
          'Działka pod dom bez planu miejscowego',
          'Przy wnioskach złożonych od 1.09.2026 WZ co do zasady wymaga planu ogólnego w gminie (art. 59 ust. 3 ustawy z 7.07.2023), a przy nowym budynku także położenia terenu na obszarze uzupełnienia zabudowy (art. 61 ust. 1 pkt 1a u.p.z.p.)',
        ],
        [
          'Ile trwa (z mojej praktyki)',
          'Poziom 1 (księga i umowa): najczęściej 2–4 dni robocze; poziom 2: 5–7 dni roboczych od otrzymania dokumentów',
        ],
      ],
    },
    introHeading: 'Dlaczego przed zakupem nie wystarczy przeczytać księgi wieczystej',
    intro: 'Jeżeli w dniu umowy wiesz o wadzie nieruchomości, sprzedawca nie odpowiada za nią z tytułu rękojmi za wady (art. 557 § 1 k.c.). Wadą prawną jest m.in. obciążenie prawem osoby trzeciej, np. hipoteką albo służebnością (art. 556³ k.c.), więc znalezione ryzyko załatwiasz w umowie albo w cenie. Księga wieczysta jest jawna (art. 2 u.k.w.h.) i co do zasady chroni kupującego, który na niej polega (art. 5), ale nie przy nabyciu nieodpłatnym ani w złej wierze (art. 6 ust. 1). Część ryzyk leży poza księgą: plan, droga, sieci i najem.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kupujesz i boisz się, że z działką albo mieszkaniem coś jest nie tak',
    when: [
      { b: 'Za kilka dni masz wpłacić zadatek, a sprzedający naciska.', t: 'Zaczynam wtedy od księgi i projektu umowy. Pośpiech narzucany przez drugą stronę bywa sygnałem ostrzegawczym.' },
      { b: 'Sprzedający zapewnia, że „wszystko jest czyste”.', t: 'Porównuję te zapewnienia z księgą, ewidencją i planem. Słupy, rury i przejazd sąsiada opisuję osobno, bo księga może ich nie pokazywać.' },
      { b: 'W księdze są wpisy, których nie rozumiesz.', t: 'Mogą tam być m.in. najem, pierwokup, dożywocie i roszczenie o przeniesienie własności (art. 16 ust. 2 u.k.w.h.). Każdy istotny wpis tłumaczę w raporcie.' },
      {
        b: 'Kupujesz działkę „z wuzetką”.',
        t: 'Sprawdzam, od kiedy decyzja jest prawomocna. Co do zasady WZ wygasa po 5 latach (art. 64c u.p.z.p.), ale ten termin nie dotyczy decyzji prawomocnych przed 1.01.2026 ani wydanych w sprawach wszczętych przed 16.10.2025 (art. 62 ustawy z 7.07.2023).',
      },
      { b: 'Kupujesz ze spadku albo „okazję”, która wydaje się zbyt dobra.', t: 'Sprawdzam, skąd sprzedający ma własność i czy jest wpisany w dziale II księgi.' },
    ],
    levels: {
      eyebrow: 'Trzy poziomy audytu',
      heading: 'Jak głęboko sprawdzam: od księgi wieczystej do negocjacji umowy',
      intro: 'Zakres dobieram do nieruchomości i transakcji. Poziom wyższy obejmuje cały zakres niższego.',
      cost: 'Kwotę i termin raportu podaję w ofercie, która przychodzi razem ze wstępną analizą.',
      items: [
        {
          name: 'Poziom 1 — Audyt podstawowy',
          sub: 'Gdy chcesz kupić konkretną nieruchomość i wiedzieć, co podpisujesz.',
          points: [
            'Czytam całą księgę wieczystą (właściciel, hipoteki, służebności, dożywocie, ostrzeżenia, wzmianki, roszczenia) i porównuję ją z ewidencją gruntów.',
            'Czytam umowę (przedwstępną albo sprzedaży) i wskazuję niekorzystne zapisy z propozycją zmian.',
            'Ustalam, czy będziesz mógł zamieszkać, wynająć albo budować tak, jak planujesz.',
            'Dostajesz raport z ryzykami w trzech kolorach (czerwone, żółte, zielone), z przepisem, skutkiem i zmianami do umowy.',
            'Omawiam z Tobą raport. Przy poważnym ryzyku opisuję wybór: zmiana umowy, niższa cena albo rezygnacja; decyzja należy do Ciebie.',
          ],
        },
        {
          name: 'Poziom 2 — Audyt pełny',
          plus: 'wszystko z podstawowego, plus:',
          sub: 'Gdy historia nieruchomości jest skomplikowana albo stawka wysoka.',
          points: [
            'Sprawdzam, czy sprzedający może sprzedać: tytuł nabycia, spadek, współwłasność, pełnomocnictwa.',
            'Pozyskuję dokumenty, których sprzedający nie pokazał, np. wypis i wyrys z planu oraz decyzje dotyczące działki.',
            'Sprawdzam, co według planu może powstać obok, dostęp do drogi, sieci i stan planu ogólnego gminy.',
          ],
        },
        {
          name: 'Poziom 3 — Audyt pełny + negocjacje',
          plus: 'wszystko z pełnego, plus:',
          sub: 'Gdy chcesz, żebym po sprawdzeniu także negocjował warunki zakupu.',
          points: [
            'Negocjuję cenę i warunki umowy ze sprzedającym, w Twoim imieniu albo razem z Tobą.',
            'Pilnuję, żeby ustalone zmiany trafiły do projektu aktu notarialnego przed podpisem.',
          ],
        },
      ],
    },
    lists: [
      {
        eyebrow: 'Gdzie szukać ryzyk',
        title: 'Czego nie zobaczysz w księdze wieczystej i gdzie tego szukać',
        items: [
          { b: 'Ewidencja gruntów i budynków', t: 'pokazuje granice, powierzchnię i użytki (art. 20 ust. 1 p.g.k.) i jest podstawą oznaczenia nieruchomości w księdze (art. 21 ust. 1), więc rozbieżność wyjaśniasz przed aktem.' },
          {
            b: 'Plan miejscowy albo plan ogólny',
            t: 'wypis i wyrys z planu może dostać każdy (art. 30 ust. 1 u.p.z.p.). Bez planu miejscowego zabudowę określa decyzja o warunkach zabudowy (art. 4 ust. 2 pkt 2), więc sprawdzam, czy działka spełnia jej warunki.',
          },
          {
            b: 'Dostęp do drogi publicznej',
            t: 'służebność przejazdu przez grunt sąsiada może być wpisana w dziale I księgi Twojej działki (art. 25 ust. 1 pkt 1 u.k.w.h.). Dostęp do drogi publicznej jest warunkiem WZ (art. 61 ust. 1 pkt 2 u.p.z.p.), a bez niego zostaje żądanie drogi koniecznej od sąsiadów (art. 145 § 1 k.c.).',
          },
          { b: 'Słupy, kable i rury', t: 'rękojmia nie działa przeciwko służebności przesyłu (art. 7 pkt 5 u.k.w.h.), a według utrwalonego orzecznictwa SN także przeciwko służebności zasiedzianej (art. 7 pkt 1 u.k.w.h.; postanowienie SN z 28.03.2017, II CSK 462/16), więc tytuł firmy przesyłowej ustalasz przed zakupem.' },
          {
            b: 'Najem i dzierżawa',
            t: 'nabywca wstępuje w najem na miejsce sprzedającego (art. 678 § 1 k.c.), przy dzierżawie odpowiednio (art. 694). Umowy zawartej na piśmie, na czas oznaczony i z datą pewną, gdy lokal albo grunt wydano najemcy, nie wypowiesz na tej podstawie (art. 678 § 2).',
          },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega audyt: od numeru księgi do decyzji o zakupie',
    steps: [
      'Przesyłasz numer księgi wieczystej albo adres działki i termin podpisu umowy.',
      'W 24 h roboczych odpisuję, który poziom audytu ma sens, np. sama księga i umowa albo pełny audyt z planem i drogą. Razem z odpowiedzią dostajesz ofertę: cenę i dzień oddania raportu. Do chwili jej przyjęcia nic nie płacisz.',
      'Sprawdzam źródła i piszę, o jakie brakujące dokumenty poprosić sprzedającego.',
      'Dostajesz raport na piśmie i omawiamy go.',
      'Decydujesz: podpisujesz, negocjujesz albo rezygnujesz. Zastrzeżenia zgłoś przed podpisem umowy sprzedaży: za wadę, o której wtedy wiesz, sprzedawca nie odpowiada z rękojmi (art. 557 § 1 k.c.).',
    ],
    faq: [
      {
        q: 'Jak sprawdzić działkę przed zakupem samemu i czy da się to zrobić za darmo?',
        a: 'Częściowo tak. Księgę wieczystą przeglądasz w internecie bezpłatnie, jeżeli znasz jej numer (art. 36⁴ ust. 6 u.k.w.h.), a do planu każdy ma prawo wglądu (art. 30 ust. 1 u.p.z.p.). Skutki wpisów i planu dla Twojej umowy ocenia już audyt.',
      },
      {
        q: 'Co sprawdzić w księdze wieczystej przed zakupem mieszkania?',
        a: 'Wszystkie cztery działy, nie tylko właściciela w dziale II. Służebności i dożywocie wpisuje się w dziale III, a hipoteki w czwartym (art. 25 ust. 1 u.k.w.h.). Sprawdź też wzmianki o wnioskach i ostrzeżenia, bo wyłączają rękojmię wiary publicznej (art. 8).',
      },
      {
        q: 'Kupuję działkę bez księgi wieczystej. Jak sprawdzić jej stan prawny?',
        a: 'Od ewidencji gruntów i dokumentów, z których sprzedający wywodzi własność. Ewidencja wykazuje właściciela, a gdy nie da się go ustalić, samoistnego posiadacza (art. 20 ust. 2 pkt 1 p.g.k.). Obciążeń szukasz w zbiorze dokumentów w sądzie rejonowym (art. 123 ust. 1 u.k.w.h.).',
      },
      {
        q: 'Jak sprawdzić, czy działka nie jest zadłużona i czy sprzedający jest właścicielem?',
        a: 'W księdze wieczystej: właściciel jest w dziale II, hipoteki w dziale IV (art. 25 ust. 1 u.k.w.h.), a komornik wnosi tam o wpis wszczęcia egzekucji (art. 924 § 1 k.p.c.). Wpis w dziale II porównuję z dokumentem nabycia, a przy hipotece proponuję w umowie zapis o jej spłacie i wykreśleniu.',
      },
      {
        q: 'Czy mógłby ktoś sprawdzić, czy z działką wszystko w porządku?',
        a: 'Tak, także zanim zdecydujesz się na zakup. Na start wystarczy numer księgi wieczystej albo numer działki i data, do której sprzedający czeka na odpowiedź. Raport pokazuje, co jest w porządku, co trzeba zmienić w umowie i co wymaga wyjaśnienia przed podpisem. Decyzję podejmujesz Ty.',
      },
      {
        q: 'Ile kosztuje sprawdzenie stanu prawnego nieruchomości?',
        a: 'Kwotę podaję w ofercie, zanim cokolwiek zlecisz, i do jej akceptacji nic nie płacisz. Cena zależy od poziomu audytu: księga i umowa, pełny audyt działki z planem i drogą albo audyt z negocjacjami. Przy pełnym audycie liczy się też, ile dokumentów trzeba pozyskać z urzędów.',
      },
    ],
    law: {
      asOf: '2026-10-26',
      items: [
        {
          ref: 'art. 2, 5–8, 16, 25, 36⁴, 123',
          act: 'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'Jawność, rękojmia wiary publicznej i jej granice, działy księgi, przeglądanie, zbiór dokumentów.',
        },
        {
          ref: 'art. 145, 556³, 557, 678, 694',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Droga konieczna, wada prawna, wada znana kupującemu, najem i dzierżawa po zbyciu.',
        },
        {
          ref: 'art. 4, 30, 61, 64c',
          act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538',
          eli: 'DU/2003/717',
          note: 'Plan miejscowy i WZ, wgląd do planów, warunki WZ, wygaśnięcie WZ.',
        },
        {
          ref: 'art. 59 ust. 3, art. 62',
          act: 'Ustawa z dnia 7 lipca 2023 r. o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688, z 2025 r. poz. 527, 1543 i 1668 oraz z 2026 r. poz. 781 (bez tekstu jednolitego)',
          eli: 'DU/2023/1688',
          note: 'WZ na wnioski od 1.09.2026 tylko w gminie z planem ogólnym; WZ bez 5-letniego terminu.',
        },
        { ref: 'art. 20, 21', act: 'Ustawa z dnia 17 maja 1989 r. Prawo geodezyjne i kartograficzne', tj: 'Dz.U. 2024 poz. 1151', eli: 'DU/1989/163', note: 'Ewidencja gruntów i budynków.' },
        { ref: 'art. 924 § 1', act: 'Ustawa z dnia 17 listopada 1964 r. Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Wpis o wszczęciu egzekucji z nieruchomości do księgi wieczystej.' },
      ],
    },
    docs: [
      'Numer księgi wieczystej albo adres i numer działki',
      'Projekt umowy przedwstępnej albo umowy sprzedaży, jeśli już jest',
      'Ogłoszenie sprzedającego i jego zapewnienia na piśmie (mail, SMS), jeśli masz',
      'Dokument, z którego sprzedający wywodzi własność (akt notarialny, postanowienie spadkowe), jeśli go pokazał',
      'Wypis z planu albo decyzja o warunkach zabudowy, jeśli sprzedający je ma',
      'Umowa najmu albo dzierżawy, jeśli nieruchomość jest wynajęta',
    ],
    guides: [
      'zniesienie-sluzebnosci-przesylu-nieistniejaca-linia',
      'warunki-zabudowy-ile-wazne',
      'ile-kosztuje-sluzebnosc-drogi-koniecznej',
    ],
    seeAlso: ['droga-konieczna', 'plan-ogolny', 'legalizacja-samowoli'],
    cta: { heading: 'Audyt kosztuje ułamek tego, co możesz stracić.', lead: 'Napisz, co kupujesz i do kiedy masz podpisać umowę. W 24 h roboczych odpiszę ze wstępną analizą i ofertą; płacisz dopiero, gdy ją przyjmiesz.' },
    updated: '2026-10-26',
  },

  /* ===== Sprawdzenie umowy deweloperskiej ===== */
  'sprawdzenie-umowy-deweloperskiej': {
    metaDesc: 'Sprawdzam umowę deweloperską z prospektem i ustawą przed aktem. Zapis mniej korzystny niż ustawa jest nieważny (art. 42 u.d.). Dostajesz listę zmian.',
    h1Full: 'Sprawdzenie umowy deweloperskiej przed podpisaniem u notariusza',
    topic: 'Umowa deweloperska',
    subtitle: 'Deweloper przysłał projekt umowy i wyznaczył termin u notariusza. Sprawdzenie umowy deweloperskiej to porównanie jej z prospektem i ustawą oraz lista zmian z gotowym brzmieniem przed aktem. Postanowienie gorsze dla Ciebie niż przepisy ustawy jest nieważne i zastępuje je ustawa (art. 42 u.d.).',
    short: {
      q: 'Co sprawdza prawnik w umowie deweloperskiej przed podpisem?',
      a: 'Sprawdza, czy umowa ma 20 elementów z art. 35 ust. 1 ustawy deweloperskiej (u.d.) i czy zgadza się z prospektem. Brak elementu albo niezgodność z prospektem pozwala Ci w ciągu 30 dni od zawarcia umowy odstąpić od niej (art. 43 ust. 2 w zw. z ust. 1 pkt 1–2 u.d.). Najwięcej ryzyka jest tam, gdzie treść ustala umowa: termin przeniesienia własności, kary umowne i termin odbioru (art. 35 ust. 1 pkt 7, 14 i 17 u.d.).',
      facts: [
        ['Forma umowy', 'akt notarialny (art. 40 ust. 1 u.d.)'],
        [
          'Co dostajesz przed podpisem',
          'prospekt informacyjny z załącznikami, w tym wzorem umowy, doręczony nieodpłatnie na trwałym nośniku (art. 21 ust. 1–2 u.d. i załącznik do ustawy)',
        ],
        [
          'Gdzie trafiają Twoje wpłaty',
          'na mieszkaniowy rachunek powierniczy, po zakończeniu kolejnego etapu przedsięwzięcia z harmonogramu (art. 6 ust. 1 i art. 8 ust. 3 u.d.)',
        ],
        [
          'Odstąpienie, gdy umowie brakuje elementów z art. 35 albo prospekt jest niezgodny z umową, wadliwy lub niedoręczony',
          'w 30 dni od zawarcia umowy (art. 43 ust. 1 pkt 1–5 i ust. 2 u.d.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '150 zł od wniosku o ujawnienie w księdze wieczystej Twojego roszczenia z umowy (art. 43 pkt 3 u.k.s.c.), dzielone z deweloperem po połowie (art. 40 ust. 2 u.d.); stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Co podpisujesz u notariusza, a co dopiero po odbiorze',
    intro: 'Umowa deweloperska zobowiązuje dewelopera do wybudowania budynku, ustanowienia odrębnej własności lokalu i przeniesienia jej na Ciebie, a Ciebie do zapłaty (art. 5 pkt 6 u.d.). Sama umowa nie daje Ci jeszcze własności. Do tego potrzebny jest drugi akt notarialny po odbiorze lokalu (art. 41 ust. 1 u.d., art. 158 k.c.), a odrębna własność lokalu powstaje dopiero przez wpis w księdze wieczystej (art. 7 ust. 2 u.w.l.). Wzór umowy przygotowuje deweloper i dołącza go do prospektu (art. 20 ust. 1 u.d. i załącznik do ustawy). Ustawa narzuca, co umowa musi zawierać (art. 35 u.d.), ale termin przeniesienia własności, termin odbioru i wysokość kar proponuje deweloper. Te zapisy czytam najdokładniej.',
    whenTitle: 'Kiedy warto sprawdzić umowę',
    whenHeading: 'Deweloper przysłał umowę, a Ty masz wątpliwości przed podpisem',
    when: [
      {
        b: 'Termin u notariusza jest za tydzień, a projekt umowy dopiero przyszedł.',
        t: 'Podaj datę aktu w formularzu: termin raportu w ofercie ustalam względem tej daty. Zmiany prospektu wprowadzone po jego doręczeniu muszą być w umowie wyraźnie podkreślone i wiążą Cię tylko za Twoją zgodą (art. 35 ust. 2–3 u.d.).',
      },
      {
        b: 'Deweloper mówi, że wszyscy podpisują bez zmian.',
        t: 'Zapis z wzorca dewelopera, sprzeczny z dobrymi obyczajami i rażąco naruszający Twoje interesy, nie jest dla Ciebie wiążący (art. 385¹ § 1 i § 3 k.c.). Reszta umowy obowiązuje (art. 385¹ § 2 k.c.), więc taki zapis lepiej wykreślić przed podpisem.',
      },
      {
        b: 'Boisz się, co będzie, jeśli deweloper nie zdąży z budową.',
        t: 'Po terminie przeniesienia własności wyznaczasz deweloperowi 120 dni, a potem możesz odstąpić (art. 43 ust. 3 u.d.). Zachowujesz przy tym roszczenie o karę umowną za okres opóźnienia.',
      },
      {
        b: 'Na działce dewelopera jest hipoteka banku.',
        t: 'Deweloper musi mieć zgodę banku albo jego zobowiązanie do udzielenia zgody na przeniesienie lokalu bez hipoteki po zapłacie pełnej ceny (art. 25 ust. 1 pkt 1 u.d.). Bez żadnego z tych dokumentów masz 60 dni od podpisania umowy na odstąpienie od niej (art. 25 ust. 4 i art. 43 ust. 5 u.d.).',
      },
      {
        b: 'Myślisz o odsprzedaniu umowy przed odbiorem kluczy.',
        t: 'Przeniesienie wierzytelności z umowy (potocznie: cesja) jest dopuszczalne przy jednym lokalu, jeżeli w ciągu 3 lat wcześniej nie było innej Twojej cesji (art. 37a ust. 1 u.d.). Limit nie dotyczy cesji na rzecz osoby z I albo II grupy podatkowej (art. 37a ust. 2 u.d.). Cesja wymaga aktu notarialnego i oświadczenia pod rygorem odpowiedzialności karnej (art. 37a ust. 4, art. 40 ust. 1 u.d.).',
      },
    ],
    levels: {
      eyebrow: 'Trzy poziomy sprawdzenia',
      heading: 'Co dostajesz: trzy zakresy sprawdzenia umowy z deweloperem',
      intro: 'Bezpieczeństwo zakupu zależy od umowy, od stanu prawnego gruntu i od spółki, która buduje. Zakres wyższy obejmuje wszystko z niższego.',
      cost: 'Który zakres wystarczy, piszę we wstępnej analizie w 24 h roboczych. Cenę i termin podaję w ofercie; płacisz dopiero po jej przyjęciu.',
      items: [
        {
          name: 'Analiza podstawowa',
          sub: 'Gdy chcesz bezpiecznie podpisać konkretną umowę z deweloperem.',
          points: [
            'Czytam umowę deweloperską z prospektem i załącznikami, a także umowę rezerwacyjną, jeśli ją masz. Wskazuję zapisy nieważne, niedozwolone i brakujące.',
            'Sprawdzam harmonogram, umowę o miejsce postojowe lub komórkę i zgodę banku na przeniesienie lokalu bez hipoteki.',
            'Sprawdzam księgę wieczystą gruntu: właściciela, hipoteki i służebności.',
            'Dostajesz raport z ryzykami w trzech kolorach i gotowymi zmianami: co wykreślić, co dopisać, jak sformułować. Odpowiadam na pytania do dnia podpisania umowy.',
          ],
        },
        {
          name: 'Analiza pełna',
          plus: 'wszystko z podstawowej, plus:',
          sub: 'Gdy masz wątpliwości co do dewelopera lub okolicy albo kupujesz więcej niż jeden lokal.',
          points: [
            'Sprawdzam, jakie inwestycje deweloper zrealizował i jak skończyły się jego wcześniejsze spółki.',
            'Czytam jego sprawozdania finansowe za ostatnie 2 lata, z którymi na Twoje żądanie musi umożliwić Ci zapoznanie się w swoim biurze (art. 26 ust. 1 pkt 4 u.d.). Sprawdzam rejestry długów.',
            'Pozyskuję z urzędów dokumenty, których deweloper nie udostępnił.',
            'Sprawdzam przeznaczenie terenu w planie i inwestycje uciążliwe w okolicy (wysypiska, spalarnie, oczyszczalnie).',
          ],
        },
        {
          name: 'Analiza pełna + negocjacje',
          plus: 'wszystko z pełnej, plus:',
          sub: 'Gdy chcesz, żebym negocjował zmiany z deweloperem w Twoim imieniu.',
          points: [
            'Negocjuję cenę i warunki umowy bezpośrednio z deweloperem lub jego prawnikiem.',
            'Pilnuję, żeby ustalone zmiany trafiły do aktu notarialnego.',
            'Jestem z Tobą aż do podpisania aktu.',
          ],
        },
      ],
    },
    lists: [
      {
        eyebrow: 'Na co zwrócić uwagę',
        title: 'Na co zwrócić uwagę w umowie z deweloperem przed podpisem',
        intro: 'Przy każdym zapisie: co mówi ustawa i co sprawdzam w Twojej umowie przed aktem.',
        items: [
          {
            b: 'Cena i metraż',
            t: 'Dla umów zawartych od 13.02.2026 cenę liczy się, mnożąc cenę za 1 m² przez metry kwadratowe powierzchni użytkowej (art. 5a u.d.). Umowa musi wskazać, jak mierzy się powierzchnię (art. 35 ust. 1 pkt 15 u.d.). Sprawdzam, jak umowa rozlicza różnicę powierzchni po pomiarze.',
          },
          {
            b: 'Termin i kary za opóźnienie',
            t: 'Termin przeniesienia własności jest obowiązkowy, a kary wpisuje się, jeżeli strony je przewidziały (art. 35 ust. 1 pkt 7 i 14 u.d.). Odsetki zastrzeżone dla dewelopera nie mogą przewyższać kar zastrzeżonych na Twoją rzecz (art. 39 ust. 1 u.d.). Zapis pozwalający deweloperowi zmienić umowę bez ważnej przyczyny w niej wskazanej jest w razie wątpliwości niedozwolony (art. 385³ pkt 10 k.c.).',
          },
          {
            b: 'Odbiór i wady',
            t: 'Od podpisania protokołu odbioru ustawa daje deweloperowi 14 dni na odpowiedź co do zgłoszonych wad i 30 dni na usunięcie wad uznanych (art. 41 ust. 4 i 6 u.d.). Dłuższy termin we wzorze jest nieważny (art. 42 u.d.); wskazuję go w raporcie do wykreślenia.',
          },
          {
            b: 'Odstąpienie i zwrot pieniędzy',
            t: 'Odstępując z przyczyn z art. 43 ust. 1 u.d., nie płacisz odstępnego ani kosztów (art. 44 ust. 1–2 u.d.). Deweloper może odstąpić, jeżeli nie zapłacisz zaległej kwoty w 30 dni od doręczenia pisemnego wezwania, chyba że przeszkodą była siła wyższa (art. 43 ust. 7 u.d.). Zapis, który tylko Tobie każe zapłacić ustaloną sumę za rezygnację, jest w razie wątpliwości niedozwolony (art. 385³ pkt 16 k.c.).',
          },
        ],
      },
    ],
    stepsHeading: 'Od projektu umowy do aktu notarialnego: jak pracujemy',
    steps: [
      'Przesyłasz projekt umowy deweloperskiej, prospekt informacyjny z załącznikami i datę aktu, jeśli notariusz już ją wyznaczył.',
      'Bezpłatna wstępna analiza w 24 h roboczych: piszę, czy wystarczy porównać umowę z prospektem, czy trzeba też sprawdzić dewelopera i księgę wieczystą gruntu. Razem z nią dostajesz ofertę z ceną i terminem raportu.',
      'Po akceptacji oferty sprawdzam dokumenty i wysyłam raport z gotowymi zmianami do umowy.',
      'Zmiany przekazujesz deweloperowi samodzielnie albo negocjuję je w Twoim imieniu (zakres z negocjacjami).',
      'Krok nieodwracalny: podpis aktu notarialnego. Każda późniejsza zmiana to aneks w formie aktu notarialnego (art. 77 § 1 k.c. i art. 40 ust. 1 u.d.), dlatego zmiany ustalamy przed podpisem.',
    ],
    faq: [
      {
        q: 'Czy koszty aktu przy umowie deweloperskiej dzielę z deweloperem?',
        a: 'Tak, po połowie. Umowę zawiera się w formie aktu notarialnego (art. 40 ust. 1 u.d.). Wynagrodzenie notariusza, także za wypisy, oraz koszty sądowe wpisów do księgi wieczystej ponosicie w równych częściach (art. 40 ust. 2 u.d.). Kwotę wynagrodzenia poda notariusz.',
      },
      {
        q: 'Czy umowa deweloperska to już tytuł prawny do mieszkania?',
        a: 'Nie. Umowa daje Ci roszczenie o wybudowanie budynku i przeniesienie własności lokalu, ujawniane w księdze wieczystej gruntu (art. 38 ust. 2 u.d.). Po wpisie roszczenie jest skuteczne także wobec praw nabytych później przez czynność prawną (art. 17 u.k.w.h.). Odrębna własność lokalu powstaje przez wpis do księgi wieczystej po drugim akcie (art. 7 ust. 2 u.w.l.).',
      },
      {
        q: 'Czy umowa deweloperska jest bezpieczna?',
        a: 'Wpłaty chroni ustawa, a termin przeniesienia własności i kary ustala umowa. Deweloper musi zapewnić mieszkaniowy rachunek powierniczy (art. 6 ust. 1 u.d.). Wpłaty z otwartego rachunku zwraca Deweloperski Fundusz Gwarancyjny w przypadkach wymienionych w ustawie, głównie przy upadłości dewelopera (art. 48 ust. 1 u.d.). Wzór umowy z terminem i karami (art. 35 ust. 1 pkt 7 i 14 u.d.) przygotowuje deweloper.',
      },
      {
        q: 'Czym umowa deweloperska różni się od umowy przedwstępnej?',
        a: 'Umowa przedwstępna zobowiązuje tylko do zawarcia oznaczonej umowy w przyszłości (art. 389 § 1 k.c.). Deweloperska zobowiązuje dewelopera do wybudowania budynku i przeniesienia na Ciebie własności lokalu (art. 5 pkt 6 u.d.). Ustawa obejmuje też umowę, w której deweloper zobowiązuje się zawrzeć z Tobą umowę deweloperską albo umowę przeniesienia własności lokalu (art. 2 ust. 3 u.d.).',
      },
      {
        q: 'Czy przy umowie deweloperskiej płacę całą cenę od razu?',
        a: 'Nie, płacisz w częściach, po zakończeniu kolejnych etapów z harmonogramu (art. 8 ust. 1 i 3 u.d.). O zakończeniu etapu deweloper informuje Cię na papierze lub innym trwałym nośniku. Harmonogram ma co najmniej 4 etapy, a każdy kosztuje 10–25% kosztów całego przedsięwzięcia (art. 24 ust. 2 u.d.).',
      },
      {
        q: 'Ile kosztuje sprawdzenie umowy deweloperskiej przez prawnika?',
        a: 'Cenę podaję w ofercie, którą wysyłam w 24 h roboczych razem z bezpłatną wstępną analizą. Analiza mówi, co trzeba sprawdzić w Twojej sprawie; nie jest opinią o umowie. Cena zależy od zakresu: sama umowa, do tego deweloper i grunt albo także negocjacje. Płacisz dopiero po przyjęciu oferty.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2 ust. 3, art. 5 pkt 6, art. 5a, art. 6, art. 8, art. 20–26, art. 35',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz o Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Zakres ustawy, umowa deweloperska, cena za 1 m², rachunek powierniczy, prospekt, harmonogram, zgoda banku, treść umowy.',
        },
        {
          ref: 'art. 37a–45, art. 48',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz o Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Cesja, wpis roszczenia, kary, forma i koszty aktu, odbiór, odstąpienie, Deweloperski Fundusz Gwarancyjny.',
        },
        { ref: 'art. 77 § 1, art. 158, art. 385¹–385³, art. 389', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Forma zmiany umowy, niedozwolone postanowienia, umowa przedwstępna.' },
        { ref: 'art. 7 ust. 2', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'Odrębna własność lokalu powstaje z wpisem do księgi wieczystej.' },
        { ref: 'art. 17', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Skutek ujawnienia roszczenia w księdze wieczystej.' },
        { ref: 'art. 43 pkt 3', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata 150 zł od wniosku o wpis roszczenia do księgi wieczystej.' },
      ],
    },
    docs: [
      'Projekt umowy deweloperskiej: wzór z prospektu albo wersja przysłana przed aktem.',
      'Prospekt informacyjny z załącznikami (rzut lokalu, szkic zagospodarowania terenu).',
      'Umowa rezerwacyjna i potwierdzenie opłaty rezerwacyjnej, jeśli je masz.',
      'Umowa o miejsce postojowe lub komórkę lokatorską, jeśli kupujesz je osobno.',
      'Numer księgi wieczystej działki, na której powstaje budynek, jeśli go znasz.',
    ],
    guides: ['kara-umowna-za-opoznienie-dewelopera-uchwala-sn', 'umowa-deweloperska', 'umowa-rezerwacyjna-mieszkania'],
    seeAlso: ['klauzule-abuzywne-deweloper', 'kary-za-opoznienie-dewelopera', 'rekojmia-wady-lokalu'],
    cta: {
      heading: 'Nie podpisuj umowy deweloperskiej w ciemno.',
      lead: 'Prześlij projekt umowy, prospekt i datę aktu. W 24 h roboczych odpiszę, czy wystarczy sprawdzić samą umowę, czy także dewelopera i grunt, i prześlę ofertę z ceną oraz terminem raportu. Wstępna analiza i oferta są bezpłatne.',
    },
    updated: '2026-10-10',
    faqHeading: 'Pytania przed wizytą u notariusza',
  },

  /* ===== Odszkodowanie za słupy / służebność przesyłu ===== */
  'odszkodowanie-sluzebnosc-przesylu': {
    h1: 'Odszkodowanie za słupy i urządzenia przesyłowe na działce',
    h1Full: 'Odszkodowanie za słupy na działce: linie, gazociągi i służebność przesyłu',
    topic: 'Służebność przesyłu',
    metaDesc: 'Słup, linia albo gazociąg na działce bez tytułu prawnego? Możesz żądać wynagrodzenia na przyszłość, a od firmy w złej wierze co do zasady za 6 lat wstecz.',
    subtitle: 'Słup, linia średniego lub wysokiego napięcia albo gazociąg stoi na Twojej działce, a firma przesyłowa nic nie płaci? Jeżeli firma nie ma tytułu prawnego, możesz żądać wynagrodzenia na przyszłość, a od firmy w złej wierze także co do zasady za 6 lat wstecz (art. 118 k.c.). Sprawdzam tytuł firmy i okres roszczenia, a potem wzywam ją do zapłaty.',
    short: {
      q: 'Czy należy mi się odszkodowanie za słupy na działce?',
      a: 'Tak, jeżeli firma przesyłowa nie ma tytułu prawnego do Twojego gruntu, np. umowy, orzeczenia sądu, decyzji administracyjnej albo zasiedzianej służebności. Żądasz wtedy wynagrodzenia (potocznie: odszkodowania za słupy) za ustanowienie służebności przesyłu (art. 305² § 2 k.c.). Od firmy w złej wierze żądasz też zapłaty za przeszłość (art. 224 § 2 i 225 w zw. z art. 352 § 2 k.c.).',
      facts: [
        [
          'Na przyszłość',
          'odpowiednie wynagrodzenie za ustanowienie służebności przesyłu; żądasz go, gdy firma odmawia zawarcia umowy (art. 305² § 2 k.c.)',
        ],
        [
          'Za przeszłość',
          'wynagrodzenie za bezumowne korzystanie od firmy bez tytułu prawnego, która korzysta z gruntu w złej wierze; od firmy w dobrej wierze dopiero od chwili, gdy dowiedziała się o pozwie (art. 224 § 2 i 225 w zw. z art. 352 § 2 k.c.)',
        ],
        [
          'Za ile lat wstecz',
          'co do zasady 6 lat; może wynosić 3 lata, jeżeli roszczenie jest związane z działalnością gospodarczą; koniec terminu ostatniego dnia roku (art. 118 k.c.)',
        ],
        [
          'Kto liczy kwotę',
          'rzeczoznawca majątkowy według § 32 rozporządzenia w sprawie wyceny nieruchomości; wzór i współczynniki podaję w pierwszym pytaniu niżej',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'zawezwanie do próby ugodowej o kwotę ponad 20 000 zł: 300 zł (art. 23a ust. 2 u.k.s.c.); pozew o zapłatę ponad 20 000 zł: 5% żądanej kwoty (art. 13 ust. 2 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Słup na działce: kiedy firma przesyłowa płaci właścicielowi',
    intro: 'Słupy, linie, gazociągi i wodociągi nie są częścią Twojej działki, jeżeli wchodzą w skład przedsiębiorstwa (art. 49 § 1 k.c.). Należą do firmy przesyłowej, która do korzystania z cudzego gruntu potrzebuje tytułu prawnego. Może nim być służebność przesyłu (art. 305¹ k.c.), czyli prawo firmy do korzystania z pasa gruntu pod urządzeniami; jeżeli ją wpisano, znajdziesz ją w dziale III księgi wieczystej (art. 25 ust. 1 pkt 3 u.k.w.h.). Tytułem jest też decyzja starosty ograniczająca sposób korzystania z nieruchomości (art. 124 u.g.n.); wtedy przysługuje odszkodowanie za szkody z tego ograniczenia (art. 128 ust. 4 u.g.n.), a nie wynagrodzenie za bezumowne korzystanie.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Słupy, linia albo gazociąg na działce: propozycja PGE, zarzut zasiedzenia, budowa',
    when: [
      {
        b: 'PGE albo gazownia przysłała propozycję kwoty i czeka na podpis.',
        t: 'Ugodą strony czynią sobie wzajemne ustępstwa, żeby uchylić spór (art. 917 k.c.). Przed podpisem porównaj kwotę z okresem, za który możesz żądać zapłaty.',
      },
      { b: 'Słupy stoją od 30 lat, a firma twierdzi, że zasiedziała służebność.', t: 'To zarzut, który firma musi udowodnić (art. 6 k.c.), a nie fakt, który przyjmujesz na słowo. Przesłanki opisuję w pytaniu o zasiedzenie.' },
      {
        b: 'Weszli na działkę i wymienili słup bez pytania.',
        t: 'Bez tytułu prawnego i bez decyzji starosty o udostępnieniu nieruchomości (art. 124b u.g.n.) to naruszenie własności. Możesz żądać przywrócenia stanu zgodnego z prawem i zaniechania naruszeń (art. 222 § 2 k.c.).',
      },
      { b: 'Chcesz się budować, a słup albo linia stoi w złym miejscu.', t: 'O tym, czy możesz żądać usunięcia albo przesunięcia urządzeń, decyduje tytuł firmy i treść ewentualnej służebności (art. 222 § 2, art. 305¹ k.c.).' },
      {
        b: 'Kupiłeś działkę, na której słup już stał.',
        t: 'Wynagrodzenia za ustanowienie służebności na przyszłość żąda obecny właściciel (art. 305² § 2 k.c.). Za lata sprzed zakupu sprawdzam umowę nabycia: roszczenie poprzednika mogło zostać przelane na Ciebie (art. 509 § 1 k.c.).',
      },
    ],
    doForTitle: 'Co robię w sprawie o słupy, linię albo gazociąg',
    doFor: [
      'Sprawdzam księgę wieczystą, decyzje administracyjne i dokumenty firmy, żeby ustalić, czy ma tytuł prawny do Twojego gruntu.',
      'Liczę okres roszczenia według art. 118 k.c. i sprawdzam, czy bieg przedawnienia był wcześniej przerwany albo zawieszony.',
      'Szacuję orientacyjnie kwotę, żebyś wiedział, czy sprawa jest warta prowadzenia; dokładną wartość wylicza w sprawie biegły rzeczoznawca.',
      'Negocjuję z firmą na podstawie wyliczenia; jeżeli nie płaci, wnoszę pozew o zapłatę i wniosek o ustanowienie służebności przesyłu.',
      'Gdy słup albo linia blokuje zabudowę, prowadzę sprawę o usunięcie urządzeń z działki (art. 222 § 2 k.c.).',
    ],
    stepsHeading: 'Jak przebiega sprawa o wynagrodzenie za słupy',
    steps: [
      'Opisujesz w formularzu urządzenie na działce i pisma od firmy. W 24 h roboczych odpisuję bezpłatnie, od czego zacząć, np. od ustalenia dat postawienia słupów, i wysyłam ofertę z ceną i terminem.',
      'Po akceptacji oferty ustalam tytuł firmy, daty postawienia urządzeń i lata, za które żądamy zapłaty.',
      'Wzywam firmę do zapłaty i do zawarcia umowy o ustanowienie służebności przesyłu. Samo wezwanie nie przerywa biegu przedawnienia; przerywa go m.in. pozew (art. 123 § 1 pkt 1 k.c.).',
      'Jeżeli firma odmawia, składam wniosek o zawezwanie do próby ugodowej do sądu rejonowego właściwego dla firmy (art. 185 § 1 k.p.c.). Na czas tego postępowania bieg przedawnienia jest zawieszony (art. 121 pkt 6 k.c.).',
      'Jeżeli firma zgodzi się zapłacić, podpisujesz ugodę, a umowę o ustanowienie służebności zawierasz u notariusza (art. 245 § 2 k.c.). Po podpisie nie wycofasz się jednostronnie, więc wcześniej porównuję warunki z wyliczeniem.',
      'Bez ugody wnoszę pozew o wynagrodzenie za bezumowne korzystanie i wniosek o ustanowienie służebności przesyłu. Sąd powinien przeprowadzić oględziny nieruchomości (art. 626 § 2 w zw. z § 3 k.p.c.), a kwotę wylicza biegły.',
    ],
    faq: [
      {
        q: 'Ile wynosi odszkodowanie za słupy energetyczne na działce?',
        a: 'Bez danych rynkowych to iloczyn powierzchni pasa, wartości jednostkowej gruntu w pasie i współczynnika korzystania: do 0,5 dla linii napowietrznej, do 0,3 dla gazociągu w ziemi (§ 32 ust. 5–6 rozporządzenia w sprawie wyceny nieruchomości). Kwotę w Twojej sprawie wylicza rzeczoznawca majątkowy. Uwzględnia też okres, na który ustanawia się służebność, i zakres ograniczeń dla Ciebie (§ 32 ust. 1).',
      },
      {
        q: 'Słupy stoją od 30 lat. Czy zakład energetyczny zasiedział służebność?',
        a: 'Mógł, ale udowodnić to musi firma, która się na zasiedzenie powołuje (art. 6 k.c.). Zasiedzenie wymaga korzystania z trwałego i widocznego urządzenia przez 20 lat w dobrej wierze albo 30 lat w złej wierze (art. 292 w zw. z art. 172 i 305⁴ k.c.). Firma wykazuje więc, od kiedy korzysta z urządzenia na Twojej działce; dobrą wiarę i ciągłość posiadania prawo domniemywa (art. 7 i 340 k.c.).',
      },
      {
        q: 'Za ile lat wstecz mogę żądać zapłaty za słupy?',
        a: 'Co do zasady za 6 lat: termin przedawnienia wynosi 6 lat i kończy się ostatniego dnia roku kalendarzowego (art. 118 k.c.). Pozew złożony w 2026 r. obejmuje więc okres od 1.01.2020 r. Jeżeli roszczenie jest związane z działalnością gospodarczą, termin może wynosić 3 lata, czyli od 1.01.2023 r. Dalej wstecz sięgniesz, jeżeli bieg wcześniej przerwano, np. pozwem albo uznaniem roszczenia przez firmę (art. 123 § 1 k.c.), albo zawieszono zawezwaniem do próby ugodowej (art. 121 pkt 6 k.c.).',
      },
      {
        q: 'PGE proponuje kwotę za słup. Czy podpisać?',
        a: 'Nie podpisuj, zanim nie sprawdzisz tytułu firmy i okresu, za który należy Ci się zapłata. Od podpisanej ugody nie uchylisz się z powodu dowodów znalezionych później, chyba że ugodę zawarto w złej wierze (art. 918 § 2 k.c.). Propozycję porównuję z wyliczeniem według § 32 rozporządzenia w sprawie wyceny nieruchomości.',
      },
      {
        q: 'Czy mogę żądać przesunięcia słupa, żeby się budować?',
        a: 'Tak, jeżeli firma nie ma tytułu prawnego: możesz żądać przywrócenia stanu zgodnego z prawem (art. 222 § 2 k.c.). Przy nieruchomości to roszczenie nie przedawnia się (art. 223 § 1 k.c.). Jeżeli firma ma służebność przesyłu, korzysta z działki w jej zakresie (art. 305¹ k.c.), więc ścieżka zależy od treści służebności. Oceniam, czy w Twojej sprawie lepsze jest przesunięcie, czy wynagrodzenie.',
      },
      {
        q: 'Czy można cofnąć służebność przesyłu?',
        a: 'Nie, jednostronnie jej nie cofniesz. Służebność wygasa m.in., gdy firma się jej zrzeknie (art. 246 § 1 k.c.) albo gdy nie jest wykonywana przez 10 lat (art. 293 § 1 w zw. z art. 305⁴ k.c.). Najpóźniej wygasa z zakończeniem likwidacji przedsiębiorstwa (art. 305³ § 2 k.c.). Potem firma musi usunąć urządzenia utrudniające korzystanie z działki, a gdy powodowałoby to nadmierne trudności lub koszty, naprawić szkodę (art. 305³ § 3 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 49 § 1, 224 § 2, 225, 305¹–305⁴ i 352 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Służebność przesyłu, wynagrodzenie za jej ustanowienie i za bezumowne korzystanie.' },
        { ref: 'art. 118, 121 pkt 6, 123 i 124 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Przedawnienie, jego przerwanie i zawieszenie.' },
        { ref: 'art. 6, 7, 172, 222 § 2, 223 § 1 i 292 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Zasiedzenie służebności i usunięcie urządzeń.' },
        {
          ref: 'art. 185 § 1 i 626 § 2–3 k.p.c.',
          act: 'Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'Zawezwanie do próby ugodowej i oględziny w sprawie o ustanowienie służebności przesyłu.',
        },
        { ref: 'art. 124, 124b i 128 ust. 4 u.g.n.', act: 'Ustawa o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Decyzja starosty i odszkodowanie za ograniczenie.' },
        {
          ref: '§ 32 rozporządzenia w sprawie wyceny nieruchomości',
          act: 'Rozporządzenie Ministra Rozwoju i Technologii z 5.09.2023 r. w sprawie wyceny nieruchomości',
          tj: 'Dz.U. 2023 poz. 1832',
          eli: 'DU/2023/1832',
          note: 'Wartość służebności przesyłu.',
        },
      ],
    },
    docs: [
      'Numer księgi wieczystej działki, przez którą biegnie linia albo gazociąg, jeśli go znasz.',
      'Zdjęcia słupów, linii, studzienek albo oznaczeń gazociągu na działce.',
      'Pisma od firmy przesyłowej: propozycje kwot, wezwania, projekty umów, jeśli masz.',
      'Akt notarialny albo postanowienie spadkowe, z którego wynika, od kiedy jesteś właścicielem działki, jeśli masz.',
      'Decyzje administracyjne (np. starosty) albo umowy poprzednich właścicieli dotyczące linii lub gazociągu, jeśli masz.',
      'Informacja, czy na działce prowadzisz działalność gospodarczą albo produkcję rolną na sprzedaż.',
    ],
    guides: [
      'sluzebnosc-przesylu-jak-obliczyc-wynagrodzenie',
      'wycena-sluzebnosci-przesylu-rzeczoznawca',
    ],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'uregulowanie-stanu-prawnego'],
    cta: {
      heading: 'Nie zostawiaj swoich pieniędzy firmie przesyłowej.',
      lead: 'Napisz, co stoi na działce, od kiedy i czy firma przesłała Ci propozycję kwoty. W 24 h roboczych odpiszę, czy zacząć od sprawdzenia tytułu firmy, czy od wezwania, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Warunki zabudowy (WZ) ===== */
  'warunki-zabudowy': {
    h1: 'Warunki zabudowy (WZ)',
    h1Full: 'Warunki zabudowy (WZ): wniosek, odmowa i odwołanie po reformie',
    topic: 'Decyzja o warunkach zabudowy',
    metaDesc: 'Warunki zabudowy (WZ) z wniosku złożonego od 1.09.2026 dostaniesz tylko wtedy, gdy plan ogólny gminy już wszedł w życie. Pomagam przy wniosku i odwołaniu.',
    subtitle: 'Chcesz budować na działce bez planu miejscowego albo gmina odmówiła Ci „wuzetki”? Warunki zabudowy (WZ) z wniosku złożonego od 1.09.2026 urząd wyda tylko wtedy, gdy plan ogólny gminy już wszedł w życie. Sprawdzam, czy działka spełnia warunki, składam wniosek, a po odmowie piszę odwołanie do samorządowego kolegium odwoławczego (SKO).',
    short: {
      q: 'Czy dziś dostanę warunki zabudowy na działkę bez planu miejscowego?',
      a: 'Tak, jeżeli plan ogólny Twojej gminy już wszedł w życie (art. 59 ust. 3 ustawy z 7.07.2023). Działka musi też spełniać łącznie warunki z art. 61 ust. 1 u.p.z.p. Przy nowym budynku musi co do zasady leżeć w obszarze uzupełnienia zabudowy, czyli tam, gdzie gmina jeszcze pozwoli budować.',
      facts: [
        [
          'Wniosek od 1.09.2026',
          'WZ tylko wtedy, gdy plan ogólny gminy już wszedł w życie (art. 59 ust. 3 ustawy z 7.07.2023)',
        ],
        [
          'Wniosek od 1.01.2027',
          'WZ tylko dla osoby z prawem do dysponowania działką na cele budowlane (art. 63 ust. 1a u.p.z.p.)',
        ],
        [
          'Ważność',
          '5 lat od prawomocności (art. 64c u.p.z.p.); bez terminu m.in. WZ prawomocna przed 1.01.2026 (art. 62 ustawy z 7.07.2023)',
        ],
        [
          'Termin dla urzędu',
          '90 dni (dom do 70 m² powierzchni zabudowy: 21 dni); do 31.12.2026 nie biegnie (art. 64 ust. 1 pkt 1 u.p.z.p.; art. 6 ustawy z 5.11.2025)',
        ],
        [
          'Odwołanie',
          '14 dni od doręczenia decyzji, do SKO przez urząd, który ją wydał (art. 129 § 1–2 k.p.a.)',
        ],
        [
          'Opłata skarbowa (nie honorarium)',
          '598 zł; właściciel i użytkownik wieczysty nie płacą (załącznik, część I ust. 8 u.o.s.; stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Co ustala decyzja i kiedy jej potrzebujesz',
    intro: 'Decyzja o warunkach zabudowy (potocznie „wuzetka”) ustala sposób zagospodarowania terenu i warunki zabudowy tam, gdzie nie ma miejscowego planu zagospodarowania przestrzennego (art. 4 ust. 2 pkt 2 u.p.z.p.). Potrzebujesz jej, gdy na takim terenie chcesz np. postawić dom albo zmienić sposób użytkowania budynku (art. 59 ust. 1). Obszar uzupełnienia zabudowy gmina może wyznaczyć w planie ogólnym, ale nie musi (art. 13a ust. 4 pkt 2 lit. a). Jeżeli go nie wyznaczyła, WZ na nowy budynek co do zasady nie dostaniesz; wyjątki to m.in. odbudowa, rozbudowa i nadbudowa (art. 61 ust. 1 pkt 1a i ust. 1a). Każdy warunek z art. 61 ust. 1 sprawdzam przed wnioskiem i mówię wprost, jeśli któregoś brakuje.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Gmina odmówiła, wniosek leży w urzędzie albo sąsiad chce budować',
    when: [
      { b: 'Gmina odmówiła WZ albo wydała warunki, z którymi się nie zgadzasz.', t: 'Odwołanie do SKO składasz w 14 dni od doręczenia decyzji, nie od daty na niej (art. 129 § 2 k.p.a.).' },
      {
        b: 'Kupujesz działkę i chcesz złożyć wniosek o WZ przed aktem notarialnym.',
        t: 'Na wniosek złożony od 1.01.2027 WZ dostanie tylko osoba z prawem do dysponowania działką na cele budowlane (art. 63 ust. 1a u.p.z.p.), np. właściciel albo ktoś z umową, która pozwala budować (art. 3 pkt 11 p.b.). Sprawy wszczęte wcześniej urząd kończy według art. 63 w brzmieniu dotychczasowym (art. 12 ustawy z 30.04.2026).',
      },
      {
        b: 'Wniosek leży w urzędzie od miesięcy.',
        t: 'Do 31.12.2026 ustawowy termin na WZ nie biegnie, a od 1.01.2027 liczy się od nowa (art. 6 ustawy z 5.11.2025). Sprawdzam w aktach, na jakie uzgodnienia czeka urząd (art. 60 ust. 1 u.p.z.p.).',
      },
      {
        b: 'Sąsiad chce budować przy Twoim domu.',
        t: 'Możesz się odwołać, jeżeli decyzja dotyczy Twoich praw do działki (art. 28 k.p.a.). Przy WZ na dom do 70 m² powierzchni zabudowy stroną jest tylko wnioskodawca (art. 64a ust. 1 u.p.z.p.).',
      },
      {
        b: 'Działka jest rolna, a chcesz na niej dom.',
        t: 'WZ co do zasady nie dostaniesz na gruncie wymagającym zgody na zmianę przeznaczenia na cele nierolnicze, np. na użytkach rolnych klas I–III poza obszarem uzupełnienia zabudowy (art. 61 ust. 1 pkt 4 u.p.z.p.; art. 7 ust. 2 pkt 1 i ust. 2a u.o.g.r.l.).',
      },
    ],
    doForTitle: 'Co robię od sprawdzenia działki do skargi do sądu',
    doFor: [
      'Sprawdzam plan miejscowy, plan ogólny i obszar uzupełnienia zabudowy, zanim zapłacisz za projekt.',
      'Ustalam z architektem funkcję i parametry zabudowy zgodne ze strefą planu ogólnego (art. 54 ust. 2 w zw. z art. 64 ust. 1 u.p.z.p.).',
      'Składam wniosek na urzędowym formularzu (art. 64b) i odpowiadam na wezwania urzędu.',
      'Sprawdzam w aktach analizę sąsiedztwa: obszar analizowany i działki, z których urząd wziął parametry (art. 61 ust. 5a).',
      'Po odmowie piszę odwołanie do SKO, a gdy SKO utrzyma odmowę w mocy (art. 138 § 1 pkt 1 k.p.a.), skargę do wojewódzkiego sądu administracyjnego: 30 dni od doręczenia, składana przez SKO (art. 53 § 1 i art. 54 § 1 p.p.s.a.).',
    ],
    lists: [
      {
        eyebrow: 'Stan po reformie',
        title: 'Co dziś z Twoją działką i Twoją decyzją',
        intro: 'Stan prawny na 10.10.2026. Wejście w życie planu ogólnego nie wygasza WZ, którą już masz, bo ustawa nie wymienia go wśród przyczyn wygaśnięcia (art. 65 ust. 1 u.p.z.p.).',
        items: [
          {
            b: 'WZ prawomocna przed 1.01.2026 albo wydana w sprawie wszczętej przed 16.10.2025',
            t: 'nie wygasa po 5 latach (art. 62 ustawy z 7.07.2023). Urząd stwierdzi jednak jej wygaśnięcie po uchwaleniu planu miejscowego z innymi ustaleniami, jeżeli nie masz ostatecznego pozwolenia na budowę ani skutecznego zgłoszenia (art. 65 ust. 1 pkt 2 i ust. 2 u.p.z.p.).',
          },
          { b: 'Każda inna WZ', t: 'wygasa po 5 latach od prawomocności (art. 64c u.p.z.p.). Wniosek o pozwolenie na budowę złóż przed tym dniem (art. 32 ust. 4 pkt 1 p.b.).' },
          { b: 'Wniosek złożony przed utratą mocy studium, najpóźniej 31.08.2026', t: 'urząd rozpatruje go bez wymogu obszaru uzupełnienia zabudowy (art. 59 ust. 2 i art. 65 ust. 1 ustawy z 7.07.2023).' },
          { b: 'Wniosek złożony od 1.09.2026 w gminie bez planu ogólnego', t: 'WZ nie zostanie wydana, dopóki plan ogólny nie wejdzie w życie; samo uchwalenie nie wystarcza (art. 59 ust. 3 ustawy z 7.07.2023).' },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega sprawa: od opisu działki do prawomocnej decyzji',
    steps: [
      'Opisujesz w formularzu działkę, planowaną zabudowę i to, czy masz już wniosek, decyzję albo odmowę.',
      'Odpisuję w ciągu 24 h roboczych, czy zaczynamy od planu ogólnego, od wniosku, czy od odwołania, i dołączam ofertę z ceną i terminem. Nic nie płacisz, dopóki jej nie przyjmiesz.',
      'Składam wniosek do wójta, burmistrza albo prezydenta miasta, w Lublinie do Prezydenta Miasta Lublin (art. 60 ust. 1 u.p.z.p.).',
      'Po odmowie piszę odwołanie do SKO, a po decyzji SKO, jeśli się zgodzisz, skargę do sądu. Krok nieodwracalny: upływ 14 dni na odwołanie od doręczenia decyzji. Później SKO stwierdzi uchybienie terminu (art. 134 k.p.a.), chyba że uprawdopodobnisz brak swojej winy (art. 58 § 1).',
      'Bez odwołania decyzja staje się ostateczna i prawomocna (art. 16 § 1 i § 3 k.p.a.); od tego dnia biegnie 5 lat jej ważności (art. 64c u.p.z.p.).',
    ],
    faqHeading: 'Pytania o wniosek, odmowę i ważność decyzji',
    faq: [
      {
        q: 'Sprzedający pisze, że działka jest „z WZ”. Co to znaczy?',
        a: 'To znaczy, że ktoś dostał decyzję ustalającą, co i jak można zbudować na tej działce (art. 4 ust. 2 pkt 2 u.p.z.p.). WZ nie daje praw do działki (art. 63 ust. 2). Dla jednego terenu WZ może dostać kilka osób (art. 63 ust. 1). Gdy jedna z nich uzyska pozwolenie albo skuteczne zgłoszenie, urząd stwierdzi wygaśnięcie pozostałych WZ (art. 65 ust. 1 pkt 1–1b).',
      },
      {
        q: 'Ile się czeka na warunki zabudowy?',
        a: 'Urząd ma 90 dni, przy domu do 70 m² powierzchni zabudowy 21 dni (art. 64 ust. 1 pkt 1 u.p.z.p.). Do 31.12.2026 ten termin nie biegnie; od 1.01.2027 będzie liczony od nowa (art. 6 ustawy z 5.11.2025). Za każdy dzień zwłoki wojewoda wymierza urzędowi 500 zł kary, jeżeli zażądasz tego w 14 dni od doręczenia decyzji (art. 51 ust. 2–2e w zw. z art. 64 ust. 1).',
      },
      {
        q: 'Ile kosztuje wniosek o warunki zabudowy?',
        a: 'Właściciel i użytkownik wieczysty działki nie płacą opłaty skarbowej za WZ (załącznik, część I ust. 8 u.o.s.). Pozostali płacą 598 zł, a za przeniesienie WZ na inną osobę 56 zł (ust. 9). Skarga do sądu administracyjnego w sprawie WZ to wpis 500 zł (§ 2 ust. 3 pkt 2 rozporządzenia w sprawie wpisu). Koszt mojej pracy i termin znajdziesz w ofercie.',
      },
      {
        q: 'Czy sąsiad może nie zgodzić się na moje warunki zabudowy?',
        a: 'Zgoda sąsiada nie jest warunkiem WZ (art. 61 ust. 1 u.p.z.p.), ale sąsiad będący stroną może się odwołać. Stroną jest, jeżeli decyzja dotyczy jego praw do działki (art. 28 k.p.a.); potem może też złożyć skargę do sądu. Przy WZ na dom do 70 m² powierzchni zabudowy stroną jest tylko wnioskodawca (art. 64a ust. 1).',
      },
      {
        q: 'Gmina odmówiła WZ, bo „brak zabudowy w sąsiedztwie”. Co dalej?',
        a: 'Odwołanie do SKO złożysz w 14 dni od doręczenia odmowy (art. 129 § 2 k.p.a.). Ustawa wymaga zabudowanej działki sąsiedniej z dostępem z tej samej drogi publicznej (art. 61 ust. 1 pkt 1 u.p.z.p.). Jej zabudowa musi pozwalać określić parametry nowej, np. linię zabudowy. Przy wniosku od 1.09.2026 urząd szuka jej w obszarze analizowanym: trzy szerokości frontu działki, 50–200 m (art. 61 ust. 5a).',
      },
      {
        q: 'Kupuję działkę z WZ. Czy warunki zabudowy przejdą na mnie?',
        a: 'Tak, jeżeli urząd przeniesie decyzję na Ciebie. Musi to zrobić, gdy zgodzi się osoba, na którą wydano WZ, a Ty przyjmiesz wszystkie jej warunki (art. 63 ust. 5 u.p.z.p.). Przeniesienie nie daje nowych 5 lat: liczysz je od tej samej prawomocności co poprzednik (art. 64c).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 4, 13a, 51, 54, 59–61, 63–65 u.p.z.p.',
          act: 'Ustawa o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538',
          eli: 'DU/2003/717',
          note: 'warunki, termin, ważność i wygaśnięcie WZ; art. 63 ust. 1a od 1.01.2027 (Dz.U. 2026 poz. 781); termin wstrzymany do 31.12.2026 (art. 6 ustawy z 5.11.2025, Dz.U. 2025 poz. 1668)',
        },
        {
          ref: 'art. 59, 62 i 65',
          act: 'Ustawa z 7.07.2023 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm.',
          eli: 'DU/2023/1688',
          note: 'przepisy przejściowe reformy (daty z Dz.U. 2026 poz. 781)',
        },
        { ref: 'art. 16, 28, 58, 129, 134 i 138 k.p.a.', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'strony, odwołanie do SKO i jego termin' },
        {
          ref: 'art. 53 i 54 p.p.s.a.',
          act: 'Prawo o postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2026 poz. 143',
          eli: 'DU/2002/1270',
          note: 'skarga do WSA; wpis 500 zł: § 2 ust. 3 pkt 2 rozporządzenia RM z 16.12.2003 (Dz.U. 2021 poz. 535)',
        },
        { ref: 'art. 3 pkt 11, 29 i 32 p.b.', act: 'Prawo budowlane', tj: 'Dz.U. 2026 poz. 524', eli: 'DU/1994/414', note: 'prawo do dysponowania działką, pozwolenie w okresie ważności WZ' },
        { ref: 'załącznik, część I ust. 8–9', act: 'Ustawa o opłacie skarbowej', tj: 'Dz.U. 2025 poz. 1154', eli: 'DU/2006/1635', note: 'opłata skarbowa za WZ i jej przeniesienie' },
      ],
    },
    docs: [
      'Numer działki i obręb albo wypis z ewidencji gruntów, jeśli masz',
      'Opis planowanej zabudowy albo koncepcja architekta, jeśli jest',
      'Kopia wniosku o WZ z datą wpływu do urzędu, jeśli już go złożyłeś',
      'Decyzja o WZ albo odmowa z potwierdzeniem doręczenia, jeśli ją dostałeś',
      'Umowa, z której wynika Twoje prawo do działki, jeżeli nie jesteś jej właścicielem',
    ],
    guides: [
      'warunki-zabudowy-ile-wazne',
      'warunki-zabudowy-2026-lublin',
      'warunki-zabudowy-a-plan-ogolny-przepisy-przejsciowe',
    ],
    seeAlso: ['pozwolenie-na-budowe', 'audyt-stanu-prawnego-nieruchomosci', 'odrolnienie'],
    cta: {
      heading: 'Zanim kupisz działkę, sprawdź, czy na niej zbudujesz.',
      lead: 'Opisz działkę, którą masz albo chcesz kupić, i plan budowy, albo dołącz odmowę WZ. W 24 h roboczych bezpłatnie odpiszę, od czego zacząć, i dołączę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Umowa przedwstępna (Blok 1) ===== */
  'analiza-umowy-przedwstepnej': {
    h1: 'Umowa przedwstępna',
    h1Full: 'Umowa przedwstępna: sprawdzenie zadatku, warunku kredytu i formy umowy',
    topic: 'Umowa przedwstępna',
    metaDesc: 'Jeżeli nie wykonasz umowy, sprzedający może zatrzymać zadatek; jeżeli on jej nie wykona, żądasz dwukrotności (art. 394 § 1 k.c.). Sprawdzam umowę.',
    subtitle: 'Masz przelać zadatek i podpisać umowę przedwstępną, a nie wiesz, czy odzyskasz pieniądze, jeśli transakcja się nie uda? Co do zasady: jeżeli nie wykonasz umowy, sprzedający może zatrzymać zadatek, a jeżeli on jej nie wykona, możesz żądać dwukrotności (art. 394 § 1 k.c.). Sprawdzam albo piszę umowę przed przelewem i zapisuję, co stanie się z pieniędzmi przy odmowie kredytu.',
    short: {
      q: 'Czy zadatek jest zwrotny?',
      a: 'Nie zawsze: o zwrocie decyduje to, kto nie wykonał umowy (art. 394 § 1 k.c.). Jeżeli nie wykonałeś jej Ty, sprzedający może od umowy odstąpić i zatrzymać zadatek. Jeżeli umowę rozwiązano albo za jej niewykonanie nie odpowiada żadna strona lub odpowiadają obie, zadatek wraca (art. 394 § 3 k.c.).',
      facts: [
        [
          'Czy umowa może zmienić skutki zadatku',
          'tak, art. 394 § 1 k.c. działa w braku odmiennego zastrzeżenia umownego albo zwyczaju',
        ],
        [
          'Żądanie zawarcia umowy sprzedaży przed sądem',
          'tylko przy umowie przedwstępnej w formie aktu notarialnego (art. 390 § 2 i art. 158 k.c.)',
        ],
        [
          'Przedawnienie roszczeń z umowy',
          '1 rok od dnia, w którym miała być zawarta umowa przyrzeczona (czyli umowa sprzedaży), bez przesunięcia na koniec roku (art. 390 § 3 i art. 118 k.c.)',
        ],
        [
          'Umowa bez daty umowy sprzedaży',
          'zawarcia nie można żądać, jeżeli w ciągu roku od podpisania umowy przedwstępnej nikt nie wyznaczył terminu (art. 389 § 2 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '150 zł od wniosku o wpis roszczenia kupującego do księgi wieczystej (art. 43 pkt 3 u.k.s.c.); stan prawny na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Co podpisujesz przed właściwą umową sprzedaży',
    intro: 'Umowa przedwstępna to umowa, w której jedna strona albo obie zobowiązują się zawrzeć oznaczoną umowę (umowę przyrzeczoną), np. sprzedaży mieszkania (art. 389 § 1 k.c.). Własności nie przenosi. Przenosi ją dopiero umowa sprzedaży, która musi mieć formę aktu notarialnego (art. 155 § 1 i art. 158 k.c.). Umowa przedwstępna powinna określać istotne postanowienia przyszłej umowy, przy sprzedaży przede wszystkim nieruchomość i cenę (art. 389 § 1 i art. 535 k.c.). Większość problemów przy zakupie zaczyna się właśnie tu: w zadatku, terminie, formie umowy i brakującym warunku kredytu.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Masz przelać zadatek albo druga strona się wycofuje',
    when: [
      { b: 'Kupujący albo sprzedający nie przyszedł do notariusza w dniu, który wpisaliście do umowy.', t: 'Od tego dnia biegnie rok na roszczenia z umowy przedwstępnej (art. 390 § 3 k.c.).' },
      { b: 'Pośrednik przysłał projekt umowy i chce zadatku jeszcze w tym tygodniu.', t: 'Skutki zadatku z kodeksu działają tylko wtedy, gdy umowa ani zwyczaj nie stanowią inaczej (art. 394 § 1 k.c.).' },
      { b: 'Kupujesz na kredyt i boisz się, że bank odmówi.', t: 'Umowę można uzależnić od decyzji kredytowej jako warunku (art. 89 k.c.) i zapisać, co wtedy dzieje się z zadatkiem.' },
      {
        b: 'Kupujesz działkę budowlaną i nie wiesz, czy dostaniesz warunki zabudowy.',
        t: 'Własności nie można przenieść pod warunkiem (art. 157 § 1 i 2 k.c.), więc warunek uzyskania WZ zapisuje się w umowie przedwstępnej. Na wniosek złożony od 1.09.2026 WZ co do zasady wymaga obowiązującego planu ogólnego gminy (art. 59 ust. 3 ustawy z 7.07.2023), a od 1.01.2027 także prawa wnioskodawcy do dysponowania nieruchomością na cele budowlane (art. 63 ust. 1a u.p.z.p.). Ustal w umowie, kto złoży wniosek.',
      },
    ],
    doForTitle: 'Co sprawdzam i zmieniam w umowie, zanim ją podpiszesz',
    doFor: [
      'Czytam umowę, którą przysłała druga strona, albo piszę nową, po Twojej stronie transakcji, i mówię wprost, na co się godzisz.',
      'Zapisuję zadatek albo zaliczkę tak, żeby było jasne, kto i kiedy traci pieniądze, także przy odmowie kredytu albo braku WZ.',
      'Pilnuję opisu nieruchomości, ceny, terminu aktu u notariusza, tego, co zostaje w nieruchomości, i podziału kosztów.',
      'Porównuję umowę z księgą wieczystą: kto jest właścicielem, jakie są hipoteki i roszczenia. Pełne badanie stanu prawnego to usługa Audyt stanu prawnego nieruchomości.',
      'Negocjuję zmiany z drugą stroną albo z pośrednikiem. Przy umowie już podpisanej ustalam, czego możesz żądać: odszkodowania, dwukrotności zadatku albo, przy akcie notarialnym, zawarcia umowy sprzedaży.',
    ],
    lists: [
      {
        eyebrow: 'Zadatek a zaliczka',
        title: 'Zadatek a zaliczka: kto traci pieniądze, gdy do sprzedaży nie dojdzie',
        intro: 'Zasady kodeksu, gdy umowa nie stanowi inaczej. Zaliczka na poczet ceny nie ma w kodeksie cywilnym przepisu takiego jak art. 394 dla zadatku.',
        items: [
          {
            b: 'Umowy nie wykonał kupujący',
            t: 'Zadatek: sprzedający może odstąpić od umowy i go zatrzymać (art. 394 § 1 k.c.). Zaliczka: skutków zadatku nie ma; sprzedający może żądać odszkodowania, jeżeli wykaże szkodę (art. 390 § 1 i art. 6 k.c.).',
          },
          {
            b: 'Umowy nie wykonał sprzedający',
            t: 'Zadatek: kupujący może odstąpić i żądać dwukrotności (art. 394 § 1 k.c.). Zaliczka: dwukrotności nie ma; kupujący może żądać odszkodowania, jeżeli wykaże szkodę (art. 390 § 1 i art. 6 k.c.).',
          },
          {
            b: 'Nikt nie odpowiada albo odpowiadają obie strony',
            t: 'Zadatek wraca, a obowiązek zapłaty dwukrotności odpada (art. 394 § 3 k.c.). Zaliczka co do zasady wraca bez względu na przyczynę, dla której nie zawarto umowy sprzedaży (art. 410 § 2 k.c.; uchwała SN z 8.03.2007, III CZP 3/07), chyba że umowa wyraźnie pozwala ją zatrzymać, np. jako karę umowną (wyrok SN z 25.03.2004, II CK 116/03).',
          },
          { b: 'Sprzedaż doszła do skutku', t: 'Zadatek zalicza się na cenę (art. 394 § 2 k.c.); zaliczka też, jeżeli umowa opisuje ją jako część ceny.' },
        ],
      },
      {
        eyebrow: 'Forma umowy',
        title: 'Zwykła forma pisemna czy akt notarialny: czego potem możesz żądać',
        items: [
          {
            b: 'Druga strona uchyla się od zawarcia umowy',
            t: 'Forma pisemna: naprawienia szkody, którą poniosłeś, licząc na zawarcie umowy (art. 390 § 1 k.c.). Akt notarialny: także zawarcia umowy sprzedaży przed sądem (art. 390 § 2 k.c.). Zadatek działa przy obu formach (art. 394 k.c.).',
          },
          {
            b: 'Wpis roszczenia do księgi wieczystej',
            t: 'Tylko przy akcie notarialnym, bo tylko on daje roszczenie o zawarcie umowy sprzedaży, czyli o przeniesienie własności (art. 390 § 2 k.c., art. 16 ust. 2 pkt 2 u.k.w.h.). Podpisy poświadczone przez notariusza to nie akt notarialny (art. 158 k.c.).',
          },
          { b: 'Co daje wpis', t: 'Wpis nie zakazuje sprzedaży. Roszczenie działa wtedy wobec praw nabytych później przez czynność prawną, np. wobec kolejnego kupującego (art. 17 u.k.w.h.).' },
        ],
      },
    ],
    stepsHeading: 'Od projektu umowy do podpisu: jak pracujemy',
    steps: [
      'Przesyłasz projekt umowy albo ustalenia z drugą stroną, numer księgi wieczystej i planowaną datę wpłaty zadatku.',
      'W 24 h roboczych odpisuję, czego potrzebuje Twoja umowa: samego sprawdzenia, nowego projektu albo także negocjacji. Ofertę z ceną i terminem wysyłam w tym samym mailu; do jej akceptacji nic nie płacisz.',
      'Po akceptacji dostajesz uwagi z gotowym brzmieniem zapisów albo nowy projekt umowy i omawiamy je.',
      'Krok nieodwracalny: przelew zadatku i podpis umowy. Potem o zmianę zapisu negocjujesz już z drugą stroną.',
    ],
    faq: [
      {
        q: 'Bank odmówił kredytu. Czy odzyskam zadatek?',
        a: 'Odzyskasz go, jeżeli umowa przewiduje zwrot zadatku przy odmowie kredytu. Bez takiego zapisu o zwrocie decyduje to, kto odpowiada za niewykonanie umowy (art. 394 § 1 i 3 k.c.). Dlatego warunek kredytu, termin decyzji banku i zasady zwrotu zadatku zapisz przed przelewem (art. 89 k.c.).',
      },
      {
        q: 'Co daje umowa przedwstępna w formie aktu notarialnego?',
        a: 'Daje roszczenie o zawarcie umowy sprzedaży, którego dochodzisz w sądzie, gdy druga strona się uchyla (art. 390 § 2 i art. 158 k.c.). Po wpisie do księgi wieczystej roszczenie działa także wobec kolejnego kupującego (art. 17 u.k.w.h.). Zwykła forma pisemna też wiąże, ale daje tylko odszkodowanie i skutki zadatku (art. 390 § 1 i art. 394 k.c.).',
      },
      {
        q: 'Ile czasu mam na roszczenia z umowy przedwstępnej?',
        a: 'Rok od dnia, w którym miała być zawarta umowa sprzedaży (art. 390 § 3 k.c.). Jeżeli sąd oddalił żądanie zawarcia umowy, rok biegnie od dnia, w którym orzeczenie stało się prawomocne.',
      },
      {
        q: 'Ile kosztuje umowa przedwstępna u notariusza?',
        a: 'Płacisz wynagrodzenie notariusza, nie wyższe niż maksymalna stawka taksy notarialnej dla tej czynności (art. 5 § 1 Prawa o notariacie). Jeżeli wnosisz o wpis roszczenia do księgi wieczystej, dochodzi stała opłata sądowa podana w tabeli wyżej (art. 43 pkt 3 u.k.s.c.). Moją cenę za tę umowę podaję w ofercie razem z wstępną analizą.',
      },
    ],
    law: {
      asOf: '2026-10-26',
      items: [
        {
          ref: 'art. 6, 89, 118, 155, 157, 158, 389, 390, 394, 535',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Umowa przedwstępna, zadatek, przedawnienie, warunek, forma sprzedaży nieruchomości.',
        },
        { ref: 'art. 16, art. 17', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Wpis roszczenia do księgi wieczystej i jego skutek.' },
        { ref: 'art. 43 pkt 3', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata od wniosku o wpis roszczenia.' },
        { ref: 'art. 5 § 1', act: 'Prawo o notariacie', tj: 'Dz.U. 2026 poz. 614', eli: 'DU/1991/91', note: 'Maksymalna stawka taksy notarialnej.' },
        {
          ref: 'art. 63 ust. 1a',
          act: 'Ustawa o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538',
          eli: 'DU/2003/717',
          note: 'Prawo do dysponowania nieruchomością przy WZ od 1.01.2027 (Dz.U. 2026 poz. 781).',
        },
        {
          ref: 'art. 59 ust. 3',
          act: 'Ustawa z 7.07.2023 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm.',
          eli: 'DU/2023/1688',
          note: 'WZ na wnioski od 1.09.2026 tylko przy planie ogólnym.',
        },
      ],
    },
    docs: [
      'Projekt umowy przedwstępnej albo ustalenia z drugą stroną (mail, SMS)',
      'Numer księgi wieczystej, który podał Ci sprzedający albo pośrednik',
      'Wniosek albo decyzja kredytowa, jeśli kupujesz na kredyt',
      'Potwierdzenie przelewu zadatku albo zaliczki, jeśli już zapłaciłeś',
      'Wypis z planu miejscowego albo decyzja WZ, jeśli kupujesz działkę budowlaną',
      'Wypis z rejestru gruntów, jeśli działka jest rolna',
    ],
    guides: ['warunki-zabudowy-2026-lublin', 'warunki-zabudowy-ile-wazne'],
    seeAlso: ['obsluga-zakupu', 'warunki-zabudowy', 'zgoda-kowr'],
    cta: {
      heading: 'Zadatek wpłacasz raz. Sprawdź umowę, zanim to zrobisz.',
      lead: 'Prześlij projekt umowy przedwstępnej albo opisz ustalenia i kwotę zadatku. W 24 h roboczych odpiszę, czy wystarczy sprawdzić umowę, czy lepiej napisać ją od nowa, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-26',
  },

  /* ===== Sprawdzenie umowy rezerwacyjnej (Blok 1) ===== */
  'sprawdzenie-umowy-rezerwacyjnej': {
    h1: 'Sprawdzenie umowy rezerwacyjnej',
    h1Full: 'Sprawdzenie umowy rezerwacyjnej: czy odzyskasz opłatę u dewelopera',
    topic: 'Umowa rezerwacyjna',
    metaDesc: 'Opłata rezerwacyjna to najwyżej 1% ceny z prospektu. Wraca m.in. po negatywnej ocenie zdolności kredytowej, a podwójnie, gdy deweloper nie wykona umowy.',
    subtitle: 'Deweloper chce opłaty rezerwacyjnej, a Ty nie wiesz, czy ją odzyskasz, gdy bank odmówi kredytu. Umowa rezerwacyjna z deweloperem zobowiązuje go do wyłączenia wybranego przez Ciebie lokalu z oferty sprzedaży na czas określony (art. 29 ust. 2, art. 31 u.d.). Sprawdzam umowę przed przelewem i mówię wprost, w jakich sytuacjach opłata wraca.',
    short: {
      q: 'Na czym polega umowa rezerwacyjna z deweloperem?',
      a: 'Deweloper trzyma wybrany lokal poza ofertą, a Ty możesz za to zapłacić opłatę rezerwacyjną (art. 32 ust. 1 u.d.). Zalicza się ją potem na poczet ceny lokalu (art. 32 ust. 3 u.d.). Obowiązku kupna ustawa deweloperska na Ciebie nie nakłada (art. 29 ust. 2 u.d.).',
      facts: [
        [
          'Forma umowy',
          'pisemna pod rygorem nieważności; aktu notarialnego ustawa nie wymaga (art. 30 ust. 1 u.d.)',
        ],
        [
          'Opłata rezerwacyjna',
          'nieobowiązkowa; najwyżej 1% ceny lokalu podanej w prospekcie (art. 32 ust. 1–2 u.d.)',
        ],
        [
          'Kiedy opłata wraca',
          'niezwłocznie: przy negatywnej ocenie Twojej zdolności kredytowej i gdy deweloper nie wykonuje umowy (art. 34 ust. 1 pkt 1–2 u.d.)',
        ],
        [
          'Zmiana prospektu bez informacji',
          'opłata wraca; nie dotyczy rezerwacji przed sprzedażą gotowego lokalu (art. 34 ust. 1 pkt 3, art. 3 u.d.)',
        ],
        [
          'Zwrot podwójny',
          'gdy deweloper nie wykonuje umowy (art. 34 ust. 3 u.d.) albo przed sprzedażą gotowego lokalu nie usunął wad z protokołu odbioru, a Ty nie przystąpiłeś do umowy (art. 34 ust. 2 u.d.)',
        ],
      ],
    },
    introHeading: 'Co podpisujesz, gdy deweloper „rezerwuje” Ci mieszkanie',
    intro: 'Umowa rezerwacyjna brzmi jak „tylko rezerwacja”, ale może przewidywać opłatę (art. 32 ust. 1 u.d.), a od umowy i ustawy zależy, czy ją odzyskasz. Przykład (liczby umowne): przy cenie 600 000 zł z prospektu opłata wynosi najwyżej 6 000 zł. Rezerwacja to nieobowiązkowy krok przed umową deweloperską, którą zawiera się w formie aktu notarialnego (art. 29 ust. 1, art. 40 ust. 1 u.d.). Może też poprzedzać sprzedaż gotowego mieszkania (art. 3 u.d.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Masz wpłacić opłatę rezerwacyjną albo deweloper nie chce jej oddać',
    when: [
      { b: 'Deweloper chce opłaty w kilka dni, a umowy jeszcze nie czytałeś.', t: 'Opłata nie jest obowiązkowa (art. 32 ust. 1 u.d.), więc jej wysokość i zwrot ustala się przed podpisem.' },
      { b: 'Bierzesz kredyt i boisz się, że bank powie nie.', t: 'Liczy się powód odmowy: zwrot dotyczy negatywnej oceny Twojej zdolności kredytowej (art. 34 ust. 1 pkt 1 u.d.).' },
      { b: 'W umowie zamiast opłaty jest „zadatek” albo druga wpłata.', t: 'Zadatek działa według innych zasad niż opłata rezerwacyjna (art. 394 § 1 k.c.).' },
      { b: 'Deweloper zmienił w prospekcie metraż, termin albo cenę.', t: 'W czasie rezerwacji musi Cię informować o zmianach prospektu (art. 33 ust. 1 u.d.).' },
    ],
    doForTitle: 'Co sprawdzam przed przelewem: zwrot opłaty, limit 1%, termin kredytu',
    doFor: [
      'Czytam umowę razem z prospektem, który przed umową deweloperską jest jej częścią (art. 23 ust. 2 u.d.). Wskazuję niedozwolone postanowienia, czyli zapisy, które mogą Cię nie wiązać (art. 385¹ § 1 k.c.). Stan prawny inwestycji przeglądam podstawowo; pełne badanie to Sprawdzenie umowy deweloperskiej.',
      'Sprawdzam elementy obowiązkowe umowy (art. 30 ust. 2 u.d.), limit opłaty (art. 32 ust. 2 u.d.) i, w umowie od 13.02.2026, cenę liczoną z ceny za 1 m² i metrażu (art. 5a u.d.).',
      'Porównuję koniec rezerwacji z terminem decyzji kredytowej z banku (art. 31 u.d.).',
      'Przed wpłatą negocjuję zmiany z deweloperem. Po podpisie, gdy deweloper nie oddaje opłaty, piszę wezwanie do zwrotu z art. 34 u.d. Nie mogę obiecać zapłaty bez sporu.',
    ],
    lists: [
      {
        eyebrow: 'Deweloper czy biuro nieruchomości',
        title: 'Rezerwacja u dewelopera a rezerwacja w biurze nieruchomości: kiedy opłata wraca',
        items: [
          { b: 'Czy to umowa rezerwacyjna z ustawy', t: 'U dewelopera tak. Przy zakupie od osoby prywatnej przez biuro nie: ustawa obejmuje tylko dewelopera i przedsiębiorcę z art. 4 u.d. (art. 29 ust. 2 u.d.).' },
          { b: 'Wysokość opłaty', t: 'U dewelopera najwyżej 1% ceny z prospektu (art. 32 ust. 2 u.d.). W biurze kwotę ustala umowa, bez tego limitu.' },
          { b: 'Zwrot pieniędzy', t: 'U dewelopera w przypadkach z art. 34 u.d. W biurze według podpisanego dokumentu, a przy zadatku według art. 394 k.c.' },
        ],
      },
    ],
    stepsHeading: 'Od umowy z deweloperem do decyzji o przelewie',
    steps: [
      'Przesyłasz umowę rezerwacyjną (projekt albo podpisaną), prospekt i datę, do której deweloper chce opłaty.',
      'W 24 h roboczych bezpłatnie odpisuję, czego potrzebuje Twoja rezerwacja: sprawdzenia umowy, negocjacji z deweloperem albo, po podpisie, wezwania do zwrotu. Do tej odpowiedzi dołączam ofertę z ceną i terminem pracy; płatność dopiero po jej przyjęciu.',
      'Po przyjęciu oferty dostajesz listę zapisów do zmiany z proponowanym brzmieniem i decydujesz: podpisać, podpisać po zmianach albo zrezygnować.',
      'Najważniejszy krok to podpis umowy i przelew opłaty. Wszystkie uwagi do zapisów zgłaszasz deweloperowi przed nim.',
    ],
    faq: [
      {
        q: 'Czy opłata rezerwacyjna podlega zwrotowi? Kiedy przepada?',
        a: 'Tak, w przypadkach z art. 34 u.d.; poza nimi ustawa deweloperska zwrotu nie nakazuje. Opłata wraca przy negatywnej ocenie Twojej zdolności kredytowej i przy zmianie prospektu bez poinformowania Cię. Gdy deweloper nie wykonuje umowy, oddaje ją podwójnie. Przy gotowym lokalu zwrotu za zmianę prospektu nie ma (art. 3 u.d.). Opłata wraca tam podwójnie, gdy deweloper nie usunął wad z protokołu odbioru, a Ty nie przystąpiłeś do umowy (art. 34 ust. 2 u.d.).',
      },
      {
        q: 'Czy opłata rezerwacyjna to zadatek albo zaliczka?',
        a: 'Nie, ustawa deweloperska nazywa ją opłatą rezerwacyjną i nadaje jej własne zasady. Zalicza się ją na poczet ceny lokalu (art. 32 ust. 3 u.d.), a zwrot opisuje art. 34 u.d. Zadatek ma inne skutki, opisane w art. 394 § 1 k.c.',
      },
      {
        q: 'Czy umowa rezerwacyjna jest wiążąca? Czy to umowa przedwstępna?',
        a: 'Tak, wiąże dewelopera: przez czas umowy musi trzymać wybrany lokal poza ofertą sprzedaży (art. 29 ust. 2 u.d.). Nie jest to umowa przedwstępna, bo ta zobowiązuje do zawarcia oznaczonej umowy (art. 389 § 1 k.c.). Sprawdzam, czy Twój dokument nie wpisuje Ci obowiązku kupna.',
      },
      {
        q: 'Kupuję na kredyt. Na jak długo podpisać rezerwację?',
        a: 'Na tyle, żeby bank zdążył wydać decyzję kredytową albo przyrzeczenie kredytu (art. 31 u.d.). Ustawa nie podaje liczby dni, więc czas rezerwacji ustalasz z deweloperem według terminu z banku.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 29–34',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Forma, treść i czas umowy rezerwacyjnej, opłata i jej zwrot.',
        },
        {
          ref: 'art. 3, art. 4, art. 5a, art. 23 ust. 2, art. 40 ust. 1',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Gotowy lokal, cena za 1 m² (umowy od 13.02.2026: art. 2 ustawy z 4.12.2025, Dz.U. 2026 poz. 27), prospekt jako część umowy, akt notarialny umowy deweloperskiej.',
        },
        { ref: 'art. 385¹, art. 389, art. 394', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Niedozwolone postanowienia umowne, umowa przedwstępna, zadatek.' },
      ],
    },
    docsHeading: 'Co przesłać: projekt umowy, prospekt i termin z banku',
    docs: [
      'Umowa rezerwacyjna z załącznikami, projekt albo podpisana',
      'Prospekt informacyjny i informacje o jego zmianach, jeśli je dostałeś',
      'Termin decyzji kredytowej z banku albo sama decyzja, jeśli bierzesz kredyt',
      'Potwierdzenie przelewu opłaty i korespondencja z deweloperem, jeśli umowa jest podpisana',
    ],
    guides: ['umowa-rezerwacyjna-mieszkania'],
    seeAlso: ['klauzule-abuzywne-deweloper', 'negocjacje-nieruchomosci', 'spory-o-metraz'],
    cta: {
      heading: 'Zanim zarezerwujesz mieszkanie, sprawdź, czy odzyskasz opłatę.',
      lead: 'Prześlij umowę rezerwacyjną i prospekt, zanim minie termin wpłaty. W 24 h roboczych przyślę bezpłatną wstępną analizę, co zrobić przed przelewem, a obok niej ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Obsługa prawna zakupu nieruchomości (Blok 2) ===== */
  'obsluga-zakupu': {
    metaDesc: 'Sprawdzam księgę wieczystą i umowę przed zadatkiem, ustalam zapłatę i wydanie kluczy. Notariusz wnioskuje o wpis najpóźniej w dniu aktu, a ja go pilnuję.',
    h1: 'Obsługa prawna zakupu nieruchomości',
    h1Full: 'Obsługa prawna zakupu nieruchomości: prawnik przy zakupie mieszkania, domu lub działki',
    topic: 'Zakup nieruchomości',
    subtitle: 'Kupujesz mieszkanie, dom albo działkę i boisz się, że zapłacisz, a coś pójdzie nie tak? Jako prawnik przy zakupie mieszkania sprawdzam księgę wieczystą i umowę, zanim wpłacisz zadatek. Potem ustalam, kiedy płacisz i kiedy dostajesz klucze, a po akcie notarialnym (art. 158 k.c.) pilnuję wpisu Twojej własności.',
    short: {
      q: 'Co robi prawnik przy zakupie mieszkania od zadatku do wpisu w księdze?',
      a: 'Sprawdza księgę i umowę przed zadatkiem, uzgadnia zapis o zapłacie i wydaniu lokalu w akcie, a potem kontroluje wpis. Kolejność ma znaczenie, bo podpis aktu sprzedaży co do zasady od razu przenosi na Ciebie własność (art. 155 § 1 k.c.). Jeżeli potrzebujesz tylko sprawdzenia przed zadatkiem, wystarczy audyt stanu prawnego.',
      facts: [
        ['Forma umowy', 'akt notarialny (art. 158 k.c.)'],
        [
          'Wpis w księdze wieczystej',
          'wniosek składa notariusz najpóźniej w dniu aktu (art. 92 § 4 Prawa o notariacie); wpis ma moc wsteczną od chwili złożenia wniosku (art. 29 u.k.w.h.)',
        ],
        [
          'Zapłata i wydanie kluczy',
          'jednocześnie, chyba że umowa stanowi inaczej (art. 488 § 1 k.c.)',
        ],
        [
          'Podatek (nie honorarium)',
          'PCC co do zasady 2% wartości rynkowej; płaci kupujący, pobiera notariusz, więc deklaracji nie składasz; bez PCC m.in. przy sprzedaży opodatkowanej VAT i przy pierwszym mieszkaniu lub domu (art. 2 pkt 4 lit. a, art. 4 pkt 1, art. 6 ust. 1 pkt 1, art. 7 ust. 1 pkt 1 lit. a, art. 9 pkt 17, art. 10 ust. 1–2 u.p.c.c.); stan na 10.10.2026',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'wpis własności: 200 zł, a przy nieruchomości rolnej do 5 ha 150 zł; wpis hipoteki przy kredycie: osobno 200 zł; opłatę od wniosku składanego przy akcie pobiera notariusz (art. 42 ust. 1, art. 43 pkt 2, art. 45 ust. 2 u.k.s.c.; art. 7 § 2 Prawa o notariacie); stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Notariusz, bank i prawnik: kto za co odpowiada przy zakupie',
    intro: 'Notariusz sporządza akt sprzedaży i ma czuwać nad prawami i słusznymi interesami zarówno Twoimi, jak i sprzedającego (art. 80 § 2 Prawa o notariacie). Bank kredytujący zakup zabezpiecza swój kredyt, np. hipoteką, która powstaje dopiero z wpisem w księdze (art. 67 u.k.w.h.). Ja reprezentuję tylko Ciebie: sprawdzam, co kupujesz, zanim cokolwiek wpłacisz, negocjuję warunki i czytam projekt aktu przed terminem u notariusza.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kupujesz mieszkanie albo działkę i boisz się, że coś przeoczysz',
    when: [
      {
        b: 'Sprzedający chce zadatku, a Ty nie widziałeś jeszcze księgi wieczystej.',
        t: 'Księgę sprawdzam przed zadatkiem i jeszcze raz przed aktem. Wzmianka o złożonym wniosku wyłącza bowiem rękojmię wiary publicznej ksiąg wieczystych (art. 8 u.k.w.h.), czyli ochronę kupującego, który zaufał wpisom w księdze.',
      },
      {
        b: 'Kupujesz na kredyt i musisz zgrać bank, sprzedającego i notariusza.',
        t: 'Do umowy przedwstępnej wpisuję dzień, do którego bank ma wydać decyzję, i to, co dzieje się z zadatkiem po odmowie kredytu. Datę aktu ustalamy po tym dniu.',
      },
      {
        b: 'Nieruchomość nie ma księgi wieczystej.',
        t: 'Kupić można, a notariusz i tak złoży wniosek o wpis (art. 92 § 4 Prawa o notariacie). Rękojmia wiary publicznej działa jednak tylko na podstawie wpisów w księdze (art. 5 u.k.w.h.), więc sprawdzam dokumenty, z których sprzedający wywodzi własność.',
      },
      {
        b: 'Sprzedający ma pośrednika albo prawnika, a Ty działasz sam.',
        t: 'Projekt aktu czytam przed terminem i zgłaszam poprawki, bo zmiana podpisanej umowy wymaga zgody sprzedającego i kolejnego aktu notarialnego (art. 77 § 1 i art. 158 k.c.).',
      },
    ],
    doForTitle: 'Co sprawdzam i co ustalam, zanim podpiszesz akt',
    doFor: [
      'Sprawdzam księgę wieczystą: właściciela, prawa i roszczenia z działu III, hipoteki z działu IV (art. 25 ust. 1 u.k.w.h.).',
      'Przygotowuję albo poprawiam umowę przedwstępną i negocjuję ze sprzedającym cenę i warunki.',
      'Sprawdzam projekt aktu notarialnego i ustalam sposób zapłaty oraz termin wydania lokalu.',
      'Jeżeli nie możesz przyjść do notariusza, podpisuję akt jako Twój pełnomocnik; pełnomocnictwo wymaga aktu notarialnego (art. 99 § 1 i art. 158 k.c.).',
    ],
    lists: [
      {
        eyebrow: 'Zapłata ceny',
        title: 'Jak zapłacić za mieszkanie, żeby nie zostać bez pieniędzy i bez kluczy',
        intro: 'O kolejności zapłaty i wydania decyduje to, co wpiszemy do aktu. Przy zakupie z rynku wtórnego wybieram jeden z trzech sposobów albo ich połączenie.',
        kind: 'check',
        items: [
          { b: 'Depozyt notarialny', t: 'Notariusz może przyjąć pieniądze na przechowanie w związku z aktem i wydaje je osobie wskazanej, w dacie wpisanej do protokołu (art. 108 § 1–2 Prawa o notariacie).' },
          { b: 'Zapłata z kredytu', t: 'Termin wypłaty wynika z Twojej umowy z bankiem. W akcie zgrywam z nim termin zapłaty i wydania lokalu oraz wskazuję konta, na które trafiają części ceny.' },
          {
            b: 'Spłata hipoteki sprzedającego z ceny',
            t: 'Część ceny idzie wprost do banku sprzedającego, w kwocie z jego zaświadczenia. Spłata zabezpieczonego długu co do zasady kończy też hipotekę (art. 94 u.k.w.h.), ale wpis znika dopiero po wykreśleniu; wniosek kosztuje 100 zł (art. 46 i art. 42 ust. 1 u.k.s.c.).',
          },
        ],
      },
    ],
    stepsHeading: 'Zakup mieszkania krok po kroku: od oferty do wpisu w księdze',
    steps: [
      'Oferta. Przesyłasz numer księgi wieczystej albo projekt umowy. W 24 h roboczych odpisuję, co trzeba zrobić przy Twoim zakupie, np. sprawdzić samą księgę albo także umowę przedwstępną, i wysyłam ofertę z ceną i terminem. Każdy etap możesz zlecić osobno; do akceptacji oferty nic nie płacisz.',
      'Sprawdzenie. Przed zadatkiem czytam księgę i dokumenty sprzedającego. Dostajesz listę ryzyk i warunków do umowy.',
      'Umowa przedwstępna i kredyt. Wpisujemy cenę, datę aktu i warunek kredytu. Krok trudny do cofnięcia: zadatek, bo jeżeli nie wykonasz umowy z przyczyn, za które odpowiadasz, sprzedający może bez dodatkowego terminu odstąpić od umowy i zatrzymać zadatek (art. 394 § 1 i 3 k.c.).',
      'Akt notarialny. Jestem przy podpisie albo podpisuję jako Twój pełnomocnik. Krok nieodwracalny: z podpisem aktu sprzedaży własność co do zasady przechodzi na Ciebie (art. 155 § 1 k.c.).',
      'Wydanie i wpis. Odbierasz klucze z protokołem. Sprawdzam, czy w księdze pojawił się wpis Twojej własności i wykreślenie obciążeń, które sprzedający miał usunąć.',
    ],
    faq: [
      {
        q: 'Zakup mieszkania krok po kroku: od czego zacząć?',
        a: 'Od numeru księgi wieczystej i projektu umowy przedwstępnej, zanim wpłacisz zadatek. Jeżeli kupujesz na kredyt, równolegle złóż wniosek do banku, bo datę aktu warto ustalić po dniu decyzji kredytowej. Dalej są akt u notariusza, odbiór kluczy z protokołem i kontrola wpisu w księdze; każdy z tych etapów opisuję wyżej.',
      },
      {
        q: 'Ile trwa zakup mieszkania na kredyt?',
        a: 'Przepisy nie podają czasu zakupu na kredyt: wyznaczają go 2 daty, które wpisujesz do umowy przedwstępnej, czyli dzień decyzji banku i dzień aktu. Na wpis w księdze nie czekasz, żeby zostać właścicielem, bo własność przechodzi co do zasady z podpisem aktu sprzedaży (art. 155 § 1 k.c.).',
      },
      {
        q: 'Ile kosztuje zakup mieszkania u notariusza?',
        a: 'Opłaty publiczne to co do zasady PCC 2% wartości rynkowej i 200 zł za wpis własności (art. 7 ust. 1 pkt 1 lit. a u.p.c.c., art. 42 ust. 1 u.k.s.c.). Przy kredycie dochodzi 200 zł za wpis hipoteki banku (art. 45 ust. 2 u.k.s.c.). Czy przysługuje Ci zwolnienie z PCC, oceni doradca podatkowy. Wynagrodzenie notariusza nie może przekroczyć taksy maksymalnej (art. 5 § 1 Prawa o notariacie), a cenę mojej obsługi podaję w ofercie.',
      },
      {
        q: 'Kiedy przelew za mieszkanie i kiedy przekazanie kluczy?',
        a: 'Najbezpieczniej w dniu aktu: cena trafia do depozytu notariusza albo, przy kredycie, z banku na konta wskazane w akcie. Depozyt notariusz wydaje sprzedającemu w dacie wpisanej do protokołu, np. w dniu przekazania kluczy (art. 108 § 2 Prawa o notariacie). Klucze odbierasz z protokołem i stanem liczników, bo od wydania ponosisz ciężary i ryzyko przypadkowej utraty lub uszkodzenia mieszkania (art. 548 § 1 k.c.).',
      },
      {
        q: 'Czy można kupić mieszkanie z długiem albo hipoteką?',
        a: 'Tak, ale dług zabezpieczony hipoteką idzie za mieszkaniem: wierzyciel może dochodzić zapłaty z lokalu bez względu na to, czyją stał się własnością (art. 65 ust. 1 u.k.w.h.). Sprzedaż mieszkania zajętego przez komornika nie zatrzymuje egzekucji (art. 930 § 1 k.p.c.). Hipoteka to wada prawna, a jeżeli o niej wiesz przy umowie, sprzedający nie odpowiada za nią z rękojmi (art. 556³ i art. 557 § 1 k.c.). Dlatego spłatę hipoteki z ceny i termin jej wykreślenia wpisuję wprost do aktu.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 77 § 1, art. 99 § 1, art. 155 § 1, art. 158, art. 394, art. 488 § 1, art. 548 § 1, art. 556³, art. 557 § 1',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Forma aktu i przejście własności, zadatek, zapłata i wydanie, rękojmia za wadę prawną.',
        },
        {
          ref: 'art. 5 § 1, art. 7 § 2, art. 80 § 2, art. 92 § 4, art. 108',
          act: 'Prawo o notariacie',
          tj: 'Dz.U. 2026 poz. 614',
          eli: 'DU/1991/91',
          note: 'Taksa maksymalna, pobranie opłaty sądowej, obowiązki notariusza, wniosek o wpis, depozyt notarialny.',
        },
        {
          ref: 'art. 5, art. 8, art. 25, art. 29, art. 65, art. 67, art. 94',
          act: 'Ustawa o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'Rękojmia wiary publicznej, działy księgi, skutek wpisu, hipoteka.',
        },
        {
          ref: 'art. 2 pkt 4 lit. a, art. 4 pkt 1, art. 6 ust. 1 pkt 1, art. 7 ust. 1 pkt 1 lit. a, art. 9 pkt 17, art. 10 ust. 1–2',
          act: 'Ustawa o podatku od czynności cywilnoprawnych',
          tj: 'Dz.U. 2026 poz. 191',
          eli: 'DU/2000/959',
          note: 'Stawka 2%, wyłączenie przy VAT, zwolnienie przy pierwszym mieszkaniu, notariusz jako płatnik.',
        },
        { ref: 'art. 42 ust. 1, art. 43 pkt 2, art. 45 ust. 2, art. 46', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłaty od wpisu i wykreślenia.' },
        { ref: 'art. 930 § 1', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Sprzedaż zajętej nieruchomości nie zatrzymuje egzekucji.' },
      ],
    },
    docs: [
      'Numer księgi wieczystej albo jej odpis, jeśli go masz.',
      'Projekt umowy przedwstępnej albo projekt aktu notarialnego, jeśli już je dostałeś.',
      'Dokument, na podstawie którego sprzedający jest właścicielem (np. akt notarialny, postanowienie o nabyciu spadku), jeśli go przekazał.',
      'Decyzja kredytowa albo informacja z banku o terminie wypłaty, jeśli kupujesz na kredyt.',
    ],
    guides: ['jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'nieruchomosci-rolne', 'warunki-zabudowy'],
    cta: {
      heading: 'Kupuj z kimś, kto pilnuje Twojej strony.',
      lead: 'Napisz, co kupujesz i na kiedy jest umowa przedwstępna albo akt; jeśli masz, dodaj numer księgi wieczystej. W 24 h roboczych odpiszę, co trzeba zrobić na tym etapie zakupu, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Obsługa prawna sprzedaży nieruchomości (Blok 2) ===== */
  'obsluga-sprzedazy': {
    metaDesc: 'Do aktu sprzedaży przygotuj numer księgi wieczystej i dokument, z którego masz nieruchomość. Kompletuję dokumenty i ustawiam zapłatę przed wydaniem kluczy.',
    h1: 'Obsługa prawna sprzedaży nieruchomości',
    h1Full: 'Obsługa prawna sprzedaży nieruchomości: dokumenty, umowa i zapłata przed wydaniem kluczy',
    topic: 'Sprzedaż nieruchomości',
    subtitle: 'Sprzedajesz mieszkanie, dom albo działkę i nie wiesz, co zanieść do notariusza ani kiedy wydać klucze? Do aktu przygotuj dokument tożsamości, numer księgi wieczystej, jeśli jest założona, i dokument, z którego masz nieruchomość. Kompletuję dokumenty i ustawiam zapłatę tak, żeby cena była u Ciebie przed wydaniem nieruchomości.',
    short: {
      q: 'Jakie dokumenty do notariusza przy sprzedaży mieszkania albo działki?',
      a: 'Podstawą jest dokument, z którego masz nieruchomość: po zakupie albo darowiźnie akt notarialny. Po spadku jest nim stwierdzenie nabycia spadku albo zarejestrowany akt poświadczenia dziedziczenia, bo tylko nimi wykażesz kupującemu swoje prawa (art. 1027 k.c.).',
      facts: [
        [
          'Forma umowy',
          'akt notarialny (art. 158 k.c.); własności nie przeniesiesz pod warunkiem zapłaty (art. 157 § 1 k.c.)',
        ],
        [
          'Mieszkanie ze spadku',
          'stwierdzenie nabycia spadku albo zarejestrowany akt poświadczenia dziedziczenia (art. 1027 k.c.)',
        ],
        [
          'Spółdzielcze własnościowe prawo do lokalu',
          'też akt notarialny; jego wypis notariusz przesyła spółdzielni (art. 17² ust. 4 u.s.m.)',
        ],
        [
          'Zabezpieczenie zapłaty',
          'depozyt notarialny, jeśli notariusz go przyjmie (art. 108 § 1 Prawa o notariacie), albo poddanie się kupującego egzekucji co do ceny (art. 777 § 1 pkt 4 k.p.c.)',
        ],
        [
          'Rękojmia sprzedającego',
          'wady fizyczne nieruchomości stwierdzone w 5 lat od wydania (art. 568 § 1 k.c.), bez wad, o których kupujący wiedział przy zawarciu umowy (art. 557 § 1 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '100 zł od wniosku o wykreślenie hipoteki (art. 46 w zw. z art. 42 ust. 1 u.k.s.c.); stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Gdzie sprzedający ryzykuje najwięcej: między podpisem a przelewem',
    intro: 'Akt sporządza notariusz, który ma czuwać nad słusznymi interesami obu stron (art. 80 § 2 Prawa o notariacie), a nie tylko Twoimi. Twoje główne ryzyko: z podpisem własność przechodzi na kupującego (art. 155 § 1 k.c.), a cena może jeszcze nie być na koncie. Dlatego zapłatę, kredyt kupującego i spłatę Twojej hipoteki ustalam przed terminem u notariusza.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Sprzedaję mieszkanie: kiedy warto mieć prawnika po swojej stronie',
    when: [
      {
        b: 'Kupujący chce kluczy przed zapłatą albo proponuje przelew po akcie.',
        t: 'Bez zapisu w umowie zapłata i wydanie powinny nastąpić jednocześnie (art. 488 § 1 k.c.). Wpisujemy do aktu, że wydajesz nieruchomość po wpływie całej ceny.',
      },
      {
        b: 'Kupujący płaci z kredytu, a bank wypłaci pieniądze dopiero po akcie.',
        t: 'Wpisujemy do aktu termin wypłaty, a kupujący poddaje się egzekucji co do ceny (art. 777 § 1 pkt 4 k.p.c.). Jeżeli nie zapłaci, nie potrzebujesz procesu, tylko klauzuli wykonalności (art. 776 k.p.c.).',
      },
      { b: 'Na mieszkaniu jest Twój kredyt hipoteczny.', t: 'Hipoteka obciąża mieszkanie także po sprzedaży (art. 65 ust. 1 u.k.w.h.), więc spłatę z ceny ustalamy w akcie.' },
      { b: 'W mieszkaniu mieszka najemca.', t: 'Najem opisujemy w akcie, bo za wadę, o której kupujący wiedział przy zawarciu umowy, nie odpowiadasz z rękojmi (art. 557 § 1 k.c.).' },
    ],
    doForTitle: 'Co przygotowuję przed aktem i co sprawdzam w projekcie',
    doFor: [
      'Ustalam listę dokumentów według tego, skąd masz nieruchomość, i pomagam uzyskać brakujące.',
      'Przygotowuję albo poprawiam umowę przedwstępną: cena, zadatek, data aktu, warunek kredytu kupującego.',
      'Uzgadniam z kupującym i notariuszem sposób zapłaty: depozyt notarialny, wpłatę przed wydaniem albo poddanie się egzekucji co do ceny.',
      'Przy hipotece ustalam z Twoim bankiem kwotę do spłaty i rachunek, na który trafi ta część ceny.',
      'Czytam projekt aktu przed terminem: zapłata, wydanie, ujawnione wady i obciążenia. Na życzenie jestem przy podpisie.',
    ],
    stepsHeading: 'Od umowy przedwstępnej do protokołu wydania kluczy',
    steps: [
      'Opis sprzedaży. Piszesz, co sprzedajesz, skąd to masz (zakup, spadek, darowizna, spółdzielnia) i czy jest hipoteka. W 24 h roboczych odpisuję, co trzeba zrobić przed aktem, np. uzyskać stwierdzenie nabycia spadku albo ustalić spłatę kredytu z ceny, i wysyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Umowa przedwstępna. Uzgadniamy cenę, zadatek i datę aktu. Jeżeli kupujący nie wykona umowy z przyczyn, za które odpowiada, możesz odstąpić i zatrzymać zadatek (art. 394 § 1 i 3 k.c.). Krok trudny do cofnięcia: jeżeli to Ty nie sprzedasz, kupujący może żądać dwukrotności zadatku (art. 394 § 1 k.c.).',
      'Podpis aktu. Z podpisem własność przechodzi na kupującego (art. 155 § 1 k.c.), więc zabezpieczenie zapłaty musi być w akcie. Wniosek o wpis kupującego notariusz składa najpóźniej w dniu aktu (art. 92 § 4 Prawa o notariacie).',
      'Wydanie. Klucze wydajesz po wpływie ceny, z protokołem i stanem liczników. Od wydania kupujący ma korzyści i ciężary mieszkania oraz niebezpieczeństwo jego przypadkowej utraty lub uszkodzenia (art. 548 § 1 k.c.). Po spłacie kredytu pilnuję wykreślenia hipoteki.',
    ],
    faq: [
      {
        q: 'Kiedy dostanę pieniądze za mieszkanie: przed aktem czy po?',
        a: 'Tak, jak zapiszecie w akcie: przed podpisem, przez depozyt notarialny albo w terminie po akcie. Z depozytu notariusz wydaje cenę Tobie w dacie wskazanej w protokole (art. 108 § 2 Prawa o notariacie). W każdym wariancie klucze wydajesz dopiero po wpływie całej ceny.',
      },
      {
        q: 'Jak sprzedać mieszkanie z kredytem hipotecznym?',
        a: 'Kredyt możesz spłacić z ceny: w akcie zapisujecie, że kupujący wpłaci część ceny wprost do Twojego banku, a resztę Tobie. Gdy dług wygaśnie, wygasa też hipoteka, chyba że może zabezpieczać przyszłe wierzytelności z tej samej umowy (art. 94 u.k.w.h.). Bank ma wtedy obowiązek umożliwić jej wykreślenie z księgi (art. 100 u.k.w.h.).',
      },
      {
        q: 'Jak bezpiecznie sprzedać mieszkanie za gotówkę?',
        a: 'Przyjmij całą cenę najpóźniej przy podpisie aktu i pokwituj jej odbiór; kupujący może tego żądać (art. 462 § 1 k.c.). Pieniądze może też przyjąć na przechowanie notariusz i wydać je Tobie za pokwitowaniem (art. 108 Prawa o notariacie). To jego uprawnienie, nie obowiązek, więc formę wpłaty uzgadniasz z kancelarią notarialną przed terminem.',
      },
      {
        q: 'Jakie dokumenty do sprzedaży mieszkania po rodzicach?',
        a: 'Stwierdzenie nabycia spadku albo zarejestrowany akt poświadczenia dziedziczenia (art. 1027 k.c.). Całe mieszkanie sprzedają razem wszyscy spadkobiercy, osobiście albo przez pełnomocnika umocowanego aktem notarialnym (art. 99 § 1 k.c.). Gdy ktoś się nie zgadza, spadkobiercy z co najmniej połową udziałów mogą żądać rozstrzygnięcia przez sąd (art. 199 w zw. z art. 1035 k.c.). Każdy spadkobierca może też żądać działu spadku (art. 1037 § 1 k.c.).',
      },
      {
        q: 'Jak sprzedać mieszkanie z lokatorem?',
        a: 'Aktem notarialnym jak każde mieszkanie, ale najem nie wygasa: kupujący wstępuje w niego na Twoje miejsce (art. 678 § 1 k.c.). Lokator, który przez wypowiedzenie kupującego musi wyprowadzić się przed czasem z umowy, może żądać odszkodowania od Ciebie (art. 679 § 1 k.c.). Dlatego przed aktem ustalam z kupującym, czy przejmuje najem do końca umowy i kto rozlicza kaucję.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 99 § 1, art. 155 § 1, art. 157 § 1, art. 158, art. 199, art. 394, art. 462 § 1, art. 488 § 1, art. 548 § 1, art. 557 § 1, art. 568 § 1, art. 678 § 1, art. 679 § 1, art. 1027, art. 1035, art. 1037 § 1',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Forma i skutek umowy, zadatek, zapłata i wydanie, rękojmia sprzedającego, najem przy sprzedaży, sprzedaż mieszkania ze spadku.',
        },
        {
          ref: 'art. 80 § 2, art. 85, art. 92 § 4, art. 108',
          act: 'Prawo o notariacie',
          tj: 'Dz.U. 2026 poz. 614',
          eli: 'DU/1991/91',
          note: 'Obowiązki notariusza wobec obu stron, tożsamość stron, wniosek o wpis, depozyt notarialny.',
        },
        { ref: 'art. 776, art. 777 § 1 pkt 4', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Poddanie się kupującego egzekucji co do ceny i klauzula wykonalności.' },
        {
          ref: 'art. 65 ust. 1, art. 94, art. 100',
          act: 'Ustawa o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'Hipoteka przy sprzedaży, jej wygaśnięcie po spłacie i obowiązek banku.',
        },
        { ref: 'art. 17² ust. 4', act: 'Ustawa o spółdzielniach mieszkaniowych', tj: 'Dz.U. 2026 poz. 889', eli: 'DU/2001/27', note: 'Forma sprzedaży spółdzielczego własnościowego prawa do lokalu.' },
        { ref: 'art. 42 ust. 1, art. 46', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata od wniosku o wykreślenie hipoteki.' },
      ],
    },
    docs: [
      'Numer księgi wieczystej, jeśli jest założona.',
      'Dokument, z którego masz nieruchomość: akt zakupu lub darowizny, stwierdzenie nabycia spadku albo zarejestrowany akt poświadczenia dziedziczenia.',
      'Informacja z banku o kwocie do spłaty, jeśli jest hipoteka.',
      'Umowa przedwstępna albo projekt aktu, jeśli już są.',
      'Umowa najmu, jeśli w mieszkaniu ktoś mieszka.',
    ],
    guides: ['jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: ['stwierdzenie-nabycia-spadku', 'uregulowanie-stanu-prawnego', 'zniesienie-wspolwlasnosci'],
    cta: {
      heading: 'Sprzedaj bezpiecznie — z pieniędzmi zabezpieczonymi od początku.',
      lead: 'Napisz, co sprzedajesz, skąd to masz i czy jest na tym hipoteka. W 24 h roboczych odpiszę, co trzeba przygotować przed aktem, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Umowa dożywocia i renta (Blok 2) ===== */
  'dozywocie-renta': {
    h1: 'Umowa dożywocia i renta',
    h1Full: 'Umowa dożywocia i renta: przekazanie mieszkania w zamian za opiekę',
    topic: 'Umowa o dożywocie',
    metaDesc: 'Przy dożywociu nabywca zostaje właścicielem i zapewnia Ci utrzymanie do końca życia (art. 155 i 908 k.c.). Skutek dla zachowku oceniam przy umowie.',
    subtitle: 'Chcesz przekazać mieszkanie dziecku w zamian za opiekę i boisz się, że po Twojej śmierci reszta rodziny zażąda zachowku? Przepis o doliczaniu do zachowku (art. 993 § 1 k.c.) nie rozstrzyga wprost, czy dolicza się mieszkanie przekazane w umowie o dożywocie. Sprawdzam, czy dożywocie pasuje do Twojej rodziny, i przygotowuję projekt umowy z zakresem opieki do aktu notarialnego.',
    short: {
      q: 'Czy przepisanie mieszkania za opiekę chroni przed zachowkiem?',
      a: 'Ustawa nie odpowiada wprost na to pytanie, więc skutek dla zachowku oceniam przy konkretnej umowie i składzie Twojej rodziny. Jeżeli umowa o dożywocie ukrywa darowiznę, jej ważność ocenia się według przepisów o darowiźnie (art. 83 § 1 k.c.). Rodzeństwo nie ma prawa do zachowku po Tobie (art. 991 § 1 k.c.).',
      facts: [
        [
          'Kto zostaje właścicielem',
          'Nabywca, z chwilą zawarcia umowy w formie aktu notarialnego; nieruchomość zostaje obciążona prawem dożywocia (art. 155 § 1, art. 158 i art. 910 § 1 k.c.)',
        ],
        [
          'Co dostajesz w zamian',
          'Jeżeli umowa nie stanowi inaczej: mieszkanie, wyżywienie, ubranie, światło i opał, pomoc i pielęgnowanie w chorobie, pogrzeb (art. 908 § 1 k.c.)',
        ],
        [
          'Gdy relacje się psują',
          'Sąd na żądanie strony zamienia uprawnienia na dożywotnią rentę; rozwiązuje umowę tylko w wypadkach wyjątkowych (art. 913 k.c.)',
        ],
        [
          'Podatek (nie honorarium)',
          'PCC 2% wartości rynkowej nieruchomości, bez zwolnienia dla najbliższej rodziny; płaci nabywca, pobiera notariusz (art. 4 pkt 4, art. 6 ust. 1 pkt 4, art. 7 ust. 1 pkt 2 lit. a, art. 9 i art. 10 ust. 2 u.p.c.c.). Stan na 27.10.2026',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Wpis nabywcy jako właściciela do księgi wieczystej: 200 zł, a przy ziemi rolnej do 5 ha 150 zł (art. 42 ust. 1 i art. 43 pkt 2 u.k.s.c.); osobno 150 zł od wpisu prawa dożywocia jako prawa osobistego (art. 43 pkt 3 i art. 45 ust. 2 u.k.s.c.). Stan na 27.10.2026',
        ],
      ],
    },
    introHeading: 'Mieszkanie przechodzi na nabywcę od razu, a opieka należy Ci się do końca życia',
    intro: '„Przepiszę mieszkanie na córkę, ale chcę tam mieszkać do śmierci i mieć opiekę” – to jedna z najczęstszych spraw. Ustawa nazywa to umową o dożywocie: w zamian za przeniesienie własności nieruchomości nabywca zapewnia Ci dożywotnie utrzymanie (art. 908 § 1 k.c.). Umowa może też obejmować służebność mieszkania albo stałe świadczenia w pieniądzach (art. 908 § 2 k.c.). Prawa dożywocia nie można zbyć (art. 912 k.c.), a gdy nabywca sprzeda mieszkanie, za świadczenia odpowiada także kolejny właściciel (art. 910 § 2 k.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Chcesz przepisać mieszkanie za opiekę albo umowa przestała działać',
    when: [
      { b: 'Chcesz przepisać mieszkanie na córkę albo syna, mieszkać w nim do końca życia i mieć opiekę', t: 'to treść umowy o dożywocie; zakres opieki i mieszkania ustalacie w umowie (art. 908 § 1–2 k.c.).' },
      {
        b: 'Mama chce przepisać na Ciebie mieszkanie za opiekę, a rodzeństwo już mówi o zachowku',
        t: 'przed aktem ustalacie zakres Twoich obowiązków, bo bez tego obowiązuje pełna lista z ustawy (art. 908 § 1 k.c.); skutek dla zachowku oceniam przy projekcie umowy.',
      },
      { b: 'Chcesz, żeby po Twojej śmierci w mieszkaniu i pod opieką został też mąż albo żona', t: 'dożywocie można zastrzec także na rzecz osoby bliskiej zbywcy (art. 908 § 3 k.c.).' },
      {
        b: 'Osoba, która dostała od Ciebie mieszkanie, przestała się Tobą zajmować albo wspólne życie stało się nie do zniesienia',
        t: 'gdy nie da się wymagać, żebyście dalej żyli obok siebie, sąd zamieni uprawnienia na dożywotnią rentę, a w wypadkach wyjątkowych rozwiąże umowę (art. 913 k.c.).',
      },
      {
        b: 'Przekazujesz ziemię rolną albo gospodarstwo w zamian za opiekę',
        t: 'nabywca bliski Ci, np. dziecko albo wnuk, nie musi być rolnikiem indywidualnym, a KOWR nie może przejąć ziemi (art. 2a ust. 3 pkt 1 lit. a i art. 4 ust. 4 pkt 2 lit. b u.k.u.r.).',
      },
    ],
    doForTitle: 'Co robię przed podpisem umowy i w sporze o opiekę',
    doFor: [
      'Piszę projekt umowy o dożywocie dla notariusza: Twoje pomieszczenia, pomoc w chorobie, ewentualne pieniądze co miesiąc (art. 908 § 1–2 k.c.).',
      'Sprawdzam hipoteki w księdze wieczystej i pilnuję ujawnienia prawa dożywocia (art. 16 ust. 2 pkt 1 u.k.w.h.), bo przy licytacji liczy się jego pierwszeństwo (art. 1000 § 3 k.p.c.).',
      'Prowadzę sprawę o zamianę dożywocia na rentę albo o rozwiązanie umowy (art. 913 k.c.), po stronie dożywotnika albo nabywcy.',
      'Reprezentuję nabywcę albo spadkobierców w sporze o pozorność umowy po śmierci dożywotnika (art. 83 § 1 k.c.).',
    ],
    lists: [
      {
        eyebrow: 'Porównanie',
        title: 'Przepisać za opiekę, podarować czy zapisać w testamencie: czym to się różni',
        kind: 'check',
        items: [
          { b: 'Umowa o dożywocie', t: 'nabywca jest właścicielem od aktu i zapewnia Ci utrzymanie i opiekę do końca życia (art. 908 § 1 k.c.).' },
          {
            b: 'Darowizna, także ze służebnością mieszkania',
            t: 'obdarowany jest właścicielem od aktu; służebność daje prawo mieszkania, nie opiekę (art. 296 i 302 k.c.); wykonaną darowiznę odwołasz tylko za rażącą niewdzięczność (art. 898 § 1 k.c.).',
          },
          { b: 'Testament', t: 'majątek przechodzi dopiero z chwilą Twojej śmierci, a testament odwołasz w każdej chwili (art. 924, 925 i 943 k.c.); opieki za życia nie daje.' },
          { b: 'Umowa renty', t: 'druga strona świadczy Ci okresowo pieniądze albo rzeczy (art. 903 k.c.); taka umowa nie wymaga przekazania mieszkania.' },
          {
            b: 'Odwrócony kredyt hipoteczny (potocznie: odwrócona hipoteka)',
            t: 'właściciel bierze od banku pieniądze jednorazowo albo w ratach, spłata następuje po jego śmierci, a bank ma hipotekę i wpisane roszczenie o przeniesienie własności (art. 4, 5 ust. 1 i art. 7 ust. 1 u.o.k.h.).',
          },
        ],
      },
    ],
    stepsHeading: 'Od formularza do podpisu aktu: jak to przebiega',
    steps: [
      'Wysyłasz formularz. W ciągu 24 h roboczych odpisuję, co trzeba przygotować, np. projekt umowy o dożywocie albo najpierw sprawdzenie księgi wieczystej, i wysyłam ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Ustalamy zakres opieki, ewentualne stałe świadczenia w pieniądzach i to, czy dożywocie obejmie też męża albo żonę (art. 908 § 2–3 k.c.). Sprawdzam księgę wieczystą.',
      'Projekt trafia do wybranego przez Ciebie notariusza, bo umowa wymaga aktu notarialnego (art. 158 k.c.); notariusz ustala z Wami termin podpisu.',
      'Krok nieodwracalny: podpis aktu. Od tej chwili mieszkanie należy do nabywcy, a notariusz najpóźniej tego dnia składa wniosek o wpis do księgi wieczystej (art. 92 § 4 Prawa o notariacie). Bez zgody nabywcy umowę zmienisz już tylko przez sąd (art. 913 k.c.).',
    ],
    faq: [
      {
        q: 'Ile kosztuje umowa dożywocia u notariusza i jaki jest podatek?',
        a: 'Nabywca płaci podatek od czynności cywilnoprawnych: 2% wartości rynkowej nieruchomości (art. 4, 6 i 7 u.p.c.c.). Podatek należy się z chwilą zawarcia umowy i pobiera go notariusz (art. 3 ust. 1 pkt 1 i art. 10 ust. 2 u.p.c.c.). Pobiera też opłaty sądowe za wpisy z tabeli wyżej (art. 7 § 2 Prawa o notariacie). Kwotę wynagrodzenia notariusza poznasz w jego kancelarii, a cenę mojej pracy podaję w ofercie.',
      },
      {
        q: 'Kto jest właścicielem mieszkania po podpisaniu umowy dożywocia?',
        a: 'Nabywca, od chwili podpisania aktu notarialnego (art. 155 § 1 i art. 158 k.c.). Kupujący od nabywcy nie uwolni się od Twojego prawa dożywocia tym, że nie było go w księdze wieczystej (art. 7 pkt 2 u.k.w.h.). Jeżeli nabywca sprzeda mieszkanie, możesz żądać zamiany dożywocia na dożywotnią rentę (art. 914 k.c.).',
      },
      {
        q: 'Czy umowę dożywocia można rozwiązać, gdy przestanie się mną opiekować?',
        a: 'Tak, ale bez zgody nabywcy tylko przez sąd, w wypadkach wyjątkowych i gdy dożywotnikiem jest zbywca mieszkania (art. 913 § 2 k.c.). Gdy nie da się wymagać, żebyście żyli obok siebie, sąd na żądanie strony zamienia wszystkie albo niektóre uprawnienia na rentę (art. 913 § 1 k.c.). Renta odpowiada wartości tych uprawnień.',
      },
      {
        q: 'Czy umowa dożywocia chroni przed komornikiem?',
        a: 'Nie przed Twoimi wierzycielami. Mogą żądać uznania umowy za bezskuteczną wobec siebie, jeżeli przez nią stałeś się niewypłacalny i wiedziałeś o ich pokrzywdzeniu (art. 527 § 1–2 k.c.). Nabywca musi o tym wiedzieć albo móc się dowiedzieć; gdy jest Ci bliski, jego wiedzę się domniemywa (art. 527 § 3 k.c.). Przed wierzycielami nabywcy chroni Cię prawo dożywocia ujawnione w księdze z pierwszeństwem przed wszystkimi hipotekami (art. 1000 § 3 k.p.c.).',
      },
      {
        q: 'Kiedy umowa dożywocia jest nieważna albo pozorna?',
        a: 'Nieważna jest umowa zawarta bez aktu notarialnego (art. 158 i art. 73 § 2 k.c.). Nieważna jest też umowa pozorna, czyli zawarta za zgodą obu stron tylko dla pozoru (art. 83 § 1 k.c.). Gdy pod nazwą dożywocia strony w rzeczywistości dokonują darowizny, ważność tej darowizny ocenia się według przepisów o darowiźnie.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 73, 83, 155, 158, 296, 302, 527, 898, 903, 908–916, 924, 925, 943, 991 i 993 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'dożywocie, forma aktu, pozorność, darowizna, renta, testament, zachowek',
        },
        { ref: 'art. 3, 4, 6, 7 i 10 u.p.c.c.', act: 'Ustawa o podatku od czynności cywilnoprawnych', tj: 'Dz.U. 2026 poz. 191', eli: 'DU/2000/959', note: 'podatek od umowy dożywocia' },
        { ref: 'art. 42, 43 i 45 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty za wpisy do księgi wieczystej' },
        { ref: 'art. 7 pkt 2 i art. 16 ust. 2 pkt 1 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'dożywocie w księdze wieczystej' },
        { ref: 'art. 1000 § 3 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'dożywocie przy licytacji komorniczej' },
        { ref: 'art. 2a ust. 3 i art. 4 ust. 4 u.k.u.r.', act: 'Ustawa o kształtowaniu ustroju rolnego', tj: 'Dz.U. 2026 poz. 941', eli: 'DU/2003/592', note: 'ziemia rolna przekazana osobie bliskiej' },
      ],
    },
    docs: [
      'Numer księgi wieczystej mieszkania albo domu',
      'Akt notarialny albo postanowienie spadkowe, z którego wynika Twoja własność, jeśli masz',
      'Lista najbliższej rodziny: dzieci, wnuki po zmarłych dzieciach, małżonek, rodzice',
      'Krótki opis, jakiej opieki i jakiego mieszkania oczekujesz',
      'Akt notarialny umowy o dożywocie, jeśli umowa jest już zawarta',
      'Wypis z rejestru gruntów, jeśli przekazujesz ziemię rolną',
    ],
    guides: ['umowa-dozywocia'],
    seeAlso: ['zachowek', 'stwierdzenie-nabycia-spadku'],
    cta: {
      heading: 'Przekaż mieszkanie mądrze — z opieką i bez sporów o zachowek.',
      lead: 'Napisz, co chcesz przekazać, komu, jakiej opieki oczekujesz i kogo masz w najbliższej rodzinie. W 24 h roboczych dostaniesz odpowiedź, co trzeba przygotować przed aktem, i ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Darowizna nieruchomości (Blok 2) ===== */
  'darowizna-nieruchomosci': {
    h1: 'Darowizna nieruchomości',
    h1Full: 'Darowizna nieruchomości: przepisanie mieszkania w rodzinie i odwołanie darowizny',
    topic: 'Darowizna nieruchomości',
    metaDesc: 'Darowizna nieruchomości wymaga aktu notarialnego. Najbliższa rodzina nie płaci podatku. Odwołujesz ją na piśmie w rok od dowiedzenia się o niewdzięczności.',
    subtitle: 'Chcesz przepisać mieszkanie lub działkę na dziecko albo cofnąć darowiznę, której dziś żałujesz? Darowizna nieruchomości wymaga aktu notarialnego, a najbliższa rodzina nie płaci od niej podatku (art. 890 § 1 k.c., art. 4a u.p.s.d.). Przygotowuję darowiznę z zabezpieczeniem darczyńcy, a po rażącej niewdzięczności obdarowanego odwołuję ją na piśmie i prowadzę sprawę o zwrot.',
    short: {
      q: 'Jak przepisać mieszkanie na dziecko i kiedy można cofnąć darowiznę?',
      a: 'Przepisanie mieszkania to umowa darowizny w formie aktu notarialnego (art. 890 § 1 i art. 158 k.c.). Najbliższa rodzina jest zwolniona z podatku i przy akcie nie składa zgłoszenia do urzędu skarbowego (art. 4a u.p.s.d.). Cofnąć darowiznę możesz z powodu rażącej niewdzięczności, pisemnie, w ciągu roku od dowiedzenia się o niej (art. 898–900 k.c.).',
      facts: [
        [
          'Forma',
          'Akt notarialny; wniosek o wpis do księgi wieczystej składa notariusz najpóźniej w dniu aktu (art. 158 k.c., art. 92 § 4 Prawa o notariacie)',
        ],
        [
          'Zwolnienie z podatku',
          'Małżonek, zstępni, wstępni, pasierb, rodzeństwo, ojczym, macocha; nie zięć, synowa ani teściowie (art. 4a ust. 1 u.p.s.d.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '200 zł od wniosku o wpis własności, przy udziale część proporcjonalna, najmniej 100 zł (art. 42 ust. 1–2 u.k.s.c.); 150 zł przy nieruchomości rolnej do 5 ha (art. 43 pkt 2 u.k.s.c.)',
        ],
        [
          'Odwołanie',
          'Na piśmie, w ciągu 1 roku od dowiedzenia się o niewdzięczności; bez notariusza i bez zgody obdarowanego (art. 899 § 3 i art. 900 k.c.)',
        ],
        [
          'Zachowek',
          'Darowiznę dolicza się do spadku przy obliczaniu zachowku, z wyjątkami z art. 994 k.c. (art. 993 § 1 k.c.)',
        ],
      ],
    },
    introHeading: 'Co zmienia przepisanie mieszkania na dziecko',
    intro: 'Umowa darowizny nieruchomości zawarta w akcie notarialnym od razu przenosi własność (art. 155 § 1 k.c.): od podpisu właścicielem jest obdarowany, nie Ty. Dlatego przed aktem ustalamy trzy rzeczy. Gdzie będziesz mieszkać: służebność mieszkania obciąża nieruchomość i wygasa najpóźniej z Twoją śmiercią (art. 296 i 299 k.c.). Kto może kiedyś żądać zachowku od obdarowanego (art. 1000 § 1 k.c.). Czy mieszkanie wejdzie do majątku wspólnego obdarowanego i jego małżonka: co do zasady nie, chyba że w umowie postanowisz inaczej (art. 33 pkt 2 k.r.o.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Przepisujesz mieszkanie na dziecko albo żałujesz darowizny',
    when: [
      { b: 'Syn albo córka, którym przepisałeś mieszkanie, zachowali się wobec Ciebie rażąco niewdzięcznie', t: 'termin na odwołanie biegnie od dnia, w którym się o tym dowiedziałeś (art. 899 § 3 k.c.).' },
      { b: 'Chcesz przepisać mieszkanie lub działkę na syna albo córkę', t: 'potrzebny jest akt notarialny (art. 890 § 1 k.c.); przed podpisem ustalamy, gdzie zamieszkasz.' },
      { b: 'Boisz się, że po podpisie zostaniesz bez dachu nad głową', t: 'obdarowany może w akcie ustanowić dla Ciebie służebność mieszkania (art. 245 § 2 i art. 296 k.c.).' },
      { b: 'Chcesz darować mieszkanie synowej, zięciowi albo komuś spoza rodziny', t: 'zwolnienie ich nie obejmuje; podatek zależy od grupy podatkowej (art. 14 u.p.s.d.), a pobiera go notariusz przy akcie (art. 18 u.p.s.d.).' },
      { b: 'Po przepisaniu mieszkania brakuje Ci na utrzymanie', t: 'obdarowany dostarcza Ci środków w granicach wzbogacenia albo zwalnia się, zwracając jego wartość (art. 897 k.c.).' },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co robię przed aktem u notariusza i po odwołaniu',
    doFor: [
      'Sprawdzam księgę wieczystą i ustalam z Tobą założenia umowy: całość czy udział, majątek osobisty obdarowanego (art. 33 pkt 2 k.r.o.).',
      'Projektuję służebność mieszkania: które pomieszczenia, kogo przyjmiesz do mieszkania (art. 301 § 1 k.c.) i czy po Twojej śmierci służebność będzie przysługiwać małżonkowi (art. 301 § 2 k.c.).',
      'Pokazuję, jak darowizna wpłynie na przyszły zachowek pozostałych dzieci (art. 993–994 k.c.).',
      'Przygotowuję pisemne oświadczenie o odwołaniu i doręczam je obdarowanemu tak, żeby datę doręczenia dało się udowodnić (art. 900 k.c.).',
      'Gdy obdarowany nie oddaje nieruchomości, składam pozew o zwrot (art. 898 § 2 k.c.); prawomocny wyrok zastępuje jego oświadczenie (art. 64 k.c.).',
      'Bronię obdarowanego: sprawdzam termin, przebaczenie (art. 899 § 1 k.c.) i wyłączenie z art. 902 k.c., a gdy odwołują spadkobiercy darczyńcy, także warunki z art. 899 § 2 k.c.',
    ],
    stepsHeading: 'Od opisu sprawy do wpisu obdarowanego w księdze wieczystej',
    steps: [
      'Opisujesz w formularzu, co i komu chcesz darować albo co zrobił obdarowany i kiedy się o tym dowiedziałeś. W ciągu 24 h roboczych bezpłatnie odpisuję, co trzeba zrobić (np. akt ze służebnością albo oświadczenie o odwołaniu), i wysyłam ofertę z ceną i terminem.',
      'Uzgadniam z notariuszem treść umowy i służebności mieszkania, a projekt aktu czytam przed terminem podpisu.',
      'Podpisujesz akt. Od tej chwili właścicielem jest obdarowany (art. 155 § 1 k.c.); wykonaną darowiznę odwołasz jednostronnie z powodu rażącej niewdzięczności (art. 898 § 1 k.c.).',
      'Po akcie sprawdzam w księdze wieczystej, czy sąd wpisał obdarowanego jako właściciela i Twoją służebność mieszkania.',
    ],
    faq: [
      {
        q: 'Ile kosztuje darowizna mieszkania u notariusza i wpis służebności?',
        a: 'Płacisz m.in. wynagrodzenie notariusza i opłatę sądową za wpis własności: 200 zł, przy nieruchomości rolnej do 5 ha 150 zł (art. 42 ust. 1 i art. 43 pkt 2 u.k.s.c.). Wpis służebności mieszkania to osobne 200 zł (art. 42 ust. 1 i art. 45 ust. 2 u.k.s.c.). Obie opłaty pobiera notariusz przy akcie (art. 7 § 2 Prawa o notariacie). Wynagrodzenie notariusza ustalasz z nim, najwyżej do maksymalnej stawki taksy (art. 5 § 1 i 3 Prawa o notariacie).',
      },
      {
        q: 'Rażąca niewdzięczność: czy ustawa podaje przykłady?',
        a: 'Nie. Kodeks cywilny mówi jedynie o rażącej niewdzięczności obdarowanego względem darczyńcy (art. 898 § 1 k.c.). Listy zachowań w ustawie nie ma, więc w sporze ocenia je sąd. Dlatego zapisuj daty zdarzeń i zachowaj wiadomości albo pisma, które je dokumentują.',
      },
      {
        q: 'Czy można cofnąć darowiznę po 10 latach?',
        a: 'Tak, jeżeli o rażącej niewdzięczności dowiedziałeś się mniej niż rok temu (art. 899 § 3 k.c.). Ustawa nie liczy tego terminu od dnia darowizny. Granica 10 lat pochodzi z przepisów o zachowku i liczy się wstecz od śmierci darczyńcy (art. 994 § 1 i art. 924 k.c.).',
      },
      {
        q: 'Czy do odwołania darowizny potrzebny jest notariusz albo zgoda obdarowanego?',
        a: 'Nie, wystarczy oświadczenie złożone obdarowanemu na piśmie (art. 900 k.c.). Po odwołaniu obdarowany ma obowiązek zwrotu (art. 898 § 2 k.c.). Jeżeli odmawia, możesz go pozwać. Prawomocny wyrok, który stwierdza jego obowiązek złożenia oświadczenia woli, zastępuje to oświadczenie (art. 64 k.c.).',
      },
      {
        q: 'Obdarowany sprzedał mieszkanie. Co z odwołaniem darowizny?',
        a: 'Możesz odwołać darowiznę i żądać od obdarowanego tego, co uzyskał w zamian, albo wartości mieszkania. Zwrot rozlicza się według przepisów o bezpodstawnym wzbogaceniu (art. 898 § 2, art. 405 i 406 k.c.).',
      },
      {
        q: 'Brat albo siostra żąda ode mnie zachowku po rodzicu, który dał mi mieszkanie. Czy może?',
        a: 'Tak, jeżeli po śmierci rodzica nie otrzyma zachowku od spadkobiercy. Wtedy może żądać zapłaty od Ciebie, ale tylko w granicach Twojego wzbogacenia z darowizny (art. 1000 § 1 k.c.). Jeżeli sam jesteś uprawniony do zachowku, odpowiadasz tylko do nadwyżki ponad własny zachowek (art. 1000 § 2 k.c.). Możesz też zwolnić się, wydając mieszkanie (art. 1000 § 3 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 155 § 1, 158, 244 § 1, 245 § 2, 296, 299, 301 i 890 § 1 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'umowa darowizny, forma aktu notarialnego, przejście własności, służebność mieszkania',
        },
        { ref: 'art. 64, 405–406, 897–900, 902, 924, 993–994 i 1000 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'niedostatek darczyńcy, odwołanie darowizny i zwrot, darowizna a zachowek' },
        {
          ref: 'art. 4a, 14 i 18 u.p.s.d.',
          act: 'Ustawa o podatku od spadków i darowizn',
          tj: 'Dz.U. 2026 poz. 478',
          eli: 'DU/1983/207',
          note: 'zwolnienie najbliższej rodziny, brak zgłoszenia przy akcie notarialnym, grupy podatkowe, notariusz jako płatnik',
        },
        {
          ref: 'art. 42 ust. 1–2, art. 43 pkt 2 i art. 45 ust. 2 u.k.s.c.',
          act: 'Ustawa o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'opłata od wniosku o wpis własności (także nieruchomości rolnej do 5 ha) i osobno służebności',
        },
        {
          ref: 'art. 5 § 1 i 3, art. 7 § 2 i art. 92 § 4 Prawa o notariacie',
          act: 'Prawo o notariacie',
          tj: 'Dz.U. 2026 poz. 614',
          eli: 'DU/1991/91',
          note: 'taksa notarialna, pobranie opłaty sądowej i wniosek notariusza o wpis do księgi wieczystej',
        },
        { ref: 'art. 33 pkt 2 k.r.o.', act: 'Kodeks rodzinny i opiekuńczy', tj: 'Dz.U. 2026 poz. 236', eli: 'DU/1964/59', note: 'darowizna w majątku osobistym obdarowanego' },
      ],
    },
    docs: [
      'Numer księgi wieczystej albo odpis księgi, jeśli masz',
      'Projekt aktu i termin u notariusza, jeśli już są',
      'Przy odwołaniu: akt darowizny, jeśli masz, i opis zachowań obdarowanego z datami, w tym data, kiedy się o nich dowiedziałeś',
      'Wiadomości, pisma albo zgłoszenia, które dokumentują te zachowania, jeśli są',
    ],
    guides: [],
    seeAlso: ['zachowek', 'dzial-spadku'],
    cta: {
      heading: 'Przekaż nieruchomość w rodzinie — bezpiecznie i z głową.',
      lead: 'Napisz, komu chcesz darować mieszkanie albo co zrobił obdarowany, a w ciągu 24 h roboczych bezpłatnie wskażę pierwszy krok. Razem z odpowiedzią dostajesz ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Plan ogólny gminy (Blok 4) ===== */
  'plan-ogolny': {
    h1: 'Plan ogólny gminy — sprawdź, co czeka Twoją działkę',
    h1Full: 'Plan ogólny gminy: uwagi i skarga – co oznacza strefa Twojej działki',
    topic: 'Plan ogólny gminy',
    metaDesc: 'Plan ogólny wpisał działkę do strefy otwartej (SO)? Uchwałę zaskarżysz do sądu administracyjnego w każdym czasie, jeżeli narusza Twój interes prawny.',
    subtitle: 'Gmina wpisała Twoją działkę do strefy otwartej albo rolnej i boisz się, że nie postawisz na niej domu. Uchwałę o planie ogólnym zaskarżysz do sądu administracyjnego w każdym czasie, jeżeli narusza Twój interes prawny lub uprawnienie, np. prawo do działki objętej planem (art. 101 ust. 1 u.s.g., art. 53 § 2a p.p.s.a.). Sprawdzam symbol strefy, piszę uwagę do projektu planu w konsultacjach społecznych albo skargę na uchwałę.',
    short: {
      q: 'Czy plan ogólny gminy można zaskarżyć?',
      a: 'Tak, jeżeli narusza Twój interes prawny lub uprawnienie (art. 101 ust. 1 u.s.g.). Plan ogólny jest uchwałą rady gminy i aktem prawa miejscowego (art. 13a ust. 1 i 7 u.p.z.p.). Sąd stwierdza nieważność planu w całości lub w części, jeżeli istotnie naruszono zasady albo tryb jego sporządzania (art. 28 ust. 1 u.p.z.p., art. 147 § 1 p.p.s.a.).',
      facts: [
        [
          'Kto może zaskarżyć',
          'Każdy, komu uchwała o planie ogólnym narusza interes prawny lub uprawnienie (art. 101 ust. 1 u.s.g.)',
        ],
        [
          'Termin na skargę',
          'Brak terminu: plan ogólny jest aktem prawa miejscowego, a taki akt zaskarżysz w każdym czasie (art. 13a ust. 7 u.p.z.p., art. 3 § 2 pkt 5 i art. 53 § 2a p.p.s.a.)',
        ],
        [
          'Gdzie',
          'Wojewódzki sąd administracyjny; skargę wnosisz przez radę gminy, która uchwaliła plan (art. 13 § 1, art. 54 § 1 p.p.s.a.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '300 zł wpisu stałego od skargi na akt prawa miejscowego, stan na 10.10.2026 (§ 2 ust. 1 pkt 3 rozporządzenia RM w sprawie wpisu przed sądami administracyjnymi)',
        ],
        [
          'Uwagi do projektu',
          'W konsultacjach społecznych trwających co najmniej 28 dni; ostatni dzień podaje ogłoszenie wójta, burmistrza albo prezydenta miasta (art. 8h ust. 1, art. 8j pkt 1 u.p.z.p.)',
        ],
        [
          'Gdzie sprawdzić plan',
          'W Rejestrze Urbanistycznym, bezpłatnie (art. 67f ust. 1 u.p.z.p.); plan opublikowany wcześniej w BIP gmina ma tam wprowadzić do 30.11.2026, więc do tego dnia sprawdź też BIP (art. 54 ust. 1 ustawy z 7.07.2023). Prawo do wypisu i wyrysu ma każdy (art. 30 ust. 1)',
        ],
      ],
    },
    introHeading: 'Co znaczy symbol strefy dla Twojej działki',
    intro: 'Plan ogólny gminy to uchwała rady gminy dla obszaru gminy, bez m.in. terenów zamkniętych, i akt prawa miejscowego (art. 13a ust. 1 i 7 u.p.z.p.). Mapa planu dzieli gminę na strefy planistyczne oznaczone symbolami, np. SJ albo SO (art. 13c ust. 1 i 2). Funkcja, którą urząd wpisze w warunkach zabudowy, musi mieścić się w profilu funkcjonalnym strefy, czyli w liście terenów przypisanych do tej strefy (art. 54 ust. 2 pkt 1 lit. a w zw. z art. 64 ust. 1). Plan ogólny nie uchyla jednak planów miejscowych (art. 34 ust. 1a). Dlatego najpierw sprawdzam, czy Twoja działka ma plan miejscowy, a dopiero potem czytam jej strefę.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Działka w strefie otwartej, projekt w konsultacjach albo plan już uchwalony',
    when: [
      {
        b: 'Na mapie projektu planu Twoja działka ma symbol SO albo SR, a gmina zbiera uwagi w konsultacjach społecznych',
        t: 'uwagę złoży każdy, nie tylko właściciel (art. 8e ust. 2 u.p.z.p.). Ustawa wymaga formularza, imienia i nazwiska, adresu, e-maila, jeśli go masz, i zaznaczenia, czy działka jest Twoją własnością albo masz ją w użytkowaniu wieczystym (art. 8g ust. 1 i 2).',
      },
      {
        b: 'Rada gminy podjęła uchwałę o przystąpieniu do planu ogólnego, a projektu jeszcze nie ma',
        t: 'wtedy zgłaszasz wniosek do projektu; ogłoszenie wyznacza termin, minimum 21 dni od dnia ogłoszenia (art. 13i ust. 3 pkt 1 u.p.z.p.).',
      },
      {
        b: 'Plan ogólny wszedł w życie i działka straciła szansę na dom',
        t: 'zostaje skarga, jeżeli plan narusza Twój interes prawny (art. 101 ust. 1 u.s.g.), albo wniosek o zmianę planu (art. 8g ust. 1 u.p.z.p.). Odszkodowanie i wykup z art. 36 ust. 1 u.p.z.p. dotyczą planu miejscowego, nie planu ogólnego.',
      },
      {
        b: 'Masz albo kupujesz działkę z decyzją o warunkach zabudowy, a gmina uchwaliła plan ogólny',
        t: 'uchwalenie planu ogólnego nie jest w art. 65 ust. 1 u.p.z.p. przyczyną wygaśnięcia warunków zabudowy. Ile ważna jest konkretna decyzja, opisuję na stronie o warunkach zabudowy.',
      },
    ],
    doForTitle: 'Co robię, gdy gmina zmienia przeznaczenie Twojej działki',
    doFor: [
      'Ustalam symbol strefy, jej profil i to, czy działka leży w obszarze uzupełnienia zabudowy, na podstawie projektu albo uchwały i wypisu z planu (art. 30 ust. 1 u.p.z.p.).',
      'Przygotowuję wniosek do projektu albo uwagę z argumentem z art. 13d ust. 1 u.p.z.p.: strefy z zabudową mieszkaniową i zagrodową wyznacza się w pierwszej kolejności tam, gdzie obowiązujący plan miejscowy pozwala na funkcję mieszkaniową, w obszarach uzupełnienia zabudowy i na obszarach z istniejącą zabudową mieszkaniową, z wyłączeniem luk w tej zabudowie.',
      'Czytam raport z konsultacji. Propozycja rozpatrzenia uwagi w raporcie nie podlega zaskarżeniu (art. 8k ust. 2, art. 8l u.p.z.p.), więc przy odrzuconej uwadze zbieram materiał do skargi na uchwalony plan.',
      'Analizuję uchwałę i dokumentację prac planistycznych pod kątem istotnego naruszenia zasad albo trybu sporządzania planu (art. 28 ust. 1 u.p.z.p.).',
      'Wnoszę skargę na plan ogólny i reprezentuję Cię przed wojewódzkim sądem administracyjnym, a w razie potrzeby przed Naczelnym Sądem Administracyjnym.',
      'Gdy skarga nie ma podstaw, przygotowuję wniosek o zmianę planu ogólnego; zmiana może objąć część gminy (art. 8g ust. 1, art. 13a ust. 2 u.p.z.p.).',
    ],
    lists: [
      {
        eyebrow: 'Strefy planistyczne',
        title: 'Symbole stref na mapie: co obejmuje profil każdej strefy',
        intro: 'Profile określa załącznik nr 1 do rozporządzenia w sprawie projektu planu ogólnego (Dz.U. 2026 poz. 826). Profil Twojej strefy podaje gminny katalog stref w planie (art. 13e ust. 2 pkt 1 u.p.z.p.); obejmuje on też tereny klas niższego poziomu (przypis 1 do załącznika), więc szczegóły sprawdzam w wypisie.',
        kind: 'check',
        items: [
          { b: 'SJ – strefa wielofunkcyjna z zabudową mieszkaniową jednorodzinną', t: 'podstawowo m.in. zabudowa mieszkaniowa jednorodzinna, usługi i zieleń urządzona.' },
          { b: 'SW – strefa wielofunkcyjna z zabudową mieszkaniową wielorodzinną', t: 'podstawowo zabudowa wielorodzinna i usługi; jednorodzinna tylko w profilu dodatkowym.' },
          { b: 'SZ – strefa wielofunkcyjna z zabudową zagrodową', t: 'podstawowo zabudowa zagrodowa i produkcja w gospodarstwach rolnych; profil nie wymienia zabudowy mieszkaniowej jednorodzinnej.' },
          { b: 'SR – strefa produkcji rolniczej', t: 'produkcja w gospodarstwach rolnych i wielkotowarowa, dodatkowo m.in. elektrownie słoneczne i wiatrowe; profil nie wymienia zabudowy mieszkaniowej ani zagrodowej.' },
          { b: 'SO – strefa otwarta', t: 'm.in. rolnictwo z zakazem zabudowy, lasy, wody i zieleń naturalna; profil nie wymienia zabudowy mieszkaniowej.' },
          {
            b: 'OUZ – obszar uzupełnienia zabudowy',
            t: 'nie jest strefą; plan może go wyznaczyć, ale nie ma takiego obowiązku (art. 13a ust. 4 pkt 2 lit. a u.p.z.p.). Poza nim, bez planu miejscowego, co do zasady nie dostaniesz warunków zabudowy na nowy budynek (art. 61 ust. 1 pkt 1a i ust. 1a).',
          },
        ],
      },
    ],
    stepsHeading: 'Od symbolu na mapie do uwagi albo skargi: kolejne kroki',
    steps: [
      'Wysyłasz przez formularz nazwę gminy i numer działki. Symbol strefy z mapy planu albo wypis dołącz, jeśli je masz.',
      'W 24 h roboczych odpisuję, na jakim etapie jest plan w Twojej gminie i od którego dokumentu zacząć: uwagi, wniosku o zmianę planu czy skargi. Dołączam ofertę z ceną i terminem; płacisz dopiero po jej akceptacji.',
      'Po akceptacji oferty ustalam strefę i jej profil, a potem piszę uwagę albo wniosek z uzasadnieniem. Krok nieodwracalny: ostatni dzień konsultacji z ogłoszenia gminy, bo uwagi ustawa przewiduje tylko w konsultacjach społecznych (art. 8i ust. 1 pkt 1, art. 8j pkt 1 u.p.z.p.).',
      'Gdy plan już obowiązuje, skargę kieruję do sądu, ale wnoszę ją przez radę gminy, która ma 30 dni na przekazanie jej z odpowiedzią na skargę (art. 54 § 1 i 2 p.p.s.a.). Plan obowiązuje do wyroku: sąd nie wstrzymuje prawa miejscowego, które weszło w życie (art. 61 § 3 p.p.s.a.).',
    ],
    faq: [
      {
        q: 'Moja działka jest w strefie otwartej. Czy postawię na niej dom?',
        a: 'Na podstawie nowych warunków zabudowy co do zasady nie. Funkcja z warunków zabudowy musi mieścić się w profilu funkcjonalnym strefy (art. 54 ust. 2 pkt 1 lit. a w zw. z art. 64 ust. 1 u.p.z.p.). Profil strefy otwartej nie wymienia terenu zabudowy mieszkaniowej (załącznik nr 1 do rozporządzenia w sprawie projektu planu ogólnego). Jeżeli działka ma plan miejscowy, najpierw sprawdzam jego ustalenia.',
      },
      {
        q: 'Czy plan ogólny zastępuje plan miejscowy (MPZP)?',
        a: 'Nie. Wejście w życie planu ogólnego nie powoduje utraty mocy planów miejscowych (art. 34 ust. 1a u.p.z.p.). Nowy plan miejscowy rada uchwala po stwierdzeniu zgodności z planem ogólnym (art. 20 ust. 1). Plan ogólny nie jest też podstawą sprawdzenia projektu budowlanego przy pozwoleniu na budowę (art. 13a ust. 6 pkt 3).',
      },
      {
        q: 'Do kiedy mogę złożyć uwagę do planu ogólnego?',
        a: 'Do ostatniego dnia konsultacji społecznych, który podaje ogłoszenie wójta, burmistrza albo prezydenta miasta (art. 8h ust. 1 u.p.z.p.). Ogłoszenie ukazuje się najpóźniej w dniu rozpoczęcia konsultacji, m.in. w prasie, w Biuletynie Informacji Publicznej urzędu i przez wywieszenie na terenie objętym planem albo w urzędzie (art. 8h ust. 1 pkt 1–3).',
      },
      {
        q: 'Nie zdążyłem z uwagą w konsultacjach. Co jeszcze mogę zrobić?',
        a: 'Zostają dwie drogi: skarga na uchwalony plan albo wniosek o jego zmianę. Skargę wnosisz, jeżeli plan narusza Twój interes prawny (art. 101 ust. 1 u.s.g.). Wniosek o zmianę planu składasz na formularzu (art. 8g ust. 1 u.p.z.p.). Zmiana przechodzi ten sam tryb co uchwalenie, w tym konsultacje społeczne (art. 27). O tym, czy ruszy, decyduje rada gminy uchwałą o przystąpieniu (art. 13i ust. 1 w zw. z art. 27).',
      },
      {
        q: 'Czym plan ogólny różni się od studium?',
        a: 'Plan ogólny jest aktem prawa miejscowego i podstawą prawną decyzji o warunkach zabudowy (art. 13a ust. 5 i 7 u.p.z.p.). Studia straciły moc z wejściem planu ogólnego w gminie, najpóźniej z końcem 31.08.2026 (art. 65 ust. 1 ustawy z 7.07.2023). Decyzję o warunkach zabudowy z wniosku złożonego od 1.09.2026 można wydać, jeżeli w gminie wszedł w życie plan ogólny (art. 59 ust. 3 tej ustawy).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 8e, 8g–8l, 13a, 13c–13e, 13i, 20, 27, 28, 30, 34, 36, 54, 59, 61, 64, 65, 67f i 67i u.p.z.p.',
          act: 'Ustawa o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538',
          eli: 'DU/2003/717',
          note: 'plan ogólny, strefy, wnioski i uwagi, zmiana planu, skutki dla warunków zabudowy; art. 8g ust. 1 w brzmieniu z Dz.U. 2026 poz. 781',
        },
        {
          ref: 'art. 54 ust. 1, art. 59 ust. 3 i art. 65 ust. 1',
          act: 'Ustawa z 7.07.2023 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm. (bez tekstu jednolitego)',
          eli: 'DU/2023/1688',
          note: 'koniec mocy studiów (31.08.2026), warunki zabudowy od 1.09.2026, Rejestr Urbanistyczny do 30.11.2026 (daty w brzmieniu z Dz.U. 2026 poz. 781)',
        },
        { ref: 'art. 101 ust. 1 u.s.g.', act: 'Ustawa o samorządzie gminnym', tj: 'Dz.U. 2026 poz. 662', eli: 'DU/1990/95', note: 'skarga na uchwałę rady gminy' },
        { ref: 'art. 3 § 2 pkt 5, art. 13, 53, 54, 61 i 147 p.p.s.a.', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'sąd, termin, tryb i skutki skargi' },
        {
          ref: '§ 2 ust. 1 pkt 3',
          act: 'Rozporządzenie Rady Ministrów w sprawie wysokości oraz szczegółowych zasad pobierania wpisu w postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2021 poz. 535',
          eli: 'DU/2003/2193',
          note: 'wpis od skargi na akt prawa miejscowego',
        },
        {
          ref: '§ 2 i załącznik nr 1',
          act: 'Rozporządzenie w sprawie projektu planu ogólnego gminy, dokumentowania prac planistycznych w zakresie tego planu oraz wydawania z niego wypisów i wyrysów',
          tj: 'Dz.U. 2023 poz. 2758 (załącznik nr 1 w brzmieniu z Dz.U. 2026 poz. 826)',
          eli: 'DU/2023/2758',
          note: 'symbole i profile funkcjonalne stref planistycznych',
        },
      ],
    },
    docs: [
      'Nazwa gminy i numer działki (obręb, jeśli znasz)',
      'Zrzut mapy projektu albo uchwalonego planu ogólnego z zaznaczoną działką, jeśli masz',
      'Ogłoszenie gminy o konsultacjach społecznych albo o przystąpieniu do planu, jeżeli procedura jeszcze trwa',
      'Uwaga albo wniosek, które już złożyłeś, i raport z konsultacji, jeśli są',
      'Wypis z planu miejscowego albo decyzja WZ, jeżeli działka je ma: od nich zaczynam analizę',
    ],
    guides: [
      'odszkodowanie-za-plan-ogolny',
      'jak-przygotowac-sie-na-zmiany-w-planowaniu-przestrzennym',
      'plan-ogolny-a-wniosek-o-wz-w-toku',
    ],
    seeAlso: ['analiza-umowy-przedwstepnej', 'obsluga-prawna-deweloperow'],
    cta: {
      heading: 'Nie daj się zaskoczyć planem ogólnym.',
      lead: 'Podaj gminę, numer działki i symbol strefy, jeśli go znasz. W 24 h roboczych dostaniesz bezpłatną odpowiedź, co zrobić najpierw, i ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
    faqHeading: 'Strefa otwarta, uwagi, plan miejscowy i studium: pytania właścicieli działek',
  },

  /* ===== Skarga na plan miejscowy / MPZP (Blok 4) ===== */
  'skarga-na-plan-miejscowy': {
    h1: 'Skarga na plan miejscowy (MPZP)',
    h1Full: 'Skarga na plan miejscowy (MPZP): kto, kiedy i jak zaskarżyć uchwałę',
    topic: 'Miejscowy plan zagospodarowania przestrzennego',
    metaDesc: 'Plan miejscowy blokuje budowę na Twojej działce? Masz trzy drogi: uwagę do projektu, skargę do WSA bez terminu albo roszczenie do gminy (art. 36 u.p.z.p.).',
    subtitle: 'Plan miejscowy zablokował budowę na Twojej działce albo nałożył ograniczenia, których sąsiad nie ma? Plan miejscowy zaskarżysz do wojewódzkiego sądu administracyjnego w każdym czasie, a sąd może stwierdzić jego nieważność także tylko w części, np. dotyczącej Twojej działki (art. 53 § 2a, art. 147 § 1 p.p.s.a.). Sprawdzam dokumentację planu, piszę uwagę do projektu albo skargę do WSA i przygotowuję roszczenie do gminy.',
    short: {
      q: 'Jak zaskarżyć plan miejscowy, który blokuje budowę na mojej działce?',
      a: 'Składasz skargę do wojewódzkiego sądu administracyjnego za pośrednictwem rady gminy, która uchwaliła plan (art. 54 § 1 p.p.s.a.). Warunek: plan narusza Twój interes prawny, czyli np. ogranicza to, co jako właściciel możesz zbudować na działce (art. 101 ust. 1 u.s.g.). Gminy nie musisz wcześniej wzywać do usunięcia naruszenia.',
      facts: [
        [
          'Kto wnosi skargę',
          'Każdy, komu plan narusza interes prawny lub uprawnienie; także w imieniu grupy mieszkańców gminy za ich pisemną zgodą (art. 101 ust. 1 i 2a u.s.g.)',
        ],
        [
          'Do kiedy',
          'Bez terminu: plan miejscowy jest aktem prawa miejscowego (art. 14 ust. 8 u.p.z.p., art. 53 § 2a p.p.s.a.)',
        ],
        [
          'Droga skargi',
          'Przez radę gminy, która w 30 dni przekazuje skargę do WSA albo sama uwzględnia ją w całości (art. 54 § 1–3 p.p.s.a.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Wpis stały 300 zł od skargi i 150 zł od skargi kasacyjnej, stan na 10.10.2026 (§ 2 ust. 1 pkt 3 i § 3 rozporządzenia RM z 16.12.2003, t.j. Dz.U. 2021 poz. 535)',
        ],
        [
          'Czy skarga wstrzymuje plan',
          'Nie (art. 61 § 1 p.p.s.a.). Wstrzymania można żądać tylko przed wejściem planu w życie; potem nie wstrzyma go ani rada gminy, ani sąd (art. 61 § 2 pkt 3 i § 3)',
        ],
      ],
    },
    introHeading: 'Co plan miejscowy przesądza o Twojej działce i kiedy jest nieważny',
    intro: 'Miejscowy plan zagospodarowania przestrzennego jest aktem prawa miejscowego (art. 14 ust. 8 u.p.z.p.), czyli uchwałą rady gminy, która wiąże Ciebie i urząd jak przepis. Samo niezadowolenie z planu nie wystarczy do skargi. Nieważność powoduje istotne naruszenie zasad sporządzania planu, istotne naruszenie trybu albo naruszenie właściwości organów (art. 28 ust. 1 u.p.z.p.). Studia gmin straciły moc najpóźniej z końcem 31.08.2026 r. Nowy plan gmina co do zasady uchwala od tego czasu tylko przy obowiązującym planie ogólnym i zgodnie z jego ustaleniami (art. 20 ust. 1 u.p.z.p.; art. 65 ust. 1 i art. 67 ust. 4 ustawy z 7.07.2023).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Gmina dopiero pisze plan albo już go uchwaliła i blokuje Ci budowę',
    when: [
      {
        b: 'Gmina ogłosiła konsultacje społeczne projektu planu, który obejmuje Twoją działkę.',
        t: 'Konsultacje społeczne trwają co najmniej 28 dni (art. 8j pkt 1 u.p.z.p.), a propozycji rozpatrzenia uwagi nie zaskarżysz osobno do sądu (art. 8l).',
      },
      {
        b: 'Masz warunki zabudowy, a nowy plan przewiduje dla działki coś innego.',
        t: 'Urząd stwierdza wtedy wygaśnięcie WZ, chyba że zachodzi wyjątek z art. 65 ust. 2 u.p.z.p., np. masz już ostateczne pozwolenie na budowę (art. 65 ust. 1 pkt 2).',
      },
      {
        b: 'Rada gminy uchwaliła plan, a Twoja działka z budowlanej stała się rolna albo zielona.',
        t: 'Skarga wymaga wykazania, że ustalenia planu naruszają Twój interes prawny, np. jako właściciela albo użytkownika wieczystego (art. 101 ust. 1 u.s.g.).',
      },
      {
        b: 'Sąsiednia, podobna działka może być zabudowana, a Twoja nie.',
        t: 'Różnicę trzeba przełożyć na zarzut z ustawy: istotne naruszenie zasad albo trybu sporządzania planu lub właściwości organów (art. 28 ust. 1 u.p.z.p.).',
      },
      {
        b: 'Chcesz sprzedać działkę, która po uchwaleniu planu straciła na wartości.',
        t: 'Przy sprzedaży możesz żądać od gminy odszkodowania za spadek wartości, a plan zostaje (art. 36 ust. 3 u.p.z.p.); warunki opisuję na stronie o odszkodowaniach planistycznych.',
      },
    ],
    doForTitle: 'Od analizy uchwały do sprawy przed WSA i NSA',
    doFor: [
      'Czytam uchwałę, rysunek planu i dokumentację prac planistycznych: wykaz wniosków, raport z konsultacji społecznych, opinie i uzgodnienia (art. 8k, art. 17 u.p.z.p.). Szukam zarzutu z art. 28 ust. 1 u.p.z.p.',
      'W czasie konsultacji społecznych piszę uwagę z danymi z art. 8g ust. 2 u.p.z.p. i proponowanym brzmieniem zapisu dla Twojej działki.',
      'Piszę skargę do WSA i składam ją w radzie gminy; przed wejściem planu w życie dołączam wniosek o wstrzymanie wykonania uchwały (art. 54 § 1, art. 61 § 2 pkt 3 p.p.s.a.).',
      'Prowadzę sprawę przed WSA i piszę skargę kasacyjną do NSA, którą musi sporządzić adwokat albo radca prawny (art. 175 § 1 p.p.s.a.).',
      'Przygotowuję wniosek do gminy o odszkodowanie albo wykup działki (art. 36 u.p.z.p.), gdy wolisz pieniądze niż spór o plan.',
    ],
    lists: [
      {
        eyebrow: 'Uwaga, skarga czy odszkodowanie',
        title: 'Trzy drogi przeciw niekorzystnemu planowi: kiedy i w jakim terminie',
        kind: 'check',
        items: [
          {
            b: 'Wniosek i uwaga do projektu planu',
            t: 'Przed uchwaleniem: wnioski co najmniej 21 dni od ogłoszenia o przystąpieniu do planu, uwagi przez co najmniej 28 dni konsultacji społecznych (art. 17 pkt 1, art. 8j pkt 1 u.p.z.p.). Na piśmie, także e-mailem, na formularzu (art. 8g ust. 1).',
          },
          {
            b: 'Skarga do wojewódzkiego sądu administracyjnego',
            t: 'Po uchwaleniu, bez terminu. Skutek: nieważność planu w całości albo w części; decyzje wydane na jego podstawie podlegają wzruszeniu w trybie administracyjnym (art. 147 § 1 i 2 p.p.s.a.).',
          },
          {
            b: 'Odszkodowanie albo wykup od gminy',
            t: 'Po uchwaleniu, gdy przez plan nie możesz używać działki jak dotąd albo tylko w istotnie mniejszym zakresie: wniosek do gminy o odszkodowanie albo wykup (art. 36 ust. 1 u.p.z.p.). Plan zostaje w mocy.',
          },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega skarga na plan: od rady gminy do wyroku',
    steps: [
      'Opisujesz, co plan zmienił na Twojej działce. W 24 h roboczych odpisuję, czego wymaga Twoja sprawa, np. przeglądu dokumentacji planu przed skargą albo pilnej uwagi w trwających konsultacjach społecznych, i dołączam ofertę: cenę i termin. Do akceptacji oferty nic nie płacisz.',
      'Analizuję uchwałę i dokumentację planu. Jeżeli nie znajduję zarzutu z art. 28 ust. 1 u.p.z.p., mówię to wprost i wskazuję inną drogę, np. roszczenie z art. 36.',
      'Składam skargę w radzie gminy; w 30 dni rada przekazuje ją do WSA z aktami albo sama uwzględnia ją w całości (art. 54 § 2 i 3 p.p.s.a.). Jeżeli sąd oddali skargę, ponownej skargi z art. 101 ust. 1 u.s.g. w tej sprawie nie wniesiesz (art. 101 ust. 2), więc wszystkie zarzuty zbieram przed złożeniem.',
      'Wyrok WSA: nieważność planu w całości albo w części albo oddalenie skargi (art. 147 § 1, art. 151 p.p.s.a.).',
      'Skarga kasacyjna do NSA w 30 dni od doręczenia wyroku z uzasadnieniem (art. 177 § 1 p.p.s.a.). Ten sam termin ma rada gminy, która jest stroną sprawy (art. 32 p.p.s.a.).',
    ],
    faq: [
      {
        q: 'Jaki jest termin na skargę na MPZP?',
        a: 'Nie ma terminu. Plan miejscowy jest aktem prawa miejscowego, a skargę na taki akt wnosisz w każdym czasie (art. 14 ust. 8 u.p.z.p., art. 53 § 2a p.p.s.a.). Roczny limit stwierdzenia nieważności uchwał nie dotyczy aktów prawa miejscowego (art. 94 ust. 1, art. 101 ust. 4 u.s.g.).',
      },
      {
        q: 'Czy trzeba najpierw wezwać gminę do usunięcia naruszenia?',
        a: 'Nie. Art. 101 ust. 1 u.s.g. nie wymaga wezwania gminy przed skargą. Skarga trafia jednak do sądu przez radę gminy, która uchwaliła plan, a nie wprost (art. 54 § 1 p.p.s.a.).',
      },
      {
        q: 'Ile kosztuje skarga do WSA na plan?',
        a: 'Opłata sądowa to wpis stały 300 zł, a od skargi kasacyjnej do NSA 150 zł (§ 2 ust. 1 pkt 3 i § 3 rozporządzenia o wpisie). Cenę przygotowania skargi i prowadzenia sprawy przed WSA podaję w ofercie z terminem złożenia skargi.',
      },
      {
        q: 'Czy skarga do wojewody na plan miejscowy coś da?',
        a: 'Wojewoda może sam stwierdzić nieważność planu tylko w 30 dni od doręczenia mu uchwały (art. 91 ust. 1 u.s.g.). Wójt przedkłada mu uchwałę w 7 dni od jej podjęcia (art. 90 ust. 1). Po tym terminie wojewoda może już tylko zaskarżyć plan do WSA (art. 93 ust. 1).',
      },
      {
        q: 'Jak napisać uwagi do projektu MPZP?',
        a: 'Na piśmie, w czasie konsultacji społecznych, które trwają co najmniej 28 dni (art. 8j pkt 1 u.p.z.p.). Podaj imię i nazwisko, adres zamieszkania, e-mail, jeśli go masz, i to, czy jesteś właścicielem lub użytkownikiem wieczystym działki (art. 8g ust. 2). Wskaż zapis projektu, którego dotyczy uwaga, i brzmienie, którego żądasz, z uzasadnieniem.',
      },
      {
        q: 'Plan zablokował budowę: wybrać skargę czy odszkodowanie od gminy?',
        a: 'Jeżeli chcesz budować, wybierz skargę, o ile plan ma wadę z art. 28 ust. 1 u.p.z.p.; sąd może wtedy stwierdzić jego nieważność w części dotyczącej Twojej działki (art. 147 § 1 p.p.s.a.). Odszkodowanie albo wykup z art. 36 u.p.z.p. zostawia plan w mocy, a spór o nie rozstrzyga sąd powszechny (art. 37 ust. 10).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 90, art. 91, art. 93, art. 94, art. 101',
          act: 'Ustawa z dnia 8 marca 1990 r. o samorządzie gminnym',
          tj: 'Dz.U. 2026 poz. 662',
          eli: 'DU/1990/95',
          note: 'Skarga na uchwałę rady gminy, nadzór wojewody, brak rocznego limitu dla aktów prawa miejscowego.',
        },
        {
          ref: 'art. 3, art. 32, art. 53, art. 54, art. 61, art. 147, art. 151, art. 175, art. 177',
          act: 'Ustawa z dnia 30 sierpnia 2002 r. – Prawo o postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2026 poz. 143, z późn. zm.',
          eli: 'DU/2002/1270',
          note: 'Termin i tryb wniesienia skargi, wstrzymanie wykonania, wyrok WSA, skarga kasacyjna.',
        },
        {
          ref: 'art. 8g, art. 8j, art. 8k, art. 8l, art. 14, art. 17, art. 20, art. 28, art. 36, art. 37, art. 65',
          act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538, z późn. zm.',
          eli: 'DU/2003/717',
          note: 'Wnioski i uwagi, procedura planu, przyczyny nieważności, odszkodowanie i wykup, wygaśnięcie WZ.',
        },
        {
          ref: 'art. 65 ust. 1, art. 67 ust. 4',
          act: 'Ustawa z dnia 7 lipca 2023 r. o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688, z późn. zm. (brak tekstu jednolitego)',
          eli: 'DU/2023/1688',
          note: 'Utrata mocy studiów (najpóźniej 31.08.2026) i uchwalanie planów miejscowych po reformie.',
        },
        {
          ref: '§ 2 ust. 1 pkt 3, § 3',
          act: 'Rozporządzenie Rady Ministrów z dnia 16 grudnia 2003 r. w sprawie wysokości oraz szczegółowych zasad pobierania wpisu w postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2021 poz. 535',
          eli: 'DU/2003/2193',
          note: 'Wpis 300 zł od skargi na akt prawa miejscowego i wpis od skargi kasacyjnej.',
        },
      ],
    },
    docs: [
      'Numer uchwały w sprawie planu albo link do niej w BIP gminy, jeśli masz',
      'Wypis i wyrys z planu dla Twojej działki, jeśli masz',
      'Numer działki z obrębem albo numer księgi wieczystej',
      'Wnioski i uwagi złożone do projektu planu oraz odpowiedź gminy, jeśli były',
      'Decyzja o warunkach zabudowy, pozwolenie na budowę albo zgłoszenie budowy, jeśli masz',
      'Ogłoszenie o konsultacjach społecznych i projekt planu, jeśli plan jest w przygotowaniu',
    ],
    guides: [
      'jak-przygotowac-sie-na-zmiany-w-planowaniu-przestrzennym',
      'odszkodowanie-za-plan-ogolny',
    ],
    seeAlso: ['odszkodowanie-wywlaszczenie', 'odrolnienie'],
    cta: {
      heading: 'Plan miejscowy związał Ci ręce? Sprawdźmy, czy słusznie.',
      lead: 'Napisz, której gminy i działki dotyczy plan i co w nim Ci przeszkadza. W 24 h roboczych odpiszę, która droga wchodzi w grę (uwaga, skarga do WSA czy roszczenie do gminy), i dołączę ofertę: cenę i termin; dopóki jej nie przyjmiesz, nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== Opłaty i odszkodowania planistyczne (Blok 4) ===== */
  'oplaty-odszkodowania-planistyczne': {
    metaDesc: 'Plan ogólny nie daje odszkodowania ani wykupu z art. 36 u.p.z.p. Renta planistyczna: do 30% wzrostu wartości przy zbyciu w 5 lat od wejścia planu w życie.',
    h1: 'Opłaty i odszkodowania planistyczne',
    h1Full: 'Opłaty i odszkodowania planistyczne: renta planistyczna, opłata adiacencka, odszkodowanie za plan miejscowy',
    topic: 'Opłaty planistyczne',
    subtitle: 'Gmina naliczyła Ci rentę planistyczną albo opłatę adiacencką, a może plan odebrał działce wartość? Za plan ogólny ustawa o planowaniu nie przyznaje odszkodowania ani wykupu: art. 36 u.p.z.p. dotyczy tylko planu miejscowego. Sprawdzam decyzję i operat, piszę odwołanie albo wniosek do gminy o odszkodowanie lub wykup.',
    short: {
      q: 'Czy gmina zapłaci odszkodowanie za plan ogólny?',
      a: 'Nie na podstawie ustawy o planowaniu: art. 36 u.p.z.p. łączy odszkodowanie i wykup tylko z uchwaleniem albo zmianą planu miejscowego. Żądasz ich, jeżeli plan uniemożliwił albo istotnie ograniczył dotychczasowe korzystanie z działki; przy zbyciu możesz żądać odszkodowania za spadek wartości. Na plan ogólny reagujesz uwagą do projektu w konsultacjach społecznych albo skargą, jeżeli uchwała narusza Twój interes prawny (art. 13i ust. 3 pkt 9 u.p.z.p., art. 101 ust. 1 u.s.g.).',
      facts: [
        [
          'Odszkodowanie albo wykup',
          'Gdy plan miejscowy uniemożliwił albo istotnie ograniczył dotychczasowe korzystanie z działki (art. 36 ust. 1 u.p.z.p.)',
        ],
        [
          'Spadek wartości przy sprzedaży',
          'Odszkodowanie równe obniżeniu wartości, zgłoszone w 5 lat od dnia, w którym plan stał się obowiązujący (art. 36 ust. 3, art. 37 ust. 3 u.p.z.p.)',
        ],
        [
          'Renta planistyczna',
          'Do 30% wzrostu wartości, przy zbyciu w tych samych 5 latach (art. 36 ust. 4, art. 37 ust. 4 u.p.z.p.)',
        ],
        [
          'Opłata adiacencka',
          'Do 30% wzrostu wartości po podziale, do 50% po budowie drogi lub sieci (w Specjalnej Strefie Rewitalizacji do 75%); 3 lata na wszczęcie (art. 98a ust. 1, art. 145 ust. 2, art. 146 ust. 2–2a u.g.n.)',
        ],
        [
          'Odwołanie',
          'Do samorządowego kolegium odwoławczego (SKO) w 14 dni od doręczenia decyzji (art. 17 pkt 1, art. 129 § 2 k.p.a.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Skarga do wojewódzkiego sądu administracyjnego (WSA): wpis od kwoty opłaty – 4% do 10 000 zł (min. 100 zł), 3% do 50 000 zł (min. 400 zł), 2% do 100 000 zł (min. 1500 zł), 1% powyżej (min. 2000 zł, maks. 100 000 zł); art. 231 p.p.s.a., § 1 rozporządzenia RM z 16.12.2003, stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Kiedy gmina pobiera opłatę, a kiedy płaci Tobie',
    intro: 'Gdy po uchwaleniu albo zmianie planu miejscowego wartość działki wzrosła, a Ty zbywasz ją w ciągu 5 lat od wejścia planu w życie, gmina pobiera jednorazową opłatę (potocznie: renta planistyczna) według stawki z planu (art. 36 ust. 4, art. 37 ust. 3–4, art. 15 ust. 2 pkt 12 u.p.z.p.). Opłata adiacencka nie wynika z uchwalenia planu, lecz z podziału działki albo z budowy drogi lub sieci z udziałem środków publicznych (art. 4 pkt 11, art. 143 ust. 2 u.g.n.). Gdy plan ograniczył korzystanie z działki, odszkodowania albo wykupu żądasz Ty (art. 36 ust. 1 u.p.z.p.). Wartość działki przed zmianą i po niej określa rzeczoznawca majątkowy w operacie szacunkowym, a opłatę ustala wójt, burmistrz albo prezydent miasta w decyzji (art. 37 ust. 6 i 12 u.p.z.p., art. 146 ust. 1a, art. 156 ust. 1 u.g.n.). Dlatego w sprawach o opłatę i o odszkodowanie za spadek wartości zaczynam od operatu.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Gmina żąda opłaty albo plan zablokował Ci działkę',
    when: [
      { b: 'Dostałeś decyzję o opłacie i liczysz dni.', t: 'Na odwołanie masz 14 dni od doręczenia; składasz je przez organ, który wydał decyzję (art. 129 § 1–2 k.p.a.).' },
      { b: 'Podzieliłeś działkę i czekasz, czy gmina przyśle opłatę.', t: 'Gmina może wszcząć postępowanie do 3 lat od dnia, w którym decyzja o podziale stała się ostateczna (art. 98a ust. 1 u.g.n.).' },
      {
        b: 'Gmina zbudowała drogę albo wodociąg przy Twojej działce.',
        t: 'Może ustalić opłatę po stworzeniu warunków do podłączenia albo korzystania z drogi. Wyjątek: działka przeznaczona w planie miejscowym na cele rolne i leśne, a bez planu tak wykorzystywana (art. 143 ust. 1, art. 145 ust. 1 u.g.n.).',
      },
      {
        b: 'Sprzedajesz działkę, której plan miejscowy zmienił przeznaczenie.',
        t: 'Notariusz w 7 dni wysyła gminie wypis aktu, a wójt ustala opłatę w decyzji. Przed sprzedażą możesz sam żądać takiej decyzji (art. 37 ust. 5–7 u.p.z.p.).',
      },
      { b: 'Plan miejscowy przeznaczył Twoją działkę na inny cel i nie możesz jej używać jak dotąd.', t: 'To przesłanka żądania odszkodowania albo wykupu od gminy (art. 36 ust. 1 u.p.z.p.).' },
    ],
    doForEyebrow: 'Gdy gmina żąda od Ciebie opłaty',
    doForTitle: 'Co sprawdzam w decyzji o opłacie i w operacie',
    doFor: [
      'Sprawdzam, czy opłata adiacencka w ogóle przysługuje: czy podział był na Twój wniosek, czy nie dokonano go niezależnie od ustaleń planu miejscowego, czy w dniu ostateczności podziału obowiązywała uchwała o stawce i czy gmina wszczęła postępowanie w terminie (art. 98a ust. 1, 1a i 2, art. 145 ust. 2 u.g.n.).',
      'Przy rencie planistycznej sprawdzam, od kiedy plan jest obowiązujący, datę zbycia i stawkę z planu (art. 15 ust. 2 pkt 12, art. 37 ust. 3–4 u.p.z.p.).',
      'Przeglądam operat w aktach: daty, stan działki, pominięcie działek pod drogi publiczne i zaliczenie Twoich wpłat na budowę drogi lub sieci (art. 156 ust. 1a, art. 98a ust. 1b i 3, art. 148 ust. 4 u.g.n.).',
      'Do odwołania dołączam opinię innego rzeczoznawcy jako dowód (art. 75 § 1 k.p.a.).',
      'Wniosek o raty składam jeszcze w postępowaniu o ustalenie opłaty, bo ich warunki określa decyzja o opłacie (art. 147 ust. 1 u.g.n.).',
    ],
    lists: [
      {
        eyebrow: 'Gdy plan odebrał Ci wartość',
        title: 'Odszkodowanie albo wykup działki przez gminę.',
        kind: 'deliverables',
        items: [
          'Sprawdzam, czy ograniczenie ustaliła gmina, czy plan przeniósł je z ustawy albo aktu wydanego na jej podstawie, z uwarunkowań dotyczących powodzi albo z decyzji innego organu o inwestycji celu publicznego; w tych przypadkach art. 36 ust. 1 nie działa (art. 36 ust. 1a u.p.z.p.).',
          'Ustalam punkt odniesienia wyceny: przy terenie wcześniej bez planu faktyczny sposób użytkowania, przy zmianie planu dotychczasowe przeznaczenie (art. 37 ust. 11 u.p.z.p.).',
        ],
      },
    ],
    stepsHeading: 'Od decyzji albo wniosku do SKO, WSA lub sądu',
    steps: [
      'Przesyłasz decyzję z datą doręczenia albo opisujesz, jak plan miejscowy zmienił przeznaczenie działki. W 24 h roboczych wskazuję, czego wymaga Twoja sprawa, np. przeglądu operatu i odwołania albo wniosku do gminy o wykup. Razem z tym dostajesz ofertę z ceną i terminem; do akceptacji oferty nie płacisz nic.',
      'Decyzja o opłacie: piszę odwołanie do SKO z zarzutami do operatu. Krok nieodwracalny: jeżeli termin na odwołanie minie, decyzja staje się ostateczna (art. 16 § 1, art. 129 § 2 k.p.a.), a opłatę adiacencką płacisz po 14 dniach od tego dnia (art. 148 ust. 1 u.g.n.).',
      'Decyzja o opłacie po SKO: skarga do WSA w 30 dni od doręczenia decyzji kolegium (art. 53 § 1 p.p.s.a.); sama skarga nie wstrzymuje wykonania decyzji (art. 61 § 1 p.p.s.a.).',
      'Odszkodowanie albo wykup: wniosek do gminy, która ma 6 miesięcy na wykonanie roszczenia, chyba że umówicie się inaczej; po terminie należą się odsetki ustawowe za opóźnienie (art. 37 ust. 9 u.p.z.p.).',
      'Odszkodowanie albo wykup, krok nieodwracalny: umowa zamiany na nieruchomość zamienną, bo z dniem jej zawarcia roszczenia wygasają (art. 36 ust. 2 u.p.z.p.). Bez porozumienia składam pozew do sądu powszechnego (art. 37 ust. 10 u.p.z.p.).',
    ],
    faq: [
      {
        q: 'Po ilu latach od uchwalenia planu nie zapłacę renty planistycznej?',
        a: 'Po 5 latach od dnia, w którym plan miejscowy albo jego zmiana stały się obowiązujące (art. 37 ust. 3–4 u.p.z.p.). Opłatę pobiera się przy zbyciu działki w tym okresie (art. 36 ust. 4 u.p.z.p.). Nie pobiera się jej, gdy rolnik nieodpłatnie przekazuje gospodarstwo następcy (art. 36 ust. 4a u.p.z.p.).',
      },
      {
        q: 'Kupuję działkę. Czy opłata adiacencka może mnie obciążyć?',
        a: 'Może, jeżeli w dziale IV księgi wieczystej jest hipoteka gminy zabezpieczająca należność z opłaty adiacenckiej (art. 25 ust. 1 pkt 4 u.k.w.h., art. 147 ust. 1 u.g.n.). Gmina może wtedy dochodzić zaspokojenia z działki bez względu na to, kto jest jej właścicielem (art. 65 ust. 1 u.k.w.h.). Przed zakupem sprawdź dział IV i zapytaj sprzedającego, czy dostał decyzję o opłacie.',
      },
      {
        q: 'Czy opłatę adiacencką można rozłożyć na raty albo umorzyć?',
        a: 'Tak, na Twój wniosek gmina może rozłożyć opłatę na raty roczne płatne do 10 lat (art. 147 ust. 1 u.g.n.). Raty są oprocentowane stopą redyskonta weksli NBP (art. 147 ust. 2 u.g.n.). Ulgi w spłacie i umorzenie ocenia się według ustawy o finansach publicznych (art. 98a ust. 5, art. 148 ust. 5 u.g.n.).',
      },
      {
        q: 'W jakim terminie gmina może ustalić opłatę adiacencką?',
        a: 'Ustawa daje gminie 3 lata na wszczęcie postępowania o opłatę (art. 98a ust. 1, art. 145 ust. 2 u.g.n.). Liczy się je od dnia, w którym decyzja o podziale stała się ostateczna, albo od stworzenia warunków do podłączenia działki lub korzystania z drogi. Bez obowiązującej wtedy uchwały rady gminy o stawce opłaty się nie ustala (art. 98a ust. 1a, art. 145 ust. 2 u.g.n.).',
      },
      {
        q: 'Ile wynosi opłata adiacencka po podziale działki?',
        a: 'Najwyżej 30% różnicy wartości działki przed podziałem i po nim (art. 98a ust. 1 u.g.n.). Dokładną stawkę ustala rada gminy w uchwale. Liczy się stawka obowiązująca w dniu, w którym decyzja o podziale stała się ostateczna (art. 98a ust. 1a u.g.n.).',
      },
      {
        q: 'Kiedy mogę złożyć wniosek, żeby gmina wykupiła moją działkę?',
        a: 'Gdy przez uchwalenie albo zmianę planu miejscowego dotychczasowe korzystanie z działki stało się niemożliwe lub istotnie ograniczone (art. 36 ust. 1 u.p.z.p.). Zamiast wykupu możesz wtedy żądać odszkodowania za rzeczywistą szkodę. Sam spadek wartości daje odszkodowanie dopiero przy zbyciu działki (art. 36 ust. 3 u.p.z.p.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 13i ust. 3 pkt 9, art. 15 ust. 2 pkt 12, art. 36, art. 37',
          act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538',
          eli: 'DU/2003/717',
          note: 'Odszkodowanie, wykup i renta planistyczna przy planie miejscowym; konsultacje planu ogólnego.',
        },
        { ref: 'art. 4 pkt 11, art. 98a, art. 143–148, art. 156', act: 'Ustawa z dnia 21 sierpnia 1997 r. o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'Opłata adiacencka, raty, operat.' },
        {
          ref: 'art. 16 § 1, art. 17, art. 75, art. 129',
          act: 'Ustawa z dnia 14 czerwca 1960 r. Kodeks postępowania administracyjnego',
          tj: 'Dz.U. 2025 poz. 1691',
          eli: 'DU/1960/168',
          note: 'Odwołanie do SKO, dowody i ostateczność decyzji.',
        },
        {
          ref: 'art. 53 § 1, art. 61 § 1, art. 231',
          act: 'Ustawa z dnia 30 sierpnia 2002 r. Prawo o postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2026 poz. 143',
          eli: 'DU/2002/1270',
          note: 'Skarga do WSA, jej skutek dla wykonania decyzji i wpis stosunkowy.',
        },
        {
          ref: '§ 1',
          act: 'Rozporządzenie Rady Ministrów z dnia 16 grudnia 2003 r. w sprawie wysokości oraz szczegółowych zasad pobierania wpisu w postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2021 poz. 535',
          eli: 'DU/2003/2193',
          note: 'Stawki wpisu stosunkowego.',
        },
        { ref: 'art. 101 ust. 1', act: 'Ustawa z dnia 8 marca 1990 r. o samorządzie gminnym', tj: 'Dz.U. 2026 poz. 662', eli: 'DU/1990/95', note: 'Skarga na uchwałę rady gminy, w tym na plan ogólny.' },
      ],
    },
    docs: [
      'Decyzja o opłacie z datą doręczenia, jeśli ją dostałeś',
      'Operat z akt albo zawiadomienie o wszczęciu postępowania, jeśli masz',
      'Decyzja o podziale albo informacja, kiedy oddano drogę lub sieć',
      'Akt sprzedaży albo projekt umowy, jeśli chodzi o rentę planistyczną',
      'Wypis z planu miejscowego i opis, jak korzystałeś z działki przed planem, jeśli żądasz odszkodowania',
    ],
    guides: ['odszkodowanie-za-plan-ogolny', 'oplata-adiacencka-renta-planistyczna', 'operat-szacunkowy-jak-podwazyc'],
    seeAlso: ['obsluga-sprzedazy', 'odszkodowanie-wywlaszczenie', 'wykup-dzialki-resztkowej'],
    cta: {
      heading: 'Nie płać gminie więcej, niż musisz — i odzyskaj to, co plan Ci zabrał.',
      lead: 'Prześlij decyzję o opłacie z datą doręczenia albo opisz, jak plan miejscowy lub ogólny zmienił Twoją działkę. W 24 h roboczych odpiszę, czy pisać odwołanie, wniosek do gminy czy skargę na plan, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== BLOK 5 — Proces budowlany i samowole ===== */
  'pozwolenie-na-budowe': {
    metaDesc: 'Na pozwolenie na budowę urząd ma co do zasady 65 dni, a od decyzji odwołujesz się w 14 dni. Prowadzę wniosek, odwołanie i spór z sąsiadem.',
    h1: 'Pozwolenie na budowę',
    h1Full: 'Pozwolenie na budowę: wniosek, odmowa i odwołanie sąsiada',
    topic: 'Pozwolenie na budowę',
    subtitle: 'Urząd wezwał do poprawek, odmówił albo sąsiad odwołał się od Twojego pozwolenia? Pozwolenie na budowę to decyzja administracyjna zezwalająca na rozpoczęcie i prowadzenie budowy; bez niej co do zasady nie zaczniesz robót (art. 3 pkt 12, art. 28 ust. 1 Pb). Na decyzję urząd ma co do zasady 65 dni (art. 35 ust. 6 Pb); prowadzę wniosek, odwołanie i obronę przed odwołaniem sąsiada.',
    short: {
      q: 'Ile czeka się na pozwolenie na budowę i kiedy mogę zacząć budować?',
      a: 'Urząd ma co do zasady 65 dni od złożenia wniosku, nie licząc m.in. zawieszenia postępowania i opóźnień z winy strony (art. 35 ust. 6 i 8 Pb). Za każdy dzień zwłoki organ wyższego stopnia nakłada na niego karę 500 zł. Budować możesz co do zasady dopiero wtedy, gdy decyzja stanie się ostateczna (art. 130 § 1–2 k.p.a.).',
      facts: [
        [
          'Kto wydaje',
          'Starosta; w sprawach z art. 82 ust. 3 Pb, np. dróg krajowych i wojewódzkich, wojewoda (art. 82 ust. 2–3 Pb)',
        ],
        [
          'Termin dla urzędu',
          'Co do zasady 65 dni od złożenia wniosku, potem kara 500 zł za każdy dzień zwłoki (art. 35 ust. 6 Pb)',
        ],
        [
          'Odwołanie',
          '14 dni od doręczenia decyzji; pismo składasz w starostwie, rozpatruje je wojewoda (art. 82 ust. 3 Pb, art. 129 § 1–2 k.p.a.)',
        ],
        [
          'Ważność',
          'Wygasa, jeżeli nie zaczniesz budowy w 3 lata od ostateczności decyzji albo przerwiesz ją na ponad 3 lata (art. 37 ust. 1 Pb)',
        ],
        [
          'Opłata skarbowa (nie honorarium)',
          'Sprawy budownictwa mieszkaniowego: brak (art. 2 ust. 1 pkt 2 u.o.s.). Budynek na działalność gospodarczą inną niż rolnicza i leśna: 1 zł za m² powierzchni użytkowej, najwyżej 539 zł; budynek gospodarczy w gospodarstwie rolnym 14 zł; inny budynek 48 zł (załącznik do u.o.s., część III ust. 9 pkt 1 lit. a–c)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Skarga do WSA w sprawie budowlanej: 500 zł (§ 2 ust. 3 pkt 1); skarga na bezczynność: 100 zł (§ 2 ust. 1 pkt 6 rozporządzenia o wpisie przed sądami administracyjnymi)',
        ],
      ],
    },
    introHeading: 'Co urząd sprawdza we wniosku i kiedy nie może odmówić',
    intro: 'Pozwolenie wydaje w pierwszej instancji co do zasady starosta (art. 82 ust. 2 Pb), a projekt budowlany opracowuje projektant (art. 20 ust. 1 pkt 1 Pb). Ja prowadzę postępowanie. Starosta sprawdza m.in., czy projekt jest zgodny z planem miejscowym, a bez planu z decyzją o warunkach zabudowy, i czy dokumenty są kompletne (art. 35 ust. 1 Pb). Jeżeli te wymagania i warunki z art. 32 ust. 4 Pb są spełnione, nie może odmówić pozwolenia (art. 35 ust. 4 Pb).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Termin z urzędu już biegnie, WZ wygasa albo sąsiad buduje przy granicy',
    when: [
      { b: 'Urząd wezwał Cię postanowieniem do usunięcia nieprawidłowości w projekcie', t: 'jeżeli nie dotrzymasz terminu z postanowienia, starosta odmawia pozwolenia (art. 35 ust. 3 i ust. 5 pkt 1 Pb).' },
      { b: 'Twoja decyzja o warunkach zabudowy (WZ) niedługo wygasa', t: 'jeżeli WZ jest wymagana, pozwolenie dostaje tylko ten, kto złożył wniosek w okresie jej ważności (art. 32 ust. 4 pkt 1 Pb).' },
      { b: 'Dostałeś decyzję odmowną', t: 'termin na odwołanie do wojewody to 14 dni i liczy się od dnia doręczenia, a nie wydania decyzji (art. 129 § 2 k.p.a.).' },
      { b: 'Sąsiad odwołał się od Twojego pozwolenia i nie możesz zacząć budowy', t: 'odwołanie wniesione w terminie wstrzymuje wykonanie decyzji (art. 130 § 2 k.p.a.); sprawdzam, czy sąsiad w ogóle jest stroną.' },
      { b: 'Wniosek leży w urzędzie ponad 65 dni bez decyzji', t: 'przysługuje Ci ponaglenie, a po nim skarga do WSA (art. 37 § 1 k.p.a., art. 53 § 2b p.p.s.a.).' },
      {
        b: 'Sąsiad dostał pozwolenie, a urząd nie zawiadomił Cię o postępowaniu',
        t: 'jeżeli bez własnej winy nie brałeś w nim udziału, masz miesiąc od dowiedzenia się o decyzji na wniosek o wznowienie (art. 145 § 1 pkt 4, art. 148 § 2 k.p.a.).',
      },
    ],
    doForTitle: 'Wniosek, odpowiedź na wezwanie, odwołanie, ponaglenie: moje pisma',
    doFor: [
      'Przed wnioskiem sprawdzam dokumenty z art. 33 ust. 2 Pb: oświadczenie o prawie do dysponowania nieruchomością na cele budowlane, WZ (jeżeli jest wymagana) i uzgodnienia.',
      'Piszę odwołanie do wojewody z zarzutami, zakresem żądania i dowodami (art. 10b ust. 1 Pb), potem skargę do WSA w 30 dni od doręczenia decyzji wojewody (art. 53 § 1 p.p.s.a.) i skargę kasacyjną do NSA (art. 173 § 1 p.p.s.a.).',
      'Bronię Twojego pozwolenia przed odwołaniem sąsiada albo, po stronie sąsiada, odwołuję się od cudzego. Zaczynam od obszaru oddziaływania obiektu wskazanego w projekcie zagospodarowania (art. 34 ust. 3 pkt 1 lit. e Pb).',
      'Gdy urząd zwleka, składam ponaglenie do wojewody za pośrednictwem starosty (art. 37 § 3 pkt 1 k.p.a.), a potem skargę na bezczynność.',
      'W imieniu strony pominiętej przez urząd składam wniosek o wznowienie postępowania; po 5 latach od doręczenia lub ogłoszenia decyzji nie uchyla się jej w tym trybie (art. 146 § 1 k.p.a.), a nieważności pozwolenia nie stwierdza się (art. 37b ust. 1 Pb).',
    ],
    lists: [
      {
        eyebrow: 'Zgłoszenie zamiast pozwolenia',
        title: 'Czasem wystarczy zgłoszenie.',
        kind: 'check',
        intro: 'Wolno stojący dom jednorodzinny zbudujesz na zgłoszenie, jeżeli jego obszar oddziaływania nie wychodzi poza działkę, na której go zaprojektowano (art. 29 ust. 1 pkt 1 Pb). Terminy i sprzeciw urzędu przy zgłoszeniu opisuję na stronie o zgłoszeniu budowy.',
        items: [
          'Nawet wtedy możesz zamiast zgłoszenia złożyć wniosek o pozwolenie na budowę (art. 29 ust. 5 Pb).',
        ],
      },
    ],
    stepsHeading: 'Od złożenia wniosku do rozpoczęcia robót: kolejność i terminy',
    steps: [
      'Opisujesz w formularzu budowę i etap sprawy. W ciągu 24 h roboczych wskazuję bezpłatnie, który ruch jest teraz potrzebny, np. odwołanie albo ponaglenie, i wysyłam ofertę z ceną i terminem.',
      'Składam wniosek do starosty. Na postanowienie o usunięciu nieprawidłowości odpowiadamy z Twoim projektantem w wyznaczonym terminie (art. 35 ust. 3 Pb); gdy urząd zwleka z decyzją, składam ponaglenie.',
      'Od decyzji starosty strony mogą się odwołać do wojewody, a od decyzji wojewody złożyć skargę do WSA; sama skarga nie zatrzymuje wykonania pozwolenia (art. 61 § 1 p.p.s.a.).',
      'Przed startem zawiadamiasz nadzór budowlany i projektanta sprawującego nadzór nad zgodnością budowy z projektem o terminie rozpoczęcia robót (art. 41 ust. 4 Pb). Nie zaczynaj wcześniej: roboty przed uzyskaniem pozwolenia są podstawą odmowy (art. 35 ust. 5 pkt 2 Pb).',
    ],
    faqHeading: 'Ważność, opłaty, sąsiad i nowy właściciel: pytania przed budową',
    faq: [
      {
        q: 'Ile ważne jest pozwolenie na budowę?',
        a: '3 lata na rozpoczęcie budowy, licząc od dnia, w którym decyzja stała się ostateczna (art. 37 ust. 1 Pb). Pozwolenie wygasa też po przerwie w budowie dłuższej niż 3 lata. Budowę rozpoczynają już prace przygotowawcze, np. wytyczenie geodezyjne obiektu (art. 41 ust. 1–2 Pb).',
      },
      {
        q: 'Ile kosztuje pozwolenie na budowę domu?',
        a: 'W sprawach budownictwa mieszkaniowego pozwolenie nie podlega opłacie skarbowej (art. 2 ust. 1 pkt 2 u.o.s.). Za pozostałe budynki opłata wynosi 14 zł, 48 zł albo 1 zł za m² powierzchni użytkowej, najwyżej 539 zł (załącznik do u.o.s., część III ust. 9 pkt 1). Cenę mojej pracy podaję w ofercie.',
      },
      {
        q: 'Czy sąsiad może zablokować moje pozwolenie na budowę?',
        a: 'Zablokować nie, opóźnić tak: jeżeli projekt spełnia wymagania z art. 35 ust. 1 Pb, starosta nie może odmówić pozwolenia (art. 35 ust. 4 Pb). Odwołanie sąsiada, który jest stroną, wstrzymuje jednak wykonanie decyzji do rozstrzygnięcia wojewody (art. 28 ust. 2 Pb, art. 130 § 2 k.p.a.).',
      },
      {
        q: 'Czy pozwolenie na budowę przechodzi na nowego właściciela działki?',
        a: 'Nie samo: na Twój wniosek przenosi je decyzją organ, który je wydał (art. 40 ust. 1 Pb). Dołączasz m.in. oświadczenie o przejęciu jego warunków i zgodę dotychczasowego inwestora. Zgody nie potrzebujesz, jeżeli po wydaniu pozwolenia własność działki przeszła z inwestora na Ciebie (art. 40 ust. 1a Pb). Opłata skarbowa wynosi 90 zł, poza sprawami budownictwa mieszkaniowego (załącznik do u.o.s., część I ust. 11; art. 2 ust. 1 pkt 2 u.o.s.).',
      },
      {
        q: 'Czy pozwolenie musi się uprawomocnić, zanim zacznę budowę?',
        a: 'Co do zasady tak: budujesz, gdy decyzja stanie się ostateczna (art. 130 § 1–2 k.p.a.). Wcześniej możesz, gdy decyzji nadano rygor natychmiastowej wykonalności albo jest zgodna z żądaniem wszystkich stron (art. 130 § 3–4 k.p.a.). Tak samo, gdy wszystkie strony zrzekły się odwołania. Budować możesz też w czasie sprawy przed WSA, ale po uchyleniu pozwolenia wznowienie budowy wymaga nowego (art. 61 § 1 p.p.s.a., art. 37 ust. 2 Pb).',
      },
      {
        q: 'Jak odwołać się od pozwolenia na budowę wydanego sąsiadowi?',
        a: 'W 14 dni od doręczenia decyzji, jeżeli jesteś stroną, np. właścicielem działki w obszarze oddziaływania jego obiektu (art. 28 ust. 2 Pb, art. 129 § 2 k.p.a.). Obszar oddziaływania to teren, na którym przepisy ograniczają zabudowę z powodu obiektu sąsiada (art. 3 pkt 20 Pb). Odwołanie musi zawierać zarzuty, zakres żądania i dowody (art. 10b ust. 1 Pb). Nie mogę obiecać wyniku; zaczynam od sprawdzenia, czy jesteś stroną.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 3 pkt 12 i 20, art. 10b, 28–29, 32–35, 37–37b, 40–41 i 82 Pb',
          act: 'Prawo budowlane',
          tj: 'Dz.U. 2026 poz. 524',
          eli: 'DU/1994/414',
          note: 'pozwolenie, zgłoszenie, strony, odwołanie, terminy, ważność, przeniesienie, organ',
        },
        { ref: 'art. 37, 129–130 i 145–148 k.p.a.', act: 'Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'ponaglenie, odwołanie, wykonanie decyzji, wznowienie' },
        { ref: 'art. 53, 61 i 173 p.p.s.a.', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'skarga do WSA i NSA' },
        { ref: 'art. 2 ust. 1 pkt 2, załącznik część I ust. 11 i część III ust. 9 u.o.s.', act: 'Ustawa o opłacie skarbowej', tj: 'Dz.U. 2025 poz. 1154', eli: 'DU/2006/1635', note: 'opłata za pozwolenie i jego przeniesienie' },
        {
          ref: '§ 2 ust. 1 pkt 6 i ust. 3 pkt 1',
          act: 'Rozporządzenie Rady Ministrów w sprawie wysokości oraz szczegółowych zasad pobierania wpisu w postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2021 poz. 535',
          eli: 'DU/2003/2193',
          note: 'wpis od skargi do WSA',
        },
      ],
    },
    docs: [
      'Decyzja starosty albo wojewody z datą doręczenia',
      'Postanowienie o usunięciu nieprawidłowości albo wezwanie do uzupełnienia wniosku (jeśli je dostałeś)',
      'Wniosek o pozwolenie z potwierdzeniem daty złożenia albo, przed wnioskiem, oświadczenie o prawie do dysponowania nieruchomością (jeśli masz)',
      'Projekt zagospodarowania działki z informacją o obszarze oddziaływania obiektu (jeśli masz)',
      'Decyzja o warunkach zabudowy albo wypis z planu miejscowego (jeśli masz)',
      'Odwołanie sąsiada albo zawiadomienie urzędu o jego wniesieniu (jeśli dotyczy)',
    ],
    guides: ['warunki-zabudowy-ile-wazne', 'przebudowa-czy-nowy-zjazd-nsa'],
    seeAlso: ['warunki-zabudowy', 'droga-konieczna', 'obsluga-prawna-architektow'],
    cta: {
      heading: 'Odmowa, odwołanie sąsiada albo cisza w urzędzie? Zawalczę o Twoją budowę.',
      lead: 'Prześlij decyzję, postanowienie urzędu albo odwołanie sąsiada z datą doręczenia. Bezpłatnie, w 24 h roboczych, wskażę pismo i termin, które Cię dotyczą, oraz prześlę ofertę z ceną i terminem wykonania; płacisz dopiero po jej akceptacji.',
    },
    updated: '2026-10-10',
  },

  'legalizacja-samowoli': {
    h1: 'Legalizacja samowoli budowlanej',
    h1Full: 'Legalizacja samowoli budowlanej: tryb zwykły albo uproszczony po 20 latach',
    topic: 'Legalizacja samowoli',
    metaDesc: 'Samowola nie legalizuje się sama. Po 20 latach od zakończenia budowy tryb jest uproszczony i bez opłaty, wcześniej za dom jednorodzinny płacisz 50 000 zł.',
    subtitle: 'Dom, dobudówka albo garaż stoją bez pozwolenia lub zgłoszenia, a nadzór budowlany już pyta albo zbliża się sprzedaż? Legalizacja samowoli budowlanej po co najmniej 20 latach od zakończenia budowy jest uproszczona i bez opłaty legalizacyjnej (art. 49f Pb). Wcześniej opłata za dom jednorodzinny wynosi 50 000 zł (art. 49d Pb), a ja ustalam tryb i prowadzę sprawę przed PINB.',
    short: {
      q: 'Jak zalegalizować samowolę budowlaną i ile wynosi opłata legalizacyjna?',
      a: 'Tylko w postępowaniu przed nadzorem budowlanym, co do zasady przed powiatowym inspektorem (PINB); sam upływ czasu nie legalizuje budynku (art. 83 ust. 1 Pb). W trybie zwykłym płacisz opłatę legalizacyjną, za dom jednorodzinny 50 000 zł (art. 49d ust. 1 pkt 1 Pb). Po co najmniej 20 latach tryb jest uproszczony: bez opłaty, z inwentaryzacją geodezyjną i ekspertyzą techniczną (art. 49g ust. 2 Pb).',
      facts: [
        [
          'Tryb zwykły',
          'Mniej niż 20 lat od zakończenia budowy albo budowa trwa (art. 48 ust. 1 pkt 1–2, art. 49f ust. 1 Pb)',
        ],
        [
          'Tryb uproszczony',
          'Co najmniej 20 lat od zakończenia budowy, upływające przed wstrzymaniem budowy (art. 49f ust. 1 i 5 Pb)',
        ],
        [
          'Terminy w ustawie',
          'Wniosek o legalizację: 30 dni od doręczenia Ci postanowienia o wstrzymaniu budowy; dokumenty: termin organu, co najmniej 60 dni (art. 48a ust. 1, art. 48b ust. 1, art. 49g ust. 1 Pb)',
        ],
        [
          'Opłata legalizacyjna (opłata publiczna, nie honorarium)',
          'Dom jednorodzinny 50 000 zł; wolno stojący garaż, wiata albo parterowy budynek gospodarczy do 35 m² na zgłoszenie 5000 zł; tryb uproszczony bez opłaty (art. 49d ust. 1, art. 59f Pb; stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Sam upływ lat nie wystarczy, zmienia się tylko procedura',
    intro: 'Samowola budowlana to potoczna nazwa budowy bez wymaganego pozwolenia albo zgłoszenia lub mimo sprzeciwu do zgłoszenia (art. 48 ust. 1 Pb). Rozbudowę i nadbudowę ustawa traktuje jak budowę (art. 3 pkt 6 Pb). Postanowienie o wstrzymaniu budowy nadzór wydaje także dla budynku już ukończonego, jeżeli od zakończenia budowy nie minęło 20 lat (art. 48 ust. 5, art. 49f ust. 1 Pb). Brak wniosku, dokumentów albo opłaty w terminie kończy się decyzją o rozbiórce (art. 49e Pb).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pismo z nadzoru, stary dom bez pozwolenia albo dobudówka przy sprzedaży',
    when: [
      {
        b: 'Dostałeś postanowienie o wstrzymaniu budowy',
        t: 'Termin na wniosek o legalizację to 30 dni od doręczenia (art. 48a ust. 1 Pb). Jeżeli wniesiesz zażalenie, liczysz je od dnia, gdy postanowienie stanie się ostateczne (art. 48a ust. 3 Pb).',
      },
      { b: 'Budowę zakończono co najmniej 20 lat temu', t: 'Nadzór prowadzi tryb uproszczony, chyba że 20 lat minęło dopiero po wstrzymaniu budowy (art. 49f ust. 1 i 5 Pb).' },
      {
        b: 'Garaż, wiata albo budynek gospodarczy bez zgłoszenia',
        t: 'Wolno stojące garaże, wiaty i parterowe budynki gospodarcze do 35 m² powierzchni zabudowy, łącznie najwyżej dwa na każde 500 m² działki, wymagają zgłoszenia (art. 29 ust. 1 pkt 14 Pb).',
      },
      {
        b: 'Przebudowa bez pozwolenia albo dom istotnie inny niż w projekcie',
        t: 'Po 10 latach od zakończenia robót nadzór sprawdza, czy zagrażają życiu lub zdrowiu ludzi, a przy istotnym odstąpieniu od projektu stosuje legalizację uproszczoną (art. 50 ust. 6 Pb).',
      },
      {
        b: 'Sprzedajesz dom albo go kupiłeś, a dobudówka nie ma pozwolenia',
        t: 'Po zakończeniu robót adresatem obowiązków jest właściciel lub zarządca (art. 52 ust. 1 Pb). Przed aktem notarialnym ustal, kto prowadzi legalizację.',
      },
    ],
    doForTitle: 'Co robię od pisma z nadzoru do decyzji',
    doFor: [
      'Ustalam datę zakończenia budowy i rodzaj naruszenia, bo od nich zależy tryb.',
      'Składam zażalenie na wstrzymanie budowy albo wniosek o legalizację przed upływem terminu (art. 48 ust. 4, art. 48a Pb).',
      'Kompletuję z geodetą i projektantem dokumenty legalizacyjne w terminie wyznaczonym przez organ (art. 48b ust. 1, art. 49g ust. 1 Pb).',
      'Sprawdzam kategorię i współczynniki w postanowieniu o opłacie; przy błędzie wnoszę zażalenie (art. 49 ust. 2b Pb).',
      'Przy sprzedaży albo zakupie zapisuję w umowie, kto z Was prowadzi legalizację i kto płaci opłatę.',
    ],
    lists: [
      {
        eyebrow: 'Porównanie trybów',
        title: 'Budynek młodszy i starszy niż 20 lat: czym różnią się procedury',
        intro: 'Według Prawa budowlanego, stan na 10.10.2026.',
        items: [
          {
            b: 'Co sprawdza organ',
            t: 'Zwykła: dokumenty i zgodność z przepisami, także techniczno-budowlanymi z chwili zakończenia budowy (art. 49 ust. 1 Pb). Uproszczona: dokumenty i wynik ekspertyzy technicznej (art. 49h ust. 1 Pb).',
          },
          { b: 'Plan miejscowy albo WZ', t: 'Zwykła: zaświadczenie o zgodności z planem, a bez planu z decyzją o warunkach zabudowy (art. 48b ust. 2 pkt 1 i ust. 3 pkt 1 Pb). Uproszczona: niepotrzebne (art. 49g ust. 2 Pb).' },
          { b: 'Opłata', t: 'Zwykła: decyzja po uiszczeniu opłaty, brak zapłaty w terminie to rozbiórka (art. 49 ust. 4, art. 49e pkt 5 Pb). Uproszczona: brak opłaty w art. 49f–49i Pb.' },
          { b: 'Po decyzji', t: 'Zwykła: przy budowie na pozwolenie i domu na zgłoszenie jeszcze pozwolenie na użytkowanie (art. 49 ust. 5 Pb). Uproszczona: decyzja jest podstawą użytkowania (art. 49i ust. 2 Pb).' },
        ],
      },
    ],
    stepsHeading: 'Od wstrzymania budowy do decyzji: kolejne kroki',
    steps: [
      'Opisujesz w formularzu, co powstało, kiedy skończono budowę i czy masz pismo z nadzoru.',
      'W 24 h roboczych bezpłatnie wskazuję pierwszy ruch, np. wniosek przed upływem terminu albo zebranie dowodów daty zakończenia budowy, i wysyłam ofertę z ceną i terminem. Do jej akceptacji nic nie płacisz.',
      'W trybie zwykłym składam wniosek o legalizację. Tryb uproszczony organ wszczyna z urzędu albo na Twoje żądanie, a przy budynku ukończonym przed 1.01.1995 tylko na żądanie (art. 49f ust. 1 i 2, art. 53a ust. 2 Pb).',
      'Składam dokumenty legalizacyjne i usuwam braki wskazane przez organ (art. 49 ust. 1a, art. 49h ust. 2 Pb).',
      'Krok nieodwracalny. Wycofanie wniosku, możliwe do dnia decyzji, albo opłata niezapłacona w terminie kończą się decyzją o rozbiórce (art. 48a ust. 2, art. 49e pkt 2 i 5 Pb).',
      'Organ wydaje decyzję o legalizacji: w trybie zwykłym po uiszczeniu opłaty, w uproszczonym, gdy dokumenty są kompletne, a z ekspertyzy wynika, że budynek nie stwarza zagrożenia i pozwala na bezpieczne użytkowanie (art. 49 ust. 4, art. 49i ust. 1 pkt 1 Pb).',
    ],
    faq: [
      {
        q: 'Czy samowola budowlana się przedawnia?',
        a: 'Nie w tym sensie, że budynek po latach sam staje się legalny. Po 20 latach od zakończenia budowy nadzór prowadzi uproszczone postępowanie, zakończone decyzją o legalizacji albo nakazem rozbiórki (art. 49f ust. 1, art. 49i ust. 1 Pb).',
      },
      {
        q: 'Legalizacja po 10 czy po 20 latach: co mnie dotyczy?',
        a: 'Dom, garaż, rozbudowa albo nadbudowa bez pozwolenia lub zgłoszenia to budowa, więc liczy się 20 lat od jej zakończenia (art. 3 pkt 6, art. 49f ust. 1 Pb). 10 lat dotyczy robót z art. 50 Pb, np. przebudowy bez pozwolenia albo istotnego odstąpienia od projektu (art. 50 ust. 6 Pb).',
      },
      {
        q: 'Ile kosztuje legalizacja domu, garażu albo budynku gospodarczego?',
        a: 'Za dom jednorodzinny 50 000 zł: 500 zł × 50 × współczynnik kategorii 2,0 × współczynnik wielkości 1,0 (art. 49d ust. 1 pkt 1, art. 59f Pb i załącznik). Budynek gospodarczy albo garaż do dwóch stanowisk, który wymagał pozwolenia (kategoria III): 25 000 zł. Wolno stojący garaż, wiata albo parterowy budynek gospodarczy do 35 m² na zgłoszenie: 5000 zł (art. 49d ust. 1 pkt 2 lit. a Pb). W trybie uproszczonym opłaty nie ma; cenę mojej pracy podaję w ofercie.',
      },
      {
        q: 'Czy opłatę legalizacyjną można rozłożyć na raty?',
        a: 'Możesz o to wnioskować: wniosek o raty albo odroczenie rozpatruje wojewoda według Ordynacji podatkowej (art. 49c ust. 1 Pb). Do jego rozstrzygnięcia postępowanie jest zawieszone, a po przyznaniu rat albo odroczenia do terminu zapłaty całej opłaty (art. 49c ust. 2 Pb).',
      },
      {
        q: 'Czy samowola budowlana jest przestępstwem albo wykroczeniem?',
        a: 'Za budowę bez pozwolenia albo zgłoszenia Prawo budowlane przewiduje karę grzywny, nie karę pozbawienia wolności (art. 93 pkt 2a i 13 Pb). Orzeka się ją według Kodeksu postępowania w sprawach o wykroczenia (art. 94 Pb).',
      },
      {
        q: 'Kupiłem dom z samowolą. Czy problem przeszedł na mnie?',
        a: 'Tak, gdy roboty są zakończone, obowiązki z postępowania nakłada się na właściciela, a koszty ponosi inwestor, właściciel lub zarządca (art. 52 ust. 1 i 2 Pb). Wniosek o legalizację złożysz w 30 dni od dnia, w którym doręczono Ci postanowienie o wstrzymaniu budowy (art. 48a ust. 1 Pb). Jeżeli budowę zakończono co najmniej 20 lat temu, możesz zażądać legalizacji uproszczonej (art. 53a ust. 2 Pb).',
      },
    ],
    law: {
      asOf: '2026-10-26',
      items: [
        {
          ref: 'art. 3 pkt 6, art. 29 ust. 1 pkt 14, art. 48–53a, art. 83 Pb',
          act: 'Prawo budowlane',
          tj: 'Dz.U. 2026 poz. 524',
          eli: 'DU/1994/414',
          note: 'legalizacja zwykła i uproszczona, żądanie wszczęcia, próg 10 lat, rozbiórka, kto odpowiada, właściwy organ',
        },
        {
          ref: 'art. 59f i załącznik, art. 93, 94 i 103 ust. 2 Pb',
          act: 'Prawo budowlane',
          tj: 'Dz.U. 2026 poz. 524',
          eli: 'DU/1994/414',
          note: 'wzór i współczynniki opłaty legalizacyjnej, kara grzywny, budynki ukończone przed 1.01.1995',
        },
      ],
    },
    docs: [
      'Dowody daty zakończenia budowy: zdjęcia, faktury, umowy z wykonawcą, stare mapy (jeśli masz)',
      'Pismo albo postanowienie z nadzoru budowlanego z datą doręczenia',
      'Numer księgi wieczystej albo inny dokument prawa do działki',
      'Projekt, pozwolenie albo zgłoszenie, jeśli były',
      'Przy sprzedaży albo zakupie: projekt umowy i termin aktu notarialnego, jeśli już jest',
    ],
    guides: [],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'obsluga-sprzedazy'],
    cta: {
      heading: 'Samowola nie zniknie sama. Ale można ją uporządkować.',
      lead: 'Napisz, co i kiedy zbudowano oraz czy przyszło pismo z PINB. W 24 h roboczych bezpłatnie wskażę, co zrobić najpierw, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-26',
  },

  'spory-z-wykonawca': {
    h1: 'Spory z wykonawcą',
    h1Full: 'Spory z wykonawcą: zszedł z budowy, wziął zaliczkę albo zostawił wady',
    topic: 'Spór z wykonawcą',
    metaDesc: 'Wykonawca zszedł z budowy? Jeżeli nie jest prawdopodobne, że skończy w terminie, możesz odstąpić od umowy bez terminu dodatkowego (art. 635 k.c.).',
    subtitle: 'Wykonawca zszedł z budowy, wziął zaliczkę albo zostawił wady i nie odbiera telefonu. Jeżeli przez opóźnienie nie jest prawdopodobne, że wykonawca skończy w terminie, możesz odstąpić od umowy bez terminu dodatkowego (art. 635 k.c.). Piszę wezwanie i oświadczenie o odstąpieniu, liczę kary umowne i dochodzę zwrotu pieniędzy, także w sądzie.',
    short: {
      q: 'Wykonawca zszedł z budowy – co mogę zrobić?',
      a: 'Możesz odstąpić od umowy bez terminu dodatkowego, jeszcze przed terminem z umowy (art. 635 k.c.). Warunek: wykonawca opóźnia się tak, że nie jest prawdopodobne, by skończył w umówionym czasie. Po odstąpieniu żądasz zwrotu tego, co świadczyłeś, i naprawienia szkody (art. 494 § 1 k.c.).',
      facts: [
        [
          'Wykonawca opóźnia się i nie zdąży',
          'Odstąpienie bez terminu dodatkowego, przed terminem z umowy (art. 635 w zw. z art. 656 § 1 k.c.)',
        ],
        [
          'Roboty wadliwe albo niezgodne z umową',
          'Wezwanie z terminem, potem odstąpienie albo inna firma na koszt wykonawcy (art. 636 § 1 k.c.)',
        ],
        [
          'Kara za spóźnienie',
          'Tylko z umowy; należy się bez względu na wysokość szkody (art. 483 § 1, art. 484 § 1 k.c.)',
        ],
        [
          'Wady po odbiorze (rękojmia)',
          'Stwierdzenie wady w 2 lata od oddania, wady nieruchomości w 5 lat (art. 568 § 1 w zw. z art. 638 § 1 i art. 656 § 1 k.c.)',
        ],
        [
          'Żądanie usunięcia wady',
          'Rok od stwierdzenia wady; konsument nie krócej niż do końca terminu 2 albo 5 lat (art. 568 § 2 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Pozew do 20 000 zł: od 30 do 1000 zł według progów; ponad 20 000 zł: 5% wartości sporu, najwyżej 100 000 zł (art. 13 ust. 1–2 u.k.s.c., stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Na co możesz się powołać, gdy budowa albo remont stanęły',
    intro: 'W umowie o roboty budowlane wykonawca zobowiązuje się oddać obiekt wykonany zgodnie z projektem i zasadami wiedzy technicznej (art. 647 k.c.). Do jego opóźnienia, wadliwej roboty, rękojmi i odstąpienia przed ukończeniem obiektu stosuje się odpowiednio przepisy o umowie o dzieło (art. 656 § 1 k.c.). Przepisy o robotach budowlanych obejmują, także odpowiednio, remont budynku lub budowli (art. 658 k.c.). Wykonawca często liczy, że odpuścisz, bo nie chcesz wchodzić w konflikt. Zanim cokolwiek wyślesz, zbierz dowody: co ustaliliście, ile zapłaciłeś i w jakim stanie została budowa.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Ekipa zniknęła, termin minął albo robota jest do poprawki',
    when: [
      { b: 'Wady wyszły po odbiorze, a wykonawca nie odpisuje na reklamację.', t: 'Na żądanie usunięcia wady masz rok od jej stwierdzenia, a jako konsument co najmniej do końca terminu rękojmi (art. 568 § 2 k.c.).' },
      { b: 'Wykonawca zszedł z budowy w połowie i nie mówi, kiedy wróci.', t: 'Odstąpić możesz jeszcze przed terminem z umowy, jeżeli nie jest prawdopodobne, że wykonawca zdąży (art. 635 k.c.).' },
      {
        b: 'Termin z umowy minął, a ekipy dalej nie ma na budowie.',
        t: 'Przy zwłoce (spóźnieniu, za które wykonawca odpowiada) wyznaczasz mu odpowiedni termin dodatkowy z zagrożeniem odstąpienia od umowy (art. 476, art. 491 § 1 k.c.).',
      },
      { b: 'Wziął zaliczkę na materiały i od tygodni nic nie robi.', t: 'Po odstąpieniu od umowy wykonawca zwraca to, co od Ciebie otrzymał (art. 494 § 1 k.c.).' },
      { b: 'Ekipa pracuje, ale niezgodnie z projektem albo byle jak.', t: 'Najpierw wezwanie do zmiany sposobu wykonania z terminem (art. 636 § 1 k.c.).' },
      { b: 'Wykonawca chce reszty pieniędzy za niedokończoną albo wadliwą robotę.', t: 'Przy wadzie obniżasz mu wynagrodzenie, chyba że niezwłocznie ją usunie (art. 560 § 1 w zw. z art. 638 § 1 k.c.).' },
    ],
    doForTitle: 'Co przygotowuję i co wysyłam wykonawcy',
    doFor: [
      'Z umowy, SMS-ów i przelewów ustalam, czy odstępujemy, wzywamy do poprawek, czy żądamy usunięcia wad z rękojmi.',
      'Piszę wezwanie z terminem: do wznowienia prac, do zmiany sposobu wykonania albo do usunięcia wad.',
      'Liczę kary umowne według umowy i potrącam je z wymagalnym wynagrodzeniem, którego żąda wykonawca.',
      'Rozliczam wpłacone zaliczki i kupione materiały, zanim wyślemy wykonawcy oświadczenie o odstąpieniu.',
      'Organizuję opinię rzeczoznawcy o stanie i wadach robót.',
      'Bronię Cię, gdy to wykonawca pozywa o zapłatę za sporne prace.',
    ],
    stepsHeading: 'Od wezwania do pozwu: kolejność, w której działam',
    steps: [
      'Opisujesz w formularzu, co miało być zrobione, do kiedy i ile zapłaciłeś.',
      'W 24 h roboczych odpisuję, który z kolejnych kroków jest potrzebny w Twoim sporze z wykonawcą, i wysyłam ofertę z ceną i terminem. Za nic nie płacisz, dopóki jej nie przyjmiesz.',
      'Wysyłam wykonawcy wezwanie z terminem: dokończenie albo poprawienie prac, zwrot zaliczki, zapłata kar.',
      'Przed wejściem innej firmy utrwalamy stan budowy, a gdy dowód może przepaść albo trzeba stwierdzić istniejący stan rzeczy, wnoszę o jego zabezpieczenie przed procesem (art. 310 k.p.c.).',
      'Odstąpienie od umowy wysyłam po Twojej decyzji. To krok nieodwracalny: odwołanie działa tylko, gdy dojdzie do wykonawcy najpóźniej razem z oświadczeniem (art. 61 § 1 k.c.).',
      'Gdy wykonawca nie oddaje pieniędzy, składam pozew o zwrot zaliczki i naprawienie szkody po odstąpieniu (art. 494 § 1 k.c.) albo o koszt poprawek zleconych innej firmie (art. 636 § 1 k.c.).',
    ],
    faq: [
      {
        q: 'Jak odzyskać pieniądze od nieuczciwego wykonawcy?',
        a: 'Przez wezwanie do wykonania prac z terminem, odstąpienie od umowy, a gdy wykonawca dalej nie płaci, pozew o zwrot zaliczki. Po odstąpieniu wykonawca musi zwrócić wszystko, co od Ciebie otrzymał (art. 494 § 1 k.c.). Zanim odstąpisz, zrób zdjęcia budowy z datą i zbierz potwierdzenia przelewów.',
      },
      {
        q: 'Nieuczciwy wykonawca bez umowy – co mogę zrobić?',
        a: 'To samo co przy umowie na piśmie, bo umowa ustna jest ważna (art. 73 § 1, art. 648 § 1 k.c.). SMS-y, maile i potwierdzenia przelewów są dokumentami (art. 77³ k.c.). Świadków sąd dopuści, jeżeli te dokumenty uprawdopodobniają umowę albo jesteś konsumentem w sporze z firmą (art. 74 § 2 k.c.).',
      },
      {
        q: 'Nieuczciwy wykonawca – kiedy to oszustwo, a kiedy spór o umowę?',
        a: 'Oszustwo wchodzi w grę, gdy wykonawca w celu osiągnięcia korzyści majątkowej wprowadził Cię w błąd i tak doprowadził do niekorzystnej wpłaty (art. 286 § 1 k.k.). Bez takiego zamiaru spóźnienie, wady albo porzucenie budowy to niewykonanie lub nienależyte wykonanie umowy (art. 471 k.c.). W obu przypadkach pieniędzy dochodzisz pozwem w sądzie cywilnym (art. 2 § 1 k.p.c.).',
      },
      {
        q: 'Wady budowlane po odbiorze – ile mam czasu?',
        a: 'Na stwierdzenie wady masz 2 lata od oddania obiektu, a przy wadach nieruchomości 5 lat (art. 568 § 1 w zw. z art. 638 § 1 k.c.). Od stwierdzenia wady masz rok na żądanie usunięcia albo obniżenie wynagrodzenia, a konsument co najmniej do końca tych 2 albo 5 lat (art. 568 § 2–3 k.c.).',
      },
      {
        q: 'Czy mogę dokończyć budowę z inną firmą na koszt pierwszego wykonawcy?',
        a: 'Tak, jeżeli wykonawca prowadzi roboty wadliwie albo niezgodnie z umową i nie poprawił się w wyznaczonym terminie (art. 636 § 1 k.c.). Przy zwłoce możesz też żądać, by sąd upoważnił Cię do wykonania prac na jego koszt, a w wypadkach nagłych zrobić to bez upoważnienia (art. 480 § 1 i 3 k.c.).',
      },
      {
        q: 'Wykonawca żąda zapłaty za wadliwą robotę – muszę płacić całość?',
        a: 'Nie zawsze. Przy wadzie obniżasz wynagrodzenie proporcjonalnie do tego, o ile wada zmniejsza wartość robót (art. 560 § 3 w zw. z art. 638 § 1 k.c.). Wymagalne kary umowne możesz potrącić z wymagalnym wynagrodzeniem wykonawcy (art. 498 § 1 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 635, art. 636 § 1, art. 647, art. 648 § 1, art. 656 § 1, art. 658',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Umowa o roboty budowlane i remont, forma umowy, odstąpienie przy opóźnieniu wykonawcy, poprawki innej firmy na koszt wykonawcy.',
        },
        {
          ref: 'art. 560, art. 561 § 1, art. 568, art. 638 § 1',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Rękojmia za wady: usunięcie wady, obniżenie wynagrodzenia, terminy.',
        },
        {
          ref: 'art. 61 § 1, art. 73 § 1, art. 74, art. 77³, art. 471, art. 476, art. 480, art. 483–484, art. 491 § 1, art. 494 § 1, art. 498 § 1',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Dowód bez pisma, odszkodowanie, zwłoka i termin dodatkowy, wykonanie zastępcze, kara umowna, skutki i nieodwołalność odstąpienia, potrącenie.',
        },
        {
          ref: 'art. 2 § 1, art. 310',
          act: 'Ustawa z dnia 17 listopada 1964 r. – Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468 ze zm.',
          eli: 'DU/1964/296',
          note: 'Sąd cywilny w sporze z wykonawcą, zabezpieczenie dowodu przed procesem.',
        },
        {
          ref: 'art. 13 ust. 1–2',
          act: 'Ustawa z dnia 28 lipca 2005 r. o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228 ze zm. (Dz.U. 2025 poz. 1157)',
          eli: 'DU/2005/1398',
          note: 'Opłata od pozwu o zapłatę.',
        },
        { ref: 'art. 286 § 1', act: 'Ustawa z dnia 6 czerwca 1997 r. – Kodeks karny', tj: 'Dz.U. 2025 poz. 383 ze zm.', eli: 'DU/1997/553', note: 'Oszustwo.' },
      ],
    },
    docs: [
      'Umowę z wykonawcą z aneksami i kosztorysem albo SMS-y i maile z ustaleniami.',
      'Potwierdzenia przelewów: zaliczki, etapy, materiały.',
      'Zdjęcia stanu budowy z datą, zwłaszcza z dnia, w którym ekipa przestała przychodzić.',
      'Protokoły odbioru częściowego lub końcowego i zgłoszenia wad, jeśli są.',
      'Wezwanie do zapłaty albo faktury od wykonawcy, jeśli je dostałeś.',
    ],
    guides: ['umowa-o-roboty-budowlane'],
    seeAlso: ['usuniecie-wad-protokol', 'obsluga-prawna-firm-budowlanych'],
    cta: {
      heading: 'Niedokończona budowa albo fuszerka to nie musi być Twój koszt.',
      lead: 'Napisz, na jakim etapie stanęła budowa, ile zapłaciłeś i czy wykonawca dostał już wezwanie. W 24 h roboczych bezpłatnie odpiszę, czy zaczynamy od wezwania, odstąpienia czy pozwu, a w ofercie podam cenę i termin; płacisz dopiero, gdy ją przyjmiesz.',
    },
    updated: '2026-10-10',
  },

  'umowa-o-roboty-budowlane': {
    metaDesc: 'Umowa o roboty budowlane powinna być na piśmie, a karę za opóźnienie dostaniesz tylko, gdy ją wpiszesz. Sprawdzam albo piszę umowę przed podpisem.',
    h1: 'Umowa o roboty budowlane',
    h1Full: 'Umowa o roboty budowlane: kary, terminy, odbiory i zabezpieczenie zapłaty',
    topic: 'Umowa o roboty budowlane',
    subtitle: 'Firma budowlana dała Ci swoją umowę do podpisu i nie wiesz, czy chroni Cię przed opóźnieniem i fuszerką? Kara za opóźnienie wykonawcy należy się tylko wtedy, gdy zastrzega ją umowa (art. 483 § 1 k.c.). Jako adwokat sprawdzam projekt umowy o roboty budowlane albo piszę ją od zera, zanim ją podpiszesz.',
    short: {
      q: 'Co powinna zawierać umowa z firmą budowlaną na budowę domu?',
      a: 'Zakres robót z projektem, daty etapów i oddania, płatności po odbiorach, kary umowne, zasady usuwania wad i zgłaszania podwykonawców. Jeżeli umowa nie stanowi inaczej, na żądanie wykonawcy odbierasz roboty częściowo i płacisz za nie odpowiednią część wynagrodzenia (art. 654 k.c.).',
      facts: [
        [
          'Forma',
          'Pisemna; umowa zawarta ustnie nie jest przez to nieważna (art. 648 § 1, art. 73 § 1 k.c.)',
        ],
        [
          'Kara umowna',
          'Tylko gdy zastrzega ją umowa i tylko za obowiązek niepieniężny, np. oddanie obiektu w terminie (art. 483 § 1 k.c.)',
        ],
        [
          'Podwykonawcy',
          'Jeżeli roboty podwykonawcy zgłoszono Ci na piśmie przed ich rozpoczęciem, odpowiadasz solidarnie za jego wynagrodzenie. Zwalnia Cię pisemny sprzeciw do niego i wykonawcy w 30 dni od doręczenia zgłoszenia lub krótszym terminie z umowy (art. 647¹ § 1, § 1¹, § 4 k.c.)',
        ],
        [
          'Gwarancja zapłaty',
          'Wykonawca może jej żądać w każdym czasie; przy umowie zawieranej dziś Kodeks wyłącza tylko inwestora, którym jest Skarb Państwa (art. 649¹ § 1¹, art. 649³ § 1 k.c.)',
        ],
      ],
    },
    introHeading: 'Umowa z firmą budowlaną: co daje ustawa, a co musisz wpisać sam',
    intro: 'Kodeks dzieli obowiązki stron tej umowy (art. 647 k.c.). Wykonawca ma oddać obiekt opisany w umowie, wykonany według projektu i zasad wiedzy technicznej. Ty jako inwestor przekazujesz teren budowy i projekt, potem odbierasz obiekt i płacisz wynagrodzenie. Kodeks nie ustali za Ciebie daty oddania, kar ani zasad zaliczki. W umowach, które inwestorzy dostają od wykonawców, najczęściej brakuje kar umownych, dat etapów i zabezpieczenia na usterki.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Podpisujesz umowę o budowę lub remont jako inwestor albo wykonawca',
    when: [
      {
        b: 'Wykonawca czeka na podpis i chce zaliczki przed wejściem na budowę.',
        t: 'Kodeks wiąże zapłatę z odbiorem robót, także częściowym (art. 647, art. 654 k.c.). Przepisy o tej umowie zaliczki nie przewidują, więc jej zasady ustalasz w umowie (art. 353¹ k.c.).',
      },
      {
        b: 'W umowie od firmy nie ma kar za spóźnienie, są za to kary dla Ciebie.',
        t: 'Kary za spóźnioną zapłatę zastrzec nie można, bo zapłata to świadczenie pieniężne (art. 483 § 1 k.c.); wykonawcy należą się wtedy odsetki (art. 481 § 1 k.c.). Kara za Twoje obowiązki niepieniężne, np. przekazanie terenu budowy albo odbiór, jest dopuszczalna (art. 647 k.c.).',
      },
      { b: 'Remontujesz dom i nie wiesz, czy to umowa o roboty budowlane.', t: 'Do umowy o remont budynku lub budowli stosuje się odpowiednio te same przepisy (art. 658 k.c.).' },
      { b: 'Jesteś wykonawcą, a inwestor nie chce słyszeć o zabezpieczeniu zapłaty.', t: 'Prawa do żądania gwarancji zapłaty umowa nie wyłączy ani nie ograniczy (art. 649² § 1 k.c.).' },
    ],
    doForTitle: 'Co sprawdzam i co dopisuję w umowie z wykonawcą',
    doFor: [
      'Wpisuję kary za opóźnienie w oddaniu etapów i obiektu oraz w usunięciu wad, z kwotą za dzień i limitem. Dopisuję prawo do odszkodowania ponad karę.',
      'Wiążę płatności z odbiorami częściowymi, zostawiam część wynagrodzenia na usterki (kaucja, kwota zatrzymana albo gwarancja bankowa) i opisuję warunki zwrotu zaliczki.',
      'Ustalam protokół odbioru, zgłaszanie wad oraz pisemne zgłaszanie podwykonawców z dowodem zapłaty im przed kolejną płatnością dla wykonawcy.',
      'Ustalam ryczałt albo kosztorys i pisemne zlecanie robót dodatkowych z ceną. Wykonawcy przygotowuję harmonogram płatności i żądanie gwarancji zapłaty.',
    ],
    lists: [
      {
        eyebrow: 'Porównanie',
        title: 'Budowa domu: roboty budowlane czy dzieło – czym się różnią te umowy',
        kind: 'check',
        items: [
          {
            b: 'Która to umowa',
            t: 'liczy się zgodny zamiar stron i cel umowy, a nie samo jej brzmienie, np. tytuł (art. 65 § 2 k.c.). Przy robotach budowlanych wykonawca oddaje obiekt wykonany zgodnie z projektem (art. 647 k.c.), przy dziele wykonuje oznaczone dzieło (art. 627 k.c.).',
          },
          { b: 'Przedawnienie', t: 'roboty budowlane: zasady ogólne (art. 118 k.c.); dzieło: 2 lata od oddania (art. 646 k.c.).' },
          { b: 'Podwykonawcy i gwarancja zapłaty', t: 'przepisy tylko przy robotach budowlanych (art. 647¹, art. 649¹–649⁵ k.c.).' },
        ],
      },
    ],
    stepsHeading: 'Jak przygotowujemy umowę z wykonawcą przed podpisem',
    steps: [
      'Przesyłasz projekt umowy albo ofertę wykonawcy i piszesz, na kiedy jest podpis i ile wynosi zaliczka.',
      'W 24 h roboczych odpisuję, czy wystarczą poprawki do projektu wykonawcy, czy potrzebna jest nowa umowa. W tej samej odpowiedzi dostajesz ofertę.',
      'Po akceptacji odsyłam umowę z poprawkami i komentarzem. Jeżeli wykonawca je odrzuca, wskazuję te, bez których zostajesz bez kar albo zwrotu zaliczki.',
      'Podpis i przelew zaliczki robisz dopiero na wersji ostatecznej, bo od podpisu wiąże Cię treść umowy.',
    ],
    faq: [
      {
        q: 'Jakie kary umowne wpisać w umowie z firmą budowlaną?',
        a: 'Za opóźnienie w oddaniu obiektu i etapów oraz w usunięciu wad, jako kwotę za dzień z górnym limitem. Kara należy się bez względu na wysokość szkody (art. 484 § 1 k.c.). Odszkodowania ponad karę możesz żądać tylko wtedy, gdy umowa na to pozwala. Rażąco wygórowanej kary wykonawca może żądać zmniejszenia (art. 484 § 2 k.c.).',
      },
      {
        q: 'Kiedy przedawniają się roszczenia z umowy o roboty budowlane?',
        a: 'Co do zasady po 6 latach (art. 118 k.c.). Roszczenie związane z działalnością gospodarczą, np. firmy o wynagrodzenie, przedawnia się po 3 latach. Termin kończy się ostatniego dnia roku kalendarzowego. Dwa lata od oddania (art. 646 k.c.) dotyczą umowy o dzieło. Art. 656 § 1 k.c. nie odsyła do tego przepisu.',
      },
      {
        q: 'Czy umowa o roboty budowlane musi być na piśmie?',
        a: 'Powinna (art. 648 § 1 k.c.), ale umowa zawarta ustnie nie jest przez to nieważna (art. 73 § 1 k.c.). Pismo porządkuje zakres robót, bo wymagana przepisami dokumentacja jest częścią umowy (art. 648 § 2 k.c.). W razie wątpliwości przyjmuje się, że wykonawca podjął się wszystkich robót z projektu (art. 649 k.c.).',
      },
      {
        q: 'Jak zabezpieczyć zaliczkę dla wykonawcy?',
        a: 'Wpisz do umowy kwotę zaliczki, jej cel, datę wejścia na budowę i termin zwrotu, jeżeli roboty nie ruszą. Jeżeli zaliczka to dla Ciebie duża kwota, wpisz też, że wypłacasz ją po otrzymaniu gwarancji bankowej lub ubezpieczeniowej jej zwrotu. Bez takiego zapisu nie możesz jej żądać: Kodeks daje prawo żądania gwarancji tylko wykonawcy (art. 649³ § 1 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 647, art. 647¹ § 1, § 1¹ i § 4, art. 648, art. 649, art. 649¹ § 1¹, art. 649², art. 649³ § 1, art. 654, art. 656 § 1, art. 658',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Umowa o roboty budowlane: definicja, podwykonawcy, forma, zakres robót, gwarancja zapłaty, odbiory częściowe, odesłanie do przepisów o dziele, remont.',
        },
        { ref: 'art. 627, art. 646', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Umowa o dzieło: definicja i przedawnienie roszczeń.' },
        {
          ref: 'art. 65 § 2, art. 73 § 1, art. 118, art. 353¹, art. 455, art. 481 § 1, art. 483 § 1, art. 484',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Wykładnia umowy, forma, przedawnienie, swoboda umów, termin świadczenia, odsetki, kara umowna.',
        },
      ],
    },
    docs: [
      'Projekt umowy albo ofertę wykonawcy z kosztorysem.',
      'Planowane daty rozpoczęcia, etapów i oddania (wystarczy opis w formularzu).',
      'Projekt budowlany albo opis robót, jeśli masz.',
      'Kwotę zaliczki i harmonogram płatności, jeśli masz.',
    ],
    guides: ['umowa-o-roboty-budowlane'],
    seeAlso: ['obsluga-prawna-firm-budowlanych', 'obsluga-prawna-architektow'],
    cta: {
      heading: 'Dobra umowa to Twoja polisa na czas budowy.',
      lead: 'Prześlij projekt umowy z firmą budowlaną albo jej ofertę. W 24 h roboczych odpiszę, którą drogę proponuję, i dołączę ofertę z ceną i terminem. Do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'nadzor-budowlany-pinb': {
    h1: 'Reprezentacja przed nadzorem budowlanym (PINB)',
    h1Full: 'Reprezentacja przed nadzorem budowlanym (PINB): kontrola, nakaz rozbiórki, odwołanie',
    topic: 'Nadzór budowlany',
    metaDesc: 'Kontrolę prowadzi PINB: może wejść na budowę i do budynku, a protokół jest podstawą decyzji. Odwołanie do WINB wnosisz przez PINB w 14 dni od doręczenia.',
    subtitle: 'Inspektor zapowiedział kontrolę, przyszedł po skardze sąsiada albo masz już pismo z PINB? Kontrolę prowadzi powiatowy inspektor nadzoru budowlanego (PINB), który może wejść na budowę i do budynku (art. 81a ust. 1 Pb). Ustalenia z protokołu są podstawą decyzji, więc reprezentuję Cię już od kontroli, a potem w odwołaniu i przed sądem administracyjnym (art. 81 ust. 4 Pb).',
    short: {
      q: 'Jak przebiega kontrola nadzoru budowlanego i co może z niej wyniknąć?',
      a: 'Inspektor wchodzi na budowę lub do budynku, żąda dokumentów i spisuje protokół, który jest podstawą decyzji (art. 81 ust. 4, art. 81a ust. 1, art. 81c ust. 1 Pb). Budowę bez pozwolenia albo zgłoszenia wstrzymuje, a Ty masz 30 dni od doręczenia postanowienia na wniosek o legalizację (art. 48 ust. 1, art. 48a ust. 1 Pb). Przy istotnym odstąpieniu od projektu wstrzymuje roboty i w ciągu 2 miesięcy nakazuje m.in. naprawę, projekt zamienny albo rozbiórkę (art. 50 ust. 1 pkt 4, art. 51 ust. 1 Pb).',
      facts: [
        [
          'Kto prowadzi sprawę',
          'Powiatowy inspektor nadzoru budowlanego (PINB), w drugiej instancji wojewódzki (WINB) (art. 83 ust. 1 i 2 Pb)',
        ],
        [
          'Wejście na kontrolę',
          'Do budynku i na teren budowy; w mieszkaniu przy pełnoletnim domowniku i przedstawicielu administracji lub zarządcy budynku (art. 81a ust. 1 i 2 Pb)',
        ],
        [
          'Budowa bez pozwolenia lub zgłoszenia',
          'Bez wniosku o legalizację złożonego w 30 dni PINB wydaje decyzję o rozbiórce (art. 48a ust. 1, art. 49e pkt 1 Pb)',
        ],
        [
          'Terminy od doręczenia',
          'Zażalenie na postanowienie 7 dni, odwołanie do WINB 14 dni, skarga do WSA 30 dni (art. 141 § 2, art. 129 § 2 k.p.a., art. 53 § 1 p.p.s.a.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Wpis od skargi do WSA: 500 zł na decyzję w sprawie budowlanej, 100 zł na postanowienie (§ 2 ust. 3 pkt 1 i ust. 1 pkt 1 rozporządzenia w sprawie wpisu)',
        ],
      ],
    },
    introHeading: 'Co inspektor może zrobić z Twoją budową albo budynkiem',
    intro: 'Organami nadzoru budowlanego są m.in. powiatowy inspektor (PINB) i wojewoda z wojewódzkim inspektorem (WINB) (art. 80 ust. 2 Pb). PINB kontroluje nie tylko budowy i roboty, ale też bezpieczeństwo przy utrzymywaniu istniejących budynków (art. 81 ust. 1 pkt 1 lit. b Pb). Postępowania w sprawie robót prowadzonych z naruszeniem ustawy, w tym samowoli (budowy bez pozwolenia albo zgłoszenia), wszczyna z urzędu (art. 53a ust. 1 Pb). Obowiązki z postanowień i decyzji nakłada na inwestora, a po zakończeniu robót na właściciela lub zarządcę (art. 52 ust. 1 Pb). Nie obiecuję wyniku.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pismo z PINB, wstrzymane roboty albo skarga sąsiada',
    when: [
      {
        b: 'Inspektor wstrzymał roboty, a ekipa stoi i czeka.',
        t: 'Zażalenie nie wstrzymuje wykonania postanowienia (art. 143 k.p.a.). W postanowieniu PINB może zażądać w 30 dni od doręczenia inwentaryzacji robót, ocen technicznych albo ekspertyz (art. 50 ust. 3 Pb).',
      },
      {
        b: 'Sąsiad złożył skargę i nagle zapowiedziano kontrolę.',
        t: 'O wyniku decydują ustalenia inspektora z protokołu, nie treść skargi (art. 81 ust. 4 Pb). Przed decyzją możesz wypowiedzieć się co do zebranych dowodów (art. 10 § 1 k.p.a.).',
      },
      {
        b: 'Projektant uznał zmianę za nieistotną, a inspektor twierdzi inaczej.',
        t: 'Progi są w ustawie, m.in. powierzchnia zabudowy ponad 5%, wysokość, długość lub szerokość ponad 2% i liczba kondygnacji (art. 36a ust. 5 pkt 2 Pb). Przy istotnym odstąpieniu PINB nakłada obowiązek sporządzenia projektu zamiennego (art. 51 ust. 1 pkt 3 Pb).',
      },
      {
        b: 'Mieszkasz w domu bez zawiadomienia o zakończeniu budowy.',
        t: 'PINB poucza, a po 60 dniach od doręczenia pouczenia sprawdza. Jeśli nadal mieszkasz bez zawiadomienia, wymierza karę: dla domu jednorodzinnego 10 000 zł (art. 59i ust. 1, 3 i 4, art. 59f Pb, załącznik, kategoria I).',
      },
      {
        b: 'Wspólnota albo właściciel budynku dostał nakaz naprawy.',
        t: 'Gdy budynek jest w nieodpowiednim stanie technicznym albo zagraża życiu, zdrowiu, mieniu lub środowisku, PINB nakazuje decyzją usunięcie nieprawidłowości i wyznacza termin (art. 66 ust. 1 Pb).',
      },
    ],
    doForTitle: 'Kontrola, zażalenie, odwołanie do WINB: co przygotowuję',
    doFor: [
      'Ustalam, na którym przepisie opiera się PINB (art. 48, art. 50–51 albo art. 66 Pb); od tego zależą terminy i to, czy jest droga legalizacji albo projektu zamiennego.',
      'Jestem przy kontroli jako Twój pełnomocnik (art. 32 k.p.a., art. 81a ust. 2 Pb) i pilnuję, żeby Twoje uwagi trafiły do protokołu.',
      'Kompletuję dokumenty dla organu i pilnuję terminu na oceny techniczne lub ekspertyzy, jeżeli PINB nałoży taki obowiązek; ich koszt ponosisz Ty (art. 81c ust. 2 Pb).',
      'Składam zażalenia i odwołania do WINB z zarzutami do ustaleń i do kwalifikacji naruszenia, a przy rygorze natychmiastowej wykonalności wniosek o wstrzymanie wykonania (art. 135 k.p.a.).',
      'Wnoszę skargę do WSA, a gdy grozi znaczna szkoda albo trudne do odwrócenia skutki, także wniosek o wstrzymanie wykonania decyzji (art. 61 § 3 p.p.s.a.).',
    ],
    lists: [
      {
        eyebrow: 'Terminy',
        title: 'Pismo z PINB: ile masz czasu i co się stanie po terminie',
        kind: 'check',
        items: [
          {
            b: 'Postanowienie o wstrzymaniu robót (art. 50 Pb)',
            t: 'zażalenie w 7 dni (art. 50 ust. 5 Pb, art. 141 § 2 k.p.a.). Postanowienie traci ważność po 2 miesiącach od doręczenia, jeżeli PINB nie wyda w tym czasie decyzji (art. 50 ust. 4 Pb).',
          },
          {
            b: 'Decyzja naprawcza albo nakaz rozbiórki (art. 51 Pb)',
            t: 'odwołanie do WINB w 14 dni (art. 129 § 2 k.p.a.). Jeżeli nie wykonasz obowiązku w terminie z decyzji, PINB nakazuje zaniechanie dalszych robót, rozbiórkę albo przywrócenie stanu poprzedniego (art. 51 ust. 3 pkt 2 i ust. 5 Pb).',
          },
          { b: 'Zakaz użytkowania (art. 66 Pb)', t: 'odwołanie w 14 dni, ale gdy budynek zagraża ludziom, mieniu lub środowisku, zakaz podlega natychmiastowemu wykonaniu i może być ogłoszony ustnie (art. 66 ust. 2 Pb).' },
        ],
      },
    ],
    stepsHeading: 'Jak prowadzę sprawę od kontroli do sądu administracyjnego',
    steps: [
      'Wysyłasz w formularzu zdjęcie pisma z PINB z datą doręczenia albo zawiadomienie o kontroli. W 24 h roboczych odpisuję, które pismo wchodzi w grę (np. zażalenie, odwołanie, wniosek o legalizację). To bezpłatna wstępna analiza, a nie opinia prawna ani pełne sprawdzenie dokumentów. Ofertę z ceną i terminem dołączam do tej samej odpowiedzi; płacisz dopiero po jej akceptacji.',
      'Akta. Jako pełnomocnik przeglądam akta sprawy w PINB i robię z nich kopie, zanim złożysz wyjaśnienia (art. 73 § 1 k.p.a.).',
      'Stanowisko przed decyzją. Składam wyjaśnienia i dokumenty. Krok nieodwracalny: wznowienie robót mimo wstrzymania. Przy samowoli kończy się decyzją o rozbiórce (art. 49e pkt 6 Pb), a przy wstrzymaniu z art. 50 Pb nakazem rozbiórki części wykonanej po doręczeniu postanowienia albo przywrócenia stanu poprzedniego (art. 50a pkt 2 Pb).',
      'Odwołanie do WINB. Wskazuję w nim błędne ustalenia faktów i dowody, które PINB pominął.',
      'Sąd administracyjny. Jeżeli WINB utrzyma decyzję, wnoszę skargę do WSA w 30 dni od doręczenia (art. 53 § 1 p.p.s.a.).',
    ],
    faq: [
      {
        q: 'Czy nadzór budowlany może wejść do domu albo mieszkania?',
        a: 'Tak. Organ nadzoru albo osoba z jego upoważnienia ma prawo wstępu do obiektu budowlanego i na teren budowy (art. 81a ust. 1 Pb). W mieszkaniu kontrola odbywa się przy pełnoletnim domowniku i przedstawicielu administracji lub zarządcy budynku (art. 81a ust. 2 Pb). Za udaremnienie kontroli grozi grzywna, ograniczenie wolności albo pozbawienie wolności do roku (art. 91 ust. 1 pkt 1 Pb).',
      },
      {
        q: 'Kontrola nadzoru budowlanego na donos sąsiada – co mi grozi?',
        a: 'To samo co przy każdej kontroli, np. wstrzymanie robót, nakaz naprawy albo rozbiórki, ale tylko gdy inspektor stwierdzi naruszenie. Postępowanie o samowolę PINB prowadzi z urzędu i sam wyjaśnia stan faktyczny (art. 53a ust. 1 Pb, art. 7 k.p.a.). Sąsiad jest stroną tylko wtedy, gdy postępowanie dotyczy jego interesu prawnego (art. 28 k.p.a.).',
      },
      {
        q: 'Dostałem nakaz rozbiórki. Ile mam czasu i co dalej?',
        a: 'Na odwołanie do WINB masz 14 dni od doręczenia decyzji (art. 129 § 2 k.p.a.). Odwołanie złożone w terminie wstrzymuje wykonanie nakazu, chyba że decyzja podlega natychmiastowemu wykonaniu (art. 130 § 2 i 3 k.p.a.). Przy samowoli sprawdzam też, czy 20 lat od zakończenia budowy minęło przed jej wstrzymaniem. Wtedy wchodzi w grę legalizacja uproszczona (art. 49f ust. 1 i 5 Pb).',
      },
      {
        q: 'Jak napisać odwołanie od decyzji PINB i do kogo je złożyć?',
        a: 'Adresujesz je do WINB, ale składasz w PINB, który wydał decyzję, w 14 dni od doręczenia (art. 83 ust. 2 Pb, art. 129 § 1 i 2 k.p.a.). Szczegółowe uzasadnienie nie jest wymagane; wystarczy, że z pisma wynika niezadowolenie z decyzji (art. 128 k.p.a.).',
      },
      {
        q: 'Czy nadzór budowlany przyjeżdża na odbiór domu?',
        a: 'Co do zasady nie. Przy domu jednorodzinnym wystarcza zawiadomienie o zakończeniu budowy, jeżeli PINB w 14 dni nie zgłosi sprzeciwu (art. 54 ust. 1, art. 55 ust. 1 pkt 1 Pb). Obowiązkowa kontrola, na Twoje wezwanie, poprzedza pozwolenie na użytkowanie (art. 59 ust. 1, art. 59a ust. 1 Pb). Jest ono potrzebne np. wtedy, gdy chcesz zamieszkać przed wykonaniem wszystkich robót (art. 55 ust. 1 pkt 3 Pb).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 36a, 48, 48a, 49e, 49f, 50, 50a, 51, 52, 53a, 54, 55, 59, 59a, 59f, 59i, 66, 80, 81, 81a, 81c, 83, 91',
          act: 'Ustawa z dnia 7 lipca 1994 r. – Prawo budowlane',
          tj: 'Dz.U. 2026 poz. 524',
          eli: 'DU/1994/414',
          note: 'Kontrola, wstrzymanie budowy i robót, nakaz rozbiórki, decyzje naprawcze, nakazy przy złym stanie technicznym, zakończenie budowy i kara za nielegalne użytkowanie.',
        },
        {
          ref: 'art. 7, 10, 28, 32, 73, 128–130, 135, 141, 143',
          act: 'Kodeks postępowania administracyjnego',
          tj: 'Dz.U. 2025 poz. 1691',
          eli: 'DU/1960/168',
          note: 'Strona, pełnomocnik, wgląd w akta, wypowiedzenie się przed decyzją, odwołanie do WINB i zażalenie z terminami.',
        },
        { ref: 'art. 53, 61', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'Skarga do WSA w 30 dni i wstrzymanie wykonania decyzji.' },
        {
          ref: '§ 2 ust. 1 pkt 1 i ust. 3 pkt 1',
          act: 'Rozporządzenie Rady Ministrów z dnia 16 grudnia 2003 r. w sprawie wysokości oraz szczegółowych zasad pobierania wpisu w postępowaniu przed sądami administracyjnymi',
          tj: 'Dz.U. 2021 poz. 535',
          eli: 'DU/2003/2193',
          note: 'Wpis od skargi do WSA.',
        },
      ],
    },
    docs: [
      'Postanowienie lub decyzja PINB z kopertą albo potwierdzeniem doręczenia (od daty doręczenia liczą się terminy)',
      'Zawiadomienie o kontroli i protokół kontroli, jeśli je masz',
      'Pozwolenie na budowę albo zgłoszenie wraz z projektem budowlanym',
      'Dziennik budowy oraz rysunek i opis zmian od projektanta, jeśli odstąpiłeś od projektu',
      'Zdjęcia stanu robót albo budynku z datą wykonania',
      'Książka obiektu budowlanego i protokoły kontroli okresowych, jeśli sprawa dotyczy istniejącego budynku',
    ],
    guides: [],
    seeAlso: ['obsluga-prawna-zarzadcow', 'obsluga-prawna-wspolnot', 'wady-czesci-wspolnych'],
    cta: {
      heading: 'Pismo z nadzoru budowlanego? Nie czekaj na decyzję — działaj teraz.',
      lead: 'Prześlij pismo z PINB albo opisz zapowiedzianą kontrolę, a w 24 h roboczych bezpłatnie wskażę, czego wymaga Twoja sprawa przed nadzorem. Ofertę z ceną i terminem dostaniesz w tej samej wiadomości; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== BLOK 6 — Księgi wieczyste, stan prawny i użytkowanie wieczyste ===== */
  'zasiedzenie-nieruchomosci': {
    h1: 'Zasiedzenie nieruchomości',
    h1Full: 'Zasiedzenie nieruchomości: ile lat, jak udowodnić i jak się bronić',
    topic: 'Zasiedzenie nieruchomości',
    metaDesc: 'Zasiedzenie następuje po 20 latach posiadania w dobrej wierze albo po 30 latach w złej (art. 172 k.c.). Wpis w księdze wymaga postanowienia sądu.',
    subtitle: 'Od lat użytkujesz działkę, która w księdze wieczystej nie jest Twoja, albo ktoś zajmuje pas Twojego gruntu? Zasiedzenie nieruchomości następuje po 20 albo 30 latach samoistnego posiadania, zależnie od dobrej lub złej wiary przy jego objęciu (art. 172 k.c.). Prowadzę sprawy posiadaczy i właścicieli: napisz, od kiedy korzystasz z działki.',
    short: {
      q: 'Po ilu latach następuje zasiedzenie?',
      a: 'Po 20 latach, jeżeli posiadanie uzyskałeś w dobrej wierze, albo po 30 latach przy złej wierze (art. 172 k.c.). Do swoich lat doliczasz lata poprzednika, np. rodziców (art. 176 k.c.).',
      facts: [
        ['Dobra wiara', '20 lat posiadania samoistnego (art. 172 § 1 k.c.)'],
        ['Zła wiara', '30 lat (art. 172 § 2 k.c.)'],
        [
          'Lata poprzednika',
          'Doliczasz, także po spadkodawcy; przy złej wierze poprzednika razem co najmniej 30 lat (art. 176 k.c.)',
        ],
        ['Służebność, np. przejazd', 'Tylko przy trwałym i widocznym urządzeniu (art. 292 k.c.)'],
        [
          'Gdzie',
          'Sąd rejonowy położenia nieruchomości, na wniosek zainteresowanego (art. 507, art. 606 i art. 609 § 1 k.p.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '2000 zł od wniosku (art. 40 u.k.s.c.); przy służebności gruntowej 200 zł (art. 39 ust. 1 pkt 3 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Kiedy władanie cudzą działką zamienia się we własność',
    intro: 'Zasiedzenie to nabycie własności przez kogoś, kto nie jest właścicielem, ale nieprzerwanie włada nieruchomością jak właściciel (posiadacz samoistny, art. 336 k.c.), nawet bez umowy i aktu notarialnego. Najemca i dzierżawca, dopóki korzystają na podstawie umowy, są posiadaczami zależnymi i w ten sposób własności nie nabędą. Własność przechodzi z mocy prawa, ale do wpisu w księdze wieczystej potrzebujesz postanowienia sądu (art. 31 ust. 2 u.k.w.h.). Sąd stwierdza zasiedzenie, jeżeli zostało udowodnione (art. 610 § 2 k.p.c.), dlatego pracujemy na datach i dowodach.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Używasz cudzej działki od lat albo ktoś używa Twojej',
    when: [
      {
        b: 'Dostałeś odpis wniosku o stwierdzenie zasiedzenia Twojej działki',
        t: 'jesteś zainteresowanym w sprawie (art. 510 § 1 k.p.c.) i możesz wykazać, że posiadanie było zależne, np. z dzierżawy, przerwane albo za krótkie.',
      },
      { b: 'Rodzina od dziesięcioleci uprawia działkę, a w księdze jest obcy właściciel albo księgi nie ma', t: 'jeżeli władacie nią jak właściciel, lata rodziców i dziadków doliczasz do swoich (art. 176 k.c.).' },
      { b: 'Kupiłeś albo dostałeś działkę „na kartkę”, bez notariusza', t: 'umowa bez aktu notarialnego nie przenosi własności (art. 158 i art. 73 § 2 k.c.); drogą do uregulowania bywa zasiedzenie. Kto objął działkę na podstawie takiej umowy, jest w złej wierze, więc potrzebuje 30 lat (uchwała 7 sędziów SN z 6.12.1991, III CZP 108/91).' },
      { b: 'Płot od lat stoi w innym miejscu niż granica na mapie', t: 'liczy się, od kiedy płot tam stoi i kto użytkuje pas między płotem a granicą jak właściciel (art. 172 k.c.).' },
      {
        b: 'Od ponad 20 lat jeździsz przez działkę sąsiada',
        t: 'przejazd to służebność gruntowa z dodatkowym warunkiem zasiedzenia (art. 292 k.c.); bez odpowiedniego dostępu do drogi publicznej w grę wchodzi droga konieczna (art. 145 § 1 k.c.).',
      },
      {
        b: 'Widzisz, że ktoś od lat zajmuje część Twojego gruntu',
        t: 'dopóki 20 albo 30 lat nie minęło, bieg zasiedzenia można przerwać (art. 175 i art. 123 § 1 k.c.). Po upływie terminu posiadacz mógł już nabyć własność (art. 172 k.c.).',
      },
    ],
    doForEyebrow: 'Gdy chcesz nabyć własność przez zasiedzenie',
    doForTitle: 'Co robię, gdy chcesz zostać właścicielem użytkowanej działki',
    doFor: [
      'Ustalam, kiedy Ty albo poprzednicy objęliście posiadanie i czy w dobrej, czy w złej wierze: od tego zależy 20 albo 30 lat (art. 172 k.c.).',
      'Sprawdzam księgę wieczystą albo jej brak, ewidencję gruntów i krąg zainteresowanych, np. spadkobierców właściciela, gminę albo Skarb Państwa.',
      'Piszę wniosek o stwierdzenie zasiedzenia z datą objęcia posiadania i listą zainteresowanych, a potem prowadzę sprawę do prawomocnego postanowienia.',
      'Po prawomocnym postanowieniu składam wniosek o wpis Cię w dziale drugim księgi wieczystej albo o jej założenie (art. 25 ust. 1 pkt 2 u.k.w.h.).',
    ],
    lists: [
      {
        eyebrow: 'Dowody posiadania',
        title: 'Jak udowodnić zasiedzenie działki',
        intro: 'Ustawa domniemywa posiadanie samoistne, ciągłe i w dobrej wierze (art. 339, art. 340 i art. 7 k.c.), ale druga strona może te domniemania obalić (art. 234 k.p.c.).',
        kind: 'check',
        items: [
          { b: 'Świadkowie', t: 'sąsiedzi i rodzina, którzy pamiętają, kto i od kiedy ogrodził, uprawiał albo zabudował działkę.' },
          { b: 'Podatki', t: 'decyzje o podatku od nieruchomości i potwierdzenia wpłat z kolejnych lat; same nie przesądzają sprawy, ale dobrze pokazują daty.' },
          { b: 'Nakłady', t: 'rachunki za ogrodzenie, budynek, przyłącza i remonty.' },
          { b: 'Zdjęcia i mapy', t: 'stare zdjęcia, zdjęcia lotnicze i mapy ewidencyjne z różnych lat.' },
        ],
      },
      {
        eyebrow: 'Gdy bronisz się przed zasiedzeniem swojej nieruchomości',
        title: 'Co robię, gdy ktoś od lat zajmuje Twój grunt',
        kind: 'deliverables',
        items: [
          'Liczę, kiedy upływa 20 albo 30 lat, razem z czasem poprzedników posiadacza (art. 176 k.c.).',
          'Jeżeli termin biegnie, składam pozew o wydanie nieruchomości (art. 222 § 1 k.c.): czynność przed sądem przerywa bieg zasiedzenia (art. 175 i art. 123 § 1 pkt 1 k.c.).',
          'Zbieram dowody, które obalają domniemania z art. 339 i art. 340 k.c. oraz dobrej wiary z art. 7 k.c., np. umowy dzierżawy albo pisma, w których posiadacz uznawał Twoje prawo.',
          'Sprawdzam, czy byłeś małoletni w czasie biegu: zasiedzenie nie skończy się wcześniej niż 2 lata po Twojej pełnoletności (art. 173 k.c.).',
        ],
      },
    ],
    stepsHeading: 'Od wniosku do wpisu w księdze: jak przebiega sprawa w sądzie',
    steps: [
      'Opisujesz w formularzu, od kiedy korzystasz z działki albo od kiedy ktoś zajmuje Twoją. W 24 h roboczych odpisuję, co trzeba zrobić, np. najpierw uporządkować spadek po poprzedniku, i wysyłam ofertę z ceną i terminem.',
      'Zbieramy dowody i listę zainteresowanych. Krok nieodwracalny: nie podpisuj oświadczeń od właściciela, bo uznanie jego prawa przerywa bieg i lata liczą się od zera (art. 175, art. 123 § 1 pkt 2 i art. 124 § 1 k.c.).',
      'Wniosek trafia do sądu rejonowego położenia działki (art. 507 i art. 606 k.p.c.). Jeżeli nie wskażesz innych zainteresowanych, sąd może orzec dopiero po wezwaniu ich przez ogłoszenie (art. 609 § 2 k.p.c.).',
      'Na rozprawie (art. 608 k.p.c.) sąd przeprowadza dowody, np. z zeznań świadków i dokumentów.',
      'Skutek postanowienia następuje z chwilą uprawomocnienia (art. 521 § 1 k.p.c.). Od tego dnia masz 1 miesiąc na zeznanie podatkowe (art. 6 ust. 1 pkt 6 i art. 17a ust. 1 u.p.s.d.), a ja składam wniosek o wpis w księdze.',
    ],
    faq: [
      {
        q: 'Czy zasiedzenie następuje automatycznie?',
        a: 'Tak, własność przechodzi z mocy prawa po 20 albo 30 latach (art. 172 k.c.). Do wpisu w księdze potrzebujesz jednak postanowienia sądu, które stwierdza zasiedzenie (art. 31 ust. 2 u.k.w.h. i art. 610 § 2 k.p.c.).',
      },
      {
        q: 'Czy liczą się lata, kiedy działkę użytkowali rodzice albo dziadkowie?',
        a: 'Tak, doliczasz czas posiadania poprzednika, także gdy jesteś jego spadkobiercą (art. 176 k.c.). Przy złej wierze poprzednika łącznie musi to być co najmniej 30 lat. Jeżeli termin upłynął za życia rodzica, to on nabył własność, a działka weszła do spadku (art. 922 § 1 k.c.). Wtedy potrzebujesz też stwierdzenia nabycia spadku albo aktu poświadczenia dziedziczenia (art. 1025 § 1 k.c.).',
      },
      {
        q: 'Czy można zasiedzieć działkę gminy albo Skarbu Państwa?',
        a: 'Co do zasady tak, bo art. 172 k.c. nie wyłącza nieruchomości gminy ani Skarbu Państwa. Jeżeli przed 1.10.1990 dawne przepisy wyłączały zasiedzenie danej działki, stosuje się art. 10 ustawy z 28.07.1990 o zmianie Kodeksu cywilnego.',
      },
      {
        q: 'Ile kosztuje sprawa o zasiedzenie w sądzie?',
        a: 'Opłata sądowa od wniosku wynosi 2000 zł, przy służebności gruntowej 200 zł (art. 40 i art. 39 ust. 1 pkt 3 u.k.s.c.). Od wniosku o wpis własności w księdze opłata wynosi 200 zł (art. 42 ust. 1 u.k.s.c.). Osoba fizyczna płaci też podatek od spadków i darowizn: 7% wartości nieruchomości, bez kwoty wolnej (art. 1 ust. 1 pkt 3 i art. 15 ust. 2 u.p.s.d.). Z podstawy wyłącza się wartość nakładów poczynionych w czasie biegu zasiedzenia i budynku, który sam wzniosłeś (art. 7 ust. 4–5 u.p.s.d.). Cenę prowadzenia sprawy o zasiedzenie podaję w ofercie.',
      },
      {
        q: 'Co przerywa bieg zasiedzenia mojej działki?',
        a: 'Pozew o wydanie nieruchomości albo inna czynność przed sądem podjęta wprost w celu dochodzenia Twojego prawa (art. 175 i art. 123 § 1 pkt 1 k.c.). Przerywa go też uznanie Twojego prawa przez posiadacza (art. 123 § 1 pkt 2 k.c.). Samo pismo z wezwaniem biegu nie przerywa. Po przerwaniu termin liczy się od nowa, a przy sprawie w sądzie dopiero po jej zakończeniu (art. 124 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-26',
      items: [
        { ref: 'art. 7, art. 123–124, art. 172–176, art. 292, art. 336 i art. 339–340 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'terminy, przerwanie biegu, domniemania' },
        { ref: 'art. 507, art. 510, art. 521 i art. 606–610 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'sąd, ogłoszenie, postanowienie' },
        { ref: 'art. 25 i art. 31 ust. 2 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'wpis własności po postanowieniu' },
        { ref: 'art. 39, art. 40 i art. 42 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty od wniosków' },
        { ref: 'art. 1, art. 6, art. 7, art. 15 ust. 2 i art. 17a u.p.s.d.', act: 'Ustawa o podatku od spadków i darowizn', tj: 'Dz.U. 2026 poz. 478', eli: 'DU/1983/207', note: 'stawka 7%, nakłady i budynek, termin zeznania' },
        { ref: 'art. 10 ustawy z 28.07.1990', act: 'Ustawa z dnia 28 lipca 1990 r. o zmianie ustawy – Kodeks cywilny', tj: 'Dz.U. 1990 nr 55 poz. 321', eli: 'DU/1990/321', note: 'bieg zasiedzenia sprzed 1.10.1990' },
      ],
    },
    docs: [
      'Numer księgi wieczystej, jeśli jest',
      'Wypis i wyrys z ewidencji gruntów, jeśli masz',
      'Decyzje podatkowe i potwierdzenia wpłat z kolejnych lat, jeśli masz',
      'Umowy „na kartkę”, testamenty i postanowienia spadkowe, jeśli są',
      'Zdjęcia, rachunki za nakłady i lista świadków, jeśli masz',
      'Odpis wniosku o zasiedzenie, jeśli bronisz swojej działki',
    ],
    guides: ['zasiedzenie-sluzebnosci-drogi-po-30-latach'],
    seeAlso: ['droga-konieczna', 'stwierdzenie-nabycia-spadku'],
    cta: {
      heading: 'Wieloletnie posiadanie może stać się własnością. Sprawdźmy, czy w Twoim przypadku.',
      lead: 'Napisz, od kiedy i jak korzystasz z nieruchomości albo kto zajmuje Twoją. W 24 h roboczych odpiszę, co trzeba zrobić w tej sprawie, i wyślę ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-26',
  },

  'uregulowanie-stanu-prawnego': {
    h1: 'Uregulowanie stanu prawnego nieruchomości',
    h1Full: 'Uregulowanie stanu prawnego nieruchomości: brak księgi, błędny wpis, stara hipoteka',
    topic: 'Stan prawny nieruchomości',
    metaDesc: 'Nieuregulowany stan prawny działki usuwasz wnioskiem o wpis z dokumentem albo pozwem o uzgodnienie treści księgi wieczystej. Przygotowuję wnioski i pozwy.',
    subtitle: 'W księdze wieczystej figuruje zmarły właściciel, stara hipoteka albo księgi w ogóle nie ma? Nieuregulowany stan prawny działki usuwasz wnioskiem o wpis, jeżeli masz dokument, który wykazuje niezgodność (art. 31 ust. 2 u.k.w.h.). Gdy takiego dokumentu brak, potrzebny jest pozew o uzgodnienie treści księgi (art. 10 u.k.w.h.); ustalam, czego brakuje, i piszę wniosek albo pozew.',
    short: {
      q: 'Co zrobić, gdy działka ma nieuregulowany stan prawny?',
      a: 'Jeżeli masz dokument, który pokazuje prawdziwy stan, np. akt notarialny albo postanowienie spadkowe, składasz wniosek o wpis (art. 31 ust. 2 u.k.w.h.). Proces o uzgodnienie treści księgi jest potrzebny dopiero wtedy, gdy takiego dokumentu nie ma (art. 10 ust. 1 u.k.w.h.).',
      facts: [
        [
          'Brak księgi',
          'Wniosek o założenie księgi do sądu rejonowego z dokumentem nabycia (art. 23 u.k.w.h., art. 626² § 3 k.p.c.)',
        ],
        [
          'Zmarły właściciel',
          'Najpierw stwierdzenie nabycia spadku albo akt poświadczenia dziedziczenia, potem wniosek o wpis spadkobierców (art. 1027 k.c., art. 34 u.k.w.h.)',
        ],
        [
          'Spłacona hipoteka',
          'Wniosek o wykreślenie z dokumentem od wierzyciela (art. 100 u.k.w.h.)',
        ],
        [
          'Błędny wpis bez dokumentu',
          'Pozew o uzgodnienie treści księgi; gdy spór dotyczy własności albo innego prawa rzeczowego, do sądu położenia nieruchomości (art. 10 u.k.w.h., art. 38 § 1 pkt 1 k.p.c.)',
        ],
        [
          'Sporna granica',
          'Rozgraniczenie u wójta (burmistrza, prezydenta miasta); sąd, gdy nie ma ugody ani podstaw do decyzji albo zażądasz przekazania sprawy w 14 dni od doręczenia decyzji (art. 29 ust. 3, art. 33 ust. 3, art. 34 ust. 2 p.g.k.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Założenie księgi 100 zł; wpis własności 200 zł, po spadku 150 zł; wykreślenie hipoteki 100 zł; pozew o uzgodnienie 2000 zł (wartość sporu ponad 40 000 zł); wniosek o rozgraniczenie w sądzie 200 zł (art. 13c, 39, 42, 44–46 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Kiedy księga wieczysta mówi co innego niż dokumenty',
    intro: 'Stan prawny jest nieuregulowany, gdy księga wieczysta pokazuje co innego niż rzeczywistość albo gdy księgi nie ma. Księgę prowadzi się po to, żeby ustalić stan prawny nieruchomości (art. 1 ust. 1 u.k.w.h.). Dział I opisuje nieruchomość, dział II wskazuje właściciela, dział III służebności, inne prawa i roszczenia, a dział IV hipoteki (art. 25 ust. 1). Właściciel ma obowiązek niezwłocznie złożyć wniosek o ujawnienie swojego prawa (art. 35 ust. 1).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kiedy papiery do domu albo działki się nie zgadzają',
    when: [
      {
        b: 'Sąd przysłał zawiadomienie o wpisie ostrzeżenia z pouczeniem, że masz ujawnić swoją własność.',
        t: 'Wniosek o wpis masz złożyć w miesiąc od doręczenia zawiadomienia (art. 36 ust. 3 u.k.w.h.). Opieszałemu właścicielowi sąd może wymierzyć grzywnę od 500 do 10 000 zł (art. 36 ust. 4).',
      },
      {
        b: 'Chcesz sprzedać albo wziąć kredyt, a notariusz, bank lub kupujący mówi, że stan prawny jest nieuregulowany.',
        t: 'Hipoteka dla banku powstaje dopiero z wpisem (art. 67 u.k.w.h.). Wpis hipoteki wymaga, żeby właściciel był ujawniony w księdze wcześniej albo jednocześnie z nią (art. 34 u.k.w.h.).',
      },
      { b: 'Dom albo działka nie ma księgi wieczystej, są tylko stare papiery.', t: 'Księgę zakłada sąd rejonowy (art. 23 u.k.w.h.) na wniosek, do którego dołączasz dokument nabycia (art. 626² § 3 k.p.c.).' },
      {
        b: 'W księdze dalej figurują rodzice albo dziadkowie.',
        t: 'Do ujawnienia nowego właściciela wystarczy wykazać dokumentami następstwo po osobie wpisanej (art. 34 u.k.w.h.), np. postanowieniami spadkowymi po kolejnych zmarłych.',
      },
      { b: 'W księdze jest zła osoba, zły udział albo służebność, której już nie ma.', t: 'Możesz żądać usunięcia niezgodności (art. 10 ust. 1 u.k.w.h.). Jeżeli osoba wpisana nie da dokumentu do zmiany wpisu, rozstrzyga sąd.' },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Jak doprowadzam księgę wieczystą do zgodności z rzeczywistością',
    doFor: [
      'Czytam księgę, jej akta i ewidencję gruntów, porównuję je z Twoimi dokumentami i ustalam, skąd bierze się niezgodność.',
      'Składam wniosek o założenie księgi albo o wpis na urzędowym formularzu, z dokumentami, które są podstawą wpisu (art. 626² § 1 i 3 k.p.c.).',
      'Gdy blokuje spadek, najpierw prowadzę sprawę o stwierdzenie nabycia spadku, potem składam wniosek o wpis spadkobierców. Przy wygasłej hipotece występuję o dokumenty do wierzyciela albo jego następcy.',
      'Wnoszę pozew o uzgodnienie treści księgi (art. 10 u.k.w.h.) i wniosek o zabezpieczenie przez ostrzeżenie, które wyłącza rękojmię wiary publicznej (art. 8 i art. 10 ust. 2).',
      'Gdy brakuje dokumentu własności, oceniam, czy drogą do niego jest zasiedzenie, i prowadzę taką sprawę.',
    ],
    lists: [
      {
        eyebrow: 'Rozgraniczenie i spory o granice',
        title: 'Granica działki: geodeta, wójt czy sąd',
        kind: 'check',
        items: [
          { b: 'Wznowienie znaków granicznych', t: 'gdy są dokumenty pierwotnego położenia znaków, geodeta wznawia je na zlecenie zainteresowanego, bez rozgraniczenia (art. 39 ust. 1–2 p.g.k.).' },
          {
            b: 'Rozgraniczenie u wójta, burmistrza albo prezydenta miasta',
            t: 'ugoda zawarta przed geodetą ma moc ugody sądowej (art. 31 ust. 4 p.g.k.). Bez ugody organ wydaje decyzję, jeżeli granicę ustalono na podstawie dowodów albo zgodnego oświadczenia stron (art. 33 ust. 1).',
          },
        ],
      },
    ],
    stepsHeading: 'Od opisu sprawy do nowego wpisu w księdze',
    steps: [
      'Opisujesz w formularzu, co blokuje nieruchomość, i podajesz numer księgi wieczystej albo piszesz, że jej nie ma.',
      'W 24 h roboczych dostajesz bezpłatną odpowiedź, który dokument trzeba zdobyć najpierw, np. postanowienie spadkowe przed wnioskiem o wpis. Razem z nią wysyłam ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Składam wniosek albo pozew. Krok nieodwracalny: wniosku o wpis zmienionej własności, np. po spadku, nie cofniesz (art. 626⁵ k.p.c.), więc składam go z kompletem dokumentów.',
      'Wpis działa od chwili złożenia wniosku (art. 29 u.k.w.h.). Po zawiadomieniu z sądu sprawdzam treść księgi.',
    ],
    faq: [
      {
        q: 'Działka po dziadkach nie ma księgi wieczystej. Jak to uregulować?',
        a: 'W dwóch krokach: najpierw potwierdzasz dziedziczenie, potem składasz wniosek o założenie księgi. Dziedziczenie potwierdza postanowienie sądu albo akt poświadczenia dziedziczenia (art. 1025 § 1 k.c.). Potrzebujesz go po dziadkach, a jeśli zmarli rodzice, także po nich. Do wniosku dołączasz dokument własności dziadków, np. akt notarialny. Gdy go nie ma, sprawdzam zasiedzenie (art. 172 k.c.).',
      },
      {
        q: 'Czy można sprzedać albo kupić działkę bez księgi wieczystej?',
        a: 'Tak, przepisy nie uzależniają sprzedaży od księgi: własność przechodzi z umową w formie aktu notarialnego (art. 155 § 1 i art. 158 k.c.). Kupujący nie ma jednak ochrony rękojmi wiary publicznej, bo ta opiera się na treści księgi (art. 5 u.k.w.h.).',
      },
      {
        q: 'Ile kosztuje założenie księgi wieczystej i ile to trwa?',
        a: 'Opłata sądowa to 300 zł, po spadku 250 zł. To 100 zł od wniosku o założenie księgi i 200 zł od wpisu własności (art. 44 ust. 1 pkt 1, art. 45 ust. 1, art. 42 ust. 1 u.k.s.c.). Wpis po spadku albo własności nieruchomości rolnej do 5 ha kosztuje 150 zł (art. 42 ust. 3, art. 43 pkt 2). W mojej praktyce prosty wpis to tygodnie, a sprawa o uzgodnienie albo spadek – miesiące. Cenę wniosku podaję w ofercie.',
      },
      {
        q: 'Jak poprawić błąd w księdze wieczystej, np. w nazwisku albo powierzchni działki?',
        a: 'Literówkę, która nie zmienia stanu prawnego, sąd prostuje z urzędu (art. 626¹³ § 2 k.p.c.), więc wystarczy ją zgłosić. Błędną powierzchnię albo numer działki sąd prostuje na wniosek właściciela według ewidencji gruntów (art. 27 ust. 1 u.k.w.h.). Złą osobę albo zły udział zmienia dokument albo wyrok, więc proces jest potrzebny tylko bez dokumentu (art. 31 ust. 2, art. 10 u.k.w.h.).',
      },
      {
        q: 'Jak wykreślić z księgi hipotekę spłaconą wiele lat temu?',
        a: 'Wnioskiem o wykreślenie, do którego dołączasz dokument od wierzyciela albo jego następcy. Spłata co do zasady wygasza hipotekę (art. 94 u.k.w.h.), a wierzyciel ma wtedy obowiązek umożliwić jej wykreślenie (art. 100). Sam upływ lat nie wystarczy, bo przedawnienie wierzytelności nie odbiera prawa do zaspokojenia z nieruchomości (art. 77). Gdy wierzyciel nie istnieje albo odmawia, możesz żądać usunięcia niezgodności w procesie (art. 10 ust. 1).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1, 5, 8, 10, 23, 25, 27, 29, 31, 34–36, 67, 77, 94, 100',
          act: 'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
          tj: 'Dz.U. 2026 poz. 1066',
          eli: 'DU/1982/147',
          note: 'Działy księgi, rękojmia i ostrzeżenie, uzgodnienie treści księgi, podstawa wpisu, obowiązek ujawnienia właściciela, wygaśnięcie i wykreślenie hipoteki.',
        },
        {
          ref: 'art. 38, 626², 626⁵, 626¹³',
          act: 'Ustawa z dnia 17 listopada 1964 r. Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'Sąd właściwy, wniosek o wpis i jego cofnięcie, sprostowanie usterek z urzędu.',
        },
        {
          ref: 'art. 13c, 39, 42–46',
          act: 'Ustawa z dnia 28 lipca 2005 r. o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'Opłaty od pozwu o uzgodnienie, rozgraniczenia, założenia księgi, wpisów i wykreśleń.',
        },
        {
          ref: 'art. 29, 31, 33, 34, 39',
          act: 'Ustawa z dnia 17 maja 1989 r. Prawo geodezyjne i kartograficzne',
          tj: 'Dz.U. 2024 poz. 1151',
          eli: 'DU/1989/163',
          note: 'Rozgraniczenie przed wójtem i w sądzie, wznowienie znaków granicznych.',
        },
        {
          ref: 'art. 155, 158, 172, 1025, 1027',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Przeniesienie własności nieruchomości, zasiedzenie, dowód dziedziczenia.',
        },
      ],
    },
    docs: [
      'Numer księgi wieczystej albo informacja, że nieruchomość jej nie ma',
      'Akt notarialny, akt własności ziemi albo postanowienie sądu, z którego wynika własność, jeśli masz',
      'Postanowienia spadkowe albo akty poświadczenia dziedziczenia po osobach z księgi, jeśli masz',
      'Wypis z rejestru gruntów i wyrys z mapy ewidencyjnej, jeśli masz',
      'Pismo wierzyciela o spłacie kredytu zabezpieczonego hipoteką, jeśli masz',
      'Zawiadomienie z sądu o wpisie ostrzeżenia, jeśli je dostałeś',
    ],
    guides: [
      'zniesienie-sluzebnosci-przesylu-nieistniejaca-linia',
      'zawyzony-podatek-od-nieruchomosci-blad-w-ewidencji',
    ],
    seeAlso: ['stwierdzenie-nabycia-spadku', 'obsluga-sprzedazy', 'obsluga-prawna-geodetow'],
    cta: {
      heading: 'Uporządkuj papiery, zanim zablokują Ci sprzedaż albo spadek.',
      lead: 'Opisz, co blokuje nieruchomość, a w 24 h roboczych odpiszę, co trzeba zrobić, np. wpis spadkobierców albo pozew o uzgodnienie. Razem z tym prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'uzytkowanie-wieczyste': {
    h1: 'Użytkowanie wieczyste: przekształcenie i opłaty',
    h1Full: 'Użytkowanie wieczyste: przekształcenie i opłaty, wykup gruntu i podwyżka opłaty rocznej',
    topic: 'Użytkowanie wieczyste',
    metaDesc: 'Grunt pod budynkiem mieszkalnym co do zasady stał się własnością 1.01.2019 r. Na wniosek do SKO od podwyżki opłaty rocznej masz 30 dni od wypowiedzenia.',
    subtitle: 'Gmina przysłała wypowiedzenie opłaty za użytkowanie wieczyste albo chcesz mieć grunt na własność? Grunt pod domem albo budynkiem mieszkalnym co do zasady stał się Twoją własnością z mocy prawa 1.01.2019 r. (art. 1 ustawy z 20.07.2018 r.). Na wniosek do samorządowego kolegium odwoławczego (SKO) od podwyżki masz 30 dni od otrzymania wypowiedzenia, więc prześlij je od razu.',
    short: {
      q: 'Jak dziś przekształcić użytkowanie wieczyste we własność?',
      a: 'Grunt pod budynkiem mieszkalnym co do zasady stał się własnością z mocy prawa 1.01.2019 r. albo w dniu oddania budynku do użytkowania (art. 1 i art. 13 ustawy z 20.07.2018 r.). Inny grunt gmina albo Skarb Państwa może Ci sprzedać najwcześniej 10 lat po zawarciu umowy użytkowania wieczystego (art. 32 ust. 1 u.g.n.). Gdy grunt nie jest wykorzystywany do działalności gospodarczej, cena to 20-krotność dotychczasowej stawki opłaty rocznej razy wartość gruntu (art. 69 ust. 1 u.g.n.).',
      facts: [
        [
          'Grunt pod budynkiem mieszkalnym',
          'Własność od 1.01.2019 r.; w budynku wielorodzinnym co najmniej połowa lokali mieszkalnych (art. 1 ustawy z 20.07.2018 r.)',
        ],
        [
          'Opłata przekształceniowa',
          'Co do zasady jak opłata roczna z dnia przekształcenia, do 31 marca przez 20 lat (art. 7 ust. 2, 5 i 6 ustawy z 20.07.2018 r.)',
        ],
        [
          'Podwyżka opłaty rocznej',
          '30 dni od otrzymania wypowiedzenia na wniosek do SKO; od orzeczenia SKO 14 dni na sprzeciw, wtedy sprawę rozpoznaje sąd (art. 78 ust. 2 i art. 80 ust. 1–2 u.g.n.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Wykreślenie roszczenia o opłatę z księgi: 250 zł po opłacie jednorazowej, 75 zł w innych przypadkach (art. 7 ust. 10 ustawy z 20.07.2018 r.)',
        ],
      ],
    },
    introHeading: 'Dlaczego za grunt płacisz co roku, choć dom jest Twój',
    intro: 'Użytkowanie wieczyste pozwala korzystać z gruntu Skarbu Państwa albo samorządu z wyłączeniem innych osób, co do zasady przez 99 lat (art. 232 § 1, art. 233 i art. 236 § 1 k.c.). Budynki są Twoje (art. 235 k.c.), ale za grunt płacisz do 31 marca opłatę roczną (art. 71 ust. 4 u.g.n.). Wynosi ona od 0,3% do 3% wartości gruntu zależnie od celu z umowy, przy celu mieszkaniowym 1% (art. 72 ust. 3 u.g.n.). Właściciel gruntu może podnieść opłatę najwyżej raz na 3 lata, na podstawie wartości określonej przez rzeczoznawcę majątkowego (art. 77 ust. 1 i 3 u.g.n.). Dlatego w sprawie o podwyżkę pracuję przede wszystkim na operacie szacunkowym i nie obiecuję wyniku.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pismo z gminy, zaświadczenie o opłacie albo plan wykupu gruntu',
    when: [
      { b: 'Dostałeś wypowiedzenie opłaty rocznej z nową, wyższą kwotą', t: 'na wniosek do samorządowego kolegium odwoławczego masz 30 dni od jego otrzymania (art. 78 ust. 2 u.g.n.).' },
      { b: 'Kupiłeś mieszkanie na gruncie, który przekształcił się we własność', t: 'w 30 dni od zakupu występujesz o zaświadczenie, ile i jak długo płacisz opłatę przekształceniową (art. 11 ust. 1 ustawy z 20.07.2018 r.).' },
      { b: 'Kwota w zaświadczeniu o przekształceniu wydaje Ci się zawyżona', t: 'w 2 miesiące od doręczenia możesz żądać ustalenia opłaty decyzją (art. 6 ust. 1 ustawy z 20.07.2018 r.).' },
      {
        b: 'Chcesz spłacić opłatę przekształceniową naraz i mieć czystą księgę',
        t: 'płacisz opłatę z roku zgłoszenia razy liczbę pozostałych lat (art. 7 ust. 7 ustawy z 20.07.2018 r.). Organ w 30 dni od zapłaty wydaje zaświadczenie do wykreślenia roszczenia z księgi (art. 7 ust. 9).',
      },
      {
        b: 'Prowadzisz na gruncie działalność gospodarczą i chcesz go wykupić',
        t: 'cena wynosi od 20-krotności stawki opłaty rocznej razy wartość gruntu do pełnej wartości gruntu (art. 69 ust. 2 u.g.n.). Różnica między wartością a ceną to pomoc publiczna z limitem; ponad limit dopłacasz (art. 69a ust. 1 i 2 u.g.n.).',
      },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co robię przy podwyżce opłaty, opłacie przekształceniowej i wykupie',
    doFor: [
      'Sprawdzam wypowiedzenie: czy wypowiedziano opłatę do 31 grudnia roku poprzedzającego, sposób obliczenia, pouczenie i miejsce wglądu w operat (art. 78 ust. 1 u.g.n.).',
      'Analizuję operat, na którym oparto nową wartość gruntu. Przesłanki aktualizacji musi wykazać organ (art. 78 ust. 3 u.g.n.).',
      'Gdy wartość gruntu się zmieniła, a organ nie zaktualizował opłaty, składam żądanie aktualizacji (art. 81 u.g.n.). Gdy trwale zmienił się sposób korzystania z gruntu, składam wniosek o zmianę celu (art. 73 ust. 2 u.g.n.).',
      'Sprawdzam kwotę opłaty jednorazowej podaną przez organ. Jeżeli się z nią nie zgadzasz, w 2 miesiące od doręczenia informacji składam wniosek o decyzję (art. 7 ust. 8a ustawy z 20.07.2018 r.).',
      'Piszę wniosek o sprzedaż gruntu i sprawdzam cenę według art. 69 u.g.n.',
    ],
    stepsHeading: 'Gmina podniosła opłatę roczną: terminy krok po kroku',
    steps: [
      'Przesyłasz w formularzu wypowiedzenie i datę jego odbioru. W 24 h roboczych odpisuję, co trzeba zrobić w tych 30 dniach (np. przejrzeć operat i złożyć wniosek do SKO), i wysyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Do 30 dni od otrzymania wypowiedzenia: wniosek do SKO w 2 egzemplarzach, za pośrednictwem organu, który wypowiedział opłatę (art. 78 ust. 2 i art. 79 ust. 1 u.g.n.). To krok, od którego zależy wynik: bez wniosku obowiązuje nowa kwota z wypowiedzenia (art. 78 ust. 4 u.g.n.). Do końca sprawy płacisz dotychczasową opłatę.',
      'SKO dąży do ugody, a bez niej oddala wniosek albo ustala nową opłatę (art. 79 ust. 3 u.g.n.). Przy oddaleniu może, na wniosek organu, obciążyć Cię kosztami (art. 79 ust. 6 u.g.n.).',
      'Do 14 dni od doręczenia orzeczenia SKO: sprzeciw. Kolegium przekazuje akta sądowi powszechnemu, a orzeczenie traci moc (art. 80 ust. 1–3 u.g.n.). Nowa opłata z ugody, orzeczenia albo wyroku obowiązuje od 1 stycznia roku po wypowiedzeniu (art. 79 ust. 5 i 8 u.g.n.).',
    ],
    faq: [
      {
        q: 'Ile wynosi opłata przekształceniowa i jaka jest bonifikata?',
        a: 'Co do zasady tyle, ile opłata roczna z dnia przekształcenia, płacona przez 20 lat (art. 7 ust. 2 i 6 ustawy z 20.07.2018 r.). Ustawowa bonifikata od opłaty jednorazowej przy gruncie Skarbu Państwa malała od 60% w roku przekształcenia do 10% w szóstym roku po nim (art. 9 ust. 3). Przy przekształceniu 1.01.2019 r. ten okres już minął. Przy gruncie gminy bonifikatę może dać uchwała rady (art. 9 ust. 4). Na wniosek 99% dostają m.in. rodziny wielodzietne, gdy lokal albo dom służy tylko ich potrzebom mieszkaniowym (art. 9a).',
      },
      {
        q: 'Gdzie sprawdzę, ile mam płacić opłaty przekształceniowej?',
        a: 'W zaświadczeniu o przekształceniu: podaje ono wysokość i okres opłaty oraz zasady opłaty jednorazowej (art. 4 ust. 4 ustawy z 20.07.2018 r.). Wydaje je co do zasady wójt, burmistrz albo prezydent miasta przy gruncie gminy, a starosta przy gruncie Skarbu Państwa (art. 4 ust. 1).',
      },
      {
        q: 'Czy nadal mogę żądać przekształcenia albo wykupu gruntu?',
        a: 'Z ustawy z 29.07.2005 r. już nie: żądanie przekształcenia można było zgłosić do 31.12.2025 r. (art. 7a tej ustawy). Dziś właściciel gruntu może Ci go sprzedać na zasadach z uchwały rady albo zarządzenia wojewody (art. 32 ust. 1b u.g.n.).',
      },
      {
        q: 'Co się dzieje po 99 latach użytkowania wieczystego?',
        a: 'Prawo wygasa, a za budynki należy Ci się co do zasady wynagrodzenie równe ich wartości z dnia wygaśnięcia (art. 33 ust. 1 i 2 u.g.n.). W ostatnich 5 latach możesz żądać przedłużenia o 40 do 99 lat. Odmówić można tylko ze względu na ważny interes społeczny (art. 236 § 2 k.c.).',
      },
      {
        q: 'Czy użytkowanie wieczyste można sprzedać albo odziedziczyć?',
        a: 'Tak. Użytkownik wieczysty może swoim prawem rozporządzać (art. 233 k.c.), a sprzedaż wymaga aktu notarialnego jak przy własności (art. 237 i art. 158 k.c.). Po śmierci prawo przechodzi na spadkobierców (art. 922 § 1 k.c.), razem z budynkami (art. 235 § 2 k.c.).',
      },
      {
        q: 'Kupuję mieszkanie: kto płaci opłatę za użytkowanie wieczyste w roku zakupu?',
        a: 'Za cały rok płaci ten, kto był użytkownikiem wieczystym 1 stycznia, czyli przy zakupie w trakcie roku sprzedający (art. 71 ust. 7 u.g.n.). Opłatę przekształceniową płacisz od 1 stycznia roku po zakupie (art. 11 ust. 1 ustawy z 20.07.2018 r.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1, 4, 6, 7, 9, 9a, 11 i 13 ustawy z 20.07.2018 r.',
          act: 'Ustawa z dnia 20 lipca 2018 r. o przekształceniu prawa użytkowania wieczystego gruntów zabudowanych na cele mieszkaniowe w prawo własności tych gruntów',
          tj: 'Dz.U. 2025 poz. 6',
          eli: 'DU/2018/1716',
          note: 'przekształcenie, zaświadczenie, opłata przekształceniowa, bonifikaty, wykreślenie roszczenia',
        },
        {
          ref: 'art. 32, 33, 69, 69a, 71–73 i 77–81 u.g.n.',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'sprzedaż gruntu i cena, wygaśnięcie, opłata roczna, aktualizacja, SKO i sprzeciw',
        },
        { ref: 'art. 158, 232–237 i 922 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'treść prawa, 99 lat i przedłużenie, zbycie, dziedziczenie' },
        {
          ref: 'art. 7a ustawy z 29.07.2005 r.',
          act: 'Ustawa z dnia 29 lipca 2005 r. o przekształceniu prawa użytkowania wieczystego w prawo własności nieruchomości',
          tj: 'Dz.U. 2024 poz. 900',
          eli: 'DU/2005/1459',
          note: 'termin żądania przekształcenia do 31.12.2025',
        },
      ],
    },
    docsHeading: 'Co przesłać do wstępnej analizy: wypowiedzenie, zaświadczenie albo umowę',
    docs: [
      'Wypowiedzenie opłaty rocznej z kopertą albo potwierdzeniem odbioru (od tej daty liczy się 30 dni)',
      'Zaświadczenie o przekształceniu albo informacja o opłacie jednorazowej, jeśli je masz',
      'Umowa o oddanie gruntu w użytkowanie wieczyste albo akt, którym kupiłeś nieruchomość, jeśli go masz',
      'Numer księgi wieczystej gruntu albo lokalu',
      'Operat szacunkowy albo notatki z jego przejrzenia, jeśli go widziałeś',
    ],
    guides: [],
    seeAlso: ['obsluga-sprzedazy', 'obsluga-prawna-wspolnot'],
    cta: {
      heading: 'Zawyżona opłata albo wykup gruntu? Sprawdźmy, co Ci się należy.',
      lead: 'Prześlij wypowiedzenie opłaty, zaświadczenie o przekształceniu albo opis gruntu do wykupu. W 24 h roboczych odpiszę, od czego zacząć (np. wniosek do SKO albo wniosek o sprzedaż gruntu), i wyślę ofertę z ceną i terminem. Do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== BLOK 7 — Współwłasność i sprawy działowe ===== */
  'zniesienie-wspolwlasnosci': {
    h1: 'Zniesienie współwłasności',
    h1Full: 'Zniesienie współwłasności nieruchomości bez zgody współwłaściciela: podział, spłata, sprzedaż',
    topic: 'Zniesienie współwłasności',
    metaDesc: 'Współwłaściciel może żądać zniesienia współwłasności bez zgody innych (art. 210 k.c.). Opłata sądowa 1000 zł, zgodny projekt 300 zł (art. 41 u.k.s.c.).',
    subtitle: 'Masz dom, mieszkanie albo działkę na spółkę z rodzeństwem, byłym partnerem albo obcymi ludźmi i nie możesz się dogadać? Każdy współwłaściciel może żądać zniesienia współwłasności, także bez zgody pozostałych (art. 210 § 1 k.c.). Kończy się ono umową u notariusza albo postanowieniem sądu: podziałem, przyznaniem ze spłatą albo sprzedażą (art. 211–212 k.c.).',
    short: {
      q: 'Czy da się wyjść ze współwłasności, gdy współwłaściciel się nie zgadza?',
      a: 'Tak. Wniosek o zniesienie współwłasności złożysz do sądu sam, bez zgody pozostałych (art. 210 § 1 k.c.). Sąd może podzielić nieruchomość fizycznie, przyznać ją jednemu ze współwłaścicieli ze spłatą albo zarządzić sprzedaż (art. 211–212 k.c.). Gdy wszyscy się zgadzają, wystarczy umowa w formie aktu notarialnego (art. 158 k.c.).',
      facts: [
        [
          'Kto może żądać',
          'Każdy współwłaściciel, niezależnie od wielkości udziału. Umowa może wyłączyć to prawo na nie dłużej niż 5 lat, z możliwością przedłużenia o kolejne 5 lat, także wielokrotnie (art. 210 § 1 k.c.)',
        ],
        [
          'Termin',
          'Bez terminu: roszczenie o zniesienie współwłasności nie ulega przedawnieniu (art. 220 k.c.)',
        ],
        [
          'Gdzie',
          'Przy zgodzie: notariusz, akt notarialny (art. 158 k.c.); bez zgody: sąd rejonowy, w którego okręgu leży nieruchomość (art. 507 i 606 k.p.c.)',
        ],
        [
          'Sposoby',
          'Podział fizyczny, przyznanie jednej osobie ze spłatą (raty łącznie do 10 lat) albo sprzedaż (art. 211–212 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Wniosek 1000 zł, ze zgodnym projektem zniesienia 300 zł (art. 41 u.k.s.c.); jedna opłata 150 zł od wniosku o wpis w księdze wieczystej (art. 42 ust. 3 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Dlaczego wspólny dom trudno sprzedać i jak zakończyć współwłasność',
    intro: 'Współwłasność to stan, w którym własność tej samej rzeczy przysługuje niepodzielnie kilku osobom (art. 195 k.c.). Do sprzedaży całego domu potrzebna jest co do zasady zgoda wszystkich (art. 199 k.c.). Swój udział kupiony albo otrzymany w darowiźnie sprzedasz bez zgody pozostałych (art. 198 k.c.). Przy domu ze spadku, przed działem, sprzedaż udziału bez zgody pozostałych spadkobierców jest bezskuteczna o tyle, o ile naruszałaby ich prawa wynikające z przepisów o dziale spadku (art. 1036 k.c.). Zniesienie współwłasności kończy ten stan: dostajesz część nieruchomości, całość ze spłatą innych albo pieniądze. Gdy dom należy do niepodzielonego spadku, właściwa jest sprawa o dział spadku (art. 1035 i 1037 § 1 k.c.), a przy majątku wspólnym byłych małżonków sprawa o podział majątku (art. 46 k.r.o.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Brat nie chce sprzedać, a Ty chcesz odzyskać swoje pieniądze',
    when: [
      {
        b: 'Współwłaściciel złożył już wniosek do sądu, a Ty od lat sam płacisz podatek i remonty',
        t: 'wydatki i ciężary związane z rzeczą wspólną dzieli się według udziałów (art. 207 k.c.). Rozliczenia z tytułu posiadania zgłoś w tej sprawie, bo po prawomocnym postanowieniu ich nie dochodzisz (art. 618 § 1 i 3 k.p.c.).',
      },
      {
        b: 'Współwłaściciel mieszka w mieszkaniu sam i nie wpuszcza Cię do środka',
        t: 'masz takie samo prawo do współposiadania jak on (art. 206 k.c.). Jeżeli sąd przyzna mieszkanie Tobie, orzeknie też o jego wydaniu albo opróżnieniu przez pozostałych (art. 624 k.p.c.).',
      },
      {
        b: 'Chcesz zatrzymać mieszkanie i spłacić pozostałych',
        t: 'sąd może uczynić Cię jedynym właścicielem mieszkania z obowiązkiem spłaty pozostałych. Spłatę może rozłożyć na raty, płatne łącznie najwyżej przez 10 lat (art. 212 § 2–3 k.c.).',
      },
      {
        b: 'Masz z rodzeństwem wspólną działkę i każdy chce budować na swojej części',
        t: 'podziału fizycznego może żądać każdy współwłaściciel. Wyjątek to podział sprzeczny z ustawą lub ze społeczno-gospodarczym przeznaczeniem działki albo taki, który istotnie by ją zmienił lub znacznie zmniejszył jej wartość (art. 211 k.c.). Gdy podział zależy od planu miejscowego, sąd zasięga opinii wójta, burmistrza albo prezydenta miasta (art. 96 ust. 2 u.g.n.).',
      },
      {
        b: 'Boisz się, że sąd sprzeda nieruchomość na licytacji',
        t: 'sprzedaż zarządzoną przez sąd przeprowadza komornik w drodze sprzedaży publicznej (art. 1066–1067 k.p.c.). Sprzedaż na rynku, po cenie uzgodnionej między współwłaścicielami, wymaga co do zasady zgody wszystkich (art. 199 k.c.).',
      },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co robię, żeby zakończyć Twoją współwłasność',
    doFor: [
      'Sprawdzam księgę wieczystą: kto ma jakie udziały, czy nie należą do niepodzielonego spadku i czy umowa nie wyłączyła zniesienia na czas oznaczony (art. 210 § 1 k.c.).',
      'Przy zgodzie przygotowuję projekt umowy dla notariusza: kto co dostaje, kwoty i terminy spłat, termin wydania lokalu.',
      'Bez zgody piszę wniosek do sądu z opisem nieruchomości, dowodami własności (art. 617 k.p.c.) i proponowanym sposobem zniesienia.',
      'Przy podziale działki uzgadniam z geodetą projekt na planie (art. 621 k.p.c.); dla części bez dojazdu wnoszę o służebność gruntową (art. 212 § 1 k.c.).',
      'Zgłaszam Twoje rozliczenia ze współwłaścicielami, z rachunkami i przelewami, zanim sąd wyda postanowienie.',
      'Zgłaszam na piśmie zarzuty do opinii biegłego o wartości nieruchomości, jeżeli wycena budzi zastrzeżenia.',
    ],
    lists: [
      {
        eyebrow: 'Trzy sposoby z ustawy',
        title: 'Podział, przejęcie ze spłatą albo sprzedaż: o czym orzeka sąd',
        kind: 'check',
        items: [
          {
            b: 'Podział fizyczny',
            t: 'każdy dostaje część odpowiadającą wartością jego udziałowi, a różnice wyrównują dopłaty (art. 623 k.p.c.). Odpada, gdy podział byłby sprzeczny z ustawą lub ze społeczno-gospodarczym przeznaczeniem rzeczy albo istotnie zmieniłby rzecz lub znacznie zmniejszył jej wartość (art. 211 k.c.).',
          },
          { b: 'Przyznanie ze spłatą', t: 'rzecz, której nie da się podzielić, np. mieszkanie, sąd może przyznać jednemu ze współwłaścicieli, a pozostałym zasądzić spłaty (art. 212 § 2 k.c.).' },
          { b: 'Sprzedaż', t: 'rzecz niepodzielną sąd może też sprzedać. Może przy tym odłożyć rozstrzygnięcie o rozliczeniach i o podziale uzyskanej kwoty do czasu sprzedaży (art. 212 § 2 k.c., art. 625 k.p.c.).' },
          {
            b: 'Wspólny projekt',
            t: 'gdy wszyscy współwłaściciele złożą zgodny wniosek co do sposobu zniesienia, sąd wydaje postanowienie odpowiadające wnioskowi. Warunki: przy podziale nieruchomości projekt jest zaznaczony na planie (art. 621 k.p.c.), nie sprzeciwia się prawu ani zasadom współżycia społecznego i nie narusza w sposób rażący interesu osób uprawnionych (art. 622 § 2 k.p.c.).',
          },
        ],
      },
    ],
    stepsHeading: 'Co dzieje się po kolei, gdy kończysz współwłasność',
    steps: [
      'Opisujesz w formularzu, z kim masz nieruchomość, skąd pochodzą udziały (zakup, darowizna, spadek) i co chcesz z nią zrobić. W ciągu 24 h roboczych bezpłatnie wskazuję, od czego zacząć: od sprawdzenia księgi wieczystej, od projektu umowy dla notariusza czy od wniosku do sądu. Ofertę z ceną i terminem wysyłam od razu z tą odpowiedzią; za moją pracę płacisz dopiero po jej akceptacji.',
      'Zbieramy dokumenty: odpis księgi, umowy albo postanowienia, z których wynikają udziały, i rachunki. Przy podziale działki geodeta przygotowuje projekt na planie.',
      'Przy zgodzie wszystkich podpisujesz z pozostałymi współwłaścicielami umowę w formie aktu notarialnego (art. 158 k.c.). Udziały przechodzą co do zasady w dniu podpisu (art. 155 § 1 k.c.), dlatego kwoty, terminy spłat i termin wydania lokalu ustalamy przed podpisaniem aktu.',
      'Bez zgody wniosek trafia do sądu rejonowego, w którego okręgu leży nieruchomość. Sąd nakłania współwłaścicieli do porozumienia (art. 622 § 1 k.p.c.), w razie potrzeby powołuje biegłego i orzeka o sposobie zniesienia oraz rozliczeniach. Wydatki i inne roszczenia zgłaszasz przed prawomocnym postanowieniem (art. 618 § 3 k.p.c.).',
      'Po uprawomocnieniu postanowienia własność przechodzi na osoby wskazane przez sąd (art. 624 k.p.c.). Składam wniosek o wpis w księdze wieczystej (opłata 150 zł, art. 42 ust. 3 u.k.s.c.).',
    ],
    faq: [
      {
        q: 'Czy można zmusić współwłaściciela do sprzedaży nieruchomości?',
        a: 'Do sprzedaży na rynku nie: rozporządzenie całą nieruchomością wymaga co do zasady zgody wszystkich (art. 199 k.c.). Bez jego zgody złożysz jednak wniosek o zniesienie współwłasności (art. 210 § 1 k.c.). Gdy nieruchomości nie da się podzielić, sąd może przyznać ją jednemu ze współwłaścicieli ze spłatą albo ją sprzedać (art. 212 § 2 k.c.). Licytację przeprowadza wtedy komornik, a wniosek o nią może złożyć każdy współwłaściciel (art. 1066–1067 k.p.c.).',
      },
      {
        q: 'Zniesienie współwłasności: jaka opłata w sądzie i co płaci się u notariusza?',
        a: 'W sądzie opłata od wniosku to 1000 zł, a ze zgodnym projektem zniesienia 300 zł (art. 41 u.k.s.c.). Jeżeli sąd powoła biegłego do wyceny, dochodzi jego wynagrodzenie (art. 5 ust. 1 pkt 3 u.k.s.c.). U notariusza płacisz taksę notarialną. W obu trybach od spłat i dopłat płaci się podatek od czynności cywilnoprawnych: 2% od wartości nabytej ponad udział (art. 1, 6 i 7 u.p.c.c.). Moją cenę podaję w ofercie.',
      },
      {
        q: 'Jak sąd ustala wartość nieruchomości i wysokość spłaty?',
        a: 'Gdy współwłaściciele spierają się o wartość, sąd może zlecić wycenę biegłemu (art. 278 § 1 k.p.c.). Spłata wyrównuje wartość udziału osoby, która nie dostaje nieruchomości (art. 212 § 1–2 k.c.). W postanowieniu sąd oznacza termin i sposób zapłaty oraz odsetki. W razie potrzeby wskazuje też, jak spłata ma być zabezpieczona (art. 212 § 3 k.c.).',
      },
      {
        q: 'Co, gdy współwłaściciel nie żyje?',
        a: 'Jego udział przeszedł z chwilą śmierci na spadkobierców (art. 922 § 1 k.c.), więc zniesienia współwłasności żądasz wobec nich. Stwierdzenia nabycia spadku może żądać osoba mająca w tym interes, np. współwłaściciel, któremu jest ono potrzebne do tej sprawy (art. 1025 § 1 k.c.). Gdy masz udział z zakupu albo darowizny, dział spadku po zmarłym i zniesienie współwłasności można połączyć w jednym postępowaniu (art. 689 k.p.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 155, 158, 195–199, 206–207, 210–212, 220, 922, 1025 i 1035–1037 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'współwłasność, korzystanie i koszty, sposoby zniesienia, spłaty, brak przedawnienia, umowa u notariusza, udział zmarłego i udział w spadku',
        },
        {
          ref: 'art. 278, 507, 606, 617–618, 621–625, 689 i 1066–1067 k.p.c.',
          act: 'Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'sąd właściwy, wniosek, rozliczenia, biegły, zgodny projekt, podział, sprzedaż przez komornika',
        },
        {
          ref: 'art. 5 ust. 1 pkt 3, art. 41 i art. 42 ust. 3 u.k.s.c.',
          act: 'Ustawa o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'opłata od wniosku, biegły, wpis w księdze wieczystej',
        },
        {
          ref: 'art. 1 ust. 1 pkt 1 lit. f i pkt 3, art. 4 pkt 5, art. 6 ust. 1 pkt 5 i art. 7 ust. 1 pkt 2 lit. a u.p.c.c.',
          act: 'Ustawa o podatku od czynności cywilnoprawnych',
          tj: 'Dz.U. 2026 poz. 191',
          eli: 'DU/2000/959',
          note: 'podatek od spłat i dopłat',
        },
        { ref: 'art. 96 ust. 2 u.g.n.', act: 'Ustawa o gospodarce nieruchomościami', tj: 'Dz.U. 2026 poz. 399', eli: 'DU/1997/741', note: 'podział działki orzekany przez sąd' },
        { ref: 'art. 46 k.r.o.', act: 'Kodeks rodzinny i opiekuńczy', tj: 'Dz.U. 2026 poz. 236', eli: 'DU/1964/59', note: 'podział majątku wspólnego byłych małżonków' },
      ],
    },
    docs: [
      'Numer księgi wieczystej albo odpis księgi',
      'Dokumenty, z których wynikają udziały: umowa kupna, darowizny, postanowienie spadkowe albo akt poświadczenia dziedziczenia, jeśli są',
      'Rachunki i przelewy za podatek od nieruchomości, remonty i inne wydatki, które ponosisz',
      'Mapa albo projekt podziału działki od geodety, jeśli są',
      'Pisma i propozycje spłaty od współwłaścicieli, jeśli są',
    ],
    guides: [],
    seeAlso: ['obsluga-sprzedazy', 'droga-konieczna'],
    cta: {
      heading: 'Wyjdź ze współwłasności, zanim ona zablokuje Twoje plany.',
      lead: 'Napisz, z kim masz nieruchomość i czy jest zgoda na podział; w ciągu 24 h roboczych bezpłatnie wskażę pierwszy krok. Oferta z ceną i terminem przyjdzie w tym samym mailu, a do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'dzial-spadku': {
    h1: 'Dział spadku z nieruchomością',
    h1Full: 'Dział spadku z nieruchomością: notariusz czy sąd i spłata rodzeństwa',
    topic: 'Dział spadku',
    metaDesc: 'Przy zgodzie wszystkich spadkobierców dział spadku jest u notariusza, bez niej orzeka sąd. Opłata sądowa 500 zł, zgodny projekt 300 zł (art. 51 u.k.s.c.).',
    subtitle: 'Odziedziczyłeś z rodzeństwem dom albo mieszkanie i nie wiesz, jak je podzielić? Przy zgodzie wszystkich spadkobierców umowę o dział podpisujesz u notariusza, a bez zgody jednej osoby decyduje sąd (art. 1037 k.c.). Przygotowuję umowę o dział albo wniosek do sądu i prowadzę sprawę do wpisu w księdze wieczystej.',
    short: {
      q: 'Dział spadku u notariusza czy w sądzie: od czego to zależy?',
      a: 'Od zgody wszystkich spadkobierców. Gdy wszyscy się zgadzają, wystarczy umowa o dział, a przy nieruchomości w formie aktu notarialnego (art. 1037 § 2 k.c.). Jeżeli choć jeden spadkobierca się nie zgadza, wniosek do sądu złożysz bez jego zgody (art. 1037 § 1 k.c.). Przy zgodzie możesz też złożyć w sądzie wniosek ze zgodnym projektem działu, z niższą opłatą (art. 51 ust. 1 u.k.s.c.).',
      facts: [
        [
          'U notariusza',
          'Umowa wszystkich spadkobierców w formie aktu notarialnego (art. 1037 § 1–2 k.c.)',
        ],
        [
          'W sądzie',
          'Wniosek każdego spadkobiercy do sądu ostatniego miejsca zwykłego pobytu spadkodawcy (art. 1037 § 1 k.c., art. 628 k.p.c.)',
        ],
        ['Termin', 'Brak, żądanie działu nie przedawnia się (art. 220 w zw. z art. 1035 k.c.)'],
        [
          'Sprzedaż swojej części przed działem',
          'Udział w spadku: aktem notarialnym (art. 1051 i 1052 § 3 k.c.); udział w samym domu bez zgody rodzeństwa: bezskuteczny o tyle, o ile narusza ich prawa przy dziale (art. 1036 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '500 zł, przy zgodnym projekcie 300 zł; ze zniesieniem współwłasności 1000 zł albo 600 zł (art. 51 u.k.s.c.)',
        ],
        [
          'Podatek od spłat',
          'PCC 2% od wartości nabytej ponad udział (art. 1 ust. 1 pkt 1 lit. f, art. 6 ust. 1 pkt 5 i art. 7 ust. 1 pkt 2 lit. a u.p.c.c.)',
        ],
      ],
    },
    introHeading: 'Co się zmienia, gdy dom po rodzicach należy do kilku osób',
    intro: 'Jeżeli spadek przypada kilku osobom, każda ma ułamek całego majątku, a do tej wspólności stosuje się odpowiednio przepisy o współwłasności w częściach ułamkowych (art. 1035 k.c.). Postanowienie o stwierdzeniu nabycia spadku wskazuje tylko spadkobierców i wysokość ich udziałów (art. 677 k.p.c.). Dział spadku rozstrzyga, kto dostaje dom, a kto spłatę. Jeżeli nie ma ani postanowienia spadkowego, ani zarejestrowanego aktu poświadczenia dziedziczenia, sąd stwierdzi nabycie spadku w sprawie o dział (art. 681 k.p.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Dom po rodzicach należy do rodzeństwa i trzeba go podzielić',
    when: [
      {
        b: 'Dostałeś z sądu odpis wniosku o dział spadku',
        t: 'roszczenia o korzystanie z domu, pobrane pożytki, nakłady i spłacone długi spadkowe zgłaszasz w tej sprawie, bo po uprawomocnieniu się postanowienia już ich nie dochodzisz (art. 618 § 3 w zw. z art. 686 i 688 k.p.c.).',
      },
      {
        b: 'Siostra albo brat zajmuje dom po rodzicach i nie zgadza się ani na sprzedaż, ani na spłatę',
        t: 'jego zgoda nie jest potrzebna (art. 1037 § 1 k.c.). Jeżeli dom przypadnie komuś innemu, postanowienie obejmie też wydanie domu albo opróżnienie pomieszczeń (art. 624 w zw. z art. 688 k.p.c.).',
      },
      { b: 'Chcesz zatrzymać dom i spłacić rodzeństwo', t: 'sąd może przyznać nieruchomość Tobie ze spłatą pozostałych, w ratach łącznie najwyżej na 10 lat (art. 212 § 2–3 w zw. z art. 1035 k.c.).' },
      { b: 'Po śmierci rodziców remontowałeś dom albo spłacałeś ich kredyt', t: 'sąd rozlicza nakłady i spłacone długi spadkowe w sprawie o dział (art. 686 k.p.c.), jeżeli je zgłosisz i udokumentujesz.' },
      {
        b: 'Rodzeństwo dostało od rodziców mieszkanie albo pieniądze za ich życia',
        t: 'przy dziedziczeniu ustawowym, gdy dział następuje między dziećmi albo między dziećmi i małżonkiem, darowizny od spadkodawcy zalicza się na schedę spadkową. Nie zalicza się ich, jeżeli z oświadczenia spadkodawcy lub z okoliczności wynika zwolnienie (art. 1039 § 1 k.c.).',
      },
      {
        b: 'W spadku jest gospodarstwo albo ziemia rolna',
        t: 'nabywając ją w dziale, nie musisz być rolnikiem indywidualnym (art. 2a ust. 3 pkt 10 u.k.u.r.). Gospodarstwo dzieli się według przepisów o podziale gospodarstw rolnych (art. 213–218 w zw. z art. 1070 k.c.).',
      },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co robię, gdy rodzeństwo dzieli dom albo mieszkanie',
    doFor: [
      'Sprawdzam, czy jest postanowienie spadkowe albo zarejestrowany akt poświadczenia dziedziczenia; jeżeli nie, wnoszę o stwierdzenie nabycia spadku w sprawie o dział (art. 681 k.p.c.).',
      'Ustalam skład spadku: księgi wieczyste, dowody własności spadkodawcy (art. 680 § 2 k.p.c.), spłacone długi i darowizny do zaliczenia na schedę.',
      'Przy zgodzie przygotowuję projekt umowy o dział dla notariusza: kto co dostaje, kwoty, terminy i zabezpieczenie spłat.',
      'Bez zgody piszę wniosek do sądu spadku i prowadzę sprawę do prawomocnego postanowienia.',
      'Zbieram rachunki, przelewy i zdjęcia nakładów i zgłaszam te roszczenia w sprawie (art. 686 k.p.c.).',
      'Wnoszę o przyznanie Ci nieruchomości ze spłatą rodzeństwa w ratach albo o spłatę dla Ciebie z terminem i odsetkami (art. 212 § 3 k.c.).',
    ],
    lists: [
      {
        eyebrow: 'Porównanie dróg',
        title: 'Notariusz czy sąd: koszty, wartość domu i księga wieczysta',
        kind: 'check',
        items: [
          { b: 'Koszty', t: 'u notariusza płacisz taksę notarialną, czyli wynagrodzenie notariusza, a nie opłatę publiczną; w sądzie opłatę stałą od wniosku (art. 51 u.k.s.c.) i wydatki na biegłego, jeżeli sąd go powoła.' },
          { b: 'Wartość domu', t: 'u notariusza ustalasz ją z rodzeństwem w umowie; w sądzie ustala ją sąd (art. 684 k.p.c.).' },
          { b: 'Księga wieczysta', t: 'notariusz składa wniosek o wpis najpóźniej w dniu aktu (art. 92 § 4 pr. not.); po sądzie własność przechodzi z uprawomocnieniem postanowienia (art. 624 w zw. z art. 688 k.p.c.).' },
        ],
      },
    ],
    stepsHeading: 'Od opisu sprawy do wpisu nowego właściciela w księdze',
    steps: [
      'Opisujesz w formularzu, co jest w spadku, kto dziedziczy i jakie dokumenty spadkowe już masz. Do 24 h roboczych bezpłatnie odpisuję, czy pierwszym krokiem jest postanowienie spadkowe, akt u notariusza, czy wniosek do sądu. Do tego oferta z ceną i terminem; do chwili, gdy ją przyjmiesz, nie ponosisz żadnych kosztów.',
      'Zbieramy dokumenty: postanowienie spadkowe, odpisy ksiąg wieczystych, umowy darowizn, rachunki za nakłady. Ustalamy wartość domu i propozycję spłat.',
      'Przy zgodzie podpisujesz z rodzeństwem umowę u notariusza. Z powodu błędu uchylisz się od niej tylko wtedy, gdy błąd dotyczył stanu faktycznego, który strony uważały za niewątpliwy (art. 1045 k.c.). Dlatego przed aktem sprawdzamy dokumenty i wartości.',
      'Bez zgody składam wniosek do sądu spadku. Sąd w toku sprawy nakłania do zgodnego podziału (art. 622 § 1 w zw. z art. 688 k.p.c.). Bez porozumienia ustala skład i wartość spadku (art. 684 k.p.c.) i orzeka o podziale i spłatach.',
      'Na koniec wpis w księdze wieczystej. Po akcie wniosek składa notariusz, a po postanowieniu sądu nowy właściciel ma obowiązek złożyć go niezwłocznie (art. 35 ust. 1 u.k.w.h.); przygotowuję ten wniosek.',
    ],
    faqHeading: 'Pytania rodzeństwa o podział domu po rodzicach',
    faq: [
      {
        q: 'Ile kosztuje dział spadku u notariusza i w sądzie?',
        a: 'W sądzie opłata od wniosku wynosi 500 zł, a ze zgodnym projektem działu 300 zł (art. 51 ust. 1 u.k.s.c.). Jeżeli sąd zleci wycenę domu biegłemu, jego wynagrodzenie jest wydatkiem w sprawie (art. 5 ust. 1 pkt 3 u.k.s.c.). U notariusza płacisz taksę notarialną. Opłata od wniosku o wpis własności w księdze wieczystej po dziale wynosi 150 zł (art. 42 ust. 3 u.k.s.c.). Cenę mojej pracy przy dziale znajdziesz w ofercie.',
      },
      {
        q: 'Kiedy dział spadku, a kiedy zniesienie współwłasności?',
        a: 'Dział spadku dotyczy majątku zmarłego, który przeszedł na kilku spadkobierców (art. 1035 i 1037 k.c.). Zniesienia współwłasności żądasz, gdy udział masz z innego tytułu, np. z zakupu albo darowizny (art. 210 § 1 k.c.). Przykład: część domu dostałeś od rodziców za ich życia, a reszta jest w spadku. Wtedy dział i zniesienie współwłasności mogą iść razem, w jednej sprawie (art. 689 k.p.c.). Opłata od takiego wniosku wynosi 1000 zł, a ze zgodnym projektem 600 zł (art. 51 ust. 2 u.k.s.c.).',
      },
      {
        q: 'Czy dział spadku jest konieczny, żeby sprzedać mieszkanie po rodzicach?',
        a: 'Nie, jeżeli wszyscy spadkobiercy sprzedają mieszkanie razem. Do rozporządzenia rzeczą wspólną potrzebna jest zgoda wszystkich (art. 199 w zw. z art. 1035 k.c.). Sprzedaż samego udziału opisuje wiersz „Sprzedaż swojej części przed działem” w tabeli wyżej.',
      },
      {
        q: 'Czy dział spadku musi być równy?',
        a: 'Nie musi być równy w naturze: jedna osoba może dostać dom, a pozostałe spłaty. W sądzie różnice wartości udziałów wyrównuje się dopłatami albo spłatami (art. 212 § 1–2 w zw. z art. 1035 k.c.). Na wynik wpływają też darowizny od rodzica zaliczane na schedę (art. 1039 § 1 k.c.). Ich wartość liczy się według stanu z chwili darowizny i cen z chwili działu (art. 1042 § 2 k.c.).',
      },
      {
        q: 'Dział spadku ze spłatą: czy płaci się podatek?',
        a: 'Tak, od spłat i dopłat płaci się podatek od czynności cywilnoprawnych (art. 1 u.p.c.c.). Przy nieruchomości stawka wynosi 2% (art. 7 u.p.c.c.). Płaci ten, kto dostaje więcej niż jego udział, od wartości nadwyżki (art. 4 i 6 u.p.c.c.). Tak samo jest przy postanowieniu sądu. Jeżeli dostajesz więcej niż Twój udział bez spłaty, skutki podatkowe oceni doradca podatkowy. Oceni też podatek dochodowy przy późniejszej sprzedaży.',
      },
      {
        q: 'Rodzeństwo blokuje podział: co mogę zrobić?',
        a: 'Złożyć wniosek do sądu, bo dział następuje na żądanie każdego spadkobiercy (art. 1037 § 1 k.c.). Jeżeli domu nie da się podzielić, sąd przyznaje go jednej osobie ze spłatą pozostałych. Może też zarządzić jego sprzedaż (art. 212 § 2 w zw. z art. 1035 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 199, 210, 212–218, 220, 1035–1039, 1042, 1045, 1051–1052 i 1070 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'dział umowny i sądowy, spłaty, gospodarstwo rolne, udział w spadku, zaliczenie darowizn, brak przedawnienia',
        },
        {
          ref: 'art. 618, 622, 624, 628, 677 i 680–689 k.p.c.',
          act: 'Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'sąd spadku, wniosek, rozliczenia, zgodny projekt, połączenie ze zniesieniem współwłasności',
        },
        { ref: 'art. 5, art. 42 ust. 3 i art. 51 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty od wniosku i od wpisu, biegły' },
        {
          ref: 'art. 1 ust. 1 pkt 1 lit. f i pkt 3, art. 4 pkt 5, art. 6 ust. 1 pkt 5 i art. 7 ust. 1 pkt 2 lit. a u.p.c.c.',
          act: 'Ustawa o podatku od czynności cywilnoprawnych',
          tj: 'Dz.U. 2026 poz. 191',
          eli: 'DU/2000/959',
          note: 'podatek od spłat i dopłat',
        },
        { ref: 'art. 2a ust. 3 pkt 10 u.k.u.r.', act: 'Ustawa o kształtowaniu ustroju rolnego', tj: 'Dz.U. 2026 poz. 941', eli: 'DU/2003/592', note: 'ziemia rolna nabyta w dziale' },
        { ref: 'art. 35 ust. 1 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'obowiązek złożenia wniosku o wpis właściciela' },
      ],
    },
    docs: [
      'Postanowienie spadkowe albo akt poświadczenia dziedziczenia, jeżeli ktoś z rodzeństwa już je ma',
      'Akt zgonu i testament, jeśli jest',
      'Numery ksiąg wieczystych albo dokumenty własności spadkodawcy',
      'Umowy darowizn od spadkodawcy, jeśli są',
      'Rachunki i przelewy za remonty, podatki i długi zapłacone po śmierci spadkodawcy',
      'Pisma od rodzeństwa albo Twoja propozycja podziału, jeśli masz',
    ],
    guides: [],
    seeAlso: ['uregulowanie-stanu-prawnego', 'nieruchomosci-rolne'],
    cta: {
      heading: 'Zamień odziedziczone „ułamki” w konkretny, sprawiedliwy podział.',
      lead: 'Napisz, czy rodzeństwo zgadza się na podział, a do 24 h roboczych bezpłatnie wskażę, od czego zacząć. W tej odpowiedzi znajdziesz też ofertę z ceną i terminem pracy przy dziale; płacisz dopiero po jej przyjęciu.',
    },
    updated: '2026-10-10',
  },

  'zachowek': {
    h1: 'Zachowek',
    h1Full: 'Zachowek: dochodzenie i obrona – ile się należy, darowizny, przedawnienie',
    topic: 'Zachowek',
    metaDesc: 'Zachowek to 1/2 wartości udziału z ustawy, a 2/3 dla małoletniego zstępnego albo trwale niezdolnego do pracy (art. 991 k.c.). Przedawnia się po 5 latach.',
    subtitle: 'Rodzic przepisał mieszkanie na rodzeństwo i pominął Cię w testamencie, albo to od Ciebie ktoś żąda zachowku? Zachowek to suma pieniędzy równa co do zasady połowie wartości udziału, który przypadłby Ci z ustawy (art. 991 k.c.). Prowadzę sprawy po obu stronach: opisz w formularzu, kto zmarł i komu przekazał majątek.',
    short: {
      q: 'Ile wynosi zachowek: połowa czy dwie trzecie?',
      a: 'Połowę wartości udziału, który przypadłby Ci przy dziedziczeniu ustawowym (art. 991 § 1 k.c.). Dwie trzecie przy trwałej niezdolności do pracy albo u małoletniego zstępnego spadkodawcy. Do spadku dolicza się darowizny zmarłego (art. 993 § 1 k.c.).',
      facts: [
        [
          'Kto może żądać',
          'Zstępni, małżonek i rodzice, jeżeli byliby spadkobiercami z ustawy; rodzeństwo spadkodawcy nie (art. 991 § 1 k.c.)',
        ],
        [
          'Darowizny wstecz',
          'Dla spadkobierców i uprawnionych bez limitu lat; dla innych osób z 10 lat przed śmiercią (art. 994 § 1 k.c.)',
        ],
        [
          'Termin',
          '5 lat: przy testamencie od jego ogłoszenia, bez testamentu i wobec obdarowanego od śmierci spadkodawcy (art. 1007 k.c.); bezpieczniej liczyć 5 lat dzień w dzień',
        ],
        [
          'Gdzie',
          'Sąd ostatniego miejsca zwykłego pobytu spadkodawcy (art. 39 k.p.c.); okręgowy przy kwocie ponad 100 000 zł (art. 17 pkt 4 k.p.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Przy kwocie ponad 20 000 zł 5% całej kwoty, najwyżej 100 000 zł; do 20 000 zł od 30 do 1000 zł (art. 13 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Dostajesz pieniądze, nie część domu po rodzicach',
    intro: 'Zachowek chroni najbliższych, których spadkodawca pominął w testamencie albo ominął, rozdając majątek za życia. Nie dostajesz udziału w domu, tylko roszczenie o zapłatę od spadkobiercy (art. 991 § 2 k.c.). Sprawy o zachowek to w dużej mierze spór o wycenę i o to, które darowizny wchodzą do wyliczenia.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pominięto Cię w testamencie albo rodzeństwo dostało mieszkanie za życia rodzica',
    when: [
      {
        b: 'Od śmierci rodzica albo ogłoszenia testamentu mijają kolejne lata',
        t: 'roszczenie przedawnia się po 5 latach (art. 1007 k.c.). Bieg przerywa m.in. pozew albo uznanie roszczenia (art. 123 § 1 k.c.); samo wezwanie do zapłaty nie.',
      },
      { b: 'Przyszło do Ciebie wezwanie do zapłaty zachowku albo pozew', t: 'sprawdzasz, które darowizny doliczono i czy żądający sam czegoś nie dostał od zmarłego (art. 996 k.c.).' },
      { b: 'Ojciec zapisał wszystko drugiej żonie albo Twojemu rodzeństwu, a mieszkanie darował za życia', t: 'darowiznę dolicza się do spadku (art. 993 § 1 k.c.).' },
      { b: 'Twój rodzic zmarł przed dziadkiem, a dziadek pominął Cię w testamencie', t: 'wchodzisz w miejsce rodzica w dziedziczeniu ustawowym (art. 931 § 2 k.c.), więc jako wnuk możesz mieć prawo do zachowku.' },
      { b: 'W testamencie jest wydziedziczenie', t: 'działa tylko z przyczyny z art. 1008 k.c. wpisanej w testament (art. 1009 k.c.) i nie po przebaczeniu (art. 1010 k.c.).' },
    ],
    doForEyebrow: 'Gdy dochodzisz zachowku',
    doForTitle: 'Należy Ci się zachowek: co robię po Twojej stronie',
    doFor: [
      'Ustalam spadkobierców ustawowych i Twój udział, licząc także tych, którzy spadek odrzucili (art. 992 k.c.).',
      'Zbieram darowizny zmarłego z aktów notarialnych i ksiąg wieczystych i sprawdzam, które się dolicza (art. 993–994 k.c.).',
      'Wyliczam kwotę i wysyłam wezwanie do zapłaty z wyliczeniem.',
      'Składam pozew przed upływem 5 lat (art. 1007 k.c.) i wnoszę o biegłego, gdy wartość mieszkania jest sporna (art. 278 § 1 k.p.c.).',
      'Gdy spadkobierca nie ma z czego zapłacić, kieruję roszczenie do obdarowanego, najpierw do obdarowanego najpóźniej (art. 1000–1001 k.c.).',
    ],
    lists: [
      {
        eyebrow: 'Gdy masz zapłacić zachowek',
        title: 'Żądają od Ciebie zachowku: co robię po Twojej stronie',
        kind: 'deliverables',
        items: [
          'Sprawdzam, czy żądający należy do uprawnionych i czy roszczenie się nie przedawniło (art. 991 § 1 i art. 1007 k.c.).',
          'Szukam darowizn, które żądający sam dostał od zmarłego: zalicza się je na jego zachowek (art. 996 § 1 k.c.).',
          'Kwestionuję wycenę obejmującą Twój remont albo dobudowę: liczy się stan z dnia darowizny (art. 995 § 1 k.c.).',
          'Wnoszę o odroczenie, raty, a w wyjątkowych przypadkach o obniżenie zachowku (art. 997¹ § 1 k.c.).',
          'Sprawdzam testament pod kątem wydziedziczenia i akty pod kątem zrzeczenia się dziedziczenia (art. 1008 i art. 1048 § 1 k.c.).',
        ],
      },
      {
        eyebrow: 'Przykład wyliczenia',
        title: 'Przykład: rodzic darował mieszkanie jednemu z dwojga dzieci',
        intro: 'Liczby umowne: ojciec, wdowiec, ma syna i córkę. 12 lat przed śmiercią darował synowi mieszkanie. Testamentu nie ma, spadek jest pusty.',
        kind: 'check',
        items: [
          { b: 'Wartość mieszkania', t: 'stan z dnia darowizny, bez remontu syna, ceny z chwili ustalania zachowku: 600 000 zł (art. 995 § 1 k.c.).' },
          { b: 'Podstawa', t: '0 zł spadku plus 600 000 zł darowizny; mimo 12 lat darowiznę się dolicza, bo syn jest spadkobiercą (art. 994 § 1 k.c.).' },
          { b: 'Zachowek córki', t: 'jej udział ustawowy to 1/2 (art. 931 § 1 k.c.), czyli 300 000 zł, a zachowek połowa tego: 150 000 zł; przy trwałej niezdolności do pracy 200 000 zł (art. 991 § 1 k.c.).' },
          { b: 'Kto płaci', t: 'brat jako obdarowany, w granicach wzbogacenia; jego własny zachowek zostaje przy nim (art. 1000 § 1 i § 2 k.c.).' },
          { b: 'Opłata od pozwu', t: '7500 zł, czyli 5% z 150 000 zł (art. 13 ust. 2 u.k.s.c.), w sądzie okręgowym (art. 17 pkt 4 k.p.c.).' },
        ],
      },
    ],
    stepsHeading: 'Od wezwania do zapłaty do wyroku: kolejne kroki',
    steps: [
      'Opisujesz w formularzu, kto zmarł, czy był testament i jakie darowizny znasz. W ciągu 24 h roboczych bezpłatnie piszę Ci, od czego zacząć. Może to być zebranie aktów darowizn i wezwanie do zapłaty albo odpowiedź na pozew. Razem z tym przychodzi oferta z ceną i terminem, a do chwili jej akceptacji nic nie płacisz.',
      'Zbieramy testament, akty darowizn i odpisy ksiąg wieczystych. Wyliczam zachowek osobno ze spadku i z darowizn.',
      'Wezwanie do zapłaty i rozmowy o ugodzie. Gdy nie ma porozumienia, pozew do sądu ostatniego miejsca zwykłego pobytu spadkodawcy (art. 39 k.p.c.). Jeżeli był nim Lublin, przy kwocie ponad 100 000 zł to Sąd Okręgowy w Lublinie (art. 17 pkt 4 k.p.c.).',
      'Gdy bronisz się przed roszczeniem: odpowiedź na pozew z zarzutami do wyliczenia i wniosek o raty, odroczenie albo obniżenie (art. 997¹ k.c.). Krok nieodwracalny: zanim podpiszesz uznanie roszczenia, sprawdzamy wyliczenie. Uznanie przerywa przedawnienie i biegnie ono od nowa (art. 123 § 1 pkt 2 i art. 124 § 1 k.c.).',
    ],
    faq: [
      {
        q: 'Czy zachowek należy się rodzeństwu zmarłego albo wnukom?',
        a: 'Rodzeństwu zmarłego nie, bo art. 991 § 1 k.c. wymienia tylko zstępnych, małżonka i rodziców. Wnukom tak, np. gdy ich rodzic nie dożył śmierci dziadka (art. 931 § 2 k.c.) albo został wydziedziczony (art. 1011 k.c.). Rodzice zmarłego mają prawo do zachowku, gdy dziedziczyliby z ustawy, czyli co do zasady w braku zstępnych (art. 932 § 1 k.c.).',
      },
      {
        q: 'Zachowek od darowizny: ile lat wstecz się liczy?',
        a: 'Bez limitu lat, jeżeli obdarowany jest spadkobiercą albo uprawnionym do zachowku, np. dzieckiem zmarłego. Darowizny dla innych osób liczy się 10 lat wstecz od śmierci spadkodawcy (art. 994 § 1 i art. 924 k.c.). Nie dolicza się drobnych darowizn zwyczajowo przyjętych.',
      },
      {
        q: 'Kiedy zachowek się przedawnia?',
        a: 'Po 5 latach od ogłoszenia testamentu (art. 1007 § 1 k.c.). Gdy testamentu nie ma, termin biegnie od śmierci spadkodawcy (postanowienie SN z 10.03.2011, V CSK 283/10). Roszczenie wobec obdarowanego przedawnia się po 5 latach od śmierci spadkodawcy (art. 1007 § 2 i art. 924 k.c.). Sądy zwykle przyjmują, że koniec terminu przypada na ostatni dzień roku kalendarzowego (art. 118 k.c.), ale Sąd Najwyższy tego wprost nie przesądził, więc bezpieczniej liczyć 5 lat dzień w dzień. Potem zobowiązany może odmówić zapłaty (art. 117 § 2 k.c.).',
      },
      {
        q: 'Ile kosztuje sprawa o zachowek?',
        a: 'Opłata od pozwu to 5% całej żądanej kwoty, jeżeli przekracza 20 000 zł, najwyżej 100 000 zł (art. 13 ust. 2 u.k.s.c.). Gdy żądasz do 20 000 zł, opłata jest stała: od 30 do 1000 zł zależnie od kwoty (art. 13 ust. 1 u.k.s.c.). Jeżeli nie poniesiesz kosztów bez uszczerbku dla utrzymania siebie i rodziny, możesz żądać zwolnienia (art. 102 ust. 1 u.k.s.c.). Moją cenę za pozew o zachowek albo obronę podaję w ofercie razem z terminem.',
      },
      {
        q: 'Czy zachowek można obniżyć albo rozłożyć na raty?',
        a: 'Tak. Zobowiązany może żądać odroczenia, rat, a w wyjątkowych przypadkach obniżenia zachowku (art. 997¹ § 1 k.c.). Sąd bierze pod uwagę sytuację osobistą i majątkową obu stron. Raty mogą trwać łącznie najwyżej 5 lat. W wypadkach zasługujących na szczególne uwzględnienie sąd na wniosek zobowiązanego może przedłużyć ten termin do 10 lat (art. 997¹ § 2 k.c.).',
      },
      {
        q: 'Czy zachowek można załatwić u notariusza, bez sądu?',
        a: 'Tak, możecie zawrzeć ugodę bez sądu (art. 917 k.c.). Zobowiązany może w akcie notarialnym poddać się egzekucji, ze wskazaniem terminu zapłaty. Jeżeli nie zapłaci, akt z klauzulą wykonalności wystarczy komornikowi (art. 776 i art. 777 § 1 pkt 4 k.p.c.). Gdy zamiast pieniędzy przenosicie mieszkanie, akt notarialny jest obowiązkowy (art. 158 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 991–1011 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'zachowek: uprawnieni, darowizny, wycena, raty, przedawnienie, wydziedziczenie' },
        { ref: 'art. 924, art. 931–932 i art. 1048–1049 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'otwarcie spadku, udziały ustawowe, zrzeczenie się dziedziczenia' },
        { ref: 'art. 117–118 i art. 123–124 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'koniec i przerwanie biegu przedawnienia' },
        { ref: 'art. 17 pkt 4, art. 39, art. 278 i art. 776–777 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'właściwy sąd, biegły, akt notarialny jako tytuł egzekucyjny' },
        {
          ref: 'art. 13 i art. 102 u.k.s.c.',
          act: 'Ustawa o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'opłata od pozwu (ust. 2 od 23.09.2025, Dz.U. 2025 poz. 1157), zwolnienie od kosztów',
        },
      ],
    },
    docs: [
      'Testament i protokół jego otwarcia i ogłoszenia, jeśli są',
      'Data śmierci i ostatni adres spadkodawcy',
      'Dokument potwierdzający, kto dziedziczy po zmarłym (postanowienie sądu albo akt notarialny), jeśli jest',
      'Akty notarialne darowizn albo numery ksiąg wieczystych darowanych nieruchomości, jeśli masz',
      'Wezwanie do zapłaty zachowku albo pozew, jeśli przyszły do Ciebie',
      'Lista najbliższej rodziny zmarłego: kto żyje, kto zmarł wcześniej, kto jest małoletni',
    ],
    guides: ['zachowek-z-darowizny'],
    seeAlso: ['darowizna-nieruchomosci', 'dozywocie-renta'],
    cta: {
      heading: 'Pominięto Cię przy podziale majątku? Zachowek to Twoje prawo.',
      lead: 'Opisz rodzinę zmarłego i darowizny, o których wiesz: w 24 h roboczych odpiszę, od czego zacząć. Ofertę z ceną i terminem dostajesz od razu, a do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'stwierdzenie-nabycia-spadku': {
    h1: 'Stwierdzenie nabycia spadku',
    h1Full: 'Stwierdzenie nabycia spadku: sąd czy notariusz i co dalej',
    topic: 'Stwierdzenie nabycia spadku',
    metaDesc: 'Stwierdzenie nabycia spadku: u notariusza, gdy wszyscy możliwi spadkobiercy biorą udział i zgodnie o to wnoszą. Inaczej orzeka sąd, opłata 100 zł.',
    subtitle: 'Zmarł ktoś bliski, a bank albo kupujący żąda „papieru na spadek”? Notariusz poświadczy dziedziczenie, gdy udział biorą wszyscy możliwi spadkobiercy i zgodnie o to wnoszą; w innym razie orzeka sąd (art. 95b i 95c pr. not., art. 1025 § 1 k.c.). Wskazuję drogę i kompletuję dokumenty; zacznij od opisu sprawy w formularzu.',
    short: {
      q: 'Stwierdzenie nabycia spadku: u notariusza czy w sądzie?',
      a: 'U notariusza, jeżeli w protokole dziedziczenia biorą udział wszyscy, którzy mogą być spadkobiercami, i zgodnie żądają poświadczenia (art. 95b i 95c § 2 pkt 1 pr. not.). Gdy ktoś kwestionuje testament, nie chce uczestniczyć albo notariusz ma wątpliwości co do spadkobierców lub udziałów, orzeka sąd (art. 95e § 1 pr. not., art. 1025 § 1 k.c.). Zarejestrowany akt ma skutki prawomocnego postanowienia sądu (art. 95j § 1 pr. not.).',
      facts: [
        [
          'Najwcześniej',
          '6 miesięcy od śmierci, chyba że wszyscy znani spadkobiercy złożyli już oświadczenia o przyjęciu albo odrzuceniu spadku; dotyczy sądu i notariusza (art. 1026 k.c.)',
        ],
        [
          'U notariusza',
          'Protokół dziedziczenia z udziałem wszystkich możliwych spadkobierców, potem akt poświadczenia dziedziczenia wpisany do Rejestru Spadkowego (art. 95b, 95e i 95h pr. not.)',
        ],
        [
          'W sądzie',
          'Wniosek do sądu rejonowego ostatniego miejsca zwykłego pobytu zmarłego; postanowienie po rozprawie (art. 507, 628 i 669 k.p.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '100 zł od wniosku (art. 49 ust. 1 pkt 1 u.k.s.c.) i opłata za wpis do Rejestru Spadkowego (art. 95i § 3 i 5 pr. not.); później 150 zł od wniosku o wpis spadkobierców w księdze wieczystej (art. 42 ust. 3 u.k.s.c.); stan na 10.10.2026',
        ],
        [
          'Po uzyskaniu dokumentu',
          'Wniosek o wpis w księdze wieczystej niezwłocznie (art. 35 ust. 1 u.k.w.h.); zgłoszenie do urzędu skarbowego w 6 miesięcy, jeżeli najbliższa rodzina chce zwolnienia z podatku (art. 4a ust. 1 pkt 1 i ust. 1a u.p.s.d.)',
        ],
      ],
    },
    introHeading: 'Dlaczego samo pokrewieństwo nie wystarczy bankowi ani kupującemu',
    intro: 'Spadek przechodzi na spadkobierców z chwilą śmierci (art. 922 § 1 i art. 925 k.c.). Bankowi czy kupującemu udowodnisz jednak swoje prawa tylko postanowieniem sądu o stwierdzeniu nabycia spadku albo aktem poświadczenia dziedziczenia, jeżeli został zarejestrowany (art. 1027 k.c.). Dokument wskazuje, kto dziedziczy, z jakiego tytułu i w jakich udziałach (art. 677 § 1¹ k.p.c.). Nie dzieli majątku: kto weźmie mieszkanie, rozstrzyga dział spadku. Bez dokumentu bank wypłaci np. zwrot kosztów pogrzebu za okazaniem rachunków, a kwotę z dyspozycji wkładem na wypadek śmierci osobie w niej wskazanej (art. 55 i 56 pr. bank.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Zmarł ktoś bliski i potrzebujesz „papieru na spadek”',
    when: [
      {
        b: 'Niedawno dowiedziałeś się, że dziedziczysz, i boisz się długów zmarłego',
        t: 'na odrzucenie spadku masz 6 miesięcy od dnia, w którym dowiedziałeś się o tytule powołania; bez oświadczenia przyjmujesz spadek z dobrodziejstwem inwentarza (art. 1015 k.c.).',
      },
      {
        b: 'Odrzucasz spadek, a następne w kolejce są Twoje dzieci',
        t: 'zgoda sądu nie jest potrzebna, jeżeli odrzucasz w ich imieniu wspólnie z drugim rodzicem albo za jego zgodą, a spadek odrzucają też inni zstępni rodziców dziecka (art. 101 § 4 k.r.o.). W pozostałych przypadkach jest (art. 101 § 3).',
      },
      {
        b: 'Chcesz sprzedać mieszkanie po rodzicach i kupujący pyta o postanowienie spadkowe',
        t: 'dowodem dziedziczenia jest dla niego tylko postanowienie sądu albo zarejestrowany akt (art. 1027 k.c.), więc dokument zdobywasz przed umową.',
      },
      {
        b: 'Jest testament, a rodzina uważa, że mama nie wiedziała, co podpisuje',
        t: 'na nieważność testamentu powołasz się w 3 lata od dowiedzenia się o przyczynie, najpóźniej 10 lat od otwarcia spadku (art. 945 k.c.). Przy takim sporze nie ma zgodnego żądania, którego wymaga protokół dziedziczenia, więc rozstrzyga sąd (art. 95c § 2 pkt 1 pr. not.).',
      },
      {
        b: 'Brat albo siostra nie odbiera telefonu i nie pójdzie do notariusza',
        t: 'wniosek do sądu złożysz sam, bo wystarczy interes w stwierdzeniu nabycia spadku (art. 1025 § 1 k.c.); sąd wezwie na rozprawę pozostałe osoby, które mogą dziedziczyć (art. 669 k.p.c.).',
      },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co robię, żeby potwierdzić dziedziczenie i wpisać Cię do księgi',
    doFor: [
      'Ustalam, kto może dziedziczyć z ustawy albo z testamentu (art. 926 § 1 k.c.), bo od tego zależy, kto musi wziąć udział u notariusza.',
      'Kompletuję odpisy aktu zgonu, aktów stanu cywilnego i testamenty, które notariusz załącza do protokołu (art. 95c § 4 pr. not.).',
      'Gdy rodzina mieszka w różnych miastach, proponuję projekt protokołu dziedziczenia. Notariusz sporządza go na wniosek i z udziałem jednej osoby, a pozostałe potwierdzają go u tego samego albo innego notariusza (art. 95ca § 1 i 3 pr. not.).',
      'Gdy nie ma zgody albo notariusz odmówi, piszę wniosek do sądu spadku i reprezentuję Cię na rozprawie.',
      'Przygotowuję oświadczenia o odrzuceniu spadku za Ciebie i dzieci, a gdy trzeba, wniosek o zezwolenie sądu, które zawiesza bieg 6 miesięcy (art. 1015 § 1² k.c.).',
      'Po uzyskaniu dokumentu przygotowuję wniosek o wpis w księdze wieczystej i przypominam o terminie zgłoszenia w urzędzie skarbowym.',
    ],
    lists: [
      {
        eyebrow: 'Porównanie dróg',
        title: 'Akt poświadczenia dziedziczenia a postanowienie sądu: czym się różnią',
        kind: 'check',
        items: [
          {
            b: 'Kiedy notariusz odmówi',
            t: 'gdy brakuje kogoś, kto może dziedziczyć, są nieotwarte testamenty albo nabycie spadku już raz potwierdzono (art. 95e § 2 pr. not.). Testamentów szczególnych notariusz nie poświadcza (art. 95a).',
          },
          {
            b: 'Wpis w księdze wieczystej',
            t: 'po akcie, na Twoje żądanie, notariusz składa wniosek najpóźniej w dniu sporządzenia protokołu z tym żądaniem (art. 95ga i 95j § 2 pr. not.); po postanowieniu sądu wniosek składasz sam, niezwłocznie (art. 35 ust. 1 u.k.w.h.).',
          },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega sprawa: od aktu zgonu do wpisu w księdze wieczystej',
    steps: [
      'Wpisujesz w formularzu datę śmierci, czy jest testament i kto z rodziny żyje. W 24 h roboczych bezpłatnie odpisuję, od czego zacząć: od notariusza, projektu protokołu czy wniosku do sądu. Do odpowiedzi dodaję ofertę z ceną i terminem; za pracę płacisz dopiero po przyjęciu oferty.',
      'Jeżeli nie minęło 6 miesięcy od dnia, w którym dowiedziałeś się o powołaniu do spadku, wybierasz: przyjęcie proste, z dobrodziejstwem inwentarza albo odrzucenie (art. 1012 i 1015 § 1 k.c.). Oświadczenia nie można odwołać (art. 1018 § 2 k.c.). Uchylić się od jego skutków możesz tylko przy błędzie lub groźbie, przed sądem i za jego zatwierdzeniem (art. 1019 k.c.).',
      'Kompletujemy dokumenty. Ustalam, kto musi wziąć udział u notariusza albo kogo sąd wezwie na rozprawę.',
      'U notariusza: protokół dziedziczenia, akt i wpis do Rejestru Spadkowego. W sądzie: wniosek, rozprawa i postanowienie, które sąd po uprawomocnieniu sam wpisuje do tego rejestru (art. 679¹ k.p.c.). Na koniec wniosek o wpis w księdze wieczystej.',
    ],
    faq: [
      {
        q: 'Ile kosztuje akt poświadczenia dziedziczenia, a ile wniosek do sądu?',
        a: 'W sądzie opłata od wniosku wynosi 100 zł (art. 49 ust. 1 pkt 1 u.k.s.c.). Notariuszowi płacisz taksę za protokół i akt, uzgodnioną z nim, nie wyższą niż stawki maksymalne z rozporządzenia (art. 5 § 1 pr. not.). W obu drogach dochodzi opłata za wpis do Rejestru Spadkowego (art. 95i § 3 pr. not.). Koszt mojej pracy przy tej sprawie zobaczysz w ofercie.',
      },
      {
        q: 'Ile trwa stwierdzenie nabycia spadku w sądzie?',
        a: 'Ustawa nie podaje czasu sprawy, tylko granice. Postanowienie nie zapadnie przed upływem 6 miesięcy od śmierci, chyba że wszyscy znani spadkobiercy złożyli już oświadczenia (art. 1026 k.c.). Gdy spadkobierców nie da się ustalić, sąd ogłasza wezwanie i rozprawę wyznacza po 3 miesiącach od ogłoszenia (art. 672 i 675 k.p.c.). Granica 6 miesięcy dotyczy też notariusza; u niego akt powstaje zwykle w jeden dzień, gdy są wszyscy i komplet dokumentów.',
      },
      {
        q: 'Czy stwierdzenie nabycia spadku jest obowiązkowe?',
        a: 'Nie ma terminu, w którym musisz je uzyskać; możesz to zrobić także po latach. Bez postanowienia albo zarejestrowanego aktu nie wykażesz jednak praw do spadku wobec banku ani kupującego (art. 1027 k.c.). Jeżeli w spadku jest nieruchomość, wniosek o wpis w księdze wieczystej składasz niezwłocznie (art. 35 ust. 1 u.k.w.h.).',
      },
      {
        q: 'Jakie dokumenty są potrzebne do notariusza albo do sądu?',
        a: 'Odpis aktu zgonu, odpisy aktów stanu cywilnego osób dziedziczących z ustawy i testament, jeżeli jest (art. 95c § 4 pr. not.). Brakujący dokument notariusz może sam uzyskać od urzędu (art. 95da § 1). We wniosku do sądu zamiast pozwanego wymieniasz wszystkich zainteresowanych, czyli osoby, które mogą dziedziczyć (art. 511 § 1 k.p.c.).',
      },
      {
        q: 'Stwierdzenie nabycia spadku i co dalej?',
        a: 'Dalej są wpis w księdze wieczystej, zgłoszenie w urzędzie skarbowym, a przy kilku spadkobiercach ewentualnie dział spadku. Zgłoszenie w 6 miesięcy od uprawomocnienia postanowienia albo zarejestrowania aktu to warunek zwolnienia najbliższej rodziny z podatku (art. 4a ust. 1 pkt 1 i ust. 1a u.p.s.d.). Czy podatek w ogóle wystąpi, oceni doradca podatkowy.',
      },
      {
        q: 'Do którego sądu złożyć wniosek o stwierdzenie nabycia spadku?',
        a: 'Do sądu rejonowego ostatniego miejsca zwykłego pobytu zmarłego, a nie Twojego (art. 507 i 628 k.p.c.). Gdy tego miejsca w Polsce nie da się ustalić, do sądu miejsca, w którym jest majątek spadkowy albo jego część. W braku obu podstaw sądem spadku jest sąd rejonowy dla m.st. Warszawy (art. 628 k.p.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 922, 925, 926, 945, 1012, 1015, 1018, 1019 i 1025–1027 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'nabycie spadku, tytuł powołania, przyjęcie i odrzucenie, dowód dziedziczenia',
        },
        { ref: 'art. 507, 511, 628, 669–677 i 679¹ k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'sąd spadku, wniosek, rozprawa, ogłoszenie, wpis do Rejestru Spadkowego' },
        { ref: 'art. 5 i 95a–95p pr. not.', act: 'Prawo o notariacie', tj: 'Dz.U. 2026 poz. 614', eli: 'DU/1991/91', note: 'akt poświadczenia dziedziczenia, projekt protokołu, Rejestr Spadkowy, taksa' },
        {
          ref: 'art. 42 ust. 3 i art. 49 ust. 1 pkt 1 u.k.s.c.',
          act: 'Ustawa o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'opłata od wniosku i od wpisu spadkobierców w księdze',
        },
        { ref: 'art. 35 ust. 1 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'obowiązek złożenia wniosku o wpis właściciela' },
        { ref: 'art. 4a ust. 1 pkt 1 i ust. 1a u.p.s.d.', act: 'Ustawa o podatku od spadków i darowizn', tj: 'Dz.U. 2026 poz. 478', eli: 'DU/1983/207', note: '6 miesięcy na zgłoszenie nabycia' },
      ],
    },
    docs: [
      'Odpis aktu zgonu',
      'Odpisy aktów urodzenia i małżeństwa osób, które dziedziczą z ustawy, jeśli masz',
      'Testament albo informacja, gdzie może być przechowywany, jeśli jest',
      'Oświadczenia o przyjęciu lub odrzuceniu spadku złożone przez rodzinę, jeśli były',
      'Numer księgi wieczystej nieruchomości zmarłego, jeśli znasz',
    ],
    guides: ['stwierdzenie-nabycia-spadku'],
    seeAlso: ['uregulowanie-stanu-prawnego', 'obsluga-sprzedazy'],
    cta: {
      heading: 'Potwierdź, że dziedziczysz — i odzyskaj kontrolę nad majątkiem.',
      lead: 'Opisz sprawę w formularzu, a w 24 h roboczych bezpłatnie odpowiem, czy wystarczy notariusz. Razem z odpowiedzią przyjdzie oferta z ceną i terminem, a płacisz dopiero wtedy, gdy ją zaakceptujesz.',
    },
    updated: '2026-10-10',
    faqHeading: 'Koszt, czas i dokumenty: pytania rodziny po śmierci bliskiej osoby',
  },

  'podzial-majatku-po-rozwodzie': {
    h1: 'Podział majątku po rozwodzie',
    h1Full: 'Podział majątku po rozwodzie: mieszkanie, kredyt hipoteczny i spłata',
    topic: 'Podział majątku wspólnego',
    metaDesc: 'Majątek po rozwodzie dzielisz u notariusza albo w sądzie, co do zasady po równo. Przy mieszkaniu z kredytem zwolnić Cię z długu może tylko bank.',
    subtitle: 'Po rozwodzie zostało wspólne mieszkanie albo dom, często z kredytem, i nie wiesz, kto je zatrzyma? Majątek dzielisz z byłym małżonkiem umową u notariusza albo w sądzie, a udziały są co do zasady równe (art. 43 § 1 k.r.o.). Prowadzę podział, w którym chodzi o nieruchomość: wycenę, spłatę, nakłady i raty kredytu.',
    short: {
      q: 'Jak podzielić mieszkanie z kredytem hipotecznym po rozwodzie?',
      a: 'Jedno z Was przejmuje mieszkanie i spłaca drugie, sprzedajecie je albo odkładacie podział. Podział nie zwalnia z kredytu, bo zwolnić z długu może tylko bank (art. 373, 508 i 519 § 2 k.c.). Hipoteka zostaje na mieszkaniu bez względu na to, kto jest właścicielem (art. 65 ust. 1 u.k.w.h.).',
      facts: [
        [
          'Gdzie',
          'Przy zgodzie: akt notarialny, gdy w majątku jest nieruchomość (art. 46 k.r.o., art. 1037 § 2 k.c.). Bez zgody: sąd rejonowy miejsca położenia majątku (art. 507 i 566 k.p.c.)',
        ],
        [
          'Udziały',
          'Równe. Nierówne tylko z ważnych powodów, według przyczynienia się, z pracą przy dzieciach i w domu (art. 43 k.r.o.)',
        ],
        [
          'Twoje pieniądze w mieszkaniu',
          'Zwrot nakładów z majątku osobistego, np. z darowizny rodziców dla Ciebie, przy podziale (art. 45 § 1–2 k.r.o.)',
        ],
        [
          'Podział w wyroku rozwodowym',
          'Na wniosek jednego z Was, jeżeli nie spowoduje to nadmiernej zwłoki w sprawie o rozwód (art. 58 § 3 k.r.o.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Wniosek o podział 1000 zł, ze zgodnym projektem 300 zł (art. 38 u.k.s.c.). Wpis nowego właściciela w księdze wieczystej 150 zł (art. 43 pkt 1 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Co wchodzi do podziału po rozwodzie, a co zostaje Twoje',
    intro: 'Majątek wspólny to co do zasady wszystko, co Ty albo były małżonek nabyliście w czasie trwania wspólności, np. mieszkanie kupione po ślubie, nawet jeśli w akcie jest jedno nazwisko (art. 31 § 1 k.r.o.). Do podziału nie wchodzi majątek osobisty: rzeczy sprzed ślubu, spadek i darowizna, chyba że darczyńca postanowił inaczej, oraz to, co kupiono w zamian za majątek osobisty (art. 33 pkt 1, 2 i 10 k.r.o.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Rozwód za Tobą, a wspólne mieszkanie i kredyt zostały',
    when: [
      {
        b: 'Były małżonek złożył wniosek o podział, a Ty od rozwodu sam płacisz raty kredytu',
        t: 'zbierz potwierdzenia wpłat od dnia rozwodu, a ja zgłoszę te raty w sprawie o podział. Sąd rozstrzyga w niej także o tym, jakie wydatki i nakłady podlegają zwrotowi (art. 567 § 1 k.p.c.).',
      },
      {
        b: 'Chcesz zostać w mieszkaniu i spłacić byłą żonę albo byłego męża',
        t: 'przejmujesz mieszkanie, a drugiej stronie płacisz spłatę. W sądzie termin spłaty i odsetki oznacza postanowienie, a raty mogą trwać łącznie najwyżej 10 lat (art. 212 § 2–3 k.c. w zw. z art. 46 k.r.o.).',
      },
      {
        b: 'Wkład własny dali Twoi rodzice albo pochodził z Twoich oszczędności sprzed ślubu',
        t: 'to był Twój majątek osobisty, jeżeli pieniądze miałeś przed ślubem albo rodzice podarowali je Tobie i nie postanowili inaczej (art. 33 pkt 1–2 k.r.o.). Zwrotu żądasz przy podziale, chyba że pieniądze poszły na potrzeby rodziny i nie zwiększyły wartości majątku (art. 45 § 1–2 k.r.o.).',
      },
      {
        b: 'Były małżonek mieszka w mieszkaniu sam i nie chce się wyprowadzić',
        t: 'jeżeli mieszkanie przypadnie Tobie, sąd w postanowieniu o podziale orzeka także o jego opróżnieniu i wyznacza termin (art. 624 w zw. z art. 688 i art. 567 § 3 k.p.c.).',
      },
    ],
    doForTitle: 'Co robię w sprawie o podział mieszkania, domu i kredytu',
    doFor: [
      'Ustalam, co jest w majątku wspólnym, a co w osobistym: daty zakupów, źródło pieniędzy, darowizny, umowę majątkową (art. 31, 33 i 47 k.r.o.).',
      'Przy porozumieniu piszę projekt umowy o podział dla notariusza: kto zatrzymuje mieszkanie, ile i kiedy płaci, jak rozliczacie raty po rozwodzie i co, jeśli bank nie zwolni drugiej osoby z kredytu.',
      'We wniosku do sądu zgłaszam Twoje nakłady z dowodami, raty spłacone po rozwodzie i, gdy są podstawy, żądanie nierównych udziałów (art. 567 § 1 k.p.c.).',
      'Sprawdzam operat biegłego o wartości mieszkania: datę, stan lokalu i przyjęte transakcje; uwagi składam na piśmie.',
      'Piszę do banku wniosek o zwolnienie z kredytu osoby, która oddaje mieszkanie (art. 373 i 508 k.c.), a gdy kredyt ma tylko jedno z Was, o zgodę na przejęcie długu (art. 519 § 2 pkt 2 k.c.).',
    ],
    lists: [
      {
        eyebrow: 'Mieszkanie z kredytem',
        title: 'Przejęcie, sprzedaż albo podział później: co każdy wariant znaczy dla kredytu',
        kind: 'check',
        items: [
          {
            b: 'Przejmujesz mieszkanie i spłacasz byłego małżonka',
            t: 'Ty dostajesz własność, druga strona spłatę. Z kredytu wychodzi tylko za zgodą banku, a do tego czasu odpowiadacie tak, jak stanowi umowa kredytu (art. 369 k.c.).',
          },
          {
            b: 'Sprzedajecie mieszkanie',
            t: 'potrzebna jest co do zasady zgoda Was obojga (art. 199 k.c. w zw. z art. 46 k.r.o.). Bank może zaspokoić się z mieszkania także u nowego właściciela (art. 65 ust. 1 u.k.w.h.), więc spłatę kredytu z ceny ustalacie przed aktem.',
          },
          { b: 'Odkładacie podział', t: 'mieszkanie zostaje wspólne, a kredyt spłacacie według umowy z bankiem. Zbieraj potwierdzenia rat, które płacisz sam.' },
        ],
      },
    ],
    stepsHeading: 'Jak dojść od wspólnego mieszkania do własnego wpisu w księdze wieczystej',
    steps: [
      'Piszesz w formularzu, skąd był wkład własny, ile zostało kredytu i czy chcesz zatrzymać mieszkanie. Bezpłatnie, w ciągu 24 h roboczych, odpisuję, co zrobić najpierw: zebrać dowody nakładów, przygotować umowę czy wniosek do sądu. Do odpowiedzi dołączam ofertę na prowadzenie podziału, z ceną i terminem; zapłata dopiero po jej przyjęciu.',
      'Ustalamy z drugą stroną kwotę i termin spłaty, a z bankiem, czy zwolni z kredytu osobę, która oddaje mieszkanie.',
      'Przy porozumieniu podpisujecie umowę o podział w formie aktu notarialnego (art. 1037 § 2 k.c. w zw. z art. 46 k.r.o.). Umowa co do zasady przenosi własność w dniu podpisania (art. 155 § 1 k.c.), dlatego spłatę, terminy i kredyt sprawdzamy przed aktem.',
      'Bez zgody wniosek trafia do sądu rejonowego miejsca położenia majątku (art. 507 i 566 k.p.c.). Sąd ustala skład i wartość majątku (art. 684 k.p.c.), a o nierównych udziałach może orzec wcześniej, postanowieniem wstępnym (art. 567 § 2 k.p.c.).',
      'Z uprawomocnieniem postanowienia mieszkanie przechodzi na osobę wskazaną przez sąd (art. 624 w zw. z art. 688 i art. 567 § 3 k.p.c.). Potem składamy wniosek o wpis w księdze wieczystej.',
    ],
    faq: [
      {
        q: 'Komu sąd przyzna mieszkanie albo dom po rozwodzie?',
        a: 'Ustawa nie wskazuje tej osoby z góry. Sąd może przyznać mieszkanie jednemu z Was „stosownie do okoliczności”, ze spłatą drugiego, albo zarządzić sprzedaż (art. 212 § 2 k.c. w zw. z art. 46 k.r.o.). Żaden przepis nie przyznaje go automatycznie rodzicowi, z którym mieszkają dzieci. Zgodny wniosek wiąże sąd, o ile projekt jest zgodny z prawem i z zasadami współżycia społecznego. Nie może też rażąco naruszać interesu uprawnionych (art. 622 § 2 k.p.c.).',
      },
      {
        q: 'Czy sąd może przyznać mi więcej niż połowę majątku?',
        a: 'Tak, ale tylko z ważnych powodów. Udziały ustala się wtedy według tego, w jakim stopniu każde z Was przyczyniło się do powstania majątku. Liczy się też praca przy dzieciach i w domu (art. 43 § 2–3 k.r.o.). Niezależnie od udziałów rozlicza się nakłady z Twojego majątku osobistego (art. 45 § 1 k.r.o.).',
      },
      {
        q: 'Ile zapłacę w sądzie za podział majątku po rozwodzie?',
        a: 'Wniosek o podział kosztuje w sądzie 1000 zł opłaty, a zawierający zgodny projekt podziału 300 zł (art. 38 u.k.s.c.). Przy podziale w sprawie rozwodowej opłata jest taka jak od wniosku o podział (art. 26 ust. 2 u.k.s.c.). Jeśli sąd zleci wycenę mieszkania biegłemu, koszty obejmą też jego wynagrodzenie (art. 5 ust. 1 pkt 3 u.k.s.c.). U notariusza płacicie taksę notarialną. Moje wynagrodzenie podaję w ofercie.',
      },
      {
        q: 'Czy podział majątku po rozwodzie się przedawnia?',
        a: 'Nie. Roszczenie o zniesienie współwłasności nie ulega przedawnieniu (art. 220 k.c.). Do podziału majątku stosuje się je przez art. 46 k.r.o. i art. 1035 k.c. Wniosek złożysz więc także po latach. Dowody nakładów i rat zbieraj jednak od dnia rozwodu, bo to Ty je wykazujesz (art. 6 k.c.).',
      },
      {
        q: 'Mieszkanie kupione przed ślubem: czy podlega podziałowi?',
        a: 'Nie, co do zasady należy do majątku osobistego tego, kto je kupił (art. 33 pkt 1 k.r.o.). Kredyt albo remont opłacony w małżeństwie ze wspólnych pieniędzy właściciel co do zasady zwraca przy podziale (art. 45 § 1–3 k.r.o.). Wyjątek to nakłady konieczne na mieszkanie, które przynosi dochód, np. wynajmowane. Inaczej może być, jeżeli umowa majątkowa rozszerzyła wspólność (art. 47 § 1 k.r.o.).',
      },
      {
        q: 'Dom stoi na działce męża albo żony. Jak to podzielić?',
        a: 'Dom co do zasady należy do właściciela działki, bo budynek jest częścią składową gruntu (art. 48 k.c.). Jeżeli działka była majątkiem osobistym, np. z darowizny tylko dla męża albo żony (art. 33 pkt 2 k.r.o.), dom nie trafia do podziału. Wspólne pieniądze wydane na budowę podlegają zwrotowi (art. 45 § 1 k.r.o.). Sąd orzeka o nich w sprawie o podział (art. 567 § 1 k.p.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 31, 33, 43, 45, 46, 47 i 58 § 3 k.r.o.', act: 'Kodeks rodzinny i opiekuńczy', tj: 'Dz.U. 2026 poz. 236', eli: 'DU/1964/59', note: 'majątek wspólny i osobisty, udziały, nakłady' },
        { ref: 'art. 6, 48, 155, 199, 212, 220, 369, 373, 508, 519, 1035 i 1037 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'spłata i raty, kredyt, przedawnienie' },
        { ref: 'art. 507, 566–567, 622, 624, 684 i 688 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'sąd, nierówne udziały, opróżnienie mieszkania' },
        { ref: 'art. 5, art. 26 ust. 2, art. 38 i art. 43 pkt 1 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty, biegły, wpis w księdze' },
        { ref: 'art. 65 ust. 1 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'hipoteka po zmianie właściciela' },
      ],
    },
    docs: [
      'Wyrok rozwodowy z datą uprawomocnienia albo informacja, na jakim etapie jest rozwód',
      'Akt notarialny zakupu mieszkania albo domu albo numer jego księgi wieczystej',
      'Umowa kredytu hipotecznego i ostatnie zaświadczenie z banku o saldzie',
      'Dowody źródła wkładu własnego: umowa darowizny, wyciągi sprzed ślubu',
      'Potwierdzenia rat zapłaconych przez Ciebie po rozwodzie i rachunki za remonty',
      'Umowa majątkowa małżeńska (intercyza), jeśli ją zawieraliście',
    ],
    guides: [],
    seeAlso: ['obsluga-sprzedazy', 'eksmisja'],
    cta: {
      heading: 'Wspólny dom i kredyt po rozwodzie? Zadbam, żeby podział wyszedł po Twojej stronie.',
      lead: 'Opisz, co macie wspólnego i ile zostało kredytu. Bezpłatną wstępną analizę z pierwszym krokiem wyślę w ciągu 24 h roboczych. Cenę i termin prowadzenia podziału podam w ofercie, a płacisz dopiero po jej akceptacji.',
    },
    updated: '2026-10-10',
  },

  /* ===== BLOK 8 — Najem ===== */
  'bezpieczny-najem': {
    h1: 'Bezpieczny najem dla wynajmującego',
    h1Full: 'Bezpieczny najem dla wynajmującego: umowa najmu okazjonalnego krok po kroku',
    topic: 'Najem okazjonalny',
    metaDesc: 'Najem okazjonalny pozwala odzyskać mieszkanie bez procesu o eksmisję, jeżeli umowa ma akt notarialny najemcy i zgłosisz ją do urzędu skarbowego w 14 dni.',
    subtitle: 'Boisz się wynająć mieszkanie, bo lokator może przestać płacić i nie wyjść? Umowa najmu okazjonalnego z wymaganymi załącznikami, zgłoszona w urzędzie skarbowym w 14 dni, pozwala odzyskać mieszkanie bez procesu o eksmisję (art. 19a–19d u.o.p.l.). Piszę umowę i projekty załączników: oświadczenie najemcy dla notariusza, wskazanie lokalu i zgodę jego właściciela.',
    short: {
      q: 'Czy najem okazjonalny naprawdę pozwala szybko pozbyć się lokatora, który nie płaci?',
      a: 'Tak, jeżeli umowa ma wszystkie załączniki i zgłosiłeś ją w urzędzie skarbowym w terminie (art. 19a ust. 2, art. 19b u.o.p.l.). Po zakończeniu najmu doręczasz najemcy żądanie opróżnienia lokalu z terminem co najmniej 7 dni (art. 19d ust. 3 pkt 3). Gdy najemca nie wyjdzie, sąd nadaje klauzulę wykonalności jego aktowi notarialnemu, bez procesu o eksmisję (art. 19d ust. 4).',
      facts: [
        [
          'Kto może zawrzeć',
          'Właściciel będący osobą fizyczną bez działalności gospodarczej w zakresie wynajmowania lokali; czas oznaczony, najwyżej 10 lat (art. 19a ust. 1 u.o.p.l.)',
        ],
        [
          'Załączniki do umowy',
          'Akt notarialny, w którym najemca poddaje się egzekucji; wskazanie innego lokalu; zgoda jego właściciela albo osoby z tytułem prawnym do niego (art. 19a ust. 2 u.o.p.l.)',
        ],
        [
          'Termin zgłoszenia',
          '14 dni od rozpoczęcia najmu, w urzędzie skarbowym właściwym dla miejsca zamieszkania właściciela (art. 19b ust. 1 u.o.p.l.)',
        ],
        [
          'Kaucja',
          'Najwyżej 6-krotność miesięcznego czynszu; zwrot w ciągu miesiąca od opróżnienia lokalu (art. 19a ust. 4 i 5 u.o.p.l.)',
        ],
        [
          'Wypowiedzenie za zaległości',
          'Możliwe przy zwłoce za co najmniej 3 pełne okresy płatności, po pisemnym uprzedzeniu i miesięcznym terminie na zapłatę (art. 19e, art. 11 ust. 2 pkt 2 u.o.p.l.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '50 zł od wniosku o nadanie klauzuli wykonalności aktowi notarialnemu najemcy (art. 71 pkt 1 u.k.s.c., stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Co się zmienia, gdy lokator nie chce się wyprowadzić',
    intro: 'Różnica między zwykłym a okazjonalnym najmem wychodzi dopiero wtedy, gdy lokator nie chce się wyprowadzić. Przy zwykłym najmie potrzebny jest pozew, a sąd w wyroku orzeka, czy lokatorowi przysługuje najem socjalny lokalu (art. 14 ust. 1 ustawy o ochronie praw lokatorów, dalej: u.o.p.l.). Ile trwa taka sprawa, opisuję we wpisie o czasie eksmisji lokatora. Przy najmie okazjonalnym tytułem egzekucyjnym jest akt notarialny, w którym najemca poddał się egzekucji (art. 777 § 1 pkt 4 k.p.c.). Jeżeli zgłosiłeś umowę w terminie z art. 19b ust. 1, nie stosuje się przepisów o lokalu socjalnym i okresie ochronnym (art. 19e u.o.p.l.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Wynajmujesz mieszkanie i boisz się lokatora, który nie płaci',
    when: [
      { b: 'Najemca już się wprowadził, a umowy nikt jeszcze nie zgłosił.', t: 'Masz 14 dni od dnia rozpoczęcia najmu, nie od podpisu umowy (art. 19b ust. 1 u.o.p.l.). Ten termin już biegnie.' },
      {
        b: 'Masz umowę „z internetu” z nagłówkiem „najem okazjonalny”.',
        t: 'Sam nagłówek nie chroni. Bez aktu notarialnego najemcy i bez zgłoszenia w terminie nie ma opróżnienia lokalu bez procesu (art. 19a ust. 2 pkt 1, art. 19b ust. 3 u.o.p.l.).',
      },
      {
        b: 'Planujesz wynajem na kilka lat i chcesz podnosić czynsz.',
        t: 'Umowa trwa najwyżej 10 lat, a czynsz podniesiesz wyłącznie na warunkach z umowy (art. 19a ust. 1, art. 19c ust. 2 u.o.p.l.). Wpisuję je przed podpisem.',
      },
      {
        b: 'Wynajmujesz kilka mieszkań w ramach firmy.',
        t: 'Jeżeli prowadzisz działalność gospodarczą w zakresie wynajmowania lokali, najem okazjonalny jest niedostępny, a możesz zawrzeć najem instytucjonalny (art. 19a ust. 1, art. 19f ust. 1 u.o.p.l.).',
      },
    ],
    doForTitle: 'Co przygotowuję przed podpisem i po zakończeniu najmu',
    doFor: [
      'Ustalam, który tryb jest dla Ciebie dostępny: okazjonalny, instytucjonalny albo zwykły. Przy kilku lokalach daję jeden wzór umowy dla kolejnych najemców.',
      'Piszę umowę w formie pisemnej, wymaganej pod rygorem nieważności (art. 19a ust. 6 u.o.p.l.): czynsz, opłaty, podwyżki, kaucja, naprawy, wypowiedzenie.',
      'Przygotowuję projekt oświadczenia najemcy dla notariusza i wzór zgody właściciela wskazanego lokalu, na Twoje żądanie z podpisem notarialnie poświadczonym (art. 19a ust. 2 pkt 3).',
      'Dołączam protokół zdawczo-odbiorczy ze stanem lokalu i liczników do rozliczenia kaucji.',
      'Przygotowuję zgłoszenie do urzędu skarbowego z datą, do której trzeba je złożyć.',
      'Po zakończeniu najmu piszę żądanie opróżnienia lokalu (z urzędowo poświadczonym podpisem, art. 19d ust. 2) i wniosek o klauzulę wykonalności z załącznikami (art. 19d ust. 4 u.o.p.l.).',
    ],
    lists: [
      {
        eyebrow: 'Porównanie trybów',
        title: 'Sześć różnic między trzema umowami najmu mieszkania',
        kind: 'check',
        items: [
          { b: 'Kto wynajmuje', t: 'okazjonalny: osoba fizyczna bez działalności w zakresie wynajmowania lokali (art. 19a ust. 1 u.o.p.l.); instytucjonalny: osoba lub firma z taką działalnością (art. 19f ust. 1).' },
          { b: 'Akt notarialny najemcy', t: 'okazjonalny i instytucjonalny: tak, z poddaniem się egzekucji (art. 19a ust. 2 pkt 1, art. 19f ust. 3); zwykły: nie, eksmisja idzie przez pozew.' },
          {
            b: 'Lokal, do którego najemca się wyprowadzi',
            t: 'okazjonalny: tak, ze zgodą jego właściciela (art. 19a ust. 2 pkt 2 i 3); instytucjonalny: nie, a najemca przyjmuje do wiadomości brak prawa do najmu socjalnego lokalu i pomieszczenia tymczasowego (art. 19f ust. 3).',
          },
          { b: 'Limit kaucji', t: '6-krotność czynszu przy okazjonalnym i instytucjonalnym (art. 19a ust. 4, art. 19f ust. 5); 12-krotność przy zwykłym (art. 6 ust. 1).' },
          { b: 'Zgłoszenie do urzędu skarbowego', t: 'tylko przy okazjonalnym, w 14 dni od rozpoczęcia najmu (art. 19b ust. 1).' },
          {
            b: 'Termin w żądaniu opróżnienia lokalu',
            t: 'okazjonalny: co najmniej 7 dni (art. 19d ust. 3 pkt 3); instytucjonalny: co najmniej 14 dni (art. 19i ust. 3 pkt 3); zwykły: pozew i wyrok, którego od 1 listopada do 31 marca nie wykonuje się, jeżeli nie wskazano lokalu, z wyjątkami (art. 16–17).',
          },
        ],
      },
    ],
    stepsHeading: 'Od wskazania lokalu do zgłoszenia w urzędzie skarbowym',
    steps: [
      'Opisujesz w formularzu, co wynajmujesz, czy w ramach działalności i kiedy najemca się wprowadza. W 24 h roboczych odpisuję, co trzeba przygotować (np. nową umowę albo poprawki w Twoim wzorze), i przesyłam ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Najemca wskazuje lokal, w którym zamieszka w razie egzekucji, i przynosi zgodę jego właściciela albo osoby, która ma do niego tytuł prawny (art. 19a ust. 2 pkt 2 i 3 u.o.p.l.).',
      'Najemca składa u notariusza oświadczenie o poddaniu się egzekucji i opróżnieniu lokalu (art. 19a ust. 2 pkt 1).',
      'Podpisujecie umowę z załącznikami i protokołem zdawczo-odbiorczym, a najemca wpłaca kaucję.',
      'W 14 dni od rozpoczęcia najmu zgłaszasz umowę w urzędzie skarbowym i zachowujesz potwierdzenie do wniosku o klauzulę (art. 19b ust. 1, art. 19d ust. 4 pkt 3). Ustawa nie przewiduje przywrócenia tego terminu.',
    ],
    faq: [
      {
        q: 'Kto płaci notariuszowi przy najmie okazjonalnym?',
        a: 'Ustawa o ochronie praw lokatorów nie wskazuje, kto ponosi ten koszt, więc zapisuję to w umowie najmu. Wynagrodzenie notariusza za oświadczenie najemcy ma limit w art. 19a ust. 7 u.o.p.l. Opłata sądowa od wniosku o klauzulę wykonalności wynosi 50 zł (art. 71 pkt 1 u.k.s.c.).',
      },
      {
        q: 'Co jeśli właściciel lokalu zastępczego wycofa zgodę albo sprzeda mieszkanie?',
        a: 'Najemca ma 21 dni na wskazanie innego lokalu i zgodę jego właściciela (art. 19a ust. 3 u.o.p.l.). Termin liczy się od dnia, w którym dowiedział się, że stracił możliwość zamieszkania we wskazanym lokalu. Jeżeli tego nie zrobi, możesz wypowiedzieć umowę na piśmie z co najmniej 7-dniowym okresem wypowiedzenia (art. 19d ust. 5).',
      },
      {
        q: 'Czy muszę zgłosić umowę do urzędu skarbowego i co, jak nie zdążę w 14 dni?',
        a: 'Tak, w 14 dni od dnia rozpoczęcia najmu, do naczelnika urzędu skarbowego właściwego dla Twojego miejsca zamieszkania (art. 19b ust. 1 u.o.p.l.). Bez zgłoszenia w terminie nie stosuje się art. 19d, czyli opróżnienia lokalu na podstawie aktu notarialnego (art. 19b ust. 3). Najemcę chroni wtedy cała ustawa, także okres ochronny od 1 listopada do 31 marca (art. 16, art. 19e).',
      },
      {
        q: 'Mam firmę. Czy mogę zawrzeć najem okazjonalny?',
        a: 'Tak, jeżeli wynajmujesz jako osoba fizyczna, a Twoja działalność nie obejmuje wynajmowania lokali (art. 19a ust. 1 u.o.p.l.). Spółka z o.o. go nie zawrze, bo przepis wymaga właściciela będącego osobą fizyczną. Przy działalności w zakresie wynajmowania lokali możesz zawrzeć najem instytucjonalny (art. 19f ust. 1).',
      },
      {
        q: 'Jakie są minusy najmu okazjonalnego dla właściciela?',
        a: 'Najważniejsze są cztery: niższa kaucja, czynsz związany umową, czas oznaczony i formalności przed wynajmem (notariusz, wskazany lokal, zgłoszenie). Kaucja wynosi najwyżej 6-krotność czynszu zamiast 12-krotności, a umowa trwa najwyżej 10 lat (art. 19a ust. 1 i 4, art. 6 ust. 1 u.o.p.l.). Czynsz podniesiesz tylko na warunkach z umowy (art. 19c ust. 2).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 6 ust. 1, 11 ust. 2, 14 ust. 1, 16, 17, 19a–19j, 25d',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Najem okazjonalny i instytucjonalny: kto może zawrzeć, załączniki, kaucja, zgłoszenie, opróżnienie lokalu.',
        },
        { ref: 'art. 777 § 1 pkt 4', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Akt notarialny z poddaniem się egzekucji jako tytuł egzekucyjny.' },
        { ref: 'art. 71 pkt 1', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata od wniosku o klauzulę wykonalności do aktu notarialnego.' },
      ],
    },
    docs: [
      'Numer księgi wieczystej mieszkania, które chcesz wynająć albo już wynajmujesz',
      'Wzór umowy najmu, którego dziś używasz, jeśli masz',
      'Informacja, czy prowadzisz działalność gospodarczą i czy obejmuje wynajem lokali',
      'Planowana data rozpoczęcia najmu i wysokość czynszu',
      'Adres lokalu wskazanego przez najemcę, jeśli już go znasz',
      'Jeśli umowa już trwa: kopia oświadczenia najemcy złożonego u notariusza i dowód złożenia zgłoszenia w urzędzie skarbowym',
    ],
    guides: ['jak-bezpiecznie-wynajac-mieszkanie-poradnik', 'ile-trwa-eksmisja-lokatora', '5-nielegalnych-sposobow-na-wyrzucenie-lokatora', 'umowa-najmu-mieszkania-rodzaje'],
    seeAlso: ['obsluga-zakupu', 'obsluga-prawna-operatorow-najmu'],
    cta: {
      heading: 'Wynajmuj spokojnie — z umową, która naprawdę Cię chroni.',
      lead: 'Napisz, kiedy najemca ma się wprowadzić. W 24 h roboczych bezpłatnie odpiszę, które załączniki trzeba przygotować przed tym dniem, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
    faqHeading: 'Pytania wynajmujących przed podpisaniem umowy',
  },

  'analiza-umowy-najmu': {
    h1: 'Analiza umowy najmu (dla najemcy)',
    h1Full: 'Analiza umowy najmu (dla najemcy): zapisy do zmiany przed podpisem',
    topic: 'Umowa najmu',
    metaDesc: 'Przed podpisem umowy najmu mieszkania sprawdź kaucję (do 12 czynszów, przy najmie okazjonalnym do 6), wypowiedzenie, naprawy i podwyżki czynszu.',
    subtitle: 'Masz podpisać umowę najmu mieszkania od właściciela albo pośrednika i nie wiesz, co Ci grozi? Sprawdź kaucję, wcześniejsze wypowiedzenie, naprawy i podwyżki czynszu: przy zwykłym najmie kaucja to najwyżej 12 czynszów (art. 6 ust. 1 ustawy o ochronie praw lokatorów). Czytam umowę przed podpisem, liczę, ile zapłacisz w najgorszym wariancie, i daję listę zapisów do zmiany z nowym brzmieniem.',
    short: {
      q: 'Na co zwrócić uwagę w umowie najmu mieszkania, zanim ją podpiszesz?',
      a: 'Najpierw na zapisy, które ustawa zostawia stronom: kiedy wcześniej wypowiesz umowę na czas określony (art. 673 § 3 k.c.) i kto robi naprawy (art. 6f ustawy o ochronie praw lokatorów, dalej: u.o.p.l.). Potem na zapisy sprzeczne z ustawą, np. kaucję ponad 12 czynszów (art. 6 ust. 1 u.o.p.l.) i wypowiedzenie właściciela bez przyczyny ustawowej przy zwykłym najmie (art. 11 ust. 1).',
      facts: [
        [
          'Kaucja',
          'Najwyżej 12-krotność miesięcznego czynszu z dnia zawarcia umowy; przy najmie okazjonalnym i instytucjonalnym 6-krotność (art. 6 ust. 1, art. 19a ust. 4, art. 19f ust. 5 u.o.p.l.)',
        ],
        [
          'Wcześniejsze wyjście z umowy na czas określony',
          'W wypadkach wpisanych do umowy (art. 673 § 3 k.c.); z ustawy m.in. przy wadach mieszkania zagrażających zdrowiu (art. 682 k.c.)',
        ],
        [
          'Wypowiedzenie przez właściciela',
          'Przy zwykłym najmie właściciel nie wypowie umowy bez przyczyny z ustawy; wypowiedzenie musi być na piśmie pod rygorem nieważności i podawać przyczynę (art. 11 ust. 1 u.o.p.l.)',
        ],
        [
          'Podwyżka czynszu',
          'Przy zwykłym najmie na czas nieoznaczony: pisemne wypowiedzenie wysokości czynszu z co najmniej 3-miesięcznym terminem (art. 8a ust. 1–3 u.o.p.l.); przy najmie okazjonalnym i instytucjonalnym tylko według umowy (art. 19c ust. 2, art. 19h ust. 2)',
        ],
        [
          'Forma umowy',
          'Najem na ponad rok bez pisma uważa się za zawarty na czas nieoznaczony (art. 660 k.c.); najem okazjonalny i instytucjonalny bez pisma jest nieważny (art. 19a ust. 6, art. 19g ust. 1 u.o.p.l.)',
        ],
      ],
    },
    introHeading: 'Co ustala ustawa, a co zostaje do ustalenia z właścicielem',
    intro: 'Projekt umowy najmu pisze zwykle właściciel albo pośrednik, więc zapisy zabezpieczają przede wszystkim właściciela. Od zapisów, które ustawa zostawia umowie, zależy m.in., ile zapłacisz przy wyprowadzce i czy możesz wyjść wcześniej. Dlatego najpierw ustalam rodzaj najmu: przy najmie okazjonalnym zgłoszonym do urzędu skarbowego i przy instytucjonalnym większość przepisów u.o.p.l. się nie stosuje (art. 19e, 19j u.o.p.l.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Dostałeś projekt do podpisu i coś Cię w nim niepokoi',
    when: [
      {
        b: 'Właściciel chce podpisu do konkretnej daty, a części zapisów nie rozumiesz.',
        t: 'Zapisy, które chcesz zmienić, zgłoś przed podpisem; potem zmiana umowy wymaga zgody właściciela. Datę podpisu podaj w formularzu, żeby termin w ofercie ją uwzględnił.',
      },
      {
        b: 'Umowa to najem okazjonalny i masz pójść do notariusza.',
        t: 'W akcie poddajesz się egzekucji i zobowiązujesz do opróżnienia lokalu. Do umowy dołączasz wskazanie innego lokalu i zgodę jego właściciela albo osoby, która ma do niego tytuł prawny (art. 19a ust. 2 u.o.p.l.). Jeżeli właściciel zgłosił najem do urzędu skarbowego, a Ty po końcu najmu nie wyprowadzisz się mimo pisemnego żądania z terminem co najmniej 7 dni, składa on do sądu wniosek o klauzulę wykonalności do tego aktu (art. 19b ust. 3, art. 19d ust. 2–4).',
      },
      {
        b: 'Wynajmujesz od firmy albo funduszu, a nie od osoby prywatnej.',
        t: 'Gdy wynajmowanie lokali to działalność gospodarcza firmy, umowa może być najmem instytucjonalnym z Twoim oświadczeniem u notariusza (art. 19f ust. 1 i 3 u.o.p.l.). Zapisy z wzoru firmy, których z Tobą nie uzgodniono, poza jednoznacznie określonym czynszem, nie wiążą Cię, jeżeli są sprzeczne z dobrymi obyczajami i rażąco naruszają Twoje interesy (art. 385¹ § 1 k.c.).',
      },
      {
        b: 'Mieszkasz bez pisemnej umowy, a właściciel przysłał umowę do podpisu.',
        t: 'Jeżeli umówiliście się ustnie na ponad rok, prawo traktuje to jak najem na czas nieoznaczony (art. 660 k.c.). Nowa umowa na czas określony może to zmienić, więc porównuję oba warianty.',
      },
    ],
    doForTitle: 'Co dostajesz: ocenę każdego zapisu i nowe brzmienie',
    doFor: [
      'Każdy zapis oznaczam: niezgodny z ustawą, dopuszczalny, ale niekorzystny, albo bez uwag.',
      'Przy umowie z przedsiębiorcą sprawdzam zapisy z ustawowej listy postanowień niedozwolonych, np. podwyżkę czynszu bez prawa odstąpienia od umowy (art. 385³ pkt 20 k.c.).',
      'Liczę najgorszy wariant: kaucja, opłata za wcześniejsze wyjście i koszt odnowienia lokalu po wyprowadzce.',
      'Daję listę zmian z gotowym brzmieniem, od najważniejszej, a jeśli chcesz, negocjuję je z właścicielem albo pośrednikiem.',
    ],
    lists: [
      {
        eyebrow: 'Przed podpisem',
        title: 'Wypowiedzenie, kara, naprawy, wizyty właściciela: ocena typowych zapisów',
        kind: 'check',
        items: [
          {
            b: '„Wynajmujący może wypowiedzieć umowę w każdym czasie, bez podania przyczyny”',
            t: 'Niezgodny z ustawą przy zwykłym najmie. Właściciel wypowiada tylko z przyczyn ustawowych, np. przy zaległości za 3 pełne okresy płatności, po pisemnym uprzedzeniu i wyznaczeniu miesiąca na zapłatę (art. 11 ust. 1 i ust. 2 pkt 2 u.o.p.l.).',
          },
          {
            b: '„Najemca, który wyprowadzi się przed końcem umowy, płaci 3 czynsze”',
            t: 'Zależy od rodzaju zapisu i wynajmującego. Najpierw sprawdzam, czy umowa w ogóle pozwala Ci ją wypowiedzieć (art. 673 § 3 k.c.). Jeżeli zapis jest karą umowną i jest ona rażąco wygórowana, możesz żądać jej zmniejszenia (art. 484 § 2 k.c.); przy umowie z przedsiębiorcą taka kara albo odstępne to w razie wątpliwości postanowienie niedozwolone (art. 385³ pkt 17 k.c.).',
          },
          {
            b: '„Najemca ponosi koszt wszystkich napraw”',
            t: 'Dopuszczalny, ale do negocjacji. Przy mieszkaniu spoza publicznego zasobu (gminy, innych samorządów, Skarbu Państwa) strony mogą podzielić naprawy inaczej niż ustawa (art. 6f, art. 2 ust. 1 pkt 11 u.o.p.l.).',
          },
          {
            b: '„Po zakończeniu najmu najemca odnawia lokal na własny koszt”',
            t: 'Dopuszczalny: przy zwykłym najmie to obowiązek z ustawy, który umowa może zmienić (art. 6e ust. 1, art. 6f u.o.p.l.). Przy najmie instytucjonalnym i zgłoszonym okazjonalnym art. 6e się nie stosuje (art. 19e, 19j), więc o odnowieniu decyduje przede wszystkim umowa.',
          },
          {
            b: '„Oprócz czynszu najemca płaci inne opłaty wskazane przez wynajmującego”',
            t: 'Zależy od rodzaju najmu. Przy zwykłym najmie oprócz czynszu wynajmujący może pobierać jedynie opłaty niezależne od właściciela, czyli za energię, gaz, wodę, ścieki i odpady (art. 9 ust. 5, art. 2 ust. 1 pkt 8 u.o.p.l.); przy okazjonalnym i instytucjonalnym umowa może stanowić inaczej (art. 19c ust. 1, art. 19h ust. 1).',
          },
          {
            b: '„Wynajmujący może wejść do lokalu w każdym czasie”',
            t: 'Szerszy niż ustawa, do zmiany. Na przegląd lokalu wpuszczasz właściciela po wcześniejszym ustaleniu terminu, a niezwłocznie tylko przy awarii, która wywołuje szkodę albo bezpośrednio jej grozi (art. 10 ust. 1 i 3 u.o.p.l.).',
          },
        ],
      },
    ],
    stepsHeading: 'Od projektu do podpisu: 4 kroki',
    steps: [
      'Wysyłasz przez formularz projekt umowy i datę podpisu. W 24 h roboczych odpisuję bezpłatnie, czy wystarczy przejrzeć zapisy o wypowiedzeniu i kaucji, czy trzeba sprawdzić całą umowę, i wysyłam ofertę z ceną oraz terminem przed datą podpisu. Za sprawdzenie płacisz dopiero, gdy przyjmiesz ofertę.',
      'Po akceptacji oferty dostajesz na piśmie listę zapisów z oceną i nowym brzmieniem, w terminie z oferty.',
      'Zmiany wysyłasz właścicielowi sam albo negocjuję je ja; każdą nową wersję umowy porównuję z poprzednią.',
      'Ostatni krok to podpis umowy, a przy najmie okazjonalnym i instytucjonalnym także akt notarialny, w którym poddajesz się egzekucji (art. 19a ust. 2 pkt 1, art. 19f ust. 3 u.o.p.l.). Przed nimi sprawdzam wersję końcową.',
    ],
    faqHeading: 'Wyprowadzka, naprawy, wizyty właściciela, podwyżka: pytania najemców',
    faq: [
      {
        q: 'Chcę się wyprowadzić przed końcem umowy na czas określony. Kiedy mogę ją wypowiedzieć?',
        a: 'W wypadkach wpisanych do umowy (art. 673 § 3 k.c.) i w kilku wypadkach z ustawy. Bez terminów wypowiesz najem, gdy wady mieszkania zagrażają zdrowiu Twojemu lub domowników, nawet jeśli znałeś je przy podpisie (art. 682 k.c.). Możesz też, gdy wady uniemożliwiają mieszkanie, a właściciel mimo zawiadomienia nie usunął ich w odpowiednim czasie. Tego drugiego prawa nie masz, jeśli o wadach wiedziałeś przy podpisie (art. 664 § 2 i 3 k.c.).',
      },
      {
        q: 'Kto płaci za naprawy w wynajmowanym mieszkaniu?',
        a: 'Co do zasady ten, kogo wskaże umowa; bez zapisu decyduje ustawa. Przy zwykłym najmie Ty naprawiasz i konserwujesz podłogi, okna, drzwi i urządzenia sanitarne oraz malujesz (art. 6b ust. 2 u.o.p.l.). Właściciel naprawia instalacje i wymienia okna, drzwi, podłogi i tynki (art. 6a ust. 3 pkt 3). Jeśli bez naprawy, która należy do właściciela, mieszkanie nie nadaje się do użytku, wyznacz mu termin. Gdy go nie dotrzyma, zlecisz naprawę na jego koszt (art. 663 k.c.).',
      },
      {
        q: 'Czy właściciel może wejść do wynajmowanego mieszkania bez mojej zgody?',
        a: 'Co do zasady nie. Bez Ciebie albo mimo Twojej odmowy wejdzie tylko przy awarii, która wywołuje szkodę albo bezpośrednio jej grozi (art. 10 ust. 1 u.o.p.l.). Wchodzi wtedy w obecności policji lub straży gminnej (miejskiej). Gdy otwiera lokal pod Twoją nieobecność, zabezpiecza go i spisuje protokół (art. 10 ust. 2). Te zasady obowiązują też przy najmie okazjonalnym i instytucjonalnym (art. 19e, 19j).',
      },
      {
        q: 'Mam umowę bez daty końcowej. Jak właściciel może podnieść czynsz?',
        a: 'Na piśmie, wypowiadając dotychczasową wysokość czynszu z co najmniej 3-miesięcznym terminem, na koniec miesiąca (art. 8a ust. 1–3 u.o.p.l.). Podwyżki nie mogą następować częściej niż co 6 miesięcy (art. 9 ust. 1b). W ciągu 2 miesięcy od wypowiedzenia możesz na piśmie odmówić przyjęcia podwyżki. Umowa rozwiąże się wtedy z końcem terminu wypowiedzenia (art. 8a ust. 5 pkt 1).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 22¹, 385¹ § 1, 385³ pkt 17 i 20, 484 § 2, 660, 663, 664 § 2 i 3, 673 § 3, 682',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Forma, naprawy, wcześniejsze wypowiedzenie, kara umowna, postanowienia niedozwolone.',
        },
        {
          ref: 'art. 2 ust. 1 pkt 8 i 11, art. 6 ust. 1, 6a ust. 3, 6b ust. 2, 6e ust. 1, 6f, 8a ust. 1–3 i 5, 9 ust. 1b i 5, 10 ust. 1–3, 11 ust. 1–2',
          act: 'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Zwykły najem mieszkania: kaucja, naprawy, czynsz i opłaty, wejście do lokalu, wypowiedzenie.',
        },
        {
          ref: 'art. 19a ust. 2, 4 i 6, 19b ust. 3, 19c, 19d ust. 2–4, 19e, 19f ust. 1–3 i 5, 19g ust. 1, 19h, 19j',
          act: 'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Najem okazjonalny i instytucjonalny: akt notarialny, kaucja, czynsz, forma.',
        },
      ],
    },
    docsHeading: 'Projekt, ogłoszenie, dane właściciela: co przesłać',
    docs: [
      'Projekt umowy najmu z załącznikami (protokół, lista wyposażenia, regulamin budynku), jeśli je masz',
      'Ogłoszenie albo wiadomości z ustaleniami o czynszu, opłatach, kaucji i dacie wprowadzenia',
      'Przy najmie okazjonalnym albo instytucjonalnym: projekt oświadczenia u notariusza',
      'Dotychczasowa umowa z aneksami, jeżeli przedłużasz najem albo dostałeś nową wersję',
      'Dane wynajmującego z umowy: osoba prywatna czy firma',
    ],
    guides: ['umowa-najmu-mieszkania-rodzaje'],
    seeAlso: ['negocjacje-nieruchomosci', 'obsluga-prawna-najemcow-komercyjnych'],
    cta: {
      heading: 'Zanim podpiszesz najem, sprawdźmy, na co się zgadzasz.',
      lead: 'Prześlij projekt umowy najmu i datę podpisu. W 24 h roboczych odpiszę, czy sprawdzić całą umowę, czy wybrane zapisy, i wyślę ofertę z ceną i terminem sprawdzenia; nic nie płacisz, dopóki jej nie przyjmiesz.',
    },
    updated: '2026-10-10',
  },

  'eksmisja': {
    h1: 'Eksmisja',
    h1Full: 'Eksmisja lokatora: od pozwu po egzekucję i odzyskanie mieszkania',
    topic: 'Eksmisja lokatora',
    metaDesc: 'Eksmisja lokatora wymaga co do zasady wyroku sądu i komornika. Przy najmie okazjonalnym zgłoszonym w 14 dni do urzędu skarbowego proces nie jest potrzebny.',
    subtitle: 'Lokator nie płaci albo najem się skończył, a on nie chce się wyprowadzić? Eksmisja lokatora wymaga co do zasady wyroku sądu, a wykonuje ją komornik. Najem okazjonalny zgłoszony w 14 dni do urzędu skarbowego pozwala pominąć proces: wystarczy żądanie opróżnienia i klauzula wykonalności (art. 19b, 19d u.o.p.l.). Prowadzę sprawę od wypowiedzenia do komornika i dochodzę pieniędzy za każdy miesiąc.',
    short: {
      q: 'Jak eksmitować lokatora, który nie płaci albo nie chce się wyprowadzić?',
      a: 'Przy zwykłym najmie wypowiadasz umowę według art. 11 u.o.p.l., składasz pozew o opróżnienie lokalu, a wyrok wykonuje komornik. Przy najmie okazjonalnym zgłoszonym w 14 dni do urzędu skarbowego zamiast pozwu składasz wniosek o klauzulę wykonalności (art. 19b, 19d u.o.p.l.). Wymiana zamków żadnego z tych kroków nie zastąpi i może skończyć się sprawą karną (art. 191 § 1a k.k.).',
      facts: [
        [
          'Wypowiedzenie przy długu',
          'Co najmniej 3 pełne okresy zaległości, pisemne uprzedzenie z miesiącem na zapłatę, potem pisemne wypowiedzenie z przyczyną, na miesiąc naprzód, na koniec miesiąca (art. 11 ust. 1 i ust. 2 pkt 2 u.o.p.l.); do końca najmu około 5 miesięcy od pierwszej niezapłaconej raty',
        ],
        [
          'Ile trwa całość (z mojej praktyki)',
          'Od kilkunastu miesięcy do kilku lat przy zwykłym najmie; na gminę czekasz bez terminu w przepisach (art. 14 ust. 6 u.o.p.l., art. 1046 § 4 k.p.c.)',
        ],
        [
          'Lokal socjalny',
          'Sąd orzeka o nim z urzędu w wyroku (art. 14 ust. 1 i 3 u.o.p.l.), poza m.in. przemocą w rodzinie i zajęciem lokalu bez tytułu (art. 17 ust. 1); przy lokalu spoza publicznego zasobu może go odmówić także rodzinie z dzieckiem (art. 14 ust. 7)',
        ],
        [
          'Zima',
          'Od 1 listopada do 31 marca komornik nie wykona wyroku bez wskazanego lokalu do przekwaterowania (art. 16 u.o.p.l.); wyjątki: art. 17 i zgłoszony najem okazjonalny (art. 19e)',
        ],
        [
          'Pieniądze za czas zajmowania',
          'Za każdy miesiąc do opróżnienia lokalu odszkodowanie równe czynszowi, który dostałbyś z najmu (art. 18 ust. 1 i 2 u.o.p.l.); po przyznaniu lokalu socjalnego lokator płaci stawkę socjalną, a różnicę do czynszu z umowy pokrywa gmina (art. 18 ust. 3 i 3a)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '200 zł od pozwu o opróżnienie lokalu (art. 27 pkt 11 u.k.s.c.); od żądania zapłaty opłata zależy od kwoty (art. 13 u.k.s.c.); 50 zł od wniosku o klauzulę wykonalności do aktu notarialnego najemcy (art. 71 pkt 1 u.k.s.c.); stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Kiedy sąd i komornik mogą usunąć lokatora i gdzie ucieka czas',
    intro: 'Eksmisja to potoczna nazwa opróżnienia lokalu na podstawie wyroku albo oświadczenia najemcy w formie aktu notarialnego (akt notarialny najemcy) z klauzulą wykonalności nadaną przez sąd. Ustawa o ochronie praw lokatorów (u.o.p.l.) obejmuje lokale służące do zaspokajania potrzeb mieszkaniowych (art. 2 ust. 1 pkt 4) i ogranicza wynajmującego przy wypowiedzeniu, w wyroku i przy egzekucji. Lokatora bez tytułu do innego lokalu komornik nie usunie, dopóki gmina nie wskaże mu tymczasowego pomieszczenia (art. 1046 § 4 k.p.c.). Z mojej praktyki: najwięcej miesięcy wynajmujący tracą na wadliwych wypowiedzeniach i na czekaniu na gminę.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Lokator nie płaci, nie wychodzi albo czekasz na gminę',
    when: [
      {
        b: 'Zbliża się 1 listopada, a lokator dalej mieszka.',
        t: 'Zakaz z art. 16 u.o.p.l. dotyczy tylko wykonania wyroku, więc pozew możesz złożyć także zimą. W tym sezonie zakaz obowiązuje od 1.11.2026 do 31.03.2027, jeżeli lokatorowi nie wskazano lokalu.',
      },
      { b: 'Lokator nie płaci od kilku miesięcy i nie odbiera telefonu.', t: 'Najpierw potrzebne jest pisemne uprzedzenie z miesiącem na zapłatę zaległości (art. 11 ust. 2 pkt 2 u.o.p.l.).' },
      { b: 'Umowa się skończyła, a lokator nie chce się wynieść.', t: 'Zajmuje lokal bez tytułu prawnego. Potrzebny jest wyrok, a za każdy miesiąc należy Ci się odszkodowanie (art. 18 ust. 1 u.o.p.l.).' },
      { b: 'Masz najem okazjonalny z aktem notarialnym najemcy.', t: 'Bez procesu tylko wtedy, gdy umowę zgłoszono naczelnikowi urzędu skarbowego w 14 dni od rozpoczęcia najmu (art. 19b ust. 1 i 3 u.o.p.l.).' },
      { b: 'Lokator ma w wyroku lokal socjalny, a gmina od miesięcy go nie daje.', t: 'Eksmisja czeka na ofertę gminy, a ustawa nie daje gminie terminu (art. 14 ust. 6 u.o.p.l.).' },
    ],
    doForTitle: 'Pisma, które przygotowuję: od uprzedzenia do pozwu przeciw gminie',
    doFor: [
      'Przygotowuję uprzedzenie z miesięcznym terminem do zapłaty, a potem wypowiedzenie z przyczyną (art. 11 u.o.p.l.).',
      'Składam pozew o opróżnienie lokalu razem z żądaniem zaległego czynszu i odszkodowania za każdy miesiąc (art. 18 ust. 1 i 2 u.o.p.l.). Nie czekam z zapłatą do końca eksmisji, bo roszczenia majątkowe się przedawniają (art. 117 § 1 k.c.).',
      'Gdy powodem jest przemoc w rodzinie, rażące naruszanie porządku domowego (np. awantury) albo samowolne zajęcie lokalu, wnoszę, żeby sąd wskazał to w wyroku. Inaczej komornik zastosuje okres ochronny (art. 17 ust. 1 i 2 u.o.p.l.).',
      'Pozywam gminę o odszkodowanie na podstawie art. 417 k.c., gdy nie dostarcza lokalu socjalnego przyznanego wyrokiem (art. 18 ust. 5 u.o.p.l.).',
    ],
    lists: [
      {
        eyebrow: 'Porównanie ścieżek',
        title: 'Zwykły najem, okazjonalny czy sklep: która droga dotyczy Twojego lokalu',
        kind: 'check',
        items: [
          { b: 'Zwykły najem mieszkania', t: 'wypowiedzenie z art. 11, pozew, wyrok z rozstrzygnięciem o lokalu socjalnym (art. 14 ust. 1), komornik. Obowiązuje okres ochronny (art. 16 u.o.p.l.).' },
          {
            b: 'Najem okazjonalny zgłoszony w 14 dni',
            t: 'bez procesu: żądanie opróżnienia z terminem co najmniej 7 dni, klauzula, komornik (art. 19d u.o.p.l.). Bez lokalu socjalnego, okresu ochronnego i tymczasowego pomieszczenia (art. 19e, art. 25d pkt 2). Z mojej praktyki zwykle kilka miesięcy.',
          },
          {
            b: 'Najem instytucjonalny',
            t: 'też bez procesu, z żądaniem dającym co najmniej 14 dni; bez lokalu socjalnego, okresu ochronnego i tymczasowego pomieszczenia (art. 19i ust. 3 pkt 3, art. 19j, art. 25d pkt 4 u.o.p.l.).',
          },
          {
            b: 'Lokal użytkowy (sklep, biuro)',
            t: 'nie jest lokalem w rozumieniu u.o.p.l., bo nie służy do zaspokajania potrzeb mieszkaniowych (art. 2 ust. 1 pkt 4). Nie ma więc lokalu socjalnego ani okresu ochronnego; potrzebny jest tytuł wykonawczy (zwykle wyrok) i komornik.',
          },
          {
            b: 'Ktoś zajął lokal bez umowy',
            t: 'jeżeli sąd wskaże w wyroku samowolne zajęcie, nie stosuje się okresu ochronnego ani przepisów o lokalu socjalnym; lokal socjalny sąd może przyznać tylko wyjątkowo (art. 17 ust. 1, 1a i 2 u.o.p.l.).',
          },
        ],
      },
    ],
    stepsHeading: 'Od pierwszego pisma do wejścia komornika',
    steps: [
      'Opisujesz w formularzu rodzaj umowy, datę zgłoszenia najmu okazjonalnego i od kiedy lokator nie płaci. W 24 h roboczych wskazuję, od którego pisma trzeba zacząć (uprzedzenie, pozew albo wniosek o klauzulę), i przesyłam ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
      'Uprzedzenie i wypowiedzenie. Wypowiedzenie bez formy pisemnej albo bez przyczyny jest nieważne (art. 11 ust. 1 u.o.p.l.), a wtedy kalendarz zaczyna się od nowego uprzedzenia.',
      'Pozew i wyrok. Wyrok zaoczny sąd wyda dopiero po przeprowadzeniu dowodów (art. 15 ust. 4 u.o.p.l.), więc umowę i pisma trzeba mieć od początku.',
      'Komornik. Eksmisję prowadzi komornik przy sądzie, w którego okręgu leży lokal; tu go nie wybierasz (art. 1046 § 1 k.p.c., art. 10 ust. 1 pkt 4 u.k.s.). Najpierw wzywa lokatora do dobrowolnego opróżnienia lokalu.',
      'Czekanie na gminę. Jeżeli sąd nie przyznał lokalu socjalnego, czekanie na tymczasowe pomieszczenie skracasz, wskazując sam pomieszczenie spełniające wymogi z art. 2 ust. 1 pkt 5a u.o.p.l. (art. 1046 § 4 i 5 k.p.c.).',
    ],
    faq: [
      {
        q: 'Ile trwa eksmisja od pozwu do oddania kluczy?',
        a: 'Z mojej praktyki: całość zajmuje zwykle od kilkunastu miesięcy do kilku lat. Przy długu około 5 miesięcy mija do końca najmu (art. 11 u.o.p.l.), a sam proces trwa od kilku do kilkunastu miesięcy. Najwięcej czasu zabiera czekanie na ofertę lokalu socjalnego albo na tymczasowe pomieszczenie od gminy (art. 14 ust. 6 u.o.p.l., art. 1046 § 4 k.p.c.).',
      },
      {
        q: 'Czy mogę sam wymienić zamki albo odciąć prąd?',
        a: 'Nie. Lokator może żądać przywrócenia naruszonego posiadania, a sąd co do zasady nie bada, czy ma prawo do lokalu (art. 344 § 1 k.c.). Gdy w ten sposób istotnie utrudniasz mu korzystanie z mieszkania, żeby wymusić wyprowadzkę, może to być przestępstwo (art. 191 § 1a k.k.).',
      },
      {
        q: 'Czy można eksmitować zimą?',
        a: 'Co do zasady nie, jeżeli lokatorowi nie wskazano lokalu, do którego ma się przenieść. Od 1 listopada do 31 marca komornik wtedy nie wykonuje wyroku (art. 16 u.o.p.l.). Zakaz nie działa, gdy sąd wskazał w wyroku m.in. przemoc w rodzinie albo zajęcie lokalu bez tytułu (art. 17 ust. 1 i 2).',
      },
      {
        q: 'Czy rodzinę z dziećmi da się eksmitować i co z lokalem socjalnym?',
        a: 'Tak. Sąd co do zasady z urzędu bada, czy przyznać lokal socjalny (art. 14 ust. 1 i 3 u.o.p.l.). Przy lokalu spoza publicznego zasobu może go odmówić nawet małoletnim, bo art. 14 ust. 4 wtedy nie działa (art. 14 ust. 7). Jeżeli lokal przyzna, eksmisja czeka na ofertę gminy (art. 14 ust. 6).',
      },
      {
        q: 'Kto mi zapłaci, kiedy gmina latami nie daje lokalu socjalnego?',
        a: 'Gmina, jeżeli wyrok przyznał lokatorowi lokal socjalny, a ona go nie dostarcza (art. 18 ust. 5 u.o.p.l.). Odpowiada na podstawie art. 417 § 1 k.c., więc szkodę musisz wykazać (art. 6 k.c.), np. utraconym czynszem. Lokator płaci w tym czasie odszkodowanie jak za lokal socjalny, a różnicę do czynszu z umowy pokrywa gmina (art. 18 ust. 3a).',
      },
      {
        q: 'Ile kosztuje pozew o eksmisję i czy potrzebuję adwokata?',
        a: 'Opłata od pozwu o opróżnienie lokalu wynosi 200 zł (art. 27 pkt 11 u.k.s.c.), a przy egzekucji dochodzi opłata komornicza. Adwokat nie jest obowiązkowy, bo przymus dotyczy postępowania przed Sądem Najwyższym (art. 87¹ § 1 k.p.c.). Jeżeli wygrasz, lokator co do zasady zwraca Ci na Twoje żądanie niezbędne koszty procesu (art. 98 § 1 k.p.c.). Cenę mojej pracy podaję w ofercie.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2, 11, 14–18, 19a–19j, 25d',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Wypowiedzenie przy długu, lokal socjalny, ochrona zimowa, odszkodowanie, eksmisja bez procesu.',
        },
        { ref: 'art. 87¹, 98 § 1, 1046', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Pełnomocnik, koszty procesu, eksmisja przez komornika.' },
        { ref: 'art. 13, art. 27 pkt 11, art. 71 pkt 1', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłaty od pozwu i od wniosku o klauzulę.' },
        { ref: 'art. 10 ust. 1 pkt 4', act: 'Ustawa o komornikach sądowych', tj: 'Dz.U. 2026 poz. 881', eli: 'DU/2018/771', note: 'Bez wyboru komornika przy opróżnieniu lokalu.' },
        { ref: 'art. 6, 117 § 1, 344 § 1, 417 § 1', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Ciężar dowodu, przedawnienie, ochrona posiadania, odpowiedzialność gminy.' },
        { ref: 'art. 191 § 1a', act: 'Kodeks karny', tj: 'Dz.U. 2025 poz. 383', eli: 'DU/1997/553', note: 'Zmuszanie do wyprowadzki.' },
      ],
    },
    docs: [
      'Umowa najmu z aneksami i, jeśli jest, akt notarialny najemcy o poddaniu się egzekucji',
      'Potwierdzenie zgłoszenia najmu okazjonalnego do urzędu skarbowego',
      'Zestawienie zaległości: kwoty, terminy płatności, wpłaty',
      'Wysłane uprzedzenia, wypowiedzenie i wezwania z dowodami doręczenia',
      'Numer księgi wieczystej lokalu albo akt notarialny nabycia',
      'Wyrok i pisma od komornika lub gminy, jeśli sprawa jest na tym etapie',
    ],
    guides: ['ile-trwa-eksmisja-lokatora', '5-nielegalnych-sposobow-na-wyrzucenie-lokatora'],
    seeAlso: ['flip-mieszkania', 'podzial-majatku-po-rozwodzie'],
    cta: {
      heading: 'Lokator, który nie płaci i nie wychodzi, to nie musi być Twój problem na lata.',
      lead: 'Opisz umowę i od kiedy lokator nie płaci albo kiedy skończył się najem. W 24 h roboczych odpiszę, którą drogą odzyskać lokal, i dostaniesz ofertę z ceną i terminem; do akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'windykacja-czynszu': {
    h1: 'Windykacja czynszu',
    h1Full: 'Windykacja czynszu: gdy najemca nie płaci, od wezwania do komornika',
    topic: 'Zaległy czynsz',
    metaDesc: 'Najemca nie płaci czynszu? Wyślij wezwanie do zapłaty, potem złóż pozew o zapłatę. Raty przedawniają się po 3 latach, a termin kończy się 31 grudnia.',
    subtitle: 'Najemca nie płaci czynszu, zbywa Cię obietnicami albo wyprowadził się z długiem? Zacznij od pisemnego wezwania do zapłaty, a jeżeli nie zadziała, złóż pozew o zapłatę, zanim raty się przedawnią (art. 118 k.c.). Prowadzę sprawę od wezwania po komornika; w formularzu podaj kwotę długu i datę najstarszej raty.',
    short: {
      q: 'Najemca nie płaci czynszu – co robić?',
      a: 'Wyślij pisemne wezwanie do zapłaty z terminem i wyliczeniem rat, a jeżeli najemca nie zapłaci, złóż pozew o zapłatę. Sąd co do zasady wydaje wtedy nakaz zapłaty bez rozprawy (art. 480⁴ § 1, art. 499 k.p.c.). Jeżeli najemca na piśmie uznał dług, opłata od pozwu spada do jednej czwartej (art. 485 § 1 pkt 3 k.p.c., art. 19 ust. 2 u.k.s.c.).',
      facts: [
        [
          'Przedawnienie czynszu',
          '3 lata dla każdej raty osobno, a koniec terminu wypada 31 grudnia; czynsz płatny 10.03.2023 przedawnia się 31.12.2026 (art. 118, art. 120 § 1 k.c.)',
        ],
        [
          'Co przerywa przedawnienie',
          'Pozew albo uznanie długu przez najemcę (art. 123 § 1 k.c.). Po uznaniu termin biegnie od nowa, po pozwie dopiero po zakończeniu sprawy (art. 124 k.c.). Wezwanie do zapłaty go nie przerywa',
        ],
        [
          'Odsetki',
          'Ustawowe za opóźnienie: stopa referencyjna NBP plus 5,5 punktu procentowego, bez wykazywania szkody (art. 481 § 1 i 2 k.c.)',
        ],
        [
          'Czas najemcy na obronę',
          '2 tygodnie na sprzeciw od nakazu upominawczego, miesiąc na zarzuty od nakazu w postępowaniu nakazowym; potem nakaz ma skutki prawomocnego wyroku (art. 480² § 2 pkt 1 i 3, § 4, art. 493 § 1 k.p.c.)',
        ],
        [
          'Koszty procesu',
          'Najemca, który przegra, zwraca Ci na Twoje żądanie koszty niezbędne do dochodzenia czynszu (art. 98 § 1 k.p.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Od pozwu o zapłatę: 30–1000 zł przy kwocie do 20 000 zł, 5% przy wyższej (art. 13 u.k.s.c.); w postępowaniu nakazowym i elektronicznym postępowaniu upominawczym (potocznie e-sąd) jedna czwarta, min. 30 zł (art. 19 ust. 2, art. 20 ust. 1 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Od czego zależy, którą drogą odzyskasz pieniądze od najemcy',
    intro: 'Windykacja czynszu to potoczna nazwa dochodzenia zaległego czynszu i opłat: wezwaniem, w sądzie i przez komornika. Czynsz, czyli umówioną zapłatę za używanie lokalu (art. 659 § 1 k.c.), najemca płaci w umówionym terminie (art. 669 § 1 k.c.). Bez terminu w umowie przy najmie dłuższym niż miesiąc albo na czas nieoznaczony płaci się go z góry, do 10. dnia miesiąca (art. 669 § 2 k.c.). Droga zależy od trzech rzeczy: mieszkanie czy lokal użytkowy, czy najemca na piśmie przyznał dług i z którego roku jest najstarsza rata. Jeżeli chcesz odzyskać też lokal, eksmisję prowadzę równolegle.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Najemca nie płaci, zniknął z długiem albo zbliża się koniec roku',
    when: [
      { b: 'Masz niezapłacone raty czynszu z 2023 r.', t: 'Raty wymagalne w 2023 r. przedawniają się 31.12.2026 (art. 118 k.c.). Bieg przerywa pozew albo uznanie długu przez najemcę (art. 123 § 1 k.c.).' },
      {
        b: 'Najemca nadal mieszka, a Ty chcesz odzyskać pieniądze bez wypowiadania umowy.',
        t: 'O zaległy czynsz pozwiesz bez wypowiedzenia, bo obowiązek zapłaty wynika z terminu w umowie (art. 669 § 1 k.c.). Wypowiedzenie i eksmisja to osobna sprawa.',
      },
      {
        b: 'Najemca sklepu albo biura zalega za 2 miesiące.',
        t: 'Ustawa o ochronie praw lokatorów nie obejmuje lokalu użytkowego (art. 2 ust. 1 pkt 4 u.o.p.l.). Po pisemnym uprzedzeniu i dodatkowym miesiącu na zapłatę wypowiesz najem bez terminów wypowiedzenia (art. 687 k.c.).',
      },
      {
        b: 'Najemca wyprowadził się z długiem, a mieszkał z dorosłym partnerem.',
        t: 'Za czynsz za mieszkanie odpowiadają solidarnie z najemcą stale mieszkające z nim osoby pełnoletnie, za okres swojego zamieszkiwania (art. 688¹ § 1 i 2 k.c.). Wyjątek: pełnoletnie dzieci na utrzymaniu najemcy, które nie mogą utrzymać się same.',
      },
    ],
    doForTitle: 'Jakie pisma przygotowuję i składam za Ciebie',
    doFor: [
      'Rozpisuję zaległość na raty: kwota, termin płatności, data przedawnienia i odsetki ustawowe za opóźnienie każdej z nich.',
      'Wysyłam wezwanie do zapłaty z terminem i wyliczeniem. Przy mieszkaniu, jeżeli chcesz zakończyć najem, piszę je tak, żeby było też uprzedzeniem o zamiarze wypowiedzenia z art. 11 ust. 2 pkt 2 u.o.p.l.',
      'Gdy najemca prosi o raty, przygotowuję porozumienie z pisemnym uznaniem kwoty długu i harmonogramem spłat.',
      'Składam pozew o zapłatę z wnioskiem o nakaz zapłaty i o koszty procesu od najemcy (art. 98 § 1 k.p.c.); raty wymagalne w ostatnich 3 latach mogę dochodzić w e-sądzie (art. 505²⁹a k.p.c.).',
      'Składam wniosek o klauzulę wykonalności i wniosek do komornika, którego możesz wybrać z obszaru sądu apelacyjnego, w którym ma kancelarię komornik właściwy, poza m.in. egzekucją z nieruchomości (art. 10 ust. 1 ustawy o komornikach sądowych).',
      'Po końcu najmu mieszkania pozywam też o odszkodowanie za każdy miesiąc zajmowania lokalu bez tytułu prawnego (art. 18 ust. 1 u.o.p.l.).',
    ],
    stepsHeading: 'Jak wygląda sprawa o czynsz od formularza do komornika',
    steps: [
      'Opisujesz w formularzu rodzaj lokalu, kwotę długu i miesiąc najstarszej niezapłaconej raty. W 24 h roboczych piszę, czy zaczynamy od wezwania, od porozumienia z uznaniem długu, czy od razu od pozwu, np. przy ratach z 2023 r., i przesyłam ofertę z ceną i terminem. Za tę odpowiedź nic nie płacisz, a za sprawę dopiero po przyjęciu oferty.',
      'Wezwanie do zapłaty z terminem i wyliczeniem rat z odsetkami. Wezwanie nie przerywa przedawnienia (art. 123 § 1 k.c.), więc przy ratach z 2023 r. pozew składam bez czekania na termin z wezwania.',
      'Wypowiedzenie najmu, tylko jeżeli chcesz odzyskać też lokal. To krok nieodwracalny: odwołanie wypowiedzenia, które doszło już do najemcy, jest nieskuteczne (art. 61 § 1 k.c.). Przy mieszkaniu poprzedza je pisemne uprzedzenie z miesiącem na zapłatę (art. 11 ust. 2 pkt 2 u.o.p.l.).',
      'Pozew i nakaz zapłaty. Sąd wydaje nakaz na posiedzeniu niejawnym (art. 480⁴ § 1 k.p.c.). Po sprzeciwie nakaz upominawczy traci moc w zaskarżonej części, a przy kwocie do 20 000 zł sprawa toczy się co do zasady w postępowaniu uproszczonym (art. 505 § 2, art. 480¹ § 2, art. 505¹ § 1 k.p.c.).',
      'Klauzula i komornik. Wniosek o klauzulę wykonalności sąd ma rozpoznać w 3 dni (art. 781¹ k.p.c.). Jeżeli nie wskażesz majątku najemcy, komornik ustala go z urzędu (art. 801 § 1 k.p.c.). Gdy jest oczywiste, że egzekucja nie da więcej niż jej koszty, komornik ją umarza (art. 824 § 1 pkt 3 k.p.c.). Dlatego nie mogę obiecać wyniku egzekucji.',
    ],
    faq: [
      {
        q: 'Czy mogę potrącić zaległy czynsz z kaucji?',
        a: 'Tak, ale przy zwykłym najmie mieszkania dopiero po opróżnieniu lokalu, przy rozliczeniu kaucji. Kaucja zabezpiecza to, co najemca jest Ci winien w chwili opróżnienia lokalu (art. 6 ust. 1 u.o.p.l.). Resztę kaucji oddajesz najpóźniej miesiąc po opróżnieniu lokalu (art. 6 ust. 4). Przy lokalu użytkowym tych przepisów się nie stosuje (art. 2 ust. 1 pkt 4), więc liczą się zapisy umowy. Resztę długu dochodzisz pozwem.',
      },
      {
        q: 'Jak szybko dostanę nakaz zapłaty?',
        a: 'Przepisy o postępowaniu upominawczym nie wyznaczają sądowi terminu na wydanie nakazu. Najemca ma 2 tygodnie od doręczenia nakazu upominawczego na sprzeciw (art. 480² § 2 pkt 1 k.p.c.). Wniosek o klauzulę wykonalności sąd rozpoznaje najpóźniej w 3 dni (art. 781¹). Nakazowi z elektronicznego postępowania upominawczego klauzulę nadaje się z urzędu po uprawomocnieniu (art. 782 § 2).',
      },
      {
        q: 'Po ilu latach przedawnia się czynsz?',
        a: 'Po 3 latach, osobno dla każdej raty, a termin kończy się ostatniego dnia roku (art. 118 k.c.). Uznanie długu przerywa bieg i termin liczy się od nowa, a po pozwie dopiero po zakończeniu sprawy (art. 123 § 1, art. 124 k.c.). Czynsz zasądzony prawomocnym wyrokiem albo nakazem przedawnia się po 6 latach (art. 125 § 1 k.c.).',
      },
      {
        q: 'Najemca się wyprowadził i zniknął – da się jeszcze odzyskać pieniądze?',
        a: 'Tak, wyprowadzka nie kończy długu. Jeżeli uprawdopodobnisz, że miejsce pobytu najemcy nie jest znane, sąd ustanowi kuratora i jemu doręczy pozew (art. 143, art. 144 § 1 k.p.c.). Jeżeli najemca nie odbiera poczty pod znanym adresem, sąd zobowiąże Cię do doręczenia pozwu przez komornika (art. 139¹ § 1 k.p.c.).',
      },
      {
        q: 'Czy mogę zatrzymać rzeczy najemcy, które zostały w lokalu?',
        a: 'Tak, w granicach ustawowego prawa zastawu: za czynsz i opłaty zaległe nie dłużej niż rok, bez rzeczy niepodlegających zajęciu (art. 670 § 1 k.c.). Możesz sprzeciwić się ich usunięciu i zatrzymać je do zapłaty lub zabezpieczenia czynszu (art. 671 § 2). Zaspokoisz się z nich tylko przez egzekucję sądową (art. 312, 326 k.c.). Gdy najemca dalej mieszka, nie wymieniaj zamków. Istotne utrudnianie mu korzystania z mieszkania, by wymusić zapłatę, może być przestępstwem z art. 191 § 1a k.k.',
      },
      {
        q: 'Najemca prosi o raty – czy to coś zmienia?',
        a: 'Tak, jeżeli najemca przy tym uznaje dług: przedawnienie biegnie wtedy od nowa (art. 123 § 1 pkt 2, art. 124 § 1 k.c.). Pisemne uznanie z wezwaniem do zapłaty pozwala też pozwać w postępowaniu nakazowym z jedną czwartą opłaty (art. 485 § 1 pkt 3 k.p.c., art. 19 ust. 2 pkt 1 u.k.s.c.). Dlatego proponuję porozumienie na piśmie z kwotą długu, harmonogramem spłat i podpisem najemcy.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 61 § 1, 118, 120 § 1, 123–125, 312, 326, 481, 659, 669–671, 687, 688¹',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Przedawnienie czynszu, odsetki, ustawowe prawo zastawu, wypowiedzenie najmu lokalu, odpowiedzialność domowników.',
        },
        {
          ref: 'art. 98, 139¹, 143–144, 480¹–480⁴, 485, 493, 499, 505, 505¹, 505²⁹a, 781¹, 782, 801, 824',
          act: 'Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'Nakaz zapłaty, sprzeciw i zarzuty, elektroniczne postępowanie upominawcze, doręczenia, klauzula wykonalności, egzekucja.',
        },
        {
          ref: 'art. 2 ust. 1 pkt 4, art. 6 ust. 1 i 4, art. 11 ust. 2 pkt 2, art. 18 ust. 1',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Kaucja, uprzedzenie przed wypowiedzeniem przy zaległości, odszkodowanie po końcu najmu mieszkania.',
        },
        {
          ref: 'art. 13, 19 ust. 2, 20 ust. 1',
          act: 'Ustawa o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'Opłata od pozwu o zapłatę i jej obniżenie w postępowaniu nakazowym i elektronicznym upominawczym.',
        },
        { ref: 'art. 10 ust. 1', act: 'Ustawa o komornikach sądowych', tj: 'Dz.U. 2026 poz. 881', eli: 'DU/2018/771', note: 'Wybór komornika przez wierzyciela.' },
        { ref: 'art. 191 § 1a', act: 'Kodeks karny', tj: 'Dz.U. 2025 poz. 383', eli: 'DU/1997/553', note: 'Granica samopomocy wobec najemcy, który mieszka w lokalu.' },
      ],
    },
    docs: [
      'Umowa najmu z aneksami i protokołem wydania lokalu',
      'Zestawienie zaległości: każda rata z kwotą i terminem płatności oraz wpłaty najemcy',
      'Wezwania do zapłaty, uprzedzenia i wypowiedzenie z dowodami doręczenia, jeśli były',
      'Wiadomości, w których najemca przyznaje dług albo prosi o raty (SMS, e-mail, list), jeśli masz',
      'Faktury albo noty za czynsz, jeśli je wystawiałeś',
      'Ostatni znany adres najemcy i informacja, kto z nim mieszkał',
    ],
    guides: ['ile-trwa-eksmisja-lokatora'],
    seeAlso: ['obsluga-prawna-wspolnot', 'obsluga-prawna-zarzadcow'],
    cta: {
      heading: 'Zaległy czynsz nie musi przepaść. Odzyskam go za Ciebie.',
      lead: 'Napisz, czy najemca dalej mieszka w lokalu, ile wynosi dług i z którego miesiąca jest najstarsza niezapłacona rata. W 24 h roboczych dostaniesz plan pierwszych kroków i ofertę z ceną oraz terminem, a pieniądze wpłacasz dopiero po jej przyjęciu.',
    },
    updated: '2026-10-10',
  },

  'kaucja-najem': {
    h1: 'Kaucja — rozliczenie i spory',
    h1Full: 'Kaucja: rozliczenie i spory – termin zwrotu, potrącenia, waloryzacja',
    topic: 'Kaucja mieszkaniowa',
    metaDesc: 'Właściciel ma miesiąc od opróżnienia mieszkania na zwrot kaucji, po potrąceniu należności z najmu. Pomagam ją odzyskać albo rozliczyć.',
    subtitle: 'Kaucja nie wraca albo wraca pomniejszona o zwykłe zużycie? Właściciel ma miesiąc od opróżnienia lokalu na zwrot kaucji pomniejszonej o należności z najmu (art. 6 ust. 4 u.o.p.l.). Pomagam najemcy ją odzyskać, a wynajmującemu rozliczyć z dowodem do każdego potrącenia.',
    short: {
      q: 'Ile właściciel ma czasu na zwrot kaucji za mieszkanie?',
      a: 'Właściciel ma miesiąc od dnia opróżnienia lokalu, a nie od końca umowy (art. 6 ust. 4 u.o.p.l.). Ten sam termin obowiązuje przy najmie okazjonalnym i instytucjonalnym (art. 19a ust. 5 i art. 19f ust. 6 u.o.p.l.). Po terminie możesz żądać odsetek za opóźnienie od kwoty, która powinna wrócić (art. 481 § 1 k.c.).',
      facts: [
        [
          'Termin zwrotu',
          '1 miesiąc od opróżnienia lokalu, po potrąceniu należności z najmu (art. 6 ust. 4 u.o.p.l.)',
        ],
        [
          'Kwota zwrotu',
          'Czynsz z dnia zwrotu razy krotność przyjęta przy pobraniu, nie mniej niż kaucja pobrana; także przy najmie okazjonalnym i instytucjonalnym (art. 6 ust. 3, art. 19e, art. 19j u.o.p.l.)',
        ],
        [
          'Najwyższa kaucja',
          '12 czynszów przy zwykłym najmie, 6 przy okazjonalnym i instytucjonalnym (art. 6 ust. 1, art. 19a ust. 4, art. 19f ust. 5 u.o.p.l.)',
        ],
        [
          'Zużycie a odnowienie',
          'Za zużycie przy prawidłowym używaniu najemca nie odpowiada (art. 675 § 1 k.c.); przy zwykłym najmie odnawia lokal, o ile umowa nie stanowi inaczej (art. 6e ust. 1, art. 6f u.o.p.l.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Od pozwu: 100 zł przy kwocie ponad 500 do 1500 zł, 200 zł ponad 1500 do 4000 zł, 400 zł ponad 4000 do 7500 zł (art. 13 ust. 1 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Co właściciel może potrącić, a czego nie',
    intro: 'Kaucja zabezpiecza należności z najmu, które wynajmujący ma w dniu opróżnienia lokalu (art. 6 ust. 1 u.o.p.l.), np. zaległy czynsz albo koszt naprawy szkody. Szkodę od zużycia odróżnia porównanie stanu lokalu przy wydaniu i przy zwrocie, dlatego przy zwykłym najmie strony spisują protokół przed wydaniem lokalu; jest on podstawą rozliczeń przy zwrocie (art. 6c u.o.p.l.). Te zasady dotyczą lokali, w których się mieszka (art. 2 ust. 1 pkt 4 u.o.p.l.); przy sklepie czy biurze decyduje przede wszystkim umowa (art. 353¹ k.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pieniądze nie wróciły, wróciły okrojone albo nie wiesz, ile potrącić',
    when: [
      { b: 'Od wyprowadzki minął miesiąc, a pieniędzy nie ma.', t: 'Termin z art. 6 ust. 4 u.o.p.l. upłynął, więc od kwoty, która powinna wrócić, możesz żądać odsetek za opóźnienie (art. 481 § 1 k.c.).' },
      {
        b: 'Właściciel potrącił za malowanie ścian i starte panele.',
        t: 'Za zwykłe zużycie najemca nie odpowiada (art. 675 § 1 k.c.), ale przy zwykłym najmie musi odnowić lokal (art. 6e ust. 1 u.o.p.l.). Decydują rodzaj umowy i jej zapisy.',
      },
      {
        b: 'Oddają Ci tyle, ile wpłaciłeś, choć czynsz wzrósł.',
        t: 'Zwrot liczy się od czynszu z dnia zwrotu (art. 6 ust. 3 u.o.p.l.). Przykład (liczby umowne): kaucja 2000 zł, czyli 1 czynsz, czynsz przy zwrocie 2400 zł, do zwrotu 2400 zł przed potrąceniami.',
      },
      { b: 'Nie było protokołu przy wprowadzeniu.', t: 'Domniemywa się, że lokal wydano w stanie dobrym (art. 675 § 3 k.c.). Wcześniejsze usterki najemca wykazuje innymi dowodami, np. zdjęciami z datą.' },
      { b: 'Wynajmujesz, a najemca zostawił zaległy czynsz albo zniszczenia.', t: 'Potrącasz należności z najmu istniejące w dniu opróżnienia lokalu (art. 6 ust. 1 i 4 u.o.p.l.). Każda pozycja potrzebuje wyliczenia i dowodu.' },
      {
        b: 'Masz najem okazjonalny.',
        t: 'Kaucja to najwyżej 6 czynszów i zabezpiecza też koszty egzekucji opróżnienia lokalu (art. 19a ust. 4 u.o.p.l.). Gdy właściciel zgłosił umowę do urzędu skarbowego, ustawa nie każe Ci odnawiać lokalu (art. 19e, art. 19b ust. 1).',
      },
    ],
    doForTitle: 'Co robię po stronie najemcy, a co po stronie wynajmującego',
    doFor: [
      'Liczę kwotę do zwrotu: kaucję przeliczoną według art. 6 ust. 3 u.o.p.l., minus udokumentowane należności, plus odsetki.',
      'Porównuję protokół z wydania ze stanem lokalu przy zwrocie i oddzielam szkodę od zwykłego zużycia (art. 675 § 1 k.c.).',
      'Sprawdzam umowę: rodzaj najmu, limit kaucji i zapisy o naprawach, które mogą zmieniać obowiązki z ustawy (art. 6f u.o.p.l.).',
      'Najemcy piszę wezwanie do zwrotu z wyliczeniem, wynajmującemu rozliczenie z dowodem do każdego potrącenia.',
      'Składam pozew o zapłatę, reprezentuję Cię w sądzie, a gdy druga strona nie zapłaci, kieruję wyrok z klauzulą wykonalności do komornika (art. 776 k.p.c.).',
    ],
    stepsHeading: 'Wezwanie, rozliczenie, pozew: co robię po kolei',
    steps: [
      'Opisujesz w formularzu umowę, kaucję, datę wyprowadzki i potrącenia. W 24 h roboczych odpisuję, co trzeba zrobić, np. wezwanie, rozliczenie albo pozew, i wysyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Zbieram protokół z wydania lokalu (art. 6c u.o.p.l.) i, jeśli jest, protokół ze zwrotu, a także zdjęcia, korespondencję i rachunki za naprawy.',
      'Wysyłam drugiej stronie wezwanie albo rozliczenie z kwotą wyliczoną według art. 6 ust. 3 u.o.p.l. i terminem zapłaty.',
      'Składam pozew o zapłatę z odsetkami; przy kwocie do 20 000 zł sąd co do zasady prowadzi postępowanie uproszczone (art. 505¹ § 1 k.p.c.). To krok nieodwracalny: kto przegra, zwraca na żądanie drugiej strony koszty procesu (art. 98 § 1 k.p.c.).',
    ],
    faqHeading: 'Pytania o potrącenia, waloryzację i pozew',
    faq: [
      {
        q: 'Co zrobić, gdy wynajmujący nie chce zwrócić kaucji?',
        a: 'Wyślij pisemne wezwanie z wyliczoną kwotą i terminem, a gdy nie zadziała, złóż pozew o zapłatę z odsetkami. Wynajmujący ma na zwrot miesiąc od opróżnienia lokalu (art. 6 ust. 4 u.o.p.l.). Do wezwania dołącz protokół zdania mieszkania, jeżeli go masz.',
      },
      {
        q: 'Czy właściciel może potrącić z kaucji za normalne zużycie ścian i podłóg?',
        a: 'Przy zwykłym najmie co do zasady musisz po wyprowadzce odnowić lokal, np. pomalować ściany (art. 6e ust. 1, art. 6b ust. 2 pkt 9 u.o.p.l.). Sporne jest, czy płacisz też równowartość urządzeń zużytych normalnie, np. kuchenki, bo sądy łączą ten przepis z art. 675 § 1 k.c. Za samo zużycie przy prawidłowym używaniu nie odpowiadasz (art. 675 § 1 k.c.). Umowa najmu lokalu spoza zasobu publicznego może to zmienić (art. 6f). Najem instytucjonalny i okazjonalny zgłoszony do urzędu skarbowego tego obowiązku nie mają (art. 19j, 19e).',
      },
      {
        q: 'Czy kaucja powinna być zwaloryzowana?',
        a: 'Tak, według czynszu z dnia zwrotu, nie mniej niż wpłacona kwota (art. 6 ust. 3 u.o.p.l.). Waloryzacja idzie więc za czynszem, nie za inflacją: jeżeli czynsz się nie zmienił, wraca ta sama kwota.',
      },
      {
        q: 'Czy mogę „odmieszkać” kaucję w ostatnim miesiącu zamiast płacić czynsz?',
        a: 'Nie bez zgody wynajmującego. Kaucja zabezpiecza należności z dnia opróżnienia lokalu i wraca dopiero po nim (art. 6 ust. 1 i 4 u.o.p.l.). Czynsz płacisz w terminie z umowy (art. 669 § 1 k.c.), a potrącenie wymaga, żeby obie wierzytelności były wymagalne (art. 498 § 1 k.c.). Rozliczenie ostatniego miesiąca z kaucji zapiszcie w porozumieniu na piśmie.',
      },
      {
        q: 'Czy opłaca się pozwać właściciela o kaucję i ile to kosztuje?',
        a: 'Płacisz stałą opłatę od pozwu zależną od kwoty; stawki są w tabeli „W skrócie” (art. 13 ust. 1 u.k.s.c.). Po wygranej co do zasady możesz żądać od właściciela zwrotu opłaty i kosztów adwokata do wysokości stawek z przepisów, a po przegranej to Ty je zwracasz (art. 98 § 1 i 3 k.p.c.). Koszt mojej pracy znasz z oferty.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2 ust. 1 pkt 4, art. 6, 6b ust. 2, 6c, 6e, 6f, 19a ust. 4–5, 19b ust. 1, 19e, 19f ust. 5–6, 19j',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Kaucja: limit, waloryzacja, termin zwrotu; protokół i odnowienie lokalu.',
        },
        { ref: 'art. 353¹, 481 § 1, 498 § 1, 669 § 1, 675 § 1 i 3', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Swoboda umów, odsetki, potrącenie, czynsz, zwrot lokalu.' },
        { ref: 'art. 98 § 1 i 3, 505¹ § 1, 776', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Koszty procesu, postępowanie uproszczone, egzekucja.' },
        { ref: 'art. 13 ust. 1', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata stała od pozwu.' },
      ],
    },
    docsHeading: 'Umowa, protokół, zdjęcia: co przygotować',
    docs: [
      'Umowa najmu z aneksami',
      'Potwierdzenie wpłaty kaucji i wysokość czynszu w dniu wpłaty i w dniu wyprowadzki',
      'Protokół zdawczo-odbiorczy z wprowadzenia i z wyprowadzki, jeśli masz',
      'Zdjęcia lokalu z dnia wydania i zwrotu kluczy, jeśli masz',
      'Rozliczenie kaucji od wynajmującego albo lista potrąceń z rachunkami za naprawy, jeśli masz',
      'Korespondencja o kaucji: SMS-y, maile, wezwania, jeśli masz',
    ],
    guides: ['jak-bezpiecznie-wynajac-mieszkanie-poradnik', 'kaucja-za-mieszkanie'],
    seeAlso: ['obsluga-prawna-najemcow-komercyjnych', 'obsluga-prawna-operatorow-najmu'],
    cta: {
      heading: 'Kaucja to Twoje pieniądze — po którejkolwiek stronie umowy stoisz.',
      lead: 'Napisz, ile wynosiła kaucja i co z niej potrącono. W 24 h roboczych odpiszę, co trzeba zrobić, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'obsluga-wynajmujacych': {
    h1: 'Stała obsługa wynajmujących (abonament)',
    h1Full: 'Stała obsługa wynajmujących (abonament): prawnik dla właściciela kilku mieszkań',
    topic: 'Obsługa najmu',
    metaDesc: 'Stała obsługa najmu to jeden prawnik do umów, terminów, zaległości i eksmisji we wszystkich Twoich mieszkaniach, ze wzorem umowy dobranym do trybu najmu.',
    subtitle: 'Wynajmujesz kilka mieszkań, każde na innej umowie, a w jednym lokator przestał płacić? Stała obsługa najmu to jeden prawnik do umów, terminów, zaległości i eksmisji we wszystkich Twoich mieszkaniach. Zaczynam od trybu najmu (art. 19a i 19f u.o.p.l.), bo od niego zależy wzór umowy; Ty przesyłasz listę mieszkań i obecne umowy.',
    short: {
      q: 'Na czym polega obsługa najmu, gdy masz kilka mieszkań na wynajem?',
      a: 'Prowadzę umowy i pisma do lokatorów według jednego wzoru dla danego trybu najmu. Bez działalności gospodarczej w zakresie wynajmowania lokali możesz jako osoba fizyczna zawrzeć najem okazjonalny (art. 19a ust. 1 u.o.p.l.). Przy takiej działalności możesz zawrzeć najem instytucjonalny, a okazjonalnego już nie (art. 19f ust. 1).',
      facts: [
        [
          'Forma umowy okazjonalnej i instytucjonalnej',
          'Umowa i każda jej zmiana na piśmie pod rygorem nieważności (art. 19a ust. 6, art. 19g ust. 1 u.o.p.l.)',
        ],
        [
          'Podwyżka czynszu',
          'W najmie okazjonalnym i instytucjonalnym wyłącznie zgodnie z warunkami określonymi w umowie (art. 19c ust. 2, art. 19h ust. 2 u.o.p.l.)',
        ],
        [
          'Wypowiedzenie z powodu zaległości',
          'Ta sama podstawa przy najmie zwykłym, okazjonalnym i instytucjonalnym: ustawa pozwala wypowiedzieć przy zwłoce za co najmniej 3 pełne okresy płatności, po pisemnym uprzedzeniu z dodatkowym, miesięcznym terminem do zapłaty (art. 11 ust. 2 pkt 2, art. 19e, art. 19j u.o.p.l.); przy zwykłym najmie na czas oznaczony bezpieczniej, gdy umowa wymienia tę przyczynę (art. 673 § 3 k.c.)',
        ],
      ],
    },
    introHeading: 'Kilka mieszkań, jeden wzór umowy i jeden prawnik od najmu',
    intro: 'Kilka wynajmowanych mieszkań to kilka umów, kaucji i terminów, a prędzej czy później także zaległość albo lokator, który nie chce się wyprowadzić. W stałej obsłudze prowadzę prawną stronę najmu wszystkich Twoich mieszkań: umowy, protokoły, pisma do lokatorów i sprawy w sądzie. To nie jest „mieszkanie na abonament” (wynajem z usługami w jednej opłacie) ani zarządzanie nieruchomością, które obejmuje m.in. bieżące administrowanie (art. 184b pkt 4 u.g.n.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kilka mieszkań, różne umowy i lokator, który nie płaci',
    when: [
      {
        b: 'Co kilka miesięcy podpisujesz najem okazjonalny z nowym lokatorem i sam pilnujesz zgłoszenia.',
        t: 'Zgłoszenie do urzędu skarbowego robisz w 14 dni od rozpoczęcia najmu; bez niego nie zadziała opróżnienie lokalu na podstawie aktu notarialnego najemcy (art. 19b ust. 1 i 3 u.o.p.l.).',
      },
      {
        b: 'Lokator w jednym z mieszkań nie płaci czynszu kolejny miesiąc.',
        t: 'Gdy zaległość obejmie 3 pełne okresy płatności, ustawa pozwala wypowiedzieć najem po pisemnym uprzedzeniu i dodatkowym miesiącu na zapłatę (art. 11 ust. 2 pkt 2 u.o.p.l.).',
      },
      { b: 'Każde mieszkanie ma inną umowę: inną kaucję, inne terminy, inne zasady podwyżki.', t: 'Każdą podwyżkę, kaucję i wypowiedzenie liczysz wtedy według innej umowy.' },
      {
        b: 'Kupujesz kolejne mieszkanie na wynajem i nie wiesz, czy to już działalność gospodarcza.',
        t: 'Od tego zależy, czy możesz zawrzeć najem okazjonalny; ustawa o ochronie praw lokatorów nie podaje liczby lokali, od której zaczyna się taka działalność (art. 19a ust. 1, art. 19f ust. 1).',
      },
    ],
    doForTitle: 'Umowy, terminy i pisma do lokatorów we wszystkich Twoich mieszkaniach',
    doFor: [
      'Układam jeden wzór umowy dla Twojego trybu najmu; przy najmie okazjonalnym i instytucjonalnym z warunkami podwyżki czynszu i oświadczeniem najemcy w formie aktu notarialnego o poddaniu się egzekucji (art. 19a ust. 2 pkt 1, art. 19f ust. 3 u.o.p.l.).',
      'Przygotowuję uprzedzenia, wypowiedzenia i pozwy o zapłatę. Przy zwykłym najmie mieszkania ustawa ogranicza przyczyny wypowiedzenia przez właściciela do wymienionych w niej, a wypowiedzenie wymaga pisma, które podaje przyczynę (art. 11 ust. 1 u.o.p.l.).',
      'Pilnuję terminów w każdym mieszkaniu: zgłoszeń najmu okazjonalnego do urzędu skarbowego, końca umów, uprzedzeń i wypowiedzeń.',
      'Po zakończeniu najmu okazjonalnego albo instytucjonalnego piszę żądanie opróżnienia lokalu z terminem co najmniej 7 albo 14 dni od doręczenia, a potem wniosek do sądu o klauzulę wykonalności dla aktu notarialnego (art. 19d ust. 3–4, art. 19i ust. 3 i 5 u.o.p.l.).',
    ],
    stepsHeading: 'Od listy mieszkań do pierwszego wzoru umowy',
    steps: [
      'Opisujesz w formularzu, ile mieszkań wynajmujesz i na jakich umowach. W 24 h roboczych odpisuję, co trzeba zrobić na start (np. przegląd umów, nowy wzór albo pismo do lokatora, który zalega), i wysyłam ofertę z zakresem, ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Przeglądam umowy, protokoły i potwierdzenia zgłoszeń, a potem je ujednolicam: nowy wzór dla kolejnych lokatorów, aneksy tam, gdzie obecny najemca się zgodzi. Podpisany aneks wiąże obie strony, więc warunki sprawdzamy przed podpisem.',
      'Dalej piszesz do mnie, gdy coś się dzieje: nowy najemca, zaległość, koniec umowy, a ja przygotowuję pismo albo aneks.',
    ],
    faq: [
      {
        q: 'Mam kilka mieszkań na wynajem. Czy opłaca się stały prawnik?',
        a: 'Nie ma liczby mieszkań, od której stała obsługa zawsze się opłaca. Ma sens, gdy sprawy wracają: nowy lokator, zgłoszenie najmu okazjonalnego, kaucja, zaległość. Przy jednym mieszkaniu zwykle wystarczy pojedyncza usługa, np. umowa najmu okazjonalnego.',
      },
      {
        q: 'Co obejmuje stała obsługa i czy eksmisja jest w środku?',
        a: 'Zakres, w tym sprawę o zapłatę i o opróżnienie lokalu, zapisujemy w ofercie przed startem. Stały zakres to umowy, aneksy, terminy, pisma do lokatorów i bieżące pytania mailem. Rozliczeń podatkowych z najmu nie prowadzę; pytania podatkowe skieruj do doradcy podatkowego.',
      },
      {
        q: 'Czy przygotujesz jeden wzór umowy dla wszystkich moich mieszkań?',
        a: 'Tak, jeden wzór dla jednego trybu najmu; różnice między Twoimi mieszkaniami (czynsz, kaucja, wyposażenie) idą do załączników. Lokal użytkowy, np. biuro, dostaje osobny wzór, bo lokalem w rozumieniu ustawy o ochronie praw lokatorów jest lokal mieszkalny albo pracownia twórcy (art. 2 ust. 1 pkt 4 u.o.p.l.).',
      },
      {
        q: 'Jak szybko zareagujesz, gdy lokator przestanie płacić?',
        a: 'Pilne sprawy stałych klientów biorę w pierwszej kolejności, a kontakt prowadzę przede wszystkim mailowo. Tempo zakończenia najmu wyznacza jednak ustawa. Wypowiedzenie z powodu zaległości składasz nie później niż na miesiąc naprzód, na koniec miesiąca kalendarzowego (art. 11 ust. 2 u.o.p.l.). Dlatego terminy liczę od pierwszej zaległej raty.',
      },
      {
        q: 'Czy firma zarządzająca najmem zastąpi prawnika?',
        a: 'To dwie różne usługi, które się uzupełniają. Zarządca nieruchomości to przedsiębiorca, którego zakres pracy określa umowa o zarządzanie (art. 184a, art. 185 ust. 2 u.g.n.). Sprawdź w niej, czy obejmuje umowy najmu, wypowiedzenia i sprawy w sądzie; resztę mogę prowadzić obok zarządcy.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2 ust. 1 pkt 4, art. 11 ust. 1 i ust. 2 pkt 2, art. 19a–19j',
          act: 'Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego',
          tj: 'Dz.U. 2023 poz. 725',
          eli: 'DU/2001/733',
          note: 'Zakres ustawy, przyczyny i forma wypowiedzenia, wypowiedzenie z powodu zaległości, najem okazjonalny i instytucjonalny: kto może zawrzeć, forma, podwyżka czynszu, zgłoszenie, żądanie opróżnienia lokalu, klauzula wykonalności.',
        },
        { ref: 'art. 77 § 1', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Forma zmiany umowy, w tym aneksu do umowy najmu.' },
        {
          ref: 'art. 184a, art. 184b pkt 4, art. 185 ust. 2',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'Zarządca nieruchomości, na czym polega zarządzanie i umowa o zarządzanie.',
        },
      ],
    },
    docsHeading: 'Co przesłać o swoich mieszkaniach i umowach',
    docs: [
      'Lista mieszkań: przy każdym rodzaj umowy (zwykła, okazjonalna, instytucjonalna), data końca i czy wynajem jest w działalności gospodarczej',
      'Umowy najmu wszystkich mieszkań z aneksami, a jeśli są, także protokoły zdawczo-odbiorcze',
      'Akty notarialne najemców i daty zgłoszeń najmu okazjonalnego, jeśli je masz',
      'Zestawienie zaległości z datami rat i pisma już wysłane do lokatorów, jeśli są',
    ],
    guides: ['jak-bezpiecznie-wynajac-mieszkanie-poradnik'],
    seeAlso: ['obsluga-prawna-operatorow-najmu', 'obsluga-prawna-zarzadcow'],
    cta: {
      heading: 'Traktujesz najem jak biznes? Miej do niego prawnika na stałe.',
      lead: 'Napisz, co dziś wymaga ruchu: nowa umowa, zaległość czy koniec najmu. W ciągu 24 h roboczych bezpłatnie wskażę, co zrobić najpierw, i prześlę ofertę z zakresem, ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  /* ===== BLOK 12 — Roszczenia wobec dewelopera ===== */
  'kary-za-opoznienie-dewelopera': {
    h1: 'Kary umowne za opóźnienie dewelopera',
    h1Full: 'Kary umowne za opóźnienie dewelopera: wyliczenie, odstąpienie, odszkodowanie',
    topic: 'Kara umowna',
    metaDesc: 'Jeżeli umowa przewiduje karę za opóźnienie dewelopera, należy Ci się ona bez względu na wysokość szkody. Wyliczam ją, wzywam do zapłaty i wnoszę pozew.',
    subtitle: 'Termin z umowy minął, a deweloper wciąż nie przeniósł na Ciebie własności mieszkania? Kara umowna za opóźnienie dewelopera, jeżeli przewiduje ją umowa, należy Ci się bez względu na wysokość szkody (art. 484 § 1 k.c.). Wyliczam ją, wzywam dewelopera do zapłaty, a gdy nie płaci, prowadzę sprawę w sądzie.',
    short: {
      q: 'Deweloper się spóźnia – ile mi się należy?',
      a: 'Tyle, ile przewiduje Twoja umowa: kara umowna należy się w zastrzeżonej wysokości, bez względu na wysokość szkody (art. 484 § 1 k.c.). Przykład (liczby przykładowe): kara 0,01% ceny za dzień, cena 500 000 zł i 90 dni opóźnienia dają 4 500 zł. Bez kary i bez odsetek w umowie deweloper płaci Ci rekompensatę (art. 39 ust. 2 ustawy deweloperskiej, dalej: u.d.). Odpowiada ona odsetkom ustawowym za opóźnienie, które należałyby się deweloperowi, gdybyś to Ty spóźnił się z zapłatą.',
      facts: [
        [
          'Kara umowna',
          'w wysokości z umowy, jeżeli strony ją przewidziały (art. 35 ust. 1 pkt 14 u.d.)',
        ],
        [
          'Brak kar i odsetek w umowie',
          'rekompensata równa odsetkom ustawowym za opóźnienie, które należałyby się deweloperowi (art. 39 ust. 2 u.d.)',
        ],
        ['Odszkodowanie ponad karę', 'gdy strony tak postanowiły (art. 484 § 1 zd. 2 k.c.)'],
        [
          'Odstąpienie od umowy',
          'po bezskutecznym upływie 120 dni wyznaczonych deweloperowi; kara za okres opóźnienia zostaje (art. 43 ust. 3 u.d.)',
        ],
        [
          'Przedawnienie kary',
          'co do zasady 6 lat; koniec terminu przypada na 31 grudnia roku, w którym upływa 6 lat (art. 118 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'pozew o kwotę do 20 000 zł: od 30 do 1000 zł; ponad 20 000 zł: 5% kwoty, maksymalnie 100 000 zł (art. 13 ust. 1–2 u.k.s.c.); stan na 10.10.2026',
        ],
      ],
    },
    introHeading: 'Co umowa deweloperska mówi o terminie i karze',
    intro: 'Kara umowna to suma zapisana w umowie, którą dłużnik płaci jako naprawienie szkody z niewykonania albo nienależytego wykonania zobowiązania niepieniężnego (art. 483 § 1 k.c.). Umowa deweloperska musi podać termin przeniesienia na Ciebie praw z umowy i termin odbioru lokalu (art. 35 ust. 1 pkt 7 i 17 u.d.). Jeżeli sprzedaż w Twojej inwestycji ruszyła, zanim weszła w życie obecna ustawa deweloperska, najpierw sprawdzam, czy umowę ocenia się według przepisów dotychczasowych (art. 76 ust. 1–2 u.d.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Minął termin z umowy, a deweloper przesuwa akt i przysyła aneksy',
    when: [
      { b: 'Minęła data z umowy, a notariusz wciąż nie ma terminu aktu.', t: 'Od tego dnia liczysz karę według stawki z umowy. Ten sam dzień otwiera drogę do odstąpienia od umowy (art. 43 ust. 1 pkt 6 u.d.).' },
      {
        b: 'Deweloper naciska, żebyś szybko podpisał aneks z nowym terminem.',
        t: 'Aneks podpisuje się w formie aktu notarialnego, jak samą umowę (art. 77 § 1 k.c., art. 40 ust. 1 u.d.). Masz więc czas, żeby przed wizytą u notariusza przeczytać jego projekt.',
      },
      { b: 'Deweloper tłumaczy się wykonawcą albo pogodą.', t: 'Za firmy, którym powierzył budowę, odpowiada jak za własne działania (art. 474 k.c.).' },
      {
        b: 'Płacisz czynsz za wynajem i ratę kredytu, bo nie możesz się wprowadzić.',
        t: 'Czy te koszty odzyskasz ponad karę, zależy od zapisów umowy (art. 484 § 1 zd. 2 k.c.). Dowody zbieraj od pierwszego miesiąca opóźnienia.',
      },
    ],
    doForTitle: 'Wyliczenie kary, wezwanie, 120 dni, pozew: co przygotowuję',
    doFor: [
      'Czytam umowę i aneksy: termin przeniesienia praw, termin odbioru, wysokość kary i przyczyny, które według umowy przesuwają termin.',
      'Wyliczam karę za cały okres opóźnienia, dzień po dniu, według stawki z umowy.',
      'Jeżeli możesz żądać odszkodowania ponad karę, zbieram dowody szkody: umowę najmu, przelewy czynszu, zaświadczenie banku o odsetkach.',
      'Przy odstąpieniu przygotowuję wyznaczenie 120 dni i oświadczenie z podpisem notarialnie poświadczonym (art. 43 ust. 3, art. 45 ust. 1 u.d.).',
      'Wysyłam wezwanie do zapłaty, negocjuję ugodę albo wnoszę pozew, a po wyroku składam wniosek egzekucyjny do komornika.',
    ],
    stepsHeading: 'Od umowy do zapłaty kary: jak prowadzę sprawę z deweloperem',
    steps: [
      'Przesyłasz umowę deweloperską z aneksami i korespondencję, w której deweloper przesuwa termin.',
      'W 24 h roboczych odpisuję, co w Twojej sprawie zrobić najpierw: wezwać dewelopera do zapłaty kary, wyznaczyć mu 120 dni czy wnieść pozew. Dostajesz też ofertę z ceną i terminem, którą możesz przyjąć albo odrzucić bez kosztów.',
      'Po przyjęciu oferty liczę karę i wysyłam wezwanie do zapłaty. Jeżeli chcesz odstąpić od umowy, przygotowuję też pismo wyznaczające deweloperowi 120 dni na przeniesienie praw (art. 43 ust. 3 u.d.).',
      'Gdy wezwanie i rozmowy nie dają zapłaty, kieruję do sądu pozew o karę za wyliczone dni opóźnienia.',
      'Krok nieodwracalny: oświadczenie o odstąpieniu. Umowę uważa się wtedy za niezawartą, a środki pozostałe na rachunku powierniczym wracają do Ciebie w kwocie nominalnej (art. 44 ust. 2, art. 18 ust. 1 u.d.). Oświadczenie do podpisu przed notariuszem przygotowuję dopiero po Twojej pisemnej zgodzie.',
    ],
    faq: [
      {
        q: 'Deweloper twierdzi, że to nie jego wina – czy i tak zapłaci karę?',
        a: 'Tak, chyba że wykaże okoliczności, za które odpowiedzialności nie ponosi (art. 471 k.c.). Miarą jest należyta staranność (art. 472 k.c.), a za podwykonawców deweloper odpowiada jak za siebie (art. 474 k.c.). Sprawdzam, jakie przyczyny przesunięcia terminu wpisano do umowy i czy deweloper je udokumentował.',
      },
      {
        q: 'Czy mogę odstąpić od umowy deweloperskiej z powodu opóźnienia i ile muszę czekać?',
        a: 'Tak, gdy minie bezskutecznie 120 dni, które wyznaczasz deweloperowi po upływie terminu z umowy (art. 43 ust. 3 u.d.). Do oświadczenia potrzebny jest podpis poświadczony przez notariusza i zgoda na wykreślenie Twoich roszczeń z księgi wieczystej (art. 45 ust. 1 u.d.). Środki wypłacone mu z rachunku powierniczego deweloper zwraca najpóźniej w 30 dni od otrzymania Twojego oświadczenia (art. 44 ust. 3 u.d.).',
      },
      {
        q: 'Czy odzyskam koszty najmu i dodatkowe odsetki od kredytu?',
        a: 'Tak, jeżeli umowa pozwala żądać odszkodowania ponad karę (art. 484 § 1 zd. 2 k.c.). Gdy umowa ogranicza Cię do kary, sprawdzam też, czy ten zapis Cię wiąże (art. 385¹ § 1 k.c.). Odszkodowanie obejmuje normalne następstwa opóźnienia (art. 361 § 1 k.c.). Potrzebujesz więc umowy najmu, potwierdzeń czynszu i zaświadczenia banku o odsetkach.',
      },
      {
        q: 'Deweloper przysłał aneks z nowym terminem – podpisać?',
        a: 'Nie musisz. Deweloper może odstąpić od umowy tylko w 2 sytuacjach (art. 43 ust. 7–8 u.d.). Pierwsza: nie płacisz mimo pisemnego wezwania do zapłaty w 30 dni. Druga: nie stawiasz się do odbioru albo aktu mimo dwóch pisemnych wezwań doręczonych w odstępie co najmniej 60 dni. Przed podpisem sprawdź, czy aneks nie zwalnia dewelopera z kary za dni, które już minęły (art. 508 k.c.).',
      },
      {
        q: 'Kara w umowie jest śmiesznie niska – da się coś zrobić?',
        a: 'Samej kary nie podwyższysz: kodeks przewiduje tylko jej zmniejszenie na żądanie dłużnika (art. 484 § 2 k.c.). Ustawa deweloperska nie narzuca minimalnej kary. Zakazuje natomiast, by odsetki zastrzeżone dla dewelopera przewyższały Twoje kary (art. 39 ust. 1 u.d.), i to sprawdzam w każdej umowie.',
      },
      {
        q: 'Ile mam czasu na dochodzenie kar od dewelopera?',
        a: 'Co do zasady 6 lat, a termin kończy się 31 grudnia roku, w którym te 6 lat mija (art. 118 k.c.). Liczysz go od dnia, w którym roszczenie stało się wymagalne (art. 120 § 1 k.c.). Bieg przerywa np. pozew albo inna czynność przed sądem zmierzająca wprost do dochodzenia kary, a także uznanie roszczenia przez dewelopera (art. 123 § 1 pkt 1–2 k.c.). Zwykłe wezwanie do zapłaty tego skutku nie ma.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 35 ust. 1 pkt 7, 14 i 17, art. 39, art. 40 ust. 1, art. 76 ust. 1–2',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Terminy i kary w umowie, rekompensata, forma aneksu, przepisy przejściowe.',
        },
        {
          ref: 'art. 18 ust. 1, art. 43 ust. 1 pkt 6, ust. 3, 7 i 8, art. 44 ust. 2–3, art. 45 ust. 1',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Odstąpienie po 120 dniach, forma oświadczenia, zwrot wpłat, odstąpienie przez dewelopera.',
        },
        {
          ref: 'art. 361 § 1, art. 385¹ § 1, art. 471, 472, 474, 483, 484',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Odpowiedzialność za opóźnienie, kara umowna, odszkodowanie ponad karę, zapisy niedozwolone.',
        },
        {
          ref: 'art. 77 § 1, art. 118, art. 120 § 1, art. 123 § 1, art. 508',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Forma aneksu, przedawnienie roszczenia o karę i jego przerwanie, zwolnienie z długu.',
        },
        {
          ref: 'art. 13 ust. 1–2',
          act: 'Ustawa z dnia 28 lipca 2005 r. o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228',
          eli: 'DU/2005/1398',
          note: 'Opłata od pozwu o zapłatę; ust. 2 w brzmieniu od 23.09.2025 (Dz.U. 2025 poz. 1157).',
        },
      ],
    },
    docs: [
      'Umowa deweloperska z wszystkimi aneksami.',
      'Korespondencja z deweloperem o terminie: zawiadomienia o przesunięciu, maile, projekt aneksu.',
      'Dowody kosztów z okresu opóźnienia, jeśli je masz: umowa najmu, potwierdzenia czynszu, harmonogram spłat kredytu.',
    ],
    guides: ['kara-umowna-za-opoznienie-dewelopera-uchwala-sn'],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'negocjacje-nieruchomosci'],
    cta: {
      heading: 'Opóźnienie dewelopera ma swoją cenę — i to on powinien ją zapłacić.',
      lead: 'Prześlij umowę z aneksami i datę, której deweloper nie dotrzymał. W 24 h roboczych odpiszę, jaki pierwszy krok wobec dewelopera proponuję, i wyślę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'rekojmia-wady-lokalu': {
    metaDesc: 'Deweloper odpowiada za wady mieszkania stwierdzone w ciągu 5 lat od wydania lokalu (art. 568 § 1 k.c.). Możesz żądać naprawy albo obniżyć cenę.',
    h1: 'Rękojmia za wady lokalu',
    h1Full: 'Rękojmia za wady lokalu od dewelopera: zgłoszenie, naprawa, obniżenie ceny',
    topic: 'Rękojmia za wady',
    subtitle: 'Pęka ściana, przecieka taras albo okna się nie domykają, a deweloper odpisuje, że to „normalne”? Deweloper odpowiada z rękojmi za wady mieszkania stwierdzone przed upływem 5 lat od dnia wydania lokalu (art. 568 § 1 k.c., art. 41a ustawy deweloperskiej). Piszę zgłoszenie z konkretnym żądaniem, pilnuję terminów i prowadzę sprawę do naprawy, obniżenia ceny albo do sądu.',
    short: {
      q: 'Ile trwa rękojmia za wady mieszkania od dewelopera i od kiedy ją liczyć?',
      a: '5 lat od dnia wydania lokalu, a nie od podpisania umowy deweloperskiej: w tym czasie wada musi zostać stwierdzona (art. 568 § 1 k.c.). Roszczenie o usunięcie wady przedawnia się rok od jej stwierdzenia (art. 568 § 2 k.c.). Jeżeli jesteś konsumentem, ten rok nie skończy się przed upływem 5 lat od wydania.',
      facts: [
        ['Termin na stwierdzenie wady', '5 lat od dnia wydania lokalu (art. 568 § 1 k.c.)'],
        [
          'Czego możesz żądać',
          'usunięcia wady albo obniżenia ceny; przy wadzie istotnej możesz też odstąpić od umowy (art. 560 i art. 561 § 1 k.c.)',
        ],
        [
          'Deweloper milczy 14 dni',
          'jeżeli jesteś konsumentem, uważa się, że uznał za uzasadnione Twoje żądanie naprawy albo obniżenia ceny o wskazaną kwotę (art. 561⁵ k.c.)',
        ],
        [
          'Pierwszy rok od wydania',
          'jeżeli jesteś konsumentem i stwierdzisz wadę przed upływem roku, domniemywa się, że wada lub jej przyczyna istniała przy wydaniu lokalu (art. 556² i art. 548 § 1 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'przy wartości sporu do 20 000 zł opłata stała od 30 do 1000 zł; powyżej 20 000 zł 5% tej wartości, nie więcej niż 100 000 zł (art. 13 ust. 1–2 u.k.s.c., stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Za jakie usterki odpowiada deweloper',
    intro: 'Rękojmia to odpowiedzialność sprzedawcy za wadę rzeczy sprzedanej (art. 556 k.c.). Wobec dewelopera stosuje się ją odpowiednio w zakresie, którego nie reguluje procedura odbioru z art. 41 (art. 41a u.d.). Wada to niezgodność lokalu z umową, np. brak właściwości wynikających z przeznaczenia albo z zapewnień dewelopera (art. 556¹ § 1 k.c.). Deweloper odpowiada też za wadę, której przyczyna tkwiła w lokalu już przy wydaniu (art. 559 k.c.). Jeżeli jesteś konsumentem, umowa może rękojmię ograniczyć albo wyłączyć tylko w przypadkach z przepisów szczególnych (art. 558 § 1 k.c.). Termin 5 lat obejmuje też wyodrębniony lokal użytkowy, bo jest odrębną nieruchomością (art. 2 ust. 1 u.w.l.). Gwarancja działa niezależnie od rękojmi (art. 579 § 1 k.c.); różnice opisuję na stronie o gwarancji jakości.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Usterki w mieszkaniu od dewelopera: kiedy działać z rękojmi',
    when: [
      {
        b: 'Zgłosiłeś usterkę, a deweloper od 2 tygodni milczy.',
        t: 'Liczy się, czego zażądałeś: naprawy albo obniżenia ceny o wskazaną kwotę. Jeżeli jesteś konsumentem, po 14 dniach milczenia uważa się, że deweloper uznał to za uzasadnione (art. 561⁵ k.c.).',
      },
      {
        b: 'Od wydania kluczy mija prawie 5 lat, a ściana dopiero zaczęła pękać.',
        t: 'Wystarczy, że wadę stwierdzisz przed upływem 5 lat (art. 568 § 1 k.c.). Przykład: lokal wydany 15.03.2022, pęknięcie stwierdzone 10.02.2027, roszczenie o naprawę przedawni się 10.02.2028 (art. 568 § 2 k.c.). Po upływie 5 lat rękojmia działa tylko przy podstępnym zatajeniu wady (art. 568 § 6 k.c.).',
      },
      {
        b: 'Rok po przeprowadzce deweloper pisze, że rysy na ścianach „mieszczą się w normie”.',
        t: 'O wadzie decyduje umowa, zapewnienia dewelopera i przeznaczenie lokalu (art. 556¹ § 1 k.c.). W sporze sąd może powołać biegłego (art. 278 § 1 k.p.c.).',
      },
      { b: 'Ekipa dewelopera dwa razy uszczelniała taras, a po deszczu znów jest mokro.', t: 'Po wcześniejszej naprawie deweloper nie zablokuje obniżenia ceny kolejną naprawą (art. 560 § 1 k.c.).' },
      {
        b: 'Przecieka dach albo nie działa winda, a samo mieszkanie jest w porządku.',
        t: 'Dach czy winda służą wszystkim mieszkańcom, a takie części budynku ustawa zalicza do nieruchomości wspólnej (art. 3 ust. 2 u.w.l.). Kto zgłasza ich wady, opisuję na stronie o wadach części wspólnych.',
      },
      {
        b: 'Spółka, która budowała, zmieniła nazwę albo nie odbiera pism.',
        t: 'Rękojmia obciąża sprzedawcę, czyli spółkę z Twojej umowy (art. 556 k.c.). Przed żądaniem sprawdzam w KRS, czy spółka działa i kto ją reprezentuje. Co z wpłatami, gdy deweloper upadł, opisuję na stronie sporów z deweloperem.',
      },
    ],
    doForTitle: 'Od zgłoszenia usterki do pozwu: co przygotowuję',
    doFor: [
      'Ustalam z umowy, protokołów i aktu dzień wydania lokalu, od którego biegnie 5 lat (art. 568 § 1 k.c.).',
      'Piszę zgłoszenie wady z jednym konkretnym żądaniem: usunięcia wady albo obniżenia ceny o wyliczoną kwotę, zgodnie z warunkami art. 561⁵ k.c.',
      'Wysyłam zgłoszenie tak, żebyś miał dowód, kiedy doszło do dewelopera (art. 61 § 1 k.c.).',
      'Zbieram dowody wady: zdjęcia z datami, korespondencję, a gdy trzeba, opinię rzeczoznawcy budowlanego.',
      'Wyliczam obniżenie ceny według proporcji z art. 560 § 3 k.c.: wartość lokalu z wadą do wartości lokalu bez wady.',
      'Przy wadzie istotnej przygotowuję oświadczenie o odstąpieniu od umowy deweloperskiej i wyliczam, co deweloper musi Ci zwrócić (art. 494 § 1 k.c.).',
      'Gdy deweloper nie usuwa wady ani nie płaci, wnoszę pozew z wnioskiem o opinię biegłego o wadzie lokalu.',
    ],
    stepsHeading: 'Jak przebiega sprawa o wady mieszkania',
    steps: [
      'Opisujesz w formularzu usterkę, od kiedy ją widzisz i kiedy deweloper wydał Ci lokal.',
      'W 24 h roboczych odpisuję, od czego zacząć przy Twojej usterce. Może to być ustalenie daty wydania lokalu i zgłoszenie z żądaniem albo najpierw opinia rzeczoznawcy. Razem z tą odpowiedzią przychodzi oferta: zakres, cena i termin. Do akceptacji oferty nic nie płacisz.',
      'Po akceptacji oferty wysyłam deweloperowi zgłoszenie z żądaniem. Jeżeli jesteś konsumentem, pilnuję 14 dni, po których jego milczenie oznacza uznanie żądania (art. 561⁵ k.c.).',
      'Jeżeli deweloper odmówi, zwleka albo naprawa nie działa, składam w Twoim imieniu oświadczenie o obniżeniu ceny z wyliczoną kwotą (art. 560 § 1 i § 3 k.c.).',
      'Krok nieodwracalny: oświadczenie o odstąpieniu od umowy, możliwe tylko przy wadzie istotnej. Po dojściu do dewelopera nie da się go skutecznie odwołać (art. 61 § 1 k.c.), dlatego składam je dopiero po Twojej decyzji na piśmie.',
      'Jeżeli deweloper dalej nie usuwa wady ani nie oddaje różnicy w cenie, wnoszę pozew.',
    ],
    faq: [
      {
        q: 'Pękła ściana albo przecieka taras po 2 latach. Czy deweloper musi to naprawić?',
        a: 'Tak, jeżeli przyczyna wady tkwiła w lokalu już przy wydaniu (art. 559 k.c.), np. źle wykonana izolacja tarasu. Wadę musisz stwierdzić przed upływem 5 lat od wydania (art. 568 § 1 k.c.). Na Twoje żądanie deweloper usuwa ją w rozsądnym czasie (art. 561 § 1–2 k.c.). Jeżeli wadę stwierdzisz po roku od wydania, to Ty wykazujesz, że jej przyczyna była w lokalu od początku (art. 6 k.c.). Pomaga w tym opinia rzeczoznawcy o tym, jak wykonano izolację.',
      },
      {
        q: 'Jak zgłosić wadę deweloperowi, żeby nie mógł się wykręcić?',
        a: 'Na piśmie, z opisem wady, datą jej stwierdzenia, zdjęciami i jednym konkretnym żądaniem. Żądasz usunięcia wady albo składasz oświadczenie o obniżeniu ceny o wskazaną kwotę. Jeżeli jesteś konsumentem, 14 dni milczenia dewelopera oznacza, że uznał żądanie za uzasadnione (art. 561⁵ k.c.). Zachowaj dowód, kiedy pismo do niego doszło (art. 61 § 1 k.c.).',
      },
      {
        q: 'Czy mogę żądać obniżenia ceny mieszkania zamiast naprawy?',
        a: 'Tak, możesz od razu złożyć oświadczenie o obniżeniu ceny (art. 560 § 1 k.c.). Deweloper zapobiegnie temu tylko, jeżeli niezwłocznie i bez nadmiernych niedogodności dla Ciebie usunie wadę. Nie może tego zrobić, jeżeli lokal był już przez niego naprawiany albo wcześniej nie usunął wady, choć powinien. Obniżona cena ma się do ceny z umowy tak, jak wartość lokalu z wadą do jego wartości bez wady (art. 560 § 3 k.c.).',
      },
      {
        q: 'Kiedy mogę odstąpić od umowy po akcie notarialnym?',
        a: 'Tylko przy wadzie istotnej, bo przy wadzie nieistotnej odstąpienie jest wyłączone (art. 560 § 4 k.c.). Deweloper może je zablokować na tych samych zasadach co obniżenie ceny (art. 560 § 1 k.c.). Oświadczenie składasz w terminach, w których możesz żądać usunięcia wady (art. 568 § 3 k.c.). Po odstąpieniu strony zwracają sobie to, co otrzymały na mocy umowy (art. 494 § 1 k.c.).',
      },
      {
        q: 'Czy dostanę odszkodowanie od dewelopera za usterki?',
        a: 'Tak, jeżeli wykażesz szkodę i jej wysokość (art. 6 k.c.). Po obniżeniu ceny, odstąpieniu od umowy albo usunięciu wady możesz żądać naprawienia szkody z art. 566 k.c. Chodzi o szkodę z tego, że zawarłeś umowę, nie wiedząc o wadzie, np. koszty zawarcia umowy. Inne szkody wynikłe z wadliwego lokalu dochodzisz na zasadach ogólnych (art. 471 k.c.).',
      },
      {
        q: 'Podpisałem protokół odbioru bez uwag. Czy straciłem rękojmię?',
        a: 'Nie, co do wady, o której nie wiedziałeś przy odbiorze ani przy podpisaniu aktu notarialnego (art. 557 § 1–2 k.c.). Rękojmia za nią działa, jeżeli stwierdzisz ją przed upływem 5 lat od wydania lokalu (art. 568 § 1 k.c.). Wadę zauważoną po odbiorze, ale przed aktem, możesz zgłosić w trybie z protokołu (art. 41 ust. 19 u.d.). Deweloper ma wtedy 14 dni na stanowisko i 30 dni na naprawę, liczone od zgłoszenia (art. 41 ust. 4–6 u.d.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 556–561⁵ k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Wada, wiedza nabywcy, uprawnienia nabywcy, 14 dni na odpowiedź na żądanie konsumenta.' },
        { ref: 'art. 566 i art. 568 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Szkoda przy rękojmi; 5 lat od wydania, roczne przedawnienie i termin na odstąpienie.' },
        {
          ref: 'art. 41a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Rękojmia z Kodeksu cywilnego wobec dewelopera.',
        },
        {
          ref: 'art. 41 ust. 3–8 i 19',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Wady z protokołu odbioru i zgłoszone przed aktem: 14 i 30 dni.',
        },
        { ref: 'art. 2 i art. 3', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'Lokal jako odrębna nieruchomość; nieruchomość wspólna.' },
        { ref: 'art. 13 ust. 1–2', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata od pozwu; ust. 2 w brzmieniu od 23.09.2025 (Dz.U. 2025 poz. 1157).' },
      ],
    },
    docs: [
      'Umowa deweloperska i akt notarialny przeniesienia własności lokalu.',
      'Protokół odbioru i dokument z datą wydania lokalu (np. protokół przekazania kluczy), jeśli masz.',
      'Zdjęcia lub filmy wady z datami i krótki opis, kiedy ją zauważyłeś.',
      'Twoje zgłoszenia wady i odpowiedzi dewelopera: maile, pisma, potwierdzenia nadania.',
      'Prospekt informacyjny, karta gwarancyjna i opinie techniczne, jeśli masz.',
    ],
    guides: ['odszkodowanie-od-dewelopera-za-wady', 'odbior-mieszkania-od-dewelopera'],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'spory-z-wykonawca'],
    cta: {
      heading: 'Kupiłeś mieszkanie bez wad — i takie Ci się należy.',
      lead: 'Opisz usterkę i podaj, kiedy deweloper wydał Ci lokal. W 24 h roboczych odpiszę, od czego zacząć, i wyślę ofertę z ceną i terminem. Płacisz dopiero, gdy ją zaakceptujesz.',
    },
    updated: '2026-10-10',
    faqHeading: 'Usterki po odbiorze mieszkania: pytania nabywców',
  },

  'wady-czesci-wspolnych': {
    h1: 'Wady i usterki części wspólnych budynku',
    h1Full: 'Wady i usterki części wspólnych budynku: dach, elewacja, garaż',
    topic: 'Części wspólne budynku',
    metaDesc: 'Za wady dachu, elewacji i garażu odpowiada deweloper z rękojmi. Na stwierdzenie wady masz 5 lat od wydania lokalu, osobno dla każdego nabywcy.',
    subtitle: 'Woda kapie z sufitu garażu podziemnego, pęka elewacja albo cieknie dach, a deweloper odsyła Cię do wspólnoty? Za wady części wspólnych odpowiada deweloper z rękojmi, o ile wadę stwierdzisz w ciągu 5 lat od wydania Twojego lokalu (art. 568 § 1 k.c.). Ustalam terminy, zgłaszam wady i prowadzę sprawę dla Ciebie albo razem z zarządem wspólnoty.',
    short: {
      q: 'Kto odpowiada za wady części wspólnych budynku od dewelopera i kto może je zgłosić?',
      a: 'Deweloper, z rękojmi, jeżeli wada istniała przy wydaniu lokalu albo wynikła z przyczyny, która już wtedy tkwiła w budynku (art. 559 k.c., art. 41a u.d.). Żądanie usunięcia wady może złożyć kupujący lokal od dewelopera (art. 556 i art. 561 § 1 k.c.). Termin 5 lat biegnie dla każdego nabywcy od wydania jego lokalu (art. 568 § 1 k.c.).',
      facts: [
        [
          'Co jest częścią wspólną',
          'grunt oraz części budynku i urządzenia, które nie służą wyłącznie do użytku właścicieli lokali, np. dach i elewacja (art. 3 ust. 2 u.w.l.)',
        ],
        [
          'Kto może żądać usunięcia wady',
          'kupujący lokal od dewelopera (art. 556 i art. 561 § 1 k.c.); wspólnota mieszkaniowa nie była stroną umów sprzedaży lokali',
        ],
        [
          'Termin na stwierdzenie wady',
          '5 lat od dnia wydania lokalu, liczone osobno dla każdego nabywcy (art. 568 § 1 k.c.)',
        ],
        [
          'Termin po zauważeniu wady',
          'rok od stwierdzenia wady, a u konsumenta co najmniej do końca 5-letniego terminu na stwierdzenie wady (art. 568 § 2 k.c.)',
        ],
        [
          'Wada czy zużycie',
          'deweloper odpowiada za wady istniejące przy wydaniu albo wynikłe z przyczyny tkwiącej wtedy w budynku (art. 559 k.c.); jeżeli konsument stwierdzi wadę przed upływem roku od wydania, domniemywa się, że tak było (art. 556² k.c.)',
        ],
      ],
    },
    introHeading: 'Udział w częściach wspólnych: skąd Twoje prawa wobec dewelopera',
    intro: 'Kupując mieszkanie, nabyłeś też udział w nieruchomości wspólnej jako prawo związane z własnością lokalu (art. 3 ust. 1 u.w.l.), więc przeciekający dach to wada tego, co kupiłeś. Art. 41a u.d. każe stosować do wad dewelopera odpowiednio kodeksowe przepisy o rękojmi przy sprzedaży, a rękojmia działa względem kupującego (art. 556 k.c.). Wspólnota mieszkaniowa, czyli ogół właścicieli lokali w danej nieruchomości (art. 6 u.w.l.), nie była stroną Twojej umowy. Jak wspólnota może przejąć roszczenia nabywców, opisuję na stronie o przejęciu roszczeń przez wspólnotę.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Przecieka dach, woda w garażu, deweloper odsyła do wspólnoty',
    when: [
      {
        b: 'Odebrałeś mieszkanie jako jeden z ostatnich, a sąsiedzi mówią, że na reklamację dachu jest już za późno.',
        t: 'Termin liczy się od wydania lokalu kupującemu (art. 568 § 1 k.c.), więc Tobie może jeszcze biec, choć sąsiadom z wcześniejszym odbiorem już minął.',
      },
      { b: 'Po każdym deszczu w garażu podziemnym stoi woda.', t: 'Najpierw sprawdzam w księdze wieczystej, czy hala garażowa należy do nieruchomości wspólnej, czy jest osobnym lokalem (art. 2 ust. 1 i art. 3 ust. 2 u.w.l.).' },
      { b: 'Deweloper odsyła Cię do wspólnoty, a zarządca z powrotem do dewelopera.', t: 'Rękojmia obciąża dewelopera jako sprzedawcę (art. 556 k.c., art. 41a u.d.), a zarząd wspólnoty nie jest stroną Twojej umowy.' },
      {
        b: 'Deweloper twierdzi, że pęknięcia elewacji to zwykłe zużycie budynku.',
        t: 'Spór dotyczy tego, czy przyczyna pęknięć tkwiła w budynku już przy wydaniu lokalu. Pomoże to wykazać opinia rzeczoznawcy budowlanego, a w procesie o przyczynie wypowie się biegły, jeżeli sąd go powoła (art. 278 § 1 k.p.c.).',
      },
      {
        b: 'Woda z dachu zalewa klatkę schodową i dochodzi do instalacji elektrycznej.',
        t: 'Uszkodzenie stwierdzone w kontroli, które może zagrozić życiu, zdrowiu albo bezpieczeństwu mienia, usuwa właściciel lub zarządca obowiązany do napraw, w czasie albo zaraz po kontroli (art. 70 ust. 1 Pb). Zanim zlecisz naprawę, zgłoś wadę deweloperowi ze zdjęciami i zachowaj faktury.',
      },
    ],
    doForTitle: 'Co robię, gdy wada dotyczy całego budynku',
    doFor: [
      'Ustalam z aktu notarialnego i protokołu datę wydania Twojego lokalu, a gdy działa kilku właścicieli, wyliczam, u kogo 5 lat z art. 568 § 1 k.c. mija najwcześniej.',
      'Piszę zgłoszenie wady z żądaniem jej usunięcia (art. 561 § 1 k.c.) dla Ciebie albo dla kilku właścicieli naraz, każde z datą wydania lokalu nadawcy.',
      'Zbieram dowody: zdjęcia z datami, protokoły z corocznej kontroli budynku (art. 62 ust. 1 pkt 1 Pb), a przy sporze o zużycie opinię rzeczoznawcy.',
      'Uzgadniam z zarządem lub zarządcą jedno zestawienie wad, żeby właściciele zgłaszali te same usterki z tymi samymi dowodami.',
      'Gdy żądanie naprawy nie działa, przygotowuję oświadczenie o obniżeniu ceny w terminie z art. 568 § 3 k.c. albo pozew o usunięcie wady.',
    ],
    stepsHeading: 'Jak przebiega sprawa o przeciekający dach albo zalany garaż',
    steps: [
      'Opisujesz w formularzu wadę: co, w którym miejscu budynku i od kiedy, oraz podajesz, kiedy deweloper wydał Ci lokal.',
      'Do 24 h roboczych odpisuję bezpłatnie, który ruch przy tej wadzie zrobić najpierw, np. zestawić daty odbioru lokali albo zamówić opinię rzeczoznawcy. Ofertę z ceną i terminem dostajesz razem z tą odpowiedzią, a płacisz dopiero po jej akceptacji.',
      'Po akceptacji oferty wysyłam deweloperowi zgłoszenie wady w Twoim imieniu. Jeżeli działa kilku właścicieli, zaczynam od tych, którym 5 lat mija najwcześniej.',
      'Jeżeli deweloper nie usunie wady w rozsądnym czasie (art. 561 § 2 k.c.), przygotowuję oświadczenie o obniżeniu ceny. Krok nieodwracalny: po dojściu do dewelopera oświadczenia nie cofniesz (art. 61 § 1 k.c.), więc wysyłam je, gdy potwierdzisz kwotę.',
      'Jeżeli deweloper dalej nie naprawia ani nie płaci kwoty obniżenia, wnoszę pozew; o usunięcie wady przed upływem rocznego terminu z art. 568 § 2 k.c.',
    ],
    faqHeading: 'Pytania właścicieli o przeciekający dach, garaż i elewację',
    faq: [
      {
        q: 'Przecieka garaż podziemny. Kto ma zgłosić wadę deweloperowi: ja czy zarządca?',
        a: 'Ty, jeżeli kupiłeś lokal od dewelopera, bo uprawnienia z rękojmi ma kupujący (art. 556 k.c.). Zarządca może równolegle poinformować dewelopera i udostępnić protokoły. Właściciel lub zarządca poddaje budynek kontroli co najmniej raz w roku (art. 62 ust. 1 pkt 1 Pb), a z każdej kontroli powstaje protokół (art. 62a ust. 1 Pb). Najpierw sprawdź, czy garaż należy do nieruchomości wspólnej, czy jest osobnym lokalem.',
      },
      {
        q: 'Sąsiedzi nie chcą się angażować. Czy mogę sam zgłosić deweloperowi wadę dachu, bez uchwały wspólnoty?',
        a: 'Tak, zgłoszenie z żądaniem usunięcia wady składasz jako kupujący lokal od dewelopera (art. 556 i art. 561 § 1 k.c.). Przepisy o rękojmi nie uzależniają tego żądania od uchwały wspólnoty. Termin liczysz od wydania swojego lokalu (art. 568 § 1 k.c.), więc nie musisz czekać na decyzję sąsiadów.',
      },
      {
        q: 'Od kiedy liczyć 5 lat na wady części wspólnych, skoro mieszkania wydawano w różnych dniach?',
        a: 'Od dnia wydania lokalu każdemu nabywcy osobno, bo art. 568 § 1 k.c. liczy termin od wydania rzeczy kupującemu. Najwcześniej mija więc u tych, którzy odebrali lokale jako pierwsi. Przykład (daty umowne): lokal wydany 15.06.2022 – termin mija 15.06.2027, lokal wydany 20.03.2023 – 20.03.2028 (art. 112 k.c.).',
      },
      {
        q: 'Deweloper mówi, że pęknięcia elewacji to zużycie, a nie wada. Kto ma udowodnić przyczynę?',
        a: 'Nie Ty, jeżeli jesteś konsumentem i stwierdziłeś wadę przed upływem roku od wydania Twojego lokalu. Wtedy działa domniemanie, że wada albo jej przyczyna była w budynku już przy wydaniu (art. 556² k.c.); deweloper może je obalić (art. 234 k.p.c.). Sąsiadom z wcześniejszym odbiorem ten rok mógł już minąć. Przy wadzie stwierdzonej później przyczynę z chwili wydania wykazujesz Ty (art. 559 i art. 6 k.c.), np. protokołami z corocznych kontroli budynku.',
      },
      {
        q: 'Deweloper odsyła mnie do firmy, która budowała. Kto ma usunąć wadę?',
        a: 'Deweloper. Rękojmia obciąża sprzedawcę, czyli dewelopera z Twojej umowy (art. 556 k.c., art. 41a u.d.), a nie wykonawcę, z którym nie masz umowy. Jeżeli dochodzisz odszkodowania, deweloper odpowiada za działania wykonawcy jak za własne (art. 474 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 556, 556², 559 i 561 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Rękojmia wobec kupującego, wada a jej przyczyna przy wydaniu, żądanie usunięcia wady w rozsądnym czasie.',
        },
        { ref: 'art. 568 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: '5 lat od dnia wydania lokalu na stwierdzenie wady i roczne przedawnienie roszczenia o jej usunięcie.' },
        {
          ref: 'art. 41a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz o Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Odpowiednie stosowanie kodeksowych przepisów o rękojmi przy sprzedaży do wad dewelopera.',
        },
        { ref: 'art. 2, 3 i 6', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'Lokal jako odrębna nieruchomość, nieruchomość wspólna i udział w niej, wspólnota mieszkaniowa.' },
        { ref: 'art. 62, 62a i 70', act: 'Prawo budowlane', tj: 'Dz.U. 2026 poz. 524', eli: 'DU/1994/414', note: 'Coroczna kontrola budynku, protokół z kontroli i usuwanie uszkodzeń grożących bezpieczeństwu.' },
      ],
    },
    docs: [
      'Akt notarialny kupna lokalu i protokół z datą wydania lokalu, jeśli masz.',
      'Zdjęcia lub filmy wady z datami: zacieki, pęknięcia, woda w garażu.',
      'Zgłoszenia wady wysłane do dewelopera i jego odpowiedzi, także te od zarządu albo zarządcy.',
      'Protokoły z kontroli budynku lub wpisy z książki obiektu budowlanego, jeśli zarządca je udostępni.',
      'Dla wspólnoty: uchwały w sprawie wad, wykaz lokali z datami wydania i opinia rzeczoznawcy, jeśli są.',
    ],
    guides: ['odszkodowanie-od-dewelopera-za-wady'],
    seeAlso: ['obsluga-prawna-wspolnot', 'nadzor-budowlany-pinb'],
    cta: {
      heading: 'Wady wspólne to wspólny problem — pomogę go rozwiązać u źródła.',
      lead: 'Napisz, co przecieka albo pęka w budynku i kiedy odebrałeś klucze. Odpowiedź, od czego zacząć, przyjdzie w ciągu 24 h roboczych razem z ofertą z ceną i terminem; zanim ją przyjmiesz, nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'usuniecie-wad-protokol': {
    h1: 'Egzekwowanie usunięcia wad z protokołu odbioru',
    h1Full: 'Egzekwowanie usunięcia wad z protokołu odbioru: deweloper nie naprawia usterek',
    topic: 'Protokół odbioru',
    metaDesc: 'Na stanowisko wobec wad z protokołu deweloper ma 14 dni, na usunięcie uznanych 30. Jeżeli nie naprawi, wyznaczasz termin, potem usuwasz wady na jego koszt.',
    subtitle: 'Wpisałeś usterki do protokołu odbioru, minął miesiąc i nic nie zostało naprawione. Jeżeli deweloper nie usunął uznanych wad w 30 dni ani w terminie, który sam wskazał, wyznaczasz mu nowy termin (art. 41 ust. 6–8 ustawy deweloperskiej). Po jego bezskutecznym upływie możesz usunąć wady na koszt dewelopera; piszę pismo z terminem i rozliczam koszty naprawy.',
    short: {
      q: 'Deweloper nie usuwa usterek z protokołu – co mogę zrobić?',
      a: 'Gdy minie termin na usunięcie uznanych wad, wyznaczasz deweloperowi nowy, a po jego upływie usuwasz wady na jego koszt (art. 41 ust. 8 ustawy deweloperskiej, dalej: u.d.). Deweloper ma 14 dni od podpisania protokołu na stanowisko, a uznane wady musi usunąć w 30 dni (art. 41 ust. 4 i 6 u.d.). Jeżeli w 14 dni nie odpowie, uważa się, że uznał wady (art. 41 ust. 5 u.d.).',
      facts: [
        [
          'Stanowisko dewelopera',
          '14 dni od podpisania protokołu, na papierze lub innym trwałym nośniku; odmowa z przyczynami (art. 41 ust. 4 u.d.)',
        ],
        ['Brak odpowiedzi w 14 dni', 'Uważa się, że deweloper uznał wady (art. 41 ust. 5 u.d.)'],
        [
          'Usunięcie uznanych wad',
          '30 dni od podpisania protokołu; inny termin tylko z uzasadnieniem opóźnienia i bez nadmiernych niedogodności dla Ciebie (art. 41 ust. 6–7 u.d.)',
        ],
        [
          'Gdy deweloper nie usunie uznanych wad',
          'Wyznaczasz nowy termin; po jego bezskutecznym upływie usuwasz wady na koszt dewelopera (art. 41 ust. 8 u.d.)',
        ],
        [
          'Wada zauważona po odbiorze, przed aktem',
          'Zgłaszasz ją deweloperowi; terminy 14 i 30 dni biegną od dnia zgłoszenia (art. 41 ust. 19 u.d.)',
        ],
        [
          'Umowa daje deweloperowi więcej czasu',
          'Postanowienie mniej korzystne niż ustawa jest nieważne; stosuje się ustawę (art. 42 u.d.)',
        ],
      ],
    },
    introHeading: 'Co daje wpisanie usterki przy odbiorze mieszkania',
    intro: 'Odbiór mieszkania albo domu odbywa się w Twojej obecności, a z odbioru sporządza się protokół, do którego możesz zgłosić wady (art. 41 ust. 2–3 u.d.). Każda wpisana wada uruchamia terminy dla dewelopera, liczone od dnia podpisania protokołu. Te zasady pochodzą z ustawy deweloperskiej z 20.05.2021 r.; do części umów z przedsięwzięć, w których sprzedaż ruszyła przed jej wejściem w życie, stosuje się przepisy dotychczasowe (art. 76 u.d.). Gdy deweloper przeniesie na Ciebie prawa z umowy, w zakresie, którego art. 41 nie reguluje, do wad stosuje się odpowiednio przepisy kodeksu cywilnego o rękojmi przy sprzedaży (art. 41a u.d.). Gdy kupujesz od dewelopera gotowy lokal zwykłą umową sprzedaży, stosuje się tylko art. 41 ust. 1–3 u.d. (odbiór i protokół), a terminy dewelopera na usunięcie wad już nie (art. 3 u.d.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Usterki z protokołu wiszą, a deweloper zwleka',
    when: [
      { b: 'Od podpisania protokołu minęło 14 dni, a deweloper nie odpisał.', t: 'Bez informacji o uznaniu albo odmowy z przyczynami ustawa traktuje wady jako uznane (art. 41 ust. 5 u.d.).' },
      {
        b: 'Minęło 30 dni od podpisania protokołu i nic nie zostało naprawione.',
        t: 'Chodzi o wady uznane, także przez milczenie. Jeżeli deweloper nie wskazał innego terminu z uzasadnieniem albo i ten minął, wyznaczasz mu nowy (art. 41 ust. 6–8 u.d.).',
      },
      {
        b: 'Deweloper pisze, że to nie wada, tylko „norma” albo ślad użytkowania.',
        t: 'Oświadczenie o odmowie uznania wad musi zawierać przyczyny odmowy (art. 41 ust. 4 pkt 2 u.d.). Termin 30 dni z art. 41 ust. 6 u.d. dotyczy wad uznanych.',
      },
      {
        b: 'Ekipa coś poprawiła, a usterka wróciła po kilku dniach.',
        t: 'Wadę stwierdzoną przed aktem notarialnym możesz zgłosić deweloperowi na piśmie; terminy 14 i 30 dni biegną wtedy od dnia zgłoszenia (art. 41 ust. 19 u.d.).',
      },
      { b: 'Przy odbiorze widzisz poważną wadę, a deweloper nie chce jej uznać.', t: 'Odmowa odbioru jest możliwa przy wadzie istotnej, której deweloper nie uznał w protokole (art. 41 ust. 9 u.d.).' },
    ],
    doForTitle: 'Co robię, gdy deweloper nie usuwa wad z protokołu',
    doFor: [
      'Liczę terminy z art. 41 u.d. od podpisania protokołu albo zgłoszenia wady.',
      'Sprawdzam w umowie deweloperskiej, która ustawa ją obejmuje (art. 76 u.d.), i czy terminy na usunięcie wad nie są dłuższe niż w ustawie (art. 42 u.d.).',
      'Odpowiadam na odmowę uznania wad, zestawiając jej przyczyny z protokołem, zdjęciami i umową.',
      'Piszę pismo z nowym terminem na usunięcie uznanych wad (art. 41 ust. 8 u.d.) i propozycją dat wejścia ekipy.',
      'Rozliczam naprawę na koszt dewelopera: dokumentacja, kosztorys, faktury, wezwanie do zapłaty, a gdy nie płaci, pozew.',
      'Przy wadzie istotnej przygotowuję odmowę odbioru, a przy powtórnym odbiorze wniosek o opinię rzeczoznawcy budowlanego (art. 41 ust. 9 i 13 u.d.).',
    ],
    lists: [
      {
        eyebrow: 'Wada istotna',
        title: 'Wada istotna przy odbiorze: co mówi ustawa',
        kind: 'check',
        items: [
          { b: 'Deweloper uznał wadę istotną w protokole', t: 'Terminy są te same co przy innych wadach, ale po bezskutecznym upływie Twojego terminu możesz odstąpić od umowy (art. 41 ust. 11 u.d.).' },
          {
            b: 'Deweloper odmówił uznania wady istotnej',
            t: 'Możesz odmówić odbioru; odmowę odnotowuje się w protokole. Strony ustalają nowy termin odbioru, który pozwala deweloperowi usunąć wadę przed powtórnym odbiorem (art. 41 ust. 3, 9 i 12 u.d.).',
          },
          {
            b: 'Przy powtórnym odbiorze wada istotna nadal jest',
            t: 'Odmowa odbioru wymaga wtedy opinii rzeczoznawcy budowlanego; wniosek o nią składasz w miesiąc od tej odmowy (art. 41 ust. 13 u.d.). Jeżeli rzeczoznawca potwierdzi wadę istotną, możesz odstąpić od umowy, a koszt opinii ponosi deweloper; jeżeli nie potwierdzi, koszt opinii ponosisz Ty (art. 41 ust. 15–17 u.d.).',
          },
          {
            b: 'Odstąpienie od umowy – krok nieodwracalny',
            t: 'Umowa jest wtedy uważana za niezawartą, więc zamiast naprawy kończysz umowę (art. 44 ust. 2 u.d.). Oświadczenie składasz na piśmie z podpisem notarialnie poświadczonym i zgodą na wykreślenie roszczeń z księgi wieczystej (art. 45 ust. 1 u.d.). Odwołanie działa tylko, jeśli dojdzie do dewelopera najpóźniej razem z oświadczeniem (art. 61 § 1 k.c.).',
          },
        ],
      },
    ],
    stepsHeading: 'Od protokołu do naprawy na koszt dewelopera',
    steps: [
      'Przesyłasz protokół odbioru z datą podpisania, umowę deweloperską i odpowiedź dewelopera albo informację, że jej nie było.',
      'W 24 h roboczych piszę, od czego zacząć: od pisma z nowym terminem, zgłoszenia wady, która wróciła, czy przygotowania powtórnego odbioru. Razem z tym wysyłam ofertę z ceną i terminem; płacisz dopiero po jej akceptacji.',
      'Po akceptacji oferty wysyłam deweloperowi pismo z nowym terminem na usunięcie wad.',
      'Jeżeli termin minie bez naprawy, zlecasz ją innej firmie po udokumentowaniu wad, a ja wzywam dewelopera do zwrotu kosztów, w razie potrzeby pozwem.',
    ],
    faq: [
      {
        q: 'Deweloper nie odpisał w 14 dni – czy wady są uznane?',
        a: 'Tak. Jeżeli deweloper w 14 dni od podpisania protokołu nie przekaże Ci stanowiska, uważa się, że uznał wady (art. 41 ust. 5 u.d.). Stanowisko to informacja o uznaniu albo odmowa z przyczynami, na papierze lub innym trwałym nośniku (art. 41 ust. 4 u.d.). Rozmowa telefoniczna nie zastępuje takiej odpowiedzi.',
      },
      {
        q: 'Minęło 30 dni i nic nie naprawili – co teraz?',
        a: 'Wyznacz deweloperowi nowy termin na usunięcie wad, jeżeli uznał je albo nie odpowiedział w 14 dni (art. 41 ust. 5 i 8 u.d.). Zrób to pismem z datą doręczenia. Jeżeli deweloper wskazał inny termin z uzasadnieniem opóźnienia, najpierw musi minąć ten termin (art. 41 ust. 7 u.d.). Termin 30 dni dotyczy wad uznanych (art. 41 ust. 6 u.d.).',
      },
      {
        q: 'Czy mogę naprawić sam i obciążyć dewelopera kosztami?',
        a: 'Tak, przy wadach uznanych, także przez milczenie dewelopera (art. 41 ust. 5 u.d.). Najpierw wyznaczasz mu nowy termin; po jego bezskutecznym upływie usuwasz wady na jego koszt (art. 41 ust. 8 u.d.). Nie zaczynaj prac wcześniej. Przed naprawą zrób zdjęcia i opis wad, zachowaj kosztorys i faktury: to dowody do wezwania do zapłaty i pozwu.',
      },
      {
        q: 'Deweloper odmówił uznania wady – kto ma rację?',
        a: 'Ostatecznie rozstrzyga sąd, nie deweloper. Odmowa musi zawierać przyczyny (art. 41 ust. 4 pkt 2 u.d.). Gdy potrzebne są wiadomości specjalne, np. techniczne, sąd może wezwać biegłego (art. 278 § 1 k.p.c.).',
      },
      {
        q: 'Czy mogę odmówić odbioru mieszkania?',
        a: 'Tak, gdy lokal ma wadę istotną, a deweloper odmówi uznania jej w protokole (art. 41 ust. 9 u.d.). Twoją odmowę odnotowuje się w protokole (art. 41 ust. 3 u.d.). Pozostałe wady wpisujesz do protokołu, a deweloper ma 14 dni na stanowisko wobec nich (art. 41 ust. 4 u.d.).',
      },
      {
        q: 'Czy muszę wpuścić ekipę dewelopera do mieszkania?',
        a: 'Co do zasady tak: wierzyciel powinien współdziałać przy wykonaniu zobowiązania (art. 354 § 2 k.c.). Bez dostępu do lokalu deweloper wad nie usunie. Uzgadniaj terminy wejścia na piśmie. Zapisuj, kiedy proponowano wejście ekipy i kto był w lokalu: to dowód w sporze o to, dlaczego termin minął.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 41 ust. 1–19',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Odbiór, protokół, terminy dewelopera, usunięcie wad na jego koszt, odmowa odbioru.',
        },
        {
          ref: 'art. 41a',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Po przeniesieniu praw na nabywcę: przepisy k.c. o rękojmi w zakresie nieuregulowanym w art. 41.',
        },
        {
          ref: 'art. 42',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Nieważność postanowień mniej korzystnych dla nabywcy.',
        },
        {
          ref: 'art. 43 ust. 1 pkt 10 i 11, art. 44 ust. 2, art. 45 ust. 1',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Odstąpienie od umowy z powodu wady istotnej, jego skutek i forma.',
        },
        {
          ref: 'art. 76',
          act: 'Ustawa z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Przepisy przejściowe: kiedy stosuje się przepisy dotychczasowe.',
        },
        { ref: 'art. 61 § 1, art. 354 § 2', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Odwołanie oświadczenia woli; współdziałanie wierzyciela.' },
      ],
    },
    docs: [
      'Protokół odbioru z datą podpisania i listą wad (skan albo zdjęcie każdej strony).',
      'Umowę deweloperską z aneksami.',
      'Odpowiedź dewelopera na protokół z datą doręczenia albo informację, że jej nie było.',
      'Zdjęcia wad z datą, także po próbach naprawy, jeśli je masz.',
      'Korespondencję o terminach napraw i wejściu ekipy (maile, SMS-y), jeśli ją masz.',
      'Kosztorys albo faktury za naprawę, jeśli już ją zleciłeś.',
    ],
    guides: ['odszkodowanie-od-dewelopera-za-wady', 'odbior-mieszkania-od-dewelopera'],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'spory-z-wykonawca'],
    cta: {
      heading: 'Wpisane do protokołu wady to Twoje prawo — dopilnuję, żeby deweloper je usunął.',
      lead: 'Napisz, kiedy podpisałeś protokół odbioru i co odpowiedział deweloper, a w 24 h roboczych dostaniesz bezpłatną wstępną analizę, od czego zacząć przy tych usterkach. Razem z nią prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'spory-o-metraz': {
    metaDesc: 'Mieszkanie mniejsze niż w umowie deweloperskiej? Ustawa deweloperska nie przewiduje tolerancji 2%. W umowach od 13.02.2026 cena to m² razy cena za 1 m².',
    h1: 'Spory o powierzchnię (metraż) lokalu',
    h1Full: 'Spory o powierzchnię (metraż) lokalu: mieszkanie mniejsze niż w umowie z deweloperem',
    topic: 'Powierzchnia lokalu',
    subtitle: 'Po odbiorze albo własnym pomiarze wyszło, że mieszkanie jest mniejsze niż w umowie deweloperskiej? Brakujące metry rozliczasz według umowy albo z rękojmi, oświadczeniem o obniżeniu ceny (art. 560 § 1 k.c.). Sprawdzam pomiar i zapis o rozliczeniu, wyliczam kwotę i kieruję żądanie do dewelopera.',
    short: {
      q: 'Mieszkanie jest mniejsze niż w umowie deweloperskiej. Czy deweloper musi oddać pieniądze?',
      a: 'Tak, jeżeli daje Ci to zapis umowy albo rękojmia za wady. Ustawa nie określa, jak rozliczyć różnicę po pomiarze, więc najpierw liczy się zapis umowy. Jeżeli brak metrów jest wadą lokalu, możesz złożyć oświadczenie o obniżeniu ceny (art. 560 § 1 k.c.).',
      facts: [
        [
          'Umowa zawarta od 13.02.2026',
          'cena to powierzchnia użytkowa w m² razy cena za 1 m² (art. 5a u.d.)',
        ],
        [
          'Jak mierzyć',
          'sposobem z umowy (art. 35 ust. 1 pkt 15 u.d.); w umowach od 13.02.2026 według Polskiej Normy z dnia wniosku o pozwolenie na budowę albo zgłoszenia (art. 5a u.d.)',
        ],
        [
          'Tolerancja, np. 2%',
          'ustawa deweloperska jej nie przewiduje (t.j. Dz.U. 2026 poz. 880); jeżeli jest, wynika tylko z Twojej umowy',
        ],
        [
          'Do kiedy działać z rękojmi',
          'wada stwierdzona do 5 lat od wydania lokalu; oświadczenie o obniżeniu ceny w ciągu roku od stwierdzenia, u konsumenta nie krócej niż te 5 lat (art. 568 § 1–3 k.c.)',
        ],
        [
          'Oświadczenie o obniżeniu ceny z kwotą',
          'jeżeli jesteś konsumentem, a deweloper nie odpowie w 14 dni, uważa się, że uznał żądanie (art. 561⁵ k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'do 20 000 zł opłata stała 30–1000 zł (przy 18 000 zł: 1000 zł); powyżej 20 000 zł 5% wartości, maks. 100 000 zł (art. 13 ust. 1–2 u.k.s.c., stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Ile kosztuje Cię każdy brakujący metr',
    intro: 'Umowa deweloperska zawiera powierzchnię użytkową lokalu i wskazuje sposób jej pomiaru (art. 35 ust. 1 pkt 6 i 15 u.d.). Do odpowiedzialności dewelopera za wady stosuje się odpowiednio przepisy Kodeksu cywilnego o rękojmi (art. 41a u.d.). Wada to niezgodność rzeczy sprzedanej z umową (art. 556¹ § 1 k.c.), więc lokal z mniejszą liczbą metrów może mieć wadę. Przykład (liczby umowne): umowa na 60 m² po 12 000 zł za 1 m², pomiar daje 58,5 m². Brakujące 1,5 m² × 12 000 zł = 18 000 zł. Ile z tej kwoty odzyskasz, zależy od zapisu umowy o rozliczeniu albo od proporcji z art. 560 § 3 k.c.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Mieszkanie mniejsze, niż płaciłeś: kiedy działać',
    when: [
      {
        b: 'Deweloper przysłał obmiar powykonawczy i aneks z nową ceną do podpisu przed aktem.',
        t: 'Nie podpisuj od razu. Sprawdzam, czy deweloper mierzył sposobem z umowy (art. 35 ust. 1 pkt 15 u.d.) i czy kwota wynika z ceny za 1 m².',
      },
      { b: 'Na odbiorze zmierzyłeś mieszkanie i wyszło mniej, niż jest w umowie.', t: 'Do protokołu odbioru możesz zgłosić wady lokalu (art. 41 ust. 3 u.d.), więc wpisz do niego wynik swojego pomiaru.' },
      { b: 'Deweloper twierdzi, że 2% różnicy to tolerancja i nic Ci się nie należy.', t: 'Sprawdzam, z którego paragrafu umowy wynika próg i czy działa w obie strony.' },
      { b: 'Twój geodeta zmierzył mniej niż deweloper.', t: 'Najpierw sprawdzam, czy oba pomiary użyły tej samej normy i zasad z umowy.' },
      { b: 'Umowa przewiduje dopłatę za większy lokal, ale milczy o zwrocie za mniejszy.', t: 'Sprawdzam, czy to niedozwolone postanowienie umowne, które nie wiąże konsumenta (art. 385¹ § 1 k.c.).' },
    ],
    doForTitle: 'Brakujące metry: co sprawdzam i co piszę',
    doFor: [
      'Porównuję powierzchnię z umowy, prospektu i obmiaru powykonawczego oraz ustalam normę i sposób pomiaru (art. 5a, art. 35 ust. 1 pkt 15 u.d.). Przy sporze określam zlecenie dla geodety: ta sama norma co w umowie.',
      'Wyliczam kwotę na dwa sposoby: metry razy cena za 1 m² z umowy oraz obniżenie ceny z rękojmi (art. 560 § 3 k.c.).',
      'Piszę oświadczenie o obniżeniu ceny z kwotą albo wezwanie do zwrotu według umowy i pilnuję 14 dni z art. 561⁵ k.c.',
      'Negocjuję ugodę albo prowadzę sprawę w sądzie, z wnioskiem o opinię biegłego.',
    ],
    stepsHeading: 'Jak przebiega sprawa o brakujące metry',
    steps: [
      'Przesyłasz umowę z aneksami, protokół odbioru i pomiar, który masz.',
      'W 24 h roboczych odpisuję, co trzeba zrobić z brakującymi metrami, np. zlecić pomiar albo od razu wysłać żądanie z kwotą. Razem z odpowiedzią wysyłam ofertę: zakres, cenę i termin. Płacisz dopiero po jej akceptacji.',
      'Po akceptacji oferty ustalam powierzchnię według umowy, wyliczam kwotę i wysyłam deweloperowi oświadczenie albo wezwanie.',
      'Krok nieodwracalny: podpis aneksu z nową powierzchnią i ceną. Podpisujesz go dopiero, gdy kwota zgadza się z pomiarem według umowy.',
      'Jeżeli deweloper nie płaci, wnoszę pozew o zapłatę.',
    ],
    faq: [
      {
        q: 'Czy 2% różnicy w metrażu to norma, z którą nic nie zrobię?',
        a: 'Nie, jeżeli Twoja umowa nie zawiera progu 2%, bo ustawa deweloperska go nie przewiduje. Jeżeli próg jest w umowie, sprawdzam, czy dotyczy zwrotu, dopłaty, czy obu kierunków. Zapis nieuzgodniony indywidualnie, który wbrew dobrym obyczajom rażąco narusza Twoje interesy, Cię nie wiąże (art. 385¹ § 1 k.c.). Nie dotyczy to jednoznacznych zapisów o cenie.',
      },
      {
        q: 'Według jakiej normy mierzy się mieszkanie od dewelopera?',
        a: 'W umowach zawartych od 13.02.2026 według Polskiej Normy o wskaźnikach powierzchniowych i kubaturowych. Liczy się norma z dnia wniosku o pozwolenie na budowę albo zgłoszenia budowy (art. 5a u.d.). Każda umowa deweloperska wskazuje też sposób pomiaru (art. 35 ust. 1 pkt 15 u.d.). Ścianki działowe i inne szczegóły rozstrzygają norma i ten zapis umowy.',
      },
      {
        q: 'Mój geodeta zmierzył inaczej niż deweloper. Kto ma rację?',
        a: 'Ten, kto mierzył według normy i sposobu pomiaru z umowy (art. 5a i art. 35 ust. 1 pkt 15 u.d.). W sądzie, gdy potrzebne są wiadomości specjalne, sąd może wezwać biegłego (art. 278 § 1 k.p.c.). Różnicę wykazujesz Ty (art. 6 k.c.).',
      },
      {
        q: 'Czy mogę odstąpić od umowy z powodu mniejszego metrażu?',
        a: 'Tak, jeżeli prawo odstąpienia daje Ci umowa (art. 395 § 1 k.c.). Art. 43 ust. 1 u.d. nie wymienia różnicy powierzchni wprost. Pozwala odstąpić przy wadzie istotnej nieusuniętej po uznaniu w protokole albo stwierdzonej przez rzeczoznawcę (pkt 10 i 11). Z rękojmi odstąpisz tylko przy wadzie istotnej (art. 560 § 4 k.c.). Oświadczenie o odstąpieniu od umowy deweloperskiej wymaga podpisu notarialnie poświadczonego i zgody na wykreślenie roszczeń z księgi wieczystej (art. 45 ust. 1 u.d.).',
      },
      {
        q: 'Do kiedy mogę żądać zwrotu za brakujące metry?',
        a: 'Z rękojmi brak metrów musisz stwierdzić w ciągu 5 lat od wydania lokalu, jeżeli jest wadą (art. 568 § 1 k.c.). Oświadczenie o obniżeniu ceny składasz w ciągu roku od stwierdzenia (art. 568 § 2–3 k.c.). Jako konsument masz na to co najmniej 5 lat od wydania. Termin dla żądania z zapisu umowy ustalam w Twojej sprawie.',
      },
      {
        q: 'Czy w umowie podpisanej przed 13.02.2026 cena też liczy się za metr?',
        a: 'Nie z mocy ustawy. Art. 5a u.d. stosuje się do umów deweloperskich i rezerwacyjnych zawartych od 13.02.2026. Tak stanowi art. 2 ustawy z 4.12.2025 (Dz.U. 2026 poz. 27). W starszej umowie sposób ustalenia ceny i rozliczenia różnicy wynika z jej treści.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 5a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Cena = m² razy cena za 1 m², pomiar według Polskiej Normy; umowy od 13.02.2026 (art. 2 ustawy z 4.12.2025, Dz.U. 2026 poz. 27).',
        },
        {
          ref: 'art. 35 ust. 1, art. 41 ust. 3, art. 41a, art. 43 ust. 1, art. 45 ust. 1',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Powierzchnia i sposób pomiaru w umowie, protokół odbioru, rękojmia, odstąpienie i jego forma.',
        },
        { ref: 'art. 556¹, art. 560, art. 561⁵, art. 568', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Wada, obniżenie ceny i odstąpienie, 14 dni na odpowiedź, terminy rękojmi.' },
        { ref: 'art. 6, art. 385¹ § 1, art. 395 § 1', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Ciężar dowodu, niedozwolone postanowienia umowne, umowne prawo odstąpienia.' },
        { ref: 'art. 278 § 1', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'Opinia biegłego, gdy potrzebne są wiadomości specjalne.' },
        { ref: 'art. 13 ust. 1–2', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata od pozwu; ust. 2 w brzmieniu od 23.09.2025 (Dz.U. 2025 poz. 1157).' },
      ],
    },
    docs: [
      'Umowa deweloperska albo rezerwacyjna z aneksami o cenie i powierzchni.',
      'Prospekt informacyjny z rzutem lokalu, jeśli masz.',
      'Obmiar powykonawczy od dewelopera i jego rozliczenie ceny, jeśli je dostałeś.',
      'Protokół odbioru i akt notarialny przeniesienia własności, jeśli już były.',
      'Protokół Twojego geodety z nazwą normy i korespondencja z deweloperem o metrażu, jeśli masz.',
    ],
    guides: [],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'negocjacje-nieruchomosci'],
    cta: {
      heading: 'Płaciłeś za metry, których nie ma? Odzyskam różnicę.',
      lead: 'Prześlij umowę i pomiar, który masz. W 24 h roboczych dostaniesz odpowiedź, co trzeba zrobić w Twojej sprawie o metraż, oraz ofertę z ceną i terminem. Nic nie płacisz, dopóki jej nie zaakceptujesz.',
    },
    updated: '2026-10-10',
  },

  'klauzule-abuzywne-deweloper': {
    metaDesc: 'Klauzula niedozwolona w umowie deweloperskiej nie wiąże Cię, a reszta umowy obowiązuje (art. 385¹ k.c.). Wskazuję takie zapisy przed podpisem i w sporze.',
    h1: 'Klauzule abuzywne w umowie deweloperskiej',
    h1Full: 'Klauzule abuzywne w umowie deweloperskiej: przed podpisem i w sporze',
    topic: 'Klauzule niedozwolone',
    subtitle: 'Umowę napisał deweloper, a część zapisów działa tylko na Twoją niekorzyść? Klauzula niedozwolona to zapis nieuzgodniony z Tobą indywidualnie, który wbrew dobrym obyczajom rażąco narusza Twoje interesy; nie wiąże Cię (art. 385¹ § 1 k.c.). Wskazuję takie zapisy przed podpisem u notariusza albo podważam je w sporze z deweloperem.',
    short: {
      q: 'Które zapisy w umowie z deweloperem są niedozwolone?',
      a: 'Kodeks podaje 23 przykłady takich zapisów (art. 385³ k.c.). W umowie deweloperskiej to np. podwyżka ceny po podpisaniu bez prawa odstąpienia (pkt 20). Inny przykład: obowiązek zapłaty ustalonej sumy za rezygnację nałożony tylko na Ciebie (pkt 16). W razie wątpliwości taki zapis uważa się za niedozwolony. Jeżeli zapis Cię nie wiąże, reszta umowy obowiązuje (art. 385¹ § 2 k.c.).',
      facts: [
        [
          'Kiedy zapis Cię nie wiąże',
          'nie uzgodniono go z Tobą indywidualnie, narusza dobre obyczaje i rażąco Twoje interesy (art. 385¹ § 1 k.c.)',
        ],
        ['Co z resztą umowy', 'obowiązuje w pozostałym zakresie (art. 385¹ § 2 k.c.)'],
        [
          'Czego ta ocena nie obejmuje',
          'ceny i innych głównych świadczeń, jeżeli opisano je jednoznacznie (art. 385¹ § 1 zd. 2 k.c.)',
        ],
        [
          'Zapis gorszy niż ustawa deweloperska',
          'nieważny, w jego miejsce wchodzi przepis ustawy (art. 42 u.d.)',
        ],
      ],
    },
    introHeading: 'Kiedy zapis z umowy deweloperskiej Cię nie wiąże',
    intro: 'Ustawa nazywa je niedozwolonymi postanowieniami umownymi (potocznie: klauzule abuzywne). Chronią Cię, jeżeli kupujesz jako konsument, czyli osoba fizyczna, a zakup nie jest bezpośrednio związany z Twoją działalnością gospodarczą lub zawodową (art. 22¹ k.c.). Nieuzgodniony indywidualnie jest zapis, na którego treść nie miałeś rzeczywistego wpływu, w szczególności przejęty z wzorca umowy dewelopera (art. 385¹ § 3 k.c.). Obok kodeksu działa ustawa deweloperska (u.d.): zapis mniej korzystny dla Ciebie niż jej przepisy jest nieważny (art. 42 u.d.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Masz projekt umowy od dewelopera albo deweloper powołuje się na paragraf',
    when: [
      {
        b: 'Deweloper przysłał projekt umowy i wyznaczył termin u notariusza.',
        t: 'Do podpisu możesz negocjować wykreślenie albo zmianę zapisu. Umowa deweloperska wymaga aktu notarialnego (art. 40 ust. 1 u.d.), więc zmiany wpisuje się do jego projektu.',
      },
      {
        b: 'Deweloper żąda dopłaty, bo umowa przewiduje waloryzację ceny.',
        t: 'Zasady waloryzacji porównuję z prospektem, który ma na nie osobną rubrykę (wzór prospektu, załącznik do u.d.), a sam zapis z przykładem z art. 385³ pkt 20 k.c.',
      },
      { b: 'Deweloper odpowiada, że skoro podpisałeś, zapis obowiązuje.', t: 'Podpis nie przesądza sprawy. Jeżeli deweloper twierdzi, że uzgodnił zapis z Tobą indywidualnie, musi to udowodnić (art. 385¹ § 4 k.c.).' },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co robię z zapisami, które działają tylko na korzyść dewelopera',
    doFor: [
      'Czytam umowę z prospektem i wypisuję zapisy, które pasują do przykładów z art. 385³ k.c. albo są gorsze niż ustawa deweloperska. Przy każdym podaję przepis i skutek w liczbach: cena, termin, kara.',
      'Przed podpisem piszę nowe brzmienie spornych zapisów; negocjujesz je sam albo robię to ja.',
      'Sprawdzam, czy Prezes Urzędu Ochrony Konkurencji i Konsumentów (UOKiK) wydał decyzję o wzorcu umowy Twojego dewelopera (art. 23b u.o.k.k.).',
      'Po podpisie piszę do dewelopera, że zapis Cię nie wiąże, z żądaniem, np. wycofania kary albo zwrotu dopłaty.',
      'Prowadzę sprawę w sądzie o dopłatę po waloryzacji, karę albo zwrot wpłat.',
    ],
    lists: [
      {
        eyebrow: 'Przykłady z kodeksu',
        title: 'Przykładowe zapisy z umów deweloperskich, które pasują do przykładów z art. 385³ k.c.',
        intro: 'Brzmienia są przykładowe, nie pochodzą z umów klientów. O ocenie decyduje treść całej umowy i okoliczności jej zawarcia (art. 385² k.c.).',
        items: [
          { b: '„Deweloper może jednostronnie zmienić termin przeniesienia własności lokalu”', t: 'Pkt 10: jednostronna zmiana umowy bez ważnej przyczyny wskazanej w tej umowie.' },
          { b: '„Deweloper zastrzega sobie prawo zmiany materiałów i układu pomieszczeń”', t: 'Pkt 19: jednostronne prawo zmiany istotnych cech świadczenia bez ważnych przyczyn.' },
          {
            b: '„W razie rezygnacji nabywca zapłaci karę umowną”',
            t: 'Pkt 16 i 17: suma za rezygnację tylko po Twojej stronie albo rażąco wygórowana kara. Przy odstąpieniu z przyczyny z art. 43 ust. 1 u.d. nie ponosisz kosztów (art. 44 ust. 2 u.d.).',
          },
          { b: '„O tym, czy lokal jest zgodny z umową, decyduje przedstawiciel dewelopera”', t: 'Pkt 11: tylko druga strona ma prawo stwierdzać zgodność świadczenia z umową.' },
        ],
      },
    ],
    stepsHeading: 'Jak wygląda sprawa o niedozwolony zapis przed podpisem i po nim',
    steps: [
      'Przesyłasz umowę albo jej projekt z prospektem, a w sporze także pismo, w którym deweloper powołuje się na zapis.',
      'W 24 h roboczych odpisuję, czego wymaga sprawa: listy zmian przed aktem, pisma do dewelopera czy pozwu, i wysyłam ofertę z ceną i terminem. Ocena poszczególnych zapisów to już zakres oferty; do jej akceptacji nic nie płacisz.',
      'Przed podpisem dostajesz zestawienie zapisów z nowym brzmieniem. Krok trudny do odwrócenia: podpis umowy u notariusza. Potem zapis podważasz pismem albo w sądzie, a odstąpić od umowy możesz w przypadkach z art. 43 ust. 1 u.d.',
      'Po podpisie wysyłam deweloperowi pismo z terminem na odpowiedź. Jeżeli nie ustąpi, za Twoją zgodą przygotowuję pozew.',
    ],
    faq: [
      {
        q: 'Deweloper podnosi cenę przez waloryzację. Czy może?',
        a: 'Zależy od zapisu. Sama waloryzacja nie jest zakazana: wzór prospektu ma rubrykę „Dopuszczenie waloryzacji ceny oraz określenie zasad waloryzacji” (załącznik do u.d.). Jeżeli jednak zapis pozwala podwyższyć cenę po zawarciu umowy bez prawa odstąpienia, w razie wątpliwości jest niedozwolony (art. 385³ pkt 20 k.c.).',
      },
      {
        q: 'Podpisałem już umowę. Czy mogę jeszcze podważyć zapis?',
        a: 'Tak. Niedozwolony zapis nie wiąże Cię także po podpisaniu umowy (art. 385¹ § 1 k.c.). Ocenia się go według stanu z dnia jej zawarcia (art. 385² k.c.). Podnosisz to w piśmie do dewelopera, a gdy ten odmówi, w sądzie.',
      },
      { q: 'Czy jedna zła klauzula unieważnia całą umowę?', a: 'Nie, co do zasady umowa obowiązuje dalej. Jeżeli zapis Cię nie wiąże, strony są związane umową w pozostałym zakresie (art. 385¹ § 2 k.c.).' },
      {
        q: 'Czy skarga do UOKiK coś da w mojej sprawie?',
        a: 'Może doprowadzić do decyzji, która uznaje zapis wzorca Twojego dewelopera za niedozwolony i zakazuje go stosować (art. 23b ust. 1 u.o.k.k.). Zawiadomienie (potocznie: skarga) złożysz sam, ale stroną postępowania jest deweloper (art. 99a ust. 1, art. 99b ust. 1). Prawomocna decyzja działa wobec niego i wszystkich konsumentów z umową na tym wzorcu (art. 23d). Postępowanie powinno trwać do 4 miesięcy od wszczęcia, w sprawie szczególnie skomplikowanej do 5 (art. 99e).',
      },
      {
        q: 'Lepiej zmienić zapis przed podpisem czy spierać się po?',
        a: 'Przed podpisem, jeżeli do wizyty u notariusza masz jeszcze czas: zapis można wtedy wykreślić albo zmienić w negocjacjach. Po podpisie podważasz go pismem do dewelopera albo w sądzie. Zapis, na którego treść miałeś rzeczywisty wpływ, jest uzgodniony indywidualnie i art. 385¹ k.c. go nie obejmuje (art. 385¹ § 3 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 22¹, art. 385¹–385³', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Konsument i niedozwolone postanowienia umowne.' },
        {
          ref: 'art. 40, art. 42–44, załącznik',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Forma umowy, nieważność zapisów gorszych niż ustawa, odstąpienie, wzór prospektu.',
        },
        { ref: 'art. 23a–23d, art. 99a, 99b, 99e', act: 'Ustawa o ochronie konkurencji i konsumentów', tj: 'Dz.U. 2025 poz. 1714', eli: 'DU/2007/331', note: 'Decyzja Prezesa UOKiK o wzorcu umowy.' },
      ],
    },
    docs: [
      'Umowa deweloperska albo jej projekt, a jeśli była, także umowa rezerwacyjna.',
      'Prospekt informacyjny z załącznikami, który dostałeś przed podpisem.',
      'Pismo dewelopera, w którym powołuje się na zapis (wezwanie do dopłaty, naliczenie kary, nowy termin), i aneksy, jeśli je masz.',
      'Potwierdzenia wpłat, jeżeli spór dotyczy pieniędzy.',
    ],
    guides: ['kara-umowna-za-opoznienie-dewelopera-uchwala-sn'],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'sprawdzenie-umowy-rezerwacyjnej'],
    cta: {
      heading: 'Nie każdy zapis w umowie deweloperskiej naprawdę Cię wiąże.',
      lead: 'Prześlij umowę z deweloperem i wskaż zapis, który Cię niepokoi. W 24 h roboczych napiszę, czego wymaga Twoja sprawa, a w ofercie podam cenę i termin.',
    },
    updated: '2026-10-10',
  },

  'gwarancja-jakosci-lokal': {
    h1: 'Roszczenia z gwarancji jakości na lokal',
    h1Full: 'Roszczenia z gwarancji jakości na lokal: gwarancja a rękojmia',
    topic: 'Gwarancja jakości',
    metaDesc: 'Gwarancja nie zabiera rękojmi (art. 579 k.c.). Co do zasady deweloper odpowiada za wady fizyczne lokalu stwierdzone przed upływem 5 lat od jego wydania.',
    subtitle: 'Deweloper dał 2 lata gwarancji, a usterka wyszła później albo słyszysz, że okna to sprawa producenta? Gwarancja nie zabiera rękojmi: co do zasady deweloper odpowiada za wady stwierdzone przed upływem 5 lat od wydania lokalu (art. 568 § 1 i art. 579 k.c.). Dla każdej usterki wybieram drogę i pilnuję terminów.',
    short: {
      q: 'Rękojmia a gwarancja na mieszkanie: czym się różnią?',
      a: 'Z rękojmi deweloper co do zasady odpowiada za wady fizyczne stwierdzone przed upływem 5 lat od wydania lokalu (art. 568 § 1 k.c., art. 41a u.d.). Gwarancja działa obok niej, w zakresie i terminie z karty gwarancyjnej, a bez terminu przez 2 lata od wydania (art. 577 § 1 i § 4, art. 579 § 1 k.c.).',
      facts: [
        [
          'Zgłaszasz wadę z gwarancji',
          'bieg terminu na uprawnienia z rękojmi jest zawieszony (termin stoi) od zawiadomienia dewelopera o wadzie do odmowy gwaranta albo upływu czasu na naprawę (art. 579 § 3 k.c.)',
        ],
        [
          'Gwarant wymienił rzecz albo istotnie ją naprawił',
          'termin gwarancji biegnie na nowo; przy wymianie części tylko dla tej części (art. 581 § 1 k.c.)',
        ],
        [
          'Umowa ogranicza rękojmię, a jesteś konsumentem',
          'ograniczenie albo wyłączenie rękojmi wolno wpisać tylko wtedy, gdy przewiduje to przepis szczególny (art. 558 § 1 k.c.)',
        ],
      ],
    },
    introHeading: 'Karta gwarancyjna, okna i instalacje: co obiecuje gwarant, a za co odpowiada deweloper',
    intro: 'Gwarancja powstaje, gdy deweloper, producent albo inna firma złoży oświadczenie gwarancyjne, także w reklamie (art. 577 § 1 k.c.). Oświadczenie powinno wskazywać gwaranta, objęte rzeczy, warunki i sposób zgłoszenia wady (art. 577¹ § 2 k.c.). Powinno też wprost mówić, że gwarancja nie ma wpływu na Twoje uprawnienia wobec sprzedawcy (art. 577¹ § 2 pkt 1 k.c.). Rękojmia wynika z ustawy: deweloper odpowiada za wady lokalu, który Ci sprzedał (art. 556 k.c., art. 41a u.d.). Gwarancja producenta okien czy instalacji tej odpowiedzialności nie zmienia (art. 579 § 2 k.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Deweloper odsyła do gwarancji albo gwarant odmawia naprawy',
    when: [
      { b: 'Za miesiąc mijają 2 lata gwarancji, a części usterek jeszcze nie zgłosiłeś.', t: 'Co do zasady gwarant usuwa wady, które ujawnią się w terminie gwarancji (art. 577 § 3 k.c.). Zgłoś je przed jego końcem.' },
      { b: 'Deweloper odsyła Cię z oknami do producenta.', t: 'Możesz od razu żądać naprawy od dewelopera z rękojmi, także gdy okna mają gwarancję producenta (art. 579 § 1–2 k.c.).' },
      { b: 'Gwarant pisze, że usterka „nie jest objęta gwarancją”.', t: 'Bez odmiennych zapisów gwarancja obejmuje tylko wady powstałe z przyczyn tkwiących w rzeczy (art. 578 k.c.).' },
      {
        b: 'Gwarancję obiecywała reklama inwestycji, a karty gwarancyjnej nie dostałeś.',
        t: 'Oświadczenie gwarancyjne może być złożone w reklamie (art. 577 § 1 k.c.). Od gwaranta możesz żądać dokumentu gwarancyjnego (art. 577² k.c.).',
      },
    ],
    doForTitle: 'Co robię, gdy gwarant albo deweloper nie naprawia usterki',
    doFor: [
      'Czytam kartę gwarancyjną i umowę: gwarant, zakres, termin i procedura zgłoszenia (art. 577¹ § 2 k.c.).',
      'Dla każdej usterki wybieram rękojmię, gwarancję albo obie drogi i liczę terminy: od wydania lokalu i od stwierdzenia wady (art. 568 § 1–2 k.c.).',
      'Zawiadamiam dewelopera o wadzie zgłoszonej gwarantowi, żeby bieg terminu na uprawnienia z rękojmi został zawieszony (art. 579 § 3 k.c.).',
      'Gdy ani deweloper, ani gwarant nie usuwają wady, piszę pozew o jej usunięcie (art. 561 § 1 k.c.) i prowadzę sprawę przed sądem.',
    ],
    lists: [
      {
        eyebrow: 'Porównanie',
        title: 'Kto odpowiada, jak długo i czego możesz żądać',
        kind: 'check',
        items: [
          { b: 'Skąd się bierze', t: 'rękojmia: z ustawy (art. 556 k.c., art. 41a u.d.); gwarancja: tylko z oświadczenia gwarancyjnego (art. 577 § 1 k.c.).' },
          { b: 'Kto odpowiada', t: 'rękojmia: deweloper jako sprzedawca; gwarancja: gwarant wskazany w oświadczeniu, np. producent okien (art. 577¹ § 2 pkt 2 k.c.).' },
          { b: 'Jak długo', t: 'rękojmia: wada fizyczna stwierdzona przed upływem 5 lat od wydania lokalu (art. 568 § 1 k.c.); gwarancja: termin z oświadczenia, a bez niego 2 lata (art. 577 § 4 k.c.).' },
          { b: 'Co obejmuje', t: 'rękojmia: niezgodność lokalu z umową (art. 556¹ § 1 k.c.); gwarancja: bez innych zastrzeżeń wady z przyczyn tkwiących w rzeczy (art. 578 k.c.).' },
          { b: 'Czego żądasz', t: 'rękojmia: usunięcia wady, obniżenia ceny, przy wadzie istotnej odstąpienia (art. 560–561 k.c.); gwarancja: tego, co przewiduje oświadczenie, np. naprawy albo wymiany (art. 577 § 2 k.c.).' },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega sprawa, gdy usterka nie jest naprawiona',
    steps: [
      'Wysyłasz przez formularz zdjęcie karty gwarancyjnej, opis usterki i datę wydania lokalu.',
      'W 24 h roboczych dostajesz bezpłatną wstępną analizę: co trzeba zrobić z tą usterką, np. zgłosić ją przed końcem gwarancji. Razem z nią przychodzi oferta z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Po akceptacji oferty wysyłam deweloperowi żądanie usunięcia wady, a gdy korzystasz z gwarancji, także zgłoszenie do gwaranta. Każde pismo idzie z dowodem doręczenia.',
      'Pilnuję daty, której nie cofniesz: 5 lat od wydania lokalu. Wady stwierdzonej później co do zasady nie dochodzisz już z rękojmi (art. 568 § 1 k.c.). Jeżeli wada nie zostanie usunięta, wnoszę pozew, zanim roszczenie się przedawni (art. 568 § 2 k.c.).',
    ],
    faq: [
      {
        q: 'Gwarancja na okna: zgłaszać usterkę do dewelopera czy do producenta?',
        a: 'Do dewelopera tak, z rękojmi, także gdy okna mają gwarancję producenta (art. 579 § 1–2 k.c.). Do producenta zgłaszasz wadę, jeżeli karta gwarancyjna jest wystawiona na Ciebie albo obejmuje nabywcę lokalu. Gwaranta i procedurę zgłoszenia wskazuje oświadczenie gwarancyjne (art. 577¹ § 2 pkt 2–3 k.c.).',
      },
      {
        q: 'Czy skorzystanie z gwarancji wyklucza rękojmię?',
        a: 'Nie, rękojmię wykonujesz niezależnie od gwarancji (art. 579 § 1 k.c.). Zgłaszając wadę gwarantowi, zawiadom o niej też dewelopera. Od tego dnia bieg terminu na uprawnienia z rękojmi jest zawieszony, aż gwarant odmówi naprawy albo bezskutecznie minie czas na nią (art. 579 § 3 k.c.).',
      },
      {
        q: 'Jak zrobić przegląd gwarancyjny przed końcem terminu?',
        a: 'Obejrzyj mieszkanie i zgłoś na piśmie wszystkie wady przed końcem terminu z karty gwarancyjnej. Jeżeli karta nie podaje terminu, masz 2 lata od wydania lokalu (art. 577 § 4 k.c.). Trzymaj się procedury z karty i zachowaj zdjęcia oraz dowód wysłania.',
      },
      {
        q: 'Gwarant odmawia naprawy. Co mogę zrobić?',
        a: 'Możesz żądać naprawy od dewelopera z rękojmi (art. 579 § 1 k.c.) i jednocześnie kwestionować odmowę gwaranta. Bez odmiennych zapisów gwarancja obejmuje wady powstałe z przyczyn tkwiących w rzeczy (art. 578 k.c.). Gwarant działa w terminie z oświadczenia, a gdy go nie określono, niezwłocznie (art. 580 § 2 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 577–581 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Gwarancja: oświadczenie gwarancyjne, termin, zakres i relacja z rękojmią.' },
        { ref: 'art. 556–568 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Rękojmia: wada, uprawnienia kupującego, ograniczenie wobec konsumenta, 5 lat dla wad nieruchomości.' },
        {
          ref: 'art. 41a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Rękojmia z Kodeksu cywilnego wobec dewelopera.',
        },
      ],
    },
    docs: [
      'Karta gwarancyjna dewelopera albo producenta okien, drzwi lub instalacji, jeśli ją masz.',
      'Umowa deweloperska i akt notarialny.',
      'Protokół przekazania kluczy albo inny dokument z dniem wydania lokalu.',
      'Zgłoszenia do gwaranta i dewelopera oraz ich odpowiedzi.',
      'Zdjęcia usterki z datami; reklama inwestycji, jeśli obiecywała gwarancję.',
    ],
    guides: [],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'obsluga-prawna-wspolnot'],
    cta: {
      heading: 'Gwarancja to obietnica, którą można wyegzekwować — pomogę Ci to zrobić.',
      lead: 'Prześlij kartę gwarancyjną, datę wydania lokalu i zdjęcie usterki: w 24 h roboczych odpowiem, jakie zgłoszenia są potrzebne. Dołączę ofertę z ceną i terminem, a do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'roszczenia-wspolnota-deweloper': {
    h1: 'Przejęcie roszczeń nabywców przez wspólnotę',
    h1Full: 'Przejęcie roszczeń nabywców przez wspólnotę: cesja, uchwały, pozew',
    topic: 'Cesja roszczeń',
    metaDesc: 'Bez przelewu wspólnota nie ma uprawnień z rękojmi nabywców (art. 556 k.c.). Przygotowuję uchwałę, umowy cesji i pozew wspólnoty przeciwko deweloperowi.',
    subtitle: 'Przecieka dach albo pęka elewacja, a deweloper odpisuje zarządowi, że wspólnota nie jest stroną umów? Roszczenia nabywców z rękojmi wobec dewelopera, np. o usunięcie wady, wspólnota może przejąć umową przelewu, czyli cesji (art. 509 § 1 k.c.). Przygotowuję uchwałę, umowy przelewu i pozew, licząc 5 lat od wydania każdego lokalu.',
    short: {
      q: 'Jak wspólnota mieszkaniowa przejmuje od nabywców roszczenia wobec dewelopera?',
      a: 'Umową przelewu, czyli cesji, zawieraną z każdym nabywcą osobno (art. 509 § 1 k.c.). Uprawnienia z rękojmi ma ten, kto kupił lokal od dewelopera (art. 556 k.c., art. 41a u.d.). Po przelewie wspólnota jest wierzycielem i może pozwać dewelopera we własnym imieniu (art. 6 u.w.l.).',
      facts: [
        [
          'Kto ma uprawnienia z rękojmi',
          'Każdy, kto kupił lokal od dewelopera; wspólnota nie była stroną tych umów (art. 556 k.c., art. 41a u.d.)',
        ],
        [
          'Jak roszczenia przechodzą na wspólnotę',
          'Umową przelewu z każdym nabywcą; zgoda dewelopera co do zasady zbędna (art. 509 § 1 k.c.)',
        ],
        [
          'Termin na stwierdzenie wady',
          '5 lat od dnia wydania lokalu kupującemu, osobno dla każdego lokalu (art. 568 § 1 k.c.)',
        ],
        [
          'Przedawnienie roszczenia o usunięcie wady',
          'Rok od stwierdzenia wady; u konsumenta nie wcześniej niż 5 lat od wydania (art. 568 § 2 k.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Pozew wspólnoty o roszczenie majątkowe ponad 20 000 zł: 5% wartości przedmiotu sporu, najwyżej 100 000 zł (art. 13 ust. 2 u.k.s.c., stan na 10.10.2026)',
        ],
      ],
    },
    introHeading: 'Dlaczego deweloper odpowiada nabywcom, a nie wspólnocie',
    intro: 'Nieruchomość wspólna to „grunt oraz części budynku i urządzenia, które nie służą wyłącznie do użytku właścicieli lokali” (art. 3 ust. 2 u.w.l.), np. dach, elewacja i klatki schodowe. Wspólnotę mieszkaniową tworzą właściciele, których lokale wchodzą w skład danej nieruchomości (art. 6 u.w.l.). Umowy z deweloperem podpisywał jednak każdy nabywca osobno i to jemu deweloper odpowiada z rękojmi. Jedna wada dachu to więc tyle roszczeń, ile lokali sprzedał deweloper, każde z własnym terminem. Przelew zbiera je u jednego wierzyciela: wspólnota, reprezentowana przez zarząd (art. 21 ust. 1 u.w.l.), wysyła jedno wezwanie i wnosi jeden pozew.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Zarząd chce pozwać dewelopera, ale umowy podpisywali właściciele',
    when: [
      {
        b: 'Mija prawie 5 lat od wydania pierwszych mieszkań.',
        t: 'Termin na stwierdzenie wady biegnie od wydania każdego lokalu osobno (art. 568 § 1 k.c.). Wada stwierdzona po tym terminie daje uprawnienia z rękojmi tylko wtedy, gdy deweloper ją podstępnie zataił (art. 568 § 6 k.c.).',
      },
      { b: 'Deweloper odpisuje, że wspólnota nie jest stroną umów.', t: 'To prawda, stroną jest każdy nabywca. Po przelewie wspólnota staje się wierzycielem (art. 509 § 1 k.c.).' },
      { b: 'Nie wszyscy właściciele chcą podpisać cesję.', t: 'Wystarczą podpisy tych, którzy chcą: wspólnota dochodzi roszczeń przelanych, a pozostali działają sami.' },
      { b: 'Część mieszkań kupiono od poprzednich właścicieli, nie od dewelopera.', t: 'W wykazie lokali oznaczam je osobno i przygotowuję dla nich drugi wzór umowy przelewu.' },
      {
        b: 'Deweloper ma jeszcze niesprzedane lokale i głosuje na zebraniach.',
        t: 'Ma uprawnienia właściciela (art. 4 ust. 1 u.w.l.). Gdy ma większość udziałów, właściciele z co najmniej 1/5 udziałów mogą żądać głosowania: jeden właściciel, jeden głos (art. 23 ust. 2a u.w.l.).',
      },
    ],
    doForEyebrow: 'Co dla Ciebie robię',
    doForTitle: 'Co przygotowuję dla zarządu wspólnoty',
    doFor: [
      'Zestawiam wykaz lokali: kto kupił od dewelopera, kiedy wydano lokal, do kiedy biegnie 5 lat (art. 568 § 1 k.c.).',
      'Sprawdzam we wzorze umowy z deweloperem, czy przelew nie wymaga jego zgody (art. 509 § 1 i art. 514 k.c.).',
      'Piszę projekt uchwały: zgoda na przyjęcie przelewów i dochodzenie roszczeń, pełnomocnictwo dla zarządu (art. 22 ust. 2 u.w.l.).',
      'Przygotowuję umowę przelewu z listą wad i datą wydania lokalu, osobno dla rynku wtórnego. Wykaz podpisów prowadzę razem z zarządcą.',
      'Wzywam dewelopera do usunięcia wad (art. 561 § 1 k.c.), a gdy odmawia, wnoszę w imieniu wspólnoty pozew obejmujący wszystkie przelane roszczenia.',
    ],
    stepsHeading: 'Od uchwały do pozwu: kolejność działań wspólnoty',
    steps: [
      'Przysyłasz opis wad, liczbę lokali i daty wydania pierwszych mieszkań. Wstępna analiza, bezpłatna, przychodzi w 24 h roboczych i mówi, czy pilnie zgłaszać wady, czy zacząć od uchwały. Dołączam do niej ofertę, w której podaję cenę i termin; płacisz, gdy ją przyjmiesz.',
      'Właściciele głosują nad uchwałą, na zebraniu albo w drodze indywidualnego zbierania głosów (art. 23 ust. 1 u.w.l.).',
      'Właściciele podpisują umowy przelewu. Od podpisu wierzytelność przechodzi na wspólnotę, chyba że umowa stanowi inaczej (art. 510 § 1 k.c.), i przelanego roszczenia właściciel nie dochodzi już sam.',
      'W imieniu właścicieli, którzy przelali roszczenia, zawiadamiam dewelopera o przelewach. Dopóki go nie zawiadomią, a deweloper o przelewie nie wie, jego ugoda z dotychczasowym właścicielem ma skutek wobec wspólnoty (art. 512 k.c.).',
      'Jeżeli deweloper nie usuwa wad, wspólnota wnosi pozew. Wniesienie go przerywa bieg przedawnienia przelanych roszczeń (art. 123 § 1 pkt 1 k.c.).',
    ],
    faq: [
      {
        q: 'Jak zebrać cesje od właścicieli i co, jeśli nie wszyscy podpiszą?',
        a: 'Podpisy zbiera zarząd albo zarządca według wykazu lokali, a gdy ktoś odmówi, wspólnota dochodzi tylko roszczeń pozostałych właścicieli. Przelew to umowa nabywcy ze wspólnotą (art. 509 § 1 k.c.), więc nikt nie musi go podpisać. Zaczynamy od lokali, którym najwcześniej mija 5 lat od wydania. Przelew tego terminu nie zatrzymuje, bo deweloper ma wobec wspólnoty te same zarzuty co wobec nabywcy (art. 513 § 1 k.c.).',
      },
      {
        q: 'Jakie uchwały musi podjąć wspólnota przed pozwem?',
        a: 'Uchwałę o zgodzie na przyjęcie przelewów i dochodzenie roszczeń, z pełnomocnictwem dla zarządu (art. 22 ust. 2 u.w.l.). Art. 22 ust. 3 u.w.l. wylicza czynności przekraczające zwykły zarząd tylko przykładowo i przelewu nie wymienia. Uchwała usuwa więc wątpliwość, czy zarząd może działać sam. Projekt piszę tak, żeby obejmował też wniesienie pozwu.',
      },
      {
        q: 'Co z właścicielami, którzy kupili mieszkanie na rynku wtórnym?',
        a: 'Nie są kupującymi od dewelopera, bo lokal sprzedał im poprzedni właściciel (art. 556 k.c.). Przelew może podpisać tylko ten, komu przysługuje roszczenie wobec dewelopera (art. 509 § 1 k.c.), a to trzeba ustalić z obu umów sprzedaży. Do wykazu lokali potrzebuję więc umowy zakupu na rynku wtórnym i, jeśli jest dostępny, aktu pierwszego nabywcy.',
      },
      {
        q: 'Czy wspólnota może sama pozwać dewelopera, bez cesji od właścicieli?',
        a: 'O roszczenia z rękojmi nabywców nie, według stanu prawnego na 10.10.2026. Art. 6 u.w.l. pozwala wspólnocie pozywać, ale ustawa o własności lokali nie przyznaje jej uprawnień z rękojmi. Te ma kupujący lokal od dewelopera (art. 556 k.c.). Wspólnota pozywa więc we własnym imieniu o te roszczenia, które nabywcy na nią przelali (art. 509 § 1 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 509–514 i art. 123 § 1', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Przelew, zawiadomienie dłużnika, zarzuty; przerwanie przedawnienia.' },
        { ref: 'art. 556, art. 561 § 1 i art. 568', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Rękojmia wobec kupującego; 5 lat od wydania; wada podstępnie zatajona.' },
        {
          ref: 'art. 41a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Rękojmia z k.c. wobec dewelopera.',
        },
        { ref: 'art. 3, 4, 6 i 21–23', act: 'Ustawa o własności lokali', tj: 'Dz.U. 2026 poz. 232', eli: 'DU/1994/388', note: 'Nieruchomość wspólna, wspólnota, zarząd, uchwały.' },
        { ref: 'art. 13 ust. 2', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'Opłata od pozwu; brzmienie od 23.09.2025.' },
      ],
    },
    docs: [
      'Wykaz lokali z datami odbioru albo wydania, a jeśli zarząd je ma, kopie protokołów odbioru',
      'Wzór umowy deweloperskiej i aktu przeniesienia własności lokalu (wystarczy jeden egzemplarz)',
      'Opis wad części wspólnych ze zdjęciami i datami pierwszych zgłoszeń',
      'Korespondencja z deweloperem: zgłoszenia wad, odpowiedzi, odmowy',
      'Uchwały i protokoły zebrań wspólnoty dotyczące wad, jeśli były',
      'Opinia rzeczoznawcy budowlanego albo protokół przeglądu budynku, jeśli jest',
    ],
    guides: [],
    seeAlso: ['obsluga-prawna-wspolnot', 'obsluga-prawna-zarzadcow', 'nadzor-budowlany-pinb'],
    cta: {
      heading: 'Rozproszone roszczenia to słabość. Zbiorę je we wspólną, mocną sprawę.',
      lead: 'Opisz wady części wspólnych i liczbę lokali, a w 24 h roboczych odpiszę, jak zebrać przelewy. Do odpowiedzi dołączę ofertę dla zarządu z ceną i terminem; wspólnota nic nie płaci, zanim jej nie przyjmie.',
    },
    updated: '2026-10-10',
  },

  /* ===== BLOK 9 — Przesył i wywłaszczenia (uzupełnienie) ===== */
  'bezumowne-korzystanie': {
    h1: 'Wynagrodzenie za bezumowne korzystanie z gruntu',
    h1Full: 'Wynagrodzenie za bezumowne korzystanie z gruntu: sąsiad, firma, gmina',
    topic: 'Bezumowne korzystanie',
    metaDesc: 'Ktoś zajmuje Twoją działkę bez tytułu? Zajmujący w złej wierze płaci wynagrodzenie, co do zasady za okres do 6 lat wstecz (art. 118, 225 k.c.).',
    subtitle: 'Sąsiad postawił płot na Twojej działce, firma trzyma na niej słupy albo gmina poszerzyła drogę bez umowy? Zajmujący bez tytułu w złej wierze płaci wynagrodzenie (potocznie: odszkodowanie) co do zasady za okres do 6 lat wstecz (art. 118, 225 k.c.). Ustalam, kto i od kiedy zajmuje grunt, a potem żądam zapłaty i oddania zajętej części.',
    short: {
      q: 'Kiedy należy Ci się wynagrodzenie za bezumowne korzystanie z nieruchomości?',
      a: 'Jeżeli ktoś w złej wierze włada Twoim gruntem bez tytułu prawnego (umowy, decyzji, służebności), płaci za cały nieprzedawniony okres (art. 225 k.c.). Jeżeli był w dobrej wierze, płaci dopiero od chwili, gdy dowiedział się o pozwie o wydanie gruntu (art. 224 § 2 k.c.). Dobrą wiarę prawo domniemywa, więc złą wiarę trzeba wykazać (art. 7 k.c.).',
      facts: [
        [
          'Za ile lat zapłaci zajmujący w złej wierze',
          'Co do zasady za 6 lat; termin kończy się 31 grudnia, a przy roszczeniu związanym z Twoją działalnością gospodarczą może wynosić 3 lata (art. 118, 225 k.c.)',
        ],
        [
          'Zajęty pas już odzyskałeś',
          'Masz rok od dnia zwrotu gruntu; potem roszczenie o wynagrodzenie jest przedawnione (art. 229 § 1 k.c.)',
        ],
        [
          'Oddanie gruntu',
          'Możesz żądać wydania zajętej części i zaniechania naruszeń; to żądanie nie przedawnia się (art. 222, art. 223 § 1 k.c.)',
        ],
        [
          'Gdzie',
          'Wyłącznie sąd miejsca położenia działki (art. 38 § 1 pkt 4 k.p.c.); przy wartości sporu ponad 100 000 zł sąd okręgowy (art. 17 pkt 4 k.p.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          'Od pozwu o samą zapłatę: przy żądaniu ponad 20 000 zł 5% tej kwoty, nie więcej niż 100 000 zł; przy niższym żądaniu opłata stała, od 30 do 1000 zł (art. 13 ust. 1–2 u.k.s.c.)',
        ],
      ],
    },
    introHeading: 'Ktoś zajął część Twojej działki bez umowy: czego możesz żądać',
    intro: 'Bezumowne korzystanie to sytuacja, w której ktoś włada Twoim gruntem bez uprawnienia skutecznego wobec Ciebie (art. 222 § 1 k.c.), np. bez umowy, decyzji albo służebności. Masz wtedy dwa rodzaje roszczeń. Co do gruntu: wydanie zajętej części albo przywrócenie stanu zgodnego z prawem i zaniechanie naruszeń (art. 222 § 1–2 k.c.). Co do pieniędzy: wynagrodzenie za korzystanie, zwrot pożytków i naprawienie szkody za pogorszenie gruntu; od zajmującego w dobrej wierze dopiero od chwili, gdy dowiedział się o pozwie o wydanie (art. 224–225 k.c.). Wobec dzierżawcy albo najemcy te przepisy stosuje się odpowiednio, o ile przepisy o jego umowie nie stanowią inaczej (art. 230 k.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Sąsiad, firma albo gmina korzysta z Twojej działki bez zgody',
    when: [
      {
        b: 'Odzyskałeś zajęty pas gruntu, ale nikt nie zapłacił za lata korzystania',
        t: 'Na pozew o wynagrodzenie masz rok od dnia zwrotu (art. 229 § 1 k.c.). Po upływie terminu zajmujący może odmówić zapłaty (art. 117 § 2 k.c.).',
      },
      {
        b: 'Sąsiad przesunął płot albo postawił garaż kilka metrów na Twoim gruncie',
        t: 'Sprawdź, od kiedy to trwa: sąsiad może nabyć własność przez zasiedzenie po 20 latach samoistnego posiadania w dobrej wierze, a po 30 latach także w złej (art. 172 k.c.).',
      },
      {
        b: 'Sąsiad parkuje, składuje materiały albo przejeżdża przez Twoją działkę',
        t: 'Bez tytułu możesz żądać zaniechania (art. 222 § 2 k.c.). Gdy jego działka nie ma dostępu do drogi publicznej, może on żądać drogi koniecznej, ale za wynagrodzeniem (art. 145 § 1 k.c.).',
      },
      {
        b: 'Na działce stoją słupy, linia albo gazociąg, a nikt nie pokazał Ci umowy ani decyzji',
        t: 'To bezumowne korzystanie, jeżeli przedsiębiorca przesyłowy nie ma tytułu do gruntu, np. umowy, decyzji albo zasiedzianej służebności. Szczegóły przy sieciach są na stronie o wynagrodzeniu za służebność przesyłu.',
      },
      {
        b: 'Gmina urządziła drogę albo chodnik na kawałku Twojej działki bez umowy',
        t: 'Gmina bez tytułu odpowiada jak sąsiad (art. 222–225 k.c.). Jeżeli pas przeszedł na gminę z mocy prawa po podziale działki na wniosek właściciela, przysługuje odszkodowanie, a nie wynagrodzenie (art. 98 ust. 1 i 3 u.g.n.).',
      },
      {
        b: 'Dzierżawca albo najemca nie oddał gruntu po końcu umowy',
        t: 'Od końca umowy korzysta z gruntu bez tytułu. Przepisy o wynagrodzeniu za korzystanie stosuje się do niego odpowiednio, o ile przepisy o dzierżawie albo najmie nie stanowią inaczej (art. 230 k.c.).',
      },
    ],
    doForTitle: 'Jak ustalam okres, kwotę i drogę do zapłaty',
    doFor: [
      'Sprawdzam księgę wieczystą i dokumenty, które masz: czy sąsiad, gmina albo firma ma do zajętego pasa służebność, umowę albo decyzję.',
      'Ustalam, jaką część gruntu i od kiedy zajmuje; jeżeli granica jest sporna, wskazuję, czy potrzebny jest pomiar geodety.',
      'Wyliczam okres, za który roszczenie nie jest przedawnione (art. 118 i 229 k.c.), i zbieram dowody złej wiary zajmującego (art. 225 k.c.).',
      'Szacuję kwotę według powierzchni zajętego gruntu, sposobu i czasu korzystania; dochodzę też zwrotu pożytków i naprawienia szkody, jeśli grunt ucierpiał.',
      'Gdy zbliża się koniec terminu, składam pozew (przerywa bieg przedawnienia, art. 123 § 1 pkt 1 k.c.) albo wniosek o zawezwanie do próby ugodowej (zawiesza bieg, art. 121 pkt 6 k.c.).',
      'Po prawomocnym wyroku składam do komornika wniosek o egzekucję zapłaty i wydania zajętego pasa.',
      'Porządkuję sytuację na przyszłość: umową o korzystanie za opłatą, służebnością za wynagrodzeniem albo wydaniem gruntu.',
    ],
    stepsHeading: 'Od wezwania do pozwu o zapłatę i oddanie pasa',
    steps: [
      'Opisujesz w formularzu, kto korzysta z Twojej działki, w jaki sposób i od kiedy; jeśli masz, dołączasz numer księgi wieczystej i zdjęcia.',
      'Na podstawie opisu w 24 h roboczych wskazuję, czego wymaga Twoja sprawa, np. sprawdzenia tytułu zajmującego, przebiegu granicy albo terminu przedawnienia. Razem z tym dostajesz ofertę z ceną i terminem, a płacisz dopiero po jej akceptacji.',
      'Po akceptacji oferty ustalam tytuł, okres i kwotę, a potem wysyłam zajmującemu wezwanie do zapłaty i wydania gruntu z terminem odpowiedzi.',
      'Jeżeli sąsiad, gmina albo firma nie płaci albo termin przedawnienia jest blisko, składam pozew do sądu miejsca położenia działki. Nie mogę obiecać wyniku.',
      'Krok nieodwracalny: podpisanie ugody albo zrzeczenie się roszczenia. Przed podpisem sprawdzam, jaki okres i jaką część gruntu obejmuje ugoda.',
    ],
    faqHeading: 'Zapłata za zajęty grunt: najczęstsze pytania.',
    faq: [
      {
        q: 'Sąsiad od lat ma płot na mojej działce. Czy mogę żądać zapłaty?',
        a: 'Tak, jeżeli sąsiad nie ma tytułu do zajętego pasa, np. umowy z Tobą. Za lata wstecz płaci, jeżeli zajął pas w złej wierze (art. 225 k.c.). W przeciwnym razie płaci od chwili, gdy dowiedział się o pozwie o wydanie pasa (art. 224 § 2 k.c.). Obok pieniędzy możesz żądać usunięcia płotu i oddania pasa gruntu (art. 222 k.c.).',
      },
      {
        q: 'Czy przedawnienie jest krótsze, gdy grunt zajmuje firma?',
        a: 'Nie z tego powodu. Termin 3 lat może dotyczyć roszczenia związanego z działalnością gospodarczą właściciela, a nie tego, kto zajmuje grunt (art. 118 k.c.). Jeżeli jesteś osobą prywatną i roszczenie nie wiąże się z Twoją działalnością gospodarczą, co do zasady liczysz 6 lat. Samo wezwanie do zapłaty biegu nie przerywa; przerywa go pozew (art. 123 § 1 pkt 1 k.c.).',
      },
      {
        q: 'Czy mogę żądać jednocześnie oddania gruntu i zapłaty?',
        a: 'Tak, oba żądania można co do zasady połączyć w jednym pozwie (art. 191 k.p.c.). Wydania gruntu żądasz na podstawie art. 222 § 1 k.c., a wynagrodzenia na podstawie art. 224–225 k.c. Wynagrodzenia dochodzisz przed sądem miejsca położenia działki (art. 38 § 1 pkt 4 k.p.c.). Oddanie gruntu się nie przedawnia (art. 223 § 1 k.c.), zapłata za przeszłość tak.',
      },
      {
        q: 'Ile wynosi wynagrodzenie za bezumowne korzystanie z gruntu?',
        a: 'Kwotę szacuję od powierzchni zajętego gruntu oraz sposobu i czasu korzystania, bo ustawa nie podaje stawki ani wzoru (art. 224 § 2 k.c.). W sporze sąd może oprzeć wysokość wynagrodzenia na opinii biegłego (art. 278 § 1 k.p.c.). Dla słupów, linii i rur działa osobny kalkulator szacunkowy.',
      },
      {
        q: 'Gmina zajęła kawałek działki pod drogę bez umowy. Co wtedy?',
        a: 'Jeżeli gmina nie ma tytułu do pasa, masz wobec niej te same roszczenia co wobec sąsiada (art. 222–225 k.c.). Jeżeli pas przeszedł na gminę z mocy prawa po podziale działki na wniosek właściciela, należy Ci się odszkodowanie (art. 98 ust. 1 i 3 u.g.n.). Odszkodowanie przysługuje też, gdy własność przeszła na mocy decyzji o zezwoleniu na realizację inwestycji drogowej (art. 12 ust. 4 i 4f specustawy drogowej).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 222–223 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'żądanie wydania nieruchomości i zaniechania naruszeń; przy nieruchomości nie przedawnia się' },
        { ref: 'art. 224–225 i 230 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'wynagrodzenie, pożytki i szkoda; dobra i zła wiara; posiadacz zależny' },
        { ref: 'art. 118 i 229 § 1 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'przedawnienie: 6 lat albo 3 lata z końcem roku; rok od dnia zwrotu gruntu' },
        { ref: 'art. 38 § 1 pkt 4 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'pozew wyłącznie do sądu miejsca położenia nieruchomości' },
        {
          ref: 'art. 13 ust. 1–2 u.k.s.c.',
          act: 'Ustawa o kosztach sądowych w sprawach cywilnych',
          tj: 'Dz.U. 2025 poz. 1228 ze zm.',
          eli: 'DU/2005/1398',
          note: 'opłata od pozwu o wynagrodzenie za zajęty grunt; górna granica 100 000 zł obowiązuje od 23.09.2025 (Dz.U. 2025 poz. 1157)',
        },
        {
          ref: 'art. 98 ust. 1 i 3 u.g.n.',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'działka wydzielona pod drogę publiczną przy podziale na wniosek właściciela przechodzi z mocy prawa na gminę, powiat, województwo albo Skarb Państwa, za odszkodowaniem',
        },
      ],
    },
    docs: [
      'Numer księgi wieczystej Twojej działki, a przy sporze o płot także działki sąsiada, jeśli go znasz',
      'Mapa albo szkic z zaznaczoną zajętą częścią (pomiar geodety, jeśli jest)',
      'Zdjęcia zajętego gruntu: płotu, drogi, składowiska albo urządzeń, najlepiej z datami',
      'Stare zdjęcia, pisma albo dane świadków pokazujące, od kiedy trwa korzystanie',
      'Umowa dzierżawy, najmu albo pisemna zgoda, jeśli kiedyś była, i jej wypowiedzenie',
      'Korespondencja z zajmującym: wezwania, odpowiedzi, propozycje ugody',
    ],
    guides: [],
    seeAlso: ['zasiedzenie-nieruchomosci', 'dzierzawa-rolna'],
    cta: {
      heading: 'Ktoś korzysta z Twojej ziemi za darmo? Należy Ci się zapłata.',
      lead: 'Napisz, kto zajął część działki, czym (płot, droga, słupy) i od którego roku. W ciągu 24 h roboczych dostaniesz listę potrzebnych kroków i ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'droga-konieczna': {
    h1: 'Droga konieczna',
    h1Full: 'Droga konieczna: dojazd do działki przez grunt sąsiada',
    topic: 'Droga konieczna',
    metaDesc: 'Droga konieczna to służebność drogowa przez grunt sąsiada, za wynagrodzeniem dla niego (art. 145 § 1 k.c.). Bez zgody sąsiada ustanawia ją sąd rejonowy.',
    subtitle: 'Twoja działka nie ma dojazdu do drogi publicznej albo sąsiad chce poprowadzić przejazd przez Twój grunt. Droga konieczna to służebność drogowa, której za wynagrodzeniem może żądać od sąsiadów właściciel działki bez odpowiedniego dostępu do drogi publicznej (art. 145 § 1 k.c.). Prowadzę sprawy obu stron; najpierw sprawdzam, czy wystarczy umowa u notariusza, a bez zgody sąsiada sprawę rozstrzyga sąd rejonowy.',
    short: {
      q: 'Moja działka nie ma dojazdu. Czy sąd może wyznaczyć drogę przez działkę sąsiada?',
      a: 'Tak, jeżeli Twoja działka nie ma odpowiedniego dostępu do drogi publicznej lub do należących do niej budynków gospodarskich (art. 145 § 1 k.c.). Sąd prowadzi drogę z uwzględnieniem potrzeb Twojej działki i z najmniejszym obciążeniem gruntu sąsiada (art. 145 § 2 k.c.). Sąsiadowi należy się wynagrodzenie, a jeżeli się zgadza, wystarczy umowa w formie aktu notarialnego (art. 245 § 2 k.c.).',
      facts: [
        [
          'Kto może żądać',
          'Właściciel działki bez odpowiedniego dostępu (art. 145 § 1 k.c.); samoistny posiadacz (włada działką jak właściciel) tylko służebności osobistej (art. 146, art. 336 k.c.)',
        ],
        [
          'Wynagrodzenie dla sąsiada',
          'Należy się z ustawy; przepis nie podaje stawki za m² (art. 145 § 1 k.c.)',
        ],
        [
          'Gdzie',
          'Sąd rejonowy położenia nieruchomości, na wniosek (art. 507, art. 606, art. 626 § 1 k.p.c.)',
        ],
        [
          'Opłata sądowa (nie honorarium)',
          '200 zł od wniosku o ustanowienie drogi koniecznej (art. 39 ust. 1 pkt 1 u.k.s.c.); 200 zł od wniosku o wpis służebności do księgi wieczystej (art. 42 ust. 1 u.k.s.c.)',
        ],
        [
          'Ile trwa (z mojej praktyki)',
          'Zwykle kilka–kilkanaście miesięcy; sąd co do zasady ogląda nieruchomość na miejscu (art. 626 § 2 k.p.c.)',
        ],
      ],
    },
    introHeading: 'Prawo przejazdu przez cudzy grunt, a nie zakup pasa ziemi',
    intro: 'Droga konieczna to prawo przejazdu i przechodu przez grunt sąsiada, a nie własność pasa ziemi. Sąsiad pozostaje właścicielem, a Ty korzystasz z jego gruntu w zakresie oznaczonym w umowie albo w postanowieniu sądu (art. 285 § 1 k.c.). Służebność wykonuje się tak, żeby jak najmniej utrudniała korzystanie z gruntu obciążonego (art. 288 k.c.). Rękojmia wiary publicznej ksiąg wieczystych nie działa przeciwko służebności drogi koniecznej (art. 7 pkt 4 u.k.w.h.). Taka droga może więc obciążać działkę, choć księga wieczysta jej nie pokazuje.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Brak dojazdu, brama na przejeździe albo sąsiad żąda drogi przez Twój grunt',
    when: [
      { b: 'Sąsiad złożył w sądzie wniosek o drogę przez Twoją działkę', t: 'wniosek musi wskazać właścicieli wszystkich nieruchomości, przez które mogłaby prowadzić droga (art. 626 § 1 k.p.c.).' },
      { b: 'Działka nie ma dojazdu albo dojeżdżasz po cudzym gruncie bez umowy', t: 'trasę i wynagrodzenie ustala umowa u notariusza albo postanowienie sądu (art. 245 § 2 k.c., art. 626 § 2 k.p.c.).' },
      {
        b: 'Sąsiad postawił bramę na przejeździe, którym jeździłeś latami',
        t: 'bez umowy i postanowienia sądu zasiedzenie wchodzi w grę tylko przy trwałym i widocznym urządzeniu (art. 292 k.c.); w innym razie zostaje umowa albo droga konieczna.',
      },
      { b: 'Po sprzedaży części gruntu jedna z działek straciła dojazd', t: 'bez porozumienia sąd prowadzi drogę, o ile to możliwe, przez grunty, które były przedmiotem tej sprzedaży (art. 145 § 2 zd. 2 k.c.).' },
      { b: 'Chcesz budować dom, a dojeżdżasz tylko po cudzym gruncie', t: 'dostęp przez odpowiednią służebność drogową, także drogę konieczną, jest dostępem do drogi publicznej (art. 2 pkt 14 u.p.z.p.).' },
    ],
    doForTitle: 'Co robię, gdy potrzebujesz dojazdu albo gdy droga ma biec przez Twój grunt',
    doFor: [
      'Sprawdzam księgi wieczyste, mapę ewidencyjną i umowy: czy masz już służebność i którędy droga może biec.',
      'Przygotowuję wniosek o drogę konieczną: trasa na mapie i właściciele wszystkich działek, przez które mogłaby biec.',
      'Reprezentuję Cię na rozprawie i przy oględzinach; zgłaszam zarzuty do opinii biegłego co do trasy, szerokości i wynagrodzenia.',
      'Po stronie właściciela gruntu obciążanego wskazuję trasę dalej od domu i żądam wynagrodzenia.',
      'Negocjuję z sąsiadem umowę (trasa, szerokość, wynagrodzenie, utrzymanie) i przygotowuję jej treść do aktu notarialnego.',
      'Gdy droga biegnie już przez Twój grunt, a powstała ważna potrzeba gospodarcza: żądam za wynagrodzeniem zmiany treści lub sposobu wykonywania służebności, chyba że niewspółmiernie zaszkodzi to działce sąsiada (art. 291 k.c.).',
    ],
    lists: [
      {
        eyebrow: 'Koszty',
        title: 'Ile kosztuje służebność drogi poza opłatą sądową',
        intro: 'Opłaty sądowe są w tabeli „W skrócie”. Cenę mojej pracy i termin podaję w ofercie.',
        items: [
          { b: 'Biegły', t: 'jego wynagrodzenie to wydatek sądowy (art. 5 ust. 1 pkt 3 u.k.s.c.); zaliczkę w kwocie i terminie oznaczonych przez sąd płaci ten, kto wnosi o opinię (art. 130⁴ § 1 w zw. z art. 13 § 2 k.p.c.).' },
          { b: 'Podział kosztów sprawy', t: 'co do zasady każdy uczestnik ponosi koszty swojego udziału; przy sprzecznych interesach sąd może rozdzielić je inaczej (art. 520 § 1 i 2 k.p.c.).' },
          { b: 'Umowa u notariusza', t: 'taksę notarialną podaje notariusz. Podatek od czynności cywilnoprawnych przy odpłatnej służebności płaci nabywający służebność (art. 4 pkt 6 u.p.c.c.).' },
        ],
      },
      {
        eyebrow: 'Gdy droga ma biec przez Twój grunt',
        title: 'Sąsiad żąda drogi przy Twoim domu: jak się bronić',
        intro: 'Jeżeli działka sąsiada nie ma odpowiedniego dostępu do drogi publicznej, drogi nie zablokujesz (art. 145 § 1 k.c.). Masz jednak wpływ na jej przebieg, a za obciążenie gruntu należy Ci się wynagrodzenie.',
        items: [
          { b: 'Czy sąsiad ma już dojazd', t: 'jeżeli jego działka ma odpowiedni dostęp do drogi publicznej, brakuje podstawy z art. 145 § 1 k.c.' },
          { b: 'Trasa dalej od domu', t: 'droga ma najmniej obciążać grunty, przez które prowadzi (art. 145 § 2 k.c.); wskazujesz trasę przez inną część działki albo przez inny grunt.' },
          { b: 'Jak korzystasz z działki', t: 'przebieg ma uwzględniać interes społeczno-gospodarczy (art. 145 § 3 k.c.); opisujesz, gdzie stoi dom i budynki gospodarcze.' },
        ],
      },
    ],
    stepsHeading: 'Jak przebiega sprawa o dojazd: od opisu działki do wpisu w księdze',
    steps: [
      'Opisujesz w formularzu, gdzie leży działka, którędy dziś dojeżdżasz i czy sąsiad zgadza się na przejazd.',
      'W 24 h roboczych od opisu wskazuję, czego wymaga Twój dojazd: umowy u notariusza, wniosku do sądu albo odpowiedzi na wniosek sąsiada. Dołączam ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Proponuję sąsiadowi porozumienie. Jeżeli się zgadza, podpisujecie akt notarialny; podpis wiąże obie strony, więc trasę sprawdzam na mapie wcześniej.',
      'Bez porozumienia składam wniosek o ustanowienie drogi koniecznej z dowodami braku odpowiedniego dostępu.',
      'Jeżeli wniosek złożył sąsiad, piszę Twoją odpowiedź: inna trasa i stanowisko co do wynagrodzenia.',
      'Sąd co do zasady ogląda działki (art. 626 § 2 k.p.c.) i ustala trasę oraz wynagrodzenie. Z prawomocnym postanowieniem składam wniosek o wpis do księgi wieczystej.',
    ],
    faq: [
      {
        q: 'Ile zapłacę sąsiadowi za drogę konieczną?',
        a: 'Tyle, ile uzgodnicie w umowie albo ustali sąd; ustawa nie podaje stawki za m² (art. 145 § 1 k.c.). Do ustalenia kwoty sąd może powołać biegłego (art. 278 § 1 w zw. z art. 13 § 2 k.p.c.).',
      },
      {
        q: 'Jak szeroka musi być droga konieczna?',
        a: 'Kodeks cywilny nie podaje szerokości w metrach. Sąd ustala ją według potrzeb działki bez dostępu i z najmniejszym obciążeniem gruntu sąsiada (art. 145 § 2 k.c.). W umowie u notariusza szerokość wpisujecie sami.',
      },
      {
        q: 'Kto utrzymuje drogę konieczną i płaci za jej naprawy?',
        a: 'Co do zasady właściciel działki, która z drogi korzysta, jeżeli umowa nie stanowi inaczej (art. 289 § 1 k.c.). Obowiązek dotyczy urządzeń potrzebnych do korzystania z drogi. Umowa może przenieść go na właściciela gruntu obciążonego; wtedy odpowiada on także osobiście (art. 289 § 2 k.c.).',
      },
      {
        q: 'Ile kosztuje sprawa o drogę konieczną w sądzie i ile trwa?',
        a: 'Opłata od wniosku jest stała (art. 39 ust. 1 pkt 1 u.k.s.c.; kwota w tabeli „W skrócie”), a sprawa trwa z mojej praktyki zwykle kilka–kilkanaście miesięcy. Dochodzi wynagrodzenie biegłego, jeżeli sąd go powoła. Cenę mojej pracy i termin podaję w ofercie.',
      },
      {
        q: 'Czy drogę konieczną da się ustanowić u notariusza zamiast w sądzie?',
        a: 'Tak, jeżeli sąsiad się zgadza. Służebność drogową ustanawiacie umową, a oświadczenie właściciela, który ją ustanawia, wymaga formy aktu notarialnego (art. 245 § 2 k.c.). W umowie ustalacie trasę, szerokość, wynagrodzenie i to, kto utrzymuje drogę.',
      },
    ],
    law: {
      items: [
        { ref: 'art. 145, 146, 245, 285, 288, 289, 291, 292 i 336 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'droga konieczna i służebności gruntowe' },
        { ref: 'art. 13 § 2, 130⁴ § 1, 278 § 1, 507, 520, 606 i 626 k.p.c.', act: 'Kodeks postępowania cywilnego', tj: 'Dz.U. 2026 poz. 468', eli: 'DU/1964/296', note: 'wniosek, sąd, oględziny, biegły, koszty' },
        { ref: 'art. 5 ust. 1 pkt 3, art. 39 ust. 1 pkt 1 i art. 42 ust. 1 u.k.s.c.', act: 'Ustawa o kosztach sądowych w sprawach cywilnych', tj: 'Dz.U. 2025 poz. 1228', eli: 'DU/2005/1398', note: 'opłaty od wniosków, wydatki' },
        { ref: 'art. 7 pkt 4 u.k.w.h.', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'droga konieczna a rękojmia wiary publicznej' },
        { ref: 'art. 2 pkt 14 u.p.z.p.', act: 'Ustawa o planowaniu i zagospodarowaniu przestrzennym', tj: 'Dz.U. 2026 poz. 538', eli: 'DU/2003/717', note: 'dostęp do drogi publicznej' },
        { ref: 'art. 4 pkt 6 u.p.c.c.', act: 'Ustawa o podatku od czynności cywilnoprawnych', tj: 'Dz.U. 2026 poz. 191', eli: 'DU/2000/959', note: 'podatek od odpłatnej służebności' },
      ],
    },
    docs: [
      'Numer albo odpis księgi wieczystej Twojej działki i działek, przez które mógłby biec dojazd (jeśli masz)',
      'Mapa ewidencyjna albo zrzut z geoportalu z zaznaczonym dzisiejszym dojazdem',
      'Umowa sprzedaży albo podziału, po której działka straciła dojazd (jeśli taka była)',
      'Wniosek sąsiada albo pismo z sądu, jeżeli to sąsiad żąda drogi przez Twój grunt',
      'Zdjęcia przejazdu, bramy albo blokady i dotychczasowe ustalenia z sąsiadem (jeśli masz)',
    ],
    guides: [
      'ile-kosztuje-sluzebnosc-drogi-koniecznej',
      'wynagrodzenie-za-sluzebnosc-drogi-koniecznej',
      'koszty-utrzymania-drogi-koniecznej',
    ],
    seeAlso: ['audyt-stanu-prawnego-nieruchomosci', 'pozwolenie-na-budowe'],
    cta: {
      heading: 'Działka bez dojazdu to nie ślepy zaułek — jest droga wyjścia.',
      lead: 'Opisz, którędy dziś dojeżdżasz albo którędy sąsiad chce poprowadzić drogę przez Twój grunt. Bezpłatną wstępną analizę, czyli informację, co trzeba zrobić z dojazdem, i ofertę z ceną i terminem dostaniesz w 24 h roboczych; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'odszkodowanie-wywlaszczenie': {
    h1: 'Odszkodowanie za wywłaszczenie i drogi (ZRID)',
    h1Full: 'Odszkodowanie za wywłaszczenie i drogi (ZRID): operat, odwołanie, zaliczka, dodatki',
    topic: 'Wywłaszczenie pod drogę',
    metaDesc: 'Za działkę pod drogę dostajesz co do zasady jej wartość rynkową, a za szybkie wydanie 5% więcej. Na odwołanie od decyzji o odszkodowaniu masz 14 dni.',
    subtitle: 'Twoja działka albo dom trafiły pod drogę, a kwota z urzędu wydaje się zaniżona? Co do zasady dostajesz wartość rynkową nieruchomości według stanu z dnia ZRID i wartości z dnia ustalania odszkodowania (art. 18 ust. 1 specustawy drogowej, art. 134 ust. 1 u.g.n.). Sprawdzam operat, piszę uwagi i odwołanie oraz liczę terminy na zaliczkę i dodatek 5%.',
    short: {
      q: 'Ile wynosi odszkodowanie za działkę zabraną pod drogę?',
      a: 'Co do zasady tyle, ile wynosi wartość rynkowa nieruchomości (art. 134 ust. 1 u.g.n.). Do tego 5% za wydanie w terminie i 10 000 zł, jeżeli mieszkasz w budynku objętym ZRID (art. 18 ust. 1e i 1f specustawy drogowej). Jeżeli przeznaczenie pod drogę podnosi wartość, wartość 1 m² gruntu powiększa się najwyżej o 50% (§ 49 ust. 3 rozporządzenia w sprawie wyceny nieruchomości).',
      facts: [
        [
          'Kto ustala kwotę',
          'organ, który wydał ZRID: przy drogach krajowych i wojewódzkich wojewoda, przy powiatowych i gminnych starosta (art. 11a ust. 1, art. 12 ust. 4a specustawy drogowej)',
        ],
        [
          'Podstawa wyceny',
          'wartość rynkowa według stanu nieruchomości z dnia wydania ZRID przez organ I instancji i wartości z dnia ustalenia odszkodowania (art. 18 ust. 1 specustawy drogowej, art. 134 ust. 1 u.g.n.)',
        ],
        [
          'Dodatki',
          '5% wartości, jeżeli wydasz nieruchomość w 30 dni od doręczenia zawiadomienia o ZRID z rygorem, od doręczenia postanowienia o rygorze albo od dnia, w którym ZRID stała się ostateczna (art. 18 ust. 1e); 10 000 zł, jeżeli mieszkasz w budynku mieszkalnym objętym ZRID (art. 18 ust. 1f specustawy drogowej)',
        ],
        [
          'Zaliczka',
          '70% kwoty z decyzji organu I instancji wydanej przy ZRID z rygorem natychmiastowej wykonalności (art. 12 ust. 4g); na wniosek, wypłata w 30 dni od wniosku (art. 12 ust. 5a specustawy drogowej)',
        ],
        [
          'Termin na odwołanie',
          '14 dni od doręczenia decyzji o odszkodowaniu (art. 129 § 2 k.p.a.)',
        ],
        [
          'Termin wypłaty',
          '14 dni od dnia, w którym decyzja o odszkodowaniu stała się ostateczna (art. 132 ust. 1a u.g.n.); kwota podlega waloryzacji na dzień wypłaty (art. 18 ust. 3 specustawy drogowej)',
        ],
      ],
    },
    introHeading: 'Jak działka przechodzi pod drogę i kto liczy pieniądze',
    intro: 'Decyzja o zezwoleniu na realizację inwestycji drogowej (potocznie ZRID) zatwierdza podział nieruchomości (art. 12 ust. 1 specustawy drogowej). Pas pod drogę staje się własnością Skarbu Państwa albo samorządu z mocy prawa w dniu, w którym ZRID stała się ostateczna (art. 12 ust. 4). Odszkodowanie dla właściciela, użytkownika wieczystego i osoby z ograniczonym prawem rzeczowym ustala osobna decyzja (art. 12 ust. 4a i 4f), na podstawie operatu szacunkowego, czyli pisemnej opinii rzeczoznawcy majątkowego o wartości (art. 130 ust. 2 i art. 156 ust. 1 u.g.n.). Przy wywłaszczeniu na podstawie ustawy o gospodarce nieruchomościami odszkodowanie ustala starosta w decyzji o wywłaszczeniu albo w odrębnej decyzji (art. 129 ust. 1 i 5 u.g.n.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Droga przez Twoją działkę: kiedy sprawdzić kwotę i terminy',
    when: [
      {
        b: 'Dostałeś decyzję wojewody albo starosty o odszkodowaniu i kwota wydaje Ci się za niska.',
        t: 'Zachowaj kopertę albo potwierdzenie odbioru. Termin 14 dni na odwołanie liczy się od dnia, w którym decyzję Ci doręczono (art. 129 § 2 k.p.a.).',
      },
      {
        b: 'Urząd zawiadomił Cię, że przed decyzją możesz zapoznać się z operatem.',
        t: 'To moment na pisemne uwagi do operatu, zanim kwota trafi do decyzji (art. 10 § 1 k.p.a.). Na Twój wniosek organ prześle operat w postaci elektronicznej na wskazany adres e-mail (art. 18b ust. 3 specustawy drogowej).',
      },
      {
        b: 'Masz wydać działkę albo wyprowadzić się z domu.',
        t: 'ZRID określa termin wydania, nie krótszy niż 120 dni od dnia, w którym stała się ostateczna (art. 16 ust. 2 specustawy drogowej). Do tego dnia możesz korzystać z nieruchomości nieodpłatnie, chyba że ZRID ma rygor natychmiastowej wykonalności: wtedy wydajesz ją niezwłocznie (art. 12 ust. 6, art. 17 ust. 3 pkt 2). Dodatek 5% wymaga wydania w 30 dni, a nie w 120 (art. 18 ust. 1e).',
      },
      {
        b: 'Rzeczoznawca wycenił działkę jak grunt rolny, choć plan miejscowy przeznaczał ją pod zabudowę.',
        t: 'Przeznaczenie wynika z planu miejscowego, a bez niego z decyzji o warunkach zabudowy, faktycznego użytkowania albo planu ogólnego; ustaleń ZRID się nie uwzględnia (art. 154 u.g.n., § 49 ust. 1 rozporządzenia w sprawie wyceny nieruchomości). Jeżeli w dniu wydania decyzji lokalizującej drogę działka była już przeznaczona pod drogę, przyjmuje się przeznaczenie przeważające wśród gruntów przyległych (§ 49 ust. 4 i 5). Wyjątek: wartość da się określić z cen transakcyjnych nieruchomości drogowych.',
      },
      {
        b: 'Po podziale została Ci wąska resztka, z której nie skorzystasz tak jak dotąd.',
        t: 'Możesz żądać, żeby zarządca drogi nabył tę pozostałą część (art. 13 ust. 3 specustawy drogowej). To osobna sprawa: wykup działki resztkowej.',
      },
    ],
    doForTitle: 'Co sprawdzam w operacie i jakie pisma składam do wojewody albo starosty',
    doFor: [
      'Sprawdzam w operacie datę sporządzenia (co do zasady 12 miesięcy ważności, art. 156 ust. 3 u.g.n.), stan działki z dnia ZRID, dobór nieruchomości podobnych i pominięte budynki albo nasadzenia.',
      'Sprawdzam, czy rzeczoznawca zastosował tak zwaną zasadę korzyści, czyli wycenę według przeznaczenia pod drogę, jeżeli podnosi ono wartość (art. 134 ust. 4 u.g.n., § 49 ust. 3 rozporządzenia).',
      'Przed decyzją piszę uwagi do operatu i wnioski dowodowe (art. 10 § 1 i art. 78 § 1 k.p.a.); gdy to wzmacnia sprawę, zlecam ocenę operatu organizacji zawodowej rzeczoznawców (art. 157 ust. 1 u.g.n.) albo wycenę innego rzeczoznawcy.',
      'Liczę 30 dni na wydanie nieruchomości, od których zależy dodatek 5%: od doręczenia zawiadomienia o ZRID z rygorem, postanowienia o rygorze albo od dnia, w którym ZRID stała się ostateczna (art. 18 ust. 1e specustawy drogowej).',
      'Piszę odwołanie od decyzji o odszkodowaniu, a od decyzji organu odwoławczego, np. ministra przy decyzji wojewody, skargę do wojewódzkiego sądu administracyjnego (art. 53 § 1 p.p.s.a.).',
    ],
    stepsHeading: 'Od ZRID do przelewu: kolejność czynności i terminy',
    steps: [
      'Przesyłasz ZRID, pisma z urzędu i operat, jeśli go masz. W 24 h roboczych odpisuję, co trzeba zrobić na tym etapie, np. policzyć termin wydania, napisać uwagi do operatu albo odwołanie, i wysyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Zaraz po akceptacji oferty ustalam z dat ZRID, kiedy mija 30 dni na wydanie nieruchomości z dodatkiem 5% (art. 18 ust. 1e specustawy drogowej). Wydanie działki albo domu jest nieodwracalne, więc dzień przekazania kluczy ustalamy przed upływem tych 30 dni.',
      'Pozyskuję operat i akta, a Ty zbierasz zdjęcia i dokumenty budynków oraz nasadzeń z dnia ZRID. Przed decyzją składam uwagi do operatu w terminie z zawiadomienia organu.',
      'Po decyzji I instancji wydanej przy ZRID z rygorem składam wniosek o zaliczkę 70%; wypłata następuje w 30 dni od wniosku.',
      'Jeżeli kwota jest za niska, składam odwołanie, zanim upłynie 14 dni od doręczenia decyzji, a po decyzji organu II instancji razem decydujemy o skardze.',
    ],
    faq: [
      {
        q: 'Dostałem decyzję wojewody o odszkodowaniu za drogę. Kto rozpatrzy odwołanie?',
        a: 'Właściwy minister, bo jest organem wyższego stopnia wobec wojewody (art. 17 pkt 2 k.p.a.). Odwołanie składasz za pośrednictwem wojewody w 14 dni od doręczenia decyzji (art. 129 § 1 i 2 k.p.a.). Jeżeli nikt go nie złoży, decyzja staje się ostateczna, a od tego dnia biegnie 14 dni na wypłatę (art. 16 § 1 k.p.a., art. 132 ust. 1a u.g.n.).',
      },
      {
        q: 'Czy mogę podważyć operat rzeczoznawcy przy wywłaszczeniu?',
        a: 'Tak. Operat jest dowodem, więc przed decyzją składasz do niego uwagi i żądasz innych dowodów na okoliczności istotne dla sprawy (art. 10 § 1 i art. 78 § 1 k.p.a.). Prawidłowość operatu ocenia na podstawie umowy organizacja zawodowa rzeczoznawców majątkowych, w terminie do 2 miesięcy (art. 157 ust. 1 u.g.n.). Sama wycena innego rzeczoznawcy nie może być podstawą tej oceny (art. 157 ust. 2).',
      },
      {
        q: 'Czy dostanę zaliczkę, zanim się wyprowadzę?',
        a: 'Tak, jeżeli ZRID ma rygor natychmiastowej wykonalności i złożysz wniosek. Przepis o zaliczce odsyła do decyzji o odszkodowaniu wydawanej przy rygorze: dostajesz 70% kwoty z decyzji organu I instancji, w 30 dni od wniosku (art. 12 ust. 4g i 5a specustawy drogowej). Rygor zobowiązuje do niezwłocznego wydania nieruchomości (art. 17 ust. 3 pkt 2), więc wyprowadzka może wypaść przed wypłatą. Jeżeli ZRID zostanie zmieniona, uchylona albo stwierdzono jej nieważność, zaliczkę zwracasz po waloryzacji (art. 12 ust. 5b).',
      },
      {
        q: 'Czy należy mi się dodatek za szybkie wydanie nieruchomości?',
        a: 'Tak, 5% wartości nieruchomości, jeżeli wydasz ją niezwłocznie, najpóźniej w 30 dni (art. 18 ust. 1e specustawy drogowej). Termin liczy się od doręczenia zawiadomienia o ZRID z rygorem, od doręczenia postanowienia o nadaniu rygoru albo od dnia, w którym ZRID stała się ostateczna. Jeżeli mieszkasz w budynku mieszkalnym objętym ZRID, odszkodowanie rośnie dodatkowo o 10 000 zł (art. 18 ust. 1f).',
      },
      {
        q: 'Czy wycena obejmie drzewa, ogrodzenie i budynki?',
        a: 'Co do zasady tak, jeżeli są częściami składowymi gruntu i istniały w dniu wydania ZRID. Częściami składowymi są budynki i inne urządzenia trwale z gruntem związane oraz drzewa i rośliny od chwili zasadzenia (art. 48 k.c.). Nakładów poniesionych po dniu decyzji rzeczoznawca nie uwzględnia (§ 49 ust. 1 rozporządzenia w sprawie wyceny nieruchomości).',
      },
      {
        q: 'Jak długo czeka się na pieniądze za działkę pod drogę?',
        a: 'Decyzja o odszkodowaniu zapada według ustawy w 30 dni od dnia, w którym ZRID stała się ostateczna, a wypłata następuje w 14 dni od dnia, w którym ta decyzja stała się ostateczna (art. 12 ust. 4b specustawy drogowej, art. 132 ust. 1a u.g.n.). Przy ZRID z rygorem organ ma 60 dni od nadania rygoru (art. 12 ust. 4g). Jeżeli organ nie dotrzymuje terminu, możesz wnieść ponaglenie (art. 37 § 1 pkt 1 k.p.a.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 11a, 12, 13 ust. 3, 16 ust. 2, 17, 18 i 18b specustawy drogowej',
          act: 'Ustawa o szczególnych zasadach przygotowania i realizacji inwestycji w zakresie dróg publicznych',
          tj: 'Dz.U. 2024 poz. 311',
          eli: 'DU/2003/721',
          note: 'Przejście gruntu, organ, zaliczka, wysokość odszkodowania i dodatki.',
        },
        {
          ref: 'art. 128–134, 154, 156 i 157 u.g.n.',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'Organ i termin wypłaty, wartość rynkowa, przeznaczenie do wyceny, operat i jego ocena.',
        },
        {
          ref: '§ 49 rozporządzenia w sprawie wyceny nieruchomości',
          act: 'Rozporządzenie Ministra Rozwoju i Technologii z 5.09.2023 r. w sprawie wyceny nieruchomości',
          tj: 'Dz.U. 2023 poz. 1832',
          eli: 'DU/2023/1832',
          note: 'Wycena gruntu przejętego pod drogę publiczną.',
        },
        {
          ref: 'art. 10, 16, 17, 37, 78 i 129 k.p.a.',
          act: 'Kodeks postępowania administracyjnego',
          tj: 'Dz.U. 2025 poz. 1691',
          eli: 'DU/1960/168',
          note: 'Uwagi do dowodów, decyzja ostateczna, organ odwoławczy, odwołanie, ponaglenie.',
        },
        { ref: 'art. 48 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Budynki i drzewa jako części składowe gruntu.' },
        { ref: 'art. 53 § 1 p.p.s.a.', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'Termin na skargę do wojewódzkiego sądu administracyjnego.' },
      ],
    },
    docs: [
      'Decyzja o zezwoleniu na realizację inwestycji drogowej (ZRID) z mapą podziału, jeśli masz.',
      'Decyzja o odszkodowaniu z datą jej doręczenia (koperta, potwierdzenie odbioru).',
      'Operat szacunkowy albo zawiadomienie urzędu o możliwości zapoznania się z aktami.',
      'Zdjęcia budynków, ogrodzenia, drzew i upraw w pasie drogi z dnia ZRID albo wcześniejsze.',
      'Pozwolenia na budowę, faktury lub umowy dotyczące budynków i nasadzeń, jeśli masz.',
      'Numer księgi wieczystej działki.',
    ],
    guides: ['operat-szacunkowy-jak-podwazyc'],
    seeAlso: ['oplaty-odszkodowania-planistyczne', 'skarga-na-plan-miejscowy'],
    cta: {
      heading: 'Wywłaszczenie musi być słusznie wynagrodzone. Dopilnuję, żeby tak było.',
      lead: 'Prześlij ZRID, decyzję o odszkodowaniu i operat, jeśli je masz. W 24 h roboczych odpiszę, co trzeba zrobić przed upływem terminów na wydanie nieruchomości i odwołanie, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'wykup-dzialki-resztkowej': {
    h1: 'Wykup działki resztkowej',
    h1Full: 'Wykup działki resztkowej: resztówka po budowie drogi lub wywłaszczeniu',
    topic: 'Działka resztkowa',
    metaDesc: 'Jeżeli resztówka po przejęciu pasa działki decyzją ZRID nie nadaje się do dotychczasowych celów, zarządca drogi musi ją wykupić na Twój wniosek.',
    subtitle: 'Droga zabrała pas Twojej działki, a została wąska, odcięta albo za mała resztówka. Jeżeli pas przejęła decyzja o zezwoleniu na realizację inwestycji drogowej (ZRID), a resztówka nie nadaje się do prawidłowego wykorzystania na dotychczasowe cele, zarządca drogi musi ją wykupić na Twój wniosek (art. 13 ust. 3 specustawy drogowej). Piszę wniosek, sprawdzam cenę, a przy odmowie prowadzę sprawę dalej.',
    short: {
      q: 'Została mi wąska resztka działki po budowie drogi. Czy mogą ją ode mnie wykupić?',
      a: 'Tak, na Twój wniosek, jeżeli reszta działki nie nadaje się do prawidłowego wykorzystania na dotychczasowe cele (art. 13 ust. 3 specustawy drogowej). Przy drodze z decyzji ZRID nabywa ją zarządca drogi w imieniu Skarbu Państwa albo samorządu. Przy wywłaszczeniu na inny cel publiczny resztę nabywa się w drodze umowy na rzecz Skarbu Państwa albo samorządu (art. 113 ust. 3 u.g.n.).',
      facts: [
        [
          'Kto może żądać',
          'Właściciel albo użytkownik wieczysty (art. 13 ust. 3 specustawy drogowej; art. 113 ust. 3 u.g.n.)',
        ],
        [
          'Kto wykupuje',
          'Przy ZRID zarządca drogi (art. 13 ust. 3 specustawy drogowej); przy wywłaszczeniu z u.g.n. Skarb Państwa albo samorząd, na którego rzecz je przeprowadzono (art. 113 ust. 3 u.g.n.)',
        ],
        [
          'Od kiedy (ZRID)',
          'Od dnia, w którym decyzja ZRID stała się ostateczna i pas przeszedł na Skarb Państwa albo samorząd z mocy prawa (art. 12 ust. 4 specustawy drogowej)',
        ],
        [
          'Co decyduje',
          'Czy reszta nadaje się do prawidłowego wykorzystania na dotychczasowe cele (art. 13 ust. 3 specustawy drogowej; art. 113 ust. 3 u.g.n.)',
        ],
        [
          'Gdy zarządca odmawia',
          'Obowiązek nabycia wynika z ustawy, a nie ze zgody zarządcy (art. 13 ust. 3 specustawy drogowej)',
        ],
        [
          'Podział na Twój wniosek',
          'Art. 98 ust. 3 u.g.n. daje odszkodowanie za działkę wydzieloną pod drogę; o nabyciu reszty ten przepis nie mówi',
        ],
      ],
    },
    introHeading: 'Kiedy reszta działki przestaje nadawać się do dotychczasowych celów',
    intro: 'Działka resztkowa, potocznie resztówka, to w przepisach „pozostała część” nieruchomości, której fragment przejęto pod drogę albo wywłaszczono na inny cel publiczny. Przy drodze budowanej na podstawie ZRID zajęty pas przechodzi na Skarb Państwa albo samorząd z mocy prawa (art. 12 ust. 4 specustawy drogowej), a reszta zostaje przy Tobie. O wykupie przesądza, czy reszta nadaje się do prawidłowego wykorzystania na dotychczasowe cele. Ustawa tych celów nie definiuje, dlatego wniosek opieram na dowodach, do czego działka służyła przed przejęciem.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Po budowie drogi została Ci resztka działki, z którą nie wiesz, co zrobić',
    when: [
      {
        b: 'Dostałeś decyzję o odszkodowaniu za pas zajęty pod drogę',
        t: 'wniosek o wykup reszty składasz osobno do zarządcy drogi (art. 13 ust. 3 specustawy drogowej); odwołanie od tej decyzji opisuję przy odszkodowaniu za wywłaszczenie.',
      },
      { b: 'Został Ci wąski pas pola, na który nie wjedziesz maszyną', t: 'jeżeli działka służyła uprawie, liczy się, czy reszta nadal się do niej nadaje (art. 13 ust. 3 specustawy drogowej).' },
      { b: 'Droga odcięła resztę działki od wjazdu albo od podwórza', t: 'o wykupie decyduje, czy reszta bez tego wjazdu nadaje się do prawidłowego wykorzystania na dotychczasowe cele (art. 13 ust. 3 specustawy drogowej).' },
      {
        b: 'Zarządca drogi odpisał, że resztówkę „da się wykorzystać”',
        t: 'przepis pyta o prawidłowe wykorzystanie na dotychczasowe cele, a nie o jakikolwiek użytek; obowiązek nabycia wynika z art. 13 ust. 3, a nie ze zgody zarządcy.',
      },
      { b: 'Starosta wywłaszczył część działki pod inny cel publiczny niż droga', t: 'wykup reszty w drodze umowy przewiduje art. 113 ust. 3 u.g.n.' },
    ],
    doForTitle: 'Co robię, żeby zarządca drogi albo samorząd nabył resztę Twojej działki',
    doFor: [
      'Ustalam z decyzji i księgi wieczystej tryb przejęcia: ZRID, wywłaszczenie z u.g.n. czy podział na Twój wniosek (art. 98 u.g.n.). Od tego zależy, który przepis stosuję.',
      'Zbieram dowody dawnego korzystania z działki: mapę sprzed podziału, zdjęcia, umowy dzierżawy, wnioski o dopłaty rolne.',
      'Piszę wniosek o nabycie resztówki: przy ZRID do zarządcy drogi, przy wywłaszczeniu z u.g.n. do starosty albo organu wykonawczego samorządu, na którego rzecz je przeprowadzono (art. 113 ust. 3 i art. 11 ust. 1 u.g.n.).',
      'Sprawdzam operat i proponowaną cenę, zanim podpiszesz akt notarialny (art. 158 k.c.).',
      'Gdy zarządca odmawia albo proponuje cenę niższą niż w operacie, odpowiadam pismem z dowodami i wskazuję, jak dalej dochodzić obowiązku nabycia.',
      'Gdy równolegle toczy się sprawa odszkodowania za zajęty pas, prowadzę obie na tych samych dowodach.',
    ],
    stepsHeading: 'Jak przebiega sprawa: od wniosku do zarządcy drogi po akt notarialny',
    steps: [
      'Opisujesz w formularzu, jaki pas przejęto, ile zostało i do czego działka służyła przed budową.',
      'Bezpłatnie, w 24 h roboczych, odpisuję, czego wymaga Twoja resztówka, np. sprawdzenia decyzji ZRID i księgi wieczystej, wniosku do zarządcy drogi albo pisma po odmowie. Razem z odpowiedzią wysyłam ofertę: cenę i termin tej pracy; płacisz dopiero po jej akceptacji.',
      'Po akceptacji oferty zbieram dowody i składam wniosek o nabycie resztówki (art. 13 ust. 3 specustawy drogowej albo art. 113 ust. 3 u.g.n.).',
      'Jeżeli zarządca się zgadza, negocjuję cenę i sprawdzam projekt aktu notarialnego (art. 158 k.c.). Podpis aktu przenosi własność (art. 155 § 1 k.c.), dlatego cenę porównuję z operatem przed podpisem.',
      'Jeżeli zarządca odmawia, pokazuję Ci, jakim trybem dalej dochodzić obowiązku z art. 13 ust. 3, i prowadzę ten etap, gdy go zlecisz.',
    ],
    faq: [
      {
        q: 'Kto ocenia, że resztówka nie nadaje się do użytku?',
        a: 'Zarządca drogi, do którego składasz wniosek (art. 13 ust. 3 specustawy drogowej). Ustawa nie definiuje ani „prawidłowego wykorzystania”, ani „dotychczasowych celów”. Dlatego we wniosku pokazuję, do czego działka służyła przed przejęciem i czego dziś nie da się na niej robić.',
      },
      {
        q: 'Co jeśli GDDKiA odmówi wykupu resztówki?',
        a: 'Odmowa nie znosi obowiązku: zarządca drogi jest obowiązany nabyć resztę, jeżeli nie nadaje się ona do prawidłowego wykorzystania na dotychczasowe cele (art. 13 ust. 3 specustawy drogowej). Przy drogach zarządzanych przez Generalnego Dyrektora Dróg Krajowych i Autostrad obowiązek ciąży na nim (art. 1 ust. 2). Przepis nie wskazuje trybu dochodzenia, dlatego dalszy krok dobieram po lekturze odmowy. Zachowaj ją i dowody, jak korzystałeś z działki przed budową.',
      },
      {
        q: 'Czy cena będzie taka jak za wywłaszczoną część?',
        a: 'Przepisy tego nie przesądzają, bo to dwa odrębne rozliczenia. Odszkodowanie za pas ustala w decyzji organ, który wydał decyzję ZRID (art. 12 ust. 4a specustawy drogowej). Art. 13 ust. 3 nie podaje wzoru ceny resztówki, a w sprawach nieuregulowanych w tym rozdziale stosuje się u.g.n. (art. 23).',
      },
      {
        q: 'Do kiedy trzeba złożyć wniosek o wykup?',
        a: 'Specustawa drogowa nie wyznacza osobnego terminu na ten wniosek (art. 13 ust. 3). Wniosek złożysz od dnia, w którym decyzja ZRID stała się ostateczna (art. 12 ust. 4). Nie odkładaj go: dowody dawnego korzystania z działki najłatwiej zebrać, zanim ruszy budowa.',
      },
      {
        q: 'Czy mogę żądać wykupu po podziale działki pod drogę gminną?',
        a: 'Tak, jeżeli podział zatwierdziła decyzja ZRID, którą dla dróg gminnych wydaje starosta (art. 11a ust. 1, art. 12 ust. 1 i art. 13 ust. 3 specustawy drogowej). Jeżeli to Ty wystąpiłeś o podział, stosuje się art. 98 u.g.n.: daje odszkodowanie za działkę pod drogą, a o wykupie reszty nie mówi. Kształt reszty sprawdź więc przed wnioskiem o podział.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1 ust. 2, art. 11a ust. 1, art. 12 ust. 1, 4 i 4a, art. 13 ust. 3 i art. 23',
          act: 'Ustawa o szczególnych zasadach przygotowania i realizacji inwestycji w zakresie dróg publicznych (specustawa drogowa)',
          tj: 'Dz.U. 2024 poz. 311',
          eli: 'DU/2003/721',
          note: 'przejęcie pasa decyzją ZRID, obowiązek zarządcy drogi nabycia reszty, odszkodowanie za pas',
        },
        {
          ref: 'art. 11 ust. 1, art. 98 ust. 1 i 3, art. 112 ust. 4 i art. 113 ust. 3 u.g.n.',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'nabycie reszty przy wywłaszczeniu; kto reprezentuje Skarb Państwa i samorząd; podział pod drogę na wniosek właściciela',
        },
        { ref: 'art. 155 § 1 i art. 158 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'forma aktu notarialnego i przejście własności przy nabyciu resztówki' },
      ],
    },
    docs: [
      'Decyzja ZRID albo decyzja o wywłaszczeniu, z mapą podziału (jeśli masz)',
      'Decyzja o odszkodowaniu za zajęty pas i operat szacunkowy, jeżeli już je dostałeś',
      'Numer księgi wieczystej działki sprzed podziału i działki, która została',
      'Zdjęcia, umowy dzierżawy albo wnioski o dopłaty sprzed budowy (jeśli masz)',
      'Pisma od zarządcy drogi, np. odmowa wykupu albo propozycja ceny (jeśli są)',
    ],
    guides: [],
    seeAlso: ['oplaty-odszkodowania-planistyczne', 'nieruchomosci-rolne'],
    cta: {
      heading: 'Nie musisz zostać z bezużytecznym kawałkiem ziemi.',
      lead: 'Napisz, jaki pas działki zajęto pod drogę i do czego służyła reszta. W 24 h roboczych dostaniesz bezpłatną wstępną analizę (co trzeba zrobić, np. wniosek do zarządcy drogi albo pismo po odmowie) i ofertę z ceną i terminem; do akceptacji oferty nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'ograniczenie-korzystania-nieruchomosci': {
    h1: 'Ograniczenie korzystania z nieruchomości (art. 124 UGN)',
    h1Full: 'Ograniczenie korzystania z nieruchomości (art. 124 UGN): decyzja starosty i odszkodowanie',
    topic: 'Ograniczenie korzystania z nieruchomości',
    metaDesc: 'Starosta może decyzją zezwolić na sieć przez Twoją działkę bez Twojej zgody (art. 124 u.g.n.). Odszkodowanie obejmuje szkody i ewentualny spadek wartości.',
    subtitle: 'Gazownia albo zakład energetyczny chce poprowadzić sieć przez Twoją działkę, a Ty się nie zgadzasz? Art. 124 u.g.n. pozwala staroście zezwolić decyzją na sieć przez Twoją działkę, jeżeli nie wyrażasz na to zgody. Piszę odwołanie do wojewody i prowadzę sprawę o odszkodowanie za szkody i ewentualny spadek wartości działki (art. 128 ust. 4 u.g.n.).',
    short: {
      q: 'Co oznacza art. 124 u.g.n. dla właściciela działki?',
      a: 'Starosta może decyzją zezwolić na założenie sieci na Twojej działce bez Twojej zgody (art. 124 ust. 1 u.g.n.). Decyzja musi być zgodna z planem miejscowym, a bez planu z decyzją o lokalizacji inwestycji celu publicznego. Wyjątek dotyczy urządzeń łączności publicznej (art. 124 ust. 1b u.g.n.). Za szkody należy Ci się odszkodowanie, powiększone o kwotę spadku wartości działki, jeśli wartość spadła (art. 128 ust. 4 u.g.n.).',
      facts: [
        ['Przed decyzją', 'Rokowania firmy z Tobą o zgodę na prace (art. 124 ust. 3 u.g.n.)'],
        [
          'Odwołanie',
          'Rozpatruje je wojewoda (art. 9a u.g.n.); masz 14 dni od doręczenia, a pismo składasz u starosty (art. 129 § 1–2 k.p.a.)',
        ],
        [
          'Odszkodowanie',
          'Za szkody i spadek wartości, jeśli wystąpi; odrębna decyzja starosty po opinii rzeczoznawcy majątkowego (art. 128 ust. 4, art. 129 ust. 5 pkt 1, art. 130 ust. 2 u.g.n.)',
        ],
        [
          'Termin zapłaty',
          'Jednorazowo, w 14 dni od dnia, w którym decyzja o odszkodowaniu stała się ostateczna (art. 132 ust. 1a u.g.n.)',
        ],
        [
          'Gdy nie możesz korzystać z działki jak dotąd',
          'Możesz żądać, by starosta albo wnioskodawca nabył ją umową na rzecz Skarbu Państwa (art. 124 ust. 5 u.g.n.)',
        ],
      ],
    },
    introHeading: 'Gazociąg albo linia przez działkę bez Twojej zgody: jak działa art. 124 u.g.n.',
    intro: 'Art. 124 u.g.n. dotyczy ograniczenia sposobu korzystania z nieruchomości (potocznie: „małe wywłaszczenie”). Decyzja starosty zezwala na zakładanie i przeprowadzenie na Twoim gruncie przewodów i urządzeń do przesyłania lub dystrybucji płynów, pary, gazów i energii elektrycznej, urządzeń łączności publicznej i sygnalizacji oraz ciągów drenażowych. Decyzja nie przenosi własności, tylko ogranicza sposób korzystania z działki (art. 124 ust. 1 u.g.n.). Nie obiecuję, że sieć ominie Twoją działkę; sprawdzam, czy decyzja i odszkodowanie są zgodne z ustawą.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Pismo od gazowni, decyzja albo koparka na działce: kiedy działać',
    when: [
      { b: 'Dostałeś decyzję starosty, że przez Twoją działkę pójdzie gazociąg, linia albo kabel.', t: 'Gdy stanie się ostateczna, będzie podstawą wpisu w księdze wieczystej Twojej działki (art. 124 ust. 7 u.g.n.).' },
      { b: 'Firma przysłała propozycję umowy albo zaprasza na rokowania.', t: 'To etap przed decyzją: starosta może ją wydać tylko wtedy, gdy nie wyrażasz zgody (art. 124 ust. 1 i 3 u.g.n.).' },
      {
        b: 'Ekipa weszła na działkę, choć decyzja nie jest jeszcze ostateczna.',
        t: 'Jest to możliwe, jeżeli starosta wydał decyzję o niezwłocznym zajęciu nieruchomości z rygorem natychmiastowej wykonalności (art. 124 ust. 1a u.g.n.). Bez rygoru decyzja nie podlega wykonaniu przed upływem terminu na odwołanie, a odwołanie wniesione w terminie wstrzymuje jej wykonanie (art. 130 § 1–2 k.p.a.).',
      },
      { b: 'Po budowie zostały koleiny, wykopy albo zniszczone uprawy.', t: 'Ten, kto wystąpił o zezwolenie, ma przywrócić grunt do stanu poprzedniego niezwłocznie po założeniu sieci (art. 124 ust. 4 u.g.n.).' },
      {
        b: 'Gazownia chce wejść na działkę, żeby wyremontować istniejącą rurę lub linię albo usunąć jej awarię.',
        t: 'Jeżeli się nie zgadzasz, starosta zobowiązuje Cię decyzją do udostępnienia gruntu na najwyżej 6 miesięcy, za odszkodowaniem (art. 124b ust. 1, 3 i 4 u.g.n.). Przy sieci założonej na podstawie decyzji z art. 124 obowiązek udostępnienia wynika wprost z ustawy (art. 124 ust. 6 u.g.n.).',
      },
    ],
    doForTitle: 'Co robię po stronie właściciela działki',
    doFor: [
      'Przeglądam akta u starosty, w tym dokumenty z rokowań, i przed decyzją składam Twoje stanowisko co do dowodów (art. 73 § 1, art. 10 § 1 k.p.a.).',
      'Porównuję przebieg sieci w decyzji z planem miejscowym albo z decyzją o lokalizacji inwestycji celu publicznego (art. 124 ust. 1 u.g.n.).',
      'Piszę odwołanie do wojewody w 14 dni od doręczenia, a od jego decyzji skargę do WSA w 30 dni (art. 129 § 2 k.p.a., art. 53 § 1 p.p.s.a.).',
      'Sprawdzam, czy opinia rzeczoznawcy majątkowego obejmuje wszystkie szkody i spadek wartości nieruchomości (art. 128 ust. 4, art. 130 ust. 2 u.g.n.).',
      'Przygotowuję żądanie nabycia działki na rzecz Skarbu Państwa, gdy sieć uniemożliwia dotychczasowe korzystanie z niej (art. 124 ust. 5 u.g.n.).',
    ],
    stepsHeading: 'Od rokowań do zapłaty odszkodowania: jak przebiega sprawa',
    steps: [
      'Opisujesz w formularzu etap sprawy i datę doręczenia decyzji. W 24 h roboczych wskazuję, czego sprawa wymaga, np. odwołania, i dołączam ofertę z ceną i terminem. Płacisz dopiero po jej przyjęciu.',
      'Rokowania: firma proponuje umowę o zgodę na prace. Przed podpisem sprawdzam zakres prac i warunki umowy.',
      'Postępowanie przed starostą: zgłaszam zarzuty i wnioski dowodowe (art. 78 § 1 k.p.a.).',
      'Wojewoda rozpatruje odwołanie. Jeżeli utrzyma zezwolenie w mocy, kolejnym krokiem jest skarga do WSA (art. 138 § 1 pkt 1 k.p.a., art. 52 § 1 p.p.s.a.).',
      'Po budowie wzywam firmę do przywrócenia gruntu i składam uwagi do opinii rzeczoznawcy przed decyzją o odszkodowaniu (art. 124 ust. 4 u.g.n., art. 10 § 1 k.p.a.).',
    ],
    faq: [
      {
        q: 'Starosta wydał decyzję, że przez moją działkę pójdzie gazociąg. Czy mogę się nie zgodzić?',
        a: 'Możesz odmówić zgody, ale to właśnie brak zgody pozwala staroście wydać decyzję (art. 124 ust. 1 u.g.n.). W odwołaniu możesz zarzucić np. niezgodność przebiegu sieci z planem miejscowym albo brak rokowań.',
      },
      {
        q: 'Jakie odszkodowanie dostanę za gazociąg albo linię na działce i kto je ustala?',
        a: 'Odszkodowanie odpowiada wartości szkód, a jeśli wartość działki spadła, powiększa się o kwotę tego spadku (art. 128 ust. 4 u.g.n.). Ustala je starosta odrębną decyzją po opinii rzeczoznawcy majątkowego (art. 129 ust. 5 pkt 1, art. 130 ust. 2 u.g.n.). Od tej decyzji też przysługuje odwołanie (art. 127 § 1 k.p.a.).',
      },
      {
        q: 'Decyzja o gazociągu czekała na poczcie po awizo. Od kiedy liczę 14 dni na odwołanie?',
        a: 'Od dnia odbioru listu, przy czym samego dnia odbioru nie wliczasz (art. 129 § 2, art. 57 § 1 k.p.a.). Jeżeli listu nie odbierzesz, doręczenie następuje z upływem 14 dni jego przechowywania na poczcie (art. 44 § 1 pkt 1 i § 4 k.p.a.). Wystarczy nadać odwołanie w placówce operatora wyznaczonego przed upływem terminu (art. 57 § 5 pkt 2 k.p.a.).',
      },
      {
        q: 'Kto przywróci działkę do stanu poprzedniego po budowie?',
        a: 'Podmiot, który wystąpił o zezwolenie, np. gazownia, i to niezwłocznie po założeniu sieci (art. 124 ust. 4 u.g.n.). Jeżeli przywrócenie jest niemożliwe albo powoduje nadmierne trudności lub koszty, należy Ci się w zamian odszkodowanie (art. 124 ust. 4 zd. 2 w zw. z art. 128 ust. 4 u.g.n.).',
      },
      {
        q: 'Czym decyzja z art. 124 różni się od służebności przesyłu i bezumownego korzystania?',
        a: 'Służebność przesyłu ustanawia umowa z firmą, a gdy jedna ze stron odmawia jej zawarcia, sąd za odpowiednim wynagrodzeniem (art. 305² k.c.). Decyzję z art. 124 u.g.n. wydaje starosta, gdy nie wyrażasz zgody, a odszkodowanie ustala odrębną decyzją (art. 128 ust. 4, art. 129 ust. 5 pkt 1 u.g.n.). Gdy sieć stoi bez umowy i bez decyzji, możesz żądać od firmy w złej wierze wynagrodzenia za bezumowne korzystanie (art. 225 w zw. z art. 352 § 2 k.c.).',
      },
      {
        q: 'Czy gazownia albo zakład energetyczny musieli najpierw próbować się ze mną dogadać?',
        a: 'Tak, zezwolenie starosty powinno być poprzedzone rokowaniami z Tobą o zgodę na prace (art. 124 ust. 3 u.g.n.). Firma dołącza do wniosku dokumenty z rokowań. Jeżeli w aktach ich brakuje, możesz to podnieść przed starostą i w odwołaniu.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 124 i 124b u.g.n.',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'Decyzja starosty o sieci, wyjątek dla łączności publicznej, rokowania, przywrócenie gruntu, nabycie działki, udostępnienie do napraw, wpis w księdze wieczystej.',
        },
        {
          ref: 'art. 9a, 128 ust. 4, 129 ust. 5, 130 ust. 2 i 132 ust. 1a u.g.n.',
          act: 'Ustawa o gospodarce nieruchomościami',
          tj: 'Dz.U. 2026 poz. 399',
          eli: 'DU/1997/741',
          note: 'Organ odwoławczy i odszkodowanie: zakres, decyzja, opinia rzeczoznawcy, zapłata.',
        },
        {
          ref: 'art. 10 § 1, 44, 57, 73 § 1, 78 § 1 i 127–130, 138 § 1 k.p.a.',
          act: 'Kodeks postępowania administracyjnego',
          tj: 'Dz.U. 2025 poz. 1691',
          eli: 'DU/1960/168',
          note: 'Udział w postępowaniu, doręczenie po awizo, liczenie terminu, odwołanie w 14 dni i jego skutki.',
        },
        { ref: 'art. 52 § 1 i 53 § 1 p.p.s.a.', act: 'Prawo o postępowaniu przed sądami administracyjnymi', tj: 'Dz.U. 2026 poz. 143', eli: 'DU/2002/1270', note: 'Skarga do WSA w 30 dni po wyczerpaniu odwołania.' },
        { ref: 'art. 225, 305¹–305² i 352 k.c.', act: 'Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Służebność przesyłu i wynagrodzenie za bezumowne korzystanie.' },
      ],
    },
    docs: [
      'Decyzja starosty o zezwoleniu (art. 124) z kopertą albo potwierdzeniem odbioru.',
      'Pisma od firmy z rokowań: zaproszenie, propozycja umowy, notatki z rozmów.',
      'Mapa z przebiegiem sieci, jeśli ją dostałeś.',
      'Zdjęcia gruntu przed robotami i po nich, np. wykopów i zniszczonych upraw.',
      'Decyzja o odszkodowaniu i opinia rzeczoznawcy majątkowego, jeśli to postępowanie już trwa.',
    ],
    guides: [],
    seeAlso: ['skarga-na-plan-miejscowy', 'obsluga-prawna-przedsiebiorstw-rolnych'],
    cta: {
      heading: '„Małe wywłaszczenie” to wciąż wywłaszczenie — i wciąż masz prawa.',
      lead: 'Napisz, czy gazownia dopiero proponuje umowę, czy masz już decyzję starosty. W 24 h roboczych wskażę, czy potrzebne jest odwołanie, pismo do starosty albo wniosek o odszkodowanie, i przyślę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'zgoda-kowr': {
    metaDesc: 'Nierolnik kupujący ziemię rolną od 1 ha co do zasady potrzebuje zgody KOWR. Bez niej umowa jest nieważna. Przygotowuję ogłoszenie, wniosek i projekt umowy.',
    h1: 'Zgoda KOWR na nabycie ziemi rolnej',
    h1Full: 'Zgoda KOWR na nabycie ziemi rolnej: ogłoszenie, wniosek, decyzja',
    topic: 'Zgoda KOWR',
    subtitle: 'Nie jesteś rolnikiem, a chcesz kupić ziemię rolną o powierzchni 1 ha lub większej? Co do zasady musisz mieć zgodę Dyrektora Generalnego KOWR, a umowa bez niej jest nieważna (art. 2a ust. 4 i art. 9 ust. 1 u.k.u.r.). Przygotowuję ogłoszenie, wniosek i projekt umowy dla notariusza tak, żeby zmieścić się w roku ważności zgody.',
    short: {
      q: 'Jak dostać zgodę KOWR na zakup ziemi?',
      a: 'Wniosek o zgodę składa co do zasady sprzedający, po ogłoszeniu w systemie teleinformatycznym KOWR, a decyzję wydaje Dyrektor Generalny KOWR (art. 2a ust. 4 pkt 1 u.k.u.r.). Jeżeli w terminie z ogłoszenia nie odpowie żaden rolnik indywidualny, uważa się, że nie było możliwości sprzedaży rolnikowi (art. 2a ust. 4b pkt 1). Zgoda jest ważna rok od dnia, w którym decyzja stała się ostateczna (art. 2ba).',
      facts: [
        [
          'Kto składa wniosek',
          'Sprzedający, a w przypadkach z art. 2a ust. 4 pkt 2–5 u.k.u.r. kupujący; stronami postępowania są obaj (ust. 5a)',
        ],
        [
          'Ogłoszenie (przy wniosku sprzedającego)',
          'W systemie teleinformatycznym KOWR, nieodpłatnie; co najmniej 30 dni na odpowiedzi rolników (art. 2a ust. 4a i ust. 4d pkt 5 u.k.u.r.)',
        ],
        [
          'Termin na wniosek',
          '6 miesięcy od upływu terminu z ogłoszenia; po nim Dyrektor Generalny KOWR odmawia (art. 2a ust. 4h u.k.u.r.)',
        ],
        [
          'Termin ustawowy na decyzję',
          '1 miesiąc, w sprawie szczególnie skomplikowanej 2 miesiące od wszczęcia (art. 35 § 3 k.p.a.)',
        ],
        ['Ważność zgody', 'Rok od dnia, w którym decyzja stała się ostateczna (art. 2ba u.k.u.r.)'],
        [
          'Po zakupie',
          'Co najmniej 5 lat prowadzenia gospodarstwa, bez zbycia i oddania ziemi w posiadanie innym podmiotom (art. 2b ust. 1–2 u.k.u.r.)',
        ],
      ],
    },
    introHeading: 'Kto może kupić ziemię rolną, a kto potrzebuje zgody',
    intro: 'Nabywcą nieruchomości rolnej może być wyłącznie rolnik indywidualny, chyba że ustawa stanowi inaczej (art. 2a ust. 1 u.k.u.r.; definicja rolnika w art. 6). To ograniczenie nie obejmuje m.in. zakupu nieruchomości mniejszej niż 1 ha, zakupu od osoby bliskiej ani dziedziczenia (art. 2a ust. 3). Próg 5 ha, który wszedł w życie 30.04.2026, dotyczy tylko sprzedaży ziemi państwowej z Zasobu Własności Rolnej Skarbu Państwa (Dz.U. 2026 poz. 317). Pozostałe progi i zwolnienia opisuję na stronie „Nieruchomości rolne (UKUR, KOWR)”. Jeżeli żadne zwolnienie nie pasuje, zostaje zgoda Dyrektora Generalnego KOWR. Przy zakupie za taką zgodą nie działa ustawowe prawo pierwokupu dzierżawcy i KOWR (art. 3 ust. 5 pkt 2).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Sprzedajesz albo kupujesz ziemię, a kupujący nie jest rolnikiem',
    when: [
      { b: 'Dostałeś z KOWR decyzję odmowną.', t: 'Odwołanie do ministra właściwego do spraw rozwoju wsi składasz w 14 dni od doręczenia decyzji (art. 2a ust. 5 u.k.u.r., art. 129 § 2 k.p.a.).' },
      {
        b: 'Notariusz nie chce spisać umowy bez zgody KOWR.',
        t: 'Kupujący, który nie jest rolnikiem indywidualnym, oświadcza to w umowie (art. 7 ust. 6 u.k.u.r.), a bez zgody albo zwolnienia nabycie jest nieważne (art. 9 ust. 1).',
      },
      { b: 'Sprzedajesz ziemię komuś, kto nie jest rolnikiem.', t: 'Wniosek składasz Ty, a cena w umowie nie może być niższa niż 95% ceny z ogłoszenia (art. 2a ust. 4 pkt 1 lit. d u.k.u.r.).' },
      {
        b: 'Chcesz zacząć gospodarować, ale nie masz jeszcze 5 lat zamieszkania w gminie.',
        t: 'Z kwalifikacjami rolniczymi o zgodę występujesz sam, jeżeli tworzysz gospodarstwo rodzinne, zobowiążesz się prowadzić działalność rolniczą i przez 5 lat mieszkać w gminie, w której leży jedna z jego nieruchomości (art. 2a ust. 4 pkt 2 u.k.u.r.).',
      },
      { b: 'Twój mąż albo żona jest rolnikiem, a Ty nie.', t: 'Przy zakupie do wspólności majątkowej małżeńskiej wystarczy, że wymogi dotyczące nabywcy spełnia jeden z małżonków (art. 2a ust. 3a u.k.u.r.).' },
    ],
    doForTitle: 'Ogłoszenie, wniosek, odwołanie i projekt umowy: co przygotowuję',
    doFor: [
      'Sprawdzam, czy zgoda jest w ogóle potrzebna: status nieruchomości rolnej (art. 1a i art. 2 pkt 1 u.k.u.r.), powierzchnię, zwolnienia z art. 2a ust. 3 i regułę dla małżonków z ust. 3a.',
      'Dobieram podstawę wniosku: sprzedający (art. 2a ust. 4 pkt 1) albo kupujący, który tworzy lub powiększa gospodarstwo (pkt 2 i 3).',
      'Przygotowuję ogłoszenie z elementami z art. 2a ust. 4d: danymi z ewidencji gruntów, numerem księgi wieczystej, informacją planistyczną i ceną. Na prośbę sprzedającego składam wniosek o jego zamieszczenie do oddziału terenowego KOWR właściwego dla położenia działki (ust. 4b pkt 1).',
      'Piszę wniosek do Dyrektora Generalnego KOWR z celem nabycia i sposobem wykorzystania ziemi oraz z załącznikami z art. 2a ust. 5b–5c. Dołączam zobowiązanie kupującego do prowadzenia działalności rolniczej i wykazuję, że zakup nie spowoduje nadmiernej koncentracji gruntów rolnych (ust. 4 pkt 1 lit. b i c).',
      'Pilnuję terminów, a przy zwłoce KOWR składam ponaglenie (art. 37 § 1 k.p.a.). Po odmowie piszę odwołanie, a gdy odmowa stanie się ostateczna, żądanie wykupu ziemi przez KOWR, jeżeli ustawa na to pozwala (art. 2a ust. 6 i 6a u.k.u.r.).',
      'Przygotowuję dla notariusza projekt umowy sprzedaży z oświadczeniami kupującego, które ustawa każe złożyć w samej umowie (art. 7 ust. 6 i 7 u.k.u.r.).',
    ],
    stepsHeading: 'Od ogłoszenia do aktu notarialnego: kolejne kroki i terminy',
    steps: [
      'Opisujesz działkę i strony transakcji. W 24 h roboczych odpisuję, czego wymaga Twoja transakcja, np. sprawdzenia zwolnienia albo ogłoszenia i wniosku, i przesyłam ofertę z ceną i terminem wykonania; płacisz dopiero po jej akceptacji.',
      'Ogłoszenie w systemie KOWR na co najmniej 30 dni (art. 2a ust. 4d pkt 5 u.k.u.r.). Nie wystawia się go na próbę: sprzedający, który daje je bez zamiaru sprzedaży, naprawia szkodę rolnika, który odpowiedział (ust. 4f).',
      'Wniosek do Dyrektora Generalnego KOWR, jeżeli żaden rolnik nie odpowiedział. Termin: 6 miesięcy od końca terminu z ogłoszenia (art. 2a ust. 4h).',
      'Decyzja Dyrektora Generalnego KOWR w terminie ustawowym (art. 35 § 3 k.p.a.). Jeżeli sprzedający i kupujący zrzekną się odwołania, decyzja staje się ostateczna z dniem doręczenia Dyrektorowi Generalnemu KOWR oświadczenia ostatniej ze stron (art. 127a k.p.a.); odwołania już wtedy nie złożysz.',
      'Akt notarialny w roku od dnia, w którym decyzja stała się ostateczna (art. 2ba u.k.u.r.). To krok nieodwracalny: od nabycia biegnie 5 lat obowiązków kupującego (art. 2b ust. 1).',
    ],
    faq: [
      {
        q: 'Kto składa wniosek o zgodę KOWR – sprzedający czy kupujący?',
        a: 'Przy sprzedaży nierolnikowi wniosek składa co do zasady sprzedający (art. 2a ust. 4 pkt 1 u.k.u.r.). Kupujący z kwalifikacjami rolniczymi składa go sam, gdy tworzy gospodarstwo rodzinne (pkt 2). Sam składa go też ten, kto powiększa gospodarstwo z pomocą dla młodych rolników (pkt 3). Stronami postępowania są zawsze obaj (ust. 5a).',
      },
      {
        q: 'Ile się czeka na zgodę KOWR?',
        a: 'Termin ustawowy to 1 miesiąc, a w sprawie szczególnie skomplikowanej 2 miesiące od wszczęcia (art. 35 § 3 k.p.a.). Przy wniosku sprzedającego trzeba wcześniej doliczyć co najmniej 30 dni ogłoszenia (art. 2a ust. 4d pkt 5 u.k.u.r.), a po decyzji 14 dni na odwołanie. Opóźnień z winy strony nie wlicza się do terminu urzędu (art. 35 § 5 k.p.a.).',
      },
      {
        q: 'Co, jeśli na ogłoszenie odpowie rolnik?',
        a: 'Wtedy co do zasady nie wykażesz, że nie było możliwości sprzedaży rolnikowi, a to warunek zgody na wniosek sprzedającego (art. 2a ust. 4 pkt 1 lit. a u.k.u.r.). Odpowiedź rolnika jest oświadczeniem woli o zamiarze zawarcia umowy (ust. 4e pkt 3). Odpowiedź spóźnioną albo z ceną niższą o ponad 5% uważa się za niezłożoną (ust. 4c).',
      },
      {
        q: 'Czy będę musiał prowadzić gospodarstwo przez 5 lat i mieszkać w gminie?',
        a: 'Gospodarstwo tak, co najmniej 5 lat od nabycia, a osoba fizyczna osobiście (art. 2b ust. 1 u.k.u.r.). Zamieszkanie w gminie przez 5 lat obowiązuje, gdy o zgodę wystąpiłeś sam jako osoba tworząca albo powiększająca gospodarstwo (art. 2a ust. 4 pkt 2 i 3). Jeżeli tych obowiązków nie wykonasz, KOWR może wystąpić do sądu o nabycie Twojej ziemi za cenę odpowiadającą wartości rynkowej według stanu z chwili Twojego zakupu (art. 9 ust. 3 pkt 1–2).',
      },
      {
        q: 'Ile kosztuje uzyskanie zgody KOWR?',
        a: 'Ogłoszenie i odpowiedzi w systemie KOWR są nieodpłatne (art. 2a ust. 4a u.k.u.r.). Opłatę skarbową od decyzji, jeżeli ma zastosowanie, oraz cenę przygotowania ogłoszenia, wniosku i ewentualnego odwołania podaję w ofercie z terminem. Do akceptacji oferty nic nie płacisz.',
      },
      {
        q: 'Co zrobić, gdy KOWR odmówi zgody?',
        a: 'Złożyć odwołanie do ministra właściwego do spraw rozwoju wsi w 14 dni od doręczenia decyzji, za pośrednictwem Dyrektora Generalnego KOWR (art. 2a ust. 5 u.k.u.r., art. 129 k.p.a.). Jeżeli o zgodę wnioskował sprzedający, może w miesiąc od ostateczności odmowy żądać, żeby KOWR kupił ziemię po cenie odpowiadającej wartości rynkowej, ustalonej przez KOWR (art. 2a ust. 6). Nie dotyczy to odmowy z powodu niewykazania braku możliwości sprzedaży rolnikowi albo nadmiernej koncentracji gruntów (ust. 6a).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 1a, art. 2 pkt 1, art. 2a',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Kto kupuje ziemię rolną, zwolnienia, ogłoszenie, wniosek i zgoda KOWR.',
        },
        {
          ref: 'art. 2b, art. 2ba, art. 3 ust. 5',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Obowiązki kupującego przez 5 lat, rok ważności zgody, brak pierwokupu.',
        },
        {
          ref: 'art. 6, art. 7, art. 9',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Rolnik indywidualny, oświadczenia w umowie, nieważność nabycia.',
        },
        {
          ref: 'art. 35, art. 37, art. 127a, art. 129',
          act: 'Ustawa z dnia 14 czerwca 1960 r. Kodeks postępowania administracyjnego',
          tj: 'Dz.U. 2025 poz. 1691',
          eli: 'DU/1960/168',
          note: 'Terminy decyzji, ponaglenie, odwołanie i zrzeczenie się go.',
        },
        {
          ref: 'art. 2 pkt 2 lit. a, art. 3',
          act: 'Ustawa z dnia 23 stycznia 2026 r. o zmianie niektórych ustaw w celu ochrony polskiego rolnictwa',
          tj: 'Dz.U. 2026 poz. 317',
          eli: 'DU/2026/317',
          note: 'Próg 5 ha przy sprzedaży ziemi z Zasobu Własności Rolnej Skarbu Państwa, od 30.04.2026.',
        },
      ],
    },
    docs: [
      'Numer księgi wieczystej i numery działek albo wypis z ewidencji gruntów i budynków, jeśli masz',
      'Zaświadczenie o przeznaczeniu działki w planie miejscowym, jeśli masz',
      'Ustalenia stron: kto sprzedaje, kto kupuje, cena; projekt umowy, jeśli jest',
      'Treść ogłoszenia z systemu KOWR i odpowiedzi rolników, jeśli ogłoszenie już było',
      'Dyplom, świadectwo albo dokument o stażu pracy w rolnictwie, jeśli wniosek ma złożyć kupujący',
      'Decyzja KOWR z datą doręczenia, jeśli już ją dostałeś',
    ],
    guides: ['zgoda-kowr-nabycie-ziemi-rolnej', 'status-rolnika-indywidualnego'],
    seeAlso: ['obsluga-zakupu', 'obsluga-prawna-przedsiebiorstw-rolnych'],
    cta: {
      heading: 'Nie jesteś rolnikiem, a chcesz kupić ziemię? Przeprowadzę Cię przez zgodę KOWR.',
      lead: 'Opisz działkę i napisz, kto sprzedaje, a kto kupuje. W 24 h roboczych odpiszę, co trzeba zrobić przed aktem notarialnym, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
    faqHeading: 'Pytania sprzedających i kupujących ziemię rolną',
  },

  'status-rolnika': {
    h1: 'Status rolnika indywidualnego',
    h1Full: 'Status rolnika indywidualnego: kwalifikacje, zamieszkanie i dokumenty',
    topic: 'Rolnik indywidualny',
    metaDesc: 'Rolnik indywidualny ma kwalifikacje rolnicze, do 300 ha użytków rolnych i od co najmniej 5 lat mieszka w gminie gospodarstwa, które osobiście prowadzi.',
    subtitle: 'Chcesz kupić ziemię rolną, a notariusz pyta, czy jesteś rolnikiem indywidualnym? Status ma osoba z kwalifikacjami rolniczymi, która od 5 lat mieszka w gminie gospodarstwa i osobiście je prowadzi (art. 6 ust. 1 u.k.u.r.). Sprawdzam, którymi dokumentami wykażesz każdy warunek, i przygotowuję oświadczenia do aktu notarialnego.',
    short: {
      q: 'Jak sprawdzić, czy masz status rolnika indywidualnego?',
      a: 'Sprawdzasz po kolei 4 warunki z art. 6 ust. 1 u.k.u.r. i do każdego zbierasz osobny dowód, który przedkładasz przy umowie kupna ziemi (art. 7 ust. 6). Kwalifikacje potwierdza dyplom, świadectwo albo dokument stażu (§ 6–7 rozporządzenia MRiRW z 17.01.2012). Zamieszkanie potwierdza zaświadczenie o zameldowaniu na pobyt stały (art. 7 ust. 4 u.k.u.r.). Osobiste prowadzenie gospodarstwa potwierdza Twoje pisemne oświadczenie (art. 7 ust. 1).',
      facts: [
        [
          'Kto może mieć status',
          'Właściciel, użytkownik wieczysty, samoistny posiadacz albo dzierżawca łącznie do 300 ha użytków rolnych (art. 6 ust. 1 u.k.u.r.)',
        ],
        [
          'Kwalifikacje rolnicze',
          'Wykształcenie rolnicze, tytuł zawodowy rolniczy, wyższe nierolnicze z rolniczymi studiami podyplomowymi, wyższe albo średnie nierolnicze z co najmniej 3 latami stażu albo co najmniej 5 lat stażu (art. 6 ust. 2 pkt 2 u.k.u.r.)',
        ],
        [
          'Osobiste prowadzenie',
          'Pracujesz w gospodarstwie i podejmujesz wszelkie decyzje o działalności rolniczej (art. 6 ust. 2 pkt 1 u.k.u.r.)',
        ],
        [
          'Kiedy status jest potrzebny',
          'Co do zasady przy zakupie nieruchomości rolnej od 1 ha; nie przy zakupie od osoby bliskiej ani przy dziedziczeniu (art. 2a ust. 1 i 3 u.k.u.r.)',
        ],
      ],
    },
    introHeading: 'Co zmienia się przy zakupie ziemi i jakie obowiązki masz przez 5 lat po akcie',
    intro: 'Rolnik indywidualny to pojęcie z ustawy o kształtowaniu ustroju rolnego (u.k.u.r.): co do zasady tylko on może kupić nieruchomość rolną (art. 2a ust. 1). Po zakupie co do zasady przez co najmniej 5 lat osobiście prowadzisz gospodarstwo z tą ziemią (art. 2b ust. 1). W tym czasie nie możesz jej zbyć ani oddać w posiadanie innym podmiotom (art. 2b ust. 2). Nabycie oparte na nieprawdziwym oświadczeniu jest nieważne, a o stwierdzenie nieważności może pozwać także KOWR (art. 9 ust. 1 pkt 3 i ust. 2).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Kupujesz ziemię, a notariusz pyta o wykształcenie, staż i zameldowanie',
    when: [
      { b: 'Masz termin aktu notarialnego, a notariusz prosi o dokumenty rolnika.', t: 'Kupujący przedkłada dowody statusu albo oświadcza, że warunków nie spełnia (art. 7 ust. 6 u.k.u.r.).' },
      { b: 'Chcesz odpowiedzieć na ogłoszenie o sprzedaży ziemi w systemie KOWR.', t: 'W odpowiedzi oświadczasz, że jesteś rolnikiem indywidualnym, z klauzulą o odpowiedzialności karnej (art. 2a ust. 4e i 4ea u.k.u.r.).' },
      {
        b: 'Masz kwalifikacje, ale w gminie mieszkasz krócej niż 5 lat.',
        t: 'Warunek spełnisz, gdy minie 5 lat zamieszkania i osobistego prowadzenia gospodarstwa (art. 6 ust. 1 u.k.u.r.). Wcześniej nieruchomość rolną kupisz w wyjątkach z art. 2a ust. 3 albo za zgodą Dyrektora Generalnego KOWR (art. 2a ust. 4).',
      },
      {
        b: 'Dzierżawisz ziemię, a właściciel chce ją sprzedać komuś innemu.',
        t: 'Bez statusu pierwokupu nie masz. Ziemia musi wchodzić w skład Twojego gospodarstwa rodzinnego, czyli gospodarstwa rolnika indywidualnego do 300 ha użytków rolnych (art. 3 ust. 1 pkt 2, art. 5 ust. 1 u.k.u.r.). Umowa dzierżawy musi też być pisemna i mieć datę pewną, a od tej daty musisz ją wykonywać co najmniej 3 lata (art. 3 ust. 1 pkt 1).',
      },
    ],
    doForTitle: 'Jak przygotowuję dokumenty i oświadczenia do aktu notarialnego',
    doFor: [
      'Sprawdzam osobno każdy warunek z art. 6 ust. 1 u.k.u.r., także powierzchnię gruntów we współwłasności i dzierżawie (art. 5 ust. 2 i 3).',
      'Porównuję Twoje wykształcenie z wykazami kierunków i zawodów, a staż z listą dowodów w rozporządzeniu MRiRW z 17.01.2012. Przy nierolniczym kierunku studiów szukam w programie co najmniej 120 godzin zajęć z produkcji roślinnej i zwierzęcej (§ 2 ust. 2).',
      'Piszę oświadczenia o osobistym prowadzeniu gospodarstwa i o powierzchni gruntów, z klauzulą karną (art. 7 ust. 1, 5 i 5a).',
      'Prowadzę sprawę, gdy ktoś żąda stwierdzenia nieważności Twojego zakupu (art. 9 ust. 2 u.k.u.r.).',
    ],
    stepsHeading: 'Co robisz Ty, co ja i co notariusz przed podpisem aktu',
    steps: [
      'Piszesz, jaką ziemię chcesz kupić, jakie masz wykształcenie i od kiedy mieszkasz w gminie. W 24 h roboczych odpisuję, czego trzeba do aktu, np. uzupełnić dokumenty stażu albo przygotować oświadczenia, i wysyłam ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.',
      'Zbierasz dokumenty z mojej listy: dyplom albo świadectwo, dowody stażu (§ 6 i 7 rozporządzenia MRiRW) i zaświadczenie o zameldowaniu na pobyt stały (art. 7 ust. 4 u.k.u.r.).',
      'Przygotowuję oświadczenia i przekazuję notariuszowi komplet przed dniem aktu.',
      'Podpisujesz akt. Przez 5 lat od tego dnia zbycie albo wydzierżawienie ziemi wymaga co do zasady zgody Dyrektora Generalnego KOWR (art. 2b ust. 2–4 u.k.u.r.).',
    ],
    faqHeading: 'Wykształcenie, KRUS, dzierżawa: pytania przed aktem notarialnym',
    faq: [
      {
        q: 'Nie mam szkoły rolniczej – czy mogę zostać rolnikiem indywidualnym?',
        a: 'Tak, jeżeli masz staż pracy w rolnictwie, tytuł zawodowy rolniczy albo, przy studiach wyższych, rolnicze studia podyplomowe. Sam staż wystarczy, jeżeli trwał co najmniej 5 lat (art. 6 ust. 2 pkt 2 lit. d u.k.u.r.). Przy wykształceniu wyższym albo średnim nierolniczym wystarczą 3 lata stażu (lit. c). Tytuł zawodowy to np. „wykwalifikowany rolnik” (§ 5 rozporządzenia MRiRW z 17.01.2012).',
      },
      {
        q: 'Ile lat trzeba mieszkać w gminie, żeby być rolnikiem indywidualnym?',
        a: 'Co najmniej 5 lat, w gminie, w której leży jedna z nieruchomości rolnych Twojego gospodarstwa (art. 6 ust. 1 u.k.u.r.). Przez ten sam okres musisz osobiście prowadzić gospodarstwo. Do 5 lat wliczasz zamieszkanie w poprzedniej gminie, jeżeli leżała w niej ziemia z gospodarstwa (art. 6 ust. 1a).',
      },
      {
        q: 'Jak udowodnić, że osobiście prowadzę gospodarstwo?',
        a: 'Pisemnym oświadczeniem, które składasz w umowie notarialnej (art. 7 ust. 1 i 7 u.k.u.r.). Oświadczenie musi zawierać klauzulę: „Jestem świadomy odpowiedzialności karnej za złożenie fałszywego oświadczenia.” (art. 7 ust. 5a).',
      },
      {
        q: 'Czy dzierżawca może być rolnikiem indywidualnym?',
        a: 'Tak. Ustawa wymienia dzierżawcę obok właściciela, użytkownika wieczystego i samoistnego posiadacza (art. 6 ust. 1 u.k.u.r.). Prowadzenie dzierżawionego gospodarstwa od 1 ha liczy się też do stażu (art. 6 ust. 3 pkt 2). Potwierdza je m.in. kopia umowy dzierżawy z datą pewną (§ 7 pkt 2 lit. c rozporządzenia MRiRW).',
      },
      {
        q: 'Gdzie dostać zaświadczenie o kwalifikacjach i stażu?',
        a: 'Dyplom albo świadectwo wydaje szkoła lub uczelnia, zaświadczenie o ubezpieczeniu rolniczym KRUS, a świadectwo pracy albo zaświadczenie o zatrudnieniu pracodawca (§ 6–7 rozporządzenia MRiRW z 17.01.2012). Prowadzenie własnego gospodarstwa od 1 ha potwierdza m.in. zaświadczenie wójta, burmistrza albo prezydenta miasta (§ 7 pkt 2 lit. a). Wystarczy też akt notarialny albo wypis z księgi wieczystej.',
      },
      {
        q: 'Czy muszę być w KRUS, żeby mieć status rolnika?',
        a: 'Nie. Art. 6 u.k.u.r. nie wymienia ubezpieczenia w KRUS wśród warunków statusu. Okres ubezpieczenia rolniczego liczy się jednak do stażu pracy w rolnictwie (art. 6 ust. 3 pkt 1), a potwierdza go zaświadczenie KRUS (§ 7 pkt 1 rozporządzenia MRiRW).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 2a, 2b, 3, 5, 6, 7, 9',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Definicja rolnika indywidualnego, dowody, zakup ziemi, 5 lat po zakupie, pierwokup dzierżawcy, nieważność.',
        },
        {
          ref: '§ 2, § 5, § 6, § 7',
          act: 'Rozporządzenie Ministra Rolnictwa i Rozwoju Wsi z dnia 17 stycznia 2012 r. w sprawie kwalifikacji rolniczych posiadanych przez osoby wykonujące działalność rolniczą',
          tj: 'Dz.U. 2012 poz. 109 (bez tekstu jednolitego; zmiany: Dz.U. 2019 poz. 837, Dz.U. 2022 poz. 2621)',
          eli: 'DU/2012/109',
          note: 'Kierunki, zawody i tytuły rolnicze oraz dokumenty kwalifikacji i stażu.',
        },
      ],
    },
    docs: [
      'Dyplom albo świadectwo szkolne, jeśli masz',
      'Dowody stażu w rolnictwie, jeśli masz: zaświadczenie KRUS, świadectwo pracy, umowa dzierżawy z datą pewną',
      'Zaświadczenie o zameldowaniu na pobyt stały albo informacja, od kiedy mieszkasz w gminie',
      'Lista Twoich gruntów rolnych (własność, dzierżawa, współwłasność) z gminą i powierzchnią',
      'Dane kupowanej ziemi i termin aktu, jeśli jest ustalony',
    ],
    guides: ['status-rolnika-indywidualnego', 'zgoda-kowr-nabycie-ziemi-rolnej'],
    seeAlso: ['obsluga-zakupu', 'obsluga-prawna-przedsiebiorstw-rolnych'],
    cta: {
      heading: 'Status rolnika trzeba udowodnić — pomogę Ci to zrobić bez potknięć.',
      lead: 'Napisz, jakie masz wykształcenie i czy znasz już termin u notariusza. W 24 h roboczych odpiszę, jakie dokumenty i oświadczenia trzeba przygotować dla notariusza, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'dzierzawa-rolna': {
    metaDesc: 'Umowa dzierżawy gruntu rolnego na ponad rok powinna być pisemna, inaczej jest bezterminowa. Piszę umowy, wypowiedzenia i pozwy o zaległy czynsz.',
    h1: 'Umowy dzierżawy rolnej',
    h1Full: 'Umowy dzierżawy rolnej: czas trwania, czynsz, wypowiedzenie i pierwokup dzierżawcy',
    topic: 'Dzierżawa rolna',
    subtitle: 'Dzierżawca nie płaci, chcesz sprzedać pole albo notariusz przysłał Ci zawiadomienie o sprzedaży ziemi, którą uprawiasz? Umowa dzierżawy gruntu rolnego na ponad rok powinna być pisemna; bez tej formy jest bezterminowa (art. 660 w zw. z art. 694 k.c.). Piszę i sprawdzam takie umowy, przygotowuję wypowiedzenia i prowadzę sprawy o czynsz i zwrot gruntu.',
    short: {
      q: 'Co powinna zawierać umowa dzierżawy gruntu rolnego?',
      a: 'Musi wskazywać grunt oddany do używania i pobierania pożytków oraz czynsz (art. 693 § 1 k.c.). Warto dopisać rok dzierżawny (np. od 1.10 do 30.09), termin płatności czynszu i to, czy dzierżawca ponosi podatki (art. 699, 702, 704 k.c.). Aktu notarialnego kodeks nie wymaga (art. 660 w zw. z art. 694 k.c.).',
      facts: [
        [
          'Forma',
          'Pismo przy umowie na ponad rok, inaczej umowa jest bezterminowa (art. 660 w zw. z art. 694 k.c.)',
        ],
        [
          'Wypowiedzenie umowy bezterminowej',
          'Rok naprzód, na koniec roku dzierżawnego, jeżeli umowa nie stanowi inaczej (art. 704 k.c.)',
        ],
        [
          'Zaległy czynsz',
          'Zwłoka za 2 pełne okresy płatności, a gdy czynsz jest roczny, ponad 3 miesiące; potem 3 miesiące na zapłatę i wypowiedzenie bez terminu (art. 703 k.c.)',
        ],
        [
          'Sprzedaż ziemi',
          'Nabywca wchodzi w dzierżawę. Nie wypowie jej, jeżeli zawarto ją na piśmie, z datą pewną (np. wzmianka notariusza, art. 81 § 2 k.c.), na czas oznaczony, a grunt wydano (art. 678 w zw. z art. 694 k.c.)',
        ],
        [
          'Pierwokup dzierżawcy',
          'Umowa pisemna z datą pewną, wykonywana co najmniej 3 lata od tej daty, grunt w gospodarstwie rodzinnym dzierżawcy; miesiąc na decyzję od zawiadomienia (art. 3 u.k.u.r., art. 598 § 2 k.c.)',
        ],
        [
          'Szkoda po zwrocie gruntu',
          'Roszczenie o pogorszenie gruntu przedawnia się po roku od zwrotu (art. 677 w zw. z art. 694 k.c.)',
        ],
      ],
    },
    introHeading: 'Co kodeks ustali za Ciebie, a co musisz wpisać do umowy',
    intro: 'Dzierżawa to umowa, w której wydzierżawiający oddaje grunt do używania i pobierania pożytków (czyli do uprawy i zbioru plonów), a dzierżawca płaci umówiony czynsz (art. 693 § 1 k.c.). Czynsz może być w pieniądzu albo w części plonów (art. 693 § 2 k.c.). Czego przepisy o dzierżawie nie regulują, do tego stosuje się odpowiednio przepisy o najmie (art. 694 k.c.). Termin płatności czynszu kodeks uzupełni sam (art. 699 k.c.), ale roku dzierżawnego nie ustala, choć od jego końca liczy się wypowiedzenie (art. 704 k.c.).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Dzierżawca nie płaci, chcesz sprzedać pole albo umowa była „na słowo”',
    when: [
      {
        b: 'Dostałeś od notariusza zawiadomienie o sprzedaży ziemi, którą dzierżawisz.',
        t: 'Jeżeli masz pierwokup, wykonujesz go w miesiąc od otrzymania zawiadomienia, w formie aktu notarialnego (art. 3 ust. 3 u.k.u.r., art. 597 § 2, art. 598 § 2, art. 158 k.c.).',
      },
      { b: 'Dzierżawca nie płaci czynszu za kolejne terminy.', t: 'Wypowiedzenie bez terminu jest możliwe dopiero po uprzedzeniu dzierżawcy i 3 miesiącach na zapłatę (art. 703 k.c.).' },
      {
        b: 'Umowę zawarliście „na słowo” albo na kartce bez daty.',
        t: 'Umowa na ponad rok bez pisma jest bezterminowa, a bez daty pewnej nie daje dzierżawcy pierwokupu (art. 660 w zw. z art. 694 k.c., art. 3 ust. 1 u.k.u.r.).',
      },
      { b: 'Chcesz sprzedać ziemię, na której gospodaruje dzierżawca.', t: 'Kupujący przejmuje umowę, a gdy dzierżawca ma pierwokup, sprzedajesz warunkowo (art. 678 § 1 w zw. z art. 694, art. 597 § 1 k.c.).' },
      {
        b: 'Umowa się skończyła, a dzierżawca dalej uprawia pole.',
        t: 'Jeżeli się na to godzisz, w razie wątpliwości umowa trwa dalej bez terminu (art. 674 w zw. z art. 694 k.c.). Jeżeli się nie godzisz, możesz żądać zwrotu gruntu (art. 705 k.c.).',
      },
    ],
    doForTitle: 'Co przygotowuję dla właściciela ziemi i dla rolnika, który ją uprawia',
    doFor: [
      'Piszę umowę dzierżawy albo aneks: czas trwania, czynsz, rok dzierżawny, podatki, przypadki wypowiedzenia.',
      'Sprawdzam umowę, którą dostałeś do podpisu, i wypisuję zapisy działające tylko na korzyść drugiej strony.',
      'Ustalam, czy data pewna leży w Twoim interesie, i jak ją nadać (art. 81 § 2 k.c.).',
      'Przy sprzedaży dzierżawionej ziemi sprawdzam pierwokup dzierżawcy i uzgadniam z notariuszem umowę warunkową.',
      'Przygotowuję uprzedzenie o zaległym czynszu i wypowiedzenie, potem pozew o czynsz, zwrot gruntu albo szkodę.',
    ],
    lists: [
      {
        eyebrow: 'Zamiast wzoru z internetu',
        title: 'Cztery zapisy, których wzór z internetu nie ustali za Ciebie',
        kind: 'check',
        items: [
          { b: 'Rok dzierżawny', t: 'od niego liczy się koniec wypowiedzenia (art. 704 k.c.) i czynsz za niepełny rok (art. 707 k.c.).' },
          { b: 'Termin płatności czynszu', t: 'bez niego czynsz płaci się z dołu w terminie zwyczajowym, a bez zwyczaju półrocznie (art. 699 k.c.).' },
          { b: 'Podatki od gruntu', t: 'jeżeli oprócz czynszu ponosi je dzierżawca, zapisz to; zwrot kwot zapłaconych za niego zabezpiecza ustawowe prawo zastawu (art. 702 k.c.).' },
          { b: 'Zasiewy przy zwrocie', t: 'dzierżawca może żądać zwrotu nakładów na zasiewy pozostawione zgodnie z obowiązkiem, o ile sam nie dostał odpowiednich na początku (art. 706 k.c.).' },
        ],
      },
    ],
    stepsHeading: 'Od podpisu umowy do zwrotu pola: kolejne kroki',
    steps: [
      'Przesyłasz umowę albo spisane ustalenia ustne. Odpiszę w 24 h roboczych, czy potrzebna jest nowa umowa, uprzedzenie o zaległym czynszu czy pozew, i dołączę ofertę z ceną i terminem.',
      'Umowę podpisujecie na piśmie. Datę pewną nadajemy, jeżeli służy stronie, którą reprezentuję, bo wzmacnia ona pozycję dzierżawcy (art. 678 § 2 k.c., art. 3 ust. 1 u.k.u.r.).',
      'Przy zaległości wysyłam uprzedzenie z 3 miesiącami na zapłatę, a po ich upływie wypowiedzenie. Wypowiedzenie to krok nieodwracalny: po doręczeniu nie odwołasz go jednostronnie (art. 61 § 1 k.c.).',
      'Gdy dzierżawca nie płaci albo po końcu umowy nie oddaje gruntu, składam pozew o zapłatę albo o zwrot gruntu (art. 705 k.c.).',
    ],
    faq: [
      {
        q: 'Na ile lat najlepiej wydzierżawić ziemię?',
        a: 'Kodeks nie wskazuje najlepszego okresu; umowa na ponad 30 lat staje się po ich upływie bezterminowa (art. 695 § 1 k.c.). Umowę na czas oznaczony wypowiesz tylko z przyczyn z umowy albo z ustawy, np. przy zaległym czynszu albo poddzierżawie bez Twojej zgody (art. 673 § 3 w zw. z art. 694, art. 698 § 2, art. 703 k.c.). Krótszy okres daje Ci więc szybszy powrót do gruntu.',
      },
      {
        q: 'Jak wypowiedzieć dzierżawę gruntu rolnego – rok naprzód?',
        a: 'Tak, jeżeli umowa jest bezterminowa i nie przewiduje innego terminu (art. 704 k.c.). Przykład (daty umowne): rok dzierżawny kończy się 30.09; wypowiedzenie doręczone 20.08.2026 r. kończy umowę 30.09.2027 r.',
      },
      {
        q: 'Dzierżawca nie płaci – czy mogę rozwiązać umowę od razu?',
        a: 'Nie od razu. Najpierw zwłoka musi objąć 2 pełne okresy płatności, a przy czynszu rocznym trwać ponad 3 miesiące. Potem uprzedzasz dzierżawcę i dajesz mu 3 miesiące na zapłatę. Dopiero po nich wypowiadasz umowę bez terminu (art. 703 k.c.).',
      },
      {
        q: 'Czy dzierżawca ma pierwokup, kiedy sprzedam ziemię?',
        a: 'Tak, jeżeli spełnia 3 warunki. Umowa jest pisemna z datą pewną, wykonywana co najmniej 3 lata od tej daty, a grunt wchodzi w jego gospodarstwo rodzinne (prowadzone przez rolnika indywidualnego, do 300 ha użytków rolnych; art. 3 ust. 1, art. 5 ust. 1 u.k.u.r.). Sprzedaż bez warunku jest wtedy nieważna (art. 599 § 2 k.c.). Pierwokupu nie ma m.in. przy sprzedaży osobie bliskiej albo za zgodą Dyrektora Generalnego Krajowego Ośrodka Wsparcia Rolnictwa (art. 3 ust. 5 u.k.u.r.).',
      },
      {
        q: 'Czy umowa dzierżawy musi mieć datę pewną albo notariusza?',
        a: 'Nie musi: przy umowie na ponad rok kodeks wymaga pisma, a aktu notarialnego nie (art. 660 w zw. z art. 694 k.c.). Datę pewną (skuteczną także wobec osób spoza umowy) uzyskasz np. przez wzmiankę notariusza albo wójta z datą na umowie (art. 81 § 1 i § 2 pkt 2 k.c.). Bez niej dzierżawca nie ma pierwokupu, a kupujący ziemię może wypowiedzieć dzierżawę (art. 3 ust. 1 u.k.u.r., art. 678 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        { ref: 'art. 693–707', act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny', tj: 'Dz.U. 2026 poz. 795', eli: 'DU/1964/93', note: 'Dzierżawa: czynsz, poddzierżawa, zaległość, wypowiedzenie, zwrot gruntu, zasiewy.' },
        {
          ref: 'art. 660, 673, 674, 677, 678 w zw. z art. 694; art. 61, 81, 158, 597–599',
          act: 'Ustawa z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Forma, wypowiedzenie, sprzedaż gruntu w czasie dzierżawy, data pewna, wykonanie pierwokupu.',
        },
        {
          ref: 'art. 2a ust. 4, art. 3, art. 5',
          act: 'Ustawa z dnia 11 kwietnia 2003 r. o kształtowaniu ustroju rolnego',
          tj: 'Dz.U. 2026 poz. 941',
          eli: 'DU/2003/592',
          note: 'Pierwokup dzierżawcy, jego wyłączenia i gospodarstwo rodzinne.',
        },
      ],
    },
    docs: [
      'Umowa dzierżawy z aneksami albo opis ustaleń ustnych: od kiedy, na ile, jaki czynsz',
      'Numery działek i numer księgi wieczystej, jeśli masz',
      'Potwierdzenia wpłat czynszu albo lista zaległości z terminami płatności',
      'Wezwania i wypowiedzenie z datą doręczenia, jeśli były',
      'Zawiadomienie notariusza o sprzedaży albo projekt umowy sprzedaży ziemi, jeśli są',
    ],
    guides: ['dzierzawa-pod-fotowoltaike-a-vat'],
    seeAlso: ['bezumowne-korzystanie', 'obsluga-prawna-przedsiebiorstw-rolnych'],
    cta: {
      heading: 'Dobra umowa dzierżawy chroni Cię, zanim pojawi się problem.',
      lead: 'Napisz, czy wydzierżawiasz, czy dzierżawisz, i czego dotyczy problem: umowa, czynsz albo sprzedaż ziemi. W 24 h roboczych odpiszę, co trzeba zrobić, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },

  'odrolnienie': {
    metaDesc: 'Odrolnienie to plan miejscowy albo WZ, a przy klasach I–III i glebach organicznych także decyzja starosty. Klasy IV–VI z gleb mineralnych jej nie wymagają.',
    h1: 'Odrolnienie i wyłączenie z produkcji rolnej',
    h1Full: 'Odrolnienie i wyłączenie z produkcji rolnej: plan, decyzja starosty, opłaty',
    topic: 'Wyłączenie z produkcji rolnej',
    subtitle: 'Na Twojej działce rolnej ma stanąć dom albo budynek firmy? Odrolnienie działki to plan miejscowy albo warunki zabudowy, a przy klasach I–III i glebach organicznych także decyzja starosty. Prześlij wypis z rejestru gruntów, a w 24 h roboczych odpiszę, które kroki dotyczą Twojej działki.',
    short: {
      q: 'Co trzeba zrobić, żeby odrolnić działkę?',
      a: 'Najpierw potrzebujesz planu miejscowego z przeznaczeniem nierolniczym albo, gdy planu nie ma, warunków zabudowy (art. 7 ust. 1 u.o.g.r.l., art. 59 ust. 1 u.p.z.p.). Potem starosta wydaje decyzję o wyłączeniu gruntu z produkcji, przed pozwoleniem na budowę albo zgłoszeniem (art. 11 ust. 1 i 4 u.o.g.r.l.). Decyzji nie wymagają użytki rolne klas IV–VI z gleb mineralnych.',
      facts: [
        [
          'Kto decyduje',
          'Plan miejscowy – rada gminy; WZ – wójt, burmistrz albo prezydent miasta; wyłączenie – starosta (art. 20 ust. 1, art. 60 ust. 1 u.p.z.p.; art. 5 ust. 1 u.o.g.r.l.)',
        ],
        [
          'Zgoda ministra',
          'Na przeznaczenie w planie użytków rolnych klas I–III; zbędna w obszarze uzupełnienia zabudowy i w granicach miast (art. 7 ust. 2 pkt 1 i ust. 2a, art. 10a u.o.g.r.l.)',
        ],
        [
          'Decyzja o wyłączeniu',
          'Klasy I–III oraz IV–VI z gleb organicznych; wydawana przed pozwoleniem na budowę albo zgłoszeniem (art. 11 ust. 1 i 4 u.o.g.r.l.)',
        ],
        [
          'Należność (opłata publiczna, nie honorarium)',
          '87 435–437 175 zł za 1 ha minus wartość rynkowa gruntu; obowiązek powstaje od faktycznego wyłączenia gruntu, a termin zapłaty to 60 dni od dnia, w którym decyzja stała się ostateczna (art. 12 ust. 1, 6, 7 i 13 u.o.g.r.l.); termin sprawdź w swojej decyzji',
        ],
        [
          'Opłata roczna (opłata publiczna, nie honorarium)',
          '10% kwoty z tabeli, przy trwałym wyłączeniu przez 10 lat, płatna do 30 czerwca (art. 4 pkt 13, art. 12 ust. 14 pkt 1 u.o.g.r.l.)',
        ],
        [
          'Bez należności i opłat rocznych',
          'Do 0,05 ha pod budynek jednorodzinny, do 0,02 ha na lokal w budynku wielorodzinnym (art. 12a u.o.g.r.l.)',
        ],
      ],
    },
    introHeading: 'Dlaczego „odrolnienie” to dwie sprawy w dwóch urzędach',
    intro: 'Słowa „odrolnienie” nie ma w ustawie o ochronie gruntów rolnych i leśnych. Ustawa mówi o przeznaczeniu gruntów na cele nierolnicze (art. 4 pkt 6 u.o.g.r.l.) i o wyłączeniu gruntów z produkcji, czyli rozpoczęciu innego niż rolnicze użytkowania (art. 4 pkt 11). Pierwsze to sprawa gminy: plan miejscowy, a bez planu warunki zabudowy. Drugie to decyzja starosty. Należność i opłaty roczne płacisz od dnia faktycznego wyłączenia, czyli od dnia, w którym działka zaczyna służyć innemu celowi niż rolniczy, a nie od dnia decyzji (art. 12 ust. 1).',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Chcesz przekształcić działkę rolną na budowlaną albo masz już decyzję starosty',
    when: [
      { b: 'Dostałeś od starosty decyzję o wyłączeniu z wysoką należnością.', t: 'Odwołanie wnosisz za pośrednictwem starosty w 14 dni od doręczenia decyzji (art. 129 § 1–2 k.p.a.).' },
      { b: 'Masz działkę rolną i chcesz postawić dom.', t: 'Przy klasach I–III decyzja o wyłączeniu jest potrzebna także wtedy, gdy dom mieści się w zwolnieniu z opłat (art. 11 ust. 1, art. 12a u.o.g.r.l.).' },
      {
        b: 'Kupujesz działkę rolną z myślą o przekształceniu na budowlaną.',
        t: 'Jeżeli sprzedający ma już decyzję o wyłączeniu, a grunt nie jest jeszcze wyłączony z produkcji, należność i opłaty roczne zapłaci nabywca, który go wyłączy (art. 12 ust. 3 u.o.g.r.l.).',
      },
      {
        b: 'Na działce już stoi budynek albo jest plac, a decyzji o wyłączeniu nie ma.',
        t: 'Jeżeli plan miejscowy przeznacza grunt na cele nierolnicze, decyzję wydaje się z urzędu z należnością wyższą o 10% (art. 28 ust. 2 u.o.g.r.l.). Za wyłączenie niezgodne z ustawą opłata wynosi dwukrotność należności (ust. 1).',
      },
    ],
    doForTitle: 'Od wypisu z rejestru gruntów do decyzji starosty: co przygotowuję',
    doFor: [
      'Ustalam z ewidencji gruntów rodzaj użytku i klasę (art. 20 ust. 1 pkt 1 Pr. geod. i kart.), sprawdzam pochodzenie gleby i podstawę zabudowy: plan albo WZ.',
      'Przygotowuję wniosek o warunki zabudowy dla działki bez planu miejscowego.',
      'Przygotowuję wniosek do starosty o wyłączenie gruntu z produkcji, tak żeby decyzja była przed wnioskiem o pozwolenie na budowę albo zgłoszeniem (art. 11 ust. 4 u.o.g.r.l.).',
      'Sprawdzam w decyzji stawkę dla klasy (art. 12 ust. 7), odjęcie wartości gruntu (ust. 6) i zwolnienie z art. 12a, a przy błędzie piszę odwołanie.',
      'Gdy w ciągu 2 lat rezygnujesz z prawa do wyłączenia, zgłaszam rezygnację; zwrot należności za niewyłączoną powierzchnię następuje do 3 miesięcy od zgłoszenia (art. 12 ust. 2).',
    ],
    stepsHeading: 'Najpierw podstawa zabudowy, potem wyłączenie, potem budowa: kolejne kroki',
    steps: [
      'Przesyłasz wypis z rejestru gruntów i opis inwestycji. W 24 h roboczych odpisuję, co trzeba zrobić, np. wniosek o WZ albo do starosty, i wysyłam ofertę z ceną i terminem. Do jej akceptacji nic nie płacisz.',
      'Podstawa zabudowy: plan miejscowy albo WZ od wójta, burmistrza lub prezydenta miasta. Przy wniosku złożonym od 1.09.2026 wydanie WZ jest możliwe, jeżeli w gminie wszedł w życie plan ogólny (art. 59 ust. 3 ustawy z 7.07.2023). Przy wniosku od 1.01.2027 WZ dostaje tylko wnioskodawca mający prawo do dysponowania nieruchomością na cele budowlane (art. 63 ust. 1a u.p.z.p.).',
      'Wniosek do starosty o wyłączenie (art. 11 ust. 1 u.o.g.r.l.). Przy klasach I–III starosta określa w decyzji obowiązki związane z wyłączeniem (ust. 1a), a przy glebach organicznych klas IV–VI jest związany Twoim wnioskiem (ust. 1b).',
      'Po doręczeniu decyzji: odwołanie w 14 dni (art. 129 § 2 k.p.a.). Należność płacisz w 60 dni od dnia, w którym decyzja stała się ostateczna (art. 12 ust. 13 u.o.g.r.l.), ale obowiązek powstaje dopiero z faktycznym wyłączeniem gruntu (art. 12 ust. 1; wyrok NSA z 4.11.2016, II OSK 224/15). Starostwa stosują to różnie, więc termin sprawdź w decyzji.',
      'Krok nieodwracalny: pierwszy dzień nierolniczego użytkowania gruntu, bo od niego płacisz należność i opłaty roczne (art. 12 ust. 1 u.o.g.r.l.). Wcześniej dołączasz decyzję do wniosku o pozwolenie albo do zgłoszenia budowy (art. 11 ust. 4a).',
    ],
    faq: [
      {
        q: 'Ile kosztuje odrolnienie działki?',
        a: 'Należność za 1 ha wynosi od 87 435 do 437 175 zł, zależnie od klasy i użytku (art. 12 ust. 7 u.o.g.r.l.). Odejmuje się od niej wartość rynkową gruntu (ust. 6). Przykład (liczby umowne, budynek usługowy): 0,10 ha gruntu ornego klasy IIIa to 32 059,50 zł. Przy wartości gruntu 25 000 zł zostaje 7 059,50 zł. Opłata roczna wynosi tu 3 205,95 zł przez 10 lat (art. 12 ust. 14). Cenę mojej pracy podaję w ofercie.',
      },
      {
        q: 'Czy grunt klasy IV albo V trzeba odrolnić?',
        a: 'Decyzji o wyłączeniu nie potrzebujesz, jeżeli to użytek rolny z gleb pochodzenia mineralnego (art. 11 ust. 1 u.o.g.r.l.). Wtedy nie płacisz też należności ani opłat rocznych (art. 12 ust. 1). Przy glebach organicznych klas IV–VI decyzja jest potrzebna, a należność wynosi 87 435–204 015 zł za 1 ha (art. 12 ust. 7). Plan albo WZ potrzebujesz niezależnie od klasy (art. 59 ust. 1 u.p.z.p.).',
      },
      {
        q: 'Ile trwa odrolnienie?',
        a: 'Starosta powinien wydać decyzję o wyłączeniu co do zasady w miesiąc od wszczęcia sprawy (art. 35 § 3 k.p.a.). W sprawie szczególnie skomplikowanej ma 2 miesiące. Osobno toczy się sprawa w gminie: plan miejscowy albo WZ. Gdy plan przeznacza na cele nierolnicze użytki rolne klas I–III, wójt, burmistrz albo prezydent miasta występuje o zgodę ministra (art. 7 ust. 1–3 u.o.g.r.l.).',
      },
      {
        q: 'Czy mogę zbudować dom na działce rolnej bez odrolnienia?',
        a: 'Bez planu miejscowego albo warunków zabudowy nie (art. 59 ust. 1 u.p.z.p.). Bez decyzji starosty tak, jeżeli to klasy IV–VI z gleb mineralnych (art. 11 ust. 1 u.o.g.r.l.). Na użytkach klas I–III poza miastem i obszarem uzupełnienia zabudowy WZ co do zasady nie dostaniesz. Wyjątek to teren objęty zgodą uzyskaną przy sporządzaniu dawnych planów miejscowych, które utraciły moc (art. 61 ust. 1 pkt 4 u.p.z.p.).',
      },
      {
        q: 'Dostałem wysoką należność. Czy można ją obniżyć?',
        a: 'Tak, jeżeli decyzja przyjmuje złą klasę, powierzchnię albo wartość gruntu albo pomija zwolnienie z art. 12a u.o.g.r.l. Odwołanie wnosisz w 14 dni od doręczenia (art. 129 § 2 k.p.a.). Umorzenie dotyczy tylko inwestycji użyteczności publicznej i celu publicznego do 1 ha, na wniosek organu samorządu (art. 12 ust. 16–17).',
      },
      {
        q: 'Czy przy domu jednorodzinnym jest zwolnienie z opłaty?',
        a: 'Tak, do 0,05 ha pod budynek jednorodzinny nie płacisz należności ani opłat rocznych (art. 12a pkt 1 u.o.g.r.l.). Zwolnienie dotyczy opłat, nie decyzji. Przy klasach I–III i glebach organicznych klas IV–VI wniosek do starosty składasz także pod dom (art. 11 ust. 1).',
      },
    ],
    law: {
      asOf: '2026-10-26',
      items: [
        {
          ref: 'art. 4 pkt 6, 11 i 13, art. 5, 7, 10a, 11, 12, 12a, 28 ust. 1–2',
          act: 'Ustawa z dnia 3 lutego 1995 r. o ochronie gruntów rolnych i leśnych',
          tj: 'Dz.U. 2024 poz. 82 ze zm.',
          eli: 'DU/1995/78',
          note: 'Przeznaczenie, zgoda ministra, decyzja o wyłączeniu, należność, opłata roczna, zwolnienie, sankcje. Zmiany z Dz.U. 2026 poz. 875 i 1155 dotyczą rekultywacji.',
        },
        {
          ref: 'art. 20 ust. 1, art. 59 ust. 1, art. 60 ust. 1, art. 61 ust. 1, art. 63 ust. 1a',
          act: 'Ustawa z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
          tj: 'Dz.U. 2026 poz. 538 ze zm.',
          eli: 'DU/2003/717',
          note: 'Plan miejscowy i WZ dla działki bez planu; art. 63 ust. 1a od 1.01.2027 (Dz.U. 2026 poz. 781).',
        },
        {
          ref: 'art. 59 ust. 3',
          act: 'Ustawa z 7.07.2023 o zmianie ustawy o planowaniu i zagospodarowaniu przestrzennym oraz niektórych innych ustaw',
          tj: 'Dz.U. 2023 poz. 1688 ze zm.',
          eli: 'DU/2023/1688',
          note: 'WZ na wniosek złożony od 1.09.2026 tylko w gminie z planem ogólnym w życie.',
        },
        { ref: 'art. 35, art. 129', act: 'Ustawa z dnia 14 czerwca 1960 r. Kodeks postępowania administracyjnego', tj: 'Dz.U. 2025 poz. 1691', eli: 'DU/1960/168', note: 'Termin na decyzję i odwołanie.' },
        {
          ref: 'art. 20 ust. 1 pkt 1',
          act: 'Ustawa z dnia 17 maja 1989 r. Prawo geodezyjne i kartograficzne',
          tj: 'Dz.U. 2024 poz. 1151 ze zm.',
          eli: 'DU/1989/163',
          note: 'Ewidencja gruntów obejmuje rodzaj użytku i klasę bonitacyjną.',
        },
      ],
    },
    docs: [
      'Wypis z rejestru gruntów z klasą i rodzajem użytku albo numer działki',
      'Wypis i wyrys z planu miejscowego albo decyzja o warunkach zabudowy, jeśli są',
      'Opis inwestycji i powierzchni, którą zajmie, np. szkic albo projekt zagospodarowania',
      'Decyzja starosty o wyłączeniu z datą doręczenia, jeśli już ją masz',
      'Umowa zakupu działki albo operat szacunkowy, jeśli spór dotyczy wartości gruntu',
    ],
    guides: ['farma-fotowoltaiczna-na-dzialce-rolnej'],
    seeAlso: ['warunki-zabudowy', 'zgloszenie-budowy'],
    cta: {
      heading: 'Odrolnienie nie musi kosztować fortuny — a często nie kosztuje nic.',
      lead: 'Napisz, jaką klasę ma działka i co chcesz na niej zbudować; przy klasach IV–VI z gleb mineralnych i pod dom do 0,05 ha należności nie płacisz (art. 11 ust. 1, art. 12 ust. 1, art. 12a u.o.g.r.l.). W 24 h roboczych odpiszę, co trzeba zrobić, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-26',
  },
};

/* ===== Umbrella (pillar) content, keyed by block id ===== */
const BLOCK_CONTENT = {
  'roszczenia-deweloper': {
    h1: 'Roszczenia i spory z deweloperem: opóźnienie, usterki, metraż i zapisy umowy',
    topic: 'Spory z deweloperem',
    servicesHeading: 'Wybierz swoją sprawę: opóźnienie, usterki, części wspólne, metraż albo zapis umowy',
    subtitle: 'Deweloper spóźnia się z aktem, nie usuwa usterek z protokołu albo mieszkanie ma mniej metrów niż w umowie? W sporze z deweloperem liczą się: termin aktu z umowy, 30 dni na usunięcie uznanych usterek z protokołu (art. 41 ust. 6 u.d.) i 5 lat rękojmi od wydania lokalu (art. 568 § 1 k.c.). Ustalam, które roszczenie masz, wzywam dewelopera i prowadzę sprawę do ugody albo wyroku.',
    short: {
      q: 'Spór z deweloperem: czego mogę żądać i do kiedy?',
      a: 'Usterki z protokołu odbioru i zgłoszone przed aktem deweloper usuwa w trybie art. 41 u.d. Za pozostałe wady po akcie odpowiada z rękojmi (art. 41a u.d.). Za opóźnienie płaci karę z umowy, a gdy umowa nie przewiduje kar ani odsetek – rekompensatę liczoną jak odsetki ustawowe za opóźnienie (art. 39 ust. 2 u.d.).',
      facts: [
        [
          'Minął termin aktu z umowy',
          'kara z umowy (art. 35 ust. 1 pkt 14 u.d.); po bezskutecznym upływie 120 dni, które wyznaczysz deweloperowi, odstąpienie z zachowaniem kary (art. 43 ust. 3 u.d.); usługa: kary za opóźnienie',
        ],
        [
          'Usterki z protokołu albo zgłoszone przed aktem',
          'deweloper odpowiada w 14 dni i usuwa uznane wady w 30 dni, licząc od protokołu albo zgłoszenia; potem wyznaczasz nowy termin, a po jego upływie naprawiasz na koszt dewelopera (art. 41 ust. 4–8 i 19 u.d.); usługa: usunięcie wad z protokołu',
        ],
        [
          'Wady stwierdzone po akcie',
          'rękojmia, jeżeli wadę stwierdzisz przed upływem 5 lat od wydania lokalu (art. 41a u.d., art. 568 § 1 k.c.); usługa: rękojmia za wady lokalu',
        ],
        [
          'Dach, elewacja, klatka schodowa',
          'roszczenia mają nabywcy lokali, wspólnota co do zasady po przelewie (art. 509 § 1 k.c.); usługi: wady części wspólnych, przejęcie roszczeń przez wspólnotę',
        ],
        [
          'Mniej metrów niż w umowie',
          'przy umowach z 13.02.2026 i późniejszych cenę liczy się jako metry powierzchni użytkowej pomnożone przez cenę za 1 m² (art. 5a u.d.); usługa: spory o metraż',
        ],
        [
          'Zapis umowy działa tylko na Twoją niekorzyść',
          'postanowienie gorsze dla Ciebie niż ustawa jest nieważne (art. 42 u.d.), a niedozwolone nie wiąże konsumenta (art. 385¹ § 1 k.c.); usługa: klauzule abuzywne',
        ],
      ],
    },
    introHeading: 'Co chroni Cię w umowie z deweloperem',
    intro: 'Ustawa deweloperska chroni nabywcę, czyli osobę fizyczną, która kupuje mieszkanie albo dom w celu niezwiązanym bezpośrednio z działalnością gospodarczą lub zawodową (art. 5 pkt 5 u.d.). Gwarancja, jeżeli deweloper jej udzielił, działa obok rękojmi, a nie zamiast niej (art. 579 § 1 k.c.). Jeżeli działasz w imieniu wspólnoty albo jako zarządca, zacznij od usługi przejęcia roszczeń przez wspólnotę.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Deweloper się spóźnia, nie usuwa usterek albo przestał odpowiadać',
    when: [
      {
        b: 'Podpisałeś protokół odbioru z listą usterek, a deweloper milczy albo nic nie naprawił.',
        t: 'Brak odpowiedzi przez 14 dni oznacza, że deweloper uznał wady; uznane ma usunąć w ciągu 30 dni, licząc od dnia podpisania protokołu (art. 41 ust. 4–6 u.d.).',
      },
      {
        b: 'Termin przeniesienia własności minął, a deweloper nie wyznacza aktu notarialnego.',
        t: 'Po odstąpieniu umowa jest uważana za niezawartą (art. 44 ust. 2 u.d.), więc zanim wyznaczysz deweloperowi 120 dni na akt (art. 43 ust. 3 u.d.), liczymy karę i zwrot wpłat.',
      },
      {
        b: 'Po przeprowadzce wyszły wady, których przy odbiorze nie było widać, np. zawilgocenie albo wada instalacji.',
        t: 'To już nie tryb protokołu, tylko rękojmia (art. 41a u.d.); liczy się, czy wadę stwierdzisz przed upływem 5 lat od wydania lokalu (art. 568 § 1 k.c.).',
      },
      {
        b: 'Pęka elewacja albo zalewa klatkę schodową, a sąsiedzi czekają, aż ktoś zacznie działać.',
        t: 'Roszczenie wobec dewelopera ma każdy, kto kupił od niego lokal (art. 556 k.c.); wspólnota przejmuje je co do zasady umową przelewu (art. 509 § 1 k.c.).',
      },
      {
        b: 'Sąd ogłosił upadłość dewelopera albo spółka celowa przestała odbierać pisma, a aktu jeszcze nie było.',
        t: 'Jeżeli syndyk odstąpi od umowy, pieniądze z otwartego rachunku powierniczego oddaje Ci Deweloperski Fundusz Gwarancyjny (art. 48 ust. 1 pkt 4 u.d.).',
      },
    ],
    faq: [
      {
        q: 'Notariusz wpisał do aktu, że nie mam roszczeń wobec dewelopera. Co z karą i wadami?',
        a: 'Sam podpis aktu roszczeń nie zamyka; decyduje treść zapisu. Kara wygasa, jeżeli zwalniasz dewelopera z długu, a on zwolnienie przyjmuje (art. 508 k.c.). Konsumentowi rękojmię wolno ograniczyć lub wyłączyć tylko wtedy, gdy pozwala na to przepis szczególny (art. 558 § 1 k.c.).',
      },
      {
        q: 'Deweloper upadł albo spółka celowa zniknęła. Co z moimi pieniędzmi?',
        a: 'Przy upadłości Deweloperski Fundusz Gwarancyjny zwraca wpłaty z rachunku powierniczego w przypadkach z art. 48 u.d., ale nie płaci kar ani kosztów naprawy wad. Płaci też, gdy odstąpisz od umowy na podstawie ustawy, a deweloper nie odda pieniędzy w 30 dni (art. 44 ust. 3, art. 48 ust. 1 pkt 6 u.d.). Gdy deweloper zaczął sprzedaż, zanim weszła w życie ustawa z 20.05.2021 r., sprawdzam, czy Fundusz obejmuje Twoją umowę (art. 76 u.d.).',
      },
      {
        q: 'Czy spór z deweloperem zawsze kończy się w sądzie?',
        a: 'Nie. Usterki z protokołu, których deweloper nie usunął w nowym terminie wyznaczonym przez Ciebie, usuwasz na jego koszt bez sądu (art. 41 ust. 8 u.d.). Obniżenie ceny z rękojmi składasz deweloperowi oświadczeniem (art. 560 § 1 k.c.). Do sądu idziesz, gdy deweloper mimo wezwania nie płaci kary, kosztów naprawy albo kwoty z obniżenia ceny.',
      },
      {
        q: 'Deweloper proponuje ugodę albo rekompensatę. Przyjąć ją?',
        a: 'Dopiero wtedy, gdy wiesz, z czego rezygnujesz. Ugoda to wzajemne ustępstwa, które mają uchylić spór (art. 917 k.c.), więc w zakresie, który obejmuje, sprawa się kończy. Porównaj kwotę z karą z umowy albo z obniżeniem ceny i sprawdź, czy tekst nie zawiera zrzeczenia się dalszych roszczeń.',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 5 pkt 5, 5a, 35 ust. 1 pkt 7 i 14, 39, 41–44, 48 i 76 u.d.',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Termin i kary w umowie, odbiór i usuwanie wad, rękojmia po akcie, odstąpienie, Deweloperski Fundusz Gwarancyjny.',
        },
        {
          ref: 'art. 385¹, 508, 509, 556, 558, 560, 568, 579 i 917 k.c.',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Rękojmia i jej terminy, gwarancja, klauzule niedozwolone, zwolnienie z długu, przelew, ugoda.',
        },
      ],
    },
    guides: ['odszkodowanie-od-dewelopera-za-wady', 'kara-umowna-za-opoznienie-dewelopera-uchwala-sn'],
    seeAlso: ['sprawdzenie-umowy-deweloperskiej', 'obsluga-prawna-wspolnot', 'nadzor-budowlany-pinb'],
    cta: {
      heading: 'Deweloper liczy, że odpuścisz. Nie musisz.',
      lead: 'Podaj daty umowy, terminu z umowy i protokołu odbioru, a w 24 h roboczych dostaniesz ode mnie bezpłatną wstępną analizę, co trzeba zrobić, np. wezwać dewelopera do zapłaty kary. Razem z nią przyjdzie oferta z ceną i terminem; płacisz dopiero, gdy ją zaakceptujesz.',
    },
    updated: '2026-10-10',
  },
};

Object.assign(window, { SERVICE_CONTENT, BLOCK_CONTENT, COST_TEXT });
