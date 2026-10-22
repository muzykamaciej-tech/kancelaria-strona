/* Konfiguracja.js — schemat danych CRM: jedno źródło prawdy dla serwera i przeglądarki.
   Każda tabela to zakładka w arkuszu bazy danej kancelarii (osobny arkusz na kancelarię),
   wiersz 1 = klucze pól. Brakujące kolumny są dopisywane automatycznie, więc nowe pola
   w schemacie nie wymagają ręcznej migracji arkuszy. */

var APP = { name: 'CRM Kancelarii', version: '0.2.1', tz: 'Europe/Warsaw', prepDays: 3, calendarId: 'sekretariat@kancelariarodzinna.com' };

var ROLES = {
  admin:    { label: 'Administrator', write: true, del: true, admin: true },
  prawnik:  { label: 'Pełna edycja', write: true, del: true },
  asystent: { label: 'Edycja bez usuwania', write: true, del: false },
  odczyt:   { label: 'Tylko odczyt', write: false, del: false }
};

/* Stanowisko opisuje miejsce w zespole (grupowanie, domyślne „wraca do sprawdzenia”),
   rola — uprawnienia w aplikacji. */
var STANOWISKA = ['Wspólnik', 'Starszy prawnik', 'Młodszy prawnik', 'Sekretariat', 'Współpracownik'];

/* Statusy zadań: przejścia pilnuje serwer (Zadania.js), formularz ich nie zmienia. */
var TASK_STATUSES = ['Nowe', 'W toku', 'Do sprawdzenia', 'Zrobione', 'Anulowane'];
var TASK_OPEN = ['Nowe', 'W toku', 'Do sprawdzenia'];

/* Pola systemowe dopisywane do każdej tabeli danych. */
var SYS_FIELDS = ['id', 'utworzono', 'utworzyl', 'zmieniono', 'zmienil'];

/* Typy pól: text, textarea, email, tel, url, number, money, date, datetime, time, check,
   select (opts albo dict), user, users, ref (tabela). auto = ustawia serwer, nie ma w formularzu. */
