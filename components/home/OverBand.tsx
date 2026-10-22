import Link from "next/link";
import Photo from "@/components/ui/Photo";

export default function OverBand() {
  return (
    <section data-section="over" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-2">
      <Photo
        src="/fotos/img_2039.jpg"
        alt="Schilder op een ladder aan het werk bij een raam met luiken"
        width={1024}
        height={768}
        sizes="(max-width: 1024px) 100vw, 540px"
        caption="Aan het werk bij een raam met luiken"
      />
      <div>
        <p className="caption">Over Te Morsche</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Sinds 1999 in Beltrum</h2>
        <p className="mt-4">
          Eigenaar Raimond te Morsche startte in 1999 met het schildersbedrijf in Beltrum. Begin 2017 opende hij een vestiging in Lochem.
        </p>
        <p className="mt-3 text-taupe-text">
          In 2003 is Te Morsche opgenomen in het Register van Erkende Leerbedrijven bij Savantis, vakcentrum Afbouw en Onderhoud.
        </p>
        <Link href="/over-ons" className="btn btn-line mt-6">
          Over het bedrijf
        </Link>
      </div>
    </section>
  );
}
