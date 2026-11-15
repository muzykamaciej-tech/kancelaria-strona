# VAT i ryczałt dla produktów cyfrowych kancelarii (wzory, e-booki, pakiety, kursy, licencje B2B). Stan na 15.11.2026 i zmiany od 1.01.2027

Notatki robocze. Wszystkie źródła odczytano 15.11.2026, chyba że zaznaczono inaczej.

Założenia stanu faktycznego:
- adw. dr Maciej Muzyka prowadzi indywidualną kancelarię jako JDG w CEIDG;
- jest czynnym podatnikiem VAT;
- rozlicza się ryczałtem od przychodów ewidencjonowanych;
- produkty tworzy sam, a ten sam plik trafia do wielu kupujących, bez indywidualnej porady;
- sprzedaż prowadzi Publigo, płatności obsługuje Przelewy24, plik pobiera się po zapłacie;
- kupują głównie konsumenci w Polsce.

Źródła:
- brzmienie przepisów: API ELI Sejmu;
- WIS i interpretacje: API Eureka (`/api/public/v1/informacje/{id}`, podgląd `https://eureka.mf.gov.pl/informacje/podglad/{id}`);
- wyroki TSUE: Urząd Publikacji UE (`publications.europa.eu/resource/celex/…`, polska wersja językowa, to samo źródło co EUR-Lex).

CBOSA była niedostępna z tego środowiska (szczegóły w pkt 4).

---

## 1. Odpowiedź

### 1.1. Tabela: produkt → VAT → ryczałt

| Produkt | VAT (B2C, Polska) | Ryczałt | Pewność | Ryzyko i co je zwiększa |
|---|---|---|---|---|
| **(a) Samodzielny wzór umowy lub pisma (DOCX/PDF) z krótką instrukcją wypełnienia** | **23%** (PKWiU 58; wzór do uzupełnienia to „formularz” z CN 4911, a nie książka lub broszura z CN 4901) | **5,5%** (działalność wytwórcza: własny wyrób sprzedawany wielokrotnie bez personalizacji) | VAT: wysoka (WIS dotyczące dokładnie wzoru umowy DOCX+PDF). Ryczałt: średnio-wysoka (analogia do szablonów PDF; nie ma interpretacji o wzorach pisanych przez adwokata) | VAT: zastosowanie 5% do samego wzoru grozi zaległością w wysokości różnicy stawek (18 pkt proc. od netto, ok. 14% ceny brutto) od całej sprzedaży z odsetkami. Ryczałt: organ może uznać wzór adwokata za „usługę prawną” (17% jako wolny zawód albo 15% jako PKWiU 69.10.19.0 „Pozostałe usługi prawne”). Ryzyko rośnie przy personalizacji, konsultacji „w cenie” albo sprawdzeniu wypełnionego wzoru |
| **(b) E-book lub poradnik PDF (tekst i grafika, do czytania)** | **5%** (art. 41 ust. 2a, zał. 10 poz. 24 w zw. z poz. 19 pkt 1, CN 4901) | **5,5%** (wytwórcza; stała linia KIS 2022–2026) | Wysoka | VAT 23%, jeśli produkt jest przede wszystkim do wypełniania (notatnik, planer, sama checklista do odhaczania), w przeważającej mierze wideo albo udostępniany abonamentowo na platformie (PKWiU 63). ISBN ani wersja papierowa nie są potrzebne |
| **(b′) Checklista PDF** | 5%, jeśli to treść do czytania (lista z objaśnieniami, część poradnika). **23%**, jeśli to głównie formularz lub lista do odhaczania | 5,5% | Średnia | DKIS wyklucza CN 4901 dla publikacji, której „zasadniczym przeznaczeniem” jest wypełnianie |
| **(c) Pakiet za jedną cenę: poradnik PDF + wzory DOCX** | Zależy od budowy pakietu (pkt 1.2): **5% od całości** tylko wtedy, gdy wzory są drobnym, niesamodzielnym załącznikiem poradnika (jedno świadczenie, element główny to poradnik); **23% od całości**, gdy elementem głównym są wzory; **rozbicie ceny 5% / 23%**, gdy to dwa samodzielne świadczenia (np. każdy element jest też sprzedawany osobno) | 5,5% od całości (oba elementy to wyroby własne, więc bez dzielenia) | VAT: niska bez własnej WIS | Przy jednym świadczeniu złożonym nie wolno dzielić stawek, nawet gdy cenę da się rozbić (TSUE C-463/16). DKIS odmawia uznania świadczenia złożonego, gdy element pakietu jest też sprzedawany osobno (WIS-odmowa z 21.10.2026). Sztuczne łączenie albo dzielenie to główne ryzyko |
| **(d1) Nagrany kurs wideo** | **23%** (PKWiU 85.5; jako usługa elektroniczna nie może korzystać z 5%, bo poz. 24 wyłącza publikacje w przeważającej mierze wideo) | **8,5%** (usługi w zakresie edukacji, PKWiU dział 85, art. 12 ust. 1 pkt 5 lit. c) | Wysoka | Kurs z indywidualnymi odpowiedziami na sprawy uczestników zbliża się do pomocy prawnej (17%) |
| **(d2) Webinar na żywo** | **23%** (PKWiU 85.5; nie jest usługą elektroniczną). Konsument z innego państwa UE: miejsce świadczenia w jego państwie (art. 28g ust. 3) | **8,5%** (dział 85) | Wysoka | Jak wyżej: część Q&A z indywidualną poradą to ryzyko 17% |
| **(e) Licencja B2B na pakiet wzorów do wielokrotnego użytku w transakcjach** | **23%** (usługa licencyjna lub wydawnicza z PKWiU 58; 8% z zał. 3 poz. 63 „honoraria twórców” DKIS odrzuca przy gotowych utworach licencjonowanych masowo) | **8,5% do 100 000 zł / 12,5% od nadwyżki** (art. 12 ust. 1 pkt 4 lit. b w zw. z art. 14 ust. 2 pkt 11 PIT: umowy podobne do najmu lub dzierżawy; stała linia KIS 2025–2026) | VAT: wysoka. Ryczałt: średnia | Ryzyko **15%** (art. 12 ust. 1 pkt 2 lit. e: PKWiU 58.11.60.0 i 58.19.30.0 „usługi licencyjne…”). KIS go nie rozstrzyga, bo wnioskodawcy oświadczali, że takich przychodów nie mają. Sprzedaż „kopii do użytku wewnętrznego” bez pól eksploatacji można bronić jako 5,5% (wytwórcza), ale to zmienia produkt |
| (dla porównania) porada, sprawdzenie lub dopasowanie wzoru dla klienta | 23% | 17% (wolny zawód; KIS 0114-KDIP3-1.4011.244.2025.2.BS) | Wysoka | Kasa fiskalna obowiązkowa (usługi prawnicze; poza zakresem tej notatki) |

**Zmiany od 1.01.2027 (ustalone w ELI):**
1. **VAT.**
   - Stawki 5% (zał. 10, art. 41 ust. 2a) i 23% (art. 41 ust. 1 w zw. z art. 146ef ust. 1 pkt 1) zostają.
   - Ustawa z 4.09.2026 (Dz.U. 2026 poz. 1270, w życie 1.01.2027) zmienia w art. 41 ust. 1 tylko odesłania (dodaje art. 138s). Nie zmienia zał. 10 ani art. 41 ust. 2a.
   - Ustawa z 8.10.2026 (Dz.U. 2026 poz. 1446, w życie 18.11.2026) dotyczy eksportu i importu.
   - W Monitorze Polskim z lat 2025–2026 nie znalazłem obwieszczenia MF z art. 146ef ust. 2 o końcu okresu stawek 23%/8%. Termin na obwieszczenie w 2026 r. minął 31.10.2026, więc w 2027 r. 23% zostaje.
2. **PKWiU.**
   - Od 1.01.2026 obowiązuje PKWiU 2025 (Dz.U. 2025 poz. 1829).
   - Do celów VAT nadal stosuje się PKWiU 2015 do 31.12.2027, a do ryczałtu do 31.12.2028 (§ 2 rozporządzenia).
   - Kody w tej notatce (58.11.30.0, 58.19.30.0, 69.10.19.0, dział 85) to kody PKWiU 2015.
3. **Ryczałt.**
   - Stawki art. 12 bez zmian.
   - Jedyna zmiana od 1.01.2027 (ustawa o OKI, Dz.U. 2026 poz. 1098, art. 37) dotyczy art. 21c i uchyla art. 21d (zeznania udostępniane w e-Urzędzie).
   - Zmiana z 16.06.2026 (Dz.U. 2026 poz. 779) dotyczy pełnomocnictwa do podpisywania ewidencji (art. 15 ust. 13a).

**Czy inne założenie zmienia wynik?**
- **Skala lub podatek liniowy zamiast ryczałtu:** różnicowanie 5,5% / 8,5% / 17% przestaje mieć znaczenie, bo cały dochód z JDG podlega jednej stawce. VAT bez zmian.
- **Utrata wolnego zawodu**, np. przez zatrudnienie na umowę zlecenia prawnika, który pisze wzory lub pisma (KIS 0113-KDIPT2-1.4011.60.2022.1.ISL): usługi prawne kancelarii spadają z 17% na 15% (art. 12 ust. 1 pkt 2 lit. l). Stawki produktów się nie zmieniają.
- **Kupujący z innych państw UE (B2C):** VAT według stawek państwa konsumenta po przekroczeniu 42 000 zł (art. 28k; zob. poprzednią notatkę).
- **Sprzedaż przez odrębną spółkę:** inna analiza (CIT; możliwe zwolnienie z art. 113).

