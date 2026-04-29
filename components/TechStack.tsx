"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { stack } from "@/data/stack";
import { techIcons } from "@/data/icons";
import { fadeUpView, fadeUpVariant, staggerContainer } from "@/lib/motion";

const CATEGORY_ORDER = ["Language", "Framework", "Styling", "Tooling", "Runtime", "Database", "ORM", "Design", "DevOps"];

function StackCard({ name, index = 0 }: { name: string; index?: number }) {
  const [hovered, setHovered] = useState(false);
  const icon = techIcons[name];
  const resolvedHex = icon?.hex === "000000" ? "ffffff" : (icon?.hex ?? "818cf8");


  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) return;

    const HALF = 1200; // 1.2s on, 1.2s off = 2.4s cycle
    const offset = (index % 16) * 150;

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startId = setTimeout(() => {
      setHovered(true);
      intervalId = setInterval(() => {
        setHovered((p) => !p);
      }, HALF);
    }, offset);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [index]);

  return (
    <motion.div
      variants={fadeUpVariant}
      className="flex items-center gap-2.5 py-1.5 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon && (
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 shrink-0"
          style={{
            fill: hovered ? `#${resolvedHex}` : "var(--color-muted)",
            transition: "fill 0.6s ease",
          }}
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      )}
      <span
        className="text-sm"
        style={{
          color: hovered ? "var(--color-text)" : "var(--color-muted)",
          transition: "color 0.6s ease",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const grouped = CATEGORY_ORDER.reduce<Record<string, string[]>>((acc, cat) => {
    const items = stack.filter((s) => s.category === cat).map((s) => s.name);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  let cardIndex = 0;

  return (
    <section id="stack" className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUpView()} className="section-label mb-10">
          Stack
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-6"
        >
          {Object.entries(grouped).map(([category, names]) => (
            <motion.div key={category} variants={fadeUpVariant}>
              <p className="text-[10px] font-medium text-muted/50 uppercase tracking-widest mb-2">{category}</p>
              <div className="flex flex-col">
                {names.map((name) => {
                  const idx = cardIndex++;
                  return <StackCard key={name} name={name} index={idx} />;
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}