export function SectionHead({
  eyebrow,
  title,
  text,
  as = "h2",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  as?: "h1" | "h2";
  light?: boolean;
}) {
  const Heading = as;
  return (
    <div className="max-w-2xl">
      {eyebrow && as === "h1" && <div className={light ? "label-light" : "label-accent"}>{eyebrow}</div>}
      <Heading
        className={`${eyebrow && as === "h1" ? "mt-3" : ""} ${
          as === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"
        } ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </Heading>
      {text && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-ink-soft"}`}>{text}</p>}
    </div>
  );
}
