import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stránka sa nenašla",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
            Chyba 404
          </div>
          <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
            Táto stránka neexistuje
          </h1>
          <p className="mt-4 text-ink-soft">
            Odkaz je asi neplatný alebo sa stránka presunula. Skúste sa vrátiť na hlavnú stránku,
            alebo nám rovno napíšte, čo potrebujete.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" variant="accent">
              Späť na hlavnú stránku
            </Button>
            <Button href={`tel:${site.phone}`} variant="ghost">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>
          <nav aria-label="Rýchle odkazy" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-navy-900 hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
