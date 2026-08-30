import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ProductCard } from "@/components/product-card";
import { site } from "@/lib/site";
import { categories, getProductsByCategory } from "@/lib/products-data";
import { basePath } from "@/lib/base-path";

// Drop a real photo at public/hero.(jpg|jpeg|png) and it's used automatically —
// falls back to the placeholder illustration until then.
const heroImage =
  ["hero.jpg", "hero.jpeg", "hero.png"].find((name) => existsSync(join(process.cwd(), "public", name))) ??
  "hero-ac.svg";

const heroPills = ["Klimatizácia pre byt a dom", "Bezprievanový komfort", "Riešenie pre firmy"];

const trustBadges = [
  { title: "F-gas certifikát", text: "Odborná montáž a servis" },
  { title: "Jasná cena vopred", text: "Bez skrytých poplatkov" },
  { title: "Rýchla reakcia", text: "Odpoveď do 48 hodín" },
  { title: "Záruka na montáž", text: "Servis aj po realizácii" },
];

const processSteps = [
  { num: "01", title: "Telefonická konzultácia", text: "Zistíme váš priestor a potreby už pri prvom telefonáte." },
  { num: "02", title: "Obhliadka a ponuka", text: "Pripravíme jasnú cenovú ponuku vopred, bez skrytých poplatkov." },
  { num: "03", title: "Montáž na kľúč", text: "Inštaláciu zrealizujeme v dohodnutom termíne, čisto a bez zbytočných zásahov." },
  { num: "04", title: "Servis a záruka", text: "Po montáži zostávame k dispozícii — servis, údržba aj záručná podpora." },
];

const whyUs = [
  { title: "Certifikovaný tím (F-gas)", text: "Montáž a servis vykonávajú technici s platnou F-gas certifikáciou." },
  { title: "Overené značky", text: "Pracujeme len so zariadeniami s dobrou dostupnosťou dielov a dlhou životnosťou." },
  { title: "Jasná cena vopred", text: "Cenovú ponuku dostanete pred začatím prác — bez prekvapení na faktúre." },
  { title: "Dostupnosť aj po montáži", text: "Sme tu pre vás aj po realizácii — servis, čistenie, doplnenie chladiva." },
];

const areaTowns = ["Košice", "Prešov", "Michalovce", "Trebišov", "Moldava nad Bodvou", "Sečovce", "Rožňava"];

const faq = [
  {
    q: "Ako dlho trvá montáž klimatizácie?",
    a: "Bežná montáž nástennej split klimatizácie trvá spravidla 3 – 6 hodín, v závislosti od dĺžky potrubnej trasy a náročnosti prác.",
  },
  {
    q: "Dostanem cenu vopred, alebo až po montáži?",
    a: "Cenovú ponuku pripravujeme vždy vopred, na základe telefonickej konzultácie alebo obhliadky. Konečná cena sa nemení bez vášho súhlasu.",
  },
  {
    q: "Poskytujete servis aj mimo Košíc?",
    a: "Áno. Bežne pôsobíme v Košiciach a okolí do 50 km, pri väčších zákazkách radi pricestujeme kamkoľvek na Slovensku.",
  },
  {
    q: "Aká je záruka na montáž a zariadenie?",
    a: "Na vykonanú montáž poskytujeme záruku a zároveň platí štandardná výrobná záruka na samotné zariadenie podľa danej značky.",
  },
];

