import { useState } from "react";
import { profile } from "../data/content.js";
import Section from "./Section.jsx";

function Photo() {
  const [ok, setOk] = useState(true);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="panel overflow-hidden">
      <div className="panel-head">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="ml-1">id.card</span>
      </div>
      <div className="aspect-[4/5] relative bg-bg-2">
        {ok ? (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setOk(false)}
            className="h-full w-full object-cover grayscale contrast-110"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-3">
            <div className="h-20 w-20 rounded-full border border-line-2 flex items-center justify-center mono text-2xl text-fg-dim">
              {initials}
            </div>
            <div className="mono text-[10px] text-fg-mut px-4 text-center">
              drop photo → /public/assets/profile.jpg
            </div>
          </div>
        )}
        {/* scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>
      <div className="border-t border-line px-3 py-2 flex items-center justify-between">
        <span className="mono text-[11px] text-fg-dim">{profile.name}</span>
        <span className="mono text-[10px] text-accent">verified ✓</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      index="// 01"
      title="about"
      path="/about · identity service"
    >
      <div className="grid gap-6 sm:grid-cols-[240px_1fr] sm:gap-8 items-start">
        <div className="w-full max-w-[240px] mx-auto sm:mx-0">
          <Photo />
        </div>

        <div className="panel p-5 md:p-6">
          <div className="mono text-xs text-fg-mut mb-4">
            <span className="text-accent">$</span> cat about.md
          </div>
          <p className="text-fg-dim leading-relaxed">{profile.summary}</p>

          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              ["role", profile.role],
              ["location", profile.location],
              ["timezone", profile.timezone],
              ["status", profile.availability || "heads-down"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline gap-3 border-b border-line pb-2"
              >
                <dt className="mono text-[11px] text-fg-mut w-20 shrink-0">
                  {k}
                </dt>
                <dd className="mono text-sm text-fg-dim">{v}</dd>
              </div>
            ))}
          </dl>

          {profile.resumeUrl && profile.resumeUrl !== "#" && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 mono text-xs text-fg border border-line-2 hover:border-accent hover:text-accent px-3 py-2 rounded transition-colors"
            >
              <span className="text-accent">↓</span> download resume.pdf
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
