import SectionHeader from "./SectionHeader";

const topics = [
  {
    area: "Data Structures & Algorithms",
    icon: "01",
    details: [
      "Binary search on rotated and sorted arrays",
      "Two-pointer and sliding window patterns",
      "Complexity analysis and space/time trade-offs",
    ],
  },
  {
    area: "AI & RAG Pipelines",
    icon: "02",
    details: [
      "RAG pipeline design and implementation",
      "Retrieval evaluation strategies",
      "Grounded answer faithfulness metrics",
    ],
  },
  {
    area: "Systems",
    icon: "03",
    details: [
      "Docker and WSL-based development workflows",
      "OSS code review and contribution practice",
    ],
  },
];

export default function CurrentlyStudying() {
  return (
    <section id="studying" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="Always learning" title="Currently Studying" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.area}
              className="flex flex-col border border-card-border rounded-xl p-5 bg-card hover:border-accent-deep transition-colors duration-300"
            >
              {/* Icon number */}
              <span className="font-mono text-xs text-accent-deep mb-4 select-none">
                {topic.icon}
              </span>

              <h3 className="text-white font-semibold text-sm leading-snug mb-4">
                {topic.area}
              </h3>

              <ul className="flex flex-col gap-2.5">
                {topic.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-zinc-500 text-xs leading-relaxed"
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
