/* tools.jsx — narzędzia leadowe: kalkulator wynagrodzenia za urządzenia przesyłowe
   i zapis na powiadomienie o planie ogólnym. Ładowane po service-pages.jsx, przed app.jsx. */
const { useState: tUseState } = React;
const TIcon = (props) => { const I = window.Icon; return I ? <I {...props} /> : null; };
/* Ten sam formularz Formspree co „Opisz swoją sprawę”. Dla alertów można podać osobny endpoint. */
const TOOLS_ENDPOINT = 'https://formspree.io/f/xjgqoaae';
const TOOLS_EMAIL = 'maciej.muzyka@mecenasodnieruchomosci.pl';

/* ============================================================
   Kalkulator — założenia metodyczne (uproszczone, jak w operatach)
   ============================================================ */
const CALC_DEVICES = [
  { id: 'slup-nn', label: 'Słup lub linia niskiego napięcia (do 1 kV)', width: 4, k: [0.3, 0.5] },
  { id: 'slup-sn', label: 'Słup lub linia średniego napięcia (15–30 kV)', width: 7, k: [0.4, 0.6] },
  { id: 'linia-wn', label: 'Linia wysokiego napięcia (110 kV i więcej)', width: 20, k: [0.6, 0.9] },
  { id: 'gazociag', label: 'Gazociąg', width: 6, k: [0.4, 0.7] },
  { id: 'wodkan', label: 'Wodociąg, kanalizacja, ciepłociąg', width: 4, k: [0.2, 0.4] },
  { id: 'trafo', label: 'Stacja transformatorowa', area: 120, k: [0.8, 1.0] },
];
const CALC_LAND = [
  { id: 'budowlana', label: 'Budowlana / mieszkaniowa', price: 250 },
  { id: 'rolna', label: 'Rolna', price: 15 },
  { id: 'inna', label: 'Rekreacyjna, leśna, inna', price: 60 },
];
const CALC_RATE = 0.05; /* roczny udział w wartości pasa przy bezumownym korzystaniu */

function calcRound(v) { if (v < 1000) return Math.round(v / 50) * 50; if (v < 20000) return Math.round(v / 100) * 100; return Math.round(v / 500) * 500; }
function calcFmt(v) { return calcRound(v).toLocaleString('pl-PL') + ' zł'; }
function calcRange(a, b) { return calcRound(a) === calcRound(b) ? calcFmt(a) : calcFmt(a) + ' – ' + calcFmt(b); }
function calcCompute({ device, land, length, price, years, hasTitle }) {
  const d = CALC_DEVICES.find((x) => x.id === device);
  const l = CALC_LAND.find((x) => x.id === land);
  const area = d.area || Math.max(0, length) * d.width;
  const p = price > 0 ? price : l.price;
  const base = area * p;
  const serv = [base * d.k[0], base * d.k[1]];
  const y = Math.min(10, Math.max(0, years));
  const back = hasTitle ? [0, 0] : [base * d.k[0] * CALC_RATE * y, base * d.k[1] * CALC_RATE * y];
  return { device: d, land: l, area, price: p, serv, back, total: [serv[0] + back[0], serv[1] + back[1]], years: y, hasTitle };
}

