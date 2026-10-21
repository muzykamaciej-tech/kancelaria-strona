/* Admin.js — pierwsza konfiguracja, zespół i dostępy, ustawienia kancelarii, słowniki, liczniki. */

function idFromLink_(s) {
  s = String(s || '').trim();
  var m = /\/(?:folders|d)\/([A-Za-z0-9_-]{15,})/.exec(s) || /[?&]id=([A-Za-z0-9_-]{15,})/.exec(s);
  return m ? m[1] : (/^[A-Za-z0-9_-]{15,}$/.test(s) ? s : '');
}

function dropDefaultSheet_(ss) {
  ss.getSheets().forEach(function (sh) {
    if (/^(Sheet ?1|Arkusz ?1)$/.test(sh.getName()) && ss.getSheets().length > 1) ss.deleteSheet(sh);
  });
}

/* Arkusz bazy kancelarii (wszystkie zakładki) + folder na sprawy, jeśli nie wskazano istniejącego. */
function createFirmDb_(f, root) {
  var ss = SpreadsheetApp.create('CRM – ' + f.nazwa_krotka + ' – dane');
  DriveApp.getFileById(ss.getId()).moveTo(root);
  TABLE_ORDER.forEach(function (t) { ensureSheet_(ss, TABLES[t].sheet, tableKeys_(t)); });
  ensureSheet_(ss, HISTORY_SHEET, HISTORY_KEYS);
  dropDefaultSheet_(ss);
  f.db_id = ss.getId();
  if (!f.folder_id) f.folder_id = root.createFolder('Sprawy – ' + f.nazwa_krotka).getId();
  return f;
}

function firstFolderByName_(name) {
  var it = DriveApp.getFoldersByName(name);
  if (!it.hasNext()) return null;
  var f = it.next();
  return { id: f.getId(), name: f.getName(), url: f.getUrl() };
}

/* Podpowiedzi na ekran konfiguracji: istniejące foldery spraw i zgłoszeń ze strony. */
function apiSetupHints() {
  if (settingsId_() || !isScriptEditor_()) fail_('FORBIDDEN', 'Niedostępne.');
  return {
    KN: { folder: firstFolderByName_('Sprawy - Nieruchomości'), import_folder: firstFolderByName_('Zgłoszenia ze strony') },
    KR: { folder: firstFolderByName_('Akta spraw'), import_folder: null }
  };
}

