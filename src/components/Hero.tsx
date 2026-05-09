export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Radial teal glow at top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0, 102, 102, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">
          Lead Software Engineer
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-4">
          Zaid Al-Sabbagh
        </h1>

        {/* Tech stack line */}
        <p className="font-mono text-sm text-zinc-500 tracking-widest mb-8">
          Laravel&nbsp;&middot;&nbsp;React&nbsp;&middot;&nbsp;TypeScript&nbsp;&middot;&nbsp;AI Integration
        </p>

        {/* Pitch */}
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Building scalable systems and AI-integrated products
          <br className="hidden sm:block" />
          with clean architecture and deep attention to craft.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-colors duration-200"
          >
            Download CV
          </a>
          <a
            href="https://github.com/mercenary19961"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zaid-alsabbagh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-zinc-600 tracking-[0.25em] uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
