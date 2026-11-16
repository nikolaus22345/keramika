import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Keramičar Dalmacija – pločice, knauf, gletanje i moleraj",
  description:
    "Keramičar za cijelu Dalmaciju: postavljanje pločica, kupaonice, terase, knauf, gletanje i soboslikarski radovi. Ponuda na upit – nazovite 095 515 0377.",
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: "hr_HR", type: "website" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#2663ea" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className="antialiased">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
