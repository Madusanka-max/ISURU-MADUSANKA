"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap, MapPin, Mail, Linkedin, Github,
  Briefcase, Download, ArrowRight, Trophy, Users, Medal,
  Award, Code2, Layers, Database, Terminal, Wrench, Cpu,
  CheckCircle2, Star,
} from "lucide-react";
import { motion } from "framer-motion";
import type { About, EducationData, ExperienceData, SkillsData } from "@/types";

interface Props {
  about: About;
  education: EducationData;
  experience: ExperienceData;
  skills: SkillsData;
}

const awardIconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  users: Users,
  medal: Medal,
};

const categoryIconMap: Record<string, React.ElementType> = {
  Frontend: Layers,
  Backend: Code2,
  Database: Database,
  "AI / ML": Cpu,
  Tools: Wrench,
};

const levelColor: Record<string, string> = {
  Advanced: "bg-violet-500/20 border-violet-500/40 text-violet-300",
  Intermediate: "bg-blue-500/20 border-blue-500/40 text-blue-300",
  Beginner: "bg-slate-500/20 border-slate-500/30 text-slate-400",
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function AboutContent({ about, education, experience, skills }: Props) {
  const latestExp = experience.experiences[0];

  return (
    <div className="min-h-screen">

      {/* ══════════════════ HERO BANNER ══════════════════ */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* ── Profile side ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center gap-5 shrink-0"
            >
              {/* Animated avatar */}
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-violet-600 opacity-60 blur-sm animate-spin"
                  style={{ animationDuration: "7s" }}
                />
                <div className="relative p-[3px] rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-violet-500">
                  <div className="rounded-full overflow-hidden w-44 h-44 sm:w-52 sm:h-52 bg-background">
                    <Image
                      src="/profile.png"
                      alt="Isuru Madusanka"
                      width={208}
                      height={208}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-400 rounded-full border-[3px] border-background shadow-lg shadow-emerald-400/60" />
              </div>

              {/* Available badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>

              {/* Socials */}
              <div className="flex gap-3">
                {[
                  { href: about.social.github, icon: Github, label: "GitHub" },
                  { href: about.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${about.social.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Bio side ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
                My Story
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
                Hi, I&apos;m <span className="gradient-text">Isuru Madusanka Rodrigo</span>
              </h1>
              <p className="text-lg text-slate-400 font-medium mb-2">{about.title}</p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm mb-6">
                <MapPin className="w-4 h-4 text-violet-400" />
                {about.location}
              </div>

              <p className="text-slate-400 leading-relaxed mb-4 text-[15px]">
                {about.summary}
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                {about.detailedSummary}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {about.stats.map((s) => (
                  <div key={s.label} className="glass-card rounded-2xl px-5 py-3.5 text-center min-w-[120px]">
                    <div className="text-white font-bold text-lg">{s.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="/Isuru%20Madusanka%20Rodrigo%20CV.pdf"
                  download="Isuru_Madusanka_Rodrigo_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-blue-500 transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:border-white/20 hover:text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MAIN CONTENT ══════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-20">

        {/* ── Career Objective ── */}
        <motion.div {...fade()}>
          <div className="glass-card rounded-3xl p-8 gradient-border relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Career Objective</h2>
                <p className="text-slate-400 leading-relaxed">{about.careerObjective}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Technical Skills ── */}
        <motion.div {...fade()}>
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.categories.map((cat, ci) => {
              const Icon = categoryIconMap[cat.name] ?? Terminal;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: ci * 0.07 }}
                  className="glass-card rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <h3 className="text-white font-semibold">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((sk) => (
                      <span
                        key={sk.name}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${levelColor[sk.level] ?? levelColor.Beginner}`}
                      >
                        {sk.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Legend */}
          {/* <div className="mt-5 flex flex-wrap gap-3 text-xs">
            {Object.entries(levelColor).map(([lvl, cls]) => (
              <span key={lvl} className={`px-2.5 py-1 rounded-lg border font-medium ${cls}`}>{lvl}</span>
            ))}
          </div> */}
        </motion.div>

        {/* ── Experience ── */}
        <motion.div {...fade()}>
          <div className="flex items-center justify-between mb-8">
            <SectionTitle className="mb-0">Work Experience</SectionTitle>
            <Link href="/experience" className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors group">
              View all <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden hover:border-violet-500/30 transition-all duration-300">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/8 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-violet-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{latestExp.role}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                      {latestExp.type}
                    </span>
                  </div>
                  <div className="text-violet-400 font-semibold mb-1">{latestExp.company}</div>
                  <div className="text-slate-500 text-sm mb-6">
                    {latestExp.startDate} — {latestExp.endDate} · {latestExp.location}
                  </div>
                  <ul className="space-y-3 mb-7">
                    {latestExp.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {latestExp.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Education ── */}
        <motion.div {...fade()}>
          <SectionTitle>Education Journey</SectionTitle>
          <div className="relative">
            <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/30 to-transparent hidden sm:block" />
            <div className="space-y-5">
              {education.education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  {/* Dot */}
                  <div className="hidden sm:flex flex-col items-center shrink-0 w-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-violet-500/20 mt-6 shrink-0 z-10" />
                  </div>
                  {/* Card */}
                  <div className="flex-1 glass-card rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-base leading-snug mb-1">{edu.degree}</h3>
                          <div className="text-violet-400 font-medium text-sm mb-1">{edu.institution}</div>
                          <div className="text-slate-500 text-xs">{edu.startYear} — {edu.endYear}</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 shrink-0">
                        {edu.status}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-slate-400 text-sm leading-relaxed mt-4">{edu.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Awards ── */}
        <motion.div {...fade()}>
          <SectionTitle>Awards & Recognition</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {about.awards.map((award, i) => {
              const Icon = awardIconMap[award.icon] ?? Award;
              const variants = [
                { card: "from-violet-600/10 to-purple-600/5", border: "border-violet-500/25", icon: "text-violet-400", dot: "bg-violet-500/10" },
                { card: "from-blue-600/10 to-cyan-600/5",     border: "border-blue-500/25",   icon: "text-blue-400",   dot: "bg-blue-500/10" },
                { card: "from-amber-500/10 to-orange-500/5",  border: "border-amber-500/25",  icon: "text-amber-400",  dot: "bg-amber-500/10" },
              ];
              const v = variants[i % variants.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${v.card} border ${v.border} hover:-translate-y-1.5 transition-all duration-300 cursor-default`}
                >
                  <div className={`w-11 h-11 rounded-xl ${v.dot} border ${v.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${v.icon}`} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${v.icon}`}>{award.year}</div>
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{award.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{award.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper sub-component for section headings
function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-blue-500 shrink-0" />
      <h2 className="text-2xl font-bold text-white">{children}</h2>
    </div>
  );
}
