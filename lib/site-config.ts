// Site-wide configuration. Edit here to update every page that references it.

export const siteConfig = {
  name: 'Digital Workshop',
  shortName: 'Workshop',
  tagline: 'A working archive of things being made and thought about.',
  description:
    'The working archive of [ADD NAME] — projects, notes, and build logs across software, design, photography, and machines.',
  author: '[ADD NAME]',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  locale: 'en-AU',
  social: {
    // Fill in when ready. Empty values are hidden in the footer.
    email: '',
    github: '',
    twitter: '',
    instagram: '',
  },
  nav: [
    { label: 'work', href: '/work' },
    { label: 'notes', href: '/notes' },
    { label: 'about', href: '/about' },
  ],
  footer: [
    { label: 'now', href: '/now' },
    { label: 'uses', href: '/uses' },
    { label: 'colophon', href: '/colophon' },
    { label: 'rss', href: '/rss.xml' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
