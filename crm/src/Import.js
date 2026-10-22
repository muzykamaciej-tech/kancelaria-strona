/* Import.js — przeniesienie istniejących rejestrów do CRM.
   Źródła: zgłoszenia z formularza strony (foldery z opis-sprawy.txt), „Lista Spraw” (wspólny
   rejestr teczek), „Rejestr Umów”, notatki spraw z Obsidiana (pliki .md z frontmatterem).
   Schemat dwuetapowy: analiza (podgląd w przeglądarce, mapowanie) → zapis. Import pomija
   wiersze już zaimportowane (pole zrodlo_id), więc można go powtarzać. */

function normName_(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l')
    .replace(/[^a-z0-9@.]+/g, ' ').trim();
}

/* ---------- Kandydaci na źródła (wyszukiwanie po nazwie w Dysku osoby zalogowanej) ---------- */
function apiImportSources() {
  var c = ctx_();
  requireAdmin_(c);
  function files(q) {
    var out = [], it = DriveApp.searchFiles(q);
    while (it.hasNext() && out.length < 8) { var f = it.next(); out.push({ id: f.getId(), name: f.getName(), url: f.getUrl(), type: f.getMimeType() }); }
    return out;
  }
  function folders(name) {
    var out = [], it = DriveApp.getFoldersByName(name);
    while (it.hasNext() && out.length < 5) { var f = it.next(); out.push({ id: f.getId(), name: f.getName(), url: f.getUrl() }); }
    return out;
  }
  return {
    zgloszenia: folders('Zgłoszenia ze strony'),
    lista: files("title contains 'Lista Spraw' and trashed = false"),
    umowy: files("title contains 'Rejestr Umów' and trashed = false"),
    notatki: folders('Notatki spraw')
  };
}

/* ---------- Zgłoszenia z formularza strony ---------- */
var FORM_KEYS_ = ['Imię i nazwisko', 'email', 'Telefon', 'Preferowany kontakt', 'Sytuacja', 'Numer KW', 'Pilne', 'Opis sprawy', 'Strona', 'Typ zgłoszenia', 'Gmina', 'Numer działki', 'Załączniki'];

/* opis-sprawy.txt: „Klucz: wartość” rozdzielone pustą linią; opis może mieć własne akapity. */
function parseFormText_(txt) {
  var out = {}, cur = null;
  String(txt || '').replace(/\r/g, '').split('\n').forEach(function (line) {
    var hit = FORM_KEYS_.filter(function (k) { return line.indexOf(k + ': ') === 0 || line === k + ':'; })[0];
    if (hit) { cur = hit; out[cur] = line.slice(hit.length + 1).trim(); }
    else if (cur) out[cur] += '\n' + line;
  });
  Object.keys(out).forEach(function (k) { out[k] = out[k].trim(); });
  return out;
}

function websiteInquiry_(folder, fields) {
  var m = /^(\d{4}-\d{2}-\d{2}) (\d{2})\.(\d{2})/.exec(folder.getName());
  var when = m ? m[1] + 'T' + m[2] + ':' + m[3] : Utilities.formatDate(folder.getDateCreated(), APP.tz, "yyyy-MM-dd'T'HH:mm");
  var clean = function (v) { v = String(v || '').trim(); return v === '—' ? '' : v; };
  return {
    nazwa: clean(fields['Imię i nazwisko']) || clean(fields.email) || folder.getName(),
    data_wplywu: when, kanal: 'Formularz www',
    email: clean(fields.email), telefon: clean(fields.Telefon),
    kontakt: /TELEFON/i.test(fields['Preferowany kontakt'] || '') ? 'Telefon' : 'E-mail',
    pilne: /^TAK/i.test(fields.Pilne || '') ? 'tak' : '',
    kategoria: WEBSITE_SITUATION_MAP[clean(fields.Sytuacja)] || (clean(fields.Sytuacja) ? 'Inna sprawa' : ''),
    opis: clean(fields['Opis sprawy']) + (fields['Załączniki'] ? '\n\n' + fields['Załączniki'] : ''),
    kw: clean(fields['Numer KW']), strona_www: clean(fields.Strona),
    folder: folder.getUrl(), zrodlo_id: 'www:' + folder.getId()
  };
}

