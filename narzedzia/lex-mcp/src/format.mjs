/* format.mjs — wyniki w zwięzłym tekście dla Claude'a (i dla CLI). */
import { CATEGORIES } from './categories.mjs';
import { stripBadge } from './text.mjs';

const clip = (s, n) => (s.length > n ? s.slice(0, n).trimEnd() + '…' : s);

export function formatSearch(r) {
  const cat = CATEGORIES[r.kategoria]?.label || r.kategoria;
  const lines = [
    `LEX: „${r.zapytanie}” · ${cat} · sortowanie: ${r.sort} · ${r.czas_s} s`,
    `Wyniki: ${r.wyniki.length}${r.lacznie ? ` (LEX podaje łącznie: ${r.lacznie})` : ''}${r.zrodlo !== 'strona' ? ` · źródło: ${r.zrodlo}` : ''}`,
    `Lista w LEX: ${r.url}`,
  ];
  if (r.pominiete) lines.push(`Pominięte linki spoza listy wyników (np. „ostatnio otwierane”): ${r.pominiete}`);
  if (!r.wyniki.length) {
    lines.push('', r.brakWynikow ? 'LEX: brak wyników dla tego zapytania.' : 'Nie odczytano wyników.');
    if (r.diagnostyka) lines.push('', `Tekst strony (diagnostyka): ${r.diagnostyka}`);
    return lines.join('\n');
  }
  r.wyniki.forEach((w, i) => {
    let opis = stripBadge(w.opis);
    if (opis.startsWith(w.tytul)) opis = opis.slice(w.tytul.length);
    opis = opis.replace(/\s*\n\s*/g, ' · ').replace(/^[\s·]+/, '');
    const meta = [w.typ, w.sygnatura, w.data, `nro ${w.nro}`].filter(Boolean).join(' · ');
    lines.push('', `${i + 1}. ${w.tytul || '(bez tytułu)'}`, `   ${meta}`, `   ${w.url}`);
    if (opis) lines.push(`   ${clip(opis, 600)}`);
  });
  return lines.join('\n');
}

export function formatDocument(d) {
  const end = d.od + d.tekst.length;
  const lines = [`# ${d.tytul || '(bez tytułu)'}`, d.url];
  const meta = [d.sygnatura && `sygn. ${d.sygnatura}`, d.data].filter(Boolean).join(' · ');
  if (meta) lines.push(meta);
  lines.push(`Znaki ${d.od}–${end} z ${d.znaki}${end < d.znaki ? ` · dalszy ciąg: od=${end}` : ''} · ${d.czas_s} s`);
  if (d.zapisano) lines.push(`Zapisano pełny tekst: ${d.zapisano}`);
  if (d.fragmenty) {
    for (const f of d.fragmenty) {
      lines.push('', `## „${f.fraza}” · trafienia: ${f.trafienia} · fragmenty: ${f.fragmenty.length}`);
      for (const w of f.fragmenty) lines.push('', `[od=${w.od}] …${w.tekst}…`);
    }
    return lines.join('\n');
  }
  lines.push('', d.tekst);
  return lines.join('\n');
}

export function formatStatus(s) {
  return Object.entries(s).map(([k, v]) => `${k}: ${typeof v === 'object' && v ? JSON.stringify(v) : v}`).join('\n');
}
