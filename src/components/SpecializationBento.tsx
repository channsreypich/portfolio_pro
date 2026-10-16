"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Sparkles,
  CheckCircle2,
  Activity,
  GraduationCap,
  Users,
  Phone,
} from "lucide-react";
import { SERVICES, REFERENCES } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ArchitectureBeamDiagram } from "./ArchitectureBeamDiagram";

export default function SpecializationBento() {
  const [activeServiceTab, setActiveServiceTab] = useState<string>("backend-api");
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);

  const flowSteps = [
    {
      step: 1,
      title: "Client & UI Layer",
      tech: "Next.js App Router & Tailwind CSS",
      desc: "Responsive TypeScript UI with Server Components & reactive client hooks.",
      badge: "SSR / CSR",
    },
    {
      step: 2,
      title: "Backend API",
      tech: "Spring Boot & Laravel Clean REST APIs",
      desc: "JWT authentication, Role-Based Access Control (RBAC), and clean business logic.",
      badge: "Clean Architecture",
    },
    {
      step: 3,
      title: "Data Persistence & DevOps",
      tech: "PostgreSQL & Docker Containers",
      desc: "ACID-compliant transactions, indexing optimization, and containerized deployment.",
      badge: "Relational DB & Docker",
    },
  ];

  return (
    <section id="specialization" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-sky-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Services &amp; Core Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Specialized <span className="text-gradient-cyan">Engineering Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal dark:font-light">
            Combining university Computer Science rigor at Western University with intensive
            bootcamp training at Korea Software HRD Center.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: 3 Core Technical Services (1.2 Technical Services) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Magic UI Border Beam */}
            <BorderBeam
              size={280}
              duration={14}
              delay={0}
              colorFrom="#10b981"
              colorTo="#0284c7"
            />

            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />


            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  3 Core Technical Services
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Full-Stack &amp; Backend Engineering
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                Architecture &amp; Development Services
              </h3>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {SERVICES.map((service) => {
                  const isSelected = activeServiceTab === service.id;
                  const IconComponent =
                    service.icon === "Server"
                      ? Server
                      : service.icon === "Layout"
                      ? Layout
                      : Database;

                  return (
                    <div
                      key={service.id}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveServiceTab(service.id);
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                          : "bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5 hover:border-emerald-500/20"
                      }`}
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-sm text-[var(--text-primary)] mb-2">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-glass)]">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.04] dark:bg-white/[0.06] text-slate-700 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Request Flow Visualizer */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.03] dark:bg-black/40 border border-black/10 dark:border-white/10 mb-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    Clean Architecture Flow Simulation
                  </span>
                  <span className="text-[11px]">Click step to inspect</span>
                </div>

                {/* Steps Selector */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {flowSteps.map((item) => (
                    <button
                      key={item.step}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveFlowStep(item.step);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        activeFlowStep === item.step
                          ? "bg-emerald-500/20 border-emerald-500/50 text-[var(--text-primary)] shadow-sm font-semibold"
                          : "bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        0{item.step}
                      </div>
                      <div className="text-xs truncate">{item.title}</div>
                    </button>
                  ))}
                </div>

                {/* Live Magic UI Animated Beam Flow Simulation */}
                <ArchitectureBeamDiagram />

                {/* Active Step Details */}
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <span>{flowSteps[activeFlowStep - 1].title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono">
                        {flowSteps[activeFlowStep - 1].badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {flowSteps[activeFlowStep - 1].desc}
                    </div>
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold shrink-0">
                    Clean Code Standard
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-glass)]">
              {["Spring Boot", "Laravel", "Next.js", "React", "PostgreSQL", "Docker", "REST APIs", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Academic & Professional References (1.6 References) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-8 border border-sky-500/25 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1.5 font-semibold">
                  <Users className="w-3.5 h-3.5" />
                  Verified Endorsements
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  4 References
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                Academic &amp; Industry References
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-4">
                Professors from Western University and engineering mentors from GTech Cambodia:
              </p>

              {/* References List */}
              <div className="space-y-3">
                {REFERENCES.map((ref, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-sky-500/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">
                          {ref.name}
                        </div>
                        <div className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">
                          {ref.title}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {ref.institution}
                        </div>
                      </div>
                      <a
                        href={`tel:${ref.contact}`}
                        className="px-2 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-300 text-[11px] font-mono hover:bg-sky-500/20 transition-colors flex items-center gap-1 shrink-0"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{ref.contact}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-glass)] mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Western University &amp; GTech</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                Direct Contact Available
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
