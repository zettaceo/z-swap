"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

type TagColor = "cyan" | "violet" | "gold" | "red" | "green";

interface Layer {
  id: string; tag: string; title: string;
  tagColor: TagColor; count: number; features: string[]; desc: string;
}

const layers: Layer[] = [
  { id:"swap",        tag:"Layer 01", title:"Swap & Liquidity",          tagColor:"cyan",   count:27, desc:"Core DEX engine with advanced routing, multi-pool support, MEV protection, and real-time execution simulation.",
    features:["Swap instantâneo multichain","Swap cross-chain nativo","Roteamento inteligente de liquidez","Split automático de ordens","Slippage dinâmico inteligente","Slippage manual configurável","Swap parcial por porcentagem","Swap reversível por tempo limitado","Swap protegido contra MEV","Swap protegido contra front-running","Liquidez concentrada (v3 style)","Liquidez tradicional AMM clássico","Pools dinâmicos por par","Criação automática de pools","Fee dinâmica por pool","Fee personalizada por token","Auto-compound de recompensas","Liquidez bloqueável por tempo","Liquidez programável (vesting)","Liquidez com múltiplos provedores","Visualização profunda de pools","Remoção parcial de liquidez","Remoção programada de liquidez","Simulação de swap antes da execução","Histórico detalhado de swaps","Swap via contrato inteligente direto","Swap com fallback de liquidez"]},
  { id:"analytics",   tag:"Layer 02", title:"Market Intelligence",        tagColor:"violet", count:22, desc:"Professional-grade analytics: detect wash trading, monitor whales, backtest strategies, and set precision alerts.",
    features:["Gráficos avançados integrados","Volume real vs volume artificial","Detector de wash trading","Detector de bots de arbitragem","Detector de honeypot","Detector de taxas abusivas","Análise de holders em tempo real","Análise de concentração de supply","Histórico completo on-chain","Análise de liquidez histórica","Comparador de tokens","Comparador de pools","Alertas de preço inteligentes","Alertas de liquidez","Alertas de movimentação suspeita","Backtest de estratégias","Simulação de entrada e saída","Copy trading manual","Ranking de tokens","Ranking de traders","Análise de risco automática","Score de confiança do token"]},
  { id:"ai",          tag:"Layer 03", title:"ZION AI & Automation",       tagColor:"gold",   count:21, desc:"ZION AI assists users with market analysis and advisory functions. All suggestions require manual user review.",
    features:["Sniper automático por IA","Anti-rug automático","Escudo Zion (proteção contínua)","Swap anônimo por IA","Reversão inteligente de swap","Simulação IA pré-swap","Estratégias automáticas personalizadas","Modo conservador de trading","Modo agressivo de trading","Modo institucional","IA de leitura de contrato","IA de leitura de liquidez","IA de leitura de comportamento de holders","IA de leitura de marketing fake","Execução otimizada por IA","Ajuste automático de slippage","IA de timing de entrada","IA de timing de saída","Aprendizado contínuo com mercado","Painel de controle da IA","Logs explicáveis da IA"]},
  { id:"security",    tag:"Layer 04", title:"Security & Privacy",         tagColor:"red",    count:20, desc:"Comprehensive on-chain security: MEV protection, anti-sandwich, privacy mode, continuous AI auditing.",
    features:["Anti-MEV nativo","Anti-front running avançado","Multisig inteligente","Time-lock configurável","Freeze seletivo de tokens","Blacklist dinâmica automática","Whitelist configurável","Monitoramento on-chain 24/7","Auditoria contínua por IA","Alertas de segurança em tempo real","Proteção contra contratos maliciosos","Proteção contra proxies suspeitos","Modo privacidade total","Ocultação de rotas de swap","Logs criptografados","Execução com delay aleatório","Proteção contra sandwich attack","Painel de risco por usuário","Painel de risco por token","Histórico de incidentes"]},
  { id:"token",       tag:"Layer 05", title:"Token Creation",             tagColor:"cyan",   count:18, desc:"Full-featured token deployment suite integrated with Z-PAD, with anti-bot launch and automated LP lock.",
    features:["Criador de tokens avançado","Templates auditados","Taxas configuráveis (buy/sell/transfer)","Lock de liquidez nativo","Vesting inteligente","Fair launch","Launch privado","Launch público","Anti-bot launch","Anti-sniper launch","Gerenciador de holders","Controle de mint/burn","Controle de pausas","Gerador de contratos verificados","Integração com Z-PAD","Painel do criador","Histórico de launches","Rating de projetos"]},
  { id:"governance",  tag:"Layer 06", title:"Governance & DAO",           tagColor:"violet", count:14, desc:"On-chain governance: staked voting, delegation, hybrid DAO, and automatic proposal execution.",
    features:["Governança on-chain","Propostas de melhoria","Votação ponderada por stake","Delegação de votos","Governança por reputação","DAO híbrida (on/off-chain)","Penalidades automáticas","Incentivos por participação","Ranking de contribuidores","Tesouraria governada","Execução automática de propostas","Histórico de votações","Alertas de governança","Painel DAO"]},
  { id:"integrations",tag:"Layer 07", title:"Integrations & Future",      tagColor:"green",  count:10, desc:"Deep integration with the full ZETTA stack: Z-Finance, wallet, fiat gateway, card, POS, developer API/SDK.",
    features:["Integração com Z-Finance","Integração com Z-Assets","Integração com OBELISK-Z Wallet","Fiat on-ramp","Fiat off-ramp (Z-PAY)","Cartão ZETTA","POS SafeHill","Pagamentos offline","API pública da ZETTA Swap","SDK para desenvolvedores"]},
];

