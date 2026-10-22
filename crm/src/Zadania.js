/* Zadania.js — delegowanie zadań w zespole: kto może co zrobić z zadaniem, przejścia statusów
   (Nowe → W toku → [Do sprawdzenia] → Zrobione / Anulowane), komentarze i powiadomienia e-mail.
   Aplikacja działa z uprawnieniami osoby, która ją otwiera, więc te reguły obowiązują w aplikacji;
   ręczna edycja arkusza pokazuje ostrzeżenie, a każda zmiana trafia do Historii. */

/* Adresat zadania: aktywny członek zespołu z dostępem do tej kancelarii i prawem zapisu. */
function checkAssignee_(c, f, email) {
  var m = memberOf_(c.s, email);
  if (!m) fail_('INVALID', 'Osoby „' + email + '” nie ma w aktywnym zespole.');
  if (splitList_(m.kancelarie).indexOf(f.kod) < 0) fail_('INVALID', m.imie_nazwisko + ' nie ma dostępu do kancelarii ' + f.kod + ', więc nie może dostać tego zadania.');
  if (!ROLES[m.rola] || !ROLES[m.rola].write) fail_('INVALID', m.imie_nazwisko + ' ma dostęp tylko do odczytu.');
  return m;
}

/* Zadanie zmienia osoba, która je wykonuje, zleciła albo założyła, oraz administrator. */
function taskCanTouch_(c, t) {
  return !!(c.perm.admin || [t.przypisane, t.zlecil, t.utworzyl].indexOf(c.email) >= 0);
}

/* Z autoFields_: nowe zadanie albo zmiana osoby w formularzu = przekazanie. */
function taskAuto_(c, f, rec, before) {
  if (before && !taskCanTouch_(c, before)) fail_('FORBIDDEN', 'To zadanie zmienia osoba, która je wykonuje albo zleciła, lub administrator.');
  var to = String(rec.przypisane || '').toLowerCase();
  if (!before || before.przypisane !== to) {
    var m = checkAssignee_(c, f, to);
    rec.przypisane = m.email;
    rec.zlecil = c.email;
    rec.przekazano = nowMinute_();
    rec.status = m.email === c.email ? 'W toku' : 'Nowe';
    rec.wykonano = ''; rec.wykonal = '';
    if (m.email !== c.email) rec._assigned = 1;
  }
  if (!rec.status) rec.status = 'Nowe';
}

function teczkaOf_(ss, sprawaId) {
  if (!sprawaId) return '';
  var sh = ss.getSheetByName(TABLES.sprawy.sheet);
  var row = sh ? findRow_(sh, 'id', sprawaId) : -1;
  return row > 0 ? readRow_(sh, row).numer : '';
}

