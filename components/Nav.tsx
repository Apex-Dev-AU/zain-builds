import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[var(--width-full)] items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 !border-b-0 text-sm font-semibold tracking-tight hover:!text-[color:var(--color-fg)]"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="dot dot-active" aria-hidden="true" />
          <span className="text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
            {siteConfig.name}
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-2)] !border-b-0 transition-colors hover:!text-[color:var(--color-accent)] hover:bg-[color:var(--color-bg-2)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
