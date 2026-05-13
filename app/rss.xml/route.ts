import { Feed } from 'feed';
import { getAllNotes, getAllProjects } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export async function GET() {
  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'en',
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} ${siteConfig.author}`,
    generator: 'Next.js + feed',
    feedLinks: {
      rss2: `${siteConfig.url}/rss.xml`,
    },
    author: {
      name: siteConfig.author,
      link: siteConfig.url,
    },
  });

  // Notes
  for (const note of getAllNotes()) {
    feed.addItem({
      title: note.title,
      id: `${siteConfig.url}/notes/${note.slug}`,
      link: `${siteConfig.url}/notes/${note.slug}`,
      description: note.summary,
      date: new Date(note.date),
      category: [{ name: note.kind }],
    });
  }

  // Projects
  for (const project of getAllProjects()) {
    feed.addItem({
      title: `${project.title} (project)`,
      id: `${siteConfig.url}/work/${project.slug}`,
      link: `${siteConfig.url}/work/${project.slug}`,
      description: project.summary,
      date: new Date(project.started),
      category: [{ name: 'project' }],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
