import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/coming-soon";
import { getServiceBySlug, servicesData } from "@/lib/services-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ComingSoon eyebrow="Služby" title={service.title} text={`${service.intro} Podrobná stránka s cenami a priebehom realizácie sa pripravuje.`} />;
}
