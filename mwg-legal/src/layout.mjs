/* layout.mjs — HTML shell (head, header with mega menu, search, footer) and shared components. */
import { SITE, PRACTICES, SECTORS } from './content.mjs';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Logo redrawn from the supplied artwork (2000 x 325): LEGAL with the bar-less A, a divider, three lines of spaced capitals. */
export function logo({ cls = 'logo', title = SITE.fullName, words = true } = {}) {
  const w = words ? 2000 : 1080;
  return `<svg class="${cls}" viewBox="0 0 ${w} 325" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="10">
<path d="M52.5 58V233H162"/><path d="M369 62.5H253.5V232.5H369M253.5 144.5H354"/><path d="M621.2 103.5A88 88 0 1 0 633 149.5H545"/><path d="M957.5 58V233H1067"/>
</g>
<path fill="currentColor" d="M702 238L786.5 55 871 238H860L786.5 78.8 713 238Z"/>
${words ? `<rect fill="currentColor" x="1184" y="56" width="4" height="229"/>
<g fill="currentColor" font-family="Jost, 'Helvetica Neue', Arial, sans-serif" font-weight="400" font-size="65">
<text x="1312" y="106" textLength="371" lengthAdjust="spacing">MUZYKA</text>
<text x="1312" y="192" textLength="652" lengthAdjust="spacing">GOŹDZIEWSKI</text>
<text x="1312" y="281" textLength="553" lengthAdjust="spacing">WSPÓLNICY</text>
</g>` : ''}
</svg>`;
}

export const icon = {
  arrow: '<svg viewBox="0 0 16 10" aria-hidden="true"><path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  arrowLeft: '<svg viewBox="0 0 16 10" aria-hidden="true"><path d="M16 5H2M6 1L2 5l4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  chevron: '<svg viewBox="0 0 8 12" aria-hidden="true"><path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  caret: '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
  search: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="1.6"/></svg>',
  menu: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" stroke-width="1.6"/></svg>',
  close: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="1.6"/></svg>',
  ext: '<svg class="ext" viewBox="0 0 12 12" aria-hidden="true"><path d="M5 2H2v8h8V7M7 1h4v4M11 1L5.5 6.5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',
};

export const arrowLink = (href, text, { ext = false, cls = '' } = {}) =>
  `<a class="arrow-link ${cls}" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${text}${ext ? '<span class="visually-hidden"> (otwiera się w nowej karcie)</span>' : ''} ${icon.arrow}</a>`;

export const ill = (name, alt = '', { cls = '', eager = false, sizes = '(max-width: 960px) 100vw, 50vw' } = {}) =>
  `<img class="ill ${cls}" src="/img/ill/${name}.webp" srcset="/img/ill/${name}-800.webp 800w, /img/ill/${name}.webp 1600w" sizes="${sizes}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async" width="1600" height="1067">`;

/* AG-style card: illustration on grey, "Prefix: title" with the title in blue, text, arrow link. */
export function card({ href, img, alt = '', pre, title, text, link = 'Czytaj więcej', tab, meta, ext = false }) {
  return `<article class="card">
${tab ? `<span class="card__tab">${esc(tab)}</span>` : ''}
<div class="card__media">${ill(img, alt, { sizes: '(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px' })}</div>
<div class="card__body">
<h3 class="card__title">${pre ? `<span class="pre">${esc(pre)}: </span>` : ''}${esc(title)}</h3>
${meta ? `<p class="card__meta">${meta}</p>` : ''}
<p class="card__text">${esc(text)}</p>
${arrowLink(href, link, { ext })}
</div>
<a class="card__link-cover" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ''} tabindex="-1" aria-hidden="true"></a>
</article>`;
}

export function crumbs(items) {
  return `<nav class="crumbs wrap" aria-label="Okruszki"><ol>${items.map(([href, label], i) =>
    i === items.length - 1 ? `<li aria-current="page">${esc(label)}</li>` : `<li><a href="${href}">${esc(label)}</a></li>`).join('')}</ol></nav>`;
}

const NAV = [
  ['/o-nas', 'O nas'],
  ['/zespol', 'Zespół'],
  ['/specjalizacje', 'Specjalizacje', 'mega'],
  ['/lokalizacje', 'Lokalizacje'],
  ['/publikacje', 'Publikacje'],
  ['/kontakt', 'Kontakt'],
];

