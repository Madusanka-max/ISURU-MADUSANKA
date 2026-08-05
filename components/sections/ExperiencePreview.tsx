"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { ExperienceData } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

interface ExperiencePreviewProps {
  experience: ExperienceData;
}

export default function ExperiencePreview({ experience }: ExperiencePreviewProps) {
  // Get the most recent experience
  const latestExp = experience.experiences[0];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHeader
          subtitle="My Journey"
          title="Recent Experience"
          className="mb-0"
        />
        <Link
          href="/experience"
          id="experience-preview-view-all"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
        >
          View Full Journey
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-6 sm:p-8 hover:border-violet-500/30 transition-colors duration-300 relative overflow-hidden"
      >
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{latestExp.role}</h3>
              <div className="text-lg text-violet-400 font-medium mb-2">
                {latestExp.company}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>{latestExp.startDate} &mdash; {latestExp.endDate}</span>
                <span>&bull;</span>
                <span>{latestExp.location}</span>
                <span>&bull;</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                  {latestExp.type}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative z-10">
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Responsibilities</h4>
          <ul className="space-y-3">
            {latestExp.responsibilities.slice(0, 3).map((resp, i) => (
              <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                <span className="text-violet-500 shrink-0 mt-1">&rarr;</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
