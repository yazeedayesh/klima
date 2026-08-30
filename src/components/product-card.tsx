import Image from "next/image";
import Link from "next/link";
import { getCategoryBySlug, type Product } from "@/lib/products-data";
import { basePath } from "@/lib/base-path";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative bg-gray-50">
        {category && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-navy-900 px-2.5 py-1 text-[0.7rem] font-semibold text-white">
            {category.name}
          </span>
        )}
        <Image
          src={`${basePath}/product-placeholder.svg`}
          alt={`${product.name} – ilustračný obrázok`}
          width={320}
          height={220}
          className="w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-navy-950">{product.name}</h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Spec label={product.kw} />
          <Spec label={product.mount} />
          <Spec label={product.color} />
        </div>

        <div className="mt-4 flex flex-1 items-end justify-between gap-3">
          <div>
            <div className="text-[0.7rem] uppercase tracking-wide text-ink-faint">od</div>
            <div className="font-display text-xl font-bold text-navy-950">{product.priceFrom} €</div>
          </div>
          <Link
            href={`/kontakt?produkt=${encodeURIComponent(product.name)}`}
            className="whitespace-nowrap rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Nezáväzná ponuka
          </Link>
        </div>
      </div>
    </div>
  );
}

function Spec({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-line bg-gray-50 px-2 py-1 text-[0.72rem] font-medium text-ink-soft">
      {label}
    </span>
  );
}
