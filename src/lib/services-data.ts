export type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  intro: string;
};

export const servicesData: ServiceEntry[] = [
  {
    slug: "predaj-klimatizacii",
    title: "Predaj klimatizácií",
    description:
      "Predaj klimatizačných jednotiek overených značiek pre byty, domy aj prevádzky v Košiciach a okolí – s poradenstvom pri výbere výkonu.",
    intro:
      "Ponúkame klimatizačné jednotky overených značiek pre byty, domy aj prevádzky — s poradenstvom pri výbere správneho výkonu podľa veľkosti priestoru.",
  },
  {
    slug: "montaz-klimatizacie",
    title: "Montáž klimatizácie",
    description:
      "Odborná montáž klimatizácie certifikovaným technikom v Košiciach a okolí do 50 km – elektroinštalácia, vŕtanie, odvod kondenzátu.",
    intro:
      "Odborná inštalácia certifikovaným technikom vrátane elektroinštalácie, vŕtania a odvodu kondenzátu, s jasnou cenou vopred.",
  },
  {
    slug: "servis-a-udrzba",
    title: "Servis a údržba",
    description:
      "Servis a pravidelná údržba klimatizácií – čistenie, kontrola chladiva a servisné prehliadky v Košiciach a okolí.",
    intro:
      "Pravidelné čistenie, kontrola chladiva a servisné prehliadky, ktoré predĺžia životnosť vášho zariadenia.",
  },
  {
    slug: "tepelne-cerpadla",
    title: "Tepelné čerpadlá",
    description:
      "Inštalácia tepelných čerpadiel vzduch-voda ako úsporná alternatíva vykurovania domu v Košiciach a okolí.",
    intro:
      "Inštalácia tepelných čerpadiel vzduch-voda ako úsporná alternatíva vykurovania pre váš domov.",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
