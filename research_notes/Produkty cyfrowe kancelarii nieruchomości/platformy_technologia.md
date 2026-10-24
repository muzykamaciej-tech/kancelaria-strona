# Platformy, płatności i technologia do sprzedaży produktów cyfrowych kancelarii (wzory DOCX/PDF, e-booki, generatory, kursy i nagrania webinarów, subskrypcje) ze stroną mecenasodnieruchomosci.pl

Stan badania: 24.10.2026. Ceny netto (bez VAT), o ile nie zaznaczono inaczej. „Niezweryfikowane” oznacza, że liczba pochodzi ze źródła wtórnego (blog, porównywarka, fragment wyszukiwarki), a nie z oficjalnej strony z cennikiem. Przeliczenia kosztów na sprzedaż to moje obliczenia na podstawie cytowanych stawek.

Kontekst techniczny strony (z repozytorium): statyczna strona JSX/React prerenderowana do `dist/`, Vercel serwuje `dist/` bez budowania; `vercel.json` ma `installCommand: "echo 'bez instalacji…'"`, czyli Vercel nie instaluje zależności npm; w `api/` jest jedna funkcja (`google-rating.js`, CommonJS, sam `fetch`, bez bibliotek).

---

## 1. Polskie platformy hostowane do produktów cyfrowych (Easytools/Easycart, Sellizer, Publigo, heyhey i inne)

### Takeaway
W 2026 r. realnie liczą się trzy polskie platformy SaaS z polskimi bramkami i integracjami fakturowymi: **Publigo GO** (WordPress hostowany przez producenta; od 97 zł/mies., bez prowizji producenta, znak wodny PDF od planu Plus, subskrypcje dopiero w Pro), **heyhey** (0% prowizji, BLIK/P24/PayU/Tpay/Stripe i 4 programy fakturowe na każdym planie, subskrypcje na każdym planie, ale limit 5 produktów w Growth) oraz **Easytools** (dawny Easycart; prowizja 3/2/1% + wymagany Stripe, jedyna z deklarowaną „wbudowaną obsługą KSeF”). **Sellizer** nie jest już platformą do sprzedaży produktów cyfrowych: jego cennik dotyczy wysyłki ofert handlowych.

### Cited Findings

