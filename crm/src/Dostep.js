/* Dostep.js — kto jest zalogowany, do czego ma dostęp.
   Aplikacja działa „jako użytkownik, który ją otwiera”, więc Google sam pilnuje dostępu:
   ktoś bez udostępnionego arkusza kancelarii nie odczyta jego danych nawet z pominięciem
   aplikacji. Lista „Zespół” decyduje o roli w aplikacji i o tym, co administrator udostępnia. */

function me_() { return String(Session.getActiveUser().getEmail() || '').toLowerCase(); }
function props_() { return PropertiesService.getScriptProperties(); }
function settingsId_() { return props_().getProperty('SETTINGS_ID'); }

function splitList_(s) {
  return String(s || '').split(/[,;\s]+/).map(function (x) { return x.trim(); }).filter(String);
}

/* Zespół, kancelarie i słowniki: krótko w pamięci podręcznej skryptu (unieważniane przy zmianie). */
function loadSettings_(force) {
  var cache = CacheService.getScriptCache();
  if (!force) {
    var hit = cache.get('settings');
    if (hit) return JSON.parse(hit);
  }
  var ss = SpreadsheetApp.openById(settingsId_());
  var s = {};
  Object.keys(SETTINGS_TABLES).forEach(function (t) { s[t] = readSheet_(ss.getSheetByName(SETTINGS_TABLES[t].sheet)); });
  s.zespol.forEach(function (m) { m.email = String(m.email).toLowerCase().trim(); });
  try { cache.put('settings', JSON.stringify(s), 300); } catch (e) { /* za duże — bez pamięci podręcznej */ }
  return s;
}
function dropSettingsCache_() { CacheService.getScriptCache().remove('settings'); }

/* Kontekst żądania: użytkownik, jego rola i kancelarie. Rzuca, gdy brak dostępu. */
function ctx_() {
  var email = me_();
  if (!email) fail_('NO_USER', 'Google nie przekazał adresu e-mail. Zaloguj się na konto Google i otwórz aplikację ponownie.');
  if (!settingsId_()) fail_('SETUP', 'Aplikacja nie jest jeszcze skonfigurowana.');
  var s;
  try { s = loadSettings_(); } catch (e) { fail_('DENIED', 'Twoje konto (' + email + ') nie ma dostępu do CRM. Poproś administratora o dodanie do zespołu.'); }
  var m = memberOf_(s, email);
  if (!m) fail_('DENIED', 'Twoje konto (' + email + ') nie jest na liście zespołu CRM. Poproś administratora o dodanie.');
  var role = ROLES[m.rola] ? m.rola : 'odczyt';
  var firms = splitList_(m.kancelarie).filter(function (k) { return s.kancelarie.some(function (f) { return f.kod === k; }); });
  /* email = konto główne osoby (tożsamość w zadaniach i historii), login = konto, którym otwarto aplikację. */
  return { email: m.email, login: email, member: m, role: role, perm: ROLES[role], firms: firms, s: s };
}

/* Aktywny członek zespołu po adresie konta głównego albo jednego z aliasów (drugie konto tej samej osoby). */
function memberOf_(s, email) {
  email = String(email || '').toLowerCase();
  return s.zespol.filter(function (x) {
    return x.aktywny !== 'nie' && (x.email === email || splitList_(x.aliasy).map(function (a) { return a.toLowerCase(); }).indexOf(email) >= 0);
  })[0] || null;
}

/* Konta dopuszczone do zespołu i powiadomień: domeny z adresów kancelarii + lista ALLOWED_DOMAINS
   (Ustawienia). Chroni przed udostępnieniem bazy klientów prywatnym skrzynkom. */
function allowedDomains_(firms) {
  var d = {};
  (firms || []).forEach(function (f) { var m = /@([^@\s]+)$/.exec(String(f.email || '').trim()); if (m) d[m[1].toLowerCase()] = 1; });
  splitList_(props_().getProperty('ALLOWED_DOMAINS')).forEach(function (x) { d[x.toLowerCase().replace(/^@/, '')] = 1; });
  return Object.keys(d);
}
function emailAllowed_(firms, email) {
  var dom = String(email || '').toLowerCase().split('@')[1] || '';
  return allowedDomains_(firms).indexOf(dom) >= 0;
}

function firm_(c, code) {
  var f = c.s.kancelarie.filter(function (x) { return x.kod === code; })[0];
  if (!f) fail_('BAD_FIRM', 'Nieznana kancelaria: ' + code);
  return f;
}

function requireFirm_(c, code, write) {
  if (c.firms.indexOf(code) < 0) fail_('FORBIDDEN', 'Nie masz dostępu do tej kancelarii.');
  if (write && !c.perm.write) fail_('FORBIDDEN', 'Masz dostęp tylko do odczytu.');
  var f = firm_(c, code);
  if (!f.db_id) fail_('NO_DB', 'Baza tej kancelarii nie jest jeszcze założona (Ustawienia).');
  return f;
}

function requireAdmin_(c) {
  if (!c.perm.admin) fail_('FORBIDDEN', 'Tylko administrator może to zrobić.');
}

/* Właściciel lub współedytor projektu skryptu — tylko on może uruchomić pierwszą konfigurację. */
function isScriptEditor_() {
  try { DriveApp.getFileById(ScriptApp.getScriptId()).getName(); return true; } catch (e) { return false; }
}

/* Udostępnienia w Dysku zgodne z wpisem w „Zespole”: arkusz ustawień (odczyt, administrator —
   edycja), arkusz bazy i folder spraw każdej kancelarii z listy (edycja albo odczyt). */
function applySharing_(s, m) {
  return [m.email].concat(splitList_(m.aliasy)).reduce(function (log, e) {
    return log.concat(applySharingFor_(s, m, String(e || '').toLowerCase()));
  }, []);
}

function applySharingFor_(s, m, email) {
  if (!email || email === me_()) return [];
  var active = m.aktywny !== 'nie';
  var firms = active ? splitList_(m.kancelarie) : [];
  var editor = m.rola !== 'odczyt';
  var log = [];
  var who = email === String(m.email).toLowerCase() ? '' : ' (' + email + ')';
  function grant(get, id, asEditor, label) {
    label += who;
    if (!id) return;
    try {
      var f = get(id);
      if (asEditor) { f.addEditor(email); log.push(label + ': edycja'); }
      else { try { f.removeEditor(email); } catch (e) { /* nie był edytorem */ } f.addViewer(email); log.push(label + ': odczyt'); }
    } catch (e) { log.push(label + ': BŁĄD ' + e.message); }
  }
  function revoke(get, id, label) {
    label += who;
    if (!id) return;
    try { var f = get(id); try { f.removeEditor(email); } catch (e) { /* — */ } try { f.removeViewer(email); } catch (e) { /* — */ } log.push(label + ': brak dostępu'); }
    catch (e) { log.push(label + ': BŁĄD ' + e.message); }
  }
  var file = function (id) { return DriveApp.getFileById(id); };
  var folder = function (id) { return DriveApp.getFolderById(id); };
  if (active) grant(file, settingsId_(), m.rola === 'admin', 'Ustawienia i zespół');
  else revoke(file, settingsId_(), 'Ustawienia i zespół');
  s.kancelarie.forEach(function (k) {
    var on = firms.indexOf(k.kod) >= 0;
    if (on) { grant(file, k.db_id, editor, 'Baza ' + k.kod); grant(folder, k.folder_id, editor, 'Folder spraw ' + k.kod); }
    else { revoke(file, k.db_id, 'Baza ' + k.kod); revoke(folder, k.folder_id, 'Folder spraw ' + k.kod); }
  });
  return log;
}
