export type Kind = "keramicar" | "knauf" | "soboslikar" | "gletanje";

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string; // kratki naziv za kartice i izbornik
  h1: string;
  title: string;
  description: string;
  short: string;
  kind: Kind;
  intro: string[];
  itemsTitle: string;
  items: string[];
  faq: Faq[];
}

export const services: Service[] = [
  {
    slug: "keramicarski-radovi",
    name: "Keramičarski radovi",
    h1: "Keramičarski radovi u Dalmaciji",
    title: "Keramičarski radovi Dalmacija – kuće, stanovi i apartmani",
    description:
      "Keramičarski radovi u Dalmaciji: postavljanje podnih i zidnih pločica, kupaonice, kuhinje, terase i stepenice. Ponuda na upit – 095 515 0377.",
    short: "Podne i zidne pločice, kupaonice, kuhinje, terase i stepenice.",
    kind: "keramicar",
    intro: [
      "Izvodimo keramičarske radove u stanovima, kućama, apartmanima i poslovnim prostorima diljem Dalmacije. Radimo novogradnju i adaptacije — od pripreme podloge do završnog fugiranja i silikoniranja.",
      "Prije početka zajedno prolazimo format pločica, smjer i način slaganja, širinu fuga i završne detalje, da gotov pod ili zid izgleda onako kako ste ga zamislili.",
    ],
    itemsTitle: "Što obuhvaćaju keramičarski radovi",
    items: [
      "Postavljanje podnih i zidnih keramičkih i gres pločica",
      "Velikoformatne pločice i rektificirani gres s uskom fugom",
      "Kupaonice, WC-i i kuhinje",
      "Terase, balkoni, stepenice i okućnice",
      "Priprema podloge, izravnavanje i hidroizolacija mokrih zona",
      "Kutne lajsne, cokl (sokl), fugiranje i silikoniranje",
      "Skidanje starih pločica ili postavljanje preko postojećih gdje podloga to dopušta",
    ],
    faq: [
      {
        q: "Kolika je cijena keramičarskih radova?",
        a: "Cjenik ne objavljujemo jer cijena ovisi o kvadraturi, formatu pločica, stanju podloge i lokaciji. Pošaljite upit s kvadraturom i fotografijama prostora i dobit ćete ponudu.",
      },
      {
        q: "Radite li samo postavljanje ili i pripremu podloge?",
        a: "Radimo oboje. Podlogu po potrebi izravnavamo, a u kupaonicama i na terasama prije pločica izvodimo hidroizolaciju.",
      },
      {
        q: "Tko nabavlja pločice i materijal?",
        a: "Pločice najčešće bira i kupuje investitor, a mi možemo izračunati potrebne količine pločica, ljepila i fug mase kako ne biste kupili premalo ili previše.",
      },
    ],
  },
  {
    slug: "postavljanje-plocica",
    name: "Postavljanje pločica",
    h1: "Postavljanje pločica",
    title: "Postavljanje pločica Dalmacija – podne i zidne pločice",
    description:
      "Postavljanje podnih i zidnih pločica u Dalmaciji: gres, keramika, veliki formati, uska fuga. Pošaljite kvadraturu i zatražite ponudu – 095 515 0377.",
    short: "Gres, keramika, veliki formati i uska fuga — uredno i ravno.",
    kind: "keramicar",
    intro: [
      "Postavljamo podne i zidne pločice svih formata — od klasične keramike do velikoformatnog gresa. Koristimo sustave za niveliranje kako bi pločice bile u ravnini, a fuge ujednačene.",
      "Ljepilo i fug masu biramo prema vrsti pločice i prostoru: drugačiji materijal ide u dnevni boravak, drugačiji u tuš zonu ili na terasu izloženu suncu i kiši.",
    ],
    itemsTitle: "Vrste pločica i načini postavljanja",
    items: [
      "Gres i porculanske pločice, rektificirane i klasične",
      "Veliki formati (60×120, 120×120 i veći)",
      "Pločice u imitaciji drva i dekorativne pločice",
      "Ravno, dijagonalno, na preklop i na riblju kost",
      "Mozaik i dekorativni detalji",
      "Postavljanje preko podnog grijanja",
      "Rezanje pod 45° (gerung) na vanjskim kutovima",
    ],
    faq: [
      {
        q: "Mogu li se nove pločice postaviti preko starih?",
        a: "Mogu, ako stare pločice čvrsto drže, podloga je ravna i visina poda to dopušta. Stanje procjenjujemo na licu mjesta ili prema fotografijama.",
      },
      {
        q: "Koliko dugo traje postavljanje pločica?",
        a: "Ovisi o kvadraturi, formatu i pripremi podloge. Okvirni rok navodimo u ponudi, nakon što vidimo prostor ili dobijemo mjere i fotografije.",
      },
      {
        q: "Koliko pločica trebam kupiti?",
        a: "Na čistu kvadraturu dodaje se rezerva za rezanje i lom, koja ovisi o formatu i načinu slaganja. Točnu količinu možemo izračunati za vas prije kupnje.",
      },
    ],
  },
  {
    slug: "plocice-kupaonica",
    name: "Pločice u kupaonici",
    h1: "Postavljanje pločica u kupaonici",
    title: "Pločice u kupaonici – keramika za kupaonice u Dalmaciji",
    description:
      "Postavljanje pločica u kupaonici: hidroizolacija, tuš u razini poda, niše i uske fuge. Radimo diljem Dalmacije. Ponuda na upit – 095 515 0377.",
    short: "Hidroizolacija, walk-in tuševi, niše i precizni završeci.",
    kind: "keramicar",
    intro: [
      "Kupaonica je najzahtjevniji prostor za keramiku: mala kvadratura, mnogo rezova, padovi prema odvodu i stalna vlaga. Zato posebnu pažnju posvećujemo hidroizolaciji i detaljima.",
      "Izvodimo keramiku u novim kupaonicama i pri obnovi starih — s tuševima u razini poda, nišama, ugradbenim vodokotlićima i policama od pločica.",
    ],
    itemsTitle: "Keramika u kupaonici uključuje",
    items: [
      "Hidroizolaciju poda i zidova u zoni tuša",
      "Tuš u razini poda (walk-in) s padom prema kanalici",
      "Oblaganje niša, polica i ugradbenih vodokotlića",
      "Oblaganje kada i tuš kada",
      "Rezanje pod 45° i ugradnju kutnih lajsni",
      "Epoksidne i vodoodbojne fug mase",
      "Završno silikoniranje",
    ],
    faq: [
      {
        q: "Radite li hidroizolaciju prije pločica?",
        a: "Da. U zoni tuša i na podu kupaonice hidroizolacija se izvodi prije postavljanja pločica — pločice i fuge same po sebi nisu vodonepropusne.",
      },
      {
        q: "Koliko traje keramika u kupaonici?",
        a: "Ovisi o veličini kupaonice, formatu pločica i stanju zidova. Rok navodimo u ponudi kada vidimo prostor.",
      },
      {
        q: "Izvodite li i vodoinstalaterske radove?",
        a: "Naš posao su keramika i završni radovi. Raspored radova rado ćemo uskladiti s vašim vodoinstalaterom i električarom.",
      },
    ],
  },
  {
    slug: "terase-i-balkoni",
    name: "Terase i balkoni",
    h1: "Pločice za terase, balkone i stepenice",
    title: "Pločice za terase i balkone – vanjska keramika u Dalmaciji",
    description:
      "Postavljanje pločica na terasama, balkonima i stepenicama: hidroizolacija, padovi, protuklizne pločice otporne na sol i sunce. Upit: 095 515 0377.",
    short: "Hidroizolacija, padovi i protuklizni gres otporan na sol i sunce.",
    kind: "keramicar",
    intro: [
      "Vanjska keramika u Dalmaciji trpi jako sunce, sol, buru i velike temperaturne razlike. Zato terase i balkone radimo s pravilnim padovima, hidroizolacijom i fleksibilnim ljepilima.",
      "Postavljamo pločice na terasama, balkonima, vanjskim stepenicama i oko kuće, a kod sanacija rješavamo i uzrok — vlagu ispod starih pločica.",
    ],
    itemsTitle: "Vanjski keramičarski radovi",
    items: [
      "Hidroizolacija terasa i balkona",
      "Izrada padova za odvodnju",
      "Protuklizne gres pločice za vanjsku upotrebu",
      "Oblaganje vanjskih i unutarnjih stepenica",
      "Dilatacije i fleksibilne fuge",
      "Okapnice i završni profili",
      "Sanacija terasa koje propuštaju",
    ],
    faq: [
      {
        q: "Zašto pločice na terasi pucaju ili se odvajaju?",
        a: "Najčešći uzroci su voda koja ulazi ispod pločica, nedostatak dilatacija i neodgovarajuće ljepilo. Kod sanacije prvo utvrđujemo uzrok, a zatim predlažemo rješenje.",
      },
      {
        q: "Koje pločice odabrati za terasu uz more?",
        a: "Gres pločice za vanjsku upotrebu s protukliznom površinom. Otporne su na sol, UV zračenje i smrzavanje te se lako održavaju.",
      },
      {
        q: "U koje doba godine se rade terase?",
        a: "Vanjski radovi ovise o vremenu — kiša i niske temperature odgađaju ljepljenje i fugiranje. Termin dogovaramo prema prognozi i sezoni.",
      },
    ],
  },
  {
    slug: "knauf-radovi",
    name: "Knauf radovi",
    h1: "Knauf radovi i suha gradnja",
    title: "Knauf radovi Dalmacija – pregradni zidovi i suha gradnja",
    description:
      "Knauf radovi u Dalmaciji: pregradni zidovi, zidne obloge, potkrovlja i spušteni stropovi od gips-kartonskih ploča. Ponuda na upit – 095 515 0377.",
    short: "Pregradni zidovi, zidne obloge, potkrovlja i maske od gips-kartona.",
    kind: "knauf",
    intro: [
      "Suha gradnja je najbrži način da prostor dobije novi raspored, ravne zidove ili skrivene instalacije — bez mokrih radova i dugog sušenja.",
      "Izvodimo knauf radove u stanovima, kućama, apartmanima i poslovnim prostorima: od jednog pregradnog zida do kompletnog uređenja potkrovlja.",
    ],
    itemsTitle: "Knauf radovi koje izvodimo",
    items: [
      "Pregradni zidovi s izolacijom",
      "Zidne obloge i izravnavanje starih zidova",
      "Uređenje i zatvaranje potkrovlja",
      "Vlagootporne ploče za kupaonice i kuhinje",
      "Maske za instalacije, cijevi i ugradbene vodokotliće",
      "Niše, police i obloge za TV zid",
      "Bandažiranje i gletanje spojeva — spremno za bojanje",
    ],
    faq: [
      {
        q: "Koliko košta knauf zid ili strop?",
        a: "Cijena ovisi o kvadraturi, vrsti ploča, izolaciji i složenosti konstrukcije. Pošaljite mjere ili nacrt i dobit ćete ponudu.",
      },
      {
        q: "Može li knauf u kupaonicu?",
        a: "Može, uz vlagootporne (zelene) ploče i hidroizolaciju prije postavljanja pločica.",
      },
      {
        q: "Predajete li zidove spremne za bojanje?",
        a: "Da. Spojeve bandažiramo i gletamo, a po dogovoru izvodimo i završno gletanje cijele površine te bojanje.",
      },
    ],
  },
  {
    slug: "spusteni-stropovi",
    name: "Spušteni stropovi",
    h1: "Spušteni stropovi",
    title: "Spušteni stropovi Dalmacija – knauf stropovi s LED rasvjetom",
    description:
      "Izrada spuštenih knauf stropova u Dalmaciji: ravni i višerazinski stropovi, kaskade, LED kanali i ugradbena rasvjeta. Upit: 095 515 0377.",
    short: "Ravni i kaskadni stropovi s LED kanalima i ugradbenom rasvjetom.",
    kind: "knauf",
    intro: [
      "Spušteni strop skriva instalacije, klimatizacijske kanale i neravnine stare ploče, a prostoru daje čist, ravan završetak i mogućnost ugradbene rasvjete.",
      "Izrađujemo ravne i višerazinske stropove od gips-kartonskih ploča u stanovima, apartmanima, lokalima i uredima.",
    ],
    itemsTitle: "Vrste spuštenih stropova",
    items: [
      "Ravni spušteni stropovi",
      "Kaskadni i višerazinski stropovi",
      "Kanali za LED trake i indirektnu rasvjetu",
      "Otvori za ugradbenu rasvjetu i reviziju",
      "Vlagootporni stropovi za kupaonice",
      "Stropovi sa zvučnom ili toplinskom izolacijom",
      "Maske za zavjese i klima-kanale",
    ],
    faq: [
      {
        q: "Koliko se strop mora spustiti?",
        a: "Ovisi o konstrukciji i o tome što se skriva iznad stropa. Za ugradbenu rasvjetu i instalacije potrebno je više prostora nego za samo izravnavanje.",
      },
      {
        q: "Tko izvodi elektroinstalacije za rasvjetu?",
        a: "Razvod izvodi električar prije zatvaranja stropa. Otvore za rasvjetu izrezujemo prema dogovorenom rasporedu.",
      },
      {
        q: "Je li strop nakon vas spreman za bojanje?",
        a: "Da, spojeve bandažiramo i gletamo, a po želji izvodimo i završno bojanje.",
      },
    ],
  },
  {
    slug: "gletanje-zidova",
    name: "Gletanje zidova",
    h1: "Gletanje zidova i stropova",
    title: "Gletanje zidova Dalmacija – glatki zidovi spremni za bojanje",
    description:
      "Gletanje zidova i stropova u Dalmaciji: priprema, bandažiranje, gletanje i brušenje do glatke površine. Ponuda na upit – 095 515 0377.",
    short: "Priprema, gletanje i brušenje do glatke površine spremne za boju.",
    kind: "gletanje",
    intro: [
      "Dobro gletanje je preduvjet lijepog zida — boja ne skriva neravnine, nego ih ističe. Zidove i stropove gletamo i brusimo do glatke, ujednačene površine.",
      "Gletamo nove žbukane zidove, gips-kartonske ploče i stare zidove pri adaptaciji, uz saniranje pukotina i oštećenja.",
    ],
    itemsTitle: "Gletanje uključuje",
    items: [
      "Zaštitu podova, stolarije i namještaja",
      "Struganje stare boje i sanaciju pukotina",
      "Bandažiranje spojeva i kutova",
      "Gletanje u više slojeva",
      "Brušenje i otprašivanje",
      "Impregnaciju prije bojanja",
      "Izradu oštrih kutova i špaleta oko prozora i vrata",
    ],
    faq: [
      {
        q: "Koliko slojeva glet mase je potrebno?",
        a: "Najčešće dva, a kod neravnih ili oštećenih zidova i više. Broj slojeva procjenjujemo prema stanju podloge.",
      },
      {
        q: "Je li gletanje prašnjav posao?",
        a: "Brušenje stvara prašinu, zato prije radova zaštitimo podove, stolariju i namještaj, a nakon radova prostor ostavljamo pometen.",
      },
      {
        q: "Radite li i bojanje nakon gletanja?",
        a: "Da, gletanje i bojanje najčešće izvodimo zajedno, kao jedan posao.",
      },
    ],
  },
  {
    slug: "soboslikarski-radovi",
    name: "Soboslikarski radovi",
    h1: "Soboslikarski radovi i moleraj",
    title: "Soboslikarski radovi Dalmacija – moleraj i bojanje zidova",
    description:
      "Soboslikarski radovi i moleraj u Dalmaciji: bojanje zidova i stropova, pituravanje stanova, kuća i apartmana. Ponuda na upit – 095 515 0377.",
    short: "Moleraj, ličenje i bojanje zidova i stropova — čisto i uredno.",
    kind: "soboslikar",
    intro: [
      "Bojimo stanove, kuće, apartmane i poslovne prostore — zvali vi to moleraj, ličenje, pituravanje ili krečenje. Radimo uredno, uz zaštitu podova i namještaja.",
      "Prije bojanja zid pripremamo: saniramo pukotine, po potrebi gletamo i nanosimo impregnaciju, kako bi boja ravnomjerno pokrila i dugo trajala.",
    ],
    itemsTitle: "Soboslikarski radovi koje izvodimo",
    items: [
      "Bojanje zidova i stropova",
      "Bojanje nakon knauf radova i gletanja",
      "Sanacija pukotina, fleka i tragova vlage",
      "Perive i paropropusne boje, boje za kupaonice i kuhinje",
      "Osvježavanje apartmana prije sezone",
      "Bojanje poslovnih prostora i lokala",
      "Zaštita prostora i čišćenje nakon radova",
    ],
    faq: [
      {
        q: "Koliko košta bojanje stana?",
        a: "Cijena ovisi o kvadraturi zidova i stropova, stanju podloge i vrsti boje. Pošaljite tlocrtnu kvadraturu i nekoliko fotografija za ponudu.",
      },
      {
        q: "Trebam li isprazniti stan prije bojanja?",
        a: "Ne morate. Namještaj se pomakne od zidova i zaštiti folijom, a podovi se pokriju.",
      },
      {
        q: "Kada je najbolje bojati apartman?",
        a: "Izvan sezone — u jesen, zimu ili rano proljeće — kako bi sve bilo spremno prije prvih gostiju. Termine za proljeće rezervirajte na vrijeme.",
      },
    ],
  },
  {
    slug: "zavrsni-radovi",
    name: "Fini završni radovi",
    h1: "Fini završni radovi u graditeljstvu",
    title: "Završni radovi Dalmacija – keramika, knauf, gletanje i bojanje",
    description:
      "Fini završni radovi u Dalmaciji na jednom mjestu: keramika, knauf, gletanje i soboslikarski radovi za kuće, stanove i apartmane. Upit: 095 515 0377.",
    short: "Keramika, knauf, gletanje i bojanje — jedan izvođač, jedan dogovor.",
    kind: "keramicar",
    intro: [
      "Kada završne radove izvodi jedna ekipa, nema usklađivanja više majstora ni prebacivanja odgovornosti: knauf, gletanje, bojanje i keramika idu pravim redoslijedom.",
      "Izvodimo završne radove u novogradnji i pri adaptaciji stanova, kuća, apartmana i poslovnih prostora diljem Dalmacije.",
    ],
    itemsTitle: "Završni radovi koje izvodimo",
    items: [
      "Keramičarski radovi — podovi, zidovi, kupaonice, terase",
      "Knauf — pregradni zidovi, obloge i spušteni stropovi",
      "Gletanje i brušenje zidova i stropova",
      "Soboslikarski radovi — bojanje zidova i stropova",
      "Sanacija pukotina i oštećenja prije bojanja",
      "Silikoniranje, lajsne i završni detalji",
      "Uređenje apartmana izvan sezone",
    ],
    faq: [
      {
        q: "Kojim redoslijedom idu završni radovi?",
        a: "Najčešće: knauf i grubi radovi, zatim keramika, gletanje i na kraju bojanje. Redoslijed prilagođavamo prostoru i ostalim majstorima na gradilištu.",
      },
      {
        q: "Možete li preuzeti kompletne završne radove?",
        a: "Da — keramiku, knauf, gletanje i bojanje izvodimo kao cjelinu ili svaku uslugu zasebno.",
      },
      {
        q: "Kako dolazim do ponude?",
        a: "Ispunite formu ili nazovite 095 515 0377. Trebaju nam lokacija, okvirna kvadratura i kratak opis radova, a fotografije ubrzavaju izradu ponude.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
