import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNav, site } from "@/lib/site";
import { categories } from "@/lib/products-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-gray-50">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/mark.svg" alt="Montex" width={36} height={36} />
            <span className="font-display text-lg font-bold text-navy-950">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            Klimatizácie a servis pre domácnosti, byty aj firemné priestory v Košiciach a okolí.
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            {site.address.locality}
            <br />
            {site.phoneDisplay}
            <br />
            {site.email}
          </p>
        </div>

        <FooterCol title="Ponuka" links={footerNav.quick} />
        <FooterCol
          title="Kategórie"
          links={categories.map((c) => ({ href: `/produkty?kategoria=${c.slug}`, label: c.name }))}
        />

        <div className="rounded-2xl bg-navy-950 p-6 text-white">
          <h4 className="font-display text-base font-bold">Nezáväzná ponuka</h4>
          <p className="mt-2 text-sm text-white/70">
            Pošlite nám parametre priestoru a pripravíme vhodné riešenie do 24 hodín.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Odoslať dopyt
          </Link>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center gap-2 py-6 text-sm text-ink-faint sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. Všetky práva vyhradené.</span>
          <Link href={footerNav.legal[0].href} className="hover:text-ink">
            {footerNav.legal[0].label}
          </Link>
        </Container>
      </div>
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
      <h4 className="font-display text-sm font-bold text-navy-950">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink-soft transition-colors hover:text-navy-900">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
