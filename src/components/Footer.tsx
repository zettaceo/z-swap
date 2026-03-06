"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

const protocolLinks = ["Architecture", "ZION AI", "Security", "Governance", "Ecosystem"];
const ecoLinks      = ["ZETTA Wallet", "ZION AI", "Z-Finance", "Z-PAD", "ZETTA Chain", "Z-PAY", "Z-Assets"];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-zs-border bg-zs-bg overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">

        {/* Brand block */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Logo + tagline + status */}
          <div className="flex-shrink-0 max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/zetta-logo.png" alt="Z Logo" fill className="object-contain drop-shadow-[0_0_8px_rgba(0,232,255,0.5)]" />
              </div>
              <div>
                <div className="font-syne font-bold text-zs-text text-base tracking-wider">Z-SWAP</div>
                <div className="font-mono text-[8px] text-zs-muted tracking-[0.18em] uppercase">ZETTA PROTOCOL</div>
              </div>
            </div>
            <p className="font-dm text-xs sm:text-sm text-zs-muted leading-[1.7] mb-4">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
              <span className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-[0.15em] uppercase">
                {t.footer.status}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:flex sm:gap-14 gap-x-6 gap-y-6">
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-[0.15em] uppercase mb-3 pb-2 border-b border-zs-faint/30">
                {t.footer.protocol}
              </div>
              <nav className="flex flex-col gap-2.5">
                {protocolLinks.map((item) => (
                  <a key={item} href="#"
                    className="font-dm text-xs sm:text-sm text-zs-muted hover:text-zs-cyan transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-zs-faint group-hover:bg-zs-cyan transition-colors flex-shrink-0" />
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted tracking-[0.15em] uppercase mb-3 pb-2 border-b border-zs-faint/30">
                {t.footer.ecosystem}
              </div>
              <nav className="flex flex-col gap-2.5">
                {ecoLinks.map((item) => (
                  <a key={item} href="#"
                    className="font-dm text-xs sm:text-sm text-zs-muted hover:text-zs-cyan transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-zs-faint group-hover:bg-zs-cyan transition-colors flex-shrink-0" />
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="divider-glow mb-6" />

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
          <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted/60 flex-shrink-0">
            {t.footer.rights}
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-zs-muted/50 sm:text-right leading-[1.7] max-w-full sm:max-w-sm">
            {t.footer.legal}
          </div>
        </div>
      </div>
    </footer>
  );
}
