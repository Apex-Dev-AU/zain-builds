// Site-wide configuration. Edit here to update every page that references it.

export const siteConfig = {
  name: 'Zain Builds',
  shortName: 'Zain',
  // Quiet identity shown in the footer. Two words, no copyright.
  identity: 'Zain · Collections',
  tagline: 'A working archive of projects, notes and experiments.',
  description:
    'A working archive of projects, notes and experiments — things being built, learned and slowly refined over time.',
  author: 'Zain',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zainbuilds.com',
  locale: 'en-AU',
  social: {
    // Fill in when ready. Empty values are hidden.
    email: '',
    github: '',
    instagram: '',
  },
  nav: [
    { label: 'work', href: '/work' },
    { label: 'notes', href: '/notes' },
    { label: 'now', href: '/now' },
    { label: 'uses', href: '/uses' },
  ],
  // Quiet furniture in the footer. Now and Uses live in the top nav,
  // so they aren't duplicated here.
  footer: [
    { label: 'colophon', href: '/colophon' },
    { label: 'rss', href: '/rss.xml' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
