#!/usr/bin/env python3
"""youtube.py: rolki i filmy YouTube, które wybiły się ponad normę własnego autora.

  szukaj  — wyszukiwarka YouTube dla fraz (zrodla.json → frazy albo --frazy): co w danym temacie już ma zasięg,
            i jacy autorzy publikują w niszy (kandydaci do zrodla.json → youtube);
  kanaly  — ostatnie Shorts i filmy każdego kanału (zrodla.json → youtube oraz kanały znalezione przez `szukaj`
            z min. --min-wysw wyświetleń), mediana wyświetleń autora i krotność każdej pozycji.
            Krotność ≥ 3 = wybiła się, ≥ 10 = petarda.

Z listy kanału YouTube podaje tylko wyświetlenia i tytuł (bez daty). Starsze pozycje mają przewagę, więc
krotność liczy się w obrębie ostatnich --ile pozycji, a pole `pozycja` (0 = najnowsza) pokazuje świeżość.
Z kluczem YOUTUBE_API_KEY (YouTube Data API v3, darmowy limit) dochodzą data publikacji, polubienia,
komentarze i wyświetlenia na dzień dla odstających pozycji.

Użycie:
  python3 youtube.py szukaj [--frazy "…"] [--ile 20] [--out KATALOG]
  python3 youtube.py kanaly [--ile 40] [--min-wysw 20000] [--out KATALOG]
Wymaga: pip install yt-dlp"""
import argparse
import datetime as dt
import json
import os
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from wspolne import config, fmt, get, odstajace, out_dir, save  # noqa: E402

try:
    import yt_dlp
except ImportError:
    sys.exit('Brak yt-dlp: pip install yt-dlp')

YDL = {'quiet': True, 'no_warnings': True, 'extract_flat': True, 'skip_download': True}


def flat(url, ile):
    """Lista pozycji w dwóch przebiegach: angielski daje pewne liczby wyświetleń (po polsku yt-dlp czyta
    „223 tys.” jako 223), polski daje tytuły w oryginale (po angielsku YouTube tłumaczy je maszynowo)."""
    with yt_dlp.YoutubeDL({**YDL, 'playlistend': ile}) as y:
        info = y.extract_info(url, download=False) or {}
    with yt_dlp.YoutubeDL({**YDL, 'playlistend': ile, 'extractor_args': {'youtube': {'lang': ['pl']}}}) as y:
        pl = {e.get('id'): e.get('title') for e in (y.extract_info(url, download=False) or {}).get('entries') or []}
    for e in info.get('entries') or []:
        if pl.get(e.get('id')) and pl[e['id']] != e.get('title'):
            e['title_en'], e['title'] = e.get('title'), pl[e['id']]
    return info


def pozycja(e, kanal=None, kanal_id=None, typ=None):
    vid = e.get('id')
    short = typ == 'shorts' or '/shorts/' in (e.get('url') or '')
    return {
        'platforma': 'YouTube',
        'typ': 'short' if short else 'film',
        'autor': e.get('channel') or kanal,
        'kanal_id': e.get('channel_id') or kanal_id,
        'tytul': e.get('title'),
        'tytul_en': e.get('title_en'),  # tytuł z przebiegu angielskiego, gdy różni się od polskiego (dla kont zagranicznych to oryginał)
        'url': f'https://www.youtube.com/shorts/{vid}' if short else f'https://www.youtube.com/watch?v={vid}',
        'id': vid,
        'wyswietlenia': e.get('view_count'),
        'czas_s': e.get('duration'),
    }


def szukaj(frazy, ile):
    def jedna(f):
        # wyszukiwarka dorzuca teledyski i kabarety („Sąsiad”, „Słup”): zostają tytuły ze wszystkimi
        # rdzeniami słów frazy (pierwsze 5 liter słów od 4 liter)
        rdzenie = [w[:5] for w in f.lower().split() if len(w) >= 4]
        info = flat(f'ytsearch{ile}:{f}', ile)
        return [dict(pozycja(e), fraza=f) for e in info.get('entries') or []
                if all(r in (e.get('title') or '').lower() for r in rdzenie)]
    with ThreadPoolExecutor(3) as ex:
        wyniki = {}
        for p in (p for lista in ex.map(jedna, frazy) for p in lista):
            if p['id'] in wyniki:
                wyniki[p['id']]['fraza'] += ', ' + p['fraza']
            else:
                wyniki[p['id']] = p
    return list(wyniki.values())


