import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { CookieConsent } from "@/components/cookie-consent";
import { TrackClicks } from "@/components/track-clicks";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Klimatizácie a tepelné čerpadlá Košice – montáž a servis | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Montáž, predaj a servis klimatizácií a tepelných čerpadiel v Košiciach a okolí do 100 km. Všetky bežné značky, cena vopred. Po dohode celé Slovensko.",
  alternates: { canonical: "/" },
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/mark.svg`,
    image: `${site.url}/opengraph-image`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.openingHours.days,
        opens: site.openingHours.opens,
        closes: site.openingHours.closes,
      },
    ],
    areaServed: [
      ...areas.map((a) => ({ "@type": "City", name: a.name })),
      { "@type": "Country", name: "Slovensko" },
    ],
    knowsAbout: ["Klimatizácie", "Tepelné čerpadlá vzduch-voda", "Servis klimatizácií"],
    ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
  };

  return (
    <html lang="sk" data-scroll-behavior="smooth" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0b1826" />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Preskočiť na obsah
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main id="obsah" className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
        <CookieConsent />
        <TrackClicks />
      </body>
    </html>
  );
}
