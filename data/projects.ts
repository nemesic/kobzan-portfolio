export interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  // {
  //   id: 1,
  //   name: "DevPalette",
  //   description:
  //     "Color palette generator with real-time CSS, Tailwind, and SCSS export. Features a WCAG contrast ratio checker and dark/light mode preview.",
  //   stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  //   github: "https://github.com/nemesic",
  // },
  // {
  //   id: 2,
  //   name: "CodeVault",
  //   description:
  //     "Snippet manager with syntax highlighting, tag system, and full-text search. Save, organise, and instantly copy your most-used code fragments.",
  //   stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  //   github: "https://github.com/nemesic",
  // },
  // {
  //   id: 3,
  //   name: "TermiNote",
  //   description:
  //     "Minimal markdown note-taking PWA with real-time preview, file tree sidebar, and offline support via Service Worker.",
  //   stack: ["React", "TypeScript", "CSS Modules", "PWA"],
  //   github: "https://github.com/nemesic",
  // },
  {
  id: 1,
  name: "Personal Portfolio",
  description: "Modern frontend project focused on UI design, performance and component architecture using Next.js.",
  stack: ["Next.js", "TypeScript", "React"],
  }
];