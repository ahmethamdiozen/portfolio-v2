import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { ProjectMeta } from "@/lib/mdx";
import type { Locale } from "@/i18n/routing";

interface Props {
  project: ProjectMeta;
  locale: Locale;
}

export default function ProjectCard({ project, locale }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col bg-white p-6 transition-colors hover:bg-zinc-50 dark:bg-[#0a0a0a] dark:hover:bg-zinc-900/60"
    >
      {project.cover && (
        <div className="mb-5 aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <img
            src={project.cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <p className="mb-1 font-mono text-xs text-zinc-400 dark:text-zinc-600">
          {formatDate(project.date, locale)}
        </p>
        <h3 className="mb-2 font-semibold leading-snug tracking-tight text-[#0a0a0a] transition-colors group-hover:text-accent dark:text-zinc-100 dark:group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
