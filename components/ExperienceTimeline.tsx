"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { ExperienceData } from "@/types";

interface ExperienceTimelineProps {
  experience: ExperienceData;
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Vertical Line */}
      <div className="absolute left-[23px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/50 via-blue-500/20 to-transparent -translate-x-1/2" />

      <div className="space-y-16">
        {experience.experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col sm:flex-row gap-8 sm:gap-16 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-[23px] sm:left-1/2 -translate-x-1/2 mt-6 sm:mt-8 z-10">
              <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-violet-500/30 flex items-center justify-center glow-purple">
                <Briefcase className="w-5 h-5 text-violet-400" />
              </div>
            </div>

            {/* Content Card */}
            <div className="w-full sm:w-1/2 pl-16 sm:pl-0">
              <div className={`glass-card p-6 sm:p-8 rounded-2xl hover:border-violet-500/30 transition-colors duration-300 ${
                index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
              }`}>
                {/* Date Mobile */}
                <div className="sm:hidden text-violet-400 font-medium text-sm mb-2">
                  {exp.startDate} &mdash; {exp.endDate}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="text-lg text-slate-300 font-medium mb-4">
                  {exp.company}
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/10">
                    {exp.type}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/10">
                    {exp.location}
                  </span>
                  {exp.current && (
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                      Current
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-violet-500 shrink-0 mt-1">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="text-emerald-500 shrink-0 mt-1">&rarr;</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-medium border border-violet-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Desktop (Opposite side) */}
            <div className="hidden sm:block w-1/2 pt-10">
              <div className={`text-violet-400 font-semibold text-lg ${
                index % 2 === 0 ? "text-left pl-12" : "text-right pr-12"
              }`}>
                {exp.startDate} &mdash; <br className="hidden lg:block" /> {exp.endDate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
