# Design

The design system is small on purpose. It lives in two places:

1. **`app/globals.css`** — the source of truth. Design tokens
   in a single Tailwind v4 `@theme` block.
2. **This document** — the explanation, for humans.

If the two disagree, the CSS is correct and this doc is out
of date. Update this doc.

## Vibe

**Dark, technical, dev-tool.** Think Vercel docs, Linear,
Railway, Supabase. Near-black background, sharp green accent,
monospace metadata, hairline borders. Tight density without
feeling cramped.

## Principle

> Make the reading easy, then everything else.

Every other rule on this page follows from that one.

## Colour

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#0A0A0A` | Page background. Near-black, slight cool cast. |
| `--color-bg-2` | `#111114` | Elevated surfaces: code blocks, metadata panels. |
| `--color-bg-3` | `#16161A` | Hover surfaces, two-step elevation. |
| `--color-fg` | `#EDEDED` | Primary text. Near-white. |
| `--color-fg-2` | `#A0A0A8` | Secondary text, descriptions. |
| `--color-fg-3` | `#666670` | Tertiary text, captions, mono labels. |
| `--color-border` | `#1F1F23` | Subtle hairline borders. |
| `--color-border-2` | `#2A2A30` | Stronger borders, hover states. |
| `--color-accent` | `#00DC82` | Signal. Hover, focus, selection, live state. |
| `--color-accent-dim` | `#00A862` | Pressed state. |
| `--color-status-shipped` | `#60A5FA` | Shipped projects (cool blue). |
| `--color-status-archived` | `#666670` | Archived projects. |

**Rules:**

- No gradients (except the very subtle dot-grid background on
  the homepage hero, which technically is a radial gradient
  pattern).
- No additional colours without an ADR.
- The accent green appears sparingly: focus rings, hover
  states, live-status dots, selection. If everything is
  accented, nothing is.
- Pure black (`#000`) is forbidden. Pure white (`#FFF`) is
  forbidden. Both feel cheap.

## Typography

Two faces, one family. **Geist Sans** for body and headings.
**Geist Mono** for metadata, timestamps, breadcrumbs, and code.

Both are designed by Vercel. They're distinctive (not Inter,
not Roboto) but share enough DNA to pair perfectly.

### Type scale (1.25 modular, 16px base)

| Token | Size | Use |
|---|---|---|
| `--text-xs` | 12 | Mono labels, metadata |
| `--text-sm` | 14 | Captions, mono inline |
| `--text-base` | 16 | UI |
| `--text-md` | 17 | Body |
| `--text-lg` | 20 | Lede |
| `--text-xl` | 24 | H3 |
| `--text-2xl` | 30 | H2 |
| `--text-3xl` | 36 | Page H1 (mobile) |
| `--text-4xl` | 48 | Page H1 (desktop) |
| `--text-5xl` | 64 | Hero |

### Line heights

| Token | Value | Use |
|---|---|---|
| `--leading-tight` | 1.1 | Display headings |
| `--leading-snug` | 1.25 | H1/H2 |
| `--leading-normal` | 1.45 | UI text |
| `--leading-relaxed` | 1.6 | Body — the default |
| `--leading-loose` | 1.75 | Long-form essays |

### Weight

- Body: 400
- Strong: 600
- Headings: 600
- Labels (mono): 500

### Letter-spacing

- Body: `-0.005em` (very slight tightening)
- Headings: `-0.02em` (Geist Sans benefits from negative tracking)
- Mono labels: `0.08em` uppercase (open enough to read at 12px)

## Mono usage

The monospace font is the secret sauce of the dev-tool vibe.
Use it for:

- All metadata: dates, kinds, status, reading time, tags
- Breadcrumbs (`~/work / volkswagen-tiguan`)
- Section labels (`/ recent`, `/ work`, `/ now`)
- Code, inline and block
- Stack tags, pill-style elements
- Updated timestamps, version numbers

Do **not** use mono for body content or long-form headings.
Reading mono at length is tiring.

## Spacing

Tailwind defaults. Use:

- `gap-2`, `gap-3`, `gap-4`, `gap-6` for inline
- `mt-4`, `mt-6`, `mt-8`, `mt-12`, `mt-16`, `mt-20` for vertical
  rhythm
- Vertical density in this design is **tighter than the
  previous editorial version**. Sections separated by `py-12`
  with hairline borders, not `mt-20` of whitespace.

## Layout widths

| Token | Width | Use |
|---|---|---|
| `--width-prose` | 42rem (672px) | Reading column. Body text, articles. |
| `--width-wide` | 56rem (896px) | List pages, project headers. |
| `--width-full` | 72rem (1152px) | Outer page max. Nav, footer, homepage. |

## Borders & rules

- **Hairline only.** `1px solid var(--color-border)`.
- Used to separate sections, never to enclose them — except
  for the metadata panel on project pages, which is a single
  bordered card to feel "data-like."
- Code blocks get a 1px border in `--color-border`.
- Cards (when used) get the same.

## Status dots

A signature element. Used in: nav (live indicator), project
status, footer.

```html
<span class="dot dot-active"></span>     <!-- green, glowing -->
<span class="dot dot-shipped"></span>    <!-- blue -->
<span class="dot dot-archived"></span>   <!-- gray -->
<span class="dot dot-draft"></span>      <!-- outline -->
```

The active dot has a subtle green glow (`box-shadow`). It's
the only soft-glow effect on the site.

## Motion

- Transitions are `120ms ease`, on a small list of properties:
  `color`, `border-color`, `background-color`.
- No scroll-triggered animations.
- No page transitions.
- Respect `prefers-reduced-motion`.

## What we don't use

These are intentionally absent:

- Drop shadows (except the dot-active glow)
- Gradients (except the dot-grid background pattern)
- Border-radius beyond `2-4px` — kept very tight
- Background images on text
- Skeuomorphic effects
- More than one accent colour
- Animation libraries
- Inter (use Geist Sans)
- Roboto (use Geist Sans)
- System monospace alone (use Geist Mono, with system as fallback)

## What sells the dev-tool vibe

If you're modifying components, these are the moves that
keep them on-brand:

1. **Mono breadcrumbs**: `~/work / volkswagen-tiguan` in mono
   uppercase, fg-3 colour, above page H1.
2. **Mono section labels**: `/ recent`, `/ work` — short slash
   prefix, uppercase.
3. **Bracket-tagged kind labels**: `[log]`, `[essay]`.
4. **Date format**: `2026.02.10` (period-separated, mono).
5. **Status dots** before titles in lists.
6. **Metadata panels**: bordered code-block-style cards for
   project facts (started, ended, stack, links).
7. **Stack pills**: small bordered tags for technologies.
8. **Hover states**: green accent on links, status dots stay
   green even when you don't hover.
9. **Tabular numerals** everywhere (set globally in body).
