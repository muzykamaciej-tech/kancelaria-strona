---
name: radar-tresci
description: Radar treści kancelarii. Szuka pomysłów na rolki (Instagram, YouTube, LinkedIn) z dwóch stron. Popyt to to, co ludzie wpisują w Google, YouTube i Bing, pytania z forów, trendy, zmiany przepisów i przybliżenie pytań zadawanych ChatGPT. Wzory to rolki, które wybiły się ponad medianę własnego autora. Agent ustala, dlaczego się wybiły, i daje gotowe scenariusze z hookami i CTA. Używaj, gdy Maciej prosi o pomysły na rolki, filmy lub posty, o analizę viralowych treści czy konkurencji, o trendy albo o to, o co ludzie pytają, a także na /radar-tresci i w cotygodniowym przebiegu.
---

# Radar treści

Cel: co tydzień 5–10 pomysłów na rolki, które odpowiadają na realne pytania ludzi o działki, mieszkania, spadki i budowę. Każdy pomysł ma dowód popytu i sprawdzony wzór, czyli rolkę, która wybiła się ponad normę swojego autora. Wynik to strona raportu (artefakt), na której Maciej z telefonu wybiera, co nagrać.

Konfiguracja: `zrodla.json` (frazy, kanały, konta, adres raportu). Skrypty: `scripts/`. Wyniki przebiegu trafiają do `.radar/RRRR-MM-DD/` w repozytorium (katalog jest w `.gitignore`).

## Zasady kancelarii (obowiązują w każdym pomyśle)

- **CTA** zgodne z modelem pierwszego kontaktu: „Opisz sprawę w formularzu na mecenasodnieruchomosci.pl. W ciągu 24 h roboczych dostaniesz bezpłatną wstępną analizę i ofertę z ceną i terminem.” Bez „darmowej konsultacji”, bez cennika, bez „wyceny” jako nazwy usługi. Wstępna analiza to nie opinia prawna.
- **Bez danych klientów**: żadnych nazwisk, adresów, numerów działek ani KW. Historie spraw tylko zanonimizowane i uogólnione.
- **Etyka adwokacka**: nie obiecuj wyniku ani kwoty („należy Ci się 70 tys.” → „od czego zależy wysokość i jak ją się liczy”), nie deprecjonuj innych prawników, nie pokazuj cudzych spraw. Hook może być mocny, ale prawdziwy.
- **Przepisy i orzeczenia**: każdy przepis i każdą sygnaturę w scenariuszu oznacz jako „do weryfikacji” i wpisz w pole `przepisy`. Brzmienie przepisu sprawdzaj w API ELI (umiejętność `warsztat-kancelarii`). Gdy rolka opiera się na orzecznictwie, użyj umiejętności `badanie-orzecznictwa` (publiczne bazy). LEX tylko na wyraźne polecenie Macieja w danej rozmowie.
- **Link w CTA**: dopasuj podstronę usługi albo wpis na blogu. Slugi znajdziesz w `services-data.jsx` (bloki i usługi, adres `/uslugi/<blok>/<usługa>`) i w `blog-data*.jsx` (`/blog/<slug>`). Jeśli tematu nie ma na stronie, zaznacz w `uwagi`: „brak wpisu na blogu: kandydat na nowy wpis”.

## Przygotowanie

```bash
pip install -q yt-dlp            # jednorazowo w kontenerze; ffmpeg jest w systemie
S=.claude/skills/radar-tresci/scripts
```

Przed startem odczytaj poprzedni raport: `zrodla.json → raport_url` → narzędzie Artifact, `action: "read"`. Z osadzonego JSON-a (`<script id="dane">`) weź `pomysly` i `archiwum`, żeby nie powtarzać tematów i przenieść archiwum dalej.

## Krok 1. Popyt: co ludzie wpisują i o co pytają

