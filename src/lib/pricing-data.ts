export type PriceItem = {
  group: "Klimatizácie" | "Tepelné čerpadlá" | "Servis";
  title: string;
  note: string;
  priceFrom: number; // EUR s DPH
};

// TODO(klient): doplniť SKUTOČNÉ orientačné ceny. Kým je zoznam prázdny,
// stránka /cennik sa nezobrazuje vo vyhľadávačoch (noindex) a nie je v sitemap.
export const priceItems: PriceItem[] = [];

export const hasPrices = priceItems.length > 0;
