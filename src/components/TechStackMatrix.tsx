"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Search,
  Sparkles,
  Cpu,
  Code,
  Terminal,
  Share2,
  Layers,
  FileCode,
  Palette,
  PenTool,
  GitBranch,
  Box,
} from "lucide-react";
import { SKILLS, SKILL_CATEGORIES } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"cards" | "categories">("categories");

  const categories = [
    { id: "all", label: "All Tech Stack", icon: Sparkles },
    { id: "backend", label: "Backend & Core", icon: Server },
    { id: "frontend", label: "Frontend & UI", icon: Layout },
    { id: "database_devops", label: "Database & Tools", icon: Database },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu":
        return Cpu;
      case "Code":
        return Code;
      case "Terminal":
        return Terminal;
      case "Share2":
        return Share2;
      case "Layers":
        return Layers;
      case "FileCode":
        return FileCode;
      case "Palette":
        return Palette;
      case "PenTool":
        return PenTool;
      case "Database":
        return Database;
      case "GitBranch":
        return GitBranch;
      case "Box":
        return Box;
      default:
        return Cpu;
    }
  };

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-grid-cyber">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>1.3 Technical Skills Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Technical Skills &amp; <span className="text-gradient-cyan">Proficiencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal dark:font-light">
            Engineered across academic degree studies at Western University, intensive bootcamp
            training at Korea Software HRD Center, and industry internships.
          </p>
        </div>

        {/* View Mode & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 backdrop-blur-md max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search & Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. Spring, Next.js)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs font-mono text-[var(--text-primary)] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>

            <div className="hidden sm:flex items-center p-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 shrink-0">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode("categories");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === "categories"
                    ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Categories
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setViewMode("cards");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === "cards"
                    ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Detailed Cards
              </button>
            </div>
          </div>
        </div>

        {/* Visual Category Breakdown View (1.3 Matrix) */}
        {viewMode === "categories" && searchQuery === "" && activeCategory === "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {SKILL_CATEGORIES.map((catGroup, idx) => {
              const GroupIcon =
                catGroup.icon === "Server"
                  ? Server
                  : catGroup.icon === "Layout"
                  ? Layout
                  : Database;

              return (
                <motion.div
                  key={catGroup.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-panel rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/5 dark:border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          <GroupIcon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-base text-[var(--text-primary)]">
                          {catGroup.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">
                        {catGroup.skills.length} Skills
                      </span>
                    </div>

                    <div className="space-y-4">
                      {catGroup.skills.map((skill) => {
                        const SkillIcon = getIcon(skill.icon);
                        return (
                          <div key={skill.name} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-200">
                                <SkillIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span>{skill.name}</span>
                              </div>
                              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-glass)] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Clean Code Conventions</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : null}

        {/* Detailed Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-panel rounded-2xl p-5 border border-[var(--border-glass)] hover:border-emerald-500/40 transition-colors shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {skill.experience}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="w-full h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-full"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal dark:font-light mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-glass)]">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-400 group-hover:text-black dark:group-hover:text-slate-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No technology skills matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
