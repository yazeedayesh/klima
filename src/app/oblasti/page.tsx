import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Pôsobnosť",
  description: "Klimaro pôsobí v Košiciach a okolí do 50 km, po dohode aj po celom Slovensku.",
};

export default function OblastiPage() {
  return (
    <ComingSoon
      eyebrow="Pôsobnosť"
      title="Stránky jednotlivých oblastí sa pripravujú"
      text="Pracujeme na prehľade všetkých miest a obcí, kde realizujeme montáže — Košice a okolie do 50 km, po dohode celé Slovensko."
    />
  );
}
