import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nás",
  description: "Klimaro – montáž, predaj a servis klimatizácií a tepelných čerpadiel v Košiciach a okolí do 100 km.",
  alternates: { canonical: "/o-nas" },
};

const values = [
  {
    title: "Transparentnosť",
    text: "Cenovú ponuku dostanete vždy vopred, písomne, bez skrytých položiek na faktúre.",
  },
  {
    title: "Odbornosť",
    text: "Montáž robíme podľa pokynov výrobcu — tlaková skúška, vákuovanie a uvedenie do prevádzky.",
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

export default function ONasPage() {
  return (
    <>
      <section className="py-16">
        <Container>
          <Breadcrumbs items={[{ label: "Domov", href: "/" }, { label: "O nás", href: "/o-nas" }]} />
        </Container>
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead
              as="h1"
              eyebrow="O nás"
              title="Chladenie, na ktoré sa dá spoľahnúť"
              text={`${site.name} je tím zameraný na montáž, predaj a servis klimatizácií a tepelných čerpadiel v Košiciach a okolí. Pracujeme priamo s koncovými zákazníkmi aj menšími prevádzkami — od prvej telefonickej konzultácie až po servis dlho po montáži.`}
            />
            <p className="mt-4 max-w-2xl text-ink-soft">
              Naším cieľom je, aby ste presne vedeli, čo platíte a prečo — bez prekvapení a bez tlaku na
              rýchle rozhodnutie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" variant="accent">
                Kontaktovať nás
              </Button>
              <Button href="/klimatizacie" variant="ghost">
                Naše služby
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-gray-50 p-8">
            <h2 className="text-lg font-bold text-navy-950">Čo robíme</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li>Predaj a montáž klimatizácií všetkých bežných značiek</li>
              <li>Servis, čistenie a dezinfekcia klimatizácií</li>
              <li>Návrh, montáž a servis tepelných čerpadiel vzduch-voda</li>
              <li>{site.areaShort}, po dohode celé Slovensko</li>
              <li>{site.yearsExperience} rokov skúseností v odbore</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="label-accent">
              Naše hodnoty
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy-950 sm:text-3xl">Ako pracujeme</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6">
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
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Máte otázku pred rozhodnutím?</h2>
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
