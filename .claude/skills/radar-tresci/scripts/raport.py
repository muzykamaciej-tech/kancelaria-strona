#!/usr/bin/env python3
"""raport.py: składa stronę raportu z danych przebiegu (raport.json) i stałego szablonu (raport-szablon.html).

Szablon renderuje wszystko po stronie przeglądarki z osadzonego JSON-a, więc co tydzień zmieniają się tylko dane.
Układ pól raport.json opisuje SKILL.md (krok 5). Wynik: raport.html obok raport.json; publikuj go narzędziem Artifact.

Użycie:
  python3 raport.py .radar/RRRR-MM-DD/raport.json"""
import json
import sys
from pathlib import Path

SZABLON = Path(__file__).resolve().parent.parent / 'raport-szablon.html'
WYMAGANE = ['tydzien', 'wnioski', 'pomysly', 'odstajace', 'wlasne', 'popyt', 'zrodla', 'do_zrobienia', 'archiwum']
POMYSL = ['tytul', 'format', 'dlaczego_teraz', 'hooki', 'szkic', 'cta']


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    dane = json.loads(src.read_text(encoding='utf-8'))
    braki = [k for k in WYMAGANE if k not in dane]
    for i, p in enumerate(dane.get('pomysly', []), 1):
        braki += [f'pomysly[{i}].{k}' for k in POMYSL if not p.get(k)]
        if len(p.get('hooki', [])) < 3:
            braki.append(f'pomysly[{i}].hooki (potrzebne 3 warianty)')
    if braki:
        sys.exit('Brakuje pól: ' + ', '.join(braki))
    # „</” w danych zamknęłoby znacznik <script> z JSON-em
    js = json.dumps(dane, ensure_ascii=False).replace('</', '<\\/')
    out = src.with_suffix('.html')
    out.write_text(SZABLON.read_text(encoding='utf-8').replace('__DANE__', js), encoding='utf-8')
    print(f'zapisano {out} ({len(dane["pomysly"])} pomysłów, {len(dane["odstajace"])} wybić)')


if __name__ == '__main__':
    main()
