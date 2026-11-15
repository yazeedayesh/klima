import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Rady a návody o klimatizáciách, tepelných čerpadlách a chladení domácnosti či firmy.",
  alternates: { canonical: "/blog" },
  // Stránka je zatiaľ prázdna ("pripravuje sa") — bez reálneho obsahu by ju Google indexoval
  // ako tenký/duplicitný obsah. Odstrániť toto, keď pribudnú prvé články.
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Blog"
      title="Články sa pripravujú"
      text="Čoskoro tu nájdete praktické rady o výbere, montáži a údržbe klimatizácií na Slovensku."
    />
  );
}
