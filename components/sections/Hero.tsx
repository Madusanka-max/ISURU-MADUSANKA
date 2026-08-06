"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { About } from "@/types";

interface HeroProps {
  about: About;
}

export default function Hero({ about }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="flex justify-center flex-shrink-0"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-violet-600 opacity-75 blur-sm animate-spin" style={{ animationDuration: "6s" }} />
            {/* Gradient border ring */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500">
              <div className="rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-background">
                <Image
                  src="/profile.png"
                  alt="Isuru Madusanka"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-400 rounded-full border-4 border-background shadow-lg shadow-emerald-400/50" />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
          >
            Open to full-time roles & freelance projects
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Isuru</span>
            <br />
            <span className="text-white">Madusanka Rodrigo</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-400 font-medium mb-4"
          >
            {about.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-500 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {about.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <Link
              href="/projects"
              id="hero-view-projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 group"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="/Isuru%20Madusanka%20Rodrigo%20CV.pdf"
              download="Isuru_Madusanka_Rodrigo_CV.pdf"
              id="hero-download-resume"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-semibold hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={about.social.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github"
              aria-label="GitHub"
              className="flex items-center gap-2 p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={about.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin"
              aria-label="LinkedIn"
              className="flex items-center gap-2 p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${about.social.email}`}
              id="hero-email"
              aria-label="Email"
              className="flex items-center gap-2 p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg lg:mx-0 w-full"
          >
            {about.stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-white font-bold text-lg">{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs">Scroll to explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}