var TABLES = {
  klienci: {
    sheet: 'Klienci', label: 'Klienci', one: 'klient', title: 'nazwa',
    fields: [
      { k: 'nazwa', l: 'Imię i nazwisko / nazwa', t: 'text', req: true, wide: true },
      { k: 'typ', l: 'Typ', t: 'select', opts: ['Osoba fizyczna', 'Przedsiębiorca', 'Spółka / firma', 'Wspólnota / spółdzielnia', 'Gmina / urząd', 'Inny'], def: 'Osoba fizyczna' },
      { k: 'zrodlo', l: 'Skąd przyszedł', t: 'select', dict: 'zrodlo' },
      { k: 'email', l: 'E-mail', t: 'email' },
      { k: 'telefon', l: 'Telefon', t: 'tel' },
      { k: 'adres', l: 'Adres do korespondencji', t: 'textarea', wide: true },
      { k: 'identyfikator', l: 'PESEL / NIP / KRS', t: 'text', help: 'Tylko gdy potrzebny (umowa etapowa, pozew, faktura).' },
      { k: 'opiekun', l: 'Opiekun klienta', t: 'user' },
      { k: 'rodo', l: 'Klauzula RODO przekazana', t: 'date' },
      { k: 'aml', l: 'AML', t: 'select', opts: ['Nie dotyczy', 'Do weryfikacji', 'Zweryfikowany'], def: 'Nie dotyczy' },
      { k: 'notatki', l: 'Notatki', t: 'textarea', wide: true }
    ]
  },

  zapytania: {
    sheet: 'Zapytania', label: 'Zapytania', one: 'zapytanie', title: 'nazwa',
    fields: [
      { k: 'nazwa', l: 'Imię i nazwisko / nazwa', t: 'text', req: true },
      { k: 'data_wplywu', l: 'Wpłynęło', t: 'datetime', req: true, def: '@now' },
      { k: 'kanal', l: 'Kanał', t: 'select', dict: 'kanal', def: 'E-mail' },
      { k: 'status', l: 'Status', t: 'select', dict: 'status_zapytania', req: true, def: '@first' },
      { k: 'email', l: 'E-mail', t: 'email' },
      { k: 'telefon', l: 'Telefon', t: 'tel' },
      { k: 'kontakt', l: 'Preferowany kontakt', t: 'select', opts: ['E-mail', 'Telefon'], def: 'E-mail' },
      { k: 'pilne', l: 'Pilne terminy', t: 'check' },
      { k: 'kategoria', l: 'Kategoria', t: 'select', dict: 'kategoria' },
      { k: 'opiekun', l: 'Prowadzi', t: 'user', def: '@me' },
      { k: 'opis', l: 'Opis sprawy (od klienta)', t: 'textarea', wide: true },
      { k: 'kw', l: 'Numer KW', t: 'text', model: 'analiza' },
      { k: 'konsultacja', l: 'Termin konsultacji', t: 'datetime', model: 'konsultacja' },
      { k: 'termin_odpowiedzi', l: 'Odpowiedź do (24 h robocze)', t: 'datetime', auto: true, model: 'analiza' },
      { k: 'konflikt', l: 'Konflikt interesów', t: 'select', opts: ['Nie sprawdzono', 'Brak konfliktu', 'Konflikt – odmowa'], def: 'Nie sprawdzono' },
      { k: 'analiza', l: 'Wstępna analiza: co trzeba zrobić', t: 'textarea', wide: true },
      { k: 'oferta_kwota', l: 'Cena w ofercie (zł)', t: 'money' },
      { k: 'oferta_model', l: 'Model wynagrodzenia', t: 'select', dict: 'model_wynagrodzenia' },
      { k: 'oferta_termin', l: 'Termin realizacji w ofercie', t: 'text' },
      { k: 'odpowiedz', l: 'Analiza i oferta wysłane', t: 'datetime' },
      { k: 'przypomnienie', l: 'Przypomnieć się (follow-up)', t: 'date' },
      { k: 'powod', l: 'Powód odmowy / rezygnacji', t: 'text', wide: true },
      { k: 'klient_id', l: 'Klient w bazie', t: 'ref', ref: 'klienci' },
      { k: 'sprawa_id', l: 'Założona sprawa', t: 'ref', ref: 'sprawy' },
      { k: 'folder', l: 'Folder zgłoszenia (Dysk)', t: 'url' },
      { k: 'strona_www', l: 'Podstrona formularza', t: 'text', wide: true },
      { k: 'zrodlo_id', l: 'Identyfikator importu', t: 'text', hidden: true }
    ]
  },

  sprawy: {
    sheet: 'Sprawy', label: 'Sprawy', one: 'sprawa', title: 'tytul',
    fields: [
      { k: 'numer', l: 'Nr teczki', t: 'text', help: 'Puste = kolejny numer ze wspólnej Listy Spraw. „P” = seria P (bez teczki).' },
      { k: 'tytul', l: 'Przedmiot sprawy', t: 'text', req: true, wide: true },
      { k: 'klient_id', l: 'Klient', t: 'ref', ref: 'klienci', req: true },
      { k: 'strona_przeciwna', l: 'Strona przeciwna / uczestnicy', t: 'text', wide: true, help: 'Wpisz wszystkich — po tym polu działa sprawdzanie konfliktu interesów.' },
      { k: 'kategoria', l: 'Kategoria', t: 'select', dict: 'kategoria' },
      { k: 'rodzaj', l: 'Rodzaj', t: 'select', dict: 'rodzaj_sprawy' },
      { k: 'status', l: 'Status', t: 'select', dict: 'status_sprawy', req: true, def: '@first' },
      { k: 'etap', l: 'Etap', t: 'select', dict: 'etap_sprawy' },
      { k: 'nastepny_krok', l: 'Następny krok', t: 'text', wide: true },
      { k: 'prowadzacy', l: 'Prowadzący (opiekun)', t: 'user', req: true, def: '@me' },
      { k: 'zespol', l: 'Pozostali w zespole', t: 'users', wide: true },
      { k: 'organ', l: 'Sąd / organ', t: 'text' },
      { k: 'sygn_akt', l: 'Sygnatura akt', t: 'text' },
      { k: 'wps', l: 'Wartość przedmiotu sporu (zł)', t: 'money' },
      { k: 'wyn_model', l: 'Model wynagrodzenia', t: 'select', dict: 'model_wynagrodzenia' },
      { k: 'wynagrodzenie', l: 'Wynagrodzenie umówione (zł)', t: 'money' },
      { k: 'stawka', l: 'Stawka godzinowa (zł)', t: 'money', def: '@stawka' },
      { k: 'pelnomocnictwo', l: 'Pełnomocnictwo (data)', t: 'date' },
      { k: 'data_otwarcia', l: 'Otwarta', t: 'date', def: '@today' },
      { k: 'data_zamkniecia', l: 'Zamknięta', t: 'date' },
      { k: 'folder', l: 'Folder sprawy (Dysk)', t: 'url' },
      { k: 'zapytanie_id', l: 'Z zapytania', t: 'ref', ref: 'zapytania', hidden: true },
      { k: 'notatki', l: 'Notatki', t: 'textarea', wide: true },
      { k: 'zrodlo_id', l: 'Identyfikator importu', t: 'text', hidden: true }
    ]
  },

  terminy: {
    sheet: 'Terminy', label: 'Terminy', one: 'termin', title: 'opis',
    fields: [
      { k: 'opis', l: 'Co', t: 'text', req: true, wide: true },
      { k: 'data', l: 'Data', t: 'date', req: true },
      { k: 'godzina', l: 'Godzina', t: 'time' },
      { k: 'typ', l: 'Typ', t: 'select', dict: 'typ_terminu', req: true, def: '@first' },
      { k: 'status', l: 'Status', t: 'select', opts: ['Otwarty', 'Wykonany', 'Nieaktualny', 'Do weryfikacji'], def: 'Otwarty' },
      { k: 'sprawa_id', l: 'Sprawa', t: 'ref', ref: 'sprawy' },
      { k: 'odpowiedzialny', l: 'Odpowiedzialny', t: 'user', def: '@me' },
      { k: 'miejsce', l: 'Miejsce / sala / link', t: 'text' },
      { k: 'podstawa', l: 'Podstawa i sposób liczenia', t: 'text', wide: true },
      { k: 'notatki', l: 'Notatki', t: 'textarea', wide: true },
      { k: 'zrodlo_id', l: 'Identyfikator importu', t: 'text', hidden: true },
      { k: 'zrodlo_data', l: 'Data w kalendarzu przy imporcie', t: 'date', hidden: true }
    ]
  },

  korespondencja: {
    sheet: 'Korespondencja', label: 'Korespondencja', one: 'pismo', title: 'opis',
    fields: [
      { k: 'nr', l: 'Nr w rejestrze', t: 'text', auto: true },
      { k: 'kierunek', l: 'Kierunek', t: 'select', opts: ['Przychodząca', 'Wychodząca'], req: true, def: 'Przychodząca' },
      { k: 'data', l: 'Data', t: 'date', req: true, def: '@today' },
      { k: 'kontrahent', l: 'Nadawca / adresat', t: 'text', req: true },
      { k: 'opis', l: 'Czego dotyczy', t: 'text', req: true, wide: true },
      { k: 'sprawa_id', l: 'Sprawa', t: 'ref', ref: 'sprawy' },
      { k: 'rodzaj', l: 'Rodzaj', t: 'select', dict: 'rodzaj_pisma' },
      { k: 'sposob', l: 'Sposób doręczenia', t: 'select', dict: 'sposob_doreczenia' },
      { k: 'data_doreczenia', l: 'Data doręczenia', t: 'date' },
      { k: 'nr_nadania', l: 'Nr nadania / UPO', t: 'text' },
      { k: 'plik', l: 'Skan / plik (link)', t: 'url', wide: true },
      { k: 'notatki', l: 'Notatki', t: 'textarea', wide: true }
    ]
  },

  czynnosci: {
    sheet: 'Czynności', label: 'Czas pracy', one: 'czynność', title: 'opis',
    fields: [
      { k: 'opis', l: 'Czynność', t: 'text', req: true, wide: true },
      { k: 'data', l: 'Data', t: 'date', req: true, def: '@today' },
      { k: 'czas', l: 'Czas (h)', t: 'number', step: '0.25', req: true },
      { k: 'sprawa_id', l: 'Sprawa', t: 'ref', ref: 'sprawy', req: true },
      { k: 'osoba', l: 'Kto', t: 'user', def: '@me' },
      { k: 'rozliczone', l: 'Rozliczone', t: 'select', opts: ['nie', 'tak', 'nie do rozliczenia'], def: 'nie' }
    ]
  },

  umowy: {
    sheet: 'Umowy', label: 'Rejestr umów', one: 'umowa', title: 'przedmiot',
    fields: [
      { k: 'nr', l: 'L.p. (NN/RRRR)', t: 'text', help: 'Puste = kolejny numer ze wspólnego Rejestru Umów.' },
      { k: 'data_zawarcia', l: 'Data zawarcia', t: 'date', req: true, def: '@today' },
      { k: 'klient_id', l: 'Klient / strona umowy', t: 'ref', ref: 'klienci', req: true },
      { k: 'sprawa_id', l: 'Sprawa', t: 'ref', ref: 'sprawy' },
      { k: 'przedmiot', l: 'Przedmiot umowy', t: 'text', req: true, wide: true },
      { k: 'model', l: 'Rozliczenie (zaliczka / model)', t: 'select', dict: 'model_wynagrodzenia' },
      { k: 'kwota', l: 'Kwota / zaliczka (zł)', t: 'money' },
      { k: 'godziny', l: 'Pakiet godzin', t: 'number', step: '0.5' },
      { k: 'rozliczone', l: 'Rozliczone', t: 'select', dict: 'rozliczone', def: '@first' },
      { k: 'plik', l: 'Plik umowy (link)', t: 'url', wide: true },
      { k: 'notatki', l: 'Notatki', t: 'textarea', wide: true },
      { k: 'zrodlo_id', l: 'Identyfikator importu', t: 'text', hidden: true }
    ]
  },

  zadania: {
    sheet: 'Zadania', label: 'Zadania', one: 'zadanie', title: 'tytul',
    fields: [
      { k: 'tytul', l: 'Co zrobić', t: 'text', req: true, wide: true },
      { k: 'przypisane', l: 'Kto robi', t: 'user', req: true, def: '@me' },
      { k: 'termin', l: 'Do kiedy', t: 'date' },
      { k: 'godzina', l: 'Godzina', t: 'time' },
      { k: 'pilne', l: 'Pilne', t: 'check' },
      { k: 'sprawdzenie', l: 'Po wykonaniu wraca do zlecającego do sprawdzenia', t: 'check', wide: true },
      { k: 'sprawa_id', l: 'Sprawa', t: 'ref', ref: 'sprawy' },
      { k: 'termin_id', l: 'Termin procesowy', t: 'ref', ref: 'terminy' },
      { k: 'opis', l: 'Opis / kroki', t: 'textarea', wide: true },
      { k: 'status', l: 'Status', t: 'select', opts: TASK_STATUSES, auto: true },
      { k: 'zlecil', l: 'Zlecił(a)', t: 'user', auto: true },
      { k: 'przekazano', l: 'Przekazano', t: 'datetime', auto: true },
      { k: 'wykonal', l: 'Zrobił(a)', t: 'user', auto: true },
      { k: 'wykonano', l: 'Zakończono', t: 'datetime', auto: true },
      { k: 'zrodlo_id', l: 'Identyfikator importu', t: 'text', hidden: true }
    ]
  },

  komentarze: {
    sheet: 'Komentarze', label: 'Komentarze', one: 'komentarz', title: 'tresc',
    fields: [
      { k: 'zadanie_id', l: 'Zadanie', t: 'ref', ref: 'zadania', req: true },
      { k: 'tresc', l: 'Komentarz', t: 'textarea', req: true, wide: true }
    ]
  },

  rozliczenia: {
    sheet: 'Rozliczenia', label: 'Rozliczenia', one: 'rozliczenie', title: 'numer',
    fields: [
      { k: 'typ', l: 'Typ', t: 'select', dict: 'typ_rozliczenia', req: true, def: '@first' },
      { k: 'kwota', l: 'Kwota (zł)', t: 'money', req: true },
      { k: 'data', l: 'Data', t: 'date', req: true, def: '@today' },
      { k: 'sprawa_id', l: 'Sprawa', t: 'ref', ref: 'sprawy', req: true },
      { k: 'status', l: 'Status', t: 'select', opts: ['Do wystawienia', 'Wystawiona', 'Opłacona', 'Zaległa', 'Nie dotyczy'], def: 'Do wystawienia' },
      { k: 'numer', l: 'Nr faktury / dokumentu', t: 'text' },
      { k: 'termin_platnosci', l: 'Termin płatności', t: 'date' },
      { k: 'notatki', l: 'Notatki', t: 'textarea', wide: true }
    ]
  }
};

