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
  brand: string;
  model: string;
  category: string; // category slug
  kw: string;
  mount: string;
  color: string;
  priceFrom: number;
  note?: string;
};

// Reálne značky a modelové rady, ktoré firma montuje (Sinclair, Hyundai, Naitec — potvrdené
// klientom). Názvy a výkony overené z verejných katalógov výrobcov/predajcov.
// TODO(klient): "priceFrom" sú orientačné ŠTARTOVACIE ceny (zadané ako "akékoľvek začiatočné
// číslo") podľa bežnej trhovej úrovne pre danú triedu výkonu — nie sú to vaše skutočné
// nákupné/predajné ceny. Nahraď, prosím, reálnymi číslami hneď ako ich budeš mať.
export const products: Product[] = [
  {
    slug: "sinclair-ray-25",
    name: "Sinclair Ray 2,5 kW",
    brand: "Sinclair",
    model: "Ray",
    category: "nastenne-klimatizacie",
    kw: "2,5 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 650,
    note: "Základný rad pre menšie miestnosti, chladivo R32.",
  },
  {
    slug: "sinclair-marvin-35",
    name: "Sinclair Marvin 3,5 kW",
    brand: "Sinclair",
    model: "Marvin",
    category: "nastenne-klimatizacie",
    kw: "3,5 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 790,
    note: "Univerzálny rad, SCOP 4,60 — spĺňa podmienky zelených programov.",
  },
  {
    slug: "hyundai-revolution-26",
    name: "Hyundai Revolution 2,6 kW",
    brand: "Hyundai",
    model: "Revolution",
    category: "nastenne-klimatizacie",
    kw: "2,6 kW",
    mount: "Nástenná",
    color: "biela",
    priceFrom: 670,
    note: "Univerzálny vzhľad, chladenie aj kúrenie, chladivo R32.",
  },
  {
    slug: "naitec-new-smart-25",
    name: "Naitec New Smart 2,5 kW",
    brand: "Naitec",
    model: "New Smart",
    category: "bezprievanove-klimatizacie",
    kw: "2,5 kW",
    mount: "Bezprievanová nástenná",
    color: "biela",
    priceFrom: 600,
    note: "Rovnomerné rozptýlenie vzduchu, tichá prevádzka od 22 dB.",
  },
  {
    slug: "naitec-sensitive-pro-35",
    name: "Naitec Sensitive Pro 3,5 kW",
    brand: "Naitec",
    model: "Sensitive Pro",
    category: "bezprievanove-klimatizacie",
    kw: "3,5 kW",
    mount: "Bezprievanová nástenná",
    color: "sivá",
    priceFrom: 760,
    note: "Prémiový rad, dôraz na tichý a šetrný chod.",
  },
  {
    slug: "hyundai-elite-white-36",
    name: "Hyundai Elite White 3,6 kW",
    brand: "Hyundai",
    model: "Elite White",
    category: "dizajnove-klimatizacie",
    kw: "3,6 kW",
    mount: "Nástenná dizajnová",
    color: "biela",
    priceFrom: 820,
    note: "Funkcia Hyperheating pre nižšie vonkajšie teploty.",
  },
  {
    slug: "naitec-onyx-35",
    name: "Naitec Onyx 3,5 kW",
    brand: "Naitec",
    model: "Onyx",
    category: "dizajnove-klimatizacie",
    kw: "3,5 kW",
    mount: "Nástenná dizajnová",
    color: "čierna",
    priceFrom: 840,
    note: "Elegantný tmavý dizajn, vhodný do moderných interiérov.",
  },
  {
    slug: "hyundai-hpmo-6",
    name: "Hyundai HPMO monoblok 6 kW",
    brand: "Hyundai",
    model: "HPMO monoblok",
    category: "tepelne-cerpadla",
    kw: "6 kW",
    mount: "Tepelné čerpadlo vzduch-voda",
    color: "biela",
    priceFrom: 4200,
    note: "Jednofázové, chladivo R290, vykurovanie aj pri nízkych teplotách.",
  },
  {
    slug: "hyundai-hpmo-12",
    name: "Hyundai HPMO monoblok 12 kW",
    brand: "Hyundai",
    model: "HPMO monoblok",
    category: "tepelne-cerpadla",
    kw: "12 kW",
    mount: "Tepelné čerpadlo vzduch-voda",
    color: "biela",
    priceFrom: 6200,
    note: "Trojfázové, chladivo R32, pre väčšie rodinné domy.",
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
