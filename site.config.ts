import type { Locale } from "@/i18n/routing";

type SiteConfig = {
  name: string;
  initials: string;
  url: string;
  bio: Record<Locale, string>;
  about: Record<Locale, string>;
  title: Record<Locale, string>;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  skills: Array<{
    category: Record<Locale, string>;
    items: string[];
  }>;
  experience: Array<{
    role: Record<Locale, string>;
    company: string;
    period: string;
    description: Record<Locale, string>;
  }>;
  nav: Array<{ key: string; href: string }>;
};

export const siteConfig: SiteConfig = {
  // TODO: replace — your full name
  name: "Ahmet Hamdi Özen",
  // TODO: replace — your initials or short handle shown in the nav logo
  initials: "AHO",
  // TODO: replace — your production URL
  url: "https://ahmethamdiozen.com",

  title: {
    // TODO: replace — one-line professional title
    en: "Software Engineer",
    // TODO: replace
    tr: "Bilgisayar Mühendisi",
  },

  bio: {
    // TODO: replace — one sentence that describes your work and perspective
    en: "Building thoughtful software for the web.",
    // TODO: replace
    tr: "Web için düşünceli yazılımlar geliştiriyorum.",
  },

  about: {
    // TODO: replace — 2–3 paragraphs for the /about page; use \n\n between paragraphs
    en: "TODO: replace — write a few paragraphs about yourself, your background, and what you care about.\n\nKeep it honest and direct. No fluff.",
    // TODO: replace
    tr: "TODO: replace — kendinizden, geçmişinizden ve önem verdiğiniz şeylerden bahseden birkaç paragraf yazın.\n\nDürüst ve doğrudan olun.",
  },

  socials: {
    // TODO: replace — full URLs
    github: "https://github.com/ahmethamdiozen",
    linkedin: "https://linkedin.com/in/ahmethamdiozen",
    // TODO: replace — leave empty string "" to hide
    twitter: "",
    email: "hamdiahmetozen@gmail.com",
  },

  skills: [
    // TODO: replace — add/remove categories and items as needed
    {
      category: { en: "Languages", tr: "Diller" },
      items: ["TypeScript", "Python", "SQL"],
    },
    {
      category: { en: "Frameworks", tr: "Çerçeveler" },
      items: ["Next.js", "React", "Node.js"],
    },
    {
      category: { en: "Tools", tr: "Araçlar" },
      items: ["PostgreSQL", "Docker", "Git"],
    },
  ],

  experience: [
    // TODO: replace — add your work experience in reverse chronological order
    {
      role: { en: "Software Engineer", tr: "Yazılım Mühendisi" },
      company: "Company Name", // TODO: replace
      period: "2023 — present", // TODO: replace
      description: {
        en: "TODO: replace — describe your responsibilities and impact.",
        tr: "TODO: replace — sorumlulukları ve etkiyi açıklayın.",
      },
    },
  ],

  nav: [
    { key: "projects", href: "/projects" },
    { key: "about", href: "/about" },
  ],
};
