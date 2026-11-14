export function LogoWord({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.12em] ${className}`}>
      Klimaro
      <svg viewBox="0 0 64 64" aria-hidden="true" className="inline-block h-[0.62em] w-[1.05em]">
        {/* indoor AC unit body */}
        <rect x="9" y="17" width="46" height="19" rx="8" fill="none" stroke="currentColor" strokeWidth="5" />
        {/* vent slats */}
        <line x1="17" y1="25.5" x2="47" y2="25.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <line x1="17" y1="30.5" x2="41" y2="30.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
        {/* cool airflow */}
        <path d="M16 39c-1 7 4 11 11 10" fill="none" stroke="#ff9a3d" strokeWidth="5" strokeLinecap="round" />
        <path d="M33 39c-1 5.5 2.5 8.5 8 8" fill="none" stroke="#ff9a3d" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      </svg>
    </span>
  );
}
