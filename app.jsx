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
function buildPath(route, ids) {
  ids = ids || {};
  switch (route) {
    case 'uslugi': return '/uslugi';
    case 'blok': return '/uslugi/' + (ids.blockId || '');
    case 'usluga': {
      const b = window.getBlockOfService(ids.serviceSlug);
      return '/uslugi/' + (b ? b.id + '/' : '') + (ids.serviceSlug || '');
    }
    case 'blog': return '/blog';
    case 'blogpost': return '/blog/' + (ids.blogSlug || '');
    case 'faq': return '/faq';
    case 'kontakt': return '/kontakt';
    case 'o-mnie': return '/o-mnie';
    case 'kalkulator': return '/kalkulator-slupy';
    case 'polityka-prywatnosci': return '/polityka-prywatnosci';
    case 'regulamin': return '/regulamin';
    case 'rodo': return '/rodo';
    case 'notfound': return '/404';
    case 'landing':
    default: return '/';
  }
}
function idsFor(route, slug) {
  if (slug && typeof slug === 'object') return slug;
  if (route === 'usluga') return { serviceSlug: slug };
  if (route === 'blok') return { blockId: slug };
  if (route === 'blogpost') return { blogSlug: slug };
  return {};
}
/* href for any internal route — used by <NavLink> and plain <a> links */
function routeHref(route, slug) { return buildPath(route, idsFor(route, slug)); }

function parsePath(pathname) {
  let h = (pathname == null ? location.pathname : pathname) || '/';
  try { h = decodeURIComponent(h); } catch (e) {}
  h = h.replace(/\.html$/, '').replace(/^\/+/, '').replace(/\/+$/, '');
  const parts = h ? h.split('/') : [];
  /* '/index(.html)' anywhere = home, so a copy opened under a sub-path or from disk shows the landing page, not 404 */
  if (parts.length === 0 || parts[parts.length - 1] === 'index') return { route: 'landing' };
  const [a, b, c] = parts;
  if (a === 'uslugi') {
    if (!b) return { route: 'uslugi' };
    if (c) return (window.getService(c) && (window.getBlockOfService(c) || {}).id === b) ? { route: 'usluga', serviceSlug: c } : { route: 'notfound' };
    if (window.getBlock(b)) return { route: 'blok', blockId: b };
    if (window.getService(b)) return { route: 'usluga', serviceSlug: b };
    return { route: 'notfound' };
  }
  if (a === 'blog') {
    if (!b) return { route: 'blog' };
    return (window.BLOG || []).some((p) => p.slug === b) && !c ? { route: 'blogpost', blogSlug: b } : { route: 'notfound' };
  }
  if (parts.length > 1) return { route: 'notfound' };
  const simple = { faq: 'faq', kontakt: 'kontakt', 'o-mnie': 'o-mnie', 'kalkulator-slupy': 'kalkulator', 'polityka-prywatnosci': 'polityka-prywatnosci', regulamin: 'regulamin', rodo: 'rodo' };
  return simple[a] ? { route: simple[a] } : { route: 'notfound' };
}

/* canonical path for any path the router understands (#/uslugi/{slug} → /uslugi/{block}/{slug}); unknown paths unchanged */
function canonicalPath(raw) {
  const r = parsePath(raw);
  return r.route === 'notfound' || r.route === 'landing' ? raw : buildPath(r.route, r);
}

/* Once, before first render: legacy hash links (#/blog/...) from the old hash router → real paths,
   and non-canonical variants of a valid page (/uslugi/{slug}, /faq/, /faq.html) → the canonical path.
   The query string (utm_*, gclid, fbclid) is kept. */
