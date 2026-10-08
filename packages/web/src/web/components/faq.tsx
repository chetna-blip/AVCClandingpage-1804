import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { CHALLENGE_FAQS } from "../lib/challenge-faq";
import { SectionHead } from "./section-head";
import { SIGNALS, signal } from "../lib/reticle";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-narrow">
        <SectionHead eyebrow="FAQ" title="Questions, answered." />

        <div data-testid="faq-list" className="reveal mt-12">
          {CHALLENGE_FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="border-b border-line first:border-t">
                <button
                  type="button"
                  onClick={() => {
                    signal(SIGNALS.faqToggled, { question: faq.q, open: !isOpen });
                    setOpen(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                  data-testid="faq-question"
                  className="flex w-full items-center justify-between gap-6 py-4 text-left"
                >
                  <span className="text-[13.5px] text-ink-strong">{faq.q}</span>
                  <span className="shrink-0 text-purple">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div data-testid="faq-answer" className="overflow-hidden">
                    <p className="card-body max-w-[560px] pb-5 pr-8">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
