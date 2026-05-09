import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "SynergyMS",
    type: "Enterprise Management System",
    description:
      "Role-based platform covering HR, clients, employees, tickets, attendance, and dashboards. Built for internal enterprise use with fine-grained access control.",
    stack: ["Laravel", "MySQL", "Tailwind", "Spatie Permissions"],
    github: "https://github.com/mercenary19961/SynergyMS",
    live: null,
  },
  {
    name: "HardRock",
    type: "Company Profile Website",
    description:
      "Modern company site with a responsive UI, AI-integrated features, and structured business content sections. Built with a full React/Inertia stack on Laravel.",
    stack: ["Laravel", "Inertia.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/mercenary19961/HardRock",
    live: "https://www.hardrock-co.com/",
  },
  {
    name: "NuorSteel",
    type: "Steel Industry Corporate Site",
    description:
      "Product catalog, multilingual content, lead capture forms, and a non-technical admin panel designed for internal teams with no developer access.",
    stack: ["Laravel", "MySQL", "Tailwind", "Alpine.js"],
    github: "https://github.com/mercenary19961/NuorSteel",
    live: "https://nuorsteel.hardrock-co.com/",
  },
  {
    name: "HardRock E-Commerce",
    type: "E-Commerce Demo Platform",
    description:
      "Production-ready demo with product browsing, cart, checkout, and order history. Full admin dashboard covering inventory, orders, metrics, and demo data reset tools.",
    stack: ["Laravel 12", "React", "TypeScript", "Inertia.js", "Tailwind CSS 4", "MySQL"],
    github: "https://github.com/mercenary19961/hardrock-ecom-demo",
    live: "https://demo.hardrock-co.com/",
  },
  {
    name: "Sky Amman",
    type: "Production Company Website",
    description:
      "Official production website with multilingual support, animated UI, and a full admin panel. Laravel 12 backend with a React 19 + Inertia.js SPA frontend featuring drag-and-drop content management, analytics charts, and Zod-validated forms.",
    stack: ["Laravel 12", "React 19", "Inertia.js", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    github: "https://github.com/mercenary19961/Sky-Amman",
    live: null,
  },
];

function IconGitHub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

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
              {/* Header row: name + icons */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-white font-bold text-xl group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      <IconGitHub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live site`}
                      className="text-zinc-500 hover:text-accent transition-colors duration-200"
                    >
                      <IconExternalLink />
                    </a>
                  )}
                </div>
              </div>

              {/* Type */}
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
                {project.type}
              </p>

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
