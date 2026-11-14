import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-navy-800",
  accent: "bg-accent text-white hover:bg-accent-strong",
  ghost: "bg-white text-ink border border-ink/20 hover:border-ink",
  "outline-light": "text-white border border-white/35 hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200";

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