function CalcResult({ r, setRoute }) {
  return (
    <div className="card calc-result anim-fade-up">
      <span className="eyebrow">Orientacyjny wynik</span>
      <div className="calc-total mt-4">
        <span className="calc-total-label">Łącznie możesz żądać około</span>
        <span className="calc-total-num">{calcRange(r.total[0], r.total[1])}</span>
      </div>
      <dl className="calc-rows mt-6">
        <div><dt>Służebność przesyłu — jednorazowo, na przyszłość</dt><dd>{calcRange(r.serv[0], r.serv[1])}</dd></div>
        <div><dt>Bezumowne korzystanie — {r.years} {r.years === 1 ? 'rok' : r.years < 5 ? 'lata' : 'lat'} wstecz</dt><dd>{r.hasTitle ? 'zwykle nie przysługuje' : calcRange(r.back[0], r.back[1])}</dd></div>
      </dl>
      {r.hasTitle && <p className="small calc-note mt-4">Skoro służebność jest już wpisana w księdze, kluczowe jest, czy była odpłatna i czy obejmuje faktyczny pas zajęty przez urządzenia. To sprawdzam w dokumentach — bywa, że wpis jest bez wynagrodzenia albo dotyczy innego przebiegu.</p>}
      <details className="calc-assume mt-6">
        <summary>Przyjęte założenia</summary>
        <ul>
          <li>Pas służebności: {r.device.area ? `${r.area} m² (typowa powierzchnia stacji z dojazdem)` : `${r.area.toLocaleString('pl-PL')} m² — długość × ${r.device.width} m typowej szerokości strefy`}.</li>
          <li>Wartość gruntu: {r.price.toLocaleString('pl-PL')} zł/m² ({r.land.label.toLowerCase()}).</li>
          <li>Współczynnik współkorzystania: {r.device.k[0]}–{r.device.k[1]} — jak bardzo urządzenie ogranicza Ciebie, a nie firmę.</li>
          <li>Bezumowne korzystanie: ok. {Math.round(CALC_RATE * 100)}% wartości pasa rocznie, z uwzględnieniem współczynnika, maks. 10 lat wstecz.</li>
        </ul>
      </details>
      <p className="small calc-disclaimer mt-6">To orientacyjny przedział oparty na metodach stosowanych przez rzeczoznawców. Nie jest wyceną ani poradą prawną — ostateczna kwota zależy od operatu, stanu prawnego urządzeń (umowa, decyzja, zasiedzenie) i lokalnych cen. Wynik może różnić się w obie strony.</p>
      <button className="btn btn-primary mt-6" style={{ width: '100%' }} onClick={() => window.spScrollToForm && window.spScrollToForm()}>
        Sprawdź swoją sprawę bezpłatnie <TIcon name="arrow-right" size={16} />
      </button>
      <button className="btn-link mt-4" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }} onClick={() => setRoute('blogpost', 'sluzebnosc-przesylu-jak-obliczyc-wynagrodzenie')}>
        Jak liczą to rzeczoznawcy — artykuł <TIcon name="arrow-right" size={14} />
      </button>
    </div>
  );
}

