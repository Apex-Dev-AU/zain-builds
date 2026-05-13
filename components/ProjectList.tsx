import Link from 'next/link';
import type { Project } from '@/lib/content';

const statusDotClass: Record<string, string> = {
  active: 'dot-active',
  shipped: 'dot-shipped',
  archived: 'dot-archived',
  abandoned: 'dot-archived',
};

export function ProjectList({
  projects,
}: {
  projects: Project[];
}) {
  if (projects.length === 0) {
    return (
      <p className="font-mono text-sm text-[color:var(--color-fg-3)]">
        // nothing here yet
      </p>
    );
  }

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.slug} className="border-b border-[color:var(--color-border)] last:border-b-0">
          <Link
            href={`/work/${project.slug}`}
            className="group grid grid-cols-1 items-baseline gap-2 py-4 !border-b-0 sm:grid-cols-[14rem_1fr_6rem] sm:gap-6"
          >
            <div className="flex items-baseline gap-2.5">
              <span
                className={`dot ${statusDotClass[project.status] || 'dot-archived'}`}
                aria-hidden="true"
              />
              <span className="text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
                {project.title}
              </span>
            </div>

            <span className="text-sm text-[color:var(--color-fg-2)]">
              {project.summary}
            </span>

            <span className="hidden font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)] sm:inline sm:text-right">
              {project.status}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
