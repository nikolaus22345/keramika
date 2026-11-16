import { locations, type Location, getRegion } from "./locations";
import type { Faq, Kind } from "./services";

export interface KindDef {
  kind: Kind;
  prefix: string; // URL prefiks: /keramicar-split
  label: string; // "Keramičar"
  serviceName: string; // "keramičarski radovi"
  serviceSlug: string; // glavna stranica usluge
  h1: (l: Location) => string;
  title: (l: Location) => string;
  description: (l: Location) => string;
  badge: string;
}

export const kinds: Record<Kind, KindDef> = {
  keramicar: {
    kind: "keramicar",
    prefix: "keramicar",
    label: "Keramičar",
    serviceName: "keramičarski radovi",
    serviceSlug: "keramicarski-radovi",
    badge: "Keramičarski radovi",
    h1: (l) => `Keramičar ${l.name}`,
    title: (l) =>
      l.name.length > 9
        ? `Keramičar ${l.name} – postavljanje pločica`
        : `Keramičar ${l.name} – postavljanje pločica i keramičarski radovi`,
    description: (l) =>
      `Keramičar ${l.lok}: postavljanje pločica, kupaonice, terase i stepenice. Radimo i knauf, gletanje i bojanje. Ponuda na upit – nazovite 095 515 0377.`,
  },
  knauf: {
    kind: "knauf",
    prefix: "knauf",
    label: "Knauf",
    serviceName: "knauf radovi",
    serviceSlug: "knauf-radovi",
    badge: "Suha gradnja",
    h1: (l) => `Knauf radovi ${l.name}`,
    title: (l) => `Knauf ${l.name} – spušteni stropovi i pregradni zidovi`,
    description: (l) =>
      `Knauf radovi ${l.lok}: pregradni zidovi, spušteni stropovi, obloge i potkrovlja od gips-kartona. Ponuda na upit – nazovite 095 515 0377.`,
  },
  soboslikar: {
    kind: "soboslikar",
    prefix: "soboslikar",
    label: "Soboslikar",
    serviceName: "soboslikarski radovi",
    serviceSlug: "soboslikarski-radovi",
    badge: "Moleraj i ličenje",
    h1: (l) => `Soboslikar ${l.name}`,
    title: (l) =>
      l.name.length > 9 ? `Soboslikar ${l.name} – moleraj i bojanje zidova` : `Soboslikar ${l.name} – moleraj, ličenje i bojanje zidova`,
    description: (l) =>
      `Soboslikar ${l.lok}: bojanje zidova i stropova, moleraj i pituravanje stanova, kuća i apartmana. Ponuda na upit – nazovite 095 515 0377.`,
  },
  gletanje: {
    kind: "gletanje",
    prefix: "gletanje",
    label: "Gletanje",
    serviceName: "gletanje zidova",
    serviceSlug: "gletanje-zidova",
    badge: "Gletanje i brušenje",
    h1: (l) => `Gletanje zidova ${l.name}`,
    title: (l) => `Gletanje zidova ${l.name} – gletanje i brušenje zidova`,
    description: (l) =>
      `Gletanje zidova i stropova ${l.lok}: priprema, gletanje i brušenje do glatke površine spremne za bojanje. Ponuda na upit – 095 515 0377.`,
  },
};

export const kindOrder: Kind[] = ["keramicar", "knauf", "soboslikar", "gletanje"];

export interface Landing {
  slug: string;
  kind: Kind;
  loc: Location;
}

export const landings: Landing[] = kindOrder.flatMap((kind) =>
  locations
    .filter((l) => kind === "keramicar" || l.top)
    // Split kao keramičar pokriva naslovnica (redirect u next.config), pa ga ovdje preskačemo.
    .filter((l) => !(kind === "keramicar" && l.slug === "split"))
    .map((loc) => ({ slug: `${kinds[kind].prefix}-${loc.slug}`, kind, loc })),
);

const bySlug = new Map(landings.map((l) => [l.slug, l]));
export const getLanding = (slug: string) => bySlug.get(slug);
export const landingHref = (kind: Kind, loc: Location) => `/${kinds[kind].prefix}-${loc.slug}`;
export const hasLanding = (kind: Kind, loc: Location) => kind === "keramicar" || loc.top;

function pick<T>(arr: T[], seed: string): T {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return arr[h % arr.length];
}

