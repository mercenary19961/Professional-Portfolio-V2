import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Languages",
    skills: ["PHP", "TypeScript", "JavaScript", "Python", "Go", "SQL", "Bash"],
  },
  {
    category: "Frameworks",
    skills: ["Laravel", "React", "Inertia.js", "Livewire", "Alpine.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "WSL", "Postman", "Vite", "Jira", "Figma"],
  },
  {
    category: "AI & Eval",
    skills: ["Prompt Engineering", "LLM Evaluation", "RAG", "Rubric Design", "QA Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="What I work with" title="Skills" />

        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-zinc-200 rounded-lg border border-card-border bg-[#0a0a0a] hover:border-accent-deep hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
