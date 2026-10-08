type Variant = "light" | "dark";

/**
 * AVCC wordmark. No logo file was supplied with the brief — swap the <svg>
 * mark below for an <img src="/images/logo.svg" /> when the real asset lands.
 */
export function Logo({ variant = "dark" }: { variant?: Variant }) {
  const onLight = variant === "dark";

  return (
    <a href="#top" className="flex items-center gap-2" aria-label="AI Video Creators Community">
      <AvccMark />
      <span
        className={`font-display text-[17px] tracking-[-0.01em] ${onLight ? "text-ink-strong" : "text-white"}`}
      >
        AVCC
      </span>
    </a>
  );
}

export function AvccMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid h-[22px] w-[22px] place-items-center rounded-[6px] bg-purple ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" aria-hidden="true">
        <path d="M9.6 7.6v8.8l7.2-4.4-7.2-4.4Z" fill="#fff" />
        <path
          d="M5.2 8.4v7.2"
          stroke="#fff"
          strokeOpacity=".5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** AVCC × Runable lockup, as the reference pairs its two brands. */
export function PartnerLockup({
  variant = "dark",
  size = "md",
}: {
  variant?: Variant;
  size?: "sm" | "md";
}) {
  const onLight = variant === "dark";
  const text = size === "sm" ? "text-[15px]" : "text-[19px]";
  const logo = size === "sm" ? "h-[15px]" : "h-[19px]";

  return (
    <div className="inline-flex items-center gap-3">
      <span className="inline-flex items-center gap-2">
        <AvccMark className={size === "sm" ? "h-[19px] w-[19px] rounded-[5px]" : ""} />
        <span
          className={`font-display ${text} tracking-[-0.01em] ${onLight ? "text-ink-strong" : "text-white"}`}
        >
          AVCC
        </span>
      </span>
      <span className={`text-[11px] ${onLight ? "text-muted/60" : "text-white/40"}`}>×</span>
      <img
        src="/images/runable-lockup.png"
        alt="Runable"
        className={`${logo} w-auto ${onLight ? "" : "brightness-0 invert"}`}
      />
    </div>
  );
}
