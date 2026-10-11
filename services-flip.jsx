/* services-flip.jsx — usługa „Flip mieszkania” dla osób prywatnych (filar 2: Transakcje i umowy).
   Ładowane po services-lite-fill.jsx; dopisuje do window.SERVICE_CONTENT. */
Object.assign(window.SERVICE_CONTENT, {
  'flip-mieszkania': {
    h1: 'Flip mieszkania — bezpieczny zakup i odsprzedaż',
    h1Full: 'Flip mieszkania: zakup i odsprzedaż – stan prawny, licytacja, lokator, cesja',
    topic: 'Flip mieszkania',
    metaDesc: 'Prawnik przy flipie sprawdza przed zadatkiem, kto może sprzedać mieszkanie, kto w nim mieszka i co przejdzie na Ciebie. Pomagam też przy licytacji i cesji.',
    subtitle: 'Kupujesz mieszkanie, żeby je odnowić i sprzedać z zyskiem? Prawnik przy flipie sprawdza przed zadatkiem, kto może sprzedać mieszkanie, kto w nim mieszka i co przejdzie na Ciebie. Prowadzę zakup, także z licytacji albo „na cesję”, i sprzedaż; zacznij od numeru księgi wieczystej.',
    short: {
      q: 'Co sprawdza prawnik, zanim wpłacisz zadatek za mieszkanie pod remont i odsprzedaż?',
      a: 'Przede wszystkim księgę wieczystą, bo hipoteka zostaje na lokalu także po sprzedaży (art. 65 ust. 1 u.k.w.h.). Potem sprzedającego: przy mieszkaniu po zmarłym podpisują wszyscy spadkobiercy. Przy licytacji własność przechodzi dopiero z prawomocnym postanowieniem o przysądzeniu (art. 999 § 1 k.p.c.).',
      facts: [
        [
          'Mieszkanie po zmarłym',
          'całe sprzedają co do zasady wszyscy spadkobiercy razem (art. 199 w zw. z art. 1035 k.c.)',
        ],
        [
          'Licytacja komornicza: wady lokalu',
          'nie unieważnisz z ich powodu nabycia ani nie obniżysz ceny (art. 971 k.p.c.)',
        ],
        [
          'Licytacja komornicza: zapłata ceny',
          '2 tygodnie od otrzymania wezwania komornika, który na Twój wniosek może wydłużyć termin do miesiąca; po terminie tracisz rękojmię (art. 967, art. 969 § 1 k.p.c.)',
        ],
        [
          'Kupno „na cesję” od osoby prywatnej',
          'zbywca w ciągu 3 lat przed cesją nie przeniósł wierzytelności z innej umowy deweloperskiej i oświadcza to pod rygorem odpowiedzialności karnej; wyjątek: cesja na osobę z I albo II grupy podatkowej; umowa w formie aktu notarialnego (art. 37a ust. 1 pkt 2, ust. 2 i 4, art. 40 ust. 1 u.d.)',
        ],
        [
          'Sprzedaż przed upływem 5 lat',
          'przychód w PIT, jeżeli sprzedajesz poza działalnością gospodarczą przed upływem 5 lat od końca roku zakupu (art. 10 ust. 1 pkt 8 lit. a–b u.p.d.o.f.); ile zapłacisz, oceni doradca podatkowy',
        ],
      ],
    },
    introHeading: 'Zysk z flipa robi się na zakupie.',
    intro: 'Flip to potoczna nazwa kupna, remontu i szybkiej odsprzedaży tego samego mieszkania. Kupujesz umową sprzedaży (art. 535 k.c.), na licytacji komorniczej albo przez przelew praw z umowy deweloperskiej (potocznie: cesję). Okazje z rynku wtórnego to najczęściej mieszkania z historią: po zmarłym, z hipoteką, z lokatorem. Na tej historii flipper zarabia i na niej najłatwiej o błąd, którego remont nie naprawi. Kilka flipów w roku albo pieniądze inwestora to zakres obsługi prawnej inwestorów i firm flippingowych.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: 'Mieszkanie po okazyjnej cenie, ale z historią',
    when: [
      { b: 'Mieszkanie jest poniżej ceny rynkowej, a sprzedający chce zadatku w ciągu kilku dni.', t: 'Termin wyznacza sprzedający, nie przepis. W tym czasie sprawdzam księgę, sprzedającego i lokatora.' },
      { b: 'Mieszkanie jest po zmarłym, a w księdze nadal figuruje spadkodawca.', t: 'Udział sprzedany przez jednego spadkobiercę bez zgody reszty może być wobec nich bezskuteczny (art. 1036 k.c.).' },
      { b: 'Licytujesz mieszkanie u komornika, a w środku ktoś mieszka.', t: 'Od tego, czy to dłużnik, jego rodzina czy najemca, zależy, jak odzyskasz lokal (art. 791 § 2, art. 1002 k.p.c.).' },
      { b: 'Kupujesz „na cesję” od osoby, która ma umowę z deweloperem.', t: 'Złamanie limitu z art. 37a ust. 1 u.d. nie unieważnia cesji (ust. 3). Umowę i wpłaty zbywcy sprawdzam, zanim mu zapłacisz.' },
    ],
    doForEyebrow: 'Na zakupie',
    doForTitle: 'Sprawdzam, zanim wpłacisz zadatek.',
    doFor: [
      'Czytam księgę wieczystą i dokumenty sprzedającego: właściciel, hipoteki, wzmianka o egzekucji, roszczenia osób trzecich.',
      'Ustalam, kto podpisuje umowę przedwstępną i akt: wszyscy spadkobiercy, współwłaściciele albo ich pełnomocnik.',
      'Piszę albo poprawiam umowę przedwstępną: zadatek, termin aktu, wejście ekipy przed aktem, wydanie lokalu.',
      'Przed licytacją czytam obwieszczenie: cenę wywołania, wysokość rękojmi (potocznie: wadium) i czas oglądania lokalu (art. 953 § 1 k.p.c.).',
      'Przy zakupie „na cesję” czytam umowę deweloperską zbywcy i harmonogram wpłat, a projekt umowy przelewu przygotowuję dla notariusza.',
    ],
    lists: [
      {
        eyebrow: 'Na sprzedaży',
        title: 'Sprzedajesz po remoncie: za co odpowiadasz wobec kupującego',
        kind: 'check',
        items: [
          { b: 'Protokół stanu lokalu', t: 'zakres remontu i wady, o których mówisz kupującemu. Za wadę, o której kupujący wiedział przy umowie, nie odpowiadasz z rękojmi (art. 557 § 1 k.c.).' },
          { b: 'Rękojmia w umowie', t: 'przy sprzedaży prywatnej możecie ją ograniczyć albo wyłączyć (art. 558 § 1 k.c.), ale nie wtedy, gdy sprzedawca podstępnie zataił wadę (art. 558 § 2 k.c.).' },
          { b: 'Kupujący z kredytem', t: 'dokumenty dla banku, termin wypłaty i zabezpieczenie ceny do wydania lokalu.' },
        ],
      },
    ],
    stepsHeading: 'Jak prowadzę zakup i sprzedaż jednego mieszkania',
    steps: [
      'Przesyłasz numer księgi wieczystej, link do ogłoszenia albo obwieszczenie komornika. Najlepiej przed zadatkiem.',
      'W 24 h roboczych odpisuję, co trzeba sprawdzić przy tej okazji, np. dziedziczenie albo lokatora. Jednocześnie dostajesz ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
      'Po akceptacji sprawdzam mieszkanie z dokumentami sprzedającego w 2–4 dni robocze i dostajesz raport w trzech kolorach. Pilną okazję zaznacz w formularzu.',
      'Krok trudny do cofnięcia to zadatek, który wpłacasz po raporcie. Na licytacji jest nim przybicie: bez zapłaty ceny w terminie tracisz rękojmię (art. 969 § 1 k.p.c.).',
      'Po remoncie przygotowuję umowę sprzedaży i protokół stanu lokalu.',
    ],
    faq: [
      {
        q: 'Czy flipowanie mieszkań jest legalne?',
        a: 'Tak. Właściciel może rozporządzać mieszkaniem w granicach ustaw (art. 140 k.c.), więc kupno i szybka odsprzedaż są dozwolone. Ustawa ogranicza tylko odsprzedaż praw z umowy deweloperskiej przez osobę prywatną. Taka osoba może to zrobić co do zasady raz na 3 lata (art. 37a ust. 1 pkt 2 u.d.).',
      },
      {
        q: 'Mieszkanie z licytacji komorniczej: czy warto?',
        a: 'Opłaca się, jeżeli cena uwzględnia 2 rzeczy, których po przybiciu nie zmienisz. Z powodu wad nie unieważnisz nabycia ani nie obniżysz ceny (art. 971 k.p.c.). Hipoteki wygasają, ale służebność przesyłu i drogi koniecznej zostają (art. 1000 § 1–2 k.p.c.). Dlatego przed licytacją czytam protokół opisu i oszacowania.',
      },
      {
        q: 'Mieszkanie z licytacji z lokatorem: co dalej?',
        a: 'Dłużnika i jego domowników usunie komornik bez osobnego procesu, na podstawie prawomocnego postanowienia o przysądzeniu własności (art. 999 § 1, art. 791 § 2 k.p.c.). Dłużnika bez tytułu do innego lokalu komornik usunie co do zasady dopiero po wskazaniu przez gminę tymczasowego pomieszczenia (art. 1046 § 4 k.p.c.). Najem na czas oznaczony dłuższy niż 2 lata wypowiesz w miesiąc od uprawomocnienia przysądzenia, z rocznym terminem albo krótszym z umowy (art. 1002 k.p.c.).',
      },
      {
        q: 'Czy mieszkanie z licytacji kupię na kredyt?',
        a: 'Tak, jeżeli bank wypłaci pieniądze w terminie zapłaty ceny: 2 tygodnie od otrzymania wezwania komornika (art. 967 k.p.c.). Na Twój wniosek komornik może wydłużyć ten termin, najwyżej do miesiąca. Przysądzenie własności sąd wydaje dopiero po zapłacie ceny (art. 998 § 1 k.p.c.), więc bank płaci, zanim staniesz się właścicielem.',
      },
      {
        q: 'Sprzedaję po remoncie. Mogę wyłączyć rękojmię?',
        a: 'Tak, jeżeli sprzedajesz jako osoba prywatna (art. 558 § 1 zd. 1 k.c.). Jeżeli flipy prowadzisz jako działalność gospodarczą, jesteś przedsiębiorcą (art. 43¹ k.c.). Kupująca osoba prywatna jest wtedy konsumentem (art. 22¹ k.c.). Wobec niej rękojmię wyłączysz tylko w przypadkach z przepisów szczególnych (art. 558 § 1 zd. 2 k.c.).',
      },
    ],
    law: {
      asOf: '2026-10-10',
      items: [
        {
          ref: 'art. 22¹, art. 43¹, art. 140, art. 199, art. 535, art. 557 § 1, art. 558, art. 1027, art. 1035, art. 1036',
          act: 'Kodeks cywilny',
          tj: 'Dz.U. 2026 poz. 795',
          eli: 'DU/1964/93',
          note: 'Konsument i przedsiębiorca, rozporządzanie rzeczą wspólną i udziałem w spadku, sprzedaż i rękojmia.',
        },
        {
          ref: 'art. 791 § 2, art. 953 § 1, art. 967, art. 969 § 1, art. 971, art. 998 § 1, art. 999 § 1, art. 1000, art. 1002, art. 1046 § 4',
          act: 'Kodeks postępowania cywilnego',
          tj: 'Dz.U. 2026 poz. 468',
          eli: 'DU/1964/296',
          note: 'Licytacja komornicza: obwieszczenie, rękojmia, zapłata ceny, wady, przysądzenie własności, prawa, które zostają, najem i opróżnienie lokalu.',
        },
        {
          ref: 'art. 5 pkt 5, art. 37a, art. 40 ust. 1–1a',
          act: 'Ustawa o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym',
          tj: 'Dz.U. 2026 poz. 880',
          eli: 'DU/2021/1177',
          note: 'Limit odsprzedaży praw z umowy deweloperskiej przez osobę prywatną, oświadczenie zbywcy i forma aktu notarialnego.',
        },
        { ref: 'art. 65 ust. 1', act: 'Ustawa o księgach wieczystych i hipotece', tj: 'Dz.U. 2026 poz. 1066', eli: 'DU/1982/147', note: 'Wierzyciel hipoteczny dochodzi zapłaty z lokalu także od kolejnego nabywcy.' },
        {
          ref: 'art. 10 ust. 1 pkt 8 lit. a–b',
          act: 'Ustawa o podatku dochodowym od osób fizycznych',
          tj: 'Dz.U. 2026 poz. 592',
          eli: 'DU/1991/350',
          note: 'Sprzedaż mieszkania przed upływem 5 lat od końca roku nabycia jako źródło przychodu.',
        },
      ],
    },
    docs: [
      'Numer księgi wieczystej mieszkania albo link do ogłoszenia.',
      'Obwieszczenie o licytacji, jeśli kupujesz od komornika.',
      'Umowa deweloperska zbywcy i potwierdzenia wpłat, jeśli kupujesz „na cesję” i je masz.',
      'Postanowienie o stwierdzeniu nabycia spadku albo zarejestrowany akt poświadczenia dziedziczenia, jeśli sprzedają spadkobiercy.',
      'Twój akt zakupu i opis remontu, jeśli sprzedajesz.',
    ],
    guides: ['ile-trwa-eksmisja-lokatora', 'jawne-ceny-nieruchomosci-rejestr-cen'],
    seeAlso: [
      'obsluga-prawna-inwestorow-flipping',
      'audyt-stanu-prawnego-nieruchomosci',
      'stwierdzenie-nabycia-spadku',
    ],
    cta: {
      heading: 'Okazja nie poczeka. Ryzyko też nie.',
      lead: 'Prześlij numer księgi wieczystej, link do ogłoszenia albo obwieszczenie komornika. W 24 h roboczych napiszę, co sprawdzić przed zadatkiem albo licytacją, i prześlę ofertę z ceną i terminem; do jej akceptacji nic nie płacisz.',
    },
    updated: '2026-10-10',
  },
});
