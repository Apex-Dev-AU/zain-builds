import type { MetadataRoute } from 'next';
import { getAllNotes, getAllProjects } from '@/lib/content';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    '',
    '/work',
    '/notes',
    '/about',
    '/now',
    '/uses',
    '/colophon',
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  const noteRoutes = getAllNotes().map((note) => ({
    url: `${base}/notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: project.ended
      ? new Date(project.ended)
      : new Date(project.started),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...noteRoutes, ...projectRoutes];
}
