import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Zásady ochrany osobných údajov spoločnosti Montex – informácie o spracúvaní osobných údajov v súlade s GDPR, cookies a právach dotknutých osôb.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full bg-petrol-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-petrol-800">
            Právne informácie
          </div>
          <h1 className="mt-5 text-3xl font-semibold text-petrol-950 sm:text-4xl">
            Zásady ochrany osobných údajov
          </h1>
        </div>

        <div className="mt-10 max-w-3xl space-y-6 text-ink-soft [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-petrol-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:underline">
          <p className="text-sm text-ink-faint">Posledná aktualizácia: august 2026</p>

          <p>
            Spoločnosť Montex (&bdquo;my&ldquo;, &bdquo;prevádzkovateľ&ldquo;) rešpektuje súkromie návštevníkov a zákazníkov
            tejto webovej stránky. Tieto zásady vysvetľujú, aké osobné údaje spracúvame, na aký účel, na akom právnom
            základe a aké práva máte v súvislosti s ich spracúvaním, v súlade s Nariadením Európskeho parlamentu a
            Rady (EÚ) 2016/679 (GDPR) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
          </p>

          <h2>Prevádzkovateľ</h2>
          <p>
            Prevádzkovateľom osobných údajov je spoločnosť Montex so sídlom v Košiciach, Slovenská republika. Kontakt:
            info@montex-klima.sk, +421 944 267 418.
          </p>

          <h2>Aké údaje spracúvame</h2>
          <ul>
            <li>Údaje, ktoré nám poskytnete cez kontaktný formulár: meno, telefónne číslo, požadovaná služba a obsah správy.</li>
            <li>Údaje automaticky získané pri návšteve stránky: typ zariadenia, prehliadač, navštívené stránky.</li>
            <li>Údaje z cookies a nástrojov na meranie návštevnosti a reklamy.</li>
          </ul>

          <h2>Účel a právny základ spracúvania</h2>
          <ul>
            <li>
              Vybavenie vašej požiadavky a komunikácia s vami (telefonicky, cez WhatsApp alebo e-mail) — na základe
              oprávneného záujmu a plnenia predzmluvných vzťahov (čl. 6 ods. 1 písm. b) a f) GDPR).
            </li>
            <li>Zlepšovanie obsahu a funkčnosti webovej stránky — oprávnený záujem prevádzkovateľa.</li>
            <li>Meranie výkonu reklamných kampaní (napr. Google Ads) — na základe vášho súhlasu prostredníctvom cookie lišty.</li>
          </ul>
          <p>Vaše osobné údaje nepredávame ani neposkytujeme tretím stranám na marketingové účely bez vášho súhlasu.</p>

          <h2>Doba uchovávania</h2>
          <p>
            Údaje z kontaktného formulára uchovávame len po dobu potrebnú na vybavenie vašej požiadavky a prípadnú
            následnú komunikáciu, najviac však 24 mesiacov, pokiaľ osobitný predpis nevyžaduje dlhšiu dobu uchovávania.
          </p>

          <h2>Cookies</h2>
          <p>
            Táto stránka používa cookies na zabezpečenie základnej funkčnosti, analýzu návštevnosti a zobrazovanie
            relevantnej reklamy. Pri prvej návšteve vás o používaní cookies informuje lišta v spodnej časti obrazovky,
            kde môžete súhlas udeliť alebo odmietnuť. Cookies môžete kedykoľvek zmazať alebo zablokovať v nastaveniach
            svojho prehliadača.
          </p>

          <h2>Google Ads a reklama tretích strán</h2>
          <ul>
            <li>Google a jej partneri môžu používať cookies na zobrazovanie reklám na základe vašich predchádzajúcich návštev tejto alebo iných webových stránok.</li>
            <li>
              Personalizovanú reklamu môžete vypnúť v{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener">
                nastaveniach reklám Google
              </a>
              .
            </li>
            <li>Nemáme kontrolu nad zásadami ochrany súkromia tretích strán a odporúčame si ich preštudovať priamo na ich stránkach.</li>
          </ul>

          <h2>Zabezpečenie údajov</h2>
          <p>
            Prijímame primerané technické a organizačné opatrenia na ochranu vašich údajov pred neoprávneným prístupom,
            stratou alebo zneužitím. Napriek tomu nie je možné zaručiť absolútnu bezpečnosť prenosu údajov cez internet.
          </p>

          <h2>Vaše práva</h2>
          <ul>
            <li>Právo na prístup k svojim osobným údajom.</li>
            <li>Právo na opravu nesprávnych alebo neúplných údajov.</li>
            <li>Právo na výmaz údajov (&bdquo;právo byť zabudnutý&ldquo;).</li>
            <li>Právo na obmedzenie spracúvania a právo namietať proti spracúvaniu.</li>
            <li>Právo na prenosnosť údajov.</li>
            <li>Právo kedykoľvek odvolať udelený súhlas.</li>
            <li>Právo podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky (dataprotection.gov.sk).</li>
          </ul>
          <p>Na uplatnenie ktoréhokoľvek z týchto práv nás kontaktujte na e-mailovej adrese uvedenej nižšie.</p>

          <h2>Ochrana detí</h2>
          <p>Táto webová stránka nie je určená osobám mladším ako 16 rokov a vedome nezhromažďujeme osobné údaje detí.</p>

          <h2>Zmeny týchto zásad</h2>
          <p>
            Tieto zásady môžeme z času na čas aktualizovať v súvislosti so zmenami v našich postupoch alebo z
            právnych dôvodov. Aktuálne znenie je vždy dostupné na tejto stránke spolu s dátumom poslednej aktualizácie.
          </p>

          <h2>Kontakt</h2>
          <p>V prípade akýchkoľvek otázok týkajúcich sa ochrany osobných údajov nás kontaktujte:</p>
          <ul>
            <li>E-mail: info@montex-klima.sk</li>
            <li>Telefón: +421 944 267 418</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
