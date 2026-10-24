#!/usr/bin/env python3
"""popyt.py: co ludzie teraz wpisują i o co pytają.

Źródła (bez kluczy API):
  - podpowiedzi Google, YouTube i Bing dla fraz z zrodla.json, także z przedrostkami pytań (czy/jak/ile/co…):
    pełne pytania z podpowiedzi to najbliższe publicznie dostępne przybliżenie tego, jak ludzie pytają ChatGPT;
  - trendy Google (Polska, dzienne, RSS), przefiltrowane słowami z zrodla.json → slowa_trendow;
  - najnowsze wątki z forów prawnych (zrodla.json → fora).
Porównanie z poprzednim przebiegiem (--poprzedni plik.json) oznacza podpowiedzi, których wcześniej nie było.

Użycie:
  python3 popyt.py [--frazy "zasiedzenie,zachowek"] [--poprzedni stary/popyt.json] [--out KATALOG]
Wynik: popyt.json i popyt.md w katalogu przebiegu (.radar/RRRR-MM-DD/)."""
import argparse
import datetime as dt
import html
import json
import re
import sys
import time
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from wspolne import config, get, out_dir, save  # noqa: E402

PYTANIA = ['czy', 'jak', 'ile', 'co', 'kiedy', 'kto']
PYTANIE_RE = re.compile(r'^(czy|jak|ile|co|kiedy|gdzie|kto|komu|dlaczego|po ilu|w jaki|na czym|czym|jaki|jaka|jakie|ile kosztuje)\b')
NEWS_RE = re.compile(r'\b(20\d\d|nowe przepisy|zmiany?|od 1|nowelizacj|wyrok|tk\b|uchwał)')


def google(q, ds=None):
    p = {'client': 'firefox', 'hl': 'pl', 'gl': 'pl', 'q': q}
    if ds:
        p['ds'] = ds
    return json.loads(get('https://suggestqueries.google.com/complete/search', p))[1]


def bing(q):
    return json.loads(get('https://api.bing.com/osjson.aspx', {'query': q, 'market': 'pl-PL'}))[1]


def podpowiedzi(fraza):
    zapytania = [('Google', fraza, None), ('Google', fraza + ' ', None)]
    zapytania += [('Google', f'{p} {fraza}', None) for p in PYTANIA]
    zapytania += [('YouTube', fraza, 'yt'), ('YouTube', fraza + ' ', 'yt'), ('Bing', fraza, None), ('Bing', fraza + ' ', None)]
    # Bing potrafi podpowiedzieć coś obok tematu („kiedy sadzimy por do gruntu”): zostają podpowiedzi
    # z co najmniej połową rdzeni słów frazy (pierwsze 5 liter słów od 4 liter)
    rdzenie = [w[:5] for w in fraza.lower().split() if len(w) >= 4]
    prog = (len(rdzenie) + 1) // 2
    wyniki = {}
    for zrodlo, q, ds in zapytania:
        try:
            lista = bing(q) if zrodlo == 'Bing' else google(q, ds)
        except RuntimeError as e:
            print('  !', e, file=sys.stderr)
            continue
        for s in lista:
            s = s.strip().lower()
            if s and s != fraza.lower() and sum(r in s for r in rdzenie) >= prog:
                w = wyniki.setdefault(s, {'tekst': s, 'zrodla': set(), 'trafienia': 0})
                w['zrodla'].add(zrodlo)
                w['trafienia'] += 1
        time.sleep(0.15)
    lista = []
    for w in wyniki.values():
        w['zrodla'] = sorted(w['zrodla'])
        w['pytanie'] = bool(PYTANIE_RE.search(w['tekst']))
        w['aktualnosc'] = bool(NEWS_RE.search(w['tekst']))
        lista.append(w)
    # najpierw to, co podpowiada kilka wyszukiwarek naraz, potem pełne pytania
    lista.sort(key=lambda w: (-len(w['zrodla']), -w['trafienia'], not w['pytanie'], w['tekst']))
    return lista


def trendy(slowa):
    xml = get('https://trends.google.com/trending/rss', {'geo': 'PL'})
    ns = {'ht': 'https://trends.google.com/trending/rss'}
    out = []
    for it in ET.fromstring(xml).iter('item'):
        newsy = [n.findtext('ht:news_item_title', '', ns) for n in it.findall('ht:news_item', ns)]
        tytul = it.findtext('title', '')
        tekst = ' '.join([tytul] + newsy).lower()
        out.append({
            'haslo': tytul,
            'ruch': it.findtext('ht:approx_traffic', '', ns),
            'data': it.findtext('pubDate', ''),
            'newsy': [html.unescape(n) for n in newsy][:3],
            'pasuje': [s for s in slowa if s in tekst],
        })
    return out


