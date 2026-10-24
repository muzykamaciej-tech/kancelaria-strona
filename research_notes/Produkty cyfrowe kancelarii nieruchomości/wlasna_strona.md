# Własna strona kancelarii (mecenasodnieruchomosci.pl): usługi, treści i architektura jako punkt wyjścia do sklepu z produktami cyfrowymi

Stan na 24.10.2026. Źródła: lokalne repozytorium `/home/user/kancelaria-strona` (gałąź `claude/blissful-johnson-s0ikeb`, HEAD `66d4464` z 24.10.2026; lokalny `origin/main` = `c3736f4` z 23.10.2026, gałąź jest 19 commitów przed nim) oraz strona produkcyjna https://www.mecenasodnieruchomosci.pl (adres bez `www` daje 308 na `www`). Odwołania do plików mają postać `plik:linia` (ścieżki względem katalogu repozytorium). Dane z plików odczytałem, uruchamiając pliki danych w piaskownicy Node (bez budowania i bez zmian w repo). Nie przepisuję danych osobowych z opinii ani przykładów.

## 1. Bloki usług i poszczególne usługi: nazwa, adres, klient docelowy, problem

### Takeaway
Strona ma 11 bloków (obszarów) i 70 usług. Każda usługa ma własny adres `/uslugi/<blok>/<usługa>` i pełną treść: sytuacje klienta, listę dokumentów, kroki, FAQ i podstawę prawną z datą stanu prawnego. 54 usługi są dla osób prywatnych (kupujący, sprzedający, właściciele działek, wynajmujący, najemcy, spadkobiercy, rolnicy, nabywcy od dewelopera). Blok 10 to 16 segmentów B2B obsługiwanych stale, w abonamencie. Ta ustrukturyzowana baza wiedzy to gotowy surowiec na checklisty i poradniki.

### Cited Findings
- `SERVICE_BLOCKS` definiuje 11 bloków, a każdy blok zawiera listę usług ze `slug`, `title` i `desc`. Komentarz w pliku mówi: „No prices anywhere — every path leads to the free-analysis form” — `services-data.jsx:1-5`, `services-data.jsx:5-175`.
- Licznik `TOTAL_SERVICES` sumuje usługi wszystkich bloków. Według moich wyliczeń to 4+6+4+6+3+5+6+6+6+16+8 = 70 — `services-data.jsx:210`.
- Strona „Usługi” wyróżnia 12 usług (`FEATURED_SLUGS`): audyt stanu prawnego, sprawdzenie umowy deweloperskiej, WZ, plan ogólny, służebność przesyłu, rękojmia, bezpieczny najem, negocjacje, pozwolenie na budowę, nieruchomości rolne, flip i obsługa deweloperów — `services-data.jsx:178-191`.
- Każda z 70 usług ma wpis w `SERVICE_CONTENT` z polami: `h1Full`, `metaDesc`, `subtitle`, `short` (blok „W skrócie” z faktami), `intro`, `when`/`whenHeading` („Czy to Twoja sytuacja”), `steps`, `faq`, `law` (podstawa prawna z `asOf`), `docs` (lista dokumentów), `guides` (powiązane wpisy), `seeAlso`, `cta`, `updated`. 35 usług ma dodatkowe `lists` (porównania i tabele), a dwie mają `levels` (trzy poziomy zakresu). Wynik inspekcji danych: content files `services-content.jsx` (np. `services-content.jsx:11` audyt), `services-b2b.jsx`, `services-lite-fill.jsx`, `services-flip.jsx`. Żadna usługa nie jest bez treści.
- Dwie usługi opisują trzy poziomy zakresu. Audyt: „Poziom 1 — Audyt podstawowy / Poziom 2 — Audyt pełny / Poziom 3 — Audyt pełny + negocjacje”. Umowa deweloperska: „Analiza podstawowa / pełna / pełna + negocjacje”. Kwotę podaje oferta — `services-content.jsx:52` (levels audytu), `services-content.jsx:254` (levels umowy deweloperskiej).
- Każdy z 11 bloków ma stronę filaru (`BLOCK_CONTENT`) z H1, wstępem, FAQ, podstawą prawną i `updated: 2026-10-10` — `pillars-content.jsx:5-1271`, `services-content.jsx:7184-7185`.
- W nawigacji są pozycje: „Usługi prawne”, „Dla firm” (prowadzi do bloku 10), „Skarbnica wiedzy” (blog), „FAQ” i „Kontakt” — `data.jsx:3-8`.
- Strona produkcyjna ma 81 adresów `/uslugi/...` (11 filarów i 70 usług) w https://www.mecenasodnieruchomosci.pl/sitemap.xml. Lista ścieżek z sitemap produkcji jest identyczna z `dist/sitemap.xml` w repo (porównanie `diff` 24.10.2026).

#### Tabela usług (klienta docelowego klasyfikuję na podstawie nagłówka „Czy to Twoja sytuacja” (`whenHeading`) i opisu `desc`)

Adres każdej usługi to `https://www.mecenasodnieruchomosci.pl/uslugi/<blok>/<slug>`.

**Blok 1. Sprawdzenie nieruchomości przed zakupem** (`/uslugi/sprawdzenie-przed-zakupem`, `services-data.jsx:6-18`, filar `pillars-content.jsx:5`)

| Usługa | slug | Klient | Problem (whenHeading) | Treść |
|---|---|---|---|---|
| Audyt stanu prawnego nieruchomości | audyt-stanu-prawnego-nieruchomosci | kupujący działkę, dom, mieszkanie | „Kupujesz i boisz się, że z działką albo mieszkaniem coś jest nie tak” | `services-content.jsx:11` |
| Sprawdzenie umowy deweloperskiej | sprawdzenie-umowy-deweloperskiej | nabywca od dewelopera (konsument) | „Deweloper przysłał umowę, a Ty masz wątpliwości przed podpisem” | `services-content.jsx:200` |
| Umowa przedwstępna | analiza-umowy-przedwstepnej | kupujący i sprzedający | „Masz przelać zadatek albo druga strona się wycofuje” | `services-content.jsx:700` |
| Sprawdzenie umowy rezerwacyjnej | sprawdzenie-umowy-rezerwacyjnej | nabywca od dewelopera | „Masz wpłacić opłatę rezerwacyjną albo deweloper nie chce jej oddać” | `services-content.jsx:862` |

