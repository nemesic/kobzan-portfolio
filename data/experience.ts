export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer (Self-learning & Practice)",
    company: "Personal Projects",
    period: "2024 — Present",
    description:
      "Focused on building production-style web applications using React, Next.js, and TypeScript. Practicing UI architecture, component reusability, performance optimization, and pixel-perfect implementation from Figma designs.",
  },
];