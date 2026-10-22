import Link from "next/link";
import Shell from "@/components/site/Shell";

export default function NotFound() {
  return (
    <Shell>
      <section data-section="niet-gevonden" className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-4xl font-extrabold">Deze pagina bestaat niet</h1>
        <p className="mt-4 text-taupe-text">Ga terug naar home of vraag een offerte aan.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-line">
            Naar home
          </Link>
          <Link href="/offerte" data-cta="offerte" className="btn btn-ink">
            Offerte aanvragen
          </Link>
        </div>
      </section>
    </Shell>
  );
}
