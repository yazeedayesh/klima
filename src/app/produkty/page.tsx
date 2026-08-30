import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product-card";
import { categories, products, getCategoryBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Produkty",
  description: "Klimatizácie a tepelné čerpadlá Montex – nástenné, bezprievanové aj dizajnové jednotky, vždy s montážou.",
};

type Props = {
  searchParams: Promise<{ kategoria?: string; q?: string }>;
};

export default async function ProduktyPage({ searchParams }: Props) {
  const { kategoria, q } = await searchParams;
  const activeCategory = kategoria ? getCategoryBySlug(kategoria) : undefined;

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory ? p.category === activeCategory.slug : true;
    const matchesQuery = q ? p.name.toLowerCase().includes(q.toLowerCase()) : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-md bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">
            Produkty
          </div>
          <h1 className="mt-5 text-3xl font-bold text-navy-950 sm:text-4xl">
            {activeCategory ? activeCategory.name : "Klimatizácie a tepelné čerpadlá"}
          </h1>
          <p className="mt-3 text-ink-soft">
            {activeCategory ? activeCategory.description : "Orientačné ceny sú vždy vrátane montáže. Presnú ponuku pripravíme na základe obhliadky alebo konzultácie."}
          </p>
          {q && (
            <p className="mt-2 text-sm text-ink-faint">
              Výsledky hľadania pre: <span className="font-medium text-navy-950">{q}</span>
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-2xl border border-line bg-gray-50 p-5 lg:sticky lg:top-28 lg:self-start">
            <h2 className="px-1 text-sm font-bold text-navy-950">Kategórie</h2>
            <nav className="mt-3 flex flex-col gap-1">
              <Link
                href="/produkty"
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  !activeCategory ? "bg-navy-950 text-white" : "text-ink-soft hover:bg-white"
                }`}
              >
                Všetky produkty
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/produkty?kategoria=${cat.slug}`}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    activeCategory?.slug === cat.slug ? "bg-navy-950 text-white" : "text-ink-soft hover:bg-white"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </aside>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-line bg-gray-50 p-10 text-center">
              <p className="text-ink-soft">Pre zadané kritériá sme nenašli žiadny produkt.</p>
              <Link href="/kontakt" className="mt-4 inline-flex text-sm font-semibold text-navy-900 underline">
                Napíšte nám, poradíme s výberom →
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
