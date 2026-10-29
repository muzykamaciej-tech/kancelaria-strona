/* scenes.mjs — one function per illustration. Each returns an SVG string. */
import { Sketch, BLUES as C, pbox, lerp, view } from './lib.mjs';

/* Office towers in two-point perspective — corporate law, M&A. */
export function towers(seed = 11, { w = 1200, h = 800 } = {}) {
  const s = new Sketch({ w, h, seed });
  const hy = 690, VL = [-1500, hy], VR = [2700, hy];
  const g = 720;
  s.guide(0, g + 4, w, g - 2, 0.22);
  // back row first, so the front towers are drawn last
  pbox(s, { x: 330, yb: g, h: 330, tl: 0.07, tr: 0.05, VL, VR, floors: 16, colsL: 4, colsR: 4, shade: 'L', o: 0.55, hatchO: 0.18 });
  pbox(s, { x: 905, yb: g, h: 360, tl: 0.05, tr: 0.06, VL, VR, floors: 18, colsL: 3, colsR: 5, shade: 'R', o: 0.55, hatchO: 0.2 });
  const a = pbox(s, { x: 560, yb: g, h: 590, tl: 0.11, tr: 0.075, VL, VR, floors: 30, colsL: 6, colsR: 5, shade: 'L', hatchO: 0.32 });
  pbox(s, { x: 760, yb: g, h: 450, tl: 0.035, tr: 0.07, VL, VR, floors: 22, colsL: 2, colsR: 6, shade: 'R', hatchO: 0.26 });
  // mast on the tallest tower
  s.line(a.T[0], a.T[1], a.T[0] + 2, a.T[1] - 70, { w: 1.2 });
  s.line(a.T[0] - 8, a.T[1] - 22, a.T[0] + 9, a.T[1] - 22, { w: 0.9, o: 0.6 });
  // low podium buildings and street
  pbox(s, { x: 180, yb: g, h: 120, tl: 0.03, tr: 0.05, VL, VR, floors: 4, colsL: 2, colsR: 6, shade: 'L', o: 0.5, hatchO: 0.15 });
  pbox(s, { x: 1040, yb: g, h: 150, tl: 0.02, tr: 0.04, VL, VR, floors: 5, colsL: 1, colsR: 4, shade: 'R', o: 0.5, hatchO: 0.15 });
  for (let i = 0; i < 7; i++) s.guide(560, 130 + i * 70, i % 2 ? VL[0] : VR[0], hy, 0.07);
  // tiny figures / trees for scale
  for (let x = 120; x < 1150; x += s.rand(40, 90)) {
    s.line(x, g + 2, x, g - s.rand(14, 26), { w: 0.8, o: 0.5, double: 0 });
    s.ellipse(x, g - s.rand(26, 32), s.rand(7, 11), s.rand(6, 9), { w: 0.7, o: 0.4 });
  }
  // watercolour
  s.wash(780, 280, 210, 150, C.cobalt, 0.7, { rot: -0.4 });
  s.wash(470, 470, 190, 110, C.sky, 0.75, { rot: 0.3 });
  s.wash(930, 520, 120, 85, C.ultramarine, 0.6);
  s.wash(640, 170, 90, 70, C.cerulean, 0.7);
  s.brush(300, 650, 980, 590, 55, C.sky, 0.55);
  s.splatter(980, 260, 170, 70, C.cobalt, { dir: -0.6, cone: 1.6 });
  s.splatter(330, 560, 140, 45, C.cerulean, { dir: 2.6, cone: 1.4 });
  return s.svg({ fade: { cx: 0.52, cy: 0.5, rx: 0.6, ry: 0.62 } });
}

