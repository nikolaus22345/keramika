import type { Metadata } from "next";
import { ContactSection, Hero, JsonLd, breadcrumbJsonLd } from "@/components/sections";

const title = "Kontakt – Keramika Dalmacija | 095 515 0377";
const description =
  "Pošaljite upit za keramičarske radove, knauf, gletanje ili soboslikarske radove u Dalmaciji. Nazovite 095 515 0377 ili ispunite kontakt formu.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/kontakt" } };

export default function Kontakt() {
  const crumbs = [{ name: "Kontakt" }];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs, "/kontakt")} />
      <Hero
        badge="Kontakt"
        title="Pošaljite upit"
        text="Opišite radove, navedite lokaciju i okvirnu kvadraturu. Ponudu dobivate nakon dogovora — cjenik ne objavljujemo jer je svaki prostor drugačiji."
        crumbs={crumbs}
      />
      <ContactSection title="Kontakt forma" />
    </>
  );
}
