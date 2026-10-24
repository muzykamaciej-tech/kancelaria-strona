/* config.mjs — ścieżki i ustawienia (zmienne środowiskowe nadpisują domyślne). */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const HOME = process.env.LEX_HOME || path.join(os.homedir(), '.lex-mcp');

function findChrome() {
  const candidates = [
    process.env.LEX_CHROME,
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    path.join(os.homedir(), 'Applications/Google Chrome.app/Contents/MacOS/Google Chrome'),
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p)) || candidates[0];
}

export const config = {
  home: HOME,
  profileDir: path.join(HOME, 'chrome-profile'),
  cookieFile: path.join(HOME, 'cookies.json'),
  traceFile: path.join(HOME, 'trace.jsonl'),
  saveDir: process.env.LEX_SAVE_DIR || path.join(os.homedir(), 'Documents', 'LEX'),
  chrome: findChrome(),
  headless: process.env.LEX_HEADLESS !== '0',
  trace: process.env.LEX_TRACE === '1',
  // zamknij ukryty Chrome po tylu minutach bezczynności (ciasteczka sesji zostają w cookies.json)
  idleMinutes: Number(process.env.LEX_IDLE_MIN || 20),
  // ile kart naraz (równoległe wyszukiwania / otwieranie dokumentów)
  maxPages: Number(process.env.LEX_MAX_PAGES || 3),
  timeoutMs: Number(process.env.LEX_TIMEOUT_MS || 45000),
  extraArgs: (process.env.LEX_CHROME_ARGS || '').split(' ').filter(Boolean),
};

export function ensureHome() {
  fs.mkdirSync(config.home, { recursive: true, mode: 0o700 });
  try { fs.chmodSync(config.home, 0o700); } catch {}
}
