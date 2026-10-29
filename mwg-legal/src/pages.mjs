/* pages.mjs — every route of the site. Each function returns { path, title, description, body, ... }. */
import { SITE, OFFICES, PRACTICES, SECTORS, PEOPLE, INSIGHTS, HOME_SLIDES } from './content.mjs';
import { esc, card, arrowLink, ill, icon, crumbs, logo } from './layout.mjs';

const P = Object.fromEntries(PRACTICES.map((p) => [p.slug, p]));
const S = Object.fromEntries(SECTORS.map((s) => [s.slug, s]));
const PE = Object.fromEntries(PEOPLE.map((p) => [p.slug, p]));
const IN = Object.fromEntries(INSIGHTS.map((a) => [a.slug, a]));

const tel = (p) => p.replace(/[^+\d]/g, '');
const photo = (p, small = false) => p.photo
  ? `<img src="${small && p.photoSmall ? p.photoSmall : p.photo}" alt="${esc(p.name)}" loading="lazy" decoding="async" width="900" height="1200">`
  : `<div class="monogram" role="img" aria-label="${esc(p.name)}">${esc(p.initials)}</div>`;

function pageHero({ eyebrow, title, lead, img, alt = '', trail, actions = '' }) {
  return `<section class="page-hero">
${crumbs(trail)}
<div class="wrap page-hero__grid">
<div class="page-hero__text">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}<h1>${esc(title)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ''}${actions}</div>
${img ? `<div class="page-hero__art">${ill(img, alt, { eager: true })}</div>` : ''}
</div>
</section>`;
}

function contactCards(slugs) {
  return slugs.map((s) => PE[s]).filter(Boolean).map((p) => `<div class="contact-card">
${p.photo ? `<img src="${p.photoSmall || p.photo}" alt="" loading="lazy" width="72" height="72">` : `<div class="avatar monogram" style="font-size:1.3rem" aria-hidden="true">${esc(p.initials)}</div>`}
<div><a class="n" href="/zespol/${p.slug}">${esc(p.name)}</a><span class="r">${esc(p.role)} · ${esc(p.offices.join(', '))}</span>
${p.email ? `<a class="m" href="mailto:${p.email}">Napisz e-mail</a>` : `<a class="m" href="/kontakt">Formularz kontaktowy</a>`}</div>
</div>`).join('');
}

function insightCard(a, tab) {
  return card({ href: a.url, ext: true, img: a.img, pre: a.cat, title: a.title, text: a.excerpt, link: 'Czytaj na blogu', tab, meta: `${esc(a.date)} · ${esc(PE[a.author].name)}` });
}

const ctaBand = (title = 'Porozmawiajmy o Twojej sprawie', text = 'Opisz krótko, czego dotyczy sprawa. Odpowiemy, jak możemy pomóc i jak wyglądałaby współpraca.') => `<section class="cta-band"><div class="wrap cta-band__grid">
<div><h2>${esc(title)}</h2><p>${esc(text)}</p></div>
<a class="btn" href="/kontakt">Skontaktuj się ${icon.arrow.replace('<svg', '<svg width="16" height="10"')}</a>
</div></section>`;

