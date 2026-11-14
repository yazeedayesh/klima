import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { FaqList } from "@/components/faq-list";
import { areas } from "@/lib/areas-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tepelné čerpadlá Košice – montáž a servis vzduch-voda",
  description: `Návrh, montáž a servis tepelných čerpadiel vzduch-voda pre rodinné domy v Košiciach a okolí do ${site.radiusKm} km. Výpočet výkonu, podlahové kúrenie aj radiátory.`,
  alternates: { canonical: "/tepelne-cerpadla" },
};

const suitableFor = [
  {
    title: "Novostavby",
    text: "Pri nízkoenergetickom dome s podlahovým kúrením je tepelné čerpadlo vzduch-voda najčastejšou voľbou hlavného zdroja tepla.",
  },
  {
    title: "Rekonštrukcie",
    text: "V staršom dome posúdime tepelné straty a vykurovaciu sústavu. Čerpadlo vie pracovať aj s radiátormi, ak sú dimenzované na nižšiu teplotu vody.",
  },
  {
    title: "Náhrada plynového kotla",
    text: "Čerpadlo môže kotol úplne nahradiť, alebo s ním fungovať v kombinácii (bivalentná prevádzka) počas najväčších mrazov.",
  },
  {
    title: "Ohrev teplej vody",
    text: "Systém navrhneme tak, aby pokryl vykurovanie aj prípravu teplej vody pre celú domácnosť.",
  },
];

const steps = [
  { num: "01", title: "Konzultácia a obhliadka", text: "Prejdeme dom, vykurovaciu sústavu, rozvody a miesto pre vonkajšiu jednotku." },
  { num: "02", title: "Návrh výkonu", text: "Výkon navrhujeme podľa tepelnej straty domu, nie odhadom podľa plochy." },
  { num: "03", title: "Cenová ponuka", text: "Dostanete položkovú ponuku — zariadenie, materiál a práca zvlášť." },
  { num: "04", title: "Montáž a spustenie", text: "Inštalácia, prepojenie s vykurovaním, nastavenie regulácie a zaškolenie." },
  { num: "05", title: "Servis", text: "Pravidelné prehliadky podľa požiadaviek výrobcu a záručný aj pozáručný servis." },
];

const faq = [
  {
    q: "Funguje tepelné čerpadlo vzduch-voda aj v mraze?",
    a: "Áno. Bežné tepelné čerpadlá vzduch-voda pracujú aj pri vonkajších teplotách okolo −20 °C. Pri najväčších mrazoch im pomáha záložný elektrický ohrev alebo existujúci kotol — preto je dôležitý správny návrh výkonu.",
  },
  {
    q: "Dá sa tepelné čerpadlo použiť s radiátormi?",
    a: "Často áno. Rozhoduje, akú teplotu vody radiátory potrebujú na vykúrenie domu. Pri obhliadke posúdime, či stačia existujúce radiátory, alebo treba niektoré vymeniť.",
  },
  {
    q: "Koľko stojí tepelné čerpadlo s montážou?",
    a: "Cena závisí od výkonu, typu zariadenia a stavu vykurovacej sústavy. Po obhliadke pripravíme položkovú cenovú ponuku. Na tepelné čerpadlá je možné žiadať štátny príspevok z programu Zelená domácnostiam.",
  },
  {
    q: "Je klimatizácia tiež tepelné čerpadlo?",
    a: "Technicky áno — klimatizácia je tepelné čerpadlo vzduch-vzduch a vie aj kúriť. Na vykurovanie celého domu a ohrev vody sa však používa systém vzduch-voda, ktorý ohrieva vodu v podlahovom kúrení alebo radiátoroch.",
  },
];

export default function TepelneCerpadlaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montáž tepelných čerpadiel vzduch-voda",
    serviceType: "Montáž a servis tepelných čerpadiel",
    url: `${site.url}/tepelne-cerpadla`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Tepelné čerpadlá", href: "/tepelne-cerpadla" },
            ]}
          />
          <SectionHead
            as="h1"
            eyebrow="Tepelné čerpadlá"
            title="Tepelné čerpadlá vzduch-voda v Košiciach a okolí"
            text={`Navrhneme, namontujeme a servisujeme tepelné čerpadlá vzduch-voda pre rodinné domy — od výpočtu výkonu podľa tepelnej straty až po nastavenie regulácie. Pôsobíme v Košiciach a okolí do ${site.radiusKm} km.`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" variant="accent">
              Dohodnúť obhliadku
            </Button>
            <Button href="/tepelne-cerpadla/dotacia" variant="ghost">
              Štátny príspevok
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHead eyebrow="Pre koho" title="Kedy sa tepelné čerpadlo oplatí" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {suitableFor.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHead eyebrow="Postup" title="Ako prebieha montáž tepelného čerpadla" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.num}>
                <div className="font-display text-3xl font-bold text-orange-500">{step.num}</div>
                <h3 className="mt-3 font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-8 rounded-2xl bg-navy-950 p-10 text-white lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-14">
            <div>
              <div className="label-light">
                Zelená domácnostiam II
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Štátny príspevok na tepelné čerpadlo</h2>
              <p className="mt-3 max-w-xl text-white/70">
                Vlastníci rodinných domov môžu na tepelné čerpadlo žiadať príspevok z národného projektu
                Zelená domácnostiam. Vysvetlíme, ako postup funguje a čo si pripraviť.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button href="/tepelne-cerpadla/dotacia" variant="accent">
                Ako získať príspevok
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHead eyebrow="Časté otázky" title="Otázky o tepelných čerpadlách" />
          <div className="mt-8">
            <FaqList items={faq} />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="text-xl font-bold text-navy-950">Tepelné čerpadlá v okolí Košíc</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/oblasti/${a.slug}`}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft hover:bg-gray-50"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
