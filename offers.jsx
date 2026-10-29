/* offers.jsx — strony ofert z cenami pakietów (/oferta/<slug>): nagłówek, trzy karty cenowe, FAQ, formularz
   z wybranym pakietem w temacie zgłoszenia. Wyjątek od zasady „bez cennika na stronie” (decyzja Macieja 29.10.2026).
   Grafiki Higgsfield: assets/foto-<photo>-800|1600.webp. Loaded after service-pages.jsx, before app.jsx. */

const { Icon: OIcon, FAQAccordion: OFAQAccordion } = window;

/* Ceny netto w złotych; brutto = netto + 23% VAT, liczone w jednym miejscu (karty i JSON-LD) */
const VAT_RATE = 0.23;
function grossPrice(net) { return Math.round(net * (1 + VAT_RATE) * 100) / 100; }
/* 2400 → '2 400 zł', 590.4 → '590,40 zł' (twarde spacje, żeby kwota nie łamała się między wierszami) */
function formatPln(v) {
  const [int, dec] = v.toFixed(2).split('.');
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (dec === '00' ? '' : ',' + dec) + ' zł';
}

const OFFERS = {
  'sprawdzenie-umowy-deweloperskiej': {
    service: 'sprawdzenie-umowy-deweloperskiej',
    photo: 'oferta-umowa-deweloperska',
    updated: '2026-10-29',
    metaTitle: 'Sprawdzenie umowy deweloperskiej: pakiety i ceny',
    metaDesc: 'Umowę deweloperską sprawdzę, zanim ją podpiszesz: od 480 zł netto (590,40 zł brutto) z wynikiem w 2 dni robocze, aż po negocjacje z deweloperem.',
    crumb: 'Pakiety i ceny',
    packagesHeading: 'Trzy zakresy sprawdzenia umowy deweloperskiej.',
    faqHeading: 'Zanim wybierzesz pakiet.',
    h1: ['Kupujesz mieszkanie lub dom od dewelopera?', 'Sprawdzę umowę, zanim ją podpiszesz'],
    intro: 'Umowę deweloperską pisze prawnik dewelopera i zabezpiecza w niej przede wszystkim jego interes. Zmiany najłatwiej wprowadzić przed podpisaniem – po akcie notarialnym każda poprawka wymaga zgody dewelopera. Wybierz zakres, który odpowiada Twojej sytuacji.',
    packages: [
      {
        id: 'szybkie-sprawdzenie',
        photo: 'pakiet-szybkie-sprawdzenie',
        name: 'Szybkie sprawdzenie umowy',
        net: 480,
        term: 'wynik w 2 dni robocze',
        forWhom: 'Dla osób, które mają już projekt umowy i chcą szybko wiedzieć, czy jest w nim coś groźnego.',
        scope: [
          'sprawdzam projekt umowy deweloperskiej, rezerwacyjnej albo przedwstępnej,',
          'wskazuję najważniejsze ryzyka – zapisy niekorzystne, nietypowe albo sprzeczne z przepisami,',
          'przesyłam krótkie pisemne podsumowanie z oceną, czy umowę można podpisać, czy najpierw trzeba coś zmienić.',
        ],
      },
      {
        id: 'pelna-analiza',
        photo: 'pakiet-pelna-analiza',
        name: 'Pełna analiza dokumentów',
        label: 'Najczęściej wybierany',
        net: 940,
        term: 'wynik w 5 dni roboczych',
        forWhom: 'Dla osób, które chcą mieć pewność, że sprawdzone jest wszystko – umowa, deweloper i nieruchomość.',
        includes: 'Wszystko z pakietu „Szybkie sprawdzenie umowy”, a dodatkowo:',
        scope: [
          'analiza umowy razem ze wszystkimi załącznikami (harmonogram płatności, standard wykończenia, rzuty, umowy na garaż, komórkę lub udział w drodze),',
          'porównanie umowy z prospektem informacyjnym,',
          'sprawdzenie dewelopera w KRS, Krajowym Rejestrze Zadłużonych i jego sprawozdań finansowych,',
          'sprawdzenie księgi wieczystej działki i drogi dojazdowej (własność, hipoteki, służebności, roszczenia),',
          'sprawdzenie zasad wpłat na rachunek powierniczy i warunków zwrotu pieniędzy,',
          'pisemny raport z uwagami do poszczególnych paragrafów,',
          'lista zapisów do negocjacji z gotowym brzmieniem zmian, do przekazania deweloperowi,',
          'poprawki naniesione na tekst umowy w trybie śledzenia zmian,',
          'omówienie wyników telefonicznie lub online.',
        ],
      },
      {
        id: 'premium',
        photo: 'pakiet-premium',
        name: 'Pakiet premium – negocjacje i opieka do podpisania aktu',
        net: 2400,
        term: 'pierwsze wyniki w 3 dni robocze',
        forWhom: 'Dla osób, które nie chcą same spierać się z deweloperem i oczekują, że prawnik doprowadzi umowę do bezpiecznej wersji.',
        includes: 'Wszystko z pakietu „Pełna analiza dokumentów”, a dodatkowo:',
        scope: [
          'prowadzę negocjacje z deweloperem w Twoim imieniu – wysyłam poprawki, odpowiadam na jego stanowisko i pilnuję, żeby uzgodnienia trafiły do umowy, aż do uzgodnienia ostatecznej wersji umowy,',
          'sprawdzam ostateczny projekt aktu notarialnego przed podpisaniem,',
          'sprawdzam projekt umowy przenoszącej własność, kiedy deweloper go przygotuje,',
          'realizuję zlecenie w trybie priorytetowym i możesz kontaktować się ze mną bezpośrednio przez cały czas trwania transakcji.',
        ],
      },
    ],
    faq: [
      { q: 'Jakie dokumenty trzeba przesłać?', a: 'Projekt umowy z załącznikami i prospekt informacyjny. Deweloper ma obowiązek wydać je na Twoje żądanie przed podpisaniem umowy. Resztę (księgi wieczyste, rejestry, dane dewelopera) sprawdzam sam.' },
      { q: 'Czy mogę zmienić pakiet w trakcie?', a: 'Tak. Jeśli po szybkim sprawdzeniu zdecydujesz się na pełną analizę albo pakiet premium, dopłacasz tylko różnicę w cenie.' },
      { q: 'Czy działacie zdalnie?', a: 'Tak. Dokumenty przesyłasz mailem, a wyniki omawiamy telefonicznie lub online. Obsługuję klientów z całej Polski.' },
      { q: 'Od kiedy liczy się termin?', a: 'Od otrzymania kompletu dokumentów i wpłaty wynagrodzenia. Jeśli termin podpisania umowy jest bliski, napisz o tym w zgłoszeniu.' },
    ],
    form: {
      eyebrow: 'Wybrany pakiet',
      title: ['Prześlij', 'dokumenty,', 'zaczynam.'],
      lead: 'Wybrany pakiet trafi do tematu zgłoszenia. Dołącz projekt umowy z załącznikami i prospekt informacyjny. W ciągu 24 h roboczych potwierdzę zakres i termin.',
      situation: 'Kupuję nieruchomość',
      placeholder: 'Np. Kupuję mieszkanie od dewelopera, mam projekt umowy i prospekt, termin u notariusza jest…',
    },
  },
};

