'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = ['Skills','Experience','Projects','CTF','Certifications','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6, ease: [0,.55,.45,1] }}
    >
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="dim">~/</span>nawin<span className="dim">@</span>dfir
        </a>
        <ul className="nav-links">
          {links.map((l, i) => (
            <motion.li key={l}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .1 + i * .06, duration: .5 }}
            >
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="mailto:heyitsmenawin010@gmail.com"
          className="nav-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: .97 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}
