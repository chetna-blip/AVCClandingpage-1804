import { Check } from "lucide-react";
import { PROJECT_CATEGORIES } from "../lib/content";
import { Frame, SectionHead } from "./section-head";

export function Criteria() {
  return (
    <section id="criteria" className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <SectionHead eyebrow="What you’ll build" title={<><span className="text-ink-soft/60">One real problem.</span> Your solution.</>} lede="Build for your business, your portfolio or the client you want to work with." />
        <div className="reveal mt-10 grid border-y border-line md:grid-cols-5">
          {PROJECT_CATEGORIES.map((category, i) => (
            <div key={category.value} className={`p-5 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
              <span className="numeral">0 {i + 1}</span>
              <h3 className="mt-3 text-[13px] font-semibold text-ink">{category.label}</h3>
              <p className="card-body mt-2">{category.body}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-5 text-center text-[12px] text-muted">You don’t need an existing client. You need a problem worth solving.</p>
      </div>
    </section>
  );
}

export function Qualification() {
  return (
    <section id="qualify" className="border-y border-line bg-cream py-20 md:py-24">
      <div className="container-page">
        <SectionHead eyebrow="What qualifies" title={<><span className="text-ink-soft/60">Finish with proof.</span> Not just prompts.</>} />
        <Frame className="reveal mt-10">
          <div className="grid gap-5 p-7 md:grid-cols-2 md:p-9">
            {["A completed Runable-powered project", "A short case-study presentation", "At least one public social post", "A shareable Runable chat link"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-[14px] text-ink"><Check className="h-4 w-4 shrink-0 text-purple" />{item}</p>
            ))}
          </div>
        </Frame>
        <div className="reveal mt-7 text-center">
          <p className="card-body">Your case study tells the story:</p>
          <p className="mx-auto mt-3 max-w-[760px] text-[13px] leading-relaxed text-ink">Business / Target Client → Problem → Idea → Solution → What You Built → Business Value</p>
          <p className="card-body mt-5">Share progress and follow final-entry instructions inside Skool.</p>
          <p className="mt-2 text-[12px] text-muted">Landing a paying client is a bonus—not a requirement.</p>
        </div>
      </div>
    </section>
  );
}