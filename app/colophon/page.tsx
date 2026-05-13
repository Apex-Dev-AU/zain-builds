import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Colophon',
  description: 'How this site is built. A small piece of metadata for the curious.',
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
            This site is small on purpose. The important part isn&rsquo;t
            the framework. It&rsquo;s that the writing and project
            history live somewhere I can keep shaping &mdash; in plain
            files I own, not in someone else&rsquo;s database.
          </p>

          <h2>Stack</h2>
          <dl className="not-prose mt-6 grid grid-cols-[7rem_1fr] gap-x-6 gap-y-3 rounded border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-5 font-mono text-sm">
            <dt className="text-[color:var(--color-fg-3)]">framework</dt>
            <dd className="text-[color:var(--color-fg-2)]">Next.js (App Router)</dd>
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
          </dl>

          <h2>How it gets made</h2>
          <p>
            The workflow behind this site &mdash; and the projects
            documented inside it &mdash; combines two AI tools rather than
            one.
          </p>
          <p>
            <strong>ChatGPT</strong> is the context layer. It holds the
            longer picture of what I&rsquo;m trying to build, the tone
            I&rsquo;m aiming for, and the ideas in flight. I use it to
            shape strategy, think out loud, and engineer better prompts.
          </p>
          <p>
            <strong>Claude</strong> is the build layer. The prompts that
            come out of ChatGPT get handed to Claude to write the actual
            code, generate longer structured documents, and do the
            technical work.
          </p>
          <p>
            VS Code is where I edit. GitHub is where every change lives.
            Vercel is where the site goes live. Most days I&rsquo;m moving
            between the four.
          </p>

          <h2>Type</h2>
          <p>
            Set in <strong>Geist Sans</strong> and{' '}
            <strong>Geist Mono</strong>. Two faces from one family. Sans
            for body and headings, mono for metadata, timestamps,
            breadcrumbs and code.
          </p>

          <h2>Colour</h2>
          <p>
            Near-black background (<code>#0A0A0A</code>), near-white ink (
            <code>#EDEDED</code>), and a single sharp green accent (
            <code>#00DC82</code>) used for hover, focus and live-state
            indicators. Everything else sits on a cool grey scale.
          </p>

          <h2>What I borrowed</h2>
          <p>
            The structure of this site &mdash; the{' '}
            <Link href="/now">/now</Link> page, the build-log model
            &mdash; owes a lot to Derek Sivers, Robin Sloan, and a long
            tail of small, handmade websites that have been quietly
            compounding for years. The visual language owes to Vercel and
            Linear.
          </p>
        </div>
      </div>
    </article>
  );
}
