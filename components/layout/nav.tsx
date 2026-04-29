import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/site.config";
import type { Locale } from "@/i18n/routing";
import ThemeToggle from "./theme-toggle";
import LocaleSwitcher from "./locale-switcher";

type NavKey = "projects" | "about";

export default function Nav({ locale: _locale }: { locale: Locale }) {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-900 dark:bg-[#0a0a0a]/80">
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-[#0a0a0a] transition-colors hover:text-accent dark:text-zinc-100 dark:hover:text-accent"
        >
          {siteConfig.initials}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2">
            <li className="hidden sm:flex sm:items-center sm:gap-2">
              {siteConfig.nav.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="px-3 py-1.5 text-sm text-zinc-500 transition-colors hover:text-[#0a0a0a] dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {t(key as NavKey)}
                </Link>
              ))}
              <span className="mx-1 h-4 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden />
            </li>
            <li className="flex items-center gap-2">
              <LocaleSwitcher />
              <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden />
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