function getOffer(slug) { return OFFERS[slug] || null; }
/* oferta podpięta pod usługę (link w nagłówku strony usługi) */
function offerForService(serviceSlug) {
  return Object.keys(OFFERS).find((k) => OFFERS[k].service === serviceSlug) || null;
}

function PriceCard({ pkg, onPick }) {
  const featured = !!pkg.label;
  return (
    <article className={'price-card' + (featured ? ' price-card--featured' : '')} id={'pakiet-' + pkg.id} aria-labelledby={'pakiet-' + pkg.id + '-name'}>
      {featured && <span className="price-card-label"><OIcon name="star" size={14} /> {pkg.label}</span>}
      <span className="price-card-photo" aria-hidden="true">
        <img src={`/assets/foto-${pkg.photo}-800.webp`} alt="" width="800" height="448" loading="lazy" decoding="async" />
      </span>
      <div className="price-card-body">
        <h3 className="price-card-name" id={'pakiet-' + pkg.id + '-name'}>{pkg.name}</h3>
        <p className="price-card-price">
          <span className="price-card-net">{formatPln(pkg.net)}</span> <span className="price-card-net-l">netto</span>
        </p>
        <p className="price-card-gross">{formatPln(grossPrice(pkg.net))} brutto</p>
        <p className="price-card-term"><OIcon name="clock" size={16} /> <span>{pkg.term}</span></p>
        <p className="price-card-for">{pkg.forWhom}</p>
        <ul className="price-card-scope">
          {pkg.includes && (
            <li className="price-card-includes"><OIcon name="layers" size={18} /><span>{pkg.includes}</span></li>
          )}
          {pkg.scope.map((s, i) => (
            <li key={i}><OIcon name="check" size={18} /><span>{s}</span></li>
          ))}
        </ul>
      </div>
      <a href="#formularz" className={'btn ' + (featured ? 'btn-primary' : 'btn-secondary') + ' price-card-cta'}
        onClick={(e) => { e.preventDefault(); onPick(pkg.name); }}>
        Wybieram ten pakiet <OIcon name="arrow-right" size={16} />
      </a>
    </article>
  );
}