def kanal(k, ile):
    """Ostatnie Shorts i filmy jednego kanału; krotność liczona osobno dla Shorts i dla filmów."""
    baza = f"https://www.youtube.com/channel/{k['id']}" if k['id'].startswith('UC') else f"https://www.youtube.com/{k['id']}"
    out, meta = [], {}
    for typ in ('shorts', 'videos'):
        try:
            info = flat(f'{baza}/{typ}', ile)
        except Exception as e:  # kanał bez zakładki Shorts albo filmów
            print(f"  ! {k.get('nazwa', k['id'])}/{typ}: {str(e)[:120]}", file=sys.stderr)
            continue
        meta = {'subskrypcje': info.get('channel_follower_count'), 'autor': info.get('channel')}
        lista = [pozycja(e, info.get('channel'), info.get('channel_id'), typ) for e in info.get('entries') or []]
        for i, p in enumerate(lista):
            p['pozycja'] = i
            p['subskrypcje'] = meta['subskrypcje']
            p['grupa'] = f"{p['autor']}|{typ}"
            p['grupa_zrodla'] = k.get('grupa', '')
        out += odstajace(lista, 'wyswietlenia', author='grupa')
    return out, meta


def api_wzbogac(pozycje):
    """YouTube Data API v3 (opcjonalnie): data publikacji, polubienia, komentarze, wyświetlenia/dzień."""
    key = os.environ.get('YOUTUBE_API_KEY')
    if not key or not pozycje:
        return
    for i in range(0, len(pozycje), 50):
        partia = pozycje[i:i + 50]
        r = json.loads(get('https://www.googleapis.com/youtube/v3/videos',
                           {'part': 'snippet,statistics,contentDetails', 'id': ','.join(p['id'] for p in partia), 'key': key}))
        po_id = {v['id']: v for v in r.get('items', [])}
        for p in partia:
            v = po_id.get(p['id'])
            if not v:
                continue
            st, sn = v['statistics'], v['snippet']
            p['opublikowano'] = sn['publishedAt'][:10]
            p['polubienia'] = int(st.get('likeCount', 0))
            p['komentarze'] = int(st.get('commentCount', 0))
            dni = max(1, (dt.date.today() - dt.date.fromisoformat(p['opublikowano'])).days)
            p['wysw_na_dzien'] = round(int(st.get('viewCount', 0)) / dni)
            p['opis'] = sn.get('description', '')[:500]


