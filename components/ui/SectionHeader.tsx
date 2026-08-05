import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <span className="inline-block text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
