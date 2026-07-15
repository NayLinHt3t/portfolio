import { useState } from 'react'
import { embedded } from '../data/content.js'
import Section from './Section.jsx'

// Photo with a graceful "no signal" fallback until a real image is dropped in.
function Frame({ src, alt }) {
  const [ok, setOk] = useState(true)
  return (
    <div className="relative aspect-[4/3] bg-bg-2 overflow-hidden border-b border-line">
      {ok ? (
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          className="h-full w-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
        />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-fg-mut">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-60">
            <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="9" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4 18l5-4 3 2 4-4 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          <span className="mono text-[10px]">no signal — drop photo</span>
        </div>
      )}
      {/* scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 3px)',
        }}
      />
    </div>
  )
}

function Card({ item }) {
  return (
    <article className="panel group overflow-hidden flex flex-col">
      <Frame src={item.photo} alt={item.title} />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="mono text-sm text-fg">
            <span className="text-accent">▸</span> {item.title}
          </h3>
          <span className="mono text-[10px] text-fg-mut whitespace-nowrap">{item.period}</span>
        </div>
        {item.tagline && (
          <p className="text-fg-dim text-sm mt-1">{item.tagline}</p>
        )}
        {item.summary && (
          <p className="text-fg-dim text-[13px] leading-relaxed mt-2">{item.summary}</p>
        )}
        {item.stack?.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Embedded() {
  return (
    <Section id="embedded" index="// 03" title="embedded" path="/embedded · built for fun">
      <div className="mono text-xs text-fg-mut mb-4">
        <span className="text-accent">$</span> open ~/memories/*
        <span className="text-fg-mut">
          {' '}— {embedded.length} things I soldered, wired, and (mostly) got working
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {embedded.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Section>
  )
}
