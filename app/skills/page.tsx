import { resume } from "@/lib/resume";

export const metadata = { title: "Skills" };

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-sm text-white/85">
      {children}
    </span>
  );
}

export default function SkillsPage() {
  const { skills, softSkills } = resume;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Skills</h1>

      <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Programming</h2>
          <div className="flex flex-wrap gap-2">{skills.languages.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Frontend</h2>
          <div className="flex flex-wrap gap-2">{skills.frontend.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Backend</h2>
          <div className="flex flex-wrap gap-2">{skills.backend.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Databases</h2>
          <div className="flex flex-wrap gap-2">{skills.databases.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Tools</h2>
          <div className="flex flex-wrap gap-2">{skills.tools.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Concepts</h2>
          <div className="flex flex-wrap gap-2">{skills.concepts.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium">Soft skills</h2>
          <div className="flex flex-wrap gap-2">{softSkills.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>
      </div>
    </div>
  );
}
