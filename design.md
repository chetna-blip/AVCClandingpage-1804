# AVCC — $2,000 AI Video Challenge — Design System

## Current challenge content

Approved copy revision: The Dream Client Challenge. Lead with the name and $2,000 prize pool.
Short outcome-led sections; remove repeated coupon blocks, participant-track cards and partnership
explanations. Keep four entry requirements, five categories, concise judging and offer terms.
Coupons appear only in the offer section. Three existing member results, clearly not challenge results.

The Runable × AVCC Creator Challenge retains the existing MasterIA-inspired visual treatment.
The supplied Notion concept is the source: three guided weeks, three participant tracks, five
project categories, use-of-Runable / execution / participation-and-distribution judging, and a
confirmed $2,000 total prize pool. Proposed award splits, launch dates and hashtag are not final.
Required deliverables: completed Runable project, case-study presentation, public social post,
and shared Runable chat link. Brand packages contain at least 5 assets.
Offers: AVCC50 gives the first 30 users 50% off their first monthly or yearly purchase (not
renewals); AVCC30 gives everyone else 30% off all purchases. Show both codes and exact terms.
No checkout integration or redemption counter is configured by this landing-page update.
All join CTAs link to the AVCC Skool community. There is no on-site submission form or active
entries API. Participation, project promotion, progress and final-entry instructions live in
Skool; at least one public social post is still required. Landing a client is optional.

Reference: runable.com/masteria (structure, rhythm, restraint) adapted for the AI Video Creators Community.
Aesthetic: clean, modern, high-tech. Light page with one cinematic dark hero. Purple as the only accent.

## Colors

```
--ink:        #0E0E14   text / dark surfaces
--ink-soft:   #3F3F4E   secondary text
--muted:      #6B6B7B   body copy on light
--paper:      #FFFFFF   primary background
--cream:      #FAF8F5   alternating section background
--line:       #EBE7E1   hairline borders (cream sections)
--line-cool:  #ECECF1   hairline borders (white sections)
--purple:     #7C3AED   primary buttons, eyebrows, accents
--purple-600: #6D28D9   hover
--purple-tint:#F3EEFF    soft chips / glows
--green:      #16A34A   member result numbers (matches community brand screenshots)
```

Rules: white/cream alternation, purple for action + emphasis only, never purple gradients on white blocks. Hero is dark (image + ink gradient overlay) — everything after it is light.

## Typography

Poppins (400/500/600/700) for everything — matches the community's existing graphics.

- Display H1: `clamp(2.5rem, 6vw, 4.5rem)`, 600, tracking -0.03em, line-height 1.04
- H2: `clamp(2rem, 4vw, 3.25rem)`, 600, tracking -0.025em
- Two-tone headings: first clause `text-ink/45`, payload `text-ink` (MasterIA device)
- Eyebrow: 11–12px, 600, uppercase, tracking 0.18em, purple
- Body: 16–19px, 400, line-height 1.65, `--muted`
- Numbers/metrics: 600–700, tabular

## Layout

- Container `max-w-6xl` (1152px), 24px gutters
- Section padding `py-24 md:py-32`; section dividers = 1px hairline, not shadows
- Feature/step/results grids: bordered container with hairline internal dividers (no floating card shadows) in the MasterIA manner; result cards get soft borders + image tops
- Radii: 12px cards, 999px pills/buttons, 20px large media frames
- Elevation: almost none — `0 1px 2px rgba(14,14,20,.04)`; media frames get `0 24px 60px -30px rgba(14,14,20,.35)`

## Components

- Primary button: purple pill, white text, 14px/600, arrow icon, hover darken + 1px lift
- Secondary button: white pill, 1px `--line-cool` border, ink text
- Chip/tag: white pill, hairline border, 13px/500, emoji or lucide icon leading
- Nav: sticky, transparent over hero, turns white + hairline + blur after 40px scroll
- FAQ: hairline-divided rows, plus/minus toggle, animated grid-rows reveal
- Entry form: card on cream, purple submit, inline success state

## Motion

One orchestrated page load: hero copy staggers up (`translateY(14px)` → 0, 90ms apart), section content reveals once on scroll via IntersectionObserver (`.reveal` → `.in`). No looping effects except the slow hero image scale (12s) and soft scanline sheen.

## Imagery

- `/images/hero-lab.jpg` — futuristic AVCC lab (hero background, ink gradient 55–85% overlay)
- `/images/community-trophy.jpg` — three members with flame trophy (community section, framed 20px)
- `/images/member-1..6.jpg` — member result card visuals
- Logo: no logo file was supplied → SVG mark (purple rounded square + play/spark glyph) with "AVCC / AI Video Creators Community" wordmark, swappable in one place (`components/logo.tsx`).

## Responsiveness

Mobile-first: single column under 768px, hero copy centered with 1.15 line-height, results grid 1 → 2 → 3 columns, nav collapses to a sheet menu, all tap targets ≥ 44px.
