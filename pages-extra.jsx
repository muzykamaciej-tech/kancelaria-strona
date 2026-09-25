/* pages-extra.jsx — /o-mnie (entity page for Google and AI answers) and the 404 page.
   Loaded after pages.jsx and landing.jsx, before app.jsx; components resolved at render time. */

function OMniePage({ setRoute }) {
  const About = window.AboutBlock, Reviews = window.ReviewsBand, Lead = window.LeadFormBand, Icon = window.Icon;
  return (
    <main data-screen-label="08 O mnie">
      <section className="bg-light" style={{ paddingBlock: '3rem 2.5rem' }}>
        <div className="wrap">
          <window.NavLink route="landing" className="btn-link">
            <Icon name="arrow-left" size={16} /> Strona główna
          </window.NavLink>
          <div className="mt-8" style={{ maxWidth: '48rem' }}>
            <span className="eyebrow">O mnie</span>
            <h1 className="display mt-4">adw. dr Maciej Muzyka<br /><span className="italic" style={{ color: 'var(--text-body)' }}>wyłącznie prawo nieruchomości.</span></h1>
            <p className="lead mt-6">Adwokat (Lubelska Izba Adwokacka, wpis nr LUB/ADW/1702) i doktor nauk prawnych. Kancelaria w Lublinie, sprawy klientów z całej Polski prowadzone zdalnie.</p>
            <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => window.spScrollToForm && window.spScrollToForm()}>
                Opisz swoją sprawę <Icon name="arrow-right" size={16} />
              </button>
              <a className="btn btn-secondary" href="https://rejestradwokatow.pl/adwokat/muzyka-maciej-35358" target="_blank" rel="noopener">
                Krajowy Rejestr Adwokatów
              </a>
            </div>
          </div>
        </div>
      </section>
      {About && <About />}
      {Reviews && <Reviews />}
      {Lead && <Lead />}
    </main>
  );
}

function NotFoundPage({ setRoute }) {
  const Icon = window.Icon;
  return (
    <main data-screen-label="404">
      <section className="bg-light" style={{ paddingBlock: '4rem 4rem' }}>
        <div className="wrap" style={{ maxWidth: '48rem' }}>
          <span className="eyebrow">Błąd 404</span>
          <h1 className="display mt-4">Tej strony nie ma pod tym adresem.</h1>
          <p className="lead mt-6">Adres mógł się zmienić po przeniesieniu strony. Zacznij od usług, poradników albo opisz swoją sprawę.</p>
          <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap' }}>
            <window.NavLink route="uslugi" className="btn btn-primary">Usługi prawne <Icon name="arrow-right" size={16} /></window.NavLink>
            <window.NavLink route="blog" className="btn btn-secondary">Poradniki</window.NavLink>
            <window.NavLink route="kontakt" className="btn btn-secondary">Kontakt</window.NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { OMniePage, NotFoundPage });