const intros: Record<Kind, ((l: Location) => string)[]> = {
  keramicar: [
    (l) => `Trebate keramičara ${l.lok}? Postavljamo podne i zidne pločice u stanovima, kućama, apartmanima i poslovnim prostorima — od pripreme podloge do završnog fugiranja.`,
    (l) => `Izvodimo keramičarske radove ${l.lok}: kupaonice, kuhinje, podove, terase i stepenice. Radimo uredno, s pločicama u ravnini i ujednačenim fugama.`,
    (l) => `Keramičar ${l.lok} za novogradnju i adaptacije. Postavljamo keramiku i gres svih formata, a prije pločica rješavamo podlogu i hidroizolaciju.`,
  ],
  knauf: [
    (l) => `Izvodimo knauf radove ${l.lok}: pregradne zidove, spuštene stropove, zidne obloge i uređenje potkrovlja — brzo i bez mokrih radova.`,
    (l) => `Trebate majstora za knauf ${l.lok}? Radimo suhu gradnju u stanovima, kućama, apartmanima i lokalima, sa spojevima pogletanim i spremnim za bojanje.`,
  ],
  soboslikar: [
    (l) => `Trebate soboslikara ${l.lok}? Bojimo zidove i stropove u stanovima, kućama, apartmanima i poslovnim prostorima, uz pripremu podloge i zaštitu prostora.`,
    (l) => `Soboslikarski radovi i moleraj ${l.lok}: ličenje, pituravanje i osvježavanje prostora. Radimo čisto, a namještaj i podove prije radova zaštitimo.`,
  ],
  gletanje: [
    (l) => `Gletamo zidove i stropove ${l.lok} — nove žbukane površine, knauf ploče i stare zidove pri adaptaciji — do glatke površine spremne za bojanje.`,
    (l) => `Gletanje i brušenje zidova ${l.lok}: saniramo pukotine, bandažiramo spojeve i gletamo u više slojeva kako bi boja ravnomjerno legla.`,
  ],
};

const items: Record<Kind, string[]> = {
  keramicar: [
    "Postavljanje podnih i zidnih pločica",
    "Pločice u kupaonici i WC-u, s hidroizolacijom",
    "Velikoformatni i rektificirani gres",
    "Kuhinje i zidovi između kuhinjskih elemenata",
    "Terase, balkoni i vanjske stepenice",
    "Izravnavanje i priprema podloge",
    "Fugiranje, silikoniranje, lajsne i cokl",
    "Zamjena starih pločica",
  ],
  knauf: [
    "Pregradni zidovi s izolacijom",
    "Spušteni stropovi, ravni i kaskadni",
    "LED kanali i otvori za ugradbenu rasvjetu",
    "Zidne obloge i izravnavanje starih zidova",
    "Uređenje potkrovlja",
    "Vlagootporne ploče za kupaonice",
    "Maske za cijevi, instalacije i vodokotliće",
    "Bandažiranje i gletanje spojeva",
  ],
  soboslikar: [
    "Bojanje zidova i stropova",
    "Priprema podloge i sanacija pukotina",
    "Gletanje i brušenje prije bojanja",
    "Perive boje i boje za kupaonice i kuhinje",
    "Uklanjanje fleka i tragova vlage",
    "Osvježavanje apartmana prije sezone",
    "Bojanje poslovnih prostora",
    "Zaštita prostora i čišćenje nakon radova",
  ],
  gletanje: [
    "Gletanje novih žbukanih zidova",
    "Gletanje knauf ploča i spojeva",
    "Gletanje stropova",
    "Sanacija pukotina i oštećenja",
    "Struganje stare boje",
    "Brušenje i otprašivanje",
    "Impregnacija prije bojanja",
    "Špalete i kutovi oko prozora i vrata",
  ],
};

