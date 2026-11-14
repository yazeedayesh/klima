@AGENTS.md

# Klimaro — pravidlá projektu

Web pre firmu Klimaro (Košice): predaj, montáž a servis klimatizácií a tepelných čerpadiel.
Cieľ webu: telefonáty a dopyty z Košíc a okolia do 100 km. Jazyk obsahu: slovenčina.
Úlohy, ktoré ešte treba urobiť, sú v `docs/TODO.md` — pracuj podľa nich, zhora nadol.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, bez UI knižníc.
- Písmo Archivo Variable je lokálne cez `@fontsource-variable/archivo`. Nepoužívaj `next/font/google` ani iné externé fonty.
- Všetky stránky sú statické (SSG). Nasadenie: Vercel.

## Kde čo je

- `src/lib/site.ts` — názov, telefón, hodiny, okruh, navigácia. Jediný zdroj týchto údajov.
- `src/lib/services-data.ts` — služby klimatizácií (`/klimatizacie/<slug>`).
- `src/lib/areas-data.ts` — mestá (`/oblasti/<slug>`), vzdialenosť a smer od Košíc.
- `src/lib/pricing-data.ts` — ceny. Kým je prázdne, `/cennik` je noindex a nie je v sitemap.
- `src/app/globals.css` — dizajnové tokeny. Farby a písmo meň len tu.
- `src/components/home/area-map.tsx` — mapa pôsobnosti.
- `src/components/cookie-consent.tsx`, `src/lib/analytics.ts` — GA4 + Consent Mode v2 (zapne sa cez `NEXT_PUBLIC_GA_ID`).

## Pravidlá, ktoré sa nesmú porušiť

1. **Žiadny vymyslený obsah.** Žiadne vymyslené čísla, recenzie, certifikáty, ceny, produkty ani mená.
   Ak údaj chýba, nechaj `TODO(klient)` a stránku/sekciu radšej skry, než by si ju vyplnil odhadom.
2. **Dotácie:** web nesmie tvrdiť, že Klimaro je oprávnený zhotoviteľ SIEA, kým `site.sieaRegistered` nie je `true`.
   Sumy príspevkov neuvádzaj; odkazuj na zelenadomacnostiam.sk.
3. **URL sa nemenia.** Štruktúra: `/klimatizacie`, `/klimatizacie/{predaj,montaz,servis}`, `/tepelne-cerpadla`,
   `/tepelne-cerpadla/dotacia`, `/cennik`, `/oblasti/<mesto>`, `/o-nas`, `/kontakt`. Ak URL predsa zmeníš,
   pridaj 301 do `next.config.ts`.
4. **Každá stránka má:** jedinečný `title` (~60 znakov) a `description` (~155), `alternates.canonical`,
   práve jedno `<h1>`, `Breadcrumbs` (okrem domova). Nová indexovateľná stránka ide aj do `src/app/sitemap.ts`.
5. **Jedna stránka = jedna skupina kľúčových slov.** Nevytváraj druhú stránku na tému, ktorú už iná pokrýva.
6. **Stránky miest:** nové mesto len s vlastným textom (dojazd, realizácie, miestne detaily). Žiadne kópie
   s vymeneným názvom mesta.
7. **Schema:** `HVACBusiness` je v `layout.tsx` s `@id` `${site.url}/#business`; služby naň odkazujú cez `provider`.
   Nepridávaj `Review`/`AggregateRating` o vlastnej firme.
8. **Dizajn:** pokojný a svetlý. Tmavomodrý text, teplé svetlé plochy, oranžový akcent len pre hlavnú akciu.
   Žiadne ilustrované widgety, emoji, gradientové dekorácie ani animácie pri scrollovaní. Fotky len skutočné
   (od klienta) — žiadne stock ani AI obrázky.
9. **Texty:** slovenčina, vecne, bez superlatívov („najlepší“, „najlacnejší“, „profesionálny“).
   Tlačidlo hovorí, čo sa stane („Vypýtať si cenovú ponuku“).
10. Tajné kľúče len v `.env.local`, nikdy v kóde ani v commite.

## Pred každým commitom

```bash
npx eslint src && npx tsc --noEmit && npm run build
```

Všetky tri musia prejsť. Po zmene vzhľadu skontroluj stránku na šírke 390 px aj 1440 px.
