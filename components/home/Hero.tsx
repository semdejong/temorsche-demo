import Link from "next/link";
import CallChoice from "@/components/site/CallChoice";
import { PhotoFrame } from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";

export default function Hero() {
  return (
    <section data-section="hero" className="grid lg:min-h-[calc(100vh-5.5rem)] lg:grid-cols-12">
      <div className="order-2 flex flex-col justify-center px-5 py-12 md:px-8 lg:order-1 lg:col-span-5 lg:py-16">
        <p className="caption">Beltrum en Lochem</p>
        <h1 className="mt-3 max-w-xl font-display text-4xl font-extrabold md:text-5xl">
          Thuis in alle facetten van schilderwerk
        </h1>
        <Stroke />
        <p className="mt-5 max-w-md text-lg">
          Schildersbedrijf Te Morsche in Beltrum en Lochem is thuis in alle facetten van schilderswerkzaamheden:
          binnen- en buitenschilderwerk, spuitwerk en behang- en glaswerk.
        </p>
        <p className="mt-3 max-w-md text-taupe-text">
          Neem contact op voor advies op maat, een vrijblijvende offerte of een afspraak.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/offerte" data-cta="offerte" className="btn btn-ink">
            Vrijblijvende offerte
          </Link>
          <CallChoice label="Bel ons" />
        </div>
      </div>
      <PhotoFrame
        src="/fotos/img_7263.jpg"
        alt="Kasteel Middachten in De Steeg: lang monumentaal bouwwerk met geschilderde kozijnen en luiken"
        sizes="(max-width: 1024px) 100vw, 58vw"
        preload
        className="order-1 h-52 min-h-0 sm:h-[38vh] sm:min-h-56 lg:order-2 lg:col-span-7 lg:h-auto lg:min-h-[32rem]"
      />
    </section>
  );
}
