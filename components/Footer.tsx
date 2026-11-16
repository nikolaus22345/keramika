import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { regions } from "@/lib/locations";
import { LogoMark, PhoneIcon, WhatsAppIcon } from "./icons";

const cities = ["Split", "Zadar", "Šibenik", "Dubrovnik", "Makarska", "Trogir", "Mostar"];
const citySlug: Record<string, string> = {
  Split: "split", Zadar: "zadar", Šibenik: "sibenik", Dubrovnik: "dubrovnik",
  Makarska: "makarska", Trogir: "trogir", Mostar: "mostar",
};

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-[15px] font-semibold text-white">{title}</h3>
      <ul className="space-y-3 text-sm text-white/60">{children}</ul>
    </div>
  );
}

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-white">{children}</Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={36} dark={false} />
            <span className="text-lg font-bold tracking-tight">Keramika Dalmacija</span>
          </Link>
          <div className="mt-5 flex gap-2.5">
            <a href={site.phoneHref} aria-label="Nazovite" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-white hover:text-white">
              <PhoneIcon width={16} height={16} />
            </a>
            {site.whatsappEnabled && (
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-wa text-white">
                <WhatsAppIcon width={16} height={16} />
              </a>
            )}
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Keramičarski i fini završni radovi u Dalmaciji: pločice, knauf, gletanje i soboslikarski radovi za stanove, kuće i apartmane.
          </p>
          <p className="mt-7 font-semibold">Zatražite ponudu — brzo i bez obaveze.</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link href="/kontakt" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-brand hover:text-white">Ispuni formu</Link>
            <a href={site.phoneHref} className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:border-white">
              <PhoneIcon width={15} height={15} /> Nazovite
            </a>
            {site.whatsappEnabled && (
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold">
                <WhatsAppIcon width={15} height={15} /> WhatsApp
              </a>
            )}
          </div>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/40">
            Pošaljite upit putem forme ili nas nazovite direktno.
          </p>
        </div>

        <Col title="Usluge">
          {services.map((s) => (
            <L key={s.slug} href={`/usluge/${s.slug}`}>{s.name}</L>
          ))}
        </Col>
        <Col title="Lokacije">
          <L href="/lokacije">Sve lokacije</L>
          {cities.map((c) => (
            <L key={c} href={`/keramicar-${citySlug[c]}`}>Keramičar {c}</L>
          ))}
        </Col>
        <Col title="Regije">
          {regions.map((r) => (
            <L key={r.slug} href={`/lokacije/${r.slug}`}>{r.name}</L>
          ))}
          <L href="/#postupak">Postupak</L>
          <L href="/#pitanja">Česta pitanja</L>
        </Col>
        <Col title="Kontakt">
          <L href="/kontakt">Pošalji upit</L>
          <li><a href={site.phoneHref} className="hover:text-white">Nazovite {site.phoneDisplay}</a></li>
          {site.whatsappEnabled && (
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp poruka</a></li>
          )}
          <L href="/politika-privatnosti">Politika privatnosti</L>
        </Col>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-white/10 py-7 text-sm text-white/50">
          © {new Date().getFullYear()} {site.name}. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