function header(path) {
  const active = (href) => (path === href || path.startsWith(href + '/') ? ' aria-current="page"' : '');
  const items = NAV.map(([href, label, mega]) => mega
    ? `<li class="nav__item"><button class="nav__link" type="button" aria-expanded="false" aria-controls="mega-specjalizacje"${active(href) || (path.startsWith('/sektory') ? ' aria-current="page"' : '')}>${label} ${icon.caret}</button>
<div class="mega" id="mega-specjalizacje"><div class="wrap mega__inner">
<div class="mega__intro"><p class="eyebrow">Specjalizacje</p><p>Doradzamy przedsiębiorcom w prawie korporacyjnym, podatkowym, nieruchomości i prawie pracy. Pracujemy dla firm z różnych sektorów gospodarki.</p>${arrowLink('/specjalizacje', 'Wszystkie specjalizacje')}<div class="mega__art">${ill('towers', '', { sizes: '360px' })}</div></div>
<div><h3>Obszary praktyki</h3><ul>${PRACTICES.map((p) => `<li><a href="/specjalizacje/${p.slug}">${esc(p.short)} ${icon.chevron}</a></li>`).join('')}</ul></div>
<div><h3>Sektory</h3><ul>${SECTORS.map((s) => `<li><a href="/sektory/${s.slug}">${esc(s.name)} ${icon.chevron}</a></li>`).join('')}</ul></div>
</div></div></li>`
    : `<li class="nav__item"><a class="nav__link" href="${href}"${active(href)}>${label}</a></li>`).join('');
  return `<header class="site-header" id="top">
<div class="wrap site-header__bar">
<a class="brand" href="/" aria-label="${esc(SITE.fullName)} – strona główna">${logo()}</a>
<nav class="nav" id="nav" aria-label="Menu główne">
<ul class="nav__list">${items}</ul>
<button class="icon-btn" type="button" data-search-open aria-label="Szukaj">${icon.search}</button>
</nav>
<div class="mobile-actions">
<button class="icon-btn menu-search" type="button" data-search-open aria-label="Szukaj">${icon.search}</button>
<button class="icon-btn menu-toggle" type="button" aria-controls="nav" aria-expanded="false" aria-label="Otwórz menu">${icon.menu}</button>
</div>
</div>
</header>`;
}

function search() {
  return `<div class="search" id="search" role="dialog" aria-modal="true" aria-label="Wyszukiwarka">
<div class="search__panel"><div class="wrap">
<form class="search__form" role="search" action="/szukaj" onsubmit="return false">
${icon.search}<label class="visually-hidden" for="q">Szukaj na stronie</label>
<input class="search__input" id="q" type="search" placeholder="Czego szukasz?" autocomplete="off">
<button class="icon-btn" type="button" data-search-close aria-label="Zamknij wyszukiwarkę">${icon.close}</button>
</form>
<ul class="search__results" id="search-results"></ul>
</div></div></div>`;
}

function footer() {
  return `<footer class="site-footer">
<div class="site-footer__pattern" aria-hidden="true"></div>
<div class="wrap site-footer__top">
<div class="site-footer__mark">${logo({ cls: 'logo', words: false, title: 'MWG Legal' })}</div>
${arrowLink('/o-nas', 'Poznaj MWG Legal', { cls: 'arrow-link--light' })}
</div>
<div class="wrap site-footer__bottom">
<div class="site-footer__row">
<a href="/" aria-label="Strona główna" style="color:#fff">${logo()}</a>
<ul class="footer-nav"><li><a href="/kontakt">Kontakt</a></li><li><a href="/lokalizacje">Lokalizacje</a></li><li><a href="/zespol">Zespół</a></li><li><a href="/specjalizacje">Specjalizacje</a></li></ul>
</div>
<ul class="legal-nav"><li><a href="/polityka-prywatnosci">Polityka prywatności</a></li><li><a href="/nota-prawna">Nota prawna</a></li><li><a href="/mapa-strony">Mapa strony</a></li></ul>
<p class="copyright">© ${SITE.year} ${esc(SITE.fullName)}. Strona nie używa plików cookies analitycznych ani reklamowych.</p>
</div>
</footer>`;
}

export function page({ path, title, description, body, hero = false, jsonld = [], image = 'hero', noindex = false }) {
  const fullTitle = path === '/' ? `${SITE.fullName} | Kancelaria dla biznesu` : `${title} | ${SITE.name}`;
  const canonical = SITE.url + (path === '/' ? '/' : path);
  const ld = [
    {
      '@context': 'https://schema.org', '@type': 'LegalService', name: SITE.fullName, url: SITE.url + '/',
      logo: SITE.url + '/img/logo.png', email: SITE.email, telephone: SITE.phone,
      areaServed: 'PL', knowsLanguage: 'pl',
      address: [
        { '@type': 'PostalAddress', streetAddress: 'ul. Cicha 4/5', postalCode: '20-078', addressLocality: 'Lublin', addressCountry: 'PL' },
        { '@type': 'PostalAddress', streetAddress: 'ul. Bracka 20/7A', postalCode: '00-028', addressLocality: 'Warszawa', addressCountry: 'PL' },
      ],
    },
    ...jsonld,
  ];
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:locale" content="pl_PL">
<meta property="og:site_name" content="${esc(SITE.fullName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}/img/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0d1f3c">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.png" sizes="64x64" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/jost-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/source-sans-3-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/site.css?v=__CSS_HASH__">
<script type="application/ld+json">${JSON.stringify(ld.length === 1 ? ld[0] : ld).replace(/</g, '\\u003c')}</script>
<script defer src="/js/site.js?v=__JS_HASH__"></script>
</head>
<body class="${hero ? 'has-hero' : ''}">
<a class="skip-link" href="#main">Przejdź do treści</a>
${header(path)}
${search()}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}
