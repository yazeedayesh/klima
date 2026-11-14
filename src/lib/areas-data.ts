export type Area = {
  slug: string;
  name: string;
  distanceKm: number;
  /** smer od Košíc v stupňoch (0 = sever, 90 = východ) — pre mapu pôsobnosti */
  bearing: number;
  intro: string;
  note: string;
};

// Mestá v okruhu ~100 km od Košíc. Nové mesto pridávať až keď v ňom máme reálne zákazky
// a vlastný text (žiadne kópie s vymeneným názvom mesta).
export const areas: Area[] = [
  {
    slug: "kosice",
    name: "Košice",
    distanceKm: 0,
    bearing: 0,
    intro:
      "Košice sú naším domovským pôsobiskom — väčšinu montáží realizujeme priamo v meste a jeho mestských častiach, spravidla do niekoľkých dní od obhliadky.",
    note: "Najkratšia reakčná doba a najväčšia dostupnosť termínov práve tu.",
  },
  {
    slug: "presov",
    name: "Prešov",
    distanceKm: 36,
    bearing: 357,
    intro:
      "Prešov je od Košíc vzdialený približne 36 km, takže montáže aj servis tu realizujeme bežne v rámci jedného pracovného dňa.",
    note: "Pravidelne jazdíme aj do okolitých obcí v okrese Prešov.",
  },
  {
    slug: "moldava-nad-bodvou",
    name: "Moldava nad Bodvou",
    distanceKm: 24,
    bearing: 238,
    intro:
      "Moldava nad Bodvou patrí medzi lokality, kam chodíme najčastejšie — krátka vzdialenosť umožňuje rýchlu obhliadku aj montáž v krátkom termíne.",
    note: "Bežná súčasť našej trasy smerom na juhozápad od Košíc.",
  },
  {
    slug: "secovce",
    name: "Sečovce",
    distanceKm: 45,
    bearing: 94,
    intro:
      "Sečovce sú bežnou súčasťou našich trás na východ od Košíc — montáž aj servis tu realizujeme za rovnakých podmienok ako v meste.",
    note: "Kombinujeme s okolitými obcami, aby bola cesta efektívna pre obe strany.",
  },
  {
    slug: "trebisov",
    name: "Trebišov",
    distanceKm: 50,
    bearing: 106,
    intro:
      "Trebišov leží približne 50 km od Košíc — montáže aj servis tu plánujeme pravidelne.",
    note: "Pokrývame aj okolité obce smerom na Sečovce a Kráľovský Chlmec.",
  },
  {
    slug: "roznava",
    name: "Rožňava",
    distanceKm: 60,
    bearing: 263,
    intro:
      "Rožňava je v našom okruhu do 100 km — montáž klimatizácie aj tepelného čerpadla tu vieme naplánovať po dohode termínu.",
    note: "Termín odporúčame dohodnúť vopred kvôli naplánovaniu trasy.",
  },
  {
    slug: "michalovce",
    name: "Michalovce",
    distanceKm: 62,
    bearing: 86,
    intro:
      "Michalovce sú v našom okruhu do 100 km a do regiónu jazdíme pravidelne — montáž aj servis tu vieme zabezpečiť po dohode termínu.",
    note: "Termín odporúčame dohodnúť o niečo skôr kvôli plánovaniu trasy.",
  },
];

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug);
}
