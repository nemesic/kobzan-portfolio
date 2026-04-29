"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons";
import { ease } from "@/lib/motion";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease }}
      className="group relative grid sm:grid-cols-[1fr_auto] gap-4 py-5 px-4 sm:-mx-4 rounded-xl first:pt-5 last:pb-5 border-b border-border/20 last:border-b-0 sm:border-b-0 hover:bg-surface/60 transition-colors duration-200"
    >

      <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>

        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className="text-[10px] font-mono text-muted/50 group-hover:text-accent transition-colors duration-200">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-sm font-semibold text-text group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h3>
          {project.demo && (
            <span className="text-[9px] font-medium text-accent border border-accent/30 rounded px-1.5 py-0.5 leading-none tracking-wide uppercase">
              Live
            </span>
          )}
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-muted/50 border border-border group-hover:border-accent/20 group-hover:text-accent/70 rounded px-1.5 py-0.5 leading-none transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[10px] text-muted/40 rounded px-1 py-0.5 leading-none">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed">{project.description}</p>
      </div>


      <div className="flex items-start gap-3 shrink-0 pt-0.5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/50 hover:text-text transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={13} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/50 hover:text-text transition-colors duration-200"
            aria-label="Live demo"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </motion.article>
  );
}