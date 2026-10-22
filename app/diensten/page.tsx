import type { Metadata } from "next";
import Link from "next/link";
import CloseBand from "@/components/pages/CloseBand";
import Shell from "@/components/site/Shell";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";
import { services } from "@/lib/services";
import { swatches } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Schilderwerk, spuitwerk, glasservice, kleuradvies en behang. Voor woningen, bedrijven en restauratie in Beltrum en Lochem.",
};

const audiences = [
  {
    title: "Voor je huis",
    text: "Een nieuwe uitstraling van jullie woonkamer, je verbouwde keuken of een onderhoudsbeurt aan de woning.",
  },
  {
    title: "Voor bedrijf en overheid",
    text: "We zijn regelmatig aan het werk bij bedrijven en overheidsinstellingen, van kantoor tot groter gebouw.",
  },
  {
    title: "Voor een monument",
    text: "Ruime ervaring met schilderwerk bij nieuwbouw, verbouw en restauratie, waaronder Kasteel Middachten.",
  },
];

export default function DienstenPage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
        <p className="caption">Schakel ons in</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">Thuis in het hele werk</h1>
        <Stroke />
        <p className="mt-5 max-w-2xl text-lg">
          Voor schilder-, behang-, glas- en spuitwerk ben je bij Schildersbedrijf Te Morsche aan het juiste adres. Graag denken we met je mee.
        </p>
      </section>

      <section data-section="voor-wie" className="border-y border-ink/10">
        <ul className="mx-auto grid max-w-6xl md:grid-cols-3">
          {audiences.map((item, index) => (
            <li key={item.title} className="border-ink/10 px-5 py-8 md:border-l md:first:border-l-0">
              <p className="caption">0{index + 1}</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold">{item.title}</h2>
              <p className="mt-3 text-taupe-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="overzicht" className="mx-auto grid max-w-6xl gap-16 px-5 py-16 md:px-6">
        {services.map((service, index) => {
          const swatch = swatches.find((item) => item.href.endsWith(service.slug));
          const photo = service.photos[0];
          const flip = index % 2 === 1;
          return (
            <article key={service.slug} className="grid items-center gap-6 lg:grid-cols-2">
              <div className={flip ? "lg:order-2" : ""}>
                {photo && (
                  <Photo src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} caption={photo.caption} sizes="(max-width: 1024px) 100vw, 560px" />
                )}
              </div>
              <div className={flip ? "lg:order-1" : ""}>
                <span className="mb-4 block h-2 w-16" style={{ background: swatch?.swatch ?? "#202060" }} aria-hidden />
                <h2 className="font-display text-3xl font-extrabold md:text-4xl">{service.name}</h2>
                <p className="mt-3 text-taupe-text">{service.lede}</p>
                <Link href={`/diensten/${service.slug}`} className="btn btn-line mt-6">
                  {service.name} bekijken
                </Link>
              </div>
            </article>
          );
        })}
        <article className="grid items-center gap-6 bg-ink p-6 text-paper md:p-10 lg:grid-cols-2">
          <div>
            <p className="caption text-paper/70">Erfgoed</p>
            <h2 className="mt-2 font-serif text-4xl">Monumenten & restauratie</h2>
            <p className="mt-4 text-paper/85">
              Gecertificeerd in Kennis & Kunde sinds 2015. Specialistisch schilderwerk aan Kasteel Middachten en schilderwerk en beglazing bij Kasteel Reuversweerd.
            </p>
            <Link href="/monumenten-en-restauratie" className="btn mt-6 bg-paper text-ink hover:bg-white">
              Naar monumenten
            </Link>
          </div>
          <p className="font-serif text-2xl leading-snug md:text-3xl">
            Juist bij monumenten telt kennis van historische constructies, technieken en materialen.
          </p>
        </article>
      </section>
      <CloseBand />
    </Shell>
  );
}
