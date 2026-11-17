// Everything the site says lives here, so content updates never touch layout.
// Keep it in step with the CV and the GitHub profile README.

export const profile = {
  name: "Zaid Al-Sabbagh",
  handle: "zaid",
  host: "amman",
  role: "Lead Software Engineer",
  company: "BrandCode",
  companyUrl: "https://bcodepr.com",
  since: "Oct 2026",
  location: "Amman, JO",
  timezone: "UTC+3",
  email: "sabbaghzaid88@gmail.com",
  github: "https://github.com/mercenary19961",
  githubUser: "mercenary19961",
  linkedin: "https://www.linkedin.com/in/zaid-sabbagh-6a7287227/",
  cv: "/cv.pdf",
  summary:
    "I design, build, deploy and maintain Laravel, Inertia, React and TypeScript platforms in English and Arabic, from the first commit to production monitoring.",
  secondTrack: "Second track: LLM evaluation, RAG and rubric design.",
};

// Redrawn every night by the workflow in github.com/mercenary19961/mercenary19961,
// so the site always shows the latest year without its own token or build step.
export const CONTRIBUTIONS_SVG =
  "https://raw.githubusercontent.com/mercenary19961/mercenary19961/main/assets/contributions.svg";

export const SHOWCASE = {
  brandcode: "https://github.com/mercenary19961/brandcode-showcase",
  older: "https://github.com/mercenary19961/showcase",
};

export type Featured = {
  slug: string;
  domain: string;
  url: string;
  name: string;
  blurb: string;
  tags: string[];
  caseStudy: string;
};

export const featured: Featured[] = [
  {
    slug: "brandcode",
    domain: "bcodepr.com",
    url: "https://bcodepr.com",
    name: "BrandCode",
    blurb:
      "Bilingual PR and marketing agency site with SSR, a Turnstile protected contact pipeline, an admin inbox for enquiries, articles and the team, and Sentry monitoring.",
    tags: ["laravel", "inertia", "react", "ssr", "sentry"],
    caseStudy: `${SHOWCASE.brandcode}#brandcode`,
  },
  {
    slug: "lucent",
    domain: "lucent-intl.com",
    url: "https://lucent-intl.com",
    name: "Lucent International Advisors",
    blurb:
      "Audit and advisory firm in five countries. Interactive offices map, enquiry form and SEO preserving redirects from the old site.",
    tags: ["laravel", "react", "ssr", "seo"],
    caseStudy: `${SHOWCASE.brandcode}#lucent`,
  },
  {
    slug: "can-international",
    domain: "canintlco.com",
    url: "https://canintlco.com",
    name: "CAN International",
    blurb:
      "Riyadh interior design, fit-out and exhibitions company, opened by a WebGL globe hero and motion throughout.",
    tags: ["laravel", "react", "webgl", "motion"],
    caseStudy: `${SHOWCASE.brandcode}#can-international`,
  },
];

export type Listed = {
  slug: string | null;
  path: string;
  url: string;
  what: string;
  tags: string[];
  year: string;
};

export const more: Listed[] = [
  {
    slug: "retab",
    path: "retab.com.sa/",
    url: "https://retab.com.sa",
    what: "Online store for a Saudi dates brand. Card, Apple Pay and Tamara checkout, OTO shipping, full back office.",
    tags: ["laravel", "react", "playwright"],
    year: "2026",
  },
  {
    slug: "sky-amman",
    path: "skyamman.com/",
    url: "https://www.skyamman.com",
    what: "Real estate developer site. Filterable listings, lead inbox and a CMS with undo.",
    tags: ["laravel", "react", "ssr"],
    year: "2026",
  },
  {
    slug: "nuor-steel",
    path: "nuor-steel/",
    url: `${SHOWCASE.older}#nuor-steel`,
    what: "Saudi steel manufacturer. Spec sheets, certificate library, careers with CV upload.",
    tags: ["laravel", "react", "sentry"],
    year: "2026",
  },
  {
    slug: null,
    path: "SynergyMS/",
    url: "https://github.com/mercenary19961/SynergyMS",
    what: "Role based platform for HR, clients, projects, tickets and attendance, built on Spatie Permissions.",
    tags: ["laravel", "mysql", "spatie"],
    year: "2024",
  },
];

export type Job = {
  hash: string;
  period: string;
  role: string;
  company: string;
  where: string;
  head?: boolean;
  points: string[];
};

export const career: Job[] = [
  {
    hash: "a1f9c2e",
    period: "Oct 2026 → now",
    role: "Lead Software Engineer",
    company: "BrandCode",
    where: "Amman",
    head: true,
    points: [
      "Built BrandCode’s bilingual (English/Arabic, RTL) agency site in Laravel and React/TypeScript, hosted on Railway with Sentry monitoring.",
      "Shipped a secure contact pipeline: Cloudflare Turnstile, database backed submissions and multi recipient email delivery.",
      "Delivered client sites including Lucent, CAN International (rate limiting, security headers/CSP, localisation) and Nuor Steel.",
    ],
  },
  {
    hash: "7d03b18",
    period: "Dec 2025 → Oct 2026",
    role: "Lead Software Engineer",
    company: "HardRock",
    where: "Jordan",
    points: [
      "Led full stack development, deployment and maintenance of HardRock’s web platforms; owned Git workflows and release cadence.",
      "Integrated AI powered features and website agents for automation and user interaction.",
      "Mentored trainees on Git, deployment and project structure.",
    ],
  },
  {
    hash: "4be2a90",
    period: "Nov 2024 → Dec 2025",
    role: "AI Engineer",
    company: "MENADevs",
    where: "Remote",
    points: [
      "Authored and audited multi turn prompts, rubrics and QA workflows for LLM evaluation across coding, data analysis, RAG and policy tasks.",
      "Evaluated outputs for correctness, instruction following and faithfulness to retrieved context.",
    ],
  },
  {
    hash: "0c5e771",
    period: "Apr 2022 → Oct 2025",
    role: "Operations Team Leader",
    company: "CsMena",
    where: "Jordan",
    points: [
      "Led a team of 200 content moderation agents across shifts; owned quality, SLA and policy outcomes.",
      "Built SOPs, training plans and KPI dashboards; ran coaching cycles from trend data.",
    ],
  },
];

export const stack: Record<string, string[]> = {
  languages: ["PHP", "TypeScript", "JavaScript", "Python", "Go", "Bash"],
  frameworks: ["Laravel", "React", "Inertia.js", "Livewire", "Alpine.js", "Tailwind"],
  data: ["MySQL", "PostgreSQL", "SQL Server"],
  ops: ["Git", "Docker", "Railway", "Cloudflare", "Sentry", "Playwright", "Vite"],
  ai: ["Prompt engineering", "LLM evaluation", "RAG", "Rubric design", "Claude CLI"],
};

export const learning = [
  "DSA: binary search on rotated arrays, two pointer and sliding window patterns, complexity analysis.",
  "AI: RAG pipelines, retrieval evaluation and grounded answer faithfulness metrics.",
  "Systems: Docker and WSL workflows, open source code review.",
];
