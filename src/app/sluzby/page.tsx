import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Služby",
  description: "Predaj, montáž, servis klimatizácií a tepelné čerpadlá – kompletné služby Montex.",
};

export default function SluzbyPage() {
  return (
    <ComingSoon
      eyebrow="Služby"
      title="Prehľad služieb sa pripravuje"
      text="Detailné stránky pre predaj, montáž, servis klimatizácií a tepelné čerpadlá dopĺňame. Napíšte nám, radi vám poradíme hneď teraz."
    />
  );
}
