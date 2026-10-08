import { RESULTS } from "../lib/content";
import { SectionHead } from "./section-head";

export function Results() {
  return (
    <section id="results" className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <SectionHead
          eyebrow="AVCC member results"
          title={
            <>
              <span className="text-ink-soft/60">Wins from</span> inside the community.
            </>
          }
          lede="Existing community wins—not results from this challenge."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.slice(0, 3).map((member, i) => (
            <article
              key={member.name}
              className="reveal overflow-hidden rounded-card border border-line bg-white"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-[124px] w-full object-cover"
              />
              <div className="p-5">
                <p className="display text-[1.5rem] text-greenres">{member.metric}</p>
                <p className="card-body mt-2">{member.body}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">
                  {member.name}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-[11.5px] text-muted">
          Shared by members. Your results depend on the work you put in.
        </p>
      </div>
    </section>
  );
}
