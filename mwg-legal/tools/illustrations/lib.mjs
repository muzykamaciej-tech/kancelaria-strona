/* lib.mjs — procedural "pencil sketch + watercolour wash" illustrations (SVG).
   A scene draws pencil lines, hatching and construction lines, then lays watercolour washes over them
   with multiply blending, the way the Addleshaw Goddard illustrations do. Seeded, so every build is identical. */

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const BLUES = {
  ink: '#1b2633',
  navy: '#14306b',
  ultramarine: '#2350d6',
  cobalt: '#1763d8',
  cerulean: '#1e98e6',
  sky: '#5db2ef',
  indigo: '#3a3796',
  teal: '#1b9db8',
};

const f = (n) => Math.round(n * 10) / 10;

export class Sketch {
  constructor({ w, h, seed = 1 }) {
    this.w = w; this.h = h; this.seed = seed;
    this.r = mulberry32(seed);
    this.strokes = [];   // pencil: {d, w, o}
    this.faint = [];     // construction lines
    this.under = [];     // washes under the drawing
    this.over = [];      // washes over the drawing
    this.splats = [];
    this.washScale = 0.8;
    this.lineScale = 1.45;
  }

  rand(a = 0, b = 1) { return a + (b - a) * this.r(); }
  pick(arr) { return arr[Math.floor(this.r() * arr.length)]; }

