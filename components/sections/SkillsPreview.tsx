"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import type { SkillsData } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

interface SkillsPreviewProps {
  skills: SkillsData;
}

export default function SkillsPreview({ skills }: SkillsPreviewProps) {
  // Flatten top skills across categories for a badge cloud
  const topSkills = skills.categories
    .flatMap((c) => c.skills)
    .filter((s) => s.level === "Advanced" || s.level === "Intermediate")
    .slice(0, 15); // Limit to top 15

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-950/30 border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            subtitle="My Tech Stack"
            title="Tools & Technologies"
            description="I've worked with a variety of modern technologies in full-stack development, with a strong focus on building scalable web applications."
            className="mb-8"
          />
          <Link
            href="/skills"
            id="skills-preview-view-all"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200 group"
          >
            View All Skills
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Floating Badges */}
        <div className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-blue-600/10 rounded-3xl blur-3xl" />
          
          <div className="relative flex flex-wrap justify-center gap-3 w-full">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: Math.random() * 0.4, // Random stagger for organic feel
                  type: "spring",
                  stiffness: 100,
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-sm shadow-lg hover:-translate-y-1 transition-transform duration-200 ${
                  skill.level === "Advanced"
                    ? "bg-violet-500/10 border-violet-500/30 text-violet-300"
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 opacity-70" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