function KalkulatorSlupyPage({ setRoute }) {
  const [f, setF] = tUseState({ device: 'slup-sn', land: 'budowlana', length: '', price: '', years: '10', hasTitle: 'no' });
  const [res, setRes] = tUseState(null);
  const [err, setErr] = tUseState('');
  const Breadcrumb = window.Breadcrumb, Band = window.CaseFormBand, Strip = window.ServiceTrustStrip;
  const dev = CALC_DEVICES.find((x) => x.id === f.device);
  const land = CALC_LAND.find((x) => x.id === f.land);
  const up = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setErr(''); };
  function compute(e) {
    e.preventDefault();
    if (!dev.area && !(Number(f.length) > 0)) { setErr('Podaj długość urządzenia na działce w metrach.'); return; }
    const r = calcCompute({ device: f.device, land: f.land, length: Number(f.length) || 0, price: Number(f.price) || 0, years: Number(f.years) || 0, hasTitle: f.hasTitle === 'yes' });
    setRes(r);
    if (window.gtag) window.gtag('event', 'calculator_used', { device: f.device, land: f.land, total_high: Math.round(r.total[1]) });
  }
  return (
    <main data-screen-label="Kalkulator — słupy na działce">
      <section className="bg-light" style={{ paddingBlock: '3rem 4rem', borderBottom: '1px solid var(--slate-100)' }}>
        <div className="wrap">
          {Breadcrumb && <Breadcrumb trail={[
            { label: 'Start', onClick: () => setRoute('landing') },
            { label: 'Służebności i odszkodowania', onClick: () => setRoute('blok', 'sluzebnosci-odszkodowania') },
            { label: 'Kalkulator' },
          ]} />}
          <div className="mt-8 section-head--center" style={{ maxWidth: '46rem', marginInline: 'auto' }}>
            <span className="eyebrow">Kalkulator</span>
            <h1 className="display mt-4">Ile należy Ci się za słupy, linie i rury na działce?</h1>
            <p className="lead mt-6">Podaj kilka danych o urządzeniu i działce. W kilka sekund pokażę orientacyjny przedział wynagrodzenia — za służebność na przyszłość i za lata bez umowy. Bez podawania danych osobowych.</p>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap calc-grid">
          <form className="card calc-form" onSubmit={compute} noValidate>
            <label className="calc-field">
              <span className="input-label">Co stoi lub biegnie przez działkę?</span>
              <select className="input" value={f.device} onChange={up('device')}>
                {CALC_DEVICES.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
              </select>
            </label>
            {!dev.area &&
            <label className="calc-field">
              <span className="input-label">Długość urządzenia na działce (m)</span>
              <input className={`input ${err ? 'input-error' : ''}`} type="number" min="1" step="1" inputMode="numeric" value={f.length} onChange={up('length')} placeholder="np. 60" />
              {err ? <span className="input-err">{err}</span> : <span className="calc-hint">Od granicy do granicy. Zmierz na geoportalu albo oszacuj — wynik i tak jest przedziałem. Przyjmę typową szerokość strefy: {dev.width} m.</span>}
            </label>}
            <div className="calc-field">
              <span className="input-label">Rodzaj działki</span>
              <div className="calc-seg" role="radiogroup" aria-label="Rodzaj działki">
                {CALC_LAND.map((l) =>
                <label key={l.id} className={f.land === l.id ? 'is-on' : ''}>
                  <input type="radio" name="calc-land" checked={f.land === l.id} onChange={() => { setF({ ...f, land: l.id }); }} />{l.label}
                </label>)}
              </div>
            </div>
            <div className="calc-two calc-field">
              <label>
                <span className="input-label">Wartość 1 m² gruntu (zł) <span className="qual-opt">(opcjonalnie)</span></span>
                <input className="input" type="number" min="1" step="1" inputMode="numeric" value={f.price} onChange={up('price')} placeholder={`np. ${land.price}`} />
                <span className="calc-hint">Nie znasz? Przyjmę typową wartość dla tego rodzaju gruntu.</span>
              </label>
              <label>
                <span className="input-label">Od ilu lat bez umowy?</span>
                <select className="input" value={f.years} onChange={up('years')}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((y) => <option key={y} value={String(y)}>{y === 10 ? '10 lat i więcej' : y === 1 ? '1 rok' : y < 5 ? `${y} lata` : `${y} lat`}</option>)}
                </select>
                <span className="calc-hint">Roszczenie obejmuje maks. 10 lat wstecz.</span>
              </label>
            </div>
            <div className="calc-field">
              <span className="input-label">Czy firma ma wpisaną służebność w księdze wieczystej?</span>
              <div className="calc-seg" role="radiogroup" aria-label="Wpis w księdze wieczystej">
                <label className={f.hasTitle === 'no' ? 'is-on' : ''}><input type="radio" name="calc-title" checked={f.hasTitle === 'no'} onChange={() => setF({ ...f, hasTitle: 'no' })} />Nie albo nie wiem</label>
                <label className={f.hasTitle === 'yes' ? 'is-on' : ''}><input type="radio" name="calc-title" checked={f.hasTitle === 'yes'} onChange={() => setF({ ...f, hasTitle: 'yes' })} />Tak, jest wpis</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-8" style={{ width: '100%' }}>
              Policz orientacyjną kwotę <TIcon name="calculator" size={16} />
            </button>
          </form>
          <div className="calc-result-col">
            {res ? <CalcResult r={res} setRoute={setRoute} /> :
            <div className="calc-empty">
              <span className="icon-tile icon-tile--info"><TIcon name="calculator" size={22} /></span>
              <p className="body">Wynik pojawi się tutaj. Wypełnij trzy pola po lewej — reszta jest opcjonalna.</p>
            </div>}
          </div>
        </div>
      </section>

      <section className="section-py bg-light">
        <div className="wrap">
          <div className="section-head--center">
            <span className="eyebrow">Jak to liczę</span>
            <h2 className="h2 mt-4">Trzy liczby, które decydują o kwocie.</h2>
          </div>
          <div className="calc-how mt-10">
            <div className="card"><span className="kicker-num">1</span><h3 className="font-bold mt-3" style={{ color: 'var(--text-main)' }}>Pas i jego wartość</h3><p className="body mt-2">Powierzchnia pasa zajętego przez urządzenie i jego strefę ochronną razy wartość 1 m² Twojego gruntu. Działka budowlana to inna liga niż rolna.</p></div>
            <div className="card"><span className="kicker-num">2</span><h3 className="font-bold mt-3" style={{ color: 'var(--text-main)' }}>Współczynnik współkorzystania</h3><p className="body mt-2">Określa, jak bardzo urządzenie ogranicza Ciebie: od ok. 0,2 dla rury głęboko pod ziemią do 1,0 dla stacji, pod którą nie zrobisz nic.</p></div>
            <div className="card"><span className="kicker-num">3</span><h3 className="font-bold mt-3" style={{ color: 'var(--text-main)' }}>Lata bez umowy</h3><p className="body mt-2">Za każdy rok bez tytułu prawnego — do 10 lat wstecz — należy się wynagrodzenie za bezumowne korzystanie. Po wyroku TK z grudnia 2025 r. firmy straciły argument „zasiedzieliśmy”.</p></div>
          </div>
        </div>
      </section>

      {Band && <Band eyebrow="Bezpłatna analiza" heading="Kalkulator pokazuje przedział. Ja pokażę, ile naprawdę możesz odzyskać." lead="Prześlij zdjęcia urządzeń, numer działki i pisma od firmy przesyłowej, jeśli je masz. W ciągu 24 h roboczych bezpłatnie ocenię, czy roszczenie jest realne i o jaką kwotę warto walczyć." />}
      {Strip && <Strip />}
    </main>
  );
}

