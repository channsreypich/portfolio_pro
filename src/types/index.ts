export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  category: "fullstack" | "backend" | "ai" | "spring" | "nextjs";
  description: string;
  highlights: string[];
  technologies: string[];
  architecture?: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  badge?: string;
  gradient?: string;
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "ai_data" | "database_devops" | "core_cs";
  level: number; // 1-100
  experience?: string;
  iconName: string;
  tags: string[];
  description: string;
}

export interface SkillCategoryGroup {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    icon: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface ReferenceItem {
  name: string;
  title: string;
  institution: string;
  contact: string;
}

export interface EducationMilestone {
  id: string;
  institution: string;
  program: string;
  period: string;
  status: "Completed" | "In Progress" | "Academic";
  badge: string;
  description: string;
  coreFocus: string[];
  keyAchievements: string[];
  technologies: string[];
  icon: string;
  certificateUrl?: string;
}

export interface ExperienceTimelineItem {
  year: string;
  title: string;
  organization: string;
  role: string;
  statusText: string;
  description: string;
  tags: string[];
  metrics: string[];
}
