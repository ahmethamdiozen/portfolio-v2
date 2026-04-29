[🇬🇧 English version](README.en.md)

# Ahmet Hamdi Özen — Portföy

Kişisel portföy sitesi. Next.js 14 (App Router), TypeScript ve Tailwind CSS ile geliştirilmiştir. Türkçe ve İngilizce dil desteği içerir.

**Canlı:** [ahmethamdiozen.com](https://ahmethamdiozen.com)

---

## Özellikler

- TR / EN dil desteği (`next-intl`, tarayıcı dili otomatik algılanır)
- Karanlık / Açık mod (`next-themes`, sistem tercihi öncelikli)
- Proje sayfaları MDX ile yazılır, frontmatter üzerinden yönetilir
- Tag filtresi ile proje listesi
- Tüm sayfalar statik olarak derlenir (SSG)
- Semantic HTML, görünür focus durumları, WCAG AA kontrast uyumu

## Teknolojiler

| Katman | Seçim |
|---|---|
| Framework | Next.js 14 (App Router) |
| Dil | TypeScript (strict) |
| Stil | Tailwind CSS |
| İçerik | MDX (`next-mdx-remote`) |
| i18n | next-intl |
| Kod vurgulama | rehype-pretty-code + Shiki |
| Dark mode | next-themes |
| Deployment | Coolify / Hetzner |

---

## Geliştirme Ortamı

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # üretim derlemesi
npm run lint       # ESLint
npm run format     # Prettier
```

---

## Proje Ekleme

`content/projects/en/` ve `content/projects/tr/` dizinlerine **aynı dosya adıyla** iki ayrı `.mdx` dosyası oluşturun.

### Frontmatter

```yaml
---
title: "Proje Adı"
description: "Kısa açıklama (kart ve meta description olarak kullanılır)"
date: "2024-06-01"
tags: ["typescript", "next.js"]
featured: true          # true ise ana sayfada gösterilir
repo: "https://github.com/..."
demo: "https://..."     # opsiyonel, yoksa kaldırın
cover: "/images/projects/proje.jpg"   # opsiyonel
---
```

Görseller `public/images/projects/` altına eklenir.

---

## Site Yapılandırması

Tüm kişisel bilgiler (`isim`, `bio`, `sosyaller`, `beceriler`, `deneyim`) tek bir dosyadan yönetilir:

```
site.config.ts
```

---

## Deployment (Coolify)

- Build: `npm run build`
- Start: `npm start`
- Port: `3000`
- Zorunlu ortam değişkeni yok
