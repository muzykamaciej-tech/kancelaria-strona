/* build-checklists.mjs — listy kontrolne PDF do pobrania bez rejestracji (assets/pobierz/*.pdf).
   Uruchamiany ręcznie, NIE w buildzie: `node scripts/build-checklists.mjs`, potem `npm run build` (assets → dist/).
   Treść WYŁĄCZNIE z opublikowanych, zweryfikowanych wpisów (pole `zrodla` każdej listy); każdy punkt z podstawą
   prawną tak jak we wpisie, „stan prawny na” jak we wpisie. Zmieniasz wpis → popraw listę i wygeneruj PDF ponownie.
   Styl jak w Design/design.md (PDF-y w jasnym motywie): Lora, błękit #0E53A5, slate, logo assets/logo.png.
   PDF: tekst (nie obraz), tytuł w metadanych (<title>), język pl (<html lang>, PDF tagowany), zakładki z nagłówków;
   bez dzielenia wyrazów i ligatur, żeby skopiowany tekst (i cytat w asystencie AI) miał całe wyrazy.
   Rozmiar pliku podany na stronie (window.DOWNLOADS w pages.jsx): skrypt na końcu porównuje go z wygenerowanym. */
import fs from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'pobierz');
const ORIGIN = 'https://www.mecenasodnieruchomosci.pl';
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BRAND = 'Kancelaria Nieruchomości adw. dr Maciej Muzyka';

