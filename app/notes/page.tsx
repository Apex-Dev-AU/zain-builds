import type { Metadata } from 'next';
import { getAllNotes, type FeedItem } from '@/lib/content';
import { PostList } from '@/components/PostList';

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Essays, build logs, and short observations. One stream, in reverse chronological order.',
};

export default function NotesPage() {
  const notes = getAllNotes();

  const items: FeedItem[] = notes.map((n) => ({
    type: 'note',
    date: n.date,
    title: n.title,
    slug: `/notes/${n.slug}`,
    summary: n.summary,
    label: n.kind,
  }));

  const byYear = items.reduce<Record<string, FeedItem[]>>((acc, item) => {
    const year = new Date(item.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-[var(--width-full)] px-6 py-16 sm:px-8 sm:py-20">
      <header className="border-b border-[color:var(--color-border)] pb-10">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          ~/notes
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
          Notes
        </h1>
        <p className="mt-4 max-w-[var(--width-prose)] text-[color:var(--color-fg-2)]">
          Essays, build logs, and short observations. One stream, in
          reverse chronological order. Some finished. Some left in the
          open.
        </p>
        <p className="mt-3 font-mono text-xs text-[color:var(--color-fg-3)]">
          {items.length} {items.length === 1 ? 'entry' : 'entries'} &middot;{' '}
          {years.length} {years.length === 1 ? 'year' : 'years'}
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {years.length === 0 && (
          <p className="font-mono text-sm text-[color:var(--color-fg-3)]">
            // nothing here yet
          </p>
        )}
        {years.map((year) => (
          <section key={year}>
            <h2 className="label">/ {year}</h2>
            <div className="mt-4 max-w-[var(--width-wide)]">
              <PostList items={byYear[year]} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
