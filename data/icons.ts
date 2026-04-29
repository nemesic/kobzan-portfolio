import {
  siTypescript,
  siJavascript,
  siHtml5,
  siReact,
  siVuedotjs,
  siNextdotjs,
  siVite,
  siTailwindcss,
  siCssmodules,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siGit,
  siFigma,
  siDocker,
} from "simple-icons";

export interface IconMeta {
  path: string;
  hex: string;
}

export const techIcons: Record<string, IconMeta> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "HTML & CSS": siHtml5,
  React: siReact,
  Vue: siVuedotjs,
  "Next.js": siNextdotjs,
  Vite: siVite,
  "Tailwind CSS": siTailwindcss,
  "CSS Modules": siCssmodules,
  "Node.js": siNodedotjs,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  Git: siGit,
  Figma: siFigma,
  Docker: siDocker,
};