def tabela(pozycje, n=40):
    w = ['| krotność | wyświetlenia | mediana autora | autor | typ | poz. | tytuł |', '|---:|---:|---:|---|---|---:|---|']
    for p in pozycje[:n]:
        w.append(f"| {p.get('krotnosc', '–')}× | {fmt(p.get('wyswietlenia'))} | {fmt(p.get('mediana_autora'))} | {p['autor']} "
                 f"| {p['typ']} | {p.get('pozycja', '')} | [{(p['tytul'] or '')[:80]}]({p['url']}){' ⚠ ' + p['uwaga'] if p.get('uwaga') else ''} |")
    return '\n'.join(w)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('tryb', choices=['szukaj', 'kanaly'])
    ap.add_argument('--frazy')
    ap.add_argument('--ile', type=int)
    ap.add_argument('--min-wysw', type=int, default=20000, help='kanał z wyszukiwania trafia do analizy, gdy ma pozycję z tyloma wyświetleniami')
    ap.add_argument('--min-trafien', type=int, default=2, help='…i pojawił się w wynikach co najmniej tyle razy (jednorazowe trafienia to zwykle przypadek)')
    ap.add_argument('--out')
    a = ap.parse_args()
    cfg = config()
    d = out_dir(a.out)

    if a.tryb == 'szukaj':
        frazy = [f.strip() for f in a.frazy.split(',')] if a.frazy else cfg['frazy']
        wyniki = szukaj(frazy, a.ile or 20)
        wyniki.sort(key=lambda p: -(p['wyswietlenia'] or 0))
        autorzy = {}
        for p in wyniki:
            if not p['kanal_id']:
                continue
            x = autorzy.setdefault(p['kanal_id'], {'autor': p['autor'], 'id': p['kanal_id'], 'max': 0, 'trafienia': 0, 'frazy': set()})
            x['max'] = max(x['max'], p['wyswietlenia'] or 0)
            x['trafienia'] += 1
            x['frazy'].update(p['fraza'].split(', '))
        autorzy = sorted(({**x, 'frazy': sorted(x['frazy'])} for x in autorzy.values()), key=lambda x: -x['max'])
        md = ['# YouTube: wyszukiwanie fraz', '', '## Najwięcej wyświetleń', tabela(wyniki, 60), '',
              '## Autorzy w niszy (kandydaci do zrodla.json → youtube)']
        md += [f"- {x['autor']} (`{x['id']}`): max {fmt(x['max'])}, trafień {x['trafienia']}, frazy: {', '.join(x['frazy'][:4])}" for x in autorzy[:40]]
        save(d, 'youtube-szukaj', {'wyniki': wyniki, 'autorzy': autorzy}, '\n'.join(md))
        return

    kanaly = list(cfg.get('youtube', []))
    znane = {k['id'] for k in kanaly} | set(cfg.get('youtube_pomin', {}))
    plik = d / 'youtube-szukaj.json'
    if plik.exists():  # dołącz autorów, którzy w wyszukiwaniu mieli coś z dużym zasięgiem
        for x in json.loads(plik.read_text(encoding='utf-8'))['autorzy']:
            if x['id'] and x['id'] not in znane and x['max'] >= a.min_wysw and x['trafienia'] >= a.min_trafien:
                kanaly.append({'id': x['id'], 'nazwa': x['autor'], 'grupa': 'z wyszukiwania'})
                znane.add(x['id'])
    print(f'{len(kanaly)} kanałów…')
    wszystkie, kanaly_meta = [], []
    with ThreadPoolExecutor(4) as ex:
        for k, (poz, meta) in zip(kanaly, ex.map(lambda k: kanal(k, a.ile or 40), kanaly)):
            wszystkie += poz
            kanaly_meta.append({**k, **meta, 'pozycji': len(poz)})
    # ten sam kanał bywa w konfiguracji jako @uchwyt i w wyszukiwaniu jako UC…: zostaje pierwsza kopia filmu
    wszystkie = list({p['id']: p for p in reversed(wszystkie)}.values())[::-1]
    odst = sorted((p for p in wszystkie if (p.get('krotnosc') or 0) >= 3), key=lambda p: -p['krotnosc'])
    for p in odst:
        # kampanie reklamowe nabijają wyświetlenia z płatnej emisji: seria podobnych wyników albo ≥ 100× mediany
        if p['krotnosc'] >= 100:
            p['uwaga'] = 'sprawdź, czy to nie płatna kampania'
    api_wzbogac(odst[:100])
    md = ['# YouTube: pozycje ponad normę autora (krotność ≥ 3)', '',
          'Krotność = wyświetlenia / mediana wyświetleń tego autora w tej samej grupie (Shorts albo filmy), '
          f'z ostatnich {a.ile or 40} pozycji. poz. 0 = najnowsza.', '', tabela(odst, 80), '',
          '## Kanały', *[f"- {k.get('autor') or k.get('nazwa')} (`{k['id']}`): subskrypcje {fmt(k.get('subskrypcje'))}, pozycji {k['pozycji']}"
                         for k in kanaly_meta]]
    save(d, 'youtube-kanaly', {'odstajace': odst, 'kanaly': kanaly_meta, 'wszystkie': wszystkie}, '\n'.join(md))


if __name__ == '__main__':
    main()
