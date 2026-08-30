"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const services = [
  "Predaj klimatizácie",
  "Montáž klimatizácie",
  "Servis a údržba",
  "Tepelné čerpadlo",
  "Iná služba",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefillProduct = searchParams.get("produkt") ?? "";
  const [service, setService] = useState(services[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const message = String(form.get("message") ?? "");
    const product = String(form.get("product") ?? "");

    const subject = product ? `Dopyt – ${product}` : "Dopyt z webu Klimaro";
    const bodyLines = [
      `Meno: ${name}`,
      `Telefón: ${phone}`,
      `Požadovaná služba: ${service}`,
      product ? `Produkt: ${product}` : null,
      message ? `Správa: ${message}` : null,
    ].filter(Boolean);

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-8 shadow-md">
      {prefillProduct && (
        <div className="mb-5 rounded-lg bg-orange-100 px-4 py-3 text-sm font-medium text-orange-700">
          Dopyt na produkt: {prefillProduct}
        </div>
      )}
      <input type="hidden" name="product" value={prefillProduct} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Meno a priezvisko" htmlFor="c-name">
          <input id="c-name" name="name" type="text" required placeholder="Vaše meno" className={inputClass} />
        </Field>
        <Field label="Telefónne číslo" htmlFor="c-phone">
          <input id="c-phone" name="phone" type="tel" required placeholder="+421 9xx xxx xxx" className={inputClass} />
        </Field>
      </div>

      <Field label="Požadovaná služba" htmlFor="c-service" className="mt-5">
        <select
          id="c-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClass}
        >
          {services.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Popis požiadavky" htmlFor="c-message" className="mt-5">
        <textarea
          id="c-message"
          name="message"
          rows={4}
          placeholder="Napíšte nám krátko o vašom projekte alebo otázke"
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-orange-500 px-6 py-3.5 text-center text-[0.95rem] font-semibold text-white transition-colors hover:bg-orange-600"
      >
        Odoslať e-mailom
      </button>
      <p className="mt-3 text-center text-sm text-ink-faint">
        alebo napíšte priamo cez{" "}
        <a href={site.whatsapp} target="_blank" rel="noopener" className="font-medium text-navy-900 underline">
          WhatsApp
        </a>
      </p>
      <p className="mt-4 text-xs text-ink-faint">
        Vaše údaje nezdieľame s žiadnou treťou stranou. Pozrite si{" "}
        <a href="/ochrana-osobnych-udajov" className="underline">
          Zásady ochrany osobných údajov
        </a>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-line bg-gray-50 px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-navy-600";

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
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}
