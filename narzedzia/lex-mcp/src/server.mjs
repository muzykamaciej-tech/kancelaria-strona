#!/usr/bin/env node
/* server.mjs — serwer MCP (stdio) „lex”: lex_search, lex_open, lex_status.
   Uruchamiany przez Claude Desktop / Claude Code (rejestracja: npm run setup albo node bin/lex.mjs install).
   Na stdout idzie wyłącznie protokół MCP; komunikaty diagnostyczne na stderr. */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { Lex } from './lex.mjs';
import { CATEGORIES, SORTS, DOC_ROUTES } from './categories.mjs';
import { formatSearch, formatDocument, formatStatus } from './format.mjs';

const lex = new Lex();
const server = new McpServer({ name: 'lex', version: '1.0.0' });

const POLICY = 'Dostęp idzie z licencji LEX użytkownika: używaj tylko na jego wyraźne polecenie w danej rozmowie.';
const reply = (text) => ({ content: [{ type: 'text', text }] });
const fail = (e) => ({ isError: true, content: [{ type: 'text', text: `LEX: ${e?.message || e}` }] });
const keys = (o) => Object.keys(o);

server.registerTool('lex_search', {
  title: 'Wyszukaj w LEX',
  description: `Wyszukuje w LEX (sip.lex.pl, Wolters Kluwer): orzeczenia, komentarze, monografie, artykuły, glosy, akty prawne, wzory. `
    + `Loguje się sam w tle (ukryty Chrome). Zwraca listę: tytuł, typ, sygnatura i data (gdy rozpoznane), nro, link i fragment opisu z listy wyników. `
    + `Zapytanie jak w wyszukiwarce LEX: słowa kluczowe, fraza, sygnatura („III CZP 27/17”), przepis („art. 305[2] k.c.”). `
    + `Zamiast zapytania można podać url listy wyników skopiowany z LEX (z filtrami sądu, dat itp. ustawionymi w LEX). `
    + `Kilka zapytań można wysłać równolegle. Pełny tekst: lex_open z url albo nro. ${POLICY}`,
  inputSchema: {
    q: z.string().optional().describe('Zapytanie, np. „służebność przesyłu zasiedzenie dobra wiara”'),
    url: z.string().optional()
      .describe('Zamiast q: link do listy wyników skopiowany z LEX (np. z filtrami sądu i dat ustawionymi ręcznie)'),
    kategoria: z.enum(keys(CATEGORIES)).default('wszystko')
      .describe('Zawężenie: orzeczenia_sadow, komentarze, monografie, glosy, artykuly, akty_prawne… (domyślnie wszystko)'),
    sort: z.enum(keys(SORTS)).default('trafnosc').describe('trafnosc, najnowsze, najstarsze, waga_orzeczenia'),
    limit: z.number().int().min(1).max(100).default(20).describe('Ile wyników zwrócić (domyślnie 20)'),
  },
  annotations: { readOnlyHint: true, openWorldHint: true },
}, async (args) => {
  try {
    if (!args.q && !args.url) throw new Error('Podaj q (zapytanie) albo url listy wyników z LEX.');
    return reply(formatSearch(await lex.search(args)));
  } catch (e) {
    return fail(e);
  }
});

server.registerTool('lex_open', {
  title: 'Otwórz dokument LEX',
  description: `Otwiera dokument z LEX (orzeczenie, komentarz, akt, publikację) i zwraca jego tekst. `
    + `Podaj url z lex_search (albo link skopiowany z LEX) lub nro (+ opcjonalnie typ). `
    + `Długie dokumenty: stronicowanie przez od/ile albo „szukaj” – wtedy zwraca tylko fragmenty wokół podanych fraz (np. ["art. 172", "dobra wiara"]), co oszczędza kontekst. `
    + `zapisz=true zapisuje pełny tekst do pliku .md (folder LEX_SAVE_DIR, domyślnie ~/Documents/LEX). ${POLICY}`,
  inputSchema: {
    url: z.string().optional().describe('Link do dokumentu w LEX (https://sip.lex.pl/#/jurisprudence/…)'),
    nro: z.string().optional().describe('Numer dokumentu w LEX (nro), gdy brak url'),
    typ: z.enum(keys(DOC_ROUTES)).optional().describe('Typ dokumentu przy otwieraniu po nro (orzeczenie, komentarz, akt…)'),
    od: z.number().int().min(0).default(0).describe('Od którego znaku zwrócić tekst'),
    ile: z.number().int().min(1000).max(100000).default(20000).describe('Ile znaków zwrócić (domyślnie 20 000)'),
    szukaj: z.array(z.string()).optional().describe('Frazy do odszukania w dokumencie: zwraca tylko fragmenty wokół trafień'),
    zapisz: z.boolean().default(false).describe('Zapisz pełny tekst do pliku .md'),
  },
  annotations: { readOnlyHint: false, openWorldHint: true },
}, async (args) => {
  try {
    if (!args.url && !args.nro) throw new Error('Podaj url albo nro dokumentu.');
    return reply(formatDocument(await lex.open(args)));
  } catch (e) {
    return fail(e);
  }
});

server.registerTool('lex_status', {
  title: 'Stan połączenia z LEX',
  description: 'Sprawdza konfigurację (Chrome, dane logowania, folder zapisu) i czy logowanie do LEX działa. Użyj, gdy lex_search zwraca błąd.',
  inputSchema: {
    sprawdz_logowanie: z.boolean().default(true).describe('Czy zalogować się na próbę (kilka sekund)'),
  },
  annotations: { readOnlyHint: true, openWorldHint: true },
}, async ({ sprawdz_logowanie }) => {
  try {
    return reply(formatStatus(await lex.status({ sprawdzLogowanie: sprawdz_logowanie })));
  } catch (e) {
    return fail(e);
  }
});

const shutdown = async () => {
  await lex.close().catch(() => {});
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
process.stdin.on('close', shutdown);

await server.connect(new StdioServerTransport());
console.error('lex-mcp: gotowy (stdio)');