/* Kolejność zakładek w arkuszu bazy kancelarii. */
var TABLE_ORDER = ['zapytania', 'klienci', 'sprawy', 'terminy', 'zadania', 'komentarze', 'korespondencja', 'czynnosci', 'umowy', 'rozliczenia'];

/* Arkusz wspólny: zespół, kancelarie, słowniki. Historia jest w każdym arkuszu osobno. */
var SETTINGS_TABLES = {
  zespol:     { sheet: 'Zespół', keys: ['email', 'imie_nazwisko', 'tytul', 'stanowisko', 'rola', 'kancelarie', 'telefon', 'aktywny', 'aliasy', 'powiadomienia', 'dodano', 'dodal'] },
  kancelarie: { sheet: 'Kancelarie', keys: ['kod', 'nazwa', 'nazwa_krotka', 'forma', 'adres', 'nip', 'strona', 'email', 'telefon', 'kolor', 'model', 'sla_h', 'stawka', 'link_rezerwacji', 'podpis', 'db_id', 'folder_id', 'import_folder'] },
  slowniki:   { sheet: 'Słowniki', keys: ['kancelaria', 'slownik', 'wartosc', 'typ', 'kolejnosc'] }
};
var HISTORY_SHEET = 'Historia';
var HISTORY_KEYS = ['ts', 'kto', 'tabela', 'rekord', 'akcja', 'zmiany'];

