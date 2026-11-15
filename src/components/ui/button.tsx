import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900",
  accent:
    "bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-600",
  ghost:
    "bg-white text-navy-900 border border-line hover:border-navy-900/40 hover:bg-gray-50",
  "outline-light":
    "bg-white/0 text-white border border-white/30 hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
