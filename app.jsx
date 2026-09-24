/* app.jsx — App shell, routing, Tweaks integration. Loaded last. */

const { useState, useEffect } = React;
const {
  Icon, Navbar, Footer,
  HomePage, UslugiPage, ServiceDetailPage,
  BlogPage, BlogPostPage, FAQPage, KontaktPage,
  LandingPage,
  PolitykaPrywatnosciPage, RegulaminPage, RodoPage,
  UslugiOverview, PillarPage, ServicePage, FaqPageV3,
  ReadingProgress, BackToTop, CookieBanner, MobileCTABar,
  TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle,
} = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "density": "comfortable",
  "displayWeight": "heavy",
  "ambient": true
}/*EDITMODE-END*/;

/* ------------------------------------------------------------------
   Polish typography — bind single-letter words (a, i, o, u, w, z) to
   the next word with a non-breaking space so they never end a line.
   Runs over the rendered #app after every render (see effect below).
   ------------------------------------------------------------------ */
const ORPHAN_RE = /(^|[\s(„“"'>\u2013\u2014\u00BB\u00AB])([aiouwzAIOUWZ])[ \t]+(?=\S)/g;
function fixOrphans() {
  const root = document.getElementById('app');
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const edits = [];
  let node;
  while ((node = walker.nextNode())) {
    const v = node.nodeValue;
    if (!v || v.indexOf(' ') === -1) continue;
    const el = node.parentElement;
    if (!el || el.closest('input,textarea,script,style,code,pre,svg,[contenteditable=""],[contenteditable="true"]')) continue;
    const nv = v.replace(ORPHAN_RE, (m, pre, l) => pre + l + '\u00A0');
    if (nv !== v) edits.push([node, nv]);
  }
  for (const [n, nv] of edits) n.nodeValue = nv;
}

/* ------------------------------------------------------------------
   Hash routing helpers + document metadata sync.
   URL scheme mirrors the target directory structure:
     #/ · #/uslugi · #/uslugi/{blockId} · #/uslugi/{blockId}/{slug}
     #/blog · #/blog/{slug} · #/faq · #/kontakt
   ------------------------------------------------------------------ */
function buildHash(route, ids) {
  ids = ids || {};
  switch (route) {
    case 'uslugi': return '#/uslugi';
    case 'blok': return '#/uslugi/' + (ids.blockId || '');
    case 'usluga': {
      const b = window.getBlockOfService(ids.serviceSlug);
      return '#/uslugi/' + (b ? b.id + '/' : '') + (ids.serviceSlug || '');
    }
    case 'blog': return '#/blog';
    case 'blogpost': return '#/blog/' + (ids.blogSlug || '');
    case 'faq': return '#/faq';
    case 'kontakt': return '#/kontakt';
    case 'kalkulator': return '#/kalkulator-slupy';
    case 'polityka-prywatnosci': return '#/polityka-prywatnosci';
    case 'regulamin': return '#/regulamin';
    case 'rodo': return '#/rodo';
    case 'landing':
    default: return '#/';
  }
}

function parseHash() {
  let h = (location.hash || '').replace(/^#/, '');
  h = h.replace(/^\/+/, '').replace(/\/+$/, '');
  const parts = h ? h.split('/') : [];
  if (parts.length === 0) return { route: 'landing' };
  const [a, b, c] = parts;
  if (a === 'uslugi') {
    if (!b) return { route: 'uslugi' };
    if (c && window.getService(c)) return { route: 'usluga', serviceSlug: c };
    if (window.getBlock(b)) return { route: 'blok', blockId: b };
    if (window.getService(b)) return { route: 'usluga', serviceSlug: b };
    return { route: 'uslugi' };
  }
  if (a === 'blog') return b ? { route: 'blogpost', blogSlug: b } : { route: 'blog' };
  if (a === 'faq') return { route: 'faq' };
  if (a === 'kontakt') return { route: 'kontakt' };
  if (a === 'kalkulator-slupy') return { route: 'kalkulator' };
  if (a === 'polityka-prywatnosci') return { route: 'polityka-prywatnosci' };
  if (a === 'regulamin') return { route: 'regulamin' };
  if (a === 'rodo') return { route: 'rodo' };
  return { route: 'landing' };
}

function setMeta(title, description) {
  if (title) document.title = title;
  if (description != null) {
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', description);
  }
}
function truncMeta(s, n) {
  s = (s || '').replace(/\s+/g, ' ').trim();
  return s.length > n ? s.slice(0, n - 1).replace(/[\s,;:.\u2013-]+$/, '') + '\u2026' : s;
}

const SITE_NAME = 'Kancelaria Nieruchomości';
const LANDING_META = 'Adwokat i doktor nauk prawnych. Wyłącznie nieruchomości — audyty, transakcje, inwestycje, spory. Opisz sprawę i odbierz bezpłatną wstępną analizę w 24 h. W pełni zdalnie, w całej Polsce.';

function setMetaForView(route, ids) {
  ids = ids || {};
  if (route === 'uslugi') {
    setMeta('Usługi — prawo nieruchomości | ' + SITE_NAME, 'Pełen zakres praktyki: sprawdzenie nieruchomości przed zakupem, transakcje, księgi wieczyste, warunki zabudowy, najem, spory i odszkodowania.');
  } else if (route === 'blok') {
    const b = window.getBlock(ids.blockId);
    if (b) setMeta(b.title + ' | ' + SITE_NAME, truncMeta(b.intro || b.tagline, 155));
    else setMeta('Usługi — prawo nieruchomości | ' + SITE_NAME, null);
  } else if (route === 'usluga') {
    const s = window.getService(ids.serviceSlug);
    const c = (window.SERVICE_CONTENT || {})[ids.serviceSlug];
    const title = (c && c.h1) || (s && s.title) || 'Usługa';
    const desc = (c && (c.subtitle || c.intro)) || (s && s.desc) || LANDING_META;
    setMeta(title + ' | ' + SITE_NAME, truncMeta(desc, 155));
  } else if (route === 'blog') {
    setMeta('Blog — prawo nieruchomości | ' + SITE_NAME, 'Praktyczne wpisy o prawie nieruchomości — jak bezpiecznie kupować, sprawdzać umowy i chronić swój kapitał.');
  } else if (route === 'blogpost') {
    const p = (window.BLOG || []).find((x) => x.slug === ids.blogSlug) || (window.BLOG || [])[0];
    if (p) setMeta(p.title + ' | ' + SITE_NAME, truncMeta(p.excerpt, 155));
  } else if (route === 'faq') {
    setMeta('FAQ — najczęstsze pytania | ' + SITE_NAME, 'Odpowiedzi na najczęstsze pytania o współpracę: bezpłatna analiza sprawy, poufność, wycena i przebieg spraw z nieruchomości.');
  } else if (route === 'kontakt') {
    setMeta('Kontakt | ' + SITE_NAME, 'Opisz swoją sprawę — bezpłatna wstępna analiza w 24 h. Kontakt mailowy, obsługa w całej Polsce. Siedziba w Lublinie, spotkania w Warszawie.');
  } else if (route === 'kalkulator') {
    setMeta('Kalkulator: ile należy Ci się za słupy i rury na działce | ' + SITE_NAME, 'Orientacyjny przedział wynagrodzenia za służebność przesyłu i bezumowne korzystanie z działki — słupy, linie, gazociąg, wodociąg. Bez danych osobowych, w kilka sekund.');
  } else if (route === 'polityka-prywatnosci') {
    setMeta('Polityka prywatności | ' + SITE_NAME, 'Jak Kancelaria Nieruchomości przetwarza i chroni Twoje dane osobowe — administrator, cele i podstawy prawne, tajemnica adwokacka oraz Twoje prawa.');
  } else if (route === 'regulamin') {
    setMeta('Regulamin | ' + SITE_NAME, 'Zasady korzystania ze strony — charakter treści, formularz wstępnej analizy sprawy, prawa autorskie i odpowiedzialność.');
  } else if (route === 'rodo') {
    setMeta('Klauzula informacyjna RODO | ' + SITE_NAME, 'Obowiązek informacyjny RODO — kto przetwarza Twoje dane po wysłaniu formularza, w jakim celu i jak długo oraz jakie masz prawa.');
  } else {
    setMeta('adw. dr Maciej Muzyka — Kancelaria Nieruchomości | Prawo nieruchomości, prosto i skutecznie.', LANDING_META);
  }
  setJsonLd(buildJsonLd(route, ids));
}

/* Route-level structured data (FAQPage / Service + BreadcrumbList / BlogPosting) */
const SITE_BASE = 'https://mecenasodnieruchomosci.pl/';
const ORG_ID = SITE_BASE + '#kancelaria';
function crumbs(list) {
  return { '@type': 'BreadcrumbList', itemListElement: list.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE_BASE + c.hash })) };
}
function buildJsonLd(route, ids) {
  ids = ids || {};
  if (route === 'faq') {
    return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: (window.FAQ_SECTIONS || []).flatMap((s) => s.items).map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })) };
  }
  if (route === 'usluga') {
    const s = window.getService(ids.serviceSlug); const b = window.getBlockOfService(ids.serviceSlug);
    if (!s || !b) return null;
    const c = (window.SERVICE_CONTENT || {})[ids.serviceSlug] || {};
    return { '@context': 'https://schema.org', '@graph': [
      { '@type': 'Service', name: c.h1 || s.title, description: truncMeta(c.subtitle || s.desc, 300), serviceType: 'Legal service', provider: { '@id': ORG_ID }, areaServed: { '@type': 'Country', name: 'Polska' }, url: SITE_BASE + buildHash('usluga', ids), offers: { '@type': 'Offer', description: 'Bezpłatna wstępna analiza sprawy w 24 h robocze; wycena przed zleceniem.' } },
      crumbs([{ name: 'Start', hash: '' }, { name: 'Usługi', hash: '#/uslugi' }, { name: b.title, hash: '#/uslugi/' + b.id }, { name: s.title, hash: buildHash('usluga', ids) }]) ] };
  }
  if (route === 'blok') {
    const b = window.getBlock(ids.blockId); if (!b) return null;
    return { '@context': 'https://schema.org', '@graph': [crumbs([{ name: 'Start', hash: '' }, { name: 'Usługi', hash: '#/uslugi' }, { name: b.title, hash: '#/uslugi/' + b.id }])] };
  }
  if (route === 'blogpost') {
    const p = (window.BLOG || []).find((x) => x.slug === ids.blogSlug); if (!p) return null;
    return { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: truncMeta(p.excerpt, 300), datePublished: p.iso, dateModified: p.iso, image: p.cover ? SITE_BASE + p.cover : undefined, inLanguage: 'pl', author: { '@type': 'Person', '@id': SITE_BASE + '#maciej-muzyka', name: 'Maciej Muzyka' }, publisher: { '@id': ORG_ID }, mainEntityOfPage: SITE_BASE + '#/blog/' + p.slug };
  }
  return null;
}
function setJsonLd(data) {
  let s = document.getElementById('route-jsonld');
  if (!data) { if (s) s.remove(); return; }
  if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'route-jsonld'; document.head.appendChild(s); }
  s.textContent = JSON.stringify(data);
}

