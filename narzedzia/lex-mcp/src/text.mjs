/* text.mjs — czyste funkcje na tekście (bez przeglądarki), testowane w test/text.test.mjs. */

const MONTHS = 'stycznia|lutego|marca|kwietnia|maja|czerwca|lipca|sierpnia|września|wrzesnia|października|pazdziernika|listopada|grudnia';
const DATE_RE = new RegExp(`\\b(\\d{1,2}\\s+(?:${MONTHS})\\s+\\d{4})\\s*r?\\.?|\\b(\\d{4}-\\d{2}-\\d{2})\\b|\\b(\\d{1,2}\\.\\d{1,2}\\.\\d{4})\\s*r?\\.?`, 'i');
// sygnatury: III CZP 27/17, I ACa 123/19, II SA/Wa 1234/20, II OSK 55/21, IV CSKP 1/22, P 10/16, SK 3/19, K 1/20,
// TSUE: C-681/24, T-358/25
const SIGNATURE_RE = /\b(?:(?:[IVXL]{1,5}\s+[A-Z][A-Za-z]{0,5}(?:\/[A-Z][a-z]{1,3})?(?:\s+[A-Z][A-Za-z]{0,3})?|(?:P|K|SK|Kp|Kpt|U|Ts|Tw|S)\s?)\s*\d{1,6}\/\d{2,4}|[CTF]-\d{1,4}\/\d{2})\b/;

export function parseMeta(text) {
  const t = String(text || '');
  const sig = SIGNATURE_RE.exec(t)?.[0]?.replace(/\s+/g, ' ').trim();
  const d = DATE_RE.exec(t);
  return { sygnatura: sig || null, data: d ? (d[1] || d[2] || d[3]).replace(/\s+/g, ' ') : null };
}

// plakietki LEX doklejane na początku tytułu i opisu („Nowość”, „Otwarty dostęp”)
export const stripBadge = (s) => String(s || '').replace(/^\s*(?:Nowość|Aktualizacja|Otwarty dostęp)\s*/i, '');
export const cleanTitle = (s) => stripBadge(s).replace(/\s+/g, ' ').trim();

export const normalize = (s) => String(s || '')
  .replace(/\u00a0/g, ' ')
  .replace(/[ \t]+/g, ' ')
  .replace(/ *\n */g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

/* Sklejanie kolejnych „klatek” tekstu przy przewijaniu długiego dokumentu.
   Działa dla obu wariantów ładowania: dopisywania na końcu (b zawiera a) i wirtualnego przewijania
   (b to przesunięte okno, które zachodzi na koniec a). Szuka w b ostatnich linii a i dokleja resztę. */
export function mergeText(a, b) {
  if (!a) return b || '';
  if (!b || a.includes(b)) return a;
  if (b.includes(a)) return b;
  const A = a.split('\n');
  const B = b.split('\n');
  for (let k = Math.min(6, A.length); k >= 2; k--) {
    const tail = A.slice(-k);
    for (let i = B.length - k; i >= 0; i--) {
      let ok = true;
      for (let j = 0; j < k; j++) if (B[i + j] !== tail[j]) { ok = false; break; }
      if (ok) {
        const rest = B.slice(i + k);
        return rest.length ? a + '\n' + rest.join('\n') : a;
      }
    }
  }
  return a + '\n[…]\n' + b; // brak zakładki: zaznacz możliwą lukę
}

// Fragmenty wokół trafień (bez rozróżniania wielkości liter i polskich znaków diakrytycznych)
const fold = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l');

export function snippets(text, phrases, { radius = 700, perPhrase = 8 } = {}) {
  const hay = fold(text);
  const out = [];
  for (const phrase of phrases.map((p) => String(p).trim()).filter(Boolean)) {
    const needle = fold(phrase);
    const hits = [];
    let idx = hay.indexOf(needle);
    while (idx !== -1) {
      hits.push(idx);
      idx = hay.indexOf(needle, idx + needle.length);
    }
    const windows = [];
    for (const h of hits) {
      const start = Math.max(0, h - radius);
      const end = Math.min(text.length, h + needle.length + radius);
      const last = windows[windows.length - 1];
      if (last && start <= last.end) last.end = end; // scal zachodzące okna
      else windows.push({ start, end });
    }
    out.push({ fraza: phrase, trafienia: hits.length, fragmenty: windows.slice(0, perPhrase) });
  }
  return out;
}

export function fileSafe(s, max = 90) {
  return String(s || 'dokument')
    .replace(/[\\/:*?"<>|\n\r\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
    .trim() || 'dokument';
}
