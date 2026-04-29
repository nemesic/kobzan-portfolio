    "use client";

    import { motion } from "framer-motion";
    import { fadeUpVariant, staggerContainer } from "@/lib/motion";

    const facts = [
      { label: "Location", value: "Ukraine 🇺🇦" },
      { label: "Focus", value: "Frontend" },
      { label: "Level", value: "Junior" },
      { label: "Availability", value: "Full-time" },
    ];

    export default function About() {
      return (
        <section id="about" className="py-16 sm:py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >


              <div className="space-y-5 max-w-xl">
                <motion.p variants={fadeUpVariant} className="section-label">
                  About
                </motion.p>
                <motion.p variants={fadeUpVariant} className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug"
                  style={{
                    background: "linear-gradient(150deg, #f4f4f5 40%, #71717a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Junior Frontend Developer<br />
                  from Ukraine.
                </motion.p>
                <motion.p variants={fadeUpVariant} className="text-muted leading-relaxed max-w-lg">
                 I build fast, accessible, and visually refined web applications using React, Next.js, and TypeScript. Focused on UI engineering, performance, and modern frontend architecture.
                </motion.p>
              </div>


              <motion.dl variants={fadeUpVariant} className="flex flex-col gap-4 min-w-35">
                {facts.map(({ label, value }) => (
                  <div key={label} className="group">
                    <dt className="text-[11px] text-muted/50 uppercase tracking-wider mb-0.5">{label}</dt>
                    <dd className="relative text-sm font-medium md:text-text transition-colors duration-200 w-fit">
                      {value}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </motion.div>
          </div>
        </section>
      );
    }