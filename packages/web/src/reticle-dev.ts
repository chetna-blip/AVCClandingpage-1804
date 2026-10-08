// Injected only when RETICLE=1 in Vite serve mode. Never imported by the production app.
import { registerCapabilities, registerStore, tanstackQueryStore } from "@reticlehq/react";
import { queryClient } from "./web/components/provider";
import { SIGNALS } from "./web/lib/reticle";

if (import.meta.env.MODE !== "production") {
  registerStore("queries", tanstackQueryStore(queryClient));
  registerCapabilities({
    testids: [
      "coupon-chip", "coupon-copied", "faq-list", "faq-question", "faq-answer",
      "nav-cta", "nav-links", "hero-cta", "steps-cta", "closing-cta", "details-cta",
    ],
    signals: [SIGNALS.couponCopied, SIGNALS.faqToggled],
    stores: ["queries"],
    flows: [
      {
        name: "join-on-skool",
        steps: [
          "query hero-cta and confirm href https://www.skool.com/ai-video-creators",
          "click hero-cta",
          "expect route on www.skool.com/ai-video-creators; this website collects no entries",
        ],
      },
      {
        name: "copy-discount-code",
        steps: ["click coupon-chip for AVCC50 or AVCC30", "expect signal coupon:copied with the selected code and coupon-copied visible"],
      },
      {
        name: "toggle-faq",
        steps: [
          "click the first faq-question (it starts open)",
          "expect signal faq:toggled with open false and aria-expanded false",
        ],
      },
    ],
  });
}