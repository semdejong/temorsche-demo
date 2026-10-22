import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, Source_Sans_3 } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · Te Morsche",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: content.company.logo },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    locale: "nl_NL",
    images: [
      {
        url: "/fotos/img_7263.jpg",
        width: 2000,
        height: 1333,
        alt: "Kasteel Middachten, lang monumentaal bouwwerk met geschilderde kozijnen",
      },
    ],
  },
};

export const viewport: Viewport = { themeColor: "#F7F4EE" };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: content.company.name,
  email: "info@te-morsche.nl",
  telephone: ["+31544481278", "+31573459699"],
  areaServed: ["Beltrum", "Lochem"],
  founder: { "@type": "Person", name: "Raimond te Morsche" },
  url: "https://www.te-morsche.nl",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${archivo.variable} ${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col pb-24 md:pb-0">
        {children}
        <SleadsBadge />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
