import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { areas } from "@/lib/areas-data";

export const metadata: Metadata = {
  title: "Pôsobnosť",
  description: "Klimaro pôsobí v Košiciach a okolí do 50 km, po dohode aj po celom Slovensku.",
  alternates: { canonical: "/oblasti" },
};

export default function OblastiPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              Pôsobnosť
            </div>
            <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
              Košice a okolie do 50 km — no radi prídeme kamkoľvek na Slovensku
            </h1>
            <p className="mt-4 text-ink-soft">
              Sídlime v Košiciach a najčastejšie realizujeme montáže priamo v meste a okolitých obciach.
              Pri väčších zákazkách radi pricestujeme aj do vzdialenejších regiónov po celom Slovensku.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/oblasti/${area.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-navy-950">{area.name}</h2>
                  <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-ink-faint">
                    {area.distanceKm === 0 ? "sídlo" : `${area.distanceKm} km`}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{area.intro}</p>
                <span className="mt-4 text-sm font-semibold text-navy-900 group-hover:text-orange-600">
                  Viac o pôsobnosti →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-gray-50 p-8 text-center">
            <h2 className="text-lg font-bold text-navy-950">Vaša obec tu nie je uvedená?</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Zoznam nie je uzavretý — na väčšie zákazky pricestujeme po dohode kamkoľvek na Slovensku.
            </p>
            <div className="mt-5">
              <Button href="/kontakt" variant="accent">
                Opýtať sa na dostupnosť
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
