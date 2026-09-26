/* serve.mjs — tiny static server for local preview and prerendering.
   Resolves /x → x.html → x/index.html like Vercel cleanUrls; unknown paths → fallback file (404). */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.woff2': 'font/woff2' };

export function createServer(root, { fallback = '404.html', fallbackStatus = 404, api = {} } = {}) {
  root = path.resolve(root);
  return http.createServer((req, res) => {
    let p;
    try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); }
    catch (e) { res.writeHead(400); return res.end('bad request'); } /* malformed %-encoding must not kill the server */
    if (api[p]) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify(api[p])); }
    const candidates = p.endsWith('/') ? [p + 'index.html'] : [p, p + '.html', p + '/index.html'];
    for (const c of candidates) {
      const f = path.join(root, c);
      if ((f === root || f.startsWith(root + path.sep)) && fs.existsSync(f) && fs.statSync(f).isFile()) {
        res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' });
        return fs.createReadStream(f).pipe(res);
      }
    }
    const fb = path.join(root, fallback);
    if (fs.existsSync(fb)) { res.writeHead(fallbackStatus, { 'content-type': TYPES['.html'] }); return fs.createReadStream(fb).pipe(res); }
    res.writeHead(404); res.end('not found');
  });
}

/* CLI: node scripts/serve.mjs dist 4173 — loopback only (not visible on the LAN) */
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const root = path.resolve(process.argv[2] || 'dist');
  const port = Number(process.argv[3] || 4173);
  createServer(root).listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}  (${root})`));
}
