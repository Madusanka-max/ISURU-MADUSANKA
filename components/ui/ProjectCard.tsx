import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "glass-card rounded-2xl overflow-hidden group hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10",
        featured && "md:col-span-1"
      )}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-violet-900/40 to-blue-900/40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-slate-300 border border-white/10 backdrop-blur-sm capitalize">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-white/5 text-slate-400">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            id={`project-detail-${project.slug}`}
            className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200 group/link"
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>

          <div className="flex gap-2 ml-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-github-${project.slug}`}
                aria-label={`${project.title} GitHub`}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-live-${project.slug}`}
                aria-label={`${project.title} Live Demo`}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
