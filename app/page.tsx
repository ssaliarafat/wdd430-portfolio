
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Film Explorer",
    description:
      "A film exploration application built with Vite. It allows users to explore films through a web-based interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Vite"],
    link: "https://github.com/ssaliarafat/film-explorer",
  },
  {
    title: "Fifth Version Website",
    description:
      "A website developed as my WDD131 final project, showcasing the Fifth Version brand and its creative vision.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ssaliarafat/wdd131/tree/main/project",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-16 text-center">
        <p className="mb-3 font-semibold text-blue-600">
          Welcome to my portfolio
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Hello, My name is Ssali Arafat
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          I enjoy building websites and exploring how technology can be used
          to create useful digital experiences. Here are some of the projects
          I&apos;ve worked on.
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
