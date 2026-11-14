import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { hasPrices, priceItems } from "@/lib/pricing-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cenník – montáž klimatizácie a tepelného čerpadla",
  description: `Orientačné ceny montáže a servisu klimatizácií a tepelných čerpadiel v Košiciach a okolí. Presnú ponuku pripravíme ${site.responseTime}.`,
  alternates: { canonical: "/cennik" },
  // Kým nie sú doplnené skutočné ceny, stránku neindexujeme.
  ...(hasPrices ? {} : { robots: { index: false, follow: true } }),
};

const factors = [
  {
    title: "Typ zariadenia",
    text: "Nástenná, bezprievanová alebo multisplit klimatizácia, prípadne tepelné čerpadlo vzduch-voda — cena rastie s výkonom aj vybavením.",
  },
  {
    title: "Výkon (kW)",
    text: "Volíme podľa veľkosti a orientácie miestnosti, pri tepelnom čerpadle podľa tepelnej straty domu.",
  },
  {
    title: "Náročnosť montáže",
    text: "Dĺžka potrubnej trasy, poschodie a prístupnosť vonkajšej jednotky ovplyvňujú rozsah prác.",
  },
  {
    title: "Doplnkové práce",
    text: "Elektroinštalácia, odvod kondenzátu, konzola či úpravy vykurovacej sústavy podľa potreby.",
  },
];

const groups = ["Klimatizácie", "Tepelné čerpadlá", "Servis"] as const;

export default function CennikPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Cenník", href: "/cennik" },
            ]}
          />
          <SectionHead
            as="h1"
            eyebrow="Cenník"
            title="Cenník montáže a servisu"
            text="Nemáme skryté poplatky. Presnú cenovú ponuku vám pripravíme na základe telefonickej konzultácie alebo obhliadky, vždy pred začatím prác."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" variant="accent">
              Vypýtať si presnú ponuku
            </Button>
            <Button href={`tel:${site.phone}`} variant="ghost">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>

          {hasPrices && (
            <div className="mt-14 space-y-10">
              {groups.map((group) => {
                const items = priceItems.filter((p) => p.group === group);
                if (items.length === 0) return null;
                return (
                  <div key={group}>
                    <h2 className="text-xl font-bold text-navy-950">{group}</h2>
                    <div className="mt-4 divide-y divide-line rounded-2xl border border-line">
                      {items.map((item) => (
                        <div key={item.title} className="flex items-start justify-between gap-6 p-5">
                          <div>
                            <h3 className="font-semibold text-navy-950">{item.title}</h3>
                            <p className="mt-1 text-sm text-ink-soft">{item.note}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="text-sm text-ink-faint">od</div>
                            <div className="font-display text-lg font-bold text-navy-950">{item.priceFrom} €</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-ink-faint">Ceny sú orientačné, s DPH. Konečnú cenu potvrdíme v ponuke.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHead eyebrow="Ako sa tvorí cena" title="Čo ovplyvňuje výslednú sumu" />
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
    </>
  );
}
