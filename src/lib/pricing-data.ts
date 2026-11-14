export type PriceItem = {
  group: "Klimatizácie" | "Tepelné čerpadlá" | "Servis";
  title: string;
  note: string;
  priceFrom: number; // EUR s DPH
  brand?: string; // napr. "Daikin", "Mitsubishi Electric"
  model?: string; // napr. "Sensira PKEA35"
  kw?: number; // chladiaci/vykurovací výkon v kW
};

// TODO(klient): doplniť SKUTOČNÉ orientačné ceny a modely. Kým je zoznam prázdny,
// stránka /cennik sa nezobrazuje vo vyhľadávačoch (noindex) a nie je v sitemap.
//
// Formát jednej položky (brand/model/kw sú nepovinné — nechaj ich preč, ak sa nehodia,
// napr. pri servisných úkonoch):
// {
//   group: "Klimatizácie",
//   title: "Nástenná klimatizácia 2,5 kW",
//   brand: "Daikin",
//   model: "Sensira PKEA35",
//   kw: 2.5,
//   note: "Vrátane štandardnej montáže do 3 m potrubia",
//   priceFrom: 890,
// },
export const priceItems: PriceItem[] = [];

export const hasPrices = priceItems.length > 0;
