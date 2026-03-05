"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

type TagColor = "cyan" | "violet" | "gold" | "red" | "green";

interface Layer {
  id: string;
  tag: string;
  title: string;
  tagColor: TagColor;
  count: number;
  features: string[];
  desc: string;
}

const layers: Layer[] = [
  {
    id: "swap",
    tag: "Layer 01",
    title: "Swap & Liquidity",
    tagColor: "cyan",
    count: 27,
    features: [
      "Swap instantâneo multichain", "Swap cross-chain nativo",
      "Roteamento inteligente de liquidez", "Split automático de ordens",
      "Slippage dinâmico inteligente", "Slippage manual configurável",
      "Swap parcial por porcentagem", "Swap reversível por tempo limitado",
      "Swap protegido contra MEV", "Swap protegido contra front-running",
      "Liquidez concentrada (v3 style)", "Liquidez tradicional AMM clássico",
      "Pools dinâmicos por par", "Criação automática de pools",
      "Fee dinâmica por pool", "Fee personalizada por token",
      "Auto-compound de recompensas", "Liquidez bloqueável por tempo",
      "Liquidez programável (vesting)", "Liquidez com múltiplos provedores",
      "Visualização profunda de pools", "Remoção parcial de liquidez",
      "Remoção programada de liquidez", "Simulação de swap antes da execução",
      "Histórico detalhado de swaps", "Swap via contrato inteligente direto",
      "Swap com fallback de liquidez",
    ],
    desc: "Core DEX engine with advanced routing, multi-pool support, MEV protection, and real-time execution simulation before any transaction is committed.",
  },
  {
    id: "analytics",
    tag: "Layer 02",
    title: "Market Intelligence",
    tagColor: "violet",
    count: 22,
    features: [
      "Gráficos avançados integrados", "Volume real vs volume artificial",
      "Detector de wash trading", "Detector de bots de arbitragem",
      "Detector de honeypot", "Detector de taxas abusivas",
      "Análise de holders em tempo real", "Análise de concentração de supply",
      "Histórico completo on-chain", "Análise de liquidez histórica",
      "Comparador de tokens", "Comparador de pools",
      "Alertas de preço inteligentes", "Alertas de liquidez",
      "Alertas de movimentação suspeita", "Backtest de estratégias",
      "Simulação de entrada e saída", "Copy trading manual",
      "Ranking de tokens", "Ranking de traders",
      "Análise de risco automática", "Score de confiança do token",
    ],
    desc: "Professional-grade analytics: detect wash trading, monitor whales, backtest strategies, and set precision market alerts.",
  },
  {
    id: "ai",
    tag: "Layer 03",
    title: "ZION AI & Automation",
    tagColor: "gold",
    count: 21,
    features: [
      "Sniper automático por IA", "Anti-rug automático",
      "Escudo Zion (proteção contínua)", "Swap anônimo por IA",
      "Reversão inteligente de swap", "Simulação IA pré-swap",
      "Estratégias automáticas personalizadas", "Modo conservador de trading",
      "Modo agressivo de trading", "Modo institucional",
      "IA de leitura de contrato", "IA de leitura de liquidez",
      "IA de leitura de comportamento de holders", "IA de leitura de marketing fake",
      "Execução otimizada por IA", "Ajuste automático de slippage",
      "IA de timing de entrada", "IA de timing de saída",
      "Aprendizado contínuo com mercado", "Painel de controle da IA",
      "Logs explicáveis da IA",
    ],
    desc: "ZION AI assists users with market analysis and advisory functions. All suggestions require manual user review — no automated execution.",
  },
  {
    id: "security",
    tag: "Layer 04",
    title: "Security & Privacy",
    tagColor: "red",
    count: 20,
    features: [
      "Anti-MEV nativo", "Anti-front running avançado",
      "Multisig inteligente", "Time-lock configurável",
      "Freeze seletivo de tokens", "Blacklist dinâmica automática",
      "Whitelist configurável", "Monitoramento on-chain 24/7",
      "Auditoria contínua por IA", "Alertas de segurança em tempo real",
      "Proteção contra contratos maliciosos", "Proteção contra proxies suspeitos",
      "Modo privacidade total", "Ocultação de rotas de swap",
      "Logs criptografados", "Execução com delay aleatório",
      "Proteção contra sandwich attack", "Painel de risco por usuário",
      "Painel de risco por token", "Histórico de incidentes",
    ],
    desc: "Comprehensive on-chain security stack: MEV protection, anti-sandwich, privacy mode, continuous AI auditing at every transaction.",
  },
  {
    id: "token",
    tag: "Layer 05",
    title: "Token Creation",
    tagColor: "cyan",
    count: 18,
    features: [
      "Criador de tokens avançado", "Templates auditados",
      "Taxas configuráveis (buy/sell/transfer)", "Lock de liquidez nativo",
      "Vesting inteligente", "Fair launch",
      "Launch privado", "Launch público",
      "Anti-bot launch", "Anti-sniper launch",
      "Gerenciador de holders", "Controle de mint/burn",
      "Controle de pausas", "Gerador de contratos verificados",
      "Integração com Z-PAD", "Painel do criador",
      "Histórico de launches", "Rating de projetos",
    ],
    desc: "Full-featured token deployment suite integrated with Z-PAD, with anti-bot launch mechanisms and automated LP lock.",
  },
  {
    id: "governance",
    tag: "Layer 06",
    title: "Governance & DAO",
    tagColor: "violet",
    count: 14,
    features: [
      "Governança on-chain", "Propostas de melhoria",
      "Votação ponderada por stake", "Delegação de votos",
      "Governança por reputação", "DAO híbrida (on/off-chain)",
      "Penalidades automáticas", "Incentivos por participação",
      "Ranking de contribuidores", "Tesouraria governada",
      "Execução automática de propostas", "Histórico de votações",
      "Alertas de governança", "Painel DAO",
    ],
    desc: "On-chain governance infrastructure for protocol evolution: staked voting, delegation, hybrid DAO, and automatic proposal execution.",
  },
  {
    id: "integrations",
    tag: "Layer 07",
    title: "Integrations & Future",
    tagColor: "green",
    count: 10,
    features: [
      "Integração com Z-Finance", "Integração com Z-Assets",
      "Integração com OBELISK-Z Wallet", "Fiat on-ramp",
      "Fiat off-ramp (Z-PAY)", "Cartão ZETTA",
      "POS SafeHill", "Pagamentos offline",
      "API pública da ZETTA Swap", "SDK para desenvolvedores",
    ],
    desc: "Deep integration with the full ZETTA financial stack: bank, wallet, fiat gateway, card, POS, and open developer API/SDK.",
  },
];

