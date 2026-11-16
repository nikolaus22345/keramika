// Središnje postavke stranice — ovdje se mijenja naziv, telefon i domena.
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const site = {
  name: "Keramika Dalmacija",
  tagline: "Keramičarski i završni radovi",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
  ).replace(/\/$/, ""),
  phoneDisplay: "095 515 0377",
  phoneIntlDisplay: "+385 95 515 0377",
  phoneHref: "tel:+385955150377",
  // WhatsApp gumbi: postavite na false ako broj nema WhatsApp.
  whatsappEnabled: true,
  whatsappNumber: "385955150377",
  area: "Dalmacija i Hercegovina",
  // Adresa na koju stižu upiti s forme.
  contactEmail: "ivanmamic1301@gmail.com",
  // EmailJS – forma šalje e-mail izravno iz preglednika, bez servera.
  // Upišite 3 vrijednosti iz svog EmailJS računa (emailjs.com) i forma je aktivna:
  emailjs: {
    serviceId: "",   // npr. "service_xxxxxxx"
    templateId: "",  // npr. "template_xxxxxxx"
    publicKey: "",   // npr. "AbCdEfGhIjKlMnОp"
  },
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
