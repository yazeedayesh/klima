import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { areas } from "@/lib/areas-data";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical: `/klimatizacie/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: `${site.url}/klimatizacie/${service.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Klimatizácie", href: "/klimatizacie" },
              { label: service.title, href: `/klimatizacie/${service.slug}` },
            ]}
          />
          <div className="max-w-2xl">
            <div className="label-accent">
              Klimatizácie
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl">{service.h1}</h1>
            <p className="mt-4 text-ink-soft">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" variant="accent">
                Nezáväzná ponuka
              </Button>
              <Button href={`tel:${site.phone}`} variant="ghost">
                Zavolať {site.phoneDisplay}
              </Button>
            </div>
          </div>

          {service.body && service.body.length > 0 && (
            <div className="mt-10 max-w-2xl space-y-4 text-ink-soft">
              {service.body.map((paragraph, i) => (
                <p key={i} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-gray-50 p-8">
              <h2 className="text-xl font-bold text-navy-950">Čo je súčasťou</h2>
              <ul className="mt-6 space-y-5">
                {service.benefits.map((benefit, i) => (
                  <li key={benefit} className="flex gap-3.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy-950 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink-soft">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="text-xl font-bold text-navy-950">Kontaktné údaje</h2>
              <p className="mt-3 text-sm text-ink-soft">
                Zavolajte nám priamo, alebo vyplňte krátky formulár a ozveme sa vám {site.responseTime}.
              </p>
              <div className="mt-6 space-y-4">
                <a href={`tel:${site.phone}`} className="block">
                  <div className="text-sm text-ink-faint">Zavolajte nám</div>
                  <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">{site.phoneDisplay}</div>
                </a>
                <a href={`mailto:${site.email}`} className="block">
                  <div className="text-sm text-ink-faint">E-mail</div>
                  <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">{site.email}</div>
                </a>
                <div>
                  <div className="text-sm text-ink-faint">Pôsobisko</div>
                  <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">
                    {site.areaShort}, po dohode celé Slovensko
                  </div>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Napísať nám
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-950">Časté otázky</h2>
            <div className="mt-6">
              <FaqList items={service.faq} />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-bold text-navy-950">{service.title} v okolí Košíc</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {areas.map((a) => (
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

      <section className="pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy-950 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Ďalšie služby</h2>
              <p className="mt-2 text-white/70">Pozrite si aj ďalšie oblasti, v ktorých vám vieme pomôcť.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {servicesData
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/klimatizacie/${s.slug}`}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                  >
                    {s.title}
                  </Link>
                ))}
              <Link
                href="/tepelne-cerpadla"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                Tepelné čerpadlá
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
