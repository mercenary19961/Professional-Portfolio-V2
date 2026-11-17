import Prompt from "./Prompt";
import { career } from "@/data/profile";

export default function Career() {
  return (
    <section className="sec" id="career">
      <div className="wrap">
        <Prompt>git log --career --oneline</Prompt>
        <div className="log">
          {career.map((j, i) => (
            <details key={j.hash} open={i === 0}>
              <summary>
                <span className="hash">{j.hash}</span>
                <span className="when">{j.period}</span>
                <span className="msg">
                  {j.head && <span className="red">(HEAD → {j.company.toLowerCase()}) </span>}
                  <b>{j.role}</b> @ {j.company} · {j.where}
                </span>
                <span className="tog" aria-hidden>›</span>
              </summary>
              <ul>
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
