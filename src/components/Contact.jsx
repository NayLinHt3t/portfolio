import { socials, profile } from '../data/content.js'
import Section from './Section.jsx'

const METHOD_COLOR = {
  GET: 'var(--color-accent)',
  POST: 'var(--color-warn)',
}

export default function Contact() {
  return (
    <Section id="contact" index="// 05" title="contact" path="/contact · egress gateway">
      <div className="grid gap-6 sm:grid-cols-2 items-start">
        <div className="panel p-5 md:p-6">
          <div className="mono text-xs text-fg-mut mb-4">
            <span className="text-accent">$</span> curl -s /contact
          </div>
          <p className="text-fg-dim leading-relaxed">
            Open to backend / systems / platform roles. Fastest reply via email —
            I read everything and respond within a day or two.
          </p>
          <a
            href={socials.find((s) => s.label === 'email')?.url || '#'}
            className="inline-flex items-center gap-2 mt-6 mono text-sm text-bg bg-accent hover:opacity-90 px-4 py-2.5 rounded transition-opacity font-medium"
          >
            <span>→</span> say hello
          </a>
        </div>

        {/* endpoint list */}
        <div className="panel">
          <div className="panel-head">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="ml-1">endpoints</span>
          </div>
          <ul className="divide-y divide-line">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 hover:bg-panel-2 transition-colors"
                >
                  <span
                    className="mono text-[10px] font-bold w-10 shrink-0"
                    style={{ color: METHOD_COLOR[s.method] || 'var(--color-fg-dim)' }}
                  >
                    {s.method}
                  </span>
                  <span className="mono text-sm text-fg-dim group-hover:text-fg transition-colors">
                    {s.path}
                  </span>
                  <span className="mono text-xs text-fg-mut ml-auto group-hover:text-accent transition-colors">
                    {s.label} →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
