import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'

const LINES = [
  '[ ok ] mounting /dev/portfolio',
  '[ ok ] loading identity service ...',
  '[ ok ] starting compute cluster (projects)',
  '[ ok ] reading config store (skills)',
  '[ ok ] opening egress gateway (contact)',
  '[ ok ] all systems nominal',
]

export default function Boot() {
  const [done, setDone] = useState(() =>
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('booted') === '1'
  )
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (done) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish()
      return
    }
    const stepId = setInterval(() => {
      setShown((n) => Math.min(n + 1, LINES.length))
    }, 190)
    const endId = setTimeout(finish, LINES.length * 190 + 520)
    const skip = (e) => {
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== 'Escape' && e.key !== ' ') return
      finish()
    }
    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    return () => {
      clearInterval(stepId)
      clearTimeout(endId)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function finish() {
    try { sessionStorage.setItem('booted', '1') } catch {}
    setDone(true)
  }

  if (done) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg">
      <div className="wrap max-w-2xl">
        <div className="mono text-fg-dim text-sm leading-7">
          <div className="text-fg mb-3">
            {profile.handle}@portfolio <span className="text-fg-mut">:: boot sequence</span>
          </div>
          {LINES.slice(0, shown).map((l, i) => (
            <div key={i}>
              <span className="text-accent">{l.slice(0, 6)}</span>
              {l.slice(6)}
            </div>
          ))}
          <div className="text-fg-mut mt-3 text-xs">
            press any key to skip <span className="caret text-accent">_</span>
          </div>
        </div>
      </div>
    </div>
  )
}
