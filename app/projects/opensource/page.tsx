import ProjectFetcher from "@/components/ProjectFetcher";

export default function OpenSourcePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>
      <ProjectFetcher endpoint="/api/projects?type=opensource" />
    </main>
  );
}