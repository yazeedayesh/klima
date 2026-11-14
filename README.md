# Klimaro — klimatizácie a tepelné čerpadlá Košice

Next.js web pre Klimaro (montáž, predaj a servis klimatizácií a tepelných čerpadiel v Košiciach a okolí do 100 km).

## Vývoj

```bash
npm install
npm run dev
```

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Obsah: `src/lib/site.ts`, `services-data.ts`, `areas-data.ts`, `pricing-data.ts`
- Nasadenie: Vercel

## Dizajn

- Pokojný, svetlý vzhľad: fotka v hero (`public/hero.webp` — nahradiť vlastnou fotkou realizácie), tmavomodrý text, jeden akcent (oranžová) len pre hlavnú akciu.
- Písmo Archivo Variable je hostované lokálne (bez Google Fonts — rýchlejšie a v súlade s GDPR).
- Mapa pôsobnosti: `src/components/home/area-map.tsx` (mestá podľa skutočnej vzdialenosti a smeru).

## Meranie

- `NEXT_PUBLIC_GA_ID` zapne GA4 s Consent Mode v2 a cookie lištou (`.env.example`).
- Udalosti: `klik_telefon`, `klik_whatsapp`, `odoslanie_dopytu` — v GA4 ich označiť ako kľúčové udalosti.

## Pred spustením doplniť (TODO v kóde)

- `site.ts`: `yearsExperience`, `responseTime`, `sieaRegistered`, `sameAs`
- `pricing-data.ts`: skutočné orientačné ceny (dovtedy je /cennik noindex)
- Skutočné fotky realizácií (public/hero.webp a ďalšie)
