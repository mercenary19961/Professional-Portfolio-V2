"use client";

import { useState } from "react";
import Prompt from "./Prompt";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: the address is still on screen to select */
    }
  };
  return (
    <section className="sec contact" id="contact">
      <div className="wrap">
        <Prompt>echo $CONTACT</Prompt>
        <h2 style={{ marginTop: 24 }}>
          Have a role or
          <br />a project? <span>Ping me.</span>
        </h2>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="copy" onClick={copy}>
            {copied ? "copied ✓" : "copy"}
          </button>
        </div>
        <div className="cta">
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin ↗</a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">github ↗</a>
          <a className="btn" href={profile.cv} download="Zaid Al-Sabbagh CV.pdf">cv.pdf ↓</a>
        </div>
      </div>
    </section>
  );
}
