import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { ChevronIcon, LogoMark, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const nav = [
  { href: "/lokacije", label: "Lokacije" },
  { href: "/#postupak", label: "Postupak" },
  { href: "/#pitanja", label: "Česta pitanja" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-black/5 bg-white/95 py-2 pl-3 pr-2 shadow-lg shadow-black/10 backdrop-blur">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} – naslovna`}>
          <LogoMark size={40} />
          <span className="text-[15px] font-bold tracking-tight text-ink">
            Keramika <span className="text-brand">Dalmacija</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 lg:flex" aria-label="Glavna navigacija">
          <div className="group relative">
            <Link href="/usluge" className="flex items-center gap-1 py-2 hover:text-brand">
              Usluge <ChevronIcon />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link key={s.slug} href={`/usluge/${s.slug}`} className="block rounded-xl px-3 py-2 hover:bg-brand-soft hover:text-brand">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand sm:px-5">
            <PhoneIcon width={16} height={16} />
            <span className="hidden sm:inline">{site.phoneIntlDisplay}</span>
            <span className="sm:hidden">Nazovi</span>
          </a>
          {site.whatsappEnabled && (
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hidden h-10 w-10 items-center justify-center rounded-full bg-wa text-white hover:brightness-95 sm:flex">
              <WhatsAppIcon />
            </a>
          )}
          <details className="relative lg:hidden">
            <summary aria-label="Izbornik" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink">
              <MenuIcon />
            </summary>
            <div className="absolute right-0 top-full mt-3 w-72 rounded-3xl border border-black/5 bg-white p-3 text-sm font-medium shadow-2xl">
              <Link href="/usluge" className="block rounded-xl px-3 py-2.5 font-semibold hover:bg-brand-soft">Usluge</Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/usluge/${s.slug}`} className="block rounded-xl px-3 py-2 pl-6 text-ink/70 hover:bg-brand-soft">
                  {s.name}
                </Link>
              ))}
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="block rounded-xl px-3 py-2.5 font-semibold hover:bg-brand-soft">
                  {n.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
