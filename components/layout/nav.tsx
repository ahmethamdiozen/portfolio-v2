"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/site.config";
import type { Locale } from "@/i18n/routing";
import ThemeToggle from "./theme-toggle";
import LocaleSwitcher from "./locale-switcher";
import { useState } from "react";

type NavKey = "projects" | "about";

export default function Nav({ locale: _locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-[#0f172a]/80">
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-[#0a0a0a] transition-colors hover:text-accent dark:text-zinc-100 dark:hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {siteConfig.initials}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2">
            {/* Desktop links */}
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
              <span className="mx-1 h-4 w-px bg-zinc-200 dark:bg-slate-700" aria-hidden />
            </li>

            <li className="flex items-center gap-2">
              <LocaleSwitcher />
              <span className="h-4 w-px bg-zinc-200 dark:bg-slate-700" aria-hidden />
              <ThemeToggle />
            </li>

            {/* Hamburger button — mobile only */}
            <li className="flex items-center sm:hidden">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                className="ml-1 flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:text-[#0a0a0a] dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-zinc-100 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-[#0f172a]/95 sm:hidden">
          <ul className="flex flex-col px-6 py-3">
            {siteConfig.nav.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-zinc-500 transition-colors hover:text-[#0a0a0a] dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {t(key as NavKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
