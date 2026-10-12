"""Statyczne instancje fontów zmiennych (Chromium osadza fonty zmienne w PDF jako Type 3).
Źródła: fonts/src/Lora.ttf, fonts/src/Lora-Italic.ttf (Google Fonts, OFL).
Uruchom raz: python3 scripts/make-fonts.py  (wymaga: pip install fonttools)"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

root = Path(__file__).resolve().parent.parent / 'fonts'
jobs = [
    ('Lora.ttf', 'Lora-Regular.ttf', {'wght': 400}),
    ('Lora.ttf', 'Lora-Medium.ttf', {'wght': 500}),
    ('Lora.ttf', 'Lora-SemiBold.ttf', {'wght': 600}),
    ('Lora.ttf', 'Lora-Bold.ttf', {'wght': 700}),
    ('Lora-Italic.ttf', 'Lora-Italic.ttf', {'wght': 400}),
]
for src, dst, axes in jobs:
    font = instantiateVariableFont(TTFont(root / 'src' / src), axes, updateFontNames=False)
    family, style = dst[:-4].split('-')
    names = font['name']
    for rec in list(names.names):
        if rec.nameID in (16, 17, 25):
            names.removeNames(nameID=rec.nameID)
    for nid, val in ((1, family), (2, style), (4, f'{family} {style}'), (6, f'{family}-{style}')):
        names.setName(val, nid, 3, 1, 0x409)
        names.setName(val, nid, 1, 0, 0)
    font.save(root / dst)
    print(dst, (root / dst).stat().st_size)