/* Format punktu: { t: 'tekst z **pogrubieniem**', b: 'podstawa prawna' }. Sekcja: { h, items, ordered? } */
const LISTS = [
  {
    file: 'lista-wz-przed-2027.pdf',
    title: 'Warunki zabudowy przed 1.01.2027 – lista kontrolna',
    stan: '18.11.2026',
    zrodla: [{ slug: 'warunki-zabudowy-od-2027', title: 'Warunki zabudowy 2027: od 1 stycznia tylko z tytułem prawnym do działki. Co zrobić do 31.12.2026?' }],
    intro: 'Wniosek o warunki zabudowy (WZ), który **wpłynie do urzędu najpóźniej 31.12.2026 r.**, urząd rozpatrzy bez wymogu prawa do działki (art. 12 ustawy z 30.04.2026 r.). Od 1.01.2027 r. WZ dostanie tylko wnioskodawca, który ma prawo do dysponowania nieruchomością na cele budowlane i złoży o tym oświadczenie pod rygorem odpowiedzialności karnej (art. 63 ust. 1a–1b u.p.z.p.).',
    sections: [
      { h: 'Czy wniosek z grudnia ma sens?', items: [
        { t: '**Plan ogólny gminy wszedł w życie.** Z wniosku złożonego od 1.09.2026 r. WZ wydaje się tylko w takiej gminie. Samo uchwalenie planu przez radę nie wystarcza.', b: 'art. 59 ust. 3 ustawy z 7.07.2023 r.' },
        { t: '**Działka leży w obszarze uzupełnienia zabudowy** wyznaczonym w planie ogólnym.', b: 'art. 61 ust. 1 pkt 1a u.p.z.p.' },
        { t: '**Plan wejdzie w życie dopiero 1.01.2027 r. (np. Lublin)?** Jeżeli urząd rozstrzygnie po wejściu planu w życie, wniosek z grudnia może dać WZ bez prawa do działki; jeżeli wcześniej – odmówi. Wyroków o planie ogólnym jeszcze nie ma (ocena, nie pewność).', b: 'art. 59 ust. 3 ustawy z 7.07.2023 r.; § 3 uchwały nr 725/XXII/2026 Rady Miasta Lublin' },
      ] },
      { h: 'Wniosek i terminy', items: [
        { t: '**Wniosek wpłynie do urzędu najpóźniej w czwartek 31.12.2026 r.** Liczy się dzień doręczenia urzędowi, nie data nadania na poczcie; przy wniosku elektronicznym – dzień wystawienia dowodu otrzymania.', b: 'art. 61 § 3 i 3a k.p.a.' },
        { t: '**Złóż wniosek do piątku 18.12.2026 r.**, a najlepiej wcześniej. 24–26 grudnia to dni wolne od pracy, 27 grudnia to niedziela; po świętach zostają cztery dni robocze.', b: 'art. 1 pkt 1 lit. ka, l i m ustawy o dniach wolnych od pracy' },
        { t: '**Wniosek jest kompletny.** Braki wskazane w wezwaniu (także w 2027 r.) usuń w terminie z wezwania, nie krótszym niż 7 dni. Inaczej urząd pozostawi wniosek bez rozpoznania, a nowy wniosek będzie wymagał prawa do działki.', b: 'art. 64 § 2 k.p.a.' },
        { t: '**Opłata skarbowa 598 zł**, jeżeli nie jesteś właścicielem ani użytkownikiem wieczystym działki.', b: 'załącznik do ustawy o opłacie skarbowej, cz. I ust. 8' },
        { t: '**Sprawa z wniosku z 2026 r. trwa?** Nic nie zmieniaj, odpowiadaj na wezwania w terminie. Dawny art. 63 stosuje się aż do decyzji ostatecznej, także wydanej w 2027 r.', b: 'art. 12 ustawy z 30.04.2026 r.' },
      ] },
      { h: 'Kupujesz działkę', items: [
        { t: '**Złóż wniosek o WZ na siebie**, jeżeli zdążysz przed świętami. WZ nie rodzi praw do terenu, więc zgoda sprzedającego nie jest potrzebna. Urząd doręczy mu odpis decyzji – lepiej go uprzedzić.', b: 'art. 63 ust. 1–2 u.p.z.p. (w brzmieniu do 31.12.2026 r.)' },
        { t: '**W umowie przedwstępnej zapisz wprost termin na uzyskanie WZ i skutek jego upływu** (np. zwrot zadatku, odstąpienie).', b: 'wyrok SN z 20.03.2014 r., II CSK 292/13' },
        { t: '**Nie zdążysz w 2026 r.?** W umowie przedwstępnej zapisz prawo do dysponowania działką na cele budowlane, czyli uprawnienie do wykonywania robót budowlanych. Sama umowa przedwstępna sprzedaży go nie daje.', b: 'art. 3 pkt 11 Prawa budowlanego; art. 389 § 1 k.c.; wyrok NSA z 12.07.2017 r., II OSK 2316/16 (przy pozwoleniu na budowę)' },
        { t: '**Pilnuj 5 lat.** WZ z wniosku z grudnia 2026 r. wygaśnie po 5 latach od dnia, w którym stała się prawomocna.', b: 'art. 64c u.p.z.p.' },
      ] },
      { h: 'Jesteś właścicielem działki', items: [
        { t: '**Sprzedajesz?** Możesz sam złożyć wniosek o WZ bez opłaty skarbowej. Urząd przeniesie WZ na kupującego za Twoją zgodą, jeżeli przyjmie on wszystkie warunki decyzji. Zgodę zapisz w umowie przedwstępnej.', b: 'art. 63 ust. 5 u.p.z.p.' },
        { t: '**Budujesz sam?** Nic nie musisz robić. Od 1.01.2027 r. dołączysz oświadczenie na nowym formularzu.', b: 'art. 63 ust. 1a–1c, art. 64b ust. 1 u.p.z.p. (od 1.01.2027 r.)' },
        { t: '**Ktoś złożył wniosek o WZ na Twoją działkę?** Taka WZ nie daje mu praw do działki, a pozwolenia na budowę bez prawa do dysponowania Twoją działką nie dostanie.', b: 'art. 63 ust. 2 u.p.z.p.; art. 32 ust. 4 pkt 2 Prawa budowlanego' },
      ] },
      { h: 'Inwestor i wnioski od 1.01.2027 r.', items: [
        { t: '**Wybierz działki do wniosków grudniowych:** obowiązujący plan ogólny i obszar uzupełnienia zabudowy. Za każdą WZ bez tytułu zapłacisz 598 zł.', b: 'art. 59 ust. 3 ustawy z 7.07.2023 r.; art. 61 ust. 1 pkt 1a u.p.z.p.' },
        { t: '**Przygotuj umowę na 2027 r.:** przedwstępną, dzierżawę albo użyczenie z uprawnieniem do robót budowlanych. Jednostronne pismo „zgoda właściciela” to ryzyko – ustawa mówi o stosunku zobowiązaniowym, czyli umowie.', b: 'art. 3 pkt 11 Prawa budowlanego; art. 63 ust. 1a u.p.z.p.' },
        { t: '**Kilku współwłaścicieli?** Zbierz pisemne zgody pozostałych, zanim złożysz wniosek w 2027 r. (przy WZ to ocena – sądy orzekały tak przy pozwoleniu na budowę).', b: 'art. 199 k.c.' },
        { t: '**Oświadczenie składasz pod rygorem odpowiedzialności karnej.** Nie podpisuj go, licząc na umowę, której jeszcze nie masz.', b: 'art. 63 ust. 1b u.p.z.p. w zw. z art. 233 § 6 k.k.' },
      ] },
    ],
    uwaga: 'Do 18.11.2026 r. w Dzienniku Ustaw nie było nowego wzoru formularza wniosku i oświadczenia, a dotychczasowy wzór przestaje obowiązywać 1.01.2027 r. Orzeczeń o art. 63 ust. 1a u.p.z.p. jeszcze nie ma, bo przepis nie obowiązuje.',
  },
  {
    file: 'lista-slup-linia-rura-na-dzialce.pdf',
    title: 'Słup, linia albo rura na działce – lista dokumentów i kroków',
    stan: '19.11.2026',
    zrodla: [
      { slug: 'slup-energetyczny-na-dzialce-przesuniecie', title: 'Słup na działce: odszkodowanie, służebność przesyłu, przesunięcie i usunięcie', stan: '19.11.2026' },
      { slug: 'wezwanie-operatora-do-zaplaty-za-slupy-wzor', title: 'Odszkodowanie za słupy: wzór pisma do PGE, Tauronu i Gaz-Systemu i co dalej po wezwaniu', stan: '18.11.2026' },
    ],
    intro: 'Za słup na swojej działce nie płacisz. Urządzenia, które wchodzą w skład przedsiębiorstwa, nie są częścią Twojej działki (art. 49 § 1 k.c.), a firma potrzebuje tytułu prawnego do Twojego gruntu. Jeżeli go nie ma, możesz żądać wynagrodzenia za ustanowienie służebności przesyłu (art. 305² § 2 k.c.), zapłaty za bezumowne korzystanie co do zasady za 6 lat wstecz (art. 224 § 2, 225, 230, 352 i 118 k.c.) albo usunięcia urządzeń na koszt firmy (art. 222 § 2 k.c.). Te same przepisy dotyczą linii, kabla, gazociągu i wodociągu.',
    sections: [
      { h: 'Dokumenty do zebrania', items: [
        { t: '**Odpis księgi wieczystej** z działem III (czy wpisano służebność) i, jeśli możesz, wgląd do akt księgi. Pusty dział III niczego nie przesądza – decyzja albo zasiedzenie mogą istnieć poza księgą.' },
        { t: '**Akt nabycia działki albo postanowienie spadkowe** – za przeszłość żądasz zapłaty tylko za swój czas; za wcześniejsze lata potrzebujesz przelewu roszczenia od poprzednika.', b: 'art. 509 § 1 k.c.; uchwała SN z 24.07.2013 r., III CZP 36/13' },
        { t: '**Wypis i wyrys z rejestru gruntów, wydruk z GESUT albo mapa zasadnicza** z przebiegiem urządzeń.', b: 'GESUT: art. 4 ust. 1a pkt 3, art. 7d pkt 1 lit. a i art. 40a ust. 1 Prawa geodezyjnego i kartograficznego' },
        { t: '**Zdjęcia słupów i oznaczeń z datą** (tabliczki, słupki gazociągu).' },
        { t: '**Dowody daty postawienia urządzeń:** stare zdjęcia, ortofotomapy, świadkowie. Od tej daty zależy zasiedzenie.', b: 'art. 292 w zw. z art. 172 i 305⁴ k.c.' },
        { t: '**Pisma od firmy:** propozycje kwot, projekty umów.' },
        { t: '**Odpowiedź starostwa o decyzjach** dotyczących urządzeń (art. 124 u.g.n. i starsze ustawy wywłaszczeniowe).', b: 'art. 124 ust. 1, art. 128 ust. 4 u.g.n.' },
        { t: '**Wypis z planu miejscowego albo decyzja WZ** – gdy chcesz budować.' },
        { t: '**Informacja, czy działka służy działalności gospodarczej** – od tego zależy termin przedawnienia: 6 albo 3 lata.', b: 'art. 118 k.c.' },
        { t: '**Operat szacunkowy**, jeśli już go masz.' },
      ] },
      { h: 'Kroki', ordered: true, items: [
        { t: '**Ustal właściciela urządzeń:** władający w GESUT, tabliczki na słupie lub stacji, dział III księgi wieczystej. Nie zgaduj po regionie ani napięciu linii.', b: '§ 5 ust. 1 pkt 5 rozporządzenia w sprawie GESUT' },
        { t: '**Sprawdź tytuł firmy:** umowa lub orzeczenie (służebność), decyzja starosty albo starsza decyzja wywłaszczeniowa, zasiedzenie. Zasiedzenie musi udowodnić firma. Spór o lata sprzed 3.08.2008 r. nie jest rozstrzygnięty.', b: 'art. 6, 172, 292, 305⁴ k.c.; art. 124 u.g.n.' },
        { t: '**Wybierz cel: pieniądze albo usunięcie.** Wniosek o służebność oznacza zgodę na urządzenia w obecnym miejscu – nie łącz go z żądaniem usunięcia. Nie podpisuj niczego wcześniej.', b: 'art. 305² § 2, art. 222 § 2 k.c.' },
        { t: '**Oszacuj kwotę orientacyjnie** w kalkulatorze mecenasodnieruchomosci.pl/kalkulator-slupy. To nie wycena – kwotę w sprawie ustala rzeczoznawca, a w procesie biegły.', b: '§ 32 ust. 5–7 rozporządzenia w sprawie wyceny nieruchomości' },
        { t: '**Wyślij wezwanie poleconym za potwierdzeniem odbioru:** działka (KW, numer, obręb, gmina), od kiedy jesteś właścicielem, urządzenia i od kiedy stoją, kwota i okres, propozycja (służebność albo usunięcie), termin, np. 30 dni, żądanie dokumentów tytułu firmy.', b: 'art. 224 § 2, 225, 230, 352 § 2, 455, 481 § 1 k.c.' },
        { t: '**Pilnuj przedawnienia.** Pozew złożony do 31.12.2026 r. obejmie co do zasady okres od 1.01.2020 r. Samo wezwanie biegu nie przerywa; zawezwanie do próby ugodowej go zawiesza, pozew przerywa.', b: 'art. 118, 121 pkt 6, 123 § 1 pkt 1 k.c.' },
        { t: '**Przerwij bieg zasiedzenia** wnioskiem o ustanowienie służebności albo pozwem o usunięcie urządzeń. Sam pozew o zapłatę za bezumowne korzystanie zasiedzenia nie przerywa.', b: 'uchwała 7 sędziów SN z 26.11.2014 r., III CZP 45/14' },
        { t: '**Firma proponuje kwotę?** Sprawdź, czy obejmuje tylko służebność, czy także przeszłość, i jaki pas. Od ugody nie uchylisz się z powodu dowodów znalezionych później, chyba że zawarto ją w złej wierze.', b: 'art. 918 § 2 k.c.' },
        { t: '**Chcesz przesunąć słup?** Zanim zapłacisz za projekt przebudowy, ustal tytuł firmy. Bez tytułu przesunięcie opłaca firma; gdy ma służebność – co do zasady Ty.', b: 'art. 222 § 2 k.c.; art. 291 w zw. z art. 305⁴ k.c.' },
        { t: '**Brak odpowiedzi w terminie?** Wniosek o zawezwanie do próby ugodowej (120 zł do 20 000 zł, 300 zł ponad), wniosek o ustanowienie służebności (100 zł) albo pozew o zapłatę za przeszłość.', b: 'art. 23 pkt 1, art. 23a u.k.s.c.' },
      ] },
    ],
    uwaga: 'Zasiedzenie służebności za lata sprzed 3.08.2008 r.: wyrok TK z 2.12.2025 r. (P 10/16) nie został ogłoszony w Dzienniku Ustaw, a składy SN orzekały różnie. 18.11.2026 r. połączone Izby SN uznały, że orzeczenie TK obowiązuje niezależnie od ogłoszenia, jeżeli wydał je prawidłowo obsadzony skład (III CZP 41/26). Czy wyrok P 10/16 spełnia ten warunek, oceni sąd w konkretnej sprawie.',
  },
  {
    file: 'lista-odwolanie-od-wz-14-dni.pdf',
    title: 'Odwołanie od warunków zabudowy – lista kontrolna 14 dni',
    stan: '18.11.2026',
    zrodla: [{ slug: 'odwolanie-od-warunkow-zabudowy', title: 'Odwołanie od warunków zabudowy: 14 dni, SKO i zarzuty, także gdy WZ dostał sąsiad' }],
    intro: 'Odwołanie od decyzji o warunkach zabudowy (WZ) składasz **w 14 dni od jej doręczenia** do samorządowego kolegium odwoławczego (SKO), za pośrednictwem wójta, burmistrza albo prezydenta miasta, który wydał decyzję (art. 129 § 1–2 k.p.a.). Odwołać się może wnioskodawca i każda inna strona, także sąsiad, którego interesu prawnego dotyczy decyzja (art. 28 k.p.a.).',
    sections: [
      { h: 'Termin i strona', items: [
        { t: '**Zapisz datę doręczenia i policz ostatni dzień:** 14 dni od doręczenia właśnie Tobie, dnia doręczenia nie liczysz. Termin kończący się w sobotę albo dzień wolny przechodzi na najbliższy dzień roboczy.', b: 'art. 129 § 2, art. 57 § 1 i 4 k.p.a.' },
        { t: '**Awizo:** nieodebrany list uważa się za doręczony z upływem 14 dni przechowywania na poczcie.', b: 'art. 44 § 1 i 4 k.p.a.' },
        { t: '**Obwieszczenie:** doręczenie następuje po 14 dniach od obwieszczenia.', b: 'art. 49 § 2 k.p.a.' },
        { t: '**Czy jesteś stroną?** Wnioskodawca, właściciel działki objętej wnioskiem złożonym przez kogoś innego, sąsiad, na którego działkę inwestycja może wpływać. Samo położenie w obszarze analizowanym nie wystarcza; spadek wartości czy utrata widoku to interes faktyczny.', b: 'art. 28 k.p.a.; wyrok NSA z 8.09.2021 r., II OSK 1604/21' },
        { t: '**WZ na dom do 70 m² powierzchni zabudowy** (budowa na zgłoszenie): stroną jest tylko wnioskodawca, sąsiad się nie odwoła.', b: 'art. 64a ust. 1 u.p.z.p.; art. 29 ust. 1 pkt 1a Prawa budowlanego' },
      ] },
      { h: 'Akta i zarzuty', items: [
        { t: '**Przejrzyj i skopiuj akta**, zwłaszcza analizę z częścią tekstową i graficzną: front terenu, granice obszaru analizowanego, budynki, z których urząd wziął parametry.', b: 'art. 73 § 1 k.p.a.; § 11 rozporządzenia o analizie' },
        { t: '**Obszar analizowany:** pas 3 × front terenu, od 50 do 200 m. Zmierz front i sprawdź budynki w pasie.', b: 'art. 61 ust. 5a u.p.z.p.' },
        { t: '**Sąsiednia zabudowa:** legalna, dostępna z tej samej drogi publicznej. Nie musi graniczyć z terenem wniosku.', b: 'art. 61 ust. 1 pkt 1 u.p.z.p.; wyroki NSA: II OSK 1680/15, II OSK 1220/21' },
        { t: '**Parametry:** szerokość elewacji frontowej, wysokość (z działek przylegających przy tej samej drodze), linia zabudowy. Odstępstwo tylko z uzasadnieniem w analizie.', b: '§ 3, § 6, § 7 rozporządzenia o analizie' },
        { t: '**Plan ogólny:** obszar uzupełnienia zabudowy, funkcja w profilu strefy.', b: 'art. 61 ust. 1 pkt 1a, art. 13a ust. 5, art. 54 ust. 2 pkt 1 lit. a w zw. z art. 64 ust. 1 u.p.z.p.' },
        { t: '**Droga i media:** dostęp do drogi publicznej, uzbrojenie albo umowa z gestorem sieci.', b: 'art. 61 ust. 1 pkt 2–3 i ust. 5 u.p.z.p.' },
        { t: '**Inne przeszkody:** grunt rolny wymagający zgody, strefa gazociągu, przepisy odrębne.', b: 'art. 61 ust. 1 pkt 4–6 u.p.z.p.' },
        { t: '**Procedura:** brak uzgodnienia, projekt decyzji sporządzony przez osobę bez uprawnień, pominięta strona.', b: 'art. 60 ust. 1 i 4 u.p.z.p.; art. 10 § 1 k.p.a.' },
      ] },
      { h: 'Pismo i nadanie', items: [
        { t: '**Adresat:** SKO, za pośrednictwem organu, który wydał WZ. Urząd ma 7 dni na przesłanie odwołania z aktami.', b: 'art. 129 § 1, art. 133 k.p.a.' },
        { t: '**Treść:** wystarczy, że z pisma wynika, że nie zgadzasz się z decyzją. Konkretny zarzut z liczbą ułatwia SKO znalezienie błędu.', b: 'art. 128 k.p.a.' },
        { t: '**Żądanie:** uchylenie decyzji i rozstrzygnięcie sprawy, ewentualnie przekazanie sprawy do ponownego rozpatrzenia.', b: 'art. 138 § 1 pkt 2 i § 2 k.p.a.' },
        { t: '**Dowody:** analiza z decyzji, mapa z frontem i obszarem analizowanym, zdjęcia budynków.' },
        { t: '**Nadaj najpóźniej ostatniego dnia** w polskiej placówce operatora wyznaczonego albo na adres do doręczeń elektronicznych urzędu. Zachowaj potwierdzenie nadania.', b: 'art. 57 § 5 pkt 1–2 k.p.a.' },
        { t: '**Pełnomocnik:** 17 zł opłaty skarbowej od pełnomocnictwa (bez opłaty: małżonek, wstępny, zstępny, rodzeństwo). Samo odwołanie jest bez opłaty.', b: 'załącznik do ustawy o opłacie skarbowej, cz. IV' },
        { t: '**Spóźniłeś się bez swojej winy?** W 7 dni od ustania przeszkody złóż prośbę o przywrócenie terminu razem z odwołaniem.', b: 'art. 58 § 1–2 k.p.a.' },
      ] },
      { h: 'Po odwołaniu', items: [
        { t: '**SKO** powinno rozpatrzyć odwołanie w miesiąc; przy zwłoce składasz ponaglenie.', b: 'art. 35 § 3, art. 37 k.p.a.' },
        { t: '**SKO utrzymało decyzję albo orzekło samo:** skarga do WSA przez SKO w 30 dni, wpis 500 zł. Skarga tylko po wyczerpaniu odwołania.', b: 'art. 52 § 1–2, art. 53 § 1, art. 54 § 1 p.p.s.a.; § 2 rozporządzenia w sprawie wpisu' },
        { t: '**SKO przekazało sprawę gminie:** sprzeciw do WSA przez SKO w 14 dni, wpis 100 zł. Sąd bada tylko, czy SKO mogło oddać sprawę.', b: 'art. 64a, 64c p.p.s.a.; § 2 rozporządzenia w sprawie wpisu' },
        { t: '**Urząd Cię pominął, a WZ jest ostateczna:** wniosek o wznowienie w miesiąc od dowiedzenia się o decyzji, najpóźniej 5 lat od jej doręczenia.', b: 'art. 145 § 1 pkt 4, art. 146 § 1, art. 147, art. 148 k.p.a.' },
      ] },
    ],
    uwaga: 'Zarzuty opisano według przepisów dla wniosków o WZ złożonych od 1.09.2026 r.; w sprawach wszczętych wcześniej stosuje się częściowo dawne brzmienie. Lista nie dotyczy decyzji o lokalizacji inwestycji celu publicznego. Stawki wpisów na 18.11.2026 r.',
  },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
/* logo zmniejszone do 800 px (w PDF ma ok. 50 mm szerokości, to ok. 400 dpi) */
const logoTmp = path.join(os.tmpdir(), 'kn-checklist-logo.png');
execFileSync('sips', ['--resampleWidth', '800', path.join(ROOT, 'assets', 'logo.png'), '--out', logoTmp], { stdio: 'ignore' });
const logo = 'data:image/png;base64,' + fs.readFileSync(logoTmp).toString('base64');

/* Lora: pełne statyczne pliki TTF z Google Fonts (CSS API bez nagłówka przeglądarki zwraca jeden plik na krój, z polskimi
   znakami). Arkusz Google dla przeglądarek dzieli krój na podzbiory (latin, latin-ext), a zmienna Lora zainstalowana
   w systemie trafia do PDF jako Type3 – w obu przypadkach tekst „ł”, „ś” wypada z wyrazów przy kopiowaniu. */
async function loraCss(family) {
  const css = await (await fetch('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400', { headers: { 'user-agent': 'curl/8' } })).text();
  const faces = [...css.matchAll(/font-style: (\w+);\s*font-weight: (\d+);\s*src: url\(([^)]+\.ttf)\)/g)];
  if (faces.length !== 3) throw new Error('Google Fonts: nie znaleziono 3 plików TTF Lory');
  const out = [];
  for (const [, style, weight, url] of faces) {
    const b64 = Buffer.from(await (await fetch(url)).arrayBuffer()).toString('base64');
    out.push(`@font-face { font-family: '${family}'; font-style: ${style}; font-weight: ${weight}; src: url(data:font/ttf;base64,${b64}) format('truetype'); }`);
  }
  return out.join('\n');
}
const FONT_CSS = await loraCss('LoraPDF');

