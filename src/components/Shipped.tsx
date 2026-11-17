import Image from "next/image";
import Prompt from "./Prompt";
import { projects, repos, SHOWCASE, type Project } from "@/data/profile";

function Card({ p, wide = false }: { p: Project; wide?: boolean }) {
  const live = p.url !== null;
  const shot = (
    <>
      <Image
        src={`/shots/${p.slug}.webp`}
        alt={`${p.name} website`}
        width={1200}
        height={750}
        sizes={wide ? "(max-width: 640px) 100vw, 40vw" : "(max-width: 640px) 100vw, 33vw"}
      />
      <span className={`pill ${live ? "on" : "off"}`}>{live ? "● live" : "○ archived"}</span>
    </>
  );
  return (
    <article className={`card${wide ? " wide" : ""}${live ? "" : " archived"}`}>
      {live ? (
        <a className="shot" href={p.url!} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.domain}`}>
          {shot}
        </a>
      ) : (
        <a className="shot" href={p.caseStudy} target="_blank" rel="noopener noreferrer" aria-label={`Watch the ${p.name} walkthrough`}>
          {shot}
        </a>
      )}
      <div className="body">
        <div className="fn">
          <span className={live ? "" : "strike"}>{p.domain}/</span>
          <small>{p.year}</small>
        </div>
        <p>
          <span className="pname">{p.name}</span> <span className="kind">· {p.kind}</span>
          <br />
          {p.blurb}
        </p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="links">
          {live && (
            <a href={p.url!} target="_blank" rel="noopener noreferrer">visit ↗</a>
          )}
          <a href={p.caseStudy} target="_blank" rel="noopener noreferrer">
            {live ? "case study + video ↗" : "watch the walkthrough ↗"}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Shipped() {
  const live = projects.filter((p) => p.url);
  const archived = projects.filter((p) => !p.url);
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <Prompt>ls ~/shipped --all</Prompt>
        <p className="count">
          {projects.length} sites · <span className="ok">{live.length} live</span> · {archived.length} archived · all
          bilingual English/Arabic, built and deployed end to end
        </p>
        <div className="cards">
          {live.map((p) => (
            <Card key={p.slug} p={p} />
          ))}
          {archived.map((p) => (
            <Card key={p.slug} p={p} wide />
          ))}
        </div>

        <div className="ls">
          <Prompt>ls -l ~/repos</Prompt>
          {repos.map((r) => {
            const inner = (
              <>
                <span className="perm">{r.url ? "drwxr-xr-x" : "d---------"}</span>
                <span className="p">{r.name}</span>
                <span className="w">{r.what}</span>
                <span className="y">{r.year}</span>
              </>
            );
            return r.url ? (
              <a className="row" key={r.name} href={r.url} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div className="row off" key={r.name}>
                {inner}
              </div>
            );
          })}
        </div>

        <p className="note">
          Client code is private. Screenshots, stack and walkthrough videos live in{" "}
          <a href={SHOWCASE.brandcode} target="_blank" rel="noopener noreferrer">brandcode-showcase</a> and{" "}
          <a href={SHOWCASE.older} target="_blank" rel="noopener noreferrer">showcase</a>.
        </p>
      </div>
    </section>
  );
}
