/* Api.js — strona WWW i funkcje wołane z przeglądarki (google.script.run).
   Publiczne są tylko funkcje bez podkreślnika na końcu; każda zaczyna od ctx_() (kto i z jakim
   dostępem). Funkcje pomocnicze kończą się „_”, więc nie da się ich wywołać z przeglądarki. */

function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle(APP.name)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

function include_(name) { return HtmlService.createHtmlOutputFromFile(name).getContent(); }
function sharedSource_() { return sharedFactory_.toString(); }

/* Słowniki po scaleniu: wspólne („*”) nadpisane słownikami danej kancelarii. */
function dictsFor_(rows, codes) {
  var base = {}, byFirm = {};
  rows.slice().sort(function (a, b) { return (+a.kolejnosc || 0) - (+b.kolejnosc || 0); }).forEach(function (r) {
    var bucket = r.kancelaria === '*' ? base : (byFirm[r.kancelaria] = byFirm[r.kancelaria] || {});
    (bucket[r.slownik] = bucket[r.slownik] || []).push({ v: r.wartosc, t: r.typ || '' });
  });
  var out = {};
  codes.forEach(function (k) {
    var d = {};
    Object.keys(base).forEach(function (n) { d[n] = base[n]; });
    Object.keys(byFirm[k] || {}).forEach(function (n) { d[n] = byFirm[k][n]; });
    out[k] = d;
  });
  return out;
}

function dictFirst_(c, code, name, type) {
  var d = dictsFor_(c.s.slowniki, [code])[code][name] || [];
  var hit = d.filter(function (x) { return !type || x.t === type; })[0];
  return hit ? hit.v : '';
}

function publicFirm_(f) {
  var o = {};
  SETTINGS_TABLES.kancelarie.keys.forEach(function (k) { o[k] = f[k] || ''; });
  o.db_url = f.db_id ? 'https://docs.google.com/spreadsheets/d/' + f.db_id + '/edit' : '';
  o.folder_url = f.folder_id ? 'https://drive.google.com/drive/folders/' + f.folder_id : '';
  return o;
}

/* Start aplikacji: stan konfiguracji, profil, zespół, słowniki i wszystkie dane kancelarii,
   do których użytkownik ma dostęp (kilkaset–kilka tysięcy wierszy: wygodniej filtrować w przeglądarce). */
function bootstrap() {
  var email = me_();
  if (!settingsId_()) {
    return { state: 'setup', email: email, canSetup: isScriptEditor_(), firms: DEFAULT_FIRMS, team: DEFAULT_TEAM, schema: publicSchema_(), url: ScriptApp.getService().getUrl() };
  }
  var c;
  try { c = ctx_(); } catch (e) {
    return { state: 'denied', email: email, message: String(e.message).replace(/^[A-Z_]+: /, ''), url: ScriptApp.getService().getUrl() };
  }
  var data = {}, errors = [];
  TABLE_ORDER.forEach(function (t) { data[t] = []; });
  c.firms.forEach(function (code) {
    var f = firm_(c, code);
    if (!f.db_id) { errors.push(f.nazwa_krotka + ': baza nie jest jeszcze założona.'); return; }
    try {
      var ss = SpreadsheetApp.openById(f.db_id);
      if (c.perm.admin) { try { migrateFirmDb_(ss); } catch (e) { console.warn('migracja ' + code + ': ' + e); } }
      var got = readTables_(ss, TABLE_ORDER);
      TABLE_ORDER.forEach(function (t) {
        (got[t] || []).forEach(function (r) { r.kancelaria = code; data[t].push(r); });
      });
    } catch (e) {
      errors.push(f.nazwa_krotka + ': brak dostępu do arkusza bazy (' + e.message + ').');
    }
  });
  var admin = !!c.perm.admin;
  var visibleFirms = c.s.kancelarie.filter(function (f) { return c.full || c.firms.indexOf(f.kod) >= 0; });
  return {
    state: 'ok', email: c.email, login: c.login, me: c.member, role: c.role, perm: c.perm,
    firms: visibleFirms.map(publicFirm_), full: c.full,
    myFirms: c.firms,
    team: c.s.zespol.map(function (m) { return { email: m.email, imie_nazwisko: m.imie_nazwisko, tytul: m.tytul, stanowisko: m.stanowisko || '', rola: m.rola, kancelarie: m.kancelarie, telefon: m.telefon, aktywny: m.aktywny, aliasy: m.aliasy || '', powiadomienia: m.powiadomienia || '' }; }),
    dicts: dictsFor_(c.s.slowniki, c.s.kancelarie.map(function (f) { return f.kod; })),
    schema: publicSchema_(),
    data: data, errors: errors, now: nowMinute_(),
    url: ScriptApp.getService().getUrl(),
    admin: admin ? { seq: seqValues_(), settingsUrl: 'https://docs.google.com/spreadsheets/d/' + settingsId_() + '/edit', slowniki: c.s.slowniki,
      domeny: allowedDomains_(c.s.kancelarie), domenyDodatkowe: props_().getProperty('ALLOWED_DOMAINS') || '' } : null
  };
}

