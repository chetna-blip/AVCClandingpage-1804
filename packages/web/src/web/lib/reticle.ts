// Dev-only bridge to the Reticle runtime.
//
// Deliberately imports nothing from @reticlehq/*: it reads the singleton off the global that
// @reticlehq/browser installs (`globalThis.__reticleInstance`). That keeps the production bundle
// at literally zero bytes of Reticle — no import to tree-shake, no dependency to resolve — while
// app code can still emit signals from the places that matter.
//
// `signal` marks a moment worth asserting on ("the entry was accepted"), `state` publishes a value
// the agent can read back. Both are no-ops in production and no-ops in dev until a Reticle session
// connects, so they are safe to call unconditionally from event handlers.

interface ReticleRuntime {
  readonly connected: boolean;
  signal(name: string, data?: Record<string, unknown>): void;
  state(name: string, value: unknown): void;
}

/**
 * True only in `vite` (serve), false in `vite build`.
 *
 * Not `import.meta.env.DEV`: this repo's root `.env` hardcodes `NODE_ENV=development`, and
 * vite.config.ts copies it into `process.env` before Vite resolves config — so Vite computes
 * `isProduction === false` and `DEV` stays `true` inside a production build, leaving this whole
 * module in the bundle. `MODE` comes from the command (`build` ⇒ "production") and is inlined as a
 * literal, so the comparison folds to `false` and Rollup drops everything below it.
 */
const DEV = import.meta.env.MODE !== "production";

function runtime(): ReticleRuntime | null {
  if (!DEV) return null;
  const instance = (globalThis as { __reticleInstance?: ReticleRuntime }).__reticleInstance;
  return instance?.connected === true ? instance : null;
}

/** Every signal name this app emits. Kept here so reticle-dev.ts advertises exactly what exists. */
export const SIGNALS = {
  faqToggled: "faq:toggled",
  couponCopied: "coupon:copied",
} as const;

export type SignalName = (typeof SIGNALS)[keyof typeof SIGNALS];

export function signal(name: SignalName, data?: Record<string, unknown>): void {
  runtime()?.signal(name, data);
}

export function publishState(name: string, value: unknown): void {
  runtime()?.state(name, value);
}
