"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { acServicesNav, heatPumpNav, mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center gap-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} – domov`}>
          <Image src="/mark.svg" alt="" width={36} height={36} priority />
          <span className="text-xl font-bold tracking-tight text-ink">{site.name}</span>
        </Link>

        <nav aria-label="Hlavné menu" className="ml-auto hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 text-[0.95rem] font-medium transition-colors hover:text-ink ${
                isActive(item.href)
                  ? "text-ink after:absolute after:inset-x-0 after:-bottom-[1.05rem] after:h-0.5 after:bg-accent"
                  : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${site.phone}`}
          className="num hidden items-center gap-2.5 rounded-md bg-ink px-4 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-accent lg:inline-flex"
        >
          <PhoneIcon />
          {site.phoneDisplay}
        </a>

        <a
          href={`tel:${site.phone}`}
          aria-label={`Zavolať ${site.phoneDisplay}`}
          className="ml-auto grid h-11 w-11 place-items-center rounded-md bg-accent text-white lg:hidden"
        >
          <PhoneIcon />
        </a>
        <button
          type="button"
          aria-label="Otvoriť menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-md border border-line text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-ink px-6 py-5 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">{site.name}</span>
            <button
              type="button"
              aria-label="Zavrieť menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-md border border-white/25"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobilné menu" className="mt-8 flex flex-col">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-2xl font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/70">
            {[...acServicesNav, ...heatPumpNav].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-1.5">
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={`tel:${site.phone}`}
            className="num mt-auto flex items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 text-lg font-semibold"
          >
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