/* ---------- Home ---------- */
function home() {
  const slides = HOME_SLIDES.map((k) => S[k]);
  const body = `<section class="hero">
<div class="hero__art" aria-hidden="true">${ill('hero', '', { eager: true, sizes: '(max-width: 960px) 100vw, 760px' }).replace('width="1600" height="1067"', 'width="1600" height="1467"')}</div>
<div class="wrap hero__inner">
<div class="hero__text">
<h1 class="hero__title">Kancelaria dla biznesu</h1>
<p>MWG Legal to wspólna praktyka adwokatów Macieja Muzyki i Rafała Goździewskiego. Doradzamy spółkom, przedsiębiorcom i inwestorom w prawie korporacyjnym, podatkowym, prawie nieruchomości i prawie pracy: od bieżącej obsługi po transakcje i spory.</p>
<div class="hero__links">${arrowLink('/o-nas', 'Poznaj kancelarię')}${arrowLink('/specjalizacje', 'Nasze specjalizacje')}</div>
</div>
</div>
</section>

<section class="overlap"><div class="wrap cards">
${card({ href: '/o-nas', img: 'lublin', pre: 'Aktualności', title: 'Startuje MWG Legal', text: 'Łączymy praktyki dwóch adwokatów z Lublina i Warszawy, żeby przedsiębiorca miał w jednym miejscu doradztwo korporacyjne, podatkowe, nieruchomościowe i pracownicze.' })}
${card({ href: '/specjalizacje/prawo-korporacyjne', img: 'towers', pre: 'Specjalizacja', title: P['prawo-korporacyjne'].name, text: P['prawo-korporacyjne'].teaser })}
${insightCard(IN['umowa-o-roboty-budowlane'])}
</div></section>

<section class="welcome"><div class="wrap">
<div class="welcome__grid">
<div class="welcome__media">${ill('court', 'Szkic portyku z kolumnami w niebieskiej akwareli')}</div>
<div class="welcome__card">
<h2>Witamy</h2>
<p>Jesteśmy kancelarią adwokacką, która obsługuje przedsiębiorców. Łączymy prawo spółek i transakcji, podatki, nieruchomości i prawo pracy, bo w firmie te sprawy rzadko występują osobno: sprzedaż spółki dotyczy jej nieruchomości i pracowników, a każda umowa ma skutki podatkowe.</p>
<p>Pracujemy w małym zespole. Klient rozmawia bezpośrednio z adwokatem, który prowadzi jego sprawę.</p>
${arrowLink('/o-nas', 'Dowiedz się więcej')}
</div>
</div>
</div></section>

<section class="band"><div class="wrap">
<div class="panel on-dark">
<div class="panel__art" aria-hidden="true">${ill('warsaw', '')}</div>
<div class="panel__text">
<h2>MWG Legal w Lublinie i w Warszawie</h2>
<p>Przyjmujemy klientów w dwóch biurach. Spotkania prowadzimy także online, więc obsługujemy firmy z całej Polski.</p>
<div class="panel__offices">${OFFICES.map((o) => `<div><strong>${esc(o.city)}</strong><span>${esc(o.street)}<br>${esc(o.postal)}</span></div>`).join('')}</div>
${arrowLink('/lokalizacje', 'Lokalizacje')}
</div>
</div>
</div></section>

<section class="carousel" aria-roledescription="karuzela" aria-label="Sektory">
<div class="wrap">
<div class="carousel__viewport"><div class="carousel__track">
${slides.map((s, i) => `<div class="slide" role="group" aria-roledescription="slajd" aria-label="${i + 1} z ${slides.length}"${i ? ' aria-hidden="true"' : ''}>
<div class="slide__text"><p class="eyebrow">Sektor</p><h3>${esc(s.name)}</h3><p>${esc(s.lead)}</p>
<ul>${s.matters.slice(0, 3).map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
${arrowLink(`/sektory/${s.slug}`, 'Zobacz sektor', { cls: 'arrow-link--light' })}</div>
<div class="slide__media">${ill(s.img, '')}</div>
</div>`).join('')}
</div></div>
<div class="carousel__controls">
<button class="round-btn" type="button" data-prev aria-label="Poprzedni slajd">${icon.arrowLeft}</button>
<div class="dots">${slides.map((s, i) => `<button class="dot" type="button" aria-label="Slajd ${i + 1}: ${esc(s.name)}"${i ? '' : ' aria-current="true"'}></button>`).join('')}</div>
<button class="round-btn" type="button" data-next aria-label="Następny slajd">${icon.arrow}</button>
</div>
</div>
</section>

<section class="feeds"><div class="wrap">
<div class="cards">
${insightCard(IN['dzierzawa-pod-fotowoltaike-a-vat'], 'Podatki')}
${insightCard(IN['wydruki-ksiag-wieczystych-i-alerty-krs-2026'], 'Spółki')}
${insightCard(IN['oplata-adiacencka-renta-planistyczna'], 'Nieruchomości')}
</div>
<div class="feeds__more">${arrowLink('/publikacje', 'Wszystkie publikacje', { cls: 'arrow-link--light' })}</div>
</div></section>

<section class="quick"><div class="wrap quick__grid">
<div><h2>Na skróty</h2><p>Najczęściej odwiedzane miejsca na stronie: specjalizacje i sektory, zespół, publikacje oraz dane kontaktowe biur.</p></div>
<ul class="quick__list">
${[['/specjalizacje', 'Obszary praktyki'], ['/specjalizacje#sektory', 'Sektory'], ['/zespol', 'Zespół'], ['/publikacje', 'Publikacje'], ['/lokalizacje', 'Lokalizacje'], ['/kontakt', 'Kontakt']]
    .map(([h, t]) => `<li><a href="${h}">${t} ${icon.chevron}</a></li>`).join('')}
</ul>
</div></section>`;
  return { path: '/', title: SITE.fullName, description: SITE.description, body, hero: true, keywords: 'strona główna kancelaria biznes' };
}

/* ---------- Expertise ---------- */
function expertise() {
  const body = `${pageHero({ eyebrow: 'Specjalizacje', title: 'Prawo dla przedsiębiorców', lead: 'Doradzamy w czterech dziedzinach, które w firmie łączą się najczęściej: prawie korporacyjnym, podatkowym, prawie nieruchomości i prawie pracy. Prowadzimy też spory i stałą obsługę prawną firm.', img: 'towers', trail: [['/', 'Strona główna'], ['/specjalizacje', 'Specjalizacje']] })}
<section class="section"><div class="wrap">
<div class="section__head"><h2>Obszary praktyki</h2></div>
<div class="cards">${PRACTICES.map((p) => card({ href: `/specjalizacje/${p.slug}`, img: p.img, title: p.name, text: p.teaser, link: 'Zobacz' })).join('')}</div>
</div></section>
<section class="section section--soft" id="sektory"><div class="wrap">
<div class="section__head"><h2>Sektory</h2><p style="margin:0;max-width:520px">Znamy specyfikę branż, dla których pracujemy: ich umowy, regulacje i typowe spory.</p></div>
<div class="cards">${SECTORS.map((s) => card({ href: `/sektory/${s.slug}`, img: s.img, pre: 'Sektor', title: s.name, text: s.teaser, link: 'Zobacz' })).join('')}</div>
</div></section>
<section class="section section--tight"><div class="wrap">
<h2>Od A do Z</h2>
<ul class="az">${[...PRACTICES.map((p) => [`/specjalizacje/${p.slug}`, p.name]), ...SECTORS.map((s) => [`/sektory/${s.slug}`, s.name])]
    .sort((a, b) => a[1].localeCompare(b[1], 'pl')).map(([h, t]) => `<li><a href="${h}">${esc(t)} ${icon.chevron}</a></li>`).join('')}</ul>
</div></section>
${ctaBand()}`;
  return { path: '/specjalizacje', title: 'Specjalizacje', description: 'Obszary praktyki MWG Legal: prawo korporacyjne, podatkowe, nieruchomości, prawo pracy, spory sądowe i stała obsługa firm. Sektory, dla których pracujemy.', body };
}

function practice(p) {
  const sectors = SECTORS.filter((s) => s.practices.includes(p.slug));
  const insights = p.insights.map((k) => IN[k]).filter(Boolean);
  const body = `${pageHero({ eyebrow: 'Obszar praktyki', title: p.name, lead: p.lead, img: p.img, trail: [['/', 'Strona główna'], ['/specjalizacje', 'Specjalizacje'], [`/specjalizacje/${p.slug}`, p.short]] })}
<section class="section"><div class="wrap layout">
<div class="prose">
<h2>Jak pomagamy</h2>
${p.intro.map((t) => `<p>${esc(t)}</p>`).join('')}
<h3 style="margin-top:2rem">Zakres spraw</h3>
<ul class="ticks">${p.help.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
<h3>Dla kogo</h3>
<ul class="ticks">${p.who.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
${sectors.length ? `<h3>Sektory</h3><ul class="tags">${sectors.map((s) => `<li><a href="/sektory/${s.slug}">${esc(s.name)}</a></li>`).join('')}</ul>` : ''}
</div>
<aside>
<div class="aside-box"><h3>Kluczowe kontakty</h3>${contactCards(p.contacts)}</div>
<div class="aside-box aside-box--navy on-dark"><h3>Masz pytanie?</h3><p>Opisz sprawę w formularzu. Odpowiemy, jak możemy pomóc i jak wyglądałaby współpraca.</p>${arrowLink('/kontakt', 'Formularz kontaktowy')}</div>
</aside>
</div></section>
${insights.length ? `<section class="section section--soft"><div class="wrap"><div class="section__head"><h2>Publikacje</h2>${arrowLink('/publikacje', 'Wszystkie publikacje')}</div><div class="cards">${insights.map((a) => insightCard(a)).join('')}</div></div></section>` : ''}
<section class="section"><div class="wrap"><div class="section__head"><h2>Powiązane specjalizacje</h2></div>
<div class="cards">${p.related.map((k) => P[k]).map((r) => card({ href: `/specjalizacje/${r.slug}`, img: r.img, title: r.name, text: r.teaser, link: 'Zobacz' })).join('')}</div></div></section>
${ctaBand()}`;
  return {
    path: `/specjalizacje/${p.slug}`, title: p.name, description: p.lead, body, keywords: p.keywords + ' ' + p.help.join(' '),
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Service', name: p.name, description: p.lead, provider: { '@type': 'LegalService', name: SITE.fullName, url: SITE.url + '/' }, areaServed: 'PL' }],
  };
}

function sector(s) {
  const people = PEOPLE.filter((p) => p.sectors.includes(s.slug)).map((p) => p.slug);
  const body = `${pageHero({ eyebrow: 'Sektor', title: s.name, lead: s.lead, img: s.img, trail: [['/', 'Strona główna'], ['/specjalizacje', 'Specjalizacje'], [`/sektory/${s.slug}`, s.name]] })}
<section class="section"><div class="wrap layout">
<div class="prose">
<h2>Typowe sprawy</h2>
<ul class="ticks ticks--single">${s.matters.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
<h3>Obszary praktyki</h3>
<ul class="tags">${s.practices.map((k) => P[k]).map((p) => `<li><a href="/specjalizacje/${p.slug}">${esc(p.name)}</a></li>`).join('')}</ul>
</div>
<aside>
${people.length ? `<div class="aside-box"><h3>Kluczowe kontakty</h3>${contactCards(people)}</div>` : ''}
<div class="aside-box aside-box--navy on-dark"><h3>Masz pytanie?</h3><p>Opisz sprawę w formularzu. Odpowiemy, jak możemy pomóc.</p>${arrowLink('/kontakt', 'Formularz kontaktowy')}</div>
</aside>
</div></section>
<section class="section section--soft"><div class="wrap"><div class="section__head"><h2>Inne sektory</h2></div>
<div class="cards">${SECTORS.filter((x) => x.slug !== s.slug).slice(0, 3).map((x) => card({ href: `/sektory/${x.slug}`, img: x.img, pre: 'Sektor', title: x.name, text: x.teaser, link: 'Zobacz' })).join('')}</div></div></section>
${ctaBand()}`;
  return { path: `/sektory/${s.slug}`, title: s.name, description: s.lead, body, keywords: s.matters.join(' ') };
}

/* ---------- People ---------- */
function people() {
  const sorted = [...PEOPLE].sort((a, b) => a.sortName.localeCompare(b.sortName, 'pl'));
  const body = `${pageHero({ eyebrow: 'Zespół', title: 'Nasi prawnicy', lead: 'Sprawy klientów prowadzą bezpośrednio wspólnicy kancelarii. Wyszukaj prawnika według nazwiska, specjalizacji lub biura.', img: 'lublin', trail: [['/', 'Strona główna'], ['/zespol', 'Zespół']] })}
<section class="section" style="padding-top:0"><div class="wrap">
<form class="filters" data-people-filter onsubmit="return false">
<div class="field"><label for="f-name">Imię i nazwisko</label><input id="f-name" type="search" placeholder="Wpisz nazwisko" autocomplete="off"></div>
<div class="field"><label for="f-practice">Specjalizacja</label><select id="f-practice"><option value="">Wszystkie</option>${PRACTICES.map((p) => `<option value="${p.slug}">${esc(p.short)}</option>`).join('')}</select></div>
<div class="field"><label for="f-office">Biuro</label><select id="f-office"><option value="">Wszystkie</option>${OFFICES.map((o) => `<option>${esc(o.city)}</option>`).join('')}</select></div>
</form>
<div class="people">
${sorted.map((p) => `<a class="person" href="/zespol/${p.slug}" data-name="${esc(p.name.toLowerCase())}" data-practices="${p.practices.join(' ')}" data-offices="${esc(p.offices.join('|'))}">
<div class="person__photo">${photo(p, true)}</div>
<div class="person__body"><h2 class="person__name">${esc(p.name)}</h2><p class="person__role">${esc(p.role)}</p><p class="person__loc">${esc(p.offices.join(' · '))}</p></div>
</a>`).join('')}
</div>
<p class="people-empty" hidden>Brak osób spełniających kryteria.</p>
</div></section>
${ctaBand()}`;
  return { path: '/zespol', title: 'Zespół', description: 'Prawnicy MWG Legal: adwokaci dr Maciej Muzyka i Rafał Goździewski. Biura w Lublinie i w Warszawie.', body };
}

function person(p) {
  const insights = INSIGHTS.filter((a) => a.author === p.slug).slice(0, 3);
  const body = `<section class="page-hero">
${crumbs([['/', 'Strona główna'], ['/zespol', 'Zespół'], [`/zespol/${p.slug}`, p.name]])}
<div class="wrap profile">
<div class="profile__photo">${photo(p)}</div>
<div class="profile__text">
<p class="eyebrow">${esc(p.offices.join(' · '))}</p>
<h1>${esc(p.name)}</h1>
<p class="profile__role">${esc(p.role)}</p>
<ul class="profile__contact">
${p.email ? `<li><a href="mailto:${p.email}">${esc(p.email)}</a></li>` : ''}
${p.phone ? `<li><a href="tel:${tel(p.phone)}">${esc(p.phone)}</a></li>` : ''}
${!p.email && !p.phone ? `<li><a href="/kontakt">Formularz kontaktowy</a></li>` : ''}
${p.links.map(([t, h]) => `<li><a href="${h}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}
</ul>
</div>
</div>
</section>
<section class="section"><div class="wrap layout">
<div class="prose">
<h2>O mnie</h2>
${p.bio.map((t) => `<p>${esc(t)}</p>`).join('')}
<h3 style="margin-top:2rem">Specjalizacje</h3>
<ul class="tags">${p.practices.map((k) => P[k]).map((x) => `<li><a href="/specjalizacje/${x.slug}">${esc(x.name)}</a></li>`).join('')}</ul>
${p.sectors.length ? `<h3 style="margin-top:2rem">Sektory</h3><ul class="tags">${p.sectors.map((k) => S[k]).map((x) => `<li><a href="/sektory/${x.slug}">${esc(x.name)}</a></li>`).join('')}</ul>` : ''}
</div>
<aside>
<div class="aside-box"><h3>W skrócie</h3>${p.facts.map(([k, v]) => `<p style="margin-bottom:.9rem"><strong style="display:block;font-family:var(--display);font-weight:500;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase">${esc(k)}</strong>${esc(v)}</p>`).join('')}</div>
</aside>
</div></section>
${insights.length ? `<section class="section section--soft"><div class="wrap"><div class="section__head"><h2>Publikacje</h2>${arrowLink('/publikacje', 'Wszystkie publikacje')}</div><div class="cards">${insights.map((a) => insightCard(a)).join('')}</div></div></section>` : ''}
${ctaBand()}`;
  return {
    path: `/zespol/${p.slug}`, title: `${p.name} – ${p.role}`, description: `${p.name}, ${p.role.toLowerCase()} w MWG Legal. ${p.practices.map((k) => P[k].short).join(', ')}.`, body,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Person', name: p.name.replace(/^dr /, ''), honorificPrefix: p.name.startsWith('dr ') ? 'dr' : undefined, jobTitle: p.role, worksFor: { '@type': 'LegalService', name: SITE.fullName }, ...(p.email ? { email: p.email } : {}) }],
    keywords: p.bio.join(' '),
  };
}

/* ---------- Locations, about, publications, contact ---------- */
function locations() {
  const body = `${pageHero({ eyebrow: 'Lokalizacje', title: 'Lublin i Warszawa', lead: 'Przyjmujemy klientów w dwóch biurach. Spotkania prowadzimy także online, dlatego obsługujemy przedsiębiorców z całej Polski.', img: 'warsaw', trail: [['/', 'Strona główna'], ['/lokalizacje', 'Lokalizacje']] })}
<section class="section"><div class="wrap">
${OFFICES.map((o) => `<article class="office" id="${o.slug}">
<div class="office__media">${ill(o.img, o.city === 'Lublin' ? 'Szkic Bramy Krakowskiej i kamienic Starego Miasta w Lublinie' : 'Szkic Pałacu Kultury i Nauki oraz wieżowców w Warszawie')}</div>
<div class="office__text"><h2>${esc(o.city)}</h2><p>${esc(o.text)}</p>
<dl><dt>Adres</dt><dd>${esc(o.street)}<br>${esc(o.postal)}</dd><dt>Telefon</dt><dd><a href="tel:${tel(SITE.phone)}">${esc(SITE.phone)}</a></dd><dt>E-mail</dt><dd><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></dd></dl>
${arrowLink(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.street + ', ' + o.postal)}`, 'Pokaż na mapie', { ext: true })}
</div>
</article>`).join('')}
</div></section>
${ctaBand('Umów spotkanie', 'Napisz, którego biura dotyczy spotkanie i jaki termin Ci odpowiada. Możemy też porozmawiać online.')}`;
  return { path: '/lokalizacje', title: 'Lokalizacje', description: 'Biura MWG Legal w Lublinie i w Warszawie. Adresy, telefon i e-mail. Spotkania także online.', body };
}

function about() {
  const body = `${pageHero({ eyebrow: 'O nas', title: 'Kancelaria adwokacka dla przedsiębiorców', lead: 'MWG Legal tworzą adwokaci dr Maciej Muzyka i Rafał Goździewski. Łączymy doświadczenie w prawie nieruchomości i procesie inwestycyjnym z obsługą spółek, podatkami i prawem pracy.', img: 'court', trail: [['/', 'Strona główna'], ['/o-nas', 'O nas']] })}
<section class="section"><div class="wrap layout">
<div class="prose">
<h2>Kim jesteśmy</h2>
<p>Doradzamy firmom, ich właścicielom i inwestorom. Większość spraw przedsiębiorcy dotyczy kilku dziedzin naraz: zakup hali to umowa, podatek i często spółka celowa; zmiana wspólnika to dokumenty korporacyjne, rozliczenia podatkowe i pracownicy. Dlatego w jednym zespole łączymy prawo korporacyjne, podatkowe, prawo nieruchomości i prawo pracy.</p>
<p>Biura prowadzimy w Lublinie i w Warszawie, a spotkania organizujemy także online.</p>
<h2>Jak pracujemy</h2>
</div>
<aside><div class="aside-box"><h3>Wspólnicy</h3>${contactCards(PEOPLE.map((p) => p.slug))}</div></aside>
</div>
<div class="wrap"><ol class="steps">
<li><h3>Rozmowa o sprawie</h3><p>Poznajemy cel klienta, dokumenty i terminy, które już biegną.</p></li>
<li><h3>Propozycja</h3><p>Opisujemy, co trzeba zrobić, w jakim czasie i na jakich zasadach.</p></li>
<li><h3>Prowadzenie sprawy</h3><p>Sprawę prowadzi wspólnik, który odpowiada za nią od początku do końca.</p></li>
<li><h3>Informacja na bieżąco</h3><p>Klient wie, na jakim etapie jest sprawa i jakie decyzje go czekają.</p></li>
</ol></div>
</section>
<section class="section section--soft"><div class="wrap">
<h2>Zasady</h2>
<div class="values">
<div><h3>Konkret</h3><p>Odpowiadamy na pytanie, które zadał klient, i mówimy, co z tego wynika dla jego firmy.</p></div>
<div><h3>Odpowiedzialność</h3><p>Za każdą sprawę odpowiada imiennie wspólnik kancelarii.</p></div>
<div><h3>Tajemnica</h3><p>Obowiązuje nas tajemnica adwokacka. Nie ujawniamy klientów ani szczegółów ich spraw.</p></div>
<div><h3>Przejrzystość</h3><p>Zakres i warunki współpracy ustalamy, zanim zaczniemy pracę.</p></div>
</div>
</div></section>
<section class="section"><div class="wrap"><div class="section__head"><h2>Specjalizacje</h2>${arrowLink('/specjalizacje', 'Wszystkie specjalizacje')}</div>
<div class="cards">${PRACTICES.slice(0, 3).map((p) => card({ href: `/specjalizacje/${p.slug}`, img: p.img, title: p.name, text: p.teaser, link: 'Zobacz' })).join('')}</div></div></section>
${ctaBand()}`;
  return { path: '/o-nas', title: 'O nas', description: 'MWG Legal – Muzyka Goździewski Wspólnicy: kancelaria adwokacka dla przedsiębiorców w Lublinie i Warszawie. Kim jesteśmy i jak pracujemy.', body };
}

function insights() {
  const cats = [...new Set(INSIGHTS.map((a) => a.cat))];
  const body = `${pageHero({ eyebrow: 'Publikacje', title: 'Wiedza dla przedsiębiorców', lead: 'Artykuły naszych prawników o prawie nieruchomości, podatkach, sporach i spółkach. Publikujemy je w serwisach autorów.', img: 'pen', trail: [['/', 'Strona główna'], ['/publikacje', 'Publikacje']] })}
<section class="section"><div class="wrap">
<div class="chips" role="group" aria-label="Filtruj według tematu" data-chips>
<button class="chip" type="button" aria-pressed="true" data-cat="">Wszystkie</button>
${cats.map((c) => `<button class="chip" type="button" aria-pressed="false" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
</div>
<div class="cards" data-insights>
${INSIGHTS.map((a) => insightCard(a).replace('<article class="card">', `<article class="card" data-cat="${esc(a.cat)}">`)).join('')}
</div>
</div></section>
${ctaBand()}`;
  return { path: '/publikacje', title: 'Publikacje', description: 'Artykuły prawników MWG Legal: nieruchomości i proces inwestycyjny, podatki, spory, spółki, rolnictwo i OZE.', body, keywords: INSIGHTS.map((a) => a.title).join(' ') };
}

function contact() {
  const body = `${pageHero({ eyebrow: 'Kontakt', title: 'Skontaktuj się z nami', lead: 'Opisz krótko sprawę. Odpowiemy, jak możemy pomóc i jak wyglądałaby współpraca.', trail: [['/', 'Strona główna'], ['/kontakt', 'Kontakt']], img: 'pen' })}
<section class="section"><div class="wrap layout">
<div>
<form class="form" data-contact-form data-to="${esc(SITE.email)}" novalidate>
<div class="field"><label for="c-name">Imię i nazwisko *</label><input id="c-name" name="name" required autocomplete="name"></div>
<div class="field"><label for="c-company">Firma</label><input id="c-company" name="company" autocomplete="organization"></div>
<div class="field"><label for="c-email">E-mail *</label><input id="c-email" name="email" type="email" required autocomplete="email"></div>
<div class="field"><label for="c-phone">Telefon</label><input id="c-phone" name="phone" type="tel" autocomplete="tel"></div>
<div class="field full"><label for="c-area">Dziedzina</label><select id="c-area" name="area"><option value="">Wybierz (opcjonalnie)</option>${PRACTICES.map((p) => `<option>${esc(p.short)}</option>`).join('')}<option>Inna</option></select></div>
<div class="field full"><label for="c-msg">Czego dotyczy sprawa? *</label><textarea id="c-msg" name="message" required></textarea></div>
<label class="check full"><input type="checkbox" name="consent" required> <span>Zapoznałem(-am) się z <a href="/polityka-prywatnosci">polityką prywatności</a>. Dane podaję, aby kancelaria mogła odpowiedzieć na moją wiadomość. *</span></label>
<p class="form__note full">Nie przesyłaj w formularzu dokumentów ani danych osób trzecich. Poprosimy o nie, jeśli będą potrzebne.</p>
<div class="full" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap"><button class="btn" type="submit">Wyślij wiadomość</button><p class="form__status" role="status" aria-live="polite"></p></div>
</form>
</div>
<aside>
<div class="aside-box"><h3>Dane kontaktowe</h3>
<p><strong>E-mail</strong><br><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></p>
<p><strong>Telefon</strong><br><a href="tel:${tel(SITE.phone)}">${esc(SITE.phone)}</a></p>
${OFFICES.map((o) => `<p><strong>${esc(o.city)}</strong><br>${esc(o.street)}, ${esc(o.postal)}</p>`).join('')}
</div>
<div class="aside-box"><h3>Wspólnicy</h3>${contactCards(PEOPLE.map((p) => p.slug))}</div>
</aside>
</div></section>`;
  return { path: '/kontakt', title: 'Kontakt', description: 'Kontakt z MWG Legal: formularz, e-mail, telefon, biura w Lublinie i w Warszawie.', body };
}

/* ---------- Legal pages (drafts: data controller and form provider to be confirmed) ---------- */
function privacy() {
  const body = `${pageHero({ eyebrow: 'Informacje prawne', title: 'Polityka prywatności', trail: [['/', 'Strona główna'], ['/polityka-prywatnosci', 'Polityka prywatności']] }).replace('class="page-hero"', 'class="page-hero page-hero--plain"')}
<section class="section"><div class="wrap prose">
<p class="notice">Wersja robocza. Dane administratora i sposób obsługi formularza trzeba uzupełnić po wyborze formy prawnej kancelarii.</p>
<h2>Administrator danych</h2>
<p>Administratorem danych osobowych przekazanych przez formularz kontaktowy, e-mail lub telefon jest [nazwa i adres administratora – do uzupełnienia]. Kontakt w sprawach danych: <a href="mailto:${SITE.email}">${esc(SITE.email)}</a>.</p>
<h2>Cel i podstawa przetwarzania</h2>
<p>Dane przetwarzamy, aby odpowiedzieć na wiadomość i przygotować propozycję współpracy (art. 6 ust. 1 lit. b i f RODO), a po nawiązaniu współpracy także w celu wykonania umowy i obowiązków wynikających z przepisów.</p>
<h2>Okres przechowywania</h2>
<p>Korespondencję, która nie doprowadziła do współpracy, przechowujemy nie dłużej niż [okres – do uzupełnienia].</p>
<h2>Prawa osoby, której dane dotyczą</h2>
<p>Masz prawo dostępu do danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, prawo sprzeciwu oraz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p>
<h2>Pliki cookies</h2>
<p>Strona nie używa plików cookies analitycznych ani reklamowych i nie ładuje zewnętrznych skryptów ani czcionek.</p>
</div></section>`;
  return { path: '/polityka-prywatnosci', title: 'Polityka prywatności', description: 'Polityka prywatności strony MWG Legal.', body, noindex: true };
}

function legalNote() {
  const body = `${pageHero({ eyebrow: 'Informacje prawne', title: 'Nota prawna', trail: [['/', 'Strona główna'], ['/nota-prawna', 'Nota prawna']] }).replace('class="page-hero"', 'class="page-hero page-hero--plain"')}
<section class="section"><div class="wrap prose">
<p class="notice">Wersja robocza do uzupełnienia o formę prawną i dane rejestrowe kancelarii.</p>
<p>Strona ma charakter informacyjny. Treści na stronie i w publikacjach nie są poradą prawną w konkretnej sprawie.</p>
<p>Adwokaci wykonujący zawód w MWG Legal są członkami samorządu adwokackiego: dr Maciej Muzyka – Izba Adwokacka w Lublinie, Rafał Goździewski – Izba Adwokacka w Warszawie. Obowiązują ich przepisy ustawy Prawo o adwokaturze oraz Zbiór Zasad Etyki Adwokackiej i Godności Zawodu.</p>
<p>[Forma prawna, siedziba, numery rejestrowe – do uzupełnienia.]</p>
</div></section>`;
  return { path: '/nota-prawna', title: 'Nota prawna', description: 'Nota prawna strony MWG Legal.', body, noindex: true };
}

function sitemapPage(all) {
  const body = `${pageHero({ eyebrow: 'Mapa strony', title: 'Wszystkie strony', trail: [['/', 'Strona główna'], ['/mapa-strony', 'Mapa strony']] }).replace('class="page-hero"', 'class="page-hero page-hero--plain"')}
<section class="section"><div class="wrap"><ul class="az">${all.filter((p) => p.path !== '/mapa-strony' && !p.noindex).map((p) => `<li><a href="${p.path}">${esc(p.path === '/' ? 'Strona główna' : p.title)} ${icon.chevron}</a></li>`).join('')}</ul></div></section>`;
  return { path: '/mapa-strony', title: 'Mapa strony', description: 'Mapa strony MWG Legal.', body };
}

function notFound() {
  const body = `<section class="not-found"><div class="wrap">${ill('court', '', { eager: true })}<p class="eyebrow">Błąd 404</p><h1>Nie znaleźliśmy tej strony</h1><p>Adres mógł się zmienić. Skorzystaj z wyszukiwarki albo przejdź na stronę główną.</p>${arrowLink('/', 'Strona główna')}</div></section>`;
  return { path: '/404', title: 'Nie znaleziono strony', description: 'Nie znaleziono strony.', body, noindex: true };
}

export function allPages() {
  const pages = [
    home(), about(), expertise(), ...PRACTICES.map(practice), ...SECTORS.map(sector),
    people(), ...PEOPLE.map(person), locations(), insights(), contact(), privacy(), legalNote(),
  ];
  pages.push(sitemapPage(pages));
  return { pages, notFound: notFound() };
}

export { logo };
