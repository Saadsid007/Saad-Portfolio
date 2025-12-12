import ContactForm from "@/components/ContactForm";
import { resume } from "@/lib/resume";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Contact</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-white/80">
            Prefer email or WhatsApp/call? Use the form or reach out directly.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-white/85">
              Email: <span className="text-white/70">{resume.email}</span>
            </p>
            <p className="text-white/85">
              Phone: <span className="text-white/70">{resume.phone}</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
