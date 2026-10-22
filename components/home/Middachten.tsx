import Link from "next/link";
import Photo from "@/components/ui/Photo";

export default function Middachten() {
  return (
    <section data-section="middachten" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Photo
          src="/fotos/img_7283.jpg"
          alt="Kasteel Middachten met gracht en tuin"
          width={2000}
          height={1333}
          sizes="(max-width: 1024px) 100vw, 640px"
          caption="Kasteel Middachten, De Steeg"
        />
      </div>
      <div className="lg:col-span-5">
        <p className="caption">Uitgelicht project</p>
        <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">Kasteel Middachten</h2>
        <p className="mt-4">
          Kasteel Middachten in het dorp De Steeg (gemeente Rheden) is één van de projecten waar Schildersbedrijf Te Morsche specialistisch schilderwerk heeft uitgevoerd.
        </p>
        <p className="mt-3 text-taupe-text">
          Het kasteel, omgeven door landgoed Middachten, is een rijksbeschermde historische buitenplaats met 40 complexnummers.
        </p>
        <Link href="/monumenten-en-restauratie" className="btn btn-line mt-6">
          Lees over het project
        </Link>
      </div>
    </section>
  );
}
