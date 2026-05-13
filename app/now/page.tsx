import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Now',
  description:
    'The current working state of the archive — what is being built and learned right now.',
};

export default function NowPage() {
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
              current state
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
            What I&rsquo;m working on
          </h1>
          <p className="mt-4 text-[color:var(--color-fg-2)]">
            The current working state of the archive. A snapshot, not a
            promise.
          </p>
        </header>

        <div className="prose mt-10">
          <h2>zainbuilds.com</h2>
          <p>
            Turning the first live version of this site into something
            more complete. Cleaning up placeholders. Shaping the content
            system. Documenting the real projects properly rather than
            leaving them as outlines.
          </p>

          <h2>Volkswagen Tiguan</h2>
          <p>
            Documenting the 2017 162TSI R-Line as an ongoing OEM+ build.
            Capturing both the technical side &mdash; intake, brakes,
            sway bar links, DSG and Haldex services done at home &mdash;
            and the personal side: chassis feel, confidence,
            drivability. The direction is refinement over chasing
            numbers.
          </p>

          <h2>AI website experiments</h2>
          <p>
            Writing up the process of building real, deployed sites using
            ChatGPT and Claude together. ChatGPT for context and prompt
            shaping. Claude for the actual code. VS Code, GitHub and
            Vercel as the toolchain I was learning end-to-end at the
            same time.
          </p>

          <h2>Zen Captures</h2>
          <p>
            Beginning the longer story behind the photography brand
            &mdash; how it started, how the gear changed, how the
            website kept getting rebuilt, and where I want it to go. The
            client-facing site lives at{' '}
            <a
              href="https://zencaptures.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              zencaptures.com.au
            </a>
            . This is the behind-the-scenes version.
          </p>

          <hr />

          <p className="!mt-8 font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
            full archive &rarr; <Link href="/notes">/notes</Link> &middot;{' '}
            <Link href="/work">/work</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
