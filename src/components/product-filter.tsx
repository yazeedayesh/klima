"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive-enhancement filter: the server already renders every product
 * card (so crawlers and no-JS visitors get the full catalog). This just
 * hides non-matching cards once the searchParams are known client-side —
 * it renders nothing itself, so if JS never runs the full list stays visible.
 */
export function ProductFilter() {
  const searchParams = useSearchParams();
  const kategoria = searchParams.get("kategoria") ?? "";
  const q = (searchParams.get("q") ?? "").toLowerCase();

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-product-card]");
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesCategory = !kategoria || card.dataset.category === kategoria;
      const matchesQuery = !q || (card.dataset.name ?? "").includes(q);
      const visible = matchesCategory && matchesQuery;
      card.style.display = visible ? "" : "none";
      if (visible) visibleCount++;
    });

    const emptyState = document.querySelector<HTMLElement>("[data-empty-state]");
    if (emptyState) emptyState.style.display = visibleCount === 0 ? "" : "none";

    document.querySelectorAll<HTMLElement>("[data-category-link]").forEach((link) => {
      const isActive = (link.dataset.categoryLink ?? "") === kategoria;
      link.classList.toggle("bg-navy-950", isActive);
      link.classList.toggle("text-white", isActive);
      link.classList.toggle("text-ink-soft", !isActive);
    });
  }, [kategoria, q]);

  return null;
}
