import { COMMUNITY_URL, STEPS } from "../lib/content";
import { Frame, SectionHead } from "./section-head";

export function Steps() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              <span className="text-ink-soft/60">From idea</span> to something you can show.
            </>
          }
        />

        <Frame className="reveal mt-12">
          <div className="grid md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div
                key={step.no}
                className={`p-7 md:p-9 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
              >
                <span className="numeral">{step.no}</span>
                <h3 className="card-title mt-5">{step.title}</h3>
                <p className="card-body mt-2">{step.body}</p>
              </div>
            ))}
          </div>
        </Frame>

        <div className="reveal mt-10 text-center">
          <a href={COMMUNITY_URL} data-testid="steps-cta" className="btn-primary hover:bg-purple-600">
            Join the challenge on Skool
          </a>
          <p className="card-body mx-auto mt-5 max-w-[600px]"><strong className="font-semibold text-ink">You’re not building alone.</strong> Get Sergey’s build-along, community feedback and live Q&A with Sergey and the Runable team.</p>
        </div>
      </div>
    </section>
  );
}
