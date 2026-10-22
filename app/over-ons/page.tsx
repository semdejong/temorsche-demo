import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/site/Shell";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Schildersbedrijf Te Morsche, gestart in 1999 in Beltrum door Raimond te Morsche. Vestiging Lochem sinds 2017.",
};

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
            In de loop van de jaren breidde hij het bedrijf uit met materialen zoals steigers, hoogwerkers en bedrijfswagens. In 2003 is Te Morsche opgenomen in het Register van Erkende Leerbedrijven bij Savantis, vakcentrum Afbouw en Onderhoud.
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

      <section data-section="materieel" className="border-t border-ink/10 bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6">
          <h2 className="font-display text-3xl font-extrabold">Waar we mee werken</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {materieel.map((item) => (
              <li key={item} className="border border-ink/10 bg-paper px-4 py-4 font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="erkend" className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:px-6">
        <article className="border border-ink/10 p-6">
          <p className="caption">2003</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold">Erkend Leerbedrijf</h2>
          <p className="mt-3 text-taupe-text">
            Opgenomen in het Register van Erkende Leerbedrijven bij Savantis, vakcentrum Afbouw en Onderhoud.
          </p>
        </article>
        <article className="border border-ink/10 p-6">
          <p className="caption">2015</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold">Kennis & Kunde</h2>
          <p className="mt-3 text-taupe-text">
            Gecertificeerd voor restauratiewerk aan monumenten. De regeling komt van de provincie Gelderland.
          </p>
          <Link href="/monumenten-en-restauratie" className="mt-4 inline-flex min-h-11 items-center font-semibold underline">
            Lees over de regeling
          </Link>
        </article>
      </section>
    </Shell>
  );
}
