export type ResumeProject = {
  title: string;
  subtitle: string;
  tech: string[];
  highlights: string[];
  live?: string;
};

export const resume = {
  name: "Saad Siddiqui",
  role: "Full Stack Developer",
  phone: "+91 9219271405",
  email: "saadsiddiqui8532@gmail.com",
  links: {
    github: "https://github.com/Saadsid007",
    linkedin: "https://www.linkedin.com/in/saadsiddiqui07",
    leetcode: "https://leetcode.com/u/Saad_Sid/"
  },
  objective:
    "Motivated Full-Stack Developer specializing in scalable web apps, clean code, and strong problem-solving. Interested in DSA and end-to-end product development.",
  skills: {
    languages: ["Java", "Python"],
    frontend: ["Next.js", "React.js", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "Firebase", "Cloudinary"],
    concepts: [
      "Authentication & Authorization (JWT/Next-Auth)",
      "MVC Architecture",
      "Server-Side Rendering (SSR)",
      "API Integration",
      "Debugging"
    ]
  },
  softSkills: ["Logical thinking", "Communication", "Teamwork", "Quick learner", "Self-motivated"],
  education: [
    {
      institute: "Dr. A.P.J. Abdul Kalam Technical University",
      program: "Master of Computer Applications",
      timeline: "2024–2026",
      score: "62.5%"
    },
    {
      institute: "Kurukshetra University",
      program: "Bachelor of Computer Applications",
      timeline: "2021–2024",
      score: "6.9 CGPA"
    }
  ],
  projects: [
    {
      title: "TreatBox – Food Ordering & Management System",
      subtitle: "Responsive food ordering app with admin menu management",
      tech: ["Next.js", "MongoDB", "Firebase Auth", "Cloudinary", "Tailwind CSS"],
      live: "https://treatbox.vercel.app",
      highlights: [
        "Dynamic menu, category filters, search, infinite scroll pagination",
        "Role-based access (User/Admin) with secure auth",
        "Cloudinary image management + MongoDB storage (no static JSON)",
        "Performance improvements (lazy loading) + SEO + WhatsApp/Call integration"
      ]
    },
    {
      title: "Employee Management Portal",
      subtitle: "Role-based dashboards for Employees/Managers/Admin",
      tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Next-Auth (JWT)", "Tailwind CSS"],
      live: "https://nexa-datamagics-solutions.vercel.app",
      highlights: [
        "Leave application workflow from request to approval",
        "Auth + authorization with JWT and password hashing (bcrypt)",
        "Responsive UI, searchable tables, Excel export"
      ]
    },
    {
      title: "Smart Car Buying & Selling Platform with Instant Valuation",
      subtitle: "Cars24/Spinny-inspired marketplace UX",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Optimization"],
      highlights: [
        "Buy/Sell/Scrap/Details modules with responsive UI and filtering",
        "SEO: meta tags, canonical URLs, breadcrumbs, structured data",
        "High-conversion lead forms with photo upload, geo-location tracking, conditional validation"
      ]
    }
  ] satisfies ResumeProject[]
};
