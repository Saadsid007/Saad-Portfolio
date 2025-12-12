import Link from "next/link";
import { resume } from "@/lib/resume";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          {resume.name}
        </Link>
        <nav className="flex items-center gap-3">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
