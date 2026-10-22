import type { Metadata } from "next";
import Link from "next/link";
import CloseBand from "@/components/pages/CloseBand";
import Shell from "@/components/site/Shell";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Schildersbedrijf Te Morsche, gestart in 1999 in Beltrum door Raimond te Morsche. Vestiging Lochem sinds 2017.",
};

const marks = [
  { year: "1999", place: "Beltrum", text: "Raimond te Morsche start het schildersbedrijf.", color: "#202060" },
  { year: "2003", place: "Savantis", text: "Opgenomen als Erkend Leerbedrijf, vakcentrum Afbouw en Onderhoud.", color: "#409040" },
  { year: "2015", place: "Gelderland", text: "Gecertificeerd in de kwaliteitsregeling Kennis & Kunde.", color: "#F0C030" },
  { year: "2017", place: "Lochem", text: "De tweede vestiging gaat open.", color: "#E02020" },
];

const materieel = ["Steigers", "Hoogwerkers", "Ladders", "Verfspuiten", "Glasweefselmachines", "Verfmengmachine", "Bedrijfswagens"];

export default function OverPage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <p className="caption">Het bedrijf</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold md:text-6xl">Over Te Morsche</h1>
          <Stroke />
          <p className="mt-5 text-lg">
            Eigenaar Raimond te Morsche startte in 1999 met het schildersbedrijf in Beltrum. Begin 2017 opende hij een vestiging in Lochem.
          </p>
          <p className="mt-3 text-taupe-text">
            In de loop van de jaren breidde hij het bedrijf uit met materialen zoals steigers, hoogwerkers en bedrijfswagens.
          </p>
        </div>
        <Photo
          src="/fotos/img_2039.jpg"
          alt="Schilder op een ladder aan het werk bij een raam met luiken"
          width={1024}
          height={768}
          sizes="(max-width: 1024px) 100vw, 540px"
          caption="Aan het werk bij een raam met luiken"
        />
      </section>

      <section data-section="jaren" className="border-y border-ink/10 bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6">
          <h2 className="font-display text-3xl font-extrabold">Vier momenten</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {marks.map((mark) => (
              <li key={mark.year} className="border-t-4 bg-paper p-4" style={{ borderTopColor: mark.color }}>
                <p className="font-display text-3xl font-extrabold">{mark.year}</p>
                <p className="caption mt-2">{mark.place}</p>
                <p className="mt-2 text-sm text-taupe-text">{mark.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-section="aanpak" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:px-6 lg:grid-cols-2">
        <blockquote className="font-serif text-2xl leading-snug md:text-3xl">
          Advies en werk op maat is ons belangrijkste speerpunt. Goed overleg, en vooraf weten wat de wensen zijn, is de basis om aan de slag te gaan.
        </blockquote>
        <Photo
          src="/fotos/img_7455.jpg"
          alt="Kleurenmengmachine aan de toonbank in de werkplaats"
          width={2000}
          height={1333}
          sizes="(max-width: 1024px) 100vw, 540px"
          caption="Kleurenmengmachine in de werkplaats"
        />
      </section>

      <section data-section="materieel" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6">
          <h2 className="font-display text-3xl font-extrabold">Waar we mee werken</h2>
          <p className="mt-3 max-w-2xl text-taupe-text">
            Voor het werk staan onder andere steigers, spuitapparatuur en een eigen verfmengmachine klaar.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {materieel.map((item) => (
              <li key={item} className="flex min-h-14 items-center gap-3 border border-ink/10 px-4 font-semibold">
                <span className="h-6 w-1.5 bg-ink" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="erkend" className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 md:grid-cols-2 md:px-6">
        <article className="border border-ink/10 p-6">
          <p className="caption">2003</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold">Erkend Leerbedrijf</h2>
          <p className="mt-3 text-taupe-text">
            Opgenomen in het Register van Erkende Leerbedrijven bij Savantis, vakcentrum Afbouw en Onderhoud.
          </p>
        </article>
        <article className="border border-ink/10 p-6">
          <p className="caption">2015</p>
          <h2 className="mt-2 font-serif text-2xl">Kennis & Kunde</h2>
          <p className="mt-3 text-taupe-text">
            Gecertificeerd voor restauratiewerk aan monumenten, op initiatief van de provincie Gelderland.
          </p>
          <Link href="/monumenten-en-restauratie" className="mt-4 inline-flex min-h-11 items-center font-semibold underline">
            Lees over de regeling
          </Link>
        </article>
      </section>
      <CloseBand title="Twee vestigingen, één bedrijf" text="Beltrum en Lochem. Bel de vestiging bij jou in de buurt, of mail voor een afspraak." />
    </Shell>
  );
}