function html(l) {
  const section = (s, i) => `
    <section>
      <h2><span class="num">${i + 1}</span>${esc(s.h)}</h2>
      <ul class="checks${s.ordered ? ' ordered' : ''}">
        ${s.items.map((it, k) => `<li><span class="box" aria-hidden="true"></span><div>${s.ordered ? `<span class="step">${k + 1}.</span> ` : ''}${inline(it.t)}${it.b ? `<span class="basis">Podstawa: ${esc(it.b)}</span>` : ''}</div></li>`).join('')}
      </ul>
    </section>`;
  const src = l.zrodla.map((z) => `<a href="${ORIGIN}/blog/${z.slug}">${esc(z.title)}</a> (${ORIGIN.replace('https://', '')}/blog/${z.slug}${z.stan ? `, stan prawny na ${z.stan}` : ''})`).join('; ');
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>${esc(l.title)}</title>
<meta name="author" content="${BRAND}">
<meta name="description" content="Lista kontrolna do pobrania bez rejestracji. ${esc(BRAND)}, stan prawny na ${l.stan}.">
<style>
${FONT_CSS}
  @page { size: A4; margin: 12mm 15mm 19mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; font-family: 'LoraPDF', Georgia, serif; font-size: 9.4pt; line-height: 1.4; color: #475569; hyphens: manual; font-variant-ligatures: none; }
  header { display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 3.5mm; border-bottom: 1px solid #E2E8F0; }
  header img { height: 15mm; width: auto; display: block; }
  .tag { text-align: right; font-size: 7.5pt; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #0E53A5; line-height: 1.6; }
  .tag span { display: block; letter-spacing: .04em; text-transform: none; font-weight: 400; color: #64748B; }
  h1 { margin: 5mm 0 2.5mm; font-size: 18.5pt; line-height: 1.15; letter-spacing: -.01em; font-weight: 700; color: #1E293B; }
  .intro { margin: 0 0 3mm; padding: 2.8mm 3.8mm; background: #F8FAFC; border-left: 3px solid #0E53A5; border-radius: 0 8px 8px 0; color: #1E293B; text-align: justify; }
  .src { margin: 0 0 1mm; font-size: 8pt; color: #64748B; }
  a { color: #0E53A5; text-decoration: none; }
  section { margin-top: 4mm; }
  h2 { display: flex; align-items: center; gap: 2.4mm; margin: 0 0 1.6mm; font-size: 11.5pt; font-weight: 700; color: #1E293B; break-after: avoid; page-break-after: avoid; }
  .num { flex: none; width: 6mm; height: 6mm; border: 1.5px solid #0E53A5; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 8.5pt; color: #0E53A5; }
  .checks { list-style: none; margin: 0; padding: 0; }
  .checks li { display: flex; gap: 2.8mm; padding: 1.5mm 0; border-bottom: 1px solid #F1F5F9; break-inside: avoid; page-break-inside: avoid; text-align: justify; }
  .checks li:last-child { border-bottom: 0; }
  .box { flex: none; width: 3.6mm; height: 3.6mm; margin-top: .55mm; border: 1.4px solid #0E53A5; border-radius: 1mm; background: #fff; }
  .step { font-weight: 700; color: #0E53A5; }
  strong { font-weight: 700; color: #1E293B; }
  .basis { display: block; margin-top: .4mm; font-size: 7.8pt; font-style: italic; color: #64748B; text-align: left; }
  .uwaga { margin-top: 4mm; padding: 2.6mm 3.8mm; border: 1px solid #E2E8F0; border-radius: 8px; font-size: 8.3pt; break-inside: avoid; }
  .uwaga b { color: #1E293B; }
  .cta { margin-top: 3mm; padding: 2.8mm 3.8mm; background: #E0EDFA; border-radius: 8px; font-size: 8.8pt; color: #1E293B; break-inside: avoid; }
</style>
</head>
<body>
<header>
  <img src="${logo}" alt="${BRAND}">
  <div class="tag">Lista kontrolna<span>mecenasodnieruchomosci.pl · stan prawny na ${l.stan}</span></div>
</header>
<main>
  <h1>${esc(l.title)}</h1>
  <p class="intro">${inline(l.intro)}</p>
  <p class="src">Na podstawie ${l.zrodla.length > 1 ? 'wpisów' : 'wpisu'}: ${src}. Tam pełne omówienie i przykłady.</p>
  ${l.sections.map(section).join('')}
  <p class="uwaga"><b>Uwaga.</b> ${inline(l.uwaga)}</p>
  <p class="cta"><strong>Masz podobną sytuację?</strong> Opisz ją w formularzu na <a href="${ORIGIN}/kontakt">mecenasodnieruchomosci.pl/kontakt</a>. W ciągu 24 h roboczych odpiszę, co trzeba zrobić, i prześlę ofertę z ceną i terminem. Do akceptacji oferty nic nie płacisz.</p>
</main>
</body>
</html>`;
}

const footer = (l) => `<style>${FONT_CSS}</style><div style="width:100%; margin:0 15mm; padding-top:2mm; border-top:1px solid #E2E8F0; font-family:LoraPDF, Georgia, serif; font-size:7.2pt; line-height:1.45; color:#64748B; display:flex; justify-content:space-between; gap:4mm;">
  <div>${BRAND} · mecenasodnieruchomosci.pl · stan prawny na ${l.stan}<br>To lista kontrolna, nie porada prawna w Twojej sprawie.</div>
  <div style="white-space:nowrap; align-self:flex-end;">str. <span class="pageNumber"></span>/<span class="totalPages"></span></div>
</div>`;

fs.mkdirSync(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--lang=pl-PL'] });
const sizes = {};
try {
  for (const l of LISTS) {
    const page = await browser.newPage();
    await page.setContent(html(l), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const fam = await page.evaluate(() => document.fonts.check('700 12px LoraPDF') && document.fonts.check('400 12px LoraPDF'));
    if (!fam) console.warn(`${l.file}: Lora się nie wczytała – PDF z Georgią`);
    const file = path.join(OUT, l.file);
    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true,
      headerTemplate: '<span></span>', footerTemplate: footer(l), tagged: true, outline: true });
    const pages = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight / (297 / 25.4 * 96 - (12 + 19) / 25.4 * 96)));
    await page.close();
    const kb = Math.round(fs.statSync(file).size / 1024);
    sizes[l.file] = kb;
    console.log(`${path.relative(ROOT, file)}: ${kb} KB (ok. ${pages} str.)`);
  }
} finally { await browser.close(); }

/* rozmiar na stronie (window.DOWNLOADS w pages.jsx) musi zgadzać się z plikiem */
const pagesSrc = fs.readFileSync(path.join(ROOT, 'pages.jsx'), 'utf8');
for (const [f, kb] of Object.entries(sizes)) {
  const m = pagesSrc.match(new RegExp(`/assets/pobierz/${f.replace('.', '\\.')}'[^}]*size: '(\\d+) KB'`));
  if (!m) console.warn(`pages.jsx: brak ${f} w window.DOWNLOADS`);
  else if (Number(m[1]) !== kb) console.warn(`pages.jsx: ${f} ma size '${m[1]} KB', plik ma ${kb} KB – popraw window.DOWNLOADS`);
}
