"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Array<{
      x: number; y: number;
      vx: number; vy: number;
      alpha: number; size: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 232, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 232, 255, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-zs-violet/8 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-zs-cyan/6 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Protocol badge */}
      <div className="relative z-10 mb-8 flex items-center gap-3">
        <div className="h-px w-12 bg-zs-cyan/40" />
        <span className="tag-badge text-zs-cyan/70 border border-zs-cyan/20 px-3 py-1 rounded-full bg-zs-cyan/5">
          ZETTA Ecosystem — Liquidity Layer
        </span>
        <div className="h-px w-12 bg-zs-cyan/40" />
      </div>

      {/* Main title */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-syne font-extrabold text-[clamp(3rem,9vw,8rem)] leading-none tracking-tight mb-6">
          <span className="block text-zs-text">INTELLIGENT</span>
          <span className="block text-gradient-cyan">LIQUIDITY</span>
          <span className="block text-zs-text">INFRASTRUCTURE</span>
        </h1>

        <p className="font-dm text-lg text-zs-muted max-w-2xl mx-auto leading-relaxed mb-10">
          Z-SWAP is a protocol-level liquidity intelligence platform — combining
          decentralized exchange mechanics, multi-chain architecture, and AI-assisted
          market analysis into a unified institutional-grade layer.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#what-is"
            className="group relative px-8 py-3.5 bg-zs-cyan text-zs-bg font-syne font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-zs-cyan-dim transition-colors duration-200"
          >
            <span className="relative z-10">Explore Protocol</span>
          </a>
          <a
            href="#architecture"
            className="px-8 py-3.5 border border-zs-border bg-transparent text-zs-text font-syne font-semibold text-sm tracking-widest uppercase rounded-lg hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200"
          >
            View Architecture
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 w-full mt-20 border-t border-zs-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "132", label: "Protocol Functions", suffix: "+" },
            { value: "7", label: "Core System Layers", suffix: "" },
            { value: "Multi", label: "Chain Architecture", suffix: "" },
            { value: "VARA", label: "Regulatory Alignment", suffix: "" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-syne font-bold text-2xl lg:text-3xl text-zs-cyan">
                {stat.value}{stat.suffix}
              </div>
              <div className="font-mono text-xs text-zs-muted tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] text-zs-muted tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zs-muted to-transparent" />
      </div>
    </section>
  );
}
