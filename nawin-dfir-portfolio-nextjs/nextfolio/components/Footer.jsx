'use client'
import { motion } from 'framer-motion'

const LINKS = ['Skills','Experience','Projects','CTF','Certifications','Contact']

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
    >
      <div className="container footer-inner">
        <div className="footer-logo">
          nawin<em>@</em>dfir · Chennai
        </div>
        <div className="footer-links">
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>
        <div className="footer-copy">2026 Nawin Prasath K</div>
      </div>
    </motion.footer>
  )
}
