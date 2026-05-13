# Workflows

How to do the common things.

## Run the site locally

```bash
npm install         # First time only
npm run dev         # http://localhost:3000
```

The dev server hot-reloads on file changes — both code and
MDX content.

## Publish a new note

1. Create a new file: `content/notes/{slug}.mdx`.
2. Paste the frontmatter template from `docs/CONTENT.md`.
3. Fill in: title, slug, date, kind, summary.
4. Write the note.
5. Preview at `http://localhost:3000/notes/{slug}`.
6. Commit:
   ```bash
   git add content/notes/{slug}.mdx
   git commit -m "note: {short title}"
   git push
   ```
7. Vercel deploys automatically on push to `main`.

## Publish a new project

1. Create a new folder: `content/work/{slug}/`.
2. Create `index.mdx` in it.
3. Paste the project frontmatter template.
4. Write the project page.
5. Preview at `http://localhost:3000/work/{slug}`.
6. Commit and push.

## Link a note to a project

Add the project's slug to the note's frontmatter:

```yaml
project: "volkswagen-tiguan"
```

The note will appear under "Build log" on the project page and
show a "part of [Project]" link in its own header.

## Update `/now`

Edit `app/now/page.tsx`. Update the date and content. Commit:

```bash
git commit -m "now: {short summary of what changed}"
git push
```

## Update the homepage NOW snippet

The one-sentence summary on the homepage is in `app/page.tsx`.
Hand-update it when you update `/now`. (We can automate this
later if it becomes a chore.)

## Deploy

Deployment is automatic. Any push to `main` triggers a build
on Vercel. There's no separate "deploy" step.

To preview before merging:

1. Make changes on a branch.
2. Push the branch.
3. Open a PR.
4. Vercel comments on the PR with a preview URL.
5. Merge when ready. Production deploys.

## Roll back

If a deploy breaks something:

1. Go to Vercel → Deployments.
2. Find the last good deploy.
3. Click the three dots → "Promote to Production."

The fastest fix in a panic.

## Add a redirect

A URL changed and you need to redirect the old one? Edit
`next.config.mjs`:

```js
async redirects() {
  return [
    { source: '/old-slug', destination: '/notes/new-slug', permanent: true },
  ];
}
```

**Once a URL is published, it never disappears.** Always
redirect, never delete.

## Add a new ADR

When making a structural decision:

1. Look at the latest number in `docs/DECISIONS/`.
2. Create `{NNNN}-{short-name}.md`.
3. Use the structure: **Context**, **Decision**, **Consequences**.
4. Commit it with the change.

ADRs are never deleted. Superseded ones are marked as such.
