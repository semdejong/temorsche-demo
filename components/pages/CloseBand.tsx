import Link from "next/link";
import { site } from "@/lib/site";

export default function CloseBand({
  title = "Eerst overleg, dan het werk",
  text = "Neem contact op voor advies op maat, een vrijblijvende offerte of een afspraak.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section data-section="vervolg" className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="mt-3 text-paper/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/offerte" data-cta="offerte" className="btn bg-paper text-ink hover:bg-white">
            Offerte aanvragen
          </Link>
          <a href={site.mailto} className="btn border border-paper/50 text-paper">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
