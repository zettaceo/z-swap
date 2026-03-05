"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-zs-border bg-zs-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 sm:mb-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="relative w-8 h-8">
                <Image src="/zetta-logo.png" alt="Z Logo" fill className="object-contain drop-shadow-[0_0_8px_rgba(0,232,255,0.5)]" />
              </div>
              <span className="font-syne font-bold text-zs-text">Z-SWAP</span>
            </div>
            <p className="font-dm text-xs text-zs-muted leading-relaxed max-w-xs mb-3.5">{t.footer.tagline}</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zs-green pulse-dot" />
              <span className="font-mono text-[10px] text-zs-muted tracking-widest uppercase">{t.footer.status}</span>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-zs-muted tracking-widest uppercase mb-4">{t.footer.protocol}</div>
            <div className="space-y-2.5">
              {["Architecture","ZION AI","Security","Governance","Ecosystem"].map(item => (
                <a key={item} href="#" className="block font-dm text-xs text-zs-muted hover:text-zs-text transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-zs-muted tracking-widest uppercase mb-4">{t.footer.ecosystem}</div>
            <div className="space-y-2.5">
              {["ZETTA Wallet","ZION AI","Z-Finance","Z-PAD","ZETTA Chain","Z-PAY","Z-Assets"].map(item => (
                <a key={item} href="#" className="block font-dm text-xs text-zs-muted hover:text-zs-text transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-glow mb-5" />
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-start">
          <div className="font-mono text-[10px] text-zs-muted">{t.footer.rights}</div>
          <div className="font-mono text-[10px] text-zs-muted max-w-sm sm:text-right leading-relaxed">{t.footer.legal}</div>
        </div>
      </div>
    </footer>
  );
}