1. `python3 $S/popyt.py [--poprzedni <stary popyt.json>]` daje `popyt.md`. Są tam podpowiedzi Google, YouTube i Bing dla każdej frazy (pełne pytania oznaczone „?”, nowe od poprzedniego przebiegu „★”, daty i zmiany przepisów „⏱”), trendy Google PL i świeże wątki z forumprawne.org. Podpowiedzi wskazywane przez kilka wyszukiwarek naraz mają największy wolumen.
2. Aktualności (2–3 wyszukiwania WebSearch): nowe przepisy i terminy z ostatnich 2 tygodni i najbliższych 3 miesięcy (nieruchomości, planowanie, budowlane, najem, spadki, podatki od nieruchomości), uchwały SN i wyroki TK w tych sprawach. Każdą datę i treść zmiany potwierdź w źródle (Dziennik Ustaw, ELI, strona sądu); nie podawaj z pamięci.
3. „Tak pytają czatu”: OpenAI, Google i inne firmy nie udostępniają zapytań do czatów. Najbliższe przybliżenie to pełne pytania z podpowiedzi i tytuły wątków z forum. Przepisz 6–10 najczęstszych tak, jak ktoś zadałby je ChatGPT, pierwszą osobą, z okolicznościami („Mam słup na działce od 30 lat, czy coś mi się należy?”). W raporcie pisz o tym wprost jako o przybliżeniu.
4. Opcjonalnie: widoczność w AI. Dla 3–5 takich pytań sprawdź WebSearch, które strony pojawiają się w odpowiedziach (to głównie z nich korzystają czaty z wyszukiwaniem). Gdy nie ma wśród nich mecenasodnieruchomosci.pl, to kandydat na wpis na blogu.

## Krok 2. Rolki ponad normę autora

Zasada: porównuj rolkę z medianą tego samego autora, nie z innymi kontami. Krotność ≥ 3 = wybiła się, ≥ 10 = petarda. Mediana, bo jedna petarda nie zawyża punktu odniesienia.

**YouTube** (Shorts i filmy):
1. `python3 $S/youtube.py szukaj` daje `youtube-szukaj.md`: co w każdym temacie ma zasięg i kto publikuje w niszy.
2. `python3 $S/youtube.py kanaly` daje `youtube-kanaly.md`. Bierze kanały z `zrodla.json → youtube` i dokłada te z wyszukiwania, które mają ≥ 20 tys. wyświetleń i ≥ 2 trafienia. Kolumna `poz.` (0 = najnowsza) mówi o świeżości: wysokie pozycje dłużej zbierały wyświetlenia.
3. Z serwera w chmurze YouTube blokuje szczegóły pojedynczych filmów (data, polubienia, napisy). Nie obchodź tego. Gdy jest zmienna `YOUTUBE_API_KEY` (YouTube Data API v3), `kanaly` sam dopisze datę, polubienia, komentarze i wyświetlenia na dzień. Na Macu blokady zwykle nie ma.

**Instagram** (lista rolek konta wymaga logowania, więc dane bierzemy z Metricool):
1. Własne rolki: Metricool `getAnalyticsDataByMetrics`, `brandId` z `zrodla.json → konto.metricool_brand_id`, okres ostatnich 120 dni, metryki dokładnie w tej kolejności: `IGRE01, IGRE03, IGRE06, IGRE23, IGRE11, IGRE12, IGRE21, IGRE24, IGRE28` (data, tekst, url, wyświetlenia, zasięg, zapisania, udostępnienia, śr. czas oglądania, % obejrzeń > 3 s). Zapisz odpowiedź do `.radar/DATA/metricool-wlasne.json` i uruchom `python3 $S/instagram.py --metricool .radar/DATA/metricool-wlasne.json --rodzaj wlasne`. „% obejrzeń > 3 s” to siła hooka.
2. Konkurencja: te same narzędzia, metryki `IGCR01, IGCR03, IGCR04, IGCR05, IGCR07, IGCR08, IGCR09, IGCR10` za 60–90 dni, a potem `instagram.py --metricool … --rodzaj konkurencja`. Miarą są polubienia, bo Metricool nie podaje wyświetleń cudzych rolek. Pusta odpowiedź znaczy, że nikt nie jest dodany w Metricool → Konkurencja. Wpisz wtedy do `do_zrobienia` konta z `zrodla.json → instagram`.
3. Pojedyncze linki (z wyszukiwania albo od Macieja): `instagram.py --linki …` pobiera polubienia, komentarze i opis. Instagram przy kilkunastu zapytaniach zwraca 429, więc najwyżej ok. 15 linków na przebieg.