**Blok 2. Obsługa transakcji i umowy** (`/uslugi/transakcje-umowy`, `services-data.jsx:19-33`, filar `pillars-content.jsx:157`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Kompleksowa obsługa zakupu | obsluga-zakupu | kupujący | „Kupujesz mieszkanie albo działkę i boisz się, że coś przeoczysz” | `services-content.jsx:984` |
| Kompleksowa obsługa sprzedaży | obsluga-sprzedazy | sprzedający | „Sprzedaję mieszkanie: kiedy warto mieć prawnika po swojej stronie” | `services-content.jsx:1139` |
| Negocjacje na rynku nieruchomości | negocjacje-nieruchomosci | kupujący, najemca | „Chcesz zbić cenę albo zmienić umowę, zanim cokolwiek podpiszesz” | `services-lite-fill.jsx:276` |
| Dożywocie, renta, odwrócona hipoteka | dozywocie-renta | seniorzy i ich rodziny | „Chcesz przepisać mieszkanie za opiekę albo umowa przestała działać” | `services-content.jsx:1274` |
| Darowizna nieruchomości i jej odwołanie | darowizna-nieruchomosci | rodziny (darczyńca, obdarowany) | „Przepisujesz mieszkanie na dziecko albo żałujesz darowizny” | `services-content.jsx:1417` |
| Flip mieszkania | flip-mieszkania | inwestor prywatny | „Mieszkanie po okazyjnej cenie, ale z historią” | `services-flip.jsx:4` |

**Blok 3. Warunki zabudowy i planowanie przestrzenne** (`/uslugi/warunki-zabudowy-planowanie`, `services-data.jsx:34-46`, filar `pillars-content.jsx:283`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Warunki zabudowy (WZ) | warunki-zabudowy | właściciel albo nabywca działki, inwestor | „Gmina odmówiła, wniosek leży w urzędzie albo sąsiad chce budować” | `services-content.jsx:532` |
| Plan ogólny gminy | plan-ogolny | właściciel działki | „Działka w strefie otwartej, projekt w konsultacjach albo plan już uchwalony” | `services-content.jsx:1554` |
| Skarga na plan miejscowy (MPZP) | skarga-na-plan-miejscowy | właściciel działki | „Gmina dopiero pisze plan albo już go uchwaliła i blokuje Ci budowę” | `services-content.jsx:1726` |
| Opłaty i odszkodowania planistyczne | oplaty-odszkodowania-planistyczne | właściciel działki | „Gmina żąda opłaty albo plan zablokował Ci działkę” | `services-content.jsx:1908` |

**Blok 4. Proces budowlany i samowole** (`/uslugi/proces-budowlany`, `services-data.jsx:47-61`, filar `pillars-content.jsx:419`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Pozwolenie na budowę | pozwolenie-na-budowe | inwestor indywidualny, sąsiad | „Termin z urzędu już biegnie, WZ wygasa albo sąsiad buduje przy granicy” | `services-content.jsx:2067` |
| Zgłoszenie budowy i robót | zgloszenie-budowy | inwestor indywidualny (dom do 70 m²) | „Planujesz mały dom, starosta przysłał pismo albo budowa wciąż nie ruszyła” | `services-lite-fill.jsx:411` |
| Legalizacja samowoli | legalizacja-samowoli | właściciel budynku | „Pismo z nadzoru, stary dom bez pozwolenia albo dobudówka przy sprzedaży” | `services-content.jsx:2210` |
| Umowa o roboty budowlane | umowa-o-roboty-budowlane | inwestor albo wykonawca | „Podpisujesz umowę o budowę lub remont jako inwestor albo wykonawca” | `services-content.jsx:2507` |
| Spory z wykonawcą | spory-z-wykonawca | inwestor | „Ekipa zniknęła, termin minął albo robota jest do poprawki” | `services-content.jsx:2355` |
| Reprezentacja przed PINB | nadzor-budowlany-pinb | właściciel, inwestor | „Pismo z PINB, wstrzymane roboty albo skarga sąsiada” | `services-content.jsx:2633` |

**Blok 5. Księgi wieczyste, stan prawny, użytkowanie wieczyste** (`/uslugi/ksiegi-wieczyste-stan-prawny`, `services-data.jsx:62-73`, filar `pillars-content.jsx:537`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Zasiedzenie nieruchomości | zasiedzenie-nieruchomosci | posiadacz albo właściciel | „Używasz cudzej działki od lat albo ktoś używa Twojej” | `services-content.jsx:2792` |
| Uregulowanie stanu prawnego | uregulowanie-stanu-prawnego | właściciel | „Kiedy papiery do domu albo działki się nie zgadzają” | `services-content.jsx:2931` |
| Użytkowanie wieczyste | uzytkowanie-wieczyste | użytkownik wieczysty | „Pismo z gminy, zaświadczenie o opłacie albo plan wykupu gruntu” | `services-content.jsx:3099` |

**Blok 6. Współwłasność i sprawy działowe** (`/uslugi/wspolwlasnosc-podzialy`, `services-data.jsx:74-87`, filar `pillars-content.jsx:667`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Zniesienie współwłasności | zniesienie-wspolwlasnosci | współwłaściciel | „Brat nie chce sprzedać, a Ty chcesz odzyskać swoje pieniądze” | `services-content.jsx:3231` |
| Dział spadku z nieruchomością | dzial-spadku | spadkobierca | „Dom po rodzicach należy do rodzeństwa i trzeba go podzielić” | `services-content.jsx:3395` |
| Zachowek | zachowek | uprawniony albo zobowiązany | „Pominięto Cię w testamencie albo rodzeństwo dostało mieszkanie za życia rodzica” | `services-content.jsx:3555` |
| Stwierdzenie nabycia spadku | stwierdzenie-nabycia-spadku | spadkobierca | „Zmarł ktoś bliski i potrzebujesz »papieru na spadek«” | `services-content.jsx:3703` |
| Podział majątku po rozwodzie | podzial-majatku-po-rozwodzie | rozwiedziony małżonek | „Rozwód za Tobą, a wspólne mieszkanie i kredyt zostały” | `services-content.jsx:3861` |

**Blok 7. Najem nieruchomości** (`/uslugi/najem`, `services-data.jsx:88-102`, filar `pillars-content.jsx:792`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Bezpieczny najem dla wynajmującego | bezpieczny-najem | wynajmujący (osoba prywatna) | „Wynajmujesz mieszkanie i boisz się lokatora, który nie płaci” | `services-content.jsx:4003` |
| Analiza umowy najmu (dla najemcy) | analiza-umowy-najmu | najemca | „Dostałeś projekt do podpisu i coś Cię w nim niepokoi” | `services-content.jsx:4154` |
| Eksmisja | eksmisja | wynajmujący, właściciel | „Lokator nie płaci, nie wychodzi albo czekasz na gminę” | `services-content.jsx:4317` |
| Windykacja czynszu | windykacja-czynszu | wynajmujący | „Najemca nie płaci, zniknął z długiem albo zbliża się koniec roku” | `services-content.jsx:4468` |
| Kaucja: rozliczenie i spory | kaucja-najem | wynajmujący i najemca | „Pieniądze nie wróciły, wróciły okrojone albo nie wiesz, ile potrącić” | `services-content.jsx:4618` |
| Stała obsługa wynajmujących (abonament) | obsluga-wynajmujacych | właściciel kilku lokali | „Kilka mieszkań, różne umowy i lokator, który nie płaci” | `services-content.jsx:4742` |

**Blok 8. Służebności i odszkodowania** (`/uslugi/sluzebnosci-odszkodowania`, `services-data.jsx:103-117`, filar `pillars-content.jsx:920`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Odszkodowanie za słupy i służebność przesyłu | odszkodowanie-sluzebnosc-przesylu | właściciel działki z siecią | „Słupy, linia albo gazociąg na działce: propozycja PGE, zarzut zasiedzenia, budowa” | `services-content.jsx:393` |
| Bezumowne korzystanie z gruntu | bezumowne-korzystanie | właściciel | „Sąsiad, firma albo gmina korzysta z Twojej działki bez zgody” | `services-content.jsx:5928` |
| Droga konieczna | droga-konieczna | właściciel działki bez dojazdu albo sąsiad | „Brak dojazdu, brama na przejeździe albo sąsiad żąda drogi przez Twój grunt” | `services-content.jsx:6071` |
| Wywłaszczenie i drogi (ZRID) | odszkodowanie-wywlaszczenie | właściciel wywłaszczany | „Droga przez Twoją działkę: kiedy sprawdzić kwotę i terminy” | `services-content.jsx:6209` |
| Wykup działki resztkowej | wykup-dzialki-resztkowej | właściciel resztówki | „Po budowie drogi została Ci resztka działki…” | `services-content.jsx:6365` |
| Ograniczenie korzystania (art. 124 UGN) | ograniczenie-korzystania-nieruchomosci | właściciel | „Pismo od gazowni, decyzja albo koparka na działce: kiedy działać” | `services-content.jsx:6493` |

**Blok 9. Grunty rolne i OZE** (`/uslugi/grunty-rolne-oze`, `services-data.jsx:118-132`, filar `pillars-content.jsx:1030`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Nieruchomości rolne (UKUR, KOWR) | nieruchomosci-rolne | kupujący lub sprzedający ziemię, rodziny | „Kupujesz działkę na wsi, sprzedajesz ziemię albo dostajesz ją w rodzinie” | `services-lite-fill.jsx:7` |
| Zgoda KOWR | zgoda-kowr | nabywca, który nie jest rolnikiem, i sprzedający | „Sprzedajesz albo kupujesz ziemię, a kupujący nie jest rolnikiem” | `services-content.jsx:6625` |
| Status rolnika indywidualnego | status-rolnika | nabywca ziemi | „…notariusz pyta o wykształcenie, staż i zameldowanie” | `services-content.jsx:6776` |
| Umowy dzierżawy rolnej | dzierzawa-rolna | wydzierżawiający (rolnik, właściciel) | „Dzierżawca nie płaci, chcesz sprzedać pole albo umowa była »na słowo«” | `services-content.jsx:6896` |
| Dzierżawa pod PV i wiatraki | dzierzawa-oze | właściciel gruntu | „Firma OZE chce dzierżawić Twoją ziemię” | `services-lite-fill.jsx:144` |
| Odrolnienie | odrolnienie | właściciel działki rolnej | „Chcesz przekształcić działkę rolną na budowlaną…” | `services-content.jsx:7038` |

**Blok 10. Podmioty profesjonalne (B2B, abonament)** (`/uslugi/obsluga-podmiotow-profesjonalnych`, w menu „Dla firm”, `services-data.jsx:133-157`, filar `pillars-content.jsx:1151`)

| Usługa (segment) | slug | Problem (whenHeading) | Treść |
|---|---|---|---|
| Deweloperzy | obsluga-prawna-deweloperow | „Kupujesz grunt, zmieniasz ofertę albo nabywca przysłał wezwanie” | `services-lite-fill.jsx:540` |
| Biura nieruchomości i pośrednicy | obsluga-prawna-biur-nieruchomosci | „Klient ominął biuro, podważa umowę, żąda polisy albo brakuje procedury AML” | `services-lite-fill.jsx:703` |
| Zarządcy nieruchomości | obsluga-prawna-zarzadcow | „Wezwanie o polisę, przejęcie budynku, roszczenie za zalanie” | `services-b2b.jsx:7` |
| Wspólnoty mieszkaniowe | obsluga-prawna-wspolnot | „Pozew od właściciela, dłużnik w zaliczkach, duża umowa do podpisu” | `services-lite-fill.jsx:835` |
| Spółdzielnie mieszkaniowe | obsluga-prawna-spoldzielni | „Pozew członka, zbliżające się walne, żądanie przeniesienia własności” | `services-b2b.jsx:128` |
| Fundusze / PRS | obsluga-prawna-funduszy-prs | „Kupujesz pakiet, budynek w budowie albo lokale z najemcami” | `services-b2b.jsx:915` |
| Inwestorzy i firmy flippingowe | obsluga-prawna-inwestorow-flipping | „Pieniądze inwestora, kolejna cesja, zakup przez spółkę” | `services-b2b.jsx:1026` |
| Generalni wykonawcy i firmy budowlane | obsluga-prawna-firm-budowlanych | „Inwestor nie płaci, nalicza kary albo kwestionuje roboty” | `services-b2b.jsx:257` |
| Architekci i projektanci | obsluga-prawna-architektow | „Inwestor nie płaci, buduje drugi raz, przerabia projekt…” | `services-b2b.jsx:394` |
| Geodeci | obsluga-prawna-geodetow | „Pismo ze starostwa, od zamawiającego albo od rzecznika dyscyplinarnego” | `services-b2b.jsx:523` |
| Rzeczoznawcy majątkowi | obsluga-prawna-rzeczoznawcow | „Zawiadomienie o postępowaniu zawodowym, decyzja o karze albo zarzuty do operatu” | `services-b2b.jsx:639` |
| Deweloperzy OZE | obsluga-prawna-deweloperow-oze | „Zbierasz grunty pod farmę i szykujesz projekt do finansowania” | `services-b2b.jsx:1146` |
| Operatorzy najmu, PRS, condohotele | obsluga-prawna-operatorow-najmu | „Właściciele grożą wypowiedzeniem, obłożenie spada…” | `services-b2b.jsx:1258` |
| Najemcy komercyjni i sieci | obsluga-prawna-najemcow-komercyjnych | „Nowy właściciel budynku, podwyżka czynszu albo lokalizacja, która nie zarabia” | `services-b2b.jsx:1385` |
| Przedsiębiorstwa rolne, duże areały | obsluga-prawna-przedsiebiorstw-rolnych | „Przekazujesz gospodarstwo, dokupujesz ziemię albo firma chce dzierżawić pole” | `services-b2b.jsx:1535` |
| TBS / SIM i kooperatywy | obsluga-prawna-tbs-sim-kooperatyw | „Kiedy grupa, gmina albo SIM stawia Cię przed terminem” | `services-b2b.jsx:773` |

**Blok 11. Roszczenia i spory z deweloperem** (`/uslugi/roszczenia-deweloper`, `services-data.jsx:158-174`, filar `services-content.jsx:7185`)

| Usługa | slug | Klient | Problem | Treść |
|---|---|---|---|---|
| Kary umowne za opóźnienie dewelopera | kary-za-opoznienie-dewelopera | nabywca lokalu | „Minął termin z umowy, a deweloper przesuwa akt i przysyła aneksy” | `services-content.jsx:4857` |
| Rękojmia za wady lokalu | rekojmia-wady-lokalu | nabywca lokalu | „Usterki w mieszkaniu od dewelopera: kiedy działać z rękojmi” | `services-content.jsx:5002` |
| Wady części wspólnych | wady-czesci-wspolnych | wspólnota, właściciele | „Przecieka dach, woda w garażu, deweloper odsyła do wspólnoty” | `services-content.jsx:5143` |
| Usunięcie wad z protokołu odbioru | usuniecie-wad-protokol | nabywca lokalu | „Usterki z protokołu wiszą, a deweloper zwleka” | `services-content.jsx:5272` |
| Spory o metraż | spory-o-metraz | nabywca lokalu | „Mieszkanie mniejsze, niż płaciłeś: kiedy działać” | `services-content.jsx:5447` |
| Klauzule abuzywne w umowie deweloperskiej | klauzule-abuzywne-deweloper | nabywca lokalu | „Masz projekt umowy od dewelopera albo deweloper powołuje się na paragraf” | `services-content.jsx:5577` |
| Gwarancja jakości na lokal | gwarancja-jakosci-lokal | nabywca lokalu | „Deweloper odsyła do gwarancji albo gwarant odmawia naprawy” | `services-content.jsx:5697` |
| Przejęcie roszczeń przez wspólnotę | roszczenia-wspolnota-deweloper | zarząd wspólnoty | „Zarząd chce pozwać dewelopera, ale umowy podpisywali właściciele” | `services-content.jsx:5810` |

- Na liście usług jest jedna pozycja w modelu subskrypcji dla osób prywatnych: „Stała obsługa wynajmujących (abonament): Pakiet dla właścicieli kilku lokali — bieżące wsparcie w jednej opłacie” — `services-data.jsx:100`.
- Blok 10 obiecuje firmom m.in. przegląd ich wzorów umów: „Przegląd wzorów umów — lista ryzyk i nowe brzmienie zapisów, gotowe dla kolejnego klienta” — `pillars-content.jsx:1210-1212`.
- Gminy nie są osobnym segmentem klientów. Gmina pojawia się po drugiej stronie sporów (plan, opłaty, wywłaszczenie) i w kontekście TBS/SIM/kooperatyw — `services-data.jsx:37-44,155`.

### Inferences
- Każda z 70 usług ma ustrukturyzowane pola `docs` (3–6 dokumentów), `steps` (3–6 kroków), `faq` (4–6 pytań) i `law` (akty z datą `asOf`). Daje to ok. 70 gotowych szkieletów checklist „Co przygotować” i „Jak to przebiega”. Takie checklisty mogą być darmowymi lead magnetami, bo powtarzają jawną treść strony, albo płatnymi rozszerzeniami z instrukcją i przykładami.
- Dla osób prywatnych największą masę treści mają WZ i planowanie (blok 3 plus 19 wpisów, patrz pytanie 2), służebności (blok 8 plus 11 wpisów), najem i deweloper (bloki 7 i 11). Tam najłatwiej zbudować pierwszy katalog produktów.
- Blok 10 (16 segmentów B2B) daje osobny kanał: pakiety wzorów i procedur dla firm (np. biura nieruchomości, wspólnoty, spółdzielnie). Kupujący B2B zwykle mniej kwestionują cenę, a firma i tak sprzedaje im przegląd wzorów jako usługę.

### Gaps
- W repozytorium nie ma danych o tym, które usługi generują najwięcej zapytań lub przychodu. GA4 i Search Console nie są dostępne z repo.
- Nie weryfikowałem merytorycznie (LEX/Legalis) treści usług. CLAUDE.md wymaga takiej weryfikacji przed publikacją (`CLAUDE.md:48`), a produkty z tych treści będą jej wymagały ponownie.

## 2. Blog: lista wpisów, klastry tematyczne i treści nadające się do produktyzacji

### Takeaway
Blog („Skarbnica wiedzy”) ma 44 wpisy z okresu 10.10.2025–23.10.2026. 30 z nich przeniesiono z WIX, a 14 to nowe treści w standardzie z sekcjami „Źródła”, FAQ i notą o stanie prawnym. Dominuje planowanie przestrzenne i WZ (19 wpisów, 43%), a za nim służebności przesyłu i drogowe (11). Prawie wszystkie nowe wpisy mają ponumerowane listy kroków („X kroków”), listy dokumentów albo przykładowe zapisy umowne. Starsze wpisy zawierają checklisty (najem, podział majątku, wady od dewelopera, bezpieczny właściciel) i kosztorysy.

### Cited Findings
- Blok treści wpisu ma typy `lead`, `p`, `h2`, `h3`, `ul`, `ol`, `quote`, `note`. W całym blogu to 160 list `ul`, 40 list `ol`, 260 nagłówków H2 i 25 not o stanie prawnym (zliczenie typów bloków w `blog-data*.jsx`; format opisany w `blog-data.jsx:1-3`).
- Wpisy w `blog-data.jsx` przeniesiono 1:1 z WIX. Mają pole `source` z dawnym adresem WIX — `blog-data.jsx:1-3,16`.
- Wpisy w `blog-data-7.jsx` to „seria »WZ – najczęstsze pytania« (X 2026)”. Generuje je skrypt `Design/_szablony/blog_publish.py` z pakietów md w `Marketing/Posty` — `blog-data-7.jsx:1-3`.
- CLAUDE.md: „Stare wpisy z WIX miały błędy prawne (archiwum i ocena: Dysk, `Marketing/Strona www/Archiwum WIX 2026-09-25/`)” — `CLAUDE.md:48`.
- Rozkład pól `category`: Planowanie przestrzenne 16, Warunki zabudowy 3, Służebność przesyłu 5, Służebności 5, Najem 3, Księgi wieczyste 2, Proces budowlany 2, Spory z deweloperem 2, Grunty rolne i OZE 2, Podatek od nieruchomości 1, Rynek nieruchomości 1, Odpowiedzialność właściciela 1, Podział majątku 1 (zliczenie `window.BLOG`). Interfejs grupuje je w 9 kategorii (np. „Warunki zabudowy i plan ogólny”, „Słupy, linie i rury na działce”, „Droga konieczna i służebności”, „Najem i eksmisja”) — `pages.jsx:327-338`.
- Na produkcji sitemap ma 44 adresy `/blog/<slug>` i 9 adresów kategorii — https://www.mecenasodnieruchomosci.pl/sitemap.xml (pobrane 24.10.2026). Zestaw ścieżek jest identyczny z `dist/sitemap.xml`.
- Wpisy kończą się sekcją „Co mogę dla Ciebie zrobić”. Ma ona postać listy usług i prowadzi do formularza. Przykład: wpisy z serii WZ, gdzie przed „Najczęstsze pytania” stoi `h2` „Co mogę dla Ciebie zrobić” — `blog-data-7.jsx:5-110`. Pole `related` łączy wpis z usługami, np. `related: ['warunki-zabudowy', 'plan-ogolny', 'analiza-umowy-przedwstepnej']` — `blog-data.jsx:17`.

#### Tabela wpisów (najnowsze na górze; „Produktyzacja” = elementy w treści, które można przekształcić w produkt)

| # | Data (aktualizacja) | Tytuł (skrót) | slug | Klaster | Elementy do produktyzacji | Źródło |
|---|---|---|---|---|---|---|
| 1 | 2026-10-23 | Kupno działki rolnej z warunkami zabudowy: co sprawdzić w decyzji | kupno-dzialki-rolnej-z-warunkami-zabudowy | WZ/zakup | „lista kontrolna: 9 rzeczy do sprawdzenia w decyzji przed zadatkiem, 4 poza nią i zapisy do umowy przedwstępnej” (`blog-data-7.jsx:22`); progi u.k.u.r. 0,3 ha / 1 ha | `blog-data-7.jsx:5` |
| 2 | 2026-10-23 | Jak sprawdzić, czy dostanę WZ – 4 kroki przed wnioskiem | jak-sprawdzic-czy-dostane-warunki-zabudowy | WZ | 4 kroki; wyliczenie obszaru analizowanego (front × 3, min. 50 m; przykłady 12 m → 50 m, 25 m → 75 m) | `blog-data-7.jsx:111` |
| 3 | 2026-10-23 | Droga konieczna a WZ – jaki dokument dołączyć do wniosku? | droga-konieczna-a-warunki-zabudowy | WZ/służebności | „Jak przygotować dojazd do wniosku o WZ? 5 kroków”; elementy treści służebności do aktu (trasa, szerokość) | `blog-data-7.jsx:220` |
| 4 | 2026-10-23 | WZ – jakie dokumenty dołączyć do wniosku | warunki-zabudowy-jakie-dokumenty | WZ | lista dokumentów „zawsze” i „w niektórych sprawach”; załączniki A–E; „Wniosek o WZ krok po kroku” (6); odpowiedź na wezwanie; zmiany od 1.01.2027 | `blog-data-7.jsx:323` |
| 5 | 2026-10-23 | Obszar uzupełnienia zabudowy – mapa | obszar-uzupelnienia-zabudowy-mapa | plan ogólny | gdzie szukać mapy (Rejestr Urbanistyczny, BIP), jak czytać mapę, 4 warianty przy granicy OUZ, 5 kroków | `blog-data-7.jsx:430` |
| 6 | 2026-10-23 | WZ po uchwaleniu planu ogólnego: co sprawdzi starosta | warunki-zabudowy-po-uchwaleniu-planu-ogolnego | WZ | lista kontroli starosty; „Jak wykorzystać WZ w strefie otwartej? 5 kroków” | `blog-data-7.jsx:538` |
| 7 | 2026-10-23 | WZ – koszt: kto płaci 598 zł | warunki-zabudowy-koszt | WZ | koszty (598 zł albo 0 zł opłaty skarbowej; 17 zł albo 0 zł za pełnomocnictwo; mapa), „Jak policzyć koszt swojej WZ? 4 kroki”, warianty | `blog-data-7.jsx:636` |
| 8 | 2026-10-23 | WZ – ile się czeka? Ponaglenie do SKO | warunki-zabudowy-ile-sie-czeka | WZ | terminy 90 i 21 dni; „Jak złożyć ponaglenie do SKO? 5 kroków”; kara 500 zł/dzień | `blog-data-7.jsx:736` |
| 9 | 2026-10-23 | Podział działki z WZ | podzial-dzialki-z-warunkami-zabudowy | WZ | 5 kroków podziału; przykład 1 ha (3 vs 4 działki) | `blog-data-7.jsx:842` |
| 10 | 2026-10-23 | WZ na działce rolnej: najpierw WZ czy odrolnienie? | warunki-zabudowy-na-dzialce-rolnej | WZ/rolne | 6 kroków kolejności; koszty wyłączenia (należność za 1 ha, opłata roczna 10% przez 10 lat) | `blog-data-7.jsx:941` |
| 11 | 2026-10-23 | WZ a plan ogólny: uchwalony to jeszcze nie obowiązujący | warunki-zabudowy-bez-planu-ogolnego | plan ogólny | etapy wejścia planu w życie; „Jak sprawdzić, czy plan ogólny Twojej gminy obowiązuje? 4 kroki” | `blog-data-7.jsx:1046` |
| 12 | 2026-10-23 | Czy WZ przechodzą na nowego właściciela? | czy-warunki-zabudowy-przechodza-na-nowego-wlasciciela | WZ/zakup | „Jak przenieść WZ… 5 kroków”; 4 zapisy do umowy przedwstępnej (zgoda na przeniesienie, oświadczenia sprzedającego) | `blog-data-7.jsx:1147` |
| 13 | 2026-10-06 | WZ – ile są ważne? Policz ostatni dzień | warunki-zabudowy-ile-wazne | WZ | „Jak policzyć termin ważności WZ? 3 kroki”; reguły prawomocności; „Jak nie stracić WZ” (4) | `blog-data-6.jsx:109` |
| 14 | 2026-09-26 (09-27) | Ile trwa eksmisja lokatora? Kalendarz 2026 | ile-trwa-eksmisja-lokatora | najem | kalendarz krok po kroku (6 etapów); 4 typowe błędy w pismach; 4 sposoby skrócenia | `blog-data-6.jsx:5` |
| 15 | 2026-06-15 (10-07) | WZ 2026 w Lublinie i okolicy | warunki-zabudowy-2026-lublin | WZ (lokalny) | „Daty, które warto sobie zapisać”; „Co zrobić teraz — konkretnie” (5) | `blog-data.jsx:7` |
| 16 | 2026-03-02 | WZ dla części działki | warunki-zabudowy-dla-czesci-dzialki | WZ | analiza orzecznictwa, bez list | `blog-data.jsx:70` |
| 17 | 2026-03-01 | Wydruki KW z mocą urzędową i alerty KRS 2026 | wydruki-ksiag-wieczystych-i-alerty-krs-2026 | KW | daty 31.03.2026 / 31.05.2026, instrukcja e-wydruku | `blog-data.jsx:99` |
| 18 | 2026-02-28 | Zawyżony podatek przez błąd w ewidencji | zawyzony-podatek-od-nieruchomosci-blad-w-ewidencji | podatek/ewidencja | 2 kroki (najpierw ewidencja, potem podatek) | `blog-data.jsx:143` |
| 19 | 2026-02-27 | Przebudowa czy nowy zjazd? NSA | przebudowa-czy-nowy-zjazd-nsa | budowlane | omówienie orzeczenia | `blog-data.jsx:174` |
| 20 | 2026-02-26 | Czy sąsiad może zablokować budowę? | czy-sasiad-moze-zablokowac-budowe | budowlane | omówienie | `blog-data-4.jsx:186` |
| 21 | 2026-02-24 | Jawne ceny nieruchomości: rejestr cen | jawne-ceny-nieruchomosci-rejestr-cen | rynek | zakres danych w rejestrze | `blog-data-4.jsx:152` |
| 22 | 2026-02-23 | Kara umowna za opóźnienie dewelopera – uchwała SN | kara-umowna-za-opoznienie-dewelopera-uchwala-sn | deweloper | uchwała SN III CZP 22/25 (sygnatura w nagłówku wpisu) | `blog-data-4.jsx:122` |
| 23 | 2026-02-09 (10-07) | Odszkodowanie za plan ogólny | odszkodowanie-za-plan-ogolny | plan ogólny | 2 roszczenia; 3 porady monitoringu planu | `blog-data-4.jsx:219` |
| 24 | 2026-01-30 (10-06) | WZ a plan ogólny – przepisy przejściowe | warunki-zabudowy-a-plan-ogolny-przepisy-przejsciowe | WZ | daty graniczne, 2 pułapki | `blog-data.jsx:203` |
| 25 | 2026-01-20 (10-23) | Słup, rura, kable bez umowy – bezumowne korzystanie | slup-rura-kable-na-dzialce-bez-umowy-bezumowne-korzystanie | przesył | 2 roszczenia (służebność + 6 lat wstecz) | `blog-data-4.jsx:4` |
| 26 | 2026-01-19 (10-23) | Słup energetyczny – kto płaci za przesunięcie? | slup-energetyczny-na-dzialce-przesuniecie | przesył | Q&A, 3 kroki sprawdzenia legalności słupa | `blog-data-5.jsx:280` |
| 27 | 2026-01-16 | Koszty utrzymania drogi koniecznej | koszty-utrzymania-drogi-koniecznej | służebności | elementy utrzymania; 3 pytania do umowy; podsumowanie (4) | `blog-data-5.jsx:225` |
| 28 | 2026-01-15 (10-23) | Szerokość drogi koniecznej | szerokosc-drogi-koniecznej | służebności | podsumowanie w 5 punktach (3–4 m w praktyce) | `blog-data-5.jsx:178` |
| 29 | 2026-01-14 | Wynagrodzenie za drogę konieczną | wynagrodzenie-za-sluzebnosc-drogi-koniecznej | służebności | kryteria wyceny; jednorazowo vs renta | `blog-data-5.jsx:119` |
| 30 | 2026-01-13 | Zniesienie służebności przesyłu – linia nie istnieje | zniesienie-sluzebnosci-przesylu-nieistniejaca-linia | przesył/KW | „Jak wykreślić »ducha« z KW? Krok po kroku” (3) | `blog-data-5.jsx:68` |
| 31 | 2026-01-12 | Wycena służebności przesyłu – rzeczoznawca | wycena-sluzebnosci-przesylu-rzeczoznawca | przesył | „Jak wygląda wzór na wycenę? (uproszczony schemat)” | `blog-data-5.jsx:4` |
| 32 | 2026-01-05 | Służebność przesyłu: jak obliczyć wynagrodzenie | sluzebnosc-przesylu-jak-obliczyc-wynagrodzenie | przesył | 4 czynniki kwoty; z tym wpisem łączy się kalkulator | `blog-data-4.jsx:59` |
| 33 | 2025-12-31 (10-07) | Czy plan ogólny wysadzi wniosek o WZ? | plan-ogolny-a-wniosek-o-wz-w-toku | WZ | Q&A, daty | `blog-data-3.jsx:265` |
| 34 | 2025-12-30 | Dzierżawa pod fotowoltaikę a VAT | dzierzawa-pod-fotowoltaike-a-vat | OZE | Q&A, ryzyka podatkowe | `blog-data-3.jsx:229` |
| 35 | 2025-12-22 | 5 nielegalnych sposobów na wyrzucenie lokatora | 5-nielegalnych-sposobow-na-wyrzucenie-lokatora | najem | lista 5 zakazanych metod z ryzykiem karnym | `blog-data-3.jsx:169` |
| 36 | 2025-12-19 | Ile kosztuje droga konieczna (2025) | ile-kosztuje-sluzebnosc-drogi-koniecznej | służebności | kosztorys: notariusz ok. 1 500–2 000 zł, sąd ok. 4 000–8 000 zł (dane z 2025) | `blog-data-3.jsx:106` |
| 37 | 2025-12-18 (10-07) | Farma PV na działce rolnej | farma-fotowoltaiczna-na-dzialce-rolnej | OZE | checklista w 4 punktach (klasa gleby, MPZP/WZ, sieć…) | `blog-data-3.jsx:53` |
| 38 | 2025-12-17 | Odszkodowanie od dewelopera za wady | odszkodowanie-od-dewelopera-za-wady | deweloper | „Twoja lista kontrolna – co musisz zrobić?” (3); uprawnienia z rękojmi (3) | `blog-data-3.jsx:4` |
| 39 | 2025-12-16 | Zasiedzenie służebności drogi po 30 latach | zasiedzenie-sluzebnosci-drogi-po-30-latach | służebności | 20/30 lat; warunek „trwałego urządzenia” | `blog-data-2.jsx:388` |
| 40 | 2025-12-15 (10-23) | Wyrok TK: zasiedzenie służebności przesyłu | wyrok-tk-zasiedzenie-sluzebnosci-przesylu | przesył | kogo dotyczy (3), scenariusze przed i po | `blog-data-2.jsx:336` |
| 41 | 2025-10-28 (10-06) | Jak przygotować się na zmiany w planowaniu | jak-przygotowac-sie-na-zmiany-w-planowaniu-przestrzennym | planowanie | 7 praktycznych porad; FAQ | `blog-data-2.jsx:257` |
| 42 | 2025-10-11 | Jak bezpiecznie wynająć mieszkanie? Kompletny poradnik | jak-bezpiecznie-wynajac-mieszkanie-poradnik | najem | „Praktyczna checklista” weryfikacji najemcy; elementy najmu okazjonalnego; zawartość protokołu zdawczo-odbiorczego; kaucja; sekwencja wypowiedzenia | `blog-data-2.jsx:96` (checklista `blog-data-2.jsx:117`) |
| 43 | 2025-10-11 | Nielegalne wydobycie piachu z działki | nielegalne-wydobycie-piachu-z-dzialki-konsekwencje | odpowiedzialność | „Twoja checklista bezpiecznego właściciela” (7) | `blog-data-2.jsx:183` (`blog-data-2.jsx:232`) |
| 44 | 2025-10-10 | Podział nieruchomości po rozwodzie | podzial-nieruchomosci-po-rozwodzie-komu-sad-przyzna-mieszkanie | podział majątku | „Checklista: przygotuj się do sprawy o podział nieruchomości” (7); kredyt w 4 krokach | `blog-data-2.jsx:4` (`blog-data-2.jsx:74`) |

Wpisy #1–14 są nowe (bez `source`), wpisy #15–44 pochodzą z WIX (mają `source`). Wynik inspekcji `window.BLOG`.

### Inferences
- Klastry: WZ i planowanie to 19 wpisów (#1–13, 15, 16, 23, 24, 33, 41). Służebności przesyłu i drogowe to 11 (#3 częściowo, 25–32, 36, 39, 40). Najem: 3. Deweloper: 2. Rolne/OZE: 3 (#34, 37, 43). Budowlane: 2. KW, podatek i rynek: 3. Podział majątku: 1. Nowa seria WZ (12 wpisów z 23.10.2026) ma powtarzalny format „pytanie → przepis → X kroków → co mogę zrobić → FAQ → źródła”. Z niej najłatwiej złożyć płatny przewodnik albo kurs „WZ i plan ogólny 2026–2027” (12 rozdziałów).
- Najbardziej „gotowe” do produktyzacji są:
  - kalkulatory: termin ważności WZ (#13), koszt WZ (#7), obszar analizowany (#2), opłaty za odrolnienie (#10), kalendarz eksmisji (#14), kosztorys drogi koniecznej (#36);
  - checklisty: decyzja WZ przy zakupie (#1), dokumenty do wniosku o WZ (#4), wynajem (#42), podział majątku (#44), bezpieczny właściciel (#43), wady od dewelopera (#38), farma PV (#37);
  - zapisy umowne: umowa przedwstępna przy działce z WZ (#1, #12), treść służebności drogowej (#3), umowa o utrzymanie drogi (#27);
  - wzory pism: ponaglenie do SKO (#8), wezwanie do gestora sieci o zgodę na wykreślenie (#30), uprzedzenie i wypowiedzenie najmu (#14, #42).
- Produkty z wpisów WIX (#15–44) wymagają przeglądu prawnego przed sprzedażą, bo CLAUDE.md wprost wskazuje błędy w starych wpisach (`CLAUDE.md:48`). Kosztorys z #36 opisuje stan z 2025 r.

### Gaps
- Brak danych o ruchu na poszczególnych wpisach (GA4/Search Console nie są w repo), więc nie da się powiedzieć, które tematy realnie przyciągają ruch.
- Nie czytałem w całości treści każdego wpisu. Elementy do produktyzacji ustaliłem z nagłówków H2/H3 i początków list.
- Pakiety md w `Marketing/Posty` i archiwum WIX na Dysku są poza repo i nie były badane.

## 3. Narzędzia (tools.jsx) i istniejące darmowe zasoby, pobrania, newslettery, lead magnety

### Takeaway
Strona ma trzy narzędzia leadowe: kalkulator wynagrodzenia za słupy i rury (`/kalkulator-slupy`), zapis na powiadomienie o konsultacjach planu ogólnego w gminie (mikro-newsletter z segmentacją po gminie) i niebramkowany PDF „przykładowy raport” audytu. Nie ma ogólnego newslettera, e-booków, webinarów, kursów ani bramkowanych plików do pobrania.

### Cited Findings
- `tools.jsx` opisuje się jako „narzędzia leadowe: kalkulator wynagrodzenia za urządzenia przesyłowe i zapis na powiadomienie o planie ogólnym” — `tools.jsx:1-2`.
- Kalkulator ma typy urządzeń z szerokością pasa i współczynnikiem k: linia nn 4 m (k 0,3–0,5), linia SN 7 m (0,4–0,6), WN 20 m (0,6–0,9), gazociąg 6 m (0,4–0,7), wod-kan 4 m (0,2–0,4), stacja trafo 120 m² (0,8–1,0). Ma też rodzaje gruntu z domyślną ceną: budowlana 250 zł/m², rolna 15 zł/m², inna 60 zł/m² — `tools.jsx:12-23`.
- Algorytm: pas × cena × k daje służebność. Bezumowne korzystanie to 5% rocznie, maks. 6 lat (komentarz „weryfikacja LEX 2.10.2026”). Wynik jest przedziałem z zastrzeżeniem, że „Nie jest wyceną ani poradą prawną” — `tools.jsx:25-41,64`.
- Kalkulator wysyła zdarzenie GA4 `calculator_used` z rodzajem urządzenia, gruntu i górną kwotą. Wynik linkuje do wpisu o obliczaniu wynagrodzenia i do formularza — `tools.jsx:68,88`.
- Kalkulator jest podstroną `/kalkulator-slupy`, z okruszkami w bloku „Służebności i odszkodowania” — `tools.jsx:75-185`, `app.jsx:66`. Zwiastun kalkulatora (`KalkulatorTeaser`) wyświetla się na stronach bloku 8 i we wpisach o przesyle — `service-pages.jsx:290,723`, `pages.jsx:537`. Kalkulator jest wymieniony w llms.txt produkcji — https://www.mecenasodnieruchomosci.pl/llms.txt.
- `PlanAlertBand` zbiera gminę (wymagana), e-mail i opcjonalnie numer działki. Obiecuje: „Powiadomię Cię, gdy Twoja gmina rozpocznie konsultacje projektu planu ogólnego” oraz „Jedna, dwie wiadomości w roku — tylko o Twojej gminie. Zrezygnujesz jednym mailem”. Zdarzenie GA4: `plan_alert_signup` — `tools.jsx:208-292` (cytaty `tools.jsx:245,283`).
- Zapis na alert idzie do Google Apps Script (jeśli ustawiony `APPS_SCRIPT_URL`) albo do Formspree — `tools.jsx:5-7,226-232`. Pasek alertu jest na stronach bloku 3 i we wpisach o planie ogólnym/WZ — `service-pages.jsx:291,724`, `pages.jsx:538`.
- `QuickContact`: pływające przyciski WhatsApp (z gotowym tekstem) i telefon na wszystkich stronach, zdarzenie `contact_click` — `tools.jsx:294-308`, `app.jsx:619`.
- Pobranie: przycisk „Pobierz przykładowy raport (PDF)” → `/assets/przykladowy-raport-audyt-nieruchomosci.pdf`, ze zdarzeniem `file_download` — `landing.jsx:666-668`. Sekcja `ReportShowcase` („Mój wyróżnik — Raport w trzech kolorach”) wyświetla się na 4 stronach usług: audyt, umowa deweloperska, rezerwacyjna, przedwstępna — `service-pages.jsx:15-19,721-722`, `landing.jsx:631-700`. W obecnej wersji `LandingPage` jej nie ma — `landing.jsx:1302-1316`.
- PDF jest dostępny na produkcji: HTTP 200, `application/pdf`, 218 150 B — https://www.mecenasodnieruchomosci.pl/assets/przykladowy-raport-audyt-nieruchomosci.pdf. Ma 14 stron: „Audyt planistyczno-prawny nieruchomości gruntowej — raport przykładowy”, z zastrzeżeniem „Dane nieruchomości, stron, organów i dokumentów są fikcyjne”. Spis treści: ustalenia, zakres i metodyka, stan prawny, sytuacja planistyczna, grunty rolne, dostęp do drogi, uzbrojenie, rekomendacje, załączniki. Zawiera tabelę statusów w kolorach (pdftotext z `assets/przykladowy-raport-audyt-nieruchomosci.pdf`).
- Wyszukiwanie fraz „newsletter, e-book, webinar, kurs, do pobrania” w plikach `*.jsx` nie znalazło takich funkcji. Słowo „newsletter” występuje tylko w treści wpisu o konsultacjach planu (`blog-data-2.jsx:294`). W sitemap produkcji nie ma adresów typu /sklep, /e-book ani /webinar — https://www.mecenasodnieruchomosci.pl/sitemap.xml.
- Zdarzenia GA4 na stronie: `generate_lead`, `calculator_used`, `plan_alert_signup`, `contact_click`, `cta_scroll_form`, `file_attached`, `file_download` (grep `gtag('event'` w `*.jsx`).

### Inferences
- Lista alertów o planie ogólnym (e-mail + gmina, czasem numer działki) to jedyna baza mailowa, którą strona buduje. Jest segmentowana geograficznie i przez lokalny klaster WZ ciąży ku Lubelszczyźnie. Naturalnie nadaje się do promocji produktów WZ i planu ogólnego, ale obecna obietnica („jedna, dwie wiadomości w roku — tylko o Twojej gminie”) nie obejmuje marketingu produktów. Ich promocja wymagałaby nowej, odrębnej zgody.
- Kalkulator słupów ma już naturalną wersję „premium”: płatny raport z wyliczeniem (PDF z metodyką i przedziałem) plus wzór wezwania do operatora. Wersja darmowa zostaje lead magnetem.
- Przykładowy raport pokazuje, że kancelaria umie przygotować dokument produktowy z fikcyjnymi danymi. Ten sam wzorzec (fikcyjne dane, stan prawny na dzień) spełnia regułę „Marketing bez danych klientów” (`CLAUDE.md:47`).

### Gaps
- Nie wiadomo, ile osób zapisało się na alerty ani ile razy użyto kalkulatora: dane są w GA4 i w arkuszu lub poczcie Apps Script, poza repo.
- Kod Google Apps Script (backend formularzy) nie jest w repozytorium, więc nie wiadomo, gdzie dokładnie trafiają dane (Dysk, arkusz, mail) ani czy da się z niego wysyłać pliki.

## 4. Model pierwszego kontaktu i sprzedaży, CTA, formularze i obsługa kontaktu

### Takeaway
Cała strona prowadzi do jednego formularza „Wstępna analiza sprawy”. Klient opisuje sprawę (może dołączyć do 5 plików), a w ciągu 24 h roboczych dostaje bezpłatną wstępną analizę i ofertę z ceną (zwykle ryczałtową) i terminem. Płaci przelewem po akceptacji oferty. Na stronie nie ma cen ani płatnych konsultacji. Formularz wysyła dane do Google Apps Script (Dysk i mail), a w rezerwie do Formspree. Strona nie ma płatności online.

### Cited Findings
- Zasada kancelarii: „formularz → w ciągu 24 h roboczych bezpłatna wstępna analiza … i jednocześnie oferta z ceną i terminem. Do akceptacji oferty klient nic nie płaci… Bez płatnych konsultacji, bez cennika na stronie. »Wycena« tylko w znaczeniu »oferta z ceną«” — `CLAUDE.md:46`.
- Hero strony głównej: „Nie musisz znać się na prawie, żeby bezpiecznie kupować i inwestować. Od tego masz mnie… Zdalnie, prostym językiem, z ceną i terminem ustalonymi z góry. A zanim cokolwiek zlecisz, bezpłatnie powiem, co trzeba zrobić…”. CTA „Opisz swoją sprawę” i „Obszary praktyki”, a pod nimi „Analiza i oferta w 24 h robocze. Do akceptacji oferty nic nie płacisz” — `landing.jsx:738-777`.
- Kroki współpracy: „Bezpłatna analiza i oferta w 24 h” i „Najpierw oferta, potem praca” — `landing.jsx:97,106`.
- Pola formularza: imię i nazwisko, e-mail, telefon, preferowany kontakt (e-mail albo telefon), sytuacja, numer KW, „Pilne”, opis sprawy, załączniki. Limity: maks. 5 plików, 10 MB na plik, łącznie 25 MB — `landing.jsx:44,119-120,170-180`.
- Wysyłka: jeśli ustawiony jest `APPS_SCRIPT_URL` („Własny skrypt Google (Dysk + mail)”), formularz wysyła JSON z plikami w base64 do Apps Script. W przeciwnym razie trafia do Formspree (`https://formspree.io/f/xjgqoaae`), a gdy plan Formspree odrzuci załączniki, idzie sama treść — `landing.jsx:39-43,181-215`.
- Po wysłaniu: „W ciągu 24 h roboczych odpiszę, co trzeba zrobić w Twojej sprawie, i prześlę ofertę z ceną i terminem”. Zdarzenie GA4: `generate_lead` — `landing.jsx:189,268-269`.
- Pod formularzem jest klauzula informacyjna bez checkboxa („odpowiedź na zapytanie nie wymaga odrębnej zgody”) i wzmianka o tajemnicy adwokackiej i OC — `landing.jsx:443-446`.
- Miejsca CTA:
  - formularz kwalifikacyjny na stronie głównej — `landing.jsx:820`;
  - `LeadFormBand` na podstronach — `pages.jsx:414,485,564,817`;
  - `CaseFormBand` na stronach usług i filarów — `service-pages.jsx:233,837`;
  - mobilny pasek „Opisz swoją sprawę” — `landing.jsx:607-611`;
  - WhatsApp i telefon — `tools.jsx:294-308`;
  - sekcja `cta` w każdej usłudze, np. „Audyt kosztuje ułamek tego, co możesz stracić” — `services-content.jsx` (pole `cta` audytu).
- FAQ o kosztach: „Cenę — najczęściej ryczałtową — podaję w ofercie… Standardowo po akceptacji oferty, przed rozpoczęciem prac (przelew na konto kancelarii)… Kancelaria jest podatnikiem VAT” — `faq-data.jsx:63-67`.
- FAQ o zasięgu: „Praktykę prowadzę w pełni zdalnie”, języki polski i angielski, spotkania w Lublinie albo w Warszawie (lokal na spotkania) — `faq-data.jsx:55-59`.
- JSON-LD każdej usługi ma `Offer` bez ceny, z opisem „Bezpłatna wstępna analiza sprawy i oferta z ceną i terminem w ciągu 24 h roboczych” — `app.jsx:375,380`.
- Stała fraza kosztowa: „Stałą cenę i termin podaję w ofercie, którą wysyłam razem z bezpłatną wstępną analizą Twojej sprawy — zanim cokolwiek zlecisz” — `services-content.jsx:7`.

### Inferences
- Sklep z cenami na stronie byłby pierwszym wyjątkiem od reguły „bez cennika na stronie” (`CLAUDE.md:46`). Reguła dotyczy usług prawnych, ale komunikacja całej strony opiera się na tym, że ceny są tylko w ofercie. Właściciel musi świadomie zdecydować, czy ceny produktów cyfrowych (np. wzorów) mogą być jawne, i opisać je jako coś innego niż „cennik usług”.
- Produkty cyfrowe mogą wzmacniać obecny lejek zamiast z nim konkurować. Każdy produkt (checklista, wzór, poradnik) może się kończyć zaproszeniem „Opisz sprawę — bezpłatna analiza w 24 h”. Część zakupów może też zawierać kredyt na późniejszą usługę.
- Strona nie ma dziś żadnej płatności online, koszyka ani konta klienta. Rozliczenia idą przelewem po ofercie. Sklep wymaga więc całkowicie nowego elementu: bramki płatniczej, faktur do zakupów online i dostarczania plików.

### Gaps
- Nie wiadomo, jak kancelaria wystawia dziś faktury (system księgowy), więc nie wiadomo, czy da się go podłączyć do automatycznych zakupów.
- Brak danych o konwersji formularza (liczba zapytań i ofert miesięcznie).

## 5. Strony prawne (regulamin, polityka prywatności, RODO, cookies): co obejmują i czy potrzebny jest regulamin sklepu

### Takeaway
Strona ma regulamin strony (charakter informacyjny treści, formularz, prawa autorskie), politykę prywatności (formularz, Formspree, GA, tajemnica adwokacka, retencja 12 mies.), klauzulę RODO i baner cookies (tylko analityka GA4, Consent Mode v2). Żaden z tych dokumentów nie dotyczy sprzedaży, płatności, treści cyfrowych, odstąpienia od umowy, reklamacji ani marketingu e-mail. Sklep potrzebuje osobnego regulaminu sklepu i aktualizacji polityki prywatności.

### Cited Findings
- „Regulamin strony” (§ 1–6):
  - § 2: treści „mają charakter wyłącznie informacyjny i edukacyjny i nie stanowią porady prawnej ani opinii prawnej”, a „Pomoc prawna świadczona jest wyłącznie na podstawie odrębnej umowy”;
  - § 3: formularz i wstępna analiza (analiza „nie stanowi opinii prawnej ani pełnego sprawdzenia dokumentów”);
  - § 4: prawa autorskie, z zakazem kopiowania bez zgody;
  - § 5–6: kwestie techniczne i końcowe; aktualizacja z 27 września 2026 r.
  
  — `legal-pages.jsx:204-255`, https://www.mecenasodnieruchomosci.pl/regulamin
- Regulamin § 3 mówi: „Warunkiem wysłania formularza jest wyrażenie zgody na przetwarzanie danych osobowych”. Formularz celowo nie ma checkboxa zgody — `legal-pages.jsx:226-233`; `landing.jsx:443`.
- Polityka prywatności (11 punktów):
  - administrator: adw. dr Maciej Muzyka, ul. Cicha 4/5 Lublin, NIP/REGON, wpis LUB/ADW/1702, bez IOD;
  - dane z formularza, maila i spraw;
  - podstawy: art. 6 ust. 1 lit. a, b, c, f RODO;
  - tajemnica adwokacka;
  - odbiorcy: Formspree (USA), poczta i hosting, biuro rachunkowe, Google Analytics;
  - transfer poza EOG (SCC/DPF);
  - retencja: 12 miesięcy dla zgłoszeń bez współpracy;
  - prawa osób, brak profilowania, cookies (niezbędne i analityczne);
  - aktualizacja z 4 lipca 2026 r.
  
  — `legal-pages.jsx:39-170`, https://www.mecenasodnieruchomosci.pl/polityka-prywatnosci
- Polityka wymienia Formspree jako dostawcę formularza. Kod domyślnie wysyła formularz do Google Apps Script („Dysk + mail”) — `legal-pages.jsx:111-125` vs `landing.jsx:41-43,181`.
- Klauzula RODO dotyczy tylko formularza i świadczenia pomocy prawnej — `legal-pages.jsx:174-200`, https://www.mecenasodnieruchomosci.pl/rodo
- Cookies: domyślnie wszystkie kategorie zgody są „denied” (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`), a zapisana zgoda „granted” jest odtwarzana z localStorage — `index.html:8-30`. Baner zapisuje wybór pod kluczem `cookie-consent`, po akceptacji aktualizuje tylko `analytics_storage`, a w stopce jest ponowne otwarcie ustawień — `cookie-consent.jsx:1-60`.
- Alert planu ogólnego odwołuje się do polityki prywatności i daje rezygnację „jednym mailem” — `tools.jsx:283`.

### Inferences
- Sprzedaż wzorów i poradników konsumentom wymaga dokumentów, których dziś brak: regulaminu sklepu (dane sprzedawcy, produkty i ich charakter, cena, płatności, dostarczenie treści cyfrowej, licencja na wzór, odstąpienie od umowy i jego utrata przy treściach cyfrowych, reklamacje, wyłączenie porady prawnej, odpowiedzialność za aktualność stanu prawnego). Potrzebna jest też nowa wersja polityki prywatności (operator płatności, platforma sprzedaży lub dostarczania plików, faktury, ewentualny newsletter marketingowy, osobna zgoda na marketing). Konkretne wymogi prawne powinien opisać wątek o prawie konsumenckim i etyce adwokackiej; tu ich nie weryfikowałem.
- Obecny § 2 regulaminu strony („nie stanowią porady prawnej”) to dobra baza do zastrzeżeń produktowych, ale trzeba go rozszerzyć o treści płatne (wzór to nie porada w indywidualnej sprawie).
- Przed uruchomieniem sklepu warto usunąć dwie niespójności: Formspree w polityce vs Apps Script w kodzie oraz „zgodę” w § 3 regulaminu vs brak checkboxa.
- Jeśli checkout zewnętrznego dostawcy ustawia cookies, baner (dziś tylko kategoria analityczna) może wymagać przeglądu kategorii.

### Gaps
- Nie wiadomo, czy kancelaria ma umowy powierzenia z Formspree i Google dla Apps Script. Polityka mówi o „umowach powierzenia” ogólnie.

## 6. Architektura techniczna: build, routing, dane strukturalne, sitemap/llms.txt, API, Vercel, analityka; co trzeba dodać dla sklepu

### Takeaway
Strona to aplikacja React 18 z plików JSX ładowanych globalnie w kolejności z `index.html`. Lokalnie kompiluje ją esbuild/Babel, a Chrome prerenderuje ją do statycznego HTML (144 adresy). Wynik w `dist/` trafia do repo. Vercel niczego nie buduje, tylko sprawdza aktualność `dist/` i serwuje go jako pliki statyczne z `cleanUrls`. Funkcje serverless w `/api` działają na produkcji (`/api/google-rating` zwraca ocenę). Brak CSP i nagłówków blokujących ramki lub skrypty, więc osadzenie zewnętrznego checkoutu nie jest technicznie zablokowane. Każda nowa podstrona, w tym produkt, wymaga jednak ręcznych zmian w routerze i prerenderze oraz lokalnego przebudowania. Pliki w `assets/` są publiczne, więc bramkowane pliki potrzebują osobnego magazynu i funkcji.

### Cited Findings
- Pipeline:
  - `npm run build` = `node scripts/build.mjs && node scripts/prerender.mjs`; zależności tylko deweloperskie (Babel, esbuild, puppeteer-core, react 18.3.1, lucide, pixelmatch) — `package.json:5-21`;
  - `build.mjs` czyta kolejność skryptów `text/babel` z `index.html`, kompiluje JSX do jednego `app.<hash>.js`, CSS do `styles.<hash>.css`, React i lucide do `vendor/`, kopiuje `assets/` i zapisuje `.source-hash` — `scripts/build.mjs:1-31,112-148`;
  - `prerender.mjs` renderuje każdą trasę w Chrome i zapisuje `sitemap.xml`, `robots.txt` i `llms.txt` — `scripts/prerender.mjs:3,48-199`.
- Lista tras prerenderu jest zapisana w kodzie: `/`, `/uslugi`, filary i usługi z `SERVICE_BLOCKS`, `/blog`, kategorie, wpisy, `/o-mnie`, `/kontakt`, `/faq`, `/kalkulator-slupy`, strony prawne i `/404` (noindex) — `scripts/prerender.mjs:67-84`.
- `lastmod` pojawia się tylko tam, gdzie jest prawdziwa data (`updated` wpisu lub usługi). Prerender sprawdza też, czy strony nie są za krótkie (poniżej 250 słów) — `scripts/prerender.mjs:63-65,194`.
- `llms.txt` powstaje z danych: opis kancelarii, kontakt, kalkulator, wszystkie usługi i wszystkie poradniki — `scripts/prerender.mjs:163-192`. Na produkcji plik ma 37 291 B — https://www.mecenasodnieruchomosci.pl/llms.txt
- `robots.txt`: „Allow: /”, „Disallow: /api/”, plus odnośnik do sitemap — `scripts/prerender.mjs:159-160`, https://www.mecenasodnieruchomosci.pl/robots.txt
- Vercel:
  - `"buildCommand": "node scripts/verify-dist.mjs"`, `"installCommand": "echo 'bez instalacji…'"`, `"outputDirectory": "dist"`, `cleanUrls: true`, `trailingSlash: false` — `vercel.json` (klucze najwyższego poziomu);
  - `verify-dist.mjs` porównuje hash źródeł (wszystkie `*.jsx/*.css/*.html`, `assets/`, skrypty build/prerender, `package-lock.json`) z `dist/.source-hash` i przerywa wdrożenie, jeśli się różnią — `scripts/verify-dist.mjs:1-20`, `scripts/source-hash.mjs:1-24`.
- Nagłówki w `vercel.json`:
  - Cache-Control dla `/assets/(.*)` („public, max-age=86400, stale-while-revalidate=604800”), `/vendor/` i plików z hashem;
  - globalnie tylko `X-Content-Type-Options: nosniff` i `Referrer-Policy: strict-origin-when-cross-origin`;
  - brak `Content-Security-Policy` i `X-Frame-Options`;
  - 98 przekierowań (np. stare adresy WIX), rewrites dla favicon i pliku weryfikacyjnego.
  
  — `vercel.json`. Nagłówki produkcji 24.10.2026: HTTP/2 200, `referrer-policy`, `x-content-type-options`, `strict-transport-security`, `access-control-allow-origin: *`, bez CSP — `curl -I https://www.mecenasodnieruchomosci.pl/`.
- Funkcja serverless `api/google-rating.js` (CommonJS, bez zależności, globalny `fetch`) pyta Google Places API (New) o `rating` i `userRatingCount`. Zmienne środowiskowe: `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`. Cache CDN 24 h — `api/google-rating.js:1-38`. Na produkcji zwraca `{"rating":5,"count":66}` — https://www.mecenasodnieruchomosci.pl/api/google-rating (24.10.2026).
- Routing:
  - `buildPath` mapuje nazwy tras na ścieżki (`uslugi`, `blok`, `usluga`, `blog`, `blogpost`, `blogcat`, `faq`, `kontakt`, `o-mnie`, `kalkulator`, `polityka-prywatnosci`, `regulamin`, `rodo`, `notfound`, `landing`) — `app.jsx:51-74`;
  - `parsePath` rozpoznaje prefiksy `uslugi` i `blog`, a pojedyncze segmenty bierze z mapy `simple` — `app.jsx:86-109`;
  - normalizacja starych linków `#/` — `app.jsx:116-128`;
  - `NavLink` renderuje prawdziwe `<a href>` i nawiguje przez `history.pushState` — `app.jsx:144-163,484`;
  - przełącznik widoków — `app.jsx:594-608`;
  - meta i tytuł per trasa — `app.jsx:258-300`.
- JSON-LD:
  - statyczny `LegalService` z adresem, `geo`, `areaServed` (Lublin, woj. lubelskie, Polska), `knowsAbout` i `founder` (Person) — `index.html:51-95`;
  - per trasa (`app.jsx:340-422`): `BreadcrumbList`, `Person` (alumniOf UJ i UMCS, memberOf Izba Adwokacka w Lublinie, identifier LUB/ADW/1702), `Service` z `Offer` bez ceny, `FAQPage`, `CollectionPage` + `ItemList`, `BlogPosting` z `datePublished`/`dateModified`, `ProfilePage`, `Legislation` (podstawa prawna z ELI);
  - brak typu `Product`.
- `check.mjs` (lokalnie, po buildzie) zgłasza błąd m.in. gdy:
  - JSON-LD się nie parsuje albo daty nie są ISO;
  - w HTML zostały `unpkg` lub Babel;
  - canonical jest zły;
  - są stare linki `#/`;
  - podstawa prawna nie linkuje do `eli.gov.pl`;
  - strona nie jest osiągalna przez `<a href>` ze strony głównej (osierocone strony).
  
  Na stronach `/uslugi/*` sprawdza też duplikaty treści — `scripts/check.mjs:91-205` (np. `:106`, `:117`, `:118`, `:138`, `:205`).
- Analityka: GA4 `G-J93NJSQCTN` z Consent Mode v2 i domyślnym „denied” — `index.html:7-31`. Zdarzenia opisane w pytaniu 3. Skrypt IndexNow jest w `scripts/indexnow.mjs`. Plik `scripts/frozen-titles.json` z komentarzem „titles frozen until the 23.10.2026 reading (Search Console)” wskazuje na monitoring w Search Console — `scripts/check.mjs:166`.
- Dodawanie treści (CLAUDE.md):
  - wpis dopisuje się do `blog-data-*.jsx`, a nowy plik dodaje do `index.html` przed `services-data.jsx`;
  - po buildzie wpis dostaje adres, HTML i miejsce w sitemap i llms.txt;
  - nawigacja przez `window.NavLink`;
  - nowy adres zastępujący stary wymaga przekierowania w `vercel.json`;
  - po każdej zmianie: `npm run build`, `node scripts/check.mjs` (fail 0) i commit z `dist/`, najpierw na gałąź podglądu;
  - build zajmuje ok. 2–3 min.
  
  — `CLAUDE.md` (sekcje „Najważniejsza zasada” i „Dodawanie wpisu na blog”, „Linki i nawigacja”).
- Inne gałęzie niż `main` to podglądy chronione logowaniem Vercel — `CLAUDE.md` (nagłówek).
- Produkcja ma 144 adresy w sitemap: 1 strona główna, 1 `/uslugi`, 81 filarów i usług, 1 `/blog`, 9 kategorii, 44 wpisy i 7 stron (o-mnie, kontakt, faq, kalkulator, 3 prawne) — https://www.mecenasodnieruchomosci.pl/sitemap.xml. Strona główna produkcji pokazuje już liczniki z najnowszych commitów gałęzi (378, 1479, 7412) — pobranie HTML 24.10.2026; `landing.jsx:86-92`.

### Inferences
- Co trzeba dodać dla katalogu `/sklep` i stron produktów w obecnej architekturze:
  1. plik danych, np. `products-data.jsx` (`window.PRODUCTS`), dodany do `index.html`, bo build czyta stamtąd kolejność;
  2. nowe trasy `sklep` i `produkt` w `buildPath`, `idsFor`, `parsePath` (prefiks `sklep`), przełączniku widoków i `setMetaForView`;
  3. komponenty `ShopPage` i `ProductPage`;
  4. JSON-LD `Product` z `offers` (cena, waluta, dostępność) w generatorze JSON-LD (`app.jsx:340-422`);
  5. dopisanie tras do listy w `prerender.mjs:67-84` oraz do `llms.txt` (`prerender.mjs:163-192`);
  6. linki w nawigacji lub stopce i ze stron usług i wpisów, bo `check.mjs` odrzuca strony nieosiągalne przez `<a href>` (`check.mjs:205`);
  7. co najmniej ok. 250 słów na stronę produktu, żeby uniknąć ostrzeżenia o „cienkiej” treści (`prerender.mjs:194`);
  8. przebudowanie i commit `dist/` przy każdej zmianie katalogu lub ceny.
  
  Ceny i dostępność w statycznym HTML zmieniają się więc tylko przez rebuild. Alternatywa to pobieranie ich w przeglądarce z API.
- Checkout: brak CSP i `X-Frame-Options` oznacza, że osadzony skrypt lub iframe zewnętrznego operatora (np. widget płatności albo platforma sprzedaży treści) nie zostanie zablokowany nagłówkami. Najprostsza ścieżka techniczna to link lub przycisk do hostowanego checkoutu zewnętrznego dostawcy. Nie wymaga ona zmian w `vercel.json`.
- Bramkowane pliki: `assets/` jest kopiowany do publicznego `dist/assets` z cache 24 h, więc płatnych plików nie można tam trzymać. Potrzebne są funkcja w `/api` (webhook operatora płatności, wygenerowanie podpisanego linku albo wysyłka maila z plikiem) i zewnętrzny magazyn plików. Precedens funkcji z kluczem w zmiennych środowiskowych już jest (`api/google-rating.js`). Backend Apps Script (Dysk + mail) również mógłby wysyłać pliki mailem po potwierdzeniu płatności.
- Ograniczenie: `installCommand` na Vercel celowo nie instaluje zależności (`vercel.json`). Funkcje `/api` nie mogą więc dziś korzystać z pakietów npm (np. SDK operatora płatności). Trzeba albo wołać REST API przez `fetch`, jak robi `google-rating.js`, albo zmienić konfigurację instalacji. Wymaga to sprawdzenia w dokumentacji Vercel.
- Brak bazy danych: strona jest statyczna, a jedynym „stanem” są formularze (Apps Script/Formspree). Zamówienia, licencje i ponowne pobrania wymagałyby zewnętrznego źródła prawdy (panel operatora płatności, platforma sprzedaży albo arkusz przez Apps Script).
- Alternatywa organizacyjna: sklep na zewnętrznej platformie (subdomena albo osobny serwis), a na stronie tylko statyczne strony produktów z linkiem „Kup”. Omija to większość zmian w routerze dla checkoutu, ale nie dla stron katalogu (SEO).

### Gaps
- Nie wiadomo, na jakim planie Vercel działa projekt. Ma to znaczenie dla użycia komercyjnego, limitów funkcji i dodatkowych domen.
- Nie testowałem osadzania checkoutu ani wywołań API operatorów płatności. Wnioski o CSP opierają się tylko na nagłówkach.
- Nie sprawdzałem w dokumentacji Vercel, czy funkcje `/api` mogą użyć zależności przy pominiętym `installCommand`.

## 7. Mapa: blok usług → 3–6 kandydackich produktów cyfrowych z istniejących treści

### Takeaway
Każdy z 11 bloków ma na stronie gotowe treści źródłowe: listy dokumentów, kroki, porównania, przykładowe zapisy, kalkulatory i wpisy. Pozwalają zbudować 3–6 produktów na blok. Największy potencjał mają WZ i plan ogólny (19 wpisów i alerty), najem (pakiet wynajmującego), deweloper (odbiór i wady) oraz przesył (kalkulator). Strona wielokrotnie krytykuje „wzory z internetu”, więc produkty trzeba pozycjonować jako „wzór kancelarii z instrukcją i stanem prawnym na dzień” albo jako checklistę lub poradnik, a nie jako goły szablon.

### Cited Findings
Treści źródłowe, na których opierają się propozycje:
- Blok 1:
  - lista „Czego nie zobaczysz w księdze wieczystej i gdzie tego szukać”, 6 dokumentów do audytu, 3 poziomy audytu — `services-content.jsx:11-146`;
  - „Na co zwrócić uwagę w umowie z deweloperem przed podpisem” (m.in. cena za m² dla umów od 13.02.2026, art. 5a u.d.) i 3 poziomy analizy — `services-content.jsx:200-352`;
  - „Zadatek a zaliczka” i „Zwykła forma pisemna czy akt notarialny” — `services-content.jsx:700`;
  - „Rezerwacja u dewelopera a rezerwacja w biurze” — `services-content.jsx:862`;
  - wpisy #1, #12 (zapisy do umowy przedwstępnej), #17 (wydruki KW) i przykładowy raport PDF.
- Blok 2:
  - „Jak zapłacić za mieszkanie, żeby nie zostać bez pieniędzy i bez kluczy” (depozyt notarialny itd.) — `services-content.jsx:984`;
  - „Przepisać za opiekę, podarować czy zapisać w testamencie” — `services-content.jsx:1274`;
  - „Podatek, opłata sądowa i taksa przy sprzedaży, darowiźnie i dożywociu” — `pillars-content.jsx:157`;
  - „Sprzedajesz po remoncie: za co odpowiadasz wobec kupującego” — `services-flip.jsx:4`;
  - wpis #21 (rejestr cen).
- Blok 3:
  - „Co zmieniło się 1.09.2026 i co zmieni się 1.01.2027: kalendarz reformy” — `pillars-content.jsx:283`;
  - „Symbole stref na mapie” — `services-content.jsx:1554`;
  - „Trzy drogi przeciw niekorzystnemu planowi” — `services-content.jsx:1726`;
  - wpisy #1–13, 15, 16, 23, 24, 33, 41 i alert planu ogólnego (`tools.jsx:208`).
- Blok 4:
  - „Co przy domu wymaga zgłoszenia, a co pozwolenia” — `services-lite-fill.jsx:411`;
  - „Budynek młodszy i starszy niż 20 lat” — `services-content.jsx:2210`;
  - „roboty budowlane czy dzieło” — `services-content.jsx:2507`;
  - „Pismo z PINB: ile masz czasu” (np. zażalenie w 7 dni) — `services-content.jsx:2633`;
  - terminy 14 i 30 dni — `services-data.jsx:49`;
  - wpisy #19, #20.
- Blok 5:
  - „Jak udowodnić zasiedzenie działki” (świadkowie i in.) — `services-content.jsx:2792`;
  - „Granica działki: geodeta, wójt czy sąd” — `services-content.jsx:2931`;
  - użytkowanie wieczyste — `services-content.jsx:3099`;
  - wpisy #18, #30.
- Blok 6:
  - „Podział, przejęcie ze spłatą albo sprzedaż” — `services-content.jsx:3231`;
  - „Notariusz czy sąd: koszty…” — `services-content.jsx:3395`;
  - przykład zachowku — `services-content.jsx:3555`;
  - „Akt poświadczenia dziedziczenia a postanowienie sądu” — `services-content.jsx:3703`;
  - warianty kredytu po rozwodzie — `services-content.jsx:3861`;
  - wpis #44 (checklista 7 pkt).
- Blok 7:
  - „Sześć różnic między trzema umowami najmu” i dokumenty (m.in. oświadczenie najemcy u notariusza, zgłoszenie do urzędu skarbowego) — `services-content.jsx:4003`;
  - ocena typowych zapisów umowy dla najemcy (6) — `services-content.jsx:4154`;
  - dokumenty do eksmisji (6) — `services-content.jsx:4317`;
  - wpisy #14, #35, #42.
- Blok 8:
  - kalkulator — `tools.jsx:12-185`;
  - dokumenty do sprawy o przesył — `services-content.jsx:393`;
  - „Ile kosztuje służebność drogi poza opłatą sądową” i „Sąsiad żąda drogi przy Twoim domu: jak się bronić” — `services-content.jsx:6071`;
  - wpisy #25–32, #36, #39, #40.
- Blok 9:
  - „Zapisy, które sprawdzam w każdej umowie pod farmę” (5) — `services-lite-fill.jsx:144`;
  - „Cztery zapisy, których wzór z internetu nie ustali za Ciebie” — `services-content.jsx:6896`;
  - status rolnika i KOWR — `services-content.jsx:6625,6776`;
  - wpisy #1 (progi u.k.u.r.), #10 (odrolnienie), #34, #37.
- Blok 10:
  - „Stała obsługa albo jedno zlecenie” i „Przegląd wzorów umów” — `pillars-content.jsx:1151-1212`;
  - pośrednicy (AML, umowa pośrednictwa) — `services-lite-fill.jsx:703`;
  - wspólnoty — `services-lite-fill.jsx:835`;
  - spółdzielnie (regulamin walnego po zmianach z 28.01.2026, wzór oświadczenia osoby bliskiej) — `services-b2b.jsx:182`;
  - „Etap inwestycji, obowiązek z ustawy i ryzyko dla dewelopera” — `services-lite-fill.jsx:540`.
- Blok 11:
  - metaDesc: „30 dni na usunięcie uznanych usterek z protokołu i 5 lat rękojmi od wydania lokalu” — `services-data.jsx:160`;
  - „Wada istotna przy odbiorze” — `services-content.jsx:5272`;
  - „Przykładowe zapisy z umów deweloperskich, które pasują do przykładów z art. 385³ k.c.” — `services-content.jsx:5577`;
  - „Kto odpowiada, jak długo…” (gwarancja) — `services-content.jsx:5697`;
  - wpisy #22, #38.
- Strona krytykuje gotowe wzory w kilku miejscach:
  - „skrojona pod Ciebie umowa zamiast szablonu z internetu” — `services-data.jsx:93`;
  - „umowa skrojona pod Ciebie, nie szablon z internetu” — `services-data.jsx:95`;
  - „Indywidualnie skrojona umowa — nie szablon z internetu” — `data.jsx:211`;
  - „Najwięcej problemów bierze się z umów pisanych »ze wzoru z internetu«” — `pillars-content.jsx:827`;
  - „Darmowy wzór umowy z internetu to prosta droga do kłopotów…” — `blog-data-2.jsx:126`;
  - „Nie polegaj na darmowych wzorach z internetu” — `blog-data-2.jsx:110`;
  - firmy OZE „przedstawiają gotowe wzory umów, które zabezpieczają głównie ich interesy” — `blog-data-3.jsx:101`.

### Inferences
Propozycje produktów (L = darmowy lead magnet, P = płatny). Format zależy od decyzji z pozostałych wątków badania (etyka, prawo konsumenckie, platforma).

| Blok | Kandydackie produkty | Treści źródłowe |
|---|---|---|
| 1. Przed zakupem | (L) Checklista „Działka przed zadatkiem: księga, ewidencja, plan, droga, sieci” · (P) Przewodnik „Jak czytać księgę wieczystą” ze słownikiem wpisów działów I–IV · (P) Checklista umowy deweloperskiej + lista klauzul abuzywnych z komentarzem · (P) Pakiet zapisów do umowy przedwstępnej (zadatek, warunek kredytowy, przeniesienie WZ) z instrukcją · (L) Checklista umowy rezerwacyjnej · (P/usługa w pakiecie) „Audyt podstawowy” jako produkt o stałym zakresie (przykładowy raport jako próbka) | `services-content.jsx:11,200,700,862,5577`; wpisy #1, #12, #17, #22; PDF raportu |
| 2. Transakcje | (P) Przewodnik sprzedającego mieszkanie: dokumenty, podatki, bezpieczna zapłata · (L) „Jak zapłacić za mieszkanie, żeby nie zostać bez pieniędzy i kluczy” · (P) Porównanie dożywocie / darowizna / testament dla seniorów i rodzin · (P) Checklista flippera: okazja spadkowa, licytacja, lokator, cesja + odpowiedzialność po remoncie · (P) Arkusz negocjacyjny z rejestrem cen | `services-content.jsx:984,1139,1274,1417`; `pillars-content.jsx:157`; `services-flip.jsx:4`; wpis #21 |
| 3. WZ i planowanie | (L) Kalkulator ważności WZ („policz ostatni dzień”) · (L) Kalkulator kosztu WZ · (L) Kalkulator obszaru analizowanego · (P) „Kit wniosku o WZ”: checklista dokumentów, załączniki A–E, instrukcja, odpowiedź na wezwanie · (P) Wzór ponaglenia do SKO z instrukcją · (P) Poradnik „Plan ogólny: strefa, OUZ i uwaga do projektu” + wzór uwagi (powiązany z alertem gminnym) · (P) Kurs wideo lub webinar „Reforma WZ 2026–2027” z 12 wpisów serii | wpisy #1–13, 15, 23, 24, 33, 41; `pillars-content.jsx:283`; `services-content.jsx:532,1554,1726,1908`; `tools.jsx:208` |
| 4. Proces budowlany | (L) Drzewko „zgłoszenie czy pozwolenie” · (L) Kalendarz terminów (odwołanie 14 dni, legalizacja 30 dni, zażalenie PINB 7 dni) · (P) Wzór umowy o roboty budowlane (dom) z komentarzem: kary, odbiory, zabezpieczenie zapłaty · (P) Protokół odbioru robót + checklista dokumentowania wad wykonawcy · (P) Przewodnik legalizacji samowoli (zwykła vs po 20 latach) | `services-data.jsx:49`; `services-lite-fill.jsx:411`; `services-content.jsx:2210,2355,2507,2633` |
| 5. KW i stan prawny | (P) Przewodnik „Zasiedzenie: jak zebrać dowody” + kalkulator 20/30 lat · (P) Wzór wezwania do gestora sieci o zgodę na wykreślenie nieaktualnej służebności · (P) Poradnik użytkowania wieczystego: przekształcenie, bonifikata, wniosek przeciw podwyżce opłaty · (L) Checklista „Papiery się nie zgadzają: KW, ewidencja, granica” | `services-content.jsx:2792,2931,3099`; wpisy #18, #30, #39 |
| 6. Współwłasność | (L) Checklista „Przygotuj się do sprawy o podział nieruchomości” · (P) Przewodnik „Dział spadku: notariusz czy sąd” z listą dokumentów · (P) Kalkulator zachowku (orientacyjny) · (P) Poradnik „Mieszkanie i kredyt po rozwodzie: 3 warianty” · (L) „APD czy postanowienie sądu” | `services-content.jsx:3231,3395,3555,3703,3861`; wpis #44 |
| 7. Najem | (P) Pakiet wynajmującego: umowa najmu okazjonalnego z instrukcją, wzór oświadczenia najemcy (instrukcja notarialna), protokół zdawczo-odbiorczy, zgłoszenie do US · (L) Checklista weryfikacji najemcy · (P) Pakiet pism windykacyjnych i eksmisyjnych (wezwanie, uprzedzenie, wypowiedzenie) + kalendarz eksmisji · (L) Kalkulator kaucji · (P) Checklista najemcy „zapisy do zmiany przed podpisem” · (P, subskrypcja) wersja „light” abonamentu wynajmujących | `services-content.jsx:4003,4154,4317,4468,4618,4742`; wpisy #14, #35, #42 |
| 8. Służebności | (L) Kalkulator słupów (jest) → (P) raport z wyliczeniem i metodyką + wzór wezwania do zapłaty do operatora (6 lat wstecz) · (P) E-book „Droga konieczna: szerokość, wynagrodzenie, koszty, utrzymanie, zasiedzenie” (kompilacja 5 wpisów) · (P) Wzór umowy o ustanowienie służebności drogowej + umowa o utrzymanie drogi · (P) Checklista ZRID: operat, terminy, odwołanie | `tools.jsx:12-185`; `services-content.jsx:393,5928,6071,6209`; wpisy #3, #25–32, #36, #39, #40 |
| 9. Rolne i OZE | (P) Checklista „Umowa dzierżawy pod PV/wiatraki: 5 zapisów do negocjacji” + ryzyka VAT · (L) Drzewko „Czy muszę być rolnikiem? Progi 0,3 ha / 1 ha” · (P) Pakiet dokumentów statusu rolnika indywidualnego · (P) Wzór umowy dzierżawy rolnej z komentarzem · (L) Kalkulator opłat za wyłączenie z produkcji rolnej | `services-lite-fill.jsx:7,144`; `services-content.jsx:6625,6776,6896,7038`; wpisy #1, #10, #34, #37 |
| 10. B2B | (P) Pakiet AML dla biura nieruchomości (procedura, ocena ryzyka) · (P) Wzór umowy pośrednictwa z komentarzem · (P) Pakiet wspólnoty: wzory uchwał, windykacja zaliczek · (P) Regulamin walnego spółdzielni 2026 + wzór oświadczenia · (P) Checklista zgodności dewelopera z ustawą deweloperską · (P) Webinary dla geodetów i rzeczoznawców (odpowiedzialność zawodowa) | `pillars-content.jsx:1151-1212`; `services-lite-fill.jsx:540,703,835`; `services-b2b.jsx:182,523,639` |
| 11. Deweloper | (L) Checklista odbioru mieszkania od dewelopera + wzór protokołu · (P) Wzory: zgłoszenie wady z rękojmi, wezwanie do usunięcia wad z protokołu · (L) Kalkulator kar umownych za opóźnienie · (L) Kalkulator różnicy metrażu · (P) Pakiet dla wspólnoty: uchwała o przejęciu roszczeń, cesja | `services-data.jsx:160`; `services-content.jsx:4857,5002,5143,5272,5447,5697,5810`; wpisy #22, #38 |

- Ze względu na krytykę „wzorów z internetu” w treści strony bezpieczniejsze dla spójności marki są checklisty, przewodniki, kalkulatory i wzory pism urzędowych (ponaglenie, uwaga do planu, wezwanie). Wzory umów (najem, roboty, dzierżawa, pośrednictwo) wymagałyby przeformułowania tych fragmentów strony albo komunikacji „wzór kancelarii z instrukcją, stanem prawnym na dzień i opcją przeglądu przez adwokata”.
- Strona ma już mechanizmy aktualności (`law.asOf`, `updated`, linki ELI wymuszane przez `check.mjs:138`). Każdy produkt może dziedziczyć ten standard („stan prawny na dzień X” i darmowa aktualizacja). To realna przewaga nad anonimowymi wzorami.
- Darmowe kalkulatory (WZ, kaucja, kary dewelopera, metraż, odrolnienie) wpisują się w istniejący wzorzec `KalkulatorSlupyPage`, czyli statyczną stronę z obliczeniem w przeglądarce i zdarzeniem GA4. Nie wymagają płatności, a budują ruch i leady.

### Gaps
- Nie zweryfikowałem popytu na żaden z proponowanych produktów. Wolumeny wyszukiwań i konkurencję badają inne wątki.
- Nie oceniałem, które produkty mogą naruszać zasady etyki adwokackiej (np. reklama, sprzedaż wzorów przez adwokata). To zakres wątku etyki.
- Kwoty i terminy przytoczone w tabeli pochodzą z treści strony. Przed użyciem w produktach wymagają weryfikacji w LEX/Legalis (`CLAUDE.md:48`).

## 8. Pozycjonowanie, ton, wyróżniki, zasięg geograficzny i sygnały ruchu lub opinii

### Takeaway
Marka „Mecenas od Nieruchomości” to jednoosobowa kancelaria adwokacka z Lublina (dr nauk prawnych, wpis LUB/ADW/1702). Zajmuje się wyłącznie prawem nieruchomości i obsługuje całą Polskę zdalnie, ze spotkaniami w Lublinie i Warszawie. Wyróżniki: 100% specjalizacji, bezpłatna analiza i oferta w 24 h, ryczałt znany z góry, „raport w trzech kolorach”, prosty język i weryfikowane przepisy z linkami ELI. Ton jest bezpośredni, pisany w pierwszej osobie do „Ty”. Sygnały zaufania: ocena 5,0 z 66 opinii Google (API, 24.10.2026) i liczniki na stronie głównej (m.in. 378 spraw, 14,7 mln zł odzyskanych). W repo nie ma danych o ruchu.

### Cited Findings
- Tytuł strony: „Prawnik od nieruchomości Lublin – adwokat dr Maciej Muzyka”. Opis: „Kancelaria Nieruchomości w Lublinie. Adwokat, wyłącznie prawo nieruchomości… Bezpłatna wstępna analiza i oferta w 24 h”. Twitter: „Sprawy z całej Polski zdalnie” — `index.html:32-48`.
- `LegalService`: nazwa „Adwokat dr Maciej Muzyka - Mecenas od Nieruchomości”, adres ul. Cicha 4/5, 20-078 Lublin, `areaServed` Lublin, województwo lubelskie i Polska, języki pl i en, `knowsAbout` (12 tematów, m.in. plan ogólny, WZ, służebność przesyłu, grunty rolne) — `index.html:51-95`.
- Strona „O mnie” mówi: „Prowadzę w Lublinie, przy ul. Cichej 4/5, Kancelarię Nieruchomości (marka Mecenas od Nieruchomości)… Sprawy klientów spoza Lublina prowadzę zdalnie, w całej Polsce”, „Nie obiecuję wyniku sprawy”, spotkania w Lublinie albo w Warszawie (ul. Bracka 20/7A) — `pages-extra.jsx` (OMnieIntro), https://www.mecenasodnieruchomosci.pl/o-mnie
- Wykształcenie (JSON-LD): Uniwersytet Jagielloński i UMCS. Członkostwo: Izba Adwokacka w Lublinie — `app.jsx:318-334`.
- Filary zaufania: „Doświadczenie i tytuł”, „Wyłączna specjalizacja”, „Jasne zasady współpracy”. Statystyki w `data.jsx`: „10 lat w prawie nieruchomości”, „dr”, „100% spraw z nieruchomości” — `data.jsx:381-405`.
- Liczniki na stronie głównej: 14 689 342 zł „odzyskanych środków dla klientów”, 378 „poprowadzonych spraw”, 10 „lat w prawie nieruchomości”, 24 h „czas wstępnej analizy sprawy”, 1479 „godzin na sali sądowej”, 7412 „wypitych kaw” — `landing.jsx:86-92`. Według komunikatu commita `5342441` godziny na sali to szacunek („1500+, szacunek”) — `git log`. Liczniki są widoczne na produkcji (HTML strony głównej, 24.10.2026).
- Opinie: `/api/google-rating` zwrócił `{"rating":5,"count":66}` — https://www.mecenasodnieruchomosci.pl/api/google-rating (24.10.2026). Wartości zapasowe w kodzie: 5,0 i 66 — `landing.jsx:56-58`. Strona pokazuje 6 cytatów opinii z Google, np. o użytkowaniu wieczystym i sprawie sądowej (autorów nie przytaczam) — `data.jsx:409-415`. Komentarz w kodzie wspomina „Slot na przyszłość: prawdziwe, zebrane za zgodą klientów opinie” — `landing.jsx:1180`.
- Wyróżnik „Raport w trzech kolorach” (czerwone, żółte, zielone): „Zamiast opinii na dwadzieścia stron dostajesz czytelny raport” — `landing.jsx:648-662`. W FAQ: „Raport… To profesjonalna opinia prawna sygnowana przeze mnie jako adwokata” — `faq-data.jsx` (sekcja „Audyty, raporty i ich wartość”).
- FAQ: „Zajmuję się wyłącznie prawem nieruchomości i procesem inwestycyjno-budowlanym. To świadomy wybór” oraz obowiązkowe OC adwokata — `faq-data.jsx` (sekcje „Zakres…” i „Bezpieczeństwo…”).
- Ton wpisów: pierwsza osoba i forma „Ty”. Typowy fragment: „Od kilku miesięcy w mojej kancelarii powtarza się jedno pytanie: »Panie mecenasie, mam działkę pod Lublinem…«”. Wpisy mają noty „Aktualizacja … (stan prawny na ten dzień)” i sekcje „Źródła” z Dz.U. — `blog-data.jsx:13-15`; `blog-data-7.jsx` (sekcje „Źródła”).
- Lokalny akcent treści: wpis „Warunki zabudowy 2026 w Lublinie i okolicy” (`blog-data.jsx:7`), przykładowe gminy w alercie „np. Konopnica, Niemce, Lublin” (`tools.jsx:262`), odwołania do Dziennika Urzędowego Województwa Lubelskiego (wpis #11, `blog-data-7.jsx:1046-1146`).
- Wizytówka Google (`hasMap`, `sameAs` z cid i kgmid) i link do recenzji — `index.html:61-62`, `landing.jsx:53`.
- Analityka: GA4 z Consent Mode (`index.html:7-31`). Search Console pośrednio (`scripts/check.mjs:166`, `scripts/frozen-titles.json`). IndexNow (`scripts/indexnow.mjs`, `scripts/indexnow.key`). `robots.txt` otwiera stronę dla „wyszukiwarek i asystentów AI” — `scripts/prerender.mjs:159-160`.

### Inferences
- Pozycjonowanie „specjalista, zdalnie, w całej Polsce” i ogólnopolskie tematy (WZ, plan ogólny, przesył, najem, deweloper) pozwalają sprzedawać produkty w całym kraju, nie tylko w Lubelskiem. Lokalne tematy (plany ogólne gmin lubelskich) mogą działać jako niszowe produkty dla regionu.
- Atuty marki dla sklepu to: tytuł doktora i adwokat z imienia i nazwiska (sygnowanie produktów), „stan prawny na dzień” z linkami ELI, czytelna forma („raport w trzech kolorach”) i ocena 5,0 z 66 opinii. Jednocześnie produkty nie mogą rozmywać przekazu „indywidualna sprawa, a nie szablon”.
- Liczniki i opinie budują zaufanie do usług. Opinie o produktach cyfrowych trzeba by zbierać osobno, bo opinie Google dotyczą usług.

### Gaps
- W repo i na stronie nie ma danych o ruchu (sesje, źródła, frazy, konwersje). GA4 i Search Console wymagają dostępu właściciela.
- Nie zweryfikowałem źródła liczników (np. „14 689 342 zł odzyskanych środków”). Są wpisane na stałe w kodzie (`landing.jsx:86-92`).
- Nie badałem, czy kancelaria ma profile w mediach społecznościowych. `sameAs` w JSON-LD wskazuje tylko Google i rejestr adwokatów (`index.html:61-62`, `app.jsx:323`).
