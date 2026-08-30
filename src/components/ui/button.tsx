import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-petrol-900 text-cream hover:bg-petrol-800 focus-visible:outline-petrol-900",
  accent:
    "bg-terracotta-500 text-white hover:bg-terracotta-600 focus-visible:outline-terracotta-600",
  ghost:
    "bg-transparent text-petrol-900 border border-petrol-900/25 hover:border-petrol-900/60 hover:bg-petrol-900/5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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