/* Building frame under construction with a tower crane — real estate, investment process. */
export function crane(seed = 23, { w = 1200, h = 800 } = {}) {
  const s = new Sketch({ w, h, seed });
  const hy = 640, VL = [-1300, hy], VR = [2600, hy];
  const g = 700;
  s.guide(0, g + 2, w, g - 3, 0.22);
  // concrete frame: floors as stacked thin slabs, columns between
  const x0 = 640, floors = 7, fh = 46;
  for (let i = 0; i <= floors; i++) {
    const yb = g - i * fh;
    const B = [x0, yb], BL = lerp(B, VL, 0.16), BR = lerp(B, VR, 0.1);
    s.line(...B, ...BL, { w: 1.1, o: 0.8 }); s.line(...B, ...BR, { w: 1.1, o: 0.8 });
    const B2 = [x0, yb - 6];
    s.line(...B2, ...lerp(B2, VL, 0.16), { w: 0.7, o: 0.5 }); s.line(...B2, ...lerp(B2, VR, 0.1), { w: 0.7, o: 0.5 });
    if (i < floors) {
      for (let k = 0; k <= 5; k++) {
        const p = lerp(B, VL, 0.16 * k / 5), q = lerp([x0, yb - fh], VL, 0.16 * k / 5);
        s.line(p[0], p[1] - 6, q[0], q[1], { w: 0.9, o: 0.65, over: 0.3 });
      }
      for (let k = 1; k <= 3; k++) {
        const p = lerp(B, VR, 0.1 * k / 3), q = lerp([x0, yb - fh], VR, 0.1 * k / 3);
        s.line(p[0], p[1] - 6, q[0], q[1], { w: 0.9, o: 0.65, over: 0.3 });
      }
    }
  }
  // finished lower floors: hatch the left face
  const Bf = [x0, g], Tf = [x0, g - 3 * fh];
  s.hatch([Bf, lerp(Bf, VL, 0.16), lerp(Tf, VL, 0.16), Tf], { angle: 65, gap: 4, o: 0.3 });
  // scaffolding on the right face
  for (let k = 0; k <= 6; k++) {
    const p = lerp([x0 + 6, g], VR, 0.1 * k / 6), q = lerp([x0 + 6, g - floors * fh + 20], VR, 0.1 * k / 6);
    s.line(p[0] + 10, p[1], q[0] + 10, q[1], { w: 0.6, o: 0.45, over: 0.2 });
  }
  // tower crane
  const mx = 360, top = 90, mw = 22;
  for (const dx of [0, mw]) s.line(mx + dx, g, mx + dx, top, { w: 1.2, o: 0.85 });
  for (let y = g; y > top + 20; y -= 26) {
    s.line(mx, y, mx + mw, y - 26, { w: 0.7, o: 0.6, over: 0.2, double: 0 });
    s.line(mx, y - 26, mx + mw, y - 26, { w: 0.6, o: 0.45, over: 0.2, double: 0 });
  }
  // cab, jib, counter-jib, apex
  s.rect(mx - 6, top - 8, mw + 30, 26, { w: 1, o: 0.8 });
  const jy = top - 8, jx2 = 1040, cx1 = mx - 170;
  s.line(mx + mw, jy, jx2, jy, { w: 1.2 }); s.line(mx + mw, jy - 20, jx2 - 30, jy - 4, { w: 1 });
  for (let x = mx + mw; x < jx2 - 30; x += 24) s.line(x, jy, x + 12, jy - 18 + (x - mx) * 0.023, { w: 0.6, o: 0.55, over: 0.2, double: 0 });
  s.line(cx1, jy, mx, jy, { w: 1.2 }); s.line(cx1, jy - 16, mx, jy - 16, { w: 0.9, o: 0.7 });
  s.rect(cx1 + 5, jy, 60, 34, { w: 1 }); s.hatch([[cx1 + 5, jy], [cx1 + 65, jy], [cx1 + 65, jy + 34], [cx1 + 5, jy + 34]], { angle: 45, gap: 3.5, o: 0.45 });
  const ax = mx + mw / 2, ay = top - 80;
  s.line(mx, jy - 16, ax, ay, { w: 1 }); s.line(mx + mw, jy - 16, ax, ay, { w: 1 });
  s.line(ax, ay, jx2 - 260, jy - 14, { w: 0.6, o: 0.6 }); s.line(ax, ay, cx1 + 10, jy - 16, { w: 0.6, o: 0.6 });
  // trolley and hook with a hanging beam
  const hx = 820;
  s.rect(hx - 8, jy, 16, 8, { w: 0.8 });
  s.line(hx - 2, jy + 8, hx - 2, 280, { w: 0.6, o: 0.7, double: 0 }); s.line(hx + 2, jy + 8, hx + 2, 280, { w: 0.6, o: 0.7, double: 0 });
  s.line(hx, 280, hx - 50, 300, { w: 0.6, o: 0.6 }); s.line(hx, 280, hx + 50, 300, { w: 0.6, o: 0.6 });
  s.rect(hx - 70, 300, 140, 12, { w: 1 });
  // guides
  for (let i = 0; i < 5; i++) s.guide(x0, g - i * 80, VL[0], hy, 0.06);
  // watercolour
  s.wash(790, 480, 170, 140, C.cobalt, 0.7, { rot: 0.2 });
  s.wash(560, 250, 220, 90, C.sky, 0.7, { rot: -0.15 });
  s.wash(330, 560, 80, 160, C.cerulean, 0.6);
  s.wash(940, 330, 80, 70, C.ultramarine, 0.6);
  s.brush(200, 690, 960, 700, 40, C.sky, 0.5);
  s.splatter(640, 180, 160, 60, C.cobalt, { dir: -1.3, cone: 2 });
  return s.svg({ fade: { cx: 0.52, cy: 0.5, rx: 0.62, ry: 0.62 } });
}

/* ---------- reusable subjects (drawn in local coordinates through a view) ---------- */

/* Classical portico: steps, six columns, entablature, pediment. Local box ~ 760 x 540, origin top-left, ground at y=540. */
function portico(v, { cols = 6 } = {}) {
  const g = 540;
  // steps
  [[0, 760], [20, 720], [40, 680]].forEach(([dx], i) => v.rect(dx, g - 20 * (i + 1), 760 - 2 * dx, 20, { w: 1.1 }));
  const top = g - 60, capY = 220, x0 = 85, x1 = 675;
  // back wall and door
  v.line(x0 - 20, capY, x0 - 20, top, { w: 0.8, o: 0.5 }); v.line(x1 + 20, capY, x1 + 20, top, { w: 0.8, o: 0.5 });
  v.rect(345, 330, 70, 150, { w: 1 }); v.rect(355, 345, 22, 55, { w: 0.7, o: 0.6 }); v.rect(383, 345, 22, 55, { w: 0.7, o: 0.6 });
  v.hatch([[345, 330], [415, 330], [415, 480], [345, 480]], { angle: 80, gap: 4, o: 0.25 });
  // columns
  for (let i = 0; i < cols; i++) {
    const cx = x0 + ((x1 - x0) * i) / (cols - 1);
    const wb = 23, wt = 19;
    v.rect(cx - 30, top - 12, 60, 12, { w: 1 });
    v.line(cx - wb, top - 12, cx - wt, capY + 22, { w: 1.1 }); v.line(cx + wb, top - 12, cx + wt, capY + 22, { w: 1.1 });
    for (const f of [-0.45, 0, 0.45]) v.line(cx + f * wb, top - 16, cx + f * wt, capY + 26, { w: 0.5, o: 0.4, over: 0.2, double: 0 });
    v.hatch([[cx + wb * 0.45, top - 12], [cx + wb, top - 12], [cx + wt, capY + 22], [cx + wt * 0.45, capY + 22]], { angle: 75, gap: 3.5, o: 0.35 });
    v.curve([[cx - wt - 2, capY + 22], [cx - wt - 8, capY + 14], [cx + wt + 8, capY + 14], [cx + wt + 2, capY + 22]], { w: 0.9, o: 0.7 });
    v.rect(cx - 32, capY, 64, 10, { w: 1 });
  }
  // entablature
  v.rect(40, capY - 34, 680, 34, { w: 1.1 });
  v.rect(40, capY - 72, 680, 38, { w: 1.1 });
  for (let x = 60; x < 700; x += 56) for (const d of [0, 8, 16]) v.line(x + d, capY - 70, x + d, capY - 36, { w: 0.6, o: 0.55, over: 0.2, double: 0 });
  v.rect(20, capY - 88, 720, 16, { w: 1.1 });
  v.hatch([[20, capY - 72], [740, capY - 72], [740, capY - 66], [20, capY - 66]], { angle: 20, gap: 3, o: 0.4 });
  // pediment
  v.poly([[20, capY - 88], [740, capY - 88], [380, capY - 190]], { w: 1.2 });
  v.poly([[62, capY - 96], [698, capY - 96], [380, capY - 176]], { w: 0.8, o: 0.6 });
  v.hatch([[62, capY - 96], [698, capY - 96], [380, capY - 176]], { angle: 30, gap: 6, o: 0.18 });
}

