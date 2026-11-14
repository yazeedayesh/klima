import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { FaqList } from "@/components/faq-list";
import { site } from "@/lib/site";

// Pri každej zmene podmienok SIEA aktualizovať text aj tento dátum.
const lastUpdated = { iso: "2026-11-08", display: "8. 11. 2026" };

export const metadata: Metadata = {
  title: "Dotácia na tepelné čerpadlo – Zelená domácnostiam II",
  description:
    "Ako získať príspevok na tepelné čerpadlo z projektu Zelená domácnostiam II: kto môže žiadať, ako prebieha registrácia a čo musí spĺňať zhotoviteľ.",
  alternates: { canonical: "/tepelne-cerpadla/dotacia" },
};

const steps = [
  {
    title: "Overte, či spĺňate podmienky",
    text: "Príspevok je určený vlastníkom rodinných domov a samostatných bytov v rodinných domoch. Pri spoluvlastníctve rozhoduje väčšina podielov.",
  },
  {
    title: "Registrácia a žiadosť",
    text: "Registruje sa a žiadosť podáva domácnosť — vlastník nehnuteľnosti, nie montážna firma. Vlastník môže na tento úkon niekoho splnomocniť.",
  },
  {
    title: "Výber oprávneného zhotoviteľa",
    text: "Montáž s príspevkom môže vykonať iba zhotoviteľ zapísaný v zozname, ktorý vedie Slovenská inovačná a energetická agentúra (SIEA).",
  },
  {
    title: "Montáž a vyúčtovanie",
    text: "Po inštalácii sa predkladajú doklady podľa aktuálnych všeobecných podmienok projektu. Presný postup a lehoty určuje SIEA.",
  },
];

const faq = [
  {
    q: "Kedy sa začala registrácia do Zelenej domácnostiam II?",
    a: "Registrácia sa spustila 26. októbra 2026. Poradie žiadostí a objem rezervovaných financií zverejňuje SIEA na oficiálnej stránke projektu.",
  },
  {
    q: "Koľko je príspevok na tepelné čerpadlo?",
    a: "Výška príspevku závisí od typu a výkonu zariadenia a od aktuálnych sadzieb SIEA, ktoré sa môžu meniť. Platné sumy nájdete vo všeobecných podmienkach na zelenadomacnostiam.sk.",
  },
  {
    q: "Dá sa príspevok získať aj na klimatizáciu?",
    a: "Projekt podporuje tepelné čerpadlá určené na vykurovanie a ohrev vody. Či sa podpora vzťahuje na konkrétny typ zariadenia, závisí od aktuálnych podmienok — pred kúpou to vždy overte.",
  },
];

export default function DotaciaPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dotácia na tepelné čerpadlo – Zelená domácnostiam II",
    dateModified: lastUpdated.iso,
    author: { "@id": `${site.url}/#business` },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/tepelne-cerpadla/dotacia`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <section className="border-b border-line bg-wash py-10 lg:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Tepelné čerpadlá", href: "/tepelne-cerpadla" },
              { label: "Dotácia", href: "/tepelne-cerpadla/dotacia" },
            ]}
          />
          <SectionHead
            as="h1"
            eyebrow="Zelená domácnostiam II"
            title="Dotácia na tepelné čerpadlo: ako získať príspevok"
            text="Štátny príspevok na tepelné čerpadlo poskytuje Slovenská inovačná a energetická agentúra (SIEA) v rámci národného projektu Zelená domácnostiam. Tu je stručný prehľad, ako postup funguje."
          />
          <p className="mt-4 text-sm text-ink-faint">
            Posledná aktualizácia: <time dateTime={lastUpdated.iso}>{lastUpdated.display}</time>. Záväzné sú vždy
            aktuálne podmienky na{" "}
            <a href="https://zelenadomacnostiam.sk" target="_blank" rel="noopener" className="underline">
              zelenadomacnostiam.sk
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHead eyebrow="Postup" title="Ako získať príspevok krok za krokom" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-950 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-navy-950">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl rounded-2xl border border-line bg-orange-100 p-8">
            <h2 className="text-xl font-bold text-navy-950">Zhotoviteľ musí byť v zozname SIEA</h2>
            {site.sieaRegistered ? (
              <p className="mt-3 text-sm text-ink-soft">
                {site.name} je zapísaný v zozname zhotoviteľov projektu Zelená domácnostiam. Pomôžeme vám s výberom
                zariadenia, ktoré spĺňa podmienky, a s podkladmi k žiadosti.
              </p>
            ) : (
              <p className="mt-3 text-sm text-ink-soft">
                Ak chcete montáž financovať s príspevkom, overte si pred podpisom zmluvy, že vybraná firma je
                zapísaná v zozname zhotoviteľov SIEA. Stav nášho oprávnenia vám radi potvrdíme telefonicky.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`tel:${site.phone}`} variant="accent">
                Zavolať {site.phoneDisplay}
              </Button>
              <Button href="/tepelne-cerpadla" variant="ghost">
                Tepelné čerpadlá
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHead eyebrow="Časté otázky" title="Otázky o príspevku" />
          <div className="mt-8">
            <FaqList items={faq} />
          </div>
        </Container>
      </section>
    </>
  );
}
