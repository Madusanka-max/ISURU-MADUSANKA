"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { About } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

interface AboutPreviewProps {
  about: About;
}

export default function AboutPreview({ about }: AboutPreviewProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader subtitle="Who I Am" title="About Me" />
          <p className="text-slate-400 text-base leading-relaxed mb-6">
            {about.summary}
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
            <MapPin className="w-4 h-4 text-violet-400" />
            {about.location}
          </div>
          <Link
            href="/about"
            id="about-preview-read-more"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200 group"
          >
            Read More About Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-4"
        >
          {/* Career Objective Card */}
          <div className="glass-card rounded-2xl p-6 gradient-border">
            <h3 className="text-white font-semibold text-sm mb-2">Career Objective</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {about.careerObjective}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4 text-center hover:border-violet-500/30 transition-colors duration-200">
                <div className="text-white font-bold text-lg">{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
