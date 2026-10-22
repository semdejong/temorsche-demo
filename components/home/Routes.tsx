import Link from "next/link";
import { site } from "@/lib/site";
import { PhotoFrame } from "@/components/ui/Photo";

export default function Routes() {
  return (
    <section data-section="routes" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col border border-ink/10 bg-white">
          <PhotoFrame
            src="/fotos/img_7383.jpg"
            alt="Woonhuis met geschilderde kozijnen en luiken"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-56"
          />
          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="caption">Particulier</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Voor je huis</h2>
            <p className="mt-3 text-taupe-text">
              Graag denken we met je mee voor een nieuwe uitstraling van jullie woonkamer, je verbouwde keuken of een onderhoudsbeurt aan je woning.
            </p>
            <ul className="mt-4 grid gap-1 text-sm font-semibold sm:grid-cols-2">
              {["Binnenschilderwerk", "Buitenschilderwerk", "Spuitwerk", "Behang", "Glas", "Kleuradvies"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/diensten" className="btn btn-ink mt-6 self-start">
              Bekijk de diensten
            </Link>
          </div>
        </article>

        <article className="flex flex-col border border-ink/10 bg-ink text-paper">
          <PhotoFrame
            src="/fotos/img_7260.jpg"
            alt="Topgevel met uurwerk van Kasteel Middachten"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-56"
          />
          <div className="flex flex-1 flex-col p-6 md:p-8">
            <p className="caption text-paper/75">Erfgoed</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">Monumenten & restauratie</h2>
            <p className="mt-3 text-paper/85">
              Gecertificeerd in Kennis & Kunde sinds 2015. Specialistisch schilderwerk aan Kasteel Middachten en schilderwerk en beglazing bij Kasteel Reuversweerd.
            </p>
            <Link href="/monumenten-en-restauratie" className="btn mt-6 self-start bg-paper text-ink hover:bg-white">
              Naar monumenten
            </Link>
          </div>
        </article>
      </div>

      <p data-section="zakelijk" className="mt-6 border border-ink/10 px-4 py-4 text-center">
        Zakelijk of glas bestellen?{" "}
        <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
          VITRISnet
          <span className="sr-only"> (opent in een nieuw venster)</span>
        </a>
      </p>
    </section>
  );
}
