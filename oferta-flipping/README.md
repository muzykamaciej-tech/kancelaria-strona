# Oferta PDF: obsługa prawna flipów mieszkaniowych

Dwustronicowa oferta A4 dla flipperów. Wynik: `Oferta-obsluga-flipow-Kancelaria-Nieruchomosci.pdf`.

Folder jest niezależny od strony www: nie wchodzi do `dist/` ani do hasha źródeł, więc zmiany tutaj nie wymagają przebudowy strony.

## Jak zmienić ceny lub teksty

Wszystko jest w `content.json`:

- `validUntil`: data ważności oferty (trafia do „Warunków”);
- `page1.packages[].price`: ceny (liczba, np. `2900`); te same liczby trafiają do kart na stronie 1 i do wiersza cen w tabeli na stronie 2;
- `page1.packages[].items`: punkty „W pakiecie” na kartach;
- `page2.sections[].rows[]`: wiersze tabeli; `in: [Podstawowy, Rozszerzony, Pełny]` (`true` = ✓, `false` = –);
- `page2.extras`, `page2.terms`, `page2.steps`, `page2.cta`: pozostałe bloki strony 2;
- `page2.showStrip`: `true` włącza wąski pasek ze zdjęciem schodów pod tytułem strony 2 (teraz nie ma na niego miejsca).

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

Linia „Zapas miejsca” pokazuje, ile milimetrów zostało na każdej stronie. Strona 2 ma ok. 5 mm, strona 1 ok. 2 mm. Dłuższy tekst trzeba skrócić albo zmniejszyć odstępy w `styles.css`.

## Pliki

| Plik | Co to |
|---|---|
| `content.json` | cała treść |
| `styles.css` | wygląd; kolory w `:root` |
| `scripts/build.mjs` | content.json → `oferta.html` → PDF (+ kontrola) |
| `scripts/make-fonts.py` | jednorazowo: statyczne instancje fontów z plików zmiennych (`pip install fonttools`) |
| `fonts/` | Fraunces (nagłówki) i Source Sans 3 (tekst), licencja OFL |
| `icons/` | ikony Lucide (ISC) |
| `assets/` | grafiki z Higgsfield i logo; źródła w `assets/ZRODLA.md` |
| `oferta.html` | wygenerowany HTML (można otworzyć w przeglądarce) |
| `podglad/` | podgląd PNG obu stron |