const typeText: Record<Kind, Record<Location["type"], (l: Location) => string>> = {
  keramicar: {
    obala: (l) => `Uz more su terase i balkoni izloženi soli, suncu i buri, pa ${l.lok} za vanjske površine preporučujemo protuklizni gres, fleksibilna ljepila i urednu hidroizolaciju. U apartmanima i kućama za odmor radove najčešće dogovaramo izvan turističke sezone.`,
    otok: (l) => `Za radove ${l.lok} dopremu pločica, ljepila i alata planiramo unaprijed i usklađujemo s trajektnim linijama, kako na gradilištu ne bi bilo čekanja. Za vanjske površine uz more preporučujemo protuklizni gres otporan na sol i sunce.`,
    zaledje: (l) => `U zaleđu su zime hladnije nego na obali, pa ${l.lok} za terase, balkone i vanjske stepenice preporučujemo pločice i ljepila otporne na smrzavanje. Radimo u obiteljskim kućama, novogradnji i pri adaptacijama.`,
  },
  knauf: {
    obala: (l) => `U apartmanima i stanovima ${l.lok} knauf se najčešće koristi za nove pregrade, spuštene stropove s rasvjetom i skrivanje instalacija klime. U prostorima s više vlage ugrađujemo vlagootporne ploče.`,
    otok: (l) => `Za knauf radove ${l.lok} profile, ploče i izolaciju dopremamo trajektom, pa količine računamo unaprijed prema mjerama ili nacrtu.`,
    zaledje: (l) => `U kućama ${l.lok} često uređujemo potkrovlja i oblažemo stare zidove, uz toplinsku izolaciju koja prostor čini ugodnijim i zimi i ljeti.`,
  },
  soboslikar: {
    obala: (l) => `Vlaga i sol uz more znaju ostaviti tragove na zidovima, pa ${l.lok} prije bojanja saniramo fleke i biramo paropropusne ili perive boje, ovisno o prostoru. Apartmane bojimo izvan sezone, da budu spremni za prve goste.`,
    otok: (l) => `Apartmane i kuće ${l.lok} najčešće bojimo u jesen, zimu i rano proljeće. Boju i materijal dopremamo sami, a termin usklađujemo s trajektom.`,
    zaledje: (l) => `U kućama ${l.lok} bojimo cijele katove ili pojedine prostorije, a prije bojanja saniramo pukotine i tragove kondenzacije koji se javljaju u hladnijem dijelu godine.`,
  },
  gletanje: {
    obala: (l) => `U starijim stanovima i kamenim kućama ${l.lok} zidovi su često neravni ili oštećeni vlagom, pa gletanju prethodi sanacija podloge. U novogradnji gletamo žbuku i knauf do završne glatkoće.`,
    otok: (l) => `Radove ${l.lok} organiziramo tako da se gletanje i bojanje izvedu u jednom dolasku, uz materijal dopremljen unaprijed.`,
    zaledje: (l) => `U novim i obnovljenim kućama ${l.lok} gletamo zidove i stropove nakon žbukanja ili knaufa, a kod starijih zidova prvo saniramo pukotine.`,
  },
};

export function landingContent({ kind, loc }: Landing) {
  const def = kinds[kind];
  const region = getRegion(loc.region)!;
  const seed = `${kind}-${loc.slug}`;
  const faq: Faq[] = [
    {
      q: `Koliko koštaju ${def.serviceName} ${loc.lok}?`,
      a: `Cjenik ne objavljujemo jer cijena ovisi o kvadraturi, stanju podloge, materijalu i složenosti posla. Pošaljite upit s kratkim opisom, kvadraturom i fotografijama i dobit ćete ponudu za radove ${loc.lok}.`,
    },
    {
      q: `Dolazite li ${loc.type === "otok" ? "na otoke" : `u ${loc.name} i okolna mjesta`}?`,
      a:
        loc.region === "hercegovina"
          ? `Da. Radimo prvenstveno u Dalmaciji, a po dogovoru i u Hercegovini — ${loc.lok} i okolici. Termin dogovaramo unaprijed.`
          : `Da. Radimo ${region.lok}, uključujući ${loc.name} i okolna mjesta${loc.type === "otok" ? ", a dolazak usklađujemo s trajektnim linijama" : ""}.`,
    },
    pick<Faq>(
      [
        {
          q: "Kako mogu zatražiti ponudu?",
          a: "Ispunite kontakt formu na ovoj stranici ili nazovite 095 515 0377. Navedite lokaciju, vrstu radova i okvirnu kvadraturu — fotografije prostora ubrzavaju ponudu.",
        },
        {
          q: "Što vam je potrebno za izradu ponude?",
          a: "Lokacija, vrsta radova, okvirna kvadratura i nekoliko fotografija prostora. Ako imate nacrt ili odabrane materijale, pošaljite i to.",
        },
      ],
      seed,
    ),
    {
      q: "Izvodite li i druge završne radove?",
      a: "Da. Osim keramike radimo knauf, gletanje i soboslikarske radove, pa više radova možete dogovoriti s jednim izvođačem.",
    },
  ];
  return {
    def,
    region,
    intro: pick(intros[kind], seed)(loc),
    items: items[kind],
    local: [loc.note, typeText[kind][loc.type](loc)].filter(Boolean) as string[],
    faq,
  };
}