/* Propozycja konfiguracji na start: dane ze stron kancelarii (mecenasodnieruchomosci.pl,
   kancelariarodzinna.com). Administrator poprawia je na ekranie konfiguracji. */
var DEFAULT_FIRMS = [
  {
    kod: 'KN', nazwa: 'Kancelaria Nieruchomości adw. dr Maciej Muzyka', nazwa_krotka: 'Kancelaria Nieruchomości',
    forma: 'Kancelaria Adwokacka adw. dr Maciej Muzyka', adres: 'ul. Cicha 4/5, 20-078 Lublin', nip: '7123424474',
    strona: 'https://mecenasodnieruchomosci.pl', email: 'maciej.muzyka@mecenasodnieruchomosci.pl', telefon: '+48 884 784 984',
    kolor: '#0E53A5', model: 'analiza', sla_h: '24', stawka: '450', link_rezerwacji: '',
    podpis: 'adw. dr Maciej Muzyka\nKancelaria Nieruchomości\nul. Cicha 4/5, 20-078 Lublin\ntel. +48 884 784 984'
  },
  {
    kod: 'KR', nazwa: 'Kancelaria Rodzinna – Popik, Konarzewski, Muzyka', nazwa_krotka: 'Kancelaria Rodzinna',
    forma: 'Kancelaria Adwokacka adw. dr hab. Katarzyna Popik-Konarzewska adw. dr Maciej Muzyka s.c.', adres: 'ul. Cicha 4/5, 20-078 Lublin', nip: '',
    strona: 'https://kancelariarodzinna.com', email: 'sekretariat@kancelariarodzinna.com', telefon: '+48 603 976 565',
    kolor: '#9B332E', model: 'konsultacja', sla_h: '', stawka: '450', link_rezerwacji: 'https://calendly.com/muzykamaciej/60min',
    podpis: 'Kancelaria Rodzinna – Popik | Konarzewski | Muzyka\nul. Cicha 4/5, 20-078 Lublin\ntel. +48 603 976 565'
  }
];

