import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { areas } from "@/lib/areas-data";

export const metadata: Metadata = {
  title: "Pôsobnosť – Košice, okolie a celé Slovensko",
  description: "Montáž a servis klimatizácií a tepelných čerpadiel v Košiciach a okolí do 100 km – Prešov, Michalovce, Trebišov, Rožňava a ďalšie. Po dohode aj v krajských mestách po celom Slovensku.",
  alternates: { canonical: "/oblasti" },
};

export default function OblastiPage() {
  return (
    <>
      <section className="border-b border-line bg-wash py-10 lg:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Domov", href: "/" }, { label: "Pôsobnosť", href: "/oblasti" }]} />
          <SectionHead
            as="h1"
            eyebrow="Pôsobnosť"
            title="Košice a okolie do 100 km — a po dohode celé Slovensko"
            text="Sídlime v Košiciach a najčastejšie realizujeme montáže priamo v meste a okolitých obciach. Pri väčších zákazkách radi pricestujeme aj do vzdialenejších regiónov po celom Slovensku."
          />

          <h2 className="mt-12 text-lg font-bold text-ink">Košice a okolie (do 100 km)</h2>
          <ul className="mt-4 border-b border-ink/15">
            {areas
              .filter((a) => a.core)
              .map((area) => (
                <li key={area.slug}>
                  <Link href={`/oblasti/${area.slug}`} className="row-link">
                    <span>
                      <span className="block text-lg font-bold text-ink">{area.name}</span>
                      <span className="block text-[0.95rem] text-ink-soft">{area.intro}</span>
                    </span>
                    <span className="num shrink-0 text-sm text-ink-faint">
                      {area.distanceKm === 0 ? "sídlo" : `${area.distanceKm} km`}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>

          <h2 className="mt-12 text-lg font-bold text-ink">Krajské mestá (po dohode termínu)</h2>
          <ul className="mt-4 border-b border-ink/15">
            {areas
              .filter((a) => !a.core)
              .map((area) => (
                <li key={area.slug}>
                  <Link href={`/oblasti/${area.slug}`} className="row-link">
                    <span>
                      <span className="block text-lg font-bold text-ink">{area.name}</span>
                      <span className="block text-[0.95rem] text-ink-soft">{area.intro}</span>
                    </span>
                    <span className="num shrink-0 text-sm text-ink-faint">{area.distanceKm} km</span>
                  </Link>
                </li>
              ))}
          </ul>

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
