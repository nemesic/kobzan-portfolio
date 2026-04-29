"use client";

import { useState } from "react";

export default function SpotlightWrapper({ children }: { children: React.ReactNode }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        setMouse({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }}
    >

      <div
        aria-hidden
        className="desktop-spotlight pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(700px circle at ${mouse.x}% ${mouse.y}%, rgba(129,140,248,0.20) 0%, transparent 70%)`,
        }}
      />


      <div aria-hidden className="mobile-orb-1" />
      <div aria-hidden className="mobile-orb-2" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}