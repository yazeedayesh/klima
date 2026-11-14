import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import Image from "next/image";
import { AreaMap } from "@/components/home/area-map";
import { areas } from "@/lib/areas-data";
import { acServicesNav, heatPumpNav, site } from "@/lib/site";
import { hasPrices, priceItems } from "@/lib/pricing-data";

const categories = [...acServicesNav, ...heatPumpNav];

const facts = [
  { value: `${site.yearsExperience} rokov`, text: "montujeme a servisujeme" },
  { value: "Všetky značky", text: "nie sme viazaní na jedného výrobcu" },
  { value: "Cena vopred", text: "ponuku máte pred začatím prác" },
  { value: "Záruka", text: "na montáž aj na zariadenie" },
];

const cooling = [
  { href: "/klimatizacie/montaz", title: "Montáž klimatizácie", text: "Split aj multisplit, byty, domy a firmy" },
  { href: "/klimatizacie/predaj", title: "Predaj klimatizácií", text: "Výber jednotky podľa miestnosti, cena s montážou" },
  { href: "/klimatizacie/servis", title: "Servis a čistenie", text: "Dezinfekcia, opravy a kontrola všetkých značiek" },
];

const heating = [
  { href: "/tepelne-cerpadla", title: "Tepelné čerpadlá vzduch-voda", text: "Návrh výkonu, montáž a servis pre rodinné domy" },
  { href: "/tepelne-cerpadla/dotacia", title: "Dotácia Zelená domácnostiam", text: "Kto môže žiadať a ako postupovať" },
  { href: "/kontakt", title: "Obhliadka domu", text: "Posúdime vykurovanie a navrhneme výkon čerpadla" },
];

const steps = [
  { title: "Zavoláte alebo napíšete", text: "Povieme si, aký priestor riešite a čo od zariadenia čakáte." },
  { title: "Obhliadka a cenová ponuka", text: "Pozrieme si miesto a pošleme ponuku, kde je zvlášť zariadenie, materiál a práca." },
  { title: "Montáž v dohodnutý deň", text: "Vrátane elektroinštalácie, odvodu kondenzátu, tlakovej skúšky a spustenia." },
  { title: "Servis a záruka", text: "Po montáži ostávame k dispozícii na čistenie, kontroly aj opravy." },
];

