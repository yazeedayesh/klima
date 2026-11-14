export type Area = {
  slug: string;
  name: string;
  distanceKm: number;
  /** smer od Košíc v stupňoch (0 = sever, 90 = východ) — pre mapu pôsobnosti (len core oblasti) */
  bearing: number;
  intro: string;
  note: string;
  /** core = okruh do 100 km, bežné rýchle termíny. false = zvyšok Slovenska, len po dohode. */
  core: boolean;
};

// core: true — mestá v okruhu ~100 km od Košíc, bežné rýchle termíny.
// core: false — krajské mestá zvyšku Slovenska, dostupné po dohode (väčšie zákazky, vopred
// naplánovaná cesta). Nové mesto pridávať až keď v ňom máme reálne zákazky a vlastný text
// (žiadne kópie s vymeneným názvom mesta).
export const areas: Area[] = [
  {
    slug: "kosice",
    name: "Košice",
    distanceKm: 0,
    bearing: 0,
    intro:
      "Košice sú naším domovským pôsobiskom — väčšinu montáží realizujeme priamo v meste a jeho mestských častiach, spravidla do niekoľkých dní od obhliadky.",
    note: "Najkratšia reakčná doba a najväčšia dostupnosť termínov práve tu.",
    core: true,
  },
  {
    slug: "presov",
    name: "Prešov",
    distanceKm: 36,
    bearing: 357,
    intro:
      "Prešov je od Košíc vzdialený približne 36 km, takže montáže aj servis tu realizujeme bežne v rámci jedného pracovného dňa.",
    note: "Pravidelne jazdíme aj do okolitých obcí v okrese Prešov.",
    core: true,
  },
  {
    slug: "moldava-nad-bodvou",
    name: "Moldava nad Bodvou",
    distanceKm: 24,
    bearing: 238,
    intro:
      "Moldava nad Bodvou patrí medzi lokality, kam chodíme najčastejšie — krátka vzdialenosť umožňuje rýchlu obhliadku aj montáž v krátkom termíne.",
    note: "Bežná súčasť našej trasy smerom na juhozápad od Košíc.",
    core: true,
  },
  {
    slug: "secovce",
    name: "Sečovce",
    distanceKm: 45,
    bearing: 94,
    intro:
      "Sečovce sú bežnou súčasťou našich trás na východ od Košíc — montáž aj servis tu realizujeme za rovnakých podmienok ako v meste.",
    note: "Kombinujeme s okolitými obcami, aby bola cesta efektívna pre obe strany.",
    core: true,
  },
  {
    slug: "trebisov",
    name: "Trebišov",
    distanceKm: 50,
    bearing: 106,
    intro:
      "Trebišov leží približne 50 km od Košíc — montáže aj servis tu plánujeme pravidelne.",
    note: "Pokrývame aj okolité obce smerom na Sečovce a Kráľovský Chlmec.",
    core: true,
  },
  {
    slug: "roznava",
    name: "Rožňava",
    distanceKm: 60,
    bearing: 263,
    intro:
      "Rožňava je v našom okruhu do 100 km — montáž klimatizácie aj tepelného čerpadla tu vieme naplánovať po dohode termínu.",
    note: "Termín odporúčame dohodnúť vopred kvôli naplánovaniu trasy.",
    core: true,
  },
  {
    slug: "michalovce",
    name: "Michalovce",
    distanceKm: 62,
    bearing: 86,
    intro:
      "Michalovce sú v našom okruhu do 100 km a do regiónu jazdíme pravidelne — montáž aj servis tu vieme zabezpečiť po dohode termínu.",
    note: "Termín odporúčame dohodnúť o niečo skôr kvôli plánovaniu trasy.",
    core: true,
  },
  {
    slug: "bratislava",
    name: "Bratislava",
    distanceKm: 400,
    bearing: 0,
    intro:
      "Bratislava je od Košíc vzdialená približne 400 km. Montáž aj servis tu realizujeme po dohode termínu, zvyčajne pri väčších zákazkách alebo keď je cestu možné skombinovať s inou prácou v okolí.",
    note: "Termín plánujeme vopred — obhliadku aj montáž vieme spojiť do jednej cesty.",
    core: false,
  },
  {
    slug: "trnava",
    name: "Trnava",
    distanceKm: 360,
    bearing: 0,
    intro:
      "Trnava leží približne 360 km od Košíc. Klimatizácie aj tepelné čerpadlá tu montujeme po dohode — termín si naplánujeme spolu s ostatnými zákazkami v regióne.",
    note: "Vhodné najmä pre väčšie projekty, kde sa dlhšia cesta oplatí naplánovať vopred.",
    core: false,
  },
  {
    slug: "trencin",
    name: "Trenčín",
    distanceKm: 300,
    bearing: 0,
    intro:
      "Trenčín je vzdialený približne 300 km od Košíc. Montáž a servis klimatizácií aj tepelných čerpadiel tu zabezpečíme po dohodnutí termínu.",
    note: "Cenovú ponuku pripravíme na základe fotiek a telefonickej konzultácie vopred.",
    core: false,
  },
  {
    slug: "nitra",
    name: "Nitra",
    distanceKm: 280,
    bearing: 0,
    intro:
      "Nitra je od Košíc vzdialená približne 280 km. Pôsobíme tu po dohode termínu — montáž klimatizácie aj tepelného čerpadla naplánujeme ako jednu ucelenú cestu.",
    note: "Pri viacerých zákazkách v okolí vieme ponúknuť výhodnejší termín.",
    core: false,
  },
  {
    slug: "zilina",
    name: "Žilina",
    distanceKm: 220,
    bearing: 0,
    intro:
      "Žilina leží približne 220 km od Košíc. Montáž aj servis tu vieme zabezpečiť po dohodnutí termínu, obvykle s miernym predstihom kvôli naplánovaniu trasy.",
    note: "Pôsobíme aj v priľahlých okresoch Žilinského kraja.",
    core: false,
  },
  {
    slug: "banska-bystrica",
    name: "Banská Bystrica",
    distanceKm: 180,
    bearing: 0,
    intro:
      "Banská Bystrica je od Košíc vzdialená približne 180 km. Klimatizácie aj tepelné čerpadlá tu montujeme po dohode termínu — bežne v rámci jednej naplánovanej cesty.",
    note: "Dostupní aj pre okolité obce stredného Slovenska.",
    core: false,
  },
];

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug);
}