### 1.2. Rekomendacja: jak budować produkty i pakiety pod stawki

1. **Główny produkt wydawaj jako poradnik do czytania (5% VAT, 5,5% ryczałtu):**
   - tekst ze stroną tytułową i spisem treści;
   - komentarz klauzula po klauzuli, przykłady, typowe błędy;
   - przykładowe klauzule pokazane w treści książki jako ilustracja.

   Tak wyglądały produkty, którym DKIS przyznała 5% (WIS 0112-KDSL2-1.440.463.2026.1.SG: poradnik PDF + załączniki DOC, płatność przez Przelewy24). Unikaj elementów, przez które publikacja staje się „notatnikiem do wypełnienia” (WIS 0112-KDSL2-2.440.352.2026.3.TG, 23%).
2. **Samodzielny wzór DOCX/PDF do uzupełnienia licz z 23% VAT.** Istnieje WIS dokładnie na wzór umowy DOCX+PDF (0112-KDSL2-2.440.407.2024.2.IH). Sama „instrukcja wypełnienia” tego nie zmienia, chyba że komentarz staje się treścią dominującą (wtedy patrz pkt 1 i WIS).
3. **Pakiet buduj świadomie w jednym z trzech modeli:**
   - **Model A „książka z załącznikami” (cel: 5% od całości).**
     - Poradnik jest produktem głównym. Cena i marketing opierają się na wiedzy, a załączone wzory mają charakter pomocniczy: „żeby lepiej skorzystać z poradnika”, C-581/19 pkt 41.
     - Wzory nie są sprzedawane osobno ani w innym pakiecie. Ich wartość jest marginalna (C-581/19 pkt 42), np. kilka wzorów przy 60–100 stronach poradnika.
     - Bez własnej WIS (art. 42b ust. 5 pkt 2 pozwala złożyć wniosek o „towary lub usługi, które […] razem składają się na jedną czynność”) traktuj ten model jako ryzykowny, bo wzory to formularze z CN 4911.
   - **Model B „zestaw dwóch produktów” (bezpieczny): rozbij cenę.**
     - Poradnik i wzory są też osobnymi produktami w sklepie. Pakiet to rabat na zakup obu.
     - Rabat rozkłada się proporcjonalnie do cen osobnych, a na paragonie i fakturze są dwie pozycje: 5% i 23%.
     - Przykład: poradnik 99 zł + wzory 149 zł, pakiet 199 zł brutto. Rabat proporcjonalnie: poradnik 79,44 zł brutto (VAT 5% = 3,78 zł), wzory 119,56 zł brutto (VAT 23% = 22,36 zł). VAT łącznie 26,14 zł zamiast 37,21 zł przy 23% od całości.
     - DKIS w podobnym układzie uznała, że to nie jest świadczenie złożone (odmowa WIS z 21.10.2026), więc rozbicie jest spójne z praktyką organu.
     - Sprawdź w Publigo, czy pakiet może mieć dwie pozycje z różnymi stawkami. Jeśli nie, sprzedawaj dwa produkty w koszyku z kodem rabatowym zamiast jednego produktu-pakietu.
   - **Model C „pakiet wzorów z omówieniem” (23% od całości).** Elementem głównym są wzory. Prosta księgowo opcja, ale najdroższa.
4. **Kursy i webinary licz z 23% VAT i 8,5% ryczałtu.**
   - Nie dodawaj do kursu „konsultacji Twojej sprawy”. Taki element to pomoc prawna (17%, kasa fiskalna, OC, tajemnica).
   - Materiały PDF dołączone do kursu dzielą stawkę kursu (element pomocniczy). Jeśli chcesz 5% na poradnik, sprzedawaj go osobno.
5. **Licencję B2B opisz w umowie jako licencję niewyłączną na wskazanych polach eksploatacji** (zwielokrotnianie, modyfikacja, wykorzystanie w transakcjach licencjobiorcy, liczba użytkowników).
   - Ryczałt: 8,5% / 12,5% według linii KIS. Bezpieczniejszy wariant zakłada ryzyko 15% (lit. e). Rozważ interpretację indywidualną.
   - VAT: 23%, faktura w KSeF.
6. **Ewidencja przychodów: osobna kolumna dla każdej stawki** (17% usługi prawne; 5,5% e-booki, wzory i pakiety; 8,5% kursy i webinary; 8,5%/12,5% licencje).
   - Bez tego cały przychód kancelarii, także z produktów, podlega **17%** (art. 12 ust. 3 zd. 2 pkt 1).
   - W sklepie oznaczaj kategorie produktów tak, żeby eksport z Publigo i Przelewy24 dawał przychód według stawek.
7. **Nie stosuj 5% do samodzielnych wzorów ani checklist do odhaczania bez własnej WIS.** Do e-booków do czytania 5% możesz stosować od razu, bo linia WIS jest jednolita.

---

## 2. Przepisy (cytaty z ELI)

### 2.1. Ustawa o VAT: status i zmiany

- Akt podstawowy: Ustawa z dnia 11 marca 2004 r. o podatku od towarów i usług (Dz.U. 2004 nr 54 poz. 535). Status ELI: „akt posiada tekst jednolity”, `inForce: IN_FORCE`. Źródło: https://api.sejm.gov.pl/eli/acts/DU/2004/535
- Najnowszy tekst jednolity: **Dz.U. 2026 poz. 1263**.
  - Obwieszczenie Marszałka Sejmu z 1.09.2026, ogłoszone 28.09.2026.
  - Uwzględnia stan prawny na 26.08.2026 oraz zmiany m.in. z Dz.U. 2026 poz. 507 i 846.
  - Źródło: https://api.sejm.gov.pl/eli/acts/DU/2026/1263/text.pdf
- „Akty zmieniające” z datą od 2026 r., według ELI:

| Akt | Data w ELI | Czy dotyczy stawek 5% i 23%? |
|---|---|---|
| Dz.U. 2025 poz. 896 | 2026-01-01 | ujęty w t.j. |
| Dz.U. 2025 poz. 1811 | 2026-01-02 | ujęty w t.j. |
| Dz.U. 2023 poz. 1598 | 2026-02-01 | KSeF; ujęty w t.j. |
| Dz.U. 2026 poz. 846 | 2026-10-01 | Ordynacja i inne; ujęty w t.j. |
| **Dz.U. 2026 poz. 1446** (ustawa z 8.10.2026) | **2026-11-18** | nie: eksport (art. 2 pkt 8, art. 41 ust. 4–6c), import (art. 33b, art. 138i) |
| **Dz.U. 2026 poz. 1270** (ustawa z 4.09.2026) | **2027-01-01** (części: 1.12.2026, 1.07.2027, 1.01.2028, 1.07.2028) | tylko odesłanie w art. 41 ust. 1. Załącznika nr 10 ani art. 41 ust. 2a nie zmienia |
| Dz.U. 2026 poz. 507 | 2028-11-01 (część) | CEIDG; ujęty w t.j. |

- Dz.U. 2026 poz. 1270, art. 1 pkt 13 lit. a (w życie 1.01.2027): „w ust. 1 wyrazy „i art. 129 ust. 1” zastępuje się wyrazami „ , art. 129 ust. 1 i art. 138s””. Źródło: https://api.sejm.gov.pl/eli/acts/DU/2026/1270/text.pdf
- „Orzeczenie TK”: brak wpisów od 2024 r.

### 2.2. VAT: stawki

**Art. 41 ust. 1** (t.j. 2026 poz. 1263): „Stawka podatku wynosi 22 %, z zastrzeżeniem ust. 2–12c, art. 83, art. 119 ust. 7, art. 120 ust. 2 i 3, art. 122 i art. 129 ust. 1.”

**Art. 41 ust. 2a:** „Dla towarów i usług wymienionych w załączniku nr 10 do ustawy, innych niż klasyfikowane według Polskiej Klasyfikacji Wyrobów i Usług w grupowaniu usługi związane z wyżywieniem (PKWiU 56), stawka podatku wynosi 5 %, z zastrzeżeniem art. 138i ust. 4.”

**Art. 146ef ust. 1:** „W okresie od dnia 1 stycznia 2024 r. do końca roku, w którym suma wydatków wymienionych w art. 40 ust. 1 pkt 2 ustawy z dnia 11 marca 2022 r. o obronie Ojczyzny (Dz. U. z 2025 r. poz. 825, z późn. zm.) określonych na ten rok w ustawie budżetowej, w brzmieniu obowiązującym na dzień 31 lipca tego roku, oraz planie finansowym Funduszu Wsparcia Sił Zbrojnych przedłożonym zgodnie z art. 42 ust. 4 ustawy z dnia 11 marca 2022 r. o obronie Ojczyzny albo projekcie tego planu przedstawionym do zatwierdzenia Ministrowi Obrony Narodowej zgodnie z art. 42 ust. 2 i 3 tej ustawy, jeżeli plan ten nie został przedłożony zgodnie z art. 42 ust. 4 tej ustawy, po wyłączeniu planowanych przepływów finansowych w ramach tej sumy wydatków, jest wyższa niż 3 % wartości produktu krajowego brutto określonego zgodnie z art. 40 ust. 2 tej ustawy: 1) stawka podatku, o której mowa w art. 41 ust. 1 i 13, art. 109 ust. 2, art. 110, art. 120 ust. 3a i art. 138i ust. 4, wynosi 23 %; 2) stawka podatku, o której mowa w art. 41 ust. 2, art. 120 ust. 2 i 3 oraz tytule załącznika nr 3 do ustawy, wynosi 8 %; […]”

