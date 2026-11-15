# Plan uruchomienia sklepu

Stan na 15.11.2026 (z decyzjami z tego dnia: polisa OC poza planem, Vercel na razie na planie darmowym, KSeF podłączony do Fakturowni). Cel: do **11.01.2027** w sprzedaży są trzy płatne pakiety i jeden darmowy wzór, na czas styczniowo-lutowego szczytu wypowiedzeń najmu. Plan opiera się na raporcie „Produkty cyfrowe kancelarii nieruchomości” i „Katalogu wzorów i pakietów”, z decyzją z 7.11.2026, że produkty nie mają aktualizacji po zakupie.

## Co się zmieniło od raportu

Kilka rzeczy na `main` ułatwia sklep:

- **Ceny na stronie są dozwolone** (decyzja z 2.11.2026, `CLAUDE.md`). Odpada konflikt z zasadą „bez cennika”, który opisywał raport.
- **Wzór strony z cenami już jest**: `/oferta/<slug>` (`offers.jsx`, `offers-data.jsx`) ma karty cenowe, JSON-LD z ofertą i pomocnicze funkcje cen. Strony produktów można zbudować na tym samym wzorze.
- **Skarbnica wiedzy ma 120 poradników** zweryfikowanych w LEX. To gotowy lejek: pod poradnikiem o wypowiedzeniu najmu może stać pakiet „Najemca nie płaci”. Jednocześnie płatny produkt nie może powtarzać darmowego poradnika. Płatne są wzory, checklisty, kalendarze terminów i instrukcje, a nie ten sam tekst.

Do zrobienia technicznie: gałąź robocza z poprawkami „wzorów z internetu” i raportami jest 31 commitów za `main`. Przed pracą nad sklepem trzeba scalić `main` z gałęzią, przebudować `dist/` i przekazać poprawki do akceptacji.

## 1. Decyzje, których potrzebuję od Ciebie

| # | Decyzja | Moja rekomendacja | Dlaczego |
|---|---|---|---|
| 1 | Platforma sklepu | **Publigo GO Plus** (177 zł netto miesięcznie, 157 zł przy płatności rocznej) | bez prowizji od sprzedaży, polskie bramki, Fakturownia, znak wodny PDF, historia cen Omnibus. Przed zakupem planu sprawdzić w 15-dniowym okresie próbnym trzy rzeczy z punktu 3 |
| 2 | Bramka płatności | **Przelewy24** | ok. 1,58 zł od sprzedaży za 99 zł; BLIK i karty |
| 3 | Gdzie stoi koszyk | strony produktów na mecenasodnieruchomosci.pl/wzory, koszyk na subdomenie platformy (np. sklep.mecenasodnieruchomosci.pl) | opisy produktów pracują na pozycję strony w Google, a płatności, pliki i faktury obsługuje platforma |
| 4 | W jakiej firmie | w obecnej działalności kancelarii, z osobnym rachunkiem bankowym i osobną ewidencją przychodów | jedna osoba nie może mieć dwóch wpisów w CEIDG; spółka ma sens dopiero przy większej sprzedaży |
| 5 | Pierwsza fala | **Flip Start z modułem Okazje**, **Najemca nie płaci**, **Działka przed zadatkiem**; darmowy **protokół zdawczo-odbiorczy** | jak w katalogu: materiał do flipa już jest, najem ma szczyt w styczniu, przy działce nie ma konkurencji |
| 6 | Ceny pilotażu | Flip Start z Okazjami 349 zł, Najemca nie płaci 199 zł, Działka przed zadatkiem 199 zł (brutto) | środek przedziałów z katalogu |
| 7 | Sposób podawania cen | dla osób prywatnych **cena brutto jako główna**; licencje B2B netto z brutto w nawiasie | konsumentowi trzeba podać cenę, którą zapłaci, z podatkiem. Zasada z `CLAUDE.md` „netto z brutto w nawiasie” dotyczy usług. Dla produktów warto dopisać wyjątek |
| 8 | Nazwa i adres sekcji | „Wzory i poradniki”, adresy `/wzory` i `/wzory/<slug>` | odróżnia produkty od pakietów usług w `/oferta`. Sklepu nie nazywać „kancelarią adwokacką”: regulamin NRA zastrzega tę nazwę dla pomocy prawnej (do sprawdzenia) |

