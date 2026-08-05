// ============================================================
// Portfolio Data Types
// ============================================================

export interface Stat {
  label: string;
  value: string;
}

export interface Award {
  icon: string;
  title: string;
  year: string;
  description: string;
}

export interface Social {
  linkedin: string;
  github: string;
  email: string;
}

export interface About {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  detailedSummary: string;
  careerObjective: string;
  location: string;
  stats: Stat[];
  social: Social;
  resumeUrl: string;
  awards: Award[];
}

// ============================================================

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

// ============================================================

export interface CaseStudy {
  problem: string;
  role: string;
  challenges: string[];
  solutions: string[];
  learnings: string[];
  images: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features?: string[];
  category: string;
  featured: boolean;
  github: string;
  live?: string;
  image: string;
  caseStudy?: CaseStudy;
}

export interface ProjectsData {
  projects: Project[];
}

// ============================================================

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  type: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface ExperienceData {
  experiences: Experience[];
}

// ============================================================

export interface Education {
  id: number;
  degree: string;
  shortDegree: string;
  institution: string;
  shortInstitution: string;
  startYear: string;
  endYear: string;
  status: string;
  description: string;
}

export interface EducationData {
  education: Education[];
}

// ============================================================

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  formspreeEndpoint: string;
  availability: string;
  preferredContact: string;
}

// ============================================================

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatRequest {
  message: string;
  history: Array<{ role: "user" | "assistant"; content: string }>;
}

export interface ChatResponse {
  response: string;
}
