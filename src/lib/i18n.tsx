"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "es" | "zh";

// ─── Explicit interface with string values (not inferred literals) ───────────
export interface Translation {
  nav: {
    protocol: string; architecture: string; ai: string;
    security: string; ecosystem: string; docs: string; access: string;
  };
  hero: {
    badge: string; line1: string; line2: string; line3: string; sub: string;
    cta1: string; cta2: string;
    stat1: string; stat2: string; stat3: string; stat4: string;
  };
  whatIs: {
    label: string; title1: string; title2: string; sub: string;
    reg: string; regText: string;
  };
  architecture: {
    label: string; title1: string; title2: string; sub: string;
  };
  capabilities: {
    label: string; title1: string; title2: string; sub: string;
    functions: string; roadmap: string;
  };
  ai: {
    label: string; title1: string; title2: string; sub: string;
    advisory: string; advisoryText: string;
  };
  security: {
    label: string; title1: string; title2: string; sub: string;
  };
  ecosystem: {
    label: string; title1: string; title2: string; sub: string; networkMap: string;
  };
  future: {
    label: string; title1: string; title2: string; sub: string;
    phase1: string; phase2: string; phase3: string;
    inDev: string; planned: string; roadmap: string;
  };
  cta: {
    label: string; line1: string; line2: string; line3: string; sub: string;
    btn1: string; btn2: string;
    status: string; statusVal: string; reg: string; regVal: string;
    eco: string; ecoVal: string;
  };
  footer: {
    tagline: string; status: string; protocol: string;
    ecosystem: string; legal: string; rights: string;
  };
}

