import type { Metadata } from "next";
import OfferteForm from "@/components/forms/OfferteForm";
import FaqList from "@/components/pages/FaqList";
import Shell from "@/components/site/Shell";
import Stroke from "@/components/ui/Stroke";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vrijblijvende offerte",
  description: "Neem contact op voor advies op maat, een vrijblijvende offerte of een afspraak. Beltrum en Lochem.",
};

const steps = [
  { title: "Je vraag", text: "Vertel wat je wilt laten doen: schilderwerk, spuitwerk, behang, glas, kleur of een monument." },
  { title: "Advies op maat", text: "We komen kijken, overleggen en horen vooraf wat de wensen zijn." },
  { title: "Vrijblijvende offerte", text: "Je ontvangt een vrijblijvende offerte, zodat je weet waar je aan toe bent." },
];

export default function OffertePage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
        <p className="caption">Offerte</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">Vraag een vrijblijvende offerte aan</h1>
        <Stroke />
        <p className="mt-5 max-w-2xl text-lg">Neem contact op voor advies op maat, een vrijblijvende offerte of een afspraak.</p>
      </section>

      <section data-section="stappen" className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-6">
        {steps.map((step, index) => (
          <article key={step.title} className="border-t-2 border-ink pt-4">
            <p className="caption">Stap {index + 1}</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold">{step.title}</h2>
            <p className="mt-2 text-taupe-text">{step.text}</p>
          </article>
        ))}
      </section>

      <section data-section="formulier" className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <OfferteForm />
        <aside className="grid content-start gap-6">
          <div data-section="bellen" className="border border-ink/10 bg-muted p-5">
            <h2 className="font-display text-2xl font-extrabold">Liever bellen?</h2>
            <ul className="mt-4 grid gap-3">
              {site.locations.map((location) => (
                <li key={location.tel}>
                  <a href={location.tel} className="flex min-h-11 items-center justify-between font-semibold">
                    <span>{location.name}</span>
                    <span>{location.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={site.mailto} className="mt-2 inline-flex min-h-11 items-center underline">
              {site.email}
            </a>
            <p className="mt-2 text-sm text-taupe-text">Bel of mail voor een afspraak.</p>
          </div>
          <div data-section="zekerheid" className="border border-ink/10 p-5">
            <h2 className="font-display text-2xl font-extrabold">Waar je op kunt rekenen</h2>
            <ul className="mt-4 grid gap-3 text-taupe-text">
              <li>Gecertificeerd in Kennis & Kunde sinds 2015, voor restauratiewerk aan monumenten.</li>
              <li>Sinds 2003 een Erkend Leerbedrijf bij Savantis, vakcentrum Afbouw en Onderhoud.</li>
              <li>Twee vestigingen: Beltrum en Lochem.</li>
            </ul>
          </div>
        </aside>
      </section>
      <FaqList />
    </Shell>
  );
}
