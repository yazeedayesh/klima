export type ServiceFaq = { q: string; a: string };

export type ServiceEntry = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  description: string;
  intro: string;
  benefits: string[];
  faq: ServiceFaq[];
};

// Klimatizácie — URL: /klimatizacie/<slug>
export const servicesData: ServiceEntry[] = [
  {
    slug: "predaj",
    title: "Predaj klimatizácií",
    h1: "Predaj klimatizácií v Košiciach s montážou",
    metaTitle: "Predaj klimatizácií Košice – výber podľa miestnosti",
    description:
      "Predaj klimatizácií všetkých bežných značiek pre byty, domy aj prevádzky v Košiciach a okolí do 100 km. Poradíme s výkonom, cena vždy vrátane montáže.",
    intro:
      "Pracujeme so všetkými bežnými značkami klimatizácií. Jednotku vyberáme podľa veľkosti a orientácie miestnosti, spôsobu použitia a rozpočtu — a cenu dostanete vopred, vrátane montáže.",
    benefits: [
      "Poradenstvo pri výbere výkonu (kW) podľa veľkosti a orientácie miestnosti",
      "Odporúčanie vhodného typu jednotky — nástenná, bezprievanová alebo multisplit pre viac miestností",
      "Cenová ponuka vopred, vždy vrátane montáže",
      "Možnosť obhliadky priestoru pred záväzným rozhodnutím",
    ],
    faq: [
      {
        q: "Akú značku klimatizácie odporúčate?",
        a: "Nie sme viazaní na jednu značku. Odporúčame jednotku podľa miestnosti, požiadaviek na hlučnosť, kúrenie v zime a rozpočtu, s dobrou dostupnosťou servisu a náhradných dielov.",
      },
      {
        q: "Aký výkon klimatizácie potrebujem?",
        a: "Závisí od plochy, výšky stropu, orientácie okien a zateplenia. Presný výkon určíme pri telefonickej konzultácii alebo obhliadke, aby jednotka nebola poddimenzovaná ani zbytočne veľká.",
      },
    ],
  },
  {
    slug: "montaz",
    title: "Montáž klimatizácie",
    h1: "Montáž klimatizácie Košice a okolie",
    metaTitle: "Montáž klimatizácie Košice – split aj multisplit",
    description:
      "Odborná montáž klimatizácie v Košiciach a okolí do 100 km – split aj multisplit, byty, domy aj firmy. Elektroinštalácia, odvod kondenzátu, cena vopred.",
    intro:
      "Montujeme split aj multisplit klimatizácie do bytov, rodinných domov aj firemných priestorov — vrátane elektroinštalácie, vŕtania priechodov a odvodu kondenzátu, s jasnou cenou vopred.",
    benefits: [
      "Kompletná elektroinštalácia a prepojenie vnútornej a vonkajšej jednotky",
      "Vŕtanie priechodov a odvod kondenzátu bez zbytočných zásahov do interiéru",
      "Tlaková skúška, vákuovanie a uvedenie systému do prevádzky",
      "Odovzdanie s návodom na obsluhu a záruka na vykonanú montáž",
    ],
    faq: [
      {
        q: "Ako dlho trvá montáž klimatizácie?",
        a: "Bežná montáž nástennej split klimatizácie trvá spravidla 3 – 6 hodín, v závislosti od dĺžky potrubnej trasy a náročnosti prác.",
      },
      {
        q: "Potrebujem na klimatizáciu v paneláku súhlas?",
        a: "Pri bytových domoch býva potrebný súhlas správcu alebo spoločenstva vlastníkov s umiestnením vonkajšej jednotky na fasáde. Odporúčame ho vybaviť ešte pred montážou — poradíme, čo býva potrebné.",
      },
    ],
  },
  {
    slug: "servis",
    title: "Servis a čistenie klimatizácie",
    h1: "Servis a čistenie klimatizácie Košice",
    metaTitle: "Servis a čistenie klimatizácie Košice",
    description:
      "Servis, čistenie a dezinfekcia klimatizácií všetkých značiek v Košiciach a okolí – kontrola chladiva, oprava porúch, pravidelné prehliadky.",
    intro:
      "Čistíme, dezinfikujeme a servisujeme klimatizácie všetkých bežných značiek — aj tie, ktoré sme nemontovali. Pravidelná údržba predĺži životnosť jednotky a udrží nízku spotrebu.",
    benefits: [
      "Čistenie filtrov a výmenníka vnútornej aj vonkajšej jednotky",
      "Dezinfekcia proti plesniam a zápachu",
      "Kontrola tesnosti okruhu a prípadné doplnenie chladiva",
      "Kontrola elektrických spojov a odvodu kondenzátu, diagnostika porúch",
    ],
    faq: [
      {
        q: "Ako často čistiť klimatizáciu?",
        a: "Odporúčame aspoň raz ročne, ideálne pred letnou sezónou. Pri intenzívnom používaní, domácich zvieratách alebo v prašnom prostredí aj častejšie.",
      },
      {
        q: "Servisujete aj klimatizácie, ktoré ste nemontovali?",
        a: "Áno, servisujeme jednotky všetkých bežných značiek bez ohľadu na to, kto ich montoval.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
