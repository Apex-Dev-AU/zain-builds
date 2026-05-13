# 0002 — Content as MDX files in Git, not a CMS

**Status:** Accepted
**Date:** 2026-05-13

## Context

A content site needs a place to put its content. The options:

1. **Plain Markdown/MDX files in the repo.** Edited in any text
   editor. Versioned with Git.
2. **A hosted CMS** (Contentful, Sanity, Storyblok, etc.). Content
   lives in a vendor's database; the site fetches it.
3. **A Git-backed CMS** (TinaCMS, Decap CMS, Keystatic). Editor
   UI on top of files in the repo.

## Decision

For the first version, use **plain MDX files in the repo**.

Specifically:

- `content/notes/{slug}.mdx` for notes
- `content/work/{slug}/index.mdx` for projects
- Frontmatter parsed by `gray-matter`
- Bodies rendered with `next-mdx-remote/rsc`

No CMS layer for v1.

## Consequences

**Positive:**

- Content custody: the author owns the files. There is no
  vendor to lock them in.
- Version history: every change is a Git commit.
- Workflow simplicity: write in any editor; commit; push;
  deploy.
- Performance: content is read at build time, not at request
  time.
- Portability: if the framework changes in the future, the
  content moves with it.

**Negative:**

- No web-based editor. The author must edit locally or via
  GitHub's web UI.
- No draft-preview workflow for non-technical collaborators.
- Schema enforcement is conventional (TypeScript types +
  documentation), not strict.

## When to revisit

Add a Git-backed CMS (option 3, likely **TinaCMS** or
**Decap CMS**) when *any* of these become true:

- The author regularly wants to publish from a phone or a
  non-development machine.
- A non-technical collaborator needs to write content.
- The draft-preview workflow becomes painful enough to
  matter.

When that happens, the content does **not** move — the CMS
sits on top of the same files. The migration cost is bounded.

A hosted CMS (option 2) is **explicitly rejected** for this
site. Renting custody of one's writing is not an acceptable
tradeoff at any scale.
