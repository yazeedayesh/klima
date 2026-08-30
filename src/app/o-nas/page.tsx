import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "O nás",
  description: "Klimaro – certifikovaný tím pre montáž, predaj a servis klimatizácií v Košiciach.",
};

export default function ONasPage() {
  return (
    <ComingSoon
      eyebrow="O nás"
      title="Stránka o nás sa pripravuje"
      text="Čoskoro sa tu dozviete viac o tíme Klimaro a našich certifikáciách. Zatiaľ nás radi spoznáte cez telefón alebo osobne."
    />
  );
}
