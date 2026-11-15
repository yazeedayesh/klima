export function LogoWord({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.12em] ${className}`}>
      Klimaro
      <svg
        viewBox="0 0 140 90"
        aria-hidden="true"
        className="inline-block h-[0.62em] w-[1.05em]"
      >
        {/* indoor AC unit body */}
        <rect x="6" y="12" width="128" height="66" rx="12" fill="none" stroke="currentColor" strokeWidth="12" />
        {/* vent slats */}
        <line x1="26" y1="40" x2="112" y2="40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
        <line x1="26" y1="58" x2="92" y2="58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.45" />
        {/* glow behind the lit status light */}
        <circle cx="112" cy="28" r="15" fill="#F5821F" opacity="0.28" />
        {/* lit status light */}
        <circle cx="112" cy="28" r="8" fill="#F5821F" />
      </svg>
    </span>
  );
}
