import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ComingSoon({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[28px] border border-line bg-paper p-10 text-center shadow-md sm:p-14">
          <div className="inline-flex items-center rounded-full bg-petrol-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-petrol-800">
            {eyebrow}
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-petrol-950 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-ink-soft">{text}</p>
          <p className="mt-2 text-sm text-ink-faint">
            Táto stránka sa práve pripravuje. Medzitým nás môžete kontaktovať priamo:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`tel:${site.phone}`} variant="accent">
              Zavolať {site.phoneDisplay}
            </Button>
            <Button href="/kontakt" variant="ghost">
              Napísať nám
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
