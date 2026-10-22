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
  var copy = Drive.Files.copy({ name: '(tymczasowe) import CRM – ' + file.getName(), mimeType: MimeType.GOOGLE_SHEETS }, fileId);
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
      ['sprawy', 'zapytania', 'umowy', 'terminy', 'zadania'].forEach(function (t) { existing[t].forEach(function (r) { if (r.zrodlo_id) seen[r.zrodlo_id] = { table: t, rec: r }; }); });
      var newClients = [], recs = { sprawy: [], zapytania: [], umowy: [], terminy: [], zadania: [] }, skipped = 0;
      /* Zadania z importu: te same reguły co w aplikacji; adresat spoza kancelarii → importujący. */
      var task = function (data) {
        var z = buildNew_(c, f, 'zadania', data);
        try { autoFields_(c, f, 'zadania', z, null); } catch (e) { z.przypisane = c.email; autoFields_(c, f, 'zadania', z, null); }
        delete z._assigned;
        return z;
      };
      byFirm[code].forEach(function (it) {
        if (!TABLES[it.table] || !recs[it.table]) return;
        var prev = it.rec.zrodlo_id && seen[it.rec.zrodlo_id];
        if (prev) {
          /* Ponowny import kalendarza: dopisane „(zrobione)” zamyka termin (zmiana trafia do Historii). */
          if (it.table === 'terminy' && it.rec.status === 'Wykonany' && prev.rec.status !== 'Wykonany') {
            var sht = ensureSheet_(ss, TABLES.terminy.sheet, tableKeys_('terminy')), rowt = findRow_(sht, 'id', prev.rec.id);
            if (rowt > 0) {
              var before = readRow_(sht, rowt), after = {};
              Object.keys(before).forEach(function (k) { after[k] = before[k]; });
              after.status = 'Wykonany'; after.zmieniono = nowIso_(); after.zmienil = c.email;
              writeRow_(sht, rowt, after);
              log_(ss, c.email, 'terminy', after.id, 'zmiana', diff_(before, after));
              updated++;
              return;
            }
          }
          skipped++;
          return;
        }
        if (it.rec.zrodlo_id) seen[it.rec.zrodlo_id] = { table: it.table, rec: it.rec };
        if (it.table === 'zadania') { recs.zadania.push(task(it.rec)); return; }
        var rec = buildNew_(c, f, it.table, it.rec);
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
  if (typeof CalendarApp === 'undefined') fail_('NO_CAL', 'Usługa Kalendarza nie jest dostępna.');
  var cal = CalendarApp.getCalendarById(calId);
  if (!cal) fail_('NO_CAL', 'Konto ' + c.login + ' nie widzi kalendarza ' + calId + '. Udostępnij go temu kontu („Udostępnij ze wszystkimi szczegółami wydarzeń”) albo wczytaj plik .ics z eksportu kalendarza.');
  var from = new Date((fromYmd || '2025-01-01') + 'T00:00:00'), to = new Date((toYmd || '2028-12-31') + 'T23:59:59');
  var evs = cal.getEvents(from, to).map(function (ev) {
    var all = ev.isAllDayEvent();
    var st = all ? ev.getAllDayStartDate() : ev.getStartTime();
    var en = all && ev.getAllDayEndDate ? ev.getAllDayEndDate() : ev.getEndTime();
    var hours = Math.round((en.getTime() - st.getTime()) / 360000) / 10;
    return {
      uid: ev.getId(), title: ev.getTitle(), desc: String(ev.getDescription() || '').slice(0, 500), allDay: all, recurring: false,
      start: Utilities.formatDate(st, APP.tz, all ? 'yyyy-MM-dd' : "yyyy-MM-dd'T'HH:mm"), date: Utilities.formatDate(st, APP.tz, 'yyyy-MM-dd'),
      hours: all ? Math.max(24, hours) : hours
    };
  }).filter(function (e) { return e.allDay || e.hours >= 23; });
  return { calendar: cal.getName(), events: evs.slice(0, 3000) };
}
