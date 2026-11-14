import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { servicesData } from "@/lib/services-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Klimatizácie Košice – predaj, montáž a servis",
  description: `Predaj, montáž a servis klimatizácií všetkých bežných značiek v Košiciach a okolí do ${site.radiusKm} km. Byty, domy aj firmy, cena vopred.`,
  alternates: { canonical: "/klimatizacie" },
};

export default function KlimatizaciePage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Klimatizácie", href: "/klimatizacie" },
            ]}
          />
          <SectionHead
            as="h1"
            eyebrow="Klimatizácie"
            title="Klimatizácie v Košiciach — od výberu až po servis"
            text={`Postaráme sa o celý proces — poradíme s výberom jednotky, namontujeme ju a postaráme sa o pravidelnú údržbu. Pôsobíme v Košiciach a okolí do ${site.radiusKm} km.`}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {servicesData.map((service, i) => (
              <Link
                key={service.slug}
                href={`/klimatizacie/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <span className="font-display text-sm font-bold text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl font-bold text-navy-950">{service.title}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{service.intro}</p>
                <span className="mt-5 text-sm font-semibold text-navy-900 group-hover:text-orange-600">
                  Viac informácií →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy-950 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Kúrite plynom alebo elektrinou?</h2>
              <p className="mt-2 text-white/70">Pozrite sa, či sa vám oplatí tepelné čerpadlo vzduch-voda.</p>
            </div>
            <Button href="/tepelne-cerpadla" variant="accent" className="shrink-0">
              Tepelné čerpadlá
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
