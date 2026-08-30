"use client";

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
  const [service, setService] = useState(services[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const message = form.get("message");

    const text = [
      `Dobrý deň, volám sa ${name}.`,
      `Mám záujem o: ${service}.`,
      message ? `Popis: ${message}.` : null,
      `Telefón: ${phone}.`,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[20px] border border-line bg-paper p-8 shadow-md">
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
        className="mt-6 w-full rounded-full bg-terracotta-500 px-6 py-3.5 text-center text-[0.95rem] font-semibold text-white transition-colors hover:bg-terracotta-600"
      >
        Odoslať cez WhatsApp
      </button>
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
  "w-full rounded-xl border border-line bg-cream/40 px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-petrol-600";

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
