import Link from 'next/link';
import { formatDate, type FeedItem } from '@/lib/content';

export function PostList({ items }: { items: FeedItem[] }) {
  if (items.length === 0) {
    return (
      <p className="font-mono text-sm text-[color:var(--color-fg-3)]">
        // nothing here yet
      </p>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.slug} className="border-b border-[color:var(--color-border)] last:border-b-0">
          <Link
            href={item.slug}
            className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 py-3.5 !border-b-0 sm:grid-cols-[6rem_1fr_5rem] sm:gap-6"
          >
            <time
              dateTime={item.date}
              className="font-mono text-xs text-[color:var(--color-fg-3)] transition-colors group-hover:text-[color:var(--color-fg-2)]"
            >
              {formatDateDevStyle(item.date)}
            </time>

            <span className="text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
              {item.title}
            </span>

            <span className="hidden font-mono text-xs text-[color:var(--color-fg-3)] sm:inline">
              [{item.label}]
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Format dates like "2026.02.10" — dev-tool style
function formatDateDevStyle(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}