function importWebsiteCore_(c, code, folderId) {
  var f = requireFirm_(c, code, true);
  var rootId = folderId || f.import_folder;
  var root = rootId ? DriveApp.getFolderById(rootId) : null;
  if (!root) { var it0 = DriveApp.getFoldersByName('Zgłoszenia ze strony'); root = it0.hasNext() ? it0.next() : null; }
  if (!root) fail_('NOT_FOUND', 'Nie znaleziono folderu „Zgłoszenia ze strony”. Wskaż go w Ustawieniach kancelarii.');
  return withLock_(function () {
    var ss = SpreadsheetApp.openById(f.db_id);
    var sh = ensureSheet_(ss, TABLES.zapytania.sheet, tableKeys_('zapytania'));
    var have = {};
    readSheet_(sh).forEach(function (r) { if (r.zrodlo_id) have[r.zrodlo_id] = 1; });
    var recs = [], alerts = 0, skipped = 0, it = root.getFolders();
    while (it.hasNext()) {
      var folder = it.next();
      if (have['www:' + folder.getId()]) { skipped++; continue; }
      var files = folder.getFilesByName('opis-sprawy.txt');
      if (!files.hasNext()) continue;
      var fields = parseFormText_(files.next().getBlob().getDataAsString('UTF-8'));
      if (!fields['Opis sprawy']) { alerts++; continue; }
      var rec = buildNew_(c, f, 'zapytania', websiteInquiry_(folder, fields));
      autoFields_(c, f, 'zapytania', rec, null);
      recs.push(rec);
    }
    recs.sort(function (a, b) { return a.data_wplywu < b.data_wplywu ? -1 : 1; });
    appendRows_(sh, recs);
    if (recs.length) log_(ss, c.email, 'zapytania', '', 'import', { zrodlo: 'formularz www', nowych: recs.length });
    return { imported: recs.length, skipped: skipped, alerts: alerts, records: recs.map(function (r) { r.kancelaria = f.kod; return r; }) };
  });
}

function apiImportWebsite(code, folderId) {
  return importWebsiteCore_(ctx_(), code, idFromLink_(folderId));
}

/* Automatyczny import co 15 minut. Uruchom raz z edytora (▶) jako administrator:
   wyzwalacz działa z Twoimi uprawnieniami i dopisuje nowe zgłoszenia do kancelarii KN. */
function wlaczAutoImport() {
  requireAdmin_(ctx_());
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'autoImportZgloszen') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('autoImportZgloszen').timeBased().everyMinutes(15).create();
  return 'Włączono import zgłoszeń co 15 minut.';
}
function autoImportZgloszen() {
  var c = ctx_();
  requireAdmin_(c);
  c.s.kancelarie.forEach(function (f) {
    if (f.model === 'analiza' && f.db_id && c.firms.indexOf(f.kod) >= 0) importWebsiteCore_(c, f.kod, f.import_folder);
  });
}

/* ---------- Arkusze źródłowe (Lista Spraw, Rejestr Umów) ---------- */

/* XLSX → tymczasowa kopia jako Arkusz Google (usługa zaawansowana Drive), natywny arkusz bez zmian. */
function openSource_(fileId) {
  var file = DriveApp.getFileById(fileId);
  if (file.getMimeType() === MimeType.GOOGLE_SHEETS) return { ss: SpreadsheetApp.openById(fileId), tmp: null };
  if (typeof Drive === 'undefined') fail_('NO_DRIVE', 'Plik to XLSX. Otwórz go w Dysku i wybierz Plik → Zapisz jako Arkusz Google, potem wskaż kopię.');
  var copy = Drive.Files.copy({ name: '(tymczasowe) import CRM – ' + file.getName(), mimeType: MimeType.GOOGLE_SHEETS }, fileId, { supportsAllDrives: true });
  return { ss: SpreadsheetApp.openById(copy.id), tmp: copy.id };
}
function closeSource_(src) { if (src.tmp) { try { DriveApp.getFileById(src.tmp).setTrashed(true); } catch (e) { /* — */ } } }

function headerRow_(vals, must) {
  for (var r = 0; r < Math.min(vals.length, 15); r++) {
    var row = vals[r].map(function (v) { return normName_(v); });
    if (must.every(function (m) { return row.indexOf(m) >= 0; })) return r;
  }
  return -1;
}