/* Lublin, Krakowska Gate (front elevation, simplified). Local box ~ 220 x 720, ground y=720, axis x=110. */
function krakowskaGate(v) {
  const g = 720, c = 110;
  v.rect(30, 330, 160, g - 330, { w: 1.2 });
  // pointed gateway
  v.line(75, g, 75, 610, { w: 1.1 }); v.line(145, g, 145, 610, { w: 1.1 });
  v.curve([[75, 610], [80, 585], [96, 566], [110, 556]], { w: 1.1 }); v.curve([[145, 610], [140, 585], [124, 566], [110, 556]], { w: 1.1 });
  v.hatch([[75, g], [145, g], [145, 610], [110, 558], [75, 610]], { angle: 85, gap: 3.2, o: 0.45 });
  // brick courses and lancet windows
  for (let y = 350; y < g - 10; y += 22) {
    const x = 36 + Math.abs(Math.sin(y)) * 60;
    v.line(x, y, x + 30 + (y % 40), y, { w: 0.5, o: 0.35, over: 0.2, double: 0 });
  }
  for (const x of [62, 140]) { v.rect(x, 400, 18, 50, { w: 0.9 }); v.line(x, 400, x + 9, 386, { w: 0.9 }); v.line(x + 18, 400, x + 9, 386, { w: 0.9 }); }
  v.rect(20, 318, 180, 12, { w: 1.1 });
  // octagonal drum: front face and two raking faces
  v.rect(65, 210, 90, 108, { w: 1.1 }); v.rect(40, 214, 25, 104, { w: 0.9 }); v.rect(155, 214, 25, 104, { w: 0.9 });
  v.hatch([[155, 214], [180, 214], [180, 318], [155, 318]], { angle: 70, gap: 3.5, o: 0.4 });
  v.ellipse(c, 262, 24, 24, { w: 1 }); v.line(c, 262, c, 246, { w: 0.9 }); v.line(c, 262, c + 12, 268, { w: 0.9 });
  v.rect(32, 198, 156, 12, { w: 1.1 });
  // baroque helmet: bulb, lantern, small cupola, spire with ball
  const L = [[42, 198], [30, 176], [42, 150], [74, 128], [100, 112], [104, 98]];
  v.curve(L, { w: 1.2 }); v.curve(L.map(([x, y]) => [2 * c - x, y]), { w: 1.2 });
  v.curve([[48, 176], [110, 168], [172, 176]], { w: 0.7, o: 0.6 });
  v.hatch([[2 * c - 42, 198], [2 * c - 30, 176], [2 * c - 42, 150], [2 * c - 74, 128], [c, 120], [c, 198]], { angle: 60, gap: 4, o: 0.3 });
  v.rect(96, 64, 28, 34, { w: 1 }); v.line(c, 70, c, 92, { w: 0.6, o: 0.6 });
  v.curve([[96, 64], [92, 56], [104, 44], [110, 38]], { w: 1 }); v.curve([[124, 64], [128, 56], [116, 44], [110, 38]], { w: 1 });
  v.line(c, 38, c, 0, { w: 1 }); v.ellipse(c, 18, 5, 5, { w: 0.9 });
}

