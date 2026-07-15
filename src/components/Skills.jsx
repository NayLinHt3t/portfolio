import { skills, learning } from '../data/content.js'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" index="// 04" title="skills" path="/skills · config store">
      <div className="mono text-xs text-fg-mut mb-4">
        <span className="text-accent">$</span> cat /etc/stack.conf
      </div>
      <div className="panel divide-y divide-line">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 px-4 md:px-5 py-4"
          >
            <div className="mono text-sm text-fg flex items-center gap-2">
              <span className="text-accent">[</span>
              {group.group}
              <span className="text-accent">]</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="tag hover:border-line-2 hover:text-fg transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {learning?.length > 0 && (
        <div className="panel mt-4 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 px-4 md:px-5 py-4">
          <div className="mono text-sm text-fg flex items-center gap-2">
            <span className="text-warn">[</span>
            learning
            <span className="text-warn">]</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {learning.map((item) => (
              <span
                key={item}
                className="tag border-dashed"
                style={{ color: 'var(--color-warn)', borderColor: 'var(--color-warn)' + '55' }}
              >
                <span className="mr-1">◔</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
