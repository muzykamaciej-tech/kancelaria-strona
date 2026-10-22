# CRM Kancelarii

Aplikacja webowa dla Kancelarii Nieruchomości (KN) i Kancelarii Rodzinnej (KR). Działa w przeglądarce na każdym komputerze i telefonie. Logowanie kontem Google. Dane leżą w Arkuszach Google na Dysku kancelarii, nie w tym repozytorium.

Wersja 0.2: zadania z delegowaniem w zespole i import terminów z kalendarza.

## Co jest w środku

| Moduł | Co robi |
|---|---|
| Pulpit | Moje zadania z szybkim dodawaniem, zapytania do odpowiedzi z licznikiem „24 h robocze” (bez weekendów i świąt), terminy i konsultacje na 14 dni (z ostrzeżeniem „bez zadania” przy terminie procesowym), oferty czekające na decyzję, moje sprawy, sprawy bez ruchu od 30 dni |
| Zadania | Zlecanie zadań każdemu z dostępem do kancelarii, także „w górę”. Przebieg: Nowe → przyjęte (W toku) → Do sprawdzenia (gdy zaznaczono „wraca do zlecającego”) → Zrobione albo Anulowane. Można zwrócić do poprawy (z komentarzem), przekazać innej osobie, odrzucić (wraca do zlecającego), zmienić termin. Komentarze przy zadaniu, powiadomienia e-mail (tylko konta w domenach kancelarii, każdy może wyłączyć). Szybkie dodawanie jedną linijką: `Wyślij pozew #593 @Julia pt !` (sprawa po numerze teczki, osoba, data słownie, pilne). Widoki: Moje, Zleciłem, Do sprawdzenia, Zespół (obciążenie osób), Wszystkie, Zakończone. Przy terminie: „Zleć przygotowanie” (zadanie 3 dni robocze wcześniej). W karcie sprawy: zakładka Zadania i „+15 min” do czasu pracy. |
| Zapytania | Lejek pierwszego kontaktu. KN: zgłoszenie → wstępna analiza → oferta → zlecenie. KR: zgłoszenie → konsultacja → przyjęcie. Gotowy e-mail z analizą i ofertą (albo z zaproszeniem na konsultację) otwiera się w Gmailu. Konflikt interesów sprawdza się sam. „Przyjmij” zakłada klienta, sprawę z numerem teczki i folder na Dysku. |
| Klienci, Sprawy | Karta sprawy: terminy, korespondencja, czas pracy, umowy i rozliczenia, e-maile z Gmaila, historia zmian. Numer teczki jest wspólny dla obu kancelarii i kontynuuje „Listę Spraw”. Jest też seria P. |
| Terminy | Agenda (zaległe, dziś, jutro, 7 dni) i link „Dodaj do Kalendarza Google”. Kalkulator terminu według art. 111–115 KC uwzględnia soboty i święta, ma gotowe terminy KPC, KPA i PPSA. |
| Korespondencja | Rejestr pism z numeracją P/RRRR/NNN i W/RRRR/NNN, sposobem doręczenia i datą doręczenia |
| Czas pracy | Ewidencja czynności (zastępuje arkusze „Rozliczenie godzinowe”) i wartość według stawki |
| Rejestr umów | Numeracja NN/RRRR wspólna dla obu kancelarii, tak jak w „Rejestrze Umów” |
| Rozliczenia | Zaliczki, faktury i wpłaty przypięte do spraw: do wystawienia, zaległe, godziny nierozliczone |
| Konflikt interesów | Szuka w klientach, stronach przeciwnych i zapytaniach obu kancelarii |
| Zespół i dostępy | Kto widzi którą kancelarię i z jaką rolą: administrator, prawnik, asystent, tylko odczyt. Administrator jednej kancelarii zarządza tylko jej zespołem i danymi; ustawienia wspólne (numeracja, domeny, wspólne słowniki) zmienia administrator obu kancelarii. |
| Import rejestrów | Zgłoszenia ze strony, „Lista Spraw”, „Rejestr Umów”, notatki spraw z Obsidiana, wpisy „TERMIN - …” z Kalendarza Google albo z pliku .ics. Powtórny import pomija wiersze już przeniesione, a przy terminach zamyka te, przy których w kalendarzu dopisano „(zrobione)”. |

