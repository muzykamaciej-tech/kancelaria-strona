/* site.js — header state, mega menu, mobile menu, search, carousel, people and publications filters, contact form. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Header: solid background after scrolling */
  var header = $('.site-header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mega menu */
  $$('.nav__link[aria-controls]').forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    var set = function (open) { btn.setAttribute('aria-expanded', String(open)); panel.classList.toggle('is-open', open); };
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(btn.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('click', function (e) { if (!panel.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  });

  /* Mobile menu */
  var toggle = $('.menu-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var open = !header.classList.contains('is-open');
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Search */
  var search = $('#search'), input = $('#q'), results = $('#search-results'), index = null;
  var norm = function (s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l'); };
  var escHtml = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var openSearch = function () {
    search.classList.add('is-open');
    setTimeout(function () { input.focus(); }, 20);
    if (!index) fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (d) {
      index = d.map(function (p) { return { p: p, t: norm(p.t), x: norm(p.d + ' ' + p.x) }; });
      run();
    });
  };
  var closeSearch = function () { search.classList.remove('is-open'); };
  var run = function () {
    if (!index) return;
    var q = norm(input.value).trim();
    if (q.length < 2) { results.innerHTML = ''; return; }
    var words = q.split(/\s+/);
    var hits = index.map(function (e) {
      var score = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (e.t.indexOf(w) > -1) score += 5; else if (e.x.indexOf(w) > -1) score += 1; else return null;
      }
      return { e: e, s: score };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).slice(0, 12);
    results.innerHTML = hits.length ? hits.map(function (h) {
      var p = h.e.p;
      return '<li><a href="' + p.u + '"><span class="k">' + escHtml(p.k) + '</span><span class="t">' + escHtml(p.t) + '</span><span class="d">' + escHtml(p.d) + '</span></a></li>';
    }).join('') : '<li class="search__empty">Brak wyników dla „' + escHtml(input.value) + '”.</li>';
  };
  $$('[data-search-open]').forEach(function (b) { b.addEventListener('click', openSearch); });
  $$('[data-search-close]').forEach(function (b) { b.addEventListener('click', closeSearch); });
  if (search) {
    search.addEventListener('click', function (e) { if (e.target === search) closeSearch(); });
    input.addEventListener('input', run);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
      if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
    });
  }

  /* Carousel */
  $$('.carousel').forEach(function (c) {
    var track = $('.carousel__track', c), slides = $$('.slide', c), dots = $$('.dot', c), i = 0;
    var go = function (n) {
      i = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-100 * i) + '%)';
      slides.forEach(function (s, k) { s.setAttribute('aria-hidden', String(k !== i)); $$('a', s).forEach(function (a) { a.tabIndex = k === i ? 0 : -1; }); });
      dots.forEach(function (d, k) { if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
    };
    $('[data-prev]', c).addEventListener('click', function () { go(i - 1); });
    $('[data-next]', c).addEventListener('click', function () { go(i + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
    var x0 = null;
    track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); x0 = null; });
    go(0);
  });

  /* People filter */
  var pf = $('[data-people-filter]');
  if (pf) {
    var name = $('#f-name'), pr = $('#f-practice'), of = $('#f-office'), cards = $$('.person'), empty = $('.people-empty');
    var filter = function () {
      var n = norm(name.value).trim(), shown = 0;
      cards.forEach(function (c) {
        var ok = (!n || norm(c.dataset.name).indexOf(n) > -1) &&
          (!pr.value || c.dataset.practices.split(' ').indexOf(pr.value) > -1) &&
          (!of.value || c.dataset.offices.split('|').indexOf(of.value) > -1);
        c.hidden = !ok; if (ok) shown++;
      });
      empty.hidden = shown > 0;
    };
    [name, pr, of].forEach(function (el) { el.addEventListener('input', filter); el.addEventListener('change', filter); });
  }

  /* Publications filter */
  var chips = $('[data-chips]');
  if (chips) {
    var items = $$('[data-insights] .card');
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      $$('.chip', chips).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      items.forEach(function (it) { it.hidden = !!b.dataset.cat && it.dataset.cat !== b.dataset.cat; });
    });
  }

  /* Contact form: until a form backend is connected, it opens a pre-filled e-mail. */
  var form = $('[data-contact-form]');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = $('.form__status', form);
    if (!form.checkValidity()) { status.textContent = 'Uzupełnij pola oznaczone gwiazdką i zaznacz zgodę.'; form.reportValidity(); return; }
    var f = form.elements;
    var subject = 'Zapytanie ze strony MWG Legal' + (f.area.value ? ' – ' + f.area.value : '');
    var bodyText = f.message.value + '\n\n--\n' + f.name.value + (f.company.value ? '\n' + f.company.value : '') + '\n' + f.email.value + (f.phone.value ? '\n' + f.phone.value : '');
    window.location.href = 'mailto:' + form.dataset.to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyText);
    status.textContent = 'Otwieramy program pocztowy z gotową wiadomością. Jeśli się nie otworzył, napisz na ' + form.dataset.to + '.';
  });
})();
