import { siteConfig } from "@/site.config";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: siteConfig.socials.github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
    { label: "Twitter", href: siteConfig.socials.twitter },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-zinc-100 dark:border-slate-800">
      <div className="mx-auto flex max-w-wide flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-600 dark:hover:text-accent"
            >
              {label}
            </a>
          ))}
          {siteConfig.socials.email && (
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="text-xs text-zinc-400 transition-colors hover:text-accent dark:text-zinc-600 dark:hover:text-accent"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
