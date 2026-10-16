"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import TechMarqueeSection from "@/components/TechMarqueeSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SpecializationBento from "@/components/SpecializationBento";

import TechStackMatrix from "@/components/TechStackMatrix";
import ProjectsSection from "@/components/ProjectsSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import CoverLetterModal from "@/components/CoverLetterModal";
import ContactModal from "@/components/ContactModal";
import CommandPalette from "@/components/CommandPalette";

function PortfolioContent() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [coverLetterOpen, setCoverLetterOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  const handleOpenCoverLetter = () => {
    setCoverLetterOpen(true);
  };

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  const handleOpenCmd = () => {
    setCmdOpen(true);
  };

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-x-hidden transition-colors duration-300">
      {/* Background Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenCmd={handleOpenCmd}
      />

      {/* Hero Section */}
      <HeroSection onOpenResume={handleOpenResume} />

      {/* Continuous Animated Tech Marquee (Magic UI) */}
      <TechMarqueeSection />

      {/* 2. About Me Section */}
      <AboutSection
        onOpenContact={handleOpenContact}
        onOpenCoverLetter={handleOpenCoverLetter}
      />

      {/* Academic Education & Qualifications (resume.md) */}
      <EducationSection />

      {/* 1.2 Technical Services & Specialization Bento Grid */}
      <SpecializationBento />

      {/* 1.3 Interactive Tech Stack Matrix */}
      <TechStackMatrix />

      {/* 1.5 Projects & Architectures Showcase */}
      <ProjectsSection
        selectedProjectId={selectedProjectId}
        onClearSelectedProject={() => setSelectedProjectId(null)}
      />

      {/* 1.4 & Career Journey & Milestone Timeline */}
      <JourneyTimeline />

      {/* Interactive CLI Terminal Shell */}
      <InteractiveTerminal />

      {/* Contact & Direct Connect Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* 1.7 Official Cover Letter Modal */}
      <CoverLetterModal
        isOpen={coverLetterOpen}
        onClose={() => setCoverLetterOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive 'Hire Me' Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onSelectProject={handleSelectProject}
        onOpenResume={handleOpenResume}
      />
    </main>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
