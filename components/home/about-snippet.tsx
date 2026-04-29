import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/site.config";
import type { Locale } from "@/i18n/routing";

export default function AboutSnippet({ locale }: { locale: Locale }) {
  const t = useTranslations("home");

  return (
    <section className="border-t border-zinc-100 py-24 dark:border-slate-800">
      <div className="mx-auto max-w-wide px-6">
        <div className="max-w-xl">
          <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            {t("about_heading")}
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            {/* TODO: replace siteConfig.bio with a dedicated short-about field if you want
                different copy here vs the hero subtitle */}
            {siteConfig.bio[locale]}
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm text-zinc-400 transition-colors hover:text-accent dark:text-zinc-600 dark:hover:text-accent"
            >
              {locale === "tr" ? "Daha fazlası →" : "More about me →"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
