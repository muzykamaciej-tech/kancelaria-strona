# MWG Legal – Muzyka Goździewski Wspólnicy

Strona kancelarii adwokackiej dla biznesu (adw. dr Maciej Muzyka, adw. Rafał Goździewski).
Układ wzorowany na addleshawgoddard.com/en/: jasny hero z ilustracją, karty nachodzące na hero, blok „Witamy” na granatowym pasie, panel lokalizacji, karuzela sektorów, publikacje, „Na skróty”, granatowa stopka z deseniem. Kolor przewodni: niebieski.

## Uruchomienie

Zależności: tylko Node 18+. Nic nie trzeba instalować.

```bash
node build.mjs                 # buduje dist/ (ok. 1 s)
node tools/check.mjs           # linki, zasoby, h1, title, opis, canonical, JSON-LD: musi dać „fail 0”
node tools/serve.mjs dist 4173 # podgląd: http://localhost:4173
```

Vercel: `vercel.json` uruchamia `node build.mjs` i serwuje `dist/`. Katalogu `dist/` nie commitujemy.

## Struktura

| Plik / katalog | Co zawiera |
|---|---|
| `src/content.mjs` | **wszystkie treści**: dane kancelarii, biura, specjalizacje, sektory, osoby, publikacje |
| `src/pages.mjs` | szablony podstron (strona główna, specjalizacje, sektory, zespół, profile, lokalizacje, publikacje, kontakt, strony prawne) |
| `src/layout.mjs` | `<head>`, nagłówek z mega menu, wyszukiwarka, stopka, logo (SVG), karty i linki |
| `static/css/site.css` | style |
| `static/js/site.js` | menu, wyszukiwarka, karuzela, filtry zespołu i publikacji, formularz |
| `static/img/ill/` | ilustracje (WebP, 1600 px i 800 px) |
| `static/fonts/` | Jost i Source Sans 3, hostowane lokalnie (bez Google Fonts, bez cookies) |
| `tools/illustrations/` | generator ilustracji: szkic ołówkiem + akwarela, SVG → WebP |
| `tools/brand-assets.mjs` | `og.png`, `logo.png`, favicony z logo SVG |

Adresy podstron: `/o-nas`, `/zespol`, `/zespol/<osoba>`, `/specjalizacje`, `/specjalizacje/<obszar>`, `/sektory/<sektor>`, `/lokalizacje`, `/publikacje`, `/kontakt`, `/polityka-prywatnosci`, `/nota-prawna`, `/mapa-strony`.

## Jak zmienić treść

- Nowy obszar praktyki albo sektor: dopisz obiekt w `PRACTICES` lub `SECTORS` w `src/content.mjs`. Podstrona, menu, wyszukiwarka i sitemap zrobią się same.
- Nowa osoba: obiekt w `PEOPLE`. Zdjęcie do `static/img/people/` (portret pionowy, ok. 900 px szerokości, WebP). Bez zdjęcia pokazuje się monogram.
- Publikacje: `INSIGHTS`. Teraz to artykuły dr. Macieja Muzyki z mecenasodnieruchomosci.pl (link zewnętrzny).

## Ilustracje

Ilustracje są generowane kodem (`tools/illustrations/scenes.mjs`): szkic architektoniczny ołówkiem i plamy niebieskiej akwareli, jak na stronie AG. Są własne, więc nie ma problemu z licencją. Żeby zmienić lub dodać ilustrację, dopisz funkcję w `scenes.mjs` i uruchom:

```bash
node tools/illustrations/render.mjs            # wszystkie
node tools/illustrations/render.mjs hero court # wybrane
```

Wymaga Playwright (Chromium) i ImageMagick. Wynik (`static/img/ill/*.webp`) commitujemy.

Dostępne: `hero`, `towers` (wieżowce), `crane` (budowa), `coins` (podatki), `factory` (zakład pracy), `court` (portyk), `pen` (umowa), `pylon` (energetyka), `fields` (rolnictwo), `circuit` (technologie, na zapas), `lublin` (Brama Krakowska i kamienice), `warsaw` (PKiN i wieżowce).

## Do potwierdzenia przed publikacją

W kodzie oznaczone komentarzem `DO_POTWIERDZENIA`.

1. **Nazwa i forma prawna.** „Wspólnicy” w nazwie sugeruje spółkę. Dopóki współpraca jest nieformalna, warto założyć spółkę (np. cywilną lub partnerską adwokatów) albo zmienić opis. Nota prawna i polityka prywatności czekają na dane administratora.
2. **Rafał Goździewski.** Publiczne źródła nie podają jego specjalizacji. Rejestr adwokatów wskazuje tylko „praktykę ogólną”, a giwkancelaria.pl to strona w przygotowaniu. Na stronie przypisano mu prawo korporacyjne, podatkowe, prawo pracy i stałą obsługę firm: to założenie do potwierdzenia. Brakuje też zdjęcia, e-maila, telefonu, wykształcenia, języków i ewentualnych publikacji.
3. **Specjalizacje dodatkowe.** Oprócz czterech podstawowych strona ma „Spory sądowe i administracyjne” oraz „Stałą obsługę prawną firm”. Sektory: nieruchomości i budownictwo, energetyka i OZE, rolnictwo, produkcja i handel, firmy rodzinne.
4. **Dane kontaktowe.** Domena (w kodzie `mwglegal.pl`), wspólny e-mail i telefon (teraz dane dr. Muzyki), adresy biur (teraz ul. Cicha 4/5 w Lublinie i ul. Bracka 20/7A w Warszawie).
5. **Formularz.** Obecnie otwiera program pocztowy z gotową wiadomością (`mailto:`). Wysyłanie bez programu pocztowego wymaga backendu, np. funkcji Vercel z usługą e-mail.
6. **Teksty.** Napisane jako informacja o kancelarii, bez porównań, rankingów i obietnic wyniku. Każdy przepis i orzeczenie przed publikacją trzeba zweryfikować (w tej wersji strona nie cytuje sygnatur ani przepisów poza RODO w polityce prywatności).
