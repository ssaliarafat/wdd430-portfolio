"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export default function ProjectFetcher({
  endpoint,
}: {
  endpoint: string;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Could not load projects.");
        }

        const data: Project[] = await response.json();
        setProjects(data);
      } catch {
        setError("Unable to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [endpoint]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;
  if (projects.length === 0) return <p>No projects found.</p>;

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