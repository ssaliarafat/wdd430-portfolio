"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-wrap gap-6">
      {links.map((link) => {
        const isActive =
          link.href === "/projects"
            ? pathname === "/projects" || pathname.startsWith("/projects/")
            : pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={isActive ? "font-bold underline" : ""}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}