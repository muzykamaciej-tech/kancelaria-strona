/* landing.jsx — Conversion landing page with free 24h case-qualification form.
   Reuses brand components from sections.jsx / pages.jsx. Loaded after pages.jsx. */

const { Icon: LIcon, ServiceTile: LServiceTile, AboutBlock: LAboutBlock, Testimonials: LTestimonials, Footer: LFooter } = window;
const { FAQAccordion: LFAQAccordion } = window;
const { useState: lUseState, useRef: lUseRef, useEffect: lUseEffect } = React;

/* Inline-SVG icons for the form. Lucide rewrites <i data-lucide> placeholders
   into <svg> nodes, detaching them from React's tree — which crashes when React
   later swaps conditional content (submit button label, form→done card). Owning
   the SVG directly avoids that entirely. */
const SVG_PATHS = {
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  'loader-circle': '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'mail-check': '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/>'
};
function SvgIcon({ name, size = 18, style }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-flex', flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: SVG_PATHS[name] || '' }} />);


}

/* ============================================================
   CONFIG — wklej tutaj swój identyfikator formularza Formspree
   (znajdziesz go w panelu Formspree: https://formspree.io/forms)
   Przykład gotowego endpointu: https://formspree.io/f/abcdwxyz
   ============================================================ */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgqoaae';
const FORMSPREE_READY = !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID');

/* Wizytówka Google — link do recenzji */
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?kgmid=/g/11kpjhpy44&hl=pl-US&q=Adwokat+dr+Maciej+Muzyka+-+Mecenas+od+Nieruchomo%C5%9Bci&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=0d09a05fe2da440e&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m5/1#mpd=~18068536807946905391/customers/reviews';
/* Ocena z wizytówki Google — wartości zapasowe, nadpisywane danymi z /api/google-rating */
const GOOGLE_RATING_FALLBACK = 5.0;
const GOOGLE_REVIEWS_COUNT_FALLBACK = 63;
let googleRatingPromise = null;
function loadGoogleRating() {
  if (!googleRatingPromise) {
    googleRatingPromise = fetch('/api/google-rating').
    then((r) => r.ok ? r.json() : null).
    then((d) => d && typeof d.rating === 'number' && typeof d.count === 'number' ? d : null).
    catch(() => null);
  }
  return googleRatingPromise;
}
function useGoogleRating() {
  const [data, setData] = lUseState({ rating: GOOGLE_RATING_FALLBACK, count: GOOGLE_REVIEWS_COUNT_FALLBACK });
  lUseEffect(() => {
    let alive = true;
    loadGoogleRating().then((d) => {if (alive && d) setData(d);});
    return () => {alive = false;};
  }, []);
  return data;
}
function formatGoogleRating(r) {return r.toFixed(1).replace('.', ',');}
function opinieLabel(n) {
  if (n === 1) return 'opinia';
  const d = n % 10,h = n % 100;
  return d >= 2 && d <= 4 && (h < 12 || h > 14) ? 'opinie' : 'opinii';
}

/* Pasek statystyk — animowany licznik (count-up) */
const LANDING_STATS = [
{ value: 14689342, suffix: ' zł', grouped: true, l: 'odzyskanych środków dla klientów' },
{ value: 380, suffix: '+', grouped: false, l: 'poprowadzonych spraw' },
{ value: 10, suffix: '+', grouped: false, l: 'lat w prawie nieruchomości' },
{ value: 24, suffix: ' h', grouped: false, l: 'czas wstępnej analizy sprawy' }];


/* Standardy współpracy */
const STANDARDS = [
{ icon: 'wallet', t: 'Najpierw wycena, potem praca', d: 'Po bezpłatnej analizie dostajesz propozycję rozliczenia i umowę. Dopiero gdy je zaakceptujesz, zaczynam działać; do tego momentu nic Cię nie wiąże.' },
{ icon: 'file-search', t: 'Konkret zamiast żargonu', d: 'Nie dostaniesz opinii na dwadzieścia stron, której nikt nie czyta. Mówię wprost, co jest bezpieczne, co ryzykowne i co z tym zrobić — językiem, który rozumiesz.' },
{ icon: 'shield-check', t: 'Pełna poufność', d: 'Twoje dokumenty trafiają tylko do mnie i obejmuje je tajemnica adwokacka. Nic nie wychodzi na zewnątrz, także wtedy, gdy ostatecznie nie dojdzie do współpracy.' },
{ icon: 'bell', t: 'Jesteś na bieżąco', d: 'Informuję Cię o każdym istotnym etapie i nie musisz dopytywać. Gdy coś wymaga Twojej decyzji, tłumaczę opcje i ich skutki, zanim zrobimy następny krok.' }];


/* Jak to działa — 5 kroków */
const HOW_STEPS = [
{ n: '1', t: 'Opisujesz sprawę', d: 'Kilka zdań i dokumenty, jeśli je masz (umowa, księga wieczysta, zdjęcie).' },
{ n: '2', t: 'Dostajesz bezpłatną analizę w 24 h', d: 'Ocena ryzyka i konkretny kolejny krok, prostym językiem. Jeśli do oceny będę potrzebował więcej informacji, odezwę się, żeby dopytać.' },
{ n: '3', t: 'Znasz cenę i termin', d: 'Wycena na piśmie przed startem; do tego momentu nic Cię nie wiąże.' },
{ n: '4', t: 'Akceptujesz cenę i strategię', d: 'Zatwierdzasz wycenę i plan działania. Drobne sprawy domykamy ustaleniem mailowym, większe — jasną umową na piśmie. Zero ukrytych kosztów, zero niespodzianek.' },
{ n: '5', t: 'Prowadzę sprawę', d: 'Raport, pisma lub reprezentacja, a Ty wiesz, co dzieje się na każdym etapie.' }];


/* FAQ skrojone pod bezpłatną analizę */
const LANDING_FAQ = [
{ q: 'Czy wstępna analiza naprawdę jest bezpłatna?', a: 'Tak. Wstępna ocena sprawy — czy jest tu realny problem prawny i co da się z nim zrobić — jest bezpłatna i niezobowiązująca. Płacisz dopiero wtedy, gdy zdecydujesz się zlecić konkretną usługę, a jej cenę poznajesz wcześniej.' },
{ q: 'Co dokładnie dostanę w ciągu 24 godzin?', a: 'Mailowo otrzymujesz wstępną ocenę: czy sprawa wymaga działania, jakie są główne ryzyka, jakie masz opcje oraz propozycję następnego kroku. To nie jest jeszcze pełna opinia prawna — to mapa, która pokazuje, czy i jak warto działać dalej.' },
{ q: 'Czy moje dokumenty są bezpieczne?', a: 'Tak. Jako adwokata wiąże mnie tajemnica adwokacka — obejmuje wszystko, co mi przekażesz. Dokumenty trafiają wyłącznie do mnie i nie są udostępniane osobom trzecim.' },
{ q: 'Jakich spraw dotyczy analiza?', a: 'Wyłącznie prawa nieruchomości i procesu inwestycyjno-budowlanego: audyty stanu prawnego, umowy deweloperskie, warunki zabudowy, najem, grunty rolne, inwestycje, flipy i pokrewne. Jeśli Twoja sprawa jest z innej dziedziny — napisz, podpowiem, gdzie szukać.' },
{ q: 'Czy muszę dzwonić?', a: 'Nie. Cały proces prowadzę mailowo i zdalnie — obsługuję klientów z całej Polski. Jeśli sprawa będzie tego wymagała, umówimy krótką rozmowę online.' }];


