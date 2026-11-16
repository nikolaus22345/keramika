import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection, Hero, JsonLd, Section, breadcrumbJsonLd } from "@/components/sections";
import { ArrowIcon } from "@/components/icons";
import { services } from "@/lib/services";

const title = "Usluge – keramika, knauf, gletanje i soboslikarski radovi";
const description =
  "Sve usluge na jednom mjestu: keramičarski radovi, postavljanje pločica, kupaonice, terase, knauf, spušteni stropovi, gletanje i moleraj u Dalmaciji.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/usluge" } };

export default function Usluge() {
  const crumbs = [{ name: "Usluge" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs, "/usluge")} />
      <Hero
        badge="Usluge • Dalmacija"
        title="Keramičarski i završni radovi"
        text="Pločice, suha gradnja, gletanje i bojanje — svaku uslugu izvodimo zasebno ili kao kompletne završne radove."
        crumbs={crumbs}
      />
      <Section title="Što radimo">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/usluge/${s.slug}`} className="group flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:border-brand/40 hover:shadow-lg">
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/70">{s.short}</p>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand">
                Saznaj više <ArrowIcon width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <ContactSection />
    </>
  );
}
