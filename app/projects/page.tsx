import { getProjects } from "@/lib/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata = {
  title: "Projects | Isuru Madusanka",
  description: "Browse Isuru Madusanka's portfolio of web applications, AI integrations, and software engineering projects.",
};

export default function ProjectsPage() {
  const { projects } = getProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <SectionHeader 
        subtitle="My Portfolio" 
        title="All Projects" 
        description="A collection of my recent work spanning full-stack web development, frontend interfaces, and backend systems. Each project represents a unique challenge and learning experience."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
