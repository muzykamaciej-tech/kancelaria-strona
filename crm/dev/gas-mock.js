/* gas-mock.js — symulacja usług Apps Script w pamięci (przeglądarka i Node), na potrzeby testów
   i podglądu z danymi fikcyjnymi. Odwzorowuje to, z czego korzysta CRM: arkusze z siatką
   wierszy/kolumn, Dysk z właścicielem i udostępnieniami (openById rzuca bez dostępu),
   właściwości skryptu, pamięć podręczną, blokadę, formatowanie dat w strefie Europe/Warsaw,
   Gmail (wątki) i identyfikator skryptu do sprawdzenia, kto jest jego właścicielem. */
(function (root) {
  function createGasMock(opts) {
    opts = opts || {};
    const st = { user: (opts.user || 'owner@example.com').toLowerCase(), files: {}, props: {}, cache: {}, n: 0, gmail: opts.gmail || [], triggers: [] };
    const SCRIPT_ID = 'script-' + 'x'.repeat(20);
    st.files[SCRIPT_ID] = { id: SCRIPT_ID, type: 'script', name: 'CRM Kancelarii', owner: (opts.owner || st.user).toLowerCase(), editors: new Set(), viewers: new Set(), parent: null };
    const newId = (p) => p + (++st.n).toString(36).padStart(4, '0') + Math.random().toString(36).slice(2, 10) + 'MockId0000';
    const now = () => new Date();

    function canRead(f) {
      if (!f || f.trashed) return false;
      const u = st.user;
      if (f.owner === u || f.editors.has(u) || f.viewers.has(u)) return true;
      return f.parent ? canRead(st.files[f.parent]) : false;
    }
    function canWrite(f) {
      const u = st.user;
      if (f.owner === u || f.editors.has(u)) return true;
      return f.parent ? canWrite(st.files[f.parent]) : false;
    }
    const denied = () => new Error('Nie znaleziono elementu o podanym identyfikatorze albo nie masz do niego uprawnień.');

    /* ---------- Arkusze ---------- */
    class Range {
      constructor(sheet, r, c, nr, nc) { this.sh = sheet; this.r = r; this.c = c; this.nr = nr; this.nc = nc; }
      getValues() {
        const out = [];
        for (let i = 0; i < this.nr; i++) {
          const row = this.sh.data[this.r - 1 + i] || [];
          const o = [];
          for (let j = 0; j < this.nc; j++) { const v = row[this.c - 1 + j]; o.push(v === undefined ? '' : v); }
          out.push(o);
        }
        return out;
      }
      setValues(vals) {
        this.sh.ss._assertWrite();
        if (vals.length !== this.nr || vals.some((r) => r.length !== this.nc)) throw new Error('Liczba wierszy/kolumn danych nie pasuje do zakresu.');
        for (let i = 0; i < this.nr; i++) {
          const ri = this.r - 1 + i;
          while (this.sh.data.length <= ri) this.sh.data.push([]);
          for (let j = 0; j < this.nc; j++) this.sh.data[ri][this.c - 1 + j] = vals[i][j] === null || vals[i][j] === undefined ? '' : vals[i][j];
        }
        return this;
      }
      clearContent() { this.sh.ss._assertWrite(); return this.setValues(Array.from({ length: this.nr }, () => Array(this.nc).fill(''))); }
      getBackgrounds() { return Array.from({ length: this.nr }, (_, i) => Array.from({ length: this.nc }, (_, j) => (this.sh.bg[(this.r + i) + ':' + (this.c + j)] || '#ffffff'))); }
      setNumberFormat() { return this; }
      setFontWeight() { return this; }
      setBackground() { return this; }
    }
    class Sheet {
      constructor(ss, name) { this.ss = ss; this.name = name; this.data = []; this.maxRows = 1000; this.maxCols = 26; this.bg = {}; }
      getName() { return this.name; }
      setName(n) { this.name = n; return this; }
      getParent() { return this.ss; }
      getLastRow() { for (let i = this.data.length - 1; i >= 0; i--) if ((this.data[i] || []).some((v) => v !== '' && v !== undefined)) return i + 1; return 0; }
      getLastColumn() { let m = 0; this.data.forEach((r) => { for (let j = (r || []).length - 1; j >= 0; j--) if (r[j] !== '' && r[j] !== undefined) { m = Math.max(m, j + 1); break; } }); return m; }
      getMaxRows() { return this.maxRows; }
      getMaxColumns() { return this.maxCols; }
      insertRowsAfter(after, n) { this.ss._assertWrite(); this.data.splice(after, 0, ...Array.from({ length: n }, () => [])); this.maxRows += n; return this; }
      insertColumnsAfter(after, n) { this.ss._assertWrite(); this.maxCols += n; return this; }
      getRange(r, c, nr, nc) {
        nr = nr || 1; nc = nc || 1;
        if (r < 1 || c < 1 || r + nr - 1 > this.maxRows || c + nc - 1 > this.maxCols) throw new Error('Współrzędne zakresu wykraczają poza wymiary arkusza.');
        return new Range(this, r, c, nr, nc);
      }
      getDataRange() { return this.getRange(1, 1, Math.max(this.getLastRow(), 1), Math.max(this.getLastColumn(), 1)); }
      setFrozenRows() { return this; }
      protect() { const p = { setDescription: () => p, setWarningOnly: (v) => { this.warningOnly = v; return p; } }; return p; }
      deleteRow(r) { this.ss._assertWrite(); this.data.splice(r - 1, 1); this.maxRows--; return this; }
    }
    class Spreadsheet {
      constructor(file) { this.file = file; this.sheets = [new Sheet(this, 'Arkusz1')]; }
      _assertWrite() { if (!canWrite(this.file)) throw new Error('Nie masz uprawnień do edycji arkusza „' + this.file.name + '”.'); }
      getId() { return this.file.id; }
      getName() { return this.file.name; }
      getUrl() { return 'https://docs.google.com/spreadsheets/d/' + this.file.id + '/edit'; }
      getSheetByName(n) { return this.sheets.find((s) => s.name === n) || null; }
      getSheets() { return this.sheets.slice(); }
      insertSheet(n) { this._assertWrite(); const s = new Sheet(this, n); this.sheets.push(s); return s; }
      deleteSheet(s) { this._assertWrite(); this.sheets = this.sheets.filter((x) => x !== s); }
    }
    const SpreadsheetApp = {
      create(name) {
        const f = { id: newId('ss'), type: 'sheet', name, owner: st.user, editors: new Set(), viewers: new Set(), parent: null, created: now() };
        f.ss = new Spreadsheet(f);
        st.files[f.id] = f;
        return f.ss;
      },
      openById(id) { const f = st.files[id]; if (!f || f.type !== 'sheet' || !canRead(f)) throw denied(); return f.ss; },
      flush() {}
    };

    /* ---------- Dysk ---------- */
    const iter = (list) => { let i = 0; return { hasNext: () => i < list.length, next: () => list[i++] }; };
    function fileObj(f) {
      const o = {
        getId: () => f.id, getName: () => f.name, getMimeType: () => (f.type === 'sheet' ? 'application/vnd.google-apps.spreadsheet' : f.type === 'folder' ? 'application/vnd.google-apps.folder' : f.mime || 'text/plain'),
        getUrl: () => (f.type === 'folder' ? 'https://drive.google.com/drive/folders/' + f.id : f.type === 'sheet' ? f.ss.getUrl() : 'https://drive.google.com/file/d/' + f.id + '/view'),
        getDateCreated: () => f.created || now(),
        moveTo: (folder) => { if (!canWrite(f)) throw denied(); f.parent = folder.getId(); return o; },
        addEditor: (e) => { if (!canWrite(f)) throw denied(); f.viewers.delete(e.toLowerCase()); f.editors.add(e.toLowerCase()); return o; },
        addViewer: (e) => { if (!canWrite(f)) throw denied(); if (!f.editors.has(e.toLowerCase())) f.viewers.add(e.toLowerCase()); return o; },
        removeEditor: (e) => { if (!canWrite(f)) throw denied(); f.editors.delete(e.toLowerCase()); return o; },
        removeViewer: (e) => { if (!canWrite(f)) throw denied(); f.viewers.delete(e.toLowerCase()); return o; },
        setTrashed: (v) => { f.trashed = !!v; return o; },
        getBlob: () => ({ getDataAsString: () => f.content || '' }),
        _f: f
      };
      if (f.type === 'folder') {
        const kids = (type) => Object.values(st.files).filter((x) => x.parent === f.id && x.type === type && canRead(x) && !x.trashed).map(fileObj);
        o.createFolder = (name) => { if (!canWrite(f)) throw denied(); const n = { id: newId('fo'), type: 'folder', name, owner: st.user, editors: new Set(), viewers: new Set(), parent: f.id, created: now() }; st.files[n.id] = n; return fileObj(n); };
        o.createFile = (name, content, mime) => { const n = { id: newId('fi'), type: 'file', name, content, mime, owner: st.user, editors: new Set(), viewers: new Set(), parent: f.id, created: now() }; st.files[n.id] = n; return fileObj(n); };
        o.getFolders = () => iter(kids('folder'));
        o.getFiles = () => iter(kids('file').concat(kids('sheet')));
        o.getFilesByName = (name) => iter(kids('file').filter((x) => x.getName() === name));
      }
      return o;
    }
    const DriveApp = {
      createFolder(name) { const f = { id: newId('fo'), type: 'folder', name, owner: st.user, editors: new Set(), viewers: new Set(), parent: null, created: now() }; st.files[f.id] = f; return fileObj(f); },
      getFileById(id) { const f = st.files[id]; if (!f || !canRead(f)) throw denied(); return fileObj(f); },
      getFolderById(id) { const f = st.files[id]; if (!f || f.type !== 'folder' || !canRead(f)) throw denied(); return fileObj(f); },
      getFoldersByName(name) { return iter(Object.values(st.files).filter((f) => f.type === 'folder' && f.name === name && canRead(f) && !f.trashed).map(fileObj)); },
      searchFiles(q) { const m = /title contains '([^']+)'/.exec(q || ''); return iter(Object.values(st.files).filter((f) => f.type !== 'folder' && m && f.name.indexOf(m[1]) >= 0 && canRead(f) && !f.trashed).map(fileObj)); },
      getRootFolder() { return DriveApp.createFolder('Mój dysk'); }
    };

    /* ---------- Pozostałe usługi ---------- */
    const props = {
      getProperty: (k) => (k in st.props ? st.props[k] : null), setProperty: (k, v) => { st.props[k] = String(v); return props; },
      setProperties: (o) => { Object.keys(o).forEach((k) => { st.props[k] = String(o[k]); }); return props; }, getProperties: () => Object.assign({}, st.props),
      deleteProperty: (k) => { delete st.props[k]; return props; }
    };
    const cache = { get: (k) => (k in st.cache ? st.cache[k] : null), put: (k, v) => { st.cache[k] = v; }, remove: (k) => { delete st.cache[k]; } };
    const fmtParts = (d) => {
      const p = {};
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' })
        .formatToParts(d).forEach((x) => { p[x.type] = x.value; });
      p.SSS = String(d.getMilliseconds()).padStart(3, '0');
      return p;
    };
    const Utilities = {
      formatDate(d, tz, fmt) {
        const p = fmtParts(d);
        return fmt.replace(/'([^']*)'|yyyy|MM|dd|HH|mm|ss|SSS/g, (m, lit) => (lit !== undefined ? lit : { yyyy: p.year, MM: p.month, dd: p.day, HH: p.hour, mm: p.minute, ss: p.second, SSS: p.SSS }[m]));
      },
      getUuid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, () => Math.floor(Math.random() * 16).toString(16))
    };
    const triggerBuilder = () => { const b = { timeBased: () => b, everyMinutes: () => b, create: () => { st.triggers.push(b); return b; } }; return b; };
    const ScriptApp = {
      getScriptId: () => SCRIPT_ID, getService: () => ({ getUrl: () => 'https://script.google.com/macros/s/PODGLAD/exec' }),
      newTrigger: () => triggerBuilder(), getProjectTriggers: () => [], deleteTrigger: () => {}
    };
    const header = (n, v) => ({ name: n, value: v });
    const Gmail = {
      Users: {
        Threads: {
          list(me, o) {
            const emails = ((o && o.q) || '').match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || [];
            const th = st.gmail.filter((t) => emails.some((e) => t.with.toLowerCase() === e.toLowerCase()));
            return { threads: th.map((t) => ({ id: t.id, snippet: t.snippet })) };
          },
          get(me, id) {
            const t = st.gmail.find((x) => x.id === id);
            return { id, messages: t.messages.map((m) => ({ snippet: m.snippet || t.snippet, internalDate: String(new Date(m.date).getTime()), payload: { headers: [header('Subject', t.subject), header('From', m.from), header('Date', m.date)] } })) };
          }
        }
      }
    };
    /* ---------- Kalendarz (odczyt) i poczta (powiadomienia) ----------
       Kalendarz: { id: { name, owner, readers: [], events: [{ id, title, description, allDay, start, end }] } };
       getCalendarById zwraca null bez dostępu, jak prawdziwy CalendarApp. */
    st.calendars = opts.calendars || {};
    st.sent = [];
    const evObj = (e) => ({
      getId: () => e.id, getTitle: () => e.title, getDescription: () => e.description || '', getLocation: () => e.location || '',
      isAllDayEvent: () => !!e.allDay, getAllDayStartDate: () => new Date(e.start), getStartTime: () => new Date(e.start),
      getEndTime: () => new Date(e.end || e.start), getColor: () => e.color || '', getLastUpdated: () => new Date(e.updated || e.start)
    });
    const calObj = (c, id) => ({
      getId: () => id, getName: () => c.name,
      getEvents: (from, to) => c.events.filter((e) => new Date(e.start) < to && new Date(e.end || e.start) >= from).map(evObj)
    });
    const calAccess = (c) => c && (c.owner === st.user || (c.readers || []).indexOf(st.user) >= 0);
    const CalendarApp = {
      getCalendarById: (id) => (calAccess(st.calendars[id]) ? calObj(st.calendars[id], id) : null),
      getAllCalendars: () => Object.keys(st.calendars).filter((id) => calAccess(st.calendars[id])).map((id) => calObj(st.calendars[id], id)),
      getDefaultCalendar: () => calObj(st.calendars[st.user] || (st.calendars[st.user] = { name: st.user, owner: st.user, events: [] }), st.user)
    };
    /* Usługa zaawansowana Calendar v3: widzi każdy kalendarz udostępniony kontu. */
    const ymdAdd = (ymd, n) => new Date(Date.parse(ymd + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
    const Calendar = {
      Calendars: { get: (id) => { const c = st.calendars[id]; if (!calAccess(c)) throw new Error('API call to calendar.calendars.get failed with error: Not Found'); return { id, summary: c.name }; } },
      Events: {
        list: (id, o) => {
          const c = st.calendars[id];
          if (!calAccess(c)) throw new Error('API call to calendar.events.list failed with error: Not Found');
          const from = new Date(o.timeMin), to = new Date(o.timeMax);
          const items = c.events.filter((e) => new Date(e.start) < to && new Date(e.end || e.start) >= from).map((e) => {
            const days = Math.max(1, Math.round((new Date(e.end || e.start) - new Date(e.start)) / 86400000));
            return { id: String(e.id).replace(/@.*/, ''), iCalUID: e.id, summary: e.title, description: e.description, status: e.status || 'confirmed', recurringEventId: e.recurringEventId,
              start: e.allDay ? { date: e.start.slice(0, 10) } : { dateTime: e.start }, end: e.allDay ? { date: ymdAdd(e.start.slice(0, 10), days) } : { dateTime: e.end || e.start } };
          });
          const off = +(o.pageToken || 0), n = Math.min(o.maxResults || 250, st.calPage || 2500);
          return { items: items.slice(off, off + n), nextPageToken: off + n < items.length ? String(off + n) : undefined };
        }
      }
    };
    const MailApp = {
      sendEmail: (o) => { if (!o || !o.to) throw new Error('Brak adresata.'); st.sent.push(Object.assign({ from: st.user }, o)); },
      getRemainingDailyQuota: () => 100
    };
    return {
      st,
      setUser(e) { st.user = String(e).toLowerCase(); },
      globals: {
        SpreadsheetApp, DriveApp, Utilities, ScriptApp, Gmail, Calendar, CalendarApp, MailApp,
        Session: { getActiveUser: () => ({ getEmail: () => st.user }), getEffectiveUser: () => ({ getEmail: () => st.user }) },
        PropertiesService: { getScriptProperties: () => props },
        CacheService: { getScriptCache: () => cache },
        LockService: { getScriptLock: () => ({ tryLock: () => true, waitLock: () => {}, releaseLock: () => {} }) },
        MimeType: { GOOGLE_SHEETS: 'application/vnd.google-apps.spreadsheet', PLAIN_TEXT: 'text/plain' },
        HtmlService: null
      }
    };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { createGasMock };
  else root.createGasMock = createGasMock;
})(this);
