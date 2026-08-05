"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Contact } from "@/types";

interface ContactCTAProps {
  contact: Contact;
}

export default function ContactCTA({ contact }: ContactCTAProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center gradient-border glass-card"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto bg-violet-500/20 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/30">
            <Mail className="w-8 h-8 text-violet-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            {contact.availability}. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              id="cta-contact-me"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 flex items-center justify-center gap-2 group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
