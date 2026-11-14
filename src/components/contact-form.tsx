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

type Channel = "whatsapp" | "email";

export function ContactForm() {
  const [channel, setChannel] = useState<Channel>("whatsapp");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const lines = [
      "Dobrý deň, mám záujem o cenovú ponuku.",
      `Meno: ${get("name")}`,
      `Telefón: ${get("phone")}`,
      `Obec / mesto: ${get("city")}`,
      `Služba: ${get("service")}`,
      get("message") ? `Popis: ${get("message")}` : null,
    ].filter(Boolean);
    const text = lines.join("\n");

    track("odoslanie_dopytu", { kanal: channel, sluzba: get("service") });

    if (channel === "whatsapp") {
      window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Dopyt z webu – ${get("service")}`
      )}&body=${encodeURIComponent(text)}`;
    }
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

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          onClick={() => setChannel("whatsapp")}
          className="rounded-md bg-accent px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          Odoslať cez WhatsApp
        </button>
        <button
          type="submit"
          onClick={() => setChannel("email")}
          className="rounded-md border border-ink/20 px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:border-ink"
        >
          Odoslať e-mailom
        </button>
      </div>
      <p className="mb-0 mt-4 text-sm text-ink-faint">
        Otvorí sa WhatsApp alebo váš e-mail s pripravenou správou — stačí ju odoslať. Ozveme sa {site.responseTime}.
        Údaje používame len na vybavenie dopytu,{" "}
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
