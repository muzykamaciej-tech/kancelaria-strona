const KRA_URL = 'https://rejestradwokatow.pl/adwokat/muzyka-maciej-35358';
/* sections.jsx — shared sections and building blocks for v2 site.
   Loaded via Babel after data.jsx. */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Lucide icon wrapper ---------- */
function Icon({ name, size = 20, stroke = 1.75, style, className }) {
  return (
    <i
      data-lucide={name}
      aria-hidden="true"
      style={{ width: size, height: size, strokeWidth: stroke, display: 'inline-flex', ...style }}
      className={className} />);


}

/* ---------- Custom line-art service icons (navy line + one terracotta accent) ---------- */
const SIC_NAVY = '#0E53A5';
const SIC_TER = '#C15F3C';

/* block id → icon key */
const SIC_BLOCK_KEY = {
  'sprawdzenie-przed-zakupem': 'audit',
  'transakcje-umowy': 'contracts',
  'warunki-zabudowy-planowanie': 'zoning',
  'proces-budowlany': 'zoning',
  'ksiegi-wieczyste-stan-prawny': 'coown',
  'wspolwlasnosc-podzialy': 'coown',
  'najem': 'rental',
  'sluzebnosci-odszkodowania': 'transmission',
  'grunty-rolne-oze': 'agri',
  'obsluga-podmiotow-profesjonalnych': 'biz',
  'roszczenia-deweloper': 'claims' };


/* ordered slug keyword → icon key (first match wins) */
const SIC_RULES = [
[/^obsluga-prawna-(?!zakupu|sprzedazy)/, 'biz'],
[/roszczenia-deweloper|kary-umowne|rekojmia|wady|metraz|klauzule-abuzywne|gwarancj|usuniecie-wad|przejecie-roszczen/, 'claims'],
[/slup|przesyl|bezumowne|droga-konieczna|wywlaszcz|resztkow|art-124|ograniczenie-korzystania/, 'transmission'],
[/roln|kowr|dzierzaw|odrolnienie|oze/, 'agri'],
[/wspolwlasnosc|dzial-spadku|zachowek|nabycia-spadku|podzial-majatku|zasiedzenie|ksieg|uzytkowanie-wieczyste|uregulowanie-stanu|rozgraniczenie/, 'coown'],
[/warunki-zabudowy|plan-ogolny|plan-miejscowy|planistyczne|pozwolenie|zgloszenie|legalizacja|samowol|pinb|nadzor-budowlany|zmiana-sposobu|proces-budowlany|roboty-budowlane/, 'zoning'],
[/najem|eksmisja|kaucja|windykacja|wynajmujacych/, 'rental'],
[/audyt|due-diligence/, 'audit'],
[/umow|zakup|sprzedaz|przedwstepn|rezerwacyjn|deweloperskiej|dozywoci|renta|darowizn|negocjacje|cesja|odstapienie|odbior/, 'contracts']];


function serviceIconKey(slug) {
  if (!slug) return 'contracts';
  for (const [re, key] of SIC_RULES) if (re.test(slug)) return key;
  return 'contracts';
}

