import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { routing } from "@/i18n/routing";
import { getAllProjectSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const locales = routing.locales;

  const staticRoutes = ["", "/projects", "/about"];
  const projectSlugs = getAllProjectSlugs();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "monthly" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }

    for (const slug of projectSlugs) {
      entries.push({
        url: `${base}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
