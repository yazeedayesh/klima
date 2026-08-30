import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

const stats = [
  { value: "150+", label: "Nainštalovaných klimatizácií" },
  { value: "6+", label: "Rokov skúseností" },
  { value: "97 %", label: "Spokojnosť zákazníkov" },
  { value: "48 h", label: "Priemerná reakčná doba" },
];

const services = [
  {
    tag: "01",
    title: "Predaj klimatizácií",
    text: "Overené značky pre byty, domy aj prevádzky — s poradenstvom pri výbere správneho výkonu.",
    href: "/sluzby/predaj-klimatizacii",
  },
  {
    tag: "02",
    title: "Montáž klimatizácie",
    text: "Odborná inštalácia certifikovaným technikom vrátane elektroinštalácie a odvodu kondenzátu.",
    href: "/sluzby/montaz-klimatizacie",
  },
  {
    tag: "03",
    title: "Servis a údržba",
    text: "Pravidelné čistenie, kontrola chladiva a servisné prehliadky, ktoré predĺžia životnosť jednotky.",
    href: "/sluzby/servis-a-udrzba",
  },
  {
    tag: "04",
    title: "Tepelné čerpadlá",
    text: "Inštalácia tepelných čerpadiel vzduch-voda ako úsporná alternatíva vykurovania.",
    href: "/sluzby/tepelne-cerpadla",
  },
];

