import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { COMMUNITY_URL, NAV_LINKS } from "../lib/content";
import { Logo } from "./logo";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-xl">
      <div className="container-page flex h-[62px] items-center justify-between">
        <Logo />

        <nav data-testid="nav-links" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3.5 py-1.5 text-[12.5px] text-ink-soft transition-colors hover:border-line-strong hover:text-ink-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={COMMUNITY_URL}
            data-testid="nav-cta"
            className="btn-primary hidden hover:bg-purple-600 sm:inline-flex"
          >
            Join challenge
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-6 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-[14px] text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={COMMUNITY_URL}
            onClick={() => setOpen(false)}
            className="btn-primary mt-5 w-full py-3.5"
          >
            Join challenge
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
