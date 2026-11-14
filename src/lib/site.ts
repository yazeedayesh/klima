export const site = {
  name: "Klimaro",
  tagline: "Klimatizácie a tepelné čerpadlá Košice",
  url: "https://www.klimaro.sk",
  phone: "+421944267418",
  phoneDisplay: "+421 944 267 418",
  email: "info@klimaro.sk",
  whatsapp: "https://wa.me/421944267418",
  address: {
    locality: "Košice",
    region: "Košický kraj",
    country: "SK",
  },
  hours: "Pondelok – Piatok, 8:00 – 18:00",
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
  areaShort: "Košice a okolie do 100 km",
  radiusKm: 100,
  // TODO(klient): potvrdiť skutočný počet rokov — klient uviedol 10.
  yearsExperience: 10,
  // TODO(klient): potvrdiť skutočnú dobu odpovede na dopyt.
  responseTime: "do 24 hodín",
  // TODO(klient): prepnúť na true až keď je firma zapísaná v zozname zhotoviteľov SIEA (Zelená domácnostiam).
  sieaRegistered: false,
  // TODO(klient): doplniť odkazy na Facebook, Instagram a Google Business Profile.
  sameAs: [] as string[],
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const acServicesNav: NavLink[] = [
  { href: "/klimatizacie/predaj", label: "Predaj klimatizácií" },
  { href: "/klimatizacie/montaz", label: "Montáž klimatizácie" },
  { href: "/klimatizacie/servis", label: "Servis a čistenie" },
];

export const heatPumpNav: NavLink[] = [
  { href: "/tepelne-cerpadla", label: "Tepelné čerpadlá vzduch-voda" },
  { href: "/tepelne-cerpadla/dotacia", label: "Dotácia Zelená domácnostiam" },
];

export const mainNav: NavLink[] = [
  { href: "/klimatizacie", label: "Klimatizácie" },
  { href: "/tepelne-cerpadla", label: "Tepelné čerpadlá" },
  { href: "/cennik", label: "Cenník" },
  { href: "/oblasti", label: "Pôsobnosť" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export const footerNav = {
  quick: mainNav,
  services: [...acServicesNav, ...heatPumpNav],
  legal: [
    { href: "/ochrana-osobnych-udajov", label: "Ochrana osobných údajov" },
    { href: `tel:${site.phone}`, label: "Kontaktovať nás" },
  ],
};
