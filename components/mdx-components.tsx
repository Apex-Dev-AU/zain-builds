import type { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children?: ReactNode;
};

export const mdxComponents = {
  a: ({ href = '', children, ...props }: AnchorProps) => {
    const isInternal = href.startsWith('/') || href.startsWith('#');

    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};