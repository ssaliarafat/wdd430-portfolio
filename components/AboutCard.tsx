
interface AboutCardProps {
  name: string;
  role: string;
  interests: string[];
}

export default function AboutCard({
  name,
  role,
  interests,
}: AboutCardProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        {name}
      </h2>

      <p className="mb-6 text-blue-600 font-medium">
        {role}
      </p>

      <h3 className="mb-3 text-lg font-semibold text-gray-900">
        My Interests
      </h3>

      <ul className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
