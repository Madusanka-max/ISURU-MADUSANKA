import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Target, User, AlertTriangle, Lightbulb, BookOpen } from "lucide-react";
import { getProjects } from "@/lib/portfolio-data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const { projects } = getProjects();
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Isuru Madusanka",
    };
  }

  return {
    title: `${project.title} | Isuru Madusanka`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { projects } = getProjects();
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      {/* Hero Image */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-violet-900/40 to-blue-900/40 border border-white/10 shadow-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 backdrop-blur-md uppercase">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl text-balance">
            {project.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* If the project has a detailed case study */}
          {project.caseStudy ? (
            <>
              {/* Problem & Role */}
              <div className="grid sm:grid-cols-2 gap-6">
                <section className="glass-card p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                    <Target className="w-24 h-24 text-violet-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-violet-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">The Problem</h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed relative z-10">
                    {project.caseStudy.problem}
                  </p>
                </section>

                <section className="glass-card p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                    <User className="w-24 h-24 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">My Role</h2>
                  </div>
                  <p className="text-slate-400 font-medium text-lg relative z-10">
                    {project.caseStudy.role}
                  </p>
                </section>
              </div>

              {/* Challenges */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-orange-500" />
                  <h2 className="text-2xl font-bold text-white">Key Challenges</h2>
                </div>
                <div className="grid gap-4">
                  {project.caseStudy.challenges.map((challenge, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                      </div>
                      <p className="text-slate-300 leading-relaxed pt-1">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Solutions */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
                  <h2 className="text-2xl font-bold text-white">Solutions Implemented</h2>
                </div>
                <div className="grid gap-4">
                  {project.caseStudy.solutions.map((solution, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl glass-card border-emerald-500/10 hover:border-emerald-500/30 transition-colors relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 relative z-10">
                        <Lightbulb className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-slate-300 leading-relaxed pt-1 relative z-10">{solution}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learnings */}
              <section className="glass-card p-8 rounded-3xl border-violet-500/20 bg-gradient-to-br from-violet-900/10 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-violet-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Key Learnings</h2>
                </div>
                <ul className="space-y-4">
                  {project.caseStudy.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 leading-relaxed">{learning}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            /* Fallback for projects without a case study */
            <>
              {project.longDescription && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                  <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-p:text-slate-400">
                    <p>{project.longDescription}</p>
                  </div>
                </section>
              )}

              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 glass-card rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Action Links */}
          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5 pl-1">Project Links</h3>
            <div className="space-y-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 border border-white/5 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <Github className="w-5 h-5" /> Source Code
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 hover:text-violet-200 transition-all duration-200 border border-violet-500/20 hover:-translate-y-0.5 shadow-lg shadow-violet-500/5"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </span>
                  <ArrowLeft className="w-4 h-4 opacity-50 rotate-135" />
                </a>
              )}
              {!project.github && !project.live && (
                <div className="p-4 rounded-2xl bg-white/5 text-slate-400 text-sm text-center border border-white/5">
                  Links unavailable (Private / NDA)
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass-card rounded-3xl p-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5 pl-1">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 text-slate-300 text-sm font-medium border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const { projects } = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
