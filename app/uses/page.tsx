import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    'The tools, hardware, and software I use day to day. Updated when something changes.',
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
            A list of things I actually use, not things I bought once
            and forgot about. Updated when something changes.
          </p>
        </header>

        <div className="prose mt-12">
          <h2>Photography</h2>
          <ul>
            <li>
              <strong>Camera</strong> &mdash; Sony A7R IV. Started
              years ago on a Sony A6000 and slowly upgraded. The
              full-frame sensor is overkill for most of what I shoot
              &mdash; until suddenly it isn&rsquo;t.
            </li>
            <li>
              <strong>Lenses</strong> &mdash; Sony G Master series.
              [ADD SPECIFIC LENSES]
            </li>
            <li>
              <strong>Editing</strong> &mdash; [ADD: e.g. Lightroom
              Classic, Capture One]
            </li>
          </ul>

          <h2>Web &amp; software</h2>
          <ul>
            <li>
              <strong>Editor</strong> &mdash; VS Code, with [ADD KEY
              EXTENSIONS]
            </li>
            <li>
              <strong>AI assistance</strong> &mdash; Claude, mostly.
              For code, for writing, for thinking out loud.
            </li>
            <li>
              <strong>Hosting</strong> &mdash; Vercel for the front
              end, GitHub for source control
            </li>
            <li>
              <strong>Domains</strong> &mdash; [ADD REGISTRAR]
            </li>
          </ul>

          <h2>Car &amp; workshop</h2>
          <ul>
            <li>
              <strong>Daily</strong> &mdash; 2017 Volkswagen Tiguan
              R-Line 162TSI. MQB platform. IS20 turbo from factory.
            </li>
            <li>
              <strong>Diagnostics</strong> &mdash; OBDeleven (OBD11)
              Pro. Single most useful tool I own for the car.
            </li>
            <li>
              <strong>DSG service kit</strong> &mdash; [ADD BRAND
              &amp; PART NUMBERS]
            </li>
            <li>
              <strong>Hand tools</strong> &mdash; [ADD &mdash; what
              you actually reach for]
            </li>
          </ul>

          <h2>Hardware</h2>
          <ul>
            <li>
              <strong>Computer</strong> &mdash; [ADD MACHINE]
            </li>
            <li>
              <strong>Display</strong> &mdash; [ADD MONITOR]
            </li>
            <li>
              <strong>Keyboard</strong> &mdash; [ADD KEYBOARD]
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
