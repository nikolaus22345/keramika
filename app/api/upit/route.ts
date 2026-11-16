import { site } from "@/lib/site";

// Upiti se šalju e-mailom preko Resenda (https://resend.com).
// U Vercelu postavite varijable okruženja:
//   RESEND_API_KEY  – API ključ
//   CONTACT_EMAIL   – adresa na koju stižu upiti
//   CONTACT_FROM    – (neobavezno) pošiljatelj s verificirane domene
// Dok varijable nisu postavljene, forma posjetitelju nudi slanje istog upita WhatsAppom ili poziv.
export async function POST(req: Request) {
  let d: Record<string, string>;
  try {
    d = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (d.web) return Response.json({ ok: true }); // honeypot
  if (!d.ime?.trim() || !d.telefon?.trim()) {
    return Response.json({ ok: false, error: "Nedostaju ime ili telefon." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!key || !to) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const clip = (v?: string) => (v ?? "").toString().slice(0, 2000);
  const lines = [
    ["Ime", d.ime], ["Telefon", d.telefon], ["E-mail", d.email], ["Lokacija", d.lokacija],
    ["Usluga", d.usluga], ["Kvadratura", d.kvadratura], ["Opis", d.poruka],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${clip(v)}`)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || `${site.name} <onboarding@resend.dev>`,
      to: [to],
      reply_to: d.email || undefined,
      subject: `Novi upit: ${clip(d.usluga) || "radovi"} – ${clip(d.lokacija) || "bez lokacije"}`,
      text: lines,
    }),
  });
  if (!res.ok) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true });
}
