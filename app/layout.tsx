import type { Metadata } from "next";
import "./globals.css";
import { resume } from "@/lib/resume";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `${resume.name} — Portfolio`,
  description: `${resume.name} (${resume.role}) — Full-stack projects, skills, and contact.`,
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: `${resume.name} — Portfolio`,
    description: `${resume.name} (${resume.role}) — Full-stack projects, skills, and contact.`,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
