import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { categories, getCategoryPriceRange } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Cenník",
  description: "Orientačné ceny montáže, predaja a servisu klimatizácií Klimaro – vždy vrátane inštalácie.",
};

const factors = [
  {
    title: "Typ jednotky",
    text: "Nástenná, bezprievanová alebo dizajnová klimatizácia — cena rastie s výkonom aj vybavením.",
  },
  {
    title: "Výkon (kW)",
    text: "Volíme podľa veľkosti a orientácie miestnosti, aby jednotka nebola poddimenzovaná ani predimenzovaná.",
  },
  {
    title: "Náročnosť montáže",
    text: "Dĺžka potrubnej trasy, poschodie a prístupnosť vonkajšej jednotky ovplyvňujú rozsah prác.",
  },
  {
    title: "Doplnkové služby",
    text: "Elektroinštalácia na kľúč, odvod kondenzátu alebo dodatočné stavebné úpravy podľa potreby.",
  },
];

export default function CenikPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              Cenník
            </div>
            <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
              Jasná cena, vždy vrátane montáže
            </h1>
            <p className="mt-4 text-ink-soft">
              Nemáme skryté poplatky. Nižšie nájdete orientačné cenové pásma pre jednotlivé kategórie —
              presnú cenovú ponuku vám pripravíme na základe telefonickej konzultácie alebo obhliadky, vždy
              pred začatím prác.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/produkty" variant="primary">
                Prehliadať produkty
              </Button>
              <Button href="/kontakt" variant="ghost">
                Vypýtať si presnú ponuku
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => {
              const range = getCategoryPriceRange(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/produkty?kategoria=${cat.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h2 className="text-base font-bold text-navy-950">{cat.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-ink-soft">{cat.description}</p>
                  {range && (
                    <div className="mt-4">
                      <div className="text-[0.7rem] uppercase tracking-wide text-ink-faint">od</div>
                      <div className="font-display text-xl font-bold text-navy-950">
                        {range.min === range.max ? `${range.min} €` : `${range.min}–${range.max} €`}
                      </div>
                    </div>
                  )}
                  <span className="mt-4 text-sm font-semibold text-navy-900 group-hover:text-orange-600">
                    Zobraziť produkty →
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              Ako sa tvorí cena
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy-950 sm:text-3xl">Čo ovplyvňuje výslednú sumu</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {factors.map((f, i) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-line bg-gray-50 p-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-950 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-navy-950">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-orange-500 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Chcete presnú cenovú ponuku?</h3>
              <p className="mt-2 text-white/90">Napíšte nám a do 24 hodín vám pripravíme nezáväznú kalkuláciu.</p>
            </div>
            <Button href="/kontakt" variant="primary" className="shrink-0">
              Vypýtať si ponuku
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
