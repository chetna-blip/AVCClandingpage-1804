## Dream Client Challenge update

## Latest coupon revision

- [x] AVCC50: first 30 users, 50% off first monthly or yearly purchase, no renewals.
- [x] AVCC30: everyone else, 30% off all purchases.
- [x] Both offers shown in hero, offer section, closing and FAQ; old AVCC40 copy removed.
- [x] Copy buttons verified independently, lint/build and browser checks pass.
- [x] Offer screenshot inspected; Skool-only participation unchanged.
- Checkout redemption cap is not configured here; no payment-provider integration exists.

## Current revision: Notion concept + Skool-only participation

- [x] Read supplied public Notion concept in browser.
- [x] Align name, three-week structure, participant tracks, support and judging criteria.
- [x] Correct prize messaging to a confirmed $2,000 total pool; do not publish tentative award split.
- [x] Preserve AVCC40/40% and Runable chat requirement from prior user instructions.
- [x] Remove on-page submission component and queries; unmount entries API, preserve database.
- [x] All participation/promotional CTAs route to Skool, with community-only instructions.
- [x] Preserve public social post requirement; tags included, hashtag marked pending.
- [x] Update active Reticle surface to match form removal.
- [x] Lint/build, browser verification, no form/API calls, retired entries route 404, mobile screenshots.

Source: https://vidis-ai.notion.site/Runable-AVCC-Creator-Challenge-Concept-Mechanics-Launch-Plan-3ec243f46d9581828cd8c8bc2c05a733
The notes below describe the superseded form-based revision.

- [x] Coupon AVCC40 and 40% discount throughout.
- [x] Journey, five categories and required outcomes replace episode rules.
- [x] Join CTAs point to https://www.skool.com/ai-video-creators.
- [x] Submission fields and API require project, case study, public post and Runable chat.
- [x] Preserve existing table; store structured new details in versioned note JSON.
- [x] Update Reticle capabilities and documentation; retain opt-in behavior.
- [x] Lint and initial production build pass.
- [x] Browser checks: links, clipboard, categories, validation, mobile layout, mocked submission.
- [x] Server rejection test without writing to database (missing, malformed and wrong-domain chat URLs return 400).
- [x] Final lint/build pass; production bundle has no Reticle string; old episode/50% copy absent.
- [x] Desktop/mobile screenshots inspected.
- [ ] Deliver updated website.

No changes to prize amount, community voting or existing visual identity. Link validity is
checked, but public accessibility, completed work and 5-asset brand packages require human review.
Do not submit test records to the live database.