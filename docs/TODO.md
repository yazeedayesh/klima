# Klimaro — čo ešte treba urobiť

Hotové: štruktúra URL a 301, schema, sitemap/robots, dizajn, hero, mapa pôsobnosti, 404,
cookie lišta + GA4 (Consent Mode v2), meranie klikov, formulár cez WhatsApp/e-mail.

## A. Dá sa urobiť hneď (bez klienta)

- [x] **Formulár cez server.** Route handler `POST /api/dopyt`, odoslanie e-mailu cez Resend
      (`RESEND_API_KEY`, `DOPYT_TO` v `.env.local`), validácia, honeypot proti spamu, stav „odoslané“
      a chybový stav vo formulári. WhatsApp tlačidlo nechaj ako druhú možnosť. Po úspechu volaj
      `track("odoslanie_dopytu")`. Pozor: režim GitHub Pages (`output: "export"`) route handlery
      nepodporuje — ak sa už nepoužíva, odstráň ho z `next.config.ts` a `scripts/`.
- [x] **OG obrázok.** `src/app/opengraph-image.tsx` zosúladiť s novým vzhľadom (názov, „Klimatizácie a
      tepelné čerpadlá Košice“, telefón).
- [x] **Vnútorné stránky.** Prejsť `/klimatizacie/*`, `/tepelne-cerpadla/*`, `/oblasti/*`, `/o-nas`,
      `/cennik`, `/kontakt` a zjednotiť ich s domovskou stránkou (rozostupy, nadpisy, zoznamy s linkami
      namiesto kariet). Obsah a URL nemeniť.
- [x] **Nové stránky podľa plánu:** `/klimatizacie/multisplit`, `/klimatizacie/pre-firmy`,
      `/tepelne-cerpadla/servis`. Každá 600+ slov vecného textu, FAQ, `Service` schema, odkazy na mestá.
- [ ] **Ďalšie mestá** v `areas-data.ts` (len tie, ktoré klient potvrdí): Spišská Nová Ves, Humenné,
      Vranov nad Topľou, Bardejov, Sabinov — každé s vlastným textom.
- [ ] **Výkon.** Lighthouse mobil: LCP < 2,5 s, CLS < 0,1. Hero obrázok má `priority`; over veľkosť súboru.
- [x] **Prístupnosť.** Kontrast, poradie fokusu, mobilné menu ovládateľné klávesnicou (Esc zatvára).
- [ ] **Ochrana osobných údajov.** Doplniť časť o cookies a GA4; údaje prevádzkovateľa nechať ako TODO(klient).

## B. Čaká na klienta (nevymýšľať)

- [ ] Právny názov, IČO, DIČ, sídlo → pätička, `/ochrana-osobnych-udajov`, schema (`legalName`, `vatID`).
- [ ] Skutočné fotky realizácií → nahradiť `public/hero.webp`, potom sekcia a stránky `/realizacie/<projekt>`.
- [ ] Orientačné ceny → `pricing-data.ts` (stránka sa sama odomkne pre vyhľadávače).
- [ ] Potvrdiť: počet rokov praxe (`yearsExperience`), dobu odpovede (`responseTime`), otváracie hodiny,
      ako funguje pohotovosť mimo pracovných dní.
- [ ] Zápis v zozname zhotoviteľov SIEA → `sieaRegistered`.
- [ ] Certifikát na F-plyny a zoznam značiek, ktoré naozaj montuje.
- [ ] Odkazy na Facebook, Instagram, Google Business Profile → `site.sameAs`.
- [ ] Doména klimaro.sk + e-mail info@klimaro.sk.

## C. Spustenie

- [ ] Vercel projekt, doména, HTTPS, jedna verzia (www alebo bez) s 301.
- [ ] `NEXT_PUBLIC_GA_ID` vo Verceli; v GA4 označiť `klik_telefon`, `klik_whatsapp`, `odoslanie_dopytu`
      ako kľúčové udalosti.
- [ ] Over, že produkcia nemá `noindex` ani `Disallow: /`.
- [ ] Google Search Console + odoslať sitemap; Bing Webmaster + IndexNow.
- [ ] Rich Results Test na: domov, jedna služba, jedno mesto, dotácia.

## D. Po spustení (obsah)

- [ ] Blog `/blog`: prvé články podľa plánu (cena klimatizácie s montážou, tepelné čerpadlo a návratnosť,
      Zelená domácnostiam krok za krokom, klimatizácia v paneláku). Až potom zrušiť `noindex` a pridať do sitemap.
- [ ] Stránky realizácií priebežne, ako pribúdajú fotky.
