import { site } from "@/lib/site";

export default function Vestigingen() {
  return (
    <section data-section="vestigingen" className="border-t border-ink/10 bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <p className="caption">Twee vestigingen</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Bel de vestiging bij jou in de buurt</h2>
        <p className="mt-3 max-w-xl text-taupe-text">Bel of mail voor een afspraak.</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {site.locations.map((location, index) => (
            <li key={location.tel} className="border border-ink/10 bg-paper p-6" style={{ borderTop: `4px solid ${index === 0 ? "#202060" : "#409040"}` }}>
              <h3 className="font-display text-3xl font-extrabold">{location.name}</h3>
              <a href={location.tel} className="mt-4 inline-flex min-h-11 items-center font-display text-2xl font-bold underline-offset-4 hover:underline">
                {location.phone}
              </a>
            </li>
          ))}
        </ul>
        <a href={site.mailto} className="mt-6 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
          {site.email}
        </a>
      </div>
    </section>
  );
}