export default function HomePage() {
  const featuredCooling = [...getProductsByCategory("nastenne-klimatizacie"), ...getProductsByCategory("bezprievanove-klimatizacie")].slice(0, 4);
  const featuredHeatpumps = getProductsByCategory("tepelne-cerpadla");

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-8 lg:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[240px_1fr_280px]">
            <aside className="hidden rounded-2xl border border-line bg-white p-5 lg:block">
              <h2 className="px-1 text-sm font-bold text-navy-950">Kategórie</h2>
              <nav className="mt-3 flex flex-col">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/produkty?kategoria=${cat.slug}`}
                    className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-gray-50 hover:text-navy-900"
                  >
                    {cat.name}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  src={`${basePath}/${heroImage}`}
                  alt="Klimatizácia Klimaro nainštalovaná v modernom obývacom priestore"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/0 to-navy-950/0" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-950/65 via-navy-950/10 to-transparent" />

                <div className="absolute left-4 top-4 max-w-[230px] sm:left-5 sm:top-5">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-wide text-orange-300 drop-shadow-sm">
                    Certifikovaná montáž
                  </div>
                  <h1 className="mt-1.5 text-lg font-bold leading-snug text-white drop-shadow-md sm:text-xl">
                    Klimatizácia s montážou pre byt aj dom
                  </h1>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-5 sm:left-5">
                  <Button href="/produkty" variant="primary" className="px-4 py-2.5 text-sm shadow-md">
                    Pozrieť produkty
                  </Button>
                  <Button href="/kontakt" variant="ghost" className="bg-white/95 px-4 py-2.5 text-sm shadow-md">
                    Nezáväzná ponuka
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-line p-4">
                {heroPills.map((pill) => (
                  <span key={pill} className="rounded-full bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-ink-soft">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-2xl border border-line bg-navy-950 p-6 text-white">
                <div className="text-sm font-semibold text-white/70">Existujúca klimatizácia?</div>
                <h3 className="mt-2 text-xl font-bold">Servis a čistenie</h3>
                <p className="mt-2 text-sm text-white/70">
                  Pravidelná údržba predĺži životnosť jednotky a udrží nízku spotrebu.
                </p>
                <Link
                  href="/sluzby/servis-a-udrzba"
                  className="mt-4 inline-flex rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
                >
                  Viac info
                </Link>
              </div>
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-base font-bold text-navy-950">Neviete si vybrať model?</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Vyberieme klimatizáciu podľa miestnosti, výkonu a rozpočtu.
                </p>
                <Link href="/kontakt" className="mt-4 inline-flex text-sm font-semibold text-navy-900 underline">
                  Poradiť s výberom →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust badges */}
      <section className="border-b border-line py-10">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-100 text-orange-600">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-navy-950">{badge.title}</div>
                <div className="text-xs text-ink-faint">{badge.text}</div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Klimatizácie */}
      <ProductSection title="Klimatizácie" href="/produkty" products={featuredCooling} />

      {/* Advisory box */}
      <section className="py-4">
        <Container>
          <div className="grid gap-8 rounded-2xl bg-navy-950 p-10 text-white lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-14">
            <div>
              <div className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                Cenník
              </div>
              <h2 className="mt-4 text-3xl font-bold">Jasná cena, vždy vrátane montáže</h2>
              <p className="mt-3 max-w-lg text-white/70">
                Žiadne skryté poplatky. Orientačné ceny nájdete pri každom produkte — od výberu jednotky až po kompletnú inštaláciu.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Button href="/cenik" variant="accent">
                Zobraziť cenník
              </Button>
              <Button href="/kontakt" variant="outline-light">
                Vypýtať si presnú ponuku
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Tepelné čerpadlá */}
      <ProductSection title="Tepelné čerpadlá" href="/produkty?kategoria=tepelne-cerpadla" products={featuredHeatpumps} />

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHead eyebrow="Ako pracujeme" title="Od telefonátu po chladný vzduch — v štyroch krokoch" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.num}>
                <div className="font-display text-3xl font-bold text-orange-500">{step.num}</div>
                <h4 className="mt-3 text-lg font-bold text-navy-950">{step.title}</h4>
                <p className="mt-2 text-sm text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
              Prečo Klimaro
            </div>
            <h2 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">Chladenie, na ktoré sa dá spoľahnúť</h2>
            <ul className="mt-8 space-y-6">
              {whyUs.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-950 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-navy-950">{item.title}</h4>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-10">
            <div className="grid grid-cols-2 gap-6">
              <Stat value="150+" label="Nainštalovaných klimatizácií" />
              <Stat value="6+" label="Rokov skúsenosti" />
              <Stat value="97 %" label="Spokojnosť zákazníkov" />
              <Stat value="48 h" label="Priemerná reakčná doba" />
            </div>
          </div>
        </Container>
      </section>

      {/* Area */}
      <section id="area" className="bg-navy-950 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-md bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/80">
              Kde pôsobíme
            </div>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Košice a okolie do 50 km — no radi prídeme kamkoľvek na Slovensku
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Sídlime v Košiciach a najčastejšie realizujeme montáže priamo v meste a okolitých obciach. Pri väčších zákazkách radi pricestujeme aj do vzdialenejších regiónov po celom Slovensku.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areaTowns.map((town) => (
                <span key={town} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80">
                  {town}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/oblasti" variant="accent">
                Pozrieť všetky oblasti
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid h-64 w-64 place-items-center rounded-full border border-dashed border-white/25 sm:h-80 sm:w-80">
              <div className="grid h-40 w-40 place-items-center rounded-full border border-white/25 sm:h-52 sm:w-52">
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-white px-6 py-5 text-center text-navy-950 shadow-lg">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0A1830" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <b className="text-sm">Košice</b>
                  <span className="text-xs text-ink-faint">+ 50 km okolie</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <Container>
          <SectionHead eyebrow="Časté otázky" title="Odpovede skôr, ako sa spýtate" />
          <div className="mt-10 max-w-3xl divide-y divide-line rounded-2xl border border-line">
            {faq.map((item) => (
              <details key={item.q} className="group p-6 open:bg-gray-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-950">
                  {item.q}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 text-ink-faint transition-transform group-open:rotate-45">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="pb-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-orange-500 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Máte doma teplo a potrebujete klimatizáciu?</h3>
              <p className="mt-2 text-white/90">Napíšte nám a do 24 hodín vám pripravíme nezáväznú cenovú ponuku.</p>
            </div>
            <Button href="/kontakt" variant="primary" className="shrink-0">
              Kontaktovať {site.name}
            </Button>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-20">
        <Container>
          <SectionHead
            eyebrow="Kontakt"
            title="Pripravení chladiť váš priestor"
            text="Vyplňte formulár a ozveme sa vám e-mailom, alebo nás kontaktujte priamo telefonicky."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6 rounded-2xl border border-line bg-gray-50 p-8 shadow-md">
              <h3 className="text-xl font-bold text-navy-950">Kontaktné údaje</h3>
              <ContactInfoRow label="Zavolajte nám" value={site.phoneDisplay} href={`tel:${site.phone}`} />
              <ContactInfoRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
              <ContactInfoRow label="Pôsobisko" value={`${site.areaShort}, po dohode celé Slovensko`} />
              <ContactInfoRow label="Prevádzková doba" value={site.hours} />
            </div>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}

function ProductSection({
  title,
  href,
  products,
}: {
  title: string;
  href: string;
  products: ReturnType<typeof getProductsByCategory>;
}) {
  if (products.length === 0) return null;
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">{title}</h2>
          <Link href={href} className="flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-orange-600">
            Všetky produkty
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-ink-soft">{text}</p>}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="font-display text-2xl font-bold text-navy-950">{value}</div>
      <div className="mt-1 text-xs text-ink-faint">{label}</div>
    </div>
  );
}

function ContactInfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</div>
      <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
