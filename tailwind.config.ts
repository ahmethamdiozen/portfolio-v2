import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "72ch",
        wide: "1100px",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.zinc.700"),
            "--tw-prose-headings": "#0a0a0a",
            "--tw-prose-links": "var(--accent)",
            "--tw-prose-bold": "#0a0a0a",
            "--tw-prose-code": "#0a0a0a",
            "--tw-prose-pre-bg": theme("colors.zinc.50"),
            "--tw-prose-borders": theme("colors.zinc.200"),
            maxWidth: "none",
            "h1, h2, h3, h4": { fontWeight: "600", letterSpacing: "-0.02em" },
            a: { textDecoration: "none", "&:hover": { textDecoration: "underline" } },
            code: {
              fontFamily: "var(--font-jetbrains)",
              fontSize: "0.875em",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.zinc.400"),
            "--tw-prose-headings": theme("colors.zinc.100"),
            "--tw-prose-links": "var(--accent)",
            "--tw-prose-bold": theme("colors.zinc.100"),
            "--tw-prose-code": theme("colors.zinc.200"),
            "--tw-prose-pre-bg": theme("colors.zinc.900"),
            "--tw-prose-borders": theme("colors.zinc.800"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