function ServiceIcon({ slug, blockId, iconKey, size = 52 }) {
  const key = iconKey || (blockId ? SIC_BLOCK_KEY[blockId] || 'contracts' : serviceIconKey(slug));
  const N = SIC_NAVY,T = SIC_TER;
  const sets = {
    audit: [
    <path key="a" stroke={N} d="M -22 -1 L 0 -19 L 22 -1" />,
    <path key="b" stroke={N} d="M -15 -1 L -15 19 L 15 19 L 15 -1" />,
    <circle key="c" stroke={T} cx="9" cy="9" r="9" />,
    <path key="d" stroke={T} d="M 15.5 15.5 L 23 23" />],

    contracts: [
    <path key="a" stroke={N} d="M -15 -22 L 7 -22 L 15 -14 L 15 22 L -15 22 Z" />,
    <path key="b" stroke={N} d="M 7 -22 L 7 -14 L 15 -14" />,
    <path key="c" fill={T} d="M -8 3 l 5 5 l 11 -12 l 2 2 l -13 14 l -7 -7 z" />],

    zoning: [
    <rect key="a" stroke={N} x="-20" y="-20" width="40" height="40" rx="2" />,
    <path key="b" stroke={N} d="M 0 -20 L 0 20 M -20 0 L 20 0" />,
    <path key="c" stroke={T} d="M -15 -3 L -10 -12 L -5 -3 M -14 -3 L -6 -3" />],

    rental: [
    <circle key="a" stroke={T} cx="-10" cy="-10" r="9" />,
    <path key="b" stroke={N} d="M -4 -4 L 20 20" />,
    <path key="c" stroke={N} d="M 13 13 L 18 8 M 17 17 L 22 12" />],

    transmission: [
    <path key="a" stroke={N} d="M -15 22 L -6 -16 M 15 22 L 6 -16" />,
    <path key="b" stroke={N} d="M -11 6 L 6 -4 M 11 6 L -6 -4 M -9 -6 L 9 -6" />,
    <path key="c" stroke={T} d="M -22 -16 L 22 -16 M -12 -16 L -12 -21 M 12 -16 L 12 -21" />],

    agri: [
    <path key="a" stroke={N} d="M 0 22 L 0 -6" />,
    <path key="b" stroke={N} d="M 0 -6 q 9 1 9 10 q -9 1 -9 -10 M 0 -6 q -9 1 -9 10 q 9 1 9 -10" />,
    <path key="c" stroke={N} d="M 0 -14 q 8 1 8 9 q -8 1 -8 -9 M 0 -14 q -8 1 -8 9 q 8 1 8 -9" />,
    <path key="d" stroke={N} d="M 0 -21 q 6 1 6 8 q -6 1 -6 -8 M 0 -21 q -6 1 -6 8 q 6 1 6 -8" />,
    <path key="e" stroke={T} d="M -14 22 L 14 22" />],

    coown: [
    <path key="a" stroke={N} d="M -22 0 L 0 -18 L 22 0" />,
    <path key="b" stroke={N} d="M -15 0 L -15 20 L 15 20 L 15 0" />,
    <path key="c" stroke={T} strokeDasharray="3 4" d="M 0 -12 L 0 20" />],

    claims: [
    <rect key="a" stroke={N} x="-15" y="-22" width="24" height="44" rx="2" />,
    <path key="b" stroke={N} d="M -9 -14 L -3 -14 M -9 -6 L -3 -6 M -9 2 L -3 2 M -9 10 L -3 10" />,
    <circle key="c" fill={T} cx="14" cy="-15" r="8" />,
    <path key="d" stroke="#FFFFFF" strokeWidth="2" d="M 14 -19 L 14 -14" />,
    <circle key="e" fill="#FFFFFF" cx="14" cy="-11" r="1.3" />],

    biz: [
    <path key="a" stroke={N} d="M -24 -7 L 0 -21 L 24 -7 M -21 -7 L 21 -7" />,
    <path key="b" stroke={N} d="M -14 -7 L -14 18 M -5 -7 L -5 18 M 5 -7 L 5 18 M 14 -7 L 14 18" />,
    <path key="c" stroke={T} d="M -24 18 L 24 18 M -20 22 L 20 22" />] };


  return (
    <svg
      className="svc-ic"
      viewBox="-32 -32 64 64"
      width={size}
      height={size}
      fill="none"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {sets[key] || sets.contracts}
    </svg>);

}
window.ServiceIcon = ServiceIcon;
window.serviceIconKey = serviceIconKey;

/* ============================================================
   Navbar — with mega-menu for Usługi
   ============================================================ */
