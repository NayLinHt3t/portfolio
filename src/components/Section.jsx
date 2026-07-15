// A titled "system panel" section. `id` is used as the scroll anchor and
// shown as a path in the header, e.g.  /projects
export default function Section({ id, index, title, path, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-10 md:py-14">
      <div className="wrap">
        <div className="flex items-baseline gap-3 mb-5">
          <span className="kicker">{index}</span>
          <span className="mono text-fg-mut text-xs">·</span>
          <h2 className="mono text-fg text-lg tracking-tight">{title}</h2>
          <span className="mono text-fg-mut text-xs ml-auto hidden sm:inline">
            {path}
          </span>
        </div>
        {children}
      </div>
    </section>
  )
}
