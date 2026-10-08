import { FACTS } from "../lib/content";

/** Four label/value pairs on one hairline row. No sentences. */
export function PrizeStrip() {
  return (
    <section id="challenge" className="border-y border-line bg-white">
      <div className="container-page grid grid-cols-2 md:grid-cols-4">
        {FACTS.map((fact, i) => (
          <div
            key={fact.label}
            className={`reveal py-8 md:py-9 ${i % 2 === 1 ? "border-l border-line pl-6" : ""} ${
              i < 2 ? "border-b border-line md:border-b-0" : ""
            } ${i === 2 ? "md:border-l md:border-line md:pl-6" : ""} ${
              i === 3 ? "md:pl-6" : ""
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              {fact.label}
            </p>
            <p className="display mt-3 text-[clamp(1.35rem,2.3vw,1.7rem)]">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
