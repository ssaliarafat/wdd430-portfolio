
import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 py-8">
      <nav className="flex gap-6 border-b pb-4 mb-8">
        <Link href="/projects">All Projects</Link>
        <Link href="/projects/opensource">Open Source</Link>
        <Link href="/projects/school">School Projects</Link>
      </nav>

      {children}
    </section>
  );
}
