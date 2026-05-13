import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Colophon',
  description:
    'How this site is designed and built. A small piece of metadata for the curious.',
};

export default function ColophonPage() {
  return (
    <article className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <div className="max-w-[var(--width-prose)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          ~/colophon
        </p>

        <header className="mt-6 border-b border-[color:var(--color-border)] pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
            How this site is built
          </h1>
        </header>

        <div className="prose mt-12">
          <p>
            This site is small on purpose. The goal is to outlive any
            given stack, framework, or vendor. Everything that
            matters &mdash; the writing, the projects, the photographs
            &mdash; lives in plain text and image files in a Git
            repository. The framework around it is replaceable.
          </p>

          <h2>Stack</h2>
          <dl className="not-prose mt-6 grid grid-cols-[7rem_1fr] gap-x-6 gap-y-3 rounded border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-5 font-mono text-sm">
            <dt className="text-[color:var(--color-fg-3)]">framework</dt>
            <dd className="text-[color:var(--color-fg-2)]">Next.js 15 (App Router)</dd>
            <dt className="text-[color:var(--color-fg-3)]">language</dt>
            <dd className="text-[color:var(--color-fg-2)]">TypeScript</dd>
            <dt className="text-[color:var(--color-fg-3)]">styling</dt>
            <dd className="text-[color:var(--color-fg-2)]">Tailwind v4 + hand tokens</dd>
            <dt className="text-[color:var(--color-fg-3)]">content</dt>
            <dd className="text-[color:var(--color-fg-2)]">MDX in /content</dd>
            <dt className="text-[color:var(--color-fg-3)]">hosting</dt>
            <dd className="text-[color:var(--color-fg-2)]">Vercel</dd>
            <dt className="text-[color:var(--color-fg-3)]">source</dt>
            <dd className="text-[color:var(--color-fg-2)]">GitHub</dd>
            <dt className="text-[color:var(--color-fg-3)]">analytics</dt>
            <dd className="text-[color:var(--color-fg-2)]">[ADD &mdash; Plausible, Vercel, none]</dd>
          </dl>

          <h2>Type</h2>
          <p>
            Set in <strong>Geist Sans</strong> and{' '}
            <strong>Geist Mono</strong> &mdash; both designed by Vercel.
            Geist Sans handles body and headings; Geist Mono handles
            metadata, timestamps, breadcrumbs, and code. Two faces,
            one family.
          </p>

          <h2>Colour</h2>
          <p>
            Near-black background (<code>#0A0A0A</code>), near-white
            ink (<code>#EDEDED</code>), and a single sharp green
            accent (<code>#00DC82</code>) used for hover, focus,
            selection, and live-state indicators. Everything else is
            a step on a cool gray scale.
          </p>

          <h2>Decisions worth knowing</h2>
          <ul>
            <li>
              <strong>Content as files, not a database.</strong> Every
              note and project lives as an <code>.mdx</code> file in
              the repo. You can change frameworks; you can&rsquo;t
              easily change content systems.
            </li>
            <li>
              <strong>Static rendering by default.</strong> Pages are
              generated at build time, then cached at Vercel&rsquo;s
              edge. Fast everywhere, cheap to run.
            </li>
            <li>
              <strong>Minimal client-side JavaScript.</strong> The site
              is mostly HTML and CSS. Faster, more accessible, easier
              to maintain.
            </li>
            <li>
              <strong>Permanent URLs.</strong> Once published, a URL
              never changes. Redirects fill any gaps.
            </li>
          </ul>

          <h2>What I borrowed</h2>
          <p>
            The structure of this site &mdash; the{' '}
            <Link href="/now">/now</Link> page, the build-log model
            &mdash; owes a lot to Derek Sivers, Robin Sloan, and a
            generation of small, handmade websites that have been
            quietly compounding for decades. The visual language owes
            to Vercel and Linear &mdash; the standard-bearers for what
            modern dev-tool aesthetics look like.
          </p>

          <h2>Source</h2>
          <p>
            The full source is at [ADD GITHUB REPO URL]. Feel free to
            borrow anything useful.
          </p>
        </div>
      </div>
    </article>
  );
}
