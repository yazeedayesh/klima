export const site = {
  name: "Klimaro",
  tagline: "Klimatizácie Košice",
  url: "https://www.klimaro.sk",
  phone: "+421944267418",
  phoneDisplay: "+421 944 267 418",
  email: "info@klimaro.sk",
  whatsapp: "https://wa.me/421944267418",
  address: {
    locality: "Košice",
    country: "SK",
  },
  hours: "Pondelok – Piatok, 8:00 – 18:00",
  areaShort: "Košice a okolie do 50 km",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const mainNav: NavLink[] = [
  { href: "/produkty", label: "Produkty" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Cenník" },
  { href: "/oblasti", label: "Pôsobnosť" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export const footerNav = {
  quick: mainNav,
  services: [
    { href: "/sluzby/predaj-klimatizacii", label: "Predaj klimatizácií" },
    { href: "/sluzby/montaz-klimatizacie", label: "Montáž klimatizácie" },
    { href: "/sluzby/servis-a-udrzba", label: "Servis a údržba" },
    { href: "/sluzby/tepelne-cerpadla", label: "Tepelné čerpadlá" },
  ],
  legal: [
    { href: "/ochrana-osobnych-udajov", label: "Ochrana osobných údajov" },
    { href: `tel:${site.phone}`, label: "Kontaktovať nás" },
  ],
};