function Navbar({ route, setRoute, serviceSlug }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuTimer = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    // Fallback: window scroll (normal iframes / direct view)
    const onScroll = () => setScrolled((window.scrollY || document.documentElement.scrollTop || 0) > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Primary: IntersectionObserver on a top sentinel — fires regardless of
    // which ancestor actually scrolls (robust inside embedded/auto-sized frames)
    let io;
    const el = sentinelRef.current;
    if (el && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 0 });
      io.observe(el);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (io) io.disconnect();
    };
  }, []);

  function openMenu() {
    if (menuTimer.current) clearTimeout(menuTimer.current);
    setMenuOpen(true);
  }
  function closeMenu() {
    menuTimer.current = setTimeout(() => setMenuOpen(false), 160);
  }

  /* mega-menu opens on hover (local state, not a route change) — its lucide
     placeholders need converting once mounted */
  useEffect(() => {
    if (menuOpen && window.lucide) {
      const t = setTimeout(() => window.lucide.createIcons(), 20);
      return () => clearTimeout(t);
    }
  }, [menuOpen]);

  function go(r, slug) {
    setRoute(r, slug);
    setMobileOpen(false);
    setMenuOpen(false);
  }

  return (
    <React.Fragment>
      <div ref={sentinelRef} aria-hidden="true" className="nav-sentinel" />
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <button
          className="nav-logo"
          onClick={() => go('landing')}
          aria-label="Kancelaria Nieruchomości — Adwokat Maciej Muzyka">
          
          <img src={window.__resources?.logoLight || "assets/logo.png"} alt="Kancelaria Nieruchomości — Adwokat Maciej Muzyka" style={{ objectFit: "cover" }} />
        </button>

        {/* Desktop links */}
        <div className="nav-desktop" data-md-show style={{ display: 'none' }}>
          {window.NAV_LINKS.map((l) => {
            if (l.hasMenu) {
              return (
                <div
                  key={l.id}
                  className="nav-menu-host"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}>
                  
                  <button
                    className={`nav-link ${route === 'uslugi' || route === 'usluga' ? 'active' : ''}`}
                    onClick={() => go('uslugi')}
                    aria-haspopup="true"
                    aria-expanded={menuOpen}>
                    
                    {l.label}
                    <Icon name="chevron-down" size={14} style={{ marginLeft: 4, transition: 'transform 200ms', transform: menuOpen ? 'rotate(180deg)' : 'none' }} />
                  </button>
                  {menuOpen && <MegaMenu go={go} active={serviceSlug} />}
                </div>);

            }
            if (l.block) {
              return (
                <button key={l.id} className={`nav-link ${serviceSlug === l.block ? 'active' : ''}`} onClick={() => go('blok', l.block)}>
                  {l.label}
                </button>);
            }
            return (
              <button
                key={l.id}
                className={`nav-link ${route === l.id ? 'active' : ''}`}
                onClick={() => go(l.id)}>
                
                {l.label}
              </button>);

          })}
          <button className="btn btn-primary nav-cta" onClick={() => { if (document.getElementById('formularz') && window.spScrollToForm) { setMobileOpen(false); setMenuOpen(false); window.spScrollToForm(); } else { go('landing'); setTimeout(() => window.spScrollToForm && window.spScrollToForm(), 140); } }}>
            Opisz swoją sprawę <Icon name="arrow-right" size={16} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          data-md-hide
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu">
          
          <Icon name={mobileOpen ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu go={go} route={route} />}
      </nav>
    </React.Fragment>);

}

