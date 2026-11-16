import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politika privatnosti – Keramika Dalmacija",
  description: "Kako Keramika Dalmacija obrađuje osobne podatke poslane putem kontakt forme.",
  alternates: { canonical: "/politika-privatnosti" },
  robots: { index: false, follow: true },
};

// NAPOMENA: prije objave dopuniti podacima voditelja obrade (naziv obrta/tvrtke, OIB, adresa, e-mail).
export default function Privatnost() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-36">
      <h1 className="text-4xl font-bold tracking-tight">Politika privatnosti</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
        <p>
          {site.name} prikuplja samo podatke koje sami upišete u kontakt formu: ime, telefon, e-mail adresu (ako je
          navedete), lokaciju i opis radova.
        </p>
        <p>
          Podatke koristimo isključivo kako bismo odgovorili na vaš upit i izradili ponudu. Ne prodajemo ih i ne
          ustupamo trećim stranama, osim pružateljima usluga nužnima za rad stranice i dostavu e-pošte.
        </p>
        <p>
          Podatke čuvamo onoliko koliko je potrebno za obradu upita i izvršenje dogovorenih radova, odnosno koliko
          nalažu propisi.
        </p>
        <p>
          U svakom trenutku možete zatražiti uvid, ispravak ili brisanje svojih podataka pozivom na {site.phoneDisplay}.
        </p>
      </div>
    </div>
  );
}
