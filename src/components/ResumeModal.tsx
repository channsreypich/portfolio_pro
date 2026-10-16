"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import {
  PERSONAL_INFO,
  EDUCATION_MILESTONES,
  SKILLS,
  EXPERIENCES,
  REFERENCES,
} from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-800 dark:text-slate-100 shadow-2xl z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 ml-2">
                CV_PROFILE • Western University &amp; Korea HRD Center
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Content Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                {PERSONAL_INFO.fullName}
                <Sparkles className="w-5 h-5 text-emerald-500" />
              </h2>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Western University (Year 4) • Korea Software HRD Center
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-teal-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>Phnom Penh, Cambodia</span>
              </span>
            </div>
          </div>

          {/* Professional Experience (1.4 Work & Professional Experience) */}
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4" />
                Work &amp; Professional Experience
              </h3>
              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {exp.company}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                          {exp.role}
                        </span>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 self-start sm:self-auto font-medium">
                        {exp.period} ({exp.type})
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-2 text-xs text-slate-600 dark:text-slate-300">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & HRD Specializations */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4" />
                Education &amp; Academic Background
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {EDUCATION_MILESTONES.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          {edu.program}
                        </h4>
                      </div>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 self-start sm:self-auto font-semibold">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                      {edu.institution} •{" "}
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{edu.badge}</span>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies (1.3 Skills) */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-4">
                <Award className="w-4 h-4" />
                Technical Competencies &amp; Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {skill.experience}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* References Section (1.6 References) */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-4">
                <Users className="w-4 h-4" />
                Academic &amp; Professional References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {REFERENCES.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">
                        {ref.name}
                      </div>
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
                        {ref.title}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {ref.institution}
                      </div>
                    </div>
                    <a
                      href={`tel:${ref.contact}`}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold"
                    >
                      {ref.contact}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
