import Prompt from "./Prompt";
import { learning, stack } from "@/data/profile";

export default function Stack() {
  const keys = Object.keys(stack);
  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <Prompt>cat stack.json</Prompt>
        <div className="cols">
          <pre className="json" aria-label="Tech stack">
            <span className="p" style={{ display: "block" }}>{"{"}</span>
            {keys.map((k, i) => (
              <span className="line" key={k}>
                <span className="k">&quot;{k}&quot;</span>
                <span className="p">: [</span>
                {stack[k].map((s, j) => (
                  <span key={s}>
                    <span className="str">&quot;{s}&quot;</span>
                    {j < stack[k].length - 1 && <span className="p">, </span>}
                  </span>
                ))}
                <span className="p">]{i < keys.length - 1 ? "," : ""}</span>
              </span>
            ))}
            <span className="p" style={{ display: "block" }}>{"}"}</span>
          </pre>
          <div className="learn">
            <h3># continuous learning</h3>
            <ul>
              {learning.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
