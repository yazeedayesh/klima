import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicesData } from "@/lib/services-data";
import { areas } from "@/lib/areas-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/produkty`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/sluzby`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/cenik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/oblasti`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/o-nas`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${site.url}/ochrana-osobnych-udajov`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${site.url}/sluzby/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${site.url}/oblasti/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
