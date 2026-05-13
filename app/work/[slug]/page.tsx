import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {
  getProject,
  getAllProjects,
  getNotesForProject,
  formatDate,
} from '@/lib/content';
import { mdxComponents } from '@/components/mdx-components';
import { siteConfig } from '@/lib/site-config';

type Params = { params: Promise<{ slug: string }> };

const statusDotClass: Record<string, string> = {
  active: 'dot-active',
  shipped: 'dot-shipped',
  archived: 'dot-archived',
  abandoned: 'dot-archived',
};

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      url: `${siteConfig.url}/work/${project.slug}`,
    },
    alternates: { canonical: `/work/${project.slug}` },
  };
}

function formatDateDev(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const buildLog = getNotesForProject(project.slug);
  const dotClass = statusDotClass[project.status] || 'dot-archived';

  return (
    <article className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <div className="max-w-[var(--width-wide)]">
        {/* Breadcrumb */}
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          <Link
            href="/work"
            className="!border-b-0 hover:!text-[color:var(--color-accent)]"
          >
            ~/work
          </Link>
          <span className="mx-1.5 text-[color:var(--color-border-2)]">/</span>
          <span className="text-[color:var(--color-fg-2)]">{project.slug}</span>
        </p>

        {/* Header */}
        <header className="mt-6 border-b border-[color:var(--color-border)] pb-10">
          <div className="flex items-center gap-3">
            <span className={`dot ${dotClass}`} aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-[var(--width-prose)] text-lg leading-snug text-[color:var(--color-fg-2)]">
            {project.summary}
          </p>

          {/* Metadata panel — code-block style */}
          <dl className="mt-8 grid w-full max-w-[var(--width-prose)] grid-cols-[5.5rem_1fr] gap-x-6 gap-y-2 rounded border border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] p-5 font-mono text-sm">
            <dt className="text-[color:var(--color-fg-3)]">started</dt>
            <dd className="text-[color:var(--color-fg-2)]">{formatDateDev(project.started)}</dd>

            <dt className="text-[color:var(--color-fg-3)]">ended</dt>
            <dd className="text-[color:var(--color-fg-2)]">
              {project.ended ? formatDateDev(project.ended) : <span className="text-[color:var(--color-accent)]">— present</span>}
            </dd>

            {project.role && (
              <>
                <dt className="text-[color:var(--color-fg-3)]">role</dt>
                <dd className="text-[color:var(--color-fg-2)]">{project.role}</dd>
              </>
            )}

            {project.stack && project.stack.length > 0 && (
              <>
                <dt className="text-[color:var(--color-fg-3)]">stack</dt>
                <dd className="flex flex-wrap gap-1.5 text-[color:var(--color-fg-2)]">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-[color:var(--color-border-2)] px-1.5 py-0.5 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </>
            )}

            {project.links?.live && (
              <>
                <dt className="text-[color:var(--color-fg-3)]">live</dt>
                <dd>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!border-b-0 text-[color:var(--color-fg)] hover:!text-[color:var(--color-accent)]"
                  >
                    {project.links.live.replace(/^https?:\/\//, '')} ↗
                  </a>
                </dd>
              </>
            )}

            {project.links?.source && (
              <>
                <dt className="text-[color:var(--color-fg-3)]">source</dt>
                <dd>
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!border-b-0 text-[color:var(--color-fg)] hover:!text-[color:var(--color-accent)]"
                  >
                    github ↗
                  </a>
                </dd>
              </>
            )}
          </dl>
        </header>

        {/* Body */}
        <div className="prose mt-12 max-w-[var(--width-prose)]">
          <MDXRemote
            source={project.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* Build log */}
        {buildLog.length > 0 && (
          <section className="mt-20 border-t border-[color:var(--color-border)] pt-10">
            <h2 className="label">/ build log</h2>
            <ul className="mt-4 max-w-[var(--width-prose)]">
              {buildLog.map((note) => (
                <li
                  key={note.slug}
                  className="border-b border-[color:var(--color-border)] last:border-b-0"
                >
                  <Link
                    href={`/notes/${note.slug}`}
                    className="group grid grid-cols-[6rem_1fr] items-baseline gap-6 py-3.5 !border-b-0"
                  >
                    <time
                      dateTime={note.date}
                      className="font-mono text-xs text-[color:var(--color-fg-3)]"
                    >
                      {formatDateDev(note.date)}
                    </time>
                    <span className="text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
                      {note.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
