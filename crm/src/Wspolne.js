/* Wspolne.js — funkcje dat używane i na serwerze, i w przeglądarce (szablon Index.html wstawia
   źródło sharedFactory_ do strony). Pracują na „ściennym” czasie polskim zapisanym jako tekst
   'RRRR-MM-DD' / 'RRRR-MM-DDTGG:MM', a rachunki robią w UTC, więc strefa serwera i przeglądarki
   nie ma znaczenia. Bez zależności od Apps Script. */

function sharedFactory_() {
  var DAY = 86400000;
  var WEEKDAYS = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymdOf(t) { var d = new Date(t); return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()); }
  function isoOf(t) { var d = new Date(t); return ymdOf(t) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()); }
  /* 'RRRR-MM-DD[THH:MM]' → milisekundy (UTC jako czas ścienny); NaN, gdy nie data. */
  function parse(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/.exec(String(s || ''));
    if (!m) return NaN;
    return Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0));
  }

  /* Wielkanoc (algorytm Meeusa/Jonesa/Butchera). */
  function easter(y) {
    var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
    var f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
    return Date.UTC(y, month - 1, day);
  }

  var holidayCache = {};
  /* Dni ustawowo wolne od pracy (ustawa z 18.01.1951; Wigilia od 2025 r.). */
  function holidays(y) {
    if (holidayCache[y]) return holidayCache[y];
    var e = easter(y), h = {};
    function fixed(m, d, name) { h[y + '-' + pad(m) + '-' + pad(d)] = name; }
    fixed(1, 1, 'Nowy Rok'); fixed(1, 6, 'Trzech Króli'); fixed(5, 1, 'Święto Pracy'); fixed(5, 3, 'Święto Konstytucji 3 Maja');
    fixed(8, 15, 'Wniebowzięcie NMP'); fixed(11, 1, 'Wszystkich Świętych'); fixed(11, 11, 'Święto Niepodległości');
    if (y >= 2025) fixed(12, 24, 'Wigilia');
    fixed(12, 25, 'Boże Narodzenie'); fixed(12, 26, 'Drugi dzień Bożego Narodzenia');
    h[ymdOf(e)] = 'Wielkanoc'; h[ymdOf(e + DAY)] = 'Poniedziałek Wielkanocny';
    h[ymdOf(e + 49 * DAY)] = 'Zielone Świątki'; h[ymdOf(e + 60 * DAY)] = 'Boże Ciało';
    holidayCache[y] = h;
    return h;
  }
  function holidayName(ymd) { return holidays(+String(ymd).slice(0, 4))[String(ymd).slice(0, 10)] || ''; }
  /* Dzień roboczy: pon.–pt. i nie święto. */
  function isWorkingDay(t) {
    var wd = new Date(t).getUTCDay();
    return wd !== 0 && wd !== 6 && !holidayName(ymdOf(t));
  }

  /* Termin „24 h robocze”: liczą się tylko godziny w dni robocze (pt. 15:00 + 24 h = pon. 15:00). */
  function addWorkingHours(startIso, hours) {
    var t = parse(startIso);
    if (isNaN(t) || !(hours > 0)) return '';
    var left = hours * 3600000;
    for (var guard = 0; guard < 400 && left > 0; guard++) {
      var dayStart = Math.floor(t / DAY) * DAY, dayEnd = dayStart + DAY;
      if (isWorkingDay(dayStart)) {
        var take = Math.min(left, dayEnd - t);
        left -= take; t += take;
      } else {
        t = dayEnd;
      }
    }
    return isoOf(t);
  }

  /* Koniec terminu (art. 111–112 i 115 KC; art. 165 § 1 KPC, art. 57 KPA, art. 83 PPSA odsyłają
     do tych samych zasad): dzień zdarzenia się nie liczy; tygodnie, miesiące i lata kończą się
     z upływem dnia odpowiadającego nazwą/datą; gdy koniec przypada w sobotę albo święto,
     termin kończy się następnego dnia, który nie jest sobotą ani świętem. Pomocniczo. */
  function termEnd(startYmd, n, unit) {
    var t0 = parse(startYmd);
    n = Math.floor(+n);
    if (isNaN(t0) || !(n > 0)) return null;
    var d = new Date(t0), end, steps = [];
    if (unit === 'd') { end = t0 + n * DAY; steps.push('dzień zdarzenia się nie liczy: ' + startYmd + ' + ' + n + ' dni'); }
    else if (unit === 'w') { end = t0 + 7 * n * DAY; steps.push(n + ' tydz. — koniec w dniu tygodnia odpowiadającym nazwą dniowi zdarzenia'); }
    else {
      var months = unit === 'y' ? 12 * n : n;
      var y = d.getUTCFullYear(), m = d.getUTCMonth() + months, day = d.getUTCDate();
      var last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
      end = Date.UTC(y, m, Math.min(day, last));
      steps.push((unit === 'y' ? n + ' r.' : n + ' mies.') + ' — koniec w dniu odpowiadającym datą' + (day > last ? ' (brak takiego dnia → ostatni dzień miesiąca)' : ''));
    }
    var raw = ymdOf(end), shifted = false;
    for (var g = 0; g < 14; g++) {
      var wd = new Date(end).getUTCDay(), hn = holidayName(ymdOf(end));
      if (wd === 6 || wd === 0 || hn) {
        steps.push(ymdOf(end) + ' to ' + (hn || WEEKDAYS[wd]) + ' → następny dzień');
        end += DAY; shifted = true;
      } else break;
    }
    return { end: ymdOf(end), raw: raw, shifted: shifted, weekday: WEEKDAYS[new Date(end).getUTCDay()], steps: steps };
  }

  function addDays(ymd, n) { var t = parse(ymd); return isNaN(t) ? '' : ymdOf(t + n * DAY); }
  /* n dni roboczych w przód (n > 0) albo wstecz (n < 0). */
  function addWorkingDays(ymd, n) {
    var t = parse(ymd), step = n < 0 ? -1 : 1, left = Math.abs(n);
    if (isNaN(t)) return '';
    while (left > 0) { t += step * DAY; if (isWorkingDay(t)) left--; }
    return ymdOf(t);
  }

  /* Czas ścienny w Polsce dla chwili UTC: CEST od ostatniej niedzieli marca 01:00 UTC
     do ostatniej niedzieli października 01:00 UTC (bez zależności od Intl). */
  function lastSunday(y, m) { var d = new Date(Date.UTC(y, m + 1, 0)); return Date.UTC(y, m, d.getUTCDate() - d.getUTCDay(), 1); }
  function warsawWall(utcMs) {
    var y = new Date(utcMs).getUTCFullYear();
    var summer = utcMs >= lastSunday(y, 2) && utcMs < lastSunday(y, 9);
    return utcMs + (summer ? 2 : 1) * 3600000;
  }

  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0142/g, 'l');
  }
  /* Nazwiska w różnych przypadkach: „Kowalska” = „Kowalskiej”, „Nowak” = „Nowakowi”. */
  function nameMatch(a, b) {
    a = norm(a); b = norm(b);
    if (!a || !b) return false;
    if (a === b) return true;
    var n = Math.min(a.length, b.length), p = 0;
    if (n < 4) return false;
    while (p < n && a[p] === b[p]) p++;
    return p >= Math.max(4, n - 3);
  }

  /* Tytuł wpisu z kalendarza: „(zrobione) TERMIN - Jan Kowalski - apelacja (593)”.
     Zwraca: czy to TERMIN, czy wykonany / odwołany, nr teczki, sygnaturę, klienta, czynność, prawnika
     (gdy tytuł kończy się „ - Imię Nazwisko” kogoś z listy names). */
  var STOP = { EPU: 1, KW: 1, SR: 1, SO: 1, SA: 1, US: 1, ZUS: 1, KRS: 1, WSA: 1, NSA: 1, SKO: 1, TERMIN: 1, PI: 1, UPO: 1, KRZ: 1 };
  function parseTermin(title, names) {
    var t = String(title || '').replace(/[\u2013\u2014]/g, '-').replace(/\s+/g, ' ').trim();
    var out = { title: t, isTermin: false, done: false, cancel: false, teczka: '', sygn: '', klient: '', czynnosc: '', prawnik: '' };
    out.done = /[(\[]\s*(?:zrobione|zrobiony|zrobiona|zrob\.?|wykonane?|wykonany)\s*[)\]]/i.test(t) || /^zrobione\b/i.test(t) || /\bzrobione$/i.test(t);
    out.cancel = /[(\[]\s*(?:odwo[lł]an[aeyio]*|nieaktualn[aeyio]*|anulowan[aeyio]*|przesuni[eę]t[aeyio]*)\s*[)\]]/i.test(t);
    var head = /^((?:[(\[][^)\]]*[)\]]\s*)*)(?:zrobione\s+)?TERMIN\b\s*[-:]?\s*/i.exec(t);
    if (!head) return out;
    out.isTermin = true;
    var rest = t.slice(head[0].length);
    var tk = /\(\s*(P\d{1,3}|\d{3,4})\s*\)|#(P?\d{1,4})\b/i.exec(rest);
    if (tk) out.teczka = String(tk[1] || tk[2]).toUpperCase();
    var sg = /\b([IVXL]{1,5})\s+([A-Z][A-Za-z]{0,4})\s+(\d{1,6})\/(\d{2,4})\b/.exec(rest);
    if (sg) out.sygn = sg[1] + ' ' + sg[2] + ' ' + sg[3] + '/' + sg[4];
    rest = rest.replace(/#P?\d{1,4}\b/gi, ' ').replace(/[(\[][^()\[\]]{0,25}[)\]]/g, ' ').replace(/\s+/g, ' ').trim();
    (names || []).some(function (nm) {
      var m = new RegExp('\\s-\\s*(' + String(nm).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\s*$', 'i').exec(rest);
      if (m) { out.prawnik = nm; rest = rest.slice(0, m.index).trim(); }
      return !!m;
    });
    var words = rest.split(' '), kl = [];
    for (var i = 0; i < words.length && kl.length < 3; i++) {
      var w = words[i];
      if (!w || w === '-') { if (kl.length) break; continue; }
      if (STOP[w.toUpperCase()] || !/^[A-ZĄĆĘŁŃÓŚŹŻ][A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ'’]+(?:-[A-ZĄĆĘŁŃÓŚŹŻ][A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ'’]+)?$/.test(w)) break;
      kl.push(w);
    }
    out.klient = kl.join(' ');
    out.czynnosc = words.slice(kl.length).join(' ').replace(/^\s*-\s*/, '').replace(/\s+-\s*$/, '').trim();
    return out;
  }

  /* Plik .ics (eksport Kalendarza Google) → wydarzenia z datą/godziną ścienną w Polsce. */
  function parseIcs(text) {
    var lines = String(text || '').replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '').split(/\r?\n/);
    var evs = [], cur = null;
    function unesc(v) { return v.replace(/\\n/gi, '\n').replace(/\\,/g, ',').replace(/\\;/g, ';').replace(/\\\\/g, '\\'); }
    function when(params, v) {
      var m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?/.exec(v);
      if (!m) return null;
      if (!m[4] || /VALUE=DATE(?!-)/i.test(params)) return { allDay: true, wall: Date.UTC(+m[1], +m[2] - 1, +m[3]) };
      var ms = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
      return { allDay: false, wall: m[7] ? warsawWall(ms) : ms };
    }
    lines.forEach(function (line) {
      if (/^BEGIN:VEVENT/i.test(line)) { cur = {}; return; }
      if (/^END:VEVENT/i.test(line)) { if (cur) evs.push(cur); cur = null; return; }
      if (!cur) return;
      var c = line.indexOf(':');
      if (c < 0) return;
      var key = line.slice(0, c), val = line.slice(c + 1), name = key.split(';')[0].toUpperCase(), params = key.slice(name.length);
      if (name === 'SUMMARY') cur.title = unesc(val);
      else if (name === 'DESCRIPTION') cur.desc = unesc(val);
      else if (name === 'UID') cur.uid = val.trim();
      else if (name === 'DTSTART') cur.s = when(params, val);
      else if (name === 'DTEND') cur.e = when(params, val);
      else if (name === 'DURATION') cur.dur = val;
      else if (name === 'RRULE') cur.recurring = true;
      else if (name === 'STATUS') cur.status = val.trim().toUpperCase();
    });
    return evs.filter(function (e) { return e.s && e.status !== 'CANCELLED'; }).map(function (e) {
      var end = e.e ? e.e.wall : NaN;
      if (isNaN(end) && e.dur) { var d = /P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?/.exec(e.dur) || []; end = e.s.wall + ((+d[1] || 0) * 24 + (+d[2] || 0)) * 3600000 + (+d[3] || 0) * 60000; }
      if (isNaN(end)) end = e.s.wall + (e.s.allDay ? DAY : 0);
      return { uid: e.uid || '', title: e.title || '', desc: e.desc || '', allDay: e.s.allDay, recurring: !!e.recurring,
        start: e.s.allDay ? ymdOf(e.s.wall) : isoOf(e.s.wall), date: ymdOf(e.s.wall), hours: Math.round((end - e.s.wall) / 360000) / 10 };
    });
  }
  function diffDays(aYmd, bYmd) { return Math.round((parse(bYmd) - parse(aYmd)) / DAY); }

  return {
    pad: pad, parse: parse, ymdOf: ymdOf, isoOf: isoOf, easter: easter, holidays: holidays, holidayName: holidayName,
    isWorkingDay: isWorkingDay, addWorkingHours: addWorkingHours, termEnd: termEnd, addDays: addDays, diffDays: diffDays,
    addWorkingDays: addWorkingDays, warsawWall: warsawWall, norm: norm, nameMatch: nameMatch, parseTermin: parseTermin, parseIcs: parseIcs,
    WEEKDAYS: WEEKDAYS
  };
}
