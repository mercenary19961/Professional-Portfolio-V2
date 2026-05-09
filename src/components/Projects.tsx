import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "SynergyMS",
    type: "Enterprise Management System",
    description:
      "Role-based platform covering HR, clients, employees, tickets, attendance, and dashboards. Built for internal enterprise use with fine-grained access control.",
    stack: ["Laravel", "MySQL", "Tailwind", "Spatie Permissions"],
  },
  {
    name: "HardRock",
    type: "Company Profile Website",
    description:
      "Modern company site with a responsive UI, AI-integrated features, and structured business content sections. Built with a full React/Inertia stack on Laravel.",
    stack: ["Laravel", "Inertia.js", "React", "TypeScript", "Tailwind"],
  },
  {
    name: "NuorSteel",
    type: "Steel Industry Corporate Site",
    description:
      "Product catalog, multilingual content, lead capture forms, and a non-technical admin panel designed for internal teams with no developer access.",
    stack: ["Laravel", "MySQL", "Tailwind", "Alpine.js"],
  },
  {
    name: "HavenSeek",
    type: "Property Rental Platform",
    description:
      "Airbnb-inspired rental platform with property listings, bookings, role-based access, and secure payment flows.",
    stack: ["Laravel", "Livewire", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="What I've built" title="Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col border border-card-border rounded-xl p-6 bg-card hover:border-accent-deep transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  {project.type}
                </p>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 font-mono text-xs rounded-md border border-accent-deep text-accent bg-[#0a0a0a]"
                  >
                    {tech}
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