/* Akcje na zadaniu. p: { _ver, komentarz, do (e-mail adresata przy przekazaniu), termin }. */
function apiTask(firm, id, action, p) {
  var c = ctx_();
  var f = requireFirm_(c, firm, true);
  p = p || {};
  var note = String(p.komentarz || '').trim().slice(0, 5000);
  var res = withLock_(function () {
    var ss = SpreadsheetApp.openById(f.db_id);
    var sh = ensureSheet_(ss, TABLES.zadania.sheet, tableKeys_('zadania'));
    var row = findRow_(sh, 'id', id);
    if (row < 0) fail_('NOT_FOUND', 'Tego zadania już nie ma. Odśwież dane.');
    var t = readRow_(sh, row);
    if (p._ver && t.zmieniono && t.zmieniono !== p._ver) fail_('CONFLICT', 'Ktoś zmienił to zadanie w międzyczasie. Odśwież dane i spróbuj jeszcze raz.');
    var me = c.email, admin = !!c.perm.admin, now = nowMinute_();
    var next = {}, notify = null, comment = '';
    Object.keys(t).forEach(function (k) { next[k] = t[k]; });
    var need = function (ok, msg) { if (!ok) fail_('FORBIDDEN', msg); };
    var open = TASK_OPEN.indexOf(t.status) >= 0;
    var needNote = function (what) { if (!note) fail_('INVALID', 'Dopisz komentarz: ' + what + '.'); };
    switch (action) {
      case 'przyjmij':
        need(t.status === 'Nowe', 'To zadanie nie czeka na przyjęcie.');
        need(t.przypisane === me || admin, 'Przyjmuje osoba, której zlecono zadanie.');
        next.status = 'W toku';
        break;
      case 'zrobione':
        need(t.status === 'Nowe' || t.status === 'W toku', 'To zadanie jest zamknięte albo czeka na sprawdzenie.');
        need(t.przypisane === me || t.zlecil === me || admin, 'Zamyka osoba, która wykonuje albo zleciła zadanie, lub administrator.');
        if (t.sprawdzenie && t.zlecil && t.zlecil !== t.przypisane && t.zlecil !== me) {
          next.status = 'Do sprawdzenia';
          notify = { to: t.zlecil, kind: 'sprawdz' };
          comment = note ? 'Do sprawdzenia: ' + note : '';
        } else {
          next.status = 'Zrobione'; next.wykonano = now; next.wykonal = t.przypisane || me;
          if (t.zlecil && t.zlecil !== me) notify = { to: t.zlecil, kind: 'zrobione' };
          comment = note;
        }
        break;
      case 'zatwierdz':
        need(t.status === 'Do sprawdzenia', 'To zadanie nie czeka na sprawdzenie.');
        need(t.zlecil === me || admin, 'Zatwierdza osoba, która zleciła zadanie, albo administrator.');
        next.status = 'Zrobione'; next.wykonano = now; next.wykonal = t.przypisane;
        comment = note ? 'Zatwierdzone: ' + note : '';
        break;
      case 'zwroc':
        need(t.status === 'Do sprawdzenia', 'To zadanie nie czeka na sprawdzenie.');
        need(t.zlecil === me || admin, 'Zwraca osoba, która zleciła zadanie, albo administrator.');
        needNote('co poprawić');
        next.status = 'W toku';
        comment = 'Do poprawy: ' + note;
        notify = { to: t.przypisane, kind: 'zwrot' };
        break;
      case 'przekaz': {
        need(open, 'Zamkniętego zadania nie da się przekazać. Najpierw otwórz je ponownie.');
        need(taskCanTouch_(c, t), 'Przekazuje osoba, która wykonuje albo zleciła zadanie, lub administrator.');
        var m = checkAssignee_(c, f, String(p.do || '').toLowerCase());
        if (m.email === t.przypisane) fail_('INVALID', 'To zadanie już jest u tej osoby.');
        next.przypisane = m.email; next.zlecil = me; next.przekazano = now;
        next.status = m.email === me ? 'W toku' : 'Nowe';
        comment = 'Przekazane: ' + m.imie_nazwisko + (note ? ' — ' + note : '');
        if (m.email !== me) notify = { to: m.email, kind: 'nowe' };
        break;
      }
      case 'odrzuc': {
        need(t.status === 'Nowe', 'Odrzucić można tylko nieprzyjęte zadanie.');
        need(t.przypisane === me || admin, 'Odrzuca osoba, której zlecono zadanie.');
        needNote('dlaczego');
        var back = t.zlecil && t.zlecil !== t.przypisane ? t.zlecil : '';
        need(!!back, 'Nie ma komu oddać tego zadania. Przekaż je albo poproś zlecającego o anulowanie.');
        next.przypisane = back; next.zlecil = me; next.przekazano = now; next.status = 'Nowe';
        comment = 'Odrzucone: ' + note;
        notify = { to: back, kind: 'odrzucone' };
        break;
      }
      case 'anuluj':
        need(open, 'To zadanie jest już zamknięte.');
        need(t.zlecil === me || t.utworzyl === me || admin, 'Anuluje osoba, która zleciła zadanie, albo administrator.');
        next.status = 'Anulowane'; next.wykonano = now; next.wykonal = '';
        comment = 'Anulowane' + (note ? ': ' + note : '');
        if (t.przypisane && t.przypisane !== me) notify = { to: t.przypisane, kind: 'anulowane' };
        break;
      case 'otworz':
        need(!open, 'To zadanie jest otwarte.');
        need(taskCanTouch_(c, t), 'Otwiera osoba, która wykonywała albo zleciła zadanie, lub administrator.');
        next.status = t.przypisane === me ? 'W toku' : 'Nowe'; next.wykonano = ''; next.wykonal = '';
        comment = note ? 'Ponownie otwarte: ' + note : '';
        break;
      case 'przesun':
        need(taskCanTouch_(c, t), 'Termin zmienia osoba, która wykonuje albo zleciła zadanie, lub administrator.');
        if (p.termin && isNaN(sh_().parse(p.termin))) fail_('INVALID', 'Niepoprawna data.');
        next.termin = String(p.termin || '');
        comment = note;
        break;
      case 'komentarz':
        needNote('treść');
        comment = note;
        var other = t.przypisane === me ? t.zlecil : t.przypisane;
        if (other && other !== me) notify = { to: other, kind: 'komentarz' };
        break;
      default:
        fail_('INVALID', 'Nieznana akcja: ' + action);
    }
    var ch = diff_(t, next);
    if (Object.keys(ch).length) {
      next.zmieniono = nowIso_(); next.zmienil = me;
      writeRow_(sh, row, next);
      log_(ss, me, 'zadania', id, action, ch);
    }
    var kom = comment ? saveCore_(c, f, ss, 'komentarze', { zadanie_id: id, tresc: comment.slice(0, 5000) }) : null;
    if (notify) notify.teczka = teczkaOf_(ss, next.sprawa_id);
    next.kancelaria = f.kod;
    return { zadanie: next, komentarz: kom, notify: notify };
  });
  if (res.notify) notifyTask_(c, f, res.zadanie, res.notify.kind, res.notify.to, note, res.notify.teczka);
  delete res.notify;
  return res;
}

