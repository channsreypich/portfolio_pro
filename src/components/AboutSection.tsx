"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

const CODE_SNIPPETS = {
  spring: {
    title: "Spring Boot 3 • Clean Architecture REST API",
    lang: "java",
    code: `// Enterprise Java Spring Boot REST Controller
@RestController
@RequestMapping("/api/v1/reservations")
@RequiredArgsConstructor
public class ReservationController {
  
  private final ReservationService reservationService;

  @PostMapping
  @PreAuthorize("hasRole('STUDENT') or hasRole('ADMIN')")
  public ResponseEntity<ApiResponse<ReservationDto>> createReservation(
      @Valid @RequestBody ReservationRequest request) {
    var response = reservationService.processBooking(request);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(ApiResponse.success(response));
  }
}`,
  },
  nextjs: {
    title: "Next.js App Router • Reactive Client Interface",
    lang: "tsx",
    code: `// Next.js App Router Client Component
"use client";

export default function AssetDashboard({ initialAssets }: Props) {
  const [filter, setFilter] = useState("all");
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {initialAssets.map((asset) => (
        <AssetCard key={asset.id} data={asset} onBook={handleBook} />
      ))}
    </div>
  );
}`,
  },
  laravel: {
    title: "Laravel 11 • High-Concurrency Backend Service",
    lang: "php",
    code: `// Laravel E-Commerce REST Engine
namespace App\\Http\\Controllers\\Api;

class OrderController extends Controller {
  public function checkout(OrderRequest $request): JsonResponse {
    $order = DB::transaction(function () use ($request) {
      return $this->orderService->createOrderWithLock($request->validated());
    });
    
    return response()->json(['data' => $order], 201);
  }
}`,
  },
};

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenCoverLetter: () => void;
}

export default function AboutSection({
  onOpenContact,
  onOpenCoverLetter,
}: AboutSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSnippetTab, setActiveSnippetTab] = useState<
    "spring" | "nextjs" | "laravel"
  >("spring");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const copyCurrentSnippet = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(CODE_SNIPPETS[activeSnippetTab].code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    soundFx.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* 12-column responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (lg:col-span-5): Interactive Code Architecture HUD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 280, damping: 22, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow Pre-heading */}
            <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-500" />
              <span>LET ME INTRODUCE MYSELF</span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              About me
            </h2>

            {/* Headline Subtitle */}
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
              {PERSONAL_INFO.title} • Phnom Penh, Cambodia
            </h3>

            {/* Body Text */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base mb-6">
              {PERSONAL_INFO.aboutStory}
            </p>

            {/* Direct Contact Card */}
            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Direct Contact Inquiry
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 underline decoration-emerald-500/50 hover:decoration-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className="text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          Copied
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <Phone size={14} className="text-teal-500" />
                    <span className="hidden sm:inline">{PERSONAL_INFO.phone}</span>
                    <span className="sm:hidden">Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Call-To-Action (CTA) Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary ("Hire Me") */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenContact();
                }}
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
              >
                <Send size={14} />
                <span>Hire Me</span>
              </button>

              {/* Secondary ("Read Cover Letter") */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenCoverLetter();
                }}
                className="px-6 py-3 rounded-full flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition active:scale-95 shadow-sm"
              >
                <FileText size={14} />
                <span>Read Cover Letter</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column (lg:col-span-7): Narrative typography hierarchy, direct contact card, and dual action buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl border border-emerald-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
              {/* Top decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" />

              {/* Snippet Tabs */}
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveSnippetTab("spring");
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeSnippetTab === "spring"
                        ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-semibold"
                        : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    Spring Boot
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveSnippetTab("nextjs");
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeSnippetTab === "nextjs"
                        ? "bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/30 font-semibold"
                        : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    Next.js
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveSnippetTab("laravel");
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeSnippetTab === "laravel"
                        ? "bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 font-semibold"
                        : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    Laravel
                  </button>
                </div>

                <button
                  onClick={copyCurrentSnippet}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  title="Copy snippet"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Snippet Title */}
              <div className="text-xs font-mono text-slate-400 mb-2 truncate">
                {"// " + CODE_SNIPPETS[activeSnippetTab].title}
              </div>

              {/* Code Block Container */}
              <div className="bg-[#080d1a] rounded-2xl p-4 font-mono text-xs overflow-x-auto border border-emerald-500/10 text-emerald-300/90 leading-relaxed shadow-inner">
                <pre className="whitespace-pre">
                  <code>{CODE_SNIPPETS[activeSnippetTab].code}</code>
                </pre>
              </div>

              {/* Architecture Metrics Footer */}
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Clean Code Architecture
                </span>
                <span>Western Univ • Korea HRD</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
