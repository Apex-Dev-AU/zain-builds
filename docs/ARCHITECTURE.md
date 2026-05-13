# Architecture

A map of how the site is structured. Read this before
changing anything structural.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom tokens |
| Content | MDX files in `/content`, parsed with `gray-matter` |
| MDX rendering | `next-mdx-remote/rsc` |
| Hosting | Vercel |
| Source control | GitHub |

See `DECISIONS/0001-use-nextjs-vercel.md` for the why.

## Folder structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens + base styles
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # sitemap.xml generator
│   ├── robots.ts           # robots.txt generator
│   ├── rss.xml/route.ts    # RSS feed
│   ├── work/
│   │   ├── page.tsx        # Work index
│   │   └── [slug]/page.tsx # Project detail
│   ├── notes/
│   │   ├── page.tsx        # Notes index
│   │   └── [slug]/page.tsx # Note detail
│   ├── about/page.tsx
│   ├── now/page.tsx
│   ├── uses/page.tsx
│   └── colophon/page.tsx
│
├── components/             # Reusable React components
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── PostList.tsx
│   ├── ProjectList.tsx
│   └── mdx-components.tsx
│
├── lib/                    # Server-side utilities
│   ├── content.ts          # MDX loading, parsing, sorting
│   └── site-config.ts      # Site metadata (single source of truth)
│
├── content/                # All editorial content
│   ├── notes/              # Notes (essays, logs, etc.)
│   └── work/               # Projects (one folder per)
│
├── docs/                   # This documentation
│   ├── DECISIONS/          # ADRs
│   └── ...
│
├── public/                 # Static assets served as-is
│   └── favicon.ico
│
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## How rendering works

1. **At build time**, Next.js runs `generateStaticParams()` on
   each dynamic route, which calls `getAllNotes()` and
   `getAllProjects()` from `lib/content.ts`.
2. Those functions read the `/content` directory, parse the
   frontmatter, and return typed objects.
3. Next.js then renders every page as static HTML.
4. The output is deployed to Vercel's edge.

In production, every page is a static HTML file — no server
required, no database to query, no runtime cost.

## How content flows

```
content/notes/foo.mdx
    │
    ▼
lib/content.ts (gray-matter parses frontmatter + body)
    │
    ▼
app/notes/[slug]/page.tsx (MDXRemote renders the body)
    │
    ▼
Static HTML at /notes/foo
```

## Single sources of truth

When you need to change something, edit only one of these:

| What | Where |
|---|---|
| Site name, tagline, nav items | `lib/site-config.ts` |
| Design tokens (colour, type, spacing) | `app/globals.css` |
| Layout structure | `app/layout.tsx` |
| Content type schemas | `lib/content.ts` (types) + `docs/CONTENT.md` (docs) |

## What's intentionally NOT here

- No state management library (no Redux, Zustand, etc.). The
  site is content. There's no state to manage.
- No CSS-in-JS. Tailwind tokens + global CSS only.
- No client-side data fetching. Everything is server-rendered
  at build time.
- No authentication. There's nothing to log into.
- No database. Files in Git are the database.
- No CMS (yet). MDX in the repo is the CMS. If we add one later,
  it'll be Git-backed (TinaCMS or Decap).

## Extending

When adding a new feature, ask:

1. Can this be done with content alone? (Best answer: yes.)
2. Can this be done in `lib/content.ts` and a server component?
3. Does this need client-side interactivity?

Only escalate to (3) if (1) and (2) fail. Most things on this
site stop at (1).