/* Nowe zakładki z kolejnych wersji (np. Zadania, Komentarze) zakłada administrator przy starcie. */
function migrateFirmDb_(ss) {
  var have = ss.getSheets().map(function (sh) { return sh.getName(); });
  var missing = TABLE_ORDER.filter(function (t) { return have.indexOf(TABLES[t].sheet) < 0; });
  if (!missing.length) return;
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return;
  try {
    var now = ss.getSheets().map(function (sh) { return sh.getName(); });
    missing.forEach(function (t) { if (now.indexOf(TABLES[t].sheet) < 0) ensureSheet_(ss, TABLES[t].sheet, tableKeys_(t)); });
    SpreadsheetApp.flush();
  } finally { lock.releaseLock(); }
}

/* ---------- Zapis ---------- */

function resolveDefault_(c, f, fd) {
  var d = fd.def;
  if (d === undefined) return '';
  if (d === '@now') return nowMinute_();
  if (d === '@today') return today_();
  if (d === '@me') return c.email;
  if (d === '@stawka') return f.stawka || '';
  if (d === '@first') return fd.dict ? dictFirst_(c, f.kod, fd.dict) : (fd.opts || [])[0] || '';
  return d;
}

function cleanRecord_(table, rec) {
  var out = {};
  TABLES[table].fields.forEach(function (fd) {
    if (fd.auto || !Object.prototype.hasOwnProperty.call(rec, fd.k)) return;
    var v = rec[fd.k];
    v = v === null || v === undefined ? '' : String(v).trim();
    if (fd.t === 'check') v = v && v !== 'nie' && v !== 'false' ? 'tak' : '';
    if ((fd.t === 'money' || fd.t === 'number') && v) {
      v = v.replace(/\s|zł/g, '').replace(',', '.');
      if (isNaN(+v)) fail_('INVALID', fd.l + ': to nie jest liczba.');
    }
    if (fd.t === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) fail_('INVALID', fd.l + ': niepoprawny adres e-mail.');
    if ((fd.t === 'date' || fd.t === 'datetime') && v && isNaN(sh_().parse(v))) fail_('INVALID', fd.l + ': niepoprawna data.');
    if (fd.t === 'url' && v && !/^https?:\/\//i.test(v)) fail_('INVALID', fd.l + ': link musi zaczynać się od https://');
    if (fd.t === 'time' && v && !/^([01]\d|2[0-3]):[0-5]\d$/.test(v)) fail_('INVALID', fd.l + ': godzina w formacie GG:MM.');
    out[fd.k] = v.slice(0, 20000);
  });
  return out;
}

function checkRequired_(table, rec) {
  TABLES[table].fields.forEach(function (fd) {
    if (fd.req && !fd.auto && !String(rec[fd.k] || '').trim()) fail_('INVALID', 'Uzupełnij pole „' + fd.l + '”.');
  });
}

/* Nowy rekord bez zapisu: wartości domyślne + pola systemowe. */
function buildNew_(c, f, table, rec) {
  var out = cleanRecord_(table, rec), now = nowIso_();
  TABLES[table].fields.forEach(function (fd) {
    if (!out[fd.k] && fd.def !== undefined && !fd.auto) out[fd.k] = resolveDefault_(c, f, fd);
  });
  out.id = newId_(); out.utworzono = now; out.utworzyl = c.email; out.zmieniono = now; out.zmienil = c.email;
  return out;
}

function dictType_(c, code, name, value) {
  var d = dictsFor_(c.s.slowniki, [code])[code][name] || [];
  var hit = d.filter(function (x) { return x.v === value; })[0];
  return hit ? hit.t : '';
}

/* Pola wyliczane: numery z rejestrów, termin odpowiedzi 24 h robocze, daty statusów. */
function autoFields_(c, f, table, rec, before) {
  var created = !before;
  if (table === 'sprawy') {
    var nr = String(rec.numer || '').trim().replace(/^\((.*)\)$/, '$1');
    if (created && !nr) nr = String(nextSeq_('SEQ_TECZKA'));
    else if (created && /^p$/i.test(nr)) nr = 'P' + nextSeq_('SEQ_P');
    else if (/^\d+$/.test(nr)) bumpSeq_('SEQ_TECZKA', +nr);
    else if (/^P\d+$/i.test(nr)) bumpSeq_('SEQ_P', +nr.slice(1));
    rec.numer = nr;
    var closed = dictType_(c, f.kod, 'status_sprawy', rec.status) === 'closed';
    if (closed && !rec.data_zamkniecia) rec.data_zamkniecia = today_();
  }
  if (table === 'umowy') {
    var year = String(rec.data_zawarcia || today_()).slice(0, 4);
    var m = /^(\d+)\/(\d{4})$/.exec(String(rec.nr || '').trim());
    if (created && !rec.nr) rec.nr = sh_().pad(nextSeq_('SEQ_UMOWA_' + year)) + '/' + year;
    else if (m) bumpSeq_('SEQ_UMOWA_' + m[2], +m[1]);
  }
  if (table === 'korespondencja' && created) {
    var y = String(rec.data || today_()).slice(0, 4), dir = rec.kierunek === 'Wychodząca' ? 'W' : 'P';
    rec.nr = dir + '/' + y + '/' + ('00' + nextSeq_('SEQ_KOR_' + dir + '_' + y)).slice(-3);
  }
  if (table === 'zadania') taskAuto_(c, f, rec, before);
  if (table === 'zapytania') {
    if (f.model === 'analiza' && +f.sla_h > 0 && (created || before.data_wplywu !== rec.data_wplywu)) {
      rec.termin_odpowiedzi = sh_().addWorkingHours(rec.data_wplywu, +f.sla_h);
    }
    if (/^Oferta/i.test(rec.status) && (created || before.status !== rec.status)) {
      if (!rec.odpowiedz) rec.odpowiedz = nowMinute_();
      if (!rec.przypomnienie) rec.przypomnienie = sh_().addDays(today_(), 7);
    }
  }
}

function saveCore_(c, f, ss, table, rec) {
  var sh = ensureSheet_(ss, TABLES[table].sheet, tableKeys_(table));
  var out;
  if (rec.id) {
    var row = findRow_(sh, 'id', rec.id);
    if (row < 0) fail_('NOT_FOUND', 'Tego rekordu już nie ma (usunięty). Odśwież dane.');
    var cur = readRow_(sh, row);
    if (rec._ver && cur.zmieniono && cur.zmieniono !== rec._ver) {
      fail_('CONFLICT', (cur.zmienil || 'Ktoś') + ' zmienił(a) ten rekord w międzyczasie. Odśwież dane i nanieś zmianę jeszcze raz.');
    }
    var clean = cleanRecord_(table, rec);
    out = {};
    Object.keys(cur).forEach(function (k) { out[k] = cur[k]; });
    Object.keys(clean).forEach(function (k) { out[k] = clean[k]; });
    autoFields_(c, f, table, out, cur);
    checkRequired_(table, out);
    var ch = diff_(cur, out);
    if (Object.keys(ch).length) {
      out.zmieniono = nowIso_(); out.zmienil = c.email;
      writeRow_(sh, row, out);
      log_(ss, c.email, table, out.id, 'zmiana', ch);
    }
  } else {
    out = buildNew_(c, f, table, rec);
    autoFields_(c, f, table, out, null);
    checkRequired_(table, out);
    appendRows_(sh, [out]);
    log_(ss, c.email, table, out.id, 'utworzenie', null);
  }
  out.kancelaria = f.kod;
  return out;
}

function apiSave(table, rec) {
  var c = ctx_();
  if (!TABLES[table]) fail_('BAD_TABLE', 'Nieznana tabela.');
  if (table === 'komentarze') fail_('FORBIDDEN', 'Komentarze dodaje się przy zadaniu.');
  var f = requireFirm_(c, rec && rec.kancelaria, true);
  var out = withLock_(function () {
    var ss = SpreadsheetApp.openById(f.db_id);
    var r = saveCore_(c, f, ss, table, rec);
    if (r._assigned) r._teczka = teczkaOf_(ss, r.sprawa_id);
    return r;
  });
  var mailed = out._assigned ? notifyTask_(c, f, out, 'nowe', out.przypisane, out.opis || '', out._teczka) : null;
  delete out._assigned; delete out._teczka;
  if (mailed !== null) out._powiadomiono = mailed;
  return out;
}

/* Co odwołuje się do rekordu — usuwanie blokowane, żeby nie zostawić „sierot”. */
var REFS_ = {
  klienci: [['sprawy', 'klient_id'], ['umowy', 'klient_id']],
  sprawy: [['terminy', 'sprawa_id'], ['zadania', 'sprawa_id'], ['korespondencja', 'sprawa_id'], ['czynnosci', 'sprawa_id'], ['rozliczenia', 'sprawa_id'], ['umowy', 'sprawa_id']],
  terminy: [['zadania', 'termin_id']],
  zadania: [['komentarze', 'zadanie_id']]
};

function apiDelete(table, firm, id) {
  var c = ctx_();
  if (!TABLES[table]) fail_('BAD_TABLE', 'Nieznana tabela.');
  var f = requireFirm_(c, firm, true);
  if (table === 'komentarze' && !c.perm.admin) fail_('FORBIDDEN', 'Komentarze usuwa tylko administrator.');
  if (table !== 'zadania' && !c.perm.del) fail_('FORBIDDEN', 'Twoja rola nie pozwala usuwać.');
  return withLock_(function () {
    var ss = SpreadsheetApp.openById(f.db_id);
    if (table === 'zadania' && !c.perm.admin) {
      var shz = ensureSheet_(ss, TABLES.zadania.sheet, tableKeys_('zadania')), rz = findRow_(shz, 'id', id);
      var tz = rz > 0 ? readRow_(shz, rz) : null;
      if (tz && !(tz.utworzyl === c.email && tz.status === 'Nowe')) fail_('FORBIDDEN', 'Usunąć można tylko własne, jeszcze nieprzyjęte zadanie. Pozostałe anuluj.');
    }
    var refs = REFS_[table] || [];
    if (refs.length) {
      var got = readTables_(ss, refs.map(function (r) { return r[0]; }));
      refs.forEach(function (r) {
        var n = (got[r[0]] || []).filter(function (x) { return x[r[1]] === id; }).length;
        if (n) fail_('IN_USE', 'Nie można usunąć: powiązane rekordy w „' + TABLES[r[0]].label + '” (' + n + '). Najpierw je usuń albo przepnij.');
      });
    }
    var sh = ensureSheet_(ss, TABLES[table].sheet, tableKeys_(table));
    var row = findRow_(sh, 'id', id);
    if (row < 0) return { ok: true };
    var snap = readRow_(sh, row);
    sh.deleteRow(row);
    log_(ss, c.email, table, id, 'usunięcie', snap);
    return { ok: true };
  });
}

/* Zapytanie przyjęte → klient (jeśli go nie ma) + sprawa + status „wygrany”. */
function apiAccept(firm, zapId, p) {
  var c = ctx_();
  var f = requireFirm_(c, firm, true);
  p = p || {};
  return withLock_(function () {
    var ss = SpreadsheetApp.openById(f.db_id);
    var sz = ensureSheet_(ss, TABLES.zapytania.sheet, tableKeys_('zapytania'));
    var row = findRow_(sz, 'id', zapId);
    if (row < 0) fail_('NOT_FOUND', 'Nie ma takiego zapytania.');
    var z = readRow_(sz, row);
    var klientId = p.klient_id || z.klient_id, klient = null;
    if (!klientId) {
      klient = saveCore_(c, f, ss, 'klienci', {
        nazwa: z.nazwa, email: z.email, telefon: z.telefon, opiekun: p.prowadzacy || z.opiekun || c.email,
        zrodlo: z.kanal === 'Formularz www' ? 'Formularz www' : (z.kanal === 'Polecenie' ? 'Polecenie' : z.kanal === 'Calendly' ? 'Calendly' : z.kanal === 'Telefon' ? 'Telefon' : 'E-mail')
      });
      klientId = klient.id;
    }
    var sprawa = saveCore_(c, f, ss, 'sprawy', {
      numer: p.numer || '', tytul: p.tytul || z.kategoria || 'Nowa sprawa', klient_id: klientId,
      kategoria: p.kategoria || z.kategoria, rodzaj: p.rodzaj || '', status: dictFirst_(c, f.kod, 'status_sprawy', 'open'),
      etap: p.etap || '', prowadzacy: p.prowadzacy || z.opiekun || c.email, strona_przeciwna: p.strona_przeciwna || '',
      wyn_model: p.wyn_model || z.oferta_model, wynagrodzenie: p.wynagrodzenie || z.oferta_kwota, zapytanie_id: z.id,
      notatki: z.analiza ? 'Wstępna analiza (z zapytania): ' + z.analiza : ''
    });
    if (p.folder) sprawa = createCaseFolder_(c, f, ss, sprawa);
    var zap = saveCore_(c, f, ss, 'zapytania', { id: z.id, status: dictFirst_(c, f.kod, 'status_zapytania', 'won') || 'Przyjęte', klient_id: klientId, sprawa_id: sprawa.id });
    return { klient: klient, sprawa: sprawa, zapytanie: zap };
  });
}

/* Folder sprawy według konwencji kancelarii: „(593) Imię Nazwisko - przedmiot”
   z podfolderem „0. Umowa i rozliczenia z Klientem”. */
function createCaseFolder_(c, f, ss, sprawa) {
  if (sprawa.folder) return sprawa;
  var klient = readSheet_(ss.getSheetByName(TABLES.klienci.sheet)).filter(function (k) { return k.id === sprawa.klient_id; })[0];
  var nr = sprawa.numer ? '(' + sprawa.numer + ') ' : '';
  var name = (nr + (klient ? klient.nazwa + ' - ' : '') + sprawa.tytul).replace(/[\/\\]/g, '-').slice(0, 120);
  var parent = f.folder_id ? DriveApp.getFolderById(f.folder_id) : DriveApp.getRootFolder();
  var folder = parent.createFolder(name);
  folder.createFolder('0. Umowa i rozliczenia z Klientem');
  return saveCore_(c, f, ss, 'sprawy', { id: sprawa.id, folder: folder.getUrl() });
}

function apiFolder(firm, sprawaId) {
  var c = ctx_();
  var f = requireFirm_(c, firm, true);
  return withLock_(function () {
    var ss = SpreadsheetApp.openById(f.db_id);
    var sh = ensureSheet_(ss, TABLES.sprawy.sheet, tableKeys_('sprawy'));
    var row = findRow_(sh, 'id', sprawaId);
    if (row < 0) fail_('NOT_FOUND', 'Nie ma takiej sprawy.');
    var s = readRow_(sh, row);
    s.kancelaria = f.kod;
    return createCaseFolder_(c, f, ss, s);
  });
}

function apiHistory(firm, table, id) {
  var c = ctx_();
  var f = requireFirm_(c, firm, false);
  var rows = readSheet_(SpreadsheetApp.openById(f.db_id).getSheetByName(HISTORY_SHEET));
  return rows.filter(function (r) { return r.tabela === table && r.rekord === id; }).reverse().slice(0, 100);
}

/* Wątki Gmaila z adresami klienta — ze skrzynki osoby zalogowanej (tylko odczyt). */
function apiGmail(emails) {
  var c = ctx_();
  var list = (emails || []).map(function (e) { return String(e).trim().toLowerCase(); })
    .filter(function (e) { return /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(e); }).slice(0, 5);
  if (!list.length) return [];
  if (typeof Gmail === 'undefined') fail_('NO_GMAIL', 'Usługa Gmail nie jest włączona w projekcie.');
  var q = '{' + list.map(function (e) { return 'from:' + e + ' to:' + e + ' cc:' + e; }).join(' ') + '}';
  var res = Gmail.Users.Threads.list('me', { q: q, maxResults: 12 });
  var dec = function (s) { return String(s || '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); };
  return (res.threads || []).map(function (t) {
    var th = Gmail.Users.Threads.get('me', t.id, { format: 'metadata', metadataHeaders: ['Subject', 'From', 'Date'] });
    var msgs = th.messages || [], first = msgs[0] || {}, last = msgs[msgs.length - 1] || {};
    var hdr = function (m, n) { return ((m.payload && m.payload.headers) || []).filter(function (h) { return h.name === n; }).map(function (h) { return h.value; })[0] || ''; };
    return {
      id: t.id, subject: hdr(first, 'Subject') || '(bez tematu)', from: hdr(last, 'From'), count: msgs.length,
      date: last.internalDate ? Utilities.formatDate(new Date(+last.internalDate), APP.tz, "yyyy-MM-dd'T'HH:mm") : '',
      snippet: dec(last.snippet || t.snippet),
      url: 'https://mail.google.com/mail/?authuser=' + encodeURIComponent(c.login) + '#all/' + t.id
    };
  });
}
