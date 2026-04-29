[🇹🇷 Türkçe sürüm](README.md)

# Ahmet Hamdi Özen — Portfolio

Personal portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Supports Turkish and English.

**Live:** [ahmethamdiozen.com](https://ahmethamdiozen.com)

---

## Features

- TR / EN language support (`next-intl`, browser language auto-detected)
- Dark / Light mode (`next-themes`, system preference first)
- Project pages authored in MDX, managed via frontmatter
- Tag-based project filtering
- All pages statically generated (SSG)
- Semantic HTML, visible focus states, WCAG AA contrast

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Content | MDX (`next-mdx-remote`) |
| i18n | next-intl |
| Syntax highlighting | rehype-pretty-code + Shiki |
| Dark mode | next-themes |
| Deployment | Coolify / Hetzner |

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
npm run format     # Prettier
```

---

## Adding Projects

Create two `.mdx` files with **the same filename** under `content/projects/en/` and `content/projects/tr/`.

### Frontmatter

```yaml
---
title: "Project Name"
description: "Short description (used on cards and as meta description)"
date: "2024-06-01"
tags: ["typescript", "next.js"]
featured: true          # shown on homepage if true
repo: "https://github.com/..."
demo: "https://..."     # optional, remove if unused
cover: "/images/projects/project.jpg"   # optional
---
```

Images go in `public/images/projects/`.

---

## Site Configuration

All personal data (name, bio, socials, skills, experience) is managed from a single file:

```
site.config.ts
```

---

## Deployment (Coolify)

- Build command: `npm run build`
- Start command: `npm start`
- Port: `3000`
- No required environment variables
