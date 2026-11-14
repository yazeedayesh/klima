import Link from "next/link";
import { Container } from "@/components/ui/container";
import { acServicesNav, heatPumpNav, mainNav, site } from "@/lib/site";
import { areas } from "@/lib/areas-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <Container className="py-16">
        <div className="flex flex-col gap-8 border-b border-white/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <p className="display m-0 text-4xl text-white sm:text-6xl">
            Doma <span className="num">22 °C</span>.
            <br />
            <span className="text-white/45">V lete aj v zime.</span>
          </p>
          <div className="flex flex-col gap-1 lg:text-right">
            <a href={`tel:${site.phone}`} className="num text-2xl font-semibold hover:text-accent-glow sm:text-3xl">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="text-white/70 hover:text-white">
              {site.email}
            </a>
            <span className="text-sm text-white/50">{site.hours}</span>
          </div>
        </div>

        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Klimatizácie" links={[{ href: "/klimatizacie", label: "Prehľad" }, ...acServicesNav]} />
          <FooterCol title="Tepelné čerpadlá" links={heatPumpNav} />
          <FooterCol
            title="Kde pracujeme"
            links={areas.map((a) => ({ href: `/oblasti/${a.slug}`, label: a.name }))}
          />
          <FooterCol
            title={site.name}
            links={[
              ...mainNav.filter((l) => !["/klimatizacie", "/tepelne-cerpadla"].includes(l.href)),
              { href: "/ochrana-osobnych-udajov", label: "Ochrana osobných údajov" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col gap-2 text-sm text-white/45 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. Montáž, predaj a servis klimatizácií a tepelných čerpadiel.
          </span>
          <span>{site.areaShort}, po dohode celé Slovensko</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="m-0 text-base text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[0.95rem] text-white/65 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
