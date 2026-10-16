"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-glass)] bg-[var(--bg-primary)]/80 backdrop-blur-lg py-12 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text-primary)] tracking-tight">
              {PERSONAL_INFO.fullName}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono border border-emerald-500/20">
              SOFTWARE ENGINEER
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Western University (Year 4 CS) • Korea Software HRD Center
          </p>
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Systems Online • Terk Thla, SenSok, Phnom Penh, Cambodia</span>
          </div>
        </div>

        {/* Center Tech Credit */}
        <div className="text-xs text-slate-500 dark:text-slate-400 text-center font-mono space-y-1">
          <div>Next.js 15 • Tailwind CSS • Spring Boot • Clean Architecture</div>
          <div className="text-[11px] text-slate-400 dark:text-slate-500">
            Light &amp; Dark Modes • Distributed Systems • Clean RESTful APIs
          </div>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-emerald-500/10 border border-black/10 dark:border-white/10 hover:border-emerald-500/30 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all hover:-translate-y-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