function MegaMenu({ go, active }) {
  return (
    <div className="mega-menu" onMouseDown={(e) => e.stopPropagation()}>
      <div className="mega-menu-inner">
        <div className="mega-menu-top">
          <span className="eyebrow">Usługi prawne</span>
          <button className="btn-link" onClick={() => go('uslugi')}>
            Wszystkie usługi <Icon name="arrow-right" size={14} />
          </button>
        </div>
        <ul className="mega-menu-grid">
          {window.SERVICE_BLOCKS.map((b) =>
          <li key={b.id}>
              <button
              className={`mega-tile ${active === b.id ? 'active' : ''}`}
              onClick={() => go('blok', b.id)}>
              
                <span className="mega-tile-head">
                  <span className="mega-tile-icon"><Icon name={b.icon} size={18} /></span>
                </span>
                <span className="mega-tile-label">{b.title}</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>);

}

function MobileMenu({ go, route }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => {
    if (servicesOpen && window.lucide) {
      const t = setTimeout(() => window.lucide.createIcons(), 20);
      return () => clearTimeout(t);
    }
  }, [servicesOpen]);
  return (
    <div className="mobile-menu anim-fade-in" id="mobile-menu">
      <div className="wrap">
        {window.NAV_LINKS.map((l) => {
          if (l.hasMenu) {
            return (
              <div key={l.id} className="mobile-menu-group">
                <button
                  className="mobile-menu-link"
                  onClick={() => setServicesOpen(!servicesOpen)}>
                  
                  {l.label}
                  <Icon name="chevron-down" size={16} style={{ transition: 'transform 200ms', transform: servicesOpen ? 'rotate(180deg)' : 'none' }} />
                </button>
                {servicesOpen &&
                <ul className="mobile-menu-sub">
                    <li>
                      <button onClick={() => go('uslugi')}>Wszystkie usługi</button>
                    </li>
                    {window.SERVICE_BLOCKS.map((b) =>
                  <li key={b.id}>
                        <button onClick={() => go('blok', b.id)}>
                          {b.title}
                        </button>
                      </li>
                  )}
                  </ul>
                }
              </div>);

          }
          if (l.block) {
            return (
              <button key={l.id} className="mobile-menu-link" onClick={() => go('blok', l.block)}>{l.label}</button>);
          }
          return (
            <button
              key={l.id}
              className={`mobile-menu-link ${route === l.id ? 'active' : ''}`}
              onClick={() => go(l.id)}>
              
              {l.label}
            </button>);

        })}
        <button className="btn btn-primary mt-4" style={{ width: '100%' }} onClick={() => { if (document.getElementById('formularz') && window.spScrollToForm) { go(route); window.spScrollToForm(); } else { go('landing'); setTimeout(() => window.spScrollToForm && window.spScrollToForm(), 140); } }}>
          Opisz swoją sprawę <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </div>);

}

/* ============================================================
   Hero (3 variants — kept from v1)
   ============================================================ */
function Hero({ setRoute, variant = 'editorial' }) {
  if (variant === 'classic') return <HeroClassic setRoute={setRoute} />;
  if (variant === 'splitcard') return <HeroSplitCard setRoute={setRoute} />;
  return <HeroEditorial setRoute={setRoute} />;
}

function HeroEditorial({ setRoute }) {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: 'var(--d-hero-py)' }}>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow">adw. dr Maciej Muzyka · Kancelaria adwokacka</span>
        </div>

        <div className="hero-editorial-grid">
          <div className="hero-editorial-text">
            <h1 className="display display--xl">
              Prawo<br />
              nieruchomości,<br />
              <span className="italic">prosto</span><br />
              <span className="accent">i skutecznie.</span>
            </h1>
            <p className="lead mt-6" style={{ maxWidth: '34rem' }}>
              Pomagam inwestorom, kupującym oraz deweloperom w bezpiecznym przechodzeniu przez gąszcz przepisów. Analizuję umowy, reguluję stany prawne, chronię Twój kapitał.
            </p>
            <p className="rule-l mt-6" style={{ maxWidth: '34rem' }}>
              Nie musisz znać się na prawie, aby bezpiecznie inwestować w nieruchomości. Od tego masz mnie.
            </p>
            <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => setRoute('uslugi')}>
                Zobacz usługi <Icon name="arrow-right" size={16} />
              </button>
              <button className="btn btn-secondary" onClick={() => setRoute('kontakt')}>
                Skontaktuj się
              </button>
            </div>

            <div className="hero-meta mt-8">
              {window.STATS.map((s, i) =>
              <div key={i}>
                  <div className="hero-stat-num">{s.n}</div>
                  <div className="small mt-2">{s.l}</div>
                </div>
              )}
            </div>
          </div>

          <div className="hero-editorial-portrait">
            <div className="portrait-card">
              <img src={window.__resources?.portrait1 || "assets/maciej-muzyka.webp"} alt="adw. dr Maciej Muzyka" width="1100" height="1100" loading="lazy" decoding="async" />
              <div className="portrait-scrim" />
              <div className="portrait-caption">
                <p className="font-bold" style={{ fontSize: '1.5rem' }}>Maciej Muzyka</p>
                <p className="font-semibold" style={{ color: 'var(--brand-primary-light)', letterSpacing: '0.04em', fontSize: '0.875rem' }}>
                  Adwokat · Doktor nauk prawnych
                </p>
              </div>
            </div>
            <div className="portrait-stamp">
              <div className="kicker-num kicker-num--ghost">1</div>
              <div className="small uppercase tracking-widest font-bold mt-2" style={{ color: 'var(--text-main)' }}>
                Kancelaria<br />Lublin · Cała Polska
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orb" style={{ width: 600, height: 600, top: -200, right: -200, opacity: 'calc(0.12 * var(--ambient-on))' }} />
    </section>);

}

function HeroClassic({ setRoute }) {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: 'var(--d-hero-py)' }}>
      <div className="wrap text-center" style={{ maxWidth: '50rem' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Kancelaria adwokacka</span>
        <h1 className="display mt-6">
          Prawo nieruchomości.<br />
          <span className="accent">Prosto i skutecznie.</span>
        </h1>
        <p className="lead mt-6">
          Adwokat specjalizujący się wyłącznie w prawie nieruchomości. Analizuję umowy, reguluję stany prawne, chronię Twój kapitał. Obsługa zdalna — klienci z całej Polski.
        </p>
        <div className="flex gap-3 mt-8 justify-center" style={{ flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setRoute('uslugi')}>
            Zobacz usługi <Icon name="arrow-right" size={16} />
          </button>
          <button className="btn btn-secondary" onClick={() => setRoute('kontakt')}>
            Skontaktuj się
          </button>
        </div>
      </div>
    </section>);

}

function HeroSplitCard({ setRoute }) {
  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: 'var(--d-hero-py)' }}>
      <div className="wrap">
        <div className="hero-split">
          <div className="hero-split-text">
            <span className="eyebrow">Mecenas od Nieruchomości</span>
            <h1 className="display mt-4">
              Prawo nieruchomości.<br />
              <span className="accent">Prosto i skutecznie.</span>
            </h1>
            <p className="lead mt-6">
              Pomagam kupującym, inwestorom i deweloperom bezpiecznie przechodzić przez gąszcz przepisów. Wszystko mailowo, z konkretną wyceną i terminem.
            </p>
            <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => setRoute('uslugi')}>
                Zobacz usługi
              </button>
              <button className="btn btn-secondary" onClick={() => setRoute('kontakt')}>
                Skontaktuj się
              </button>
            </div>
          </div>
          <div className="hero-split-portrait">
            <div className="portrait-card">
              <img src={window.__resources?.portrait1 || "assets/maciej-muzyka.webp"} alt="adw. dr Maciej Muzyka" width="1100" height="1100" loading="lazy" decoding="async" />
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
   Service tile (used in services index + home featured)
   ============================================================ */
