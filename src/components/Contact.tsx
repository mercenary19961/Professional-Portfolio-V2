import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label="Get in touch" title="Contact" centered />

        <p className="text-zinc-400 text-base max-w-xl mx-auto mb-10 leading-relaxed text-center">
          Open to new opportunities, collaborations, or just a good conversation.
          Drop me a line and I&apos;ll get back to you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:sabbaghzaid88@gmail.com"
            className="px-6 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/zaid-alsabbagh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-card-border text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mercenary19961"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-card-border text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        <p className="mt-8 text-center font-mono text-sm text-zinc-600">
          sabbaghzaid88@gmail.com
        </p>
      </div>
    </section>
  );
}
