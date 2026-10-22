import { faq } from "@/lib/faq";

export default function FaqList() {
  return (
    <section data-section="faq" className="mx-auto max-w-3xl px-5 py-16 md:px-6">
      <h2 className="font-display text-3xl font-extrabold">Veelgestelde vragen</h2>
      <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        {faq.map((item) => (
          <div key={item.q} className="py-5">
            <dt className="font-display text-xl font-bold">{item.q}</dt>
            <dd className="mt-2 text-taupe-text">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
