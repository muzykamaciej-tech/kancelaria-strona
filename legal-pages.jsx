/* legal-pages.jsx — trzy podstrony prawne (polityka prywatności, regulamin, RODO).
   Używają istniejącego układu podstrony: bg-light header (eyebrow + H1 + breadcrumb),
   a treść w .prose (rozszerzonej o .prose-legal: ol / table / a / strong).
   Navbar i Footer dokłada App. */

function LegalLayout({ eyebrow, title, label, setRoute, children }) {
  const Breadcrumb = window.Breadcrumb;
  return (
    <main data-screen-label={label}>
      <section className="bg-light" style={{ paddingBlock: '3rem 4rem' }}>
        <div className="wrap">
          <Breadcrumb
            trail={[
              { label: 'Start', onClick: () => setRoute('landing') },
              { label },
            ]}
          />
          <div className="mt-8" style={{ maxWidth: '48rem' }}>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display mt-4" style={{ lineHeight: 1.02 }}>{title}</h1>
          </div>
        </div>
      </section>

      <article className="section-py">
        <div className="wrap" style={{ maxWidth: '46rem' }}>
          <div className="prose prose-legal">
            {children}
          </div>
        </div>
      </article>
    </main>);

}

/* ============================================================
   #/polityka-prywatnosci
   ============================================================ */
