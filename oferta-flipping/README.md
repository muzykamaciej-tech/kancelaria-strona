# Oferta PDF: obsługa prawna flipów mieszkaniowych

Dwustronicowa oferta A4 dla flipperów. Wynik: `Oferta-obsluga-flipow-Kancelaria-Nieruchomosci.pdf`.

Folder jest niezależny od strony www: nie wchodzi do `dist/` ani do hasha źródeł, więc zmiany tutaj nie wymagają przebudowy strony.

## Jak zmienić ceny lub teksty

Wszystko jest w `content.json`:

- `validUntil`: data ważności oferty (trafia do „Warunków”);
- `page1.packages[].price`: ceny (liczba, np. `2900`); te same liczby trafiają do kart na stronie 1 i do wiersza cen w tabeli na stronie 2;
- `page1.packages[].items`: punkty „W pakiecie” na kartach;
- `page2.sections[].rows[]`: wiersze tabeli; `in: [Podstawowy, Rozszerzony, Pełny]` (`true` = ✓, `false` = –);
- `page1.packages[].icon`: ikona Lucide na górze karty (plik z `icons/`);
- `page1.titleAccent`: końcówka tytułu, która idzie do drugiego wiersza w jasnym błękicie;
- `page2.extras`, `page2.terms`, `page2.steps`, `page2.cta`: pozostałe bloki strony 2.

Twarde spacje, półpauzy i cudzysłowy „…” wstawia skrypt. W `content.json` pisz zwykłe spacje.

## Budowanie

```bash
cd oferta-flipping
npm install                       # pierwszy raz
npx playwright install chromium   # pierwszy raz (Chromium dla Playwright)
npm run build                     # PDF
npm run preview                   # PDF + podgląd PNG 150 dpi w podglad/
```

Skrypt sam sprawdza i kończy się błędem, jeśli:

- PDF ma inną liczbę stron niż 2;
- coś wystaje poza stronę (np. po dopisaniu tekstu);
- fonty się nie załadowały;
- PDF ma 4 MB lub więcej.

Linia „Zapas miejsca” pokazuje, ile milimetrów zostało na każdej stronie (strona 1 ok. 2,5 mm, strona 2 ok. 7,5 mm, z czego 4 mm to stały odstęp nad ramką kontaktu). Dłuższy tekst trzeba skrócić albo zmniejszyć odstępy w `styles.css`.

## Pliki

| Plik | Co to |
|---|---|
| `content.json` | cała treść |
| `styles.css` | wygląd wg `Design/design.md` (Lora, błękit #0E53A5, slate); kolory w `:root` |
| `scripts/build.mjs` | content.json → `oferta.html` → PDF (+ kontrola) |
| `scripts/make-fonts.py` | jednorazowo: statyczne instancje fontów z plików zmiennych (`pip install fonttools`) |
| `fonts/` | Lora (jedyny krój marki), statyczne odmiany 400/500/600/700 + kursywa, licencja OFL |
| `icons/` | ikony Lucide (ISC) |
| `assets/` | zdjęcie hero z Higgsfield i logo; źródła w `assets/ZRODLA.md` |
| `oferta.html` | wygenerowany HTML (można otworzyć w przeglądarce) |
| `podglad/` | podgląd PNG obu stron |