## Gdzie są dane i jak działa dostęp

- Na Dysku administratora powstaje folder „CRM Kancelarii”. W nim są:
  - arkusz „zespół i ustawienia”;
  - po jednym arkuszu danych na kancelarię;
  - folder na sprawy (przy konfiguracji można wskazać istniejące foldery „Sprawy - Nieruchomości” i „Akta spraw”).
- Aplikacja działa z uprawnieniami osoby, która ją otwiera. Arkusz kancelarii jest udostępniony tylko jej zespołowi, więc Google pilnuje dostępu także poza aplikacją.
- Dodanie osoby w „Zespół i dostępy” udostępnia jej arkusz i folder spraw zaznaczonych kancelarii. Wyłączenie dostępu zabiera udostępnienia.
- Do zespołu wchodzą tylko konta w domenach kancelarii (domeny z adresów kancelarii; wyjątki w Ustawieniach). Osoba może mieć kilka kont (aliasy) i na każdym widzi te same zadania.
- Reguły zadań (kto przyjmuje, zatwierdza, usuwa) pilnuje aplikacja. Kto ma arkusz otwarty bezpośrednio, technicznie może go edytować. Arkusz pokazuje wtedy ostrzeżenie, a zmiana zostaje w Historii (do decyzji: tryb „dane tylko przez aplikację”, patrz niżej).
- Gmail jest tylko do odczytu i pokazuje wiadomości ze skrzynki osoby, która akurat korzysta z aplikacji. Wysyłka zawsze idzie przez okno Gmaila, w którym widać treść przed wysłaniem.
- Każda zmiana trafia do zakładki „Historia” (kto, kiedy, co było → co jest). Usunięty rekord zostaje tam w całości.

## Wdrożenie (pierwszy raz, ok. 10 minut, na komputerze)

1. Włącz „Google Apps Script API” na https://script.google.com/home/usersettings. Zaloguj się kontem, na którym mają leżeć dane: maciej.muzyka@mecenasodnieruchomosci.pl.
2. W katalogu repozytorium uruchom:
   ```bash
   bash crm/wdroz.sh
   ```
   Skrypt testuje kod, loguje do Google, zakłada projekt „CRM Kancelarii” i publikuje aplikację. Na końcu wypisuje jej adres.
3. Otwórz adres i zatwierdź zgody Google.
   - Aplikacja nie jest zweryfikowana przez Google (to wewnętrzne narzędzie). Wybierz „Zaawansowane → Przejdź do CRM Kancelarii”.
4. Na ekranie „Konfiguracja CRM”:
   - sprawdź dane kancelarii i zespół;
   - kliknij „Wyszukaj istniejące foldery”;
   - wpisz ostatni numer z „Listy Spraw”;
   - kliknij „Utwórz CRM”. Zaznaczone osoby od razu dostają dostęp.
5. W menu „Import rejestrów”: „Znajdź pliki na moim Dysku”, potem po kolei:
   1. zgłoszenia ze strony;
   2. Lista Spraw (przypisz kolory komórek do statusów, a opiekunów do osób);
   3. Rejestr Umów;
   4. notatki z Obsidiana.
6. Opcjonalnie: automatyczny import zgłoszeń co 15 minut. W edytorze Apps Script wybierz funkcję `wlaczAutoImport` i kliknij „Uruchom”.
7. Wyślij zespołowi adres aplikacji: „Zespół i dostępy” → „Kopiuj”.

