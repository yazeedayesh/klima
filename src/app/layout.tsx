import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Montáž a predaj klimatizácií Košice`,
    template: `%s | ${site.name}`,
  },
  description:
    "Klimaro – profesionálna montáž, predaj a servis klimatizácií v Košiciach a okolí do 50 km. Certifikovaný tím, jasná cenová ponuka vopred. Pôsobíme aj po celom Slovensku.",
  keywords: [
    "klimatizácie Košice",
    "montáž klimatizácie",
    "predaj klimatizácií",
    "servis klimatizácie",
    "tepelné čerpadlá Košice",
  ],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: site.address.country,
      addressLocality: site.address.locality,
    },
    areaServed: [
      { "@type": "City", name: "Košice" },
      { "@type": "AdministrativeArea", name: "Slovensko" },
    ],
  };

  return (
    <html
      lang="sk"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
