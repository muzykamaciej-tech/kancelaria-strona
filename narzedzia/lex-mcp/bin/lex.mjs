#!/usr/bin/env node
/* lex.mjs — wiersz poleceń: konfiguracja, test i ręczne wyszukiwanie.
   node bin/lex.mjs setup                         e-mail i hasło do pęku kluczy, próbne logowanie, rejestracja w Claude
   node bin/lex.mjs status                        stan konfiguracji i próbne logowanie
   node bin/lex.mjs search "zapytanie" [--kategoria orzeczenia_sadow] [--sort najnowsze] [--limit 20]
   node bin/lex.mjs search --url "<link do listy wyników z LEX>"
   node bin/lex.mjs open <url|nro> [--typ orzeczenie] [--od 0] [--ile 20000] [--szukaj "fraza1;fraza2"] [--zapisz]
   node bin/lex.mjs install                       dopisz serwer „lex” do Claude Desktop i Claude Code
   --show   widoczne okno Chrome (podgląd, co robi narzędzie)
   --trace  zapis odpowiedzi API LEX do ~/.lex-mcp/trace.jsonl (diagnostyka) */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const argv = process.argv.slice(2);
const flags = {};
const rest = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith('--')) { rest.push(a); continue; }
  const [k, v] = a.slice(2).split('=');
  if (v !== undefined) flags[k] = v;
  else if (argv[i + 1] && !argv[i + 1].startsWith('--') && !['show', 'trace', 'zapisz'].includes(k)) flags[k] = argv[++i];
  else flags[k] = true;
}
// zmienne środowiskowe przed załadowaniem konfiguracji
if (flags.show) process.env.LEX_HEADLESS = '0';
if (flags.trace) process.env.LEX_TRACE = '1';

const { Lex } = await import('../src/lex.mjs');
const { formatSearch, formatDocument, formatStatus } = await import('../src/format.mjs');
const { saveToKeychain, KEYCHAIN_SERVICE } = await import('../src/credentials.mjs');

const SERVER = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/server.mjs');
const run = promisify(execFile);
const [cmd, ...args] = rest;
const lex = new Lex();

async function install() {
  const entry = { command: process.execPath, args: [SERVER] };
  // Claude Desktop (macOS)
  const desktopDir = path.join(os.homedir(), 'Library', 'Application Support', 'Claude');
  if (fs.existsSync(desktopDir)) {
    const file = path.join(desktopDir, 'claude_desktop_config.json');
    let cfg = {};
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, `${file}.bak-${new Date().toISOString().slice(0, 10)}`);
      cfg = JSON.parse(fs.readFileSync(file, 'utf8') || '{}');
    }
    cfg.mcpServers = { ...(cfg.mcpServers || {}), lex: entry };
    fs.writeFileSync(file, JSON.stringify(cfg, null, 2) + '\n');
    console.log(`Claude Desktop: dopisano serwer „lex” w ${file} (kopia: .bak). Uruchom Claude ponownie.`);
  } else {
    console.log('Claude Desktop: nie znaleziono katalogu konfiguracji – pomijam.');
  }
  // Claude Code (zakres użytkownika: dostępny we wszystkich projektach)
  try {
    await run('claude', ['mcp', 'remove', 'lex', '--scope', 'user']).catch(() => {});
    await run('claude', ['mcp', 'add', '--scope', 'user', 'lex', '--', process.execPath, SERVER]);
    console.log('Claude Code: dodano serwer „lex” (zakres użytkownika).');
  } catch {
    console.log(`Claude Code: polecenie „claude” niedostępne. Ręcznie:\n  claude mcp add --scope user lex -- "${process.execPath}" "${SERVER}"`);
  }
}

async function setup() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const login = (await rl.question('E-mail do LEX (konto Wolters Kluwer): ')).trim();
  rl.close();
  if (!login) throw new Error('Nie podano e-maila.');
  console.log(`Hasło zapisze polecenie macOS „security” w pęku kluczy (usługa „${KEYCHAIN_SERVICE}”). Wpisz je dwa razy:`);
  await saveToKeychain(login);
  console.log('Próbne logowanie w tle…');
  console.log(formatStatus(await lex.status()));
  await install();
  console.log('\nGotowe. W Claude: „sprawdź w LEX …” (narzędzia lex_search, lex_open).');
}

try {
  switch (cmd) {
    case 'setup': await setup(); break;
    case 'install': await install(); break;
    case 'status': console.log(formatStatus(await lex.status())); break;
    case 'search': {
      const q = args.join(' ');
      console.log(formatSearch(await lex.search({ q, url: flags.url, kategoria: flags.kategoria, sort: flags.sort, limit: Number(flags.limit) || 20 })));
      break;
    }
    case 'open': {
      const target = args[0] || '';
      const isUrl = /^https?:|^#?\//.test(target);
      console.log(formatDocument(await lex.open({
        url: isUrl ? target : undefined, nro: isUrl ? undefined : target, typ: flags.typ,
        od: Number(flags.od) || 0, ile: Number(flags.ile) || 20000,
        szukaj: flags.szukaj ? String(flags.szukaj).split(';') : [], zapisz: !!flags.zapisz,
      })));
      break;
    }
    default:
      console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('*/')[0].replace(/^#!.*\n\/\* ?/, ''));
  }
} catch (e) {
  console.error(`Błąd: ${e.message}`);
  process.exitCode = 1;
} finally {
  await lex.close();
}
