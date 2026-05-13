# Content

There are two content types: **notes** and **projects**.
Everything else is a hand-built page.

## Where content lives

```
content/
  notes/                    All notes, flat directory
    first-notes-on-the-tiguan.mdx
    what-shipping-with-ai-actually-looks-like.mdx
  work/                     One folder per project
    volkswagen-tiguan/
      index.mdx
    zen-captures/
      index.mdx
```

Notes are files. Projects are folders (so they can hold
images and other assets next to the writing).

## Note frontmatter

```yaml
---
title: ""                   # Required. Sentence case.
slug: ""                    # Required. Lowercase, hyphenated.
                            # Becomes the URL: /notes/{slug}
date: "YYYY-MM-DD"          # Required. ISO date.
kind: "essay" | "log" | "note" | "link" | "talk"
                            # Required. See "Kinds" below.
project: ""                 # Optional. Slug of the related project.
                            # Links this note into a project's build log.
tags: []                    # Optional. Lowercase, singular, hyphenated.
summary: ""                 # Required. One sentence.
                            # Used in lists, RSS, OG cards.
draft: false                # Optional. true = excluded from build.
---
```

### Kinds

| Kind | When to use | Length |
|---|---|---|
| `essay` | Long-form thinking. Has a thesis. | 1500+ words |
| `log` | Build log entry tied to a project. | 200–1000 words |
| `note` | Short observation, half-baked thought. | <500 words |
| `link` | Pointer to something elsewhere, with a comment. | <300 words |
| `talk` | Transcript or notes from a talk. | Variable |

Don't invent new kinds. If something doesn't fit, it's
probably a `note`.

## Project frontmatter

```yaml
---
title: ""                   # Required. The project's display name.
slug: ""                    # Required. Lowercase, hyphenated.
status: "active" | "shipped" | "archived" | "abandoned"
started: "YYYY-MM-DD"       # Required.
ended: null                 # null while active, date when ended.
role: ""                    # Optional. e.g. "Designer & developer"
stack: []                   # Optional. Tools / platforms / tech.
links:                      # Optional. Any subset.
  live: ""
  source: ""
  writeup: ""               # Slug of a definitive note about it.
summary: ""                 # Required. One sentence.
hero: ""                    # Optional. Path to hero image.
draft: false
---
```

## File naming

- **Notes:** Match the filename to the slug.
  `first-notes-on-the-tiguan.mdx` → `/notes/first-notes-on-the-tiguan`
- **Projects:** The folder name is the slug.
  `work/volkswagen-tiguan/index.mdx` → `/work/volkswagen-tiguan`

## Slug rules

- Lowercase. ASCII letters only (plus hyphens).
- No dates in the URL (date lives in frontmatter).
- No version numbers (`field-notes` not `field-notes-v2`).
- Once a slug is published, **it never changes**. Use a
  redirect if you need to rename.

## Tag rules

- Lowercase, singular, hyphenated: `astro`, `build-log`,
  `mqb`.
- Reuse existing tags before inventing new ones. The tag list
  should grow slowly.
- If you find yourself inventing a tag for one post, pick the
  closest existing one instead.

## Writing in MDX

MDX is Markdown with JSX. For now, write plain Markdown unless
you specifically need a component.

Standard Markdown that works:

- `**bold**`, `*italic*`
- `[links](url)`
- `# headings` (use `##` and below in body content; `#` is the
  page title via frontmatter)
- `>` blockquotes
- Code: `` `inline` `` and triple-backtick blocks
- `---` horizontal rules
- Lists, tables, footnotes (via remark-gfm)

## Adding a new note

1. Create `content/notes/{slug}.mdx`.
2. Add the frontmatter from the template above.
3. Write the post.
4. Save. The site picks it up automatically.
5. Run `npm run dev` to preview.
6. Commit and push when ready.

## Adding a new project

1. Create `content/work/{slug}/`.
2. Add `index.mdx` with project frontmatter.
3. Drop any images or assets into the same folder.
4. Write the project page.
5. Tag related notes with `project: {slug}` to build up the
   build log over time.
