import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[var(--width-full)] px-6 py-32 sm:px-8">
      <div className="max-w-[var(--width-prose)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-fg-3)]">
          error 404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
          Nothing here.
        </h1>
        <p className="mt-4 text-[color:var(--color-fg-2)]">
          The page you&rsquo;re looking for has moved, been renamed,
          or never existed.
        </p>
        <div className="mt-8 flex flex-col gap-2 font-mono text-sm">
          <Link
            href="/"
            className="!border-b-0 text-[color:var(--color-fg-2)] hover:!text-[color:var(--color-accent)]"
          >
            &rarr; ~/
          </Link>
          <Link
            href="/notes"
            className="!border-b-0 text-[color:var(--color-fg-2)] hover:!text-[color:var(--color-accent)]"
          >
            &rarr; ~/notes
          </Link>
          <Link
            href="/work"
            className="!border-b-0 text-[color:var(--color-fg-2)] hover:!text-[color:var(--color-accent)]"
          >
            &rarr; ~/work
          </Link>
        </div>
      </div>
    </div>
  );
}
