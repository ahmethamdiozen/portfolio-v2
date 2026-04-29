import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/site.config";
import type { Locale } from "@/i18n/routing";

export default function Hero({ locale }: { locale: Locale }) {
  const t = useTranslations("home");

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-wide px-6">
        <p className="mb-4 font-mono text-sm text-zinc-400 dark:text-zinc-500">
          {siteConfig.title[locale]}
        </p>
        <h1 className="mb-10 max-w-2xl text-5xl font-semibold leading-[1.1] tracking-tight text-[#0a0a0a] dark:text-zinc-100 md:text-6xl">
          {siteConfig.name}
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center border border-[#0a0a0a] px-5 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a] hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-[#0a0a0a]"
          >
            {t("cta_projects")}
          </Link>
          <a
            href={`mailto:${siteConfig.socials.email}`}
            className="inline-flex h-10 items-center px-5 text-sm text-zinc-500 transition-colors hover:text-[#0a0a0a] dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {t("cta_contact")} →
          </a>
        </div>
      </div>
    </section>
  );
}