/* Old-town tenement house with a decorative parapet. */
function tenement(v, x, w, h, { g = 720, kind = 0, cols = 3, rows = 4 } = {}) {
  const top = g - h;
  v.rect(x, top, w, h, { w: 1.05 });
  const ww = (w - 20) / cols;
  for (let r = 0; r < rows; r++) for (let cI = 0; cI < cols; cI++) {
    const wx = x + 10 + cI * ww + ww * 0.25, wy = top + 26 + r * ((h - 90) / rows);
    v.rect(wx, wy, ww * 0.5, (h - 90) / rows * 0.55, { w: 0.8, o: 0.7, double: 0.15 });
  }
  // ground-floor door with arch
  const dx = x + w / 2 - 12;
  v.line(dx, g, dx, g - 36, { w: 0.9 }); v.line(dx + 24, g, dx + 24, g - 36, { w: 0.9 });
  v.curve([[dx, g - 36], [dx + 12, g - 50], [dx + 24, g - 36]], { w: 0.9 });
  if (kind === 0) { // stepped gable
    v.poly([[x + 6, top], [x + 6, top - 18], [x + w * 0.3, top - 18], [x + w * 0.3, top - 34], [x + w * 0.7, top - 34], [x + w * 0.7, top - 18], [x + w - 6, top - 18], [x + w - 6, top]], { w: 1 }, false);
  } else if (kind === 1) { // curved attic with volutes
    v.curve([[x + 4, top], [x + w * 0.2, top - 10], [x + w * 0.35, top - 30], [x + w * 0.5, top - 42], [x + w * 0.65, top - 30], [x + w * 0.8, top - 10], [x + w - 4, top]], { w: 1 });
    v.ellipse(x + w / 2, top - 20, 7, 7, { w: 0.8 });
  } else { // flat parapet with pinnacles
    v.rect(x - 3, top - 14, w + 6, 14, { w: 0.9 });
    for (const px of [x + 6, x + w / 2, x + w - 6]) v.poly([[px - 5, top - 14], [px, top - 32], [px + 5, top - 14]], { w: 0.8 }, false);
  }
  v.hatch([[x + w * 0.62, top], [x + w, top], [x + w, g], [x + w * 0.62, g]], { angle: 72, gap: 5, o: 0.18 });
}

/* Warsaw, Palace of Culture and Science (front elevation, simplified). Local box ~ 600 x 720, axis x=300. */
function pkin(v) {
  const g = 720, c = 300;
  const stage = (hw, y0, y1, ribs) => {
    v.rect(c - hw, y0, hw * 2, y1 - y0, { w: 1.1 });
    for (let x = c - hw + ribs; x < c + hw - 2; x += ribs) v.line(x, y0 + 3, x, y1 - 2, { w: 0.5, o: 0.4, over: 0.2, double: 0 });
    v.hatch([[c + hw * 0.55, y0], [c + hw, y0], [c + hw, y1], [c + hw * 0.55, y1]], { angle: 74, gap: 4, o: 0.25 });
    for (const px of [c - hw, c + hw]) v.poly([[px - 6, y0], [px, y0 - 22], [px + 6, y0]], { w: 0.8 }, false);
  };
  // wings
  v.rect(0, 600, 150, 120, { w: 1 }); v.rect(450, 600, 150, 120, { w: 1 });
  for (let x = 12; x < 150; x += 16) { v.line(x, 610, x, 712, { w: 0.5, o: 0.4, double: 0 }); v.line(600 - x, 610, 600 - x, 712, { w: 0.5, o: 0.4, double: 0 }); }
  stage(150, 470, g, 15);
  stage(110, 360, 470, 14);
  stage(80, 272, 360, 13);
  stage(55, 202, 272, 12);
  v.rect(c - 34, 152, 68, 50, { w: 1 }); v.ellipse(c, 176, 14, 14, { w: 0.9 });
  v.rect(c - 16, 112, 32, 40, { w: 1 });
  v.line(c - 16, 112, c, 22, { w: 1.1 }); v.line(c + 16, 112, c, 22, { w: 1.1 }); v.line(c, 22, c, 0, { w: 0.8 });
  for (let y = 40; y < 110; y += 14) v.line(c - (110 - y) * 0.17, y, c + (110 - y) * 0.17, y, { w: 0.5, o: 0.5, over: 0.2, double: 0 });
}

/* ---------- scenes ---------- */

export function court(seed = 31) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const v = view(s, 220, 160, 1);
  portico(v);
  s.guide(0, 701, 1200, 699, 0.2);
  for (let i = 0; i < 6; i++) s.guide(600, 300, i * 240, 800, 0.06);
  s.wash(610, 230, 260, 90, C.cobalt, 0.65, { rot: -0.08 });
  s.wash(420, 560, 170, 120, C.sky, 0.7);
  s.wash(820, 520, 120, 150, C.cerulean, 0.55);
  s.wash(300, 300, 70, 60, C.ultramarine, 0.55);
  s.brush(200, 690, 1000, 685, 40, C.sky, 0.5);
  s.splatter(880, 210, 150, 55, C.cobalt, { dir: -0.4, cone: 1.5 });
  return s.svg();
}

export function coins(seed = 41) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  // faint chart behind
  s.line(250, 640, 250, 180, { w: 0.9, o: 0.45 }); s.line(250, 640, 990, 640, { w: 0.9, o: 0.45 });
  [[300, 520], [400, 470], [500, 420], [600, 380], [700, 300], [800, 260], [900, 200]].forEach(([x, y], i, a) => {
    s.rect(x - 22, y, 44, 640 - y, { w: 0.7, o: 0.35, double: 0 });
    if (i) s.line(a[i - 1][0], a[i - 1][1] - 30, x, y - 30, { w: 0.9, o: 0.6 });
  });
  s.line(900, 170, 930, 150, { w: 1 }); s.line(930, 150, 915, 150, { w: 1 }); s.line(930, 150, 926, 164, { w: 1 });
  const stack = (cx, by, rx, ry, n, th) => {
    s.line(cx - rx, by, cx - rx, by - n * th, { w: 1.1 }); s.line(cx + rx, by, cx + rx, by - n * th, { w: 1.1 });
    for (let i = 0; i < n; i++) s.ellipse(cx, by - i * th, rx, ry, { from: 0, to: Math.PI, w: i ? 0.7 : 1.1, o: i ? 0.55 : 0.85 });
    s.ellipse(cx, by - n * th, rx, ry, { w: 1.1 });
    s.ellipse(cx, by - n * th, rx * 0.74, ry * 0.74, { w: 0.7, o: 0.55 });
    const pts = [[cx + rx * 0.35, by + ry * 0.94], [cx + rx, by], [cx + rx, by - n * th], [cx + rx * 0.35, by - n * th + ry * 0.94]];
    s.hatch(pts, { angle: 88, gap: 3.6, o: 0.4 });
  };
  stack(470, 690, 92, 30, 12, 15);
  stack(680, 710, 92, 30, 6, 15);
  stack(310, 720, 80, 26, 4, 15);
  stack(860, 725, 80, 26, 2, 15);
  s.ellipse(560, 742, 70, 20, { w: 1 }); s.ellipse(560, 742, 50, 14, { w: 0.6, o: 0.5 });
  s.wash(470, 470, 140, 200, C.cobalt, 0.65, { rot: 0.1 });
  s.wash(700, 330, 260, 110, C.sky, 0.65, { rot: -0.35 });
  s.wash(760, 650, 130, 70, C.ultramarine, 0.5);
  s.wash(300, 640, 90, 70, C.cerulean, 0.6);
  s.splatter(900, 220, 140, 55, C.cobalt, { dir: -0.9, cone: 1.6 });
  return s.svg();
}

