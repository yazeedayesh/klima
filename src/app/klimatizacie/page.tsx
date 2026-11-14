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
      <section className="border-b border-line bg-wash py-10 lg:py-14">
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

          <ul className="mt-12 border-b border-ink/15">
            {servicesData.map((service) => (
              <li key={service.slug}>
                <Link href={`/klimatizacie/${service.slug}`} className="row-link">
                  <span>
                    <span className="block text-lg font-bold text-ink">{service.title}</span>
                    <span className="block text-[0.95rem] text-ink-soft">{service.intro}</span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
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
