"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // Only take the first 3 featured projects
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHeader
          subtitle="My Portfolio"
          title="Featured Work"
          className="mb-0"
        />
        <Link
          href="/projects"
          id="featured-view-all"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} featured />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
