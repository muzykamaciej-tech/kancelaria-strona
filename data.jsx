/* data.jsx — content for the kancelaria site (v2 — flat 11-service catalogue) */

const NAV_LINKS = [
  { id: 'uslugi', label: 'Usługi prawne', hasMenu: true },
  { id: 'dla-firm', label: 'Dla firm', block: 'obsluga-podmiotow-profesjonalnych' },
  { id: 'blog', label: 'Skarbnica wiedzy' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontakt', label: 'Kontakt' },
];

/* ---------- 11 services (mirrors competitor's catalogue; copy is original, first-person) ---------- */
const SERVICES = [
  {
    id: 'audyt-stanu-prawnego',
    n: '01',
    icon: 'shield-check',
    title: 'Audyt stanu prawnego nieruchomości',
    short: 'Pełny prawny rentgen nieruchomości — zanim podpiszesz.',
    audience: ['Kupujący prywatni', 'Inwestorzy', 'Spadkobiercy'],
    teaser: 'Sprawdzam księgę wieczystą, ewidencję, MPZP, decyzje administracyjne, służebności i roszczenia. Otrzymujesz raport z listą ryzyk i rekomendacjami.',
    intro: 'Większość kosztownych pomyłek na rynku nieruchomości to nie błędy przy podpisywaniu umowy, tylko brak rzetelnej weryfikacji tego, co kupujesz. Robię audyt prawny każdej nieruchomości, którą bierzesz pod uwagę — niezależnie czy to mieszkanie z drugiej ręki, działka inwestycyjna, czy kamienica z masy spadkowej.',
    body: 'W ramach audytu sprawdzam wszystkie cztery działy księgi wieczystej, ewidencję gruntów i budynków, MPZP lub decyzję o warunkach zabudowy, decyzje administracyjne, ostrzeżenia, hipoteki, służebności i roszczenia osób trzecich. Po zakończeniu prac otrzymujesz raport pisany prostym językiem — z listą ryzyk, ich oceną i konkretnymi rekomendacjami: co zmienić w umowie, czego żądać od sprzedającego, kiedy odstąpić.',
    deliverables: [
      'Pisany raport PDF z listą ryzyk pogrupowanych według wagi',
      'Streszczenie wykonawcze (executive summary) na pierwszej stronie',
      'Konkretne zapisy do dodania lub usunięcia z projektu umowy',
      'Rekomendacje dotyczące dokumentów dodatkowych do uzyskania od sprzedającego',
      'Mailowa konsultacja po lekturze raportu — odpowiadam na pytania',
    ],
    process: [
      { t: 'Otrzymuję od Ciebie dane nieruchomości', d: 'Wystarczy numer księgi wieczystej i adres. Resztę dokumentów pobieram sam.' },
      { t: 'Pobieram i analizuję', d: 'Łączę się z systemami EKW, geoportalem, urzędem gminy. Weryfikuję każdy z czterech działów KW.' },
      { t: 'Spisuję raport', d: 'Pisany prostym językiem, z czerwonymi/żółtymi/zielonymi flagami przy każdym znalezisku.' },
      { t: 'Omawiamy', d: 'Krótka konsultacja mailowa po lekturze raportu — odpowiadam na pytania.' },
    ],
    faq: [
      { q: 'W jakim terminie otrzymam raport?', a: 'Standardowo 5–7 dni roboczych. Tryb ekspresowy (48 h) jest możliwy za wyższą wycenę.' },
      { q: 'Czy raport ma wartość prawną?', a: 'Tak. Raport jest sygnowany przeze mnie jako adwokata wpisanego na listę Lubelskiej Izby Adwokackiej — stanowi profesjonalną opinię prawną.' },
      { q: 'Czy mogę pokazać raport sprzedającemu?', a: 'Tak — wielu klientów wykorzystuje raport jako podstawę do negocjacji cenowych lub żądania uzupełnienia dokumentacji.' },
    ],
    related: ['sprawdzenie-umowy-deweloperskiej', 'porady-prawne', 'inwestycje-budowlane'],
  },
  {
    id: 'sprawdzenie-umowy-deweloperskiej',
    n: '02',
    icon: 'file-search',
    title: 'Sprawdzenie umowy deweloperskiej',
    short: 'Audyt umowy z deweloperem — zanim podpiszesz u notariusza.',
    audience: ['Kupujący mieszkanie z rynku pierwotnego', 'Kupujący lokal usługowy'],
    teaser: 'Czytam każdy paragraf umowy deweloperskiej i prospektu informacyjnego. Wskazuję klauzule niedozwolone i proponuję bezpieczne zapisy.',
    intro: 'Statystyki są bezlitosne: 8 na 10 umów deweloperskich zawiera klauzule niedozwolone lub niekorzystne dla kupującego. Zanim podpiszesz u notariusza coś, czego nie zmienisz przez najbliższe lata, daj mi tę umowę do analizy. Mam za sobą setki przeanalizowanych umów deweloperskich i wiem, gdzie szukać kruczków.',
    body: 'Czytam całą umowę — w tym prospekt informacyjny, harmonogram, kary umowne, postanowienia o odstąpieniu, klauzule rękojmi i zapisy o protokole odbioru. Wynik to konkretny dokument z listą problemów i propozycjami nowych sformułowań, które możesz przesłać deweloperowi do negocjacji.',
    deliverables: [
      'Pełen audyt umowy deweloperskiej + prospektu informacyjnego',
      'Lista zidentyfikowanych klauzul niedozwolonych',
      'Propozycje konkretnych zapisów do renegocjacji',
      'Ocena kar umownych po obu stronach',
      'Krótka konsultacja telefoniczna po przesłaniu raportu',
    ],
    process: [
      { t: 'Wyślij mi umowę', d: 'PDF lub skan. Im więcej kontekstu (cena, harmonogram), tym lepiej.' },
      { t: 'Analizuję paragraf po paragrafie', d: 'Szukam klauzul niedozwolonych w rejestrze UOKiK i niesymetrycznych zobowiązań.' },
      { t: 'Otrzymujesz raport', d: 'Z markowaniami w stylu czerwone / żółte / zielone, z gotowymi propozycjami zmian.' },
      { t: 'Renegocjujesz', d: 'Sam lub z moją pomocą. W obu przypadkach masz konkretną listę argumentów.' },
    ],
    faq: [
      { q: 'Czy deweloperzy w ogóle zgadzają się na zmiany?', a: 'Tak. W praktyce ok. 60–70% wskazanych przeze mnie poprawek udaje się wprowadzić. Reszta to przedmiot świadomej decyzji — wiesz przynajmniej, na co się godzisz.' },
      { q: 'Co jeśli deweloper odmówi wszystkich poprawek?', a: 'To też informacja. W skrajnych przypadkach rekomenduję odstąpienie od transakcji — lepiej stracić zaliczkę niż wpaść w wieloletni spór.' },
      { q: 'Czy analizujesz też umowy rezerwacyjne i przedwstępne?', a: 'Tak — to osobna, tańsza usługa. Idealnie, gdy zgłaszasz się jeszcze przed podpisaniem rezerwacji.' },
    ],
    related: ['audyt-stanu-prawnego', 'negocjacje', 'porady-prawne'],
  },
  {
    id: 'warunki-zabudowy',
    n: '03',
    icon: 'file-text',
    title: 'Warunki zabudowy',
    short: 'Decyzja o warunkach zabudowy — od wniosku po odwołanie.',
    audience: ['Właściciele działek', 'Inwestorzy', 'Wykonawcy'],
    teaser: 'Pomagam uzyskać decyzję o warunkach zabudowy — a jeśli urząd odmówił, prowadzę odwołania i skargi do WSA.',
    intro: 'Brak miejscowego planu nie oznacza, że nie da się zbudować — ale procedura uzyskania decyzji o warunkach zabudowy bywa wymagająca. Pomagam na każdym etapie: od analizy szansy, przez przygotowanie wniosku, po odwołania, gdy organ administracji ma inne zdanie niż prawo budowlane.',
    body: 'Sprawdzam, czy działka spełnia kryteria tzw. dobrego sąsiedztwa, oceniam dostęp do drogi publicznej, badam wymogi infrastruktury. Jeżeli urząd odmówił — analizuję uzasadnienie decyzji i przygotowuję odwołanie do Samorządowego Kolegium Odwoławczego lub skargę do Wojewódzkiego Sądu Administracyjnego.',
    deliverables: [
      'Analiza szans uzyskania decyzji WZ',
      'Sporządzenie wniosku z załącznikami',
      'Pełnomocnictwo do reprezentacji w urzędzie',
      'Odwołanie do SKO lub skarga do WSA — gdy potrzeba',
    ],
    process: [
      { t: 'Diagnoza', d: 'Sprawdzam działkę, otoczenie, MPZP (jeśli istnieje) i wcześniejsze decyzje sąsiednie.' },
      { t: 'Wniosek', d: 'Przygotowuję pełen wniosek z opisem inwestycji i analizą urbanistyczną.' },
      { t: 'Reprezentacja w urzędzie', d: 'Odpowiadam na wezwania, składam uzupełnienia, czuwam nad terminami.' },
      { t: 'Odwołanie (jeśli potrzeba)', d: 'Gdy organ odmawia bez podstaw — kierujemy sprawę wyżej.' },
    ],
    faq: [
      { q: 'Ile trwa uzyskanie decyzji WZ?', a: 'Ustawowo organ ma 90 dni, w praktyce 4–8 miesięcy. Odwołanie do SKO — kolejne 2–3 miesiące.' },
      { q: 'Czy mogę dostać kilka decyzji WZ na jedną działkę?', a: 'Tak — i czasami warto. Decyzja WZ nie tworzy praw, jest tylko stanowiskiem organu. Dla różnych wariantów inwestycji można wnioskować osobno.' },
      { q: 'Co zmieni nowy plan ogólny?', a: 'Po wejściu nowych planów ogólnych (do 2026 r.) zasady wydawania WZ zostaną mocno zaostrzone. Jeśli planujesz inwestycję — warto działać teraz.' },
    ],
    related: ['plan-ogolny', 'inwestycje-budowlane', 'porady-prawne'],
  },
  {
    id: 'plan-ogolny',
    n: '04',
    icon: 'map',
    title: 'Plan ogólny',
    short: 'Plan ogólny gminy — analiza, uwagi, opiniowanie projektu.',
    audience: ['Właściciele gruntów', 'Inwestorzy', 'Rolnicy'],
    teaser: 'Nowe plany ogólne gmin zmienią Polskę do 2026 r. Pomagam sprawdzić, jak nowy plan wpłynie na Twoją działkę — i złożyć uwagi.',
    intro: 'Plany ogólne wchodzą w miejsce dotychczasowych studiów uwarunkowań i kierunków zagospodarowania przestrzennego. To dokument, który dla większości gmin powstaje teraz, w 2026 r. — i decyduje o tym, czy Twoja działka będzie mogła być zabudowana, czy zostanie zakwalifikowana jako rolna lub zalesiona.',
    body: 'Analizuję projekt planu ogólnego pod kątem konkretnej działki. Sprawdzam, do której strefy planistycznej została zakwalifikowana, jakie wskaźniki dla niej obowiązują i co to oznacza dla Twoich planów inwestycyjnych. Jeżeli projekt jest dla Ciebie niekorzystny — składam uwagi w toku konsultacji społecznych, a jeśli to nie wystarczy, sporządzam skargę po uchwaleniu planu.',
    deliverables: [
      'Analiza projektu planu ogólnego dla Twojej działki',
      'Identyfikacja strefy planistycznej i wskaźników',
      'Sporządzenie uwag w toku konsultacji społecznych',
      'Reprezentacja na sesji rady gminy (jeśli potrzeba)',
      'Skarga do WSA po uchwaleniu planu — w razie potrzeby',
    ],
    process: [
      { t: 'Sprawdzam status', d: 'Czy gmina ma już projekt? Czy są wyłożenia? Kiedy mija termin uwag?' },
      { t: 'Analiza', d: 'Co projekt mówi o Twojej działce — i co to oznacza dla planów inwestycyjnych.' },
      { t: 'Uwagi', d: 'Składamy pisemne uwagi w toku konsultacji — z argumentacją prawną.' },
      { t: 'Reprezentacja', d: 'Jeśli potrzeba — udział w sesjach, dalsze odwołania.' },
    ],
    faq: [
      { q: 'Ile czasu mam na uwagi do projektu planu ogólnego?', a: 'Co najmniej 28 dni od daty wyłożenia projektu do publicznego wglądu. Termin trzeba pilnować — w praktyce gminy publikują obwieszczenia w różny sposób.' },
      { q: 'Co jeśli plan zostanie uchwalony niekorzystnie?', a: 'Po uchwaleniu można złożyć skargę do WSA — w terminie 30 dni od dnia doręczenia rozstrzygnięcia organu nadzoru.' },
      { q: 'Czy plan ogólny może obniżyć wartość mojej działki?', a: 'Tak — i wtedy przysługuje roszczenie z art. 36 ustawy o planowaniu i zagospodarowaniu przestrzennym. Pomagam je wycenić i wystąpić z nim do gminy.' },
    ],
    related: ['warunki-zabudowy', 'inwestycje-budowlane', 'audyt-stanu-prawnego'],
  },
  {
    id: 'inwestycje-budowlane',
    n: '05',
    icon: 'hammer',
    title: 'Inwestycje budowlane',
    short: 'Proces inwestycyjny od A do Z — pozwolenia, samowole, odwołania.',
    audience: ['Inwestorzy prywatni', 'Wykonawcy', 'Firmy budowlane'],
    teaser: 'Prowadzę sprawy z prawa budowlanego — pozwolenia na budowę, zgłoszenia, legalizacje samowoli, odwołania od decyzji organów nadzoru.',
    intro: 'Inwestycja budowlana to nie tylko projekt i ekipa. To kilkadziesiąt decyzji administracyjnych, terminów i potencjalnych konfliktów. Prowadzę sprawy klientów na każdym etapie — od pozwolenia na budowę, przez kontrole nadzoru budowlanego, po pozwolenie na użytkowanie.',
    body: 'Pomagam w pozyskiwaniu pozwoleń na budowę, zgłoszeniach, decyzjach środowiskowych. Jeżeli organ wniósł sprzeciw lub uchylił decyzję — sporządzam odwołania. W sprawach samowoli budowlanych prowadzę procedurę legalizacyjną. Reprezentuję klientów w postępowaniach przed PINB i WINB.',
    deliverables: [
      'Audyt szans uzyskania pozwolenia na budowę',
      'Sporządzenie wniosku i kompletu załączników',
      'Reprezentacja w toku postępowania administracyjnego',
      'Odwołania od decyzji odmownych',
      'Postępowanie legalizacyjne samowoli budowlanej',
    ],
    process: [
      { t: 'Diagnoza', d: 'Co już masz, czego brakuje, jakie są realne ryzyka organu.' },
      { t: 'Strategia', d: 'Wniosek o pozwolenie, zgłoszenie, czy najpierw zmiana WZ.' },
      { t: 'Reprezentacja', d: 'Odpowiedzi na wezwania, uzupełnienia, terminy.' },
      { t: 'Eskalacja', d: 'Odwołania do wojewody, skargi do WSA — gdy potrzeba.' },
    ],
    faq: [
      { q: 'Czy mogę zalegalizować budowę bez pozwolenia?', a: 'W większości przypadków tak. Procedura legalizacyjna wymaga m.in. opłaty legalizacyjnej i ekspertyzy technicznej. Pomagam ocenić, czy to się opłaca, i przeprowadzam procedurę.' },
      { q: 'Co jeśli sąsiad zaskarży moje pozwolenie?', a: 'Reprezentuję inwestorów w postępowaniach odwoławczych w sprawie pozwoleń. Najczęstsze zarzuty sąsiadów to brak interesu prawnego — co da się obronić.' },
      { q: 'Czy obsługujesz duże inwestycje?', a: 'Tak — od domów jednorodzinnych po budynki wielorodzinne i obiekty komercyjne. W razie potrzeby konsultuję się z architektami i konstruktorami.' },
    ],
    related: ['warunki-zabudowy', 'plan-ogolny', 'obsluga-deweloperow'],
  },
  {
    id: 'obsluga-deweloperow',
    n: '06',
    icon: 'briefcase',
    title: 'Obsługa prawna deweloperów',
    short: 'Kompleksowa obsługa inwestycji deweloperskich.',
    audience: ['Deweloperzy', 'Inwestorzy', 'Firmy budowlane'],
    teaser: 'Pomagam przygotować dokumenty sprzedażowe (umowa deweloperska, prospekt), zabezpieczyć interesy inwestycji i obsłużyć etap posprzedażowy.',
    intro: 'Realizujesz inwestycję deweloperską? Pomagam przygotować ją tak, żeby przeszła kontrolę UOKiK, była atrakcyjna dla nabywców i bezpieczna dla Ciebie jako inwestora. Od due diligence gruntu, przez wzory umów, po obsługę roszczeń po przekazaniu lokali.',
    body: 'Standard pracy z deweloperami obejmuje przygotowanie wzoru umowy deweloperskiej, prospektu informacyjnego, harmonogramu, dokumentów rezerwacyjnych i przedwstępnych. Doradzam w wyborze formy zabezpieczenia (rachunek powierniczy otwarty/zamknięty), uczestniczę w negocjacjach z bankiem finansującym, prowadzę postępowania reklamacyjne.',
    deliverables: [
      'Wzory umów (rezerwacyjnej, deweloperskiej, sprzedaży)',
      'Prospekt informacyjny zgodny z ustawą deweloperską',
      'Pełna obsługa posprzedażowa (rękojmia, gwarancje, roszczenia)',
      'Negocjacje z bankiem prowadzącym rachunek powierniczy',
      'Obsługa zarządu spółki celowej (SPV)',
    ],
    process: [
      { t: 'Audyt inwestycji', d: 'DD gruntu, weryfikacja stanu prawnego, analiza ograniczeń.' },
      { t: 'Dokumenty sprzedażowe', d: 'Wzory umów, prospekt, harmonogramy, regulaminy.' },
      { t: 'Sprzedaż', d: 'Bieżąca obsługa transakcji, pomoc przy negocjacjach z klientami.' },
      { t: 'Posprzedaż', d: 'Obsługa rękojmi, eksploatacji, wspólnoty mieszkaniowej.' },
    ],
    faq: [
      { q: 'Pracujesz na ryczałcie czy godzinach?', a: 'Dla projektów deweloperskich wyceniam pakiet ryczałtowy za etap (sprzedażowy / posprzedażowy) plus opcjonalna stawka godzinowa za sprawy nadprogramowe.' },
      { q: 'Czy obsługujesz inwestycje spoza Lubelszczyzny?', a: 'Tak — pracuję zdalnie, klienci mam z całej Polski. Lokalizacja inwestycji nie ma znaczenia.' },
      { q: 'Czy pomagasz w sporach z nabywcami?', a: 'Tak — ale staram się przede wszystkim sporom zapobiegać. Dobrze napisana umowa to najlepsza polisa.' },
    ],
    related: ['sprawdzenie-umowy-deweloperskiej', 'inwestycje-budowlane', 'audyt-stanu-prawnego'],
  },
  {
    id: 'bezpieczny-najem',
    n: '07',
    icon: 'key',
    title: 'Bezpieczny najem nieruchomości',
    short: 'Umowy najmu, najem okazjonalny i instytucjonalny, eksmisja.',
    audience: ['Wynajmujący', 'Inwestorzy buy-to-let', 'Najemcy komercyjni'],
    teaser: 'Sporządzam bezpieczne umowy najmu mieszkalne i komercyjne, prowadzę windykację i eksmisje. Wszystko, czego potrzebuje wynajmujący — w jednym miejscu.',
    intro: 'Najem mieszkania bez dobrej umowy to ruletka — i często kończy się eksmisją trwającą lata. Pracuję głównie po stronie wynajmujących, ale zdarza mi się też reprezentować najemców komercyjnych w sporach z właścicielami nieruchomości.',
    body: 'Najem okazjonalny i instytucjonalny to dziś standard ochrony wynajmującego — i piszę je tak, żeby były szczelne. Dla najmu komercyjnego dopasowuję umowę do specyfiki branży (handel, biuro, magazyn). Gdy najemca przestaje płacić — prowadzę pełną procedurę: wezwania, wypowiedzenie, eksmisję, windykację należności.',
    deliverables: [
      'Sporządzenie umowy najmu mieszkalnego, okazjonalnego, instytucjonalnego',
      'Sporządzenie umowy najmu komercyjnego',
      'Procedura eksmisyjna (wezwania, wypowiedzenie, sąd)',
      'Windykacja zaległego czynszu',
      'Doradztwo przy zakupie nieruchomości pod wynajem (buy-to-let)',
    ],
    process: [
      { t: 'Diagnoza Twojej sytuacji', d: 'Jaki typ najmu, jaki profil najemcy, jakie ryzyka.' },
      { t: 'Wzór umowy', d: 'Indywidualnie skrojona umowa — nie szablon z internetu.' },
      { t: 'Bieżąca obsługa', d: 'Wezwania do zapłaty, kary umowne, kontakty z najemcą.' },
      { t: 'Eskalacja', d: 'Eksmisja, windykacja, postępowanie egzekucyjne — gdy potrzeba.' },
    ],
    faq: [
      { q: 'Czy mogę wynajmować bez najmu okazjonalnego?', a: 'Tak, ale ryzyko jest duże. W razie problemu eksmisja trwa od 2 do 5 lat. Najem okazjonalny pozwala wyeksmitować w 3–6 miesięcy.' },
      { q: 'Co jeśli najemca przestał płacić, a uciekł?', a: 'Pomagam wszcząć egzekucję komorniczą — i wcześniej znaleźć majątek dłużnika. Wiele zależy od tego, jak zabezpieczona była umowa.' },
      { q: 'Czy obsługujesz najem krótkoterminowy (Airbnb)?', a: 'Tak — ale w tym wypadku stawiam mocny akcent na zgodność z uchwałami wspólnoty i miejscowym prawem.' },
    ],
    related: ['flipy', 'audyt-stanu-prawnego', 'porady-prawne'],
  },
  {
    id: 'flipy',
    n: '08',
    icon: 'repeat',
    title: 'Flipy nieruchomości od strony prawnej',
    short: 'Szybkie zakupy i odsprzedaże — prawnik, który nadąża za rynkiem.',
    audience: ['Flipperzy', 'Inwestorzy hurtowi', 'Firmy obrotowe'],
    teaser: 'Obsługuję inwestorów, którzy kupują żeby sprzedać. Szybkie audyty, sprawnie negocjowane umowy, pomoc przy licytacjach i nieruchomościach z masy syndyka.',
    intro: 'Flipy to specyficzny biznes — żyje z tempa, marży i wyłapywania nieoczywistych okazji. Pracuję z kilkunastoma flipperami z różnych miast Polski i wiem, że dla Was prawo jest narzędziem, nie celem. Działam więc szybko: krótkie raporty, jasne rekomendacje, ekspresowe terminy.',
    body: 'Standardowo obsługuję cały cykl: szybki DD przy zakupie, pomoc w negocjacjach (m.in. ze spadkobiercami, syndykiem, komornikiem), sprawdzenie pełnomocnictw, akt notarialny, sprzedaż finalna. Dla powtarzalnych operacji proponuję pakiety abonamentowe.',
    deliverables: [
      'Express DD nieruchomości (48 h)',
      'Wzory umów dla cyklu zakup → remont → sprzedaż',
      'Obsługa licytacji komorniczych i sprzedaży syndyckiej',
      'Pełnomocnictwo do reprezentacji u notariusza (gdy nie możesz być)',
      'Doradztwo podatkowe we współpracy z doradcą podatkowym',
    ],
    process: [
      { t: 'Szybki sygnał', d: 'Piszesz, że masz okazję. Wracam z wyceną i terminem w tym samym dniu.' },
      { t: 'DD ekspresowy', d: 'Najczęściej 48 h. Najważniejsze ryzyka — od razu w mailu.' },
      { t: 'Negocjacje i akt', d: 'Pomagam przy negocjacjach, asystuję u notariusza.' },
      { t: 'Sprzedaż', d: 'Po remoncie — obsługa transakcji sprzedażowej.' },
    ],
    faq: [
      { q: 'Czy obsługujesz licytacje komornicze?', a: 'Tak — specjalistyczna usługa. Robię audyt nieruchomości licytacyjnej w 5 dni, opisuję ryzyka specyficzne dla licytacji (np. obciążenia, lokatorzy).' },
      { q: 'Mam kilka flipów rocznie — jak to wycenić?', a: 'Mogę zaproponować pakiet ryczałtowy z miesięcznym kontaktem priorytetowym. Dla 6+ flipów rocznie to znacznie taniej niż usługi pojedyncze.' },
      { q: 'Co z VAT-em przy flipach?', a: 'Współpracuję z doradcami podatkowymi. Sam zajmuję się stroną prawną, a podatki konsultujemy łącznie.' },
    ],
    related: ['audyt-stanu-prawnego', 'negocjacje', 'porady-prawne'],
  },
  {
    id: 'negocjacje',
    n: '09',
    icon: 'handshake',
    title: 'Negocjacje na rynku nieruchomości',
    short: 'Wsparcie prawne w negocjacjach — z deweloperem, sprzedającym, najemcą.',
    audience: ['Kupujący wysokie kwoty', 'Inwestorzy', 'Firmy'],
    teaser: 'Negocjuję dla Ciebie z deweloperami, sprzedającymi, najemcami i kontrahentami. Argumenty prawne + chłodna głowa.',
    intro: 'Większość negocjacji na rynku nieruchomości toczy się między laikiem (kupującym/wynajmującym) a profesjonalistą (deweloperem, biurem nieruchomości). To nierówna walka — i często wystarczy chłodny prawnik po Twojej stronie, żeby dynamika rozmów się zmieniła.',
    body: 'Negocjuję w Twoim imieniu lub doradzam Ci w trakcie — w zależności od preferencji. Przygotowuję strategię negocjacyjną, identyfikuję punkty wpływu prawnego (np. klauzule niedozwolone, niesymetryczne kary), uczestniczę w rozmowach (osobiście, online, mailowo).',
    deliverables: [
      'Strategia negocjacyjna pisana pod konkretną sprawę',
      'Reprezentacja w rozmowach (mailowo, telefonicznie, na żywo)',
      'Wsparcie prawnym za Twoimi plecami (doradztwo on-call)',
      'Sporządzanie kontrpropozycji umów',
    ],
    process: [
      { t: 'Diagnoza', d: 'Co negocjujesz, z kim, w jakim kontekście. Co jest minimum, co maximum.' },
      { t: 'Strategia', d: 'Identyfikacja punktów wpływu i sekwencji argumentów.' },
      { t: 'Negocjacje', d: 'Aktywnie po Twojej stronie lub doradczo z Tobą w rozmowie.' },
      { t: 'Finalizacja', d: 'Spisanie ustaleń, akt notarialny, dokumenty końcowe.' },
    ],
    faq: [
      { q: 'Kiedy warto wziąć prawnika do negocjacji?', a: 'Zawsze, gdy stawka przekracza 200–300 tys. zł lub gdy druga strona jest profesjonalistą (deweloper, fundusz, duże biuro nieruchomości).' },
      { q: 'Czy negocjacje są płatne za godzinę czy ryczałtowo?', a: 'Zależy od skali. Dla pojedynczej transakcji to najczęściej ryczałt. Dla długiego procesu — godziny + ograniczony cap.' },
      { q: 'Czy potrafisz negocjować bez konfrontacji?', a: 'Tak — większość moich klientów chce negocjacji "miękkich", w których nie palimy mostów. To moja specjalność.' },
    ],
    related: ['sprawdzenie-umowy-deweloperskiej', 'audyt-stanu-prawnego', 'porady-prawne'],
  },
  {
    id: 'nieruchomosci-rolne',
    n: '10',
    icon: 'wheat',
    title: 'Nieruchomości rolne',
    short: 'UKUR, KOWR, oświadczenia, sprzedaż gruntów rolnych.',
    audience: ['Rolnicy', 'Inwestorzy w grunty', 'Spadkobiercy gospodarstw'],
    teaser: 'Pomagam sprzedać, kupić i regulować grunty rolne. Znam UKUR od podszewki — od oświadczeń, przez zgody KOWR, po przywracanie do produkcji.',
    intro: 'Ustawa o kształtowaniu ustroju rolnego (UKUR) zmieniła rynek gruntów rolnych w Polsce — i wciąż wiele osób nie rozumie, kiedy potrzeba zgody KOWR, kiedy starczy oświadczenie, a kiedy w ogóle można sprzedać.',
    body: 'Pomagam w transakcjach z gruntami rolnymi: oświadczeniach o samodzielnym prowadzeniu gospodarstwa, wnioskach do KOWR o zgodę na sprzedaż osobie nie-rolnikowi, kwalifikacji gruntu jako rolnego/budowlanego, wyłączeniach z produkcji rolniczej, sprawach o przywrócenie do produkcji.',
    deliverables: [
      'Analiza zastosowania UKUR do konkretnej transakcji',
      'Sporządzenie oświadczeń o prowadzeniu gospodarstwa',
      'Wniosek do KOWR o zgodę na sprzedaż',
      'Wniosek o wyłączenie gruntu z produkcji rolniczej',
      'Sprawy o przywrócenie do produkcji',
    ],
    process: [
      { t: 'Kwalifikacja', d: 'Czy grunt jest rolny w rozumieniu UKUR. Czy potrzeba KOWR.' },
      { t: 'Dokumenty', d: 'Oświadczenia, wnioski, załączniki.' },
      { t: 'Reprezentacja przed KOWR', d: 'Odpowiedzi na wezwania, uzupełnienia.' },
      { t: 'Transakcja', d: 'Asysta przy akcie notarialnym.' },
    ],
    faq: [
      { q: 'Jakie grunty objęte są UKUR?', a: 'Generalnie wszystkie grunty rolne o powierzchni od 30 arów (z wyjątkiem gruntów w mieście). To pułapka, w którą wpada wiele transakcji.' },
      { q: 'Ile trwa zgoda KOWR?', a: 'Ustawowo 2 miesiące, w praktyce 3–6. Pomagam to skrócić poprzez kompletny wniosek od razu.' },
      { q: 'Czy mogę kupić działkę rolną pod budowę domu?', a: 'Tak — ale wymaga to wyłączenia z produkcji rolniczej (jeśli klasa I–III) lub odpowiednich zapisów w MPZP/WZ. Pomagam ocenić ścieżkę.' },
    ],
    related: ['warunki-zabudowy', 'audyt-stanu-prawnego', 'plan-ogolny'],
  },
  {
    id: 'porady-prawne',
    n: '11',
    icon: 'message-square',
    title: 'Porady prawne dotyczące nieruchomości',
    short: 'Bieżąca porada w sprawie nieruchomości — krótka konsultacja, jasna odpowiedź.',
    audience: ['Indywidualni', 'Firmy', 'Wszyscy w punkcie zwrotnym'],
    teaser: 'Krótkie pytanie, krótka odpowiedź. Mailowa porada w sprawach dotyczących nieruchomości, gdy nie potrzeba pełnego audytu.',
    intro: 'Czasem nie potrzebujesz wielkiego raportu — potrzebujesz jasnej odpowiedzi na konkretne pytanie. Czy mogę odstąpić od umowy? Czy mam wpis do KW? Czy ten projekt umowy ma sens? Świadczę poradę prawną w trybie konsultacyjnym, mailowo lub telefonicznie.',
    body: 'Porady mają jasne zasady: opisujesz problem mailowo (z dokumentami), ja odpowiadam pisemnie z konkretną rekomendacją w 2–3 dni robocze. Jeżeli sprawa jest bardziej złożona — proponuję pełną usługę z osobnej kategorii.',
    deliverables: [
      'Pisemna odpowiedź mailowa z odniesieniem do przepisów',
      'Konkretna rekomendacja działania (lub: „nic nie rób")',
      'Wskazanie ryzyk i konsekwencji każdego wyjścia',
      'Opcjonalnie — krótka rozmowa telefoniczna lub online',
    ],
    process: [
      { t: 'Opisz problem', d: 'Mailowo — krótko, z dokumentami w PDF.' },
      { t: 'Wycena', d: 'Odzywam się w 1 dzień roboczy z wyceną i terminem.' },
      { t: 'Odpowiedź', d: 'Pisemna porada, z konkretną rekomendacją.' },
      { t: 'Follow-up', d: 'Mailowy, krótki — jeśli coś wymaga doprecyzowania.' },
    ],
    faq: [
      { q: 'Ile kosztuje porada prawna?', a: 'Wycena indywidualna w zależności od złożoności sprawy. Otrzymujesz ją przed przystąpieniem do pracy.' },
      { q: 'Czy mogę zadać "tylko jedno pytanie"?', a: 'Tak. Najtańsze porady kończą się jedną stroną odpowiedzi — i to wystarczy.' },
      { q: 'Czy z porady da się skorzystać przed sądem?', a: 'Sama porada to nie pismo procesowe — ale jeśli sprawa przechodzi do sporu, mogę kontynuować jako pełnomocnik.' },
    ],
    related: ['audyt-stanu-prawnego', 'sprawdzenie-umowy-deweloperskiej', 'negocjacje'],
  },
];

/* ---------- Cross-cutting FAQ on the FAQ page (grouped) ---------- */
const FAQ_GROUPS = [
  {
    title: 'Współpraca',
    icon: 'handshake',
    items: [
      { q: 'Jak wygląda pierwszy kontakt?', a: 'Piszesz mailem opis sprawy (krótko, kilka zdań). Najpóźniej w ciągu jednego dnia roboczego odzywam się z propozycją usługi, wyceną i terminem. Bez telefonów wstępnych.' },
      { q: 'Czy obsługujesz sprawy z całej Polski?', a: 'Tak. Praktyka prowadzona jest w pełni zdalnie — mailowo i przez bezpieczne przesyłanie dokumentów. Lokalizacja nieruchomości nie ma znaczenia.' },
      { q: 'Czy spotkania w kancelarii są możliwe?', a: 'Tak, ale to wyjątek. Standard to mailowe i telekonferencyjne kontakty. Jeśli sprawa wymaga spotkania, organizuję je w Lublinie, w Warszawie lub online (Google Meet/Teams).' },
      { q: 'W jakim języku pracujesz?', a: 'Po polsku oraz w języku angielskim (dla klientów zagranicznych nabywających nieruchomości w Polsce).' },
    ],
  },
  {
    title: 'Usługi',
    icon: 'briefcase',
    items: [
      { q: 'Co odróżnia audyt od porady prawnej?', a: 'Porada to krótka odpowiedź na konkretne pytanie. Audyt to pełna analiza dokumentów (KW, umowa, prospekt) z pisanym raportem ryzyk i rekomendacji.' },
      { q: 'Czy raporty mają wartość prawną?', a: 'Tak. Każdy raport jest sygnowany przeze mnie jako adwokata wpisanego na listę Lubelskiej Izby Adwokackiej (LUB/ADW/1702). Stanowi profesjonalną opinię prawną.' },
      { q: 'Co jeśli wykryję problem w trakcie audytu?', a: 'W raporcie znajdziesz konkretne rekomendacje — od wskazania klauzul do zmiany, przez propozycje renegocjacji, po rekomendację odstąpienia od transakcji w skrajnych przypadkach.' },
      { q: 'Czy reprezentujesz w sądach?', a: 'Tak — w sprawach związanych z nieruchomościami (zniesienie współwłasności, eksmisja, sprawy z UKUR, skargi do WSA). Zakres pełnomocnictwa ustalamy z góry.' },
    ],
  },
  {
    title: 'Wycena i płatności',
    icon: 'wallet',
    items: [
      { q: 'Jak wyceniasz usługi?', a: 'Każda sprawa wyceniana jest indywidualnie — najczęściej ryczałtowo (znasz całość kosztu od razu), rzadziej godzinowo. Wycenę otrzymujesz mailem zanim rozpocznę pracę.' },
      { q: 'Kiedy płacę?', a: 'Standardowo 100% przed rozpoczęciem prac (przelew na konto kancelarii). Dla powtarzających się klientów możliwe są inne ustalenia.' },
      { q: 'Czy wystawiasz faktury?', a: 'Tak — każdej osobie i firmie, na życzenie. Kancelaria jest podatnikiem VAT.' },
      { q: 'Czy istnieje gwarancja zwrotu?', a: 'Jeżeli po przejęciu sprawy okaże się, że wybraliśmy złą usługę, proponuję bezpłatne przejście na właściwą — z dopłatą lub zwrotem różnicy.' },
    ],
  },
];

/* Featured services shown above the full grid on home (top 4) */
const FEATURED_IDS = ['audyt-stanu-prawnego', 'sprawdzenie-umowy-deweloperskiej', 'warunki-zabudowy', 'bezpieczny-najem'];

/* Quick stats for hero */
const STATS = [
  { n: '10+', l: 'lat w prawie nieruchomości' },
  { n: 'dr', l: 'doktor nauk prawnych' },
  { n: '100%', l: 'spraw z nieruchomości' },
];

/* Trust pillars — replace fabricated client testimonials with true, verifiable statements.
   Slot for real, consented client reviews (name/initial, role, text) stays intentionally
   empty below until genuine opinions are collected. Do NOT fill with invented content. */
const TRUST_PILLARS = [
  {
    icon: 'award',
    title: 'Doświadczenie i tytuł',
    text: 'Ponad 10 lat w prawie nieruchomości i tytuł doktora nauk prawnych. Doświadczenie zdobyte m.in. w kancelarii SPCG, jednej z czołowych w Polsce — dziś w całości do Twojej dyspozycji.',
  },
  {
    icon: 'target',
    title: 'Wyłączna specjalizacja',
    text: 'Zajmuję się wyłącznie nieruchomościami. Nie rozmieniam się na wszystko po trochu — dzięki temu znam ten obszar w szczegółach, także tam, gdzie inni odsyłają do specjalisty.',
  },
  {
    icon: 'handshake',
    title: 'Jasne zasady współpracy',
    text: 'Bezpłatna wstępna analiza Twojej sprawy w 24 h, a przed zleceniem — stała cena i termin. Kontakt prowadzę przede wszystkim mailowo i obsługuję sprawy w całej Polsce.',
  },
];

/* Real, consented client reviews go here (imię/inicjał, rola, treść). Empty until collected. */
const TESTIMONIALS = [
  { name: 'Agnieszka B.', role: 'Opinia w Google', text: 'Z pełnym przekonaniem polecam usługi Pana Mecenasa. To profesjonalista o ogromnej wiedzy prawniczej, który podchodzi do każdej sprawy z zaangażowaniem i indywidualnym podejściem do klienta. Wszystko zostało mi jasno i cierpliwie wytłumaczone, a kontakt był zawsze sprawny i rzeczowy. Dzięki jego pomocy czułam się pewnie i dobrze reprezentowana na każdym etapie sprawy. Widać doświadczenie, rzetelność i wysoką kulturę osobistą. Zdecydowanie polecam każdemu, kto szuka skutecznego i godnego zaufania prawnika.' },
  { name: 'Bogumiła', role: 'Opinia w Google · użytkowanie wieczyste', text: 'Skorzystaliśmy z porady w zakresie przekształcenia użytkowania wieczystego we własność oraz opłaty przekształceniowej. Mecenas wyjaśnił nam zawiłości nowych przepisów i pomógł złożyć wniosek o bonifikatę, co dało nam spore oszczędności. Konsultacja była krótka, konkretna i bardzo rzeczowa. Widać, że jest na bieżąco ze wszystkimi zmianami w prawie.' },
  { name: 'Gosia Krzewicka', role: 'Opinia w Google · sprawa sądowa', text: 'Świetny kontakt z klientem i bieżące informowanie o postępach w sprawie. Nie musieliśmy się dopytywać, co dzieje się w sądzie, bo mecenas zawsze dzwonił pierwszy. Czuliśmy się zaopiekowani.' },
  { name: 'Jarosław Grzegorczyk', role: 'Opinia w Google', text: 'Pełen profesjonalizm w działaniu. Pan Mecenas załatwił powierzoną mu sprawę bardzo sprawnie i w niezwykle eleganckim stylu. Prawnik, któremu zdecydowanie warto zaufać.' },
  { name: 'Luki Pruski', role: 'Opinia w Google · Lokalny przewodnik', text: 'Pan Adwokat Maciej Muzyka to prawdziwy profesjonalista. Niezwykle efektywny i co najważniejsze, bardzo kompetentny w swojej dziedzinie. Podchodzi z dużym zaangażowaniem do sprawy, którą się zajmuje na każdym jej etapie. Współpracę z Panem Mecenasem, jak i Kancelarią oceniam bardzo wysoko i zdecydowanie polecam.' },
  { name: 'Elżbieta Kędziera', role: 'Opinia w Google', text: 'Pan Mecenas to prawnik, który posiada wiedzę, umiejętności i doświadczenie. Bardzo miły i empatyczny. Wszystko wyjaśnia w sposób dostępny dla laika. Polecam.' },
];

Object.assign(window, { NAV_LINKS, SERVICES, FAQ_GROUPS, FEATURED_IDS, STATS, TESTIMONIALS, TRUST_PILLARS });
