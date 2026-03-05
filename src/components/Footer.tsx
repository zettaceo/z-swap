"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-zs-border bg-zs-bg overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">

        {/* Main grid: 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">

          {/* Brand col — spans 2 on lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/zetta-logo.png" alt="Z Logo" fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(0,232,255,0.5)]"
                />
              </div>
              <span className="font-syne font-bold text-zs-text text-base">Z-SWAP</span>
            </div>
            <p className="font-dm text-xs sm:text-sm text-zs-muted leading-relaxed max-w-sm mb-3.5">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
              <span className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-widest uppercase">
                {t.footer.status}
              </span>
            </div>
          </div>

          {/* Protocol links */}
          <div>
            <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-widest uppercase mb-4">
              {t.footer.protocol}
            </div>
            <nav className="flex flex-col gap-2.5">
              {["Architecture","ZION AI","Security","Governance","Ecosystem"].map((item) => (
                <a key={item} href="#"
                  className="font-dm text-xs sm:text-sm text-zs-muted hover:text-zs-text transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Ecosystem links */}
          <div>
            <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-widest uppercase mb-4">
              {t.footer.ecosystem}
            </div>
            <nav className="flex flex-col gap-2.5">
              {["ZETTA Wallet","ZION AI","Z-Finance","Z-PAD","ZETTA Chain","Z-PAY","Z-Assets"].map((item) => (
                <a key={item} href="#"
                  className="font-dm text-xs sm:text-sm text-zs-muted hover:text-zs-text transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow mb-5" />

        {/* Legal bar — stacked on mobile, row from sm */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:justify-between sm:items-start">
          <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted flex-shrink-0">
            {t.footer.rights}
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted sm:text-right leading-relaxed max-w-full sm:max-w-sm">
            {t.footer.legal}
          </div>
        </div>
      </div>
    </footer>
  );
}
