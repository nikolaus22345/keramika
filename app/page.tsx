import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection, FaqList, Hero, JsonLd, LinkChips, Section, Steps, faqJsonLd } from "@/components/sections";
import { ArrowIcon, PinIcon } from "@/components/icons";
import { services } from "@/lib/services";
import { locationsIn, regions, topLocations } from "@/lib/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Keramičar Split – postavljanje pločica i keramičarski radovi",
  description:
    "Keramičar Split: postavljanje pločica, kupaonice, terase i stepenice te knauf, gletanje i moleraj. Radimo u Splitu i cijeloj Dalmaciji. Ponuda na upit – 095 515 0377.",
  alternates: { canonical: "/" },
};

const faq = [
  {
    q: "Na kojem području radite?",
    a: "Radimo u cijeloj Dalmaciji — od Zadra preko Šibenika, Splita i Makarske do Dubrovnika, uključujući otoke i zaleđe. Po dogovoru dolazimo i u Hercegovinu.",
  },
  {
    q: "Koliko koštaju keramičarski i završni radovi?",
    a: "Cjenik ne objavljujemo jer cijena ovisi o kvadraturi, stanju podloge, materijalu i lokaciji. Pošaljite upit kroz formu i dobit ćete ponudu za svoj prostor.",
  },
  {
    q: "Koje sve radove izvodite?",
    a: "Keramičarske radove (podne i zidne pločice, kupaonice, terase, stepenice), knauf i spuštene stropove, gletanje te soboslikarske radove (moleraj, ličenje).",
  },
  {
    q: "Radite li apartmane izvan sezone?",
    a: "Da. Jesen, zima i rano proljeće najtraženiji su termini za uređenje apartmana, pa preporučujemo da se javite što ranije.",
  },
  {
    q: "Što trebam poslati za ponudu?",
    a: "Lokaciju, vrstu radova, okvirnu kvadraturu i nekoliko fotografija prostora. Ako imate nacrt ili već odabrane pločice, pošaljite i to.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: site.name,
          url: site.url,
          telephone: "+385955150377",
          image: `${site.url}/icon-512.png`,
          areaServed: [
            ...regions.map((r) => ({ "@type": "AdministrativeArea", name: r.county })),
            ...topLocations.map((l) => ({ "@type": "City", name: l.name })),
          ],
          knowsAbout: services.map((s) => s.name),
        }}
      />
      <JsonLd data={faqJsonLd(faq)} />

      <Hero
        badge="Keramičarski radovi • Split i Dalmacija"
        title="Keramičar Split"
        text="Postavljanje pločica, kupaonice, terase i stepenice te knauf, gletanje i soboslikarski radovi. Za stanove, kuće, apartmane i poslovne prostore — u Splitu i cijeloj Dalmaciji."
      />

      <Section
        id="usluge"
        title="Keramika i fini završni radovi"
        lead="Jedan izvođač za pločice, suhu gradnju, gletanje i bojanje — bez usklađivanja više majstora."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/usluge/${s.slug}`} className="group flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg">
              <span className="grid h-11 w-11 grid-cols-2 gap-1 rounded-xl bg-brand-soft p-2.5">
                <i className="rounded-[3px] bg-brand" /><i className="rounded-[3px] bg-brand/40" />
                <i className="rounded-[3px] bg-brand/40" /><i className="rounded-[3px] bg-brand" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/70">{s.short}</p>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand">
                Saznaj više <ArrowIcon width={16} height={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="lokacije"
        tint
        title="Gdje radimo"
        lead="Pokrivamo sve četiri dalmatinske županije — gradove, rivijere, otoke i zaleđe — a po dogovoru i Hercegovinu."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <Link key={r.slug} href={`/lokacije/${r.slug}`} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:border-brand/40">
              <span className="flex items-center gap-2 text-sm font-semibold text-brand">
                <PinIcon width={16} height={16} /> {locationsIn(r.slug).length} mjesta
              </span>
              <h3 className="mt-3 text-xl font-semibold">{r.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{r.intro}</p>
            </Link>
          ))}
        </div>
        <h3 className="mb-4 mt-12 text-lg font-semibold">Najtraženije lokacije</h3>
        <LinkChips links={topLocations.filter((l) => l.slug !== "split").map((l) => ({ href: `/keramicar-${l.slug}`, label: `Keramičar ${l.name}` }))} />
        <Link href="/lokacije" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-brand">
          Sve lokacije <ArrowIcon width={18} height={18} />
        </Link>
      </Section>

      <Section id="postupak" title="Kako izgleda suradnja" lead="Od prvog upita do gotovih radova u četiri koraka.">
        <Steps />
      </Section>

      <Section id="pitanja" tint title="Česta pitanja">
        <FaqList faq={faq} />
      </Section>

      <ContactSection />
    </>
  );
}