/* Zespół ze stron kancelarii (dane publiczne). Pozostałe osoby (np. młodszych prawników)
   administrator dopisuje na ekranie konfiguracji — repozytorium jest publiczne. Każdą osobę trzeba świadomie zaznaczyć —
   dopiero wtedy dostaje dostęp. */
var DEFAULT_TEAM = [
  { email: 'katarzyna.popik@kancelariarodzinna.com', imie_nazwisko: 'Katarzyna Popik-Konarzewska', tytul: 'adw. dr hab.', stanowisko: 'Wspólnik', rola: 'prawnik', kancelarie: 'KR', on: true },
  { email: 'katarzyna.walaszek@kancelariarodzinna.com', imie_nazwisko: 'Katarzyna Walaszek', tytul: 'apl. adw.', stanowisko: 'Starszy prawnik', rola: 'prawnik', kancelarie: 'KR', on: true },
  { email: 'maciej.bednarek@kancelariarodzinna.com', imie_nazwisko: 'Maciej Bednarek', tytul: 'adw.', stanowisko: 'Starszy prawnik', rola: 'prawnik', kancelarie: 'KR', on: true },
  { email: 'kazimierz.konarzewski@kancelariarodzinna.com', imie_nazwisko: 'Kazimierz Konarzewski', tytul: 'adw.', stanowisko: 'Współpracownik', rola: 'prawnik', kancelarie: 'KR', on: false },
  { email: 'sekretariat@kancelariarodzinna.com', imie_nazwisko: 'Sekretariat KR (konto wspólne)', tytul: 'sekretariat', stanowisko: 'Sekretariat', rola: 'asystent', kancelarie: 'KR', on: false }
];

