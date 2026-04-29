"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUpVariant}
            className="section-label mb-10"
          >
            Experience
          </motion.p>

          <div className="relative flex flex-col pl-6">

            <span className="absolute left-1.5 top-2 bottom-2 w-px bg-border" />

            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeUpVariant}
                className="group relative grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 py-6 first:pt-0 last:pb-0"
              >

                <span
                  className={`absolute -left-6 top-7 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                    exp.period.includes("Present")
                      ? "border-accent bg-accent/20 shadow-[0_0_8px_2px_rgba(129,140,248,0.5)]"
                      : "border-border bg-bg group-hover:border-accent group-hover:bg-accent/20"
                  }`}
                />

                <div>
                  <p className="text-sm font-semibold text-text mb-0.5 group-hover:text-accent transition-colors duration-200">
                    {exp.role}
                    <span className="text-muted font-normal"> · {exp.company}</span>
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                </div>
                <p className="text-sm text-muted/60 shrink-0">{exp.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}