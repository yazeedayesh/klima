import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/60 bg-petrol-950 text-cream/85">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/mark.svg" alt="Montex" width={36} height={36} />
            <span className="font-display text-lg font-semibold text-cream">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/65">
            Montáž, predaj a servis klimatizácií v Košiciach a okolí, s pôsobnosťou po celom Slovensku.
          </p>
        </div>

        <FooterCol title="Rýchle odkazy" links={footerNav.quick} />
        <FooterCol title="Služby" links={footerNav.services} />
        <FooterCol title="Právne" links={footerNav.legal} />
      </Container>

      <Container className="flex flex-col items-center gap-4 border-t border-cream/10 py-6 text-sm text-cream/55 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {site.name}. Všetky práva vyhradené.</span>
        <span>{site.areaShort} · {site.phoneDisplay}</span>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-cream">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-cream/65 transition-colors hover:text-cream">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
