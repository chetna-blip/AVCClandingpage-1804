import { COMMUNITY_URL } from "../lib/content";
import { SectionHead } from "./section-head";

export function ChallengeDetails() {
  return (
    <section id="challenge-details" className="bg-white py-20 md:py-24">
      <div className="container-narrow text-center">
        <SectionHead eyebrow="Prizes & exposure" title={<><span className="text-ink-soft/60">Build your portfolio.</span> Compete for $2,000 in prizes.</>} />
        <p className="reveal card-body mx-auto mt-7 max-w-[560px]">Projects are judged on <strong className="font-semibold text-ink">use of Runable, execution, and participation & distribution</strong>—not follower count alone.</p>
        <p className="reveal card-body mt-4">AVCC will showcase selected standout projects.</p>
        <p className="reveal mt-3 text-[12px] text-muted">Final award details will be announced in Skool.</p>
        <a href={COMMUNITY_URL} data-testid="details-cta" className="reveal btn-primary mt-8 hover:bg-purple-600">Join the challenge on Skool</a>
      </div>
    </section>
  );
}