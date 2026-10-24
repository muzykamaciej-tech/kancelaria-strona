# lex-mcp: LEX w tle dla Claude

Serwer MCP, który daje Claude'owi trzy narzędzia do LEX (sip.lex.pl, Wolters Kluwer):

| Narzędzie | Co robi |
|---|---|
| `lex_search` | wyszukuje orzeczenia, komentarze, monografie, glosy, artykuły, akty prawne i wzory; zwraca listę z tytułem, typem, sygnaturą, datą, linkiem i fragmentem opisu; zamiast zapytania przyjmuje też link do listy wyników skopiowany z LEX (z filtrami sądu, dat itp. ustawionymi ręcznie) |
| `lex_open` | otwiera dokument i zwraca tekst: całość stronami (`od`, `ile`) albo tylko fragmenty wokół fraz (`szukaj`); `zapisz` zapisuje pełny tekst do `.md` |
| `lex_status` | sprawdza Chrome, dane logowania i próbne logowanie |

Narzędzie nie ma osobnego dostępu do bazy. Korzysta z Twojego konta LEX tak jak przeglądarka, tylko szybciej.

## Dlaczego szybciej niż przez Chrome

- Chrome działa w tle, bez okna i bez zrzutów ekranu. Claude dostaje od razu tekst, nie klika po stronie.
- Przeglądarka zostaje uruchomiona między zapytaniami (zamyka się po 20 min bezczynności). Kolejne wyszukiwanie zmienia tylko adres w już załadowanej aplikacji LEX.
- Sesja jest zapisywana (`~/.lex-mcp/cookies.json`). Logowanie odbywa się samo i tylko wtedy, gdy LEX o nie poprosi.
- Obrazki, czcionki i skrypty reklamowo-analityczne nie są pobierane.
- Do 3 zapytań naraz (osobne karty, jedna sesja). Claude może sprawdzać kilka wariantów zapytania równolegle.
- W długim komentarzu `szukaj: ["art. 172", "dobra wiara"]` zwraca tylko potrzebne fragmenty, a nie cały tom.

## Instalacja (Mac, jednorazowo)

Potrzebne: Google Chrome i Node.js 20+ (ten sam, którego używasz do `npm run build` strony).

```bash
cd ~/…/kancelaria-strona          # Twój lokalny klon repozytorium
git pull
cd narzedzia/lex-mcp
npm install
npm run setup
```

`npm run setup`:

1. pyta o e-mail do konta Wolters Kluwer;
2. zapisuje hasło w pęku kluczy macOS (wpisujesz je dwa razy w okienku polecenia `security`, nie trafia do żadnego pliku);
3. loguje się na próbę w tle i pokazuje wynik;
4. dopisuje serwer `lex` do Claude Desktop (`claude_desktop_config.json`, z kopią zapasową) i do Claude Code (`claude mcp add --scope user`).

Potem uruchom Claude ponownie. W rozmowie wystarczy np. „sprawdź w LEX orzecznictwo o zasiedzeniu służebności przesyłu w złej wierze”.

Zmiana hasła: `npm run setup` jeszcze raz.

## Przykłady wywołań (Claude robi to sam)

```
lex_search  q="zasiedzenie służebności przesyłu zła wiara"  kategoria=orzeczenia_sadow  sort=najnowsze  limit=20
lex_search  q="art. 305(2) k.c."  kategoria=komentarze
lex_search  url="<link do listy wyników z LEX, np. z filtrem Sąd Apelacyjny w Krakowie, 2020–2026>"
lex_open    url="https://sip.lex.pl/#/jurisprudence/522417383"
lex_open    url="…"  szukaj=["dobrej wiary", "art. 172"]
lex_open    nro="522417383"  typ=orzeczenie  zapisz=true
```

Kategorie: `wszystko`, `orzeczenia`, `orzeczenia_sadow`, `orzeczenia_administracji`, `pisma_urzedowe`, `publikacje`, `komentarze`, `komentarze_praktyczne`, `monografie`, `systemy_prawa`, `artykuly`, `glosy`, `linie_orzecznicze`, `akty_prawne`, `pytania_i_odpowiedzi`, `wzory`, `procedury`.

Sortowanie: `trafnosc`, `najnowsze`, `najstarsze`, `waga_orzeczenia`.

## Z Terminala (test, podgląd)

```bash
node bin/lex.mjs status
node bin/lex.mjs search "służebność przesyłu zasiedzenie" --kategoria orzeczenia_sadow --sort najnowsze --limit 10
node bin/lex.mjs open "https://sip.lex.pl/#/jurisprudence/522417383" --szukaj "dobra wiara;zasiedzenie"
node bin/lex.mjs search --url "<link do listy wyników z LEX>"
node bin/lex.mjs search "…" --show      # widoczne okno Chrome: widać, co robi narzędzie
LEX_DEBUG=1 node bin/lex.mjs status     # przebieg krok po kroku (logowanie, adresy, czasy)
```

