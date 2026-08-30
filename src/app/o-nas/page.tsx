import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nás",
  description: "Klimaro – certifikovaný tím pre montáž, predaj a servis klimatizácií v Košiciach a okolí.",
};

const values = [
  {
    title: "Transparentnosť",
    text: "Cenovú ponuku dostanete vždy vopred, písomne, bez skrytých položiek na faktúre.",
  },
  {
    title: "Odbornosť",
    text: "Montáž a servis vykonávajú technici s platnou F-gas certifikáciou podľa platnej legislatívy.",
  },
  {
    title: "Spoľahlivosť",
    text: "Dohodnutý termín dodržíme, a ak sa niečo zmení, dáme vám vedieť vopred.",
  },
  {
    title: "Dostupnosť po montáži",
    text: "Zostávame k dispozícii aj po realizácii — servis, čistenie, doplnenie chladiva.",
  },
];

const stats = [
  { value: "150+", label: "Nainštalovaných klimatizácií" },
  { value: "6+", label: "Rokov skúsenosti" },
  { value: "97 %", label: "Spokojnosť zákazníkov" },
  { value: "48 h", label: "Priemerná reakčná doba" },
];

export default function ONasPage() {
  return (
    <>
      <section className="py-16">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              O nás
            </div>
            <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
              Chladenie, na ktoré sa dá spoľahnúť
            </h1>
            <p className="mt-4 text-ink-soft">
              {site.name} je tím zameraný na montáž, predaj a servis klimatizácií a tepelných čerpadiel
              v Košiciach a okolí. Pracujeme priamo s koncovými zákazníkmi aj menšími prevádzkami —
              od prvej telefonickej konzultácie až po servis dlho po montáži.
            </p>
            <p className="mt-4 text-ink-soft">
              Naším cieľom je, aby ste presne vedeli, čo platíte a prečo — bez prekvapení a bez tlaku na
              rýchle rozhodnutie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" variant="accent">
                Kontaktovať nás
              </Button>
              <Button href="/sluzby" variant="ghost">
                Naše služby
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-line bg-gray-50 p-6">
                <div className="font-display text-2xl font-bold text-navy-950">{stat.value}</div>
                <div className="mt-1 text-xs text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              Naše hodnoty
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy-950 sm:text-3xl">Ako pracujeme</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6 shadow-md">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-950 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-navy-950">{v.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy-950 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Máte otázku pred rozhodnutím?</h3>
              <p className="mt-2 text-white/70">Radi vám poradíme telefonicky, bez záväzkov.</p>
            </div>
            <Button href={`tel:${site.phone}`} variant="accent" className="shrink-0">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
