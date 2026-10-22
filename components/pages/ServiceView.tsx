import Link from "next/link";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";
import { site } from "@/lib/site";
import type { Service } from "@/lib/services";

export default function ServiceView({ service }: { service: Service }) {
  return (
    <>
      <section data-section="intro" className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
        <p className="caption">Diensten</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-6xl">{service.name}</h1>
        <Stroke />
        <p className="mt-5 max-w-2xl text-lg">{service.lede}</p>
      </section>

      <section data-section="uitleg" className="mx-auto grid max-w-6xl gap-10 px-5 pb-8 md:px-6 lg:grid-cols-2">
        <div className="grid gap-8">
          {service.blocks.map((block) => (
            <div key={block.title ?? block.text[0]}>
              {block.title && <h2 className="font-display text-2xl font-extrabold">{block.title}</h2>}
              {block.text.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-taupe-text">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          {service.lists?.map((list) => (
            <div key={list.title}>
              <h2 className="font-display text-2xl font-extrabold">{list.title}</h2>
              <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
                {list.items.map((item) => (
                  <li key={item} className="py-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {service.slug === "glasservice" && (
            <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="btn btn-line self-start">
              Glas bestellen via VITRISnet
              <span className="sr-only"> (opent in een nieuw venster)</span>
            </a>
          )}
        </div>
        <div className="grid gap-6">
          {service.photos.map((photo) => (
            <Photo
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              caption={photo.caption}
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          ))}
        </div>
      </section>

      <section data-section="vervolg" className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 py-12 md:px-6">
        <Link href="/offerte" data-cta="offerte" className="btn btn-ink">
          Offerte aanvragen
        </Link>
        <Link href="/diensten" className="btn btn-line">
          Alle diensten
        </Link>
      </section>
    </>
  );
}
