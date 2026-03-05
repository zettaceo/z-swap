"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Protocol", href: "#what-is" },
    { label: "Architecture", href: "#architecture" },
    { label: "ZION AI", href: "#ai-layer" },
    { label: "Security", href: "#security" },
    { label: "Ecosystem", href: "#ecosystem" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur border-b border-zs-border bg-zs-bg/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-zs-cyan/20 rounded-lg blur-sm group-hover:bg-zs-cyan/30 transition-colors" />
              <div className="relative w-8 h-8 border border-zs-cyan/50 rounded-lg flex items-center justify-center group-hover:border-zs-cyan transition-colors">
                <span className="font-syne font-800 text-zs-cyan text-sm leading-none">Z</span>
              </div>
            </div>
            <div>
              <span className="font-syne font-bold text-zs-text text-base tracking-wider">Z-SWAP</span>
              <span className="block font-mono text-[9px] text-zs-muted tracking-[0.2em] uppercase leading-none">ZETTA Protocol</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-zs-muted hover:text-zs-cyan tracking-widest uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="font-mono text-xs text-zs-muted hover:text-zs-text tracking-widest uppercase transition-colors"
            >
              Docs
            </a>
            <a
              href="#cta"
              className="relative px-5 py-2 bg-zs-cyan/10 border border-zs-cyan/40 rounded-lg font-mono text-xs text-zs-cyan hover:bg-zs-cyan/20 hover:border-zs-cyan/70 tracking-widest uppercase transition-all duration-200"
            >
              Request Access
            </a>
          </div>

          {/* Mobile menu */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-px w-6 bg-zs-muted transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-zs-muted transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-zs-muted transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-zs-border bg-zs-bg/95 nav-blur">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-zs-muted hover:text-zs-cyan tracking-widest uppercase transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-2 px-5 py-2.5 bg-zs-cyan/10 border border-zs-cyan/40 rounded-lg font-mono text-xs text-zs-cyan text-center tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
