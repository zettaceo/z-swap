"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const { t }     = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf: number;
    type Particle = { x: number; y: number; vx: number; vy: number; ox: number; oy: number; a: number; r: number; };

    const PARTICLE_COUNT = 55;
    const CONNECTION_DIST = 100;
    const MOUSE_REPEL_DIST = 110;
    const MOUSE_REPEL_FORCE = 0.35;
    const pts: Particle[] = [];

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const vx = (Math.random() - 0.5) * 0.22;
      const vy = (Math.random() - 0.5) * 0.22;
      pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx, vy, ox: vx, oy: vy, a: Math.random() * 0.20 + 0.06, r: Math.random() * 1.0 + 0.4 });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx + dy*dy);
          if (d < CONNECTION_DIST) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(0,232,255,${0.045*(1-d/CONNECTION_DIST)})`; ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx*dx + dy*dy);
        if (d < MOUSE_REPEL_DIST && d > 0) { const force = (1 - d/MOUSE_REPEL_DIST)*MOUSE_REPEL_FORCE; p.vx += (dx/d)*force; p.vy += (dy/d)*force; }
        p.vx += (p.ox - p.vx)*0.03; p.vy += (p.oy - p.vy)*0.03;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        const nearMouse = d < MOUSE_REPEL_DIST;
        ctx.beginPath(); ctx.fillStyle = `rgba(0,232,255,${nearMouse ? Math.min(p.a*2.2, 0.85) : p.a})`; ctx.arc(p.x, p.y, nearMouse ? p.r*1.6 : p.r, 0, Math.PI*2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onMouseMove  = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onTouchMove  = (e: TouchEvent) => { if (!e.touches[0]) return; const r = canvas.getBoundingClientRect(); mouseRef.current = { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top }; };
    const onTouchEnd   = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove",  onTouchMove,  { passive: true });
    canvas.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
      canvas.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <section className="hero-section relative flex flex-col overflow-x-hidden grid-bg">
      <canvas ref={canvasRef} className="particle-canvas absolute inset-0 w-full h-full opacity-55 pointer-events-auto" aria-hidden="true" />

      {/* Ambient glows */}
      <div className="absolute top-[20%] left-[15%] w-48 sm:w-72 lg:w-[420px] h-48 sm:h-72 lg:h-[420px] rounded-full bg-zs-violet/[0.08] blur-[80px] lg:blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 rounded-full bg-zs-cyan/[0.05] blur-[60px] lg:blur-[90px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">

        {/* Badge */}
        <div className="mb-5 sm:mb-6 lg:mb-8 flex items-center gap-2.5 sm:gap-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-zs-cyan/50" />
          <span className="font-mono text-[10px] sm:text-[11px] lg:text-xs text-zs-cyan/80 border border-zs-cyan/25 px-3 sm:px-4 py-1.5 rounded-full bg-zs-cyan/[0.06] tracking-[0.2em] uppercase whitespace-nowrap backdrop-blur-sm">
            {t.hero.badge}
          </span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-zs-cyan/50" />
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold tracking-[-0.03em] mb-5 sm:mb-6 lg:mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <span className="block text-zs-text text-[clamp(2.2rem,8vw,7.5rem)] leading-[0.9]">{t.hero.line1}</span>
          <span className="block text-gradient-cyan text-[clamp(2.2rem,8vw,7.5rem)] leading-[0.9] py-1 sm:py-2">{t.hero.line2}</span>
          <span className="block text-zs-text text-[clamp(2.2rem,8vw,7.5rem)] leading-[0.9]">{t.hero.line3}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm text-sm sm:text-base lg:text-lg text-zs-muted/90 max-w-[280px] sm:max-w-lg lg:max-w-2xl leading-[1.7] mb-7 sm:mb-8 lg:mb-10 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          <a href="#what-is" className="group relative flex-shrink-0 whitespace-nowrap px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 bg-zs-cyan text-zs-bg font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-[0.15em] uppercase rounded-xl hover:bg-zs-cyan-dim transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,232,255,0.25)]">
            {t.hero.cta1}
          </a>
          <a href="#architecture" className="flex-shrink-0 whitespace-nowrap px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 border border-zs-border/80 text-zs-text font-syne font-bold text-[11px] sm:text-xs lg:text-sm tracking-[0.15em] uppercase rounded-xl hover:border-zs-cyan/50 hover:text-zs-cyan transition-all duration-300 backdrop-blur-sm">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 flex-shrink-0 border-t border-zs-border/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-6 grid grid-cols-4">
          {([
            { value: "132+",  label: t.hero.stat1, color: "text-zs-cyan"          },
            { value: "7",     label: t.hero.stat2, color: "text-zs-cyan"          },
            { value: "Multi", label: t.hero.stat3, color: "text-zs-violet-bright" },
            { value: "VARA",  label: t.hero.stat4, color: "text-zs-gold"          },
          ] as const).map((stat, i) => (
            <div key={i} className="text-center px-1">
              <div className={`font-syne font-bold text-lg sm:text-2xl lg:text-3xl ${stat.color} tracking-tight`}>{stat.value}</div>
              <div className="font-mono text-[7px] sm:text-[9px] lg:text-[11px] text-zs-muted/70 tracking-[0.15em] uppercase mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
