/* services-flip.jsx — usługa „Flip mieszkania” dla osób prywatnych (filar 2: Transakcje i umowy).
   Ładowane po services-lite-fill.jsx; dopisuje do window.SERVICE_CONTENT. */
Object.assign(window.SERVICE_CONTENT, {
  'flip-mieszkania': {
    h1: 'Flip mieszkania — bezpieczny zakup i odsprzedaż',
    subtitle: 'Kupujesz mieszkanie, żeby je odnowić i sprzedać z zyskiem? Zysk z flipa robi się na zakupie — i tam też najłatwiej go stracić. Sprawdzam stan prawny okazji, prowadzę umowy po obu stronach i pilnuję, żeby rękojmia i podatki nie zjadły marży.',
    intro: 'Flipping to biznes na tempie i marży: okazja znika w kilka dni, a każde zdanie zostawione w umowie i każdy nieprzemyślany podatek obniżają zysk. Jednocześnie „okazje” z rynku wtórnego to najczęściej mieszkania z historią — spadkowe, zadłużone, z lokatorem, z nieuregulowaną księgą, z licytacji. Tu właśnie flipper zarabia i tu najłatwiej wpaść. Pomagam osobom, które robią jeden czy dwa flipy rocznie, i tym, które chcą z tego zrobić stałe źródło dochodu: sprawdzam mieszkanie, zanim wpłacisz zadatek, prowadzę zakup, a potem sprzedaż tak, żeby po kilku miesiącach nikt nie wrócił do Ciebie z roszczeniem.',
    introHeading: 'Zysk z flipa robi się na zakupie.',
    whenTitle: 'Czy to Twoja sytuacja',
    whenHeading: '',
    when: [
      'Znalazłeś mieszkanie poniżej ceny rynkowej i masz kilka dni na decyzję o zadatku.',
      'Okazja jest spadkowa, zadłużona, z hipoteką, z lokatorem albo pochodzi z licytacji komorniczej.',
      'Kupujesz na cesję umowy deweloperskiej albo chcesz taką umowę odsprzedać.',
      'Nie wiesz, czy sprzedaż po kilku miesiącach obciąży Cię podatkiem dochodowym, VAT albo obowiązkiem założenia działalności.',
      'Sprzedajesz po remoncie i chcesz ograniczyć odpowiedzialność za wady wobec kupującego.',
      'Robisz flipy regularnie i potrzebujesz prawnika, który zna Twój model i odpowiada w godzinach, nie tygodniach.',
    ],
    lists: [
      {
        eyebrow: 'Na zakupie',
        title: 'Sprawdzam, zanim wpłacisz zadatek.',
        kind: 'check',
        items: [
          { b: 'Stan prawny okazji', t: 'księga wieczysta razem z dokumentami, zadłużenie, hipoteki, egzekucje, lokatorzy i osoby zameldowane, zaległości wobec wspólnoty.' },
          { b: 'Sprzedającego', t: 'spadkobiercy bez działu spadku, współwłaściciele, pełnomocnicy, sprzedaż w trakcie rozwodu — kto naprawdę może sprzedać i czy umowa będzie ważna.' },
          { b: 'Umowę przedwstępną', t: 'zadatek, terminy, wydanie lokalu, stan techniczny, prawo wejścia z ekipą przed aktem, skutki, gdy sprzedający się rozmyśli.' },
          { b: 'Cesje i licytacje', t: 'cesja umowy deweloperskiej, zakup z licytacji komorniczej, zakup od syndyka — inne ryzyka, inne dokumenty, inny kalendarz.' },
          { b: 'Finansowanie', t: 'warunek kredytowy, pożyczka od inwestora, wejście wspólnika — umowa, która nie zostawi Cię z zadatkiem do stracenia i sporem o podział zysku.' },
        ],
      },
      {
        eyebrow: 'Na sprzedaży',
        title: 'Sprzedaż, po której nikt nie wraca.',
        kind: 'check',
        items: [
          { b: 'Umowa sprzedaży i protokół', t: 'opis stanu lokalu po remoncie, dokumentacja prac, ograniczenie rękojmi tam, gdzie prawo na to pozwala.' },
          { b: 'Rękojmia i roszczenia kupującego', t: 'wobec konsumenta rękojmi nie wyłączysz — ustawiam ją tak, żeby ryzyko było policzalne, i bronię Cię, gdy kupujący zgłasza wady.' },
          { b: 'Podatki', t: 'PIT od sprzedaży przed upływem 5 lat, ulga mieszkaniowa, PCC, moment, w którym flipy stają się działalnością gospodarczą i VAT — we współpracy z Twoim księgowym.' },
          { b: 'Kupujący z kredytem', t: 'dokumenty, których zażąda bank, harmonogram wypłaty, zabezpieczenie ceny do chwili wydania lokalu.' },
        ],
      },
    ],
    steps: [
      'Przesyłasz numer księgi wieczystej, link do ogłoszenia i to, co wiesz o sprzedającym — najlepiej zanim wpłacisz zadatek.',
      'W ciągu 24 h roboczych dostajesz bezpłatną wstępną ocenę: czy okazja jest bezpieczna, gdzie jest ryzyko i ile potrwa jego usunięcie. Podaję cenę i termin.',
      'Sprawdzam i prowadzę zakup — raport w trzech kolorach, umowa przedwstępna, negocjacje, akt notarialny.',
      'Przy sprzedaży przygotowuję umowę i dokumenty, uzgadniam podatki z księgowym i pilnuję rozliczenia. Przy kolejnych flipach pracujemy już na gotowym schemacie.',
    ],
    faq: [
      { q: 'Kupuję mieszkanie spadkowe „po okazyjnej cenie”. Co może pójść nie tak?', a: 'Najczęściej: nie wszyscy spadkobiercy są ujawnieni, nie było działu spadku, komuś przysługuje zachowek, w księdze figuruje nieżyjący właściciel albo lokal zajmuje członek rodziny, którego nie da się szybko wyprowadzić. Każde z tych ryzyk widać w dokumentach — jeśli ktoś je przeczyta przed zadatkiem.' },
      { q: 'Czy zakup z licytacji komorniczej to dobry flip?', a: 'Bywa bardzo opłacalny, ale rządzi się innymi zasadami: brak rękojmi za wady, ryzyko lokatorów, konieczność szybkiej zapłaty, przybicie i przysądzenie, które trwają miesiące. Sprawdzam obwieszczenie, operat i księgę wieczystą i mówię, czy cena — po doliczeniu czasu i ryzyka — nadal jest okazją.' },
      { q: 'Sprzedaję po remoncie. Mogę wyłączyć rękojmię?', a: 'Między przedsiębiorcami tak; wobec konsumenta nie, a przy regularnych flipach urząd może uznać Cię za przedsiębiorcę. Ustawiam umowę tak, żeby stan lokalu był udokumentowany, wady znane kupującemu opisane, a Twoja odpowiedzialność — policzalna.' },
      { q: 'Ile flipów rocznie mogę zrobić bez działalności gospodarczej?', a: 'Nie ma sztywnej liczby — liczy się zorganizowany i ciągły charakter. Przy jednym czy dwóch flipach prywatnie zwykle chodzi o PIT od sprzedaży przed upływem 5 lat, z możliwością ulgi mieszkaniowej. Przy regularnym obrocie w grę wchodzą działalność i VAT. Omawiam to z Tobą i Twoim księgowym przed pierwszą sprzedażą, nie po niej.' },
      { q: 'Kupuję na cesję od osoby, która ma umowę deweloperską. To bezpieczne?', a: 'Jeśli deweloper wyrazi zgodę, cesja jest zgodna z prawem — ale trzeba sprawdzić umowę deweloperską, stan wpłat, kary i to, czy zbywca nie sprzedaje tej samej umowy komuś jeszcze. Przygotowuję umowę cesji i pilnuję rozliczenia.' },
      { q: 'Mam wspólnika albo inwestora, który finansuje zakup. Jak to spisać?', a: 'Umową, która ustala udziały, podział zysku i straty, decyzje o cenie i terminie sprzedaży oraz to, co się dzieje, gdy ktoś chce wyjść wcześniej. Bez tego pierwszy udany flip często kończy się sporem o pieniądze.' },
      { q: 'Ile trwa sprawdzenie okazji?', a: 'Wstępna ocena z księgi wieczystej i ogłoszenia — 24 h robocze. Pełne sprawdzenie z dokumentami sprzedającego — 2–4 dni robocze. Przy okazjach „na wczoraj” zaznacz w formularzu, że sprawa jest pilna.' },
      { q: 'Robię flipy regularnie. Możemy współpracować stale?', a: 'Tak — w formie abonamentu albo stawki za transakcję. Znam Twoje wzory umów i model, więc kolejne zakupy sprawdzam szybciej i taniej. Szczegóły w obszarze „Dla firm”.' },
    ],
    cta: {
      heading: 'Okazja nie poczeka. Ryzyko też nie.',
      lead: 'Prześlij numer księgi wieczystej i link do ogłoszenia. Bezpłatnie, w ciągu 24 h roboczych, powiem Ci, czy to bezpieczny flip i co sprawdzić przed zadatkiem.',
    },
  },
});
