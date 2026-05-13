import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// =====================================================================
//  TYPES
// =====================================================================

export type NoteKind = 'essay' | 'log' | 'note' | 'link' | 'talk';

export type NoteFrontmatter = {
  title: string;
  slug: string;
  date: string;
  kind: NoteKind;
  project?: string;
  tags?: string[];
  summary: string;
  draft?: boolean;
};

export type ProjectStatus =
  | 'active'
  | 'shipped'
  | 'archived'
  | 'abandoned';

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  status: ProjectStatus;
  started: string;
  ended?: string | null;
  role?: string;
  stack?: string[];
  links?: { live?: string; source?: string; writeup?: string };
  summary: string;
  hero?: string;
  draft?: boolean;
};

export type Note = NoteFrontmatter & {
  content: string;
  readingTime: number;
};

export type Project = ProjectFrontmatter & {
  content: string;
};

// =====================================================================
//  PATHS
// =====================================================================

const CONTENT_ROOT = path.join(process.cwd(), 'content');
const NOTES_DIR = path.join(CONTENT_ROOT, 'notes');
const WORK_DIR = path.join(CONTENT_ROOT, 'work');

// =====================================================================
//  NOTES
// =====================================================================

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  const files = fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const notes = files.map((file) => {
    const raw = fs.readFileSync(path.join(NOTES_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const frontmatter = data as NoteFrontmatter;
    return {
      ...frontmatter,
      content,
      readingTime: Math.ceil(readingTime(content).minutes),
    };
  });

  return notes
    .filter((n) => !n.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string): Note | null {
  const all = getAllNotes();
  return all.find((n) => n.slug === slug) ?? null;
}

// Returns the previous and next notes for chronological navigation
export function getNoteSiblings(slug: string): {
  prev: Note | null;
  next: Note | null;
} {
  const all = getAllNotes();
  const idx = all.findIndex((n) => n.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: all[idx + 1] ?? null, // older
    next: all[idx - 1] ?? null, // newer
  };
}

// All notes linked to a given project
export function getNotesForProject(projectSlug: string): Note[] {
  return getAllNotes().filter((n) => n.project === projectSlug);
}

// =====================================================================
//  PROJECTS
// =====================================================================

export function getAllProjects(): Project[] {
  if (!fs.existsSync(WORK_DIR)) return [];

  const folders = fs
    .readdirSync(WORK_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const projects = folders
    .map((folder) => {
      const filePath = path.join(WORK_DIR, folder.name, 'index.mdx');
      const altPath = path.join(WORK_DIR, folder.name, 'index.md');
      const resolved = fs.existsSync(filePath)
        ? filePath
        : fs.existsSync(altPath)
        ? altPath
        : null;
      if (!resolved) return null;

      const raw = fs.readFileSync(resolved, 'utf8');
      const { data, content } = matter(raw);
      const frontmatter = data as ProjectFrontmatter;
      return { ...frontmatter, content };
    })
    .filter((p): p is Project => p !== null);

  return projects
    .filter((p) => !p.draft)
    .sort((a, b) => (a.started < b.started ? 1 : -1));
}

export function getProject(slug: string): Project | null {
  const all = getAllProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

// =====================================================================
//  COMBINED FEED (homepage "recent")
// =====================================================================

export type FeedItem = {
  type: 'note' | 'project';
  date: string;
  title: string;
  slug: string;
  summary: string;
  label: string;
};

export function getRecentFeed(limit = 8): FeedItem[] {
  const notes: FeedItem[] = getAllNotes().map((n) => ({
    type: 'note',
    date: n.date,
    title: n.title,
    slug: `/notes/${n.slug}`,
    summary: n.summary,
    label: n.kind,
  }));

  const projects: FeedItem[] = getAllProjects().map((p) => ({
    type: 'project',
    date: p.started,
    title: p.title,
    slug: `/work/${p.slug}`,
    summary: p.summary,
    label: 'project',
  }));

  return [...notes, ...projects]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

// =====================================================================
//  FORMATTING
// =====================================================================

export function formatDate(iso: string, opts?: { short?: boolean }): string {
  const date = new Date(iso);
  if (opts?.short) {
    return date.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: 'short',
    });
  }
  return date.toLocaleDateString('en-AU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