/* Lista Spraw: K | Klient | Rodzaj sprawy | Sygnatura akt | (pusta) | Opiekun sprawy | adres mailowy | numer telefonu.
   Kolor komórki „Klient” (bez legendy w pliku) zwracamy, żeby administrator przypisał mu status. */
function apiImportListaAnalyze(fileId) {
  var c = ctx_();
  requireAdmin_(c);
  var src = openSource_(idFromLink_(fileId) || fileId);
  try {
    var sh = src.ss.getSheets()[0];
    var vals = sh.getDataRange().getValues();
    var h = headerRow_(vals, ['klient']);
    if (h < 0) fail_('FORMAT', 'Nie znalazłem nagłówka z kolumną „Klient”.');
    var head = vals[h].map(normName_);
    var col = function () { for (var i = 0; i < arguments.length; i++) { var j = head.indexOf(arguments[i]); if (j >= 0) return j; } return -1; };
    var cK = col('k', 'nr', 'numer'), cKl = col('klient'), cR = col('rodzaj sprawy', 'rodzaj'), cS = col('sygnatura akt', 'sygnatura');
    var cO = col('opiekun sprawy', 'opiekun'), cE = col('adres mailowy', 'e mail', 'email'), cT = col('numer telefonu', 'telefon');
    var bg = sh.getRange(1, cKl + 1, vals.length, 1).getBackgrounds();
    var rows = [];
    for (var r = h + 1; r < vals.length; r++) {
      var v = vals[r], klient = String(v[cKl] || '').trim();
      if (!klient) continue;
      rows.push({
        numer: cK >= 0 ? String(v[cK]).trim() : '', klient: klient,
        rodzaj: cR >= 0 ? String(v[cR]).trim() : '', sygn: cS >= 0 ? norm_(v[cS]).trim() : '',
        opiekun: cO >= 0 ? String(v[cO]).trim() : '', email: cE >= 0 ? String(v[cE]).trim() : '',
        telefon: cT >= 0 ? String(v[cT]).trim() : '', kolor: String(bg[r][0] || '#ffffff').toLowerCase()
      });
    }
    return { file: sh.getParent().getName(), rows: rows };
  } finally { closeSource_(src); }
}

/* Rejestr Umów: L. p. | Data zawarcia | Klient/Strona umowy | Adres zamieszkania | Przedmiot umowy | Zaliczka | Rozliczone. */
function apiImportUmowyAnalyze(fileId) {
  var c = ctx_();
  requireAdmin_(c);
  var src = openSource_(idFromLink_(fileId) || fileId);
  try {
    var sh = src.ss.getSheets()[0];
    var vals = sh.getDataRange().getValues();
    var h = headerRow_(vals, ['data zawarcia']);
    if (h < 0) fail_('FORMAT', 'Nie znalazłem nagłówka z kolumną „Data zawarcia”.');
    var head = vals[h].map(normName_);
    var find = function (re) { for (var i = 0; i < head.length; i++) if (re.test(head[i])) return i; return -1; };
    var cL = find(/^l ?p/), cD = find(/^data zawarcia/), cK = find(/^klient/), cA = find(/^adres/), cP = find(/^przedmiot/), cZ = find(/^zaliczka/), cR = find(/^rozliczon/);
    var rows = [];
    for (var r = h + 1; r < vals.length; r++) {
      var v = vals[r], klient = cK >= 0 ? String(v[cK] || '').trim() : '';
      if (!klient) continue;
      rows.push({
        nr: cL >= 0 ? norm_(v[cL]).trim() : '', data: cD >= 0 ? norm_(v[cD]).slice(0, 10) : '', klient: klient,
        adres: cA >= 0 ? String(v[cA]).trim() : '', przedmiot: cP >= 0 ? String(v[cP]).trim() : '',
        zaliczka: cZ >= 0 ? norm_(v[cZ]).trim() : '', rozliczone: cR >= 0 ? String(v[cR]).trim() : ''
      });
    }
    return { file: sh.getParent().getName(), rows: rows };
  } finally { closeSource_(src); }
}