function PolitykaPrywatnosciPage({ setRoute }) {
  return (
    <LegalLayout
      setRoute={setRoute}
      label="Polityka prywatności"
      eyebrow="Ochrona danych"
      title="Polityka prywatności"
    >
      <h2>1. Administrator danych</h2>
      <p>
        Administratorem Twoich danych osobowych jest <strong>adw. dr Maciej Muzyka</strong>, prowadzący indywidualną kancelarię adwokacką pod firmą <em>Kancelaria Nieruchomości adw. dr Maciej Muzyka</em> z siedzibą przy ul. Cicha 4/5, 20-078 Lublin, NIP: 7123424474, REGON: 389987200, wpisany na listę adwokatów Lubelskiej Izby Adwokackiej pod numerem LUB/ADW/1702 (dalej: „Administrator” lub „Kancelaria”).
      </p>
      <p>
        Kontakt w sprawach ochrony danych: e-mail <strong>maciej.muzyka@mecenasodnieruchomosci.pl</strong>, tel. <strong>+48 884 784 984</strong>, korespondencyjnie na adres siedziby.
      </p>
      <p>
        Administrator nie powołał Inspektora Ochrony Danych. We wszelkich sprawach dotyczących przetwarzania danych osobowych możesz kontaktować się bezpośrednio z Administratorem.
      </p>

      <h2>2. Jakie dane przetwarzamy i skąd je mamy</h2>
      <p>Przetwarzamy dane, które przekazujesz nam dobrowolnie:</p>
      <ul>
        <li>za pośrednictwem <strong>formularza „Wstępna analiza sprawy”</strong> — imię i nazwisko, adres e-mail, opcjonalnie numer telefonu, treść opisu sprawy oraz opcjonalnie załączone dokumenty (np. umowa, odpis księgi wieczystej, zdjęcia);</li>
        <li>w korespondencji <strong>e-mail</strong> lub telefonicznie — dane zawarte w treści wiadomości i przekazanych materiałach;</li>
        <li>w toku <strong>świadczenia pomocy prawnej</strong> — dane niezbędne do prowadzenia sprawy, w tym dane zawarte w dokumentach dotyczących nieruchomości.</li>
      </ul>
      <p>
        Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi na zapytanie i do świadczenia pomocy prawnej. Prosimy o niezamieszczanie w opisie sprawy szczególnych kategorii danych (np. dotyczących zdrowia), jeżeli nie jest to konieczne dla sprawy.
      </p>

      <h2>3. Cele i podstawy prawne przetwarzania</h2>
      <div className="prose-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cel</th>
              <th>Podstawa prawna (RODO)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Udzielenie odpowiedzi na zapytanie i przeprowadzenie bezpłatnej wstępnej analizy sprawy</td>
              <td>art. 6 ust. 1 lit. b RODO (czynności zmierzające do zawarcia umowy) oraz art. 6 ust. 1 lit. a RODO (Twoja zgoda)</td>
            </tr>
            <tr>
              <td>Świadczenie pomocy prawnej na podstawie zawartej umowy</td>
              <td>art. 6 ust. 1 lit. b RODO</td>
            </tr>
            <tr>
              <td>Wypełnienie obowiązków prawnych ciążących na Administratorze (m.in. podatkowych, rachunkowych, wynikających z Prawa o adwokaturze)</td>
              <td>art. 6 ust. 1 lit. c RODO</td>
            </tr>
            <tr>
              <td>Ustalenie, dochodzenie lub obrona przed roszczeniami (uzasadniony interes Administratora)</td>
              <td>art. 6 ust. 1 lit. f RODO</td>
            </tr>
            <tr>
              <td>Pomiar ruchu na stronie i jej udoskonalanie (statystyka)</td>
              <td>art. 6 ust. 1 lit. a RODO (zgoda wyrażona w banerze cookies)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Jeżeli w opisie sprawy przekażesz szczególne kategorie danych osobowych, podstawą ich przetwarzania jest art. 9 ust. 2 lit. a RODO (zgoda) oraz art. 9 ust. 2 lit. f RODO (dochodzenie roszczeń i świadczenie pomocy prawnej).
      </p>

      <h2>4. Tajemnica adwokacka</h2>
      <p>
        Wszystko, czego dowiaduję się w związku z udzielaniem pomocy prawnej — w tym treść Twojego zgłoszenia i przekazane dokumenty — jest objęte <strong>tajemnicą adwokacką</strong> zgodnie z art. 6 ustawy z dnia 26 maja 1982 r. — Prawo o adwokaturze. Tajemnica ta jest nieograniczona w czasie i stanowi dodatkową, silną ochronę Twoich danych, niezależną od przepisów o ochronie danych osobowych.
      </p>

      <h2>5. Odbiorcy danych</h2>
      <p>
        Twoje dane mogą być powierzane wyłącznie zaufanym podmiotom przetwarzającym je na zlecenie Administratora, na podstawie umów powierzenia:
      </p>
      <ul>
        <li><strong>dostawcy usługi obsługi formularza</strong> — formularz kontaktowy działa w oparciu o usługę <em>Formspree</em> (Formspree, Inc., z siedzibą w USA), która pośredniczy w przekazaniu wiadomości z formularza na skrzynkę Kancelarii;</li>
        <li><strong>dostawcy poczty elektronicznej i hostingu</strong> — w zakresie przechowywania korespondencji i strony;</li>
        <li><strong>biuro rachunkowe</strong> — w zakresie niezbędnym do rozliczeń;</li>
        <li><strong>dostawca narzędzia statystyki</strong> — Google (Google Analytics), jeżeli wyrazisz zgodę na cookies analityczne.</li>
      </ul>
      <p>
        Dane objęte tajemnicą adwokacką nie są udostępniane osobom trzecim poza przypadkami wynikającymi z bezwzględnie obowiązujących przepisów prawa.
      </p>

      <h2>6. Przekazywanie danych poza EOG</h2>
      <p>
        Korzystamy z narzędzi dostawców z siedzibą w Stanach Zjednoczonych (Formspree oraz — po wyrażeniu zgody — Google Analytics). Oznacza to przekazanie danych do państwa trzeciego. Odbywa się ono na podstawie zabezpieczeń przewidzianych w rozdziale V RODO — standardowych klauzul umownych zatwierdzonych przez Komisję Europejską lub uczestnictwa dostawcy w programie <em>Data Privacy Framework</em>. Kopię odpowiednich zabezpieczeń możesz uzyskać, kontaktując się z Administratorem.
      </p>

      <h2>7. Okres przechowywania danych</h2>
      <ul>
        <li>Dane ze zgłoszenia, które <strong>nie zakończyło się</strong> podjęciem współpracy — przechowujemy do <strong>12 miesięcy</strong> od ostatniego kontaktu, a następnie usuwamy.</li>
        <li>Dane związane z <strong>prowadzoną sprawą</strong> — przez czas jej prowadzenia oraz przez okres przedawnienia roszczeń i wynikający z obowiązków zawodowych adwokata, a dokumentację księgową — przez okres wymagany przepisami podatkowymi (co do zasady 5 lat).</li>
        <li>Dane przetwarzane na podstawie <strong>zgody</strong> (np. cookies analityczne) — do czasu jej wycofania.</li>
      </ul>

      <h2>8. Twoje prawa</h2>
      <p>
        Przysługuje Ci prawo do: dostępu do danych i uzyskania ich kopii, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie oraz — w zakresie danych przetwarzanych na podstawie zgody — do jej wycofania w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania sprzed wycofania).
      </p>
      <p>
        Masz również prawo wniesienia skargi do organu nadzorczego — <strong>Prezesa Urzędu Ochrony Danych Osobowych</strong> (ul. Stawki 2, 00-193 Warszawa).
      </p>
      <p>
        Realizacja niektórych praw może być ograniczona ze względu na tajemnicę adwokacką oraz obowiązki wynikające z przepisów prawa.
      </p>

      <h2>9. Zautomatyzowane podejmowanie decyzji</h2>
      <p>
        Twoje dane nie są wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym profilowania.
      </p>

      <h2>10. Pliki cookies</h2>
      <p>Strona wykorzystuje pliki cookies:</p>
      <ul>
        <li><strong>niezbędne</strong> — konieczne do prawidłowego działania strony; nie wymagają zgody;</li>
        <li><strong>analityczne / statystyczne</strong> — służą do pomiaru ruchu (Google Analytics); instalowane wyłącznie po wyrażeniu przez Ciebie zgody w banerze cookies.</li>
      </ul>
      <p>
        Zgodą na cookies analityczne zarządzasz w banerze wyświetlanym przy pierwszej wizycie oraz w ustawieniach swojej przeglądarki, gdzie możesz je w każdej chwili usunąć lub zablokować.
      </p>

      <h2>11. Zmiany polityki</h2>
      <p>
        Politykę możemy aktualizować, np. w związku ze zmianą przepisów lub wykorzystywanych narzędzi. Aktualna wersja jest zawsze dostępna na tej stronie. Data ostatniej aktualizacji: <strong>4 lipca 2026 r.</strong>
      </p>
    </LegalLayout>);

}

