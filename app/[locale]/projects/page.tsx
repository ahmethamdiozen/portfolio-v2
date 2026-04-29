import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getAllProjects } from "@/lib/mdx";
import { siteConfig } from "@/site.config";
import type { Locale } from "@/i18n/routing";
import TagFilter from "@/components/projects/tag-filter";

type Props = { params: { locale: Locale } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const title = locale === "tr" ? "Projeler" : "Projects";
  return {
    title,
    description: siteConfig.bio[locale],
  };
}

export default function ProjectsPage({ params: { locale } }: Props) {
  const t = useTranslations("projects");
  const projects = getAllProjects(locale);

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-wide px-6">
        <h1 className="mb-16 text-3xl font-semibold tracking-tight text-[#0a0a0a] dark:text-zinc-100 md:text-4xl">
          {t("heading")}
        </h1>
        <TagFilter
          projects={projects}
          labelAll={t("filter_all")}
        />
      </div>
    </section>
  );
}
