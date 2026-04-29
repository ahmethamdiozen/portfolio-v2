"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/lib/mdx";
import type { Locale } from "@/i18n/routing";
import ProjectCard from "./project-card";

interface Props {
  projects: ProjectMeta[];
  locale: Locale;
  labelAll: string;
}

export default function TagFilter({ projects, locale, labelAll }: Props) {
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
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={cn(
              "rounded-sm border px-3 py-1 font-mono text-xs transition-colors",
              active === null
                ? "border-[#0a0a0a] bg-[#0a0a0a] text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-[#0a0a0a]"
                : "border-zinc-200 text-zinc-500 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
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
                  ? "border-[#0a0a0a] bg-[#0a0a0a] text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-[#0a0a0a]"
                  : "border-zinc-200 text-zinc-500 hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-px border border-zinc-100 bg-zinc-100 dark:border-zinc-900 dark:bg-zinc-900 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
}
