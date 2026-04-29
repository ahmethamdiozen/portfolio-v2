import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { enUS, tr } from "date-fns/locale";
import type { Locale } from "@/i18n/routing";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale: Locale): string {
  const date = new Date(dateString);
  return format(date, "d MMMM yyyy", {
    locale: locale === "tr" ? tr : enUS,
  });
}
