'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const WORDS = [
  'DFIR Analyst @ NIA',
  'Digital Forensics Expert',
  'SOC Analyst',
  'Incident Responder',
  'Threat Hunter',
  'CTF Player',
  'Security Engineer',
]

const TERM_LINES = [
  { t:'p', v:'whoami' },
  { t:'o', k:'name',     v:'Nawin Prasath K' },
  { t:'o', k:'role',     v:'DFIR Analyst @ NIA' },
  { t:'o', k:'base',     v:'Chennai, India' },
  { t:'s' },
  { t:'p', v:'cat current_tools.txt' },
  { t:'o', k:'dfir',    v:'FTK · EnCase · AXIOM · Cellebrite' },
  { t:'o', k:'soc',     v:'Splunk · Wireshark · Trellix' },
  { t:'o', k:'pentest', v:'BurpSuite · Nmap · ZAP · Caido' },
  { t:'o', k:'cloud',   v:'GCP · Azure · OCI' },
  { t:'s' },
  { t:'p', v:'cat ctf_record.txt' },
  { t:'o', k:'platforms', v:'THM · HTB · PicoCTF' },
  { t:'o', k:'competed',  v:'KPMG · PSYCH · V1 · TechGig' },
  { t:'s' },
  { t:'p', v:'./status --verbose' },
  { t:'ok', v:'Open to DFIR & SOC roles' },
  { t:'ok', v:'Chennai & Bangalore' },
]

function TypedText() {
  const [text, setText] = useState('')
  const [wi, setWi]     = useState(0)
  const [ci, setCi]     = useState(0)
  const [del, setDel]   = useState(false)

  useEffect(() => {
    const word = WORDS[wi]
    let timeout
    if (!del) {
      timeout = setTimeout(() => {
        setText(word.slice(0, ci + 1))
        if (ci + 1 === word.length) { setDel(true); return }
        setCi(c => c + 1)
      }, ci === word.length - 1 ? 2000 : 65)
    } else {
      timeout = setTimeout(() => {
        setText(word.slice(0, ci - 1))
        if (ci - 1 === 0) {
          setDel(false)
          setWi(w => (w + 1) % WORDS.length)
          setCi(0)
          return
        }
        setCi(c => c - 1)
      }, 35)
    }
    return () => clearTimeout(timeout)
  }, [text, wi, ci, del])

  return (
    <span className="hero-role">
      <span className="typed">{text}</span>
      <span className="cursor-blink" />
    </span>
  )
}

function Terminal() {
  const [lines, setLines] = useState([])
  const bodyRef = useRef(null)

  useEffect(() => {
    let i = 0
    function addLine() {
      if (i >= TERM_LINES.length) return
      const l = TERM_LINES[i++]
      setLines(prev => [...prev, l])
      setTimeout(addLine, l.t === 'p' ? 600 : l.t === 's' ? 80 : 200)
    }
    const t = setTimeout(addLine, 900)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  function renderLine(l, idx) {
    if (l.t === 'p') return (
      <div key={idx} className="t-line-prompt">
        <span className="t-prompt">$ </span>
        <span className="t-cmd">{l.v}</span>
      </div>
    )
    if (l.t === 'o') return (
      <div key={idx} className="t-line-out">
        <span className="t-key">{l.k}: </span>
        <span className="t-val">{l.v}</span>
      </div>
    )
    if (l.t === 'ok') return <div key={idx} className="t-ok">  ✓ {l.v}</div>
    if (l.t === 'warn') return <div key={idx} className="t-warn">  ! {l.v}</div>
    return <div key={idx}>&nbsp;</div>
  }

  return (
    <div className="terminal">
      <div className="t-titlebar">
        <div className="t-dot r" /><div className="t-dot y" /><div className="t-dot g" />
        <div className="t-title">analyst@nia — bash — 80×24</div>
      </div>
      <div className="t-body" ref={bodyRef}>
        {lines.map((l, i) => renderLine(l, i))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Glow blob */}
      <motion.div
        style={{
          position:'absolute', top:'-20%', right:'-10%',
          width:700, height:700, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(0,200,240,.06) 0%,transparent 70%)',
          pointerEvents:'none',
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .7, delay: .2 }}
            >
              DFIR · SOC · Forensics · Threat Intel · CTF
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .3 }}
            >
              Nawin <span className="accent">Prasath</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
            >
              <TypedText />
            </motion.div>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7, delay: .6 }}
            >
              Cyber Forensics Analyst at the{' '}
              <strong>National Investigation Agency</strong> — specializing in
              digital evidence acquisition, endpoint forensics, incident response,
              and threat hunting. Building tools that make attackers visible.
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: .75 }}
            >
              <motion.a
                href="#projects" className="btn-primary"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
              >
                View Case Files
              </motion.a>
              <motion.a
                href="#contact" className="btn-outline"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
              >
                Open a Line
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9, delay: .5 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
