"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

const usluge = [
  "Keramičarski radovi / pločice",
  "Kupaonica",
  "Terasa, balkon ili stepenice",
  "Knauf / spušteni strop",
  "Gletanje",
  "Soboslikarski radovi / moleraj",
  "Više radova (kompletni završni radovi)",
];

type State = "idle" | "sending" | "sent" | "fallback";

export default function ContactForm({ lokacija = "", usluga = "" }: { lokacija?: string; usluga?: string }) {
  const [state, setState] = useState<State>("idle");
  const [waText, setWaText] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const text = [
      `Upit s web stranice ${site.name}`,
      `Ime: ${data.ime}`,
      `Telefon: ${data.telefon}`,
      data.email && `E-mail: ${data.email}`,
      `Lokacija: ${data.lokacija}`,
      `Usluga: ${data.usluga}`,
      data.kvadratura && `Kvadratura: ${data.kvadratura}`,
      data.poruka && `Poruka: ${data.poruka}`,
    ]
      .filter(Boolean)
      .join("\n");
    setWaText(text);
    if (data.web) return; // honeypot
    setState("sending");

    const ej = site.emailjs;
    // 1) EmailJS (slanje izravno iz preglednika) ako je postavljen.
    if (ej.serviceId && ej.templateId && ej.publicKey) {
      try {
        await emailjs.send(
          ej.serviceId,
          ej.templateId,
          {
            to_email: site.contactEmail,
            from_name: data.ime,
            phone: data.telefon,
            from_email: data.email || "nije naveden",
            location: data.lokacija,
            service: data.usluga,
            area: data.kvadratura || "nije navedena",
            message: data.poruka || "-",
            full: text,
          },
          { publicKey: ej.publicKey },
        );
        setState("sent");
      } catch {
        setState("fallback");
      }
      return;
    }

    // 2) Server (Resend) ako je EmailJS prazan.
    try {
      const res = await fetch("/api/upit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "sent" : "fallback");
    } catch {
      setState("fallback");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-3xl border border-brand/20 bg-brand-soft p-8 text-center">
        <p className="text-xl font-bold">Hvala, upit je poslan.</p>
        <p className="mt-2 text-ink/70">Javit ćemo vam se u najkraćem roku. Za hitne upite nazovite {site.phoneDisplay}.</p>
      </div>
    );
  }

  if (state === "fallback") {
    return (
      <div className="rounded-3xl border border-black/10 bg-white p-8 text-center shadow-sm">
        <p className="text-xl font-bold">Upit je spreman — pošaljite ga jednim klikom</p>
        <p className="mt-2 text-ink/70">Slanje putem forme trenutačno nije dostupno. Pošaljite isti upit porukom ili nas nazovite.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {site.whatsappEnabled && (
            <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-wa px-6 py-3 font-semibold text-white">
              <WhatsAppIcon /> Pošalji preko WhatsAppa
            </a>
          )}
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white">
            <PhoneIcon /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  const input =
    "mt-1.5 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";
  const label = "block text-sm font-semibold";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Ime i prezime *
          <input name="ime" required autoComplete="name" className={input} />
        </label>
        <label className={label}>
          Telefon *
          <input name="telefon" type="tel" required autoComplete="tel" className={input} />
        </label>
        <label className={label}>
          E-mail
          <input name="email" type="email" autoComplete="email" className={input} />
        </label>
        <label className={label}>
          Lokacija radova *
          <input name="lokacija" required defaultValue={lokacija} placeholder="npr. Split, Makarska, Brač…" className={input} />
        </label>
        <label className={label}>
          Usluga *
          <select name="usluga" required defaultValue={usluga || ""} className={input}>
            <option value="" disabled>Odaberite uslugu</option>
            {usluge.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </label>
        <label className={label}>
          Okvirna kvadratura
          <input name="kvadratura" placeholder="npr. 45 m²" className={input} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Opis radova
          <textarea name="poruka" rows={4} placeholder="Što treba napraviti, kada biste željeli početak, imate li već materijal…" className={input} />
        </label>
        {/* honeypot protiv spama */}
        <input name="web" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>
      <button disabled={state === "sending"} className="mt-6 w-full rounded-full bg-brand px-6 py-4 text-base font-semibold text-white hover:bg-brand-dark disabled:opacity-60">
        {state === "sending" ? "Šaljem…" : "Pošalji upit"}
      </button>
      <p className="mt-3 text-center text-xs text-ink/50">
        Slanjem upita pristajete da vas kontaktiramo radi ponude. Podatke ne dijelimo s trećima —{" "}
        <a href="/politika-privatnosti" className="underline">politika privatnosti</a>.
      </p>
    </form>
  );
}
