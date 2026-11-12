import ProjectFetcher from "@/components/ProjectFetcher";
import { getProjects } from "@/lib/projects-db";

export const instant = false;

export default async function OpenSourceProjectsPage() {

  const projects = await getProjects("opensource");

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>
      <ProjectFetcher projects={projects} />
    </main>
  );
}