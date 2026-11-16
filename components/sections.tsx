import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import type { Faq } from "@/lib/services";
import ContactForm from "./ContactForm";
import { ArrowIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export interface Crumb {
  name: string;
  href?: string;
}

export function Hero({
  badge,
  title,
  text,
  crumbs,
}: {
  badge: string;
  title: string;
  text: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="hero-bg text-white">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-36 sm:pb-24 sm:pt-44">
        {crumbs && (
          <nav aria-label="Putanja" className="mb-6 flex flex-wrap gap-x-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Naslovna</Link>
            {crumbs.map((c) => (
              <span key={c.name} className="flex gap-x-2">
                <span>/</span>
                {c.href ? <Link href={c.href} className="hover:text-white">{c.name}</Link> : <span className="text-white/90">{c.name}</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
          {badge}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#upit" className="flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold hover:bg-brand-dark">
            Zatraži ponudu <ArrowIcon width={18} height={18} />
          </a>
          {site.whatsappEnabled && (
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-wa px-6 py-3.5 font-semibold">
              <WhatsAppIcon width={18} height={18} /> WhatsApp
            </a>
          )}
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold hover:bg-white hover:text-ink">
            <PhoneIcon width={18} height={18} /> Nazovite {site.phoneDisplay}
          </a>
        </div>
        <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/75">
          {["Keramika, knauf, gletanje i bojanje", "Cijela Dalmacija, po dogovoru i Hercegovina", "Ponuda na upit, bez obaveze"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckIcon width={16} height={16} className="text-brand" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Section({
  id,
  title,
  lead,
  children,
  tint,
}: {
  id?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section id={id} className={tint ? "bg-[#f5f7fb]" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">{lead}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <CheckIcon width={14} height={14} />
          </span>
          <span className="text-[15px] leading-snug">{i}</span>
        </li>
      ))}
    </ul>
  );
}

const steps = [
  { t: "Pošaljite upit", d: "Ispunite formu ili nazovite. Navedite lokaciju, vrstu radova i okvirnu kvadraturu — fotografije pomažu." },
  { t: "Dogovor i ponuda", d: "Prolazimo detalje, po potrebi pogledamo prostor i šaljemo ponudu za dogovorene radove." },
  { t: "Izvođenje radova", d: "Dolazimo u dogovorenom terminu, zaštitimo prostor i radimo prema dogovoru." },
  { t: "Pregled i primopredaja", d: "Zajedno pregledamo izvedeno, a prostor ostavljamo uredan." },
];

export function Steps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.t} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <span className="text-4xl font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faq }: { faq: Faq[] }) {
  return (
    <div className="max-w-3xl divide-y divide-black/10 rounded-3xl border border-black/10 bg-white">
      {faq.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="flex items-center justify-between gap-4 text-lg font-semibold">
            <h3>{f.q}</h3>
            <span className="text-2xl font-normal text-brand transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: Crumb[], currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Naslovna", href: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href ?? currentPath}`,
    })),
  };
}

export function LinkChips({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="block rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ContactSection({ lokacija, usluga, title }: { lokacija?: string; usluga?: string; title?: string }) {
  return (
    <section id="upit" className="bg-[#f5f7fb]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title ?? "Zatražite ponudu"}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Cjenik ne objavljujemo — svaki je prostor drugačiji. Opišite radove i pošaljite upit, a ponudu dobivate nakon dogovora.
          </p>
          <div className="mt-8 space-y-3">
            <a href={site.phoneHref} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 hover:border-brand">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white"><PhoneIcon /></span>
              <span>
                <span className="block text-sm text-ink/60">Nazovite</span>
                <span className="text-lg font-bold">{site.phoneDisplay}</span>
              </span>
            </a>
            {site.whatsappEnabled && (
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 hover:border-wa">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wa text-white"><WhatsAppIcon /></span>
                <span>
                  <span className="block text-sm text-ink/60">WhatsApp</span>
                  <span className="text-lg font-bold">Pošaljite poruku i fotografije</span>
                </span>
              </a>
            )}
          </div>
        </div>
        <ContactForm lokacija={lokacija} usluga={usluga} />
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  if (!site.whatsappEnabled) return null;
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-xl shadow-black/20">
      <WhatsAppIcon width={26} height={26} />
    </a>
  );
}
