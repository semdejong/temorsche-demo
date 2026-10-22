import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/site/Shell";
import Stroke from "@/components/ui/Stroke";
import { services } from "@/lib/services";
import { swatches } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Schilderwerk, spuitwerk, glasservice, kleuradvies en behang. Voor woningen, bedrijven en restauratie in Beltrum en Lochem.",
};

export default function DienstenPage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
        <p className="caption">Schakel ons in</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">Diensten</h1>
        <Stroke />
        <p className="mt-5 max-w-2xl text-lg">
          Voor schilder-, behang-, glas- en spuitwerk ben je bij Schildersbedrijf Te Morsche aan het juiste adres. Graag denken we met je mee voor een nieuwe uitstraling van jullie woonkamer, je verbouwde keuken of bij een onderhoudsbeurt aan je woning.
        </p>
        <p className="mt-3 max-w-2xl text-taupe-text">
          Ook zijn we regelmatig aan het werk bij bedrijven en overheidsinstellingen en hebben we ruime ervaring met schilderwerk bij nieuwbouw, verbouw en restauratie.
        </p>
      </section>
      <section data-section="overzicht" className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 md:px-6 md:pb-24">
        {services.map((service) => {
          const swatch = swatches.find((item) => item.href.endsWith(service.slug));
          return (
            <Link key={service.slug} href={`/diensten/${service.slug}`} className="grid gap-4 border border-ink/10 bg-white p-4 sm:grid-cols-[8px_1fr_auto] sm:items-center">
              <span className="hidden h-full min-h-12 sm:block" style={{ background: swatch?.swatch ?? "#202060" }} aria-hidden />
              <span>
                <span className="font-display text-2xl font-extrabold">{service.name}</span>
                <span className="mt-1 block text-taupe-text">{service.summary}</span>
              </span>
              <span className="text-sm font-semibold">Bekijk</span>
            </Link>
          );
        })}
        <Link href="/monumenten-en-restauratie" className="grid gap-4 border border-ink/10 bg-ink p-4 text-paper sm:grid-cols-[8px_1fr_auto] sm:items-center">
          <span className="hidden h-full min-h-12 bg-[#E02020] sm:block" aria-hidden />
          <span>
            <span className="font-serif text-2xl">Monumenten & restauratie</span>
            <span className="mt-1 block text-paper/80">Kennis & Kunde, Kasteel Middachten en Kasteel Reuversweerd.</span>
          </span>
          <span className="text-sm font-semibold">Bekijk</span>
        </Link>
      </section>
    </Shell>
  );
}
