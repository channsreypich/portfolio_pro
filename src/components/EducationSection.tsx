"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Sparkles,
  BookOpen,
  Award,
  Layers,
  CheckCircle2,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { EDUCATION_MILESTONES } from "@/data/portfolioData";
import { BorderBeam } from "@/components/magicui/border-beam";
import { soundFx } from "@/lib/sound";

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState<string | null>("korea-hrd-advance");

  const toggleExpand = (id: string) => {
    soundFx.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  const getEducationIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return GraduationCap;
      case "TrendingUp":
        return TrendingUp;
      case "Layers":
        return Layers;
      case "Award":
        return Award;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-grid-cyber">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[350px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundations &amp; Technical Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Education &amp; <span className="text-gradient-cyan">Qualifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal dark:font-light">
            Combining 4th-year Computer Science theory at Western University with dual intensive
            software engineering and data analytics programs at Korea Software HRD Center.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_MILESTONES.map((edu, idx) => {
            const Icon = getEducationIcon(edu.icon);
            const isExpanded = expandedId === edu.id;
            const isFeatured = idx === 0 || idx === 1;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: idx * 0.1,
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`glass-panel relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isExpanded
                    ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-white/[0.9] dark:bg-white/[0.04]"
                    : "border-[var(--border-glass)] hover:border-emerald-500/30 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                }`}
              >
                {/* Magic UI Border Beam on the top educational programs */}
                {isFeatured && (
                  <BorderBeam
                    size={220}
                    duration={12}
                    delay={idx * 3}
                    colorFrom="#10b981"
                    colorTo="#0284c7"
                  />
                )}

                <div>
                  {/* Top Bar: Icon, Institution & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                          {edu.institution}
                        </h3>
                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          {edu.program}
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shrink-0">
                      {edu.badge}
                    </span>
                  </div>

                  {/* Period & Status Pill */}
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      {edu.period}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold text-[10px]">
                      {edu.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal dark:font-light mb-4">
                    {edu.description}
                  </p>

                  {/* Expand / Collapse Button for Core Focus & Achievements */}
                  <button
                    onClick={() => toggleExpand(edu.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-semibold py-1"
                  >
                    <span>{isExpanded ? "Hide Course Details" : "View Course Details & Achievements"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {/* Collapsible Course Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden space-y-3 pt-3 mt-3 border-t border-[var(--border-glass)]"
                      >
                        {/* Core Focus Items */}
                        <div className="space-y-1.5">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                            Core Curriculum Focus:
                          </div>
                          {edu.coreFocus.map((focus, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{focus}</span>
                            </div>
                          ))}
                        </div>

                        {/* Key Achievements */}
                        {edu.keyAchievements && edu.keyAchievements.length > 0 && (
                          <div className="space-y-1.5 pt-2">
                            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                              Key Highlights:
                            </div>
                            {edu.keyAchievements.map((ach, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Technologies / Domain Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-[var(--border-glass)]">
                  {edu.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
