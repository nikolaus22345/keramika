import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection, Hero, JsonLd, LinkChips, Section, breadcrumbJsonLd } from "@/components/sections";
import { locationsIn, regions } from "@/lib/locations";

const title = "Lokacije – keramičar u Dalmaciji i Hercegovini";
const description =
  "Popis svih mjesta u kojima izvodimo keramičarske i završne radove: Split, Zadar, Šibenik, Dubrovnik, Makarska, otoci, zaleđe i Hercegovina.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/lokacije" } };

export default function Lokacije() {
  const crumbs = [{ name: "Lokacije" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs, "/lokacije")} />
      <Hero
        badge="Lokacije • Dalmacija i Hercegovina"
        title="Gdje radimo"
        text="Keramičarske i završne radove izvodimo od Zadra do Dubrovnika — u gradovima, na rivijerama, otocima i u zaleđu — a po dogovoru i u Hercegovini."
        crumbs={crumbs}
      />
      {regions.map((r, i) => (
        <Section key={r.slug} tint={i % 2 === 1} title={r.name} lead={`${r.county}. ${r.intro}`}>
          <LinkChips links={locationsIn(r.slug).map((l) => ({ href: `/keramicar-${l.slug}`, label: l.name }))} />
          <Link href={`/lokacije/${r.slug}`} className="mt-7 inline-block font-semibold text-brand hover:underline">
            Sve usluge — {r.name} →
          </Link>
        </Section>
      ))}
      <ContactSection />
    </>
  );
}