function App() {
  const [route, setRouteState] = useState(() => parseHash().route);
  const [serviceSlug, setServiceSlug] = useState(() => parseHash().serviceSlug || null);
  const [blockId, setBlockId] = useState(() => parseHash().blockId || null);
  const [blogSlug, setBlogSlug] = useState(() => parseHash().blogSlug || null);
  const [contactSubject, setContactSubject] = useState('');
  const isInternalNav = React.useRef(false);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  /* Apply tweaks to <html> root so CSS variables cascade */
  useEffect(() => {
    document.documentElement.dataset.density = tweaks.density;
    document.documentElement.dataset.ambient = tweaks.ambient ? 'on' : 'off';
    document.documentElement.style.setProperty('--display-weight', tweaks.displayWeight === 'bold' ? '700' : '800');
  }, [tweaks]);

  function setRoute(r, slug, subject) {
    setRouteState(r);
    const ids = { blockId, serviceSlug, blogSlug };
    if (r === 'usluga' && slug) { setServiceSlug(slug); ids.serviceSlug = slug; }
    if (r === 'blok' && slug) { setBlockId(slug); ids.blockId = slug; }
    if (r === 'blogpost' && slug) { setBlogSlug(slug); ids.blogSlug = slug; }
    if (subject) setContactSubject(subject);
    const target = buildHash(r, ids);
    const cur = location.hash === '' ? '#/' : location.hash;
    if (cur !== target) { isInternalNav.current = true; location.hash = target; }
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  }

  /* external navigation (back/forward, refresh, pasted deep link) → state */
  useEffect(() => {
    function onRoute() {
      if (isInternalNav.current) { isInternalNav.current = false; return; }
      const p = parseHash();
      setRouteState(p.route);
      setServiceSlug(p.serviceSlug || null);
      setBlockId(p.blockId || null);
      setBlogSlug(p.blogSlug || null);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
    }
    window.addEventListener('hashchange', onRoute);
    window.addEventListener('popstate', onRoute);
    return () => {
      window.removeEventListener('hashchange', onRoute);
      window.removeEventListener('popstate', onRoute);
    };
  }, []);

  /* keep document.title + meta description in sync with the current view */
  useEffect(() => {
    setMetaForView(route, { blockId, serviceSlug, blogSlug });
  }, [route, blockId, serviceSlug, blogSlug]);

  /* which service block to highlight in the mega-menu */
  let activeBlock = null;
  if (route === 'blok') activeBlock = blockId;
  else if (route === 'usluga' && serviceSlug) {
    const b = window.getBlockOfService(serviceSlug);
    activeBlock = b ? b.id : null;
  }

  /* re-run lucide.createIcons() + fix Polish orphans whenever the route or tweaks change */
  useEffect(() => {
    const t = setTimeout(() => {
      if (window.lucide) window.lucide.createIcons();
      fixOrphans();
    }, 50);
    return () => clearTimeout(t);
  });

  let body = null;
  if (route === 'landing') body = <LandingPage setRoute={setRoute} />;
  else if (route === 'uslugi') body = <UslugiOverview setRoute={setRoute} />;
  else if (route === 'blok') body = <PillarPage setRoute={setRoute} blockId={blockId || window.SERVICE_BLOCKS[0].id} />;
  else if (route === 'usluga') body = <ServicePage setRoute={setRoute} slug={serviceSlug || window.SERVICE_BLOCKS[0].services[0].slug} />;
  else if (route === 'blog') body = <BlogPage setRoute={setRoute} />;
  else if (route === 'blogpost') body = <BlogPostPage setRoute={setRoute} slug={blogSlug || window.BLOG[0].slug} />;
  else if (route === 'faq') body = <FaqPageV3 setRoute={setRoute} />;
  else if (route === 'kontakt') body = <KontaktPage setRoute={setRoute} />;
  else if (route === 'kalkulator') body = <window.KalkulatorSlupyPage setRoute={setRoute} />;
  else if (route === 'polityka-prywatnosci') body = <PolitykaPrywatnosciPage setRoute={setRoute} />;
  else if (route === 'regulamin') body = <RegulaminPage setRoute={setRoute} />;
  else if (route === 'rodo') body = <RodoPage setRoute={setRoute} />;
  else body = <LandingPage setRoute={setRoute} />;

  return (
    <>
      <a href="#main-content" className="skip-link" onClick={(e)=>{ e.preventDefault(); const m=document.querySelector('main'); if(m){ m.setAttribute('tabindex','-1'); m.focus(); m.scrollIntoView(); } }}>Przejdź do treści</a>
      <Navbar route={route} setRoute={setRoute} serviceSlug={activeBlock} />
      {route !== 'landing' && <ReadingProgress />}
      {body}
      <Footer setRoute={setRoute} />
      <CookieBanner />
      {window.QuickContact && <window.QuickContact />}
      {route !== 'landing' && <BackToTop />}
      {route !== 'landing' && <MobileCTABar key={route + (serviceSlug || '') + (blockId || '') + (blogSlug || '')} />}

      <TweaksPanel title="Tweaks" defaultPosition={{ right: 24, bottom: 24 }}>
        <TweakSection label="Układ">
          <TweakRadio
            label="Wariant hero"
            value={tweaks.heroVariant}
            onChange={(v) => setTweak('heroVariant', v)}
            options={[
              { value: 'editorial', label: 'Editorial' },
              { value: 'splitcard', label: 'Split' },
              { value: 'classic', label: 'Klasyczny' },
            ]}
          />
          <TweakRadio
            label="Gęstość"
            value={tweaks.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'compact', label: 'Kompakt' },
              { value: 'comfortable', label: 'Standard' },
              { value: 'editorial', label: 'Editorial' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Typografia">
          <TweakRadio
            label="Grubość display"
            value={tweaks.displayWeight}
            onChange={(v) => setTweak('displayWeight', v)}
            options={[
              { value: 'bold', label: 'Bold 700' },
              { value: 'heavy', label: 'Extra 800' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Atmosfera">
          <TweakToggle
            label="Niebieskie poświaty (orbs)"
            value={tweaks.ambient}
            onChange={(v) => setTweak('ambient', v)}
          />
        </TweakSection>

        <TweakSection label="Nawigacja">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {[
              { id: 'landing', l: 'Landing' },
              { id: 'uslugi', l: 'Usługi' },
              { id: 'blog', l: 'Blog' },
              { id: 'faq', l: 'FAQ' },
              { id: 'kontakt', l: 'Kontakt' },
            ].map((r) => (
              <button
                key={r.id}
                className="tweak-mini-btn"
                data-active={route === r.id}
                onClick={() => {
                  setRoute(r.id);
                }}
              >
                {r.l}
              </button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
