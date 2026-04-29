import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ProjectMeta } from "@/lib/mdx";
import type { Locale } from "@/i18n/routing";
import ProjectCard from "@/components/projects/project-card";

interface Props {
  projects: ProjectMeta[];
  locale: Locale; // kept for future use (e.g. locale-aware labels)
}

export default function SelectedProjects({ projects, locale: _locale }: Props) {
  const t = useTranslations("home");

  return (
    <section className="border-t border-zinc-100 py-24 dark:border-slate-800">
      <div className="mx-auto max-w-wide px-6">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            {t("selected_projects")}
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-400 transition-colors hover:text-accent dark:text-zinc-600 dark:hover:text-accent"
          >
            {t("view_all")} →
          </Link>
        </div>

        {/* gap-px grid with background = 1px border between cells, no shadows */}
        <div className="grid gap-px border border-zinc-100 bg-zinc-100 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