export function factory(seed = 53) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const hy = 560, VL = [-700, hy], VR = [2400, hy], g = 700;
  // chimney behind
  s.line(300, g - 120, 312, 120, { w: 1.1 }); s.line(350, g - 120, 338, 120, { w: 1.1 });
  for (const y of [140, 200, 260]) s.ellipse(325, y, 14 + (y - 120) * 0.02, 4, { w: 0.7, o: 0.6 });
  s.ellipse(325, 120, 13, 4, { w: 1 });
  s.hatch([[332, 125], [338, 120], [350, 580], [340, 580]], { angle: 88, gap: 3, o: 0.35 });
  // long hall with saw-tooth roof
  const hall = pbox(s, { x: 860, yb: g, h: 170, tl: 0.33, tr: 0.07, VL, VR, floors: 0, colsL: 0, colsR: 0, shade: 'R', hatchO: 0.25 });
  const N = 6, ht = 70;
  for (let k = 0; k < N; k++) {
    const a = lerp(hall.T, hall.TL, k / N), b = lerp(hall.T, hall.TL, (k + 1) / N);
    const apex = [a[0], a[1] - ht];
    s.line(...a, ...apex, { w: 1 });
    s.line(...apex, ...b, { w: 1 });
    const back = lerp(apex, VR, 0.07);
    s.line(...apex, ...back, { w: 0.8, o: 0.6 });
    for (let j = 1; j < 4; j++) { const p = lerp(a, apex, j / 4); s.line(...p, ...lerp(p, VR, 0.07), { w: 0.5, o: 0.4, double: 0 }); }
  }
  // windows band and loading doors
  for (let k = 0; k < 9; k++) {
    const u0 = (0.33 * (k + 0.2)) / 9, u1 = (0.33 * (k + 0.8)) / 9;
    const at = (u, vv) => lerp(lerp(hall.B, VL, u), lerp(hall.T, VL, u), vv);
    s.poly([at(u0, 0.55), at(u1, 0.55), at(u1, 0.85), at(u0, 0.85)], { w: 0.8, o: 0.7, double: 0.1 });
  }
  for (let k = 0; k < 2; k++) {
    const at = (u, vv) => lerp(lerp(hall.B, VR, u), lerp(hall.T, VR, u), vv);
    const u0 = 0.012 + k * 0.03, u1 = u0 + 0.022;
    s.poly([at(u0, 0), at(u1, 0), at(u1, 0.6), at(u0, 0.6)], { w: 1 });
    for (let j = 1; j < 8; j++) s.line(...at(u0, (0.6 * j) / 8), ...at(u1, (0.6 * j) / 8), { w: 0.5, o: 0.5, over: 0.2, double: 0 });
  }
  // office block in front, fence
  pbox(s, { x: 360, yb: g + 40, h: 150, tl: 0.05, tr: 0.09, VL, VR, floors: 4, colsL: 2, colsR: 5, shade: 'L', hatchO: 0.2 });
  for (let x = 40; x < 1180; x += 22) s.line(x, g + 70, x, g + 52, { w: 0.6, o: 0.45, double: 0, over: 0.2 });
  s.line(30, g + 56, 1180, g + 56, { w: 0.6, o: 0.4 });
  s.wash(560, 420, 260, 110, C.cobalt, 0.6, { rot: -0.2 });
  s.wash(330, 230, 70, 160, C.sky, 0.65);
  s.wash(940, 560, 140, 110, C.cerulean, 0.55);
  s.wash(420, 650, 120, 70, C.ultramarine, 0.5);
  s.splatter(380, 140, 120, 45, C.cobalt, { dir: -1.2, cone: 1.8 });
  return s.svg();
}

