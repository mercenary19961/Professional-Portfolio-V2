import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "HardRock",
    period: "Dec 2025 → Present",
    description:
      "Full stack development, deployment, and maintenance across the company stack. Integrated AI-powered features and autonomous agents. Mentors trainees on Git workflows and production deployment practices.",
  },
  {
    title: "AI Engineer",
    company: "MENADevs",
    period: "Nov 2024 → Dec 2025",
    description:
      "Multi-turn prompt design, LLM evaluation, and rubric authoring. QA on model outputs across coding, data analysis, RAG, and policy domains.",
  },
  {
    title: "Operations Team Leader",
    company: "CsMena",
    period: "Apr 2022 → Oct 2025",
    description:
      "Led a team of 200 content moderation agents. Built SOPs, KPI dashboards, and structured coaching cycles to drive quality and consistency.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="Where I've worked" title="Experience" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent-deep to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-8">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 pt-1">
                  <div className="w-10 h-10 rounded-full border-2 border-accent bg-card flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 border border-card-border rounded-xl p-5 sm:p-6 hover:border-accent-deep transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-accent text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