const faq = [
  {
    q: "Dostanem cenu vopred, alebo až po montáži?",
    a: "Cenovú ponuku pripravujeme vždy vopred, na základe telefonickej konzultácie alebo obhliadky. Konečná cena sa nemení bez vášho súhlasu.",
  },
  {
    q: "Kde všade pôsobíte?",
    a: `Bežne pracujeme v Košiciach a do ${site.radiusKm} km od nich — napríklad Prešov, Michalovce, Trebišov či Rožňava. Pri väčších zákazkách pricestujeme kamkoľvek na Slovensku.`,
  },
  {
    q: "Vie klimatizácia aj kúriť?",
    a: "Áno. Väčšina dnešných klimatizácií kúri aj chladí a v prechodnom období vie byť lacnejším zdrojom tepla. Na vykurovanie celého domu a ohrev vody je určené tepelné čerpadlo vzduch-voda.",
  },
  {
    q: "Montujete aj tepelné čerpadlá?",
    a: "Áno. Navrhujeme a montujeme tepelné čerpadlá vzduch-voda pre rodinné domy, vrátane prepojenia s podlahovým kúrením alebo radiátormi, a zabezpečujeme ich servis.",
  },
  {
    q: "Aká je záruka na montáž a zariadenie?",
    a: "Na vykonanú montáž poskytujeme záruku a zároveň platí štandardná výrobná záruka na samotné zariadenie podľa danej značky.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — categories | hero card | quick-help, the "browse, don't just read" layout */}
      <section className="bg-paper py-6 lg:py-8">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[220px_1fr_260px]">
            <aside className="hidden lg:block">
              <div className="rounded-2xl border border-line bg-white p-5">
                <h2 className="px-1 text-sm font-bold text-ink">Kategórie</h2>
                <nav aria-label="Kategórie" className="mt-2 flex flex-col">
                  {categories.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-paper hover:text-ink"
                    >
                      {c.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="relative isolate overflow-hidden rounded-2xl border border-line">
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image
                  src="/hero.webp"
                  alt="Nástenná klimatizácia v svetlej obývacej izbe"
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-[72%_35%]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.88) 30%, rgba(255,255,255,.4) 58%, rgba(255,255,255,0) 78%)",
                  }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:max-w-md sm:p-6">
                <p className="rise m-0 text-[0.85rem] font-semibold text-accent-strong">
                  Košice · po celom Slovensku
                </p>
                <h1 className="rise mb-0 mt-2 text-2xl leading-[1.1] sm:text-3xl" style={{ "--i": 1 } as React.CSSProperties}>
                  Klimatizácie a tepelné čerpadlá na kľúč
                </h1>
                <p className="rise mb-0 mt-2 text-sm text-ink-soft" style={{ "--i": 2 } as React.CSSProperties}>
                  Cenu poznáte ešte pred začatím prác.
                </p>
                <div className="rise mt-4 flex flex-wrap gap-2.5" style={{ "--i": 3 } as React.CSSProperties}>
                  <Button href="/kontakt" variant="accent" className="px-5 py-2.5 text-sm">
                    Vypýtať cenu
                  </Button>
                  <Button href={`tel:${site.phone}`} variant="ghost" className="num px-5 py-2.5 text-sm">
                    Zavolať
                  </Button>
                </div>
              </div>
            </div>

            <aside className="hidden flex-col gap-4 lg:flex">
              <div className="rounded-2xl bg-ink p-5 text-white">
                <h3 className="m-0 text-base font-bold text-white">Máte už klimatizáciu?</h3>
                <p className="mt-2 text-sm text-white/70">
                  Pravidelný servis predlžuje životnosť jednotky a znižuje spotrebu energie.
                </p>
                <Link href="/klimatizacie/servis" className="mt-4 inline-block text-sm font-semibold text-accent-glow hover:underline">
                  Objednať servis →
                </Link>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5">
                <h3 className="m-0 text-base font-bold text-ink">Neviete vybrať model?</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Poradíme podľa veľkosti miestnosti, využitia aj rozpočtu — telefonicky alebo na mieste.
                </p>
                <Link href="/kontakt" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
                  Poradiť pri výbere →
                </Link>
              </div>
            </aside>
          </div>

          <ul className="mt-5 flex flex-nowrap gap-2.5 overflow-x-auto [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => (
              <li key={c.href} className="shrink-0">
                <Link
                  href={c.href}
                  className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-ink"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Featured products — real catalog items once pricing-data.ts has real entries */}
      {hasPrices && (
        <section className="py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="m-0 text-3xl sm:text-4xl">Z ponuky</h2>
              <Link href="/cennik" className="text-sm font-semibold text-accent hover:underline">
                Celý cenník →
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {priceItems.slice(0, 6).map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-paper text-ink">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <rect x="3" y="6" width="18" height="7" rx="2.5" />
                      <path d="M6 16c0 2 1.5 3 3 2.6M14 16c0 2 1.8 3.4 4 2.4" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  {(item.brand || item.model || item.kw) && (
                    <p className="num mt-0.5 text-sm font-medium text-accent-strong">
                      {[item.brand, item.model, item.kw ? `${item.kw} kW` : null].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-ink-soft">{item.note}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-ink-faint">od </span>
                      <span className="font-display text-xl font-bold text-ink">{item.priceFrom} €</span>
                    </div>
                    <Link href="/kontakt" className="text-sm font-semibold text-accent hover:underline">
                      Opýtať sa
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Facts */}
      <section className="border-b border-line">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.value}
                className={`py-7 pr-6 ${i % 2 === 1 ? "pl-6 max-lg:border-l" : ""} ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
                  i > 1 ? "max-lg:border-t" : ""
                } border-line`}
              >
                <dt className="num text-2xl font-bold text-ink sm:text-3xl">{f.value}</dt>
                <dd className="m-0 mt-1 text-[0.95rem] text-ink-soft">{f.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Services: cooling | heating */}
      <section className="py-20 lg:py-28">
        <Container>
          <h2 className="max-w-3xl text-4xl sm:text-6xl">Jedna firma na chladenie aj kúrenie</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ServiceColumn
              title="Klimatizácie"
              lead="V lete chladia, v prechodnom období prikúria."
              href="/klimatizacie"
              items={cooling}
            />
            <ServiceColumn
              title="Tepelné čerpadlá"
              lead="Vykurovanie a teplá voda pre rodinný dom."
              href="/tepelne-cerpadla"
              items={heating}
            />
          </div>
        </Container>
      </section>

      {/* Process — a real sequence, so it is numbered */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <h2 className="max-w-3xl text-4xl sm:text-6xl">Od telefonátu po hotovú montáž</h2>
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="relative border-t border-ink/25 pt-6">
                <span className="num absolute -top-[1.2rem] left-0 bg-paper pr-3 text-3xl font-semibold text-accent">{i + 1}</span>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mb-0 mt-2 text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 max-w-xl text-lg text-ink">
              Cena závisí od výkonu zariadenia a náročnosti montáže. Ponuku pripravíme {site.responseTime}.
            </p>
            <Button href="/cennik" variant="primary" className="shrink-0">
              Ako sa tvorí cena
            </Button>
          </div>
        </Container>
      </section>

      {/* Area */}
      <section id="area" className="bg-ink py-20 text-white lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="label-light">Pôsobnosť</div>
            <h2 className="mt-3 text-4xl text-white sm:text-6xl">Košice a {site.radiusKm} km okolo nich</h2>
            <p className="mt-5 max-w-lg text-xl font-bold text-white">
              A po dohode namontujeme a servisujeme kdekoľvek na Slovensku.
            </p>
            <p className="mt-3 max-w-lg text-lg text-white/70">
              Sídlime v Košiciach a najčastejšie pracujeme v meste a v okolitých okresoch Košického a Prešovského
              kraja — pri väčších zákazkách pricestujeme kamkoľvek po krajine.
            </p>
            <ul className="mt-8 grid max-w-lg grid-cols-2 gap-x-8">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/oblasti/${area.slug}`} className="row-link text-white">
                    <span className="font-semibold">{area.name}</span>
                    <span className="num text-sm text-white/50">
                      {area.distanceKm === 0 ? "sídlo" : `${area.distanceKm} km`}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/oblasti" variant="outline-light">
                Všetky oblasti
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[560px]">
            <AreaMap />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl sm:text-6xl">Na čo sa ľudia pýtajú</h2>
            <p className="mt-4 max-w-sm text-lg text-ink-soft">
              Nenašli ste odpoveď? Zavolajte na{" "}
              <a href={`tel:${site.phone}`} className="num whitespace-nowrap font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <FaqList items={faq} />
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-wash py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-4xl sm:text-6xl">Vypýtajte si cenovú ponuku</h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              Napíšte, čo riešite. Ozveme sa {site.responseTime} a dohodneme obhliadku.
            </p>
            <dl className="mt-10 max-w-md">
              <ContactRow label="Telefón" value={site.phoneDisplay} href={`tel:${site.phone}`} />
              <ContactRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow label="Kde pracujeme" value={`${site.areaShort}, po dohode celé Slovensko`} />
              <ContactRow label="Kedy nás zastihnete" value={site.hours} />
            </dl>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

function ServiceColumn({
  title,
  lead,
  href,
  items,
}: {
  title: string;
  lead: string;
  href: string;
  items: { href: string; title: string; text: string }[];
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-paper p-7 shadow-lg sm:p-10">
      <h3 className="m-0 text-3xl font-bold sm:text-4xl">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="mb-0 mt-2 text-lg text-ink-soft">{lead}</p>
      <ul className="mt-8 border-b border-ink/15 text-ink">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="row-link">
              <span>
                <span className="block text-lg font-bold">{item.title}</span>
                <span className="block text-[0.95rem] text-ink-soft">{item.text}</span>
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
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="grid grid-cols-[9.5rem_1fr] gap-4 border-t border-ink/15 py-4">
      <dt className="text-[0.95rem] text-ink-soft">{label}</dt>
      <dd className="num m-0 font-semibold text-ink">
        {href ? (
          <a href={href} className="hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