export function pen(seed = 61) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  // two sheets of paper
  s.poly([[230, 230], [790, 170], [850, 700], [290, 760]], { w: 0.9, o: 0.55 });
  s.poly([[300, 200], [860, 200], [860, 730], [300, 730]], { w: 1.1 });
  for (let i = 0; i < 11; i++) {
    const y = 260 + i * 30, len = i === 0 ? 260 : s.rand(340, 500);
    s.line(350, y, 350 + len, y, { w: 0.6, o: 0.45, over: 0.2, double: 0 });
  }
  s.line(560, 640, 800, 640, { w: 0.7, o: 0.6 });
  s.curve([[575, 630], [590, 600], [605, 628], [620, 598], [640, 632], [660, 610], [690, 622], [720, 604]], { w: 1.2 });
  // fountain pen: tip at (720,604), body toward upper right
  const tip = [722, 602], ax = Math.cos(-0.72), ay = Math.sin(-0.72), px = -ay, py = ax;
  const P = (t, n) => [tip[0] + ax * t + px * n, tip[1] + ay * t + py * n];
  const nib = [P(0, 0), P(60, -16), P(130, -30), P(175, -32), P(175, 32), P(130, 30), P(60, 16)];
  s.curve([nib[0], nib[1], nib[2], nib[3]], { w: 1.2 }); s.curve([nib[0], nib[6], nib[5], nib[4]], { w: 1.2 });
  s.line(...P(0, 0), ...P(95, 0), { w: 0.9 }); s.ellipse(...P(100, 0), 5, 5, { w: 0.9 });
  s.curve([P(120, -18), P(140, 0), P(120, 18)], { w: 0.6, o: 0.6 });
  s.hatch([P(30, 0), P(60, 16), P(130, 30), P(175, 32), P(175, 4), P(110, 4)], { angle: 40, gap: 3.5, o: 0.35 });
  // grip section and barrel
  const seg = (t0, t1, r0, r1, rings = 0) => {
    s.line(...P(t0, -r0), ...P(t1, -r1), { w: 1.1 }); s.line(...P(t0, r0), ...P(t1, r1), { w: 1.1 });
    s.line(...P(t0, -r0), ...P(t0, r0), { w: 0.9 });
    for (let i = 1; i <= rings; i++) { const t = t0 + ((t1 - t0) * i) / (rings + 1); s.line(...P(t, -r0), ...P(t, r0), { w: 0.6, o: 0.55, double: 0 }); }
    s.hatch([P(t0, r0 * 0.4), P(t1, r1 * 0.4), P(t1, r1), P(t0, r0)], { angle: 45, gap: 3.5, o: 0.4 });
  };
  seg(175, 260, 36, 40, 3);
  seg(260, 300, 44, 44);
  seg(300, 620, 44, 44);
  s.line(...P(620, -44), ...P(650, -30), { w: 1 }); s.line(...P(620, 44), ...P(650, 30), { w: 1 }); s.line(...P(650, -30), ...P(650, 30), { w: 1 });
  s.wash(560, 360, 230, 140, C.sky, 0.6, { rot: 0.2 });
  s.wash(880, 380, 220, 80, C.cobalt, 0.65, { rot: -0.72 });
  s.wash(660, 640, 110, 60, C.ultramarine, 0.5);
  s.splatter(720, 610, 120, 50, C.cobalt, { dir: 2.6, cone: 1.5, rmax: 4 });
  return s.svg();
}

export function pylon(seed = 71) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const g = 740;
  const tower = (cx, base, top, wb, wt, k = 1) => {
    const y = (t) => base + (top - base) * t, xL = (t) => cx - wb + (wb - wt) * t, xR = (t) => cx + wb - (wb - wt) * t;
    s.line(xL(0), base, xL(1), top, { w: 1.2 * k }); s.line(xR(0), base, xR(1), top, { w: 1.2 * k });
    const L = 9;
    for (let i = 0; i < L; i++) {
      const a = i / L, b = (i + 1) / L;
      s.line(xL(a), y(a), xR(b), y(b), { w: 0.6 * k, o: 0.6, over: 0.2, double: 0 }); s.line(xR(a), y(a), xL(b), y(b), { w: 0.6 * k, o: 0.6, over: 0.2, double: 0 });
      s.line(xL(b), y(b), xR(b), y(b), { w: 0.5 * k, o: 0.45, over: 0.2, double: 0 });
    }
    const ends = [];
    for (const [t, arm] of [[0.62, 1.6], [0.78, 2.1], [0.93, 1.5]]) {
      const ya = y(t), half = (xR(t) - xL(t)) / 2 + wb * 0.6 * arm;
      s.line(cx - half, ya, cx + half, ya, { w: 1 * k }); s.line(cx - half, ya, xL(t - 0.07), y(t - 0.07), { w: 0.7 * k, o: 0.7 }); s.line(cx + half, ya, xR(t - 0.07), y(t - 0.07), { w: 0.7 * k, o: 0.7 });
      for (const sx of [-1, 1]) {
        const ex = cx + sx * half * 0.94;
        s.line(ex, ya, ex, ya + 26 * k, { w: 0.8 * k });
        for (let d = 6; d < 26; d += 5) s.line(ex - 3 * k, ya + d * k, ex + 3 * k, ya + d * k, { w: 0.5, o: 0.6, over: 0, double: 0 });
        ends.push([ex, ya + 26 * k]);
      }
    }
    return ends;
  };
  const A = tower(470, g, 120, 95, 18);
  const B = tower(960, g - 90, 360, 38, 8, 0.6);
  // conductors: catenaries from A to B and off-frame to the left
  for (let i = 0; i < A.length; i++) {
    const a = A[i], b = B[i];
    s.curve([a, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + 40], b], { w: 0.7, o: 0.7 });
    s.curve([a, [a[0] - 250, a[1] + 50], [-20, a[1] + 10]], { w: 0.7, o: 0.6 });
  }
  // wind turbines in the distance
  for (const [x, hgt] of [[150, 260], [250, 200], [1100, 220]]) {
    s.line(x, g - 40, x + 1, g - 40 - hgt, { w: 0.8, o: 0.6 });
    const hub = [x + 1, g - 40 - hgt];
    for (let k = 0; k < 3; k++) { const a = k * 2.094 + x; s.line(...hub, hub[0] + Math.cos(a) * hgt * 0.42, hub[1] + Math.sin(a) * hgt * 0.42, { w: 0.7, o: 0.55 }); }
  }
  s.guide(0, g, 1200, g - 30, 0.25);
  s.wash(470, 300, 210, 150, C.cobalt, 0.6, { rot: -0.2 });
  s.wash(820, 470, 240, 90, C.sky, 0.65, { rot: -0.3 });
  s.wash(240, 560, 160, 100, C.cerulean, 0.55);
  s.wash(560, 640, 120, 70, C.ultramarine, 0.5);
  s.splatter(700, 260, 170, 60, C.cobalt, { dir: -0.3, cone: 1.8 });
  return s.svg();
}

