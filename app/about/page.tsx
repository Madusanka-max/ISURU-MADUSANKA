import { getAbout, getEducation, getExperience, getSkills } from "@/lib/portfolio-data";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About | Isuru Madusanka",
  description: "Learn more about Isuru Madusanka's background, education, skills, and career objectives.",
};

export default function AboutPage() {
  const about = getAbout();
  const education = getEducation();
  const experience = getExperience();
  const skills = getSkills();

  return (
    <AboutContent
      about={about}
      education={education}
      experience={experience}
      skills={skills}
    />
  );
}