**LinkedIn**: bez logowania nie ma API ani metryk. Przejrzyj WebSearch (`site:linkedin.com/posts <temat> adwokat` / `radca prawny`, profile z `zrodla.json → linkedin`) i opisz formaty jakościowo. Własne statystyki Maciej może wyeksportować z LinkedIn (CSV) i wgrać: wtedy policz krotność jak dla Instagrama.

## Krok 3. Dlaczego się wybiły

Wybierz 8–12 wybić. Pierwszeństwo mają: temat z usług kancelarii, małe i średnie konta (wzór łatwiej przenieść), świeże pozycje, format do nagrania w pojedynkę. Odrzuć kampanie płatne. Ich znaki to seria kilku rolek z bardzo podobną liczbą wyświetleń, krotność ≥ 100 przy małej medianie i marka zamiast autora.

Obejrzyj początek: `python3 $S/klatki.py <url>` wycina klatki z 0, 1, 2, 3, 5, 8 i 12 s do `arkusz.jpg`, który oglądasz narzędziem Read. Działa dla publicznych rolek Instagrama, dla YouTube z chmury nie. Dla 1–3 kluczowych filmów z YouTube można użyć Higgsfield `video_analysis_create` (`youtube_url`), ale tylko gdy Maciej się zgodził, bo zużywa kredyty. Inaczej analizuj tytuł, długość i opis.

Dla każdego wybicia odpowiedz, czym ta rolka różni się od typowej rolki tego autora:
1. **Stawka**: pieniądze (kwota), strata lub zagrożenie, termin, niesprawiedliwość (gmina, deweloper, bank, energetyka kontra „Ty”), konflikt w rodzinie albo z sąsiadem.
2. **Zasięg tematu**: ilu ludzi to dotyczy (słup na działce, zachowek i darowizna od rodziców dotyczą milionów; skarga na MPZP to nisza).
3. **Hook w 1–3 s**: pierwsze zdanie i tekst na ekranie, konkret (liczba, data), „Ty”, pytanie albo teza, zaskoczenie. Czy pierwsza sekunda jest pusta (wejście w kadr, brak napisu)?
4. **Format**: gadająca głowa, skecz, POV, historia sprawy, mit kontra fakt, lista błędów, reakcja na news, kulisy kancelarii.
5. **Osobowość i humor**: skecz z kulis potrafi przebić poradę (u Macieja: kartka „nie przeszkadzać”, 7,7× mediany).
6. **Tytuł, okładka, pierwsza linijka opisu**, wielkie litery na 1–2 słowach.
7. **Długość i tempo**, napisy, cięcia.
8. **Sygnał odbiorców**: udostępnienia (wyślę rodzicom, sąsiadowi), zapisania (lista kontrolna), komentarze (spór, pytanie).
9. **Moment**: news, termin ustawowy, sezon.

Zapisz to jako `co_zadzialalo` (1–2 zdania) i `przenosimy` (konkretny mechanizm do użycia u Macieja).

Własne rolki analizuj tak samo: najlepszą i najsłabszą porównaj na klatkach, sprawdź % obejrzeń > 3 s, udostępnienia i zapisania. Wyciągnij 2–4 lekcje.

## Krok 4. Pomysły na rolki

Daj 5–10 pomysłów. Oceń każdy: popyt (1–3) × przenośny wzór (1–3) × dopasowanie do usług (1–3), a potem posortuj malejąco. Pomiń tematy z archiwum, chyba że jest nowy powód (zmiana przepisów, nowy wzór, nowa fala pytań). Wtedy napisz ten powód w `dlaczego_teraz`.

Każdy pomysł:
- **3 hooki** na pierwsze 2 s, każdy do ok. 10 słów: (a) pytanie z „Ty”, (b) liczba albo termin, (c) przewrotka albo skecz. Napis na ekranie od pierwszej klatki; bez wolnego wejścia w kadr.
- **Szkic** 20–45 s: hook → stawka (dlaczego to ważne dla widza) → 2–3 konkrety → CTA. Rolka ma jedną myśl.
- **Tekst na ekranie** na 0–2 s.
- **CTA** i link do podstrony (zasady wyżej).
- **Przepisy** do weryfikacji, `uwagi` (etyka, brak wpisu na blogu, wersja na LinkedIn).
- Wersja na LinkedIn, gdy temat pasuje do B2B (deweloperzy, wspólnoty, OZE): ta sama treść, spokojniejszy hook, dłuższy opis.

