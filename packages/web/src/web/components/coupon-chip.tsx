import { Check } from "lucide-react";
import { useState } from "react";
import { COUPON, OFFERS } from "../lib/content";
import { SIGNALS, signal } from "../lib/reticle";

/** Quiet discount-code line, click to copy — sits under the CTA. */
export function CouponChip({ variant = "dark", code = COUPON }: { variant?: "light" | "dark"; code?: string }) {
  const [copied, setCopied] = useState(false);
  const onLight = variant === "dark";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      signal(SIGNALS.couponCopied, { code });
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy discount code ${code}`}
      data-testid="coupon-chip"
      className="group inline-flex items-center gap-2 text-[11.5px]"
    >
      <span className={onLight ? "text-muted" : "text-white/50"}>Code</span>
      <span
        className={`rounded-[5px] px-2 py-1 font-mono text-[11.5px] tracking-[0.1em] transition-colors ${
          onLight
            ? "bg-lilac/60 text-ink-strong group-hover:bg-lilac"
            : "bg-white/15 text-white group-hover:bg-white/25"
        }`}
      >
        {code}
      </span>
      {copied && (
        <span
          data-testid="coupon-copied"
          className={`inline-flex items-center gap-1 ${onLight ? "text-greenres" : "text-[#8ce0a5]"}`}
        >
          <Check className="h-3 w-3" />
          Copied
        </span>
      )}
    </button>
  );
}

/** Both real offers, without inventing a remaining-redemptions counter. */
export function CouponOffers() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {OFFERS.map((offer) => (
        <div key={offer.code}>
          <p className="mb-1 text-[11.5px] text-muted">{offer.title} · {offer.discount} off</p>
          <CouponChip code={offer.code} />
          <p className="mt-1 max-w-[350px] text-[10.5px] leading-relaxed text-muted">{offer.terms}</p>
        </div>
      ))}
    </div>
  );
}
