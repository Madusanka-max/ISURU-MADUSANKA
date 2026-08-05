import { getSkills } from "@/lib/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillCard from "@/components/ui/SkillCard";

export const metadata = {
  title: "Skills | Isuru Madusanka",
  description: "A comprehensive list of Isuru Madusanka's technical skills, including frontend, backend, databases, and AI tools.",
};

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <SectionHeader 
        subtitle="My Abilities" 
        title="Technical Skills" 
        description="A detailed breakdown of my technical toolkit, categorized by domain. I continuously learn and adapt to new technologies to build modern, efficient, and scalable applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.categories.map((category) => (
          <SkillCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
