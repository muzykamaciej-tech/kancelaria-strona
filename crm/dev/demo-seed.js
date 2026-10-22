/* demo-seed.js — fikcyjne dane do podglądu i testów (klienci i sprawy wymyśleni; zespół jak na
   stronach kancelarii, młodsi prawnicy pod nazwami zastępczymi — prawdziwe imiona można podać przy
   budowaniu prywatnego podglądu: build-demo.mjs --names plik.json). Daty liczone od „dziś”. */
(function (root) {
  const NAMES = (root && root.DEMO_NAMES) || {};
  const OWNER = 'maciej.muzyka@mecenasodnieruchomosci.pl';
  const KPK = 'katarzyna.popik@kancelariarodzinna.com';
  const KW = 'katarzyna.walaszek@kancelariarodzinna.com';
  const MB = 'maciej.bednarek@kancelariarodzinna.com';
  const JUN1 = 'mlodszy.prawnik.a@example.com';
  const JUN2 = 'mlodszy.prawnik.b@example.com';
  const JULIA = JUN1;
  const SEKRETARIAT = 'sekretariat@kancelariarodzinna.com';

  function demoGmail() {
    return [
      { id: 'th1', with: 'tomasz.zielinski@example.com', subject: 'Słupy na działce — dokumenty od operatora', snippet: 'Dzień dobry, przesyłam pismo operatora z odmową i mapę do celów projektowych…', messages: [{ from: 'Tomasz Zieliński <tomasz.zielinski@example.com>', date: '2026-10-08T09:12:00+02:00' }, { from: 'adw. dr Maciej Muzyka', date: '2026-10-08T15:40:00+02:00' }, { from: 'Tomasz Zieliński <tomasz.zielinski@example.com>', date: '2026-10-09T08:05:00+02:00' }] },
      { id: 'th2', with: 'tomasz.zielinski@example.com', subject: 'Oferta — wynagrodzenie za służebność przesyłu', snippet: 'Akceptuję ofertę, przelew zaliczki wyślę dziś.', messages: [{ from: 'adw. dr Maciej Muzyka', date: '2026-09-29T11:00:00+02:00' }, { from: 'Tomasz Zieliński <tomasz.zielinski@example.com>', date: '2026-09-30T19:22:00+02:00' }] },
      { id: 'th3', with: 'monika.nowicka@example.com', subject: 'Pozew rozwodowy — uwagi do projektu', snippet: 'Pani Mecenas, w punkcie dotyczącym kontaktów proszę dopisać weekendy co dwa tygodnie…', messages: [{ from: 'Monika Nowicka <monika.nowicka@example.com>', date: '2026-10-14T21:10:00+02:00' }] },
      { id: 'th4', with: 'pawel.wojcik@example.com', subject: 'Wstępna analiza sprawy i oferta – Kancelaria Nieruchomości', snippet: 'Dzień dobry, dziękuję za opisanie sprawy. Poniżej wstępna analiza…', messages: [{ from: 'adw. dr Maciej Muzyka', date: '2026-10-15T10:30:00+02:00' }] }
    ];
  }

  function seedDemo(api, mock, SH, todayYmd) {
    const as = (email, fn) => { mock.setUser(email); return fn(); };
    const d = (n) => SH.addDays(todayYmd, n);
    const prevWorking = (n) => { let x = todayYmd, k = 0; while (k < n) { x = SH.addDays(x, -1); if (SH.isWorkingDay(SH.parse(x))) k++; } return x; };
    const nextWorking = (n) => { let x = todayYmd, k = 0; while (k < n) { x = SH.addDays(x, 1); if (SH.isWorkingDay(SH.parse(x))) k++; } return x; };

    as(OWNER, () => api.apiSetup({
      me: { imie_nazwisko: 'Maciej Muzyka', tytul: 'adw. dr', telefon: '+48 884 784 984', stanowisko: 'Wspólnik' },
      team: [
        { email: KPK, imie_nazwisko: 'Katarzyna Popik-Konarzewska', tytul: 'adw. dr hab.', stanowisko: 'Wspólnik', rola: 'prawnik', kancelarie: 'KR' },
        { email: KW, imie_nazwisko: 'Katarzyna Walaszek', tytul: 'apl. adw.', stanowisko: 'Starszy prawnik', rola: 'prawnik', kancelarie: 'KR' },
        { email: MB, imie_nazwisko: 'Maciej Bednarek', tytul: 'adw.', stanowisko: 'Starszy prawnik', rola: 'prawnik', kancelarie: 'KR' },
        { email: JUN1, imie_nazwisko: NAMES.JUN1 || 'Młodsza Prawniczka A', tytul: '', stanowisko: 'Młodszy prawnik', rola: 'asystent', kancelarie: 'KN,KR' },
        { email: JUN2, imie_nazwisko: NAMES.JUN2 || 'Młodsza Prawniczka B', tytul: '', stanowisko: 'Młodszy prawnik', rola: 'asystent', kancelarie: 'KR' }
      ],
      dozwolone: 'example.com',
      seq: { SEQ_TECZKA: '592', SEQ_P: '27', SEQ_UMOWA_2026: '96' }
    }));

    const S = (t, rec, who) => as(who || OWNER, () => api.apiSave(t, rec));
    const KN = (r) => Object.assign({ kancelaria: 'KN' }, r), KR = (r) => Object.assign({ kancelaria: 'KR' }, r);

    /* ---- Kancelaria Nieruchomości ---- */
    const zielinski = S('klienci', KN({ nazwa: 'Tomasz Zieliński', email: 'tomasz.zielinski@example.com', telefon: '+48 600 100 200', zrodlo: 'Formularz www', opiekun: OWNER, adres: 'Świdnik', rodo: d(-24) }));
    const wisniewscy = S('klienci', KN({ nazwa: 'Anna i Piotr Wiśniewscy', email: 'wisniewscy@example.com', telefon: '+48 601 222 333', zrodlo: 'Polecenie', opiekun: OWNER, rodo: d(-10), aml: 'Zweryfikowany' }));
    const wspolnota = S('klienci', KN({ nazwa: 'Wspólnota Mieszkaniowa Ogrodowa 12', typ: 'Wspólnota / spółdzielnia', email: 'zarzad.ogrodowa12@example.com', zrodlo: 'Google / Mapy', opiekun: OWNER, identyfikator: 'NIP 946-000-00-00' }));
    const lis = S('klienci', KN({ nazwa: 'Katarzyna Lis', email: 'k.lis@example.com', telefon: '+48 602 444 555', zrodlo: 'Formularz www', opiekun: OWNER }));
    const dabrowski = S('klienci', KN({ nazwa: 'Marek Dąbrowski', email: 'm.dabrowski@example.com', telefon: '+48 603 777 888', zrodlo: 'Stały klient', opiekun: OWNER }));
    const agro = S('klienci', KN({ nazwa: 'Agro-Pol sp. z o.o.', typ: 'Spółka / firma', email: 'biuro@agropol.example.com', zrodlo: 'Współpraca (inna kancelaria)', opiekun: OWNER, identyfikator: 'KRS 0000000000' }));

    const s1 = S('sprawy', KN({ tytul: 'Służebność przesyłu i wynagrodzenie za bezumowne korzystanie (linia SN)', klient_id: zielinski.id, strona_przeciwna: 'Energetyka Wschód S.A.', kategoria: 'Przesył i bezumowne korzystanie', rodzaj: 'Sądowa – cywilna', etap: 'Pismo / pozew / skarga złożone', nastepny_krok: 'Odpowiedź na odpowiedź na wniosek; wniosek o biegłego', prowadzacy: OWNER, zespol: JULIA, organ: 'Sąd Rejonowy Lublin-Wschód', sygn_akt: 'I Ns 412/26', wps: '86000', wyn_model: 'Ryczałt + success fee', wynagrodzenie: '6000', pelnomocnictwo: d(-21), data_otwarcia: d(-22) }));
    const s2 = S('sprawy', KN({ tytul: 'Audyt stanu prawnego działki przed zakupem (Konopnica)', klient_id: wisniewscy.id, kategoria: 'Sprawdzenie przed zakupem (audyt)', rodzaj: 'Audyt', etap: 'Analiza w toku', nastepny_krok: 'Kwerenda w starostwie: mapa ewidencyjna, wypis z MPZP', prowadzacy: OWNER, wyn_model: 'Ryczałt', wynagrodzenie: '2400', data_otwarcia: d(-6) }));
    const s3 = S('sprawy', KN({ tytul: 'Wady części wspólnych budynku — roszczenia wobec dewelopera', klient_id: wspolnota.id, strona_przeciwna: 'Budomex Development sp. z o.o.', kategoria: 'Spory z deweloperem', rodzaj: 'Umowa / negocjacje', etap: 'Wezwanie wysłane', nastepny_krok: 'Czekamy na odpowiedź dewelopera do ' + d(9), prowadzacy: OWNER, wyn_model: 'Etapowe', wynagrodzenie: '4500', data_otwarcia: d(-40) }));
    const s4 = S('sprawy', KN({ tytul: 'Odwołanie od odmowy warunków zabudowy', klient_id: lis.id, strona_przeciwna: 'Wójt Gminy (organ I instancji)', kategoria: 'Warunki zabudowy i planowanie', rodzaj: 'Administracyjna', etap: 'Oczekiwanie na orzeczenie / decyzję', prowadzacy: OWNER, organ: 'SKO w Lublinie', wyn_model: 'Ryczałt', wynagrodzenie: '1800', data_otwarcia: d(-55) }));
    const s5 = S('sprawy', KN({ numer: 'P', tytul: 'Eksmisja najemcy lokalu użytkowego', klient_id: dabrowski.id, strona_przeciwna: 'Studio Forma s.c.', kategoria: 'Najem i eksmisja', rodzaj: 'Sądowa – cywilna', etap: 'Projekt pisma / wezwania', prowadzacy: OWNER, wyn_model: 'Godzinowe', stawka: '450', data_otwarcia: d(-70) }));
    const s6 = S('sprawy', KN({ tytul: 'Umowa dzierżawy gruntu pod farmę PV — negocjacje', klient_id: agro.id, strona_przeciwna: 'Solar Invest PV 7 sp. z o.o.', kategoria: 'Grunty rolne i OZE', rodzaj: 'Umowa / negocjacje', status: 'Zakończona', etap: 'Zakończona', prowadzacy: OWNER, wyn_model: 'Ryczałt', wynagrodzenie: '5000', data_otwarcia: d(-120), data_zamkniecia: d(-30) }));

    /* Zapytania KN (formularz strony, model 24 h robocze) */
    S('zapytania', KN({ nazwa: 'Robert Mazur', data_wplywu: prevWorking(2) + 'T10:05', kanal: 'Formularz www', email: 'r.mazur@example.com', telefon: '+48 604 000 111', kontakt: 'Telefon', pilne: 'tak', kategoria: 'Sprawdzenie przed zakupem (audyt)', opis: 'Za tydzień podpisuję umowę przedwstępną na działkę budowlaną. W KW jest wpisana hipoteka i służebność drogi. Czy mogę bezpiecznie wpłacić zadatek 50 tys. zł?', kw: 'LU1I/00000000/0', opiekun: OWNER, strona_www: 'Audyt stanu prawnego nieruchomości · /uslugi/sprawdzenie-przed-zakupem/audyt-stanu-prawnego-nieruchomosci' }));
    S('zapytania', KN({ nazwa: 'Joanna Kamińska', data_wplywu: prevWorking(1) + 'T16:40', kanal: 'Formularz www', email: 'joanna.kaminska@example.com', kategoria: 'Przesył i bezumowne korzystanie', opis: 'Przez działkę rolną przebiega gazociąg wysokiego ciśnienia, nikt nie płacił za to wynagrodzenia. Działkę kupiłam w 2015 r. Czego mogę żądać?', opiekun: OWNER, status: 'Wstępna analiza', analiza: 'Do sprawdzenia: data budowy gazociągu (zasiedzenie służebności przez operatora), decyzje z art. 35 ustawy o gospodarce terenami. Możliwe roszczenie o ustanowienie służebności i wynagrodzenie za 10 lat wstecz.', strona_www: 'Blog: Wynagrodzenie za służebność przesyłu' }));
    S('zapytania', KN({ nazwa: 'Ewa Szymańska', data_wplywu: todayYmd + 'T08:15', kanal: 'Formularz www', email: 'ewa.szymanska@example.com', kategoria: 'Warunki zabudowy i planowanie', opis: 'Gmina uchwaliła plan ogólny, a mój wniosek o WZ złożony w czerwcu jeszcze nie jest rozpatrzony. Czy decyzja będzie ważna?', opiekun: OWNER }));
    S('zapytania', KN({ nazwa: 'Paweł Wójcik', data_wplywu: prevWorking(6) + 'T12:00', kanal: 'Formularz www', email: 'pawel.wojcik@example.com', kategoria: 'Droga konieczna i służebności', opis: 'Sąsiad zamknął przejazd, z którego korzystamy od 30 lat. Działka nie ma innego dostępu do drogi publicznej.', opiekun: OWNER, konflikt: 'Brak konfliktu', analiza: 'Wniosek o ustanowienie drogi koniecznej albo stwierdzenie zasiedzenia służebności; najpierw wezwanie i propozycja ugody.', oferta_kwota: '3500', oferta_model: 'Ryczałt', oferta_termin: 'wniosek w 10 dni roboczych od wpłaty', status: 'Oferta wysłana' }));
    as(OWNER, () => { const r = api.bootstrap().data.zapytania.find((z) => z.nazwa === 'Paweł Wójcik'); api.apiSave('zapytania', { kancelaria: 'KN', id: r.id, odpowiedz: prevWorking(5) + 'T10:30', przypomnienie: d(-1) }); });
    S('zapytania', KN({ nazwa: 'Magdalena Krawczyk', data_wplywu: prevWorking(4) + 'T09:20', kanal: 'E-mail', email: 'm.krawczyk@example.com', kategoria: 'Najem i eksmisja', opis: 'Najemca nie płaci od 4 miesięcy, umowa najmu okazjonalnego z oświadczeniem o poddaniu się egzekucji.', opiekun: OWNER, konflikt: 'Brak konfliktu', oferta_kwota: '1500', oferta_model: 'Ryczałt', status: 'Zlecenie warunkowe', odpowiedz: prevWorking(3) + 'T14:00', przypomnienie: d(3) }));
    S('zapytania', KN({ nazwa: 'Tomasz Zieliński', data_wplywu: d(-25) + 'T21:14', kanal: 'Formularz www', email: 'tomasz.zielinski@example.com', kategoria: 'Przesył i bezumowne korzystanie', opis: 'Linia średniego napięcia i dwa słupy na działce od lat 70., operator odmawia zapłaty.', opiekun: OWNER, konflikt: 'Brak konfliktu', oferta_kwota: '6000', oferta_model: 'Ryczałt + success fee', odpowiedz: d(-24) + 'T11:00', status: 'Przyjęte', klient_id: zielinski.id, sprawa_id: s1.id }));
    S('zapytania', KN({ nazwa: 'Anna Wiśniewska', data_wplywu: d(-8) + 'T07:50', kanal: 'Polecenie', email: 'wisniewscy@example.com', kategoria: 'Sprawdzenie przed zakupem (audyt)', opis: 'Kupujemy działkę w Konopnicy, prosimy o sprawdzenie przed umową przedwstępną.', opiekun: OWNER, konflikt: 'Brak konfliktu', oferta_kwota: '2400', oferta_model: 'Ryczałt', odpowiedz: d(-8) + 'T15:30', status: 'Przyjęte', klient_id: wisniewscy.id, sprawa_id: s2.id }));
    S('zapytania', KN({ nazwa: 'Adam Kozłowski', data_wplywu: d(-25) + 'T11:00', kanal: 'Formularz www', email: 'a.kozlowski@example.com', kategoria: 'Inna sprawa', opis: 'Spór o granicę działki z sąsiadem.', opiekun: OWNER, status: 'Bez odpowiedzi', odpowiedz: d(-24) + 'T09:00', powod: 'brak reakcji na ofertę po przypomnieniu' }));

    /* ---- Kancelaria Rodzinna ---- */
    const nowicka = S('klienci', KR({ nazwa: 'Monika Nowicka', email: 'monika.nowicka@example.com', telefon: '+48 605 123 456', zrodlo: 'Polecenie', opiekun: KPK, rodo: d(-30) }), KPK);
    const adamczyk = S('klienci', KR({ nazwa: 'Krzysztof Adamczyk', email: 'k.adamczyk@example.com', telefon: '+48 606 234 567', zrodlo: 'Calendly', opiekun: MB }), JULIA);
    const sikora = S('klienci', KR({ nazwa: 'Barbara Sikora', telefon: '+48 607 345 678', zrodlo: 'Telefon', opiekun: KW }), JULIA);
    const jablonski = S('klienci', KR({ nazwa: 'Łukasz Jabłoński', email: 'l.jablonski@example.com', zrodlo: 'Google / Mapy', opiekun: KW }), KW);
    const gorska = S('klienci', KR({ nazwa: 'Natalia Górska', email: 'n.gorska@example.com', zrodlo: 'Polecenie', opiekun: KPK }), KPK);

    const r1 = S('sprawy', KR({ tytul: 'Rozwód z orzekaniem o winie, władza rodzicielska i kontakty', klient_id: nowicka.id, strona_przeciwna: 'Rafał Nowicki', kategoria: 'Rozwód i separacja', rodzaj: 'Sądowa – rodzinna', etap: 'Postępowanie w toku', nastepny_krok: 'Przygotować świadków na rozprawę', prowadzacy: KPK, zespol: KW, organ: 'Sąd Okręgowy w Lublinie, I Wydział Cywilny', sygn_akt: 'I RC 1187/25', wyn_model: 'Godzinowe', stawka: '450', data_otwarcia: d(-200) }), KPK);
    const r2 = S('sprawy', KR({ tytul: 'Podwyższenie alimentów na dwoje dzieci', klient_id: adamczyk.id, strona_przeciwna: 'Iwona Adamczyk', kategoria: 'Alimenty', rodzaj: 'Sądowa – rodzinna', etap: 'Pismo / pozew / skarga złożone', prowadzacy: MB, organ: 'Sąd Rejonowy Lublin-Zachód, III Wydział Rodzinny', sygn_akt: 'III RC 845/26', wyn_model: 'Pakiet godzin', stawka: '450', data_otwarcia: d(-35) }), JULIA);
    const r3 = S('sprawy', KR({ tytul: 'Podział majątku wspólnego po rozwodzie (mieszkanie, kredyt CHF)', klient_id: sikora.id, strona_przeciwna: 'Jerzy Sikora', kategoria: 'Podział majątku / rozdzielność', rodzaj: 'Sądowa – rodzinna', etap: 'Kompletowanie dokumentów', prowadzacy: KW, wyn_model: 'Godzinowe', stawka: '450', data_otwarcia: d(-12) }), KW);
    const r4 = S('sprawy', KR({ tytul: 'Ustalenie kontaktów z dzieckiem', klient_id: jablonski.id, strona_przeciwna: 'Aleksandra Jabłońska', kategoria: 'Kontakty z dzieckiem', rodzaj: 'Sądowa – rodzinna', status: 'Czeka na sąd / organ', etap: 'Oczekiwanie na orzeczenie / decyzję', prowadzacy: KW, organ: 'SR Lublin-Wschód, III Wydział Rodzinny', sygn_akt: 'III Nsm 233/26', wyn_model: 'Ryczałt', wynagrodzenie: '3000', data_otwarcia: d(-90) }), KW);
    const r5 = S('sprawy', KR({ tytul: 'Oskarżyciel posiłkowy — znęcanie (art. 207 KK)', klient_id: gorska.id, strona_przeciwna: 'Damian Górski', kategoria: 'Sprawy karne i wykroczenia', rodzaj: 'Sądowa – karna', etap: 'Postępowanie w toku', prowadzacy: KPK, organ: 'SR Lublin-Zachód, IV Wydział Karny', sygn_akt: 'IV K 512/26', wyn_model: 'Godzinowe', stawka: '450', data_otwarcia: d(-60) }), KPK);

    S('zapytania', KR({ nazwa: 'Sylwia Baran', data_wplywu: todayYmd + 'T09:40', kanal: 'Telefon', telefon: '+48 608 456 789', kontakt: 'Telefon', kategoria: 'Rozwód i separacja', opis: 'Dzwoniła na sekretariat: rozwód bez orzekania o winie, małoletni syn, prosi o termin konsultacji w przyszłym tygodniu.', opiekun: KPK }), JULIA);
    S('zapytania', KR({ nazwa: 'Dariusz Czarnecki', data_wplywu: d(-2) + 'T18:20', kanal: 'Calendly', email: 'd.czarnecki@example.com', kategoria: 'Alimenty', opis: 'Rezerwacja konsultacji (Calendly): obniżenie alimentów po utracie pracy.', status: 'Konsultacja umówiona', konsultacja: nextWorking(1) + 'T15:00', opiekun: MB }), JULIA);
    S('zapytania', KR({ nazwa: 'Agnieszka Wróbel', data_wplywu: d(-8) + 'T10:00', kanal: 'Polecenie', email: 'a.wrobel@example.com', kategoria: 'Spadki i zachowek', opis: 'Po konsultacji: zachowek po ojcu, darowizna mieszkania na rzecz brata w 2019 r.', status: 'Po konsultacji', konsultacja: d(-3) + 'T11:00', opiekun: KPK, konflikt: 'Brak konfliktu', oferta_model: 'Godzinowe' }), KPK);
    S('zapytania', KR({ nazwa: 'Iwona Adamczyk', data_wplywu: d(-1) + 'T13:15', kanal: 'E-mail', email: 'iwona.adamczyk@example.com', kategoria: 'Alimenty', opis: 'Prośba o reprezentację w sprawie o alimenty na dzieci — po stronie matki.', opiekun: '' }), JULIA);

    /* ---- Terminy ---- */
    S('terminy', KN({ opis: 'Rozprawa — przesłuchanie wnioskodawcy', data: nextWorking(3), godzina: '10:30', typ: 'Rozprawa / posiedzenie', sprawa_id: s1.id, odpowiedzialny: OWNER, miejsce: 'SR Lublin-Wschód, sala 114' }));
    S('terminy', KN({ opis: 'Odpowiedź na pismo uczestnika (14 dni)', data: nextWorking(6), typ: 'Termin procesowy', sprawa_id: s1.id, odpowiedzialny: OWNER, podstawa: 'zobowiązanie sądu; doręczenie przez PI' }));
    S('terminy', KN({ opis: 'Raport z audytu do klientów', data: d(-1), typ: 'Termin wewnętrzny', sprawa_id: s2.id, odpowiedzialny: OWNER }));
    S('terminy', KN({ opis: 'Koniec terminu na odpowiedź dewelopera na wezwanie', data: d(9), typ: 'Przypomnienie', sprawa_id: s3.id, odpowiedzialny: JULIA }), JULIA);
    S('terminy', KN({ opis: 'Spotkanie z zarządem wspólnoty — oględziny', data: nextWorking(2), godzina: '17:00', typ: 'Spotkanie / konsultacja', sprawa_id: s3.id, odpowiedzialny: OWNER, miejsce: 'ul. Ogrodowa 12' }));
    S('terminy', KN({ opis: 'Wezwanie do zapłaty — termin dla najemcy', data: d(-12), typ: 'Termin wewnętrzny', sprawa_id: s5.id, odpowiedzialny: OWNER, status: 'Wykonany' }));
    S('terminy', KR({ opis: 'Rozprawa — świadkowie strony powodowej', data: nextWorking(1), godzina: '09:00', typ: 'Rozprawa / posiedzenie', sprawa_id: r1.id, odpowiedzialny: KPK, miejsce: 'SO Lublin, sala 207' }), KPK);
    S('terminy', KR({ opis: 'Apelacja od wyroku (14 dni od doręczenia z uzasadnieniem)', data: d(5), typ: 'Termin procesowy', sprawa_id: r5.id, odpowiedzialny: KPK, podstawa: 'art. 445 § 1 KPK; doręczenie ' + d(-9) }), KPK);
    S('terminy', KR({ opis: 'Uzupełnienie braków formalnych pozwu (7 dni)', data: nextWorking(2), typ: 'Termin procesowy', sprawa_id: r2.id, odpowiedzialny: MB, podstawa: 'art. 130 § 1 KPC; doręczenie ' + d(-5) }), MB);
    S('terminy', KR({ opis: 'Komplet dokumentów od klientki (akt notarialny, umowa kredytu)', data: d(-2), typ: 'Termin wewnętrzny', sprawa_id: r3.id, odpowiedzialny: KW }), KW);

    /* ---- Korespondencja ---- */
    S('korespondencja', KN({ kierunek: 'Przychodząca', data: d(-9), kontrahent: 'Sąd Rejonowy Lublin-Wschód', opis: 'Zawiadomienie o terminie rozprawy i odpis odpowiedzi uczestnika', sprawa_id: s1.id, rodzaj: 'Pismo sądu', sposob: 'Portal Informacyjny Sądów', data_doreczenia: d(-8) }), JULIA);
    S('korespondencja', KN({ kierunek: 'Wychodząca', data: d(-14), kontrahent: 'Budomex Development sp. z o.o.', opis: 'Wezwanie do usunięcia wad części wspólnych', sprawa_id: s3.id, rodzaj: 'Wezwanie', sposob: 'Poczta – polecony', nr_nadania: '00259007734500000000' }), JULIA);
    S('korespondencja', KN({ kierunek: 'Przychodząca', data: d(-20), kontrahent: 'SKO w Lublinie', opis: 'Zawiadomienie o przekazaniu odwołania', sprawa_id: s4.id, rodzaj: 'Pismo organu', sposob: 'e-Doręczenia', data_doreczenia: d(-20) }), JULIA);
    S('korespondencja', KR({ kierunek: 'Przychodząca', data: d(-6), kontrahent: 'SR Lublin-Zachód, III Wydział Rodzinny', opis: 'Wezwanie do uzupełnienia braków formalnych pozwu', sprawa_id: r2.id, rodzaj: 'Pismo sądu', sposob: 'Portal Informacyjny Sądów', data_doreczenia: d(-5) }), JULIA);
    S('korespondencja', KR({ kierunek: 'Wychodząca', data: d(-3), kontrahent: 'SO w Lublinie', opis: 'Wniosek dowodowy — przesłuchanie świadków', sprawa_id: r1.id, rodzaj: 'Pismo strony / pełnomocnika', sposob: 'Portal Informacyjny Sądów' }), KPK);

    /* ---- Czas pracy ---- */
    [[r1, KPK, 'Analiza akt i notatka do wniosku dowodowego', 2.5, -4], [r1, KW, 'Projekt wniosku dowodowego', 1.5, -3], [r1, KPK, 'Spotkanie z klientką — przygotowanie do rozprawy', 1, -1],
      [r2, MB, 'Projekt pozwu o podwyższenie alimentów', 3, -20], [r2, MB, 'Uzupełnienie braków — zestawienie kosztów utrzymania', 1, -1], [r3, KW, 'Analiza umowy kredytu i aktu notarialnego', 2, -6],
      [r5, KPK, 'Udział w rozprawie', 3, -9], [r4, KW, 'Pismo procesowe — stanowisko w sprawie kontaktów', 2.5, -15]]
      .forEach(([s, who, opis, h, off]) => S('czynnosci', KR({ sprawa_id: s.id, osoba: who, opis, czas: String(h), data: d(off), rozliczone: off < -14 ? 'tak' : 'nie' }), who));
    [[s5, 'Analiza umowy najmu i historii płatności', 1.5, -60], [s5, 'Projekt wezwania do opróżnienia lokalu', 1, -16], [s1, 'Projekt wniosku o ustanowienie służebności przesyłu', 4, -20]]
      .forEach(([s, opis, h, off]) => S('czynnosci', KN({ sprawa_id: s.id, osoba: OWNER, opis, czas: String(h), data: d(off), rozliczone: s === s5 ? 'nie' : 'nie do rozliczenia' })));

    /* ---- Umowy i rozliczenia ---- */
    S('umowy', KN({ data_zawarcia: d(-22), klient_id: zielinski.id, sprawa_id: s1.id, przedmiot: 'Służebność przesyłu — wniosek i reprezentacja w I instancji', model: 'Ryczałt + success fee', kwota: '6000', rozliczone: 'nie' }), JULIA);
    S('umowy', KR({ data_zawarcia: d(-35), klient_id: adamczyk.id, sprawa_id: r2.id, przedmiot: 'Podwyższenie alimentów — I instancja', model: 'Pakiet godzin', godziny: '10', kwota: '4500', rozliczone: 'tak' }), JULIA);
    S('umowy', KR({ data_zawarcia: d(-12), klient_id: sikora.id, sprawa_id: r3.id, przedmiot: 'Podział majątku — etap przedsądowy', model: 'Godzinowe', rozliczone: 'nie' }), JULIA);
    S('umowy', KN({ data_zawarcia: d(-6), klient_id: wisniewscy.id, sprawa_id: s2.id, przedmiot: 'Audyt stanu prawnego nieruchomości', model: 'Ryczałt', kwota: '2400', rozliczone: 'termin' }), JULIA);
    S('rozliczenia', KN({ typ: 'Zaliczka', kwota: '3000', data: d(-21), sprawa_id: s1.id, status: 'Opłacona', numer: '14/09/2026' }));
    S('rozliczenia', KN({ typ: 'Faktura', kwota: '2952', data: d(-18), sprawa_id: s3.id, status: 'Wystawiona', numer: '3/10/2026', termin_platnosci: d(-4) }));
    S('rozliczenia', KN({ typ: 'Faktura', kwota: '2400', data: todayYmd, sprawa_id: s2.id, status: 'Do wystawienia', notatki: 'po przekazaniu raportu' }));
    S('rozliczenia', KR({ typ: 'Zaliczka', kwota: '4500', data: d(-34), sprawa_id: r2.id, status: 'Opłacona' }), JULIA);
    S('rozliczenia', KR({ typ: 'Koszty (opłata sądowa, skarbowa)', kwota: '17', data: d(-34), sprawa_id: r2.id, status: 'Opłacona', notatki: 'opłata skarbowa od pełnomocnictwa' }), JULIA);

    /* ---- Zadania i delegowanie ---- */
    const T = (rec, who) => S('zadania', rec, who);
    const A = (firm, id, action, p, who) => as(who, () => api.apiTask(firm, id, action, p || {}));
    const t1 = T(KN({ tytul: 'Projekt wezwania do opróżnienia lokalu', przypisane: JUN1, termin: nextWorking(2), sprawa_id: s5.id, sprawdzenie: 'tak', opis: '1. Sprawdzić daty z umowy najmu\n2. Wezwanie z terminem 14 dni\n3. Do mojego sprawdzenia przed wysyłką' }));
    A('KN', t1.id, 'przyjmij', {}, JUN1);
    A('KN', t1.id, 'komentarz', { komentarz: 'Czy dołączyć zestawienie zaległości z ostatnich 4 miesięcy?' }, JUN1);
    T(KN({ tytul: 'Kwerenda w starostwie: mapa ewidencyjna i wypis z MPZP', przypisane: JUN1, termin: d(-1), sprawa_id: s2.id }));
    T(KN({ tytul: 'Przejrzeć i wysłać draft oferty (droga konieczna)', przypisane: OWNER, termin: todayYmd, pilne: 'tak' }));
    T(KN({ tytul: 'Podpisać pełnomocnictwo i substytucję', przypisane: OWNER, termin: nextWorking(1), sprawa_id: s1.id }), JUN1);
    const t5 = T(KN({ tytul: 'Odpis z księgi wieczystej i mapa działki', przypisane: JUN1, termin: d(-3), sprawa_id: s2.id }));
    A('KN', t5.id, 'zrobione', {}, JUN1);
    const t6 = T(KR({ tytul: 'Wniosek dowodowy — świadkowie (projekt)', przypisane: JUN2, termin: nextWorking(1), sprawa_id: r1.id, sprawdzenie: 'tak' }), KPK);
    A('KR', t6.id, 'przyjmij', {}, JUN2);
    A('KR', t6.id, 'zrobione', { komentarz: 'Projekt w folderze sprawy, dwie wersje uzasadnienia do wyboru.' }, JUN2);
    const t7 = T(KR({ tytul: 'Przygotować świadków do rozprawy', przypisane: KW, termin: todayYmd, sprawa_id: r1.id }), KPK);
    A('KR', t7.id, 'przyjmij', {}, KW);
    T(KR({ tytul: 'Faktura za dojazd do sądu', przypisane: OWNER, termin: nextWorking(3) }), KW);
    const apel = as(KPK, () => api.bootstrap()).data.terminy.find((x) => x.sprawa_id === r5.id);
    T(KR({ tytul: 'Projekt apelacji', przypisane: JUN2, termin: SH.addWorkingDays(apel.data, -3), sprawa_id: r5.id, termin_id: apel.id, sprawdzenie: 'tak' }), KPK);
    const t9 = T(KR({ tytul: 'Zarejestrować korespondencję z Portalu Informacyjnego', przypisane: JUN2, termin: d(-2) }), KW);
    A('KR', t9.id, 'przyjmij', {}, JUN2);
    const braki = as(MB, () => api.bootstrap()).data.terminy.find((x) => x.sprawa_id === r2.id);
    T(KR({ tytul: 'Zestawienie kosztów utrzymania do uzupełnienia braków', przypisane: MB, termin: SH.addWorkingDays(braki.data, -1), sprawa_id: r2.id, termin_id: braki.id }), MB);

    mock.setUser(OWNER);
  }

  /* Kalendarz sekretariatu do podglądu importu: wpisy jak w praktyce zespołu (07:00–07:00,
     „(zrobione)” na początku, duplikat, wpis odwołany, wpis bez prefiksu). Nazwiska fikcyjne. */
  function demoCalendars(SH, todayYmd) {
    const at7 = (ymd) => { const t = SH.parse(ymd) + 7 * 3600000; const off = SH.warsawWall(t - 3600000) - (t - 3600000); return new Date(t - off).toISOString(); };
    const ev = (id, title, n, hours, allDay) => {
      const day = SH.addDays(todayYmd, n);
      const start = allDay ? day + 'T00:00:00' : at7(day);
      return { id: 'cal-' + id + '@google.com', title, allDay: !!allDay, start, end: new Date(new Date(start).getTime() + (hours || 24) * 3600000).toISOString() };
    };
    return {
      [SEKRETARIAT]: { name: 'Sekretariat KR', owner: SEKRETARIAT, readers: [OWNER, KPK], events: [
        ev(1, '(zrobione) TERMIN - Nowicka wniosek o uzasadnienie', -40), ev(2, 'TERMIN - Nowicka wniosek o uzasadnienie', -40),
        ev(3, '(zrobione)TERMIN - Krzysztof Adamczyk odpowiedź na zażalenie', -30), ev(4, 'TERMIN - Sikora uzupełnienie kosztów', -12),
        ev(5, 'TERMIN - Monika Nowicka - stanowisko w sprawie kontaktów', 4), ev(6, 'TERMIN - wniosek o uzasadnienie Jabłoński kontakty', 6),
        ev(7, 'TERMIN - Górska zażalenie na postanowienie o zabezpieczeniu', 9, 24, true), ev(8, 'TERMIN - Nowak EPU', 3),
        ev(9, 'Adamczyk REPLIKA', 8), ev(10, '(ODWOŁANA) TERMIN - Sikora wnioski dowodowe', 2), ev(11, 'Nowicka - konsultacja', 1, 1)
      ] }
    };
  }

  const out = { seedDemo, demoGmail, demoCalendars, DEMO_USERS: { OWNER, JULIA, JUN1, JUN2, KW, KPK, MB, SEKRETARIAT } };
  if (typeof module !== 'undefined' && module.exports) module.exports = out;
  else Object.assign(root, out);
})(this);
