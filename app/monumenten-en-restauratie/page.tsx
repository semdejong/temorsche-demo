import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Shell from "@/components/site/Shell";
import Photo, { PhotoFrame } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Monumenten en restauratie",
  description:
    "Monumentaal schilderwerk en beglazing. Kennis & Kunde sinds 2015. Kasteel Middachten en Kasteel Reuversweerd.",
};

export default function MonumentenPage() {
  return (
    <Shell>
      <section data-section="intro" className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-14 md:px-10 md:py-20">
          <p className="caption">Restauratie</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">Monumenten en restauratie</h1>
          <p className="mt-5 max-w-xl text-lg">
            Monumentaal schilderwerk en beglazing. Sinds 2015 gecertificeerd in de kwaliteitsregeling Kennis & Kunde.
          </p>
        </div>
        <PhotoFrame
          src="/fotos/img_7261.jpg"
          alt="Kasteel Middachten, lang bouwwerk met dakkapellen en geschilderde luiken"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-80 lg:h-auto lg:min-h-[28rem]"
        />
      </section>

      <section data-section="kennis-kunde" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-12 md:px-6">
        <div className="md:col-span-4">
          <Image
            src="/fotos/stempel.jpg"
            alt="Stempel van de kwaliteitsregeling Kennis en Kunde"
            width={290}
            height={201}
            sizes="280px"
            className="h-auto w-56 bg-white p-3"
          />
        </div>
        <div className="md:col-span-8">
          <h2 className="font-serif text-3xl md:text-4xl">Kennis & Kunde</h2>
          <p className="mt-4">
            De kwaliteitsregeling Kennis & Kunde is in het leven geroepen om de kwaliteit van restauratiewerk te bevorderen en om de kans op werk van onvoldoende kwaliteit zo klein mogelijk te maken. Juist bij monumenten gaat er, ondanks goede bedoelingen, nogal eens wat mis bij onderhoud en renovatie. Bijvoorbeeld doordat er niet voldoende rekening wordt gehouden met historische constructies, technieken en materialen.
          </p>
          <p className="mt-3 text-taupe-text">
            We zijn sinds 2015 gecertificeerd. De regeling is ontwikkeld op initiatief van de provincie Gelderland en opgesteld in samenwerking met Monumentenwacht, kenniscentra, restauratiedeskundigen en bouwbedrijven. We willen hiermee laten zien dat we ons vak verstaan en kwaliteit leveren.
          </p>
          <blockquote className="mt-6 border-l-2 border-[#E02020] pl-4 font-serif text-xl leading-snug">
            Gecertificeerde bedrijven kunnen zich onderscheiden van collega’s met minder of geen kennis en kunde van bijvoorbeeld de historische kenmerken en waarden van een monument. Bedrijven die hebben aangetoond dat zij aan uiteenlopende kwaliteitseisen voldoen en serieus werk maken van opleiden van vaklieden, worden opgenomen per discipline in dit register.
          </blockquote>
          <p className="caption mt-3">Website van Kennis en Kunde</p>
        </div>
      </section>

      <section id="middachten" data-section="middachten" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6">
          <h2 className="font-serif text-4xl md:text-5xl">Kasteel Middachten</h2>
          <p className="mt-4 max-w-3xl">
            Kasteel Middachten in het Nederlandse dorp De Steeg (gemeente Rheden) is één van de projecten waar Schildersbedrijf Te Morsche specialistisch schilderwerk heeft uitgevoerd. Het kasteel, omgeven door landgoed Middachten, is een rijksbeschermde historische buitenplaats met 40 complexnummers.
          </p>
          <p className="mt-3 text-taupe-text">Kasteel Middachten was te zien in MAX Monumentaal op 8 oktober 2013.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Photo src="/fotos/img_7263.jpg" alt="Lange gevel van Kasteel Middachten" width={2000} height={1333} sizes="(max-width: 768px) 100vw, 50vw" caption="Kasteel Middachten, De Steeg" />
            <Photo src="/fotos/img_7283.jpg" alt="Kasteel Middachten met gracht en tuin" width={2000} height={1333} sizes="(max-width: 768px) 100vw, 50vw" caption="Gracht en tuin" />
            <Photo src="/fotos/img_7270.jpg" alt="Geschilderde kozijnen en luiken van Kasteel Middachten" width={2000} height={1334} sizes="(max-width: 768px) 100vw, 50vw" caption="Kozijnen en luiken" />
            <Photo src="/fotos/img_7282.jpg" alt="Lange gevelzijde van Kasteel Middachten" width={2000} height={1333} sizes="(max-width: 768px) 100vw, 50vw" caption="De lange gevel" />
            <div className="md:col-span-2">
              <Photo src="/fotos/img_7265.jpg" alt="Geschilderde kozijnen van Kasteel Middachten" width={2000} height={1333} sizes="(max-width: 768px) 100vw, 1100px" caption="Geschilderde kozijnen" />
            </div>
          </div>
          <Link href="/projecten" className="btn btn-line mt-8">
            Alle projectfoto’s
          </Link>
        </div>
      </section>

      <section data-section="reuversweerd" className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <h2 className="font-serif text-4xl md:text-5xl">Kasteel Reuversweerd</h2>
          <div>
            <p className="text-lg text-paper/90">Restauratieproject Kasteel Reuversweerd — schilderwerk en beglazing.</p>
            <p className="mt-4 text-paper/75">
              Het project vroeg om schilderwerk en om beglazing, naast het specialistische werk aan Kasteel Middachten.
            </p>
            <Link href="/offerte" data-cta="offerte" className="btn mt-8 bg-paper text-ink hover:bg-white">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
