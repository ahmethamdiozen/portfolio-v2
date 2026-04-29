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
  name: "Ahmet Hamdi Özen",
  initials: "AHO",
  url: "https://ahmethamdiozen.com",

  title: {
    en: "Backend & AI Software Engineer",
    tr: "Backend & Yapay Zeka Yazılım Mühendisi",
  },

  bio: {
    en: "Building backend systems and AI integrations",
    tr: "Backend sistemleri ve yapay zeka entegrasyonları geliştiriyorum.",
  },

  about: {
    en: "I'm a software engineer with hands-on experience building backend systems, AI integrations, and distributed architectures. I've worked on real-time streaming pipelines, LLM-powered applications, and event-driven microservices — focused on reliability and maintainability throughout.\n\nI care about clean code and thoughtful system design. Whether it's a distributed e-commerce platform with Kafka and Redis, a WhatsApp ordering bot powered by Claude, or a RAG pipeline for document search — I try to build things that are correct, observable, and easy to reason about.",
    tr: "Backend sistemleri, yapay zeka entegrasyonları ve dağıtık mimariler konusunda pratik deneyime sahip bir yazılım mühendisiyim. Gerçek zamanlı akış yönetimi, LLM tabanlı uygulamalar ve olay güdümlü mikroservisler üzerinde çalıştım; her adımda güvenilirlik ve sürdürülebilirliğe odaklandım.\n\nTemiz kod ve düşünceli sistem tasarımına önem veriyorum. Kafka ve Redis ile dağıtık bir e-ticaret platformu, Claude ile çalışan bir WhatsApp sipariş botu ya da belge arama için bir RAG pipeline olsun — doğru, gözlemlenebilir ve anlaşılması kolay sistemler kurmaya çalışırım.",
  },

  socials: {
    github: "https://github.com/ahmethamdiozen",
    linkedin: "https://linkedin.com/in/ahmethamdiozen",
    twitter: "",
    email: "hamdiahmetozen@gmail.com",
  },

  skills: [
    {
      category: { en: "Languages", tr: "Diller" },
      items: ["Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: { en: "Backend & APIs", tr: "Backend & API'ler" },
      items: ["Node.js", "Express", "FastAPI", "REST", "WebSocket"],
    },
    {
      category: { en: "Databases", tr: "Veritabanları" },
      items: ["PostgreSQL", "Redis", "ChromaDB", "Prisma"],
    },
    {
      category: { en: "Messaging & Events", tr: "Mesajlaşma & Olaylar" },
      items: ["Apache Kafka", "RabbitMQ"],
    },
    {
      category: { en: "AI / LLM", tr: "Yapay Zeka / LLM" },
      items: ["Claude API", "OpenAI API", "RAG", "Vector Embeddings"],
    },
    {
      category: { en: "Frontend", tr: "Frontend" },
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: { en: "Infrastructure", tr: "Altyapı" },
      items: ["Docker", "Linux", "Git", "Prometheus", "Grafana", "Coolify"],
    },
  ],

  experience: [
    {
      role: { en: "Junior Backend / AI Engineer", tr: "Junior Backend / Yapay Zeka Mühendisi" },
      company: "Crowtec Software",
      period: "09/2024 — 02/2025",
      description: {
        en: "Developed and maintained backend services for real-time video streaming and communication on Linux. Integrated Python services with optimized ML inference pipelines (ONNX), exposed internal functionality via REST APIs, and took full ownership of reliability, performance, and production stability.",
        tr: "Linux üzerinde gerçek zamanlı video akışı ve iletişim için backend servisleri geliştirdim ve sürdürdüm. Python servislerini optimize edilmiş ML çıkarım yapılandırmalarıyla (ONNX) entegre ettim, REST API'lar aracılığıyla iç işlevselliği dışa açtım; güvenilirlik, performans ve üretim stabilitesinin tüm sorumluluğunu üstlendim.",
      },
    },
    {
      role: { en: "Software Engineer Intern", tr: "Yazılım Mühendisi Stajyeri" },
      company: "Yalin Software",
      period: "06/2024 — 08/2024",
      description: {
        en: "Worked on the backend of a computer vision application, writing Python services and REST endpoints consumed by frontend clients. Collaborated on a production codebase using PyTorch and OpenCV, contributing to data processing pipelines and API layer improvements.",
        tr: "Bir bilgisayarla görme uygulamasının backend tarafında çalıştım; frontend istemcilerin tükettiği Python servisleri ve REST endpoint'leri yazdım. PyTorch ve OpenCV kullanan üretim ortamındaki bir kod tabanında, veri işleme pipeline'larına ve API katmanı geliştirmelerine katkıda bulundum.",
      },
    },
  ],

  nav: [
    { key: "projects", href: "/projects" },
    { key: "about", href: "/about" },
  ],
};
