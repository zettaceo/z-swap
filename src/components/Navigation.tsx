"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang, Lang } from "@/lib/i18n";

const LANG_OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "zh", label: "中", flag: "🇨🇳" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.nav.protocol, href: "#what-is" },
    { label: t.nav.architecture, href: "#architecture" },
    { label: t.nav.ai, href: "#ai-layer" },
    { label: t.nav.security, href: "#security" },
    { label: t.nav.ecosystem, href: "#ecosystem" },
  ];

  const currentLang = LANG_OPTIONS.find((l) => l.code === lang)!;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur border-b border-zs-border bg-zs-bg/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9">
              <Image
                src="/zetta-logo.png"
                alt="ZETTA Z Logo"
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(0,232,255,0.6)]"
              />
            </div>
            <div>
              <span className="font-syne font-bold text-zs-text text-sm sm:text-base tracking-wider">Z-SWAP</span>
              <span className="block font-mono text-[8px] sm:text-[9px] text-zs-muted tracking-[0.2em] uppercase leading-none">ZETTA Protocol</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] text-zs-muted hover:text-zs-cyan tracking-widest uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: lang + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border border-zs-border rounded-lg font-mono text-[11px] text-zs-muted hover:border-zs-cyan/40 hover:text-zs-cyan transition-all"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <svg viewBox="0 0 10 6" fill="none" className="w-2 h-2 opacity-50">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 glass-card border border-zs-border rounded-xl overflow-hidden z-50 min-w-[100px]">
                  {LANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLang(opt.code); setLangOpen(false); }}
                      className={`flex items-center gap-2 w-full px-4 py-2.5 font-mono text-xs text-left hover:bg-zs-faint transition-colors ${lang === opt.code ? "text-zs-cyan" : "text-zs-muted"}`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#cta"
              className="hidden sm:flex px-4 sm:px-5 py-1.5 sm:py-2 bg-zs-cyan/10 border border-zs-cyan/40 rounded-lg font-mono text-[11px] text-zs-cyan hover:bg-zs-cyan/20 hover:border-zs-cyan/70 tracking-widest uppercase transition-all duration-200 whitespace-nowrap"
            >
              {t.nav.access}
            </a>

            {/* Mobile menu */}
            <button
              className="xl:hidden w-8 h-8 flex flex-col justify-center gap-1.5 flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block h-px w-5 bg-zs-muted transition-all origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px w-5 bg-zs-muted transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-zs-muted transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden border-t border-zs-border bg-zs-bg/95 nav-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-zs-muted hover:text-zs-cyan tracking-widest uppercase transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-1 px-5 py-2.5 bg-zs-cyan/10 border border-zs-cyan/40 rounded-lg font-mono text-xs text-zs-cyan text-center tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.access}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
