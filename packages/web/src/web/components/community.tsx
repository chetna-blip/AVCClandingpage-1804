import { Clapperboard, Coins, Lock } from "lucide-react";
import type { ComponentType } from "react";
import { COMMUNITY_TAGS, COMMUNITY_URL } from "../lib/content";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  lock: Lock,
  clapperboard: Clapperboard,
  coins: Coins,
};

export function Community() {
  return (
    <section id="community" className="bg-white py-20 md:py-24">
      <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <p className="eyebrow">The community</p>
          <h2 className="display mt-5 text-[clamp(1.75rem,3.8vw,2.6rem)]">
            <span className="text-ink-soft/60">Membership is</span> the way in.
          </h2>
          <p className="lede mt-5 max-w-[400px]">
            AVCC is a private community for AI video creators. The challenge and the partner discounts are for
            members only.
          </p>
          <p className="card-body mt-4 max-w-[400px]">Skool is the challenge hub: access the lessons, post your project brief, get feedback, share progress and follow the final-entry instructions. Promote your challenge work through the community, with a public social showcase as part of the challenge.</p>
          <a href={COMMUNITY_URL} className="btn-primary mt-6 hover:bg-purple-600">Join the community</a>

          <div className="mt-7 flex flex-wrap gap-2">
            {COMMUNITY_TAGS.map((tag) => {
              const Icon = ICONS[tag.icon] ?? Lock;
              return (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[11.5px] text-ink-soft"
                >
                  <Icon className="h-3 w-3 text-purple" />
                  {tag.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <div className="overflow-hidden rounded-frame border border-line">
            <img
              src="/images/community-trophy.jpg"
              alt="AVCC members holding the Skool Games trophy"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
