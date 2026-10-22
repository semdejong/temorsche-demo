import Image from "next/image";
import Link from "next/link";
import { houseLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-section="footer" className="mt-auto border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4 md:px-6">
        <div>
          <Image src="/logo-te-morsche.png" alt="Te Morsche" width={444} height={153} sizes="160px" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-taupe-text">Schildersbedrijf in Beltrum en Lochem.</p>
        </div>
        <div>
          <p className="caption">Diensten</p>
          <ul className="mt-3 grid gap-1.5">
            {houseLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/monumenten-en-restauratie" className="inline-flex min-h-11 items-center hover:underline">
                Monumenten & restauratie
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="caption">Bellen</p>
          <ul className="mt-3 grid gap-2">
            {site.locations.map((location) => (
              <li key={location.tel}>
                <a href={location.tel} className="inline-flex min-h-11 flex-col justify-center leading-tight">
                  <span className="text-xs uppercase tracking-widest text-taupe-text">{location.name}</span>
                  <span className="font-semibold">{location.phone}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="caption">Mail en glas</p>
          <a href={site.mailto} className="mt-3 inline-flex min-h-11 items-center font-semibold hover:underline">
            {site.email}
          </a>
          <a href={site.vitris} target="_blank" rel="noopener noreferrer" className="mt-1 flex min-h-11 items-center hover:underline">
            Glas bestellen
            <span className="sr-only"> (opent in een nieuw venster)</span>
          </a>
          <Link href="/offerte" data-cta="offerte" className="btn btn-ink mt-3">
            Offerte aanvragen
          </Link>
        </div>
      </div>
      <p className="border-t border-ink/10 px-5 py-4 text-sm text-taupe-text md:px-6">
        Schildersbedrijf Te Morsche · Beltrum en Lochem
      </p>
    </footer>
  );
}
