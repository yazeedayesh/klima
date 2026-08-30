"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/lib/site";
import { categories } from "@/lib/products-data";
import { basePath } from "@/lib/base-path";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const q = String(form.get("q") ?? "").trim();
    router.push(q ? `/produkty?q=${encodeURIComponent(q)}` : "/produkty");
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(16,24,40,0.08)]">
      <div className="hidden bg-navy-950 text-white sm:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <span className="text-white/70">Chladenie, ktoré dáva zmysel vášmu priestoru</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phone}`} className="text-white/85 hover:text-white">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="text-white/85 hover:text-white">
              {site.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-20 items-center gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src={`${basePath}/mark.svg`} alt="Klimaro" width={40} height={40} priority />
          <span className="font-display text-lg font-bold text-navy-950">{site.name}</span>
        </Link>

        <div className="relative hidden lg:block">
          <button
            type="button"
            onClick={() => setCatOpen((v) => !v)}
            onBlur={() => setTimeout(() => setCatOpen(false), 150)}
            className="flex items-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Kategórie
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {catOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-72 rounded-xl border border-line bg-white p-2 shadow-lg">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/produkty?kategoria=${cat.slug}`}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-gray-50 hover:text-navy-900"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSearch} className="hidden flex-1 items-center lg:flex">
          <div className="flex w-full max-w-md items-center rounded-lg border border-line bg-gray-50 px-3.5 py-2.5">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#7C8798" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              name="q"
              placeholder="Hľadať produkty"
              className="ml-2.5 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
            />
          </div>
        </form>

        <nav className="ml-auto hidden items-center gap-6 xl:flex">
          {mainNav
            .filter((item) => item.href !== "/produkty")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-navy-900"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="ml-auto hidden lg:block xl:ml-0">
          <Button href={`tel:${site.phone}`} variant="accent" className="px-5 py-3 text-sm">
            Zavolať
          </Button>
        </div>

        <button
          type="button"
          aria-label="Otvoriť menu"
          onClick={() => setOpen(true)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-line text-navy-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy-950 px-6 py-6 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold">{site.name}</span>
            <button
              type="button"
              aria-label="Zavrieť menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/25"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/50">Kategórie</div>
          <nav className="mt-3 flex flex-col gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/produkty?kategoria=${cat.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/5 px-4 py-3 text-sm font-medium"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/50">Menu</div>
          <nav className="mt-3 flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl font-bold px-1 py-2.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button href={`tel:${site.phone}`} variant="accent" className="w-full">
              Zavolať {site.phoneDisplay}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
