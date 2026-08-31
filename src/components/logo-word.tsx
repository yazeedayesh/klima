export function LogoWord({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      Klimar
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="mx-[0.01em] inline-block h-[0.72em] w-[0.72em] translate-y-[0.06em]"
      >
        {/* dial ring — reads as the letter "o" */}
        <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="11" />
        {/* temperature tick at the top of the dial */}
        <line x1="50" y1="2" x2="50" y2="15" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
        {/* glow behind the lit button */}
        <circle cx="50" cy="50" r="21" fill="#F5821F" opacity="0.22" />
        {/* lit power button */}
        <circle cx="50" cy="50" r="12" fill="#F5821F" />
      </svg>
    </span>
  );
}
