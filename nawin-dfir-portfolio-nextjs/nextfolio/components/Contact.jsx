'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeRight, FadeLeft } from './Animate'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const n = fd.get('name'), em = fd.get('email'), m = fd.get('msg')
    if (!n || !em || !m) return
    window.open(`mailto:heyitsmenawin010@gmail.com?subject=Opportunity from ${encodeURIComponent(n)}&body=${encodeURIComponent(m + '\n\nFrom: ' + n + ' | ' + em)}`)
    setSent(true)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <FadeRight><div className="section-eyebrow">Get In Touch</div></FadeRight>
        <div className="contact-grid">
          <FadeLeft>
            <div className="contact-left">
              <h2 className="contact-heading">Let&apos;s Work<br/><em>Together.</em></h2>
              <p className="contact-sub">
                Open to DFIR Analyst and SOC Analyst roles in Chennai and Bangalore.
                Available for freelance forensics engagements, CTF collaborations,
                and security tool development.
              </p>

              {[
                { icon: (
                    <svg viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1" stroke="#00c8f0" strokeWidth="1.3"/><polyline points="1,4 8,9 15,4" stroke="#00c8f0" strokeWidth="1.3"/></svg>
                  ), label: 'Email', value: 'heyitsmenawin010@gmail.com' },
                { icon: (
                    <svg viewBox="0 0 16 16" fill="none"><path d="M2 2 C5 1 7 5 6 7 L5 8 C5 8 7 11 9 11 L10 10 C12 9 15 11 14 14 C12 16 4 14 2 2Z" stroke="#00c8f0" strokeWidth="1.3"/></svg>
                  ), label: 'Phone', value: '+91 81220 02205' },
                { icon: (
                    <svg viewBox="0 0 16 16" fill="none"><path d="M8 1 C5.2 1 3 3.2 3 6 C3 10 8 15 8 15 C8 15 13 10 13 6 C13 3.2 10.8 1 8 1Z" stroke="#00c8f0" strokeWidth="1.3"/><circle cx="8" cy="6" r="2" stroke="#00c8f0" strokeWidth="1.2"/></svg>
                  ), label: 'Location', value: 'Chennai, Tamil Nadu, India' },
              ].map(item => (
                <div className="contact-item" key={item.label}>
                  <motion.div className="contact-icon" whileHover={{ scale: 1.1 }}>
                    {item.icon}
                  </motion.div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              ))}

              <div className="contact-social">
                {[
                  { href: 'https://www.linkedin.com/in/mrforensics', label: 'LinkedIn' },
                  { href: 'https://github.com/Nawin-Cyber-10', label: 'GitHub' },
                ].map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: .97 }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={.1}>
            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <motion.input whileFocus={{ scale: 1.01 }} type="text" id="name" name="name" placeholder="Jane Smith" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <motion.input whileFocus={{ scale: 1.01 }} type="email" id="email" name="email" placeholder="jane@company.com" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="msg">Message</label>
                  <motion.textarea whileFocus={{ scale: 1.01 }} id="msg" name="msg" rows={6} placeholder="Tell me about the role or opportunity..." required/>
                </div>
                <motion.button
                  type="submit"
                  className="btn-submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: .98 }}
                >
                  Send Message
                </motion.button>
                {sent && <div className="form-success">Message opened in your email client.</div>}
              </form>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  )
}
