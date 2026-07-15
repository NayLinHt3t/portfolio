import { profile } from '../data/content.js'
import SystemMap from './SystemMap.jsx'

export default function Hero() {
  return (
    <section id="top" className="pt-10 md:pt-16 pb-6">
      <div className="wrap">
        {/* intro line */}
        <div className="rise mono text-xs text-fg-mut mb-4">
          <span className="text-accent">$</span> whoami
        </div>

        <div className="rise grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-fg leading-[1.1]">
              {profile.name}
            </h1>
            <p className="mono text-accent mt-2 text-sm md:text-base">
              {profile.role}
            </p>
            <p className="text-fg-dim mt-4 max-w-xl leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              {profile.availability && (
                <span className="status-pill border-accent-dim text-accent">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
                  {profile.availability}
                </span>
              )}
              <span className="mono text-xs text-fg-mut">
                {profile.location} · {profile.timezone}
              </span>
              {profile.website && (
                <a
                  href={profile.websiteUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="link-mono text-xs"
                >
                  ↗ {profile.website}
                </a>
              )}
            </div>
          </div>

          {/* currently running — honest status readout */}
          <div className="panel">
            <div className="panel-head">
              <span className="dot" style={{ background: 'var(--color-warn)' }} />
              <span className="dot" />
              <span className="dot" />
              <span className="ml-1">ps --user {profile.handle}</span>
            </div>
            <ul className="divide-y divide-line">
              {(profile.now || []).map((p, i) => {
                const running = p.state === 'running'
                const color = running ? 'var(--color-accent)' : 'var(--color-fg-mut)'
                return (
                  <li key={i} className="px-4 py-3 flex items-start gap-3">
                    <span
                      className="mono text-[10px] uppercase tracking-wide shrink-0 mt-1 flex items-center gap-1.5 w-16"
                      style={{ color }}
                    >
                      <span
                        className={running ? 'live-dot h-1.5 w-1.5 rounded-full' : 'h-1.5 w-1.5 rounded-full'}
                        style={{ background: color }}
                      />
                      {p.state}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-fg text-sm">{p.label}</div>
                      {p.detail && (
                        <div className="mono text-fg-mut text-[11px]">{p.detail}</div>
                      )}
                    </div>
                    {p.since && (
                      <span className="mono text-fg-mut text-[10px] whitespace-nowrap mt-1">
                        {p.since}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* the system map */}
        <div className="rise mt-10 md:mt-14 panel p-4 md:p-6" style={{ animationDelay: '.08s' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="mono text-xs text-fg-mut">// system map — click a node to route</span>
            <span className="mono text-[10px] text-fg-mut hidden sm:inline">
              traffic: <span className="text-accent">▲ nominal</span>
            </span>
          </div>
          <SystemMap />
        </div>
      </div>
    </section>
  )
}
