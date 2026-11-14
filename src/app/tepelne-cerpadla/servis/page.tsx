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
  title: "Servis tepelného čerpadla Košice – pravidelná údržba",
  description: `Servis a pravidelná údržba tepelných čerpadiel vzduch-voda v Košiciach a okolí do ${site.radiusKm} km – kontrola chladiva, čistenie, diagnostika poruch.`,
  alternates: { canonical: "/tepelne-cerpadla/servis" },
};

const checklist = [
  {
    title: "Vonkajšia jednotka",
    text: "Kontrola priechodnosti vzduchu okolo jednotky, čistenie výmenníka od nečistôt, listov a prachu, kontrola odtoku kondenzátu a stavu odmrazovania v zime.",
  },
  {
    title: "Chladivový okruh",
    text: "Kontrola tesnosti okruhu a tlakov, prípadné doplnenie chladiva podľa predpisu výrobcu.",
  },
  {
    title: "Elektrická časť",
    text: "Kontrola elektrických spojov, poistiek a istenia, meranie prúdových odberov kompresora a ventilátorov.",
  },
  {
    title: "Regulácia a nastavenia",
    text: "Kontrola nastavení ekvitermickej krivky, prevádzkových režimov a prípadného aktualizovania firmvéru riadiacej jednotky.",
  },
  {
    title: "Vykurovací okruh",
    text: "Kontrola tlaku vo vykurovacom systéme, stavu expanznej nádoby a cirkulačného čerpadla, pri kombinácii s bojlerom aj jeho stav.",
  },
  {
    title: "Záznam o servise",
    text: "Zápis vykonaných úkonov a nameraných hodnôt do servisnej knižky alebo digitálneho záznamu — užitočné pri reklamácii aj pri porovnaní stavu zariadenia medzi jednotlivými kontrolami.",
  },
];

const issues = [
  {
    title: "Nižší vykurovací výkon než obvykle",
    text: "Môže signalizovať pokles chladiva, znečistený výmenník vonkajšej jednotky alebo nesprávne nastavenú ekvitermickú krivku. Pri obhliadke vieme príčinu odlíšiť a opraviť.",
  },
  {
    title: "Namrznutá vonkajšia jednotka",
    text: "Určitá tvorba námrazy v zime je bežná a čerpadlo ju sám odstraňuje automatickým odmrazovaním. Nadmerná alebo trvalá námraza býva signálom poruchy odmrazovacieho cyklu alebo nedostatočného priestoru na voľný prietok vzduchu okolo jednotky.",
  },
  {
    title: "Neobvyklý hluk alebo vibrácie",
    text: "Častou príčinou je uvoľnené uchytenie vonkajšej jednotky alebo opotrebovaný ventilátor. Odporúčame nepokračovať v prevádzke a objednať kontrolu, aby sa predišlo väčšej poruche.",
  },
  {
    title: "Chybový kód na regulácii",
    text: "Väčšina výrobcov používa vlastné chybové kódy. Pri telefonickej konzultácii vieme podľa kódu a modelu odhadnúť pravdepodobnú príčinu a potrebu návštevy technika.",
  },
];

const faq = [
  {
    q: "Ako často treba servisovať tepelné čerpadlo?",
    a: "Odporúčame aspoň raz ročne, ideálne na konci letnej sezóny pred začiatkom vykurovacieho obdobia. Pri celoročnej prevádzke (napríklad aj na chladenie v lete) je vhodná kontrola dvakrát ročne.",
  },
  {
    q: "Servisujete aj tepelné čerpadlá, ktoré ste nemontovali?",
    a: "Áno, servisujeme tepelné čerpadlá vzduch-voda bežných značiek bez ohľadu na to, kto ich pôvodne montoval.",
  },
  {
    q: "Čo robiť, ak čerpadlo prestane kúriť úplne?",
    a: "Skontrolujte, či nesvieti chybový kód na regulácii a či má systém napájanie a dostatočný tlak vo vykurovacom okruhu. Ak sa problém takto nevyriešil, zavolajte nám — po telefóne vieme odhadnúť, či ide o rýchlo odstrániteľnú príčinu alebo je potrebná návšteva technika.",
  },
  {
    q: "Ovplyvňuje servis záruku na zariadenie?",
    a: "Výrobná záruka zvyčajne vyžaduje dodržanie predpísaných servisných intervalov. Odporúčame mať servis zdokumentovaný, aby bol v prípade reklamácie k dispozícii záznam o vykonanej údržbe.",
  },
  {
    q: "Dá sa servis objednať aj mimo vykurovacej sezóny?",
    a: "Áno, a je to vhodný čas — mimo sezóny vieme termín dohodnúť rýchlejšie a prípadnú opravu stihneme ešte pred nástupom chladného počasia, keď je na čerpadlo najväčší nárok.",
  },
];

