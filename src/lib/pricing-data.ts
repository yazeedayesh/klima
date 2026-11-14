export type PriceItem = {
  group: "Klimatizácie" | "Tepelné čerpadlá" | "Servis";
  title: string;
  note: string;
  // TODO(klient): priceFrom chýba pri položkách nižšie — potvrď skutočnú cenu s montážou
  // pre každý model a dopíš ju sem. Kým ju položka nemá, karta zobrazuje "Cena na vyžiadanie".
  priceFrom?: number; // EUR s DPH
  brand?: string;
  model?: string;
  kw?: number; // chladiaci/vykurovací výkon v kW
};

// Reálne modelové rady značiek, ktoré firma montuje (Sinclair, Hyundai, Naitec — potvrdené
// klientom 2026-11-15). Názvy radov a výkony sú overené z verejných katalógov výrobcov/predajcov,
// NIE vymyslené.
// TODO(klient): ceny nižšie sú ORIENTAČNÉ ŠTARTOVACIE ODHADY (klient povedal "daj akékoľvek
// začiatočné číslo") podľa bežných trhových cien pre danú triedu výkonu — NIE sú to vaše skutočné
// nákupné/predajné ceny. Nahraď ich, prosím, reálnymi číslami hneď ako ich budeš mať.
export const priceItems: PriceItem[] = [
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Sinclair",
    model: "Ray",
    kw: 2.5,
    note: "Základný rad pre menšie miestnosti, R32.",
    priceFrom: 650,
  },
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Sinclair",
    model: "Marvin",
    kw: 3.5,
    note: "Univerzálny rad, SCOP 4,60 — spĺňa podmienky zelených programov.",
    priceFrom: 790,
  },
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Sinclair",
    model: "Terrel Plus",
    kw: 5.0,
    note: "Tichý chod od 18 dB(A), vyšší výkon pre väčšie priestory.",
    priceFrom: 980,
  },
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Hyundai",
    model: "Revolution",
    kw: 2.6,
    note: "Univerzálny vzhľad, chladenie aj kúrenie, R32.",
    priceFrom: 670,
  },
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Hyundai",
    model: "Elite White",
    kw: 3.6,
    note: "S funkciou Hyperheating pre nižšie vonkajšie teploty.",
    priceFrom: 820,
  },
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Naitec",
    model: "New Smart",
    kw: 2.5,
    note: "Tichá prevádzka od 22 dB, úsporná trieda.",
    priceFrom: 600,
  },
  {
    group: "Klimatizácie",
    title: "Nástenná klimatizácia",
    brand: "Naitec",
    model: "Sensitive Pro",
    kw: 3.5,
    note: "Prémiový rad, dôraz na tichý a šetrný chod.",
    priceFrom: 760,
  },
  {
    group: "Tepelné čerpadlá",
    title: "Tepelné čerpadlo vzduch-voda",
    brand: "Hyundai",
    model: "HPMO monoblok",
    kw: 6,
    note: "Jednofázové, R290, vykurovanie aj pri nízkych teplotách.",
    priceFrom: 4200,
  },
  {
    group: "Tepelné čerpadlá",
    title: "Tepelné čerpadlo vzduch-voda",
    brand: "Hyundai",
    model: "HPMO monoblok",
    kw: 12,
    note: "Trojfázové, R32, pre väčšie rodinné domy.",
    priceFrom: 6200,
  },
  {
    group: "Tepelné čerpadlá",
    title: "Tepelné čerpadlo vzduch-voda",
    brand: "Hyundai",
    model: "Extreme HPMO monoblok",
    kw: 14,
    note: "Vykurovanie aj pri extrémnych mrazoch, R290.",
    priceFrom: 7400,
  },
];

export const hasPrices = priceItems.length > 0;
