import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product-card";
import { ProductFilter } from "@/components/product-filter";
import { categories, products } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Produkty",
  description:
    "Klimatizácie a tepelné čerpadlá Klimaro – nástenné, bezprievanové aj dizajnové jednotky, vždy s montážou. Orientačné ceny pre Košice a okolie.",
  alternates: { canonical: "/produkty" },
};

export default function ProduktyPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
            Produkty
          </div>
          <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
            Klimatizácie a tepelné čerpadlá
          </h1>
          <p className="mt-3 text-ink-soft">
            Orientačné ceny sú vždy vrátane montáže. Presnú ponuku pripravíme na základe obhliadky
            alebo konzultácie. Vyberte si kategóriu, alebo prehliadajte celú ponuku nižšie.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-2xl border border-line bg-gray-50 p-5 lg:sticky lg:top-28 lg:self-start">
            <h2 className="px-1 text-sm font-bold text-navy-950">Kategórie</h2>
            <nav className="mt-3 flex flex-col gap-1">
              <Link
                href="/produkty"
                data-category-link=""
                className="rounded-lg bg-navy-950 px-3 py-2.5 text-sm font-medium text-white"
              >
                Všetky produkty
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/produkty?kategoria=${cat.slug}`}
                  data-category-link={cat.slug}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-white"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </aside>

          <div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <div data-empty-state style={{ display: "none" }} className="rounded-2xl border border-line bg-gray-50 p-10 text-center">
              <p className="text-ink-soft">Pre zadané kritériá sme nenašli žiadny produkt.</p>
              <Link href="/kontakt" className="mt-4 inline-flex text-sm font-semibold text-navy-900 underline">
                Napíšte nám, poradíme s výberom →
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Suspense fallback={null}>
        <ProductFilter />
      </Suspense>
    </section>
  );
}
