import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Služby",
  description: "Predaj, montáž, servis klimatizácií a tepelné čerpadlá – kompletné služby Klimaro v Košiciach a okolí.",
};

export default function SluzbyPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
            Služby
          </div>
          <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
            Klimatizácia od výberu až po servis
          </h1>
          <p className="mt-4 text-ink-soft">
            Postaráme sa o celý proces — od poradenstva pri výbere, cez montáž, až po pravidelnú údržbu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {servicesData.map((service, i) => (
            <Link
              key={service.slug}
              href={`/sluzby/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-md transition-shadow hover:shadow-lg"
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
  );
}
