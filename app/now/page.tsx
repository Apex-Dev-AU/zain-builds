import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I am working on right now. A snapshot, updated regularly.',
};

export default function NowPage() {
  const lastUpdated = '[ADD DATE]';

  return (
    <article className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <div className="max-w-[var(--width-prose)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          ~/now
        </p>

        <header className="mt-6 border-b border-[color:var(--color-border)] pb-8">
          <div className="flex items-center gap-3">
            <span className="dot dot-active" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
              updated {lastUpdated}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
            What I&rsquo;m working on
          </h1>
        </header>

        <div className="prose mt-10">
          <p>
            A snapshot of where my attention is right now. The closest
            thing to a status update I keep. Inspired by{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Derek Sivers&rsquo;s /now movement
            </a>
            .
          </p>

          <h2>Building</h2>
          <ul>
            <li>
              [ADD CURRENT BUILD &mdash; e.g. &ldquo;The first version
              of this site.&rdquo;]
            </li>
            <li>[ADD ANOTHER BUILD]</li>
          </ul>

          <h2>Learning</h2>
          <ul>
            <li>
              [ADD CURRENT LEARNING &mdash; e.g. &ldquo;The MQB
              platform and how the IS20 turbo on my Tiguan compares
              to the IS38 in a Golf R.&rdquo;]
            </li>
            <li>[ADD ANOTHER]</li>
          </ul>

          <h2>Reading</h2>
          <ul>
            <li>[ADD CURRENT BOOK OR ARTICLE]</li>
          </ul>

          <h2>Background</h2>
          <p>
            [ADD ANY CONTEXT YOU WANT &mdash; what season of life
            this is, what&rsquo;s shaped the focus, what&rsquo;s
            been on your mind.]
          </p>

          <hr />

          <p className="!mt-8 font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
            full archive &rarr; <Link href="/notes">/notes</Link> ·{' '}
            <Link href="/work">/work</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