## Pierwsze uruchomienie: co sprawdzić

Narzędzie zbudowano i sprawdzono bez dostępu do zalogowanego LEX-a. Sprawdzone zostały:

- adresy aplikacji (z publicznego kodu sip.lex.pl);
- logowanie przez formularz Wolters Kluwer, do momentu weryfikacji hasła (złe hasło daje komunikat LEX-a „Nieprawidłowy login lub hasło.” i blokadę dalszych prób tymi samymi danymi, żeby nie zablokować konta);
- odczyt list i dokumentów na publicznych stronach LEX (lista: ok. 2 s, dokument: ok. 3 s, kilka zapytań naraz).

Wyglądu listy wyników i dokumentu po zalogowaniu nie dało się zobaczyć.

Jeśli `lex_search` zwróci „Nie odczytano wyników” albo dziwne pozycje:

```bash
node bin/lex.mjs search "zasiedzenie służebności przesyłu" --show --trace
```

`--trace` zapisuje odpowiedzi wyszukiwarki LEX do `~/.lex-mcp/trace.jsonl`. Plik zostaje na Twoim Macu, bez haseł i ciasteczek. Pokaż go Claude'owi w sesji na Macu: na jego podstawie poprawi odczyt wyników albo przełączy narzędzie na bezpośrednie zapytania do API LEX, co będzie jeszcze szybsze.

## Ustawienia (zmienne środowiskowe, opcjonalne)

| Zmienna | Domyślnie | Znaczenie |
|---|---|---|
| `LEX_SAVE_DIR` | `~/Documents/LEX` | folder dla `zapisz=true` |
| `LEX_IDLE_MIN` | `20` | po ilu minutach bezczynności zamknąć Chrome w tle |
| `LEX_MAX_PAGES` | `3` | ile zapytań naraz |
| `LEX_HEADLESS` | `1` | `0` = widoczne okno |
| `LEX_TRACE` | `0` | `1` = zapis odpowiedzi API do `trace.jsonl` |
| `LEX_DEBUG` | `0` | `1` = przebieg krok po kroku na stderr |
| `LEX_CHROME` | Chrome z `/Applications` | inna przeglądarka (Chromium) |
| `LEX_LOGIN`, `LEX_PASSWORD` | – | zamiast pęku kluczy (np. na innym komputerze) |
| `LEX_HOME` | `~/.lex-mcp` | profil Chrome, ciasteczka, ślad |

W Claude Desktop zmienne ustawia się w `claude_desktop_config.json` (`"env": {…}` przy serwerze `lex`).

## Bezpieczeństwo i licencja

- Hasło jest tylko w pęku kluczy macOS (usługa `lex-mcp`). W repozytorium nie ma żadnych danych logowania.
- `~/.lex-mcp` (profil Chrome, ciasteczka sesji) ma uprawnienia tylko dla Ciebie. Kto ma ten katalog, ma też Twoją sesję LEX. Nie synchronizuj go z chmurą.
- Zasada z umiejętności „badanie-orzecznictwa” zostaje: Claude używa LEX tylko na Twoje wyraźne polecenie w danej rozmowie. Opisy narzędzi to powtarzają.
- Licencja LEX dotyczy Ciebie i zwykle zakazuje masowego pobierania treści automatami. Narzędzie pracuje w tempie człowieka: do 3 kart, bez pobierania całych baz. Używaj go tak, jak używałbyś LEX-a ręcznie.
- Jeśli Twoja licencja pozwala tylko na jedną sesję naraz, logowanie narzędzia może wylogować LEX w Twoim Chrome (i odwrotnie). Wtedy `lex_search` zwróci w diagnostyce komunikat LEX-a.

## Pliki

| Plik | Co robi |
|---|---|
| `src/server.mjs` | serwer MCP (stdio): `lex_search`, `lex_open`, `lex_status` |
| `src/lex.mjs` | Chrome w tle, logowanie, sesja, wyszukiwanie, odczyt dokumentów |
| `src/extract.mjs` | odczyt wyników i treści wewnątrz strony (po linkach do dokumentów, nie po klasach CSS) |
| `src/categories.mjs` | adresy wyszukiwarki i dokumentów LEX, kategorie, sortowanie |
| `src/text.mjs` | sygnatury i daty, sklejanie przewijanego tekstu, fragmenty wokół fraz |
| `src/credentials.mjs` | pęk kluczy macOS / zmienne środowiskowe |
| `bin/lex.mjs` | `setup`, `install`, `status`, `search`, `open` |
| `test/` | `npm test` |
