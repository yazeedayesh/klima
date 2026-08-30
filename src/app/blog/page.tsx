import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Rady a návody o klimatizáciách, tepelných čerpadlách a chladení domácnosti či firmy.",
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