var NOTIFY_SUBJECT_ = {
  nowe: 'Nowe zadanie', sprawdz: 'Do sprawdzenia', zrobione: 'Zrobione', zwrot: 'Do poprawy',
  odrzucone: 'Odrzucone zadanie', anulowane: 'Anulowane zadanie', komentarz: 'Komentarz do zadania'
};

/* E-mail z konta osoby, która wykonała akcję. Tylko na konta w domenach kancelarii
   (allowedDomains_) i tylko do osób, które nie wyłączyły powiadomień. Treść: tytuł, termin,
   numer teczki i link do CRM — bez opisu sprawy. Błąd wysyłki nie cofa zapisu. */
function notifyTask_(c, f, t, kind, to, note, teczka) {
  try {
    if (!to || to === c.email || typeof MailApp === 'undefined') return false;
    var m = memberOf_(c.s, to);
    if (!m || m.powiadomienia === 'nie' || !emailAllowed_(c.s.kancelarie, m.email)) return false;
    var url = ScriptApp.getService().getUrl() + '#zadanie/' + f.kod + '/' + t.id;
    var body = [
      (c.member.imie_nazwisko || c.email) + ': ' + NOTIFY_SUBJECT_[kind].toLowerCase() + ' (' + f.nazwa_krotka + ')', '',
      t.tytul,
      t.termin ? 'Do kiedy: ' + t.termin : '',
      teczka ? 'Sprawa: teczka ' + (/^\d+$/.test(teczka) ? '(' + teczka + ')' : teczka) : '',
      note && kind !== 'nowe' ? '\nKomentarz: ' + note : (note ? '\n' + note : ''),
      '', 'Otwórz w CRM: ' + url
    ].filter(function (x, i) { return x !== '' || i === 1 || i === 6; }).join('\n');
    MailApp.sendEmail({ to: m.email, subject: '[CRM ' + f.kod + '] ' + NOTIFY_SUBJECT_[kind] + ': ' + String(t.tytul).slice(0, 90), body: body, name: 'CRM Kancelarii' });
    return true;
  } catch (e) {
    console.warn('Powiadomienie nie wysłane: ' + e);
    return false;
  }
}
