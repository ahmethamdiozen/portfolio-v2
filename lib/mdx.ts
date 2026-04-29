import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/routing";

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured: boolean;
  repo: string;
  demo?: string;
  cover?: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

function readMdxDir<T>(
  dir: string,
  mapper: (slug: string, data: Record<string, unknown>) => T
): T[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(source);
      return mapper(slug, data);
    })
    .sort((a, b) => {
      const aDate = (a as { date?: string }).date ?? "";
      const bDate = (b as { date?: string }).date ?? "";
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
}

function toProjectMeta(slug: string, data: Record<string, unknown>): ProjectMeta {
  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    featured: Boolean(data.featured),
    repo: String(data.repo ?? ""),
    demo: data.demo ? String(data.demo) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
  };
}

export function getAllProjects(locale: Locale): ProjectMeta[] {
  return readMdxDir<ProjectMeta>(path.join(PROJECTS_DIR, locale), toProjectMeta);
}

export function getFeaturedProjects(locale: Locale): ProjectMeta[] {
  return getAllProjects(locale).filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  const enDir = path.join(PROJECTS_DIR, "en");
  if (!fs.existsSync(enDir)) return [];
  return fs
    .readdirSync(enDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getProjectBySlug(
  slug: string,
  locale: Locale
): Promise<{ meta: ProjectMeta; content: string } | null> {
  const filePath = path.join(PROJECTS_DIR, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return { meta: toProjectMeta(slug, data), content };
}