(function normalizeLocation() {
  if (!/^https?:$/.test(location.protocol)) return;
  let target = null;
  if (/^#\/.+/.test(location.hash) || location.hash === '#/') target = canonicalPath(location.hash.slice(1).replace(/\/+$/, '') || '/') + location.search;
  else {
    const r = parsePath();
    if (r.route !== 'landing' && r.route !== 'notfound' && buildPath(r.route, r) !== location.pathname) target = buildPath(r.route, r) + location.search + location.hash;
  }
  if (target) { try { history.replaceState(null, '', target); } catch (e) {} }
})();

/* Blog `updated` is display text ('9 kwietnia 2026'); sitemap and JSON-LD need ISO 8601 */
const PL_MONTHS = { stycznia: 1, lutego: 2, marca: 3, kwietnia: 4, maja: 5, czerwca: 6, lipca: 7, sierpnia: 8, 'września': 9, 'października': 10, listopada: 11, grudnia: 12 };
function plDateIso(s) {
  const m = /^(\d{1,2})\s+(\S+)\s+(\d{4})$/.exec(String(s || '').trim());
  const mo = m && PL_MONTHS[m[2].toLowerCase()];
  return mo ? m[3] + '-' + String(mo).padStart(2, '0') + '-' + m[1].padStart(2, '0') : null;
}
function postModifiedIso(p) { return p.updatedIso || plDateIso(p.updated) || p.iso; }

function isPlainClick(e) {
  return e && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.defaultPrevented;
}

/* <NavLink route="usluga" slug={s.slug} className="…">…</NavLink>
   Renders a real <a href="/uslugi/…"> (crawlable) and navigates client-side on a plain click. */
function NavLink({ route, slug, subject, onNavigate, children, ...rest }) {
  const href = routeHref(route, slug);
  return (
    <a
      href={href}
      aria-current={href === location.pathname ? 'page' : undefined}
      {...rest}
      onClick={(e) => {
        if (rest.onClick) rest.onClick(e);
        if (!isPlainClick(e)) return;
        e.preventDefault();
        if (onNavigate) onNavigate();
        window.navigate(route, slug, subject);
      }}>
      {children}
    </a>
  );
}

function setHeadTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (value == null) { if (el) el.remove(); return; }
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
}
/* canonical + og:url point at the page itself (www, no trailing slash); 404 gets noindex and no canonical */
function setCanonical(path, noindex) {
  const url = noindex ? null : SITE_ORIGIN + (path === '/' ? '/' : path);
  setHeadTag('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l; }, 'href', url);
  setHeadTag('meta[property="og:url"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m; }, 'content', url);
  setHeadTag('meta[name="robots"]', () => { const m = document.createElement('meta'); m.setAttribute('name', 'robots'); return m; }, 'content', noindex ? 'noindex' : null);
}
function setMetaTag(attr, key, value) {
  setHeadTag(`meta[${attr}="${key}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m; }, 'content', value);
}
/* title + description, mirrored into Open Graph / Twitter so a shared link shows this page, not the home page.
   social: { ogTitle, ogDescription, twitterDescription, type, image, imageWidth, imageHeight, imageAlt, published, modified } */
function setMeta(title, description, social) {
  social = social || {};
  if (title) document.title = title;
  if (title) {
    setMetaTag('property', 'og:title', social.ogTitle || title);
    setMetaTag('name', 'twitter:title', social.ogTitle || title);
  }
  if (description != null) {
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:description', social.ogDescription || description);
    setMetaTag('name', 'twitter:description', social.twitterDescription || social.ogDescription || description);
  }
  const image = social.image || DEFAULT_OG_IMAGE;
  setMetaTag('property', 'og:type', social.type || 'website');
  setMetaTag('property', 'og:image', image);
  setMetaTag('property', 'og:image:width', String(social.imageWidth || 1200));
  setMetaTag('property', 'og:image:height', String(social.imageHeight || 630));
  setMetaTag('property', 'og:image:alt', social.imageAlt || DEFAULT_OG_ALT);
  setMetaTag('name', 'twitter:image', image);
  setMetaTag('property', 'article:published_time', social.published || null);
  setMetaTag('property', 'article:modified_time', social.modified || null);
}
/* shorten to n chars: end on a full sentence when one fits, otherwise on a word boundary + '\u2026' (never mid-word) */
function truncMeta(s, n) {
  s = (s || '').replace(/\s+/g, ' ').trim();
  if (s.length <= n) return s;
  const head = s.slice(0, n + 1);
  const re = /[.!?](?=\s+[A-Z\u0104\u0106\u0118\u0141\u0143\u00d3\u015a\u0179\u017b0-9\u201e"(])/g;
  let end = -1, m;
  while ((m = re.exec(head)) && m.index < n) end = m.index + 1;
  if (end >= n * 0.5) return s.slice(0, end);
  let t = s.slice(0, n - 1);
  const sp = t.lastIndexOf(' ');
  if (sp >= n * 0.6) t = t.slice(0, sp);
  return t.replace(/[\s,;:.\u2013\u2014-]+$/, '') + '\u2026';
}

const SITE_NAME = 'Kancelaria Nieruchomości';
const SITE_ORIGIN = 'https://www.mecenasodnieruchomosci.pl';
const DEFAULT_OG_IMAGE = SITE_ORIGIN + '/assets/og-image.png';
const DEFAULT_OG_ALT = 'adw. dr Maciej Muzyka — Kancelaria Nieruchomości';
/* home page social texts exactly as in index.html (short og:title, own og/twitter descriptions) */
const LANDING_SOCIAL = {
  ogTitle: 'adw. dr Maciej Muzyka — Kancelaria Nieruchomości',
  ogDescription: 'Nie musisz znać się na prawie, żeby bezpiecznie kupować i inwestować. Opisz sprawę i odbierz bezpłatną wstępną analizę w 24 h — w pełni zdalnie, w całej Polsce.',
  twitterDescription: 'Bezpłatna wstępna analiza sprawy w 24 h — wyłącznie prawo nieruchomości, w pełni zdalnie, w całej Polsce.',
};
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
    setMeta('Skarbnica wiedzy — prawo nieruchomości | ' + SITE_NAME, 'Praktyczne wpisy o prawie nieruchomości — jak bezpiecznie kupować, sprawdzać umowy i chronić swój kapitał.');
  } else if (route === 'blogpost') {
    const p = (window.BLOG || []).find((x) => x.slug === ids.blogSlug) || (window.BLOG || [])[0];
    if (p) setMeta(p.title + ' | ' + SITE_NAME, truncMeta(p.excerpt, 155), {
      ogTitle: p.title, type: 'article', published: p.iso, modified: postModifiedIso(p),
      image: p.cover ? absUrl(p.cover) : null, imageWidth: p.cover ? 1200 : null, imageHeight: p.cover ? 654 : null, imageAlt: p.cover ? p.title : null,
    });
  } else if (route === 'faq') {
    setMeta('FAQ — najczęstsze pytania | ' + SITE_NAME, 'Odpowiedzi na najczęstsze pytania o współpracę: bezpłatna analiza sprawy, poufność, wycena i przebieg spraw z nieruchomości.');
  } else if (route === 'kontakt') {
    setMeta('Kontakt | ' + SITE_NAME, 'Opisz swoją sprawę — bezpłatna wstępna analiza w 24 h. Kontakt mailowy, obsługa w całej Polsce. Siedziba w Lublinie, spotkania w Warszawie.');
  } else if (route === 'o-mnie') {
    setMeta('O mnie — adw. dr Maciej Muzyka | ' + SITE_NAME, 'Adwokat i doktor nauk prawnych, Lubelska Izba Adwokacka (LUB/ADW/1702). Wyłącznie prawo nieruchomości: Lublin i zdalnie cała Polska. Wykładowca ORA w Lublinie.');
  } else if (route === 'notfound') {
    setMeta('Nie znaleziono strony | ' + SITE_NAME, 'Tej strony nie ma pod tym adresem. Przejdź do usług, poradników albo opisz swoją sprawę.');
  } else if (route === 'kalkulator') {
    setMeta('Kalkulator: ile należy Ci się za słupy i rury na działce | ' + SITE_NAME, 'Orientacyjny przedział wynagrodzenia za służebność przesyłu i bezumowne korzystanie z działki — słupy, linie, gazociąg, wodociąg. Bez danych osobowych, w kilka sekund.');
  } else if (route === 'polityka-prywatnosci') {
    setMeta('Polityka prywatności | ' + SITE_NAME, 'Jak Kancelaria Nieruchomości przetwarza i chroni Twoje dane osobowe — administrator, cele i podstawy prawne, tajemnica adwokacka oraz Twoje prawa.');
  } else if (route === 'regulamin') {
    setMeta('Regulamin | ' + SITE_NAME, 'Zasady korzystania ze strony — charakter treści, formularz wstępnej analizy sprawy, prawa autorskie i odpowiedzialność.');
  } else if (route === 'rodo') {
    setMeta('Klauzula informacyjna RODO | ' + SITE_NAME, 'Obowiązek informacyjny RODO — kto przetwarza Twoje dane po wysłaniu formularza, w jakim celu i jak długo oraz jakie masz prawa.');
  } else {
    setMeta('adw. dr Maciej Muzyka — Kancelaria Nieruchomości | Prawo nieruchomości, prosto i skutecznie.', LANDING_META, LANDING_SOCIAL);
  }
  setCanonical(buildPath(route, ids), route === 'notfound');
  setJsonLd(buildJsonLd(route, ids));
}

/* Route-level structured data (FAQPage / Service + BreadcrumbList / BlogPosting) */
const SITE_BASE = 'https://www.mecenasodnieruchomosci.pl';
const ORG_ID = SITE_BASE + '/#kancelaria';
const PERSON_ID = SITE_BASE + '/#maciej-muzyka';
function absUrl(p) { return SITE_BASE + (p.charAt(0) === '/' ? '' : '/') + p; }
function crumbs(list) {
  return { '@type': 'BreadcrumbList', itemListElement: list.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE_BASE + c.path })) };
}
/* the author as an entity (facts as stated on the site: AboutBlock, footer, /o-mnie) */
function personEntity() {
  return {
    '@type': 'Person', '@id': PERSON_ID, name: 'Maciej Muzyka', honorificPrefix: 'adw. dr',
    jobTitle: 'Adwokat, doktor nauk prawnych', url: SITE_BASE + '/o-mnie', image: SITE_BASE + '/assets/maciej-muzyka.webp',
    identifier: { '@type': 'PropertyValue', propertyID: 'Numer wpisu na listę adwokatów', value: 'LUB/ADW/1702' },
    sameAs: ['https://rejestradwokatow.pl/adwokat/muzyka-maciej-35358'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Uniwersytet Jagielloński' },
      { '@type': 'CollegeOrUniversity', name: 'Uniwersytet Marii Curie-Skłodowskiej w Lublinie' },
    ],
    memberOf: { '@type': 'Organization', name: 'Izba Adwokacka w Lublinie', alternateName: 'Lubelska Izba Adwokacka' },
    worksFor: { '@id': ORG_ID },
    knowsLanguage: ['pl', 'en'],
  };
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
      { '@type': 'Service', name: c.h1 || s.title, description: truncMeta(c.subtitle || s.desc, 300), serviceType: 'Legal service', provider: { '@id': ORG_ID }, areaServed: { '@type': 'Country', name: 'Polska' }, url: SITE_BASE + buildPath('usluga', ids), offers: { '@type': 'Offer', description: 'Bezpłatna wstępna analiza sprawy w 24 h robocze; wycena przed zleceniem.' } },
      crumbs([{ name: 'Start', path: '/' }, { name: 'Usługi', path: '/uslugi' }, { name: b.title, path: '/uslugi/' + b.id }, { name: s.title, path: buildPath('usluga', ids) }]) ] };
  }
  if (route === 'blok') {
    const b = window.getBlock(ids.blockId); if (!b) return null;
    return { '@context': 'https://schema.org', '@graph': [crumbs([{ name: 'Start', path: '/' }, { name: 'Usługi', path: '/uslugi' }, { name: b.title, path: '/uslugi/' + b.id }])] };
  }
  if (route === 'blogpost') {
    const p = (window.BLOG || []).find((x) => x.slug === ids.blogSlug); if (!p) return null;
    return { '@context': 'https://schema.org', '@graph': [
      { '@type': 'BlogPosting', headline: p.title, description: truncMeta(p.excerpt, 300), datePublished: p.iso, dateModified: postModifiedIso(p), image: p.cover ? absUrl(p.cover) : undefined, inLanguage: 'pl', author: { '@type': 'Person', '@id': PERSON_ID, name: 'Maciej Muzyka', url: SITE_BASE + '/o-mnie' }, publisher: { '@id': ORG_ID }, mainEntityOfPage: SITE_BASE + '/blog/' + p.slug },
      crumbs([{ name: 'Start', path: '/' }, { name: 'Skarbnica wiedzy', path: '/blog' }, { name: p.title, path: '/blog/' + p.slug }]) ] };
  }
  if (route === 'o-mnie') {
    return { '@context': 'https://schema.org', '@type': 'ProfilePage', url: SITE_BASE + '/o-mnie', inLanguage: 'pl', mainEntity: personEntity() };
  }
  return null;
}
function setJsonLd(data) {
  let s = document.getElementById('route-jsonld');
  if (!data) { if (s) s.remove(); return; }
  if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'route-jsonld'; document.head.appendChild(s); }
  s.textContent = JSON.stringify(data);
}

function refreshIconsAndOrphans() {
  if (window.lucide) window.lucide.createIcons();
  fixOrphans();
}

/* The prerendered HTML is visible and editable before this script runs, and createRoot replaces it.
   Carry over anything typed (and the focus) so a visitor who started early loses nothing. */
function fieldKey(el) { return [el.tagName, el.type, el.name, el.placeholder].join('|'); }
function captureFields(root) {
  if (!root) return [];
  return [...root.querySelectorAll('input, textarea, select')].map((el, i) => {
    const toggle = el.type === 'checkbox' || el.type === 'radio';
    const changed = toggle ? el.checked !== el.defaultChecked : el.tagName === 'SELECT' ? [...el.options].some((o) => o.selected !== o.defaultSelected) : el.type !== 'file' && el.value !== el.defaultValue;
    const focus = el === document.activeElement;
    return changed || focus ? { i, key: fieldKey(el), toggle, changed, value: el.value, checked: el.checked, focus, sel: toggle ? null : [el.selectionStart, el.selectionEnd] } : null;
  }).filter(Boolean);
}
function restoreFields(root, saved) {
  const fields = [...root.querySelectorAll('input, textarea, select')];
  for (const s of saved) {
    const el = fields[s.i];
    if (!el || fieldKey(el) !== s.key) continue;
    if (s.changed && s.toggle) { if (el.checked !== s.checked) el.click(); }
    else if (s.changed && el.value !== s.value) {
      const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, s.value); /* native setter, so React's onChange sees the change */
      el.dispatchEvent(new Event(el.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true }));
    }
    if (s.focus) { el.focus({ preventScroll: true }); if (s.sel) { try { el.setSelectionRange(s.sel[0], s.sel[1]); } catch (e) {} } }
  }
}
const PRERENDERED_FIELDS = captureFields(document.getElementById('app'));

function App() {
  const [route, setRouteState] = useState(() => parsePath().route);
  const [serviceSlug, setServiceSlug] = useState(() => parsePath().serviceSlug || null);
  const [blockId, setBlockId] = useState(() => parsePath().blockId || null);
  const [blogSlug, setBlogSlug] = useState(() => parsePath().blogSlug || null);
  const [contactSubject, setContactSubject] = useState('');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  /* every client-side navigation bumps navTick; the layout effect below then scrolls and moves focus */
  const [navTick, setNavTick] = useState(0);
  const scrollTarget = React.useRef(0);
  const shownPath = React.useRef(location.pathname);

  /* Apply tweaks to <html> root so CSS variables cascade */
  useEffect(() => {
    document.documentElement.dataset.density = tweaks.density;
    document.documentElement.dataset.ambient = tweaks.ambient ? 'on' : 'off';
    document.documentElement.style.setProperty('--display-weight', tweaks.displayWeight === 'bold' ? '700' : '800');
  }, [tweaks]);

  /* new history entry for a client-side navigation (none when already there, e.g. footer link to this page).
     The scroll position is saved on the entry being left, so Back returns to it. Title/meta go first:
     GA4 reads document.title when it sees the history change. */
  function pushPath(target, r, ids) {
    if (location.pathname === target && !location.hash) return;
    try { history.replaceState(Object.assign({}, history.state, { y: Math.round(window.scrollY) }), ''); } catch (e) {}
    setMetaForView(r, ids);
    history.pushState(null, '', target);
  }
  function afterNav(y) {
    scrollTarget.current = y || 0;
    setNavTick((n) => n + 1);
  }
  function show(p, y) {
    setRouteState(p.route);
    setServiceSlug(p.serviceSlug || null);
    setBlockId(p.blockId || null);
    setBlogSlug(p.blogSlug || null);
    afterNav(y);
  }

  function setRoute(r, slug, subject) {
    setRouteState(r);
    const ids = { blockId, serviceSlug, blogSlug };
    if (r === 'usluga' && slug) { setServiceSlug(slug); ids.serviceSlug = slug; }
    if (r === 'blok' && slug) { setBlockId(slug); ids.blockId = slug; }
    if (r === 'blogpost' && slug) { setBlogSlug(slug); ids.blogSlug = slug; }
    if (subject) setContactSubject(subject);
    pushPath(buildPath(r, ids), r, ids);
    afterNav(0);
  }
  window.navigate = setRoute;

  /* external navigation (back/forward, legacy #/ links) → state */
  useEffect(() => {
    function onRoute(e) {
      if (e.type === 'hashchange' && !/^#\//.test(location.hash)) return; /* in-page anchor (#formularz): leave scrolling to the browser */
      if (/^#\//.test(location.hash)) history.replaceState(null, '', canonicalPath(location.hash.slice(1).replace(/\/+$/, '') || '/') + location.search);
      else if (location.pathname === shownPath.current) return; /* back/forward between anchors of the same page */
      show(parsePath(), e.type === 'popstate' && history.state && history.state.y);
    }
    window.addEventListener('hashchange', onRoute);
    window.addEventListener('popstate', onRoute);
    return () => {
      window.removeEventListener('hashchange', onRoute);
      window.removeEventListener('popstate', onRoute);
    };
  }, []);

  /* Plain internal <a href="/…"> links anywhere (content, footer) → client-side navigation.
     Assets, downloads, new tabs and unknown paths fall through to the browser. */
  useEffect(() => {
    function onClick(e) {
      if (!isPlainClick(e)) return;
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const raw = a.getAttribute('href');
      if (!raw || /^(mailto:|tel:|https?:\/\/(?!(www\.)?mecenasodnieruchomosci\.pl))/i.test(raw)) return;
      const url = new URL(raw, location.href);
      if (url.origin !== location.origin) return;
      let path = url.pathname;
      if (/^#\/.*/.test(url.hash)) path = url.hash.slice(1).replace(/\/+$/, '') || '/';
      else if (url.hash && path === location.pathname) return; /* in-page anchor */
      if (/^\/(assets|api)\//.test(path) || /\.[a-z0-9]{2,4}$/i.test(path)) return;
      const p = parsePath(path);
      if (p.route === 'notfound') return;
      e.preventDefault();
      pushPath(buildPath(p.route, p), p.route, p);
      show(p, 0);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
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

  /* lucide.createIcons() + Polish orphans after every render, before the browser paints
     (no frame with empty icon placeholders or re-wrapped lines), and once more shortly after
     for content that components add in their own effects */
  React.useLayoutEffect(() => {
    refreshIconsAndOrphans();
    const t = setTimeout(refreshIconsAndOrphans, 50);
    return () => clearTimeout(t);
  });

  /* first mount: hand back what was typed into the prerendered form */
  React.useLayoutEffect(() => {
    if (PRERENDERED_FIELDS.length) queueMicrotask(() => restoreFields(document.getElementById('app'), PRERENDERED_FIELDS));
  }, []);

  /* after a client-side navigation: scroll (top, or the saved position on Back) and move focus to the new
     page's heading, so keyboard and screen-reader users land on the new content */
  React.useLayoutEffect(() => {
    if (!navTick) return;
    shownPath.current = location.pathname;
    window.scrollTo({ top: scrollTarget.current, behavior: 'instant' });
    const h = document.querySelector('#app main h1');
    if (h) {
      if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
      h.focus({ preventScroll: true });
    }
  }, [navTick]);

  let body = null;
  if (route === 'landing') body = <LandingPage setRoute={setRoute} />;
  else if (route === 'uslugi') body = <UslugiOverview setRoute={setRoute} />;
  else if (route === 'blok') body = <PillarPage setRoute={setRoute} blockId={blockId || window.SERVICE_BLOCKS[0].id} />;
  else if (route === 'usluga') body = <ServicePage setRoute={setRoute} slug={serviceSlug || window.SERVICE_BLOCKS[0].services[0].slug} />;
  else if (route === 'blog') body = <BlogPage setRoute={setRoute} />;
  else if (route === 'blogpost') body = <BlogPostPage setRoute={setRoute} slug={blogSlug || window.BLOG[0].slug} />;
  else if (route === 'faq') body = <FaqPageV3 setRoute={setRoute} />;
  else if (route === 'kontakt') body = <KontaktPage setRoute={setRoute} />;
  else if (route === 'o-mnie') body = <window.OMniePage setRoute={setRoute} />;
  else if (route === 'notfound') body = <window.NotFoundPage setRoute={setRoute} />;
  else if (route === 'kalkulator') body = <window.KalkulatorSlupyPage setRoute={setRoute} />;
  else if (route === 'polityka-prywatnosci') body = <PolitykaPrywatnosciPage setRoute={setRoute} />;
  else if (route === 'regulamin') body = <RegulaminPage setRoute={setRoute} />;
  else if (route === 'rodo') body = <RodoPage setRoute={setRoute} />;
  else body = <window.NotFoundPage setRoute={setRoute} />;

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
              { id: 'blog', l: 'Skarbnica wiedzy' },
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

Object.assign(window, { NavLink, routeHref, buildPath, parsePath, postModifiedIso });

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