const colorMap: Record<TagColor, { text: string; bg: string; border: string; dot: string; active: string }> = {
  cyan:   { text:"text-zs-cyan",          bg:"bg-zs-cyan/[0.08]",   border:"border-zs-cyan/25",   dot:"bg-zs-cyan",          active:"border-zs-cyan/30"   },
  violet: { text:"text-zs-violet-bright", bg:"bg-zs-violet/[0.08]", border:"border-zs-violet/25", dot:"bg-zs-violet-bright", active:"border-zs-violet/30" },
  gold:   { text:"text-zs-gold",          bg:"bg-zs-gold/[0.08]",   border:"border-zs-gold/25",   dot:"bg-zs-gold",          active:"border-zs-gold/30"   },
  red:    { text:"text-zs-red",           bg:"bg-zs-red/[0.08]",    border:"border-zs-red/25",    dot:"bg-zs-red",           active:"border-zs-red/30"    },
  green:  { text:"text-zs-green",         bg:"bg-zs-green/[0.08]",  border:"border-zs-green/25",  dot:"bg-zs-green",         active:"border-zs-green/30"  },
};

export default function CapabilitiesSection() {
  const [active, setActive] = useState("swap");
  const { t } = useLang();
  const layer = layers.find((l) => l.id === active)!;
  const c = colorMap[layer.tagColor];

  return (
    <section id="capabilities" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-x-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zs-border to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="section-label mb-4">{t.capabilities.label}</div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-8 sm:mb-12">
          <h2 className="font-syne font-bold text-[clamp(1.5rem,4vw,3.25rem)] leading-[1.1] tracking-tight text-zs-text">
            {t.capabilities.title1}{" "}
            <span className="text-gradient-cyan">{t.capabilities.title2}</span>
          </h2>
          <p className="font-dm text-xs sm:text-sm text-zs-muted max-w-sm leading-[1.7]">{t.capabilities.sub}</p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr] gap-4 sm:gap-6">

          {/* Tab list */}
          <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-none">
            {layers.map((l) => {
              const lc = colorMap[l.tagColor];
              const isActive = active === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  aria-label={`${l.title} — ${l.count} functions`}
                  aria-pressed={isActive}
                  className={`flex-shrink-0 text-left px-3 sm:px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? `glass-card ${lc.active} ${lc.text}`
                      : "border-transparent text-zs-muted hover:text-zs-text hover:bg-zs-faint/20"
                  }`}
                >
                  <div className={`font-mono text-[9px] tracking-[0.15em] uppercase mb-0.5 ${isActive ? lc.text : "text-zs-faint"}`}>
                    {l.tag}
                  </div>
                  <div className="font-syne font-semibold text-xs sm:text-sm whitespace-nowrap">{l.title}</div>
                  {isActive && (
                    <div className="font-mono text-[9px] mt-0.5 opacity-60">{l.count} {t.capabilities.functions}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active layer panel */}
          <div className={`glass-card rounded-2xl border ${c.active} p-4 sm:p-6 lg:p-8 min-w-0`}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 sm:mb-6">
              <div>
                <span className={`inline-block font-mono text-[10px] px-2.5 py-1 rounded-full border ${c.bg} ${c.border} ${c.text} mb-2 tracking-[0.15em] uppercase`}>
                  {layer.tag}
                </span>
                <h3 className="font-syne font-bold text-lg sm:text-xl lg:text-2xl text-zs-text">{layer.title}</h3>
              </div>
              <div className="font-mono text-[10px] text-zs-muted border border-zs-border rounded-lg px-3 py-1.5 self-start whitespace-nowrap">
                {layer.count} {t.capabilities.functions}
              </div>
            </div>

            <p className="font-dm text-xs sm:text-sm text-zs-muted leading-[1.7] mb-5 sm:mb-6">{layer.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {layer.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-lg bg-zs-bg-3/60 border border-zs-faint/40 hover:border-zs-faint/70 transition-colors">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                  <span className="font-dm text-[11px] sm:text-xs text-zs-text/85 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
