"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { fadeUpView } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          {...fadeUpView()}
          className="section-label mb-10"
        >
          Projects
        </motion.p>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}