/* Kafelek prowadzący do kalkulatora — filar i usługi „służebności”, wpisy o przesyle */
function KalkulatorTeaser({ setRoute }) {
  return (
    <section className="section-py">
      <div className="wrap">
        <div className="tool-teaser">
          <span className="tool-teaser-ic"><TIcon name="calculator" size={28} /></span>
          <div>
            <span className="eyebrow">Kalkulator</span>
            <h2 className="h2 mt-3" style={{ fontSize: 'clamp(1.4rem, 1rem + 1.4vw, 2rem)' }}>Ile należy Ci się za słupy i rury na działce?</h2>
            <p className="body mt-3">Rodzaj urządzenia, długość, rodzaj działki — w kilka sekund orientacyjny przedział wynagrodzenia za służebność i za lata bez umowy.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setRoute('kalkulator')}>Policz kwotę <TIcon name="arrow-right" size={16} /></button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Powiadomienie o planie ogólnym w gminie
   ============================================================ */
function PlanAlertBand() {
  const [s, setS] = tUseState({ gmina: '', email: '', dzialka: '', hp: '' });
  const [status, setStatus] = tUseState('idle');
  const [err, setErr] = tUseState({});
  const up = (k) => (e) => { setS({ ...s, [k]: e.target.value }); setErr({}); };
  async function submit(e) {
    e.preventDefault();
    if (s.hp) { setStatus('sent'); return; }
    const er = {};
    if (!s.gmina.trim()) er.gmina = 'Podaj gminę, w której leży działka.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) er.email = 'Adres e-mail wydaje się błędny.';
    if (Object.keys(er).length) { setErr(er); return; }
    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('Typ zgłoszenia', 'Powiadomienie o planie ogólnym');
      fd.append('Gmina', s.gmina.trim());
      fd.append('email', s.email.trim());
      fd.append('Numer działki', s.dzialka.trim() || '—');
      fd.append('Strona', location.href);
      fd.append('_subject', 'Alert plan ogólny: ' + s.gmina.trim() + ' — ' + s.email.trim());
      const r = await fetch(TOOLS_ENDPOINT, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      if (r.ok) { setStatus('sent'); if (window.gtag) window.gtag('event', 'plan_alert_signup', { gmina: s.gmina.trim() }); } else setStatus('error');
    } catch (e2) { setStatus('error'); }
  }
  const mailto = `mailto:${TOOLS_EMAIL}?subject=${encodeURIComponent('Powiadomienie o planie ogólnym — gmina ' + s.gmina)}`;
  return (
    <section className="section-py bg-dark relative overflow-hidden" id="plan-alert">
      <div className="orb" style={{ width: 480, height: 480, top: '-30%', right: '-10%', opacity: 'calc(0.2 * var(--ambient-on))' }} />
      <div className="wrap plan-alert">
        <div>
          <span className="eyebrow on-dark">Plan ogólny w Twojej gminie</span>
          <h2 className="h2 mt-4" style={{ color: '#fff' }}>Powiadomię Cię, gdy Twoja gmina wyłoży plan ogólny.</h2>
          <p className="lead mt-6" style={{ color: 'var(--text-on-dark-2)' }}>Od 1 września 2026 r. o możliwości zabudowy działki przesądza plan ogólny. Uwagi do projektu można składać tylko w krótkim oknie po jego wyłożeniu — kto je przegapi, traci wpływ. Podaj gminę i e-mail: gdy pojawi się projekt albo zbliży się termin uwag, dostaniesz krótką wiadomość, co to znaczy dla Twojej działki i co zrobić.</p>
        </div>
        <div className="plan-alert-form">
          {status === 'sent' ?
          <div className="plan-alert-done">
            <span className="icon-tile icon-tile--info"><TIcon name="bell-ring" size={22} /></span>
            <div>
              <h3 className="font-bold" style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Zapisane.</h3>
              <p className="body mt-2">Odezwę się, gdy w gminie {s.gmina.trim() || 'Twojej'} ruszy procedura planu ogólnego albo zbliży się termin uwag.</p>
              {document.getElementById('formularz') && <button className="btn-link mt-4" onClick={() => window.spScrollToForm && window.spScrollToForm()}>Masz działkę do sprawdzenia już teraz? Opisz sprawę <TIcon name="arrow-right" size={14} /></button>}
            </div>
          </div> :
          <form onSubmit={submit} noValidate>
            <input type="text" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" name="company" value={s.hp} onChange={up('hp')} placeholder="Nie wypełniaj tego pola" />
            <label className="calc-field" style={{ marginTop: 0 }}>
              <span className="input-label">Gmina</span>
              <input className={`input ${err.gmina ? 'input-error' : ''}`} type="text" value={s.gmina} onChange={up('gmina')} placeholder="np. Konopnica, Niemce, Lublin" autoComplete="address-level2" />
              {err.gmina && <span className="input-err">{err.gmina}</span>}
            </label>
            <div className="calc-two calc-field">
              <label>
                <span className="input-label">E-mail</span>
                <input className={`input ${err.email ? 'input-error' : ''}`} type="email" value={s.email} onChange={up('email')} placeholder="jan@example.com" autoComplete="email" />
                {err.email && <span className="input-err">{err.email}</span>}
              </label>
              <label>
                <span className="input-label">Numer działki <span className="qual-opt">(opcjonalnie)</span></span>
                <input className="input" type="text" value={s.dzialka} onChange={up('dzialka')} placeholder="np. 123/4, obręb 5" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-6" style={{ width: '100%' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Zapisuję…' : <React.Fragment>Powiadom mnie <TIcon name="bell" size={16} /></React.Fragment>}
            </button>
            {status === 'error' && <p className="input-err" style={{ marginTop: '0.75rem', textAlign: 'center' }}>Nie udało się zapisać. Napisz na <a href={mailto}>{TOOLS_EMAIL}</a>.</p>}
            <p className="small plan-alert-note">Jedna, dwie wiadomości w roku — tylko o Twojej gminie. Zrezygnujesz jednym mailem. Administrator danych: adw. dr Maciej Muzyka — <a href="#/polityka-prywatnosci">polityka prywatności</a>.</p>
          </form>}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Pływające skróty: telefon + WhatsApp (prawy dolny róg, wszystkie strony)
   ============================================================ */
const QC_PHONE = '+48884784984';
const QC_PHONE_LABEL = '+48 884 784 984';
const QC_WA_TEXT = 'Dzień dobry, piszę ze strony mecenasodnieruchomosci.pl w sprawie nieruchomości.';
function QuickContact() {
  const track = (m) => () => { if (window.gtag) window.gtag('event', 'contact_click', { method: m, page: location.hash || '#/' }); };
  return (
    <div className="quick-contact" aria-label="Szybki kontakt">
      <a className="qc-btn qc-btn--wa" href={`https://wa.me/${QC_PHONE.replace('+', '')}?text=${encodeURIComponent(QC_WA_TEXT)}`} target="_blank" rel="noopener noreferrer" onClick={track('whatsapp')} aria-label="Napisz na WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.07c0 2 .52 3.96 1.52 5.68L.58 23.3l5.69-1.49a11.34 11.34 0 0 0 5.78 1.47h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.34-8.04z"/></svg>
        <span className="qc-tip">WhatsApp</span>
      </a>
      <a className="qc-btn qc-btn--tel" href={`tel:${QC_PHONE}`} onClick={track('phone')} aria-label={`Zadzwoń: ${QC_PHONE_LABEL}`}>
        <TIcon name="phone" size={22} />
        <span className="qc-tip">{QC_PHONE_LABEL}</span>
      </a>
    </div>
  );
}

Object.assign(window, { KalkulatorSlupyPage, KalkulatorTeaser, PlanAlertBand, QuickContact });
