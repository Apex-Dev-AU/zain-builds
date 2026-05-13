import Link from 'next/link';
import { getRecentFeed, getAllProjects } from '@/lib/content';
import { PostList } from '@/components/PostList';
import { ProjectList } from '@/components/ProjectList';

export default function HomePage() {
  const recent = getRecentFeed(6);
  const featured = getAllProjects().slice(0, 4);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative border-b border-[color:var(--color-border)]">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-[var(--width-full)] px-6 py-20 sm:px-8 sm:py-28">
          <div className="max-w-[var(--width-prose)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="dot dot-active" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
                live · v0.2
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[color:var(--color-fg)] sm:text-4xl md:text-5xl">
              A working archive of projects, notes and experiments{' '}
              <span className="text-[color:var(--color-fg-2)]">
                &mdash; things I&rsquo;m building, learning and slowly refining over time.
              </span>
            </h1>
            <p className="mt-6 font-mono text-sm text-[color:var(--color-fg-3)]">
              Updated when there&rsquo;s something worth saying. Quiet when there isn&rsquo;t.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[var(--width-full)] px-6 sm:px-8">
        {/* ============ NOW ============ */}
        <section className="border-b border-[color:var(--color-border)] py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[10rem_1fr]">
            <div>
              <h2 className="label">/ now</h2>
              <Link
                href="/now"
                className="mt-2 inline-block font-mono text-xs text-[color:var(--color-fg-3)] !border-b-0 hover:!text-[color:var(--color-accent)]"
              >
                more &rarr;
              </Link>
            </div>
            <div className="max-w-[var(--width-prose)]">
              <p className="text-[color:var(--color-fg-2)]">
                Shaping the first real version of this site. Documenting the
                Tiguan build properly. Turning recent AI website experiments
                into proper project logs. Beginning the longer Zen Captures
                story.
              </p>
            </div>
          </div>
        </section>

        {/* ============ RECENT ============ */}
        <section className="border-b border-[color:var(--color-border)] py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[10rem_1fr]">
            <div>
              <h2 className="label">/ recent</h2>
              <Link
                href="/notes"
                className="mt-2 inline-block font-mono text-xs text-[color:var(--color-fg-3)] !border-b-0 hover:!text-[color:var(--color-accent)]"
              >
                all notes &rarr;
              </Link>
            </div>
            <div className="max-w-[var(--width-wide)]">
              <PostList items={recent} />
            </div>
          </div>
        </section>

        {/* ============ SELECTED WORK ============ */}
        <section className="py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[10rem_1fr]">
            <div>
              <h2 className="label">/ work</h2>
              <Link
                href="/work"
                className="mt-2 inline-block font-mono text-xs text-[color:var(--color-fg-3)] !border-b-0 hover:!text-[color:var(--color-accent)]"
              >
                all work &rarr;
              </Link>
            </div>
            <div className="max-w-[var(--width-wide)]">
              <ProjectList projects={featured} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
