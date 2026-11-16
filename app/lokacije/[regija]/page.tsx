import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContactSection, Hero, JsonLd, LinkChips, Section, Steps, breadcrumbJsonLd,
} from "@/components/sections";
import { getRegion, locationsIn, regions } from "@/lib/locations";
import { kindOrder, kinds, landingHref } from "@/lib/landing";

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((r) => ({ regija: r.slug }));
}

type Props = { params: Promise<{ regija: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRegion((await params).regija);
  if (!r) return {};
  const title = `Keramičar ${r.name} – pločice, knauf i moleraj`;
  const description = `Keramičarski i završni radovi – ${r.county}: pločice, kupaonice, terase, knauf, gletanje i bojanje. Ponuda na upit: 095 515 0377.`;
  return { title, description, alternates: { canonical: `/lokacije/${r.slug}` } };
}

export default async function RegionPage({ params }: Props) {
  const r = getRegion((await params).regija);
  if (!r) notFound();
  const locs = locationsIn(r.slug);
  const top = locs.filter((l) => l.top);
  const crumbs = [{ name: "Lokacije", href: "/lokacije" }, { name: r.name }];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs, `/lokacije/${r.slug}`)} />
      <Hero
        badge={r.county}
        title={`Keramičar — ${r.name}`}
        text={`Keramičarske radove, knauf, gletanje i soboslikarske radove izvodimo ${r.lok}. ${r.intro}`}
        crumbs={crumbs}
      />
      <Section title={`Keramičar po mjestima — ${r.name}`} lead={`${locs.length} mjesta u kojima postavljamo pločice i izvodimo keramičarske radove.`}>
        <LinkChips links={locs.map((l) => ({ href: landingHref("keramicar", l), label: kinds.keramicar.h1(l) }))} />
      </Section>
      {kindOrder.slice(1).map((k, i) => (
        <Section key={k} tint={i % 2 === 0} title={`${k === "knauf" ? "Knauf radovi" : k === "soboslikar" ? "Soboslikarski radovi i moleraj" : "Gletanje zidova"} — ${r.name}`}>
          <LinkChips links={top.map((l) => ({ href: landingHref(k, l), label: kinds[k].h1(l) }))} />
        </Section>
      ))}
      <Section title="Kako izgleda suradnja">
        <Steps />
      </Section>
      <ContactSection title={`Zatražite ponudu — ${r.name}`} />
    </>
  );
}
