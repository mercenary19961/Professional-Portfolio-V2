"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "./work" },
  { href: "#activity", label: "./activity" },
  { href: "#career", label: "./career" },
  { href: "#stack", label: "./stack" },
  { href: "#contact", label: "./contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap">
        <a href="#top" className="who" aria-label="Back to top">
          <b>{profile.handle}</b>@{profile.host}:~$
        </a>
        <nav aria-label="Sections">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="menu" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="drawer">
          {open ? "close" : "ls ./"}
        </button>
      </div>
      {open && (
        <div className="drawer" id="drawer">
          <ul className="wrap">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
