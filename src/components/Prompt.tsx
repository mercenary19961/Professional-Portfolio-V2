export default function Prompt({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div className="prompt" id={id}>
      <em aria-hidden>$</em>
      {children}
    </div>
  );
}
