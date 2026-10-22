import Image from "next/image";
import Link from "next/link";

export default function Kennis() {
  return (
    <section data-section="kennis-kunde" className="border-y border-ink/10 bg-muted">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-12 md:px-6 md:py-20">
        <div className="md:col-span-3">
          <Image
            src="/fotos/stempel.jpg"
            alt="Stempel van de kwaliteitsregeling Kennis en Kunde"
            width={290}
            height={201}
            sizes="220px"
            className="h-auto w-44 bg-white p-3"
          />
        </div>
        <div className="md:col-span-9">
          <p className="caption">Sinds 2015</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">Kwaliteitsregeling Kennis & Kunde</h2>
          <blockquote className="mt-4 max-w-3xl border-l-2 border-[#E02020] pl-4 font-serif text-xl leading-snug md:text-2xl">
            Gecertificeerde bedrijven kunnen zich onderscheiden van collega’s met minder of geen kennis en kunde van bijvoorbeeld de historische kenmerken en waarden van een monument.
          </blockquote>
          <p className="mt-4 max-w-3xl text-taupe-text">
            De regeling is ontwikkeld op initiatief van de provincie Gelderland, samen met Monumentenwacht, kenniscentra, restauratiedeskundigen en bouwbedrijven. We zijn sinds 2015 gecertificeerd.
          </p>
          <Link href="/monumenten-en-restauratie" className="btn btn-line mt-6">
            Wat de regeling betekent
          </Link>
        </div>
      </div>
    </section>
  );
}
