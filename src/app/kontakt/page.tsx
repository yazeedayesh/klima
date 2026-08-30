import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Montex – montáž, predaj a servis klimatizácií v Košiciach a okolí. Zavolajte, napíšte alebo vyplňte formulár a ozveme sa cez WhatsApp.",
};

export default function KontaktPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full bg-petrol-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-petrol-800">
            Kontakt
          </div>
          <h1 className="mt-5 text-3xl font-semibold text-petrol-950 sm:text-4xl">
            Pripravení chladiť váš priestor
          </h1>
          <p className="mt-4 text-ink-soft">
            Vyplňte formulár a ozveme sa vám cez WhatsApp, alebo nás kontaktujte priamo telefonicky či e-mailom.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6 rounded-[20px] border border-line bg-paper p-8 shadow-md">
            <h2 className="text-xl font-semibold text-petrol-950">Kontaktné údaje</h2>
            <ContactInfoRow label="Zavolajte nám" value={site.phoneDisplay} href={`tel:${site.phone}`} />
            <ContactInfoRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
            <ContactInfoRow label="Pôsobisko" value={`${site.areaShort}, po dohode celé Slovensko`} />
            <ContactInfoRow label="Prevádzková doba" value={site.hours} />
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactInfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</div>
      <div className="mt-0.5 text-[0.95rem] font-medium text-petrol-950">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
