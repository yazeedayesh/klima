import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stránka sa nenašla",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-wash py-24">
      <Container>
        <p className="display num m-0 text-7xl text-accent sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl sm:text-4xl">Túto stránku sme nenašli</h1>
        <p className="mt-3 max-w-xl text-lg text-ink-soft">
          Adresa sa mohla zmeniť. Skúste jednu z hlavných stránok, alebo nám zavolajte na {site.phoneDisplay}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            Domov
          </Button>
          <Button href="/klimatizacie" variant="ghost">
            Klimatizácie
          </Button>
          <Button href="/tepelne-cerpadla" variant="ghost">
            Tepelné čerpadlá
          </Button>
          <Button href="/kontakt" variant="accent">
            Kontakt
          </Button>
        </div>
      </Container>
    </section>
  );
}
