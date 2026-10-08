import { ArrowRight } from "lucide-react";
import { COMMUNITY_URL, NAV_LINKS } from "../lib/content";
import { PartnerLockup } from "./logo";

export function Closing() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-t border-line bg-cream py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[820px] -translate-x-1/2 rounded-full bg-lilac/60 blur-[120px]" />

        <div className="container-narrow reveal text-center">
          <p className="eyebrow">The Dream Client Challenge</p>
          <h2 className="display mx-auto mt-5 max-w-[540px] text-[clamp(1.9rem,4.2vw,2.9rem)]">
            <span className="text-ink-soft/60">Leave with something</span> worth showing.
          </h2>
          <p className="lede mx-auto mt-5 max-w-[380px]">
            A working project. A stronger portfolio. Proof of what you can build.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={COMMUNITY_URL}
              data-testid="closing-cta"
              className="btn-primary group px-7 py-3.5 hover:bg-purple-600"
            >
              Join the challenge on Skool
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white py-10">
        <div className="container-page flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[300px]">
            <PartnerLockup size="sm" />
            <p className="mt-4 text-[11.5px] leading-[1.7] text-muted">
              Built with Runable. Guided by AVCC.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11.5px] text-ink-soft transition-colors hover:text-purple"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="container-page mt-8 border-t border-line pt-5">
          <p className="text-[11px] text-muted">
            © {new Date().getFullYear()} AI Video Creators Community.
          </p>
        </div>
      </footer>
    </>
  );
}
