import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { regions } from "@/lib/locations";
import { landings } from "@/lib/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string, priority: number) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  });
  return [
    u("/", 1),
    u("/usluge", 0.9),
    u("/lokacije", 0.9),
    u("/kontakt", 0.8),
    ...services.map((s) => u(`/usluge/${s.slug}`, 0.9)),
    ...regions.map((r) => u(`/lokacije/${r.slug}`, 0.8)),
    ...landings.map((l) => u(`/${l.slug}`, l.loc.top ? 0.8 : 0.6)),
  ];
}
