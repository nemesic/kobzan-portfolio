"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-24 pb-16 flex flex-col items-center text-center">


        <motion.h1
          {...fadeUp(0.05)}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 text-text"
        >
          Oleksii Kobzan
        </motion.h1>


        <motion.p {...fadeUp(0.12)} className="text-lg mb-10 text-muted">
          <span className="hero-sub">Junior Frontend Developer</span>
        </motion.p>


        <motion.div {...fadeUp(0.2)} className="flex items-center gap-5 flex-wrap justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-accent transition-colors duration-200"
          >
            View projects <ArrowUpRight size={13} />
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://github.com/nemesic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href="https://linkedin.com/in/oleksiikobzan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href="#contact"
            className="text-muted hover:text-accent hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </motion.div>
      </div>


      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted/40 hover:text-muted transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="scroll-bounce inline-block">
          <ChevronDown size={18} />
        </span>
      </motion.a>
    </section>
  );
}