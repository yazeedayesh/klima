"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-cream/90 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/mark.svg" alt="Montex" width={40} height={40} priority />
          <span className="font-display text-xl font-semibold text-petrol-950">
            {site.name}
            <span className="ml-2 hidden font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-faint sm:inline">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-petrol-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={`tel:${site.phone}`} variant="accent" className="px-5 py-3 text-sm">
            Zavolať
          </Button>
        </div>

        <button
          type="button"
          aria-label="Otvoriť menu"
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-petrol-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-petrol-950 px-6 py-6 text-cream lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-semibold">{site.name}</span>
            <button
              type="button"
              aria-label="Zavrieť menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/25"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button href={`tel:${site.phone}`} variant="accent" className="w-full">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
