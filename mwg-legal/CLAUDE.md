# mwg-legal — strona MWG Legal (Muzyka Goździewski Wspólnicy)

Statyczna strona bez zależności. Źródła w `src/` (treści w `src/content.mjs`), statyka w `static/`, wynik w `dist/` (nie commitujemy, Vercel buduje sam: `node build.mjs`).

Po każdej zmianie:

```bash
node build.mjs && node tools/check.mjs   # musi dać: fail 0
```

Zasady:
- Treści tylko w `src/content.mjs`. Wpisy z komentarzem `DO_POTWIERDZENIA` wymagają zgody wspólników.
- Teksty marketingowe zgodne z zasadami etyki adwokackiej: informacja o kancelarii, bez porównań, rankingów, superlatywów i obietnic wyniku. Bez danych klientów.
- Każdy przepis i każda sygnatura przed publikacją do weryfikacji w LEX/Legalis/CBOSA.
- Ilustracje generuje `tools/illustrations/render.mjs` (szkic ołówkiem + niebieska akwarela). Nowe grafiki w tym samym stylu dopisuj jako funkcje w `scenes.mjs`.
- Nawigacja to zwykłe linki `<a href>` z adresami ścieżkowymi (`/specjalizacje/<slug>`).
