import ProjectFetcher from "@/components/ProjectFetcher";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <ProjectFetcher endpoint="/api/projects" />
    </main>
  );
}