def forum(url):
    """Wątki z działu forum XenForo (forumprawne.org), od najnowszych. Bez logowania widać tytuł, datę i liczby."""
    s = get(url.rstrip('/') + '/', {'order': 'post_date', 'direction': 'desc'})
    out = []
    for blok in s.split('structItem--thread')[1:]:
        t = re.search(r'structItem-title">.*?<a href="([^"]+)"[^>]*data-tp-primary="on"[^>]*>\s*(.*?)\s*</a>', blok, re.S)
        if not t:
            continue
        data = re.search(r'structItem-startDate">.*?datetime="([^"]+)"', blok, re.S)
        liczby = re.findall(r'<dt>(Odpowiedzi|Odsłon)</dt>\s*<dd>([^<]+)</dd>', blok)
        n = {k: v.strip() for k, v in liczby}
        out.append({
            'tytul': html.unescape(re.sub(r'<[^>]+>', '', t.group(2))).strip(),
            'url': 'https://forumprawne.org' + t.group(1) if t.group(1).startswith('/') else t.group(1),
            'data': data.group(1)[:10] if data else '',
            'odpowiedzi': n.get('Odpowiedzi', ''),
            'wyswietlenia': n.get('Odsłon', ''),
        })
    # przyklejone poradniki sprzed lat idą na górze listy: zostają wątki z ostatnich 90 dni
    od = (dt.date.today() - dt.timedelta(days=90)).isoformat()
    return sorted((w for w in out if w['data'] >= od), key=lambda w: w['data'], reverse=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--frazy', help='lista po przecinku; domyślnie zrodla.json → frazy')
    ap.add_argument('--poprzedni', help='popyt.json z poprzedniego przebiegu (oznaczy nowe podpowiedzi)')
    ap.add_argument('--out')
    a = ap.parse_args()
    cfg = config()
    frazy = [f.strip() for f in a.frazy.split(',')] if a.frazy else cfg['frazy']
    d = out_dir(a.out)

    print(f'podpowiedzi dla {len(frazy)} fraz…')
    with ThreadPoolExecutor(4) as ex:
        wyniki = dict(zip(frazy, ex.map(podpowiedzi, frazy)))

    nowe = set()
    if a.poprzedni and Path(a.poprzedni).exists():
        stare = json.loads(Path(a.poprzedni).read_text(encoding='utf-8'))
        znane = {w['tekst'] for lista in stare.get('podpowiedzi', {}).values() for w in lista}
        for lista in wyniki.values():
            for w in lista:
                w['nowa'] = w['tekst'] not in znane
                if w['nowa']:
                    nowe.add(w['tekst'])

    print('trendy Google (PL)…')
    try:
        tr = trendy([s.lower() for s in cfg.get('slowa_trendow', [])])
    except RuntimeError as e:
        print('  !', e, file=sys.stderr)
        tr = []
    print('fora…')
    fora = {}
    for f in cfg.get('fora', []):
        try:
            fora[f['nazwa']] = forum(f['url'])
        except RuntimeError as e:
            print('  !', e, file=sys.stderr)

    data = {'podpowiedzi': wyniki, 'trendy': tr, 'fora': fora}

    md = ['# Popyt: podpowiedzi, trendy, fora', '']
    md.append('Legenda: G = Google, YT = YouTube, B = Bing; ? = pełne pytanie; ★ = nowa od poprzedniego przebiegu; ⏱ = data/zmiana przepisów.\n')
    skrot = {'Google': 'G', 'YouTube': 'YT', 'Bing': 'B'}
    for fraza, lista in wyniki.items():
        md.append(f'## {fraza}')
        for w in lista[:18]:
            znaki = ('?' if w['pytanie'] else '') + ('★' if w.get('nowa') else '') + ('⏱' if w['aktualnosc'] else '')
            md.append(f"- {w['tekst']} ({'/'.join(skrot[z] for z in w['zrodla'])}) {znaki}".rstrip())
        md.append('')
    pas = [t for t in tr if t['pasuje']]
    md.append(f'## Trendy Google PL: {len(tr)} haseł, pasujących do tematyki: {len(pas)}')
    for t in pas or tr[:10]:
        md.append(f"- {t['haslo']} ({t['ruch']}): {' | '.join(t['newsy'][:2])}")
    md.append('')
    for nazwa, watki in fora.items():
        md.append(f'## Forum: {nazwa} (najnowsze wątki)')
        for w in watki[:25]:
            md.append(f"- {w['data']} · {w['tytul']} (odp. {w['odpowiedzi']}, wyśw. {w['wyswietlenia']}) {w['url']}")
        md.append('')
    if nowe:
        md.append(f'## Nowe podpowiedzi od poprzedniego przebiegu ({len(nowe)})')
        md += [f'- {t}' for t in sorted(nowe)]
    save(d, 'popyt', data, '\n'.join(md))


if __name__ == '__main__':
    main()