/* ============================================================
   Qualification form (the conversion centrepiece)
   ============================================================ */
/* Sytuacje do wyboru w formularzu — segregują zgłoszenia już w temacie maila */
const SITUATION_OPTIONS = ['Kupuję nieruchomość', 'Sprzedaję nieruchomość', 'Buduję / remontuję', 'Wynajmuję lub najmuję', 'Spór z deweloperem', 'Słupy, rury, służebności', 'Spadek / podział majątku', 'Grunty rolne / OZE', 'Inna sprawa'];
const MAX_FILES = 5;
const MAX_FILE_MB = 10;
const CONTACT_EMAIL = 'maciej.muzyka@mecenasodnieruchomosci.pl';
const MAILTO_CASE = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Sprawa do bezpłatnej analizy')}`;

function QualificationForm({ compact = false }) {
  const [state, setState] = lUseState({ name: '', email: '', phone: '', kw: '', situation: '', message: '' });
  const [files, setFiles] = lUseState([]);
  const [urgent, setUrgent] = lUseState(false);
  const [contact, setContact] = lUseState('email'); // email | phone
  const [errors, setErrors] = lUseState({});
  const [status, setStatus] = lUseState('idle'); // idle | sending | sent | error
  const [hp, setHp] = lUseState(''); // honeypot — bots fill this, humans never see it
  const [drag, setDrag] = lUseState(false);
  const fileInput = lUseRef(null);

  function validate() {
    const e = {};
    if (!state.name.trim()) e.name = 'Wpisz proszę imię i nazwisko.';
    if (!state.email.trim()) e.email = 'Adres e-mail jest wymagany.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) e.email = 'Adres e-mail wydaje się błędny.';
    if (!state.message.trim() || state.message.trim().length < 10) e.message = 'Opisz proszę pokrótce sprawę (min. 10 znaków).';
    if (contact === 'phone' && !state.phone.trim()) e.phone = 'Podaj numer telefonu, żebym mógł oddzwonić.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /* Skąd przyszło zgłoszenie — nagłówek bieżącej strony (usługa / filar / blog) */
  function sourcePage() {
    const h = document.querySelector('main h1');
    const t = h ? h.textContent.replace(/\s+/g, ' ').trim() : '';
    return t && !/Nie musisz znać/.test(t) ? t : 'Strona główna';
  }

  async function submit(ev) {
    ev.preventDefault();
    if (hp) { setStatus('sent'); return; } // silent anti-spam drop
    if (!validate()) return;
    setStatus('sending');

    /* Brak skonfigurowanego endpointu — tryb demonstracyjny prototypu */
    if (!FORMSPREE_READY) {
      setTimeout(() => setStatus('sent'), 900);
      return;
    }

    try {
      const fd = new FormData();
      const src = sourcePage();
      fd.append('Imię i nazwisko', state.name);
      fd.append('email', state.email); /* pole `email` = adres Reply-To w powiadomieniu Formspree */
      fd.append('Telefon', state.phone);
      fd.append('Preferowany kontakt', contact === 'phone' ? 'TELEFON — klient prosi o oddzwonienie' : 'e-mail');
      fd.append('Sytuacja', state.situation || '—');
      fd.append('Numer KW', state.kw || '—');
      fd.append('Pilne', urgent ? 'TAK — klient zaznaczył pilne terminy' : 'nie');
      fd.append('Opis sprawy', state.message);
      fd.append('Strona', src + ' · ' + location.href);
      files.forEach((f, i) => fd.append('Załącznik ' + (i + 1), f));
      fd.append('_subject', (urgent ? 'PILNE · ' : '') + 'Nowa sprawa: ' + (state.situation || 'analiza') + ' — ' + state.name + ' (' + src + ')');

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        if (window.gtag) window.gtag('event', 'generate_lead', { method: 'formularz-wstepna-analiza', situation: state.situation || 'brak', files: files.length, source: src });
        setStatus('sent');
      } else
      setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  }

  function reset() {
    setState({ name: '', email: '', phone: '', kw: '', situation: '', message: '' });
    setFiles([]);
    setUrgent(false);
    setContact('email');
    setErrors({});
    setStatus('idle');
  }

  function pickFiles(list) {
    const incoming = Array.from(list || []);
    if (!incoming.length) return;
    const next = files.slice();
    let err;
    for (const f of incoming) {
      if (f.size > MAX_FILE_MB * 1024 * 1024) { err = `Plik „${f.name}” jest za duży (maks. ${MAX_FILE_MB} MB).`; continue; }
      if (next.length >= MAX_FILES) { err = `Możesz dodać maksymalnie ${MAX_FILES} plików.`; break; }
      if (next.some((x) => x.name === f.name && x.size === f.size)) continue;
      next.push(f);
    }
    if (next.length > files.length && window.gtag) window.gtag('event', 'file_attached', { count: next.length });
    setFiles(next);
    setErrors((e) => ({ ...e, file: err }));
  }
  function removeFile(i) { setFiles(files.filter((_, k) => k !== i)); }
  function onDrop(e) {
    e.preventDefault(); setDrag(false);
    if (e.dataTransfer && e.dataTransfer.files) pickFiles(e.dataTransfer.files);
  }

  if (status === 'sent') {
    return (
      <div className="qual-card qual-card--done anim-fade-up">
        <div className="icon-tile icon-tile--info icon-tile--lg" style={{ margin: '0 auto', width: 76, height: 76 }}>
          <SvgIcon name="mail-check" size={34} />
        </div>
        <h3 className="font-bold mt-6" style={{ fontSize: '1.6rem', color: 'var(--text-main)', textAlign: 'center' }}>
          Sprawa przyjęta.
        </h3>
        <p className="lead mt-3" style={{ textAlign: 'center' }}>
          Dziękuję. Przeczytam Twój opis i odpiszę z bezpłatną wstępną oceną — w ciągu 24 h roboczych.
        </p>
        <ol className="success-steps mt-8">
          <li>
            <span className="success-step-num">1</span>
            <div className="success-step-txt"><strong>Czytam Twój opis</strong><span>i dołączone dokumenty</span></div>
          </li>
          <li>
            <span className="success-step-num">2</span>
            <div className="success-step-txt"><strong>Odpisuję w ciągu 24 h roboczych</strong><span>z bezpłatną oceną ryzyka</span></div>
          </li>
          <li>
            <span className="success-step-num">3</span>
            <div className="success-step-txt"><strong>Dostajesz ocenę, wycenę i orientacyjny czas trwania</strong><span>oraz konkretny następny krok</span></div>
          </li>
        </ol>
        <p className="small mt-6" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          Masz jeszcze dokumenty? Dopisz je mailem na <a href={MAILTO_CASE}>{CONTACT_EMAIL}</a>.
        </p>
        {!FORMSPREE_READY &&
        <p className="small mt-4" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            (Tryb demonstracyjny — formularz nie wysłał jeszcze maila. Po wklejeniu identyfikatora Formspree wysyłka zadziała automatycznie.)
          </p>
        }
        <button className="btn btn-secondary mt-8" style={{ width: '100%' }} onClick={reset}>
          Zgłoś kolejną sprawę
        </button>
      </div>);

  }

  return (
    <form className="qual-card" onSubmit={submit} noValidate>
      <div className="qual-card-head">
        <span className="qual-badge"><SvgIcon name="gift" size={14} /> Bezpłatnie · w 24 h</span>
        <h3 className="qual-title">Wstępna analiza sprawy</h3>
        <p className="body" style={{ marginTop: '0.5rem' }}>Opisz, z czym się mierzysz. Odpiszę z oceną, czy to realny problem prawny, co da się z nim zrobić i ile to potrwa.</p>
      </div>

      <input
        type="text"
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        name="company"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        placeholder="Nie wypełniaj tego pola" />

      <div className="qual-grid">
        <label>
          <span className="input-label">Imię i nazwisko</span>
          <input
            className={`input ${errors.name ? 'input-error' : ''}`}
            type="text"
            autoComplete="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            placeholder="Jan Kowalski" />
          {errors.name && <div className="input-err">{errors.name}</div>}
        </label>
        <label>
          <span className="input-label">Telefon {contact === 'phone' ? '' : <span className="qual-opt">(opcjonalnie)</span>}</span>
          <input
            className={`input ${errors.phone ? 'input-error' : ''}`}
            type="tel"
            autoComplete="tel"
            value={state.phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
            placeholder="+48 …" />
          {errors.phone && <div className="input-err">{errors.phone}</div>}
        </label>
      </div>

      <label className="qual-field">
        <span className="input-label">Adres e-mail</span>
        <input
          className={`input ${errors.email ? 'input-error' : ''}`}
          type="email"
          autoComplete="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          placeholder="jan@example.com" />
        {errors.email && <div className="input-err">{errors.email}</div>}
      </label>

      <div className="qual-grid" style={{ marginTop: '1rem' }}>
        <label>
          <span className="input-label">Czego dotyczy sprawa? <span className="qual-opt">(opcjonalnie)</span></span>
          <select className="input" value={state.situation} onChange={(e) => setState({ ...state, situation: e.target.value })}>
            <option value="">Wybierz…</option>
            {SITUATION_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label>
          <span className="input-label">Numer księgi wieczystej <span className="qual-opt">(jeśli znasz)</span></span>
          <input
            className="input"
            type="text"
            value={state.kw}
            onChange={(e) => setState({ ...state, kw: e.target.value })}
            placeholder="np. LU1I/00012345/6" />
        </label>
      </div>

      <label className="qual-field">
        <span className="input-label">Opis sprawy</span>
        <textarea
          className={`textarea ${errors.message ? 'input-error' : ''}`}
          rows={compact ? 3 : 5}
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          maxLength={5000}
          placeholder="Np. Kupuję mieszkanie od dewelopera i nie wiem, czy umowa jest dla mnie bezpieczna…" />
        <div className="field-foot">
          {errors.message ? <div className="input-err">{errors.message}</div> : <span />}
          <span className={`char-count ${state.message.length > 4800 ? 'is-near' : ''}`}>{state.message.length} / 5000</span>
        </div>
        <p className="small qual-hint">Pomocne będą trzy rzeczy: na jakim etapie jest sprawa (przed podpisem czy po), jakie terminy Cię gonią i jakie dokumenty masz.</p>
      </label>

      {/* Załączniki — kilka plików, klik lub przeciągnij */}
      <div className="qual-field">
        <span className="input-label">Załączniki <span className="qual-opt">(opcjonalnie — umowa, KW, decyzja, protokół, zdjęcia)</span></span>
        <input
          ref={fileInput}
          type="file"
          multiple
          style={{ display: 'none' }}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.heic"
          onChange={(e) => { pickFiles(e.target.files); e.target.value = ''; }} />
        {files.length > 0 &&
        <div className="file-chips">
          {files.map((f, i) =>
          <div key={f.name + f.size} className="file-chip">
              <SvgIcon name="file-text" size={18} />
              <span className="file-chip-name">{f.name}</span>
              <button type="button" aria-label={`Usuń plik ${f.name}`} onClick={() => removeFile(i)}>
                <SvgIcon name="x" size={16} />
              </button>
            </div>
          )}
        </div>}
        {files.length < MAX_FILES &&
        <button
          type="button"
          className={`file-drop ${drag ? 'is-drag' : ''} ${files.length ? 'file-drop--more' : ''}`}
          onClick={() => fileInput.current && fileInput.current.click()}
          onDragOver={(e) => { e.preventDefault(); if (!drag) setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={onDrop}>
            <SvgIcon name="paperclip" size={18} />
            <span>{files.length ? 'Dodaj kolejny dokument' : 'Dodaj dokumenty lub zdjęcia — kliknij albo przeciągnij tutaj'}</span>
            <span className="file-drop-hint">PDF, DOCX, JPG, PNG · do {MAX_FILES} plików, każdy do {MAX_FILE_MB} MB</span>
          </button>}
        {errors.file && <div className="input-err">{errors.file}</div>}
        <p className="small qual-hint">Nie masz wszystkich dokumentów? Napisz, co masz — resztę ustalę sam.</p>
      </div>

      <div className="qual-field">
        <span className="input-label">Jak mam się odezwać?</span>
        <div className="contact-pref" role="radiogroup" aria-label="Preferowany kontakt">
          <label className={contact === 'email' ? 'is-on' : ''}><input type="radio" name="contact-pref" checked={contact === 'email'} onChange={() => setContact('email')} />E-mailem</label>
          <label className={contact === 'phone' ? 'is-on' : ''}><input type="radio" name="contact-pref" checked={contact === 'phone'} onChange={() => setContact('phone')} />Zadzwoń do mnie</label>
        </div>
        {contact === 'phone' && <p className="small qual-hint">Oddzwonię w ciągu 24 h roboczych — wpisz numer w polu „Telefon” powyżej.</p>}
      </div>

      <label className="consent-row consent-row--plain">
        <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} />
        <span>Sprawa jest pilna — goni mnie termin (podpis, odwołanie, rozprawa).</span>
      </label>

      {/* Klauzula informacyjna RODO — bez checkboxa (odpowiedź na zapytanie nie wymaga odrębnej zgody) */}
      <p className="small qual-rodo">
        Wysyłając formularz, przekazujesz mi dane w celu odpowiedzi na sprawę. Administratorem danych jest adw. dr Maciej Muzyka — szczegóły w{' '}
        <a href="#/polityka-prywatnosci">polityce prywatności</a>. Sprawę obejmuje tajemnica adwokacka; kancelaria ma ubezpieczenie OC adwokata.
      </p>

      <button type="submit" className="btn btn-primary qual-submit" disabled={status === 'sending'}>
        {status === 'sending' ?
        <><SvgIcon name="loader-circle" size={16} style={{ animation: 'spin 0.8s linear infinite' }} /> Wysyłam…</> :

        <>Wyślij sprawę do analizy <SvgIcon name="arrow-right" size={16} /></>
        }
      </button>

      {status === 'error' &&
      <p className="input-err" style={{ textAlign: 'center', marginTop: '0.75rem' }}>
          Nie udało się wysłać. Spróbuj ponownie albo napisz bezpośrednio na <a href={MAILTO_CASE}>{CONTACT_EMAIL}</a>.
        </p>
      }

      <p className="small qual-foot">
        <SvgIcon name="lock" size={13} style={{ color: 'var(--brand-primary)' }} />
        Odpowiadam w ciągu 24 h roboczych. Zero spamu, zero zobowiązań.
      </p>
      <p className="small qual-alt">Wolisz mailem? Wyślij opis i dokumenty na <a href={MAILTO_CASE}>{CONTACT_EMAIL}</a>.</p>
    </form>);

}

/* ============================================================
   Google rating inline badge
   ============================================================ */
function GoogleBadge({ onDark = false }) {
  const { rating, count } = useGoogleRating();
  return (
    <a className={`google-badge ${onDark ? 'google-badge--dark' : ''}`} href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
      <span className="google-badge-g">G</span>
      <span className="google-badge-stars">
        {Array.from({ length: 5 }).map((_, i) =>
        <LIcon key={i} name="star" size={15} style={{ color: 'var(--signal-star)', fill: 'var(--signal-star)' }} />
        )}
      </span>
      <span className="google-badge-text">
        <strong>{formatGoogleRating(rating)}</strong> · {count} {opinieLabel(count)} w Google
      </span>
    </a>);

}

/* Smooth-scroll helper (avoids scrollIntoView). Offsets for the sticky navbar. */
function lScrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (id === 'formularz' && window.gtag) window.gtag('event', 'cta_scroll_form', { page: location.hash || '#/' });
  const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

/* ============================================================
   „Twoja sytuacja" — chip selector that jumps to + highlights a service block
   ============================================================ */
const SITUATIONS = [
{ id: 'sprawdzenie-przed-zakupem', icon: 'shopping-cart', label: 'Kupuję' },
{ id: 'transakcje-umowy', icon: 'badge-dollar-sign', label: 'Sprzedaję' },
{ id: 'warunki-zabudowy-planowanie', icon: 'hard-hat', label: 'Buduję' },
{ id: 'najem', icon: 'key-round', label: 'Wynajmuję' },
{ id: 'roszczenia-deweloper', icon: 'gavel', label: 'Problem z deweloperem' },
{ id: 'sluzebnosci-odszkodowania', icon: 'zap', label: 'Słupy na działce' },
{ id: 'wspolwlasnosc-podzialy', icon: 'split', label: 'Spadek / podział' }];

function markPreselected(blockId) {
  document.querySelectorAll('.block-card.is-preselected').forEach((n) => n.classList.remove('is-preselected'));
  if (!blockId) return;
  const el = document.getElementById('block-' + blockId);
  if (el) el.classList.add('is-preselected');
}

function jumpToBlock(blockId) {
  const el = document.getElementById('block-' + blockId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 110;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  document.querySelectorAll('.block-card.is-highlight').forEach((n) => n.classList.remove('is-highlight'));
  window.setTimeout(() => {
    el.classList.add('is-highlight');
    window.setTimeout(() => el.classList.remove('is-highlight'), 2400);
  }, 520);
}

function SituationSelector() {
  const [active, setActive] = lUseState(() => {
    try {return sessionStorage.getItem('kn_situation') || '';} catch (e) {return '';}
  });

  lUseEffect(() => {
    // Re-apply a remembered choice's subtle highlight once the blocks exist.
    if (!active) return;
    const t = window.setTimeout(() => markPreselected(active), 300);
    return () => window.clearTimeout(t);
  }, [active]);

  const pick = (id) => {
    setActive(id);
    try {sessionStorage.setItem('kn_situation', id);} catch (e) {}
    markPreselected(id);
    jumpToBlock(id);
  };

  return (
    <div className="situation-bar">
      <div className="wrap">
        <div className="situation-inner">
          <span className="situation-lead"><LIcon name="compass" size={17} /> Twoja sytuacja</span>
          <div className="situation-chips" role="list" aria-label="Wybierz swoją sytuację">
            {SITUATIONS.map((s) =>
            <button
              key={s.id}
              type="button"
              role="listitem"
              className={`situation-chip ${active === s.id ? 'is-active' : ''}`}
              aria-pressed={active === s.id}
              onClick={() => pick(s.id)}>
              
                <LIcon name={s.icon} size={16} />
                <span>{s.label}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>);

}

/* ============================================================
   Mobile sticky CTA bar — hides at the form and while typing
   ============================================================ */
function MobileCTABar() {
  const [atForm, setAtForm] = lUseState(false);
  const [typing, setTyping] = lUseState(false);
  const [hasForm, setHasForm] = lUseState(true);

  lUseEffect(() => {
    const form = document.getElementById('formularz');
    setHasForm(!!form);
    let io;
    if (form && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([e]) => setAtForm(e.isIntersecting), { threshold: 0.18 });
      io.observe(form);
    }
    const isField = (t) => t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT');
    const fin = (e) => {if (isField(e.target)) setTyping(true);};
    const fout = (e) => {if (isField(e.target)) setTyping(false);};
    document.addEventListener('focusin', fin);
    document.addEventListener('focusout', fout);
    return () => {
      if (io) io.disconnect();
      document.removeEventListener('focusin', fin);
      document.removeEventListener('focusout', fout);
    };
  }, []);

  const hidden = atForm || typing;
  if (!hasForm) return null;
  return (
    <div className={`mobile-cta-bar ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
      <button className="btn btn-primary" tabIndex={hidden ? -1 : 0} onClick={() => lScrollToId('formularz')}>
        Opisz swoją sprawę <SvgIcon name="arrow-right" size={16} />
      </button>
    </div>);

}

/* ============================================================
   Signature widget — interactive „raport w trzech kolorach"
   ============================================================ */
const REPORT_FINDINGS = [
{ key: 'risk', label: 'Czerwone', badge: 'risk', tag: 'tag-risk', tagLabel: 'Ryzyko', icon: 'octagon-alert',
  entry: 'Hipoteka przymusowa w dziale IV — wymaga spłaty przed zakupem.',
  rec: 'Wstrzymaj podpisanie, dopóki hipoteka nie zostanie wykreślona albo jej spłata nie zostanie zabezpieczona z ceny w akcie.' },
{ key: 'warn', label: 'Żółte', badge: 'warn', tag: 'tag-warn', tagLabel: 'Do sprawdzenia', icon: 'triangle-alert',
  entry: 'Służebność przejazdu — do zweryfikowania przebieg i uciążliwość.',
  rec: 'Ustal dokładny przebieg na mapie i dopisz do umowy zapis zabezpieczający Twój sposób korzystania z działki.' },
{ key: 'ok', label: 'Zielone', badge: 'ok', tag: 'tag-ok', tagLabel: 'Bezpieczne', icon: 'circle-check',
  entry: 'Stan prawny zgodny z ewidencją — można bezpiecznie podpisywać.',
  rec: 'Brak przeszkód prawnych po tej stronie — możesz przejść do umowy.' }];

function ReportShowcase() {
  const [active, setActive] = lUseState('risk');
  const tabsRef = lUseRef(null);
  const idx = REPORT_FINDINGS.findIndex((x) => x.key === active);
  const f = REPORT_FINDINGS[idx];
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = (idx + dir + REPORT_FINDINGS.length) % REPORT_FINDINGS.length;
    setActive(REPORT_FINDINGS[next].key);
    const btns = tabsRef.current ? tabsRef.current.querySelectorAll('[role="tab"]') : [];
    if (btns[next]) btns[next].focus();
  };
  return (
    <section className="section-py bg-light report-showcase" data-screen-label="00b Raport">
      <div className="wrap">
        <div className="report-showcase-grid">
          <div className="report-showcase-copy">
            <span className="eyebrow">Mój wyróżnik</span>
            <h2 className="display mt-4">
              Raport w trzech<br />
              <span className="italic" style={{ color: 'var(--text-body)' }}>kolorach.</span>
            </h2>
            <p className="lead mt-6" style={{ maxWidth: '34rem' }}>
              Zamiast opinii na dwadzieścia stron dostajesz czytelny raport: każde ryzyko oznaczam kolorem, opisuję konsekwencje i podaję konkretną rekomendację. Wiesz od razu, co jest bezpieczne, co wymaga uwagi, a czego lepiej nie podpisywać.
            </p>
            <ul className="report-legend mt-8">
              <li><span className="report-dot report-dot--risk" /> <span><strong>Czerwone</strong> — zatrzymaj się, poważne ryzyko.</span></li>
              <li><span className="report-dot report-dot--warn" /> <span><strong>Żółte</strong> — do sprawdzenia lub zabezpieczenia.</span></li>
              <li><span className="report-dot report-dot--ok" /> <span><strong>Zielone</strong> — czysto, można działać.</span></li>
            </ul>
            <div className="report-actions mt-8">
            <button className="btn btn-primary" onClick={() => lScrollToId('formularz')}>
              Opisz swoją sprawę <SvgIcon name="arrow-right" size={16} />
            </button>
              <a className="btn btn-secondary" href="assets/przykladowy-raport-audyt-nieruchomosci.pdf" target="_blank" rel="noopener" download onClick={() => window.gtag && window.gtag('event', 'file_download', { file_name: 'przykladowy-raport-audyt-nieruchomosci.pdf' })}>
                <SvgIcon name="file-text" size={16} /> Pobierz przykładowy raport (PDF)
              </a>
            </div>
          </div>

          <div className="report-showcase-card">
            <div className="report">
              <div className="report-header">
                <div className="report-header-title">
                  <SvgIcon name="file-check" size={18} />
                  <span>Raport stanu prawnego</span>
                </div>
                <span className="tag tag-neutral">przykład poglądowy</span>
              </div>
              <div className="report-tabs" role="tablist" aria-label="Poziom ryzyka" ref={tabsRef} onKeyDown={onKey}>
                {REPORT_FINDINGS.map((x) =>
                <button
                  key={x.key}
                  role="tab"
                  id={'rtab-' + x.key}
                  aria-selected={active === x.key}
                  aria-controls="rpanel"
                  tabIndex={active === x.key ? 0 : -1}
                  className={`report-tab report-tab--${x.badge} ${active === x.key ? 'is-active' : ''}`}
                  onClick={() => setActive(x.key)}>
                  
                    <span className={`report-dot report-dot--${x.badge}`} />
                    {x.label}
                  </button>
                )}
              </div>
              <div className="report-finding report-finding--panel" id="rpanel" role="tabpanel" aria-labelledby={'rtab-' + f.key} key={f.key}>
                <span className={`finding-badge finding-badge--${f.badge}`}><LIcon name={f.icon} size={18} /></span>
                <div className="report-finding-body">
                  <div className="report-finding-top">
                    <p className="report-finding-entry">{f.entry}</p>
                    <span className={`tag ${f.tag}`}>{f.tagLabel}</span>
                  </div>
                  <p className="report-finding-rec"><strong>Rekomendacja:</strong> {f.rec}</p>
                </div>
              </div>
            </div>
            <p className="report-showcase-note">Fragment przykładowego raportu. W Twojej sprawie każdy wpis dotyczy realnych dokumentów Twojej nieruchomości.</p>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Landing intro — editorial brand statement (sits above the form)
   ============================================================ */
function LandingIntro({ setRoute }) {
  return (
    <section className="bg-dark landing-intro relative overflow-hidden" data-screen-label="00a Wstęp">
      <div className="orb" style={{ width: 640, height: 640, top: -240, right: -200, opacity: 'calc(0.16 * var(--ambient-on))' }} />
      <div className="wrap relative" style={{ zIndex: 2 }}>
        <div className="landing-intro-head">
          <span className="eyebrow on-dark">Adwokat · doktor nauk prawnych · specjalista prawa nieruchomości</span>
          <h1 className="display landing-intro-title mt-6" style={{ color: '#fff' }}>
            Nie musisz znać się na prawie,<br />
            żeby bezpiecznie<br />
            <span className="italic" style={{ color: 'var(--brand-primary-light)' }}>kupować i inwestować.</span>
          </h1>
        </div>

        <div className="landing-intro-grid">
          <div className="landing-intro-text">
            <p className="lead landing-intro-lead">
              Od tego masz mnie.<br />
              Sprawdzam umowy, wychwytuję ukryte ryzyka i reguluję stany prawne, zanim staną się Twoim problemem.<br />
              Prowadzę sprawę od pierwszej oceny aż po ostateczny podpis.<br />
              Zdalnie, prostym językiem, z ceną i terminem ustalonymi z góry.<br />
              A zanim cokolwiek zlecisz, wstępnie przeanalizuję Twoją sprawę bezpłatnie i powiem wprost, na czym stoisz.
            </p>
            <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn btn-on-dark" onClick={() => lScrollToId('formularz')}>
                Opisz swoją sprawę <SvgIcon name="arrow-right" size={16} />
              </button>
              <button
                className="btn btn-secondary"
                style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
                onClick={() => lScrollToId('obszary')}>
                
                Obszary praktyki
              </button>
            </div>
            <p className="small mt-4" style={{ color: 'var(--text-on-dark-3)' }}>
              Bezpłatnie, w ciągu 24 h roboczych. Zero spamu, zero zobowiązań.
            </p>
          </div>

          <div className="landing-intro-portrait">
            <div className="portrait-card">
              <img src={window.__resources?.portrait1 || "assets/maciej-muzyka.webp"} alt="adw. dr Maciej Muzyka" width="1100" height="1100" decoding="async" />
              <div className="portrait-scrim" />
              <div className="portrait-caption">
                <p className="font-bold" style={{ fontSize: '1.5rem' }}>Maciej Muzyka</p>
                <p className="font-semibold" style={{ color: 'var(--brand-primary-light)', letterSpacing: '0.04em', fontSize: '0.875rem' }}>
                  Adwokat · Doktor nauk prawnych
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Landing hero — headline + form side by side
   ============================================================ */
function LandingHero() {
  return (
    <section id="formularz" className="landing-hero relative overflow-hidden">
      <div className="orb" style={{ width: 620, height: 620, top: -260, left: -180, opacity: 'calc(0.10 * var(--ambient-on))' }} />
      <div className="wrap relative" style={{ zIndex: 2 }}>
        <div className="landing-hero-grid">
          <div className="landing-hero-text">
            <span className="eyebrow">Bezpłatna analiza sprawy</span>
            <h2 className="display display--xl mt-6">
              Bezpłatnie<br />
              sprawdzę<br />
              <span className="accent">Twoją sprawę.</span>
            </h2>
            <p className="lead mt-6" style={{ maxWidth: '32rem' }}>
              Kupujesz, sprzedajesz, inwestujesz albo masz spór o nieruchomość? Opisz sprawę w kilku zdaniach — odpiszę z bezpłatną oceną ryzyka i konkretną propozycją kolejnego kroku. Kontakt prowadzę przede wszystkim mailowo, w pełni zdalnie.
            </p>

            <div className="landing-hero-meta mt-8">
              <GoogleBadge />
              <ul className="trust-points">
                <li><LIcon name="shield-check" size={16} /> Tajemnica adwokacka</li>
                <li><LIcon name="map-pin" size={16} /> Cała Polska, zdalnie</li>
                <li><LIcon name="wallet" size={16} /> Wycena z góry, na piśmie</li>
              </ul>
            </div>
          </div>

          <div className="landing-hero-form">
            <QualificationForm />
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Stats band — numbers count up from zero when scrolled into view
   ============================================================ */
function useInView(ref, threshold = 0.3) {
  const [seen, setSeen] = lUseState(false);
  lUseEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * (1 - threshold) && r.bottom > 0) { setSeen(true); return true; }
      return false;
    };
    if (typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setSeen(true); obs.disconnect(); }
      });
    }, { threshold });
    obs.observe(el);
    // Fallback for wrapper scrollers where IO on the viewport may not fire:
    // check immediately, then on any scroll (capture phase catches nested scrollers).
    if (check()) { obs.disconnect(); return; }
    const onScroll = () => { if (check()) { obs.disconnect(); window.removeEventListener('scroll', onScroll, true); } };
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll, true); };
  }, [seen]);
  return seen;
}

function CountUp({ value, duration = 1900, grouped = false, suffix = '', start = false }) {
  const [n, setN] = lUseState(0);
  lUseEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {setN(value);return;}
    let raf;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      setN(Math.round(ease(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, duration]);
  const text = grouped ? n.toLocaleString('pl-PL') : String(n);
  return <span>{text}{suffix}</span>;
}

function StatsBand() {
  const ref = lUseRef(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} className="bg-dark stats-band relative overflow-hidden">
      <div className="orb" style={{ width: 460, height: 460, bottom: '-40%', right: '-8%', opacity: 'calc(0.22 * var(--ambient-on))' }} />
      <div className="wrap relative" style={{ zIndex: 2 }}>
        <div className="stats-band-grid">
          {LANDING_STATS.map((s, i) =>
          <div key={i} className="stat-cell">
              <div className="stat-num">
                <CountUp value={s.value} grouped={s.grouped} suffix={s.suffix} start={inView} />
              </div>
              <div className="stat-label">{s.l}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   How it works — vertical timeline, revealed on scroll
   ============================================================ */
function HowItWorks() {
  const timelineRef = lUseRef(null);
  const [fill, setFill] = lUseState(0);
  const [track, setTrack] = lUseState({ top: 0, height: 0 });
  const [visible, setVisible] = lUseState(() => HOW_STEPS.map(() => false));

  lUseEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const steps = [...el.querySelectorAll('.how-step')];

    // line runs from the FIRST marker centre to the LAST marker centre only
    const measure = () => {
      const markers = steps.map((s) => s.querySelector('.how-step-marker'));
      if (!markers[0] || !markers[markers.length - 1]) return;
      const tTop = el.getBoundingClientRect().top;
      const first = markers[0].getBoundingClientRect();
      const last = markers[markers.length - 1].getBoundingClientRect();
      const c1 = first.top - tTop + first.height / 2;
      const cL = last.top - tTop + last.height / 2;
      setTrack({ top: c1, height: Math.max(0, cL - c1) });
    };

    let io;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = steps.indexOf(e.target);
            if (idx >= 0) setVisible((v) => { if (v[idx]) return v; const n = v.slice(); n[idx] = true; return n; });
          }
        });
      }, { threshold: 0.4, rootMargin: '0px 0px -12% 0px' });
      steps.forEach((s) => io.observe(s));
    } else {
      setVisible(HOW_STEPS.map(() => true));
    }

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const p = (vh * 0.5 - r.top) / (r.height || 1);
      setFill(Math.max(0, Math.min(1, p)));
    };
    const onResize = () => { measure(); onScroll(); };

    measure();
    onScroll();
    const raf = requestAnimationFrame(measure);
    const t = setTimeout(measure, 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return (
    <section className="section-py how-section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Jak to działa</span>
          <h2 className="h2 mt-4">
            Pięć kroków.<br />
            <span className="italic" style={{ color: 'var(--text-body)' }}>Bez niespodzianek.</span>
          </h2>
        </div>
        <div className="how-timeline mt-12" ref={timelineRef}>
          <div className="how-timeline-track" aria-hidden="true" style={{ top: track.top + 'px', height: track.height + 'px' }}>
            <div className="how-timeline-fill" style={{ height: (fill * 100) + '%' }} />
          </div>
          {HOW_STEPS.map((s, i) =>
          <div key={s.n} className={`how-step ${visible[i] ? 'is-visible' : ''}`} style={{ transitionDelay: (visible[i] ? Math.min(i, 1) * 80 : 0) + 'ms' }}>
              <div className="how-step-marker"><span>{s.n}</span></div>
              <div className="how-step-body">
                <h3 className="how-step-title">{s.t}</h3>
                <p className="body mt-2">{s.d}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Service search — replaces the „most popular” featured tiles
   ============================================================ */
function ServiceSearch({ setRoute }) {
  const [q, setQ] = lUseState('');
  const all = lUseRef(null);
  if (!all.current) {
    const out = [];
    (window.SERVICE_BLOCKS || []).forEach((b) =>
    (b.services || []).forEach((s) =>
    out.push({ slug: s.slug, title: s.title, desc: s.desc || '', icon: s.icon, blockTitle: b.title })));
    all.current = out;
  }
  const norm = (s) => (s || '').toString().toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const nq = norm(q.trim());
  const results = nq.length < 2 ? [] :
  all.current.filter((s) => norm(s.title).includes(nq) || norm(s.desc).includes(nq) || norm(s.blockTitle).includes(nq)).slice(0, 8);

  lUseEffect(() => {
    if (window.lucide) {const t = setTimeout(() => window.lucide.createIcons(), 10);return () => clearTimeout(t);}
  }, [q]);

  return (
    <div className="svc-search mt-10">
      <div className="svc-search-box">
        <LIcon name="search" size={20} />
        <input
          type="text"
          className="svc-search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Szukaj usługi — np. zadatek, słupy, hipoteka, WZ…"
          aria-label="Szukaj usługi prawnej" />

        {q &&
        <button className="svc-search-clear" onClick={() => setQ('')} aria-label="Wyczyść wyszukiwanie">
            <LIcon name="x" size={18} />
          </button>}
      </div>
      {nq.length >= 2 &&
      <div className="svc-search-results">
          {results.length === 0 ?
        <div className="svc-search-empty">
              Brak dopasowań dla „{q.trim()}”.{' '}
              <button className="btn-link" onClick={() => lScrollToId('formularz')}>Opisz sprawę — wskażę kierunek</button>
            </div> :

        results.map((s) =>
        <button key={s.slug} className="svc-search-item" onClick={() => setRoute('usluga', s.slug)}>
              <span className="svc-search-item-icon"><LIcon name={s.icon} size={18} /></span>
              <span className="svc-search-item-text">
                <span className="svc-search-item-title">{s.title}</span>
                <span className="svc-search-item-block">{s.blockTitle}</span>
              </span>
              <LIcon name="arrow-right" size={16} className="svc-search-item-arrow" />
            </button>)}
        </div>}
    </div>);

}

/* ============================================================
   Practice areas (service search + block grid)
   ============================================================ */
function PracticeAreas({ setRoute }) {
  const { BlockCard } = window;
  return (
    <section id="obszary" className="section-py bg-light">
      <div className="wrap">
        <div className="section-head section-head--center">
          <span className="eyebrow">Usługi prawne</span>
          <h2 className="display mt-4">
            Z czym<br />
            <span className="italic" style={{ color: 'var(--text-body)' }}>mogę Ci pomóc.</span>
          </h2>
          <p className="lead mt-6">
            Od sprawdzenia nieruchomości przed zakupem, przez księgi wieczyste i warunki zabudowy, po spory i odszkodowania — wyłącznie prawo nieruchomości. Nie wiesz, gdzie pasuje Twoja sprawa? Wpisz ją poniżej albo przejrzyj obszary praktyki.
          </p>
        </div>

        <ServiceSearch setRoute={setRoute} />

        <div className="block-grid mt-12">
          {window.SERVICE_BLOCKS.map((b) =>
          <BlockCard key={b.id} block={b} setRoute={setRoute} />
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Standards
   ============================================================ */
function Standards() {
  return (
    <section className="section-py">
      <div className="wrap">
        <div className="section-head section-head--center">
          <span className="eyebrow">Standardy współpracy</span>
          <h2 className="h2 mt-4">Jak ze mną pracujesz.</h2>
          <p className="lead mt-6" style={{ maxWidth: '40rem' }}>
            
          </p>
        </div>
        <div className="standards-grid mt-12">
          {STANDARDS.map((s, i) =>
          <div key={i} className="standard-cell">
              <span className="icon-tile icon-tile--info"><LIcon name={s.icon} size={22} /></span>
              <h3 className="font-bold mt-5" style={{ fontSize: '1.1875rem', color: 'var(--text-main)' }}>{s.t}</h3>
              <p className="body mt-3">{s.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Reviews band — Google rating + testimonials reuse
   ============================================================ */
function ReviewsBand() {
  const reviews = window.TESTIMONIALS || [];
  const { count: reviewsCount } = useGoogleRating();
  return (
    <section className="section-py bg-light" id="opinie">
      <div className="wrap">
        <div className="section-head section-head--center">
          <span className="eyebrow">Opinie klientów</span>
          <h2 className="h2 mt-4">Co mówią klienci.</h2>
          <p className="lead mt-6" style={{ maxWidth: '38rem' }}></p>
          <div className="mt-6"><GoogleBadge /></div>
        </div>
        <div className="reviews-grid mt-12">
          {reviews.map((t, i) =>
          <figure key={i} className="card review-card">
              <div className="review-stars" aria-label="5 na 5 gwiazdek">★★★★★</div>
              <blockquote className="body review-text">„{t.text}”</blockquote>
              <figcaption className="review-meta">
                <span className="review-avatar">{t.name.charAt(0)}</span>
                <span><span className="font-bold" style={{ color: 'var(--text-main)', display: 'block' }}>{t.name}</span><span className="small">{t.role}</span></span>
              </figcaption>
            </figure>
          )}
        </div>
        <p className="small mt-8" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Wszystkie {reviewsCount} {opinieLabel(reviewsCount)} znajdziesz w <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>wizytówce Google</a>.</p>
      </div>
    </section>);

}

/* ============================================================
   Case studies — z praktyki (dane klientów zmienione)
   ============================================================ */
const CASE_STUDIES = [
  { tag: 'Roszczenia wobec dewelopera', title: 'Wadliwa izolacja, grzyb w salonie, deweloper „pudruje” naprawy', situation: 'Klient kupił apartament z ogródkiem. Po pierwszym większym deszczu w salonie pojawiła się wilgoć i grzyb, a parkiet spuchł. Deweloper dwa razy przysłał ekipę, która zamalowała skutki, nie usuwając przyczyny.', action: 'Zleciłem prywatną opinię rzeczoznawcy budowlanego, który wycenił prawidłowe wykonanie izolacji (z rozkuciem tarasu) i wymianę podłogi na 45 000 zł. Doliczyłem szkodę za trzy miesiące bez możliwości korzystania z salonu i wezwałem dewelopera do zapłaty.', result: 'Ugoda zamiast kolejnej „kosmetycznej” naprawy: deweloper wypłacił 52 000 zł. Klient wynajął własną ekipę i zrobił to raz, a dobrze.', metric: '52 000 zł', metricLabel: 'wypłacone w ugodzie' },
  { tag: 'Najem', title: 'Najemcy przestali płacić po trzech miesiącach', situation: 'Właścicielka dwupokojowego mieszkania w Warszawie wynajęła je młodemu małżeństwu. Po trzech miesiącach czynsz przestał wpływać. Przy zwykłej umowie czekałaby ją wielomiesięczna sprawa o eksmisję.', action: 'Przy zawieraniu umowy przekonałem ją do najmu okazjonalnego z notarialnym oświadczeniem najemców. Po powstaniu zaległości wypowiedziałem umowę, uzyskałem klauzulę wykonalności i skierowałem sprawę wprost do komornika — bez procesu o eksmisję.', result: 'Lokal odzyskany w niecałe trzy miesiące zamiast — realistycznie — roku. Koszt zabezpieczenia przy podpisywaniu umowy: kilkaset złotych u notariusza.', metric: '< 3 mies.', metricLabel: 'do odzyskania mieszkania' },
  { tag: 'Planowanie przestrzenne', title: 'Działka rolna na skraju miasta a nowy plan ogólny', situation: 'Klienci mieli dużą działkę rolną na obrzeżach miasta i plany budowy w kolejnych latach. Gmina przystąpiła do planu ogólnego — bez ujęcia działki w obszarze uzupełnienia zabudowy, po 1 września 2026 r. uzyskanie warunków zabudowy stałoby się niemożliwe.', action: 'Przeanalizowałem projekt planu i sytuację działki, złożyłem w imieniu klientów formalne wnioski do planu ogólnego z argumentacją prawną i urbanistyczną, a na etapie wyłożenia projektu pilnowałem, czy zostały uwzględnione.', result: 'Teren został ujęty w obszarze uzupełnienia zabudowy. Klienci zachowali możliwość zabudowy działki na nowych zasadach.', metric: 'OUZ', metricLabel: 'działka w obszarze zabudowy' },
];

function CaseStudies() {
  return (
    <section className="section-py" id="z-praktyki">
      <div className="wrap">
        <div className="section-head section-head--center">
          <span className="eyebrow">Z praktyki</span>
          <h2 className="h2 mt-4">Trzy sprawy, trzy wyniki.</h2>
          <p className="lead mt-6" style={{ maxWidth: '40rem' }}>Przykłady z mojej praktyki. Dane klientów zmienione, przebieg i wyniki — prawdziwe.</p>
        </div>
        <div className="cases-grid mt-12">
          {CASE_STUDIES.map((c, i) =>
          <article key={i} className="card case-card">
              <span className="eyebrow">{c.tag}</span>
              <h3 className="font-bold mt-3" style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.3, textWrap: 'pretty' }}>{c.title}</h3>
              <dl className="case-steps mt-4">
                <dt>Sytuacja</dt><dd>{c.situation}</dd>
                <dt>Co zrobiłem</dt><dd>{c.action}</dd>
                <dt>Wynik</dt><dd>{c.result}</dd>
              </dl>
              <div className="case-metric"><span className="case-metric-num">{c.metric}</span><span className="small">{c.metricLabel}</span></div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* Trust pillars grid (same card/grid look as before; no stars, no names) */
function TrustPillars() {
  return (
    <div className="wrap" style={{ marginTop: '3rem' }}>
      <div className="grid" style={{ gap: 'var(--d-gap)', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))' }}>
        {window.TRUST_PILLARS.map((p, i) =>
        <div key={i} className="card trust-pillar">
            <span className="icon-tile icon-tile--info"><LIcon name={p.icon} size={22} /></span>
            <h3 className="font-bold mt-5" style={{ fontSize: '1.1875rem', color: 'var(--text-main)' }}>{p.title}</h3>
            <p className="body mt-3">{p.text}</p>
          </div>
        )}
      </div>
      {/* Slot na przyszłość: prawdziwe, zebrane za zgodą klientów opinie (imię/inicjał · rola · treść).
          Renderują się automatycznie, gdy window.TESTIMONIALS przestanie być puste. Nie wypełniać zmyśloną treścią. */}
      {window.TESTIMONIALS && window.TESTIMONIALS.length > 0 &&
      <div className="grid grid-3" style={{ gap: 'var(--d-gap)', marginTop: 'var(--d-gap)' }}>
          {window.TESTIMONIALS.map((t, i) =>
        <div key={i} className="card">
              <p className="body" style={{ fontStyle: 'italic', color: 'var(--slate-700)', fontSize: '1.0625rem' }}>„{t.text}”</p>
              <div className="flex gap-4 items-center mt-8" style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--slate-100)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand-primary-light)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold" style={{ color: 'var(--text-main)' }}>{t.name}</div>
                  <div className="small">{t.role}</div>
                </div>
              </div>
            </div>
        )}
        </div>}
    </div>);

}

/* ============================================================
   FAQ section (landing-specific)
   ============================================================ */
function LandingFAQ({ setRoute }) {
  return (
    <section className="section-py">
      <div className="wrap">
        <div className="section-head section-head--center">
          <span className="eyebrow">FAQ</span>
          <h2 className="display mt-4">
            Zanim<br />
            <span className="italic" style={{ color: 'var(--text-body)' }}>napiszesz.</span>
          </h2>
          <p className="lead mt-6">
            Najczęstsze pytania o bezpłatną analizę. Jeśli czegoś tu brakuje — po prostu zapytaj w formularzu.
          </p>
        </div>
        <div className="faq-teaser-body mt-12">
          <LFAQAccordion items={window.FAQ_HOME} startOpen={0} />
          <div className="text-center mt-8">
            <button className="btn-link" onClick={() => setRoute('faq')}>
              Wszystkie pytania (FAQ) <LIcon name="arrow-right" size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Final CTA + map
   ============================================================ */
function FinalCTA() {
  return (
    <section className="section-py bg-dark relative overflow-hidden">
      <div className="orb" style={{ width: 520, height: 520, top: '10%', left: '-12%', opacity: 'calc(0.2 * var(--ambient-on))' }} />
      <div className="wrap relative text-center" style={{ zIndex: 2, textAlign: 'center', maxWidth: '48rem', marginInline: 'auto' }}>
        <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Bezpłatnie · w 24 h</span>
        <h2 className="display mt-4" style={{ color: '#fff' }}>
          Lepiej zapytać teraz<br />
          <span style={{ color: 'var(--brand-primary-light)' }}>niż żałować po podpisie.</span>
        </h2>
        <p className="lead mt-6" style={{ color: 'var(--text-on-dark-2)' }}>
          Jeśli kupujesz, sprzedajesz albo coś Cię niepokoi w dokumentach — opisz sprawę. Wstępna analiza jest bezpłatna i do niczego nie zobowiązuje.
        </p>
        <div className="flex gap-3 mt-8 justify-center" style={{ flexWrap: 'wrap' }}>
          <button className="btn btn-on-dark" onClick={() => lScrollToId('formularz')}>
            Opisz swoją sprawę <SvgIcon name="arrow-right" size={16} />
          </button>
          <a className="btn btn-secondary" href="mailto:maciej.muzyka@mecenasodnieruchomosci.pl" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            Napisz e-mail
          </a>
        </div>
      </div>
    </section>);

}

function PolandMap() {
  const cities = [
  { name: 'Warszawa', role: 'spotkania', x: 575, y: 350 },
  { name: 'Lublin', role: 'siedziba', x: 700, y: 480 }];

  return (
    <div className="pl-map" role="img" aria-label="Mapa Polski — kancelaria w Lublinie (siedziba) i Warszawie (spotkania), sprawy z całej Polski">
      <svg viewBox="0 0 885 825" xmlns="http://www.w3.org/2000/svg">
        <path className="pl-map-shape" d="M60 150 L78 128 L96 150 L120 140 L175 120 L220 78 L262 62 L315 60 L360 58 L378 30 L398 24 L415 52 L400 92 L432 84 L452 60 L520 48 L565 44 L560 74 L600 72 L690 74 L762 78 L800 92 L778 100 L800 118 L842 175 L860 232 L828 258 L855 340 L822 358 L862 388 L852 460 L828 552 L858 600 L870 660 L862 690 L815 700 L800 748 L828 782 L762 742 L700 720 L648 752 L598 702 L548 718 L512 700 L470 716 L430 690 L372 704 L300 686 L250 636 L205 602 L168 572 L142 556 L122 588 L100 560 L82 578 L68 545 L46 470 L58 398 L30 350 L44 300 L12 288 L40 212 L34 178 Z" />
        {cities.map((c) =>
        <g key={c.name} className="pl-city">
            <circle className="pl-city-pulse" cx={c.x} cy={c.y} r="14" />
            <circle className="pl-city-dot" cx={c.x} cy={c.y} r="11" />
            <text className="pl-city-name" x={c.x} y={c.y + 48} textAnchor="middle">{c.name}</text>
            <text className="pl-city-role" x={c.x} y={c.y + 76} textAnchor="middle">{c.role}</text>
          </g>
        )}
      </svg>
    </div>);

}

function MapSection() {
  return (
    <section className="map-section">
      <div className="map-info">
        <span className="eyebrow">Kancelaria</span>
        <h3 className="h2 mt-4">Lublin i Warszawa —<br />sprawy z całej Polski</h3>
        <ul className="map-info-list mt-8">
          <li><LIcon name="map-pin" size={20} style={{ color: 'var(--brand-primary)' }} /><span><span className="loc-label">Siedziba kancelarii</span>ul. Cicha 4/5<br />20-078 Lublin</span></li>
          <li><LIcon name="map-pin" size={20} style={{ color: 'var(--brand-primary)' }} /><span><span className="loc-label">Spotkania osobiste — Warszawa</span>ul. Bracka 20/lok. 7A<br />00-028 Warszawa</span></li>
          <li><LIcon name="mail" size={20} style={{ color: 'var(--brand-primary)' }} /><span style={{ wordBreak: 'break-all' }}>maciej.muzyka@mecenasodnieruchomosci.pl</span></li>
          <li><LIcon name="phone" size={20} style={{ color: 'var(--brand-primary)' }} /><span>+48 884 784 984<br /><span className="small">Preferowany kontakt mailowy</span></span></li>
        </ul>
        <p className="small mt-6" style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '30rem' }}>
          Sprawy prowadzę zdalnie, w całej Polsce — kontakt przede wszystkim mailowo. Gdy sprawa wymaga osobistego spotkania, mam do dyspozycji lokal w Warszawie.
        </p>
      </div>
      <div className="map-embed map-embed--dual">
        <div className="map-embed-item">
          <div className="map-embed-label"><LIcon name="map-pin" size={16} /> Lublin — siedziba <span>ul. Cicha 4/5</span></div>
          <iframe
            title="Mapa — Lublin, ul. Cicha 4/5"
            src="https://www.google.com/maps?q=ul.+Cicha+4,+20-078+Lublin&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
          
        </div>
        <div className="map-embed-item">
          <div className="map-embed-label"><LIcon name="map-pin" size={16} /> Warszawa — spotkania <span>ul. Bracka 20/7A</span></div>
          <iframe
            title="Mapa — Warszawa, ul. Bracka 20"
            src="https://www.google.com/maps?q=ul.+Bracka+20,+00-028+Warszawa&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
          
        </div>
      </div>
    </section>);

}

/* ============================================================
   LandingPage — assembles everything
   ============================================================ */
function LandingPage({ setRoute }) {
  return (
    <main data-screen-label="00 Landing">
      <LandingIntro setRoute={setRoute} />
      <LandingHero />
      <StatsBand />
      <HowItWorks />
      <PracticeAreas setRoute={setRoute} />
      <CaseStudies />
      <LAboutBlock />
      <Standards />
      <ReviewsBand />
      <LandingFAQ setRoute={setRoute} />
      <FinalCTA />
      <MobileCTABar />
    </main>);

}

Object.assign(window, { LandingPage, QualificationForm, GoogleBadge, ReportShowcase, MapSection, MobileCTABar, lScrollToId });