const colorMap: Record<TagColor, { text: string; bg: string; border: string; dot: string; activeCard: string }> = {
  cyan: { text: "text-zs-cyan", bg: "bg-zs-cyan/10", border: "border-zs-cyan/25", dot: "bg-zs-cyan", activeCard: "border-zs-cyan/30" },
  violet: { text: "text-zs-violet-bright", bg: "bg-zs-violet/10", border: "border-zs-violet/25", dot: "bg-zs-violet-bright", activeCard: "border-zs-violet/30" },
  gold: { text: "text-zs-gold", bg: "bg-zs-gold/10", border: "border-zs-gold/25", dot: "bg-zs-gold", activeCard: "border-zs-gold/30" },
  red: { text: "text-zs-red", bg: "bg-zs-red/10", border: "border-zs-red/25", dot: "bg-zs-red", activeCard: "border-zs-red/30" },
  green: { text: "text-zs-green", bg: "bg-zs-green/10", border: "border-zs-green/25", dot: "bg-zs-green", activeCard: "border-zs-green/30" },
};

export default function CapabilitiesSection() {
  const [active, setActive] = useState("swap");
  const { t } = useLang();
  const activeLayer = layers.find((l) => l.id === active)!;
  const c = colorMap[activeLayer.tagColor];

  return (
    <section id="capabilities" className="relative py-10 sm:py-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-label mb-3">{t.capabilities.label}</div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:items-end lg:justify-between mb-5 sm:mb-8">
          <h2 className="font-syne font-bold text-[clamp(1.6rem,3.5vw,3rem)] leading-tight text-zs-text">
            {t.capabilities.title1}{" "}
            <span className="text-gradient-cyan">{t.capabilities.title2}</span>
          </h2>
          <p className="font-dm text-zs-muted text-sm max-w-sm leading-relaxed">{t.capabilities.sub}</p>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-4 sm:gap-6">
          {/* Layer tabs - horizontal scroll on mobile */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {layers.map((layer) => {
              const lc = colorMap[layer.tagColor];
              const isActive = active === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActive(layer.id)}
                  className={`flex-shrink-0 text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? `glass-card ${lc.activeCard} ${lc.text}`
                      : "border-transparent text-zs-muted hover:text-zs-text hover:bg-zs-faint/30"
                  }`}
                >
                  <div className={`font-mono text-[9px] sm:text-[10px] tracking-widest uppercase mb-0.5 ${isActive ? lc.text : "text-zs-faint"}`}>
                    {layer.tag}
                  </div>
                  <div className="font-syne font-semibold text-xs sm:text-sm whitespace-nowrap">{layer.title}</div>
                  {isActive && (
                    <div className={`font-mono text-[9px] mt-1 opacity-60`}>{layer.count} {t.capabilities.functions}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active layer content */}
          <div className={`glass-card rounded-2xl border ${c.activeCard} p-5 sm:p-8`}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 sm:mb-6">
              <div>
                <span className={`tag-badge px-2.5 py-1 rounded-full border ${c.bg} ${c.border} ${c.text} mb-2.5 inline-block`}>
                  {activeLayer.tag}
                </span>
                <h3 className="font-syne font-bold text-xl sm:text-2xl text-zs-text">{activeLayer.title}</h3>
              </div>
              <div className="font-mono text-xs text-zs-muted border border-zs-border rounded-lg px-3 py-1.5 self-start">
                {activeLayer.count} {t.capabilities.functions}
              </div>
            </div>

            <p className="font-dm text-zs-muted leading-relaxed mb-5 sm:mb-6 text-sm">{activeLayer.desc}</p>

            <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-2">
              {activeLayer.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-lg bg-zs-bg-3/60 border border-zs-faint/40 hover:border-zs-faint/80 transition-colors">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                  <span className="font-dm text-xs text-zs-text/85 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
