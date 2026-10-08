# Reticle — runtime verification for this app

## Current surface: Skool-only participation

The Notion-based Creator Challenge has no on-site submission form. The `entries` router is
unmounted; existing database records and the table are preserved. No landing-page interaction
writes to the database. Historical submission verification below no longer describes active flows.

Current advertised testids: `coupon-chip`, `coupon-copied`, `faq-list`, `faq-question`, `faq-answer`,
`nav-cta`, `nav-links`, `hero-cta`, `steps-cta`, `closing-cta`, `details-cta`.
Current signals: `coupon:copied {code:"AVCC50"|"AVCC30"}` and `faq:toggled {question,open}`.
Both coupon buttons are distinguished by their accessible labels. AVCC50 is for the first 30
users’ first monthly/yearly purchase only; AVCC30 is for everyone else on all purchases.
The landing page does not enforce or track redemption limits; Runable checkout must do that.
Current flows: `join-on-skool`, `copy-discount-code`, `toggle-faq`.
Only the raw `queries` store remains; the form-related `app` store has been removed.
All participation CTAs point to `https://www.skool.com/ai-video-creators`.
`verify-update.py` checks the current page, disabled entries route, clipboard, FAQ and mobile layout.

Reticle remains opt-in via `RETICLE=1` in root `.env`, followed by a dev-server restart.
The sections below retain the prior implementation history; entry-related instructions are retired.

