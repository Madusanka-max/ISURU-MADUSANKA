import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillsPreview from "@/components/sections/SkillsPreview";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import ContactCTA from "@/components/sections/ContactCTA";
import { getAbout, getSkills, getProjects, getExperience, getContact } from "@/lib/portfolio-data";

export default function Home() {
  const about = getAbout();
  const skills = getSkills();
  const projects = getProjects();
  const experience = getExperience();
  const contact = getContact();

  return (
    <>
      <Hero about={about} />
      <AboutPreview about={about} />
      <FeaturedProjects projects={projects.projects} />
      <SkillsPreview skills={skills} />
      <ExperiencePreview experience={experience} />
      <ContactCTA contact={contact} />
    </>
  );
}
