/* faq-data.jsx — full FAQ: 7 sections, 30 questions (first person).
   Sections A & B are shown as the homepage excerpt; full set lives on /faq/.
   Loaded after services-data.jsx. */

const FAQ_SECTIONS = [
  {
    id: 'jak-to-dziala', letter: 'A', title: 'Jak to działa',
    items: [
      { q: 'Jak wygląda pierwszy kontakt?', a: 'Opisujesz sprawę w formularzu — krótko, kilka zdań, w razie potrzeby z dokumentami w PDF. W ciągu 24 h roboczych odpisuję, co trzeba w niej zrobić — audyt, pismo czy sprawa sądowa — i od razu wysyłam ofertę z ceną i terminem.' },
      { q: 'Jak szybko dostanę odpowiedź?', a: 'Wstępną analizę i ofertę wysyłam w ciągu 24 h roboczych, często tego samego dnia. Jeśli sprawa jest pilna, zaznacz to w opisie — postaram się odpisać szybciej.' },
      { q: 'Co dzieje się po wysłaniu formularza?', a: 'Czytam Twój opis i przesłane dokumenty. Odpisuję, co trzeba w sprawie zrobić — np. szczegółowy audyt, pismo albo sprawa sądowa — i w tym samym mailu wysyłam ofertę z zakresem, ceną i terminem. Decyzję podejmujesz Ty, bez presji.' },
      { q: 'Czy wysłanie sprawy do mnie do czegoś zobowiązuje?', a: 'Nie. Wstępna analiza i oferta są bezpłatne. Do akceptacji oferty nic nie płacisz; zakres i koszt potwierdzamy na piśmie dopiero wtedy, gdy zdecydujesz się na współpracę.' },
    ],
  },
  {
    id: 'bezplatna-analiza', letter: 'B', title: 'Bezpłatna wstępna analiza',
    items: [
      { q: 'Co dokładnie obejmuje bezpłatna analiza?', a: 'Odpowiedź, co w Twojej sprawie trzeba zrobić — np. szczegółowy audyt, pismo albo sprawa sądowa — i ofertę z ceną i terminem. To nie jest opinia prawna ani pełne sprawdzenie dokumentów. Szczegółowa analiza, pismo czy prowadzenie sprawy to zakres oferty.' },
      { q: 'Dlaczego nie podajesz cen na stronie?', a: 'Bo cena zależy od sprawy: od nieruchomości, dokumentów i tego, co trzeba zrobić. Podaję ją w ofercie, którą wysyłam razem z bezpłatną wstępną analizą — konkretną kwotę i termin, zanim cokolwiek zlecisz.' },
      { q: 'Co dostaję w odpowiedzi?', a: 'Jeden mail: co trzeba zrobić w Twojej sprawie i dlaczego, a do tego ofertę z zakresem, ceną (najczęściej ryczałtową) i terminem. Do akceptacji oferty nic nie płacisz.' },
    ],
  },
  {
    id: 'bezpieczenstwo-poufnosc', letter: 'C', title: 'Bezpieczeństwo, poufność i zaufanie',
    items: [
      { q: 'Czy moje dokumenty i dane są bezpieczne?', a: 'Tak. Dokumenty przesyłasz bezpiecznym kanałem, a całość korespondencji i akt traktuję poufnie. Nie udostępniam ich nikomu i nie wykorzystuję poza Twoją sprawą.' },
      { q: 'Co obejmuje tajemnica adwokacka?', a: 'Wszystko, czego dowiaduję się w związku z Twoją sprawą — od pierwszego maila. Jako adwokata wiąże mnie tajemnica zawodowa, której nie mogę uchylić; chroni Cię ona także wtedy, gdy ostatecznie nie dojdzie do współpracy.' },
      { q: 'Jak chronisz moje dane osobowe (RODO)?', a: 'Przetwarzam je wyłącznie w celu obsługi Twojej sprawy, zgodnie z polityką prywatności kancelarii. Masz prawo wglądu, poprawienia i usunięcia danych.' },
      { q: 'Czy jesteś ubezpieczony?', a: 'Tak. Jako adwokat posiadam obowiązkowe ubezpieczenie odpowiedzialności cywilnej za czynności zawodowe. To Twoje dodatkowe zabezpieczenie.' },
      { q: 'Skąd mam pewność, że jesteś prawdziwym adwokatem?', a: 'Jestem wpisany na listę adwokatów Okręgowej Rady Adwokackiej w Lublinie (LUB/ADW/1702). Wpis można zweryfikować w publicznym rejestrze adwokatów. Każdy raport sygnuję imiennie jako adwokat.' },
    ],
  },
  {
    id: 'komunikacja-obsluga', letter: 'D', title: 'Komunikacja i obsługa w trakcie sprawy',
    items: [
      { q: 'Jak będziemy się kontaktować w trakcie sprawy?', a: 'Przede wszystkim mailowo — to daje nam jeden, uporządkowany ślad ustaleń, do którego zawsze możesz wrócić. Gdy sprawa wymaga rozmowy, umawiamy telekonferencję (Google Meet/Teams) lub, wyjątkowo, spotkanie w Lublinie.' },
      { q: 'Czy będę informowany o postępach?', a: 'Tak. Informuję Cię o każdym istotnym etapie i o tym, co dzieje się dalej — nie musisz dopytywać. Jeśli pojawia się coś, co wymaga Twojej decyzji, wyjaśniam opcje i ich konsekwencje.' },
      { q: 'Czy mogę zadawać pytania w trakcie?', a: 'Oczywiście. Pytania są częścią usługi, nie dodatkiem. Wolę, żebyś rozumiał, co podpisujesz i dlaczego, niż żebyś działał w niepewności.' },
      { q: 'Co, jeśli czegoś nie rozumiem w raporcie?', a: 'Piszę prostym językiem i unikam żargonu, a po przekazaniu raportu omawiam go z Tobą i odpowiadam na pytania. Masz dostać narzędzie do decyzji, a nie dokument do odłożenia na półkę.' },
      { q: 'Jak szybko odpisujesz na maile w trakcie sprawy?', a: 'Zwykle tego samego lub następnego dnia roboczego. Jeśli odpowiedź wymaga czasu (np. analizy dokumentów), potwierdzam odbiór i podaję, kiedy się odezwę.' },
    ],
  },
  {
    id: 'audyty-raporty', letter: 'E', title: 'Audyty, raporty i ich wartość',
    items: [
      { q: 'Czym różni się audyt od porady prawnej?', a: 'Porada to krótka odpowiedź na konkretne pytanie. Audyt to pełna analiza dokumentów (KW, umowa, prospekt) zakończona pisemnym raportem ryzyk i rekomendacji.' },
      { q: 'Jak wygląda raport?', a: 'Konkretnie i czytelnie: ryzyka oznaczam w systemie czerwone / żółte / zielone, opisuję ich konsekwencje i podaję, co z każdym zrobić. Raport kończy się planem dalszych działań.' },
      { q: 'Czy raport ma wartość prawną?', a: 'Tak. To profesjonalna opinia prawna sygnowana przeze mnie jako adwokata. Możesz się na nią powołać, pokazać ją drugiej stronie, pośrednikowi czy bankowi.' },
      { q: 'Co, jeśli w trakcie audytu wykryjesz problem?', a: 'Dostajesz konkretne rekomendacje — od wskazania klauzul do zmiany, przez propozycje renegocjacji, po rekomendację odstąpienia od transakcji w skrajnych przypadkach. Zawsze tłumaczę, jakie masz opcje.' },
    ],
  },
  {
    id: 'zakres-reprezentacja', letter: 'F', title: 'Zakres, reprezentacja i zasięg',
    items: [
      { q: 'Czy prowadzisz sprawy z całej Polski?', a: 'Tak. Praktykę prowadzę w pełni zdalnie — mailowo i przez bezpieczne przesyłanie dokumentów. Lokalizacja nieruchomości nie ma znaczenia.' },
      { q: 'Czy reprezentujesz w sądach i urzędach?', a: 'Tak, w sprawach związanych z nieruchomościami (m.in. zniesienie współwłasności, eksmisja, zasiedzenie, sprawy z UKUR, skargi do WSA, postępowania administracyjne). Zakres pełnomocnictwa ustalamy z góry.' },
      { q: 'W jakim języku pracujesz?', a: 'Po polsku oraz po angielsku — dla klientów zagranicznych nabywających nieruchomości w Polsce.' },
      { q: 'Czy zajmujesz się czymś poza nieruchomościami?', a: 'Nie. Zajmuję się wyłącznie prawem nieruchomości i procesem inwestycyjno-budowlanym. To świadomy wybór — wąska specjalizacja oznacza, że znam te sprawy naprawdę dobrze.' },
      { q: 'Czy spotkania w kancelarii są możliwe?', a: 'Tak, ale to wyjątek. Standardem jest kontakt mailowy i telekonferencyjny; gdy sprawa wymaga spotkania, organizuję je w Lublinie, w Warszawie (mam tam lokal na spotkania) lub online.' },
    ],
  },
  {
    id: 'wycena-rozliczenia', letter: 'G', title: 'Wycena i rozliczenia',
    items: [
      { q: 'Jak ustalasz koszt?', a: 'Cenę podaję w ofercie, którą wysyłam razem z bezpłatną wstępną analizą — najczęściej ryczałtową, więc znasz całość kosztu z góry, zanim cokolwiek zlecisz.' },
      { q: 'Kiedy płacę?', a: 'Standardowo po akceptacji oferty, przed rozpoczęciem prac (przelew na konto kancelarii). Dla stałych klientów możliwe są inne ustalenia.' },
      { q: 'Czy wystawiasz faktury?', a: 'Tak — osobom i firmom, na życzenie. Kancelaria jest podatnikiem VAT.' },
      { q: 'Co, jeśli po analizie okaże się, że potrzebuję innej usługi?', a: 'Jeśli wspólnie dobierzemy lepiej dopasowaną usługę, przechodzimy na nią z rozliczeniem różnicy — dopłatą lub zwrotem. Nie zarabiam na pomyłce w doborze.' },
    ],
  },
];

/* Homepage excerpt = sections A + B flattened */
const FAQ_HOME = FAQ_SECTIONS.filter((s) => s.letter === 'A' || s.letter === 'B')
  .flatMap((s) => s.items);

Object.assign(window, { FAQ_SECTIONS, FAQ_HOME });