export function fields(seed = 83) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const hy = 420, VP = [560, hy];
  s.line(0, hy + 4, 1200, hy - 4, { w: 0.9, o: 0.6 });
  for (let x = -900; x <= 2100; x += 48) {
    const p = lerp([x, 800], VP, 0.78);
    s.line(x, 800, p[0], p[1], { w: 0.6, o: 0.45, over: 0.2, double: 0.1 });
  }
  s.line(0, 560, 1200, 520, { w: 0.9, o: 0.6 }); s.line(0, 470, 1200, 450, { w: 0.7, o: 0.5 });
  // silos
  for (const [x, w, h] of [[820, 56, 230], [890, 56, 260], [960, 56, 220]]) {
    const b = hy + 20;
    s.line(x, b, x, b - h, { w: 1.1 }); s.line(x + w, b, x + w, b - h, { w: 1.1 });
    s.ellipse(x + w / 2, b - h, w / 2, 8, { w: 0.9 });
    s.line(x, b - h, x + w / 2, b - h - 40, { w: 1 }); s.line(x + w, b - h, x + w / 2, b - h - 40, { w: 1 });
    for (let y = b - 30; y > b - h; y -= 34) s.ellipse(x + w / 2, y, w / 2, 7, { from: 0, to: Math.PI, w: 0.6, o: 0.5 });
    s.hatch([[x + w * 0.62, b], [x + w, b], [x + w, b - h], [x + w * 0.62, b - h]], { angle: 85, gap: 3.5, o: 0.35 });
  }
  // barn
  const bx = 640, bb = hy + 26;
  s.rect(bx, bb - 90, 150, 90, { w: 1.1 }); s.poly([[bx - 8, bb - 90], [bx + 75, bb - 150], [bx + 158, bb - 90]], { w: 1.1 }, false);
  s.rect(bx + 50, bb - 60, 50, 60, { w: 0.9 }); s.line(bx + 50, bb - 60, bx + 100, bb, { w: 0.6, o: 0.6 }); s.line(bx + 100, bb - 60, bx + 50, bb, { w: 0.6, o: 0.6 });
  // tree line
  for (let x = 20; x < 620; x += s.rand(26, 44)) s.ellipse(x, hy - s.rand(10, 22), s.rand(14, 22), s.rand(10, 18), { w: 0.7, o: 0.5 });
  s.wash(320, 640, 320, 110, C.cerulean, 0.55, { rot: -0.05 });
  s.wash(880, 300, 160, 140, C.cobalt, 0.6);
  s.wash(560, 280, 280, 80, C.sky, 0.6, { rot: 0.05 });
  s.wash(760, 600, 160, 70, C.ultramarine, 0.45);
  s.splatter(1000, 200, 140, 50, C.cobalt, { dir: -0.8, cone: 1.6 });
  return s.svg();
}

export function circuit(seed = 97) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const cx = 600, cy = 400, hw = 110;
  s.rect(cx - hw, cy - hw, hw * 2, hw * 2, { w: 1.3 });
  s.rect(cx - hw + 22, cy - hw + 22, hw * 2 - 44, hw * 2 - 44, { w: 0.8, o: 0.6 });
  s.hatch([[cx - hw + 22, cy - hw + 22], [cx + hw - 22, cy - hw + 22], [cx + hw - 22, cy + hw - 22], [cx - hw + 22, cy + hw - 22]], { angle: 45, gap: 6, o: 0.2 });
  const pins = 7;
  for (let i = 0; i < pins; i++) {
    const t = -hw + 20 + ((hw * 2 - 40) * i) / (pins - 1);
    const runs = [
      [[cx + t, cy - hw], [0, -1]], [[cx + t, cy + hw], [0, 1]], [[cx - hw, cy + t], [-1, 0]], [[cx + hw, cy + t], [1, 0]],
    ];
    for (const [[x, y], [dx, dy]] of runs) {
      s.line(x, y, x + dx * 16, y + dy * 16, { w: 1, double: 0 });
      let px = x + dx * 16, py = y + dy * 16;
      const l1 = s.rand(30, 120), bend = s.pick([-1, 1]) * s.rand(20, 60), l2 = s.rand(40, 170);
      const qx = px + dx * l1, qy = py + dy * l1;
      const rx = qx + (dy ? bend : 0) + dx * Math.abs(bend), ry = qy + (dx ? bend : 0) + dy * Math.abs(bend);
      const ex = rx + dx * l2, ey = ry + dy * l2;
      s.line(px, py, qx, qy, { w: 0.8, o: 0.7, double: 0.1 }); s.line(qx, qy, rx, ry, { w: 0.8, o: 0.7, double: 0.1 }); s.line(rx, ry, ex, ey, { w: 0.8, o: 0.7, double: 0.1 });
      s.ellipse(ex, ey, 6, 6, { w: 0.9 });
    }
  }
  // padlock (data protection)
  const lx = 930, ly = 560;
  s.rect(lx - 50, ly, 100, 80, { w: 1.2 }); s.curve([[lx - 32, ly], [lx - 32, ly - 50], [lx, ly - 66], [lx + 32, ly - 50], [lx + 32, ly]], { w: 1.2 });
  s.ellipse(lx, ly + 34, 8, 8, { w: 1 }); s.line(lx, ly + 42, lx, ly + 60, { w: 1 });
  s.hatch([[lx + 10, ly], [lx + 50, ly], [lx + 50, ly + 80], [lx + 10, ly + 80]], { angle: 60, gap: 4, o: 0.35 });
  s.wash(600, 400, 200, 170, C.cobalt, 0.55);
  s.wash(360, 250, 160, 100, C.sky, 0.65, { rot: 0.4 });
  s.wash(900, 580, 110, 90, C.ultramarine, 0.55);
  s.wash(820, 230, 140, 70, C.cerulean, 0.55);
  s.splatter(260, 560, 150, 50, C.cobalt, { dir: 2.4, cone: 1.6 });
  return s.svg();
}

