export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
  id: 1,
  degree: "Bachelor of Computer Science",
  school: "Vasyl Stefanyk Precarpathian National University",
  period: "2020 — 2024",
  description:
    "Computer Science fundamentals: algorithms, data structures, OOP, databases, and software engineering principles.",
  },
  {
  id: 2,
  degree: "Frontend Development Program",
  school: "Prog Academy",
  period: "2025 — 2026",
  description:
    "Focused on modern frontend development: React, TypeScript, state management, API integration, and responsive UI systems.",
  },
  {
  id: 3,
  degree: "Full-Stack Web Development (Self-study)",
  school: "The Odin Project",
  period: "2026 — present",
  description:
    "Self-paced learning focused on JavaScript, React, Node.js, and full-stack application architecture.",
  },
];