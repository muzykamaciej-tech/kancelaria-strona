/* cookie-consent.jsx — RODO cookie-consent banner (UI layer for GA4 Consent Mode v2).

   The static <head> script already:
     • set the DEFAULT consent to 'denied' for every category, and
     • restored a previously stored 'granted' choice (so GA4 works after reload).

   This component only owns the UI + persistence: show the banner on the first
   visit, remember the choice under 'cookie-consent', and push a consent UPDATE
   to gtag when the user accepts. Every localStorage access is wrapped in
   try/catch so restricted environments (preview iframe, private mode) never throw. */

const CONSENT_KEY = 'cookie-consent';

function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}
function writeConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {/* storage unavailable — banner still works for this session */}
}
function clearConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch (e) {/* no-op */}
}

function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    /* first visit → no stored decision → show the banner */
    if (!readConsent()) setVisible(true);

    /* footer "Ustawienia cookies" re-opens the banner so consent can be changed */
    function reopen() {
      clearConsent();
      setVisible(true);
    }
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  function accept() {
    writeConsent('granted');
    if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'granted' });
    setVisible(false);
  }

  function rejectNonEssential() {
    writeConsent('denied'); /* consent stays 'denied' — nothing to update */
    setVisible(false);
  }

  /* let the sticky mobile CTA bar step aside while the banner is on screen */
  React.useEffect(() => {
    document.body.classList.toggle('has-cookie-banner', visible);
    return () => document.body.classList.remove('has-cookie-banner');
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies">

      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          Używamy plików cookies niezbędnych do działania strony oraz — za Twoją zgodą — analitycznych (Google Analytics), by mierzyć ruch. Szczegóły w{' '}
          <a href="#/polityka-prywatnosci">Polityce prywatności</a>.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-btn cookie-btn--primary" onClick={accept}>
            Akceptuję
          </button>
          <button type="button" className="cookie-btn cookie-btn--ghost" onClick={rejectNonEssential}>
            Tylko niezbędne
          </button>
        </div>
      </div>
    </div>);

}

Object.assign(window, { CookieBanner });