## 2. Sprawy formalne: Ty i księgowa

Te sprawy biegną równolegle z produktami. Podatki, kasę i PKD ustaliłem 15.11.2026 (notatki w `research_notes/Podatki PKD i kasa sklepu/`); księgowa ma je tylko potwierdzić.

| Sprawa | Kto | Do kiedy | Blokuje start? |
|---|---|---|---|
| **Księgowa**: potwierdzenie ustaleń: VAT 5% dla poradnika PDF do czytania i 23% dla wzorów, zwolnienie z kasy (poz. 42). Podatek liniowy 19%, więc stawki ryczałtu nie mają znaczenia | Ty i księgowa | 30.11 | **tak** |
| **PKD 2025 w CEIDG**: przeniesienie wpisu na PKD 2025 i dopisanie 58.11.Z i 58.19.Z (85.59.B przy kursach); kod przeważający 69.10.Z | Ty | **31.12.2026** (termin ustawowy); nowe kody w 7 dni od startu sprzedaży | nie, ale ma twardy termin |
| **Komisja Etyki ORA w Lublinie**: zapytanie o sprzedaż wzorów pod nazwiskiem adwokata | Ty | wysłać do 22.11 | nie: przepisy tego nie zakazują, to zabezpieczenie |
| **Interpretacja podatkowa**: zwolnienie z kasy (projekt wniosku z 15.11.2026 w Claude Docs: „Wniosek o interpretację: zwolnienie z kasy”, opłata 40 zł); ewentualnie **WIS** dla pakietu poradnik + wzory | Ty | wniosek do 30.11; organ ma do 3 miesięcy | nie |
| **Osobny rachunek bankowy** na sprzedaż produktów | Ty | 30.11 | tak, jeśli wybierzesz oddzielenie z punktu 1.4 |
| **Vercel**: na razie plan darmowy (decyzja z 15.11). Regulamin planu Hobby wyklucza użycie komercyjne, a dotyczy to już dziś strony kancelarii, nie tylko sklepu | Ty | do decyzji | nie |

Pisma do ORA i księgowej mogę przygotować jako szkice w Gmailu.

## 3. Platforma, płatności, faktury

Konta zakładasz Ty, bo każde wymaga Twoich danych i weryfikacji tożsamości. Konfigurację mogę rozpisać krok po kroku.

1. **Okres próbny Publigo**: przed płatnym planem sprawdzić trzy rzeczy, których platforma nie potwierdza w dokumentacji:
   - osobny, niezaznaczony checkbox o braku aktualizacji;
   - checkbox zgody na dostarczenie pliku przed upływem 14 dni i utratę prawa odstąpienia;
   - przekazanie NIP kupującego do faktury w Fakturowni i dalej do KSeF;
   - pakiet jako dwie pozycje z różnymi stawkami VAT (poradnik 5%, wzory 23%) albo dwa produkty w koszyku z kodem rabatowym.

   Jeśli któregoś brak, zapasem jest Easytools albo heyhey.
2. **Przelewy24**: wniosek o konto. Bramki zwykle sprawdzają przed aktywacją stronę sklepu: regulamin, dane sprzedawcy, ceny. Dlatego regulamin musi być gotowy wcześniej (punkt 5).
3. **Fakturownia**: konto, połączenie z KSeF, integracja z Publigo.
4. **MailerLite**: konto (darmowe do 250 osób), formularz zapisu po darmowy protokół z osobną zgodą na e-mail marketing, sekwencja powitalna.
5. **Konfiguracja koszyka**:
   - produkty z plikami i znakiem wodnym z e-mailem kupującego;
   - przycisk „Zamawiam i płacę” (ustawa wymaga sformułowania typu „zamówienie z obowiązkiem zapłaty”);
   - e-mail po zakupie z potwierdzeniem zgód w PDF, żeby konsument miał je na trwałym nośniku;
   - najniższa cena z 30 dni przy promocjach.
6. **Zwolnienie z kasy (poz. 42)**: w Publigo tylko Przelewy24 i przelew (bez gotówki i bonów), pole „kupuję jako firma” z NIP przed zapłatą, numer zamówienia w opisie transakcji P24, raport paczkowy P24 po każdej wypłacie, comiesięczne uzgodnienie zamówień, raportów P24 i wyciągu dla księgowej.
7. **Zakupy testowe**: BLIK i karta, faktura dla konsumenta i dla firmy z NIP (sprawdzić numer KSeF), zwrot, e-mail z plikiem.