export default function TepelneCerpadlaServisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servis tepelných čerpadiel vzduch-voda",
    serviceType: "Servis a údržba tepelných čerpadiel",
    description: `Servis a pravidelná údržba tepelných čerpadiel vzduch-voda v Košiciach a okolí do ${site.radiusKm} km.`,
    url: `${site.url}/tepelne-cerpadla/servis`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="border-b border-line bg-wash py-10 lg:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Domov", href: "/" },
              { label: "Tepelné čerpadlá", href: "/tepelne-cerpadla" },
              { label: "Servis", href: "/tepelne-cerpadla/servis" },
            ]}
          />
          <SectionHead
            as="h1"
            eyebrow="Tepelné čerpadlá"
            title="Servis tepelného čerpadla vzduch-voda"
            text="Pravidelná údržba udržiava tepelné čerpadlo pri plánovanom výkone a nižšej spotrebe a znižuje riziko neočakávanej poruchy počas vykurovacej sezóny. Servisujeme zariadenia všetkých bežných značiek, aj tie, ktoré sme nemontovali."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" variant="accent">
              Objednať servis
            </Button>
            <Button href={`tel:${site.phone}`} variant="ghost">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>

          <div className="mt-10 max-w-2xl space-y-4 text-ink-soft">
            <p className="m-0">
              Tepelné čerpadlo vzduch-voda je zariadenie, ktoré bežíme prakticky celé vykurovacie obdobie —
              na rozdiel od klimatizácie, ktorú väčšina domácností používa len niekoľko mesiacov v roku. Táto
              takmer nepretržitá prevádzka znamená, že znečistenie výmenníka, pokles chladiva alebo drobná
              elektrická porucha sa prejavia na účte za energie skôr a výraznejšie než pri sezónnom zariadení.
            </p>
            <p className="m-0">
              Pravidelný servis preto nie je len formálna podmienka záruky, ale aj spôsob, ako si overiť, že
              čerpadlo pracuje s predpokladanou účinnosťou. Rozsah kontroly je u väčšiny výrobcov podobný —
              vonkajšia jednotka, chladivový okruh, elektrická časť, regulácia a napojenie na vykurovací okruh
              domu.
            </p>
            <p className="m-0">
              Interval kontroly sa odvíja aj od toho, ako je čerpadlo prevádzkované — pri bivalentnom systéme
              v kombinácii s existujúcim kotlom býva zaťaženie samotného čerpadla iné než pri systéme, ktorý
              kúrenie domu zabezpečuje sám. Pri servise preto vždy zohľadňujeme konkrétne zapojenie vykurovacej
              sústavy, nielen typ a výkon samotného zariadenia.
            </p>
            <p className="m-0">
              Umiestnenie vonkajšej jednotky má tiež vplyv na to, ako často treba kontrolovať priechodnosť
              vzduchu okolo nej — pri jednotke v blízkosti živého plota, pod strešným odkvapom alebo v mieste,
              kam v zime padá sneh zo strechy, je vhodné kontrolu zaradiť častejšie než pri voľne stojacej
              jednotke na otvorenom priestranstve.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16">
        <Container>
          <SectionHead eyebrow="Rozsah servisu" title="Čo bežná servisná kontrola zahŕňa" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHead eyebrow="Diagnostika" title="Bežné príznaky a čo môžu znamenať" />
          <p className="mt-4 max-w-2xl text-sm text-ink-faint">
            Nejde o návod na vlastnú opravu — len o orientačné vysvetlenie, čo príznak obvykle znamená, aby
            ste vedeli, či ide o bežný jav alebo dôvod zavolať servis.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {issues.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-gray-50 p-6">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHead eyebrow="Časté otázky" title="Otázky o servise tepelného čerpadla" />
          <div className="mt-8">
            <FaqList items={faq} />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="text-xl font-bold text-ink">Servis tepelných čerpadiel v okolí Košíc</h2>
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
