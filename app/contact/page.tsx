import type { Metadata } from "next";
import Link from "next/link";
import OfferteForm from "@/components/forms/OfferteForm";
import Shell from "@/components/site/Shell";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel Beltrum of Lochem, of mail info@te-morsche.nl voor een afspraak of een vrijblijvende offerte.",
};

export default function ContactPage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <p className="caption">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold md:text-6xl">Contact met Te Morsche</h1>
          <Stroke />
          <p className="mt-5 text-lg">Bel of mail voor een afspraak. Twee vestigingen, elk met een eigen nummer.</p>
        </div>
        <Photo
          src="/fotos/img_7466.jpg"
          alt="Kantoor van Schildersbedrijf Te Morsche"
          width={2000}
          height={1333}
          sizes="(max-width: 1024px) 100vw, 540px"
          caption="Kantoor"
        />
      </section>

      <section data-section="vestigingen" className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2 md:px-6">
        {site.locations.map((location) => (
          <article key={location.tel} className="border border-ink/10 p-6">
            <h2 className="font-display text-3xl font-extrabold">{location.name}</h2>
            <a href={location.tel} className="mt-3 inline-flex min-h-11 items-center font-display text-2xl font-bold">
              {location.phone}
            </a>
          </article>
        ))}
      </section>

      <section data-section="formulier" className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold">Mail ons</h2>
          <a href={site.mailto} className="mt-3 inline-flex min-h-11 items-center text-lg font-semibold underline">
            {site.email}
          </a>
          <p className="mt-3 text-taupe-text">Voor een uitgebreide aanvraag gebruik je het offerteformulier.</p>
          <Link href="/offerte" data-cta="offerte" className="btn btn-ink mt-5">
            Offerte aanvragen
          </Link>
        </div>
        <OfferteForm variant="short" />
      </section>
    </Shell>
  );
}
