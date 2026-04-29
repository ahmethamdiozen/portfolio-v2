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
  order: number;
  tags: string[];
  featured: boolean;
  repo: string;
  demo?: string;
  cover?: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

function toProjectMeta(slug: string, data: Record<string, unknown>): ProjectMeta {
  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    order: typeof data.order === "number" ? data.order : 999,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    featured: Boolean(data.featured),
    repo: String(data.repo ?? ""),
    demo: data.demo ? String(data.demo) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
  };
}

function readProjectDir(locale: Locale): ProjectMeta[] {
  const dir = path.join(PROJECTS_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(source);
      return toProjectMeta(slug, data);
    })
    .sort((a, b) => a.order - b.order);
}

export function getAllProjects(locale: Locale): ProjectMeta[] {
  return readProjectDir(locale);
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
