# Grafiki – źródła (Higgsfield, 12.10.2026)

Wygenerowane przez Higgsfield MCP, jedna partia 6 obrazów, zużyte 12 kredytów (saldo 1161 → 1149).
Wszystkie bez tekstu, logotypów i twarzy. Pliki tutaj są już przycięte i skompresowane (JPG).

| Plik | Model | Job ID | Obróbka |
|---|---|---|---|
| `hero.jpg` | GPT Image 2.5, 21:9, 2k, quality high | `487a4cd6-87f6-40ce-984e-8363e1a5b5fa` (wariant 1 z 2) | 2688×1152 → kadr 2688×1024 → 2480×945, JPG q80 |
| – (odrzucony) | GPT Image 2.5, 21:9, 2k, high | `709ea071-0a43-4922-902f-bd3c98df5262` (wariant 2) | kominek i drzwi po prawej, mniej pustej ściany pod tekst |
| `pakiet-podstawowy.jpg` | Recraft V4.1, 1:1, kolory #1F2A44/#B08D57 | `b3466427-ea88-4c27-9f09-e0211bdfbbc0` | tło wyrównane do #F7F4EE, kadr 1024×580 → 800×453 |
| `pakiet-rozszerzony.jpg` | Recraft V4.1, 1:1 | `33337c37-9844-4644-9c46-881c3ecfba58` | jw. |
| `pakiet-pelny.jpg` | Recraft V4.1, 1:1 | `bcaf73d2-601c-447a-92ca-bde3706dc38e` | jw. + ciaśniejszy kadr (motyw był mniejszy niż w dwóch pozostałych) |
| `pasek-schody.jpg` | GPT Image 2.5, 21:9, 2k, high | `fed9a98e-583e-4b41-975d-605be2a4a851` | kadr 5:1 → 2400×480; w PDF wyłączony (`page2.showStrip: false`), bo brak miejsca |

Recraft V4.1 nie ma parametru seed; spójność stylu ilustracji zapewnia ten sam model, paleta (`colors`) i wspólny opis stylu w prompcie.

`logo-granat.png` – `assets/logo.png` ze strony, przekolorowany na granat #1F2A44 (kształt bez zmian).

## Prompty

1. Hero: „Bright freshly renovated apartment interior in a historic European tenement building, tall windows with soft morning light, light oak herringbone parquet, white walls, minimal Scandinavian furniture, a few plants, calm warm muted palette with navy and brass accents, editorial architectural photography, high detail, wide composition with calm empty wall area on the left side, no people, no text, no logos, no signs, no writing, no watermark”
2. Ilustracje: motyw z briefu (a/b/c) + „Minimal elegant line-and-flat illustration, navy #1F2A44 and brass #B08D57 on warm cream background #F7F4EE, generous negative space, centered composition, subtle paper texture, no text, no letters, no numbers, no logos”
3. Pasek: „Close-up architectural detail of a renovated historic tenement staircase with ornamental wrought-iron railing and wooden handrail, soft natural light, muted warm cream and navy tones with brass details, shallow depth of field, horizontal panoramic composition, editorial architectural photography, no people, no text, no signs, no logos, no watermark”
