import { projects } from '../data/content.js'
import Section from './Section.jsx'

const STATUS = {
  running: { label: 'running', color: 'var(--color-accent)' },
  wip: { label: 'building', color: 'var(--color-warn)' },
  archived: { label: 'archived', color: 'var(--color-fg-mut)' },
}

function StatusBadge({ status }) {
  const s = STATUS[status] ?? STATUS.archived
  return (
    <span className="status-pill" style={{ color: s.color, borderColor: s.color + '55' }}>
      <span
        className={status === 'running' ? 'live-dot h-1.5 w-1.5 rounded-full' : 'h-1.5 w-1.5 rounded-full'}
        style={{ background: s.color }}
      />
      {s.label}
    </span>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="panel flex flex-col group hover:border-line-2 transition-colors">
      <div className="panel-head justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-accent">▸</span>
          <span className="text-fg truncate">{p.name}</span>
        </div>
        <StatusBadge status={p.status} />
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <p className="text-fg text-sm">{p.tagline}</p>
          <span className="mono text-[10px] text-fg-mut whitespace-nowrap">{p.period}</span>
        </div>

        <p className="text-fg-dim text-sm leading-relaxed">{p.summary}</p>

        {/* build progress bar */}
        {p.progress != null && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="mono text-[10px] text-fg-mut uppercase tracking-wide">
                {p.status === 'running' ? 'shipped' : 'build progress'}
              </span>
              <span
                className="mono text-[10px] tabular-nums"
                style={{ color: (STATUS[p.status] ?? STATUS.archived).color }}
              >
                {p.progress}%
              </span>
            </div>
            <div className="h-1.5 bg-line rounded-[2px] overflow-hidden">
              <div
                className="h-full rounded-[2px]"
                style={{
                  width: `${p.progress}%`,
                  background: (STATUS[p.status] ?? STATUS.archived).color,
                }}
              />
            </div>
          </div>
        )}

        {/* feature highlights */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {p.highlights.map((h) => (
            <span key={h} className="mono text-[11px] text-fg-dim">
              <span className="text-accent">◆</span> {h}
            </span>
          ))}
        </div>

        {/* stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>

        {/* footer links */}
        <div className="mt-5 pt-3 border-t border-line flex items-center gap-4">
          <span className="mono text-[11px] text-fg-mut">role: {p.role}</span>
          <div className="ml-auto flex items-center gap-3">
            {p.repo && p.repo !== '#' && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="link-mono">
                repo →
              </a>
            )}
            {p.live && p.live !== '#' && (
              <a href={p.live} target="_blank" rel="noreferrer" className="link-mono">
                live →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" index="// 02" title="projects" path="/projects · compute cluster">
      <div className="mono text-xs text-fg-mut mb-4">
        <span className="text-accent">$</span> systemctl status services --all
        <span className="text-fg-mut"> — {projects.length} units</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </Section>
  )
}
