
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mb-4 text-gray-600">
        {description}
      </p>

      <p className="mb-4 text-sm text-gray-500">
        <span className="font-semibold">Technologies:</span>{" "}
        {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}