**Art. 146ef ust. 2:** „Minister właściwy do spraw finansów publicznych ogłosi, w drodze obwieszczenia, w Dzienniku Urzędowym Rzeczypospolitej Polskiej „Monitor Polski”, koniec okresu obowiązywania stawek podatku, o których mowa w ust. 1, w terminie do dnia 31 października roku, dla którego zostały spełnione warunki określone w ust. 1.”

Kontrola obwieszczenia: wyszukiwarka ELI (publisher=MP, lata 2025 i 2026, tytuły z frazami „okresu obowiązywania stawek”, „stawek podatku”, „podatku od towarów i usług”, „koniec okresu”) nie zwróciła obwieszczenia z art. 146ef ust. 2. Wynik: brak, więc 23% obowiązuje także w 2027 r. Art. 146ef nie dotyczy stawki 5% z art. 41 ust. 2a.

**Załącznik nr 10, tytuł:** „WYKAZ TOWARÓW I USŁUG OPODATKOWANYCH STAWKĄ PODATKU W WYSOKOŚCI 5 %”.

**Poz. 19 (CN ex 49):** „Książki, gazety, obrazki i pozostałe wyroby przemysłu poligraficznego, drukowane; manuskrypty, maszynopisy i plany – wyłącznie towary objęte następującymi CN:
1) ex 4901 Książki, broszury, ulotki i podobne materiały, drukowane, nawet w pojedynczych arkuszach – z wyłączeniem ulotek,
2) ex 4902 Gazety, dzienniki i czasopisma, nawet ilustrowane lub zawierające materiały reklamowe – wyłącznie czasopisma regionalne lub lokalne,
3) 4903 00 00 Książki dla dzieci, obrazkowe, do rysowania lub kolorowania,
4) 4904 00 00 Nuty drukowane lub w rękopisie, nawet ilustrowane lub oprawione,
5) 4905 Mapy i mapy hydrograficzne lub podobne mapy wszelkich rodzajów, włączając atlasy, mapy ścienne, plany topograficzne i globusy, drukowane,
6) ex 4911 Pozostałe artykuły drukowane, włącznie z drukowanymi obrazkami i fotografiami – wyłącznie czasopisma regionalne lub lokalne”

**Poz. 24 (bez względu na PKWiU):** „Dostarczanie drogą elektroniczną publikacji objętych poz. 19, z wyłączeniem:
– publikacji, które w całości lub w przeważającej mierze składają się z treści wideo lub możliwej do odsłuchania muzyki,
– czasopism regionalnych lub lokalnych
– (uchylone)”

**Objaśnienie 1 do zał. 10:** „Wykaz nie ma zastosowania do towarów i usług zwolnionych od podatku lub opodatkowanych stawką 0 %.”

Wnioski z brzmienia przepisów:
- stawka 5% przysługuje tylko „publikacji objętych poz. 19”, czyli treściom o cechach CN 4901 (książki i broszury) albo 4903–4905;
- z CN 4911 pkt 6 obejmuje wyłącznie czasopisma regionalne lub lokalne, więc 5% nie przysługuje „pozostałym artykułom drukowanym”, do których DKIS zalicza formularze i wzory do wypełnienia (pkt 3);
- ustawa nie wymaga ISBN.

**Załącznik nr 3, poz. 63** (stawka z tytułu załącznika, dziś 8% na podstawie art. 146ef ust. 1 pkt 2): „Usługi twórców i artystów wykonawców w rozumieniu ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. z 2025 r. poz. 24) wynagradzane w formie honorariów za przekazanie lub udzielenie licencji do praw autorskich lub praw do artystycznego wykonania”. Dotyczy licencji (e). DKIS nie stosuje tej pozycji do licencji na gotowe utwory sprzedawane masowo (pkt 3, WIS 714036 i 714536).

### 2.3. VAT: pozostałe przepisy

- **Art. 2 pkt 26:** „usługach elektronicznych – rozumie się przez to usługi świadczone drogą elektroniczną, o których mowa w art. 7 rozporządzenia 282/2011”.
- **Art. 8 ust. 1 pkt 1:** „Przez świadczenie usług, o którym mowa w art. 5 ust. 1 pkt 1, rozumie się każde świadczenie na rzecz osoby fizycznej, osoby prawnej lub jednostki organizacyjnej niemającej osobowości prawnej, które nie stanowi dostawy towarów w rozumieniu art. 7, w tym również: 1) przeniesienie praw do wartości niematerialnych i prawnych, bez względu na formę, w jakiej dokonano czynności prawnej;”.
- **Art. 42b ust. 5 (WIS):** „Przedmiotem wniosku o wydanie WIS mogą być: 1) towar albo usługa, albo 2) towary lub usługi, które w ocenie wnioskodawcy razem składają się na jedną czynność podlegającą opodatkowaniu.”
- **Art. 42c ust. 1 pkt 3:** WIS wiąże organy wobec wnioskodawcy także w odniesieniu do „towarów lub usług, które razem składają się na jedną czynność podlegającą opodatkowaniu wykonaną w okresie ważności WIS”.
- **Art. 113 ust. 13 pkt 2 lit. a:** „Zwolnień, o których mowa w ust. 1 i 9, nie stosuje się do podatników: […] 2) świadczących usługi: a) prawnicze,”. Kancelaria jest więc czynnym podatnikiem VAT także dla produktów.
- **Art. 28g ust. 3** (webinary B2C dla konsumentów z UE): „W przypadku gdy usługi, o których mowa w ust. 2, dotyczą działalności, która jest transmitowana lub w inny sposób udostępniana wirtualnie, miejscem świadczenia tych usług jest miejsce, w którym podmiot niebędący podatnikiem, na rzecz którego są świadczone te usługi, posiada siedzibę, stałe miejsce zamieszkania lub zwykłe miejsce pobytu.”

**Rozporządzenie wykonawcze Rady (UE) nr 282/2011** (Dz.Urz. UE L 77 z 23.3.2011, wersja polska z Urzędu Publikacji; odczytany tekst pierwotny, bez weryfikacji wersji skonsolidowanej). Źródło: https://publications.europa.eu/resource/celex/32011R0282
- Art. 7 ust. 1: „Do „usług świadczonych drogą elektroniczną”, o których mowa w dyrektywie 2006/112/WE, należą usługi świadczone za pomocą Internetu lub sieci elektronicznej, których świadczenie – ze względu na ich charakter – jest zasadniczo zautomatyzowane i wymaga minimalnego udziału człowieka, a ich wykonanie bez wykorzystania technologii informacyjnej jest niemożliwe.”
- Art. 7 ust. 2 lit. a: „ogólnie dostawy produktów w formie cyfrowej, łącznie z oprogramowaniem, jego modyfikacjami lub nowszymi wersjami”.
- Art. 7 ust. 3: „Ustęp 1 nie obejmuje w szczególności: […] i) usług świadczonych przez specjalistów, takich jak prawnicy i doradcy finansowi, którzy udzielają swym klientom porad za pomocą poczty elektronicznej; j) usług edukacyjnych, w ramach których treść kursu przekazywana jest przez nauczyciela za pomocą Internetu lub sieci elektronicznej (tzn. przez zdalne połączenie);”.
- Zał. I pkt 3 lit. c: „zawartość książek w formie cyfrowej i innych publikacji elektronicznych”.
- Zał. I pkt 5 lit. a: „automatyczne nauczanie na odległość, którego funkcjonowanie wymaga użycia Internetu lub podobnej sieci elektronicznej, wymagające niewielkiego bądź niewymagające żadnego udziału człowieka, łącznie z klasami wirtualnymi, z wyjątkiem sytuacji, gdzie Internet lub podobna sieć elektroniczna wykorzystywana jest jako proste narzędzie służące komunikowaniu się nauczyciela z uczniem;”.

**Noty wyjaśniające do CN 4901.** Nie pochodzą z ELI: są cytowane przez DKIS w WIS 0112-KDSL2-2.440.352.2026.3.TG, 0112-KDSL2-1.440.463.2026.1.SG i 0112-KDSL2-2.440.407.2024.2.IH. Kluczowe fragmenty:
- pozycja 4901 obejmuje „praktycznie wszystkie publikacje i materiały drukowane do czytania”, w tym „podręczniki (włączając edukacyjne książki ćwiczeń), z tekstem narracyjnym lub bez, które zawierają pytania lub ćwiczenia (zazwyczaj z miejscem na odręczne wypełnienie); publikacje techniczne”;
- grupa broszur „nie obejmuje […] drukowanych formularzy, które wymagają wprowadzenia pewnych dodatkowych informacji do ich wypełnienia (pozycja 4911)”;
- pozycja 4901 nie obejmuje „Pamiętników i pozostałych materiałów piśmiennych w postaci książek objętych pozycją 4820, tj. takich, które przeznaczone są zasadniczo do wypełnienia pismem odręcznym lub maszynowym”;
- noty do 4911 (cytowane w WIS 407/2024): „drukowane formularze […], dokumenty […] wymagające jedynie wpisania danych szczegółowych (np. dat i nazwisk), klasyfikowane są do tej pozycji.”

