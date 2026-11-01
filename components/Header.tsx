
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          My Portfolio
        </Link>

        <div className="flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
