import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Cenník",
  description: "Orientačné ceny montáže, predaja a servisu klimatizácií Klimaro – vždy vrátane inštalácie.",
};

export default function CenikPage() {
  return (
    <ComingSoon
      eyebrow="Cenník"
      title="Podrobný cenník sa pripravuje"
      text="Pracujeme na prehľadnom cenníku klimatizácií a tepelných čerpadiel vrátane montáže. Zatiaľ vám radi pripravíme cenovú ponuku na mieru."
    />
  );
}
