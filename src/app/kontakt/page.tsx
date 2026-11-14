import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHead } from "@/components/section-head";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Klimaro – montáž, predaj a servis klimatizácií a tepelných čerpadiel v Košiciach a okolí. Zavolajte, napíšte e-mail alebo vyplňte formulár.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <section className="py-20">
      <Container>
        <Breadcrumbs items={[{ label: "Domov", href: "/" }, { label: "Kontakt", href: "/kontakt" }]} />
        <SectionHead
          as="h1"
          eyebrow="Kontakt"
          title="Kontakt a cenová ponuka"
          text="Napíšte, čo riešite, alebo rovno zavolajte. Ozveme sa a dohodneme obhliadku."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6 rounded-2xl border border-line bg-gray-50 p-8">
            <h2 className="text-xl font-bold text-navy-950">Kontaktné údaje</h2>
            <ContactInfoRow label="Zavolajte nám" value={site.phoneDisplay} href={`tel:${site.phone}`} />
            <ContactInfoRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
            <ContactInfoRow label="Pôsobisko" value={`${site.areaShort}, po dohode celé Slovensko`} />
            <ContactInfoRow label="Prevádzková doba" value={site.hours} />
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}

function ContactInfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div>
      <div className="text-sm text-ink-faint">{label}</div>
      <div className="mt-0.5 text-[0.95rem] font-medium text-navy-950">{value}</div>
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