This repo is instrumented with [Reticle](https://github.com/reticlehq/reticle) (`@reticlehq/*` v3.3.0).
Reticle lets an agent drive the running app and get a **verdict** (`pass` / `fail` / `unknown`) backed by
what the app itself declared, instead of squinting at a screenshot.

Nothing here ships: a web `vite build` resolves `@reticlehq/react` to a no-op stub inside the Vite
plugin, and the app-side code is mode-guarded on top of that. The production bundle contains **zero**
occurrences of the string `reticle` — that is the acceptance check, run it after any change:

```bash
bunx turbo build --force && grep -ci reticle packages/web/dist/assets/*.js   # expect 0
```

## What is wired

| File | Role |
| --- | --- |
| `packages/web/vite.config.ts` | `reticle()` first in `plugins` — injects the SDK at serve time only |
| `packages/web/src/reticle-dev.ts` | Declares the testable surface: testids, signals, stores, flows |
| `packages/web/src/web/lib/reticle.ts` | `signal()` / `publishState()` — the bridge app code calls |
| `.reticle.json` | `projectId: template-web-0d99a882` |

`lib/reticle.ts` deliberately imports **nothing** from `@reticlehq/*`. It reads the singleton off
`globalThis.__reticleInstance`, so a production build has no import to tree-shake, and every call is a
no-op until a Reticle session actually connects. Call `signal()` from any handler without guarding it.

### Why `import.meta.env.MODE`, not `import.meta.env.DEV`

The root `.env` hardcodes `NODE_ENV=development`, and `vite.config.ts` copies it into `process.env`
*before* Vite resolves config — so Vite computes `isProduction === false` and `DEV` stays `true` even
inside `vite build`. Gating on `DEV` left the whole module in the shipped bundle (measured, not
assumed). `MODE` comes from the command (`build` ⇒ `"production"`) and is inlined as a literal, so the
guard folds to `false` and Rollup drops the code.

## Signals the app emits

| Signal | Fired when | Data |
| --- | --- | --- |
| `entry:invalid` | client-side validation rejects the form | `{ field, message }`, field is one of `name` / `email` / `videoUrl` / `projectUrl` / `caseStudyUrl` / `runableChatUrl` |
| `entry:submitting` | just before the create mutation fires | `{ platform, category }` |
| `entry:accepted` | the entry was stored | `{ platform, id }` |
| `entry:failed` | the mutation errored | `{ message }` |
| `entry:reset` | "Submit another project" clicked | — |
| `faq:toggled` | an FAQ row is opened or closed | `{ question, open }` |
| `coupon:copied` | the discount code is copied | `{ code }` |

Names live in one place (`SIGNALS` in `lib/reticle.ts`) and `reticle-dev.ts` advertises
`Object.values(SIGNALS)`, so the capability list cannot drift from what the code emits.

## Stores

- **`app`** — the addressable one. Paths: `entries.status`, `entries.fetchStatus`, `entries.count`,
  `entries.isStale`, `entries.error`, `submit.status`, `submit.error`, `submit.submittedAt`.
  It subscribes to the query *and* mutation caches, so an in-flight submit is observable, not just its
  result.
- **`queries`** — the raw `tanstackQueryStore` adapter. Carries every query, but oRPC's nested query
  keys collapse to the literal key `entries,count/[object Object]`, which a dot-path cannot address.
  Use `app` for assertions.

## Testids

`entry-section`, `entry-form`, `entry-name`, `entry-email`, `entry-platform`, `entry-video-url`,
`entry-category`, `entry-project-url`, `entry-case-study`, `entry-runable-chat`,
`entry-submit`, `entry-error`, `entry-success`, `entry-count`, `coupon-chip`,
`coupon-copied`, `faq-list`, `faq-question`, `faq-answer`, `nav-cta`, `nav-links`, `hero-cta`,
`steps-cta`, `closing-cta`.

## Declared flows

`submit-entry`, `reject-incomplete-entry`, `copy-discount-code`, `open-faq` — see `reticle-dev.ts`
for the steps of each.

The business-project challenge replaces the former five-episode requirement. Join CTAs now point
to `https://www.skool.com/ai-video-creators`; scroll directly to `entry-section` to submit. The form
requires category, public social post, completed project, case study and a Runable chat URL.
`videoUrl` / `entry-video-url` are retained as stable identifiers for the public social post.
Submission details are stored as version-2 JSON in the existing database `note` column, preserving
the table and older rows without a schema migration. Asset count, public access and project quality
are reviewed by people; URL validation does not prove those requirements are met.

## Driving it

With the MCP server registered (once per machine):

```bash
claude mcp add reticle -s user -- npx @reticlehq/server mcp
```

…then `reticle_capabilities()`, `reticle_query`, `reticle_act_and_wait { until: <predicate> }`.
A drive that ends without `act_and_wait` or `reticle_assert` proved nothing.

Without MCP, from a shell — the daemon must be running and a browser tab must have the app open:

```bash
npx @reticlehq/server serve --port 4400 --headless &   # daemon (idles out on its own)
npx @reticlehq/server status --port 4400 --json        # session ids
npx @reticlehq/server verify "" --port 4400 --session-id <id> \
  --expect '{"kind":"signal","name":"coupon:copied","count":1,"dataMatches":{"code":"*"}}'
```

Predicate grade matters: `signal` > `state` > `net` > `route` > `element`/`text`. A green `text`
assertion only proves something rendered.

**Grade immediately after the interaction.** The daemon's event buffer evicts on age and size: a
signal fired two minutes before the `verify` call comes back `verified: no` with the note
`event buffer evicted older events (age/size cap)` — a false negative, not a regression. Drive one
step, take its verdict, then drive the next. `scripts/reticle_steps.py` (step-trigger files under
`/tmp/reticle-step/`) plus `scripts/reticle_grade.sh <session-id> <predicate...>` do exactly that.

Two gotchas with the CLI: `status`/`verify` write their JSON to **stderr**, so redirect `2>&1` before
parsing, and `globalThis.__reticleInstance.sessionId` reads `null` in the page — take the session id
from `status --json` (newest entry with `stale: false`).

### Historical verification (before business-project form update)

| Predicate | Verdict |
| --- | --- |
| `{signal coupon:copied, count 1, code:*}` | `verified: yes` |
| `{signal entry:invalid, count 1, field videoUrl}` | `verified: yes` |
| `{signal entry:accepted, count 1, id:*, platform:*}` | `verified: yes` |
| `{state app.entries.status == "success"}` | `verified: yes` |
| `{state app.entries.count >= 1}` | `verified: yes` |
| `{state app.submit.status == "absent"}` | `verified: yes` |
| `{element entry-submit enabled}` | `verified: yes` |

Re-confirmed after the `RETICLE=1` opt-in gate was added: with `RETICLE=1` in `.env` and the dev
server restarted, a real Chrome session connects (`connected: true`, full capability manifest), and
`coupon:copied`, `faq:toggled { open: false }`, `entry:invalid { field: videoUrl }`,
`state app.entries.status`, `state app.submit.status` and `element entry-submit enabled` all grade
`verified: yes`. With `RETICLE=0` the served HTML contains zero `reticle` references.

Note: the first FAQ row starts **open**, so clicking `faq-question` first emits
`faq:toggled { open: false }`. A `{ open: true }` assertion on the first click fails — correctly.

The `submit-entry` run above wrote a real row to the Turso database and it was deleted afterwards.
Point a driven suite at a scratch `DATABASE_URL` if you intend to run it repeatedly.
