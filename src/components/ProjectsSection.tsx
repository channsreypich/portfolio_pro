"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Server,
  Layers,
  Eye,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/types";
import { PROJECTS } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import ProjectModal from "./ProjectModal";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function ProjectsSection({
  selectedProjectId,
  onClearSelectedProject,
}: {
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const modalProject = selectedProjectId
    ? (PROJECTS.find((p) => p.id === selectedProjectId) ?? activeModalProject)
    : activeModalProject;

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "spring", label: "Backend Engines" },
    { id: "ai", label: "Python Automation" },
  ];

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1.5 Featured Projects Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal dark:font-light">
            Engineered with Clean Architecture, microservices with Spring Boot &amp; Laravel,
            and reactive Next.js client interfaces.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                soundFx.playClick();
                setActiveFilter(f.id);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === f.id
                  ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] font-semibold"
                  : "bg-black/[0.03] dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white border border-black/5 dark:border-white/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-panel relative rounded-3xl border border-[var(--border-glass)] hover:border-emerald-500/40 shadow-xl overflow-hidden flex flex-col justify-between group transition-colors"
              >
                {/* Featured Project Magic UI Border Beam */}
                {project.badge && (
                  <BorderBeam
                    size={200}
                    duration={10}
                    colorFrom="#10b981"
                    colorTo="#38bdf8"
                  />
                )}

                {/* Card Top Accent Banner */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />


                <div className="p-6">
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {project.badge ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3 h-3 text-emerald-500" />
                        {project.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 uppercase">
                        {project.category}
                      </span>
                    )}

                    {project.category === "fullstack" ? (
                      <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : project.category === "ai" ? (
                      <Terminal className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    ) : (
                      <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      {project.subtitle}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed font-normal dark:font-light">
                    {project.description}
                  </p>

                  {/* Architecture Strip */}
                  {project.architecture && (
                    <div className="mt-4 p-2.5 rounded-xl bg-black/[0.03] dark:bg-black/40 border border-black/5 dark:border-white/5 text-[11px] font-mono text-slate-700 dark:text-slate-300 line-clamp-2">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">Flow: </span>
                      {project.architecture}
                    </div>
                  )}

                  {/* Metrics HUD */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[var(--border-glass)]">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                            {m.value}
                          </div>
                          <div className="text-[9px] text-slate-500 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 bg-black/[0.02] dark:bg-black/20 border-t border-[var(--border-glass)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveModalProject(project);
                    }}
                    className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-500 font-mono transition-colors font-semibold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 transition-colors"
                        title="Repository / Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => {
          setActiveModalProject(null);
          onClearSelectedProject?.();
        }}
      />
    </section>
  );
}