### 2.4. PKWiU 2025 a PKWiU 2015

- **Rozporządzenie RM z 17.12.2025 w sprawie PKWiU** (Dz.U. 2025 poz. 1829, w życie 1.01.2026), § 2: „Do celów: 1) opodatkowania podatkiem od towarów i usług – do dnia 31 grudnia 2027 r., 2) opodatkowania podatkiem dochodowym od osób prawnych, podatkiem dochodowym od osób fizycznych oraz zryczałtowanym podatkiem dochodowym w formie ryczałtu od przychodów ewidencjonowanych oraz karty podatkowej – do dnia 31 grudnia 2028 r. – stosuje się Polską Klasyfikację Wyrobów i Usług (PKWiU) wprowadzoną rozporządzeniem Rady Ministrów z dnia 4 września 2015 r. […]”. Źródło: https://api.sejm.gov.pl/eli/acts/DU/2025/1829/text.pdf
- **PKWiU 2015** (Dz.U. 2015 poz. 1676; w ELI status „uchylony”, nadal stosowany podatkowo), nazwy grupowań odczytane z tekstu:
  - 58.11.30.0 „Książki on-line”;
  - 58.11.60.0 „Usługi licencyjne związane z nabywaniem praw do książek, broszur, ulotek, map itp.”;
  - 58.19.29.0 „Pozostałe publikacje on-line, gdzie indziej niesklasyfikowane”;
  - 58.19.30.0 „Usługi licencyjne związane z nabywaniem praw do pozostałych wyrobów drukowanych”;
  - 63.99.10.0 „Usługi w zakresie informacji, gdzie indziej niesklasyfikowane”;
  - 69.10.14.0 „Usługi doradztwa prawnego i reprezentacji w dziedzinie prawa cywilnego”;
  - 69.10.19.0 „Pozostałe usługi prawne”;
  - 85.59.13 „Usługi w zakresie doskonalenia zawodowego, gdzie indziej niesklasyfikowane”;
  - 85.59.19 „Usługi w zakresie pozaszkolnych form edukacji, gdzie indziej niesklasyfikowane”.

  Źródło: https://api.sejm.gov.pl/eli/acts/DU/2015/1676/text.pdf

### 2.5. Ustawa o zryczałtowanym podatku dochodowym: status i zmiany

- Akt podstawowy: ustawa z 20.11.1998 (Dz.U. 1998 nr 144 poz. 930), status „akt posiada tekst jednolity”. Źródło: https://api.sejm.gov.pl/eli/acts/DU/1998/930
- Najnowszy tekst jednolity: **Dz.U. 2025 poz. 843** (obwieszczenie z 13.06.2025). Źródło: https://api.sejm.gov.pl/eli/acts/DU/2025/843/text.pdf
- Akty zmieniające po t.j. (ELI):
  - **Dz.U. 2026 poz. 779** (ustawa z 15.05.2026), art. 3, data 16.06.2026. Dodaje art. 15 ust. 13a: „Pełnomocnictwo do podpisywania deklaracji składanej za pomocą środków komunikacji elektronicznej udzielone na podstawie przepisów działu III rozdziału 9a ustawy – Ordynacja podatkowa obejmuje również upoważnienie do podpisywania ewidencji i wykazu środków trwałych oraz wartości niematerialnych i prawnych przesyłanych na podstawie ust. 12.”
  - **Dz.U. 2026 poz. 1098** (ustawa z 3.07.2026 o osobistych kontach inwestycyjnych), art. 37, w życie **1.01.2027**. Nadaje nowe brzmienie art. 21c („Na koncie w e-Urzędzie Skarbowym są udostępniane zeznania, do których składania są obowiązani podatnicy, wypełnione danymi będącymi w posiadaniu Szefa Krajowej Administracji Skarbowej, w zakresie i na zasadach określonych w odrębnych przepisach.”) i uchyla art. 21d.
  - Żadna z tych zmian nie dotyczy art. 4 ani art. 12.
- „Orzeczenie TK”: brak.

### 2.6. Ryczałt: definicje (art. 4 ust. 1)

- **Pkt 1:** „działalność usługowa – pozarolniczą działalność gospodarczą, której przedmiotem są czynności zaliczone do usług zgodnie z Polską Klasyfikacją Wyrobów i Usług (PKWiU) wprowadzoną rozporządzeniem Rady Ministrów z dnia 4 września 2015 r. w sprawie Polskiej Klasyfikacji Wyrobów i Usług (PKWiU) (Dz. U. poz. 1676, z 2017 r. poz. 2453, z 2018 r. poz. 2440, z 2019 r. poz. 2554 oraz z 2020 r. poz. 556), z zastrzeżeniem pkt 2 i 3;”
- **Pkt 4:** „działalność wytwórcza – działalność, w wyniku której powstają nowe wyroby, w tym również sprzedaż wyrobów własnej produkcji, prowadzoną przez podatnika;”
- **Pkt 11:** „wolny zawód – pozarolniczą działalność gospodarczą wykonywaną osobiście przez tłumaczy, adwokatów, notariuszy, radców prawnych, biegłych rewidentów, księgowych, agentów ubezpieczeniowych, agentów oferujących ubezpieczenia uzupełniające, brokerów reasekuracyjnych, brokerów ubezpieczeniowych, doradców podatkowych, doradców restrukturyzacyjnych, maklerów papierów wartościowych, doradców inwestycyjnych, agentów firm inwestycyjnych oraz rzeczników patentowych, z tym że za osobiste wykonywanie wolnego zawodu uważa się wykonywanie działalności bez zatrudniania na podstawie umów o pracę, umów zlecenia, umów o dzieło oraz innych umów o podobnym charakterze osób, które wykonują czynności związane z istotą danego zawodu;”

### 2.7. Ryczałt: stawki (art. 12)

**Ust. 1:** „Ryczałt od przychodów ewidencjonowanych wynosi:”
- **pkt 1:** „17 % przychodów osiąganych w zakresie wolnych zawodów;”
- **pkt 2:** „15 % przychodów ze świadczenia usług: […]
  - e) licencyjnych związanych z: – nabywaniem praw do książek, broszur, ulotek, map itp. (PKWiU 58.11.60.0), – nabywaniem praw do korzystania z wykazów i list (np. adresowych, telefonicznych) (PKWiU 58.12.30.0), – nabywaniem praw do czasopism i pozostałych periodyków (PKWiU 58.14.40.0), – nabywaniem praw do pozostałych wyrobów drukowanych (PKWiU 58.19.30.0), – nabywaniem praw do korzystania z gier komputerowych (PKWiU 58.21.40.0), – nabywaniem praw do korzystania z programów komputerowych (PKWiU 58.29.50.0), […]
  - i) przetwarzania danych (PKWiU ex 63.11.1), przesyłania strumieni wideo przez Internet (PKWiU 59.11.25.0), przesyłania strumieni audio przez Internet (PKWiU 59.20.36.0), agencji informacyjnych (PKWiU 63.91.1) oraz pozostałych w zakresie informacji, gdzie indziej niesklasyfikowanych (PKWiU 63.99), […]
  - l) prawnych, rachunkowo-księgowych i doradztwa podatkowego (PKWiU dział 69), innych niż świadczone w ramach wolnych zawodów,
  - m) firm centralnych (head office); usług doradztwa związanych z zarządzaniem (PKWiU ex dział 70), z wyjątkiem usług doradztwa związanych z zarządzaniem rynkiem rybnym (PKWiU 70.22.16.), innych niż świadczone w ramach wolnych zawodów,”
- **pkt 2b:** „12 % przychodów ze świadczenia usług: a) związanych z wydawaniem: […] – pakietów oprogramowania użytkowego (PKWiU 58.29.2), – oprogramowania komputerowego pobieranego z Internetu (PKWiU ex 58.29.3), z wyłączeniem pobierania oprogramowania w trybie on-line, b) związanych z doradztwem w zakresie sprzętu komputerowego (PKWiU 62.02.10.0), związanych z oprogramowaniem (PKWiU ex 62.01.1), […]”. Dotyczyłoby to ewentualnego generatora dokumentów jako oprogramowania; nie dotyczy produktów (a)–(e).
- **pkt 4:** „8,5 % przychodów do kwoty 100 000 zł oraz 12,5 % przychodów od nadwyżki ponad kwotę 100 000 zł z tytułu: […] b) przychodów, o których mowa w art. 14 ust. 2 pkt 11 ustawy o podatku dochodowym,”
- **pkt 5:** „8,5 %: a) przychodów z działalności usługowej, w tym przychodów z działalności gastronomicznej w zakresie sprzedaży napojów o zawartości alkoholu powyżej 1,5 %, z zastrzeżeniem pkt 1–4 oraz 6–8, […] c) przychodów ze świadczenia usług w zakresie edukacji (PKWiU dział 85),”
- **pkt 6:** „5,5 %: a) przychodów z działalności wytwórczej, robót budowlanych lub w zakresie przewozów ładunków taborem samochodowym o ładowności powyżej 2 ton,”

