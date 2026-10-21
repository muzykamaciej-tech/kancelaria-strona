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
  function diffDays(aYmd, bYmd) { return Math.round((parse(bYmd) - parse(aYmd)) / DAY); }

  return {
    pad: pad, parse: parse, ymdOf: ymdOf, isoOf: isoOf, easter: easter, holidays: holidays, holidayName: holidayName,
    isWorkingDay: isWorkingDay, addWorkingHours: addWorkingHours, termEnd: termEnd, addDays: addDays, diffDays: diffDays,
    WEEKDAYS: WEEKDAYS
  };
}