## 4. Produkty pierwszej fali

Dla każdego produktu ten sam cykl: ja piszę szkic z treści strony i Skarbnicy, Ty sprawdzasz przepisy w LEX i akceptujesz, ja składam pliki DOCX i PDF w jednym układzie graficznym.

| Produkt | Skąd materiał | Zawartość | Twój czas na recenzję |
|---|---|---|---|
| Flip Start z modułem Okazje | usługi „Flip mieszkania” i „Profesjonalni inwestorzy i firmy flippingowe” | checklista przed zadatkiem, umowa przedwstępna, umowa o remont, protokoły wydania i stanu lokalu, lista ustaleń do aktu, kalendarz flipa, checklisty licytacji, spadku i cesji | ok. 4–5 h |
| Najemca nie płaci | usługi z bloku najmu i poradniki Skarbnicy o wypowiedzeniu, kaucji i eksmisji | wezwanie, uprzedzenie, wypowiedzenie, żądanie opróżnienia lokalu, rozliczenie kaucji, kalendarz eksmisji | ok. 3 h |
| Działka przed zadatkiem | blok 1, seria o WZ, przykładowy raport audytu | checklista w trzech kolorach, umowa przedwstępna kupna działki, wniosek o wypis i wyrys, instrukcja wniosku o WZ | ok. 3 h |
| Protokół zdawczo-odbiorczy (darmowy) | blok najmu | protokół z instrukcją dokumentacji zdjęciowej | ok. 1 h |

Budowa produktu wpływa na VAT. Poradnik do czytania (spis treści, komentarz, przykłady) ma 5%, a wzór do wypełnienia i checklista do odhaczania 23%. Pakiet sprzedajemy jako poradnik i wzory z rozbitą ceną (5% i 23%), chyba że WIS potwierdzi 5% dla całości.

Każdy plik ma standard z katalogu: autor i stan prawny na dzień, instrukcja z przykładem na fikcyjnych danych, przepisy z linkiem ELI, kalendarz terminów i „kiedy wzór nie wystarczy” z odesłaniem do formularza. Przy flipie i najmie część czerwonych flag może prowadzić do stron `/oferta`, jeśli powstaną dla tych usług.

## 5. Strona: moja część

1. **Scalenie `main` z gałęzią roboczą**, przebudowa `dist/`, `check.mjs` z wynikiem `fail 0`.
2. **Dane produktów** w `products-data.jsx`: nazwa, cena brutto, **stawka VAT osobno dla każdego produktu** (obecne `offers-data.jsx` liczy wszystko z 23%), stan prawny na dzień, link do koszyka, powiązane usługi i poradniki.
3. **Strony**: katalog `/wzory` i strona produktu `/wzory/<slug>`. Trasy w `app.jsx`, opisy do Google, JSON-LD z ofertą, trasy w `prerender.mjs`, `llms.txt`.
4. **Linki**: menu i stopka, sekcja „Wzory do tej sprawy” na stronach usług, ramka pod pasującymi poradnikami Skarbnicy. `check.mjs` odrzuca strony bez linków prowadzących do nich.
5. **Strony prawne**:
   - nowa strona `/regulamin-sklepu`: sprzedawca, produkty, płatności, dostarczenie, licencja, odstąpienie i jego utrata, brak aktualizacji, reklamacje, „nie jest poradą w Twojej sprawie”;
   - polityka prywatności z platformą, bramką, Fakturownią i MailerLite. Przy okazji poprawię dawną niespójność: polityka wymienia tylko Formspree, a formularz wysyła dane do Google Apps Script;
   - baner cookies, jeśli formularz MailerLite albo przycisk koszyka ustawia własne pliki cookie.
6. **Darmowy protokół**: formularz zapisu z osobną zgodą, e-mail z plikiem.
7. **Pomiar w GA4**: wejście na produkt, kliknięcie „Kup”, zapis po darmowy wzór, a jeśli Publigo to umożliwia, także zakup.
8. **Podgląd na gałęzi** i Twoja akceptacja, potem `main`.

Szacuję 4–6 sesji pracy, plus Twoje poprawki do treści.

