/* service-pages.jsx — v3 page components: services overview, pillar pages,
   service detail (full + lite), full FAQ, and the reusable case-form band.
   Loaded after landing.jsx (uses window.QualificationForm, FAQAccordion, Icon). */

const { Icon: SIcon, QualificationForm: SQualForm, FAQAccordion: SFAQAccordion, ServiceIcon } = window;

/* Polish plural for „usługa" */
function pluralUslugi(n) {
  if (n === 1) return 'usługa';
  const d = n % 10, dd = n % 100;
  return d >= 2 && d <= 4 && !(dd >= 12 && dd <= 14) ? 'usługi' : 'usług';
}

/* Usługi analityczne, które kończą się „raportem w trzech kolorach" */
const REPORT_SERVICE_SLUGS = new Set([
  'audyt-stanu-prawnego-nieruchomosci',
  'sprawdzenie-umowy-deweloperskiej',
  'sprawdzenie-umowy-rezerwacyjnej',
  'analiza-umowy-przedwstepnej']);


function spScrollToForm() {
  const el = document.getElementById('formularz');
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

/* ============================================================
   Trust strip (service/pillar pages)
   ============================================================ */
function ServiceTrustStrip() {
  const items = [
    { i: 'shield-check', l: 'Tajemnica adwokacka · OC' },
    { i: 'map-pin', l: 'W pełni zdalnie, w całej Polsce' },
    { i: 'scale', l: 'Praktyka wyłącznie w prawie nieruchomości' },
    { i: 'badge-check', l: 'adw. dr Maciej Muzyka · LUB/ADW/1702' },
  ];
  return (
    <div className="bg-light" style={{ paddingBlock: '1.5rem', borderBlock: '1px solid var(--slate-100)' }}>
      <div className="wrap">
        <ul className="cred-strip">
          {items.map((it, i) => (
            <li key={i}>
              <SIcon name={it.i} size={18} style={{ color: 'var(--brand-primary)' }} />
              <span>{it.l}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ============================================================
   Reusable case-form band — the single conversion point.
   Sits at the bottom of every service & pillar page (id="formularz").
   ============================================================ */
function CaseFormBand({ eyebrow, heading, lead }) {
  const GBadge = window.GoogleBadge;
  return (
    <section id="formularz" className="section-py case-form-band relative overflow-hidden">
      <div className="orb" style={{ width: 520, height: 520, top: '-20%', right: '-10%', opacity: 'calc(0.12 * var(--ambient-on))' }} />
      <div className="wrap relative" style={{ zIndex: 2 }}>
        <div className="case-form-grid">
          <div className="case-form-text">
            <span className="eyebrow">Bezpłatna analiza sprawy</span>
            <h2 className="display display--xl mt-6">
              Bezpłatnie<br />
              sprawdzę<br />
              <span className="accent">Twoją sprawę.</span>
            </h2>
            <p className="lead mt-6" style={{ maxWidth: '32rem' }}>
              {lead || 'Kupujesz, sprzedajesz, inwestujesz albo masz spór o nieruchomość? Opisz sprawę w kilku zdaniach — odpiszę z bezpłatną oceną ryzyka i konkretną propozycją kolejnego kroku. Kontakt prowadzę przede wszystkim mailowo, w pełni zdalnie.'}
            </p>
            <div className="landing-hero-meta mt-8">
              {GBadge && <GBadge />}
              <ul className="trust-points">
                <li><SIcon name="shield-check" size={16} /> Tajemnica adwokacka</li>
                <li><SIcon name="map-pin" size={16} /> Cała Polska, zdalnie</li>
                <li><SIcon name="wallet" size={16} /> Wycena z góry, na piśmie</li>
              </ul>
            </div>
          </div>
          <div className="case-form-card">
            <SQualForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Small building blocks
   ============================================================ */
function Breadcrumb({ trail }) {
  return (
    <nav className="breadcrumb">
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          {i > 0 && <SIcon name="chevron-right" size={14} />}
          {t.onClick ? <button onClick={t.onClick}>{t.label}</button> : <span>{t.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

function SvcCard({ service, onOpen }) {
  return (
    <button className="svc-card" onClick={onOpen}>
      <span className="svc-card-arrow"><SIcon name="arrow-up-right" size={15} /></span>
      <span className="svc-card-ic"><SIcon name={service.icon} size={24} /></span>
      <span className="svc-card-title">{service.title}</span>
      <span className="svc-card-desc">{service.desc}</span>
    </button>
  );
}

function BlockCard({ block, setRoute }) {
  return (
    <button
      className="block-card"
      id={'block-' + block.id}
      data-block-id={block.id}
      onClick={() => setRoute('blok', block.id)}>
      <span className="block-card-ic"><SIcon name={block.icon} size={26} /></span>
      <h3 className="block-card-title">{block.title}</h3>
      <p className="block-card-tag">{block.tagline}</p>
      <span className="block-card-cta">
        Zobacz usługi <SIcon name="arrow-right" size={14} />
      </span>
    </button>
  );
}

/* ============================================================
   Services overview (replaces flat UslugiPage)
   ============================================================ */
function UslugiOverview({ setRoute }) {
  const featured = window.getFeatured();
  return (
    <main data-screen-label="02 Usługi — przegląd">
      <section className="bg-light" style={{ paddingBlock: '3rem 4.5rem' }}>
        <div className="wrap">
          <Breadcrumb trail={[{ label: 'Start', onClick: () => setRoute('landing') }, { label: 'Usługi' }]} />
          <div className="mt-8 section-head--center" style={{ maxWidth: '48rem', marginInline: 'auto' }}>
            <span className="eyebrow">Usługi prawne</span>
            <h1 className="display mt-4">
              Obszary praktyki,<br />
              <span className="italic" style={{ color: 'var(--text-body)' }}>pełen zakres spraw.</span>
            </h1>
            <p className="lead mt-6">
              Zajmuję się wyłącznie prawem nieruchomości i procesem inwestycyjno-budowlanym. Wybierz obszar, żeby zobaczyć konkretne usługi — albo po prostu opisz sprawę, a ja odpowiem ze wstępną analizą i ofertą naszej współpracy.
            </p>
            <button className="btn btn-primary mt-8" onClick={() => spScrollToForm()}>
              Opisz swoją sprawę <SIcon name="arrow-right" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured four */}
      <section className="section-py">
        <div className="wrap">
          <div className="section-head--center">
            <span className="eyebrow">12 najczęstszych spraw</span>
            <h2 className="h2 mt-4">Z czym klienci przychodzą najczęściej.</h2>
            <p className="lead mt-4" style={{ maxWidth: '40rem', marginInline: 'auto' }}>Dwanaście spraw, które wracają w mojej praktyce co tydzień. Nie znajdujesz swojej? Niżej pełny zakres w 11 obszarach — albo po prostu opisz sprawę.</p>
          </div>
          <div className="svc-grid mt-8">
            {featured.map((s) => (
              <SvcCard key={s.slug} service={s} onOpen={() => setRoute('usluga', s.slug)} />
            ))}
          </div>
        </div>
      </section>

      {/* 12 blocks */}
      <section className="section-py bg-light">
        <div className="wrap">
          <div className="section-head--center">
            <span className="eyebrow">Wszystkie obszary</span>
            <h2 className="h2 mt-4">Bloki tematyczne.</h2>
          </div>
          <div className="block-grid mt-10">
            {window.SERVICE_BLOCKS.map((b) => (
              <BlockCard key={b.id} block={b} setRoute={setRoute} />
            ))}
          </div>
        </div>
      </section>

      <CaseFormBand heading="Nie wiesz, którą usługę wybrać?" lead="Opisz sprawę w kilku zdaniach — odpiszę, która usługa realnie ją rozwiązuje, z oceną ryzyk i kolejnym krokiem. Bezpłatnie i niezobowiązująco." />
      <ServiceTrustStrip />
    </main>
  );
}

/* ============================================================
   Pillar page (one thematic block)
   ============================================================ */
function PillarPage({ blockId, setRoute }) {
  const block = window.getBlock(blockId) || window.SERVICE_BLOCKS[0];
  const bc = window.BLOCK_CONTENT ? window.BLOCK_CONTENT[block.id] : null;
  return (
    <main data-screen-label={`Blok — ${block.title}`}>
      <section className="bg-dark relative overflow-hidden" style={{ paddingBlock: '3rem 4.5rem' }}>
        <div className="orb" style={{ width: 560, height: 560, top: -200, right: -160, opacity: 'calc(0.18 * var(--ambient-on))' }} />
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <Breadcrumb trail={[
            { label: 'Start', onClick: () => setRoute('landing') },
            { label: 'Usługi', onClick: () => setRoute('uslugi') },
            { label: block.title },
          ]} />
          <div className="mt-8 section-head--center" style={{ maxWidth: '46rem', marginInline: 'auto' }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="icon-tile icon-tile--lg" style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.08)', color: 'var(--brand-primary-light)' }}>
                <SIcon name={block.icon} size={26} />
              </span>
              <span className="eyebrow on-dark">Obszar praktyki</span>
            </div>
            <h1 className="display" style={{ color: '#fff' }}>{bc && bc.h1 ? bc.h1 : block.title}</h1>
            <p className="lead mt-6" style={{ color: 'var(--text-on-dark-2)' }}>{bc ? bc.subtitle : block.intro}</p>
            <button className="btn btn-on-dark mt-8" onClick={() => spScrollToForm()}>
              Opisz swoją sprawę <SIcon name="arrow-right" size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap">
          <div className="section-head--center">
            <span className="eyebrow">Usługi w tym obszarze</span>
            <h2 className="h2 mt-4">Rodzaje spraw.</h2>
          </div>
          <div className="svc-grid mt-8">
            {block.services.map((s) => (
              <SvcCard key={s.slug} service={s} onOpen={() => setRoute('usluga', s.slug)} />
            ))}
          </div>
        </div>
      </section>

      {bc && <ServiceSections c={bc} />}
      {block.id === 'sluzebnosci-odszkodowania' && window.KalkulatorTeaser && <window.KalkulatorTeaser setRoute={setRoute} />}
      {block.id === 'warunki-zabudowy-planowanie' && window.PlanAlertBand && <window.PlanAlertBand />}

      <CaseFormBand
        heading={bc && bc.cta ? bc.cta.heading : `Masz sprawę z obszaru: ${block.title.toLowerCase()}?`}
        lead={bc && bc.cta ? bc.cta.lead : undefined}
      />
      <ServiceTrustStrip />
    </main>
  );
}

/* ============================================================
   Service detail page (full template if content exists, else lite)
   ============================================================ */
function NumberedBlock({ n, eyebrow, title, children }) {
  return (
    <div className="service-section-grid">
      <div className="service-section-side">
        <span className="kicker-num kicker-num--ghost">{n}</span>
        <span className="eyebrow mt-4" style={{ display: 'inline-flex' }}>{eyebrow}</span>
      </div>
      <div className="service-section-body">
        {title && <h2 className="h2">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

/* Shared list item — supports plain string or { b, t } (bold label + text) */
function svcItem(it, i, iconName) {
  if (it && typeof it === 'object') {
    return <li key={i}><SIcon name={iconName} size={18} style={{ color: 'var(--brand-primary)' }} /><span><strong style={{ color: 'var(--text-main)' }}>{it.b}</strong> — {it.t}</span></li>;
  }
  return <li key={i}><SIcon name={iconName} size={18} style={{ color: 'var(--brand-primary)' }} /><span>{it}</span></li>;
}

/* Builds the ordered content sections for a full service / umbrella page.
   Data-driven so service pages and pillar umbrellas share one visual language. */
function buildServiceSections(c) {
  const blocks = [];
  if (c.intro) blocks.push({
    eyebrow: 'Na czym to polega',
    title: c.introHeading || (c.intro.split('. ')[0].replace(/\.$/, '') + '.'),
    node: <p className="lead mt-6">{c.intro}</p>,
  });
  if (c.when) blocks.push({
    eyebrow: c.whenTitle || 'Kiedy to potrzebne',
    title: c.whenHeading === undefined ? 'Najczęstsze sytuacje.' : c.whenHeading,
    node: <ul className="check-list mt-8">{c.when.map((w, i) => svcItem(w, i, 'check'))}</ul>,
  });
  if (c.levels) {
    blocks.push({
      eyebrow: c.levels.eyebrow || 'Trzy poziomy',
      title: c.levels.heading || 'Wybierasz głębokość.',
      node: (
        <div>
          <p className="lead mt-6">{c.levels.intro}</p>
          <div className="level-list mt-8">
            {c.levels.items.map((lv, i) => (
              <div key={i} className="level-card">
                <div className="level-card-head">
                  <h3 className="level-card-name">{lv.name}</h3>
                  {lv.plus && <span className="level-plus">{lv.plus}</span>}
                </div>
                <p className="level-sub">{lv.sub}</p>
                <ul className="check-list mt-5">
                  {lv.points.map((p, k) => (
                    <li key={k}><SIcon name="check" size={18} style={{ color: 'var(--brand-primary)' }} /><span>{p}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="cost-note mt-8">
            <SIcon name="info" size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
            <div>
              <p className="font-bold" style={{ color: 'var(--text-main)' }}>Koszt</p>
              <p className="body mt-1">{c.levels.cost}</p>
            </div>
          </div>
        </div>
      ),
    });
  } else if (c.doFor) {
    blocks.push({
      eyebrow: c.doForEyebrow || 'Co dla Ciebie robię',
      title: c.doForTitle || 'Konkretny zakres pracy.',
      node: (
        <ul className="deliverables mt-8">
          {c.doFor.map((d, i) => (
            <li key={i}><span className="deliverable-num">{String(i + 1)}</span><span>{d}</span></li>
          ))}
        </ul>
      ),
    });
  }
  if (c.lists) c.lists.forEach((L) => blocks.push({
    eyebrow: L.eyebrow,
    title: L.title,
    node: (
      <React.Fragment>
        {L.intro && <p className="lead mt-6">{L.intro}</p>}
        {L.kind === 'deliverables'
          ? <ul className="deliverables mt-8">{L.items.map((d, i) => <li key={i}><span className="deliverable-num">{String(i + 1)}</span><span>{d}</span></li>)}</ul>
          : <ul className="check-list mt-8">{L.items.map((it, i) => svcItem(it, i, 'check'))}</ul>}
      </React.Fragment>
    ),
  }));
  if (c.steps) blocks.push({
    eyebrow: 'Krok po kroku',
    title: `Proces w ${c.steps.length} krokach.`,
    node: (
      <ol className="process-list mt-8">
        {c.steps.map((s, i) => (
          <li key={i}>
            <div className="process-list-num">{String(i + 1)}</div>
            <div><p className="body" style={{ color: 'var(--text-main)', fontWeight: 'var(--weight-semibold)' }}>{s}</p></div>
          </li>
        ))}
      </ol>
    ),
  });
  if (!c.levels && c.need) blocks.push({
    eyebrow: 'Czego potrzebuję od Ciebie',
    title: 'Na start wystarczy tyle.',
    node: (
      <React.Fragment>
        <ul className="check-list mt-8">{c.need.map((w, i) => <li key={i}><SIcon name="file-text" size={18} style={{ color: 'var(--brand-primary)' }} /><span>{w}</span></li>)}</ul>
        <div className="cost-note mt-10">
          <SIcon name="info" size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
          <div>
            <p className="font-bold" style={{ color: 'var(--text-main)' }}>Koszt</p>
            <p className="body mt-1">{window.COST_TEXT}</p>
          </div>
        </div>
      </React.Fragment>
    ),
  });
  if (c.faq) blocks.push({
    eyebrow: 'Najczęstsze pytania',
    title: 'Zanim napiszesz.',
    node: <SFAQAccordion items={c.faq} startOpen={0} />,
  });
  return blocks;
}

/* Renders built sections as alternating-bg NumberedBlock sections */
function ServiceSections({ c }) {
  return buildServiceSections(c).map((b, i) => (
    <section key={i} className={`section-py ${i % 2 === 1 ? 'bg-light' : ''}`}>
      <div className="wrap">
        <NumberedBlock n={String(i + 1)} eyebrow={b.eyebrow} title={b.title}>
          {b.node}
        </NumberedBlock>
      </div>
    </section>
  ));
}

/* ============================================================
   „Co przesłać do bezpłatnej analizy” — lista dokumentów per obszar
   ============================================================ */
const BLOCK_DOCS = {
  'sprawdzenie-przed-zakupem': ['Numer księgi wieczystej lub adres nieruchomości', 'Projekt umowy (rezerwacyjnej, przedwstępnej, deweloperskiej) i prospekt informacyjny', 'Ogłoszenie lub oferta sprzedaży', 'Wszystko, co Cię niepokoi — zdjęcia, korespondencja ze sprzedającym'],
  'transakcje-umowy': ['Projekt umowy albo ustalenia z drugą stroną', 'Numer księgi wieczystej', 'Dokumenty od pośrednika lub notariusza', 'Harmonogram i sposób płatności (kredyt, zadatek)'],
  'warunki-zabudowy-planowanie': ['Numer działki i gmina', 'Decyzja WZ, odmowa lub wezwanie z urzędu (jeśli są)', 'Wypis z planu miejscowego lub planu ogólnego (jeśli masz)', 'Krótki opis, co chcesz zbudować'],
  'proces-budowlany': ['Decyzja, postanowienie lub pismo z urzędu / PINB', 'Projekt lub umowa o roboty budowlane', 'Zdjęcia obiektu i korespondencja z wykonawcą', 'Numer działki'],
  'ksiegi-wieczyste-stan-prawny': ['Numer księgi wieczystej (lub informacja, że jej brak)', 'Akty notarialne, postanowienia spadkowe, mapy', 'Wypis z ewidencji gruntów', 'Pisma z urzędu (np. o opłacie za użytkowanie wieczyste)'],
  'wspolwlasnosc-podzialy': ['Numer księgi wieczystej i lista współwłaścicieli', 'Postanowienie o nabyciu spadku lub wyrok rozwodowy (jeśli są)', 'Dowody nakładów: faktury, przelewy', 'Dotychczasowe propozycje podziału lub spłaty'],
  'najem': ['Umowa najmu i protokół zdawczo-odbiorczy', 'Korespondencja z najemcą lub wynajmującym', 'Zestawienie zaległości (jeśli są)', 'Oświadczenie notarialne z najmu okazjonalnego (jeśli jest)'],
  'sluzebnosci-odszkodowania': ['Numer działki i gmina', 'Zdjęcia urządzeń (słupy, linie, rury) lub drogi', 'Pisma od firmy przesyłowej / urzędu, operat szacunkowy', 'Numer księgi wieczystej'],
  'grunty-rolne-oze': ['Numer działki i klasa gruntu (wypis z ewidencji)', 'Projekt umowy dzierżawy lub oferta inwestora', 'Pisma z KOWR (jeśli są)', 'Dokumenty potwierdzające status rolnika (jeśli dotyczy)'],
  'obsluga-podmiotow-profesjonalnych': ['Krótki opis firmy i skali działalności', 'Wzory umów, którymi obecnie się posługujesz', 'Bieżące sprawy lub spory wymagające pilnej reakcji', 'Oczekiwany zakres i forma współpracy (abonament / projekt)'],
  'roszczenia-deweloper': ['Umowa deweloperska i protokół odbioru', 'Zgłoszenia wad i odpowiedzi dewelopera', 'Zdjęcia usterek', 'Terminy z umowy i faktyczne daty odbioru'],
};

function DocsToSend({ blockId, n }) {
  const docs = BLOCK_DOCS[blockId];
  if (!docs) return null;
  return (
    <section className="section-py docs-to-send">
      <div className="wrap">
        <NumberedBlock n={n} eyebrow="Co przesłać do bezpłatnej analizy" title="Wystarczy to, co masz.">
          <ul className="check-list mt-8">{docs.map((d, i) => <li key={i}><SIcon name="file-text" size={18} style={{ color: 'var(--brand-primary)' }} /><span>{d}</span></li>)}</ul>
          <p className="body mt-6">Nie masz wszystkich dokumentów? Napisz, co masz — resztę ustalę sam. Do wstępnej oceny zwykle wystarczy kilka zdań i jeden dokument.</p>
          <button className="btn btn-primary mt-6" onClick={() => spScrollToForm()}>
            Prześlij dokumenty do analizy <SIcon name="arrow-right" size={16} />
          </button>
        </NumberedBlock>
      </div>
    </section>
  );
}

/* ============================================================
   Related services grid — shared by FULL and LITE service pages
   ============================================================ */
function RelatedServices({ block, slug, setRoute }) {
  if (block.services.filter((s) => s.slug !== slug).length === 0) { return null; }
  return (
    <section className="section-py bg-light">
      <div className="wrap">
        <div className="section-head--center">
          <span className="eyebrow">Inne usługi w tym obszarze</span>
          <h2 className="h2 mt-4">{block.title}</h2>
        </div>
        <div className="svc-grid mt-8">
          {block.services.filter((s) => s.slug !== slug).slice(0, 6).map((s) => (
            <SvcCard key={s.slug} service={s} onOpen={() => setRoute('usluga', s.slug)} />
          ))}
        </div>
      </div>
    </section>);
}

function ServicePage({ slug, setRoute }) {
  const service = window.getService(slug);
  const block = window.getBlockOfService(slug);
  if (!service) { return <UslugiOverview setRoute={setRoute} />; }
  const c = window.SERVICE_CONTENT[slug];
  const isFull = !!c;

  return (
    <main data-screen-label={`Usługa — ${service.title}`}>
      {/* Hero */}
      <section className="bg-light" style={{ paddingBlock: '3rem 4rem', borderBottom: '1px solid var(--slate-100)' }}>
        <div className="wrap">
          <Breadcrumb trail={[
            { label: 'Start', onClick: () => setRoute('landing') },
            { label: 'Usługi', onClick: () => setRoute('uslugi') },
            { label: block.title, onClick: () => setRoute('blok', block.id) },
            { label: service.title },
          ]} />
          <div className="mt-8 section-head--center" style={{ maxWidth: '46rem', marginInline: 'auto' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="icon-tile icon-tile--lg" style={{ width: 56, height: 56 }}>
                <SIcon name={service.icon} size={26} />
              </span>
              <button className="eyebrow" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setRoute('blok', block.id)}>
                {block.title}
              </button>
            </div>
            <h1 className="display">{c && c.h1 ? c.h1 : service.title}</h1>
            <p className="lead mt-6">{c ? c.subtitle : service.desc}</p>
            <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={() => spScrollToForm()}>
                Opisz swoją sprawę <SIcon name="arrow-right" size={16} />
              </button>
              <button className="btn btn-secondary" onClick={() => setRoute('blok', block.id)}>
                Wszystkie usługi w tym obszarze
              </button>
            </div>
          </div>
        </div>
      </section>

      {isFull ? (
        (() => {
          const blocks = buildServiceSections(c);
          return blocks.map((b, i) => (
            <section key={i} className={`section-py ${i % 2 === 1 ? 'bg-light' : ''}`}>
              <div className="wrap">
                <NumberedBlock n={String(i + 1)} eyebrow={b.eyebrow} title={b.title}>
                  {b.node}
                </NumberedBlock>
              </div>
            </section>
          ));
        })()
      ) : (
        /* LITE template */
        <React.Fragment>
          <section className="section-py">
            <div className="wrap">
              <NumberedBlock n="1" eyebrow="Na czym to polega" title="Jak mogę pomóc.">
                <p className="lead mt-6">{service.desc}</p>
                <p className="lead mt-4">
                  To jedna z usług w obszarze „{block.title.toLowerCase()}”. Każdą sprawę prowadzę indywidualnie — od analizy dokumentów, przez przygotowanie pism i reprezentację, po finalne rozliczenie. Najszybciej pomogę, gdy opiszesz swoją sytuację w formularzu poniżej.
                </p>
                <div className="cost-note mt-10">
                  <SIcon name="info" size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <div>
                    <p className="font-bold" style={{ color: 'var(--text-main)' }}>Koszt</p>
                    <p className="body mt-1">{window.COST_TEXT}</p>
                  </div>
                </div>
              </NumberedBlock>
            </div>
          </section>
        </React.Fragment>
      )}

      {!(c && c.need) && <DocsToSend blockId={block.id} n={String((isFull ? buildServiceSections(c).length : 1) + 1)} />}

      <RelatedServices block={block} slug={slug} setRoute={setRoute} />

      {REPORT_SERVICE_SLUGS.has(slug) && window.ReportShowcase &&
      <window.ReportShowcase />}
      {block.id === 'sluzebnosci-odszkodowania' && window.KalkulatorTeaser && <window.KalkulatorTeaser setRoute={setRoute} />}
      {block.id === 'warunki-zabudowy-planowanie' && window.PlanAlertBand && <window.PlanAlertBand />}

      <CaseFormBand
        heading={c && c.cta ? c.cta.heading : 'Opisz swoją sprawę.'}
        lead={c && c.cta ? c.cta.lead : 'Napisz w kilku zdaniach, z czym się mierzysz — w ciągu 24 h odpiszę z oceną i kolejnym krokiem. Bezpłatnie i niezobowiązująco.'}
      />
      <ServiceTrustStrip />
    </main>
  );
}

/* ============================================================
   Full FAQ page (7 sections)
   ============================================================ */
function FaqPageV3({ setRoute }) {
  const [q, setQ] = React.useState('');
  const norm = (s) => (s || '').toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const query = norm(q.trim());
  const total = window.FAQ_SECTIONS.reduce((n, s) => n + s.items.length, 0);
  const results = query ?
    window.FAQ_SECTIONS.flatMap((s) =>
      s.items.
        filter((it) => norm(it.q).includes(query) || norm(it.a).includes(query)).
        map((it) => ({ ...it, sectionTitle: s.title, letter: s.letter }))
    ) :
    null;

  return (
    <main data-screen-label="FAQ">
      <section className="bg-light" style={{ paddingBlock: '3rem 4rem' }}>
        <div className="wrap">
          <Breadcrumb trail={[{ label: 'Start', onClick: () => setRoute('landing') }, { label: 'FAQ' }]} />
          <div className="mt-8" style={{ maxWidth: '46rem' }}>
            <span className="eyebrow">FAQ · {total} pytań</span>
            <h1 className="display mt-4">Wszystko, co warto<br /><span className="italic" style={{ color: 'var(--text-body)' }}>wiedzieć przed startem.</span></h1>
            <p className="lead mt-6">
              Jak wygląda współpraca, co obejmuje bezpłatna analiza, jak chronię Twoje dane i jak ustalam koszt. Jeśli czegoś tu brakuje — po prostu zapytaj w formularzu.
            </p>
            <div className="faq-search mt-8">
              <SIcon name="search" size={18} />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Wpisz słowo, np. zadatek, zachowek, słupy…"
                aria-label="Szukaj w pytaniach" />
              {q &&
              <button className="faq-search-clear" aria-label="Wyczyść" onClick={() => setQ('')}><SIcon name="x" size={16} /></button>}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap">
          {results ?
          <div className="faq-results">
              <p className="faq-results-count">
                {results.length === 0 ?
                'Brak wyników' :
                `Znaleziono ${results.length} ${
                results.length === 1 ? 'pytanie' :
                results.length % 10 >= 2 && results.length % 10 <= 4 && (results.length % 100 < 12 || results.length % 100 > 14) ? 'pytania' :
                'pytań'}`} dla „{q.trim()}”
              </p>
              {results.length === 0 ?
              <p className="lead mt-4" style={{ maxWidth: '46rem' }}>
                  Nie znalazłem pytania na ten temat. Najprościej: opisz sprawę w formularzu — odpiszę konkretnie na Twoją sytuację, bezpłatnie, w 24 h.
                </p> :

              <div className="faq-results-list mt-6">
                  {results.map((it, k) =>
                <details key={k} className="faq-result" open>
                      <summary><span className="faq-result-tag">{it.letter}</span> {it.q}</summary>
                      <p>{it.a}</p>
                    </details>
                )}
                </div>}
            </div> :

          <div className="faq-page-grid">
            <nav className="faq-toc">
              <span className="eyebrow">Spis treści</span>
              <ul className="mt-4">
                {window.FAQ_SECTIONS.map((s) =>
                <li key={s.id}>
                    <button onClick={() => {
                      const el = document.getElementById('faq-' + s.id);
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 96, behavior: 'smooth' });
                    }}>
                      <span className="faq-toc-letter">{s.letter}</span> {s.title}
                    </button>
                  </li>
                )}
              </ul>
            </nav>
            <div className="faq-page-body">
              {window.FAQ_SECTIONS.map((s, i) =>
              <div key={s.id} id={'faq-' + s.id} className="faq-section" style={{ marginTop: i === 0 ? 0 : '3.5rem' }}>
                  <div className="faq-section-head">
                    <span className="faq-section-letter">{s.letter}</span>
                    <h2 className="h2" style={{ fontSize: 'clamp(1.4rem, 1rem + 1.4vw, 2rem)' }}>{s.title}</h2>
                  </div>
                  <div className="mt-6">
                    <SFAQAccordion items={s.items} startOpen={i === 0 ? 0 : -1} />
                  </div>
                </div>
              )}
            </div>
          </div>}
        </div>
      </section>

      <CaseFormBand heading="Masz pytanie, którego tu nie ma?" lead="Najprościej: opisz sprawę w formularzu. Odpiszę konkretnie na Twoją sytuację — bezpłatnie, w ciągu 24 h." />
      <ServiceTrustStrip />
    </main>);

}

Object.assign(window, {
  UslugiOverview, PillarPage, ServicePage, FaqPageV3,
  CaseFormBand, ServiceTrustStrip, SvcCard, BlockCard, Breadcrumb, spScrollToForm,
});
