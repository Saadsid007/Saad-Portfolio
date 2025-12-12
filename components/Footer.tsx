import { resume } from "@/lib/resume";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {resume.name}</p>
          <div className="flex gap-4">
            <a href={resume.links.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href={resume.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={resume.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-white">
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
