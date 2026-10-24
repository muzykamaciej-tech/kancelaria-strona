"""wspolne.py: wspólne narzędzia skryptów radaru (HTTP, konfiguracja, katalog wyników, krotność ponad medianę autora).
Tylko biblioteka standardowa. yt-dlp potrzebny jest wyłącznie w youtube.py, instagram.py i klatki.py."""
import datetime as dt
import json
import statistics
import time
import urllib.parse
import urllib.request
from pathlib import Path

SKILL = Path(__file__).resolve().parent.parent
REPO = SKILL.parent.parent.parent
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36'


def config():
    return json.loads((SKILL / 'zrodla.json').read_text(encoding='utf-8'))


def out_dir(arg=None):
    """Katalog wyników przebiegu: .radar/RRRR-MM-DD/ w repozytorium (w .gitignore)."""
    d = Path(arg) if arg else REPO / '.radar' / dt.date.today().isoformat()
    d.mkdir(parents=True, exist_ok=True)
    return d


def get(url, params=None, timeout=20, tries=3):
    if params:
        url += ('&' if '?' in url else '?') + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'pl-PL,pl;q=0.9'})
    for i in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read().decode(r.headers.get_content_charset() or 'utf-8', 'replace')
        except Exception as e:  # sieć bywa kapryśna: krótka przerwa i ponowienie
            if i == tries - 1:
                raise RuntimeError(f'{url}: {e}') from e
            time.sleep(2 * (i + 1))


def save(d, name, data, md=None):
    (d / f'{name}.json').write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding='utf-8')
    if md is not None:
        (d / f'{name}.md').write_text(md, encoding='utf-8')
    print(f'zapisano {d / name}.json' + (f' i {name}.md' if md is not None else ''))


def odstajace(items, key, author='autor', min_n=5):
    """Do każdej pozycji dopisuje medianę autora i krotność (wartość / mediana).
    Mediana, nie średnia: jedna rolka-petarda nie zawyża punktu odniesienia. Autor z mniej niż min_n
    pozycjami nie dostaje krotności (za mało danych, by mówić o „ponad normę”)."""
    by = {}
    for it in items:
        if isinstance(it.get(key), (int, float)):
            by.setdefault(it[author], []).append(it[key])
    for it in items:
        vals = by.get(it[author], [])
        if len(vals) >= min_n and isinstance(it.get(key), (int, float)):
            med = statistics.median(vals)
            it['mediana_autora'] = med
            k = it[key] / med if med else None
            it['krotnosc'] = None if k is None else (round(k) if k >= 10 else round(k, 1))
            it['n_autora'] = len(vals)
    return items


def fmt(n):
    if n is None:
        return '–'
    n = round(n)
    if n >= 1_000_000:
        return f'{n / 1_000_000:.1f} mln'.replace('.', ',')
    if n >= 10_000:
        return f'{n / 1000:.0f} tys.'
    return f'{n:,}'.replace(',', ' ')
