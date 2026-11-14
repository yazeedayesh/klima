export type FaqItem = { q: string; a: string };

export function FaqList({ items, withSchema = true }: { items: FaqItem[]; withSchema?: boolean }) {
  if (items.length === 0) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="max-w-3xl border-b border-line">
        {items.map((item) => (
          <details key={item.q} className="group border-t border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="m-0 text-lg text-ink">{item.q}</h3>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-transform group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="max-w-2xl pb-6 text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