## 6. Marketing na start

- **Sekwencja e-maili** (3–5 wiadomości) dla osób, które pobrały protokół: co sprawdzić przed wynajmem, najczęstsze błędy w wypowiedzeniu, kiedy wzór nie wystarczy. Szkice przygotuję ja.
- **Ramki w Skarbnicy** pod poradnikami o najmie, flipie i zakupie działki.
- **Flipperzy, z którymi pracujesz**: informacja o pakiecie, ale e-mail marketingowy tylko do osób ze zgodą (art. 398 Prawa komunikacji elektronicznej).
- **Bez typowych chwytów sklepów**: bez liczników czasu, straszenia i porównań z konkurencją (§ 23 KEA). Opinie kupujących dopiero z opisem, jak są weryfikowane.

## 7. Harmonogram

| Termin | Ty | Ja |
|---|---|---|
| 16–22.11 | decyzje z punktu 1; pytania do ORA i księgowej; wniosek o zmianę wpisu w CEIDG (PKD 2025); okres próbny Publigo; wniosek do Przelewy24 | scalenie z `main`; szkic regulaminu sklepu i polityki prywatności; szkic Flip Start |
| 23.11–6.12 | recenzja regulaminu i Flip Start w LEX; Fakturownia i KSeF; MailerLite | szkice Najemca nie płaci, Działka przed zadatkiem, protokół; strony `/wzory` na podglądzie |
| 7–13.12 | recenzja dwóch pakietów; konfiguracja koszyka | pliki DOCX i PDF; linki ze stron usług i Skarbnicy; formularz zapisu; GA4 |
| 14–20.12 | zakupy testowe; akceptacja podglądu | poprawki; sekwencja e-maili; publikacja na `main` po akceptacji |
| do 31.12 | PKD 2025 w CEIDG | — |
| 4–11.01.2027 | start sprzedaży | ramki w Skarbnicy pod poradnikami o najmie |
| 12.01–28.02 | obserwacja sprzedaży i zapytań | druga fala według kalendarza: Najem okazjonalny: start przed lipcem, Odbiór i wady przed sierpniem |
| koniec kwietnia | przegląd po 3 miesiącach: sprzedaż, zapisy, sprawy z formularza po zakupie | zestawienie danych i rekomendacja, czy rozbudowywać sklep |

Grudzień jest najsłabszym miesiącem wyszukiwań, więc to dobry czas na testy i miękki start, np. pakiet flipera dla znanych klientów.

## 8. Koszty stałe

| Pozycja | Koszt |
|---|---|
| Publigo GO Plus | 157–177 zł netto miesięcznie |
| Fakturownia | według planu; KSeF działa w każdym |
| MailerLite | 0 zł do 250 osób, potem od 12 USD miesięcznie |
| Przelewy24 | ok. 1,3% + 0,30 zł od sprzedaży (oferta dla nowych klientów) |

## 9. Kiedy projekt jest skończony

- Trzy płatne pakiety i darmowy protokół są w sprzedaży, a strony `/wzory` są w mapie strony i mają linki z usług i Skarbnicy.
- Zakup przez BLIK i kartę działa. Konsument dostaje plik ze znakiem wodnym i e-mail z potwierdzeniem zgód. Firma dostaje fakturę z numerem KSeF.
- W koszyku są trzy checkboxy: regulamin, zgoda na natychmiastowe dostarczenie z utratą prawa odstąpienia i brak aktualizacji.
- Regulamin sklepu i nowa polityka prywatności są opublikowane.
- Sprawy formalne są zamknięte: potwierdzenie księgowej, PKD 2025 w CEIDG, procedura dokumentów do zwolnienia z kasy. Zapytanie do ORA jest wysłane.
- GA4 mierzy wejścia, kliknięcia „Kup” i zapisy.
- Jest ustalone, kto po każdej nowelizacji przegląda katalog i poprawia albo zdejmuje produkt.

## Co mogę zrobić od razu

- Scalić `main` z gałęzią roboczą i przygotować poprawki „wzorów z internetu” do akceptacji.
- Napisać szkice regulaminu sklepu i polityki prywatności.
- Napisać szkic Flip Start z modułem Okazje.
- Przygotować w Gmailu szkice pism do ORA i księgowej.
- Wpisać zadania z tego planu do Todoist.
