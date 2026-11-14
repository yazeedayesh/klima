export type ServiceFaq = { q: string; a: string };

export type ServiceEntry = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  description: string;
  intro: string;
  /** Voliteľné doplnkové odseky s podrobnejším vysvetlením (zobrazia sa pod úvodom). */
  body?: string[];
  benefits: string[];
  faq: ServiceFaq[];
};

// Klimatizácie — URL: /klimatizacie/<slug>
export const servicesData: ServiceEntry[] = [
  {
    slug: "predaj",
    title: "Predaj klimatizácií",
    h1: "Predaj klimatizácií v Košiciach s montážou",
    metaTitle: "Predaj klimatizácií Košice – výber podľa miestnosti",
    description:
      "Predaj klimatizácií všetkých bežných značiek pre byty, domy aj prevádzky v Košiciach a okolí do 100 km. Poradíme s výkonom, cena vždy vrátane montáže.",
    intro:
      "Pracujeme so všetkými bežnými značkami klimatizácií. Jednotku vyberáme podľa veľkosti a orientácie miestnosti, spôsobu použitia a rozpočtu — a cenu dostanete vopred, vrátane montáže.",
    benefits: [
      "Poradenstvo pri výbere výkonu (kW) podľa veľkosti a orientácie miestnosti",
      "Odporúčanie vhodného typu jednotky — nástenná, bezprievanová alebo multisplit pre viac miestností",
      "Cenová ponuka vopred, vždy vrátane montáže",
      "Možnosť obhliadky priestoru pred záväzným rozhodnutím",
    ],
    faq: [
      {
        q: "Akú značku klimatizácie odporúčate?",
        a: "Nie sme viazaní na jednu značku. Odporúčame jednotku podľa miestnosti, požiadaviek na hlučnosť, kúrenie v zime a rozpočtu, s dobrou dostupnosťou servisu a náhradných dielov.",
      },
      {
        q: "Aký výkon klimatizácie potrebujem?",
        a: "Závisí od plochy, výšky stropu, orientácie okien a zateplenia. Presný výkon určíme pri telefonickej konzultácii alebo obhliadke, aby jednotka nebola poddimenzovaná ani zbytočne veľká.",
      },
    ],
  },
  {
    slug: "montaz",
    title: "Montáž klimatizácie",
    h1: "Montáž klimatizácie Košice a okolie",
    metaTitle: "Montáž klimatizácie Košice – split aj multisplit",
    description:
      "Odborná montáž klimatizácie v Košiciach a okolí do 100 km – split aj multisplit, byty, domy aj firmy. Elektroinštalácia, odvod kondenzátu, cena vopred.",
    intro:
      "Montujeme split aj multisplit klimatizácie do bytov, rodinných domov aj firemných priestorov — vrátane elektroinštalácie, vŕtania priechodov a odvodu kondenzátu, s jasnou cenou vopred.",
    benefits: [
      "Kompletná elektroinštalácia a prepojenie vnútornej a vonkajšej jednotky",
      "Vŕtanie priechodov a odvod kondenzátu bez zbytočných zásahov do interiéru",
      "Tlaková skúška, vákuovanie a uvedenie systému do prevádzky",
      "Odovzdanie s návodom na obsluhu a záruka na vykonanú montáž",
    ],
    faq: [
      {
        q: "Ako dlho trvá montáž klimatizácie?",
        a: "Bežná montáž nástennej split klimatizácie trvá spravidla 3 – 6 hodín, v závislosti od dĺžky potrubnej trasy a náročnosti prác.",
      },
      {
        q: "Potrebujem na klimatizáciu v paneláku súhlas?",
        a: "Pri bytových domoch býva potrebný súhlas správcu alebo spoločenstva vlastníkov s umiestnením vonkajšej jednotky na fasáde. Odporúčame ho vybaviť ešte pred montážou — poradíme, čo býva potrebné.",
      },
    ],
  },
  {
    slug: "servis",
    title: "Servis a čistenie klimatizácie",
    h1: "Servis a čistenie klimatizácie Košice",
    metaTitle: "Servis a čistenie klimatizácie Košice",
    description:
      "Servis, čistenie a dezinfekcia klimatizácií všetkých značiek v Košiciach a okolí – kontrola chladiva, oprava porúch, pravidelné prehliadky.",
    intro:
      "Čistíme, dezinfikujeme a servisujeme klimatizácie všetkých bežných značiek — aj tie, ktoré sme nemontovali. Pravidelná údržba predĺži životnosť jednotky a udrží nízku spotrebu.",
    benefits: [
      "Čistenie filtrov a výmenníka vnútornej aj vonkajšej jednotky",
      "Dezinfekcia proti plesniam a zápachu",
      "Kontrola tesnosti okruhu a prípadné doplnenie chladiva",
      "Kontrola elektrických spojov a odvodu kondenzátu, diagnostika porúch",
    ],
    faq: [
      {
        q: "Ako často čistiť klimatizáciu?",
        a: "Odporúčame aspoň raz ročne, ideálne pred letnou sezónou. Pri intenzívnom používaní, domácich zvieratách alebo v prašnom prostredí aj častejšie.",
      },
      {
        q: "Servisujete aj klimatizácie, ktoré ste nemontovali?",
        a: "Áno, servisujeme jednotky všetkých bežných značiek bez ohľadu na to, kto ich montoval.",
      },
    ],
  },
  {
    slug: "multisplit",
    title: "Multisplit klimatizácia",
    h1: "Multisplit klimatizácia pre viac miestností",
    metaTitle: "Multisplit klimatizácia Košice – viac jednotiek, jedna vonkajšia",
    description:
      "Multisplit klimatizácia pre byty aj domy v Košiciach a okolí do 100 km – viac vnútorných jednotiek na jednu vonkajšiu, nezávislé riadenie každej miestnosti.",
    intro:
      "Multisplit systém spája viac vnútorných jednotiek s jednou vonkajšou jednotkou. Výsledkom je chladenie aj kúrenie vo viacerých miestnostiach bez toho, aby bola fasáda alebo balkón preplnená vonkajšími jednotkami.",
    body: [
      "Pri klasickej (tzv. single-split) klimatizácii patrí ku každej vnútornej jednotke vlastná vonkajšia jednotka. Pri byte alebo dome s viacerými miestnosťami to znamená rovnaký počet vonkajších jednotiek na fasáde, balkóne alebo streche. Multisplit systém toto obchádza — jedna vonkajšia jednotka zvládne napájať dve až päť vnútorných jednotiek, podľa jej výkonu a počtu pripojených okruhov.",
      "Každá vnútorná jednotka sa aj tak ovláda samostatne — vlastným diaľkovým ovládačom alebo cez aplikáciu. Miestnosť, ktorú práve nepotrebujete chladiť alebo kúriť, môžete jednoducho vypnúť, zatiaľ čo ostatné bežia podľa potreby. Spotreba sa tak odvíja od reálneho používania jednotlivých miestností, nie od celého systému naraz.",
      "Pri návrhu multisplit systému je dôležité správne nadimenzovať výkon vonkajšej jednotky na súčet potrieb všetkých pripojených vnútorných jednotiek — a zároveň zohľadniť, že pri niektorých modeloch nemusí byť možné prevádzkovať všetky vnútorné jednotky naraz na ich maximálny výkon. Pri obhliadke posúdime pôdorys, orientáciu miestností a dĺžku trasy k vonkajšej jednotke a na základe toho navrhneme konkrétnu kombináciu výkonov.",
      "Multisplit sa oplatí najmä v bytoch a rodinných domoch, kde chcete klimatizovať tri aj viac miestností a nechcete viacero vonkajších jednotiek na fasáde, alebo kde to nedovoľuje domový poriadok bytového domu. Montáž zahŕňa rovnaké kroky ako pri jednej jednotke — elektroinštaláciu, rozvod chladiva k jednotlivým vnútorným jednotkám, tlakovú skúšku, vákuovanie a spustenie systému.",
      "Dĺžka a vedenie potrubnej trasy k jednotlivým vnútorným jednotkám ovplyvňuje, ako náročná bude montáž a koľko priestupov v stene či priečke bude potrebných. Pri obhliadke preto neriešime len výkon, ale aj to, odkiaľ k vonkajšej jednotke povedieme trasu tak, aby bola čo najkratšia a najmenej viditeľná, a ktorou cestou rozvod rozdelíme k jednotlivým miestnostiam.",
      "Vnútorné jednotky pri multisplit systéme nemusia byť rovnakého typu — do obývačky je možné zvoliť nástennú jednotku, do menšej spálne napríklad bezprievanový model a do kancelárie v dome kazetovú jednotku zapustenú do podhľadu, podľa dispozície a požiadaviek konkrétnej miestnosti. Táto kombinácia je jednou z výhod multisplit riešenia oproti jednému centrálnemu systému.",
    ],
    benefits: [
      "Jedna vonkajšia jednotka pre 2 až 5 vnútorných jednotiek podľa výkonu",
      "Nezávislé ovládanie teploty v každej pripojenej miestnosti",
      "Menej vonkajších jednotiek na fasáde alebo balkóne",
      "Návrh výkonu podľa súčtu potrieb všetkých miestností, nie odhadom",
    ],
    faq: [
      {
        q: "Koľko vnútorných jednotiek sa dá napojiť na jednu vonkajšiu?",
        a: "Zvyčajne 2 až 5, v závislosti od modelu a výkonu vonkajšej jednotky. Presný počet a kombináciu výkonov navrhneme podľa veľkosti a počtu miestností, ktoré chcete klimatizovať.",
      },
      {
        q: "Môžu bežať všetky vnútorné jednotky naraz na plný výkon?",
        a: "Pri niektorých modeloch je súčet maximálnych výkonov vnútorných jednotiek vyšší než výkon vonkajšej jednotky — systém si vtedy reguluje rozdelenie výkonu medzi aktívne miestnosti. Pri návrhu to zohľadňujeme podľa reálneho používania priestoru.",
      },
      {
        q: "Je multisplit drahší ako viac samostatných klimatizácií?",
        a: "Vstupná cena vonkajšej jednotky multisplit systému býva vyššia, ale ušetríte na počte vonkajších jednotiek, ich montáži a prípadných stavebných úpravách fasády. Celkové porovnanie pripravíme v cenovej ponuke podľa konkrétneho počtu miestností.",
      },
      {
        q: "Dá sa k existujúcej vonkajšej jednotke dodatočne pripojiť ďalšia vnútorná?",
        a: "Závisí od voľnej kapacity aktuálnej vonkajšej jednotky a od toho, či má nezapojený okruh. Pri obhliadke overíme, či rozšírenie dáva zmysel technicky, alebo je výhodnejšia samostatná jednotka pre novú miestnosť.",
      },
    ],
  },
  {
    slug: "pre-firmy",
    title: "Klimatizácie pre firmy",
    h1: "Klimatizácie pre firmy a prevádzky",
    metaTitle: "Klimatizácie pre firmy Košice – kancelárie, obchody, prevádzky",
    description:
      "Montáž a servis klimatizácií pre firmy, kancelárie, obchody a prevádzky v Košiciach a okolí do 100 km. Návrh podľa typu priestoru, servis mimo otváracích hodín.",
    intro:
      "Kancelárie, obchodné priestory, reštaurácie a menšie prevádzky majú iné nároky na klimatizáciu než domácnosť — vyššiu dennú záťaž, viac ľudí v priestore a často aj technické zariadenie, ktoré potrebuje stabilnú teplotu. Montáž aj servis prispôsobujeme typu prevádzky.",
    body: [
      "Pri kanceláriách a obchodných priestoroch s viacerými miestnosťami je multisplit alebo väčší komerčný systém zvyčajne praktickejší než viacero samostatných jednotiek — menej zásahov do fasády, jednoduchšia údržba na jednom mieste. Pri priestoroch s vysokou záťažou (predajná plocha s veľkými výkladmi, kuchyňa v reštaurácii, serverovňa alebo technická miestnosť) navrhujeme výkon podľa skutočnej tepelnej záťaže priestoru, nie len podľa plochy.",
      "Serverovne a technické miestnosti majú špecifickú požiadavku — chladenie musí byť k dispozícii prakticky nepretržite, bez ohľadu na vonkajšiu teplotu, a výpadok sa prejaví okamžite. Pri takýchto priestoroch odporúčame zariadenie určené na celoročnú prevádzku a kratší interval servisných kontrol než pri bežnej klimatizácii v obytnej miestnosti.",
      "Montáž v prevádzke plánujeme tak, aby čo najmenej zasahovala do bežného chodu firmy — termín prác, prípadné obmedzenie konkrétnych miestností aj poobhliadkový odhad trvania dohodneme vopred. Pri firmách, ktoré majú viac prevádzok alebo pobočiek, vieme zjednotiť servisné intervaly a mať prehľad o stave zariadení na jednom mieste.",
      "Pri intenzívnejšom používaní (dlhší denný chod, väčší počet ľudí v priestore, prevádzka v gastro segmente) odporúčame častejšiu kontrolu a čistenie než pri domácom použití — filtre a výmenník sa znečisťujú rýchlejšie a znečistenie priamo ovplyvňuje spotrebu aj kvalitu vzduchu v priestore.",
      "Pri výbere zariadenia pre firmu zohľadňujeme aj prevádzkové náklady, nie len obstarávaciu cenu — pri dennej prevádzke niekoľko hodín denne sa rozdiel v spotrebe medzi jednotkami prejaví na účte výraznejšie než v domácnosti, kde sa klimatizácia používa príležitostne. Pri väčšom počte jednotiek odporúčame aj zjednotenie značky, aby bol servis a prípadné náhradné diely dostupné jednoducho a rýchlo.",
      "V priestoroch s veľkými presklenými plochami (predajne, kancelárie s presklenou fasádou) je tepelná záťaž od slnečného žiarenia často väčšia než záťaž od samotných ľudí v priestore. Pri návrhu výkonu to zohľadňujeme podľa orientácie a veľkosti okien, aby zariadenie nebolo poddimenzované počas letných mesiacov.",
      "Pri reštauráciách a kuchynských priestoroch je potrebné oddelene riešiť chladenie hosťovskej časti a odvetranie alebo chladenie samotnej kuchyne, kde je tepelná záťaž od varenia výrazne vyššia a vyžaduje iný prístup než bežná klimatizácia. V takýchto prípadoch odporúčame kombináciu klimatizácie so vzduchotechnikou, podľa reálnych podmienok v kuchyni.",
    ],
    benefits: [
      "Návrh výkonu podľa reálnej tepelnej záťaže priestoru, nie len podľa plochy",
      "Multisplit alebo komerčné riešenie pre priestory s viacerými miestnosťami",
      "Termín montáže dohodnutý tak, aby minimálne obmedzil chod prevádzky",
      "Servisné intervaly prispôsobené intenzite používania priestoru",
    ],
    faq: [
      {
        q: "Viete klimatizovať serverovňu alebo technickú miestnosť?",
        a: "Áno. Pri takýchto priestoroch navrhujeme zariadenie na celoročnú prevádzku a kratší servisný interval, pretože výpadok chladenia sa tam prejaví rýchlejšie než v bežnej kancelárii.",
      },
      {
        q: "Viete prispôsobiť montáž otváracím hodinám prevádzky?",
        a: "Áno, termín aj postup prác dohodneme vopred tak, aby čo najmenej zasahovali do bežného chodu firmy. Pri väčších zákazkách je možné aj rozdelenie prác do viacerých dní.",
      },
      {
        q: "Riešite aj servis pre firmy s viacerými pobočkami?",
        a: "Áno, vieme zjednotiť servisné intervaly pre viac prevádzok a mať prehľad o stave zariadení na jednom mieste. Rozsah a frekvenciu dohodneme podľa počtu a typu zariadení na jednotlivých pobočkách.",
      },
      {
        q: "Vystavujete faktúru na firmu a riešite aj väčšie zákazky s viacerými jednotkami naraz?",
        a: "Áno, faktúru vystavujeme na firmu podľa bežných fakturačných údajov. Pri väčšom počte jednotiek pripravíme položkovú ponuku za celú zákazku a dohodneme harmonogram montáže podľa počtu priestorov.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
