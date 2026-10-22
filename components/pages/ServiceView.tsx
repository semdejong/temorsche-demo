import Link from "next/link";
import Photo, { PhotoFrame } from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";
import CloseBand from "@/components/pages/CloseBand";
import { site, swatches } from "@/lib/site";
import type { Service } from "@/lib/services";

const labels: Record<string, string[]> = {
  schilderwerk: [
    "Woning, bedrijfspand of gebouw",
    "Bescherming tegen regen, wind en zon",
    "Kozijn, deur en gesausd plafond",
  ],
  spuitwerk: ["Verwarmde verf, minder spuitnevel", "Strak en streeploos", "Ook airless op lastige muren"],
  glasservice: ["Enkel of dubbel, op maat", "Kantoor of complete woning", "Vraag naar de subsidiemogelijkheden"],
  kleuradvies: ["Elke kleur uit de mengmachine", "Producten van Herfst en Helder", "Kleurenwaaier mee naar huis"],
  behang: ["Bouwbehang in nieuwbouw", "Decoratieve wandafwerking", "Glasweefsel in vele varianten"],
};

export default function ServiceView({ service }: { service: Service }) {
  const swatch = swatches.find((item) => item.href.endsWith(`/${service.slug}`));
  const color = swatch?.swatch ?? "#202060";
  const [lead, ...rest] = service.photos;
  const chips = labels[service.slug] ?? [];
  const others = swatches.filter((item) => item.href !== swatch?.href);

  return (
    <>
      <section data-section="intro" className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center border-l-[10px] px-5 py-14 md:px-10 md:py-20" style={{ borderLeftColor: color }}>
          <p className="caption">Diensten</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-6xl">{service.name}</h1>
          <Stroke />
          <p className="mt-5 max-w-xl text-lg">{service.lede}</p>
        </div>
        {lead && (
          <figure>
            <PhotoFrame src={lead.src} alt={lead.alt} sizes="(max-width: 1024px) 100vw, 50vw" className="h-72 lg:h-[26rem]" />
            <figcaption className="caption px-5 py-3">{lead.caption}</figcaption>
          </figure>
        )}
      </section>

      {chips.length > 0 && (
        <section data-section="kenmerken" className="border-y border-ink/10">
          <ul className="mx-auto grid max-w-6xl sm:grid-cols-3">
            {chips.map((chip) => (
              <li key={chip} className="border-ink/10 px-5 py-6 sm:border-l first:border-l-0">
                <span className="mb-3 block h-2 w-14" style={{ background: color }} aria-hidden />
                <p className="font-display text-xl font-extrabold leading-tight">{chip}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section data-section="uitleg" className={`mx-auto grid gap-10 px-5 py-14 md:px-6 ${rest.length ? "max-w-6xl lg:grid-cols-2" : "max-w-3xl"}`}>
        <div className="grid content-start gap-8">
          {service.blocks.map((block) => (
            <div key={block.title ?? block.text[0]}>
              {block.title && <h2 className="font-display text-2xl font-extrabold">{block.title}</h2>}
              {block.text.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-taupe-text">{paragraph}</p>
              ))}
            </div>
          ))}
          {service.lists?.map((list) => (
            <div key={list.title}>
              <h2 className="font-display text-2xl font-extrabold">{list.title}</h2>
              <ol className="mt-4 grid gap-2">
                {list.items.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2 border-b border-ink/10 py-2">
                    <span className="font-display text-sm font-bold text-ink">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
          {service.slug === "glasservice" && (
            <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="btn btn-line self-start">
              Glas bestellen via VITRISnet
              <span className="sr-only"> (opent in een nieuw venster)</span>
            </a>
          )}
        </div>
        <div className="grid content-start gap-6">
          {rest.map((photo) => (
            <Photo key={photo.src} src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} caption={photo.caption} sizes="(max-width: 1024px) 100vw, 540px" />
          ))}
        </div>
      </section>

      <section data-section="meer" className="border-t border-ink/10 bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-6">
          <p className="caption">Ook in huis</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
            {others.map((item, index) => (
              <li key={item.href} className={index === others.length - 1 ? "col-span-2 md:col-span-1" : ""}>
                <Link href={item.href} className="flex min-h-24 flex-col border border-ink/10 bg-paper">
                  <span className="h-3" style={{ background: item.swatch }} aria-hidden />
                  <span className="px-3 py-3 font-display font-extrabold">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CloseBand text={`${service.name}: eerst de wensen, dan het werk. Bel of mail voor een afspraak.`} />
    </>
  );
}
