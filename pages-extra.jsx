/* pages-extra.jsx — /o-mnie (entity page for Google and AI answers) and the 404 page.
   Loaded after pages.jsx and landing.jsx, before app.jsx; components resolved at render time. */

function OMniePage({ setRoute }) {
  const About = window.AboutBlock, Reviews = window.ReviewsBand, Lead = window.LeadFormBand, Icon = window.Icon;
  return (
    <main id="main-content" data-screen-label="08 O mnie">
      <section className="bg-light" style={{ paddingBlock: '3rem 2.5rem' }}>
        <div className="wrap">
          <window.NavLink route="landing" className="btn-link">
            <Icon name="arrow-left" size={16} /> Strona główna
          </window.NavLink>
          <div className="mt-8" style={{ maxWidth: '48rem' }}>
            <span className="eyebrow">Mecenas od Nieruchomości</span>
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
      <OMnieIntro />
      {About && <About />}
      {Reviews && <Reviews />}
      {Lead && <Lead />}
    </main>
  );
}

function OMnieIntro() {
  const NL = window.NavLink;
  const areas = [
    ['warunki-zabudowy-planowanie', 'Plan ogólny gminy i warunki zabudowy (WZ)'],
    ['sluzebnosci-odszkodowania', 'Słupy, linie i gazociągi na działce: służebność przesyłu i wynagrodzenie za bezumowne korzystanie'],
    ['sprawdzenie-przed-zakupem', 'Sprawdzenie działki, domu lub mieszkania przed zakupem'],
    ['roszczenia-deweloper', 'Spory z deweloperem: wady lokalu, kary za opóźnienie'],
    ['wspolwlasnosc-podzialy', 'Współwłasność, dział spadku i podział majątku z nieruchomością'],
    ['najem', 'Najem: zaległy czynsz, kaucja, eksmisja'],
    ['grunty-rolne-oze', 'Grunty rolne, dzierżawa, zgoda KOWR'],
  ];
  return (
    <section className="section-py">
      <div className="wrap" style={{ maxWidth: '46rem' }}>
        <span className="eyebrow">Prawnik od nieruchomości w Lublinie</span>
        <h2 className="h2 mt-4">Czym się zajmuję i jak pracuję.</h2>
        <div className="prose prose-article prose-legal mt-6">
          <p>Pod nazwą Mecenas od Nieruchomości prowadzę kancelarię adwokacką w Lublinie, przy ul. Cichej 4/5. Zajmuję się wyłącznie prawem nieruchomości i procesem inwestycyjno-budowlanym. Sprawy klientów spoza Lublina prowadzę zdalnie, w całej Polsce.</p>
          <h3>Z czym przychodzą klienci</h3>
          <ul>{areas.map(([id, t]) => <li key={id}><NL route="blok" slug={id}>{t}</NL></li>)}</ul>
          <h3>Wykształcenie i doświadczenie</h3>
          <p>Prawo studiowałem na Uniwersytecie Jagiellońskim. Doktorat z postępowania cywilnego obroniłem na UMCS w Lublinie. Doświadczenie zawodowe zdobywałem w kancelarii SPCG. Pracowałem naukowo w Katedrze Prawa Rolnego i Gospodarki Gruntami UMCS.</p>
          <p>Jako wykładowca Okręgowej Rady Adwokackiej w Lublinie uczę aplikantów adwokackich postępowania sądowoadministracyjnego (skargi do WSA i NSA). Jestem adwokatem Izby Adwokackiej w Lublinie, wpis nr LUB/ADW/1702. Wpis sprawdzisz w <a href="https://rejestradwokatow.pl/adwokat/muzyka-maciej-35358" target="_blank" rel="noopener">Krajowym Rejestrze Adwokatów</a>.</p>
          <h3>Jak wygląda pierwszy kontakt</h3>
          <ol>
            <li>Opisujesz sprawę w formularzu na dole strony. Wystarczy kilka zdań.</li>
            <li>W ciągu 24 h roboczych odpisuję mailem: co wynika z opisu, co proponuję zrobić i ile to kosztuje.</li>
            <li>Decydujesz, czy zlecasz sprawę. Do tego momentu nic nie płacisz.</li>
          </ol>
          <p>Nie obiecuję wyniku sprawy. Piszę wprost, co przemawia za nią, a co przeciw niej. Kontakt prowadzę przede wszystkim mailowo. Gdy sprawa wymaga spotkania, spotykamy się w Lublinie albo w Warszawie (ul. Bracka 20/7A).</p>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage({ setRoute }) {
  const Icon = window.Icon;
  return (
    <main id="main-content" data-screen-label="404">
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