**Easytools (dawniej Easycart)**
- Adres easycart.pl/cennik przekierowuje (301) na easy.tools/pl/cennik, czyli marka Easycart działa teraz jako Easytools. Spółka: Easytools sp. z o.o., Warszawa. W structured data strony data założenia to 14.11.2022. Strona pokazuje 67 821 produktów i 1 298 405 transakcji. — [easy.tools (strona główna)](https://www.easy.tools/pl)
- Plany (netto): Starter 99 zł/mies. (1188 zł/rok), Twórca 199 zł/mies. (2388 zł/rok), Profesjonalista 369 zł/mies. (4428 zł/rok). Prowizja od transakcji: 3% / 2% / 1%. „Globalne fakturowanie i podatki”: 2 zł / 1,50 zł / 1 zł za transakcję. Odzyskiwanie porzuconych koszyków: 10% / 5% / 0% (od odzyskanych kwot). Opłaty operatora płatności są osobno. Strona podaje, że źródła sprawdzono 11.09.2026. — [Easytools – cennik](https://www.easy.tools/pl/cennik)
- Konflikt: Kursiarz (ceny sprawdzane 18–22.08.2026) podaje Profesjonalista 399 zł, a oficjalny cennik 369 zł. Inne porównanie wspomina cenę „od 29 zł”. Przyjmuję oficjalny cennik. — [Kursiarz – porównanie 10 platform](https://kursiarz.pl/artykul/porownanie-10-polskich-platform-do-produktow-cyfrowych); [Easytools – cennik](https://www.easy.tools/pl/cennik)
- Limity: kontakty marketingowe 2500 / 5000 / 10 000, nielimitowane produkty, klienci i e-maile, domeny 1 / 3 / bez limitu. Według strony wszystkie funkcje są w każdym płatnym planie: kursy, portal klienta, checkout one-click, produkty cyfrowe, automatyzacje, blokowanie treści (gated content), afiliacja, rabaty, subskrypcje/raty, pay-what-you-want, odzyskiwanie koszyków. — [Easytools – cennik](https://www.easy.tools/pl/cennik)
- Płatności: wymagany Stripe, opcjonalnie Tpay. Metody: karty, BLIK, Apple/Google Pay, szybki przelew, przelewy i płatności odroczone Tpay, raty Alior/Pekao, Klarna, PayPo. Cennik nie wymienia Przelewy24, PayU ani Autopay. — [Easytools – cennik](https://www.easy.tools/pl/cennik)
- Kursiarz: Easytools obsługuje BLIK przez Stripe, Przelewy24 tak, PayU nie, Tpay przez osobną integrację. Subskrypcje działają przez Tpay, a fakturowanie przez Fakturownię (osobna integracja). Kursiarz zauważa też, że **Przelewy24 obsługiwane przez Stripe nie obsługuje płatności cyklicznych**. — [Kursiarz – porównanie 10 platform](https://kursiarz.pl/artykul/porownanie-10-polskich-platform-do-produktow-cyfrowych)
- KSeF: cennik deklaruje „Wbudowaną obsługę KSeF, automatyczną wysyłkę faktur i globalne podatki”. — [Easytools – cennik](https://www.easy.tools/pl/cennik)
- Fakturownia ma natywną integrację z Easytools przez API: każdy zakup trafia do Fakturowni niemal w czasie rzeczywistym, a faktury idą e-mailem do klientów i są w portalu klienta Easytools. — [Fakturownia – integracja Easytools](https://fakturownia.pl/apps/easytools_partner)
- Strona główna: jednostronicowy koszyk z linkiem do udostępniania, płatności one-click dla powracających kupujących, order bumpy, odzyskiwanie koszyków. Jest kreator landing page'y i stron (z AI) oraz Easymail (newslettery, automatyzacje według zakupów). Narzędzia bez natywnej integracji podłącza się przez webhooki, Make i Zapier. Można zacząć od darmowego planu. — [easy.tools](https://www.easy.tools/pl)
- Na oficjalnych stronach nie znalazłem informacji o: znaku wodnym/personalizacji PDF, limitach pobrań, osadzaniu checkoutu jako widgetu/iframe, Omnibus, checkboxie utraty prawa odstąpienia. — [Easytools – cennik](https://www.easy.tools/pl/cennik); [easy.tools](https://www.easy.tools/pl)
- Opinie: Trustpilot 4,6/5 (dane ze strony producenta); recenzent WojciechMatula.com: 4,2/5. — [easy.tools](https://www.easy.tools/pl); [WojciechMatula.com – Easytools opinie](https://wojciechmatula.com/easytools-opinie/)

**Sellizer**
- sellizer.pl/cennik przekierowuje na sellizer.com/pl/cennik. Cennik: Solo 89 zł netto/użytkownika/mies. (71,20 zł rocznie), Team 139 zł (111,20 zł rocznie), Enterprise indywidualnie. Limity to „100 ofert/mies., 100 SMS” (Solo) i 400 ofert (Team). Wymienione funkcje: CRM, follow-upy, API, formularze leadowe, webhooki. Na stronie nie ma żadnej z funkcji sklepu: BLIK/P24, faktur, plików, znaku wodnego, upsellu, subskrypcji ani kursów. — [Sellizer – cennik](https://www.sellizer.com/pl/cennik)
- Sellizer nie występuje w zestawieniu 10 polskich platform do produktów cyfrowych Kursiarza (sierpień–październik 2026). — [Kursiarz – prowizje](https://kursiarz.pl/artykul/ile-wynosi-prowizja-na-platformach-do-kursow)

**Publigo (dawniej WP Idea)**
- Plany GO (hostowane, w abonamencie), netto: Start 97 zł/mies. (87 zł przy płatności rocznej), Plus 177 zł (157 zł), Pro 297 zł (247 zł). Brutto rocznie: 1284,12 / 2317,32 / 3645,72 zł. Licencja BOX (jednorazowa, na własny serwer): Start 997 zł (wartość wywnioskowana z ceny brutto 1226,31 zł), Plus 1797 zł, Pro 2997 zł. Odnowienie wsparcia i aktualizacji jest tańsze o 25% po roku, 37,5% po 2 latach i 50% po 3 latach. Próbny okres: 15 dni. — [Publigo – cennik](https://publigo.pl/cennik/)
- Prowizja: strona nie podaje prowizji Publigo, tylko że prowizje operatorów płatności (np. PayU, Tpay) są dodatkowe. — [Publigo – cennik](https://publigo.pl/cennik/)
- Funkcje według planu GO:
  - **wszystkie plany:** produkty cyfrowe, kursy, bramki (tPay, PayU, Przelewy24, PayPal, PayNow, Stripe, TubaPay, Coinbase), faktury (Fakturownia, inFakt, iFirma, wFirma, Taxe), kody rabatowe, integracje e-mail (GetResponse, MailerLite, ActiveCampaign, ConvertKit, MailChimp), historia cen Omnibus, checkboxy zgód marketingowych;
  - **Plus i Pro:** pakiety, **znak wodny PDF**, quizy i certyfikaty;
  - **tylko Pro:** subskrypcje i raty, upsell/cross-sell/order bump, program partnerski, społeczność, produkty-prezenty.
  — [Publigo – cennik](https://publigo.pl/cennik/)
- Limity wideo są niespójne: tabela podaje 25/50/100 GB, a opis 250/500/1000 GB. Druga tabela na stronie ma inne ceny (77/99/120 zł), prawdopodobnie nieaktualne. Brak informacji o KSeF i o checkboxie utraty prawa odstąpienia. — [Publigo – cennik](https://publigo.pl/cennik/)
- Publigo GO działa na WordPressie hostowanym i aktualizowanym przez producenta. BOX wymaga „PHP co najmniej 8.1 i WordPress co najmniej 6.3” na własnym serwerze oraz własnego hostingu wideo. — [Kursiarz – porównanie](https://kursiarz.pl/artykul/porownanie-10-polskich-platform-do-produktow-cyfrowych); [Publigo – cennik](https://publigo.pl/cennik/)
- Według streszczenia porównań Publigo odnawia subskrypcje w PLN tylko w planie Pro, kartą przez PayU lub Tpay (niezweryfikowane). — [Kursiarz – porównanie](https://kursiarz.pl/artykul/porownanie-10-polskich-platform-do-produktow-cyfrowych); [Narzędzia dla Firm – polska czy zagraniczna platforma](https://narzedziadlafirm.pl/artykul/polska-czy-zagraniczna-platforma-do-kursow-online)

**heyhey**
- Plany (netto): Starter 0 zł, Growth 197 zł/mies. (167 zł rocznie, 2004 zł/rok), Pro 475 zł/mies. (404 zł rocznie, 4848 zł/rok), Enterprise indywidualnie. Na stronie jest informacja Omnibus („Najniższa cena z 30 dni przed obniżką: 197 zł netto / mies.”). — [heyhey – cennik](https://heyhey.pl/cennik)
- Prowizja heyhey: 0% na każdym planie. Limity:
  - Starter: 50 kontaktów, 3 strony, 1 produkt, 5 GB;
  - Growth: 500 kontaktów, 10 stron, 5 produktów, 40 GB;
  - Pro: 2500 kontaktów, produkty bez limitu, 250 GB;
  - Enterprise: do 200 000 kontaktów.
  — [heyhey – cennik](https://heyhey.pl/cennik)
- Na każdym planie: bramki BLIK, Przelewy24, PayU, Tpay, karty (Stripe); faktury przez Fakturownię, iFirmę, wFirmę i inFakt, wystawiane automatycznie po każdej płatności; subskrypcje, płatności cykliczne, okresy próbne, raty; kursy; e-booki i pliki; kupony; wbudowany e-mail marketing (27 wyzwalaczy, double opt-in); API, webhooki, Zapier. Order bump/upsell, afiliacja i własna domena z SSL od planu Growth. Strona nie wspomina o KSeF, znaku wodnym PDF, osadzaniu checkoutu ani checkboxie odstąpienia. — [heyhey – cennik](https://heyhey.pl/cennik)
- Zastrzeżenie: wpisy blogowe heyhey w wynikach wyszukiwania (np. o płatnej społeczności) są materiałami producenta. Kursiarz podaje dla heyhey Pro „5 700 PLN (monthly billing)”, co jest sprzeczne z oficjalnym cennikiem (475 zł/mies.; 5700 zł wygląda na kwotę roczną). — [Kursiarz – prowizje](https://kursiarz.pl/artykul/ile-wynosi-prowizja-na-platformach-do-kursow); [heyhey – cennik](https://heyhey.pl/cennik)

**Inne polskie platformy (zestawienie Kursiarza, ceny netto sprawdzane 18–22.08.2026, aktualizacja 18.10.2026)**
- myVOD: 32 zł za opublikowany kurs, 0%; bramki BLIK/P24/PayU/Tpay; faktury wFirma, inFakt, Fakturownia, Superfaktura; subskrypcje są.
- Zanfia: od 31 USD (tylko rocznie), 0%; faktury Fakturownia, inFakt, iFirma, wFirma.
- Web To Learn: od 125 zł, 0%.
- HashMagnet: od 169 zł, 0%; zbudowany na WooCommerce (hostowany); płatności cykliczne kartą tylko w #LMS Pro.
- IMKER SalesCRM: 349 zł/rok (4% prowizji) do 1999 zł/rok; jedyny w zestawieniu oznaczony jako „KSeF ready”.
- Naffy: bez abonamentu, 6% netto prowizji plus opłaty Stripe (BLIK 1,6% + 1 zł).
- Kursiarz nie opisuje u żadnej platformy: dostarczania plików, znaku wodnego, upsellu, afiliacji ani osadzania na zewnętrznej stronie.
— [Kursiarz – porównanie 10 platform](https://kursiarz.pl/artykul/porownanie-10-polskich-platform-do-produktow-cyfrowych); [Kursiarz – prowizje](https://kursiarz.pl/artykul/ile-wynosi-prowizja-na-platformach-do-kursow)
- Według porównań żadna z platform (Publigo, Web To Learn, Easytools) nie ma wbudowanego kalendarza rezerwacji. — [heyhey – sprzedaż konsultacji i kursów](https://heyhey.pl/blog/sprzedaz-konsultacji-i-kursow-online) (materiał producenta heyhey)

**Wymogi konsumenckie, które platforma musi obsłużyć**
- Art. 38 pkt 13 ustawy o prawach konsumenta: przy treściach cyfrowych niezapisanych na nośniku materialnym prawo odstąpienia nie przysługuje, jeśli świadczenie zaczęło się za wyraźną zgodą konsumenta przed upływem terminu na odstąpienie, a konsument został poinformowany o utracie tego prawa. Według części źródeł przedsiębiorca musi też przekazać potwierdzenie z art. 15 ust. 1–2 / art. 21 ust. 1. Sam zapis w regulaminie nie wystarcza. Potrzebna jest jasna informacja przed zakupem i zgoda (w praktyce checkbox). — [iFirma – umowa o dostarczenie treści cyfrowych](https://www.ifirma.pl/blog/aktualnosci/umowa-o-dostarczeniu-tresci-cyfrowych-jako-element-regulaminu-sprzedazy-produktow-cyfrowych/); [Bezprawnik – zakup treści cyfrowych](https://bezprawnik.pl/zakup-tresci-cyfrowych/); [Dz.U. 2024 poz. 1796 (tekst jednolity)](https://eli.gov.pl/eli/DU/2024/1796/ogl/pol/pdf)
- Spośród platform tylko Publigo wprost deklaruje „historię cen Omnibus”. heyhey pokazuje najniższą cenę z 30 dni na własnym cenniku, ale nie potwierdza tej funkcji dla produktów sprzedawcy. — [Publigo – cennik](https://publigo.pl/cennik/); [heyhey – cennik](https://heyhey.pl/cennik)

### Inferences
- Dla sklepu z wzorami (kilkanaście do kilkudziesięciu SKU) heyhey Growth (5 produktów) jest za mały. Realny plan to heyhey Pro (475 zł/mies.) albo Publigo GO Plus (177 zł/mies., bez limitu produktów i ze znakiem wodnym PDF). Przy subskrypcjach i upsellach Publigo wymaga Pro (297 zł).
- Easytools ma najwyższy koszt zmienny: prowizja 1–3% + ewentualnie 1–2 zł za fakturowanie/podatki + Stripe (BLIK 1,6% + 1 zł). Przy produkcie za 99 zł brutto w planie Starter to ok. 5,6–7,6 zł (5,6–7,6%) na sprzedaży. Jego zaletą jest deklarowany wbudowany KSeF i nowoczesny checkout.
- Wszystkie trzy platformy integruje się ze statyczną stroną przez linki (przyciski „Kup” prowadzące do strony produktu lub koszyka na subdomenie, np. `sklep.mecenasodnieruchomosci.pl`, przy planach z własną domeną). Nie znalazłem potwierdzonego widgetu/iframe checkoutu do osadzenia w JSX.
- Fanbase, Patronite i Zrzutka to narzędzia patronackie i zbiórkowe. Nie nadają się do sprzedaży wzorów z fakturą VAT i prawem konsumenta, więc ich nie analizowałem (wniosek, bez osobnego źródła).

### Gaps
- Znak wodny/personalizacja PDF i limity pobrań w Easytools i heyhey: brak informacji na oficjalnych stronach.
- Widget/iframe checkoutu do osadzenia na zewnętrznej stronie: nie potwierdzono dla żadnej z polskich platform.
- Checkbox zgody na natychmiastowe dostarczenie i utratę prawa odstąpienia: żadna oficjalna strona cennika tego nie opisuje; trzeba sprawdzić w demo lub pomocy technicznej.
- KSeF w Publigo i heyhey: brak deklaracji (zależy od programu fakturowego, zob. sekcja 2).
- Wzory regulaminów: nie znalazłem, czy platformy je dostarczają. Jedno źródło trzecie wspomina, że Easytools „automatycznie generuje dokumenty prawne” (niezweryfikowane).
- Darmowy plan Easytools: brak szczegółów.

---

## 2. KSeF (obowiązkowe e-faktury) a sklep z produktami cyfrowymi

### Takeaway
KSeF 2.0 obowiązuje od 1.02.2026 dużych podatników i od 1.04.2026 pozostałych. Firmy z fakturowaną sprzedażą do 10 tys. zł miesięcznie mają czas do 1.01.2027. **Faktury B2C dla konsumentów nie muszą iść przez KSeF** (to dobrowolne). Faktury dla firm z NIP muszą. Sklep kancelarii potrzebuje więc programu fakturowego z automatyczną wysyłką do KSeF (Fakturownia, inFakt) albo platformy z wbudowanym KSeF (Easytools według deklaracji).

### Cited Findings
- Oficjalny harmonogram MF:
  - 1.02.2026: „KSeF 2.0 dla dużych przedsiębiorców i odbierających faktury”;
  - 1.04.2026: „KSeF 2.0 obowiązkowy dla wszystkich przedsiębiorców oraz wystawiających faktury”, z wyłączeniem „najmniejszych firm, których łączna sprzedaż dokumentowana jest fakturami ≤ 10 tys. zł miesięcznie”;
  - 1.01.2027: „KSeF 2.0 obowiązkowy dla wcześniej zwolnionych przedsiębiorców (do 10 tys. zł miesięcznie)”.
  — [ksef.podatki.gov.pl – etapy wdrożenia](http://ksef.podatki.gov.pl/etapy-wdrozenia-ksef/)
- Duzi podatnicy to ci ze sprzedażą powyżej 200 mln zł (z VAT) w 2025 r. — [Infor – KSeF od 1 lutego 2026](https://ksiegowosc.infor.pl/ksef/6594023,ksef-od-kiedy-efaktury-obowiazkowe-od-1-lutego-2026-r-dla-przedsi.html); [Crowe – KSeF obowiązkowy](https://www.crowe.com/pl/insights/ksef-obowiazkowy-od-2026-r-prezydent-podpisal-ustawe)
- MF: „wystawianie faktur B2C (na rzecz osób prywatnych – konsumentów) w KSeF jest dobrowolne”. E-faktury z KSeF „nie wysyła się mailem”, tylko odbiorca (podatnik z NIP) pobiera je z systemu. — [ksef.podatki.gov.pl – konsumenci i osoby fizyczne](http://ksef.podatki.gov.pl/konsumenci-i-osoby-fizyczne/)
- Według Infor (powołującego się na MF) faktury konsumenckie nie wliczają się do limitu 10 tys. zł. Liczą się tylko faktury, które trzeba wystawić w KSeF. Po przekroczeniu limitu nie ma powrotu do starych zasad. Kary mogą być nakładane dopiero od 1.01.2027. Do końca 2026 r. faktury z kas online można wystawiać bez KSeF. — [Infor – limit 10 tys. zł](https://ksiegowosc.infor.pl/ksef/7538967,limit-10-tys-zl-w-ksef-mozesz-byc-poza-systemem-nawet-az-do-2027-roku.html); [iFirma – 10 tys. zł w JDG](https://www.ifirma.pl/blog/10-tys-zl-w-jdg-od-tego-zalezy-obowiazek-ksef/); [inFakt – odroczenie do 2027](https://www.infakt.pl/blog/?p=82450)
- Komunikat MF z 13.10.2026: „Możliwe utrudnienia w dostępie do faktur w Krajowym Systemie e-Faktur”. — [ksef.podatki.gov.pl](https://ksef.podatki.gov.pl/)
- Fakturownia: KSeF na każdym planie, również darmowym Micro (3 faktury/mies.); API na każdym planie; integracja ze sklepem na każdym planie. Ceny planów płatnych nie były widoczne na stronie (20% zniżki z kodem, ceny przy abonamencie rocznym). — [Fakturownia – cennik](https://fakturownia.pl/cennik)
- Fakturownia domyślnie automatycznie wysyła każdą fakturę sprzedaży do KSeF (można przełączyć na ręczne). Ma walidację przed wysyłką i tryb offline (Offline24). E-mail do klienta wychodzi dopiero po nadaniu numeru KSeF. Integracje zewnętrzne (sklepy) muszą obsługiwać numery KSeF. — [Fakturownia – integracja z KSeF](https://fakturownia.pl/integracja-z-ksef); [Fakturownia – KSeF](https://fakturownia.pl/ksef)
- inFakt: REST/JSON API z webhookami (m.in. status faktury w KSeF). API pozwala wysłać jedną lub wiele faktur do KSeF, sprawdzić status, pobrać XML i importować faktury. KSeF działa w inFakcie od 1.02.2026 i jest bezpłatny. — [inFakt – API](https://infakt.pl/developers/); [inFakt pomoc – API KSeF](https://pomoc.infakt.pl/hc/pl/articles/16165489514898-Co-oferuje-integracja-z-API-KSeF-w-inFakcie); [inFakt – KSeF](https://infakt.pl/ksef)
- Wtyczka WooCommerce dla inFaktu ma wysyłkę do KSeF tylko w wersji Pro. — [WordPress.org – Invoicing Integration for inFakt and WooCommerce](https://cs.wordpress.org/plugins/invoicing-integration-for-infakt-and-woocommerce/)

### Inferences
- Dla sklepu: faktury dla konsumentów (bez NIP) wystarczy wysyłać jako PDF e-mailem, poza KSeF. Faktury dla firm (z NIP podanym w koszyku) muszą trafić do KSeF, a klient pobiera je z KSeF. PDF w e-mailu to tylko wizualizacja. Platforma lub skrypt musi więc pobierać NIP i przekazywać go do Fakturowni/inFaktu, które wysyłają do KSeF.
- Adwokat świadczący usługi prawnicze nie może co do zasady korzystać ze zwolnienia podmiotowego z VAT (art. 113 ust. 13 ustawy o VAT). Jest więc czynnym podatnikiem VAT, a ulga „do 10 tys. zł miesięcznie” zależy od łącznej sprzedaży B2B fakturowanej przez kancelarię, nie tylko od sklepu. To do weryfikacji przez researchera podatkowego (nie sprawdzałem tekstu ustawy).

### Gaps
- Nie sprawdziłem oficjalnego tekstu ustawy co do faktur dla nabywców zagranicznych ani faktur wystawianych na rzecz Merchant of Record (zob. sekcja 3).
- Ceny płatnych planów Fakturowni: niewidoczne na stronie.

---

## 3. Opcje międzynarodowe: Shopify, WooCommerce, Gumroad, Lemon Squeezy, Paddle, Payhip, Stripe; Merchant of Record

### Takeaway
Zagraniczne platformy MoR (Gumroad 10% + 0,50 USD, Lemon Squeezy i Paddle 5% + 0,50 USD, Stripe Managed Payments) zdejmują z sprzedawcy VAT OSS, ale są drogie przy niskich cenach, nie dają polskiej faktury VAT z NIP w KSeF i wykluczają usługi prawne, profesjonalne lub z udziałem człowieka. Dla kancelarii sprzedającej głównie w Polsce MoR to zły wybór. Rozsądne opcje zagraniczne to **Stripe (Checkout/Payment Links) jako bramka**, która obsługuje BLIK (także cykliczny) i P24, oraz ewentualnie Shopify.

### Cited Findings

**Stripe (Polska, standardowy cennik)**
- Karty EOG standardowe 1,5% + 1,00 zł; premium 1,9% + 1,00 zł; karty UK 2,5% + 1 zł; międzynarodowe 3,25% + 1 zł (+2% za przewalutowanie). **BLIK 1,6% + 1,00 zł; Przelewy24 1,9% + 1,00 zł.**
- Stripe Billing: 0,7% wolumenu (pay as you go). Stripe Tax: 0,5% za transakcję (no-code). Stripe Invoicing: 0,4% za opłaconą fakturę. Payment Links/Checkout bez dodatkowej opłaty (własna domena: 10 USD/mies.).
- Brak opłat stałych i za założenie konta. Spór (dispute): 90 zł.
— [Stripe – cennik PL](https://stripe.com/pl/pricing)
- Stripe BLIK: metoda tylko w PLN, dla klientów z Polski. Obsługuje Checkout, Payment Links, Elements (bez Express Checkout Element), Subscriptions i Invoicing. **„Recurring payments: Yes”**: Stripe obsługuje zapisanie BLIK do płatności off-session (reusable BLIK, `setup_future_usage=off_session`). Zwroty pełne i częściowe są dostępne. Spory BLIK: 12 dni na dowody. — [Stripe Docs – BLIK](https://docs.stripe.com/payments/blik)
- Stripe ma osadzalny „Buy button” generowany z Payment Link (kod do wklejenia na stronę). — [Stripe Docs – buy button](https://docs.stripe.com/no-code/buy-button)
- Starsze lub niezweryfikowane stawki Stripe na blogach porównawczych (np. „1,4% + 0,25 EUR”, „BLIK 1,4%”) są nieaktualne wobec oficjalnego cennika 1,5% + 1 zł i BLIK 1,6% + 1 zł. — [Freenance – bramki 2026](https://freenance.io/przedsiebiorczosc/bramki-platnosci-2026-ranking-stripe-payu-przelewy24-tpay-bluemedia-porownanie/); [Stripe – cennik PL](https://stripe.com/pl/pricing)

**Stripe Managed Payments (MoR Stripe)**
- To rozwiązanie MoR Stripe do produktów cyfrowych: VAT/GST/sales tax w ponad 80 krajach, fraudy, spory, wsparcie klienta. Działa tylko z Checkout i Payment Links (bez Elements, bez Connect). — [Stripe Docs – Managed Payments](https://docs.stripe.com/payments/managed-payments)
- Polska jest na liście obsługiwanych krajów sprzedawcy. Obsługiwane kategorie: oprogramowanie, e-booki, treści cyfrowe, kursy online, „Digital other news or documents – downloadable” (txcd_10503000). **Wykluczone:** „Professional services, such as consulting…” oraz produkty z udziałem człowieka („If your service involves human intervention (such as live 1-1 coaching), it doesn’t qualify”). Stripe może zwracać płatności do 60 dni od zakupu i stosuje okresy odstąpienia. Dostęp wymaga przeglądu kwalifikowalności. — [Stripe Docs – Managed Payments eligibility](https://docs.stripe.com/payments/managed-payments/eligibility)
- Status i opłata: według źródeł trzecich produkt jest w „private preview” lub ograniczonym udostępnianiu, a opłata wynosi 3,5% ponad standardowe opłaty Stripe (niezweryfikowane, źródła komercyjne konkurencji). — [Dodo Payments – Stripe Managed Payments fees](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained); [Makerkit – Polar vs Stripe 2026](https://makerkit.dev/blog/saas/polar-vs-stripe)

**Lemon Squeezy**
- Opłata: 5% + 50¢ za transakcję, bez opłat miesięcznych. Mogą być dodatkowe opłaty poza USA (bez kwot). Wypłaty dwa razy w miesiącu (przelew lub PayPal). LS jest MoR („We take on tax collection and calculation liability”). Na stronie jest baner „2026 Update: Lemon Squeezy + Stripe Managed Payments”, a stopka mówi „Sold through Link, LLC f/k/a Lemon Squeezy LLC”. BLIK i P24 nie są wymienione. — [Lemon Squeezy – pricing](https://www.lemonsqueezy.com/pricing)
- Zakazane: „Services of any kind (including … consulting …)” oraz usługi regulowane: „bankruptcy, legal, …”. Dozwolone są m.in. „eBooks”, „PDFs”. — [Lemon Squeezy – prohibited products](https://docs.lemonsqueezy.com/help/getting-started/prohibited-products)

**Paddle**
- 5% + 50¢ za transakcję. Produkty poniżej 10 USD wymagają indywidualnej wyceny. Bez opłat miesięcznych. MoR (podatki, spory, wsparcie). Metody płatności nie są wymienione z nazwy. — [Paddle – pricing](https://www.paddle.com/pricing)

**Gumroad**
- 10% + 0,50 USD przy sprzedaży bezpośredniej; 30% przy sprzedaży przez marketplace Discover; bez abonamentu. Od 1.01.2025 Gumroad jest MoR („handles ALL your tax obligations”). — [Gumroad – pricing](https://gumroad.com/pricing)

**Payhip**
- Free 0 USD + 5%; Plus 29 USD/mies. + 2%; Pro 99 USD/mies. + 0%; do tego opłaty Stripe/PayPal. Payhip „automatically collects, reports and remits digital EU/UK VAT”, ale nie nazywa siebie MoR. Płatności: karty i PayPal (brak BLIK/P24 na stronie). — [Payhip – pricing](https://payhip.com/pricing)

**Shopify (Polska)**
- Basic 109 zł/mies. (79 zł rocznie), Grow 319 zł (239 zł), Advanced 1630 zł (1220 zł), Plus od 2100 EUR. Prowizja przy zewnętrznej bramce: 2% / 1% / 0,6% / 0,2%. Shopify Payments (karty online): 1,95% + 1,20 zł (Basic) do 1,45% + 1,20 zł (Plus). Strona wymienia osobne stawki dla BLIK, Klarna i Przelewy24, ale nie potwierdza wprost dostępności Shopify Payments w Polsce („tylko w wybranych państwach”). Strona nie mówi nic o produktach cyfrowych. — [Shopify – cennik PL](https://www.shopify.com/pl/pricing)
- Stawki Tpay nie dotyczą sklepów integrowanych przez Shopify, Shoper i IdoSell. — [Tpay – oferta](https://tpay.com/oferta)

**WooCommerce i WordPress**
- Wtyczki do faktur z KSeF są często płatne (np. inFakt dla WooCommerce: KSeF w wersji Pro). HashMagnet to przykład platformy kursowej na WooCommerce, hostowanej przez producenta. — [WordPress.org – inFakt for WooCommerce](https://cs.wordpress.org/plugins/invoicing-integration-for-infakt-and-woocommerce/); [Kursiarz – porównanie](https://kursiarz.pl/artykul/porownanie-10-polskich-platform-do-produktow-cyfrowych)

### Inferences
- **MoR dla polskiego adwokata:**
  - MoR jest sprzedawcą wobec klienta, więc kupujący dostaje fakturę lub paragon od zagranicznego podmiotu, nie polską fakturę VAT kancelarii w KSeF.
  - Polska firma-kupujący musiałaby rozliczać import usług (odwrotne obciążenie), co jest uciążliwe dla małych firm i zwolnionych z VAT.
  - Kancelaria uzyskuje przychód od MoR (sprzedaż B2B usługi na rzecz zagranicznego podmiotu) i musi go zaksięgować oraz zafakturować na MoR.
  - Wszystko to wymaga potwierdzenia przez doradcę podatkowego. Nie znalazłem źródeł polskich opisujących ten przypadek.
- Przy produkcie za 99 zł opłata MoR (5% + 0,50 USD) to ok. 7 zł (przy kursie orientacyjnie ok. 4 zł/USD), czyli 3–5 razy więcej niż polska bramka (ok. 1–2 zł). Gumroad to ok. 12 zł.
- Ryzyko odrzucenia: LS zakazuje usług prawnych, a Stripe MP wyklucza usługi profesjonalne i produkty z udziałem człowieka. Gotowe wzory i e-booki mieszczą się w zasadach. Generator z weryfikacją przez adwokata albo „pakiet wzór + konsultacja” już nie.
- Shopify i WooCommerce wymagają osobnego sklepu (subdomena) i aplikacji do pobrań cyfrowych. WooCommerce wymaga też serwera PHP/WordPress z aktualizacjami i ochroną, co jest sprzeczne z obecną architekturą (statyczny `dist/` na Vercel) i zwiększa utrzymanie.

### Gaps
- Aplikacje Shopify do produktów cyfrowych (Digital Downloads, znak wodny PDF) i ich ceny: niezweryfikowane.
- Oficjalny status (GA/preview) i opłata Stripe Managed Payments: niepotwierdzone na oficjalnej stronie cennika.
- Paddle AUP (polityka produktów zakazanych): strona /legal/aup zwróciła 404, więc nie zweryfikowałem, czy Paddle przyjmuje wzory prawne.
- Faktury MoR dla nabywców z NIP i sposób księgowania wypłat MoR u polskiego adwokata: brak źródeł.

---

## 4. Bramki płatności bezpośrednio (Przelewy24, PayU, Tpay, Autopay, Stripe): opłaty 2026, płatności cykliczne, onboarding

### Takeaway
Bezpośrednie polskie bramki kosztują ok. 1,1–1,6% + 0,30–0,41 zł za transakcję (P24 promocyjnie 1,29% + 0,30 zł, Tpay Starter 1,59% + 0,39/0,41 zł, PayU od 1,1% + 0,30 zł). To wyraźnie mniej niż Stripe (1,5–1,9% + 1 zł) przy tanich produktach. Stripe wygrywa łatwością integracji (Checkout, Payment Links, Billing, BLIK cykliczny). Tpay ma jawnie wycenione cykliczne BLIK i karty.

### Cited Findings

**Przelewy24**
- Oferta dla nowych klientów: 1,29% + 0,30 zł (BLIK, przelewy, Visa/Mastercard, Google/Apple Pay); abonament 0 zł; zwroty 0 zł; 4 wypłaty w miesiącu bez opłat, potem 0,99 zł. Aktywacja 0 zł (59 zł zwracane po 10 transakcjach w pierwszych 2 miesiącach). „Standardowy cennik” pokazuje obok 1,9%, bez opisu, która stawka jest bieżąca. PayPo: 1,9% / 1,5% + 0,30 zł. Raty od 0% + 0,30 zł. Brak dat obowiązywania. — [Przelewy24 – bramka płatnicza](https://www.przelewy24.pl/bramka-platnicza)
- Wzór OWU (wrzesień 2024): przelewy, BLIK i karty 1,29% + 30 gr. **Płatności cykliczne kartą są wyceniane indywidualnie.** — [Przelewy24 – wzór OWU 09.2024](https://www.przelewy24.pl/storage/app/media/dokumenty/wzor_owu_wrzesien_2024.pdf)
- Program Polska Bezgotówkowa: 0% za karty przez 12 mies. lub do 50 tys. zł obrotu dla nowych e-sprzedawców. — [Przelewy24 – Polska Bezgotówkowa](https://www.przelewy24.pl/oferta/polska-bezgotowkowa)
- Blog P24 informuje, że stawki można negocjować. — [Przelewy24 – ile kosztują płatności online](https://www.przelewy24.pl/blog/ile-kosztuja-platnosci-online)

**Tpay** (tabela na stronie, bez daty obowiązywania, stopka ©2026)

| Pozycja | Starter | Business |
|---|---|---|
| Opłata miesięczna | 0 zł | 99 zł (tylko w miesiącach z transakcjami) |
| Aktywacja | 99 zł | 1 zł |
| Przelew/pay-by-link | 1,59% + 0,39 zł | 0,99% |
| BLIK | 1,59% + 0,41 zł | 0,99% + 0,02 zł |
| Karty, Apple/Google Pay | 1,59% + 0,39 zł | 0,99% |
| **BLIK cykliczny** | 1,59% + 0,41 zł | 0,99% + 0,02 zł |
| Zwrot (niekartowy) | 1 zł | 0 zł |
| Wypłata | 2 zł | 0 zł |
| Chargeback | 120 zł | 120 zł |

Strona deklaruje „bezpieczne płatności cykliczne kartą” w każdym pakiecie. — [Tpay – oferta](https://tpay.com/oferta)
- Osobny PDF Tpay „Pakiety serwisowe … od 1 stycznia 2026” różni się od strony oferty (wcześniejsza wersja). Blog Tpay: Business opłaca się od ok. 100 zamówień miesięcznie przy koszyku 100 zł. — [Tpay – pakiety 2026 (PDF)](https://tpay.com/user/assets/files_for_download/pakiety-serwisowe-2026.pdf); [Tpay – porównanie operatorów](https://tpay.com/blog/porownanie-operatorow-platnosci-internetowych)

**PayU** (niezweryfikowane: oficjalne PDF zwracały 403, dane z fragmentów wyszukiwarki)
- Oferta handlowa: przelewy online, BLIK, karty (Google/Apple Pay), raty, płatności odroczone „z prowizją od 1,1% + 0,30 PLN za transakcję”; jednorazowa rejestracja 29 zł. — [PayU – oferta handlowa](https://poland.payu.com/oferta-handlowa/)
- Cennik PL 01.2026: BLIK 1,1% + 0,30 zł (standard), zwroty i wypłaty bezpłatne. Tabela kosztów: koszt obsługi transakcji 0,20 zł (od 16.10.2025) i opłata systemowa BLIK 0,14–0,19% (wersje sprzeczne, tabela od 08.05.2026). — [PayU – Price list PL 01.2026 (PDF)](https://poland.payu.com/wp-content/uploads/sites/14/2026/02/Price_list_PL4_01_2026.pdf); [PayU – tabela kosztów 04.2026 (PDF)](https://poland.payu.com/wp-content/uploads/sites/14/2026/04/Tabela-kosztow-i-prowizji.pdf)
- Freenance (blog): PayU karty 1,6% + 0,20 zł, BLIK 0,99%, wypłata D+1 (niezweryfikowane, sprzeczne z powyższym). — [Freenance – Stripe vs PayU 2026](https://freenance.io/przedsiebiorczosc/stripe-vs-payu-2026-co-wybrac-dla-firmy-koszty-prowizje-integracja/)

**Autopay** (niezweryfikowane, strony niespójne)
- Plan Standard: 1,19% (bez minimalnej opłaty miesięcznej), aktywacja od 49 zł. Plan abonamentowy Starter: 0% do 5500 zł obrotu, potem 1,1%, minimum 29,99 zł/mies. Działalność nierejestrowana: 1,19% + 0,34 zł, aktywacja 199 zł. — [Autopay – płatności online](https://autopay.pl/oferta/platnosci-online); [Autopay – oferta abonamentowa](https://lp.autopay.pl/oferta-abonamentowa/); [Autopay – działalność nierejestrowana](https://autopay.pl/rozwiazania/platnosci-dla-dzialalnosci-nierejestrowanej)

**Porównanie wtórne**
- Freenance: dla mikrosklepów do 30 tys. zł obrotu miesięcznie Tpay zwykle wychodzi taniej. P24 z abonamentem 50 zł (BLIK 0,79%) wygrywa powyżej ok. 50 tys. zł. P24 ma ok. 140 metod płatności, Tpay 50–60 (niezweryfikowane). — [Freenance – P24 vs Tpay 2026](https://freenance.io/przedsiebiorczosc/przelewy24-vs-tpay-2026-porownanie-bramka-platnosci-prowizje-rejestracja/)

**Przeliczenie opłaty za jedną sprzedaż za 99 zł brutto** (moje obliczenia na stawkach powyżej)

| Bramka i stawka | Opłata |
|---|---|
| P24 1,29% + 0,30 zł | 1,58 zł |
| Tpay Starter BLIK | 1,98 zł |
| Tpay Business BLIK (+99 zł/mies.) | 1,00 zł |
| PayU 1,1% + 0,30 zł | 1,39 zł |
| Stripe BLIK | 2,58 zł |
| Stripe karta EOG | 2,49 zł |
| Stripe P24 | 2,88 zł |

Przy produkcie za 29 zł: P24 0,67 zł, a Stripe BLIK 1,46 zł (5%).

### Inferences
- Płatności cykliczne (subskrypcja bazy wzorów lub aktualizacji):
  - Stripe Billing (+0,7%) z kartą i BLIK cyklicznym to najprostsza ścieżka techniczna;
  - Tpay jawnie wycenia BLIK cykliczny;
  - P24 wycenia karty cykliczne indywidualnie;
  - P24 przez Stripe nie obsługuje cyklu (Kursiarz).
- Onboarding kancelarii: wszystkie bramki wymagają KYC (NIP, rachunek, beneficjent). Działalność gospodarcza adwokata (JDG) jest zwykłym przedsiębiorcą. Nie znalazłem ograniczeń dla usług prawnych w polskich bramkach. Trzeba jednak sprawdzić regulaminy co do „usług doradczych”.

### Gaps
- Pełny oficjalny cennik PayU i Autopay (PDF/strony zwracały 403 lub są niespójne).
- Polityka bramek wobec kancelarii i usług prawnych (branże podwyższonego ryzyka): nie znaleziono.
- Abonament P24 „50 zł / BLIK 0,79%” pochodzi tylko z bloga, niezweryfikowane.

---

## 5. Wariant „headless” na Vercel: Stripe/P24 + webhook + prywatne pliki + API faktur + e-mail; biblioteki DOCX do generatora

### Takeaway
Architektura jest wykonalna przy obecnym stosie: Stripe Checkout lub P24, webhook w `api/`, prywatny Vercel Blob z pobieraniem przez funkcję, Fakturownia/inFakt API z KSeF i Resend do e-maili. Koszty stałe są niskie (Vercel Pro 20 USD/mies., Resend 0–20 USD, Blob grosze). Ryzyka dotyczą utrzymania: obsługa zwrotów, NIP/KSeF, zgód konsumenckich, Omnibus, bezpieczeństwa linków i webhooków. Do generatora umów najlepiej pasuje **docxtemplater** (rdzeń MIT/GPLv3 z pętlami i warunkami za darmo) lub **docx** (MIT). Carbone Cloud ma darmowe 100 dokumentów/mies. **Docassemble** (MIT) wymaga osobnego serwera.

### Cited Findings

**Vercel**
- Plan Hobby jest darmowy, ale „the Hobby plan restricts users to non-commercial, personal use only”. Pro: 20 USD za miejsce dewelopera/mies. Maksymalny czas funkcji: Hobby 300 s, Pro 300 s (do 800 s). Hobby obejmuje m.in. 1 mln wywołań funkcji. — [Vercel – Hobby plan](https://vercel.com/docs/plans/hobby)
- Vercel Blob jest na wszystkich planach. Hobby ma w cenie 1 GB, 10 000 prostych i 2000 zaawansowanych operacji oraz 10 GB transferu. Na Pro płaci się według zużycia (przykład dla iad1: przechowywanie 0,023 USD/GB-mies., transfer 0,05 USD/GB, operacje zaawansowane 5 USD/1 mln). Są magazyny prywatne i publiczne. Prywatny plik serwuje funkcja (pobiera blob i strumieniuje do przeglądarki). Plik może mieć do 5 TB. Pliki powyżej 512 MB nie są cache'owane. — [Vercel Blob – usage and pricing](https://vercel.com/docs/vercel-blob/usage-and-pricing)

**E-maile transakcyjne**
- Resend: Free 3000 e-maili/mies. (maksymalnie 100 dziennie, 3 domeny); Pro 20 USD/mies. za 50 000 lub 35 USD za 100 000; nadwyżka 0,90 USD/1000. Strona nie potwierdza regionu danych w UE („Multi-region”). — [Resend – pricing](https://resend.com/pricing)

**Faktury przez API**
- Fakturownia: API na każdym planie, KSeF automatycznie. inFakt: API z webhookami statusu KSeF. — [Fakturownia – cennik](https://fakturownia.pl/cennik); [Fakturownia – integracja z KSeF](https://fakturownia.pl/integracja-z-ksef); [inFakt – API](https://infakt.pl/developers/)
- wFirma także udostępnia API. — [wFirma – API](https://pomoc.wfirma.pl/-api-interfejs-dla-programistow)

**Biblioteki i silniki DOCX**
- docxtemplater: rdzeń open source na licencji MIT lub GPLv3, z podmianą {tagów}, warunkami, pętlami i zmianą delimitatorów. Moduły płatne (Image, HTML, Table, Subtemplate, Footnotes i in.):
  - 1 moduł: 500 EUR/rok;
  - PRO (4 moduły): 1250 EUR/rok;
  - Enterprise (wszystkie, obraz Docker z HTTP API): 3000 EUR/rok;
  - Premium: 9000 EUR/rok.
  — [docxtemplater – pricing](https://docxtemplater.com/pricing/)
- docx (dolanmiu): biblioteka JS/TS na licencji MIT, „Works for Node and on the Browser”, deklaratywne API, dodatki m.in. znaki wodne. Ok. 6 tys. gwiazdek na GitHubie. — [GitHub – dolanmiu/docx](https://github.com/dolanmiu/docx)
- Carbone Cloud (szablon DOCX/ODT na PDF/DOCX):
  - Free: 100 dokumentów/mies.;
  - Essential: 29 EUR/mies. (1000 dokumentów);
  - Essential Plus: 95 EUR (5000);
  - Advanced: 159 EUR (20 000);
  - On-Premise Community: 0 EUR na „Carbone Community License” (strona nie nazywa jej licencją OSI);
  - Fit: 1500 EUR/rok.
  — [Carbone – pricing](https://carbone.io/pricing.html)
- Docassemble: kod MIT. Wywiady pisze się w YAML z Markdownem i Pythonem. Wyjście PDF, RTF lub DOCX. Obsługuje wiele języków i API dla aplikacji zewnętrznych. Strona nie mówi o płatnościach. — [docassemble.org](https://docassemble.org/)

**Bezpieczeństwo pobrań na platformach**
- Easytools ma blokowanie treści (gated content) i portal klienta. Publigo ma znak wodny PDF (Plus/Pro). — [Easytools – cennik](https://www.easy.tools/pl/cennik); [Publigo – cennik](https://publigo.pl/cennik/)

### Inferences
- **Zgodność z repozytorium:** `vercel.json` ma pusty `installCommand`, więc funkcje w `api/` nie mogą dziś importować pakietów npm (np. `stripe`, `@vercel/blob`, `docxtemplater`). Są dwie drogi:
  - wołać REST API przez `fetch` i weryfikować podpis webhooka Stripe przez `node:crypto` (Stripe, Fakturownia, Resend i Blob mają REST API);
  - zbundlować funkcje esbuildem (jest w devDependencies) do plików bez zależności.
  Każda zmiana `api/` podlega też zasadzie przebudowy i commitu `dist/` z CLAUDE.md.
- **Plan Vercel:** jeśli strona działa na Hobby, sprzedaż produktów (a w zasadzie już strona kancelarii) to użycie komercyjne. Docelowo potrzebny jest Pro (20 USD/mies.). Obecnego planu konta nie sprawdzałem.
- **Minimalny przepływ:**
  1. Przycisk „Kup” (Stripe Payment Link/Checkout z BLIK, P24 i kartą, polem NIP lub `tax_id_collection` i własnym polem zgody na art. 38 pkt 13).
  2. Webhook `checkout.session.completed` w `api/`.
  3. Funkcja tworzy fakturę w Fakturowni (z NIP trafia do KSeF; bez NIP PDF dla konsumenta).
  4. Funkcja generuje jednorazowy, czasowy token pobrania.
  5. Funkcja wysyła e-mail przez Resend z linkiem do `api/download?token=…`, który strumieniuje plik z prywatnego Blob.
  6. Opcjonalnie dodaje kontakt do MailerLite (zgoda marketingowa osobno).
- **Szacunek pracy (bez źródła, ocena własna):** MVP dla pojedynczych plików to ok. 3–6 dni pracy dewelopera. Generator DOCX z kwestionariuszem w React to kolejne 3–10 dni na każdy typ umowy, zależnie od logiki. Utrzymanie to kilka godzin miesięcznie: zmiany API, monitoring webhooków, zwroty, aktualizacja treści po zmianach prawa.
- **Ryzyka:** duplikaty webhooków (potrzebna idempotencja i jakaś baza, np. Vercel KV/Postgres z Marketplace albo metadane w Stripe), wyciek linków (tokeny czasowe, limit pobrań, znak wodny z danymi kupującego), RODO (dane kupujących w Stripe, Fakturowni i Resend to powierzenia), obowiązki konsumenckie (checkbox, potwierdzenie na trwałym nośniku, Omnibus przy promocjach), błędy faktur KSeF (Fakturownia wysyła e-mail dopiero po numerze KSeF).
- **Generator umowy:** docxtemplater lub docx działają w funkcji Node (krótki czas, mała pamięć). Szablon DOCX przygotowany w Wordzie z {polami}, {#warunkami} i {#pętlami} wystarcza bez płatnych modułów. Docassemble daje gotowy silnik wywiadów, ale wymaga osobnego serwera (Python/Docker) poza Vercel. To ocena na podstawie wiedzy ogólnej; strona docassemble nie opisuje wymagań wdrożenia.

### Gaps
- Dokładne ceny regionu Blob w UE (fra1) i ceny Vercel KV/Postgres: niesprawdzone.
- Ceny planów Fakturowni z API: niewidoczne na cenniku.
- Region danych Resend w UE: niepotwierdzony; Postmark nie był sprawdzany.

---

## 6. SaaS do automatyzacji dokumentów (sprzedaż interaktywnych dokumentów po polsku)

### Takeaway
Nie znalazłem polskiego SaaS „white-label”, który pozwalałby adwokatowi sprzedawać po polsku własne interaktywne dokumenty z płatnością za dokument. **Gavel (dawniej Documate)** ma płatności Stripe i osadzanie na stronie dopiero od planu Pro (290 USD/mies.) i nie deklaruje języka polskiego. **Legito** ma API i marketplace szablonów, ale interfejs nie ma polskiego. Polscy konkurenci (wonder.legal, captain.legal, darmowe generatory) to gotowe serwisy, nie narzędzia dla kancelarii.

### Cited Findings
- Gavel:
  - Lite 83 USD/mies. (100 sesji);
  - Standard 165 USD w tabeli, ale 210 USD w kartach cenowych (sprzeczność);
  - Pro 290 USD/mies. (600 sesji, „Collect Payments via Stripe”, „Embed on third-party websites”, „Custom Domain/White-Label”);
  - Scale od 417 USD (rozliczenie roczne, API).
  Strona nie wspomina o językach. — [Gavel – pricing](https://www.gavel.io/pricing)
- Legito: REST API, webhooki, Developers Hub, serwer MCP, asystent AI „Kedy”, Legito Marketplace („Ready-made automated templates from local lawyers”). Języki serwisu: angielski, niemiecki, hiszpański, francuski, czeski, słowacki (bez polskiego). Strona z cennikiem nie pokazała kwot. Jest 30-dniowy trial. — [Legito – pricing](https://www.legito.com/pricing)
- Polskie serwisy z wzorami i generatorami:
  - wonder.legal/pl: ok. 170 dokumentów redagowanych przez prawników;
  - captain.legal/pl: ponad 200 szablonów Word/PDF bez rejestracji;
  - rankomat.pl: darmowy generator umowy kupna-sprzedaży auta;
  - fakturowo.pl: darmowe wzory pism.
  Fragmenty wyszukiwania nie podają modeli płatności. — [wonder.legal PL](https://www.wonder.legal/pl/); [captain.legal PL](https://www.captain.legal/pl/); [rankomat – generator umowy](https://rankomat.pl/samochod/umowa-kupna-sprzedazy-samochodu/generator); [fakturowo – wzory pism](https://www.fakturowo.pl/blog/wzory-pism.pdf)
- wFirma ma generator umów dla własnych klientów (biura rachunkowe, firmy), nie do sprzedaży. — [wFirma – generator umów](https://pomoc.wfirma.pl/-generator-umow-z-klientami)
- Carbone i docxtemplater to silniki do własnej integracji, nie gotowe sklepy (zob. sekcja 5). — [Carbone – pricing](https://carbone.io/pricing.html); [docxtemplater – pricing](https://docxtemplater.com/pricing/)

### Inferences
- Gavel Pro to ok. 290 USD/mies. (ok. 1100–1200 zł przy orientacyjnym kursie), czyli więcej niż cały stos headless. Płatność idzie przez Stripe, bez polskiej faktury i KSeF. Opłacalne tylko przy dużej liczbie sesji.
- Dla polskiego rynku własny generator (sekcja 5) daje polski interfejs, BLIK/P24, fakturę KSeF i pełną kontrolę nad treścią, przy niższym koszcie stałym.

### Gaps
- Ceny Legito (strona nie pokazała kwot) i obsługa polskiego w szablonach Legito (UI bez PL).
- PandaDoc i Formstack nie były sprawdzane (to narzędzia do ofert i e-podpisu, mniej pasujące do sprzedaży B2C).
- „Lawly” i inne polskie legaltechy dla kancelarii: brak wyników.

---

## 7. Generatory wspierane przez AI (LLM) na stronie kancelarii

### Takeaway
Technicznie i kosztowo to tanie: sesja asystenta to ok. 0,07 USD na Claude Sonnet 5.5 i poniżej 0,01 USD na Haiku 5.5. Główne ryzyka są prawne i etyczne:
- zasady NRA (AI tylko pomocniczo, tajemnica, osobista weryfikacja);
- AI Act art. 50 od 2.08.2026 (informacja, że użytkownik rozmawia z AI);
- RODO;
- ryzyko błędów merytorycznych;
- dokument „szyty” przez AI lub adwokata może przestać być „treścią cyfrową” i stać się usługą prawną (prawo odstąpienia, kwalifikowalność w MoR).
Bezpieczniejszy wariant to AI jako pomoc w wypełnianiu kwestionariusza, a dokument z zatwierdzonego szablonu (docxtemplater). Nie należy dawać swobodnie generowanej treści umowy.

### Cited Findings
- Ceny Claude API (USD/1 mln tokenów):
  - Opus 5.5: 4 wejście, 20 wyjście, cache hit 0,20;
  - Sonnet 5.5: 2 / 10, cache 0,10;
  - Haiku 5.5: 0,10 / 0,50 (dla promptów do 100 tys. tokenów).
  Batch API daje 50% zniżki. Domyślnie routing jest globalny. `inference_geo: "us"` (tylko USA) kosztuje 1,1x. Regionalne endpointy u partnerów (Bedrock/Vertex) mają 10% premii. — [Anthropic – pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- NRA zmieniła Zbiór Zasad Etyki Adwokackiej. Adwokat może korzystać z narzędzi technologicznych, w tym AI, „tylko pomocniczo”, bez naruszania tajemnicy, bez delegowania osądu i bez rezygnacji z osobistej weryfikacji wyników. Na prośbę klienta należy ujawnić, jakie narzędzia są używane. KRRP wydała 22 rekomendacje dla radców. — [Rzeczpospolita – NRA zmieniła kodeks etyki](https://www.rp.pl/zawody-prawnicze/art44636171-nra-zmienila-kodeks-etyki-adwokat-moze-korzystac-z-ai-ale-tylko-pomocniczo); [Prawo.pl – adwokat a AI, zmiany w zasadach etyki](https://www.prawo.pl/prawnicy-sady/adwokat-ai-zmiany-w-zasadach-etyki,1546668.html)
- AI Act art. 50: od 2.08.2026 systemy do bezpośredniej interakcji z ludźmi muszą informować, że użytkownik rozmawia z AI (chyba że to oczywiste). Generatory treści syntetycznych muszą je oznaczać w formacie maszynowym. Kary do 15 mln EUR lub 3% obrotu (dla MŚP niższa kwota). Wytyczne KE z 20.07.2026 potwierdziły termin. Wymogi dla systemów wysokiego ryzyka z załącznika III przesunięto na 2.12.2027. — [Prawo.pl – AI Act od sierpnia 2026](https://www.prawo.pl/biznes/ai-act-jakie-obowiazki-maja-firmy-od-sierpnia-2026,1550271.html); [Forsal – obowiązki AI Act nieprzesunięte](https://forsal.pl/biznes/technologie/artykuly/11274547,firmy-maja-czas-do-2-sierpnia-te-obowiazki-ai-act-nie-zostaly-przesuniete.html); [iFirma – AI Act od 2.08.2026](https://www.ifirma.pl/blog/ai-act-od-2-sierpnia-2026-r-co-zmieniaja-nowe-obowiazki-dotyczace-sztucznej-inteligencji/)
- Stripe Managed Payments wyklucza produkty z „human intervention”. Gotowy dokument z w pełni automatycznego generatora mieści się w „fully automated digital product”. — [Stripe Docs – Managed Payments eligibility](https://docs.stripe.com/payments/managed-payments/eligibility)

### Inferences
- **Koszt (moje obliczenia):** sesja z 20 tys. tokenów wejścia (instrukcja, szablon, rozmowa) i 3 tys. wyjścia kosztuje:
  - Sonnet 5.5: ok. 0,07 USD;
  - Opus 5.5: ok. 0,14 USD;
  - Haiku 5.5: ok. 0,004 USD.
  1000 sesji miesięcznie na Sonnecie to ok. 70 USD, a z cache'owaniem stałej instrukcji mniej. Do tego koszt funkcji Vercel (minimalny).
- **Dane:** API pierwszej strony Anthropic oferuje routing globalny lub „us”, bez wariantu tylko-UE na API bezpośrednim (wniosek z cennika). Dane klientów (opis sprawy, nieruchomości, KW) to dane osobowe i potencjalnie tajemnica adwokacka. Potrzebne są: umowa powierzenia (DPA), minimalizacja (bez numerów KW i nazwisk w promptach), informacja w polityce prywatności, retencja logów i ocena transferu poza EOG.
- **Model produktu:** AI zbiera i porządkuje fakty, tłumaczy pojęcia i wybiera wariant klauzuli z biblioteki zatwierdzonej przez adwokata. Dokument powstaje z szablonu. Zgodnie z zasadami kancelarii każdy przepis i sygnatura w szablonie musi być zweryfikowany w LEX/Legalis/CBOSA. Swobodne pisanie umowy przez LLM zwiększa ryzyko halucynacji, odpowiedzialności zawodowej i zarzutu świadczenia porady bez nadzoru.

### Gaps
- Zero data retention, czas przechowywania danych przez API i dostępność regionów UE (Bedrock/Vertex Frankfurt) dla Claude: niesprawdzone w tym badaniu.
- Pełny tekst uchwały NRA (sygnatura uchwały, data wejścia w życie): opieram się na relacjach prasowych.
- Kwalifikacja „dokumentu z generatora” jako treści cyfrowej czy usługi (prawo odstąpienia): to temat dla researchera prawnego.

---

## 8. E-mail marketing i lead magnety popularne w Polsce

### Takeaway
MailerLite przemianował plany (Free do 250 subskrybentów, Comfort od 12 USD, Power od 25 USD) i ma natywną integrację z Publigo. GetResponse (polska firma) nie ma darmowego planu i kosztuje od ok. 19 USD za 1000 kontaktów. Brevo ma darmowe 300 e-maili dziennie. Kit (ConvertKit) jest drogi (Creator 39 USD). heyhey i Easytools mają wbudowany e-mail marketing, więc przy tych platformach osobne narzędzie może być zbędne.

### Cited Findings
- MailerLite (oficjalny cennik):
  - plany Free, Comfort, Power, Enterprise;
  - Free: do 250 subskrybentów, 2500 e-maili/mies., 3 automatyzacje, 1 strona i 1 landing; przy ponad 250 aktywnych subskrybentach wysyłka jest blokowana;
  - Comfort od 12 USD/mies. (10x limit subskrybentów w e-mailach, 50 automatyzacji);
  - Power od 25 USD (e-maile bez limitu, fair use);
  - rocznie 10% taniej;
  - aktywne produkty cyfrowe i rezerwacje: 1 / 5 / bez limitu.
  Ceny dla konkretnych progów nie były widoczne. — [MailerLite – pricing](https://www.mailerlite.com/pricing)
- GetResponse (źródła trzecie, niezweryfikowane):
  - brak darmowego planu (sierpień 2026), 14-dniowy trial;
  - Starter od 19 USD/mies. za 1000 kontaktów;
  - Marketer ok. 54–59 USD;
  - Creator ok. 62–69 USD (webinary i kursy);
  - rocznie 18% taniej.
  — [CostBench – GetResponse free plan](https://www.costbench.com/software/email-marketing/getresponse/free-plan/); [Style Factory – GetResponse review](https://www.stylefactoryproductions.com/blog/getresponse-review); [Dupple – GetResponse](https://dupple.com/reviews/getresponse)
- Brevo (źródła trzecie): Free 300 e-maili dziennie (do 100 tys. kontaktów, branding Brevo). Starter od 9 USD lub 7 EUR (dane z 6.07.2026). Plan Business zastąpiono planami Standard (od 18 USD za 5 tys. e-maili) i Pro (od 499 USD). Ceny zależą od liczby wysyłek. — [La Fabrique du Net – tarifs Brevo](https://www.lafabriquedunet.fr/email-marketing/articles/tarifs-brevo/); [SendX – Brevo pricing 2026](https://www.sendx.io/blog/brevo-pricing-plans-costs-alternatives-2026)
- Kit (źródła trzecie): Newsletter darmowy (do 10 tys. subskrybentów według części źródeł, do 1000 według innych). Creator 39 USD/mies. za 1000 (po podwyżce z 9.2025). Pro 79 USD. Opłata od produktów cyfrowych jest sprzeczna: 3,5% + 0,30 USD albo prowizja Stripe + 0,6%. — [Mailmeteor – Kit pricing](https://mailmeteor.com/blog/kit-pricing); [Email Vendor Selection – Kit pricing 2026](https://www.emailvendorselection.com/kit-pricing/)
- Integracje platform: Publigo z GetResponse, MailerLite, ActiveCampaign, ConvertKit i MailChimp. heyhey ma wbudowany e-mail marketing oraz API, webhooki i Zapier. Easytools ma Easymail oraz webhooki, Make i Zapier. — [Publigo – cennik](https://publigo.pl/cennik/); [heyhey – cennik](https://heyhey.pl/cennik); [easy.tools](https://www.easy.tools/pl)

### Inferences
- Dla kancelarii z lead magnetem (np. darmowa checklista „Zakup działki – 10 pułapek”) i newsletterem: MailerLite Comfort (od 12 USD) lub wbudowany mailing platformy. GetResponse daje polskie wsparcie i webinary (Creator), co przydaje się przy sprzedaży nagrań webinarów.
- Marketing nie może wykorzystywać danych klientów kancelarii bez zgody (zasada z CLAUDE.md), a zgody marketingowe muszą być osobne od zgody na zakup.

### Gaps
- Oficjalne ceny GetResponse PL (strona /cennik zwróciła 404), Brevo i Kit (403): dane tylko ze źródeł trzecich.
- Polski interfejs i wsparcie MailerLite, Brevo i Kit: niesprawdzone.

---

## 9. Rekomendowany stack: (a) szybki start z niskim utrzymaniem, (b) skalowalny z generatorami i subskrypcjami

### Takeaway
**(a)** Hostowana polska platforma bez prowizji (Publigo GO Plus albo heyhey Pro) z P24 lub Tpay, Fakturownią z automatycznym KSeF i przyciskami „Kup” na stronie prowadzącymi do sklepu na subdomenie. Koszt to ok. 177–475 zł netto/mies. + Fakturownia i ok. 1,3–2% + 0,30–0,41 zł za sprzedaż. **(b)** Headless na Vercel: Stripe Checkout/Billing (BLIK, także cykliczny, P24, karty) albo P24/Tpay, webhook w `api/`, prywatny Blob, Fakturownia lub inFakt API z KSeF, Resend, MailerLite, generator z docxtemplater, opcjonalnie AI na Sonnet 5.5. Koszt stały ok. 20–60 USD/mies. + program fakturowy, a za sprzedaż ok. 1,5–1,9% + 1 zł (Stripe) lub 1,29% + 0,30 zł (P24), plus 0,7% przy subskrypcjach Stripe.

### Cited Findings (podstawy kosztów)
- Publigo GO Plus: 177 zł netto/mies. (157 zł rocznie), znak wodny PDF i pakiety, bez prowizji producenta. Pro (subskrypcje, upsell, afiliacja): 297 zł (247 zł). — [Publigo – cennik](https://publigo.pl/cennik/)
- heyhey: Growth 197 zł (limit 5 produktów), Pro 475 zł; 0% prowizji; P24, PayU, Tpay, BLIK i Stripe oraz 4 programy fakturowe na każdym planie. — [heyhey – cennik](https://heyhey.pl/cennik)
- Easytools: Starter 99 zł + 3% + do 2 zł za transakcję (fakturowanie i podatki) + opłaty Stripe; deklarowany KSeF. — [Easytools – cennik](https://www.easy.tools/pl/cennik)
- P24 1,29% + 0,30 zł (oferta dla nowych). Tpay Starter 1,59% + 0,39/0,41 zł albo Business 0,99% + 99 zł/mies. — [Przelewy24 – bramka](https://www.przelewy24.pl/bramka-platnicza); [Tpay – oferta](https://tpay.com/oferta)
- Stripe: BLIK 1,6% + 1 zł, P24 1,9% + 1 zł, karta EOG 1,5% + 1 zł, Billing 0,7%; BLIK cykliczny dostępny. — [Stripe – cennik PL](https://stripe.com/pl/pricing); [Stripe Docs – BLIK](https://docs.stripe.com/payments/blik)
- Vercel Pro 20 USD/mies. (Hobby tylko niekomercyjnie). Blob płatny według zużycia. Resend Free 3000/mies. lub Pro 20 USD. — [Vercel – Hobby](https://vercel.com/docs/plans/hobby); [Vercel Blob – pricing](https://vercel.com/docs/vercel-blob/usage-and-pricing); [Resend – pricing](https://resend.com/pricing)
- Fakturownia: KSeF i API na każdym planie (Micro 0 zł do 3 faktur/mies.). inFakt: KSeF bezpłatny, API z webhookami. — [Fakturownia – cennik](https://fakturownia.pl/cennik); [inFakt – KSeF](https://infakt.pl/ksef)
- docxtemplater: rdzeń darmowy (MIT/GPLv3), moduł 500 EUR/rok. Carbone Cloud Free 100 dokumentów/mies., Essential 29 EUR. — [docxtemplater – pricing](https://docxtemplater.com/pricing/); [Carbone – pricing](https://carbone.io/pricing.html)
- MailerLite Comfort od 12 USD/mies. — [MailerLite – pricing](https://www.mailerlite.com/pricing)
- Claude Sonnet 5.5: 2 / 10 USD za 1 mln tokenów; Haiku 5.5: 0,10 / 0,50. — [Anthropic – pricing](https://platform.claude.com/docs/en/about-claude/pricing)

### Inferences (rekomendacja i szacunki, obliczenia własne)

**(a) Szybki start, niskie utrzymanie (rekomendacja: Publigo GO Plus; alternatywa: heyhey Pro)**

Skład:
- Publigo GO Plus (177 zł netto/mies., 157 zł rocznie): kursy i nagrania webinarów, pliki, znak wodny PDF, pakiety, kody rabatowe, historia cen Omnibus, Fakturownia i GetResponse/MailerLite.
- Bramka P24 lub Tpay.
- Fakturownia z automatycznym KSeF.
- Na stronie: sekcja „Wzory i poradniki” w JSX z kartami produktów i `<a href>` do stron produktów Publigo (np. na `sklep.mecenasodnieruchomosci.pl`). Linki są zwykłymi `<a>`, więc robot je widzi (zgodnie z zasadami nawigacji w CLAUDE.md).
- Do sprawdzenia w trialu (15 dni): checkbox art. 38 pkt 13, potwierdzenie na trwałym nośniku, NIP w koszyku do KSeF przez Fakturownię.

Koszt:
- stały ok. 157–177 zł netto/mies. + Fakturownia (cena nieznana) + ewentualnie MailerLite (od 12 USD) lub GetResponse;
- za sprzedaż: P24 ok. 1,58 zł przy 99 zł, ok. 0,67 zł przy 29 zł;
- przy 30 sprzedażach po 99 zł miesięcznie: ok. 47 zł opłat bramki + abonament.

Kiedy heyhey Pro (475 zł): gdy od razu potrzebne są subskrypcje (heyhey ma je na każdym planie; Publigo dopiero w Pro, 297 zł). Wtedy różnica 297 zł vs 475 zł przemawia za Publigo Pro, chyba że ważniejsze są wbudowany e-mail i brak WordPressa.

Kiedy Easytools: gdy priorytetem jest wbudowany KSeF i nowoczesny checkout one-click, kosztem ok. 5,6–7,6% od sprzedaży w planie Starter.

**(b) Wersja skalowalna (generatory, subskrypcje, AI)**

Etap 1, sklep plików:
- Stripe Checkout lub Payment Links (BLIK, P24, karta; NIP przez `tax_id_collection` albo pole własne; checkbox art. 38 pkt 13 jako custom field lub własna strona przed Checkoutem);
- `api/stripe-webhook.js` (podpis przez `node:crypto`, idempotencja);
- Fakturownia API (KSeF) lub inFakt API (webhooki statusu KSeF);
- prywatny Vercel Blob i `api/download.js` z tokenem czasowym i limitem pobrań;
- Resend do potwierdzenia na trwałym nośniku (PDF faktury/potwierdzenia + link);
- MailerLite do lead magnetów.
Przy niskich cenach rozważyć P24 lub Tpay bezpośrednio zamiast Stripe (różnica ok. 0,8–1 zł na transakcji).

Etap 2, generator umów: kwestionariusz w React (istniejący stos JSX), szablony DOCX przygotowane przez adwokata, docxtemplater (rdzeń darmowy) lub docx w funkcji, PDF ewentualnie przez Carbone Cloud (Free 100 lub Essential 29 EUR). Płatność przed pobraniem gotowego pliku.

Etap 3, subskrypcje: Stripe Billing (+0,7%), karta i BLIK cykliczny, np. „Pakiet wzorów nieruchomościowych + aktualizacje”.

Etap 4, opcjonalnie AI: asystent kwestionariusza na Claude Sonnet 5.5 lub Haiku 5.5 z informacją z art. 50 AI Act, bez danych z KW i nazwisk w promptach, z treścią dokumentu wyłącznie z zatwierdzonych klauzul.

Kursy i nagrania webinarów: albo zostają na platformie z wariantu (a) (hosting wideo), albo trafiają do zewnętrznego hostingu wideo z prywatnym odtwarzaczem. Hostingu wideo w wariancie (b) nie badałem.

Koszt:
- stały: Vercel Pro 20 USD (jeśli konto nie jest już na Pro), Resend 0–20 USD, Blob poniżej 1 USD przy kilku GB, MailerLite od 12 USD, Fakturownia lub inFakt (cena planu z API nieznana), Carbone 0–29 EUR, Claude ok. 0,07 USD na sesję na Sonnecie;
- razem ok. 35–85 USD/mies. + program fakturowy;
- za sprzedaż: Stripe BLIK 2,58 zł przy 99 zł; P24 bezpośrednio 1,58 zł; subskrypcja +0,7%;
- jednorazowo: ok. 1–3 tygodnie pracy dewelopera na etapy 1–2 (ocena własna) i stałe utrzymanie.

**Ostrzeżenia dla obu wariantów**
- Polska faktura VAT z NIP i KSeF wyklucza w praktyce zagraniczne MoR (Gumroad, LS, Paddle, Stripe MP) jako główny kanał.
- Vercel Hobby nie dopuszcza użycia komercyjnego.
- Każdy szablon i e-book trzeba przed publikacją zweryfikować w LEX/Legalis/CBOSA (zasada kancelarii).

### Gaps
- Brak ceny planów Fakturowni z API, więc całkowity koszt stały obu wariantów jest niepełny.
- Nie przetestowano w praktyce koszyków Publigo, heyhey i Easytools pod kątem checkboxa art. 38 pkt 13, pola NIP i KSeF. Do sprawdzenia w trialach: Publigo (15 dni), heyhey (darmowy plan Starter), Easytools (darmowy plan).
- Kursy walut USD/EUR na PLN przyjęto orientacyjnie (ok. 4 zł/USD), bez źródła.
