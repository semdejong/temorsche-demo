import Link from "next/link";
import OfferteForm from "@/components/forms/OfferteForm";
import { site } from "@/lib/site";

export default function ContactBand() {
  return (
    <section data-section="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-2">
      <div>
        <p className="caption">Contact</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">Vraag een vrijblijvende offerte aan</h2>
        <p className="mt-4 text-taupe-text">
          Neem contact op voor advies op maat, een vrijblijvende offerte of een afspraak. Bel of mail voor een afspraak.
        </p>
        <ul className="mt-6 grid gap-2">
          {site.locations.map((location) => (
            <li key={location.tel}>
              <a href={location.tel} className="inline-flex min-h-11 items-center gap-3 font-semibold">
                <span className="text-taupe-text">{location.name}</span>
                {location.phone}
              </a>
            </li>
          ))}
          <li>
            <a href={site.mailto} className="inline-flex min-h-11 items-center font-semibold underline">
              {site.email}
            </a>
          </li>
        </ul>
        <Link href="/offerte" data-cta="offerte" className="btn btn-line mt-4">
          Naar het offerteformulier
        </Link>
      </div>
      <OfferteForm variant="short" />
    </section>
  );
}
