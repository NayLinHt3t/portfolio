import { mapNodes } from '../data/content.js'

// Fixed layout in a 1000 x 300 viewBox. Positions are hand-tuned so the
// diagram reads like a request pipeline: client → about → projects → contact,
// with skills branching up and embedded branching down off the projects node.
const NODES = {
  client:   { x: 24,  y: 118, w: 118, h: 60, label: 'client', role: 'you / visitor', deco: true },
  about:    { x: 228, y: 118, w: 150, h: 60 },
  projects: { x: 452, y: 96,  w: 172, h: 104, big: true },
  skills:   { x: 462, y: 8,   w: 152, h: 60 },
  embedded: { x: 462, y: 232, w: 152, h: 56 },
  contact:  { x: 700, y: 118, w: 150, h: 60 },
  www:      { x: 904, y: 122, w: 72,  h: 52, label: 'www', role: 'egress', deco: true },
}

const EDGES = [
  'M142,148 H228',   // client  -> about
  'M378,148 H452',   // about   -> projects
  'M538,96 V68',     // projects-> skills (up)
  'M538,200 V232',   // projects-> embedded (down)
  'M624,148 H700',   // projects-> contact
  'M850,148 H904',   // contact -> www
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Node({ id, def, meta }) {
  const label = def.label ?? meta?.label ?? id
  const role = def.role ?? meta?.role ?? ''
  const cx = def.x + def.w / 2
  const clickable = !def.deco

  return (
    <g
      className={clickable ? 'group cursor-pointer' : ''}
      onClick={clickable ? () => scrollTo(id) : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => (e.key === 'Enter' || e.key === ' ') && scrollTo(id) : undefined}
    >
      <rect
        x={def.x}
        y={def.y}
        width={def.w}
        height={def.h}
        rx="5"
        className={
          def.deco
            ? 'fill-panel stroke-line'
            : 'fill-panel stroke-line-2 group-hover:fill-panel-2 group-hover:stroke-accent transition-colors'
        }
        strokeWidth="1.2"
      />
      {/* corner tick, blueprint-y detail */}
      {!def.deco && (
        <circle
          cx={def.x + 9}
          cy={def.y + 9}
          r="2"
          className="fill-fg-mut group-hover:fill-accent transition-colors"
        />
      )}
      <text
        x={cx}
        y={role ? def.y + def.h / 2 - 4 : def.y + def.h / 2 + 4}
        textAnchor="middle"
        className={`mono ${def.deco ? 'fill-fg-dim' : 'fill-fg group-hover:fill-accent'} transition-colors`}
        style={{ fontSize: def.big ? '17px' : '14px', fontWeight: 500 }}
      >
        {label}
      </text>
      {role && (
        <text
          x={cx}
          y={def.y + def.h / 2 + 14}
          textAnchor="middle"
          className="mono fill-fg-mut"
          style={{ fontSize: '9.5px' }}
        >
          // {role}
        </text>
      )}
    </g>
  )
}

export default function SystemMap() {
  const metaById = Object.fromEntries(mapNodes.map((n) => [n.id, n]))

  return (
    <>
      {/* ---- desktop / tablet: the real diagram ---- */}
      <svg
        viewBox="0 0 1000 300"
        className="hidden w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
        aria-label="System architecture map: navigation"
      >
        <defs>
          <marker id="arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" className="fill-line-2" />
          </marker>
        </defs>

        {/* base edges */}
        {EDGES.map((d, i) => (
          <path
            key={`b${i}`}
            d={d}
            fill="none"
            className="stroke-line-2"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
        ))}
        {/* animated packet flow */}
        {EDGES.map((d, i) => (
          <path
            key={`f${i}`}
            d={d}
            fill="none"
            className="stroke-accent edge-flow"
            strokeWidth="1.4"
            style={{ animationDelay: `${i * -1.6}s`, opacity: 0.85 }}
          />
        ))}

        {Object.entries(NODES).map(([id, def]) => (
          <Node key={id} id={id} def={def} meta={metaById[id]} />
        ))}
      </svg>

      {/* ---- mobile: simplified vertical flow ---- */}
      <div className="sm:hidden flex flex-col items-stretch gap-0">
        {mapNodes.map((n, i) => (
          <div key={n.id} className="flex flex-col items-center">
            <button
              onClick={() => scrollTo(n.id)}
              className="panel w-full px-4 py-3 text-left active:border-accent"
            >
              <div className="mono text-fg text-sm">{n.label}</div>
              <div className="mono text-fg-mut text-[11px]">// {n.role}</div>
            </button>
            {i < mapNodes.length - 1 && (
              <div className="h-5 w-px bg-line-2 my-1 relative">
                <span className="absolute -bottom-1 -left-[3px] h-0 w-0 border-x-[3px] border-x-transparent border-t-[5px] border-t-line-2" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
