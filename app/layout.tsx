import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

// Root layout is intentionally minimal.
// The html/body elements and all providers live in [locale]/layout.tsx,
// which is the pattern required by next-intl for locale-aware lang attributes.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
