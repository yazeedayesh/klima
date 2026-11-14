import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { areas, getAreaBySlug } from "@/lib/areas-data";
import { acServicesNav, heatPumpNav, site } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `Klimatizácie a tepelné čerpadlá ${area.name}`,
    description: `Montáž, predaj a servis klimatizácií a tepelných čerpadiel – ${area.name}${
      area.distanceKm === 0 ? "" : ` (${area.distanceKm} km od Košíc)`
    }. Cena vopred, obhliadka po dohode. ${site.name}.`,
    alternates: { canonical: `/oblasti/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Montáž a servis klimatizácií a tepelných čerpadiel",
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: area.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-line bg-wash py-10 lg:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Pôsobnosť", href: "/oblasti" },
              { label: area.name, href: `/oblasti/${area.slug}` },
            ]}
          />
          <SectionHead
            as="h1"
            eyebrow="Pôsobnosť"
            title={`Klimatizácie a tepelné čerpadlá ${area.name}`}
            text={area.intro}
          />
          <p className="mt-3 max-w-2xl text-sm text-ink-faint">{area.note}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" variant="accent">
              Nezáväzná ponuka
            </Button>
            <Button href={`tel:${site.phone}`} variant="ghost">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>

          <div className="mt-14">
            <h2 className="text-xl font-bold text-ink">Čo v lokalite {area.name} zabezpečíme</h2>
            <ul className="mt-5 border-b border-ink/15">
              {[...acServicesNav, ...heatPumpNav].map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="row-link">
                    <span className="text-[0.95rem] font-medium text-ink">{service.label}</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="chev text-accent"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="text-xl font-bold text-navy-950">Ďalšie oblasti</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas
                .filter((a) => a.slug !== area.slug)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/oblasti/${a.slug}`}
                    className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft hover:bg-gray-50"
                  >
                    {a.name}
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
