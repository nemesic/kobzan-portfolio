"use client";

import { useEffect, useRef } from "react";

interface NavGlowOrbProps {
  className?: string;
}

export default function NavGlowOrb({ className }: NavGlowOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<number>(0);
  const t0 = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    t0.current = performance.now();


    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);


    const sn = (t: number, f1: number, f2: number, s1: number, s2: number) =>
      Math.sin(t * f1 + s1) * 0.65 + Math.sin(t * f2 + s2) * 0.35;

    const draw = (now: number) => {
      const t = (now - t0.current) / 1000;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);


      const cx = W * 0.5 + sn(t, 0.22, 0.41, 0.0, 2.4) * W * 0.13;
      const cy = H * 0.46 + sn(t, 0.18, 0.37, 1.7, 4.1) * H * 0.11;

      const breathe = 1 + Math.sin(t * 0.72 + 0.3) * 0.06 + Math.sin(t * 1.3 + 1.1) * 0.025;
      const r = Math.min(W, H) * 0.36 * breathe;


      const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 3.6);
      g1.addColorStop(0.0, "rgba(99,102,241,0.08)");
      g1.addColorStop(1.0, "rgba(99,102,241,0.00)");
      ctx.beginPath();
      ctx.arc(cx, cy, r * 3.6, 0, Math.PI * 2);
      ctx.fillStyle = g1;
      ctx.fill();


      const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 2.0);
      g2.addColorStop(0.0, "rgba(129,140,248,0.16)");
      g2.addColorStop(0.55, "rgba(99,102,241,0.07)");
      g2.addColorStop(1.0, "rgba(99,102,241,0.00)");
      ctx.beginPath();
      ctx.arc(cx, cy, r * 2.0, 0, Math.PI * 2);
      ctx.fillStyle = g2;
      ctx.fill();


      const g3 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g3.addColorStop(0.00, "rgba(165,180,252,0.72)");
      g3.addColorStop(0.38, "rgba(129,140,248,0.46)");
      g3.addColorStop(0.72, "rgba(99,102,241,0.18)");
      g3.addColorStop(1.00, "rgba(79,70,229,0.00)");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = g3;
      ctx.fill();


      const g4 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.30);
      g4.addColorStop(0.0, "rgba(224,231,255,0.92)");
      g4.addColorStop(0.5, "rgba(196,181,254,0.38)");
      g4.addColorStop(1.0, "rgba(165,180,252,0.00)");
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.30, 0, Math.PI * 2);
      ctx.fillStyle = g4;
      ctx.fill();

      rafId.current = requestAnimationFrame(draw);
    };

    rafId.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}