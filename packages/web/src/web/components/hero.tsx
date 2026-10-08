import { ArrowRight } from "lucide-react";
import { COMMUNITY_URL } from "../lib/content";
import { PartnerLockup } from "./logo";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-cream">
      {/* Soft lilac wash, as on the reference hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]">
        <div className="absolute left-1/2 top-[-260px] h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-lilac/70 blur-[120px]" />
        <div className="absolute left-1/2 top-[-160px] h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-[#ffe8f3]/50 blur-[110px]" />
      </div>

      <div className="container-narrow flex flex-col items-center pb-24 pt-28 text-center md:pb-28 md:pt-32">
        <div className="rise" style={{ animationDelay: "0ms" }}>
          <PartnerLockup />
          <p className="eyebrow mt-5">Runable × AVCC presents</p>
        </div>

        <h1
          className="rise display mt-10 text-[clamp(2.3rem,5.6vw,3.65rem)]"
          style={{ animationDelay: "80ms" }}
        >
          The Dream Client Challenge
        </h1>

        <p className="rise mt-5 text-[clamp(1.15rem,2.7vw,1.6rem)] leading-snug text-ink" style={{ animationDelay: "120ms" }}>
          Build for the client you want. Compete for $2,000 in prizes.
        </p>
        <p className="rise lede mt-6 max-w-[430px]" style={{ animationDelay: "160ms" }}>
          Turn a real business problem into a working project in three guided weeks.
        </p>

        <div className="rise mt-9" style={{ animationDelay: "240ms" }}>
          <a
            href={COMMUNITY_URL}
            data-testid="hero-cta"
            className="btn-primary group px-7 py-3.5 hover:bg-purple-600"
          >
            Join the challenge on Skool
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="rise mt-4 max-w-[430px] text-[11.5px] leading-relaxed text-muted" style={{ animationDelay: "280ms" }}>
          Lessons, feedback and challenge participation happen inside Skool.
        </p>

        <p className="rise mt-6 text-[11.5px] text-muted" style={{ animationDelay: "300ms" }}>3 weeks · 5 project categories · AVCC members only</p>
      </div>
    </section>
  );
}
