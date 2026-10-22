import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ServiceView from "@/components/pages/ServiceView";
import Shell from "@/components/site/Shell";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Shell>
      <Suspense fallback={<p className="px-5 py-16">De pagina wordt geladen.</p>}>
        <ServiceBody params={params} />
      </Suspense>
    </Shell>
  );
}

async function ServiceBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceView service={service} />;
}
