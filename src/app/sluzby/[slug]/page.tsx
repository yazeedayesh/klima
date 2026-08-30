import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { getCategoryBySlug } from "@/lib/products-data";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = service.categorySlug ? getCategoryBySlug(service.categorySlug) : undefined;

  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              Služby
            </div>
            <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">{service.title}</h1>
            <p className="mt-4 text-ink-soft">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" variant="accent">
                Nezáväzná ponuka
              </Button>
              {category && (
                <Button href={`/produkty?kategoria=${category.slug}`} variant="ghost">
                  Pozrieť produkty
                </Button>
              )}
            </div>
          </div>

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

            <div className="rounded-2xl border border-line bg-white p-8 shadow-md">
              <h2 className="text-xl font-bold text-navy-950">Kontaktné údaje</h2>
              <p className="mt-3 text-sm text-ink-soft">
                Zavolajte nám priamo, alebo vyplňte krátky formulár a ozveme sa vám e-mailom do 24 hodín.
              </p>
              <div className="mt-6 space-y-4">
                <a href={`tel:${site.phone}`} className="block">
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Zavolajte nám</div>
                  <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">{site.phoneDisplay}</div>
                </a>
                <a href={`mailto:${site.email}`} className="block">
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-faint">E-mail</div>
                  <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">{site.email}</div>
                </a>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Pôsobisko</div>
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
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy-950 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Ostatné služby</h3>
              <p className="mt-2 text-white/70">Pozrite si aj ďalšie oblasti, v ktorých vám vieme pomôcť.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {servicesData
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/sluzby/${s.slug}`}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                  >
                    {s.title}
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
