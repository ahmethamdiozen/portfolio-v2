import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { getFeaturedProjects } from "@/lib/mdx";
import type { Locale } from "@/i18n/routing";
import Hero from "@/components/home/hero";
import SelectedProjects from "@/components/home/selected-projects";
import AboutSnippet from "@/components/home/about-snippet";

type Props = { params: { locale: Locale } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    title: {
      absolute: `${siteConfig.name} — ${siteConfig.title[locale]}`,
    },
    description: siteConfig.bio[locale],
    openGraph: {
      title: `${siteConfig.name} — ${siteConfig.title[locale]}`,
      description: siteConfig.bio[locale],
      url: siteConfig.url,
    },
  };
}

export default function HomePage({ params: { locale } }: Props) {
  const featured = getFeaturedProjects(locale);

  return (
    <>
      <Hero locale={locale} />
      {featured.length > 0 && (
        <SelectedProjects projects={featured} locale={locale} />
      )}
      <AboutSnippet locale={locale} />
    </>
  );
}
