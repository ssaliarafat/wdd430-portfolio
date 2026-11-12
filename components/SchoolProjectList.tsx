import ProjectFetcher from "@/components/ProjectFetcher";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  const projects = await getProjects("school");

  return <ProjectFetcher projects={projects} />;
}