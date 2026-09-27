# kancelaria-strona — mecenasodnieruchomosci.pl

Strona kancelarii adw. dr. Macieja Muzyki. Źródła: pliki JSX/CSS z Claude Design ładowane jako globalne skrypty (kolejność w `index.html`). Produkcja: Vercel, gałąź `main`. Każda inna gałąź to podgląd chroniony logowaniem Vercel.

## Najważniejsza zasada: po każdej zmianie przebuduj `dist/`

Vercel niczego nie buduje. Serwuje katalog `dist/` z repozytorium (`vercel.json`: `outputDirectory: dist`). Krok „build” na Vercel (`scripts/verify-dist.mjs`) odrzuca wdrożenie, jeśli `dist/` jest starszy niż źródła. Wtedy produkcja zostaje na poprzedniej wersji.

Po każdej zmianie w `*.jsx`, `*.css`, `index.html` lub `assets/`:

```bash
npm install          # tylko pierwszy raz
caffeinate -i npm run build           # Babel raz + prerender 120+ tras w Chrome (ok. 2-3 min)
node scripts/check.mjs                # musi dać: fail 0
```

Potem commit razem z `dist/`. Najpierw push na gałąź roboczą (podgląd), a na `main` dopiero po akceptacji Macieja.

`caffeinate -i`: Mac usypia i zawiesza długie zadania.

## Dodawanie wpisu na blog

- Wpis dopisuj do `blog-data-*.jsx` (np. `window.BLOG.push({...})`, jak w `blog-data-6.jsx`), a nowy plik dodaj w `index.html` przed `services-data.jsx`.
- Wymagane pola:
  - `slug` (ASCII, bez polskich znaków);
  - `iso: 'RRRR-MM-DD'`;
  - `date` (słownie, do wyświetlania);
  - opcjonalnie `updated` (słownie) i/lub `updatedIso`;
  - `cover: '/assets/…'` (ścieżka od `/`; build i tak poprawia `assets/…`);
  - opcjonalnie `metaDesc` (pełne zdania, do 155 znaków, tylko z treści wpisu). Bez niego opis w Google to ucięty `excerpt` z „…”. To samo pole działa w `SERVICE_CONTENT` (usługi) i `SERVICE_BLOCKS` (bloki).
- Po `npm run build` wpis dostaje:
  - własny adres `/blog/<slug>`;
  - gotowy HTML;
  - wpis w `sitemap.xml` i `llms.txt`.

## Linki i nawigacja

- Adresy są ścieżkami (`/uslugi/<blok>/<usługa>`, `/blog/<slug>`), nie `#/`.
- Nawigacja wewnętrzna: `<window.NavLink route="usluga" slug={s.slug} className="…">`, bo renderuje prawdziwe `<a href>`. Nie używaj `<button onClick={() => setRoute(...)}>` do nawigacji (robot nie widzi takich linków).
- Linki w treści mogą być zwykłymi `<a href="/kontakt">`, bo router je przechwytuje.
- Nowy adres zastępuje stary? Dodaj przekierowanie w `vercel.json` → `redirects`.

## Treść i zasady kancelarii

- Bez płatnych konsultacji: wejście to formularz → wycena w 24 h; analiza dokumentów wyceniana per sprawa.
- Marketing bez danych klientów (nazwiska, adresy, numery działek i KW).
- Każda sygnatura i każdy przepis przed publikacją do weryfikacji w LEX/Legalis/CBOSA. Stare wpisy z WIX miały błędy prawne (archiwum i ocena: Dysk, `Marketing/Strona www/Archiwum WIX 2026-09-25/`).

## Skrypty

| Skrypt | Co robi |
|---|---|
| `scripts/build.mjs` | JSX → jeden `app.<hash>.js`, CSS → `styles.<hash>.css`, vendor, assets |
| `scripts/prerender.mjs` | renderuje każdą trasę w Chrome, zapisuje HTML, `sitemap.xml`, `robots.txt`, `llms.txt` |
| `scripts/check.mjs` | canonical, JSON-LD, linki, osiągalność, 404, stare `#/`; `--visual` porównuje zrzuty z produkcją |
| `scripts/serve.mjs` | lokalny podgląd: `node scripts/serve.mjs dist 4173` |
| `scripts/verify-dist.mjs` | krok „build” na Vercel: blokuje nieaktualny `dist/` |
