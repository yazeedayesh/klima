import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicesData } from "@/lib/services-data";
import { areas } from "@/lib/areas-data";
import { hasPrices } from "@/lib/pricing-data";

export const dynamic = "force-static";

// /blog a /cennik pridávame až keď majú obsah (dovtedy sú noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified: now,
    priority,
  });

  return [
    page("", 1),
    page("/klimatizacie", 0.9),
    ...servicesData.map((s) => page(`/klimatizacie/${s.slug}`, 0.8)),
    page("/tepelne-cerpadla", 0.9),
    page("/tepelne-cerpadla/dotacia", 0.8),
    page("/tepelne-cerpadla/servis", 0.8),
    ...(hasPrices ? [page("/cennik", 0.7)] : []),
    page("/oblasti", 0.7),
    ...areas.map((a) => page(`/oblasti/${a.slug}`, 0.7)),
    page("/o-nas", 0.5),
    page("/kontakt", 0.6),
    page("/ochrana-osobnych-udajov", 0.2),
  ];
}
