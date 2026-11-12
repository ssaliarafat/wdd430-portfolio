import { sql } from './db';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}
const ITEMS_PER_PAGE = 6;

export async function getProjects(
  type?: string | null
): Promise<Project[]> {
  if (type) {
    const rows = await sql`
      SELECT * FROM projects
      WHERE type = ${type}
      ORDER BY id
    `;
    return rows as Project[];
  }

  const rows = await sql`
    SELECT * FROM projects ORDER BY id
  `;

  return rows as Project[];
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const rows = await sql`
    SELECT * FROM projects WHERE id = ${id}
  `;

  return (rows[0] as Project) ?? null;
}

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const sanitizedQuery = query.trim().slice(0, 100);
  const page = Math.max(1, Math.floor(currentPage) || 1);
  const offset = (page - 1) * ITEMS_PER_PAGE;

  if (sanitizedQuery) {
    const searchPattern = `%${sanitizedQuery}%`;

    const rows = await sql`
      SELECT * FROM projects
      WHERE title ILIKE ${searchPattern}
        OR description ILIKE ${searchPattern}
        OR array_to_string(technologies, ' ') ILIKE ${searchPattern}
      ORDER BY id
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset}
    `;

    return rows as Project[];
  }

  const rows = await sql`
    SELECT * FROM projects
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows as Project[];
}

export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const sanitizedQuery = query.trim().slice(0, 100);

  if (sanitizedQuery) {
    const searchPattern = `%${sanitizedQuery}%`;

    const rows = await sql`
      SELECT COUNT(*) AS total FROM projects
      WHERE title ILIKE ${searchPattern}
        OR description ILIKE ${searchPattern}
        OR array_to_string(technologies, ' ') ILIKE ${searchPattern}
    `;

    return Math.ceil(Number(rows[0].total) / ITEMS_PER_PAGE);
  }

  const rows = await sql`
    SELECT COUNT(*) AS total FROM projects
  `;

  return Math.ceil(Number(rows[0].total) / ITEMS_PER_PAGE);
}