import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

export default function ResumeButton({
  variant = "primary",
  size = "md",
  className,
  id = "resume-download-btn",
}: ResumeButtonProps) {
  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 hover:shadow-lg hover:shadow-violet-500/25",
    ghost:
      "border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5",
  };

  return (
    <a
      href="/Isuru%20Madusanka%20Rodrigo%20CV.pdf"
      download="Isuru_Madusanka_Resume.pdf"
      id={id}
      className={cn(
        "inline-flex items-center font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        sizes[size],
        variants[variant],
        className
      )}
    >
      <Download className={iconSizes[size]} />
      Download Resume
    </a>
  );
}