function OfferPage({ slug }) {
  const offer = getOffer(slug);
  const service = offer && window.getService(offer.service);
  const block = offer && window.getBlockOfService(offer.service);
  /* ?pakiet=<id> w linku wysłanym klientowi zaznacza pakiet w formularzu */
  const [picked, setPicked] = React.useState(() => {
    const id = new URLSearchParams(location.search).get('pakiet');
    const p = offer && offer.packages.find((x) => x.id === id);
    return p ? p.name : '';
  });
  if (!offer || !service || !block) return <window.NotFoundPage />;

  function pick(name) {
    setPicked(name);
    if (window.gtag) window.gtag('event', 'select_item', { item_list_name: 'oferta-' + slug, item_name: name });
    window.spScrollToForm();
  }

  return (
    <main id="main-content" data-screen-label={`Oferta — ${service.title}`}>
      <section className="bg-light relative overflow-hidden" style={{ paddingBlock: '3rem 4rem', borderBottom: '1px solid var(--slate-100)' }}>
        <window.PhotoBg name={offer.photo} variant="soft" eager />
        <div className="wrap relative" style={{ zIndex: 2 }}>
          <window.Breadcrumb trail={[
            { label: 'Start', route: 'landing' },
            { label: 'Usługi', route: 'uslugi' },
            { label: block.title, route: 'blok', slug: block.id },
            { label: service.title, route: 'usluga', slug: service.slug },
            { label: offer.crumb },
          ]} />
          <div className="mt-8 section-head--center" style={{ maxWidth: '50rem', marginInline: 'auto' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="icon-tile icon-tile--lg" style={{ width: 56, height: 56 }}>
                <OIcon name={service.icon} size={26} />
              </span>
              <window.NavLink className="eyebrow" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} route="usluga" slug={service.slug}>
                {service.title}
              </window.NavLink>
            </div>
            <h1 className="display offer-h1">{offer.h1[0]}{' '}<br /><span className="accent">{offer.h1[1]}</span></h1>
            <p className="lead mt-6">{offer.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap">
          <div className="section-head--center">
            <span className="eyebrow">Pakiety i ceny</span>
            <h2 className="h2 mt-4">{offer.packagesHeading}</h2>
          </div>
          <div className="price-grid mt-8">
            {offer.packages.map((p) => <PriceCard key={p.id} pkg={p} onPick={pick} />)}
          </div>
        </div>
      </section>

      <section className="section-py bg-light">
        <div className="wrap" style={{ maxWidth: '50rem' }}>
          <div className="section-head--center">
            <span className="eyebrow">Najczęstsze pytania</span>
            <h2 className="h2 mt-4">{offer.faqHeading}</h2>
          </div>
          <OFAQAccordion items={offer.faq} startOpen={0} />
        </div>
      </section>

      <window.CaseFormBand
        eyebrow={offer.form.eyebrow}
        title={offer.form.title}
        lead={offer.form.lead}
        preset={{
          service: service.title,
          packages: offer.packages.map((p) => p.name),
          pakiet: picked,
          onPakiet: setPicked,
          situation: offer.form.situation,
          placeholder: offer.form.placeholder,
        }}
      />
      <window.ServiceTrustStrip />
    </main>
  );
}

Object.assign(window, { OFFERS, getOffer, offerForService, OfferPage, grossPrice });
