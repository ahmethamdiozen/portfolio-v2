import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("common");

  return (
    <section className="py-32">
      <div className="mx-auto max-w-wide px-6">
        <p className="mb-3 font-mono text-sm text-zinc-400 dark:text-zinc-600">404</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-[#0a0a0a] dark:text-zinc-100">
          {t("not_found")}
        </h1>
        <p className="mb-8 text-zinc-500 dark:text-zinc-400">{t("not_found_desc")}</p>
        <Link
          href="/"
          className="text-sm text-zinc-400 transition-colors hover:text-accent dark:text-zinc-600 dark:hover:text-accent"
        >
          ← {t("go_home")}
        </Link>
      </div>
    </section>
  );
}
