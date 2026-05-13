import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import {
  getNote,
  getAllNotes,
  getNoteSiblings,
  getProject,
} from '@/lib/content';
import { mdxComponents } from '@/components/mdx-components';
import { siteConfig } from '@/lib/site-config';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    openGraph: {
      title: note.title,
      description: note.summary,
      type: 'article',
      publishedTime: note.date,
      url: `${siteConfig.url}/notes/${note.slug}`,
    },
    alternates: { canonical: `/notes/${note.slug}` },
  };
}

function formatDateDev(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default async function NotePage({ params }: Params) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const { prev, next } = getNoteSiblings(slug);
  const linkedProject = note.project ? getProject(note.project) : null;

  return (
    <article className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <div className="max-w-[var(--width-prose)]">
        {/* Breadcrumb */}
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          <Link
            href="/notes"
            className="!border-b-0 hover:!text-[color:var(--color-accent)]"
          >
            ~/notes
          </Link>
          <span className="mx-1.5 text-[color:var(--color-border-2)]">/</span>
          <span className="text-[color:var(--color-fg-2)]">{note.slug}</span>
        </p>

        {/* Header */}
        <header className="mt-6 border-b border-[color:var(--color-border)] pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[color:var(--color-fg-3)]">
            <time dateTime={note.date}>{formatDateDev(note.date)}</time>
            <span className="text-[color:var(--color-border-2)]">·</span>
            <span className="rounded border border-[color:var(--color-border-2)] px-1.5 py-0.5">
              [{note.kind}]
            </span>
            {note.readingTime > 0 && (
              <>
                <span className="text-[color:var(--color-border-2)]">·</span>
                <span>{note.readingTime} min read</span>
              </>
            )}
            {note.tags && note.tags.length > 0 && (
              <>
                <span className="text-[color:var(--color-border-2)]">·</span>
                <span>
                  {note.tags.map((t) => `#${t}`).join(' ')}
                </span>
              </>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
            {note.title}
          </h1>

          {linkedProject && (
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
              part of{' '}
              <Link
                href={`/work/${linkedProject.slug}`}
                className="!border-b-0 text-[color:var(--color-fg-2)] hover:!text-[color:var(--color-accent)]"
              >
                {linkedProject.title}
              </Link>
            </p>
          )}
        </header>

        {/* Body */}
        <div className="prose mt-10">
          <MDXRemote
            source={note.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <nav className="mt-20 grid grid-cols-1 gap-6 border-t border-[color:var(--color-border)] pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/notes/${prev.slug}`}
                className="group flex flex-col gap-1 !border-b-0"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
                  &larr; previous
                </span>
                <span className="text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/notes/${next.slug}`}
                className="group flex flex-col gap-1 text-right !border-b-0 sm:items-end"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
                  next &rarr;
                </span>
                <span className="text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </div>
    </article>
  );
}
