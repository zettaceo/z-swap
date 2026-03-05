"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; alpha: number; size: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.35 + 0.08,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,232,255,${0.05 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0,232,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animFrame); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-zs-violet/8 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-zs-cyan/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
          <div className="h-px w-8 sm:w-12 bg-zs-cyan/40" />
          <span className="tag-badge text-zs-cyan/70 border border-zs-cyan/20 px-2.5 sm:px-3 py-1 rounded-full bg-zs-cyan/5 text-[10px] sm:text-xs">
            {t.hero.badge}
          </span>
          <div className="h-px w-8 sm:w-12 bg-zs-cyan/40" />
        </div>

        {/* Title */}
        <h1 className="font-syne font-extrabold leading-none tracking-tight mb-5 sm:mb-6">
          <span className="block text-zs-text text-[2.2rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{t.hero.line1}</span>
          <span className="block text-gradient-cyan text-[2.2rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{t.hero.line2}</span>
          <span className="block text-zs-text text-[2.2rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{t.hero.line3}</span>
        </h1>

        <p className="font-dm text-base sm:text-lg text-zs-muted max-w-xl sm:max-w-2xl leading-relaxed mb-8 sm:mb-10">
          {t.hero.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#what-is" className="px-7 sm:px-8 py-3 sm:py-3.5 bg-zs-cyan text-zs-bg font-syne font-semibold text-sm tracking-widest uppercase rounded-xl hover:bg-zs-cyan-dim transition-colors duration-200">
            {t.hero.cta1}
          </a>
          <a href="#architecture" className="px-7 sm:px-8 py-3 sm:py-3.5 border border-zs-border bg-transparent text-zs-text font-syne font-semibold text-sm tracking-widest uppercase rounded-xl hover:border-zs-cyan/40 hover:text-zs-cyan transition-all duration-200">
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 w-full mt-12 sm:mt-16 border-t border-zs-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "132+", label: t.hero.stat1, color: "text-zs-cyan" },
            { value: "7",    label: t.hero.stat2, color: "text-zs-cyan" },
            { value: "Multi",label: t.hero.stat3, color: "text-zs-violet-bright" },
            { value: "VARA", label: t.hero.stat4, color: "text-zs-gold" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`font-syne font-bold text-xl sm:text-2xl lg:text-3xl ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-zs-muted tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-zs-muted to-transparent" />
      </div>
    </section>
  );
}
