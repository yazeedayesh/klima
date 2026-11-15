export type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  benefits: string[];
  categorySlug?: string;
};

export const servicesData: ServiceEntry[] = [
  {
    slug: "predaj-klimatizacii",
    title: "Predaj klimatizácií",
    description:
      "Predaj klimatizačných jednotiek overených značiek pre byty, domy aj prevádzky v Košiciach a okolí – s poradenstvom pri výbere výkonu.",
    intro:
      "Ponúkame klimatizačné jednotky overených značiek pre byty, domy aj prevádzky — s poradenstvom pri výbere správneho výkonu podľa veľkosti priestoru.",
    benefits: [
      "Poradenstvo pri výbere výkonu (kW) podľa veľkosti a orientácie miestnosti",
      "Odporúčanie vhodného typu jednotky — nástenná, bezprievanová alebo dizajnová",
      "Cenová ponuka vopred, vždy vrátane montáže",
      "Možnosť obhliadky priestoru pred záväzným rozhodnutím",
    ],
    categorySlug: "nastenne-klimatizacie",
  },
  {
    slug: "montaz-klimatizacie",
    title: "Montáž klimatizácie",
    description:
      "Odborná montáž klimatizácie certifikovaným technikom v Košiciach a okolí do 50 km – elektroinštalácia, vŕtanie, odvod kondenzátu.",
    intro:
      "Odborná inštalácia certifikovaným technikom vrátane elektroinštalácie, vŕtania a odvodu kondenzátu, s jasnou cenou vopred.",
    benefits: [
      "Kompletná elektroinštalácia a prepojenie vnútornej a vonkajšej jednotky",
      "Vŕtanie priechodov a odvod kondenzátu bez zbytočných zásahov do interiéru",
      "Tlaková skúška, vákuovanie a spustenie systému podľa predpisov F-gas",
      "Odovzdanie s návodom na obsluhu a záruka na vykonanú montáž",
    ],
  },
  {
    slug: "servis-a-udrzba",
    title: "Servis a údržba",
    description:
      "Servis a pravidelná údržba klimatizácií – čistenie, kontrola chladiva a servisné prehliadky v Košiciach a okolí.",
    intro:
      "Pravidelné čistenie, kontrola chladiva a servisné prehliadky, ktoré predĺžia životnosť vášho zariadenia.",
    benefits: [
      "Čistenie filtrov a výmenníka vnútornej aj vonkajšej jednotky",
      "Kontrola tesnosti okruhu a prípadné doplnenie chladiva",
      "Kontrola elektrických spojov a odvodu kondenzátu",
      "Odporúčaný interval: raz ročne, ideálne pred letnou sezónou",
    ],
  },
  {
    slug: "tepelne-cerpadla",
    title: "Tepelné čerpadlá",
    description:
      "Inštalácia tepelných čerpadiel vzduch-voda ako úsporná alternatíva vykurovania domu v Košiciach a okolí.",
    intro:
      "Inštalácia tepelných čerpadiel vzduch-voda ako úsporná alternatíva vykurovania pre váš domov.",
    benefits: [
      "Návrh výkonu tepelného čerpadla podľa tepelnej straty domu",
      "Inštalácia systému vzduch-voda vrátane prepojenia s vykurovaním",
      "Nižšie prevádzkové náklady oproti elektrickému alebo plynovému vykurovaniu",
      "Možnosť kombinácie s podlahovým kúrením aj radiátormi",
    ],
    categorySlug: "tepelne-cerpadla",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