## Krok 5. Raport

1. Złóż `.radar/DATA/raport.json`:

```json
{
  "tydzien": "24 października 2026", "okres": "YouTube: ostatnie 40 pozycji kanałów; Instagram: 120 dni",
  "wnioski": ["3–5 zdań: co najważniejsze w tym tygodniu"],
  "pomysly": [{
    "tytul": "…", "format": "skecz | gadająca głowa | POV | historia sprawy | mit i fakt | lista", "platformy": ["Instagram", "YouTube Shorts", "LinkedIn"],
    "dlaczego_teraz": "…", "dowody": [{"typ": "Google/Bing | forum | trend | przepis", "tekst": "…", "url": "…"}],
    "wzor": {"tytul": "…", "autor": "…", "krotnosc": 7.7, "url": "…", "co": "mechanizm, który bierzemy"},
    "hooki": ["…", "…", "…"], "szkic": ["0–2 s: …", "2–10 s: …", "…", "CTA: …"],
    "tekst_na_ekranie": "…", "cta": "…", "link_strony": "/uslugi/…/…",
    "przepisy": ["art. … (do weryfikacji w ELI/LEX)"], "uwagi": "…"
  }],
  "odstajace": [{"platforma": "YouTube Shorts", "autor": "…", "tytul": "…", "url": "…", "wynik": 554000, "mediana": 1300, "krotnosc": 426, "co_zadzialalo": "…", "przenosimy": "…"}],
  "wlasne": {"podsumowanie": "…", "rolki": [{"data": "2026-10-13", "opis": "…", "url": "…", "wyswietlenia": 18881, "krotnosc": 7.7, "hook": 66.3, "udostepnienia": 136, "zapisania": 24, "sr_czas": 7.4}], "lekcje": ["…"]},
  "popyt": {"pytania": [{"tekst": "…", "zrodla": "G/B"}], "jak_do_ai": ["…"], "forum": [{"tytul": "…", "url": "…", "data": "2026-10-23"}], "aktualnosci": [{"tekst": "…", "url": "…"}]},
  "zrodla": [{"nazwa": "YouTube", "stan": "ok | czesciowo | brak", "opis": "…"}],
  "do_zrobienia": ["…"],
  "archiwum": [{"data": "2026-10-24", "tytul": "…", "status": "proponowany | nagrany | odrzucony"}]
}
```

   `archiwum` = poprzednie archiwum + pomysły z tego przebiegu. Pomysł jest „nagrany”, gdy w danych z Metricool pojawiła się rolka na ten temat; dopisz wtedy jej wynik w `wlasne`.
2. `python3 $S/raport.py .radar/DATA/raport.json` daje `raport.html` (stały szablon `raport-szablon.html`, zmieniają się tylko dane).
3. Publikacja: narzędzie Artifact, `file_path` = `raport.html`. Gdy `raport_url` jest ustawiony, przekaż go jako `url`. Wtedy ta sama strona dostaje nową wersję, a poprzednie zostają w historii. Przy pierwszej publikacji podaj `icon: "chart"`, a adres zapisz w `zrodla.json → raport_url`.
4. Uzupełnij `zrodla.json`: dobre kanały z wyszukiwania dopisz do `youtube`, kanały spoza tematu do `youtube_pomin` (z powodem).
5. W czacie napisz Maciejowi 3 najważniejsze wnioski, 3 pierwsze pomysły (tytuł i hook) i link do raportu.

## Czego radar nie widzi (pisz to w raporcie w `zrodla`)

- Zapytania do ChatGPT i innych LLM nie są publiczne; pokazujemy przybliżenie z podpowiedzi i forów.
- Google Trends podaje dzienne trendy PL; trendy dla konkretnych fraz (explore) zwracają 429, więc zamiast nich służą podpowiedzi.
- Instagram innych kont widzimy przez Metricool → Konkurencja (polubienia, komentarze, bez wyświetleń) albo po pojedynczych linkach.
- LinkedIn bez metryk; TikTok konkurencji niedostępny.
- YouTube z chmury: tylko wyświetlenia i tytuły (bez daty i napisów), chyba że jest `YOUTUBE_API_KEY`.
