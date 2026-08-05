import type { SkillCategory } from "@/types";

const levelDots = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
} as const;

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  "AI / ML": "🤖",
  Tools: "🛠️",
};

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 group">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{categoryIcons[category.name] ?? "💡"}</span>
        <h3 className="text-white font-semibold text-base group-hover:text-violet-300 transition-colors duration-200">
          {category.name}
        </h3>
      </div>

      {/* Skills List */}
      <ul className="space-y-3">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3">
            <span className="text-slate-300 text-sm">{skill.name}</span>
            {/* Level dots */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                    dot <= levelDots[skill.level]
                      ? "bg-violet-500"
                      : "bg-slate-700"
                  }`}
                />
              ))}
              <span className="text-xs text-slate-500 ml-2 min-w-[70px]">{skill.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
