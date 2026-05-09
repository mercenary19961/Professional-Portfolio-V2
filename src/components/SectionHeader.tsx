interface SectionHeaderProps {
  label?: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-accent font-mono text-xs tracking-[0.25em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className={`mt-3 h-px w-12 bg-accent ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
