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
    slug: "klimaro-comfort-25",
    name: "Klimaro Comfort 2,5 kW",
    category: "nastenne-klimatizacie",
    kw: "2,5 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 690,
  },
  {
    slug: "klimaro-comfort-35",
    name: "Klimaro Comfort 3,5 kW",
    category: "nastenne-klimatizacie",
    kw: "3,5 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 760,
  },
  {
    slug: "klimaro-comfort-50",
    name: "Klimaro Comfort 5,0 kW",
    category: "nastenne-klimatizacie",
    kw: "5,0 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 890,
  },
  {
    slug: "klimaro-silent-25",
    name: "Klimaro Silent 2,5 kW",
    category: "bezprievanove-klimatizacie",
    kw: "2,5 kW",
    mount: "Bezprievanová nástenná",
    color: "biela",
    priceFrom: 820,
  },
  {
    slug: "klimaro-silent-35",
    name: "Klimaro Silent 3,5 kW",
    category: "bezprievanove-klimatizacie",
    kw: "3,5 kW",
    mount: "Bezprievanová nástenná",
    color: "sivá",
    priceFrom: 890,
  },
  {
    slug: "klimaro-studio-25",
    name: "Klimaro Studio 2,5 kW",
    category: "dizajnove-klimatizacie",
    kw: "2,5 kW",
    mount: "Nástenná dizajnová",
    color: "čierna",
    priceFrom: 950,
  },
  {
    slug: "klimaro-studio-35",
    name: "Klimaro Studio 3,5 kW",
    category: "dizajnove-klimatizacie",
    kw: "3,5 kW",
    mount: "Nástenná dizajnová",
    color: "čierna / zlatá",
    priceFrom: 1050,
  },
  {
    slug: "klimaro-heatpump-6",
    name: "Klimaro ThermoAir 6 kW",
    category: "tepelne-cerpadla",
    kw: "6 kW",
    mount: "Tepelné čerpadlo vzduch-voda",
    color: "biela",
    priceFrom: 4200,
  },
  {
    slug: "klimaro-heatpump-9",
    name: "Klimaro ThermoAir 9 kW",
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

export function getCategoryPriceRange(slug: string) {
  const prices = getProductsByCategory(slug).map((p) => p.priceFrom);
  if (prices.length === 0) return null;
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
