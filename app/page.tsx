import Link from "next/link";
import { resume } from "@/lib/resume";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = resume.projects.slice(0, 2);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-border bg-card p-7">
        <p className="text-sm text-white/70">{resume.role}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{resume.name}</h1>
        <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">{resume.objective}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-xl border border-border bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            href={resume.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-xl border border-border bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            href={resume.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-xl border border-border bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            href={resume.links.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
          <Link
            className="rounded-xl border border-border bg-blue-500/20 px-4 py-2 text-sm hover:bg-blue-500/30"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </section>

      <Section title="Featured projects" actionHref="/projects" actionText="View all">
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      <Section title="Quick info">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-white/70">Email</p>
            <p className="mt-1">{resume.email}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-white/70">Phone</p>
            <p className="mt-1">{resume.phone}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-white/70">Focus</p>
            <p className="mt-1">Next.js + Full Stack + SEO</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
