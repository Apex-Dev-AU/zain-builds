import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import { ProjectList } from '@/components/ProjectList';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Projects in various states of progress — active, shipped, archived.',
};

export default function WorkPage() {
  const projects = getAllProjects();

  const active = projects.filter((p) => p.status === 'active');
  const shipped = projects.filter((p) => p.status === 'shipped');
  const archived = projects.filter(
    (p) => p.status === 'archived' || p.status === 'abandoned'
  );

  return (
    <div className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <header className="border-b border-[color:var(--color-border)] pb-10">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          ~/work
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
          Work
        </h1>
        <p className="mt-4 max-w-[var(--width-prose)] text-[color:var(--color-fg-2)]">
          Projects in various states of progress. Some finished, some
          abandoned, most somewhere in between. Each one links to its
          own build log.
        </p>

        <div className="mt-6 flex flex-wrap gap-6 font-mono text-xs">
          <span className="flex items-center gap-2 text-[color:var(--color-fg-3)]">
            <span className="dot dot-active" /> active &middot; {active.length}
          </span>
          <span className="flex items-center gap-2 text-[color:var(--color-fg-3)]">
            <span className="dot dot-shipped" /> shipped &middot; {shipped.length}
          </span>
          <span className="flex items-center gap-2 text-[color:var(--color-fg-3)]">
            <span className="dot dot-archived" /> archived &middot; {archived.length}
          </span>
        </div>
      </header>

      <div className="mt-12 space-y-12">
        {active.length > 0 && (
          <section>
            <h2 className="label">/ active</h2>
            <div className="mt-4">
              <ProjectList projects={active} />
            </div>
          </section>
        )}

        {shipped.length > 0 && (
          <section>
            <h2 className="label">/ shipped</h2>
            <div className="mt-4">
              <ProjectList projects={shipped} />
            </div>
          </section>
        )}

        {archived.length > 0 && (
          <section>
            <h2 className="label">/ archived</h2>
            <div className="mt-4">
              <ProjectList projects={archived} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