function apiSetup(p) {
  var email = me_();
  if (!email) fail_('NO_USER', 'Brak adresu e-mail zalogowanego konta.');
  if (settingsId_()) fail_('ALREADY', 'Aplikacja jest już skonfigurowana.');
  if (!isScriptEditor_()) fail_('FORBIDDEN', 'Pierwszą konfigurację uruchamia właściciel projektu Apps Script.');
  p = p || {};
  return withLock_(function () {
    var now = nowIso_();
    var root = DriveApp.createFolder('CRM Kancelarii');
    var set = SpreadsheetApp.create('CRM Kancelarii – zespół i ustawienia');
    DriveApp.getFileById(set.getId()).moveTo(root);
    Object.keys(SETTINGS_TABLES).forEach(function (t) { ensureSheet_(set, SETTINGS_TABLES[t].sheet, SETTINGS_TABLES[t].keys); });
    ensureSheet_(set, HISTORY_SHEET, HISTORY_KEYS);
    dropDefaultSheet_(set);

    var firms = (p.firms && p.firms.length ? p.firms : DEFAULT_FIRMS).map(function (x) {
      var f = {};
      SETTINGS_TABLES.kancelarie.keys.forEach(function (k) { f[k] = String(x[k] || '').trim(); });
      f.kod = f.kod.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
      if (!f.kod || !f.nazwa) fail_('INVALID', 'Każda kancelaria musi mieć kod i nazwę.');
      f.nazwa_krotka = f.nazwa_krotka || f.nazwa;
      f.folder_id = idFromLink_(x.folder_id);
      f.import_folder = idFromLink_(x.import_folder);
      if (x.create !== false) createFirmDb_(f, root);
      return f;
    });
    appendRows_(set.getSheetByName(SETTINGS_TABLES.kancelarie.sheet), firms);

    var dictRows = [];
    Object.keys(DEFAULT_DICTS).forEach(function (scope) {
      if (scope !== '*' && !firms.some(function (f) { return f.kod === scope; })) return;
      Object.keys(DEFAULT_DICTS[scope]).forEach(function (name) {
        DEFAULT_DICTS[scope][name].forEach(function (v, i) {
          dictRows.push({ kancelaria: scope, slownik: name, wartosc: Array.isArray(v) ? v[0] : v, typ: Array.isArray(v) ? v[1] : '', kolejnosc: String(i + 1) });
        });
      });
    });
    appendRows_(set.getSheetByName(SETTINGS_TABLES.slowniki.sheet), dictRows);

    var codes = firms.map(function (f) { return f.kod; });
    var me = p.me || {};
    var team = [{ email: email, imie_nazwisko: me.imie_nazwisko || email, tytul: me.tytul || '', rola: 'admin', kancelarie: codes.join(','), telefon: me.telefon || '', aktywny: 'tak', dodano: now, dodal: email }];
    (p.team || []).forEach(function (m) {
      var e = String(m.email || '').trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) || team.some(function (x) { return x.email === e; })) return;
      team.push({
        email: e, imie_nazwisko: m.imie_nazwisko || e, tytul: m.tytul || '', rola: ROLES[m.rola] ? m.rola : 'odczyt',
        kancelarie: splitList_(m.kancelarie).filter(function (k) { return codes.indexOf(k) >= 0; }).join(','),
        telefon: m.telefon || '', aktywny: 'tak', dodano: now, dodal: email
      });
    });
    appendRows_(set.getSheetByName(SETTINGS_TABLES.zespol.sheet), team);

    props_().setProperties({ SETTINGS_ID: set.getId(), ROOT_FOLDER_ID: root.getId() });
    Object.keys(p.seq || {}).forEach(function (k) {
      if (/^SEQ_[A-Z0-9_]+$/.test(k) && /^\d+$/.test(String(p.seq[k]))) props_().setProperty(k, String(p.seq[k]));
    });
    dropSettingsCache_();
    var s = loadSettings_(true);
    var shareLog = team.slice(1).map(function (m) { return { email: m.email, log: applySharing_(s, m) }; });
    log_(set, email, 'konfiguracja', '', 'utworzenie', { kancelarie: codes.join(','), zespol: team.length });
    return { shareLog: shareLog };
  });
}