export function lublin(seed = 101) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const g = 760;
  const v = view(s, 0, 40, 1);
  krakowskaGate(view(s, 490, 40, 1));
  [[40, 110, 250, 0], [155, 100, 290, 2], [262, 120, 270, 1], [386, 100, 240, 0], [712, 110, 280, 1], [826, 96, 250, 2], [926, 120, 300, 0], [1050, 110, 260, 1]]
    .forEach(([x, w, h, kind]) => tenement(v, x, w, h, { kind, g: 720 }));
  s.guide(0, g + 1, 1200, g - 1, 0.25);
  s.wash(600, 230, 150, 160, C.cobalt, 0.6);
  s.wash(300, 520, 260, 110, C.sky, 0.6, { rot: 0.1 });
  s.wash(920, 470, 220, 120, C.cerulean, 0.55, { rot: -0.15 });
  s.wash(620, 640, 140, 70, C.ultramarine, 0.45);
  s.splatter(760, 120, 150, 55, C.cobalt, { dir: -0.5, cone: 1.8 });
  return s.svg({ fade: { cx: 0.5, cy: 0.5, rx: 0.64, ry: 0.64 } });
}

export function warsaw(seed = 113) {
  const s = new Sketch({ w: 1200, h: 800, seed });
  const hy = 700, VL = [-1400, hy], VR = [2600, hy], g = 760;
  pbox(s, { x: 190, yb: g, h: 520, tl: 0.05, tr: 0.06, VL, VR, floors: 34, colsL: 3, colsR: 5, shade: 'L', hatchO: 0.25 });
  pbox(s, { x: 1010, yb: g, h: 600, tl: 0.07, tr: 0.04, VL, VR, floors: 40, colsL: 6, colsR: 3, shade: 'R', hatchO: 0.25 });
  s.line(1010, g - 600, 1012, g - 690, { w: 1 });
  pkin(view(s, 300, 40, 1));
  s.guide(0, g + 1, 1200, g - 1, 0.25);
  s.wash(600, 260, 140, 190, C.cobalt, 0.6);
  s.wash(220, 360, 110, 200, C.sky, 0.6);
  s.wash(1010, 330, 120, 220, C.cerulean, 0.55);
  s.wash(600, 640, 260, 80, C.ultramarine, 0.45, { rot: 0.05 });
  s.splatter(820, 160, 150, 55, C.cobalt, { dir: -0.7, cone: 1.8 });
  return s.svg({ fade: { cx: 0.5, cy: 0.5, rx: 0.64, ry: 0.64 } });
}

/* Home hero: the portico in front of glass towers — tradition of the bar, practice for business. */
export function hero(seed = 7) {
  const s = new Sketch({ w: 1200, h: 1100, seed });
  const hy = 980, VL = [-1500, hy], VR = [2700, hy], g = 1010;
  pbox(s, { x: 760, yb: g, h: 820, tl: 0.1, tr: 0.07, VL, VR, floors: 44, colsL: 7, colsR: 5, shade: 'R', hatchO: 0.3 });
  pbox(s, { x: 470, yb: g, h: 600, tl: 0.06, tr: 0.05, VL, VR, floors: 32, colsL: 4, colsR: 4, shade: 'L', o: 0.6, hatchO: 0.2 });
  pbox(s, { x: 1030, yb: g, h: 520, tl: 0.04, tr: 0.06, VL, VR, floors: 28, colsL: 2, colsR: 5, shade: 'R', o: 0.6, hatchO: 0.2 });
  s.line(760, 190, 762, 90, { w: 1.1 });
  portico(view(s, 120, 600, 0.78));
  s.guide(0, g + 2, 1200, g - 2, 0.25);
  for (let i = 0; i < 6; i++) s.guide(760, 200 + i * 130, i % 2 ? VL[0] : VR[0], hy, 0.06);
  s.wash(780, 330, 260, 210, C.cobalt, 0.7, { rot: -0.5 });
  s.wash(980, 520, 170, 140, C.ultramarine, 0.6);
  s.wash(560, 560, 220, 150, C.sky, 0.7, { rot: 0.4 });
  s.wash(420, 800, 260, 90, C.cerulean, 0.6, { rot: -0.05 });
  s.wash(700, 160, 110, 80, C.cerulean, 0.65);
  s.wash(940, 760, 120, 120, C.ultramarine, 0.5);
  s.brush(240, 920, 1080, 880, 60, C.sky, 0.5);
  s.splatter(1000, 230, 200, 90, C.cobalt, { dir: -0.6, cone: 1.8, rmax: 6 });
  s.splatter(300, 650, 170, 50, C.cerulean, { dir: 2.7, cone: 1.4 });
  return s.svg({ fade: { cx: 0.55, cy: 0.5, rx: 0.62, ry: 0.6 } });
}
