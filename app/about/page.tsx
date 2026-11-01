
import AboutCard from "@/components/AboutCard";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          About Me
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-gray-600">
          I am a software development student interested in visual effects, web development, and creative projects. I enjoy building websites, creating
          useful digital experiences and exploring the possibilities
          of technology.
        </p>
      </div>

      <AboutCard
        name="Ssali Arafat"
        role="Software Development Student"
        interests={[
          "Web Development",
          "Visual Effects",
          "Technology",
          "Creative Projects",
        ]}
      />
    </div>
  );
}