/* ============================================================
   #/rodo
   ============================================================ */
function RodoPage({ setRoute }) {
  return (
    <LegalLayout
      setRoute={setRoute}
      label="RODO"
      eyebrow="Obowiązek informacyjny"
      title="Klauzula informacyjna RODO"
    >
      <p>
        Wysyłając formularz „Wstępna analiza sprawy” lub kontaktując się z Kancelarią, przekazujesz swoje dane osobowe. Informujemy, że:
      </p>
      <ol>
        <li><strong>Administratorem</strong> Twoich danych jest adw. dr Maciej Muzyka, prowadzący <em>Kancelarię Nieruchomości adw. dr Maciej Muzyka</em>, ul. Cicha 4/5, 20-078 Lublin, e-mail: maciej.muzyka@mecenasodnieruchomosci.pl.</li>
        <li>Dane przetwarzamy w celu <strong>odpowiedzi na Twoje zapytanie i przeprowadzenia bezpłatnej wstępnej analizy sprawy</strong> (art. 6 ust. 1 lit. b oraz lit. a RODO), a w razie podjęcia współpracy — w celu <strong>świadczenia pomocy prawnej</strong> (art. 6 ust. 1 lit. b RODO) oraz wypełnienia obowiązków prawnych i obrony przed roszczeniami (art. 6 ust. 1 lit. c i f RODO).</li>
        <li>Treść zgłoszenia i przekazane dokumenty są objęte <strong>tajemnicą adwokacką</strong>.</li>
        <li>Odbiorcami danych mogą być podmioty przetwarzające dane na nasze zlecenie (m.in. dostawca formularza, poczty i hostingu). Niektórzy z nich mają siedzibę poza EOG — przekazanie odbywa się na podstawie zabezpieczeń z rozdziału V RODO.</li>
        <li>Dane ze zgłoszeń bez dalszej współpracy przechowujemy do <strong>12 miesięcy</strong>; dane spraw — przez czas ich prowadzenia i okresy wynikające z przepisów.</li>
        <li>Masz prawo do <strong>dostępu, sprostowania, usunięcia, ograniczenia, przenoszenia i sprzeciwu</strong>, a także do <strong>wycofania zgody</strong> i wniesienia <strong>skargi do Prezesa UODO</strong>.</li>
        <li>Podanie danych jest <strong>dobrowolne</strong>, lecz niezbędne do udzielenia odpowiedzi.</li>
      </ol>
      <p>
        Pełne informacje znajdziesz w <a href="#/polityka-prywatnosci">Polityce prywatności</a>.
      </p>
    </LegalLayout>);

}

/* ============================================================
   #/regulamin
   ============================================================ */
