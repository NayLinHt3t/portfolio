import { profile } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line mt-8">
      <div className="wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="mono text-[11px] text-fg-mut">
          © {year} {profile.name} — built with react + vite
        </span>
        <span className="mono text-[11px] text-fg-mut flex items-center gap-2">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
          all systems operational
        </span>
        <a href="#top" className="mono text-[11px] text-fg-dim hover:text-accent transition-colors">
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
