/* source-hash.mjs — one fingerprint of everything dist/ is built from (index.html, *.jsx, *.css, assets/,
   the build scripts, package-lock.json). build.mjs writes it to dist/.source-hash; check.mjs compares,
   so a committed dist/ that is older than its sources is caught before it reaches Vercel. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export function sourceHash(root) {
  const files = fs.readdirSync(root).filter((f) => /\.(jsx|css|html)$/.test(f) || f === 'package-lock.json');
  const walk = (d) => fs.readdirSync(path.join(root, d), { withFileTypes: true })
    .forEach((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : files.push(path.join(d, e.name))));
  walk('assets');
  files.push('scripts/build.mjs', 'scripts/prerender.mjs');
  const h = crypto.createHash('sha256');
  for (const f of files.filter((f) => !/(^|\/)\.DS_Store$/.test(f)).sort()) {
    h.update(f.split(path.sep).join('/') + '\0');
    h.update(fs.readFileSync(path.join(root, f)));
    h.update('\0');
  }
  return h.digest('hex').slice(0, 16);
}
