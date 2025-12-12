import { resume } from "@/lib/resume";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {resume.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