/* ---------- Notatki spraw (Obsidian) ---------- */
function parseFrontmatter_(txt) {
  var m = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(String(txt || '').replace(/\r/g, ''));
  if (!m) return null;
  var meta = {}, last = null;
  m[1].split('\n').forEach(function (line) {
    var kv = /^([A-Za-z_ąćęłńóśźż]+):\s*(.*)$/.exec(line);
    if (kv) { last = kv[1]; meta[last] = kv[2].replace(/^["']|["']$/g, '').trim(); }
    else if (last && /^\s+-\s+/.test(line)) meta[last] = (meta[last] ? meta[last] + ', ' : '') + line.replace(/^\s+-\s+/, '').replace(/^["']|["']$/g, '');
  });
  return { meta: meta, body: m[2] };
}

function apiImportNotesAnalyze(folderId) {
  var c = ctx_();
  requireAdmin_(c);
  var folder = DriveApp.getFolderById(idFromLink_(folderId) || folderId);
  var rows = [], it = folder.getFiles();
  while (it.hasNext()) {
    var file = it.next();
    if (!/\.md$/i.test(file.getName()) || /^_/.test(file.getName())) continue;
    var p = parseFrontmatter_(file.getBlob().getDataAsString('UTF-8'));
    if (!p || !/sprawa/i.test(p.meta.tags || p.meta.tag || 'sprawa')) continue;
    var meta = p.meta;
    rows.push({
      plik: file.getName().replace(/\.md$/i, ''), url: file.getUrl(), id: file.getId(),
      numer: String(meta.numer || '').replace(/[()]/g, '').trim(), klient: meta.klient || '', przedmiot: meta.przedmiot || '',
      typ: meta.typ || '', etap: meta.etap || '', sygnatura: meta.sygnatura || '', termin: (meta.termin || '').slice(0, 10),
      termin_opis: meta.termin_opis || '', rozliczenie: meta.rozliczenie || '', opiekun: meta.opiekun || '',
      status: meta.status || '', ostatni_ruch: (meta.ostatni_ruch || '').slice(0, 10), tresc: p.body.trim().slice(0, 4000)
    });
  }
  return { folder: folder.getName(), rows: rows };
}

/* ---------- Zapis importu ----------
   items: [{ kancelaria, klient: {nazwa, email, telefon, adres}, table, rec, termin? }] — rekordy
   po mapowaniu w przeglądarce. Klient dopasowywany po nazwie (i e-mailu) w danej kancelarii. */
function apiImportCommit(kind, items) {
  var c = ctx_();
  requireAdmin_(c);
  var byFirm = {};
  (items || []).forEach(function (it) { (byFirm[it.kancelaria] = byFirm[it.kancelaria] || []).push(it); });
  var report = {};
  Object.keys(byFirm).forEach(function (code) {
    var f = requireFirm_(c, code, true);
    report[code] = withLock_(function () {
      var ss = SpreadsheetApp.openById(f.db_id);
      var shK = ensureSheet_(ss, TABLES.klienci.sheet, tableKeys_('klienci'));
      var existing = readTables_(ss, ['klienci', 'sprawy', 'zapytania', 'umowy', 'terminy', 'zadania']);
      var clients = {}, seen = {}, updated = 0;
      existing.klienci.forEach(function (k) { clients[normName_(k.nazwa)] = k; });
      /* zrodlo_id może mieć kilka identyfikatorów (scalone duplikaty z kalendarza), rozdzielonych spacją. */
      ['sprawy', 'zapytania', 'umowy', 'terminy', 'zadania'].forEach(function (t) {
        existing[t].forEach(function (r) { String(r.zrodlo_id || '').split(/\s+/).forEach(function (z) { if (z) seen[z] = { table: t, rec: r }; }); });
      });
      /* Rekord usunięty w CRM nie wraca przy ponownym imporcie: jego zrodlo_id jest w Historii („usunięcie”). */
      var hs = ss.getSheetByName(HISTORY_SHEET);
      if (hs) readSheet_(hs).forEach(function (h) {
        if (h.akcja !== 'usunięcie' || String(h.zmiany).indexOf('zrodlo_id') < 0) return;
        try { String(JSON.parse(h.zmiany).zrodlo_id || '').split(/\s+/).forEach(function (z) { if (z && !seen[z]) seen[z] = { table: h.tabela, rec: {} }; }); } catch (e) { /* stary wpis */ }
      });
      var newClients = [], recs = { sprawy: [], zapytania: [], umowy: [], terminy: [], zadania: [] }, skipped = 0;
      /* Numery wierszy po id: jeden odczyt kolumny na arkusz, także przy setkach zmian. */
      var rowMaps = {};
      var rowOf = function (t, id) {
        if (!rowMaps[t]) {
          var sh = ensureSheet_(ss, TABLES[t].sheet, tableKeys_(t)), col = headOf_(sh).indexOf('id') + 1, lr = sh.getLastRow(), m = {};
          if (col && lr > 1) sh.getRange(2, col, lr - 1, 1).getValues().forEach(function (v, i) { m[norm_(v[0])] = i + 2; });
          rowMaps[t] = { sh: sh, m: m };
        }
        return { sh: rowMaps[t].sh, row: rowMaps[t].m[id] || -1 };
      };
      var change = function (t, id, ch) {
        var r = rowOf(t, id);
        if (r.row < 0) return false;
        var before = readRow_(r.sh, r.row), after = {};
        Object.keys(before).forEach(function (k) { after[k] = before[k]; });
        Object.keys(ch).forEach(function (k) { after[k] = ch[k]; });
        after.zmieniono = nowIso_(); after.zmienil = c.email;
        writeRow_(r.sh, r.row, after);
        log_(ss, c.email, t, id, 'zmiana', diff_(before, after));
        return true;
      };
      /* Ponowny import kalendarza. Kalendarz zmienia tylko terminy, które w CRM są wciąż otwarte:
         „(zrobione)” zamyka, „(ODWOŁANA)” unieważnia (z zadaniami przygotowania), przesunięcie zmienia datę,
         o ile w CRM nikt jej nie poprawił. Każda zmiana trafia do Historii. */
      var days = +APP.prepDays || 3, todayYmd = today_();
      var syncTerm = function (old, rec) {
        if (old.status !== 'Otwarty' && old.status !== 'Do weryfikacji') return false;
        var ch = {};
        /* Status z tytułu przenosimy tylko wtedy, gdy tytuł w kalendarzu się zmienił — status poprawiony
           w podglądzie importu (np. „(wykonanie kontaktów)” to nie znacznik) zostaje. */
        if ((rec.status === 'Wykonany' || rec.status === 'Nieaktualny') && !(rec.podstawa && rec.podstawa === old.podstawa)) {
          ch.status = rec.status;
          if (rec.podstawa) ch.podstawa = rec.podstawa;
        }
        if (rec.data && rec.data !== old.data && (old.zrodlo_data || old.data) === old.data) {
          ch.data = rec.data; ch.zrodlo_data = rec.data;
          if (!ch.status && old.status === 'Do weryfikacji' && rec.data >= todayYmd) ch.status = 'Otwarty';
        }
        if (!Object.keys(ch).length) {
          /* Kalendarz i CRM znów mają tę samą datę: kolejne przesunięcia w kalendarzu będą przenoszone. */
          if (rec.data && rec.data === old.data && old.zrodlo_data && old.zrodlo_data !== rec.data) change('terminy', old.id, { zrodlo_data: rec.data });
          return false;
        }
        if (!change('terminy', old.id, ch)) return false;
        var oldPrep = sh_().addWorkingDays(old.data, -days);
        existing.zadania.forEach(function (z) {
          /* Tylko zadania „Przygotować: …” (z importu i z „Zleć przygotowanie”), nie zadania dopisane ręcznie. */
          if (z.termin_id !== old.id || TASK_OPEN.indexOf(z.status) < 0 || String(z.tytul).indexOf('Przygotować:') !== 0) return;
          if (ch.status === 'Nieaktualny') {
            change('zadania', z.id, { status: 'Anulowane' });
            saveCore_(c, f, ss, 'komentarze', { zadanie_id: z.id, tresc: 'Anulowane: termin odwołany w kalendarzu (import).' });
            return;
          }
          if (!ch.data) return;
          /* Data nieruszona ręcznie: wyliczona z terminu albo przycięta do dnia utworzenia (termin był blisko). */
          var made = String(z.utworzono || '').slice(0, 10);
          if (z.termin === oldPrep || (oldPrep < made && z.termin === made)) {
            var due = sh_().addWorkingDays(ch.data, -days);
            change('zadania', z.id, { termin: due < todayYmd ? todayYmd : due });
          }
        });
        return true;
      };
      /* Zadania z importu: te same reguły co w aplikacji; adresat spoza kancelarii → importujący. */
      var task = function (data) {
        var z = buildNew_(c, f, 'zadania', data);
        try { autoFields_(c, f, 'zadania', z, null); } catch (e) { z.przypisane = c.email; autoFields_(c, f, 'zadania', z, null); }
        delete z._assigned;
        return z;
      };
      byFirm[code].forEach(function (it) {
        if (!TABLES[it.table] || !recs[it.table]) return;
        /* it.alt: identyfikatory scalonych duplikatów (np. osobny wpis „(zrobione) TERMIN …” obok pierwotnego). */
        var prev = it.rec.zrodlo_id && seen[it.rec.zrodlo_id];
        if (!prev && it.alt) (it.alt || []).some(function (z) { prev = z && seen[z]; return !!prev; });
        if (prev) {
          if (it.table === 'terminy' && prev.table === 'terminy' && prev.rec.id && syncTerm(prev.rec, it.rec)) updated++;
          else skipped++;
          return;
        }
        if (it.rec.zrodlo_id) seen[it.rec.zrodlo_id] = { table: it.table, rec: it.rec };
        (it.alt || []).forEach(function (z) { if (z) seen[z] = { table: it.table, rec: it.rec }; });
        if (it.table === 'zadania') { recs.zadania.push(task(it.rec)); return; }
        var rec = buildNew_(c, f, it.table, it.rec);
        if (rec.zrodlo_id && it.alt && it.alt.length) rec.zrodlo_id = [rec.zrodlo_id].concat(it.alt).join(' ');
        if (it.klient && it.klient.nazwa) {
          var key = normName_(it.klient.nazwa), k = clients[key];
          if (!k) {
            k = buildNew_(c, f, 'klienci', { nazwa: it.klient.nazwa, email: it.klient.email || '', telefon: it.klient.telefon || '', adres: it.klient.adres || '', zrodlo: it.klient.zrodlo || '', opiekun: it.rec.prowadzacy || it.rec.opiekun || '' });
            clients[key] = k; newClients.push(k);
          } else {
            ['email', 'telefon', 'adres'].forEach(function (x) { if (!k[x] && it.klient[x]) { k[x] = it.klient[x]; k._dirty = true; } });
          }
          rec.klient_id = k.id;
        }
        if (it.table === 'sprawy') {
          if (/^\d+$/.test(rec.numer)) bumpSeq_('SEQ_TECZKA', +rec.numer);
          if (/^P\d+$/i.test(rec.numer)) bumpSeq_('SEQ_P', +rec.numer.slice(1));
        }
        if (it.table === 'umowy') {
          var m = /^(\d+)\/(\d{4})$/.exec(rec.nr || '');
          if (m) bumpSeq_('SEQ_UMOWA_' + m[2], +m[1]);
        }
        recs[it.table].push(rec);
        if (it.termin && it.termin.data && it.table === 'sprawy') {
          recs.terminy.push(buildNew_(c, f, 'terminy', { opis: it.termin.opis || 'Termin', data: it.termin.data, typ: 'Termin wewnętrzny', sprawa_id: rec.id, odpowiedzialny: rec.prowadzacy || c.email }));
        }
        if (it.zadanie && it.table === 'terminy') {
          recs.zadania.push(task(Object.assign({}, it.zadanie, { sprawa_id: rec.sprawa_id, termin_id: rec.id })));
        }
      });
      appendRows_(shK, newClients);
      existing.klienci.filter(function (k) { return k._dirty; }).forEach(function (k) {
        var row = findRow_(shK, 'id', k.id);
        if (row > 0) { delete k._dirty; writeRow_(shK, row, k); }
      });
      var counts = { klienci: newClients.length, pominiete: skipped };
      if (updated) counts.zaktualizowane = updated;
      Object.keys(recs).forEach(function (t) {
        if (!recs[t].length) return;
        appendRows_(ensureSheet_(ss, TABLES[t].sheet, tableKeys_(t)), recs[t]);
        counts[t] = recs[t].length;
      });
      log_(ss, c.email, kind, '', 'import', counts);
      return counts;
    });
  });
  return report;
}

/* ---------- Kalendarz Google: wpisy „TERMIN - …” ----------
   Zwraca wydarzenia całodniowe i trwające co najmniej 23 h (zespół wpisywał je jako 07:00–07:00).
   Parsowanie tytułu, dopasowanie do spraw i podgląd są w przeglądarce (Wspolne.js: parseTermin). */
function apiCalendarEvents(calId, fromYmd, toYmd) {
  var c = ctx_();
  requireAdmin_(c);
  calId = String(calId || APP.calendarId).trim();
  var ymd = /^\d{4}-\d{2}-\d{2}$/, now = new Date();
  fromYmd = ymd.test(fromYmd || '') ? fromYmd : '2025-01-01';
  toYmd = ymd.test(toYmd || '') ? toYmd : (now.getFullYear() + 3) + Utilities.formatDate(now, APP.tz, '-MM-dd');
  var noCal = function () {
    fail_('NO_CAL', 'Konto ' + c.login + ' nie widzi kalendarza ' + calId + '. Udostępnij go temu kontu („Udostępnij ze wszystkimi szczegółami wydarzeń”) albo wczytaj plik .ics z eksportu kalendarza.');
  };
  var fmt = function (d, all) { return Utilities.formatDate(d, APP.tz, all ? 'yyyy-MM-dd' : "yyyy-MM-dd'T'HH:mm"); };
  var evs = [], name = calId;
  if (typeof Calendar !== 'undefined' && Calendar.Events) {
    /* Usługa zaawansowana widzi kalendarz udostępniony kontu, także niedodany do „Innych kalendarzy”.
       Klucz importu to iCalUID (ten sam co UID w pliku .ics) — nie zmienia się po przesunięciu wpisu. */
    try { name = Calendar.Calendars.get(calId).summary || calId; } catch (e) { noCal(); }
    var token;
    do {
      var res = Calendar.Events.list(calId, {
        timeMin: fromYmd + 'T00:00:00Z', timeMax: toYmd + 'T23:59:59Z', singleEvents: true, maxResults: 2500, pageToken: token,
        fields: 'nextPageToken,items(id,iCalUID,summary,description,start,end,recurringEventId,status)'
      });
      (res.items || []).forEach(function (ev) {
        if (ev.status === 'cancelled' || !ev.start) return;
        var all = !!ev.start.date, end = ev.end || ev.start;
        var hours = all ? Math.max(24, Math.round((Date.parse(end.date || ev.start.date) - Date.parse(ev.start.date)) / 3600000))
          : Math.round((Date.parse(end.dateTime) - Date.parse(ev.start.dateTime)) / 360000) / 10;
        if (!all && !(hours >= 23)) return;
        var st = all ? null : new Date(ev.start.dateTime);
        evs.push({ uid: ev.iCalUID || ev.id, title: ev.summary || '', desc: String(ev.description || '').slice(0, 500), allDay: all, recurring: !!ev.recurringEventId,
          start: all ? ev.start.date : fmt(st, false), date: all ? ev.start.date : fmt(st, true), hours: hours });
      });
      token = res.nextPageToken;
    } while (token && evs.length < 5000);
  } else {
    if (typeof CalendarApp === 'undefined') fail_('NO_CAL', 'Usługa Kalendarza nie jest dostępna.');
    var cal = CalendarApp.getCalendarById(calId);
    if (!cal) noCal();
    name = cal.getName();
    cal.getEvents(new Date(fromYmd + 'T00:00:00'), new Date(toYmd + 'T23:59:59')).forEach(function (ev) {
      var all = ev.isAllDayEvent();
      var st = all ? ev.getAllDayStartDate() : ev.getStartTime();
      var en = all && ev.getAllDayEndDate ? ev.getAllDayEndDate() : ev.getEndTime();
      var hours = Math.round((en.getTime() - st.getTime()) / 360000) / 10;
      if (!all && hours < 23) return;
      evs.push({ uid: ev.getId(), title: ev.getTitle(), desc: String(ev.getDescription() || '').slice(0, 500), allDay: all,
        recurring: !!(ev.isRecurringEvent && ev.isRecurringEvent()), start: fmt(st, all), date: fmt(st, true), hours: all ? Math.max(24, hours) : hours });
    });
  }
  return { calendar: name, events: evs.slice(0, 5000) };
}
