
interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

interface ProjectFetcherProps {
  projects: Project[];
}

export default function ProjectFetcher({
  projects,
}: ProjectFetcherProps) {
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.id} className="border rounded-lg p-5">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="mb-3">{project.description}</p>

          <p className="text-sm mb-3">
            Technologies: {project.technologies.join(", ")}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View Project
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
