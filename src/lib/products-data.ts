export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "nastenne-klimatizacie",
    name: "Nástenné klimatizácie",
    description: "Najobľúbenejšie riešenie pre byty a rodinné domy — tichý chod a jednoduchá montáž.",
  },
  {
    slug: "bezprievanove-klimatizacie",
    name: "Bezprievanové klimatizácie",
    description: "Rovnomerné rozptýlenie vzduchu bez priameho prievanu — vhodné do spální.",
  },
  {
    slug: "dizajnove-klimatizacie",
    name: "Dizajnové klimatizácie",
    description: "Jednotky s dôrazom na vzhľad, ktoré zapadnú do moderných interiérov.",
  },
  {
    slug: "tepelne-cerpadla",
    name: "Tepelné čerpadlá",
    description: "Úsporná alternatíva vykurovania vzduch-voda pre celoročný komfort.",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  kw: string;
  mount: string;
  color: string;
  priceFrom: number;
  note?: string;
};

export const products: Product[] = [
  {
    slug: "montex-comfort-25",
    name: "Montex Comfort 2,5 kW",
    category: "nastenne-klimatizacie",
    kw: "2,5 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 690,
  },
  {
    slug: "montex-comfort-35",
    name: "Montex Comfort 3,5 kW",
    category: "nastenne-klimatizacie",
    kw: "3,5 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 760,
  },
  {
    slug: "montex-comfort-50",
    name: "Montex Comfort 5,0 kW",
    category: "nastenne-klimatizacie",
    kw: "5,0 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 890,
  },
  {
    slug: "montex-silent-25",
    name: "Montex Silent 2,5 kW",
    category: "bezprievanove-klimatizacie",
    kw: "2,5 kW",
    mount: "Bezprievanová nástenná",
    color: "biela",
    priceFrom: 820,
  },
  {
    slug: "montex-silent-35",
    name: "Montex Silent 3,5 kW",
    category: "bezprievanove-klimatizacie",
    kw: "3,5 kW",
    mount: "Bezprievanová nástenná",
    color: "sivá",
    priceFrom: 890,
  },
  {
    slug: "montex-studio-25",
    name: "Montex Studio 2,5 kW",
    category: "dizajnove-klimatizacie",
    kw: "2,5 kW",
    mount: "Nástenná dizajnová",
    color: "čierna",
    priceFrom: 950,
  },
  {
    slug: "montex-studio-35",
    name: "Montex Studio 3,5 kW",
    category: "dizajnove-klimatizacie",
    kw: "3,5 kW",
    mount: "Nástenná dizajnová",
    color: "čierna / zlatá",
    priceFrom: 1050,
  },
  {
    slug: "montex-heatpump-6",
    name: "Montex ThermoAir 6 kW",
    category: "tepelne-cerpadla",
    kw: "6 kW",
    mount: "Tepelné čerpadlo vzduch-voda",
    color: "biela",
    priceFrom: 4200,
  },
  {
    slug: "montex-heatpump-9",
    name: "Montex ThermoAir 9 kW",
    category: "tepelne-cerpadla",
    kw: "9 kW",
    mount: "Tepelné čerpadlo vzduch-voda",
    color: "biela",
    priceFrom: 5400,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}
