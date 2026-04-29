import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/site.config";
import type { Locale } from "@/i18n/routing";

type Props = { params: { locale: Locale } };

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const title = locale === "tr" ? "Hakkımda" : "About";
  return { title, description: siteConfig.bio[locale] };
}

export default function AboutPage({ params: { locale } }: Props) {
  const t = useTranslations("about");
  const paragraphs = siteConfig.about[locale].split("\n\n");

  return (
    <div className="py-20 md:py-24">
      <div className="mx-auto max-w-wide px-6">
        <div className="grid gap-20 lg:grid-cols-[1fr_340px]">

          {/* Left — bio */}
          <div>
            <h1 className="mb-10 text-3xl font-semibold tracking-tight text-[#0a0a0a] dark:text-zinc-100 md:text-4xl">
              {t("heading")}
            </h1>
            <div className="space-y-5 text-zinc-600 dark:text-zinc-300">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right — skills + experience */}
          <aside className="space-y-16">
            {/* Skills */}
            <section>
              <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                {t("skills")}
              </h2>
              <div className="space-y-6">
                {siteConfig.skills.map((group) => (
                  <div key={group.category[locale]}>
                    <p className="mb-2 text-sm font-medium text-[#0a0a0a] dark:text-zinc-200">
                      {group.category[locale]}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-sm bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                {t("experience")}
              </h2>
              <ol className="space-y-8">
                {siteConfig.experience.map((job, i) => (
                  <li key={i} className="relative border-l border-zinc-200 pl-5 dark:border-zinc-800">
                    <p className="mb-0.5 font-medium text-[#0a0a0a] dark:text-zinc-100">
                      {job.role[locale]}
                    </p>
                    <p className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                    <p className="mb-3 font-mono text-xs text-zinc-400 dark:text-zinc-600">
                      {job.period}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {job.description[locale]}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