/* Słowniki. typ: open / won / lost (statusy zapytań), open / closed (statusy spraw). */
var DEFAULT_DICTS = {
  '*': {
    zrodlo: ['Formularz www', 'E-mail', 'Telefon', 'Polecenie', 'Google / Mapy', 'Calendly', 'Stały klient', 'Współpraca (inna kancelaria)', 'Inne'],
    kanal: ['Formularz www', 'E-mail', 'Telefon', 'Calendly', 'Polecenie', 'Osobiście', 'Inne'],
    rodzaj_sprawy: ['Doradztwo / opinia', 'Audyt', 'Umowa / negocjacje', 'Sądowa – cywilna', 'Sądowa – rodzinna', 'Sądowa – karna', 'Administracyjna', 'Sądowoadministracyjna', 'Egzekucja', 'Mediacja / ugoda', 'Stała obsługa', 'Inne'],
    status_sprawy: [['Aktywna', 'open'], ['Czeka na klienta', 'open'], ['Czeka na sąd / organ', 'open'], ['Zawieszona', 'open'], ['Zakończona', 'closed'], ['Archiwum', 'closed']],
    etap_sprawy: ['Zlecenie warunkowe (pełnomocnictwo, przelew)', 'Kompletowanie dokumentów', 'Analiza w toku', 'Analiza wykonana', 'Projekt pisma / wezwania', 'Wezwanie wysłane', 'Negocjacje / mediacja', 'Pismo / pozew / skarga złożone', 'Postępowanie w toku', 'Oczekiwanie na orzeczenie / decyzję', 'Postępowanie odwoławcze', 'Egzekucja', 'Rozliczenie', 'Zakończona'],
    model_wynagrodzenia: ['Ryczałt', 'Pakiet godzin', 'Godzinowe', 'Success fee', 'Ryczałt + success fee', 'Etapowe', 'Stała obsługa (abonament)', 'Pro bono'],
    typ_terminu: ['Termin procesowy', 'Rozprawa / posiedzenie', 'Spotkanie / konsultacja', 'Termin wewnętrzny', 'Przedawnienie', 'Przypomnienie'],
    rodzaj_pisma: ['Pismo sądu', 'Pismo organu', 'Pismo strony / pełnomocnika', 'Pismo klienta', 'Wezwanie', 'Umowa / dokument', 'Faktura / rachunek', 'Inne'],
    sposob_doreczenia: ['Poczta – polecony', 'e-Doręczenia', 'ePUAP', 'Portal Informacyjny Sądów', 'E-mail', 'Osobiście', 'Kurier'],
    typ_rozliczenia: ['Faktura', 'Zaliczka', 'Wpłata', 'Koszty (opłata sądowa, skarbowa)', 'Zwrot kosztów', 'Korekta'],
    rozliczone: ['nie', 'tak', 'zwrot', 'termin', 'do dopłaty']
  },
  KN: {
    status_zapytania: [['Nowe', 'open'], ['Wstępna analiza', 'open'], ['Oferta wysłana', 'open'], ['Zlecenie warunkowe', 'open'], ['Przyjęte', 'won'], ['Odrzucone przez klienta', 'lost'], ['Bez odpowiedzi', 'lost'], ['Odmowa (konflikt / poza zakresem)', 'lost']],
    kategoria: ['Sprawdzenie przed zakupem (audyt)', 'Transakcje i umowy', 'Warunki zabudowy i planowanie', 'Proces budowlany i samowole', 'Księgi wieczyste i stan prawny', 'Współwłasność, spadki, podziały', 'Najem i eksmisja', 'Przesył i bezumowne korzystanie', 'Droga konieczna i służebności', 'Wywłaszczenia i odszkodowania', 'Grunty rolne i OZE', 'Spory z deweloperem', 'Obsługa podmiotów (B2B)', 'Inna sprawa']
  },
  KR: {
    status_zapytania: [['Nowe', 'open'], ['Konsultacja umówiona', 'open'], ['Po konsultacji', 'open'], ['Przyjęte', 'won'], ['Rezygnacja', 'lost'], ['Bez odpowiedzi', 'lost'], ['Odmowa (konflikt / poza zakresem)', 'lost']],
    kategoria: ['Rozwód i separacja', 'Podział majątku / rozdzielność', 'Alimenty', 'Kontakty z dzieckiem', 'Władza rodzicielska / miejsce pobytu', 'Przemoc domowa', 'Sprawy karne i wykroczenia', 'Spadki i zachowek', 'Darowizny', 'Przysposobienie', 'Zapłata / cywilne', 'Mediacja', 'Inna sprawa']
  }
};

/* Wartości z formularza strony („Sytuacja”) → kategorie KN. */
var WEBSITE_SITUATION_MAP = {
  'Kupuję nieruchomość': 'Sprawdzenie przed zakupem (audyt)',
  'Sprzedaję nieruchomość': 'Transakcje i umowy',
  'Buduję / remontuję': 'Proces budowlany i samowole',
  'Wynajmuję lub najmuję': 'Najem i eksmisja',
  'Spór z deweloperem': 'Spory z deweloperem',
  'Słupy, rury, służebności': 'Przesył i bezumowne korzystanie',
  'Spadek / podział majątku': 'Współwłasność, spadki, podziały',
  'Grunty rolne / OZE': 'Grunty rolne i OZE',
  'Inna sprawa': 'Inna sprawa'
};

/* Schemat dla przeglądarki (bez funkcji). */
function publicSchema_() {
  return { app: APP, roles: ROLES, tables: TABLES, order: TABLE_ORDER, stanowiska: STANOWISKA, taskOpen: TASK_OPEN };
}
