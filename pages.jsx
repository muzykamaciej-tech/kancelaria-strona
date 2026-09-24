/* pages.jsx — page-level routes for v2 site. Loaded after sections.jsx. */

const { Icon, ServiceTile, Hero, AboutBlock, Testimonials, ContactBlock, CredibilityStrip } = window;
const { useState, useEffect, useMemo } = React;

/* ============================================================
   HomePage
   ============================================================ */
function HomePage({ setRoute, tweaks }) {
  const featured = window.FEATURED_IDS.map((id) => window.SERVICES.find((s) => s.id === id));
  const rest = window.SERVICES.filter((s) => !window.FEATURED_IDS.includes(s.id));

  return (
    <main data-screen-label="01 Home">
      <Hero setRoute={setRoute} variant={tweaks.heroVariant} />
      <CredibilityStrip />

      {/* Services — featured 4 + rest */}
      <section className="section-py" id="uslugi-home">
        <div className="wrap">
          <div className="services-head">
            <div>
              <span className="eyebrow">Usługi prawne</span>
              <h2 className="display mt-4" style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 4.5rem)' }}>
                11 obszarów,<br />
                <span className="italic" style={{ color: 'var(--text-body)' }}>w których pomagam.</span>
              </h2>
            </div>
            <div className="services-head-side">
              <p className="lead">
                Każda usługa to konkretny zakres prac, jasna procedura współpracy i wycena indywidualna ustalana przed rozpoczęciem.
              </p>
              <button className="btn-link mt-4" onClick={() => setRoute('uslugi')}>
                Zobacz pełną listę <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </div>

          <div className="services-featured mt-12">
            {featured.map((s) => (
              <ServiceTile key={s.id} service={s} onOpen={() => setRoute('usluga', s.id)} large />
            ))}
          </div>

          <div className="services-rest mt-6">
            {rest.map((s) => (
              <button
                key={s.id}
                className="service-row"
                onClick={() => setRoute('usluga', s.id)}
              >
                <span className="service-row-num">{s.n}</span>
                <span className="service-row-icon"><Icon name={s.icon} size={18} /></span>
                <span className="service-row-title">{s.title}</span>
                <span className="service-row-desc">{s.short}</span>
                <span className="service-row-arrow"><Icon name="arrow-right" size={16} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AboutBlock />

      <Testimonials />

      <BlogTeaser setRoute={setRoute} />

      <FAQTeaser setRoute={setRoute} />

      <ContactBlock />
    </main>
  );
}

/* ============================================================
   Uslugi index page
   ============================================================ */
function UslugiPage({ setRoute }) {
  return (
    <main data-screen-label="02 Uslugi index">
      <section className="bg-light" style={{ paddingBlock: '3rem 5rem' }}>
        <div className="wrap">
          <button className="btn-link" onClick={() => setRoute('landing')}>
            <Icon name="arrow-left" size={16} /> Strona główna
          </button>
          <div className="mt-8" style={{ maxWidth: '46rem' }}>
            <span className="eyebrow">Usługi prawne · pełna lista</span>
            <h1 className="display mt-4">
              Jedenaście<br />
              <span className="italic">obszarów</span><br />
              <span className="accent">praktyki.</span>
            </h1>
            <p className="lead mt-6">
              Każda usługa to oddzielny zakres prac, jasna procedura i indywidualna wycena. Wybierz interesujący Cię obszar, żeby zobaczyć szczegóły — albo napisz, jeśli nie wiesz, do której kategorii pasuje Twoja sprawa.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap">
          <div className="services-grid">
            {window.SERVICES.map((s) => (
              <ServiceTile key={s.id} service={s} onOpen={() => setRoute('usluga', s.id)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-dark relative overflow-hidden">
        <div className="orb" style={{ width: 500, height: 500, top: '20%', left: '-10%', opacity: 'calc(0.2 * var(--ambient-on))' }} />
        <div className="wrap relative text-center" style={{ zIndex: 2, textAlign: 'center', maxWidth: '46rem' }}>
          <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Nie wiesz, którą wybrać?</span>
          <h2 className="display mt-4" style={{ color: '#fff', fontSize: 'clamp(2rem, 1rem + 3vw, 3.5rem)' }}>
            Napisz<br /><span style={{ color: 'var(--brand-primary-light)' }}>krótko o sprawie.</span>
          </h2>
          <p className="lead mt-6" style={{ color: 'var(--text-on-dark-2)' }}>
            Wystarczy kilka zdań mailem — odpiszę z propozycją usługi, wyceną i terminem. Bez konsultacji wstępnych.
          </p>
          <button className="btn btn-on-dark mt-8" onClick={() => setRoute('kontakt')}>
            Skontaktuj się <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   Service detail page
   ============================================================ */
function ServiceDetailPage({ serviceId, setRoute }) {
  const service = window.SERVICES.find((s) => s.id === serviceId) || window.SERVICES[0];

  return (
    <main data-screen-label={`03 Usluga — ${service.title}`}>
      {/* Hero */}
      <section className="bg-light" style={{ paddingBlock: '3rem 4rem', borderBottom: '1px solid var(--slate-100)' }}>
        <div className="wrap">
          <nav className="breadcrumb">
            <button onClick={() => setRoute('landing')}>Start</button>
            <Icon name="chevron-right" size={14} />
            <button onClick={() => setRoute('uslugi')}>Usługi prawne</button>
            <Icon name="chevron-right" size={14} />
            <span>{service.title}</span>
          </nav>

          <div className="service-detail-head mt-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="icon-tile icon-tile--lg" style={{ width: 56, height: 56 }}>
                  <Icon name={service.icon} size={26} />
                </span>
                <span className="eyebrow">Usługa {service.n}</span>
              </div>
              <h1 className="display">
                {service.title}.
              </h1>
              <p className="lead mt-6" style={{ maxWidth: '38rem' }}>{service.teaser}</p>
              <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => setRoute('kontakt', null, service.title)}>
                  Zamów wycenę <Icon name="arrow-right" size={16} />
                </button>
                <button className="btn btn-secondary" onClick={() => setRoute('uslugi')}>
                  Wszystkie usługi
                </button>
              </div>
            </div>

            <aside className="service-detail-aside">
              <div className="aside-row">
                <span className="eyebrow">Komu pomagam</span>
                <ul className="aside-audience mt-3">
                  {service.audience.map((a, i) => (
                    <li key={i}>
                      <Icon name="check" size={16} style={{ color: 'var(--brand-primary)' }} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aside-row">
                <span className="eyebrow">Wycena</span>
                <p className="font-bold mt-2" style={{ color: 'var(--text-main)', fontSize: '1.125rem' }}>Indywidualnie</p>
                <p className="small mt-1">Wycenę otrzymujesz mailem przed rozpoczęciem pracy.</p>
              </div>
              <div className="aside-row">
                <span className="eyebrow">Forma kontaktu</span>
                <p className="font-bold mt-2" style={{ color: 'var(--text-main)', fontSize: '1.125rem' }}>Mailowo · zdalnie</p>
                <p className="small mt-1">Bez konsultacji wstępnych telefonicznych.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Na czym polega */}
      <section className="section-py">
        <div className="wrap">
          <div className="service-section-grid">
            <div className="service-section-side">
              <span className="kicker-num kicker-num--ghost">1</span>
              <span className="eyebrow mt-4" style={{ display: 'inline-flex' }}>Na czym polega</span>
            </div>
            <div className="service-section-body">
              <h2 className="h2" style={{ fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)' }}>{service.intro.split('.').slice(0, 1)[0]}.</h2>
              <p className="lead mt-6">{service.intro}</p>
              <p className="lead mt-4">{service.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Co dostajesz */}
      <section className="section-py bg-light">
        <div className="wrap">
          <div className="service-section-grid">
            <div className="service-section-side">
              <span className="kicker-num kicker-num--ghost">2</span>
              <span className="eyebrow mt-4" style={{ display: 'inline-flex' }}>Co dostajesz</span>
            </div>
            <div className="service-section-body">
              <h2 className="h2" style={{ fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)' }}>
                Konkretny zakres prac.
              </h2>
              <ul className="deliverables mt-8">
                {service.deliverables.map((d, i) => (
                  <li key={i}>
                    <span className="deliverable-num">{String(i + 1)}</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jak działam */}
      <section className="section-py">
        <div className="wrap">
          <div className="service-section-grid">
            <div className="service-section-side">
              <span className="kicker-num kicker-num--ghost">3</span>
              <span className="eyebrow mt-4" style={{ display: 'inline-flex' }}>Jak działam</span>
            </div>
            <div className="service-section-body">
              <h2 className="h2" style={{ fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)' }}>
                Proces w {service.process.length} krokach.
              </h2>
              <ol className="process-list mt-8">
                {service.process.map((p, i) => (
                  <li key={i}>
                    <div className="process-list-num">{String(i + 1)}</div>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-main)', fontSize: '1.125rem' }}>{p.t}</div>
                      <p className="body mt-2">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-light">
        <div className="wrap">
          <div className="service-section-grid">
            <div className="service-section-side">
              <span className="kicker-num kicker-num--ghost">4</span>
              <span className="eyebrow mt-4" style={{ display: 'inline-flex' }}>FAQ</span>
            </div>
            <div className="service-section-body">
              <h2 className="h2" style={{ fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)' }}>
                Najczęściej zadawane pytania.
              </h2>
              <FAQAccordion items={service.faq} startOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {service.related && service.related.length > 0 && (
        <section className="section-py">
          <div className="wrap">
            <span className="eyebrow">Powiązane usługi</span>
            <h2 className="h2 mt-4" style={{ fontSize: 'clamp(1.75rem, 1rem + 2.5vw, 2.75rem)' }}>
              Może to też Cię zainteresuje?
            </h2>
            <div className="services-related mt-8">
              {service.related.map((rid) => {
                const r = window.SERVICES.find((s) => s.id === rid);
                if (!r) return null;
                return <ServiceTile key={r.id} service={r} onOpen={() => setRoute('usluga', r.id)} />;
              })}
            </div>
          </div>
        </section>
      )}

      <ContactBlock heading={`Zamów: ${service.title}`} source={service.title} />
    </main>
  );
}

/* Real lead form (Formspree) + trust strip — same band as service pages.
   Resolved at render time: CaseFormBand lives in service-pages.jsx, loaded later. */
function LeadFormBand() {
  const Band = window.CaseFormBand, Strip = window.ServiceTrustStrip;
  if (!Band) return null;
  return (<React.Fragment><Band />{Strip && <Strip />}</React.Fragment>);
}

/* ============================================================
   Blog index + post
   ============================================================ */
function BlogPage({ setRoute }) {
  return (
    <main data-screen-label="04 Blog">
      <section className="bg-light" style={{ paddingBlock: '3rem 5rem' }}>
        <div className="wrap">
          <button className="btn-link" onClick={() => setRoute('landing')}>
            <Icon name="arrow-left" size={16} /> Strona główna
          </button>
          <div className="mt-8" style={{ maxWidth: '46rem' }}>
            <span className="eyebrow">Skarbnica wiedzy · prawo nieruchomości</span>
            <h1 className="display mt-4">
              Skarbnica<br />
              <span className="italic" style={{ color: 'var(--text-body)' }}>wiedzy.</span>
            </h1>
            <p className="lead mt-6">
              Krótkie teksty o tym, co zmienia się w prawie nieruchomości i co ma znaczenie dla osób, które kupują, sprzedają lub wynajmują. Bez prawniczego żargonu — z konkretami, które można zastosować w praktyce.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap">
          <ul className="blog-list">
            {window.BLOG.map((post, i) => (
              <li key={post.slug} className="blog-card-wrap">
                <button className="blog-card" onClick={() => setRoute('blogpost', post.slug)}>
                  <div className="blog-card-aside">
                    <span className="kicker-num kicker-num--ghost">{String(i + 1)}</span>
                    <span className="tag tag-info mt-4">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} czytania</span>
                    </div>
                    <h3 className="blog-card-title mt-3">{post.title}</h3>
                    <p className="body mt-4">{post.excerpt}</p>
                    <div className="blog-card-foot mt-6">
                      <span className="btn-link">
                        Przeczytaj <Icon name="arrow-right" size={14} />
                      </span>
                      <div className="blog-card-tags">
                        {post.tags.map((t) => (
                          <span key={t} className="chip" style={{ fontSize: '0.6875rem', padding: '0.25rem 0.625rem' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeadFormBand />
    </main>
  );
}

function BlogPostPage({ slug, setRoute }) {
  const post = window.BLOG.find((p) => p.slug === slug) || window.BLOG[0];
  const idx = window.BLOG.indexOf(post);
  const next = window.BLOG[(idx + 1) % window.BLOG.length];
  const prev = window.BLOG[(idx - 1 + window.BLOG.length) % window.BLOG.length];

  return (
    <main data-screen-label={`05 Blog post — ${post.title}`}>
      <section className="bg-light" style={{ paddingBlock: '3rem 4rem' }}>
        <div className="wrap">
          <nav className="breadcrumb">
            <button onClick={() => setRoute('landing')}>Start</button>
            <Icon name="chevron-right" size={14} />
            <button onClick={() => setRoute('blog')}>Skarbnica wiedzy</button>
            <Icon name="chevron-right" size={14} />
            <span>{post.category}</span>
          </nav>
          <div className="mt-8" style={{ maxWidth: '48rem' }}>
            <span className="eyebrow">{post.category}</span>
            <h1 className="display mt-4" style={{ lineHeight: 1.02 }}>
              {post.title}
            </h1>
            <div className="blog-post-meta mt-6">
              <div className="flex items-center gap-3">
                <div className="author-avatar">MM</div>
                <div>
                  <div className="font-bold" style={{ color: 'var(--text-main)' }}>adw. dr Maciej Muzyka</div>
                  <div className="small">{post.date} · {post.readTime} czytania{post.updated ? ` · zaktualizowano ${post.updated}` : ''}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section-py">
        <div className="wrap" style={{ maxWidth: '46rem' }}>
          {post.cover && <img className="prose-cover" src={post.cover} alt="" width="1200" height="654" loading="lazy" decoding="async" />}
          <BlogBody blocks={post.body} />
        </div>
      </article>

      {(() => { const t = [post.category].concat(post.tags || []).join(' '); return (
        <React.Fragment>
          {window.KalkulatorTeaser && /przesy|słup|bezumowne|wynagrodzenie/i.test(t) && <window.KalkulatorTeaser setRoute={setRoute} />}
          {window.PlanAlertBand && /plan og|\bWZ\b|planowanie/i.test(t) && <window.PlanAlertBand />}
        </React.Fragment>); })()}
      {post.related && post.related.length > 0 && <BlogRelatedServices slugs={post.related} setRoute={setRoute} />}

      <section className="section-py bg-light">
        <div className="wrap">
          <span className="eyebrow">Czytaj dalej</span>
          <div className="grid grid-2 mt-6" style={{ gap: '1.5rem' }}>
            <button className="related-post" onClick={() => setRoute('blogpost', prev.slug)}>
              <Icon name="arrow-left" size={18} />
              <div>
                <div className="small uppercase tracking-widest font-bold">Poprzedni</div>
                <div className="font-bold mt-2" style={{ color: 'var(--text-main)' }}>{prev.title}</div>
              </div>
            </button>
            <button className="related-post related-post-next" onClick={() => setRoute('blogpost', next.slug)}>
              <div>
                <div className="small uppercase tracking-widest font-bold">Następny</div>
                <div className="font-bold mt-2" style={{ color: 'var(--text-main)' }}>{next.title}</div>
              </div>
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>
      </section>

      <LeadFormBand />
    </main>
  );
}

/* Inline **bold** → <strong> */
function blogInline(text) {
  const parts = String(text).split('**');
  if (parts.length === 1) return text;
  return parts.map((s, i) => (i % 2 === 1 ? <strong key={i}>{s}</strong> : s));
}

/* Article body from block list — see blog-data.jsx for the format */
function BlogBody({ blocks }) {
  return (
    <div className="prose prose-article">
      {(blocks || []).map((b, i) => {
        const [t, v] = b;
        if (t === 'lead') return <p key={i} className="lead">{blogInline(v)}</p>;
        if (t === 'h2') return <h2 key={i}>{blogInline(v)}</h2>;
        if (t === 'h3') return <h3 key={i}>{blogInline(v)}</h3>;
        if (t === 'ul') return <ul key={i}>{v.map((li, k) => <li key={k}>{blogInline(li)}</li>)}</ul>;
        if (t === 'ol') return <ol key={i}>{v.map((li, k) => <li key={k}>{blogInline(li)}</li>)}</ol>;
        if (t === 'quote') return <blockquote key={i}>{blogInline(v)}</blockquote>;
        if (t === 'note') return <p key={i} className="prose-note">{blogInline(v)}</p>;
        return <p key={i}>{blogInline(v)}</p>;
      })}
    </div>
  );
}

/* Services related to the article — leads readers from the text to the right service page */
function BlogRelatedServices({ slugs, setRoute }) {
  const Card = window.SvcCard;
  const items = slugs.map((s) => window.getService && window.getService(s)).filter(Boolean);
  if (!Card || items.length === 0) return null;
  return (
    <section className="section-py bg-light">
      <div className="wrap">
        <div className="section-head--center">
          <span className="eyebrow">Powiązane usługi</span>
          <h2 className="h2 mt-4">Dotyczy Cię ten temat?</h2>
        </div>
        <div className="svc-grid mt-8" style={{ justifyContent: 'center' }}>
          {items.map((s) => <Card key={s.slug} service={s} onOpen={() => setRoute('usluga', s.slug)} />)}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ page (grouped accordion)
   ============================================================ */
function FAQPage({ setRoute }) {
  return (
    <main data-screen-label="06 FAQ">
      <section className="bg-light" style={{ paddingBlock: '3rem 5rem' }}>
        <div className="wrap">
          <button className="btn-link" onClick={() => setRoute('landing')}>
            <Icon name="arrow-left" size={16} /> Strona główna
          </button>
          <div className="mt-8" style={{ maxWidth: '46rem' }}>
            <span className="eyebrow">FAQ · pytania, które usłyszysz tu pierwszy raz</span>
            <h1 className="display mt-4">
              Najczęściej<br />
              <span className="accent">zadawane pytania.</span>
            </h1>
            <p className="lead mt-6">
              Zbiór odpowiedzi na pytania, które klienci zadają mi najczęściej — pogrupowane według tematu. Jeżeli nie znajdziesz tu swojego pytania, napisz mailem.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="wrap" style={{ maxWidth: '56rem' }}>
          {window.FAQ_GROUPS.map((g, i) => (
            <div key={i} className="faq-group">
              <div className="faq-group-head">
                <span className="icon-tile" style={{ width: 48, height: 48 }}>
                  <Icon name={g.icon} size={22} />
                </span>
                <h2 className="h2" style={{ fontSize: 'clamp(1.5rem, 1rem + 1.5vw, 2.25rem)' }}>{g.title}</h2>
              </div>
              <FAQAccordion items={g.items} startOpen={i === 0 ? 0 : -1} />
            </div>
          ))}
        </div>
      </section>

      <ContactBlock heading="Nie ma tu Twojego pytania?" subheading="Napisz krótko — najpóźniej w ciągu dnia roboczego odpisuję z konkretną odpowiedzią." />
    </main>
  );
}

/* ============================================================
   Reusable FAQ accordion
   ============================================================ */
function FAQAccordion({ items, startOpen = -1 }) {
  const [open, setOpen] = useState(startOpen);
  return (
    <div className="faq-acc mt-6 flex-col gap-3">
      {items.map((f, i) => (
        <div
          key={i}
          className="faq-acc-item"
          data-open={open === i}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}>
            <span>{f.q}</span>
            <span className="faq-acc-icon" aria-hidden="true">
              <Icon name="plus" size={18} />
            </span>
          </button>
          {open === i && (
            <div className="anim-fade-up faq-acc-body" id={`faq-panel-${i}`}>{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Blog teaser (home)
   ============================================================ */
function BlogTeaser({ setRoute }) {
  return (
    <section className="section-py bg-light">
      <div className="wrap">
        <div className="services-head">
          <div>
            <span className="eyebrow">Skarbnica wiedzy</span>
            <h2 className="display mt-4">
              Z notatnika kancelarii.
            </h2>
          </div>
          <div className="services-head-side">
            <p className="lead">Krótkie teksty o tym, co zmienia się w prawie nieruchomości i co ma znaczenie dla osób, które kupują, sprzedają lub wynajmują.</p>
            <button className="btn-link mt-4" onClick={() => setRoute('blog')}>
              Zobacz wszystkie <Icon name="arrow-right" size={14} />
            </button>
          </div>
        </div>
        <div className="grid grid-3 mt-12" style={{ gap: 'var(--d-gap)' }}>
          {window.BLOG.map((post, i) => (
            <button key={post.slug} className="card card-hover blog-teaser-card" onClick={() => setRoute('blogpost', post.slug)} style={{ textAlign: 'left' }}>
              <span className="tag tag-info">{post.category}</span>
              <h3 className="font-bold mt-4" style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: 1.3 }}>{post.title}</h3>
              <div className="small mt-4 flex items-center gap-2">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} czytania</span>
              </div>
              <div className="blog-teaser-arrow">
                <Icon name="arrow-up-right" size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ teaser (home) — first group only
   ============================================================ */
function FAQTeaser({ setRoute }) {
  const group = window.FAQ_GROUPS[0];
  return (
    <section className="section-py">
      <div className="wrap">
        <div className="faq-teaser-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="display mt-4" style={{ fontSize: 'clamp(2rem, 1rem + 3vw, 3.5rem)' }}>
              Pytania,<br />
              <span className="italic" style={{ color: 'var(--text-body)' }}>na które od razu odpowiadam.</span>
            </h2>
            <p className="lead mt-6">
              Krótkie odpowiedzi na pytania, które słyszę najczęściej. Pełna lista — w sekcji FAQ.
            </p>
            <button className="btn-link mt-6" onClick={() => setRoute('faq')}>
              Wszystkie pytania <Icon name="arrow-right" size={14} />
            </button>
          </div>
          <div>
            <FAQAccordion items={group.items.slice(0, 4)} startOpen={0} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Kontakt page (standalone)
   ============================================================ */
function KontaktPage({ setRoute }) {
  return (
    <main data-screen-label="07 Kontakt">
      <section className="bg-light" style={{ paddingBlock: '3rem 2.5rem' }}>
        <div className="wrap">
          <button className="btn-link" onClick={() => setRoute('landing')}>
            <Icon name="arrow-left" size={16} /> Strona główna
          </button>
          <div className="mt-8" style={{ maxWidth: '48rem' }}>
            <span className="eyebrow">Kontakt</span>
            <h1 className="display mt-4">Napisz — odpiszę<br /><span className="italic" style={{ color: 'var(--text-body)' }}>zwykle w 24 h.</span></h1>
            <p className="lead mt-6">Kontakt prowadzę przede wszystkim mailowo, w pełni zdalnie — bez wstępnych konsultacji telefonicznych. Najprościej opisać sprawę w formularzu „Wstępna analiza sprawy”: odpiszę z bezpłatną oceną ryzyka i konkretnym kolejnym krokiem.</p>
            <div className="flex gap-3 mt-8" style={{ flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => window.spScrollToForm && window.spScrollToForm()}>
                Opisz swoją sprawę <Icon name="arrow-right" size={16} />
              </button>
              <a className="btn btn-secondary" href="mailto:maciej.muzyka@mecenasodnieruchomosci.pl">
                Napisz e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
      <LeadFormBand />
      {window.MapSection && <window.MapSection />}
    </main>
  );
}

Object.assign(window, {
  HomePage, UslugiPage, ServiceDetailPage,
  BlogPage, BlogPostPage,
  FAQPage, FAQAccordion,
  KontaktPage,
});
