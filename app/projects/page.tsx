import { Suspense } from "react";
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/lib/projects-db";

import ProjectFetcher from "@/components/ProjectFetcher";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";

interface ProjectsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export const instant = false;

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const params = await searchParams;

  const query = (params.query ?? "").trim().slice(0, 100);

  const requestedPage = Number(params.page) || 1;

  const safePage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const totalPages = await fetchProjectsPages(query);

  const currentPage =
    totalPages > 0 ? Math.min(safePage, totalPages) : 1;

  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>

      <Suspense fallback={<p>Loading search...</p>}>
        <ProjectSearch />
      </Suspense>

      <ProjectFetcher projects={projects} />

      <Suspense fallback={<p>Loading pagination...</p>}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </main>
  );
}