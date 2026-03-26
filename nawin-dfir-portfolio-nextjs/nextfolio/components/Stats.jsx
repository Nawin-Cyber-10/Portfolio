'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target }) {
  const [val, setVal] = useState(0)
  const ref  = useRef(null)
  const seen = useInView(ref, { once: true })

  useEffect(() => {
    if (!seen) return
    const dur = 1600
    const start = performance.now()
    function step(now) {
      const p = Math.min((now - start) / dur, 1)
      const ease = p < .5 ? 4*p*p*p : (p-1)*(2*p-2)*(2*p-2)+1
      setVal(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
      else setVal(target)
    }
    requestAnimationFrame(step)
  }, [seen, target])

  return <em ref={ref}>{val}</em>
}

const STATS = [
  { target: 4,  suffix: '+', label: 'Years Learning' },
  { target: 10, suffix: '+', label: 'Certifications' },
  { target: 3,  suffix: '',  label: 'Awards Won' },
  { target: 5,  suffix: '+', label: 'Forensics Tools' },
]

export default function Stats() {
  return (
    <div className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08, duration: .6 }}
              whileHover={{ scale: 1.04 }}
            >
              <span className="stat-num">
                <Counter target={s.target} />{s.suffix}
              </span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
