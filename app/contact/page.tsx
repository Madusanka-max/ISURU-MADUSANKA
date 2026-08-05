import { getContact } from "@/lib/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ResumeButton from "@/components/ui/ResumeButton";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const metadata = {
  title: "Contact | Isuru Madusanka",
  description: "Get in touch with Isuru Madusanka for full-time roles, freelance projects, or collaborations.",
};

export default function ContactPage() {
  const contact = getContact();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <SectionHeader 
        subtitle="Get in Touch" 
        title="Contact Me" 
        description="I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
        {/* Contact Info (Left column) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card rounded-3xl p-8 space-y-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-white hover:text-violet-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                  <a href={`tel:${contact.phone}`} className="text-white hover:text-violet-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-white">{contact.location}</p>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Social Profiles</h4>
              <div className="flex gap-3">
                <a 
                  href={contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 border border-white/5"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/30 hover:-translate-y-1 transition-all duration-200 border border-white/5"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <hr className="border-white/10" />

            <div className="pt-2">
              <ResumeButton size="lg" className="w-full justify-center" />
            </div>
          </div>
        </div>

        {/* Contact Form (Right column) */}
        <div className="lg:col-span-3">
          <ContactForm endpoint={contact.formspreeEndpoint} />
        </div>
      </div>
    </div>
  );
}
