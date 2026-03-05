"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "zh", label: "中", flag: "🇨🇳" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const { lang, setLang, t }      = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  const navLinks = [
    { label: t.nav.protocol,     href: "#what-is"      },
    { label: t.nav.architecture, href: "#architecture"  },
    { label: t.nav.ai,           href: "#ai-layer"      },
    { label: t.nav.security,     href: "#security"      },
    { label: t.nav.ecosystem,    href: "#ecosystem"     },
  ];

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur border-b border-zs-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8">
              <Image
                src="/zetta-logo.png"
                alt="Z Logo"
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(0,232,255,0.6)]"
              />
            </div>
            <div className="leading-none">
              <div className="font-syne font-bold text-zs-text text-sm tracking-wider">Z-SWAP</div>
              <div className="font-mono text-[8px] text-zs-muted tracking-[0.2em] uppercase">ZETTA PROTOCOL</div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] text-zs-muted hover:text-zs-cyan tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: lang + CTA + hamburger */}
          <div className="flex items-center gap-2">

            {/* Language switcher */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-zs-border rounded-lg font-mono text-[11px] text-zs-muted hover:border-zs-cyan/40 hover:text-zs-cyan transition-all"
              >
                <span>{current.flag}</span>
                <span className="hidden sm:inline">{current.label}</span>
                <svg viewBox="0 0 10 6" fill="none" className={`w-2 h-2 opacity-50 transition-transform ${langOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 glass-card border border-zs-border rounded-xl overflow-hidden z-50 w-28 shadow-xl">
                  {LANGS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLang(opt.code); setLangOpen(false); }}
                      className={`flex items-center gap-2.5 w-full px-3 py-2.5 font-mono text-xs text-left hover:bg-zs-faint/30 transition-colors ${
                        lang === opt.code ? "text-zs-cyan bg-zs-cyan/5" : "text-zs-muted"
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA button — hidden on very small screens */}
            <a
              href="#cta"
              className="hidden sm:flex items-center px-4 py-1.5 bg-zs-cyan/10 border border-zs-cyan/40 rounded-lg font-mono text-[11px] text-zs-cyan hover:bg-zs-cyan/20 tracking-widest uppercase transition-all whitespace-nowrap"
            >
              {t.nav.access}
            </a>

            {/* Hamburger — xl:hidden */}
            <button
              className="xl:hidden w-8 h-8 flex flex-col justify-center gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-5 bg-zs-muted transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px w-5 bg-zs-muted transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px w-5 bg-zs-muted transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`xl:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 border-t border-zs-border" : "max-h-0"}`}>
        <div className="nav-blur bg-zs-bg/95 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-zs-muted hover:text-zs-cyan tracking-widest uppercase py-2.5 border-b border-zs-faint/20 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 bg-zs-cyan/10 border border-zs-cyan/40 rounded-xl font-mono text-xs text-zs-cyan text-center tracking-widest uppercase"
          >
            {t.nav.access}
          </a>
        </div>
      </div>
    </nav>
  );
}
