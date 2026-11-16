export type LocType = "obala" | "otok" | "zaledje";
export type RegionSlug = "split" | "zadar" | "sibenik" | "dubrovnik" | "hercegovina";

export interface Region {
  slug: RegionSlug;
  name: string; // npr. "Split i okolica"
  county: string;
  lok: string; // "na području Splita i okolice"
  intro: string;
}

export interface Location {
  slug: string;
  name: string;
  lok: string; // lokativ s prijedlogom: "u Splitu", "na Braču"
  type: LocType;
  region: RegionSlug;
  top: boolean;
  note?: string;
}

export const regions: Region[] = [
  {
    slug: "split",
    name: "Split i okolica",
    county: "Splitsko-dalmatinska županija",
    lok: "na području Splita i Splitsko-dalmatinske županije",
    intro:
      "Od Trogira i Kaštela preko Splita, Omiša i Makarske rivijere do Sinja, Imotskog i otoka Brača, Hvara, Šolte i Visa.",
  },
  {
    slug: "zadar",
    name: "Zadar i okolica",
    county: "Zadarska županija",
    lok: "na području Zadra i okolice",
    intro:
      "Zadar, Biograd na Moru, Benkovac, Sukošan, Pakoštane te otoci Ugljan i Pašman.",
  },
  {
    slug: "sibenik",
    name: "Šibenik i okolica",
    county: "Šibensko-kninska županija",
    lok: "na području Šibenika i Šibensko-kninske županije",
    intro:
      "Šibenik, Vodice, Primošten, Rogoznica, Murter, Skradin, Drniš i Knin.",
  },
  {
    slug: "dubrovnik",
    name: "Dubrovnik i jug Dalmacije",
    county: "Dubrovačko-neretvanska županija",
    lok: "na području Dubrovnika, Pelješca, Korčule i doline Neretve",
    intro:
      "Dubrovnik, Cavtat, Konavle, Župa dubrovačka, Pelješac, Korčula, Metković, Ploče i Opuzen.",
  },
  {
    slug: "hercegovina",
    name: "Hercegovina",
    county: "Hercegovina",
    lok: "u Hercegovini",
    intro:
      "Mostar, Široki Brijeg, Međugorje, Čitluk, Ljubuški, Grude, Posušje, Čapljina i Neum.",
  },
];