function ServiceTile({ service, onOpen, large = false }) {
  return (
    <button className={`service-tile ${large ? 'service-tile--lg' : ''}`} onClick={onOpen}>
      <div className="service-tile-head">
        <span className="service-tile-num">{service.n}</span>
        <span className="service-tile-icon">
          <Icon name={service.icon} size={large ? 26 : 22} />
        </span>
      </div>
      <h3 className="service-tile-title">{service.title}</h3>
      <p className="service-tile-desc">{service.short}</p>
      <div className="service-tile-foot">
        <span className="service-tile-audience">{service.audience[0]}</span>
        <span className="service-tile-arrow"><Icon name="arrow-right" size={16} /></span>
      </div>
    </button>);

}

/* ============================================================
   About block
   ============================================================ */
function AboutBlock({ compact = false }) {
  return (
    <section className={`section-py ${compact ? '' : 'bg-dark'} relative overflow-hidden`}>
      {!compact && <div className="orb" style={{ width: 500, height: 500, bottom: '-20%', right: '-10%', opacity: 'calc(0.2 * var(--ambient-on))' }} />}
      <div className="wrap relative" style={{ zIndex: 2 }}>
        <div className="about-grid">
          <div className="about-portrait">
            <img src={window.__resources?.portrait2 || "assets/maciej-muzyka-2.webp"} alt="adw. dr Maciej Muzyka" width="1100" height="1467" loading="lazy" decoding="async" />
          </div>
          <div className="about-body text-center">
            <span className={`eyebrow ${compact ? '' : 'on-dark'}`}>O mnie</span>
            <h2 className="display mt-4" style={{ color: compact ? 'var(--text-main)' : '#fff' }}>
              Maciej Muzyka
            </h2>
            <p className="font-semibold mt-2" style={{ color: compact ? 'var(--brand-primary)' : 'var(--brand-primary-light)', letterSpacing: '0.04em', fontSize: '1.0625rem' }}>adwokat · doktor nauk prawnych

            </p>
            <div style={{ width: 80, height: 3, background: 'var(--brand-primary)', margin: '1.5rem auto 2rem' }} />
            <p className="lead" style={{ color: compact ? 'var(--text-body)' : 'var(--text-on-dark-2)' }}>
              Prawo nieruchomości to dziedzina, w której mieszczą się jedne z najciekawszych i najtrudniejszych zagadek prawniczych. Roszczenia sięgające stu lat wstecz, splątane stany prawne gruntów, niejasne wpisy w księgach wieczystych. Każda sprawa to inna układanka.
            </p>
            <p className="lead mt-6" style={{ color: compact ? 'var(--text-body)' : 'var(--text-on-dark-2)' }}>Jestem adwokatem i doktorem nauk prawnych — studia prawnicze ukończyłem na Uniwersytecie Jagiellońskim, a doktorat z postępowania cywilnego obroniłem na UMCS w Lublinie. Szlif zawodowy zdobyłem w SPCG, jednej z czołowych polskich kancelarii. Pracowałem też naukowo w Katedrze Prawa Rolnego i Gospodarki Gruntami UMCS; z uczelni odszedłem, żeby w całości poświęcić się prowadzeniu kancelarii i sprawom klientów. Jako wykładowca Okręgowej Rady Adwokackiej w Lublinie uczę aplikantów adwokackich postępowania sądowoadministracyjnego — tego, jak prawidłowo konstruować skargi do WSA i NSA.
            </p>
            <ul className="about-creds mt-8" data-compact={compact}>
              {[
              { i: 'scale', t: 'Adwokat — Lubelska Izba Adwokacka, wpis nr LUB/ADW/1702', href: KRA_URL, hrefLabel: 'Krajowy Rejestr Adwokatów' },
              { i: 'graduation-cap', t: 'Absolwent prawa Uniwersytetu Jagiellońskiego' },
              { i: 'book-open', t: 'Doktor nauk prawnych (postępowanie cywilne) — UMCS' },
              { i: 'award', t: 'Doświadczenie z kancelarii SPCG — jednej z czołowych w Polsce' },
              { i: 'landmark', t: 'Były pracownik naukowy Katedry Prawa Rolnego i Gospodarki Gruntami UMCS' },
              { i: 'presentation', t: 'Wykładowca Okręgowej Rady Adwokackiej w Lublinie — postępowanie sądowoadministracyjne (skargi do WSA i NSA)' },
              { i: 'file-search', t: 'Praktyka wyłącznie w prawie nieruchomości' },
              { i: 'map-pin', t: 'Prowadzę sprawy klientów z całej Polski' }].
              map((c, i) =>
              <li key={i}>
                  <span className={`icon-tile ${compact ? 'icon-tile--info' : 'icon-tile--dark'}`}><Icon name={c.i} size={20} /></span>
                  <span style={{ color: compact ? 'var(--text-main)' : 'var(--text-on-dark)', fontWeight: 500 }}>{c.t}{c.href && <React.Fragment> · <a className="about-cred-link" href={c.href} target="_blank" rel="noopener noreferrer">{c.hrefLabel}</a></React.Fragment>}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Testimonials
   ============================================================ */
function Testimonials() {
  return (
    <section className="section-py">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Opinie klientów</span>
          <h2 className="h2 mt-4">Co mówią moi klienci.</h2>
          <p className="lead mt-6" style={{ maxWidth: '40rem' }}>
            Najlepszą rekomendacją kancelarii są skutecznie przeprowadzone sprawy i zadowoleni klienci.
          </p>
        </div>
        <div className="grid grid-3 mt-12" style={{ gap: 'var(--d-gap)' }}>
          {window.TESTIMONIALS.map((t, i) =>
          <div key={i} className="card">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) =>
              <Icon key={k} name="star" size={20} style={{ color: 'var(--signal-star)', fill: 'var(--signal-star)' }} />
              )}
              </div>
              <p className="body" style={{ fontStyle: 'italic', color: 'var(--slate-700)', fontSize: '1.0625rem' }}>
                „{t.text}”
              </p>
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
        </div>
      </div>
    </section>);

}

/* ============================================================
   ContactBlock — used as the contact page AND as a footer CTA
   ============================================================ */
function ContactBlock({ heading, subheading, source }) {
  const [state, setState] = useState({ name: '', email: '', phone: '', subject: source || '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (source) setState((s) => ({ ...s, subject: source }));
  }, [source]);

  function validate() {
    const e = {};
    if (!state.name.trim()) e.name = 'Wpisz proszę imię i nazwisko.';
    if (!state.email.trim()) e.email = 'Adres e-mail jest wymagany.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) e.email = 'Adres e-mail wydaje się błędny.';
    if (!state.message.trim() || state.message.trim().length < 10) e.message = 'Opisz proszę pokrótce sprawę (min. 10 znaków).';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
  }

  return (
    <section className="section-py bg-light">
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-aside">
            <div className="orb" style={{ width: 250, height: 250, top: -50, right: -50, background: 'rgba(255,255,255,0.2)' }} />
            <div className="orb" style={{ width: 250, height: 250, bottom: -80, left: -50, background: 'rgba(0,0,0,0.3)' }} />
            <div className="relative" style={{ zIndex: 2 }}>
              <span className="eyebrow on-dark">{heading || 'Skontaktuj się ze mną'}</span>
              <h3 className="display mt-4" style={{ color: '#fff' }}>
                Napisz<br />
                <span style={{ color: 'var(--brand-primary-light)' }}>krótko.</span>
              </h3>
              <p className="mt-6" style={{ color: 'var(--brand-primary-light)', lineHeight: 1.6 }}>
                {subheading || 'Zwykle odpowiadam tego samego dnia — z konkretną wyceną lub propozycją usługi.'}
              </p>
              <ul className="contact-info mt-12">
                <li>
                  <Icon name="mail" size={22} style={{ color: 'var(--brand-primary-light)' }} />
                  <div>
                    <p className="eyebrow on-dark" style={{ marginBottom: 4 }}>E-mail</p>
                    <p className="font-bold" style={{ color: '#fff', fontSize: '1rem', wordBreak: 'break-all' }}>
                      maciej.muzyka@mecenasodnieruchomosci.pl
                    </p>
                  </div>
                </li>
                <li>
                  <Icon name="phone" size={22} style={{ color: 'var(--brand-primary-light)' }} />
                  <div>
                    <p className="eyebrow on-dark" style={{ marginBottom: 4 }}>Telefon</p>
                    <p className="font-bold" style={{ color: '#fff', fontSize: '1.125rem' }}>+48 884 784 984</p>
                    <p className="small" style={{ color: 'var(--brand-primary-light)', marginTop: 4 }}>
                      Preferowany kontakt mailowy
                    </p>
                  </div>
                </li>
                <li>
                  <Icon name="map-pin" size={22} style={{ color: 'var(--brand-primary-light)' }} />
                  <div>
                    <p className="eyebrow on-dark" style={{ marginBottom: 4 }}>Kancelaria</p>
                    <p className="font-bold" style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.4 }}>
                      ul. Cicha 4/5<br />20-078 Lublin
                    </p>
                    <p className="small" style={{ color: 'var(--brand-primary-light)', marginTop: 2 }}>Siedziba kancelarii</p>
                    <p className="font-bold" style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.4, marginTop: 10 }}>
                      ul. Bracka 20/lok. 7A<br />00-028 Warszawa
                    </p>
                    <p className="small" style={{ color: 'var(--brand-primary-light)', marginTop: 2 }}>Możliwość spotkania</p>
                    <p className="small" style={{ color: 'var(--brand-primary-light)', marginTop: 8 }}>
                      Obsługa klientów z całej Polski — w pełni zdalnie.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form">
            {!sent ?
            <form onSubmit={submit}>
                <h3 className="font-bold mb-2" style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>
                  Zostaw wiadomość
                </h3>
                <p className="body mb-8">Opisz pokrótce sprawę — odpowiem mailowo z konkretną wyceną.</p>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <label>
                    <span className="input-label">Imię i nazwisko</span>
                    <input
                    className={`input ${errors.name ? 'input-error' : ''}`}
                    type="text"
                    value={state.name}
                    onChange={(e) => setState({ ...state, name: e.target.value })}
                    placeholder="Jan Kowalski" />
                  
                    {errors.name && <div className="input-err">{errors.name}</div>}
                  </label>
                  <label>
                    <span className="input-label">Telefon (opcjonalnie)</span>
                    <input
                    className="input"
                    type="tel"
                    value={state.phone}
                    onChange={(e) => setState({ ...state, phone: e.target.value })}
                    placeholder="+48 …" />
                  
                  </label>
                </div>
                <label className="mt-4" style={{ display: 'block' }}>
                  <span className="input-label">Adres e-mail</span>
                  <input
                  className={`input ${errors.email ? 'input-error' : ''}`}
                  type="email"
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  placeholder="jan@example.com" />
                
                  {errors.email && <div className="input-err">{errors.email}</div>}
                </label>
                <label className="mt-4" style={{ display: 'block' }}>
                  <span className="input-label">Czego dotyczy sprawa?</span>
                  <input
                  className="input"
                  type="text"
                  value={state.subject}
                  onChange={(e) => setState({ ...state, subject: e.target.value })}
                  placeholder="np. Audyt umowy deweloperskiej" />
                
                </label>
                <label className="mt-4" style={{ display: 'block' }}>
                  <span className="input-label">Krótki opis sprawy</span>
                  <textarea
                  className={`textarea ${errors.message ? 'input-error' : ''}`}
                  rows="5"
                  value={state.message}
                  onChange={(e) => setState({ ...state, message: e.target.value })}
                  placeholder="Opisz czego dotyczy sprawa…" />
                
                  {errors.message && <div className="input-err">{errors.message}</div>}
                </label>
                <button type="submit" className="btn btn-primary mt-6" style={{ width: '100%' }}>
                  Wyślij wiadomość <Icon name="arrow-right" size={16} />
                </button>
                <p className="small mt-4" style={{ lineHeight: 1.5 }}>
                  Wysyłając wiadomość akceptujesz politykę prywatności. Twoje dane są bezpieczne — wiąże mnie tajemnica adwokacka.
                </p>
              </form> :

            <div className="anim-fade-up text-center" style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div className="icon-tile icon-tile--info icon-tile--lg" style={{ margin: '0 auto', width: 80, height: 80 }}>
                  <Icon name="mail-check" size={36} />
                </div>
                <h3 className="font-bold mt-6" style={{ fontSize: '1.75rem', color: 'var(--text-main)' }}>
                  Wiadomość wysłana.
                </h3>
                <p className="lead mt-3">Dziękuję — odpowiem mailowo, zwykle tego samego dnia.</p>
                <button className="btn btn-secondary mt-8" onClick={() => {setSent(false);setState({ name: '', email: '', phone: '', subject: '', message: '' });}}>
                  Wyślij kolejną
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Footer
   ============================================================ */
function Footer({ setRoute }) {
  return (
    <footer className="bg-ink" style={{ paddingTop: '5rem', paddingBottom: '2.5rem', borderTop: '4px solid var(--brand-primary)' }}>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <button onClick={() => setRoute('landing')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <img src={window.__resources?.logoDark || "assets/logo-on-dark.png"} alt="Kancelaria Nieruchomości — Adwokat Maciej Muzyka" style={{ height: 104, width: 'auto' }} />
            </button>
            <p className="mt-6" style={{ color: 'var(--text-on-dark-3)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '24rem' }}>
              Specjalistyczna kancelaria adwokacka świadcząca usługi prawne wyłącznie w zakresie prawa nieruchomości i procesu inwestycyjno-budowlanego. Klienci z całej Polski — obsługa zdalna.
            </p>
            <div className="mt-6 small" style={{ color: 'var(--slate-500)', lineHeight: 1.6 }}>
              <p>adw. dr Maciej Muzyka</p>
              <p>Lubelska Izba Adwokacka, nr wpisu LUB/ADW/1702 · <a href={KRA_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>rejestr adwokatów</a></p>
              <p>NIP: 7123424474 · REGON: 389987200</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6" style={{ color: '#fff' }}>Kancelaria</h4>
            <ul className="footer-links">
              <li><button onClick={() => setRoute('uslugi')}>Usługi prawne</button></li>
              <li><button onClick={() => setRoute('faq')}>FAQ</button></li>
              <li><button onClick={() => setRoute('kalkulator')}>Kalkulator — słupy na działce</button></li>
              <li><button onClick={() => setRoute('kontakt')}>Kontakt</button></li>
              <li className="mt-4">ul. Cicha 4/5, 20-078 Lublin<br /><span style={{ color: 'var(--slate-500)' }}>Siedziba</span></li>
              <li className="mt-3">ul. Bracka 20/lok. 7A, 00-028 Warszawa<br /><span style={{ color: 'var(--slate-500)' }}>Możliwość spotkania</span></li>
              <li className="mt-3"><a href="tel:+48884784984" style={{ color: 'inherit' }}>+48 884 784 984</a> · <a href="https://wa.me/48884784984" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>WhatsApp</a></li>
              <li>
                <a href="mailto:maciej.muzyka@mecenasodnieruchomosci.pl">
                  maciej.muzyka@mecenasodnieruchomosci.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="small" style={{ color: 'var(--slate-500)' }}>
            © 2026 adw. dr Maciej Muzyka Kancelaria Adwokacka. Wszelkie prawa zastrzeżone.
          </p>
          <ul className="footer-legal">
            <li><a href="#/polityka-prywatnosci">Polityka Prywatności</a></li>
            <li><a href="#/regulamin">Regulamin</a></li>
            <li><a href="#/rodo">RODO</a></li>
            <li><button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}>Ustawienia cookies</button></li>
          </ul>
        </div>
      </div>
    </footer>);

}

/* ============================================================
   Section: "Why me" credibility strip — small horizontal bar
   ============================================================ */
function CredibilityStrip() {
  const items = [
  { i: 'shield-check', l: 'Tajemnica adwokacka' },
  { i: 'scale', l: 'LUB/ADW/1702' },
  { i: 'graduation-cap', l: 'Doktor nauk prawnych' },
  { i: 'mail', l: 'Obsługa zdalna' },
  { i: 'clock', l: 'Odpowiedź w 24 h roboczych' }];

  return (
    <div className="bg-light" style={{ paddingBlock: '1.5rem', borderBlock: '1px solid var(--slate-100)' }}>
      <div className="wrap">
        <ul className="cred-strip">
          {items.map((it, i) =>
          <li key={i}>
              <Icon name={it.i} size={18} style={{ color: 'var(--brand-primary)' }} />
              <span>{it.l}</span>
            </li>
          )}
        </ul>
      </div>
    </div>);

}

/* ============================================================
   Reading progress bar + back-to-top (content pages)
   ============================================================ */
function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      const y = window.scrollY || h.scrollTop || 0;
      setP(Math.max(0, Math.min(1, y / max)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-fill" style={{ transform: `scaleX(${p})` }} />
    </div>);

}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow((window.scrollY || document.documentElement.scrollTop || 0) > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      className={`back-to-top ${show ? 'is-visible' : ''}`}
      aria-label="Wróć na górę"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Icon name="arrow-up" size={20} />
    </button>);

}

Object.assign(window, {
  Icon,
  Navbar,
  Hero,
  ServiceTile,
  AboutBlock,
  Testimonials,
  ContactBlock,
  Footer,
  CredibilityStrip,
  ReadingProgress,
  BackToTop
});