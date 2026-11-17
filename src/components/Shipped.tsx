import Image from "next/image";
import Prompt from "./Prompt";
import { featured, more, SHOWCASE } from "@/data/profile";

export default function Shipped() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <Prompt>ls ~/shipped --live</Prompt>
        <div className="cards">
          {featured.map((p) => (
            <article className="card" key={p.slug}>
              <a className="shot" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.domain}`}>
                <Image src={`/shots/${p.slug}.webp`} alt={`${p.name} website`} width={1200} height={750} sizes="(max-width: 640px) 100vw, 33vw" />
              </a>
              <div className="body">
                <div className="fn">
                  <span>{p.domain}/</span>
                  <small>2026</small>
                </div>
                <p>
                  <span style={{ color: "var(--fg)" }}>{p.name}.</span> {p.blurb}
                </p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="links">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">visit ↗</a>
                  <a href={p.caseStudy} target="_blank" rel="noopener noreferrer">case study + video ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="ls">
          <Prompt>ls -l ~/shipped/more</Prompt>
          {more.map((p) => (
            <a className="row" key={p.path} href={p.url} target="_blank" rel="noopener noreferrer">
              <span className="perm">drwxr-xr-x</span>
              <span className="p">{p.path}</span>
              <span className="w">{p.what}</span>
              <span className="y">{p.year}</span>
            </a>
          ))}
        </div>

        <p className="note">
          Client code is private. Screenshots, stack and walkthroughs live in{" "}
          <a href={SHOWCASE.brandcode} target="_blank" rel="noopener noreferrer">brandcode-showcase</a> and{" "}
          <a href={SHOWCASE.older} target="_blank" rel="noopener noreferrer">showcase</a>.
        </p>
      </div>
    </section>
  );
}
