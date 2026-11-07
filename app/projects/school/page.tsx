import ProjectFetcher from "@/components/ProjectFetcher";

export default function SchoolProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>
      <ProjectFetcher endpoint="/api/projects?type=school" />
    </main>
  );
}