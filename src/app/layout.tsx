import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";
import { personal } from "@/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personal.name} · Portfolio`,
    template: `%s · ${personal.name}`,
  },
  description: personal.tagline,
};

export const viewport: Viewport = {
  themeColor: "#0b1120",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} flex min-h-dvh flex-col`}
      >
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className="min-h-0 flex-1 overflow-x-clip pt-[var(--site-header-height)]"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
