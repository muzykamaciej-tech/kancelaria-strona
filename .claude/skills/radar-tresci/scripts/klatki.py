#!/usr/bin/env python3
"""klatki.py: pierwsze sekundy rolki jako jeden arkusz klatek do obejrzenia (hook: kadr, tekst na ekranie, ruch).

Pobiera rolkę w niskiej jakości (yt-dlp), wycina klatki z podanych sekund (ffmpeg) i skleja je w arkusz.jpg,
który agent ogląda narzędziem Read. Dźwięku nie transkrybuje: tekst mówiony bierz z napisów na ekranie albo
z opisu rolki; do analizy scena po scenie filmu z YouTube służy Higgsfield video_analysis_create (youtube_url).
Działa dla publicznych rolek Instagrama; YouTube z serwera w chmurze zwykle odmawia pobrania.

Użycie:
  python3 klatki.py URL [--sekundy 0,1,2,3,5,8,12] [--out KATALOG]
Wymaga: pip install yt-dlp, ffmpeg"""
import argparse
import hashlib
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from wspolne import out_dir  # noqa: E402


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('url')
    ap.add_argument('--sekundy', default='0,1,2,3,5,8,12')
    ap.add_argument('--out')
    a = ap.parse_args()
    if not shutil.which('ffmpeg'):
        sys.exit('Brak ffmpeg')
    import yt_dlp
    d = out_dir(a.out) / 'klatki' / hashlib.sha1(a.url.encode()).hexdigest()[:10]
    d.mkdir(parents=True, exist_ok=True)
    opts = {'quiet': True, 'no_warnings': True, 'noprogress': True, 'retries': 3, 'sleep_interval_requests': 2, 'format': 'worst[height>=360]/worst', 'outtmpl': str(d / 'wideo.%(ext)s')}
    with yt_dlp.YoutubeDL(opts) as y:
        info = y.extract_info(a.url, download=True)
    wideo = next(d.glob('wideo.*'))
    sek = [float(s) for s in a.sekundy.split(',')]
    klatki = []
    for s in sek:
        f = d / f'k{s:05.1f}.jpg'
        r = subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', str(s), '-i', str(wideo), '-frames:v', '1',
                            '-vf', 'scale=360:-2', str(f)], capture_output=True)
        if r.returncode == 0 and f.exists():
            klatki.append(f)
    if not klatki:
        sys.exit('Nie udało się wyciąć klatek')
    arkusz = d / 'arkusz.jpg'
    wejscia = sum((['-i', str(f)] for f in klatki), [])
    filtr = ''.join(f'[{i}:v]drawtext=text=\'{sek[i]:g} s\':x=10:y=10:fontsize=28:fontcolor=yellow:box=1:boxcolor=black@0.6[t{i}];'
                    for i in range(len(klatki)))
    filtr += ''.join(f'[t{i}]' for i in range(len(klatki))) + f'hstack=inputs={len(klatki)}' if len(klatki) > 1 else '[t0]copy'
    r = subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', *wejscia, '-filter_complex', filtr, str(arkusz)], capture_output=True)
    if r.returncode != 0:  # bez czcionki drawtext nie działa: sklej bez podpisów
        filtr = ''.join(f'[{i}:v]' for i in range(len(klatki))) + f'hstack=inputs={len(klatki)}'
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', *wejscia, '-filter_complex', filtr, str(arkusz)], check=True)
    print(f"autor: {info.get('channel') or info.get('uploader')}; czas: {info.get('duration')} s")
    print(f'arkusz klatek ({", ".join(f"{s:g}" for s in sek[:len(klatki)])} s): {arkusz}')


if __name__ == '__main__':
    main()
