"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Calendar,
  Building2,
} from "lucide-react";
import { TIMELINE_JOURNEY } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function JourneyTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    soundFx.playClick();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-grid-cyber">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Evolution &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Engineering <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-normal dark:font-light">
            From university Computer Science foundations at Western University to backend engineering
            at GTECH Cambodia and intensive bootcamp training at Korea Software HRD Center.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 space-y-8">
          {TIMELINE_JOURNEY.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const isCurrent = idx === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: idx * 0.1,
                }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Node Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isCurrent
                      ? "bg-emerald-500 border-white shadow-[0_0_15px_#10b981] scale-110"
                      : "bg-[var(--bg-primary)] border-emerald-500/50 group-hover:border-emerald-400"
                  }`}
                />

                {/* Card Container */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className={`glass-panel rounded-3xl p-5 sm:p-6 border transition-all cursor-pointer ${
                    isExpanded
                      ? "border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)] bg-white/[0.9] dark:bg-white/[0.04]"
                      : "border-[var(--border-glass)] hover:border-emerald-500/30 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        {item.statusText}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto text-slate-500 dark:text-slate-400">
                      <span className="text-[11px] font-mono hidden sm:inline">
                        {isExpanded ? "Click to collapse" : "Click to view milestones"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{item.organization}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 dark:text-slate-400">{item.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal dark:font-light mt-3">
                    {item.description}
                  </p>

                  {/* Collapsible Key Metrics & Deliverables */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-[var(--border-glass)] space-y-2.5">
                          <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                            Key Competencies &amp; Highlights
                          </div>
                          {item.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 bg-black/[0.03] dark:bg-black/30 p-2.5 rounded-xl border border-black/5 dark:border-white/5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--border-glass)]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
