import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckList, ContactSection, FaqList, Hero, JsonLd, LinkChips, Section, Steps,
  breadcrumbJsonLd, faqJsonLd, type Crumb,
} from "@/components/sections";
import { getLanding, hasLanding, kindOrder, kinds, landingContent, landingHref, landings } from "@/lib/landing";
import { nearby } from "@/lib/locations";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return landings.map((l) => ({ slug: l.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const landing = getLanding((await params).slug);
  if (!landing) return {};
  const def = kinds[landing.kind];
  const title = def.title(landing.loc);
  const description = def.description(landing.loc);
  return {
    title,
    description,
    alternates: { canonical: `/${landing.slug}` },
    openGraph: { title, description, url: `/${landing.slug}` },
  };
}

const formUsluga = {
  keramicar: "Keramičarski radovi / pločice",
  knauf: "Knauf / spušteni strop",
  soboslikar: "Soboslikarski radovi / moleraj",
  gletanje: "Gletanje",
} as const;

export default async function LandingPage({ params }: Props) {
  const landing = getLanding((await params).slug);
  if (!landing) notFound();
  const { loc, kind } = landing;
  const c = landingContent(landing);
  const { def, region } = c;
  const h1 = def.h1(loc);
  const crumbs: Crumb[] = [
    { name: "Lokacije", href: "/lokacije" },
    { name: region.name, href: `/lokacije/${region.slug}` },
    { name: h1 },
  ];
  const near = nearby(loc, 10).filter((n) => hasLanding(kind, n));
  const others = kindOrder.filter((k) => k !== kind && hasLanding(k, loc));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: h1,
          serviceType: def.serviceName,
          description: def.description(loc),
          url: `${site.url}/${landing.slug}`,
          areaServed: { "@type": "Place", name: loc.name },
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            telephone: "+385955150377",
            url: site.url,
          },
        }}
      />
      <JsonLd data={faqJsonLd(c.faq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs, `/${landing.slug}`)} />

      <Hero badge={`${def.badge} • ${loc.name}`} title={h1} text={c.intro} crumbs={crumbs} />

      <Section title={`${def.label === "Keramičar" ? "Keramičarski radovi" : def.label === "Soboslikar" ? "Soboslikarski radovi" : def.label === "Knauf" ? "Knauf radovi" : "Gletanje"} ${loc.lok} — što radimo`}>
        <CheckList items={c.items} />
        <p className="mt-8 text-[15px] text-ink/70">
          Više o usluzi:{" "}
          <Link href={`/usluge/${def.serviceSlug}`} className="font-semibold text-brand hover:underline">
            {def.serviceName}
          </Link>
          .
        </p>
      </Section>

      <Section tint title={`Radovi ${loc.lok} i okolici`}>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/75">
          {c.local.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            {loc.name} pripada području koje redovito pokrivamo ({region.county}). Cijenu dobivate na upit — javite
            lokaciju, kvadraturu i vrstu radova na{" "}
            <a href={site.phoneHref} className="font-semibold text-brand">{site.phoneDisplay}</a> ili kroz formu niže.
          </p>
        </div>
        {others.length > 0 && (
          <>
            <h3 className="mb-4 mt-10 text-lg font-semibold">Ostale usluge {loc.lok}</h3>
            <LinkChips links={others.map((k) => ({ href: landingHref(k, loc), label: kinds[k].h1(loc) }))} />
          </>
        )}
      </Section>

      <Section title="Kako do ponude i termina">
        <Steps />
      </Section>

      <Section tint title={`Česta pitanja — ${h1.toLowerCase().replace(loc.name.toLowerCase(), loc.name)}`}>
        <FaqList faq={c.faq} />
      </Section>

      {near.length > 0 && (
        <Section title="Radimo i u obližnjim mjestima">
          <LinkChips links={near.map((n) => ({ href: landingHref(kind, n), label: kinds[kind].h1(n) }))} />
        </Section>
      )}

      <ContactSection lokacija={loc.name} usluga={formUsluga[kind]} title={`Zatražite ponudu za radove ${loc.lok}`} />
    </>
  );
}
