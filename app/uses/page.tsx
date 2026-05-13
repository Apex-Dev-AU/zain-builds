import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    'The tools, hardware and software behind the work. Updated when something changes.',
};

export default function UsesPage() {
  return (
    <article className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <div className="max-w-[var(--width-prose)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          ~/uses
        </p>

        <header className="mt-6 border-b border-[color:var(--color-border)] pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
            Tools &amp; setup
          </h1>
          <p className="mt-4 text-[color:var(--color-fg-2)]">
            A practical inventory of what sits behind the work. What gets
            used often, not what looks good on a list.
          </p>
        </header>

        <div className="prose mt-12">
          <h2>Photography &amp; video</h2>
          <p>
            The photography work is shot under{' '}
            <a
              href="https://zencaptures.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zen Captures
            </a>
            .
          </p>
          <ul>
            <li>
              <strong>Sony A7R IV</strong> &mdash; current body. Where most
              of the recent work has been made.
            </li>
            <li>
              <strong>Sony A7R II</strong> &mdash; the first full-frame body
              before settling on the A7R IV.
            </li>
            <li>
              <strong>Sony A6000</strong> &mdash; the first proper camera.
              Still around. Sentimental more than working.
            </li>
            <li>
              <strong>Sony GM lens system</strong> &mdash; the{' '}
              <strong>24&ndash;70mm GM f/2.8</strong> in particular has
              carried most of the recent work.
            </li>
            <li>
              <strong>Final Cut Pro</strong> &mdash; video editing.
            </li>
          </ul>

          <h2>Web &amp; AI</h2>
          <ul>
            <li>
              <strong>ChatGPT</strong> &mdash; long-running context. Idea
              shaping, prompt engineering, anything that benefits from
              memory.
            </li>
            <li>
              <strong>Claude</strong> &mdash; code generation, longer
              technical writing, and most of the work behind this site.
            </li>
            <li>
              <strong>VS Code</strong> &mdash; editor.
            </li>
            <li>
              <strong>GitHub</strong> &mdash; version control. Where every
              change lives.
            </li>
            <li>
              <strong>Vercel</strong> &mdash; hosting and deployment.
            </li>
            <li>
              <strong>Next.js, Tailwind, MDX</strong> &mdash; the stack this
              site is built on.
            </li>
          </ul>

          <h2>Car &amp; workshop</h2>
          <ul>
            <li>
              <strong>2017 Volkswagen Tiguan 162TSI R-Line</strong> &mdash;
              the platform most of the mechanical work happens on.
            </li>
            <li>
              <strong>OBDeleven (OBD11)</strong> &mdash; diagnostics and
              coding. Single most useful piece of kit for the car.
            </li>
            <li>
              <strong>Wera torque wrench</strong> &mdash; learning to trust
              torque specs has been a quiet but real shift in how I work on
              the car.
            </li>
            <li>
              General DIY hand tools &mdash; nothing fancy. The discipline
              is more about correct torque, careful installation and not
              stripping anything.
            </li>
          </ul>

          <h2>Desk &amp; hardware</h2>
          <ul>
            <li>
              <strong>Logitech G915</strong> &mdash; keyboard.
            </li>
            <li>
              <strong>Dell U3223QE</strong> &mdash; monitor.
            </li>
            {/* TODO private: add machine, mouse, audio, secondary peripherals once finalised. */}
          </ul>
        </div>
      </div>
    </article>
  );
}
