import Link from "next/link";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/Madusanka-max",
    icon: Github,
    label: "GitHub",
    id: "footer-github",
  },
  {
    href: "https://www.linkedin.com/in/Isuru-Madusanka-Rodrigo",
    icon: Linkedin,
    label: "LinkedIn",
    id: "footer-linkedin",
  },
  {
    href: "mailto:isuru.rodrigo1243@gmail.com",
    icon: Mail,
    label: "Email",
    id: "footer-email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/50 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Isuru Madusanka Rodrigo</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-Stack Software Engineer building clean, scalable web applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  id={link.id}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 border border-white/5 hover:border-white/10"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Get In Touch</h3>
            <p className="text-slate-400 text-sm mb-4">
              Open to full-time roles and freelance projects.
            </p>
            <a
              href="mailto:isuru.rodrigo1243@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              isuru.rodrigo1243@gmail.com
            </a>
            <div className="mt-4">
              <a
                href="/Isuru%20Madusanka%20Rodrigo%20CV.pdf"
                download="Isuru_Madusanka_Rodrigo_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600/20 text-violet-400 text-sm hover:bg-violet-600/30 hover:text-violet-300 transition-all duration-200 border border-violet-500/20"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © 2025 Isuru Madusanka Rodrigo. Made with Next.js
          </p>
          <p className="text-slate-600 text-xs">
            Powered by OpenAI · Built for recruiters & developers
          </p>
        </div>
      </div>
    </footer>
  );
}
