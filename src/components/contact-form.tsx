"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

const services = [
  "Montáž klimatizácie",
  "Predaj klimatizácie",
  "Servis a čistenie klimatizácie",
  "Tepelné čerpadlo",
  "Iné",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const payload = {
      name: get("name"),
      phone: get("phone"),
      city: get("city"),
      service: get("service"),
      message: get("message"),
      website: get("website"), // honeypot — must stay empty
    };

    setStatus("submitting");

    try {
      const res = await fetch("/api/dopyt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      track("odoslanie_dopytu", { kanal: "formular", sluzba: payload.service });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <p className="mb-0 text-lg font-semibold text-ink">Ďakujeme, dopyt sme prijali.</p>
        <p className="mb-0 mt-2 text-ink-soft">Ozveme sa {site.responseTime}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Meno a priezvisko" htmlFor="c-name">
          <input id="c-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Telefón" htmlFor="c-phone">
          <input id="c-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+421" className={inputClass} />
        </Field>
        <Field label="Obec alebo mesto" htmlFor="c-city">
          <input id="c-city" name="city" type="text" required autoComplete="address-level2" placeholder="napr. Košice" className={inputClass} />
        </Field>
        <Field label="O čo máte záujem" htmlFor="c-service">
          <select id="c-service" name="service" defaultValue={services[0]} className={inputClass}>
            {services.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Popis (nepovinné)" htmlFor="c-message" className="mt-5">
        <textarea
          id="c-message"
          name="message"
          rows={3}
          placeholder="Veľkosť miestnosti, typ domu, poschodie…"
          className={inputClass}
        />
      </Field>

      {/* Honeypot — skryté pre ľudí, bežné pre boty. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="c-website">Webstránka</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="mb-0 mt-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          Dopyt sa nepodarilo odoslať. Skúste to znova, alebo nás kontaktujte priamo cez WhatsApp či telefonicky.
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
        >
          {status === "submitting" ? "Odosielam…" : "Odoslať dopyt"}
        </button>
        <a
          href={`${site.whatsapp}?text=${encodeURIComponent("Dobrý deň, mám záujem o cenovú ponuku.")}`}
          target="_blank"
          rel="noopener"
          onClick={() => track("klik_whatsapp")}
          className="flex items-center justify-center rounded-md border border-ink/20 px-6 py-3.5 text-center text-[0.95rem] font-semibold text-ink transition-colors hover:border-ink"
        >
          Napísať cez WhatsApp
        </a>
      </div>
      <p className="mb-0 mt-4 text-sm text-ink-faint">
        Ozveme sa {site.responseTime}. Údaje používame len na vybavenie dopytu,{" "}
        <Link href="/ochrana-osobnych-udajov" className="underline">
          viac o ochrane údajov
        </Link>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent focus:bg-white";

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
