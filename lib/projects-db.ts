export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fifth Version Website",
    description: "A website exploring creativity and technology.",
    type: "opensource",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/ssaliarafat",
  },
  {
    id: 2,
    title: "Film Explorer",
    description: "A project for exploring films.",
    type: "school",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export function getProjects(type?: string | null): Project[] {
  if (type) {
    return projects.filter((project) => project.type === type);
  }

  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((project) => project.id === id) ?? null;
}