# Keramika Dalmacija — web stranica

Next.js (App Router) + Tailwind. 280 statičkih stranica: naslovna, usluge, regije i 262 landing stranice za mjesta.

## Pokretanje
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # provjera prije objave
```

## Gdje se što mijenja
- `lib/site.ts` — naziv, telefon, WhatsApp (uključi/isključi), domena
- `lib/locations.ts` — regije i mjesta (dodavanje mjesta = jedan red)
- `lib/services.ts` — stranice usluga
- `lib/landing.ts` — tekstovi landing stranica po vrsti usluge
- `app/icon.svg`, `public/logo.svg` — favicon i logo

## Vercel
1. Push na GitHub, import repozitorija u Vercel (postavke su zadane za Next.js).
2. Varijable okruženja:
   - `NEXT_PUBLIC_SITE_URL` — npr. `https://www.vasa-domena.hr` (za canonical i sitemap)
   - `RESEND_API_KEY`, `CONTACT_EMAIL` — slanje upita s forme e-mailom (resend.com)
   - `CONTACT_FROM` — neobavezno, pošiljatelj s verificirane domene
3. Dok e-mail nije podešen, forma posjetitelju nudi slanje istog upita WhatsAppom ili poziv.

Prije objave: dopuniti `app/politika-privatnosti/page.tsx` podacima obrta/tvrtke.
Keyword research: `KEYWORD-RESEARCH.md`.
