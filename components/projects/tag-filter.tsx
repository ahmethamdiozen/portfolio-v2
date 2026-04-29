"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import type { ProjectMeta } from "@/lib/mdx";

interface Props {
  projects: ProjectMeta[];
  labelAll: string;
}

export default function TagFilter({ projects, labelAll }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = active
    ? projects.filter((p) => p.tags.includes(active))
    : projects;

  return (
    <div>
      {tags.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={cn(
              "rounded-sm border px-3 py-1 font-mono text-xs transition-colors",
              active === null
                ? "border-[#0a0a0a] bg-[#0a0a0a] text-white dark:border-slate-100 dark:bg-slate-100 dark:text-[#0f172a]"
                : "border-zinc-200 text-zinc-500 hover:border-zinc-400 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500"
            )}
          >
            {labelAll}
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag === active ? null : tag)}
              className={cn(
                "rounded-sm border px-3 py-1 font-mono text-xs transition-colors",
                active === tag
                  ? "border-[#0a0a0a] bg-[#0a0a0a] text-white dark:border-slate-100 dark:bg-slate-100 dark:text-[#0f172a]"
                  : "border-zinc-200 text-zinc-500 hover:border-zinc-400 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <ol className="divide-y divide-zinc-100 dark:divide-slate-800">
        {filtered.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex-1 sm:pr-12">
                <h2 className="mb-2 text-lg font-semibold tracking-tight text-[#0a0a0a] transition-colors group-hover:text-accent dark:text-slate-100 dark:group-hover:text-accent">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-start gap-1.5 sm:max-w-[220px] sm:justify-end">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
