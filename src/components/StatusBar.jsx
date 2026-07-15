import { useEffect, useState } from 'react'
import { profile, mapNodes } from '../data/content.js'

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function StatusBar() {
  const now = useClock()
  const time = now.toLocaleTimeString('en-GB', { hour12: false })

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="wrap flex h-11 items-center justify-between gap-4">
        {/* left: identity + nav */}
        <div className="flex items-center gap-4 min-w-0">
          <a href="#top" className="mono text-sm text-fg shrink-0">
            <span className="text-accent">~</span>/{profile.handle}
            <span className="text-fg-mut">.sys</span>
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            {mapNodes.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="mono text-xs text-fg-dim hover:text-accent px-2 py-1 rounded transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        {/* right: live status */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="status-pill">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
            online
          </span>
          <span className="mono text-xs text-fg-mut hidden lg:inline tabular-nums">
            {time} {profile.timezone}
          </span>
        </div>
      </div>
    </header>
  )
}