**Ust. 3 (różne stawki, ewidencja):** „Jeżeli podatnik obowiązany do prowadzenia ewidencji przychodów prowadzi działalność, z której przychody są opodatkowane różnymi stawkami określonymi w ust. 1, ryczałt od przychodów ewidencjonowanych ustala się według stawki właściwej dla przychodów z każdego rodzaju działalności, pod warunkiem, że ewidencja przychodów jest prowadzona w sposób umożliwiający określenie przychodów z każdego rodzaju działalności. W przypadku gdy podatnik, o którym mowa w zdaniu poprzednim, nie prowadzi ewidencji w sposób zapewniający ustalenie przychodów dla każdego rodzaju działalności, ryczałt od przychodów ewidencjonowanych wynosi 8,5 % przychodów, z tym że w przypadku osiągania również przychodów, o których mowa w: 1) ust. 1 pkt 1, ryczałt wynosi 17 %; 2) ust. 1 pkt 2, ryczałt wynosi 15 %; […] 4) ust. 1 pkt 4, ryczałt wynosi 12,5 %.”

Wniosek: przychody o różnych stawkach **trzeba** ewidencjonować osobno. Kancelaria osiąga przychody z wolnego zawodu, więc bez osobnej ewidencji całość podlega 17%.

**Art. 6 ust. 4 pkt 1 lit. a** (limit): ryczałt stosuje się, jeżeli w roku poprzednim podatnik uzyskał przychody z działalności prowadzonej samodzielnie „w wysokości nieprzekraczającej 2 000 000 euro”.

### 2.8. Ustawa o PIT: art. 14 ust. 2 pkt 11 (dla licencji, produkt e)

- T.j. **Dz.U. 2026 poz. 592** (obwieszczenie z 17.04.2026). Źródło: https://api.sejm.gov.pl/eli/acts/DU/2026/592/text.pdf
- Art. 14 ust. 2: „Przychodem z działalności gospodarczej są również: […] 11) przychody z najmu, podnajmu, dzierżawy, poddzierżawy oraz z innych umów o podobnym charakterze, składników majątku związanych z działalnością gospodarczą;”
- Zmiany po t.j. sprawdzone w ELI: 2026 poz. 779, 846, 1079, 1098, 1123, 1287, 1347, 1354, 1371. Poz. 1371 uchyla art. 14 ust. 2h i 2i, a poz. 1354 zmienia art. 14 ust. 2 pkt 10 lit. a. Żadna nie zmienia pkt 11.

---

## 3. Interpretacje i WIS (Eureka)

Linki mają postać `https://eureka.mf.gov.pl/informacje/podglad/<ID>`. Daty pochodzą z pola DT_WYD w wyszukiwarce Eureka. Wszystkie dokumenty odczytano 15.11.2026.

Poziom odczytu:
- **P**: pełny tekst, odczytane opis, rozstrzygnięcie i uzasadnienie w istotnej części;
- **R**: odczytane rozstrzygnięcie i opis, bez pełnego uzasadnienia.

### 3.1. VAT: WIS

