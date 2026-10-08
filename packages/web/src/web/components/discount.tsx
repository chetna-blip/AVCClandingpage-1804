import { ArrowUpRight } from "lucide-react";
import { OFFERS, RUNABLE_URL } from "../lib/content";
import { CouponChip } from "./coupon-chip";
import { Frame, SectionHead } from "./section-head";

export function Discount() {
  return (
    <section id="discount" className="border-y border-line bg-cream py-20 md:py-28">
      <div className="container-page">
        <div>
          <SectionHead
            eyebrow="Member offer"
            title={
              <>
                <span className="text-ink-soft/60">Your build.</span> A better price.
              </>
            }
          />
        </div>

        {/* Both codes remain visible; redemption eligibility is handled at Runable checkout. */}
        <Frame className="reveal mx-auto mt-12 max-w-[880px]">
          <div className="grid md:grid-cols-2">
            {OFFERS.map((offer, i) => (
              <div key={offer.code} data-testid={`offer-${offer.code}`} className={`flex flex-col p-9 md:p-10 ${i === 0 ? "border-b border-line bg-cream-raised md:border-b-0 md:border-r" : ""}`}>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">{offer.title}</p>
                <p className="display mt-4 text-[clamp(2.75rem,6vw,3.75rem)] leading-none">
                  {offer.discount}<span className="ml-2 align-top font-sans text-[0.22em] font-medium uppercase tracking-[0.18em] text-muted">off</span>
                </p>
                <p className="card-body mb-5 mt-4">{offer.terms}</p>
                <div className="mt-auto"><CouponChip code={offer.code} /></div>
                <a href={RUNABLE_URL} target="_blank" rel="noreferrer" className="btn-primary mt-7 self-start hover:bg-purple-600">
                  Get {offer.discount} off<ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <p className="mt-4 text-[11.5px] text-muted">Apply <span className="font-mono text-ink">{offer.code}</span> at Runable checkout.</p>
              </div>
            ))}
          </div>
        </Frame>

      </div>
    </section>
  );
}
