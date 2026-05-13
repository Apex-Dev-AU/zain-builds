import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-[color:var(--color-border)]">
      <div className="mx-auto max-w-[var(--width-full)] px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav>
            <ul className="flex flex-wrap items-center gap-1">
              {siteConfig.footer.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)] !border-b-0 transition-colors hover:!text-[color:var(--color-accent)] hover:bg-[color:var(--color-bg-2)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 font-mono text-xs text-[color:var(--color-fg-3)]">
            <span className="dot dot-active" aria-hidden="true" />
            <span>{siteConfig.author}</span>
            <span className="text-[color:var(--color-border-2)]">·</span>
            <span>© {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
