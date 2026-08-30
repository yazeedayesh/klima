import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { ProduktyClient } from "@/components/produkty-client";

export const metadata: Metadata = {
  title: "Produkty",
  description: "Klimatizácie a tepelné čerpadlá Klimaro – nástenné, bezprievanové aj dizajnové jednotky, vždy s montážou.",
};

export default function ProduktyPage() {
  return (
    <section className="py-14">
      <Container>
        <Suspense fallback={null}>
          <ProduktyClient />
        </Suspense>
      </Container>
    </section>
  );
}