| # | Sygnatura | Data | ID | Przedmiot | Rozstrzygnięcie | Znaczenie dla nas | Odczyt |
|---|---|---|---|---|---|---|---|
| V1 | 0112-KDSL2-2.440.407.2024.2.IH | 28.10.2024 | [610696](https://eureka.mf.gov.pl/informacje/podglad/610696) | Wzór umowy (współprace kreatywne) w DOCX i PDF ze sklepu internetowego; puste, wykropkowane miejsca do uzupełnienia; klient może modyfikować i drukować | CN 4911 („formularz wymagający wypełnienia poprzez wprowadzenie dodatkowych informacji”), PKWiU 58, **23%** | **Bezpośredni odpowiednik produktu (a).** Linia przeciwna dla 5% na wzory | P |
| V2 | 0112-KDSL1-1.440.48.2022.2.MJ | 29.04.2022 | [488964](https://eureka.mf.gov.pl/informacje/podglad/488964) | Wzór dokumentu .docx (2 strony) ze sklepu; nabywca może kopiować, edytować i drukować | CN 4911, PKWiU 58, **23%** | Jak V1 | P (fragmenty) |
| V3 | 0112-KDSL2-1.440.481.2023.2.MK | 30.01.2024 | [577007](https://eureka.mf.gov.pl/informacje/podglad/577007) | Wzór (schemat haftu) w PDF | PKWiU 58, **23%** | Wzór lub schemat to nie książka | R |
| V4 | 0112-KDSL1-1.440.87.2021.2.DS | 24.06.2021 | [443091](https://eureka.mf.gov.pl/informacje/podglad/443091) | Wzór protokołu BHP (PDF/DOC), „tekst i pozycje do wypełnienia” | **5%**, CN 4901, ale: „Niniejsza WIS nie rozstrzyga prawidłowości klasyfikacji opracowania według Nomenklatury Scalonej (CN). Klasyfikację wskazaną przez Wnioskodawcę przyjęto jako element opisu sprawy” | Jedyny korzystny dla wzorów przypadek, ale słaby: starszy, a CN przyjęto bez badania. Od 2022 r. DKIS analizuje próbki i daje 23% (V1, V2) | P (fragmenty) |
| V5 | 0112-KDSL2-2.440.352.2026.3.TG | 17.09.2026 | [709910](https://eureka.mf.gov.pl/informacje/podglad/709910) | Publikacja PDF „zaprojektowana […] do samodzielnego wydruku i wypełnienia”, z krótkimi treściami do czytania | Wykluczenie CN 4901: treści do czytania mają „uzupełniające/drugorzędne znaczenie w stosunku do głównego przeznaczenia publikacji jako notatnika”. PKWiU 58, **23%** | Checklisty i planery do wypełniania: ryzyko 23% | P |
| V6 | 0112-KDSL2-1.440.463.2026.1.SG | 27.10.2026 | [716580](https://eureka.mf.gov.pl/informacje/podglad/716580) | E-book (poradnik) w 1 pliku PDF + kilka plików DOC (załączniki: scenariusze zajęć) w ZIP; sklep, Przelewy24, link po płatności | CN 4901, **5%** dla całości („jedna usługa”). Załączniki to „integralna część publikacji” | **Najbliższy wzorzec dla pakietu (c), model A.** Załączniki były jednak treścią do czytania, nie formularzami | P |
| V7 | 0112-KDSL2-2.440.464.2025.4.IP | 12.12.2025 | [671504](https://eureka.mf.gov.pl/informacje/podglad/671504) | Materiały edukacyjne PDF/Word do samodzielnego wydruku (bez multimediów), licencja na użytek własny | CN 4901, **5%** | E-book (b); format DOCX nie przekreśla 5% | P |
| V8 | 0112-KDSL2-1.440.389.2026.3.SG | 12.10.2026 | [714036](https://eureka.mf.gov.pl/informacje/podglad/714036) | Publikacja (scenariusz) ze sklepu „wraz z udzieleniem licencji” dla jednego nauczyciela; wnioskodawczyni chciała 8% (zał. 3 poz. 63) | CN 4901, **5%**. Poz. 63 odrzucona: to „udostępnianie nabywcy […] egzemplarza, stworzonego już wcześniej”, nie usługa twórcy | „Licencja” przy sprzedaży egzemplarzy nie zmienia kwalifikacji. Dla (e): argument przeciw 8% | P (fragmenty) |
| V9 | 0112-KDSL2-2.440.453.2026.3.AS | 16.10.2026 | [714536](https://eureka.mf.gov.pl/informacje/podglad/714536) | Fotografie z platformy z niewyłączną licencją na polach eksploatacji | Poz. 63 odrzucona, PKWiU 58, **23%** | Licencja B2B na gotowe utwory (e): **23%** | P (fragmenty) |
| V10 | 0112-KDSL2-2.440.424.2026.3.IM (odmowa WIS) | 21.10.2026 | [715485](https://eureka.mf.gov.pl/informacje/podglad/715485) | Dwie publikacje PDF za jedną cenę (konsumenci) | **Odmowa: brak świadczenia kompleksowego.** Jeden element był też oferowany odrębnie jako płatny dodatek do innej publikacji, więc nie jest „funkcjonalnie, czasowo i ekonomicznie powiązany”. Powołano C-349/96, C-41/04, C-392/11, C-425/06, C-581/19 oraz wyroki WSA (pkt 4) | **Kluczowe dla (c):** jeśli wzory są sprzedawane także osobno, pakiet to dwa świadczenia, więc dzielisz cenę | P (fragmenty) |
| V11 | 0112-KDSL2-2.440.16.2026.4.EZW | 02.06.2026 | [694540](https://eureka.mf.gov.pl/informacje/podglad/694540) | Abonament B2C: czasowy dostęp do e-booków, audiobooków i podcastów (aplikacja lub strona) | PKWiU 63, **23%** | Subskrypcja biblioteki wzorów lub e-booków: 23%. To WIS „z 2.06.2026” z poprzedniej notatki | R |
| V12 | 0112-KDSL2-1.440.598.2025.6.MA | 18.06.2026 | [696690](https://eureka.mf.gov.pl/informacje/podglad/696690) | Czasowa subskrypcja kolekcji e-booków dla bibliotek, bez trwałego prawa do treści | PKWiU 63, **23%** | Jak V11 | R |
| V13 | 0112-KDSL2-2.440.521.2025.5.TG | 13.03.2026 | [682773](https://eureka.mf.gov.pl/informacje/podglad/682773) | Kurs online (moduł z materiałami i sesje z twórcą) jako świadczenie kompleksowe | PKWiU 85.5, **23%** | Kursy (d) | R |
| V14 | 0112-KDSL2-1.440.112.2025.3.MK | 28.05.2025 | [641409](https://eureka.mf.gov.pl/informacje/podglad/641409) | Kurs online: nagrania i zajęcia na żywo | PKWiU 85.5, **23%** | Webinary i kursy (d) | R |
| V15 | 0112-KDSL2-2.440.269.2025.4.AS | 28.08.2025 | [655510](https://eureka.mf.gov.pl/informacje/podglad/655510) | E-book PDF dobierany algorytmem | CN 4901, **5%** | Potwierdzenie sygnatury z poprzedniej notatki. W tekście WIS nie ma wzmianki o wersji papierowej, więc opis ze źródła wtórnego się nie potwierdza | R |
| V16 | m.in. 0112-KDSL2-1.440.128.2026.3.BK (28.05.2026, [694732](https://eureka.mf.gov.pl/informacje/podglad/694732)); 0112-KDSL2-1.440.559.2025.5.SG (05.01.2026, [673700](https://eureka.mf.gov.pl/informacje/podglad/673700)); seria 0112-KDSL2-2.440.458–466.2025 (XII 2025: 669693, 669694, 671042, 672939) | 2025–2026 | — | E-booki PDF (i PDF/Word) ze sklepów internetowych | CN 4901, **5%** | Jednolita linia dla (b) | R |

**Wnioski VAT:**
1. E-book lub poradnik do czytania: 5%. Linia DKIS jest jednolita i liczna (2024–2026).
2. Samodzielny wzór umowy lub pisma do wypełnienia: 23% (V1, V2; formularz z CN 4911). Wyjątek V4 (2021) ma ograniczoną wartość.
3. Pakiet: 5% od całości przy poradniku z załącznikami (V6), ale DKIS nie oceniała jeszcze pakietu, w którym załącznikami są formularze. Gdy elementy są sprzedawane osobno, organ widzi odrębne świadczenia (V10).
4. Licencja B2B: 23% (V9; argument z V8).
5. Kursy i webinary: 23% (V13, V14).

### 3.2. Ryczałt: interpretacje indywidualne (DKIS)

| # | Sygnatura | Data | ID | Przedmiot | Rozstrzygnięcie | Znaczenie | Odczyt |
|---|---|---|---|---|---|---|---|
| R1 | **0113-KDIPT2-1.4011.982.2025.2.RK** | **09.02.2026** | [678792](https://eureka.mf.gov.pl/informacje/podglad/678792) | **Potwierdzona w Eureka.** JDG, czynny VAT, ryczałt. Twórca „gotowych wzorów zaproszeń urodzinowych, kartek okolicznościowych oraz plakatów imprezowych w formacie PDF”: sprzedawane wielokrotnie przez platformę, bez personalizacji, a klient może sam edytować część tekstu. Podatnik dotąd stosował „ostrożnie” 14% (PKWiU 74.1), czyli projektowanie | Stanowisko prawidłowe: „skoro to Pan jest twórcą produktu cyfrowego w postaci wzorów/szablonów, to Pana działalność w tym zakresie jest działalnością wytwórczą”, **5,5%** (art. 12 ust. 1 pkt 6 lit. a) | Silna analogia dla (a): ten sam model sprzedaży, edytowalny szablon. Różnica: tam wzory graficzne, nie prawne | P |
| R2 | 0112-KDSL1-1.4011.164.2024.1.MW | 10.05.2024 | [586234](https://eureka.mf.gov.pl/informacje/podglad/586234) | Wzory haftu krzyżykowego PDF; wnioskodawczyni chciała 14% (74.10.19.0) | Stanowisko **nieprawidłowe**; właściwe **5,5%** (wytwórcza) | KIS sama „przesuwa” na 5,5%. Stała linia | P (fragmenty) |
| R3 | 0112-KDSL1-1.4011.257.2026.2.DT | 09.06.2026 | [694829](https://eureka.mf.gov.pl/informacje/podglad/694829) | Własne e-booki (katalogi stylizacji) sprzedawane mailem | **5,5%**; „działalność ta nie ma charakteru udzielania licencji na określonych polach eksploatacji” | (b) oraz granica między sprzedażą egzemplarza a licencją (e) | P (fragmenty) |
| R4 | 0112-KDSL1-1.4011.185.2024.2.AK | 28.05.2024 | [587572](https://eureka.mf.gov.pl/informacje/podglad/587572) | E-booki własnego autorstwa | **5,5%** | (b) | R |
| R5 | 0113-KDIPT2-1.4011.620.2023.2.HJ | 09.11.2023 | [569145](https://eureka.mf.gov.pl/informacje/podglad/569145) | Sprzedaż e-booków | Prawidłowe: **5,5%** (teza) | (b); potwierdza poprzednią notatkę | R |
| R6 | 0112-KDIL2-2.4011.828.2022.2.MM | 20.12.2022 | [523525](https://eureka.mf.gov.pl/informacje/podglad/523525) | Własna książka-poradnik jako e-book przez własną stronę | **5,5%** | (b) | R |
| R7 | 0115-KDST2-1.4011.483.2023.2.AW; 0115-KDWT.4011.338.2022.1.KK | 02.02.2024; 25.05.2022 | [577600](https://eureka.mf.gov.pl/informacje/podglad/577600); [491625](https://eureka.mf.gov.pl/informacje/podglad/491625) | E-booki i audiobooki; e-booki (wydawca) | **5,5%** | (b) | R |
| R8 | 0113-KDIPT2-1.4011.896.2025.4.RK | 09.02.2026 | [678794](https://eureka.mf.gov.pl/informacje/podglad/678794) | Korepetycje i nagrane kursy online (fizyka) | Stawka **8,5%**, ale z **art. 12 ust. 1 pkt 5 lit. c** (dział 85), nie z lit. a. Stanowisko „nieprawidłowe” tylko z powodu wadliwej podstawy | (d). Wyjaśnia „niespójne kody” z poprzedniej notatki | P (fragmenty) |
| R9 | 0113-KDIPT2-1.4011.934.2025.2.KD | 06.02.2026 | [678988](https://eureka.mf.gov.pl/informacje/podglad/678988) | „Dostęp premium” do treści edukacyjnych online, PKWiU 85.59.19.0 | **8,5%** (pkt 5 lit. c) | (d); platforma kursowa | R |
| R10 | 0114-KDIP3-2.4011.459.2024.2.MT | 31.07.2024 | [597760](https://eureka.mf.gov.pl/informacje/podglad/597760) | Kursy internetowe (dział 85) | **8,5%** | (d) | R |
| R11 | 0112-KDWL.4011.34.2026.1.DK | 25.05.2026 | [693312](https://eureka.mf.gov.pl/informacje/podglad/693312) | Niewyłączne licencje na autorskie fotografie dla firm (cele komercyjne, pola eksploatacji, czas) | Art. 14 ust. 2 pkt 11 PIT, **8,5% do 100 000 zł / 12,5% od nadwyżki** (art. 12 ust. 1 pkt 4 lit. b) | (e) | P (fragmenty) |
| R12 | 0112-KDSL1-1.4011.253.2026.3.MK | 06.05.2026 | [689922](https://eureka.mf.gov.pl/informacje/podglad/689922) | Licencje do utworów literackich dla wydawców; wnioskodawczyni chciała 8,5% z pkt 5 lit. a | Stanowisko nieprawidłowe; właściwe **8,5%/12,5%** (pkt 4 lit. b) | (e) | P (fragmenty) |
| R13 | 0115-KDST2-1.4011.499.2025.2.KB; 0112-KDIL2-2.4011.522.2026.2.WS; 0115-KDST2-1.4011.424.2026.1.NC | 20.11.2025; 17.07.2026; 24.08.2026 | [667243](https://eureka.mf.gov.pl/informacje/podglad/667243); [701457](https://eureka.mf.gov.pl/informacje/podglad/701457); [705921](https://eureka.mf.gov.pl/informacje/podglad/705921) | Licencje do e-booków i książek; licencja na druk i dystrybucję (platforma); licencje dla wydawców | **8,5%/12,5%**. W 667243 i 705921 wnioskodawcy oświadczyli, że **nie** osiągają przychodów z art. 12 ust. 1 pkt 2 lit. e (15%; PKWiU 58.11.60.0 i 58.19.30.0), a KIS przyjęła to jako element stanu faktycznego | (e): linia 8,5%/12,5%, a ryzyko 15% pozostaje nierozstrzygnięte | P (fragmenty) |
| R14 | 0114-KDIP3-1.4011.244.2025.2.BS | 15.05.2025 (poprzednia notatka podawała 14.05; Eureka: DT_WYD 2025-05-14T22:14Z) | [639490](https://eureka.mf.gov.pl/informacje/podglad/639490) | Adwokat: doradztwo prawne (69.10.12–14), współpraca z radcą B2B | **17%** (wolny zawód), a nie 15% | Usługi prawne kancelarii | P (fragmenty) |
| R15 | 0115-KDIT1.4011.236.2022.2.JG | 24.06.2022 | [496129](https://eureka.mf.gov.pl/informacje/podglad/496129) | Usługi prawne poza wolnym zawodem | **15%** (pkt 2 lit. l) | Ryzyko alternatywne dla (a), gdyby wzór uznano za usługę prawną | R |
| R16 | 0113-KDIPT2-1.4011.60.2022.1.ISL | 18.03.2022 | [484645](https://eureka.mf.gov.pl/informacje/podglad/484645) | Radca zatrudnia prawnika, który m.in. przygotowuje „wzory pism procesowych, projekty umów” („czynności związane z istotą zawodu prawniczego”) | Poza wolnym zawodem: **15%** | Zlecanie pisania wzorów prawnikowi zmienia stawkę usług prawnych (17% na 15%) | P (fragmenty) |

**Brak interpretacji wprost o wzorach umów lub pism tworzonych przez adwokata (ryczałt).** Szukałem w Eureka fraz: „wzorów umów”, „wzoru pisma”, „wzorów dokumentów”, „szablonu dokumentu”, „pakietu wzorów”, „wolnego zawodu”. Przejrzałem też 153 dokumenty z frazą „e-booków” (filtr: ryczałt, stawka, źródło, opodatkowanie) pod kątem kontekstu prawniczego. Wynik: żadnej interpretacji o sprzedaży wzorów lub e-booków przez adwokata lub radcę. Rozstrzygnięcie dla (a) to więc analogia (R1, R2), a nie dokument wprost.

**Wnioski ryczałt:**
1. (a), (b), (c): **5,5%** (wytwórcza).
   - Linia KIS jest jednolita (R1–R7) i niezależna od statystycznego kodu PKWiU (58.11.30.0 czy 74.1). Liczy się, że powstaje „nowy wyrób” sprzedawany wielokrotnie bez pracy na zlecenie.
   - Ryzyko dla wzoru prawnego: wolny zawód 17% albo 69.10.19.0 i 15%. Argument przeciwny: brak klienta, brak indywidualnej sprawy, brak „osobistego” świadczenia pomocy prawnej. Wzór jest gotowym produktem jak w R1.
   - Ryzyko oceniam jako niskie do średniego. Zamknąć je może interpretacja indywidualna.
2. (d): **8,5%** (pkt 5 lit. c).
3. (e): **8,5%/12,5%** (pkt 4 lit. b), z ryzykiem 15% (lit. e).
4. Osobna ewidencja według stawek jest obowiązkowa (art. 12 ust. 3).

---

## 4. Orzecznictwo

### 4.1. Zakres badania i ograniczenia

- **CBOSA (orzeczenia.nsa.gov.pl) była niedostępna.**
  - `curl` przez proxy środowiska: połączenie zrywane przy uzgadnianiu TLS („Connection reset by peer”, proxy: `ws_closed_mid_exchange`). 15.11.2026 od 09:42 do ok. 10:07 UTC było ok. 20 prób, w tym 12 w pętli co ok. 50 s.
  - WebFetch strony głównej i dokumentów `…/doc/….rtf`: HTTP 503.
  - SAOS (`saos.org.pl`, który agreguje m.in. orzeczenia NSA): strona „Przerwa techniczna”.
  - Nie użyłem płatnych baz (LEX, Legalis, INFORLEX) ani prywatnych kopii CBOSA.
- W efekcie **nie zweryfikowałem żadnego wyroku WSA ani NSA** z lat 2020–2026 o stawce ryczałtu dla e-booków, szablonów i kursów ani o 5% VAT dla e-booków. Tę część badania trzeba powtórzyć z sieci, z której CBOSA działa (np. komputer kancelarii). Zapytania do CBOSA: (1) „e-book” + „ryczałt”; (2) „szablon” lub „wzór” + „działalność wytwórcza”; (3) „4901” + „wiążąca informacja stawkowa”; (4) „formularz” + „4911”; (5) „świadczenie kompleksowe” + „publikacja”; (6) „kurs online” + „ryczałt”.
- Zbadałem orzecznictwo TSUE o świadczeniach złożonych i e-bookach, z pełnych tekstów polskich w Urzędzie Publikacji UE (publiczna, urzędowa baza UE).

### 4.2. Tabela orzeczeń

| Sąd | Data | Sygnatura | Link | Poziom weryfikacji | Podobieństwo do naszego stanu | Teza | Dla nas |
|---|---|---|---|---|---|---|---|
| TSUE (dziewiąta izba) | 18.01.2018 | C-463/16 Stadion Amsterdam | [celex 62016CJ0463](https://publications.europa.eu/resource/celex/62016CJ0463) | **FRAGMENT** (pełny tekst, sentencja i pkt 36) | **Średnie.** Jedno świadczenie z elementem głównym i pomocniczym o różnych stawkach, czyli pakiet e-book (5%) + wzory (23%) | Sentencja: jedno świadczenie „złożone z dwóch odrębnych elementów, jednego będącego głównym i drugiego dodatkowego, dla których to elementów – gdyby były one świadczone odrębnie – obowiązywałyby różne stawki podatku od wartości dodanej, należy opodatkować według jednej stawki podatku od wartości dodanej mającej zastosowanie do tego jednego świadczenia, określonej w zależności od głównego elementu, i to nawet gdy można zidentyfikować cenę za każdy element składającą się na całkowitą cenę zapłaconą przez konsumenta w celu skorzystania z tego świadczenia.” | **Dwustronne.** Korzystne, gdy elementem głównym jest poradnik (5% od całości). Niekorzystne, gdy główne są wzory (23% od całości). Wyklucza „dzielenie stawek” w obrębie jednego świadczenia |
| TSUE (trzecia izba) | 04.03.2021 | C-581/19 Frenetikexito | [celex 62019CJ0581](https://publications.europa.eu/resource/celex/62019CJ0581) | **FRAGMENT** (pełny tekst; pkt 37–48) | **Średnie.** Kryteria jednego lub kilku świadczeń; DKIS powołuje go przy odmowie WIS dla pakietu publikacji (V10) | Pkt 37: „co do zasady każde świadczenie należy uznać za odrębne i niezależne”. Pkt 38: jedno świadczenie, gdy elementy „są ze sobą tak ściśle związane, że obiektywnie tworzą jedno nierozerwalne świadczenie gospodarcze, którego rozdzielenie miałoby charakter sztuczny”. Pkt 41: świadczenie jest pomocnicze, „jeżeli nie stanowi ono dla klienta celu samo w sobie, lecz środek, dzięki któremu można lepiej skorzystać z usługi głównej”. Pkt 42: wskazówką jest wartość elementu, „minimalna, a nawet marginalna”. Pkt 45–47: odrębne fakturowanie i możliwość skorzystania z jednych usług bez drugich, więc brak jednego świadczenia | **Korzystne dla modelu B** (rozbicie ceny przy elementach samodzielnych). Wyznacza warunki modelu A (marginalne, niesamodzielne wzory) |
| TSUE (pierwsza izba) | 27.10.2005 | C-41/04 Levob | [celex 62004CJ0041](https://publications.europa.eu/resource/celex/62004CJ0041) | **TREŚĆ** (odczytana sentencja) | **Niskie do średniego.** Standardowy produkt cyfrowy plus jego dostosowanie | Parafraza sentencji: świadczenia tak ściśle związane, że z punktu widzenia przeciętnego konsumenta tworzą jedną całość gospodarczą, to jedno świadczenie, nawet przy dwóch odrębnych cenach. Przystosowanie standardowego oprogramowania do potrzeb nabywcy może przesądzić o charakterze całości | Ostrzeżenie: „wzór + personalizacja” to jedno świadczenie, które zbliża się do usługi prawnej (23% VAT; 17% ryczałtu) |
| TSUE (wielka izba) | 07.03.2017 | C-390/15 RPO | [celex 62015CJ0390](https://publications.europa.eu/resource/celex/62015CJ0390) | **FRAGMENT** (pkt 49, sentencja) | **Niskie.** Tło poz. 24 zał. 10; dotyczy dawnego wyłączenia e-booków z obniżonej stawki | Pkt 49: „dostawa książek cyfrowych na wszystkich nośnikach fizycznych, z jednej strony, oraz dostawa książek cyfrowych drogą elektroniczną, z drugiej strony, stanowią sytuacje podobne”. Sentencja: brak elementów podważających ważność pkt 6 zał. III dyrektywy | Neutralne. DKIS powołuje je dla tezy, że w e-booku decyduje treść, nie forma (V7) |
| WSA w Gdańsku | 24.10.2023 | I SA/Gd 593/23 | — (CBOSA niedostępna) | **BRAK** (nie potwierdzono w bazie urzędowej; znane wyłącznie z cytatu DKIS w V10) | Średnie (świadczenie kompleksowe, publikacje) | Nie opisuję tezy (poziom niewystarczający). DKIS przytacza fragment o świadczeniu kompleksowym w odmowie WIS V10 | Do weryfikacji w CBOSA |
| WSA w Warszawie | 06.12.2022 | III SA/Wa 1767/22 | — (CBOSA niedostępna) | **BRAK** (jak wyżej; powołany w cytacie z I SA/Gd 593/23 w V10) | Nieznane | — | Do weryfikacji |

### 4.3. Bilans linii

- **VAT, e-book a 5%.** Linia administracyjna (WIS 2024–2026) jest jednolita i korzystna. Orzeczeń WSA i NSA nie zweryfikowałem (CBOSA niedostępna). Uchwały NSA nie ustaliłem.
- **VAT, wzór do wypełnienia.** Linia przeciwna (23%, CN 4911) to wszystkie nowsze WIS (2022, 2024, 2026 dla „notatnika”). Linia korzystna: jedna WIS z 2021 r. bez weryfikacji CN. Nowsza linia jest jednolita i niekorzystna.
- **VAT, pakiet.** Podstawa to TSUE (C-463/16, C-581/19, C-41/04, wszystkie pełne teksty). Praktyka DKIS z 2026 r.: (a) dla poradnika z załącznikami DOC przyjmuje jedno świadczenie i 5% (V6); (b) dla publikacji, z których jedna jest też sprzedawana osobno, odmawia uznania świadczenia złożonego (V10). Brak orzeczeń polskich sądów o pakiecie e-book + wzory, które mógłbym zweryfikować.
- **Ryczałt, e-booki i szablony.** Linia KIS (2022–2026) jest jednolita: 5,5%. Linia przeciwna (8,5% jako usługa z PKWiU 58.11.30.0 albo 14% jako projektowanie) pojawia się tylko w stanowiskach wnioskodawców, które KIS korygowała (R2) albo przyjmowała w innym zakresie. Sądowej linii przeciwnej nie zbadałem.
- **Ryczałt, licencje.** Linia KIS 2025–2026: 8,5%/12,5%. Wariant 15% (lit. e) nie był przedmiotem oceny.
- Ze względu na brak dostępu do CBOSA **nie używaj** w pismach określeń „utrwalone” ani „ugruntowane” wobec orzecznictwa sądów administracyjnych w tych kwestiach.

---

## 5. Pytania do księgowej i decyzja o WIS lub interpretacji

### 5.1. Pytania do księgowej

1. Czy ewidencja przychodów (program księgowy) ma osobne kolumny dla 17%, 5,5%, 8,5% oraz 8,5%/12,5% (licencje, z limitem 100 000 zł liczonym łącznie dla przychodów z art. 12 ust. 1 pkt 4)? Jak przenosić do niej raporty z Publigo i Przelewy24 (data przychodu, zwroty, prowizje)?
2. Czy księgowa akceptuje 5,5% dla wzorów prawnych bez własnej interpretacji, czy woli 5,5% po interpretacji (ryzyko 17% i 15%)?
3. Jak technicznie rozbić cenę pakietu na pozycje 5% i 23% (paragon z kasy, faktura, raport Publigo)? Jaki klucz alokacji rabatu (proporcja cen jednostkowych) przyjąć i jak go udokumentować (cennik produktów osobnych)?
4. Czy licencje B2B ujmować w ryczałcie jako art. 12 ust. 1 pkt 4 lit. b (8,5%/12,5%), czy ostrożnie 15% (lit. e) do czasu interpretacji?
5. Czy sprzedaż B2C kursów i webinarów do konsumentów z UE jest monitorowana pod kątem limitu 42 000 zł (art. 28k) i miejsca świadczenia (art. 28g ust. 3)?
6. Czy zmiana konfiguracji stawek VAT w Publigo jest możliwa per produkt i per pozycja pakietu, a jeśli nie, czy sprzedawać pakiet jako dwa produkty z rabatem w koszyku?
7. Sprawdzenie na 1.01.2027: brak obwieszczenia z art. 146ef ust. 2 (23% zostaje) oraz zmiany z Dz.U. 2026 poz. 1270 (m.in. art. 113 ust. 1a, załącznik nr 15). Dla kancelarii bez wpływu na stawki produktów, ale do potwierdzenia w programie.

### 5.2. Czy warto wystąpić o WIS lub interpretację

| Wniosek | Organ | Po co | Rekomendacja |
|---|---|---|---|
| **WIS: pakiet „poradnik + wzory” jako jedno świadczenie** (art. 42b ust. 5 pkt 2), z próbką gotowego produktu | DKIS | Potwierdzenie 5% dla całego pakietu w modelu A. Wiąże organy wobec wnioskodawcy (art. 42c ust. 1 pkt 3). Art. 42ha ust. 1: „WIS jest wydawana na okres 5 lat i jest ważna od dnia następującego po dniu jej doręczenia.” | **Tak, jeśli pakiet ma być produktem flagowym.** Przygotować finalny plik: DKIS bada próbkę i odmawia, gdy produkt w sklepie różni się od próbki. Nie sprzedawać wzorów z pakietu osobno (V10). Ryzyko: DKIS uzna wzory za element główny lub odrębny i wyda 23%; wtedy przejść na model B |
| WIS: sam wzór umowy | DKIS | — | **Nie.** Istnieją WIS z 23% na identyczny stan faktyczny (V1, V2); szansa na 5% jest znikoma |
| WIS: poradnik PDF | DKIS | 5% | **Niekonieczne** (jednolita linia). Opcjonalnie dla spokoju przy dużej sprzedaży |
| **Interpretacja indywidualna (ryczałt): wzory umów i pism adwokata sprzedawane wielokrotnie bez porady** | DKIS | 5,5% (wytwórcza) zamiast 17% lub 15% | **Tak.** Brak interpretacji wprost o wzorach prawnych. Różnica 11,5 pkt proc. przychodu. W opisie: brak relacji z klientem, brak personalizacji, brak sprawdzania wypełnionych wzorów, sprzedaż automatyczna, odrębne oznaczenie w ewidencji. Nie podawać kodu PKWiU, tylko szczegółowo opisać czynności: według przytaczanych przez wnioskodawców wyroków NSA organ nie może tego wymagać (sygnatury niezweryfikowane w CBOSA) |
| Interpretacja indywidualna (ryczałt): licencja B2B | DKIS | 8,5%/12,5% zamiast 15% (lit. e) | **Tak, gdy licencje B2B ruszą** i przekroczą kilka tysięcy zł rocznie. Można połączyć z poprzednim wnioskiem jako odrębne zdarzenie przyszłe |
| Interpretacja (ryczałt): webinar z Q&A | DKIS | 8,5% zamiast 17% | Niekonieczne, jeśli Q&A ma charakter ogólny i edukacyjny, bez porad w indywidualnych sprawach |

Kolejność: najpierw interpretacja ryczałtowa dla wzorów (wpływa na wszystkie produkty (a) i (c)), potem WIS na pakiet po przygotowaniu finalnego produktu.

---

### Ślad weryfikacji (roboczy)

- **ELI (15.11.2026), metadane:** DU/2004/535 i DU/2026/1263 (VAT); akty zmieniające DU/2025/896, DU/2025/1811, DU/2026/846, DU/2026/1446, DU/2026/1270, DU/2026/507; DU/1998/930 i DU/2025/843 (ryczałt); DU/2026/779, DU/2026/1098; DU/1991/350 i DU/2026/592 (PIT); DU/2026/1371, DU/2026/1354; DU/2025/1829 (PKWiU 2025); DU/2015/1676 (PKWiU 2015).
- **ELI, wyszukiwarka MP:** 2025–2026, obwieszczenia z art. 146ef ust. 2: brak.
- **Teksty:** odczytano PDF tekstów jednolitych i aktów zmieniających (pdftotext) i stamtąd cytowano.
- **Eureka:** API `wyszukiwarka/informacje` (frazy: e-booków, szablonów, wzorów umów, wzoru dokumentu, dostarczanie drogą elektroniczną wzoru, 4911, honorariów, kursu online, checklisty i in.) oraz `informacje/{id}`. Pełne teksty zapisane lokalnie w katalogu roboczym sesji.
- **TSUE:** Urząd Publikacji UE (cellar), CELEX 62016CJ0463, 62019CJ0581, 62004CJ0041, 62015CJ0390. CELEX 61996CJ0349 (CPP) zwrócił 404, więc CPP znam tylko z cytatów w C-581/19 i w V10.
- **Poprawki do poprzedniej notatki** (`Produkty cyfrowe kancelarii nieruchomości/prawo_etyka_podatki.md`, sekcje 5–6):
  - R1 (982/2025) potwierdzona w Eureka (ID 678792);
  - WIS z 2.06.2026 to 0112-KDSL2-2.440.16.2026.4.EZW (PKWiU 63, 23%);
  - WIS 0112-KDSL2-2.440.269.2025.4.AS dotyczyła e-booka dobieranego algorytmem; w jej tekście nie ma wzmianki o wersji papierowej, więc teza „miał papierowy odpowiednik” ze źródła wtórnego się nie potwierdza;
  - interpretacja 896/2025 daje 8,5% z pkt 5 lit. c;
  - data 639490 według Eureka to 15.05.2025;
  - istnieje WIS wprost o wzorze umowy (V1, 23%). Poprzednia notatka podawała, że takiej nie ma.