// Format: "Naziv|lokativ|tip" (o = obala, i = otok, z = zaleđe). Redoslijed je zemljopisni
// pa se "obližnja mjesta" računaju iz susjeda u popisu.
const raw: Record<RegionSlug, string[]> = {
  zadar: [
    "Zadar|u Zadru|o", "Bibinje|u Bibinjama|o", "Sukošan|u Sukošanu|o",
    "Zemunik Donji|u Zemuniku Donjem|z", "Škabrnja|u Škabrnji|z", "Galovac|u Galovcu|z",
    "Preko|u Preku|i", "Kali|u Kalima|i", "Kukljica|u Kukljici|i",
    "Sveti Filip i Jakov|u Svetom Filipu i Jakovu|o", "Turanj|u Turnju|o",
    "Biograd na Moru|u Biogradu na Moru|o", "Pašman|na Pašmanu|i", "Tkon|u Tkonu|i",
    "Pakoštane|u Pakoštanima|o", "Drage|u Dragama|o", "Benkovac|u Benkovcu|z",
    "Polača|u Polači|z", "Stankovci|u Stankovcima|z",
  ],
  sibenik: [
    "Pirovac|u Pirovcu|o", "Tisno|u Tisnom|o", "Jezera|u Jezerima|i", "Betina|u Betini|i",
    "Murter|na Murteru|i", "Tribunj|u Tribunju|o", "Vodice|u Vodicama|o", "Srima|u Srimi|o",
    "Šibenik|u Šibeniku|o", "Bilice|u Bilicama|o", "Skradin|u Skradinu|z",
    "Brodarica|u Brodarici|o", "Žaborić|u Žaboriću|o", "Grebaštica|u Grebaštici|o",
    "Primošten|u Primoštenu|o", "Rogoznica|u Rogoznici|o", "Drniš|u Drnišu|z",
    "Unešić|u Unešiću|z", "Knin|u Kninu|z", "Kistanje|u Kistanjama|z",
  ],
  split: [
    "Marina|u Marini|o", "Seget Donji|u Segetu Donjem|o", "Trogir|u Trogiru|o",
    "Čiovo|na Čiovu|i", "Okrug Gornji|u Okrugu Gornjem|i", "Slatine|u Slatinama|i",
    "Kaštela|u Kaštelima|o", "Kaštel Štafilić|u Kaštel Štafiliću|o",
    "Kaštel Novi|u Kaštel Novom|o", "Kaštel Stari|u Kaštel Starom|o",
    "Kaštel Lukšić|u Kaštel Lukšiću|o", "Kaštel Kambelovac|u Kaštel Kambelovcu|o",
    "Kaštel Gomilica|u Kaštel Gomilici|o", "Kaštel Sućurac|u Kaštel Sućurcu|o",
    "Solin|u Solinu|o", "Vranjic|u Vranjicu|o", "Mravince|u Mravincima|z",
    "Kučine|u Kučinama|z", "Klis|u Klisu|z", "Dugopolje|u Dugopolju|z",
    "Split|u Splitu|o", "Stobreč|u Stobreču|o", "Žrnovnica|u Žrnovnici|z",
    "Srinjine|u Srinjinama|z", "Podstrana|u Podstrani|o", "Jesenice|u Jesenicama|o",
    "Dugi Rat|u Dugom Ratu|o", "Duće|u Dućama|o", "Omiš|u Omišu|o", "Tugare|u Tugarima|z",
    "Gata|u Gatima|z", "Lokva Rogoznica|u Lokvi Rogoznici|o", "Mimice|u Mimicama|o",
    "Zadvarje|u Zadvarju|z", "Šestanovac|u Šestanovcu|z", "Brela|u Brelima|o",
    "Baška Voda|u Baškoj Vodi|o", "Promajna|u Promajni|o", "Makarska|u Makarskoj|o",
    "Tučepi|u Tučepima|o", "Podgora|u Podgori|o", "Igrane|u Igranima|o",
    "Živogošće|u Živogošću|o", "Drvenik|u Drveniku|o", "Gradac|u Gradcu|o",
    "Vrgorac|u Vrgorcu|z", "Zagvozd|u Zagvozdu|z", "Imotski|u Imotskom|z",
    "Proložac|u Prološcu|z", "Zmijavci|u Zmijavcima|z", "Runovići|u Runovićima|z",
    "Lovreć|u Lovreću|z", "Cista Provo|u Cisti Provo|z", "Trilj|u Trilju|z",
    "Sinj|u Sinju|z", "Brnaze|u Brnazama|z", "Hrvace|u Hrvacama|z", "Vrlika|u Vrlici|z",
    "Dicmo|u Dicmu|z", "Muć|u Muću|z", "Brač|na Braču|i", "Supetar|u Supetru|i",
    "Sutivan|u Sutivanu|i", "Milna|u Milni|i", "Nerežišća|u Nerežišćima|i",
    "Postira|u Postirima|i", "Pučišća|u Pučišćima|i", "Bol|u Bolu|i", "Selca|u Selcima|i",
    "Sumartin|u Sumartinu|i", "Šolta|na Šolti|i", "Grohote|u Grohotama|i", "Hvar|u Hvaru|i",
    "Stari Grad|u Starom Gradu|i", "Jelsa|u Jelsi|i", "Vrboska|u Vrboskoj|i",
    "Sućuraj|u Sućurju|i", "Vis|na Visu|i", "Komiža|u Komiži|i",
  ],
  dubrovnik: [
    "Ploče|u Pločama|o", "Baćina|u Baćini|o", "Rogotin|u Rogotinu|z", "Komin|u Kominu|z",
    "Opuzen|u Opuzenu|z", "Metković|u Metkoviću|z", "Kula Norinska|u Kuli Norinskoj|z",
    "Klek|u Kleku|o", "Pelješac|na Pelješcu|o", "Ston|u Stonu|o", "Janjina|u Janjini|o",
    "Trpanj|u Trpnju|o", "Orebić|u Orebiću|o", "Viganj|u Vignju|o", "Korčula|u Korčuli|i",
    "Žrnovo|u Žrnovu|i", "Lumbarda|u Lumbardi|i", "Smokvica|u Smokvici|i", "Blato|u Blatu|i",
    "Vela Luka|u Veloj Luci|i", "Lastovo|na Lastovu|i", "Mljet|na Mljetu|i",
    "Slano|u Slanom|o", "Trsteno|u Trstenom|o", "Orašac|u Orašcu|o", "Šipan|na Šipanu|i",
    "Lopud|na Lopudu|i", "Koločep|na Koločepu|i", "Mokošica|u Mokošici|o",
    "Dubrovnik|u Dubrovniku|o", "Župa dubrovačka|u Župi dubrovačkoj|o",
    "Kupari|u Kuparima|o", "Srebreno|u Srebrenom|o", "Mlini|u Mlinima|o", "Plat|u Platu|o",
    "Cavtat|u Cavtatu|o", "Čilipi|u Čilipima|z", "Konavle|u Konavlima|z", "Gruda|u Grudi|z",
    "Molunat|u Moluntu|o",
  ],
  hercegovina: [
    "Neum|u Neumu|o", "Čapljina|u Čapljini|z", "Stolac|u Stocu|z", "Trebinje|u Trebinju|z",
    "Međugorje|u Međugorju|z", "Čitluk|u Čitluku|z", "Ljubuški|u Ljubuškom|z",
    "Vitina|u Vitini|z", "Grude|u Grudama|z", "Široki Brijeg|u Širokom Brijegu|z",
    "Mostar|u Mostaru|z", "Posušje|u Posušju|z", "Tomislavgrad|u Tomislavgradu|z",
    "Livno|u Livnu|z",
  ],
};