function apiTeamSave(m) {
  var c = ctx_();
  requireAdmin_(c);
  m = m || {};
  var email = String(m.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail_('INVALID', 'Podaj poprawny adres e-mail konta Google.');
  if (!ROLES[m.rola]) fail_('INVALID', 'Wybierz rolę.');
  if (email === c.email && (m.rola !== 'admin' || m.aktywny === 'nie')) fail_('INVALID', 'Nie możesz odebrać sobie roli administratora.');
  var codes = c.s.kancelarie.map(function (f) { return f.kod; });
  var rec = {
    email: email, imie_nazwisko: String(m.imie_nazwisko || '').trim() || email, tytul: String(m.tytul || '').trim(),
    rola: m.rola, kancelarie: splitList_(m.kancelarie).filter(function (k) { return codes.indexOf(k) >= 0; }).join(','),
    telefon: String(m.telefon || '').trim(), aktywny: m.aktywny === 'nie' ? 'nie' : 'tak'
  };
  return withLock_(function () {
    var set = SpreadsheetApp.openById(settingsId_());
    var sh = set.getSheetByName(SETTINGS_TABLES.zespol.sheet);
    var row = findRow_(sh, 'email', email);
    if (row > 0) {
      var cur = readRow_(sh, row), next = {};
      Object.keys(cur).forEach(function (k) { next[k] = cur[k]; });
      Object.keys(rec).forEach(function (k) { next[k] = rec[k]; });
      writeRow_(sh, row, next);
      log_(set, c.email, 'zespol', email, 'zmiana', diff_(cur, next));
    } else {
      rec.dodano = nowIso_(); rec.dodal = c.email;
      appendRows_(sh, [rec]);
      log_(set, c.email, 'zespol', email, 'utworzenie', null);
    }
    dropSettingsCache_();
    var s = loadSettings_(true);
    return { team: s.zespol, shareLog: applySharing_(s, rec) };
  });
}

/* Ponowne nadanie udostępnień wszystkim (np. po zmianie arkusza bazy albo folderu spraw). */
function apiResync() {
  var c = ctx_();
  requireAdmin_(c);
  var s = loadSettings_(true);
  return s.zespol.map(function (m) { return { email: m.email, log: applySharing_(s, m) }; });
}

var FIRM_EDITABLE_ = ['nazwa', 'nazwa_krotka', 'forma', 'adres', 'nip', 'strona', 'email', 'telefon', 'kolor', 'model', 'sla_h', 'stawka', 'link_rezerwacji', 'podpis', 'folder_id', 'import_folder'];

function apiFirmSave(f) {
  var c = ctx_();
  requireAdmin_(c);
  return withLock_(function () {
    var set = SpreadsheetApp.openById(settingsId_());
    var sh = set.getSheetByName(SETTINGS_TABLES.kancelarie.sheet);
    var row = findRow_(sh, 'kod', f.kod);
    if (row < 0) fail_('NOT_FOUND', 'Nie ma takiej kancelarii.');
    var cur = readRow_(sh, row), next = {};
    Object.keys(cur).forEach(function (k) { next[k] = cur[k]; });
    FIRM_EDITABLE_.forEach(function (k) {
      if (f[k] === undefined) return;
      next[k] = k === 'folder_id' || k === 'import_folder' ? idFromLink_(f[k]) : String(f[k]).trim();
    });
    if (!/^(analiza|konsultacja)$/.test(next.model)) next.model = 'analiza';
    writeRow_(sh, row, next);
    log_(set, c.email, 'kancelarie', f.kod, 'zmiana', diff_(cur, next));
    dropSettingsCache_();
    return publicFirm_(next);
  });
}

/* Załóż bazę kancelarii na koncie osoby zalogowanej (np. konto w domenie tej kancelarii),
   o ile kancelaria nie ma jeszcze bazy. Udostępnia ją członkom tej kancelarii i administratorom. */
function apiCreateDb(code) {
  var c = ctx_();
  requireAdmin_(c);
  return withLock_(function () {
    var f = firm_(c, code);
    if (f.db_id) fail_('ALREADY', 'Ta kancelaria ma już bazę.');
    var it = DriveApp.getFoldersByName('CRM Kancelarii');
    var root = it.hasNext() ? it.next() : DriveApp.createFolder('CRM Kancelarii');
    createFirmDb_(f, root);
    var set = SpreadsheetApp.openById(settingsId_());
    var sh = set.getSheetByName(SETTINGS_TABLES.kancelarie.sheet);
    var row = findRow_(sh, 'kod', code), cur = readRow_(sh, row);
    cur.db_id = f.db_id; cur.folder_id = f.folder_id;
    writeRow_(sh, row, cur);
    log_(set, c.email, 'kancelarie', code, 'baza', { db_id: f.db_id });
    dropSettingsCache_();
    var s = loadSettings_(true);
    s.zespol.forEach(function (m) {
      if (m.rola === 'admin' && m.aktywny !== 'nie') { try { DriveApp.getFileById(f.db_id).addEditor(m.email); } catch (e) { /* — */ } }
      applySharing_(s, m);
    });
    return publicFirm_(cur);
  });
}

function apiDictSave(scope, name, items) {
  var c = ctx_();
  requireAdmin_(c);
  if (!/^[a-z_]+$/.test(name)) fail_('INVALID', 'Zła nazwa słownika.');
  return withLock_(function () {
    var set = SpreadsheetApp.openById(settingsId_());
    var sh = set.getSheetByName(SETTINGS_TABLES.slowniki.sheet);
    var all = readSheet_(sh).filter(function (r) { return !(r.kancelaria === scope && r.slownik === name); });
    (items || []).forEach(function (it, i) {
      var v = String(it.v || it.wartosc || '').trim();
      if (v) all.push({ kancelaria: scope, slownik: name, wartosc: v, typ: String(it.t || it.typ || ''), kolejnosc: String(i + 1) });
    });
    if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
    appendRows_(sh, all);
    log_(set, c.email, 'slowniki', scope + ':' + name, 'zmiana', { pozycji: (items || []).length });
    dropSettingsCache_();
    return dictsFor_(all, loadSettings_(true).kancelarie.map(function (f) { return f.kod; }));
  });
}

function apiSeqSave(name, value) {
  var c = ctx_();
  requireAdmin_(c);
  if (!/^SEQ_[A-Z0-9_]+$/.test(name) || !/^\d+$/.test(String(value))) fail_('INVALID', 'Zła nazwa albo wartość licznika.');
  props_().setProperty(name, String(value));
  return seqValues_();
}
