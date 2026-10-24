#!/usr/bin/env python3
"""instagram.py: rolki z Instagrama ponad normę autora.

Instagram bez logowania nie pokazuje listy rolek konta, ale pojedyncza publiczna rolka (link) zwraca autora,
datę, opis, polubienia i komentarze (wyświetleń nie). Dwa wejścia:
  --linki plik.txt|URL…     linki do rolek (z Metricool, wyszukiwania, od Macieja); dane pobiera yt-dlp;
  --metricool plik.json     wiersze z Metricool (konkurencja: IGCR01,03,04,05,07,08,09,10 w tej kolejności
                            albo własne rolki: IGRE01,03,06,23,11,12,21,24,28): bez pobierania.
Krotność = polubienia (u siebie: wyświetlenia) / mediana autora; potrzeba min. 5 rolek autora.

Użycie:
  python3 instagram.py --linki linki.txt [--out KATALOG]
  python3 instagram.py --metricool konkurencja.json --rodzaj konkurencja|wlasne [--out KATALOG]
Wymaga (dla --linki): pip install yt-dlp"""
import argparse
import datetime as dt
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from wspolne import fmt, odstajace, out_dir, save  # noqa: E402


def z_linkow(linki):
    try:
        import yt_dlp
    except ImportError:
        sys.exit('Brak yt-dlp: pip install yt-dlp')
    out = []
    with yt_dlp.YoutubeDL({'quiet': True, 'no_warnings': True, 'skip_download': True}) as y:
        for u in linki:
            try:
                i = y.extract_info(u, download=False)
            except Exception as e:
                print(f'  ! {u}: {str(e)[:120]}', file=sys.stderr)
                continue
            out.append({
                'platforma': 'Instagram', 'autor': i.get('channel') or i.get('uploader_id'), 'url': u,
                'data': dt.datetime.fromtimestamp(i['timestamp']).date().isoformat() if i.get('timestamp') else '',
                'opis': (i.get('description') or '')[:600], 'polubienia': i.get('like_count'), 'komentarze': i.get('comment_count'),
            })
    return out


def z_metricool(rows, rodzaj):
    out = []
    for r in rows:
        if rodzaj == 'konkurencja':  # IGCR01 autor, 03 tekst, 04 url, 05 data, 07 polubienia, 08 komentarze, 09 interakcje, 10 ER
            autor, opis, url, data, pol, kom, inter, er = (r + [None] * 8)[:8]
            out.append({'platforma': 'Instagram', 'autor': autor, 'opis': (opis or '')[:600], 'url': url, 'data': str(data)[:10],
                        'polubienia': _n(pol), 'komentarze': _n(kom), 'interakcje': _n(inter), 'er': er})
        else:  # IGRE01 data, 03 tekst, 06 url, 23 wyświetlenia, 11 zasięg, 12 zapisania, 21 udostępnienia, 24 śr. czas, 28 % obejrzeń >3 s
            data, opis, url, wysw, zasieg, zap, udo, czas, hook = (r + [None] * 9)[:9]
            out.append({'platforma': 'Instagram', 'autor': 'moje konto', 'opis': (opis or '')[:600], 'url': url, 'data': str(data),
                        'wyswietlenia': _n(wysw), 'zasieg': _n(zasieg), 'zapisania': _n(zap), 'udostepnienia': _n(udo),
                        'sr_czas_s': _f(czas), 'hook_3s_proc': _f(hook)})
    return out


def _n(x):
    try:
        return int(float(x))
    except (TypeError, ValueError):
        return None


def _f(x):
    try:
        return round(float(x), 1)
    except (TypeError, ValueError):
        return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--linki', nargs='+', help='plik z linkami (po jednym w wierszu) albo same linki')
    ap.add_argument('--metricool')
    ap.add_argument('--rodzaj', choices=['konkurencja', 'wlasne'], default='konkurencja')
    ap.add_argument('--out')
    a = ap.parse_args()
    d = out_dir(a.out)
    if a.metricool:
        dane = json.loads(Path(a.metricool).read_text(encoding='utf-8'))
        rolki = z_metricool(dane.get('rows', dane) if isinstance(dane, dict) else dane, a.rodzaj)
    elif a.linki:
        linki = []
        for x in a.linki:
            linki += Path(x).read_text().split() if Path(x).exists() else [x]
        rolki = z_linkow(linki)
    else:
        ap.error('podaj --linki albo --metricool')

    klucz = 'wyswietlenia' if a.rodzaj == 'wlasne' else 'polubienia'
    odstajace(rolki, klucz, min_n=3 if a.rodzaj == 'wlasne' else 5)
    rolki.sort(key=lambda r: -(r.get('krotnosc') or 0))
    nazwa = 'instagram-wlasne' if a.rodzaj == 'wlasne' else 'instagram'
    md = [f'# Instagram: rolki ponad normę autora (miara: {klucz})', '',
          f'| krotność | {klucz} | mediana | autor | data | ' + ('hook 3 s % | śr. czas s | udostępn. | zapis. |' if a.rodzaj == 'wlasne' else 'komentarze |') + ' opis |',
          '|---:|---:|---:|---|---|' + ('---:|---:|---:|---:|' if a.rodzaj == 'wlasne' else '---:|') + '---|']
    for r in rolki:
        opis = ' '.join((r['opis'] or '').split())[:90]
        dod = (f"{r.get('hook_3s_proc', '–')} | {r.get('sr_czas_s', '–')} | {r.get('udostepnienia', '–')} | {r.get('zapisania', '–')} |"
               if a.rodzaj == 'wlasne' else f"{r.get('komentarze', '–')} |")
        md.append(f"| {r.get('krotnosc', '–')}× | {fmt(r.get(klucz))} | {fmt(r.get('mediana_autora'))} | {r['autor']} | {r['data']} | {dod} [{opis or '(bez opisu)'}]({r['url']}) |")
    save(d, nazwa, rolki, '\n'.join(md))


if __name__ == '__main__':
    main()
