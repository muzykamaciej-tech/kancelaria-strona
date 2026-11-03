/* offers.jsx — strony ofert z cenami pakietów (/oferta/<slug>): nagłówek, trzy karty cenowe, FAQ, formularz
   z wybranym pakietem w temacie zgłoszenia. Dane i ceny: offers-data.jsx.
   Grafiki Higgsfield: assets/foto-<photo>-800|1600.webp. Loaded after service-pages.jsx, before app.jsx. */

const { Icon: OIcon, FAQAccordion: OFAQAccordion } = window;

/* formularz z wybraną usługą i pakietem: strona oferty i strona usługi z pakietami */
function offerFormPreset(offer, picked, setPicked) {
  const service = window.getService(offer.service);
  return {
    service: service ? service.title : offer.metaTitle,
    packages: offer.packages.map((p) => p.name),
    pakiet: picked,
    onPakiet: setPicked,
    situation: offer.form.situation,
    placeholder: offer.form.placeholder,
  };
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
          <span className="price-card-net">{window.formatPln(pkg.net)}</span> <span className="price-card-net-l">netto</span>
        </p>
        <p className="price-card-gross">{window.formatPln(window.grossPrice(pkg.net))} brutto</p>
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
  const offer = window.getOffer(slug);
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
        preset={offerFormPreset(offer, picked, setPicked)}
      />
      <window.ServiceTrustStrip />
    </main>
  );
}

Object.assign(window, { OfferPage, PriceCard, offerFormPreset });
