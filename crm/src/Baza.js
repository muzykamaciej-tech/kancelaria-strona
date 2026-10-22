/* Baza.js — warstwa danych na Arkuszach Google.
   Zasady: wiersz 1 = klucze pól; wszystkie komórki w formacie tekstowym „@”, żeby Arkusze nie
   zamieniały dat, telefonów („+48…”) ani formuł („=…”); zapis tylko pod blokadą skryptu. */

function nowIso_() { return Utilities.formatDate(new Date(), APP.tz, "yyyy-MM-dd'T'HH:mm:ss.SSS"); }
function nowMinute_() { return Utilities.formatDate(new Date(), APP.tz, "yyyy-MM-dd'T'HH:mm"); }
function today_() { return Utilities.formatDate(new Date(), APP.tz, 'yyyy-MM-dd'); }
function newId_() { return (Date.now().toString(36) + Math.random().toString(36).slice(2, 6)).slice(-10); }

var SHARED_ = null;
function sh_() { return SHARED_ || (SHARED_ = sharedFactory_()); }

function fail_(code, msg) { throw new Error(code + ': ' + msg); }

function withLock_(fn) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(25000)) fail_('BUSY', 'Ktoś inny właśnie zapisuje. Spróbuj za chwilę.');
  try { return fn(); } finally { SpreadsheetApp.flush(); lock.releaseLock(); }
}

function tableKeys_(table) {
  return SYS_FIELDS.concat(TABLES[table].fields.map(function (f) { return f.k; }));
}

/* Zakładka z nagłówkiem; dopisuje brakujące kolumny na końcu. */
function ensureSheet_(ss, name, keys) {
  var sh = ss.getSheetByName(name);
  var fresh = !sh;
  if (!sh) sh = ss.insertSheet(name);
  var lastCol = sh.getLastColumn();
  var head = lastCol ? sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String) : [];
  while (head.length && !head[head.length - 1]) head.pop();
  var missing = keys.filter(function (k) { return head.indexOf(k) < 0; });
  if (missing.length) {
    var need = head.length + missing.length;
    if (need > sh.getMaxColumns()) sh.insertColumnsAfter(sh.getMaxColumns(), need - sh.getMaxColumns());
    sh.getRange(1, head.length + 1, 1, missing.length).setValues([missing]);
    head = head.concat(missing);
  }
  if (fresh || missing.length) {
    sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).setNumberFormat('@');
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#E2E8F0');
    sh.setFrozenRows(1);
  }
  /* Ręczna edycja arkusza pokazuje ostrzeżenie „zmieniaj przez CRM” (aplikacji nie blokuje). */
  if (fresh) { try { sh.protect().setDescription('Dane CRM — zmieniaj przez aplikację').setWarningOnly(true); } catch (e) { /* bez uprawnień */ } }
  return sh;
}

function norm_(v) {
  if (v === null || v === undefined) return '';
  if (Object.prototype.toString.call(v) === '[object Date]') {
    if (isNaN(v.getTime())) return '';
    var hm = Utilities.formatDate(v, APP.tz, 'HH:mm');
    return Utilities.formatDate(v, APP.tz, hm === '00:00' ? 'yyyy-MM-dd' : "yyyy-MM-dd'T'HH:mm");
  }
  if (typeof v === 'boolean') return v ? 'tak' : '';
  return String(v);
}

function rowsFromValues_(vals) {
  if (!vals || vals.length < 2) return [];
  var head = vals[0].map(String), out = [];
  for (var r = 1; r < vals.length; r++) {
    var row = vals[r], o = {}, any = false;
    for (var c = 0; c < head.length; c++) {
      if (!head[c]) continue;
      var v = norm_(row[c]);
      /* Identyfikatory trafiają do atrybutów HTML: ręczna edycja arkusza nie może wstrzyknąć kodu. */
      if (head[c] === 'id' || (/_id$/.test(head[c]) && head[c] !== 'zrodlo_id')) v = v.replace(/[^A-Za-z0-9_-]/g, '');
      if (v !== '') any = true;
      o[head[c]] = v;
    }
    if (any) out.push(o);
  }
  return out;
}

function readSheet_(sh) {
  if (!sh) return [];
  var lr = sh.getLastRow(), lc = sh.getLastColumn();
  if (lr < 2 || !lc) return [];
  return rowsFromValues_(sh.getRange(1, 1, lr, lc).getValues());
}

