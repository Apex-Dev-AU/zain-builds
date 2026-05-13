# 0001 — Use Next.js + Vercel

**Status:** Accepted
**Date:** 2026-05-13

## Context

This site needs a static-first, content-heavy stack that the
author can confidently ship and maintain alone. The author has
existing familiarity with GitHub, Vercel, and AI-assisted
deployment workflows.

The Phase 1 strategy document recommended Astro + Cloudflare
Pages on technical merit (Astro ships less JavaScript by default
and is more content-shaped). However, the author's existing
fluency with the Next.js / Vercel toolchain outweighs the
marginal technical benefit at this stage.

## Decision

Build the first version with:

- **Next.js 15** (App Router) as the framework
- **Vercel** for hosting and CI/CD
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling, with hand-written design tokens
- **MDX** for content, parsed with `next-mdx-remote` + `gray-matter`
- **GitHub** for source control

## Consequences

**Positive:**

- The author can ship the first version with the tools they
  already know.
- Vercel's preview deployments make iteration fast.
- The Next.js community is large; help is plentiful.
- Static generation keeps performance comparable to Astro for
  this site's traffic profile.

**Negative:**

- More JavaScript ships by default than would with Astro. We
  mitigate by keeping client-side interactivity to near zero
  and rendering everything as static HTML.
- Vendor coupling to Vercel is higher than with a static host.
  We mitigate by keeping the codebase portable — no Vercel-only
  primitives in the app code.

**Reversibility:**

The content lives in plain `.mdx` files in the repo. If the
framework needs to change in the future, the content moves
with us. The cost of switching frameworks later is bounded.

## Revisit

Revisit this decision when:

- The site grows past ~500 posts (bundle size and build time
  become concerns).
- Vercel pricing or terms change materially.
- A successor framework (Astro v6, an unknown new player) offers
  a clear order-of-magnitude improvement.
