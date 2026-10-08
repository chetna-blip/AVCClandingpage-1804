import type { ReactNode } from "react";

/** Eyebrow → serif headline → one short sentence. The reference's section rhythm. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <div className="reveal mx-auto max-w-[620px] text-center">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`display ${eyebrow ? "mt-5" : ""} ${
          size === "lg"
            ? "text-[clamp(2rem,4.6vw,3.1rem)]"
            : "text-[clamp(1.75rem,3.8vw,2.6rem)]"
        }`}
      >
        {title}
      </h2>
      {lede && <p className="lede mx-auto mt-5 max-w-[470px]">{lede}</p>}
    </div>
  );
}

/** Thin-ruled frame that holds a grid of cells, no shadow. */
export function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-frame border border-line bg-white ${className}`}>
      {children}
    </div>
  );
}
