import Link from "next/link";
import { swatches } from "@/lib/site";
import Stroke from "@/components/ui/Stroke";

export default function Swatches() {
  return (
    <section data-section="diensten" className="relative border-y border-ink/10 py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "url(/textures/paint-texture.jpg)", backgroundSize: "720px" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-6">
        <p className="caption">Kleurstalen</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-extrabold md:text-5xl">Zes soorten werk, één bedrijf</h2>
        <Stroke />
        <ul className="swatch-fan mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {swatches.map((item) => (
            <li key={item.href} className="swatch" style={{ ["--fan" as string]: item.fan }}>
              <Link href={item.href} className="flex h-full min-h-44 flex-col border border-ink/10 bg-paper shadow-sm">
                <span className="h-16 shrink-0" style={{ background: item.swatch }} aria-hidden />
                <span className="flex flex-1 flex-col p-3">
                  <span className="font-display text-lg font-extrabold leading-tight">{item.label}</span>
                  <span className="mt-2 text-sm leading-snug text-taupe-text">{item.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