  /* One pencil stroke: slight bow, overshoot past the end points, sometimes a second pass. */
  line(x1, y1, x2, y2, { w = 1.2, o = 0.85, over = 1, double = 0.3, bow = 1 } = {}) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    const ux = dx / L, uy = dy / L, px = -uy, py = ux;
    const e1 = over * Math.min(L * 0.08, this.rand(1, 6));
    const e2 = over * Math.min(L * 0.08, this.rand(1, 7));
    const sx = x1 - ux * e1, sy = y1 - uy * e1, ex = x2 + ux * e2, ey = y2 + uy * e2;
    const b = bow * this.rand(-1, 1) * Math.min(2.2, L * 0.012);
    const cx = (sx + ex) / 2 + px * b, cy = (sy + ey) / 2 + py * b;
    this.strokes.push({ d: `M${f(sx)} ${f(sy)}Q${f(cx)} ${f(cy)} ${f(ex)} ${f(ey)}`, w, o });
    if (this.r() < double && L > 12) {
      const k = this.rand(0.5, 1.3) * (this.r() < 0.5 ? -1 : 1);
      const a = this.rand(0, 0.25), z = this.rand(0.75, 1);
      const ax = sx + (ex - sx) * a + px * k, ay = sy + (ey - sy) * a + py * k;
      const zx = sx + (ex - sx) * z + px * k, zy = sy + (ey - sy) * z + py * k;
      this.strokes.push({ d: `M${f(ax)} ${f(ay)}L${f(zx)} ${f(zy)}`, w: w * 0.8, o: o * 0.55 });
    }
  }

  poly(pts, opts = {}, closed = true) {
    for (let i = 0; i < pts.length - (closed ? 0 : 1); i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      this.line(a[0], a[1], b[0], b[1], opts);
    }
  }

  rect(x, y, w, h, opts) { this.poly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], opts); }

  /* Free curve through points (Catmull-Rom), drawn as one stroke. */
  curve(pts, { w = 1.1, o = 0.8, closed = false } = {}) {
    const j = pts.map(([x, y]) => [x + this.rand(-0.8, 0.8), y + this.rand(-0.8, 0.8)]);
    this.strokes.push({ d: catmull(j, closed), w, o });
  }

  ellipse(cx, cy, rx, ry, { w = 1.1, o = 0.8, from = 0, to = Math.PI * 2, n = 28 } = {}) {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const t = from + (to - from) * (i / n);
      pts.push([cx + Math.cos(t) * rx, cy + Math.sin(t) * ry]);
    }
    // overshoot a little past the start, like a quick hand-drawn ellipse
    if (to - from >= Math.PI * 2 - 0.01) {
      const t = from + this.rand(0.15, 0.35);
      pts.push([cx + Math.cos(t) * rx * 1.01, cy + Math.sin(t) * ry * 1.02]);
    }
    this.curve(pts, { w, o });
  }

  /* Parallel hatching clipped to a polygon. */
  hatch(poly, { angle = 50, gap = 5, w = 0.7, o = 0.35, trim = 0.15 } = {}) {
    const a = (angle * Math.PI) / 180, ux = Math.cos(a), uy = Math.sin(a), nx = -uy, ny = ux;
    const proj = poly.map(([x, y]) => x * nx + y * ny);
    const lo = Math.min(...proj), hi = Math.max(...proj);
    for (let c = lo + gap * this.rand(0.3, 1); c < hi; c += gap * this.rand(0.8, 1.2)) {
      const hits = [];
      for (let i = 0; i < poly.length; i++) {
        const [x1, y1] = poly[i], [x2, y2] = poly[(i + 1) % poly.length];
        const p1 = x1 * nx + y1 * ny - c, p2 = x2 * nx + y2 * ny - c;
        if ((p1 < 0) !== (p2 < 0)) {
          const t = p1 / (p1 - p2);
          const x = x1 + (x2 - x1) * t, y = y1 + (y2 - y1) * t;
          hits.push({ x, y, s: x * ux + y * uy });
        }
      }
      hits.sort((p, q) => p.s - q.s);
      for (let i = 0; i + 1 < hits.length; i += 2) {
        const p = hits[i], q = hits[i + 1];
        const t0 = this.rand(0, trim), t1 = 1 - this.rand(0, trim);
        this.strokes.push({
          d: `M${f(p.x + (q.x - p.x) * t0)} ${f(p.y + (q.y - p.y) * t0)}L${f(p.x + (q.x - p.x) * t1)} ${f(p.y + (q.y - p.y) * t1)}`,
          w, o: o * this.rand(0.7, 1.1),
        });
      }
    }
  }

  /* Long, very light construction / perspective lines. */
  guide(x1, y1, x2, y2, o = 0.16) {
    this.faint.push({ d: `M${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}`, o });
  }

  /* Watercolour wash: an irregular blob, displaced by noise in the filter. */
  wash(cx, cy, rx, ry, color, opacity = 0.6, { layer = 'over', irregular = 0.45, rot = 0, n = 22, pool = true } = {}) {
    if (pool) {
      // darker pigment pooled toward one side, as when a wash dries
      const a = this.rand(0, Math.PI * 2);
      this.wash(cx + Math.cos(a) * rx * 0.35, cy + Math.sin(a) * ry * 0.35, rx * this.rand(0.3, 0.5), ry * this.rand(0.3, 0.5),
        color, Math.min(0.9, opacity * 0.9), { layer, irregular: 0.6, rot, n: 14, pool: false });
    }
    rx *= this.washScale; ry *= this.washScale;
    const pts = [];
    const ph = this.rand(0, Math.PI * 2);
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      const spike = this.r() < 0.12 ? this.rand(0.25, 0.6) : 0;
      const k = 1 + irregular * (this.rand(-1, 1) * 0.6 + Math.sin(t * 3 + ph) * 0.3) + spike;
      const x = Math.cos(t) * rx * k, y = Math.sin(t) * ry * k;
      const c = Math.cos(rot), s = Math.sin(rot);
      pts.push([cx + x * c - y * s, cy + x * s + y * c]);
    }
    const filt = `wc${Math.floor(this.r() * 4)}`;
    (layer === 'under' ? this.under : this.over).push({ d: catmull(pts, true), color, opacity, filt });
  }

  /* Splatter of drops around a point, mostly along one direction. */
  splatter(cx, cy, spread, count, color, { dir = 0, cone = Math.PI * 2, rmax = 5, opacity = 0.75 } = {}) {
    for (let i = 0; i < count; i++) {
      const t = dir + this.rand(-cone / 2, cone / 2);
      const d = spread * Math.pow(this.r(), 0.7);
      const r = Math.max(0.6, rmax * Math.pow(this.r(), 2.2));
      this.splats.push({ x: cx + Math.cos(t) * d, y: cy + Math.sin(t) * d, r, color, o: opacity * this.rand(0.5, 1) });
    }
  }

  /* Elongated dry-brush stroke. */
  brush(x1, y1, x2, y2, width, color, opacity = 0.5) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    const px = -dy / L, py = dx / L;
    const pts = [];
    const n = 10;
    for (let i = 0; i <= n; i++) {
      const t = i / n, wv = width * Math.sin(Math.PI * Math.min(1, t * 1.1)) * this.rand(0.7, 1.15);
      pts.push([x1 + dx * t + px * wv / 2, y1 + dy * t + py * wv / 2]);
    }
    for (let i = n; i >= 0; i--) {
      const t = i / n, wv = width * Math.sin(Math.PI * Math.min(1, t * 1.1)) * this.rand(0.7, 1.15);
      pts.push([x1 + dx * t - px * wv / 2, y1 + dy * t - py * wv / 2]);
    }
    this.over.push({ d: catmull(pts, true), color, opacity, filt: `wc${Math.floor(this.r() * 4)}` });
  }

  svg({ fade = { cx: 0.5, cy: 0.5, rx: 0.62, ry: 0.62 }, ink = BLUES.ink } = {}) {
    const { w, h } = this;
    const s = this.seed;
    const wc = [0, 1, 2, 3].map((i) => {
      const bf = [0.011, 0.014, 0.009, 0.016][i], sc = [80, 60, 95, 55][i];
      return `<filter id="wc${i}" x="-40%" y="-40%" width="180%" height="180%" color-interpolation-filters="sRGB">
<feTurbulence type="fractalNoise" baseFrequency="${bf}" numOctaves="4" seed="${s * 7 + i}" result="n"/>
<feDisplacementMap in="SourceGraphic" in2="n" scale="${sc}" xChannelSelector="R" yChannelSelector="G" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="${s * 3 + i}" result="n2"/>
<feDisplacementMap in="shape" in2="n2" scale="12" xChannelSelector="R" yChannelSelector="G" result="ragged"/>
<feGaussianBlur in="ragged" stdDeviation="0.6" result="soft"/>
<feMorphology in="soft" operator="erode" radius="2.5" result="inner"/>
<feGaussianBlur in="inner" stdDeviation="3.5" result="innerSoft"/>
<feComposite in="soft" in2="innerSoft" operator="out" result="rim"/>
<feComponentTransfer in="rim" result="rim2"><feFuncA type="linear" slope="0.95"/></feComponentTransfer>
<feComponentTransfer in="soft" result="body"><feFuncA type="table" tableValues="0 0.5"/></feComponentTransfer>
<feMerge result="paint"><feMergeNode in="body"/><feMergeNode in="rim2"/></feMerge>
<feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="3" seed="${s * 13 + i}" result="pig"/>
<feColorMatrix in="pig" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0.58" result="pigA"/>
<feComposite in="paint" in2="pigA" operator="in" result="p2"/>
<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${s * 17 + i}" result="g"/>
<feColorMatrix in="g" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.8 1.3" result="gA"/>
<feComposite in="p2" in2="gA" operator="in"/>
</filter>`;
    }).join('\n');
    const pencil = `<filter id="pencil" x="-2%" y="-2%" width="104%" height="104%">
<feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="${s}" result="t"/>
<feDisplacementMap in="SourceGraphic" in2="t" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="d"/>
<feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="1" seed="${s + 3}" result="g"/>
<feColorMatrix in="g" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.7 1.55" result="ga"/>
<feComposite in="d" in2="ga" operator="in"/>
</filter>
<filter id="drop" x="-50%" y="-50%" width="200%" height="200%">
<feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" seed="${s + 5}" result="n"/>
<feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G"/>
</filter>`;
    const mask = `<radialGradient id="fadeG" cx="${fade.cx}" cy="${fade.cy}" r="0.5" gradientTransform="translate(${fade.cx} ${fade.cy}) scale(${fade.rx * 2} ${fade.ry * 2}) translate(${-fade.cx} ${-fade.cy})">
<stop offset="0.55" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient>
<mask id="fade" maskUnits="userSpaceOnUse" x="0" y="0" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="url(#fadeG)"/></mask>`;
    const washes = (arr) => arr.map((p) =>
      `<path d="${p.d}" fill="${p.color}" fill-opacity="${p.opacity}" filter="url(#${p.filt})" style="mix-blend-mode:multiply"/>`).join('\n');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs>${wc}
${pencil}
${mask}</defs>
<g style="isolation:isolate">
<g>${washes(this.under)}</g>
<g mask="url(#fade)">
<g fill="none" stroke="${ink}" stroke-width="0.8" stroke-linecap="round">${this.faint.map((l) => `<path d="${l.d}" stroke-opacity="${l.o}"/>`).join('')}</g>
<g fill="none" stroke="${ink}" stroke-linecap="round" stroke-linejoin="round" filter="url(#pencil)">${this.strokes.map((l) => `<path d="${l.d}" stroke-width="${f(l.w * this.lineScale)}" stroke-opacity="${f(l.o * 100) / 100}"/>`).join('')}</g>
</g>
<g>${washes(this.over)}</g>
<g filter="url(#drop)">${this.splats.map((p) => `<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${f(p.r)}" fill="${p.color}" fill-opacity="${f(p.o * 100) / 100}" style="mix-blend-mode:multiply"/>`).join('')}</g>
</g>
</svg>`;
  }
}

export function catmull(pts, closed) {
  const P = closed ? [pts[pts.length - 1], ...pts, pts[0], pts[1]] : [pts[0], ...pts, pts[pts.length - 1]];
  let d = `M${f(P[1][0])} ${f(P[1][1])}`;
  for (let i = 1; i < P.length - 2; i++) {
    const [x0, y0] = P[i - 1], [x1, y1] = P[i], [x2, y2] = P[i + 1], [x3, y3] = P[i + 2];
    d += `C${f(x1 + (x2 - x0) / 6)} ${f(y1 + (y2 - y0) / 6)} ${f(x2 - (x3 - x1) / 6)} ${f(y2 - (y3 - y1) / 6)} ${f(x2)} ${f(y2)}`;
  }
  return d + (closed ? 'Z' : '');
}

/* Two-point perspective helpers. */
export const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

export function intersect(p1, p2, p3, p4) {
  const d = (p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0]);
  if (Math.abs(d) < 1e-9) return p2;
  const a = p1[0] * p2[1] - p1[1] * p2[0], b = p3[0] * p4[1] - p3[1] * p4[0];
  return [(a * (p3[0] - p4[0]) - (p1[0] - p2[0]) * b) / d, (a * (p3[1] - p4[1]) - (p1[1] - p2[1]) * b) / d];
}

/* A box standing on the ground, seen in two-point perspective.
   x,yb: front bottom corner; h: height; tl,tr: how far each face runs toward its vanishing point (0..1). */
export function pbox(s, { x, yb, h, tl, tr, VL, VR, floors = 0, colsL = 0, colsR = 0, shade = 'L', w = 1.1, o = 0.8, top = true, hatchO = 0.3 }) {
  const B = [x, yb], T = [x, yb - h];
  const BL = lerp(B, VL, tl), TL = lerp(T, VL, tl), BR = lerp(B, VR, tr), TR = lerp(T, VR, tr);
  const opt = { w, o };
  s.line(...B, ...T, opt);
  s.line(...B, ...BL, opt); s.line(...T, ...TL, opt); s.line(...BL, ...TL, opt);
  s.line(...B, ...BR, opt); s.line(...T, ...TR, opt); s.line(...BR, ...TR, opt);
  if (top && VL[1] < T[1]) {
    const back = intersect(TL, VR, TR, VL);
    s.line(...TL, ...back, opt); s.line(...TR, ...back, opt);
  }
  const face = (Bf, Tf, VP, t, cols) => {
    const at = (u, v) => lerp(lerp(Bf, VP, u), lerp(Tf, VP, u), v);
    for (let i = 1; i < floors; i++) {
      const v = i / floors;
      s.line(...at(0, v), ...at(t, v), { w: w * 0.6, o: o * 0.5, over: 0.4, double: 0.1 });
    }
    for (let i = 1; i < cols; i++) {
      const u = (t * i) / cols;
      s.line(...at(u, 0), ...at(u, 1), { w: w * 0.55, o: o * 0.45, over: 0.3, double: 0.05 });
    }
  };
  face(B, T, VL, tl, colsL);
  face(B, T, VR, tr, colsR);
  if (shade === 'L') s.hatch([B, BL, TL, T], { angle: 62, gap: 4.5, o: hatchO });
  if (shade === 'R') s.hatch([B, BR, TR, T], { angle: 118, gap: 4.5, o: hatchO });
  return { B, T, BL, TL, BR, TR };
}

/* A translated + scaled view of a sketch, so a subject can be placed anywhere at any size. */
export function view(s, ox, oy, k = 1) {
  const P = (x, y) => [ox + x * k, oy + y * k];
  const PP = (pts) => pts.map(([x, y]) => P(x, y));
  return {
    s, k, P,
    line: (x1, y1, x2, y2, o) => s.line(...P(x1, y1), ...P(x2, y2), o),
    poly: (pts, o, closed) => s.poly(PP(pts), o, closed),
    rect: (x, y, w, h, o) => s.rect(...P(x, y), w * k, h * k, o),
    curve: (pts, o) => s.curve(PP(pts), o),
    ellipse: (cx, cy, rx, ry, o) => s.ellipse(...P(cx, cy), rx * k, ry * k, o),
    hatch: (pts, o) => s.hatch(PP(pts), o),
    guide: (x1, y1, x2, y2, o) => s.guide(...P(x1, y1), ...P(x2, y2), o),
  };
}
