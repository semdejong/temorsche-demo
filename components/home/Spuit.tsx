import Link from "next/link";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";

const points = [
  "Minder spuitnevel, strak en streeploos",
  "Laagdikte gelijk aan twee arbeidsgangen",
  "Snellere droging",
  "Geen rollerstructuur of kwaststrepen",
  "Deuren, kozijnen, radiatoren en trappen",
];

export default function Spuit() {
  return (
    <section data-section="spuitwerk" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-2">
      <div>
        <p className="caption">Techniek</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">Spuitwerk met TempSpray</h2>
        <Stroke />
        <p className="mt-5">
          Met de TempSpray wordt de verf verwarmd. Hij wordt dunner, zodat je met minder druk kunt vernevelen. Het resultaat droogt strak en streeploos op.
        </p>
        <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {points.map((point) => (
            <li key={point} className="py-3 font-semibold">
              {point}
            </li>
          ))}
        </ul>
        <Link href="/diensten/spuitwerk" className="btn btn-line mt-6">
          Meer over spuitwerk
        </Link>
      </div>
      <Photo
        src="/fotos/img_7275.jpg"
        alt="Strak geschilderde schuiframen met roeden en luiken"
        width={2000}
        height={1333}
        sizes="(max-width: 1024px) 100vw, 540px"
        caption="Kozijnen en ramen — werk voor TempSpray"
      />
    </section>
  );
}