function RegulaminPage({ setRoute }) {
  return (
    <LegalLayout
      setRoute={setRoute}
      label="Regulamin"
      eyebrow="Zasady korzystania"
      title="Regulamin strony"
    >
      <h2>§ 1. Postanowienia ogólne</h2>
      <ol>
        <li>Niniejszy Regulamin określa zasady korzystania ze strony internetowej działającej pod adresem <strong>mecenasodnieruchomosci.pl</strong> (dalej: „Strona”).</li>
        <li>Właścicielem i administratorem Strony jest adw. dr Maciej Muzyka, prowadzący <em>Kancelarię Nieruchomości adw. dr Maciej Muzyka</em>, ul. Cicha 4/5, 20-078 Lublin, NIP: 7123424474, REGON: 389987200, wpisany na listę adwokatów Lubelskiej Izby Adwokackiej pod numerem LUB/ADW/1702 (dalej: „Kancelaria”).</li>
        <li>Korzystanie ze Strony oznacza akceptację niniejszego Regulaminu.</li>
      </ol>

      <h2>§ 2. Charakter treści na Stronie</h2>
      <ol>
        <li>Treści publikowane na Stronie, w tym opisy usług oraz artykuły na blogu, mają charakter <strong>wyłącznie informacyjny i edukacyjny</strong> i nie stanowią porady prawnej ani opinii prawnej w rozumieniu przepisów Prawa o adwokaturze.</li>
        <li>Treści na Stronie nie odnoszą się do indywidualnej sytuacji użytkownika i nie mogą być podstawą podejmowania decyzji bez uprzedniej konsultacji. Pomoc prawna świadczona jest wyłącznie na podstawie odrębnej umowy, po ustaleniu zakresu i wynagrodzenia.</li>
        <li>Kancelaria dokłada starań, aby treści były aktualne i rzetelne, jednak nie ponosi odpowiedzialności za skutki działań podjętych wyłącznie na ich podstawie.</li>
      </ol>

      <h2>§ 3. Formularz kontaktowy i wstępna analiza sprawy</h2>
      <ol>
        <li>Za pośrednictwem formularza „Wstępna analiza sprawy” użytkownik może przekazać opis sprawy w celu uzyskania bezpłatnej wstępnej oceny.</li>
        <li>Wysłanie formularza <strong>nie oznacza zawarcia umowy</strong> o świadczenie pomocy prawnej ani nie zobowiązuje żadnej ze stron. Umowa może zostać zawarta wyłącznie w drodze odrębnych ustaleń.</li>
        <li>Wstępna analiza ma charakter orientacyjny i nie stanowi pełnej opinii prawnej.</li>
        <li>Warunkiem wysłania formularza jest wyrażenie zgody na przetwarzanie danych osobowych oraz zapoznanie się z Polityką prywatności.</li>
        <li>Zasady przetwarzania danych osobowych określa <a href="#/polityka-prywatnosci">Polityka prywatności</a>.</li>
      </ol>

      <h2>§ 4. Prawa autorskie</h2>
      <ol>
        <li>Wszelkie treści zamieszczone na Stronie, w tym teksty, grafiki, logo i układ, podlegają ochronie prawnej i stanowią własność Kancelarii lub są wykorzystywane na podstawie stosownych uprawnień.</li>
        <li>Kopiowanie, rozpowszechnianie lub inne wykorzystanie treści bez zgody Kancelarii jest niedozwolone, z wyjątkiem dozwolonego użytku przewidzianego przepisami prawa.</li>
      </ol>

      <h2>§ 5. Wymagania techniczne i odpowiedzialność</h2>
      <ol>
        <li>Do korzystania ze Strony niezbędne jest urządzenie z dostępem do Internetu oraz aktualna przeglądarka internetowa.</li>
        <li>Kancelaria nie ponosi odpowiedzialności za przerwy w działaniu Strony wynikające z przyczyn od niej niezależnych.</li>
      </ol>

      <h2>§ 6. Postanowienia końcowe</h2>
      <ol>
        <li>Kancelaria zastrzega sobie prawo do zmiany Regulaminu. Aktualna wersja jest zawsze dostępna na Stronie.</li>
        <li>W sprawach nieuregulowanych stosuje się przepisy prawa polskiego.</li>
        <li>Data ostatniej aktualizacji: <strong>4 lipca 2026 r.</strong></li>
      </ol>
    </LegalLayout>);

}

Object.assign(window, { PolitykaPrywatnosciPage, RodoPage, RegulaminPage });
