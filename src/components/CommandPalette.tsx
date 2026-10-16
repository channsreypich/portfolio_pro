"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Code2,
  Terminal,
  Layers,
  GraduationCap,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";
import { soundFx } from "@/lib/sound";
import { PROJECTS, SKILLS } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
  onOpenResume?: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) {
          onClose();
        } else {
          setQuery("");
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickActions = [
    {
      id: "action-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Appearance",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: "action-resume",
      title: "View Comprehensive Resume & CV",
      category: "Action",
      icon: GraduationCap,
      action: () => {
        onClose();
        onOpenResume?.();
      },
    },
    {
      id: "action-terminal",
      title: "Open Interactive CLI Terminal",
      category: "Navigation",
      icon: Terminal,
      action: () => {
        onClose();
        document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "action-education",
      title: "Jump to Academic Education & Qualifications",
      category: "Navigation",
      icon: GraduationCap,
      action: () => {
        onClose();
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "action-bento",
      title: "Jump to HRD Specialization Bento Grid",
      category: "Navigation",
      icon: Layers,
      action: () => {
        onClose();
        document.getElementById("specialization")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = SKILLS.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-2xl rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-glass)] bg-black/5 dark:bg-black/40">
            <Search className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                soundFx.playTerminalKey();
                setQuery(e.target.value);
              }}
              placeholder="Search projects, skills, HRD courses, commands..."
              className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-mono"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
              ESC
            </kbd>
          </div>

          {/* Results list */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
            {/* Quick Actions */}
            {!query && (
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 px-3 mb-1.5">
                  Quick Actions
                </div>
                <div className="space-y-1">
                  {quickActions.map((act) => {
                    const Icon = act.icon;
                    return (
                      <button
                        key={act.id}
                        onClick={() => {
                          soundFx.playClick();
                          act.action();
                        }}
                        onMouseEnter={() => soundFx.playHover()}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-cyan-500/10 text-left transition-colors group border border-transparent hover:border-cyan-500/20"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-white">
                              {act.title}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {act.category}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Projects matching */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 px-3 mb-1.5">
                  Projects ({filteredProjects.length})
                </div>
                <div className="space-y-1">
                  {filteredProjects.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        soundFx.playClick();
                        onClose();
                        onSelectProject?.(p.id);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-cyan-500/10 text-left transition-colors group border border-transparent hover:border-cyan-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-white flex items-center gap-1.5">
                            {p.title}
                            {p.badge && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-mono">
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            {p.tagline}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Skills matching */}
            {filteredSkills.length > 0 && (
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 px-3 mb-1.5">
                  Technologies & Skills ({filteredSkills.length})
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {filteredSkills.slice(0, 6).map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <span className="font-medium text-slate-800 dark:text-slate-200">{s.name}</span>
                      <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                        {s.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredProjects.length === 0 &&
              filteredSkills.length === 0 &&
              query && (
                <div className="py-8 text-center text-xs text-slate-400">
                  No matching results for &ldquo;{query}&rdquo;. Try &ldquo;Next.js&rdquo;, &ldquo;Spring&rdquo;, &ldquo;AI&rdquo;, or &ldquo;HRD&rdquo;.
                </div>
              )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
