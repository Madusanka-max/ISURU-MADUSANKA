import fs from "fs";
import path from "path";
import type { About, SkillsData, ProjectsData, ExperienceData, EducationData, Contact } from "@/types";

const dataDir = path.join(process.cwd(), "data");

function readJSON<T>(filename: string): T {
  const filePath = path.join(dataDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getAbout(): About {
  return readJSON<About>("about.json");
}

export function getSkills(): SkillsData {
  return readJSON<SkillsData>("skills.json");
}

export function getProjects(): ProjectsData {
  return readJSON<ProjectsData>("projects.json");
}

export function getExperience(): ExperienceData {
  return readJSON<ExperienceData>("experience.json");
}

export function getEducation(): EducationData {
  return readJSON<EducationData>("education.json");
}

export function getContact(): Contact {
  return readJSON<Contact>("contact.json");
}

/**
 * Aggregates all portfolio data into a single context string for the AI system prompt.
 */
export function buildPortfolioContext(): string {
  const about = getAbout();
  const skills = getSkills();
  const projects = getProjects();
  const experience = getExperience();
  const education = getEducation();
  const contact = getContact();

  const skillsList = skills.categories
    .map((cat) => `${cat.name}: ${cat.skills.map((s) => `${s.name} (${s.level})`).join(", ")}`)
    .join("\n");

  const projectsList = projects.projects
    .map(
      (p) =>
        `- ${p.title}: ${p.description} | Tech: ${p.tech?.join(", ") || "N/A"} | Features: ${p.features?.join(", ") || "N/A"} | GitHub: ${p.github || "Private"} | Live: ${p.live || "N/A"}`
    )
    .join("\n");

  const experienceList = experience.experiences
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.startDate} – ${e.endDate})\n  Responsibilities: ${e.responsibilities?.join("; ") || "N/A"}\n  Technologies: ${e.technologies?.join(", ") || "N/A"}\n  Achievements: ${e.achievements?.join("; ") || "N/A"}`
    )
    .join("\n");

  const educationList = education.education
    .map((e) => `- ${e.degree} at ${e.institution} (${e.startYear} – ${e.endYear}) — ${e.status}`)
    .join("\n");

  const awardsList = about.awards
    .map((a) => `- ${a.title} (${a.year}): ${a.description}`)
    .join("\n");

  return `
=== ABOUT ===
Name: ${about.name}
Title: ${about.title}
Tagline: ${about.tagline}
Location: ${about.location}
Summary: ${about.summary}
Detailed Summary: ${about.detailedSummary}
Career Objective: ${about.careerObjective}

=== CONTACT ===
Email: ${contact.email}
Phone: ${contact.phone}
Location: ${contact.location}
LinkedIn: ${contact.linkedin}
GitHub: ${contact.github}
Availability: ${contact.availability}
Preferred Contact: ${contact.preferredContact}

=== SKILLS ===
${skillsList}

=== PROJECTS ===
${projectsList}

=== EXPERIENCE ===
${experienceList}

=== EDUCATION ===
${educationList}

=== AWARDS & ACHIEVEMENTS ===
${awardsList}

=== RESUME ===
Resume download is available at: /resume.pdf
  `.trim();
}
