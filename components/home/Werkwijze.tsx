const steps = [
  {
    n: "01",
    title: "Eerst de wensen",
    text: "Goed overleg met klanten en opdrachtgevers, en vooraf weten wat de wensen zijn, is voor ons de basis om aan de slag te gaan.",
  },
  {
    n: "02",
    title: "Advies en werk op maat",
    text: "Advies en werk op maat is ons belangrijkste speerpunt. Of het nu om een woning, een bedrijf of een monument gaat.",
  },
  {
    n: "03",
    title: "Dan het werk",
    text: "Met moderne technieken en professionele materialen voeren we het schilder-, spuit-, behang- of glaswerk uit.",
  },
];

export default function Werkwijze() {
  return (
    <section data-section="werkwijze" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
        <p className="caption text-paper/70">Zo werken we</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-extrabold md:text-5xl">Eerst overleg, dan het werk</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-paper/20 pt-4">
              <span className="font-display text-sm font-bold text-[#F0C030]">{step.n}</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold">{step.title}</h3>
              <p className="mt-3 text-paper/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
