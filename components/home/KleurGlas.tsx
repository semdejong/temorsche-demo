import Link from "next/link";
import { site } from "@/lib/site";
import Photo from "@/components/ui/Photo";

export default function KleurGlas() {
  return (
    <div className="border-t border-ink/10">
      <section data-section="kleuradvies" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-6 md:py-20 lg:grid-cols-2">
        <Photo
          src="/fotos/img_7455.jpg"
          alt="Kleurenmengmachine aan de toonbank in de werkplaats"
          width={2000}
          height={1333}
          sizes="(max-width: 1024px) 100vw, 540px"
          caption="Eigen kleurenmengmachine"
        />
        <div>
          <p className="caption">Kleur</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Kleuradvies en mengmachine</h2>
          <p className="mt-4">
            Verf of latex in iedere gewenste kleur mengen we in onze eigen kleurenmengmachine. We werken met producten van Herfst en Helder.
          </p>
          <p className="mt-3 text-taupe-text">Neem gerust een kleurenwaaier mee om rustig te bekijken welke kleur je aanspreekt.</p>
          <Link href="/diensten/kleuradvies" className="btn btn-line mt-6">
            Naar kleuradvies
          </Link>
        </div>
      </section>

      <section data-section="glasservice" className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 md:px-6 md:pb-24 lg:grid-cols-2">
        <div className="lg:order-2">
          <Photo
            src="/fotos/img_7288.jpg"
            alt="Ovaal raam met roeden in baksteen"
            width={2000}
            height={1333}
            sizes="(max-width: 1024px) 100vw, 540px"
            caption="Glas in alle soorten en maten"
          />
        </div>
        <div className="lg:order-1">
          <p className="caption">Glas</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Glasservice</h2>
          <p className="mt-4">
            Glas leveren en plaatsen we in alle soorten en maten. Enkel of dubbel, op maat voor een kantoorpand of een complete woning.
          </p>
          <p className="mt-3 text-taupe-text">Er zijn aantrekkelijke subsidiemogelijkheden. Vraag gerust naar de mogelijkheden.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/diensten/glasservice" className="btn btn-line">
              Naar glasservice
            </Link>
            <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
              Glas bestellen
              <span className="sr-only"> (opent in een nieuw venster)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