const process = [
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <Container className="grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="inline-flex items-center rounded-full bg-petrol-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-petrol-800">
              Certifikovaná montáž klimatizácií
            </div>
            <h1 className="mt-6 text-[2.6rem] leading-[1.08] font-semibold text-petrol-950 sm:text-6xl">
              Chladenie, ktoré<br />
              <em className="font-medium italic text-terracotta-600">funguje bez starostí</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-soft">
              Profesionálna montáž, predaj a servis klimatizácií pre domácnosti aj firmy. Sídlime v{" "}
              {site.address.locality}, pôsobíme do 50 km okolia — a radi pricestujeme kamkoľvek na Slovensku.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/kontakt" variant="accent">
                Nezáväzná cenová ponuka
              </Button>
              <Button href="/cenik" variant="ghost">
                Pozrieť cenník
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-petrol-950">{stat.value}</div>
                  <div className="mt-1 text-sm text-ink-faint">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image src="/hero-ac.svg" alt="Nástenná klimatizačná jednotka Montex s jemným prúdením chladného vzduchu" width={560} height={460} priority className="w-full" />
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-4 shadow-lg sm:left-8">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#256F77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <div className="text-sm font-semibold text-petrol-950">F-gas certifikát</div>
                <div className="text-xs text-ink-faint">Odborná montáž a servis</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <Container>
          <SectionHead
            eyebrow="Naše služby"
            title="Klimatizácia od výberu až po servis"
            text="Postaráme sa o celý proces — od poradenstva pri výbere, cez montáž, až po pravidelnú údržbu."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col rounded-[20px] border border-line bg-paper p-7 shadow-md transition-shadow hover:shadow-lg"
              >
                <span className="font-display text-sm text-terracotta-500">{s.tag}</span>
                <h3 className="mt-4 text-xl font-semibold text-petrol-950">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{s.text}</p>
                <span className="mt-5 text-sm font-semibold text-petrol-700 group-hover:text-terracotta-600">
                  Viac informácií →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="bg-petrol-950 py-20 text-cream">
        <Container>
          <SectionHead
            dark
            eyebrow="Ako pracujeme"
            title="Od telefonátu po chladný vzduch — v štyroch krokoch"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.num}>
                <div className="font-display text-3xl font-semibold text-terracotta-400">{step.num}</div>
                <h4 className="mt-3 text-lg font-semibold text-cream">{step.title}</h4>
                <p className="mt-2 text-sm text-cream/65">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-petrol-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-petrol-800">
              Prečo Montex
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-petrol-950 sm:text-4xl">
              Chladenie, na ktoré sa dá spoľahnúť
            </h2>
            <ul className="mt-8 space-y-6">
              {whyUs.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-terracotta-100 font-display text-sm font-semibold text-terracotta-600">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-petrol-950">{item.title}</h4>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-cream-100 p-10">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-paper p-6 shadow-md">
                  <div className="font-display text-2xl font-semibold text-petrol-950">{stat.value}</div>
                  <div className="mt-1 text-xs text-ink-faint">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Price teaser */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 rounded-[28px] border border-line bg-paper p-10 shadow-md lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-14">
            <div>
              <div className="inline-flex items-center rounded-full bg-terracotta-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-terracotta-600">
                Cenník
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-petrol-950 sm:text-4xl">
                Jasná cena, vždy vrátane montáže
              </h2>
              <p className="mt-4 max-w-lg text-ink-soft">
                Žiadne skryté poplatky. Na stránke cenníka nájdete orientačné ceny pre jednotlivé typy klimatizácií — od výberu jednotky až po kompletnú inštaláciu.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Button href="/cenik" variant="primary">
                Zobraziť cenník
              </Button>
              <Button href="/kontakt" variant="ghost">
                Vypýtať si presnú ponuku
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Area */}
      <section id="area" className="bg-petrol-950 py-20 text-cream">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cream/80">
              Kde pôsobíme
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-cream sm:text-4xl">
              Košice a okolie do 50 km — no radi prídeme kamkoľvek na Slovensku
            </h2>
            <p className="mt-4 max-w-lg text-cream/65">
              Sídlime v Košiciach a najčastejšie realizujeme montáže priamo v meste a okolitých obciach. Pri väčších zákazkách radi pricestujeme aj do vzdialenejších regiónov po celom Slovensku.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areaTowns.map((town) => (
                <span key={town} className="rounded-full border border-cream/20 px-4 py-1.5 text-sm text-cream/80">
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
            <div className="grid h-64 w-64 place-items-center rounded-full border border-dashed border-cream/25 sm:h-80 sm:w-80">
              <div className="grid h-40 w-40 place-items-center rounded-full border border-cream/25 sm:h-52 sm:w-52">
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-cream px-6 py-5 text-center text-petrol-950 shadow-lg">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0B343A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

      {/* CTA banner */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-[28px] bg-terracotta-500 p-10 text-white sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Máte doma teplo a potrebujete klimatizáciu?</h3>
              <p className="mt-2 text-white/85">Napíšte nám a do 24 hodín vám pripravíme nezáväznú cenovú ponuku.</p>
            </div>
            <Button href="/kontakt" variant="primary" className="bg-petrol-950 hover:bg-petrol-900 shrink-0">
              Kontaktovať {site.name}
            </Button>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <Container>
          <SectionHead
            eyebrow="Kontakt"
            title="Pripravení chladiť váš priestor"
            text="Vyplňte formulár a ozveme sa vám cez WhatsApp, alebo nás kontaktujte priamo telefonicky."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6 rounded-[20px] border border-line bg-paper p-8 shadow-md">
              <h3 className="text-xl font-semibold text-petrol-950">Kontaktné údaje</h3>
              <ContactInfoRow label="Zavolajte nám" value={site.phoneDisplay} href={`tel:${site.phone}`} />
              <ContactInfoRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
              <ContactInfoRow label="Pôsobisko" value={`${site.areaShort}, po dohode celé Slovensko`} />
              <ContactInfoRow label="Prevádzková doba" value={site.hours} />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div
        className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] ${
          dark ? "bg-cream/10 text-cream/80" : "bg-petrol-100 text-petrol-800"
        }`}
      >
        {eyebrow}
      </div>
      <h2 className={`mt-5 text-3xl font-semibold sm:text-4xl ${dark ? "text-cream" : "text-petrol-950"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 ${dark ? "text-cream/65" : "text-ink-soft"}`}>{text}</p>}
    </div>
  );
}

function ContactInfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</div>
      <div className="mt-0.5 text-[0.95rem] font-medium text-petrol-950">{value}</div>
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