// ─── Translations typed against the interface ────────────────────────────────
const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      protocol: "Protocol", architecture: "Architecture", ai: "ZION AI",
      security: "Security", ecosystem: "Ecosystem", docs: "Docs", access: "Request Access",
    },
    hero: {
      badge: "ZETTA Ecosystem — Liquidity Layer",
      line1: "INTELLIGENT", line2: "LIQUIDITY", line3: "INFRASTRUCTURE",
      sub: "Z-SWAP is a protocol-level liquidity intelligence platform — combining decentralized exchange mechanics, multi-chain architecture, and AI-assisted market analysis into a unified institutional-grade layer.",
      cta1: "Explore Protocol", cta2: "View Architecture",
      stat1: "Protocol Functions", stat2: "Core System Layers",
      stat3: "Chain Architecture", stat4: "Regulatory Alignment",
    },
    whatIs: {
      label: "01 — Protocol Definition",
      title1: "Not a DEX.", title2: "A Financial Operating System.",
      sub: "Z-SWAP is engineered as a modular infrastructure layer within the ZETTA ecosystem. It handles institutional-grade liquidity operations with intelligent routing, AI-assisted analysis, comprehensive risk management, and native Z-PAY payment settlement.",
      reg: "Regulatory Positioning",
      regText: "Z-SWAP is architected with regulatory alignment as a foundational requirement, with particular focus on frameworks such as VARA (Dubai) and applicable VASP frameworks. The platform does not provide investment advice, guarantee returns, or execute transactions without explicit user authorization.",
    },
    architecture: {
      label: "03 — System Architecture",
      title1: "Protocol", title2: "Architecture Overview",
      sub: "Z-SWAP is built as a layered infrastructure stack. Each layer operates independently while communicating through well-defined protocol interfaces.",
    },
    capabilities: {
      label: "04 — Core Capabilities",
      title1: "132 Functions Across", title2: "7 Protocol Layers",
      sub: "Each layer is independently operable and integrates with the full ZETTA ecosystem.",
      functions: "functions", roadmap: "ROADMAP",
    },
    ai: {
      label: "05 — Intelligence Layer",
      title1: "ZION AI —", title2: "Advisory Intelligence",
      sub: "ZION AI is the analytical intelligence layer of Z-SWAP. It processes on-chain data, performs risk analysis, and provides informed suggestions — but never executes any transaction without explicit user authorization.",
      advisory: "Advisory Protocol",
      advisoryText: "ZION AI operates in advisory mode exclusively. All suggestions require manual user review and confirmation. No automated execution occurs without explicit user action.",
    },
    security: {
      label: "06 — Security Layer",
      title1: "Multi-Layer", title2: "Risk Protection",
      sub: "Before any token interaction, Z-SWAP runs a comprehensive security stack. Every token and contract is evaluated in real time — giving users complete risk visibility before committing any transaction.",
    },
    ecosystem: {
      label: "07 — Ecosystem Integration",
      title1: "Connected to the", title2: "ZETTA Ecosystem",
      sub: "Z-SWAP is not a standalone exchange — it is the central liquidity and settlement infrastructure for the entire ZETTA ecosystem, including Z-PAY fiat-crypto conversions.",
      networkMap: "Ecosystem Network Map",
    },
    future: {
      label: "08 — Protocol Vision",
      title1: "Built for", title2: "Long-Term Infrastructure",
      sub: "Z-SWAP is designed as a long-running infrastructure protocol, not a product with a short lifecycle. The roadmap is structured around incremental, stable releases.",
      phase1: "Foundation", phase2: "Intelligence", phase3: "Ecosystem",
      inDev: "In Development", planned: "Planned", roadmap: "Roadmap",
    },
    cta: {
      label: "09 — Access Protocol",
      line1: "READY TO", line2: "BUILD WITH", line3: "Z-SWAP?",
      sub: "Z-SWAP is currently in development as part of the ZETTA ecosystem. Request early access or stay informed on protocol progress.",
      btn1: "Request Early Access", btn2: "Read Documentation",
      status: "Protocol Status", statusVal: "In Development",
      reg: "Regulatory Focus", regVal: "VARA / VASP",
      eco: "Ecosystem", ecoVal: "ZETTA Protocol",
    },
    footer: {
      tagline: "An intelligent liquidity infrastructure layer within the ZETTA ecosystem. Designed for long-term protocol-level operations.",
      status: "PROTOCOL IN DEVELOPMENT", protocol: "Protocol", ecosystem: "ZETTA Ecosystem",
      legal: "Z-SWAP is infrastructure software. It does not constitute financial advice, investment recommendations, or guarantees of any kind.",
      rights: "© 2024 ZETTA Ecosystem. Z-SWAP Protocol. All rights reserved.",
    },
  },

  es: {
    nav: {
      protocol: "Protocolo", architecture: "Arquitectura", ai: "ZION IA",
      security: "Seguridad", ecosystem: "Ecosistema", docs: "Docs", access: "Solicitar Acceso",
    },
    hero: {
      badge: "Ecosistema ZETTA — Capa de Liquidez",
      line1: "INFRAESTRUCTURA", line2: "DE LIQUIDEZ", line3: "INTELIGENTE",
      sub: "Z-SWAP es una plataforma de inteligencia de liquidez a nivel de protocolo — combinando mecánicas de intercambio descentralizado, arquitectura multicadena y análisis de mercado asistido por IA.",
      cta1: "Explorar Protocolo", cta2: "Ver Arquitectura",
      stat1: "Funciones del Protocolo", stat2: "Capas del Sistema",
      stat3: "Arquitectura Multicadena", stat4: "Alineación Regulatoria",
    },
    whatIs: {
      label: "01 — Definición del Protocolo",
      title1: "No es un DEX.", title2: "Es un Sistema Operativo Financiero.",
      sub: "Z-SWAP está diseñado como una capa de infraestructura modular dentro del ecosistema ZETTA, con enrutamiento inteligente, análisis IA y gestión integral de riesgos.",
      reg: "Posicionamiento Regulatorio",
      regText: "Z-SWAP está arquitectado con alineación regulatoria como requisito fundamental, con enfoque en marcos como VARA (Dubai) y VASP aplicables. La plataforma no proporciona asesoramiento de inversión ni garantiza retornos.",
    },
    architecture: {
      label: "03 — Arquitectura del Sistema",
      title1: "Visión General de la", title2: "Arquitectura del Protocolo",
      sub: "Z-SWAP está construido como una pila de infraestructura en capas. Cada capa opera independientemente mientras se comunica a través de interfaces de protocolo bien definidas.",
    },
    capabilities: {
      label: "04 — Capacidades Principales",
      title1: "132 Funciones en", title2: "7 Capas del Protocolo",
      sub: "Cada capa es operable de forma independiente e integra con el ecosistema ZETTA completo.",
      functions: "funciones", roadmap: "HOJA DE RUTA",
    },
    ai: {
      label: "05 — Capa de Inteligencia",
      title1: "ZION IA —", title2: "Inteligencia Consultiva",
      sub: "ZION IA es la capa de inteligencia analítica de Z-SWAP. Procesa datos on-chain, realiza análisis de riesgo y proporciona sugerencias informadas — sin ejecutar transacciones sin autorización explícita.",
      advisory: "Protocolo Consultivo",
      advisoryText: "ZION IA opera exclusivamente en modo consultivo. Todas las sugerencias requieren revisión y confirmación manual del usuario. No ocurre ejecución automatizada sin acción explícita del usuario.",
    },
    security: {
      label: "06 — Capa de Seguridad",
      title1: "Protección de Riesgo", title2: "Multicapa",
      sub: "Antes de cualquier interacción con tokens, Z-SWAP ejecuta una pila de seguridad completa. Cada token y contrato es evaluado en tiempo real.",
    },
    ecosystem: {
      label: "07 — Integración del Ecosistema",
      title1: "Conectado al", title2: "Ecosistema ZETTA",
      sub: "Z-SWAP es la infraestructura central de liquidez y liquidación para todo el ecosistema ZETTA, incluyendo conversiones fiat-cripto de Z-PAY.",
      networkMap: "Mapa de Red del Ecosistema",
    },
    future: {
      label: "08 — Visión del Protocolo",
      title1: "Construido para", title2: "Infraestructura a Largo Plazo",
      sub: "Z-SWAP está diseñado como un protocolo de infraestructura de largo plazo con lanzamientos incrementales y estables.",
      phase1: "Fundación", phase2: "Inteligencia", phase3: "Ecosistema",
      inDev: "En Desarrollo", planned: "Planificado", roadmap: "Hoja de Ruta",
    },
    cta: {
      label: "09 — Acceso al Protocolo",
      line1: "¿LISTO PARA", line2: "CONSTRUIR CON", line3: "Z-SWAP?",
      sub: "Z-SWAP está actualmente en desarrollo como parte del ecosistema ZETTA. Solicite acceso anticipado o manténgase informado.",
      btn1: "Solicitar Acceso Anticipado", btn2: "Leer Documentación",
      status: "Estado del Protocolo", statusVal: "En Desarrollo",
      reg: "Enfoque Regulatorio", regVal: "VARA / VASP",
      eco: "Ecosistema", ecoVal: "Protocolo ZETTA",
    },
    footer: {
      tagline: "Una capa de infraestructura de liquidez inteligente dentro del ecosistema ZETTA.",
      status: "PROTOCOLO EN DESARROLLO", protocol: "Protocolo", ecosystem: "Ecosistema ZETTA",
      legal: "Z-SWAP es software de infraestructura. No constituye asesoramiento financiero ni garantías de ningún tipo.",
      rights: "© 2024 Ecosistema ZETTA. Protocolo Z-SWAP. Todos los derechos reservados.",
    },
  },

  zh: {
    nav: {
      protocol: "协议", architecture: "架构", ai: "ZION 人工智能",
      security: "安全", ecosystem: "生态系统", docs: "文档", access: "申请访问",
    },
    hero: {
      badge: "ZETTA 生态系统 — 流动性层",
      line1: "智能", line2: "流动性", line3: "基础设施",
      sub: "Z-SWAP 是协议级流动性智能平台 — 结合去中心化交换机制、多链架构和人工智能辅助市场分析，构建统一的机构级层。",
      cta1: "探索协议", cta2: "查看架构",
      stat1: "协议功能", stat2: "核心系统层",
      stat3: "多链架构", stat4: "监管对齐",
    },
    whatIs: {
      label: "01 — 协议定义",
      title1: "不是 DEX。", title2: "是金融操作系统。",
      sub: "Z-SWAP 是 ZETTA 生态系统中的模块化基础设施层，具有智能路由、AI 辅助分析和全面风险管理。",
      reg: "监管定位",
      regText: "Z-SWAP 的架构以监管对齐为基本要求，特别关注 VARA（迪拜）和适用的 VASP 框架。平台不提供投资建议，不保证回报。",
    },
    architecture: {
      label: "03 — 系统架构",
      title1: "协议", title2: "架构概述",
      sub: "Z-SWAP 构建为分层基础设施栈。每层独立运行，同时通过定义良好的协议接口进行通信。",
    },
    capabilities: {
      label: "04 — 核心能力",
      title1: "132 个功能分布在", title2: "7 个协议层",
      sub: "每层可独立操作，并与完整的 ZETTA 生态系统集成。",
      functions: "功能", roadmap: "路线图",
    },
    ai: {
      label: "05 — 智能层",
      title1: "ZION AI —", title2: "咨询智能",
      sub: "ZION AI 是 Z-SWAP 的分析智能层，处理链上数据、执行风险分析并提供明智建议 — 但不会在没有明确用户授权的情况下执行任何交易。",
      advisory: "咨询协议",
      advisoryText: "ZION AI 仅在咨询模式下运行。所有建议都需要用户手动审查和确认。没有明确用户操作，不会发生自动执行。",
    },
    security: {
      label: "06 — 安全层",
      title1: "多层", title2: "风险保护",
      sub: "在任何代币交互之前，Z-SWAP 运行全面的安全栈，为用户提供完整的风险可见性。",
    },
    ecosystem: {
      label: "07 — 生态系统集成",
      title1: "连接到", title2: "ZETTA 生态系统",
      sub: "Z-SWAP 是整个 ZETTA 生态系统的核心流动性和结算基础设施，包括 Z-PAY 法币加密转换。",
      networkMap: "生态系统网络图",
    },
    future: {
      label: "08 — 协议愿景",
      title1: "为", title2: "长期基础设施而建",
      sub: "Z-SWAP 设计为长期运行的基础设施协议，通过增量稳定发布扩展功能。",
      phase1: "基础", phase2: "智能", phase3: "生态系统",
      inDev: "开发中", planned: "计划中", roadmap: "路线图",
    },
    cta: {
      label: "09 — 访问协议",
      line1: "准备好", line2: "使用", line3: "Z-SWAP 构建了吗？",
      sub: "Z-SWAP 目前正在作为 ZETTA 生态系统的一部分开发。申请早期访问或了解协议进展。",
      btn1: "申请早期访问", btn2: "阅读文档",
      status: "协议状态", statusVal: "开发中",
      reg: "监管重点", regVal: "VARA / VASP",
      eco: "生态系统", ecoVal: "ZETTA 协议",
    },
    footer: {
      tagline: "ZETTA 生态系统中的智能流动性基础设施层。",
      status: "协议开发中", protocol: "协议", ecosystem: "ZETTA 生态系统",
      legal: "Z-SWAP 是基础设施软件，不构成财务建议、投资建议或任何形式的保证。",
      rights: "© 2024 ZETTA 生态系统。Z-SWAP 协议。保留所有权利。",
    },
  },
};

// ─── Context ──────────────────────────────────────────────────────────────────
interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  // Cast is safe: all three translation objects satisfy Translation interface
  const t: Translation = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
