import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About [ADD NAME] and the Digital Workshop — context, background, and why this site exists.',
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <div className="max-w-[var(--width-prose)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          ~/about
        </p>

        <header className="mt-6 border-b border-[color:var(--color-border)] pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
            About
          </h1>
        </header>

        <div className="prose mt-10">
          <p className="text-xl leading-snug">
            I&rsquo;m [ADD NAME] &mdash; [ADD ONE-LINE DESCRIPTION,
            e.g. &ldquo;a builder and photographer based in
            [ADD LOCATION]&rdquo;]. This is where I keep my work.
          </p>

          <h2>What this is</h2>
          <p>
            A working archive, not a portfolio. The goal isn&rsquo;t
            to impress anyone &mdash; it&rsquo;s to keep an honest
            record of what I&rsquo;m making, what I&rsquo;m learning,
            and where I&rsquo;m getting stuck. Some entries are
            polished. Most are working notes left in the open.
          </p>

          <p>
            I write about three things, mostly: software (the kind I
            build for the web and the kind I deploy with help from
            AI), photography (under the name{' '}
            <a
              href="https://zencaptures.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zen Captures
            </a>
            ), and the mechanical work I do on my car. The seams
            between these three things are the most interesting
            part, which is why they live in the same archive.
          </p>

          <h2>Background</h2>
          <p>
            [ADD A PARAGRAPH OF PERSONAL BACKGROUND &mdash; how you
            got started, what you&rsquo;ve done, where you&rsquo;re
            from. Keep it under 200 words.]
          </p>

          <h2>How I work</h2>
          <p>
            I build slowly. Most things on this site started as a
            paragraph in a notebook, became a small experiment, and
            then a longer project. I don&rsquo;t ship every week.
            I&rsquo;m more interested in compounding than in
            posting.
          </p>

          <h2>Contact</h2>
          <ul>
            <li>email &mdash; [ADD EMAIL]</li>
            <li>github &mdash; [ADD GITHUB URL]</li>
            <li>instagram &mdash; [ADD INSTAGRAM]</li>
          </ul>

          <p>
            For what I&rsquo;m working on this week, see{' '}
            <Link href="/now">/now</Link>. For how this site is
            built, see <Link href="/colophon">/colophon</Link>.
          </p>
        </div>
      </div>
    </article>
  );
}
