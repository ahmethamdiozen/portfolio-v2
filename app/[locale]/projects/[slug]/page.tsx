import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { routing, type Locale } from "@/i18n/routing";

type Props = { params: { locale: Locale; slug: string } };

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const project = await getProjectBySlug(slug, locale);
  if (!project) return {};
  return {
    title: project.meta.title,
    description: project.meta.description,
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      images: project.meta.cover ? [project.meta.cover] : [],
    },
  };
}

export default async function ProjectPage({ params: { locale, slug } }: Props) {
  const project = await getProjectBySlug(slug, locale);
  if (!project) notFound();

  const { meta, content } = project;

  return (
    <article className="py-20 md:py-24">
      <div className="mx-auto max-w-wide px-6">
        <BackLink />

        <header className="mb-16 max-w-2xl">
          <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0a0a0a] dark:text-zinc-100 md:text-4xl">
            {meta.title}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            {meta.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-1.5">
            {meta.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <ProjectLinks meta={meta} />
        </header>

        {meta.cover && (
          <div className="mb-16 aspect-video max-w-3xl overflow-hidden border border-zinc-100 dark:border-slate-800">
            <img
              src={meta.cover}
              alt={meta.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-zinc max-w-2xl dark:prose-invert">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: { dark: "github-dark-dimmed", light: "github-light" },
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
            components={mdxComponents}
          />
        </div>
      </div>
    </article>
  );
}

function BackLink() {
  const t = useTranslations("projects");
  return (
    <Link
      href="/projects"
      className="mb-12 inline-block text-sm text-zinc-400 transition-colors hover:text-accent dark:text-zinc-600 dark:hover:text-accent"
    >
      ← {t("back")}
    </Link>
  );
}

function ProjectLinks({
  meta,
}: {
  meta: { repo: string; demo?: string };
}) {
  const t = useTranslations("projects");
  if (!meta.repo && !meta.demo) return null;

  return (
    <div className="flex items-center gap-4">
      {meta.repo && (
        <a
          href={meta.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-400"
        >
          {t("view_repo")} ↗
        </a>
      )}
      {meta.demo && (
        <a
          href={meta.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-400"
        >
          {t("view_demo")} ↗
        </a>
      )}
    </div>
  );
}
