import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckList, ContactSection, FaqList, Hero, JsonLd, LinkChips, Section, Steps,
  breadcrumbJsonLd, faqJsonLd,
} from "@/components/sections";
import { getService, services } from "@/lib/services";
import { kinds, landingHref } from "@/lib/landing";
import { topLocations } from "@/lib/locations";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/usluge/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `/usluge/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const path = `/usluge/${s.slug}`;
  const crumbs = [{ name: "Usluge", href: "/usluge" }, { name: s.name }];
  const def = kinds[s.kind];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.h1,
          description: s.description,
          url: `${site.url}${path}`,
          areaServed: "Dalmacija",
          provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: "+385955150377", url: site.url },
        }}
      />
      <JsonLd data={faqJsonLd(s.faq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs, path)} />

      <Hero badge={`${s.name} • Dalmacija`} title={s.h1} text={s.intro[0]} crumbs={crumbs} />

      <Section title={s.itemsTitle} lead={s.intro[1]}>
        <CheckList items={s.items} />
      </Section>

      <Section tint title="Kako izgleda suradnja">
        <Steps />
      </Section>

      <Section title={`Česta pitanja — ${s.name.toLowerCase()}`}>
        <FaqList faq={s.faq} />
      </Section>

      <Section tint title={`${def.label} po gradovima`} lead="Odaberite svoj grad ili pogledajte sve lokacije na kojima radimo.">
        <LinkChips
          links={[
            ...topLocations.map((l) => ({ href: landingHref(s.kind, l), label: def.h1(l) })),
            { href: "/lokacije", label: "Sve lokacije →" },
          ]}
        />
      </Section>

      <ContactSection title={`Zatražite ponudu — ${s.name.toLowerCase()}`} />
    </>
  );
}
