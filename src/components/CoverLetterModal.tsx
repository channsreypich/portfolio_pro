"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Copy,
  Check,
  Download,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { COVER_LETTER_TEXT, PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function CoverLetterModal({
  isOpen,
  onClose,
  onOpenContact,
}: CoverLetterModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(COVER_LETTER_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 text-slate-800 dark:text-slate-100 shadow-2xl z-10"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    Official Document
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                    2026
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Cover Letter — {PERSONAL_INFO.fullName}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print PDF</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors ml-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Letterhead */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {PERSONAL_INFO.fullName}
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Western University (Year 4) • Korea Software HRD Center
              </p>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right font-mono">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

          {/* Cover Letter Body Content */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-sans border-l-2 border-emerald-500/40 pl-5 sm:pl-6 py-1">
            <p className="font-semibold text-slate-900 dark:text-white">
              Dear Hiring Manager,
            </p>

            <p>
              I am writing to express my interest in joining your engineering organization as a Software Developer. I am currently in my fourth year of Computer Science at Western University and undergoing intensive practical software engineering at the Korea Software HRD Center.
            </p>

            <p>
              Throughout my coursework and engineering internships, I have cultivated hands-on experience in Java, Spring Boot, PHP (Laravel), Next.js, and TypeScript. I take pride in writing testable code, understanding relational database structures, and delivering clean, responsive user interfaces.
            </p>

            <p>
              Beyond my technical toolkit, my background in Accounts Receivable at Dolphin Logistics has honed my precision, analytical problem-solving, and attention to detail. I look forward to bringing this dedication, rapid learning agility, and collaborative spirit to your team.
            </p>

            <div className="pt-4">
              <p className="text-slate-600 dark:text-slate-400">Best Regards,</p>
              <p className="font-bold text-slate-900 dark:text-white text-lg mt-1 font-serif">
                {PERSONAL_INFO.fullName}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                Full-Stack &amp; Backend Software Developer
              </p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Ready for high-impact software engineering roles &amp; technical opportunities.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenContact) {
                    setTimeout(onOpenContact, 200);
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Chansreypich</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
