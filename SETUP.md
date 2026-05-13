# Setup

Step-by-step instructions for getting this site from a folder
on your laptop to a live URL on the internet. Read top to
bottom; do exactly what each step says.

---

## 0. What you need first

- **Node.js 18.18+ or 20+** installed. Check with `node -v`.
  If you don't have it, install from [nodejs.org](https://nodejs.org).
- **Git** installed. Check with `git --version`.
- **A GitHub account.** [github.com](https://github.com).
- **A Vercel account.** [vercel.com](https://vercel.com). Free
  tier is fine.
- **VS Code.** [code.visualstudio.com](https://code.visualstudio.com).

If you have all five, continue. Otherwise install what's
missing and come back.

---

## 1. Get the project onto your machine

You have the project as a folder (e.g. `digital-workshop/`).

1. Move the folder somewhere permanent — e.g.
   `~/Sites/digital-workshop` on Mac, or
   `C:\Sites\digital-workshop` on Windows.
2. Open VS Code.
3. **File → Open Folder…** and select the `digital-workshop`
   folder.
4. You should see the file tree in the left sidebar.

---

## 2. Install the dependencies

Open a terminal in VS Code (`` Ctrl+` `` or
**Terminal → New Terminal**).

```bash
npm install
```

This downloads everything into `node_modules/`. Takes a minute
or two the first time.

If you see errors about your Node version, run `node -v`. You
need 18.18 or newer.

---

## 3. Run it locally

```bash
npm run dev
```

You should see something like:

```
   ▲ Next.js 15.x.x
   - Local:    http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your
browser.

You should see the homepage with the seed content already in
place. Click through Work, Notes, About, Now. Everything should
render.

If you change a file and save, the browser updates
automatically.

When you want to stop the dev server: `Ctrl+C` in the terminal.

---

## 4. Fill in your details (before going live)

Open these files and replace every `[ADD ...]` placeholder
with real content:

- `lib/site-config.ts` — your name, email, social links
- `app/about/page.tsx` — the About page
- `app/now/page.tsx` — what you're working on now
- `app/uses/page.tsx` — your tools
- `app/colophon/page.tsx` — your repo URL, etc.
- `app/page.tsx` — the homepage "Now" snippet
- `content/notes/*.mdx` — the seed notes
- `content/work/*/index.mdx` — the seed projects

You can do this **after** you go live too. The site will
publish with the placeholders if you want to ship first and
edit second. Either approach is fine.

---

## 5. Initialise Git and push to GitHub

### 5a. Initialise the repo locally

In the VS Code terminal:

```bash
git init
git add .
git commit -m "first commit: phase 2 working version"
```

### 5b. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `digital-workshop` (or whatever you
   prefer).
3. Set it to **Private** if you want — Vercel can deploy
   private repos on the free tier.
4. **Do not** check "Initialize this repository with a
   README" — we already have one.
5. Click **Create repository**.

### 5c. Connect your local repo to GitHub

GitHub will show you the commands. Use the **"...or push an
existing repository from the command line"** version. It
looks like this:

```bash
git remote add origin https://github.com/{your-username}/digital-workshop.git
git branch -M main
git push -u origin main
```

Run those in the VS Code terminal. You'll be asked to
authenticate with GitHub the first time. Follow the
prompts.

Refresh the GitHub repo page in your browser. Your code
should be there.

---

## 6. Deploy to Vercel

### 6a. Connect Vercel to GitHub

1. Go to [vercel.com/new](https://vercel.com/new).
2. If you've never used Vercel with GitHub, click **Install
   GitHub** and authorise the connection.
3. You'll see a list of your GitHub repositories.

### 6b. Import the project

1. Find `digital-workshop` in the list.
2. Click **Import**.
3. On the configuration screen:
   - **Framework Preset:** Next.js (auto-detected — leave as-is).
   - **Root Directory:** leave as-is (./).
   - **Build & Output Settings:** leave as-is.
   - **Environment Variables:** add one (optional but
     recommended):
     - Name: `NEXT_PUBLIC_SITE_URL`
     - Value: leave blank for now — you'll fill it in once
       you have a domain.
4. Click **Deploy**.

Vercel builds the site (takes 1–2 minutes the first time).
When it's done, you get a live URL like
`digital-workshop-xxxx.vercel.app`. Click it to confirm
everything works.

---

## 7. Connect your custom domain (optional)

When you have a domain ready:

1. In Vercel, open the project → **Settings → Domains**.
2. Add your domain (e.g. `yourdomain.com`).
3. Vercel shows you DNS records to add at your domain
   registrar.
4. Add those records at your registrar. (Cloudflare, Namecheap,
   Porkbun, etc.)
5. Vercel verifies the DNS automatically — usually within a
   few minutes, sometimes up to a few hours.
6. Once verified, set `NEXT_PUBLIC_SITE_URL` in Vercel's
   environment variables to `https://yourdomain.com` (no
   trailing slash).
7. Redeploy: **Deployments → ⋯ → Redeploy** on the latest
   deployment.

---

## 8. From now on

To publish a change:

```bash
git add .
git commit -m "{short description of the change}"
git push
```

Vercel deploys automatically. You'll see the build progress
in Vercel's dashboard.

That's the whole workflow. Every change goes through that
loop.

---

## 9. Common things you'll do

- **Add a note:** see `docs/WORKFLOWS.md` → "Publish a new
  note".
- **Add a project:** see `docs/WORKFLOWS.md` → "Publish a new
  project".
- **Change the design:** edit `app/globals.css` (tokens) or
  the relevant component. See `docs/DESIGN.md`.
- **Roll back a bad deploy:** Vercel dashboard → Deployments
  → find a good one → ⋯ → Promote to Production.

---

## 10. If you get stuck

1. **Read the error message.** They're more readable than they
   look.
2. **Search the exact error message.** Someone has hit it
   before.
3. **Check `docs/`.** The doc you need probably exists.
4. **Ask Claude.** Paste the error, the file, and what you
   were trying to do.

You're set. Ship something.
