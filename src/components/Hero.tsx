import Prompt from "./Prompt";
import { profile } from "@/data/profile";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section className="hero" id="top">
      <div className="wrap grid">
        <div className="boot">
          <Prompt>whoami</Prompt>
          <h1>
            {first}
            <br />
            {rest.join(" ").replace("-", "‑")}
            <span className="cur" aria-hidden />
          </h1>
          <p className="lede">
            <b>
              {profile.role} at{" "}
              <a href={profile.companyUrl} target="_blank" rel="noopener noreferrer">
                {profile.company}
              </a>
              .
            </b>{" "}
            {profile.summary} {profile.secondTrack}
          </p>
          <div className="cta">
            <a className="btn primary" href="#work">./view-work</a>
            <a className="btn" href={profile.cv} download="Zaid Al-Sabbagh CV.pdf">cv.pdf ↓</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">github ↗</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin ↗</a>
          </div>
        </div>
        <aside className="status boot" aria-label="Current status">
          <div className="h">
            <span>status.json</span>
            <span className="ok">● online</span>
          </div>
          <dl>
            <dt>role</dt>
            <dd className="str">&quot;{profile.role}&quot;</dd>
            <dt>company</dt>
            <dd className="red">@{profile.company}</dd>
            <dt>since</dt>
            <dd className="str">&quot;{profile.since}&quot;</dd>
            <dt>based</dt>
            <dd className="str">&quot;{profile.location} · {profile.timezone}&quot;</dd>
            <dt>stack</dt>
            <dd>[laravel, inertia, react, ts]</dd>
            <dt>languages</dt>
            <dd>[en, ar, ru]</dd>
            <dt>open_to_roles</dt>
            <dd className="ok">true</dd>
          </dl>
        </aside>
      </div>
    </section>
  );
}