/* Wszystkie tabele jednego arkusza. Jedno zapytanie do Sheets API (batchGet), gdy usługa
   zaawansowana jest włączona; w przeciwnym razie zakładka po zakładce. */
function readTables_(ss, tables) {
  var out = {};
  if (typeof Sheets !== 'undefined' && Sheets.Spreadsheets) {
    try {
      var res = Sheets.Spreadsheets.Values.batchGet(ss.getId(), {
        ranges: tables.map(function (t) { return "'" + TABLES[t].sheet + "'"; }),
        valueRenderOption: 'FORMATTED_VALUE'
      });
      tables.forEach(function (t, i) {
        var vr = res.valueRanges[i] || {};
        out[t] = rowsFromValues_(vr.values || []);
      });
      return out;
    } catch (e) {
      console.warn('batchGet: ' + e);
    }
  }
  tables.forEach(function (t) { out[t] = readSheet_(ss.getSheetByName(TABLES[t].sheet)); });
  return out;
}

function headOf_(sh) {
  return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String);
}

function findRow_(sh, key, value) {
  var head = headOf_(sh), col = head.indexOf(key) + 1, lr = sh.getLastRow();
  if (!col || lr < 2) return -1;
  var vals = sh.getRange(2, col, lr - 1, 1).getValues();
  for (var i = 0; i < vals.length; i++) if (norm_(vals[i][0]) === String(value)) return i + 2;
  return -1;
}

function readRow_(sh, row) {
  var head = headOf_(sh), vals = sh.getRange(row, 1, 1, head.length).getValues()[0], o = {};
  head.forEach(function (h, i) { if (h) o[h] = norm_(vals[i]); });
  return o;
}

function rowValues_(head, rec) {
  return head.map(function (h) {
    var v = rec[h];
    return v === undefined || v === null ? '' : String(v).slice(0, 49000);
  });
}

function writeRow_(sh, row, rec) {
  var head = headOf_(sh);
  sh.getRange(row, 1, 1, head.length).setNumberFormat('@').setValues([rowValues_(head, rec)]);
}

function appendRows_(sh, recs) {
  if (!recs.length) return;
  var head = headOf_(sh), start = Math.max(sh.getLastRow(), 1) + 1, end = start + recs.length - 1;
  if (end > sh.getMaxRows()) sh.insertRowsAfter(sh.getMaxRows(), end - sh.getMaxRows() + 50);
  sh.getRange(start, 1, recs.length, head.length).setNumberFormat('@')
    .setValues(recs.map(function (r) { return rowValues_(head, r); }));
}

/* Historia zmian: kto, kiedy, co (stare → nowe). */
function log_(ss, email, table, id, action, changes) {
  var sh = ensureSheet_(ss, HISTORY_SHEET, HISTORY_KEYS);
  var txt = changes ? JSON.stringify(changes) : '';
  appendRows_(sh, [{ ts: nowIso_(), kto: email, tabela: table, rekord: id, akcja: action, zmiany: txt.slice(0, 20000) }]);
}

function diff_(before, after) {
  var ch = {};
  Object.keys(after).forEach(function (k) {
    if (SYS_FIELDS.indexOf(k) >= 0 || k.charAt(0) === '_') return;
    var a = before[k] === undefined ? '' : String(before[k]), b = String(after[k] === undefined ? '' : after[k]);
    if (a !== b) ch[k] = [a, b];
  });
  return ch;
}

/* Kolejne numery wspólne dla obu kancelarii (Lista Spraw, Rejestr Umów, korespondencja).
   Trzymane we właściwościach skryptu, bo każda kancelaria ma osobny arkusz. Wołać pod blokadą. */
function nextSeq_(name) {
  var p = PropertiesService.getScriptProperties();
  var n = (parseInt(p.getProperty(name), 10) || 0) + 1;
  p.setProperty(name, String(n));
  return n;
}
function bumpSeq_(name, atLeast) {
  var p = PropertiesService.getScriptProperties();
  if ((parseInt(p.getProperty(name), 10) || 0) < atLeast) p.setProperty(name, String(atLeast));
}
function seqValues_() {
  var all = PropertiesService.getScriptProperties().getProperties(), out = {};
  Object.keys(all).forEach(function (k) { if (/^SEQ_/.test(k)) out[k] = all[k]; });
  return out;
}