// Gradovi koji dobivaju i stranice za knauf, soboslikarske radove i gletanje.
const topNames = new Set([
  "Split", "Solin", "Kaštela", "Trogir", "Omiš", "Makarska", "Sinj", "Imotski", "Podstrana",
  "Trilj", "Vrgorac", "Baška Voda", "Supetar", "Hvar", "Zadar", "Biograd na Moru", "Benkovac",
  "Šibenik", "Vodice", "Primošten", "Knin", "Drniš", "Dubrovnik", "Cavtat", "Metković",
  "Ploče", "Korčula", "Mostar", "Široki Brijeg", "Međugorje",
]);

const notes: Record<string, string> = {
  Split:
    "U Splitu radimo u stanovima u starijim zgradama, u novogradnji i u apartmanima — od Meja, Bačvica i Spinuta do Mertojaka, Kile i Pazdigrada.",
  Zadar:
    "U Zadru radimo od Poluotoka i Voštarnice do Borika, Diklovca, Bilog Briga i Ploča, u stanovima, kućama i apartmanima.",
  Šibenik:
    "U Šibeniku radimo od stare gradske jezgre do Šubićevca, Vidika, Meterize i Ražina, uključujući kamene kuće koje traže pažljivu pripremu podloge.",
  Dubrovnik:
    "U Dubrovniku radimo na Lapadu, u Gružu, na Pločama i u Mokošici. Za radove u staroj jezgri unaprijed dogovaramo dopremu materijala jer je pristup vozilom ograničen.",
  Makarska:
    "Makarska i cijela rivijera imaju mnogo apartmana i kuća za odmor, pa se radovi najčešće dogovaraju izvan turističke sezone — javite se na vrijeme za termin.",
  Trogir:
    "U Trogiru i na Čiovu česte su obnove apartmana te kamenih kuća u staroj jezgri, gdje dopremu materijala planiramo unaprijed.",
  Kaštela:
    "Radimo u svih sedam Kaštela, od Štafilića do Sućurca, u obiteljskim kućama, stanovima i apartmanima.",
  Solin: "U Solinu radimo u novogradnji, obiteljskim kućama i poslovnim prostorima, kao i u Vranjicu, Mravincima i Kučinama.",
  Omiš: "U Omišu i duž omiške rivijere radimo u stanovima, kućama i apartmanima, a dolazimo i u Poljica i zaleđe.",
  Sinj: "U Sinju i Cetinskoj krajini zime su hladnije nego na obali, pa za vanjske terase i stepenice preporučujemo pločice i ljepila otporne na smrzavanje.",
  Imotski: "U Imotskom i Imotskoj krajini radimo u obiteljskim kućama i novogradnji, a dolazimo i u okolna mjesta s obje strane granice.",
  Metković: "U Metkoviću i dolini Neretve radimo u kućama, stanovima i poslovnim prostorima, uključujući Opuzen, Ploče i okolna mjesta.",
  Mostar: "U Mostaru radimo u stanovima, kućama i poslovnim prostorima. Za radove u Hercegovini termin dogovaramo unaprijed — pošaljite upit s opisom i kvadraturom.",
  Hvar: "U gradu Hvaru i na otoku dopremu materijala usklađujemo s trajektnim linijama, a radove u apartmanima planiramo izvan sezone.",
  Korčula: "Na Korčuli dopremu materijala usklađujemo s trajektom, a u staroj jezgri računamo na ručno unošenje materijala.",
  Vodice: "U Vodicama, Srimi i Tribunju najviše radimo u apartmanima i kućama za odmor, pa je jesen i zima najtraženiji termin.",
};

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/đ/g, "dj")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const typeMap = { o: "obala", i: "otok", z: "zaledje" } as const;

export const locations: Location[] = (Object.keys(raw) as RegionSlug[]).flatMap((region) =>
  raw[region].map((entry) => {
    const [name, lok, t] = entry.split("|");
    return {
      slug: slugify(name),
      name,
      lok,
      type: typeMap[t as keyof typeof typeMap],
      region,
      top: topNames.has(name),
      note: notes[name],
    };
  }),
);

export const topLocations = locations.filter((l) => l.top);

export function getRegion(slug: string) {
  return regions.find((r) => r.slug === slug);
}

export function locationsIn(region: RegionSlug) {
  return locations.filter((l) => l.region === region);
}

/** Susjedna mjesta iz iste regije (po zemljopisnom redoslijedu u popisu). */
export function nearby(loc: Location, count = 8): Location[] {
  const list = locationsIn(loc.region);
  const i = list.findIndex((l) => l.slug === loc.slug);
  const out: Location[] = [];
  for (let d = 1; out.length < count && d < list.length; d++) {
    if (list[i - d]) out.push(list[i - d]);
    if (out.length < count && list[i + d]) out.push(list[i + d]);
  }
  return out;
}
