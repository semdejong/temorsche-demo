import type { Metadata } from "next";
import CloseBand from "@/components/pages/CloseBand";
import Shell from "@/components/site/Shell";
import Photo from "@/components/ui/Photo";
import Stroke from "@/components/ui/Stroke";
import { galleries } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Foto’s van schilderwerk, monumenten, interieurs en de werkplaats van Schildersbedrijf Te Morsche.",
};

export default function ProjectenPage() {
  return (
    <Shell>
      <section data-section="intro" className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
        <p className="caption">Werk</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-6xl">Projecten</h1>
        <Stroke />
        <p className="mt-5 max-w-2xl text-lg">
          Een selectie uit het werk: Kasteel Middachten in De Steeg, schilderwerk aan woningen en gebouwen, interieurs, behang en de werkplaats.
        </p>
      </section>
      {galleries.map((gallery) => (
        <section key={gallery.id} data-section={gallery.id} className="mx-auto max-w-6xl px-5 pb-16 md:px-6">
          <h2 className={`text-3xl md:text-4xl ${gallery.id === "middachten" ? "font-serif font-semibold" : "font-display font-extrabold"}`}>
            {gallery.title}
          </h2>
          <p className="mt-3 max-w-2xl text-taupe-text">{gallery.text}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {gallery.shots.map((shot, index) => (
              <div key={shot.src} className={index === 0 ? "sm:col-span-2" : ""}>
                <Photo
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.w}
                  height={shot.h}
                  caption={shot.caption}
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 640px) 100vw, 50vw"}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
      <CloseBand title="Zie je iets dat lijkt op jouw pand?" text="Vertel wat je wilt laten doen. We komen kijken en denken mee, van woonhuis tot monument." />
    </Shell>
  );
}
