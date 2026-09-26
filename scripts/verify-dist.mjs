/* verify-dist.mjs — Vercel "build" step. Nothing is built on Vercel: dist/ is built locally (npm run build:
   Babel + prerender in Chrome) and committed. This only refuses to deploy a dist/ that is older than its sources,
   e.g. when a post was added to blog-data-*.jsx without rebuilding — the deploy fails and production keeps
   the previous version instead of silently serving pages without the new content. Node built-ins only. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sourceHash } from './source-hash.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(ROOT, 'dist', '.source-hash');
const built = fs.existsSync(file) ? fs.readFileSync(file, 'utf8').trim() : '(brak)';
const now = sourceHash(ROOT);
if (built !== now) {
  console.error(`dist/ jest nieaktualny względem źródeł (dist: ${built}, źródła: ${now}).`);
  console.error('Uruchom lokalnie: npm run build && node scripts/check.mjs, potem commit razem z dist/.');
  process.exit(1);
}
console.log(`dist/ aktualny (${now}).`);
