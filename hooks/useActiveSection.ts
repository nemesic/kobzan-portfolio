"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["hero", "about", "stack", "projects", "experience", "education", "contact"];

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "-40% 0px -55% 0px",
};

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        OBSERVER_OPTIONS,
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}