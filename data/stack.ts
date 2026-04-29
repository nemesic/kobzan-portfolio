export interface StackItem {
  name: string;
  category: string;
}

export const stack: StackItem[] = [
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Git", category: "Tooling" },
  { name: "Figma", category: "Design" },
];