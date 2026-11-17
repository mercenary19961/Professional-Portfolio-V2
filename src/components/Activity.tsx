import Prompt from "./Prompt";
import { CONTRIBUTIONS_SVG, profile } from "@/data/profile";

export default function Activity() {
  return (
    <section className="sec" id="activity">
      <div className="wrap">
        <Prompt>git log --since=&quot;1 year ago&quot; --graph</Prompt>
        <a className="graph" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
          {/* Plain img on purpose: the SVG animates and is redrawn nightly on GitHub. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CONTRIBUTIONS_SVG} alt="GitHub contributions in the last year, private work included" width={771} height={180} loading="lazy" />
        </a>
        <div className="graph-foot">
          <span>private work included · redrawn every night</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/{profile.githubUser} ↗</a>
        </div>
      </div>
    </section>
  );
}
