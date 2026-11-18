"""image-variants.py — lżejsze warianty obrazów do dist/ (wywołuje build.mjs; wymaga python3 z Pillow: WebP i AVIF).

  python3 scripts/image-variants.py <assets> <dist/assets> <cache>

- assets/blog-<slug>.jpg  → blog-<slug>-640.webp, blog-<slug>-1200.webp (okładka: srcset w pages.jsx, coverImg)
                            blog-<slug>-bg.webp (64 px: tło nagłówka wpisu, i tak rozmyte filtrem blur(42px))
  JPG zostaje bez zmian dla og:image, JSON-LD i RSS.
- assets/maciej-muzyka-<nazwa>-<800|1400>.webp → ten sam plik .avif (landing.jsx SectionPhoto: <picture>, WebP zostaje jako zapas).

Wyniki trafiają do <cache>/ (klucz: skrót pliku źródłowego + parametry), więc kolejne buildy kodują tylko nowe i zmienione obrazy.
"""
import hashlib
import os
import re
import shutil
import sys
from concurrent.futures import ProcessPoolExecutor

from PIL import Image, features

VERSION = '1'
WEBP = dict(quality=82, method=6)
BG = dict(quality=70, method=6)
AVIF = dict(quality=55, speed=4)


def jobs(assets):
    for f in sorted(os.listdir(assets)):
        m = re.fullmatch(r'(blog-[a-z0-9-]+)\.jpg', f)
        if m:
            for w in (640, 1200):
                yield f, f'{m[1]}-{w}.webp', ('webp', w, WEBP)
            yield f, f'{m[1]}-bg.webp', ('webp', 64, BG)
        m = re.fullmatch(r'(maciej-muzyka-[a-z]+-(?:800|1400))\.webp', f)
        if m:
            yield f, f'{m[1]}.avif', ('avif', None, AVIF)


def encode(args):
    src, dst, cache, spec = args
    fmt, width, opts = spec
    with open(src, 'rb') as fh:
        key = hashlib.sha256(fh.read() + repr((VERSION, spec)).encode()).hexdigest()[:20]
    cached = os.path.join(cache, f'{key}-{os.path.basename(dst)}')
    hit = os.path.exists(cached)
    if not hit:
        im = Image.open(src)
        im = im.convert('RGB')
        if width and im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        tmp = cached + '.tmp'
        im.save(tmp, fmt.upper(), **opts)
        os.replace(tmp, cached)
    shutil.copyfile(cached, dst)
    return hit, os.path.getsize(src), os.path.getsize(dst)


def main():
    assets, out, cache = sys.argv[1:4]
    if not (features.check('webp') and features.check('avif')):
        sys.exit('image-variants: Pillow bez obsługi WebP/AVIF (pip install -U pillow)')
    os.makedirs(cache, exist_ok=True)
    todo = [(os.path.join(assets, s), os.path.join(out, d), cache, spec) for s, d, spec in jobs(assets)]
    with ProcessPoolExecutor() as pool:
        res = list(pool.map(encode, todo, chunksize=4))
    new = sum(1 for hit, _, _ in res if not hit)
    print(f'image-variants: {len(res)} plików ({new} zakodowanych od nowa, {len(res) - new} z pamięci podręcznej), '
          f'{sum(r[2] for r in res) / 1048576:.1f} MB')


if __name__ == '__main__':
    main()
