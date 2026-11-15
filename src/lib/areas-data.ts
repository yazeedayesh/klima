export type Area = {
  slug: string;
  name: string;
  distanceKm: number;
  intro: string;
  note: string;
};

export const areas: Area[] = [
  {
    slug: "kosice",
    name: "Košice",
    distanceKm: 0,
    intro:
      "Košice sú naším domovským pôsobiskom — väčšinu montáží realizujeme priamo v meste a jeho mestských častiach, spravidla do niekoľkých dní od obhliadky.",
    note: "Najkratšia reakčná doba a najväčšia dostupnosť termínov práve tu.",
  },
  {
    slug: "presov",
    name: "Prešov",
    distanceKm: 36,
    intro:
      "Prešov je od Košíc vzdialený približne 36 km, takže montáže aj servis tu realizujeme bežne v rámci jedného pracovného dňa.",
    note: "Pravidelne jazdíme aj do okolitých obcí v okrese Prešov.",
  },
  {
    slug: "michalovce",
    name: "Michalovce",
    distanceKm: 62,
    intro:
      "Michalovce ležia mierne mimo nášho bežného okruhu 50 km, no vďaka pravidelným zákazkám v regióne sem radi pricestujeme aj na menšie realizácie.",
    note: "Termín odporúčame dohodnúť o niečo skôr kvôli plánovaniu trasy.",
  },
  {
    slug: "trebisov",
    name: "Trebišov",
    distanceKm: 50,
    intro:
      "Trebišov je na hranici nášho štandardného okruhu — montáže aj servis tu vieme naplánovať bez príplatku za dopravu.",
    note: "Pokrývame aj okolité obce smerom na Sečovce a Kráľovský Chlmec.",
  },
  {
    slug: "moldava-nad-bodvou",
    name: "Moldava nad Bodvou",
    distanceKm: 24,
    intro:
      "Moldava nad Bodvou patrí medzi lokality, kam chodíme najčastejšie — vzdialenosť do 25 km umožňuje rýchlu obhliadku aj montáž v krátkom termíne.",
    note: "Bežná súčasť našej trasy smerom na juhozápad od Košíc.",
  },
  {
    slug: "secovce",
    name: "Sečovce",
    distanceKm: 45,
    intro:
      "Sečovce spadajú do nášho bežného okruhu do 50 km — montáž aj servis tu realizujeme za rovnakých podmienok ako v Košiciach.",
    note: "Kombinujeme s okolitými obcami, aby bola cesta efektívna pre obe strany.",
  },
  {
    slug: "roznava",
    name: "Rožňava",
    distanceKm: 60,
    intro:
      "Rožňava je mierne za hranicou nášho štandardného okruhu, no pri väčších zákazkách alebo viacerých jednotkách naraz sem pricestujeme bez problémov.",
    note: "Odporúčame kontaktovať nás vopred kvôli naplánovaniu termínu.",
  },
];

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug);
}
