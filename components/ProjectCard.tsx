import type { ResumeProject } from "@/lib/resume";

export default function ProjectCard({ project }: { project: ResumeProject }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
          <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
        </div>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
          >
            Live
          </a>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-white/80">
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
        {project.highlights.slice(0, 4).map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}
