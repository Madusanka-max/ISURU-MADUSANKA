import { getExperience } from "@/lib/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata = {
  title: "Experience | Isuru Madusanka",
  description: "Isuru Madusanka's professional work experience and internships as a Full-Stack Software Engineer.",
};

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <SectionHeader
        subtitle="My Journey"
        title="Professional Experience"
        description="A timeline of my professional roles and industry experience. I have worked on production - grade systems, collaborating with teams to deliver high-quality software solutions."
        centered
      />

      <div className="mt-16">
        <ExperienceTimeline experience={experience} />
      </div>
    </div>
  );
}