Bez skryptu (ręcznie):
1. Na script.google.com utwórz nowy projekt.
2. W ustawieniach projektu włącz „Pokaż plik manifestu appsscript.json”.
3. Skopiuj pliki z `crm/src/` (pliki `.js` jako pliki skryptu, `.html` jako HTML).
4. Wybierz „Wdróż → Nowe wdrożenie → Aplikacja internetowa” z ustawieniami:
   - Wykonuj jako: „Użytkownik uzyskujący dostęp do aplikacji internetowej”;
   - Kto ma dostęp: „Każda osoba z kontem Google”.

## Poprawki i nowe wersje

```bash
node crm/dev/test-server.mjs             # testy logiki (fail 0)
node crm/dev/build-demo.mjs              # podgląd z danymi fikcyjnymi: crm/demo/index.html
node crm/dev/test-ui.mjs                 # test podglądu w Chromium (fail 0) + zrzuty ekranu
bash crm/wdroz.sh                        # wgranie zmian; adres aplikacji bez zmian
```

Schemat danych (tabele, pola, słowniki, zespół z papieru firmowego) jest w `src/Konfiguracja.js`. Nowe pole wystarczy dopisać tam: kolumna w arkuszu doda się sama, a formularz i karta zbudują się ze schematu.

`crm/` nie wchodzi do builda strony: `scripts/source-hash.mjs` liczy tylko pliki z katalogu głównego i `assets/`.

## Import terminów z kalendarza

Kalendarz sekretariatu musi być widoczny dla konta, którym uruchamiasz import („Udostępnij ze wszystkimi szczegółami wydarzeń”). Zamiast tego można wczytać plik .ics: Kalendarz Google → Ustawienia → Importuj i eksportuj → Eksportuj.

- Brane są wydarzenia całodniowe i trwające co najmniej 23 h (zespół wpisywał je też jako 07:00–07:00).
- Tytuł: „TERMIN - klient czynność”. „(zrobione)” na początku lub na końcu oznacza wykonany, „(ODWOŁANA)” nieaktualny. Przeszłe wpisy bez znacznika dostają status „Do weryfikacji”.
- Dopasowanie do sprawy: numer teczki „(593)”, sygnatura, nazwisko klienta (także odmienione). „Pewne” tylko po numerze, sygnaturze albo nazwisku; samo imię daje „prawdopodobne”. W podglądzie każdą sprawę można zmienić przed zapisem.
- Opcja: przy każdym otwartym terminie zadanie „Przygotować: …” dla prowadzącego, 3 dni robocze wcześniej.
- Import można powtarzać. Kluczem jest identyfikator wpisu w kalendarzu (ten sam w Kalendarzu Google i w pliku .ics). Dla terminów wciąż otwartych w CRM:
  - dopisane „(zrobione)” zamyka termin;
  - „(ODWOŁANA)” unieważnia termin i anuluje jego zadanie przygotowania;
  - przesunięcie wpisu zmienia datę terminu i zadania przygotowania, chyba że ktoś poprawił datę w CRM (wtedy CRM ma pierwszeństwo).
  Terminów zamkniętych w CRM kalendarz już nie zmienia. Każda zmiana z importu trafia do Historii.

## Do ustalenia i następne kroki

- Czy dane KR mają leżeć na koncie w domenie kancelariarodzinna.com (s.c.)? Wtedy przy konfiguracji odznacz „Załóż teraz” dla KR. Bazę KR załóż potem w Ustawieniach, zalogowany kontem KR z rolą administratora.
- Legenda kolorów w „Liście Spraw”: przy imporcie domyślnie szare = zakończone, reszta = aktywne.
- Integracje na kolejne wersje:
  - Todoist: zadania z terminów;
  - Fakturownia: faktury do rozliczeń;
  - Calendly: konsultacje KR jako zapytania;
  - szkic odpowiedzi w Gmailu zamiast okna wysyłki;
  - import arkuszy „Rozliczenie godzinowe” do czasu pracy.
