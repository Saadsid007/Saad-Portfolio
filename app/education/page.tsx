import { resume } from "@/lib/resume";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Education</h1>

      <div className="grid gap-4">
        {resume.education.map((e) => (
          <div key={e.institute} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-medium">{e.program}</h2>
              <p className="text-sm text-white/70">{e.timeline}</p>
            </div>
            <p className="mt-2 text-white/85">{e.institute}</p>
            <p className="mt-1 text-sm text-white/70">Score: {e.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
