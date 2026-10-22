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

const reasons = [
  { title: "Een afspraak", text: "Bel of mail. We spreken een moment af om te kijken en te overleggen." },
  { title: "Een offerte", text: "Vrijblijvend, nadat we weten wat de wensen zijn." },
  { title: "Kleur of glas", text: "Een kleur laten mengen, of glas leveren en plaatsen. Zakelijk bestellen kan via VITRISnet." },
];

export default function ContactPage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <p className="caption">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold md:text-6xl">Bel de vestiging bij jou in de buurt</h1>
          <Stroke />
          <p className="mt-5 text-lg">Twee nummers, twee plaatsen. Beltrum en Lochem. Bel of mail voor een afspraak.</p>
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
        {site.locations.map((location, index) => (
          <article key={location.tel} className="border border-ink/10 bg-white p-6 md:p-8" style={{ borderTop: `6px solid ${index === 0 ? "#202060" : "#409040"}` }}>
            <p className="caption">Vestiging</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold">{location.name}</h2>
            <a href={location.tel} className="mt-4 inline-flex min-h-11 items-center font-display text-3xl font-extrabold underline-offset-4 hover:underline">
              {location.phone}
            </a>
            <p className="mt-3 text-taupe-text">Het nummer van de vestiging in {location.name}.</p>
          </article>
        ))}
      </section>

      <section data-section="waarvoor" className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-3 md:px-6">
        {reasons.map((reason) => (
          <article key={reason.title}>
            <h2 className="font-display text-2xl font-extrabold">{reason.title}</h2>
            <p className="mt-2 text-taupe-text">{reason.text}</p>
          </article>
        ))}
      </section>

      <section data-section="glas" className="border-y border-ink/10 bg-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="max-w-xl">Zakelijk glas bestellen doe je in de bestaande VITRISnet-omgeving.</p>
          <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
            Glas bestellen
            <span className="sr-only"> (opent in een nieuw venster)</span>
          </a>
        </div>
      </section>

      <section data-section="formulier" className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold">Mail ons</h2>
          <a href={site.mailto} className="mt-3 inline-flex min-h-11 items-center text-lg font-semibold underline">
            {site.email}
          </a>
          <p className="mt-3 text-taupe-text">
            Een kort bericht kan hier. Voor soort werk, plaats en foto’s is het offerteformulier duidelijker.
          </p>
          <Link href="/offerte" data-cta="offerte" className="btn btn-line mt-5">
            Naar het offerteformulier
          </Link>
        </div>
        <OfferteForm variant="short" />
      </section>
    </Shell>
  );
}
