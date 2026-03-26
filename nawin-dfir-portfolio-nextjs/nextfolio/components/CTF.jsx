'use client'
import { motion } from 'framer-motion'
import { FadeRight, FadeUp, StaggerGrid, StaggerItem } from './Animate'

const PLATFORMS = [
  {
    logo: (
      <svg viewBox="0 0 42 42" fill="none">
        <rect width="42" height="42" rx="6" fill="#1a2333"/>
        <circle cx="21" cy="21" r="13" stroke="#88cc14" strokeWidth="1.4" fill="none"/>
        <circle cx="21" cy="21" r="6.5" stroke="#88cc14" strokeWidth="1" strokeDasharray="2.5 2" fill="rgba(136,204,20,.1)"/>
        <circle cx="21" cy="21" r="2.5" fill="#88cc14"/>
        <line x1="21" y1="8" x2="21" y2="13.5" stroke="#88cc14" strokeWidth="1.2"/>
        <line x1="21" y1="28.5" x2="21" y2="34" stroke="#88cc14" strokeWidth="1.2"/>
        <line x1="8" y1="21" x2="13.5" y2="21" stroke="#88cc14" strokeWidth="1.2"/>
        <line x1="28.5" y1="21" x2="34" y2="21" stroke="#88cc14" strokeWidth="1.2"/>
      </svg>
    ),
    name: 'TryHackMe', sub: 'Guided blue team learning',
    desc: 'Active practitioner completing rooms across DFIR, malware analysis, incident response, and threat intelligence paths — building structured blue team skills.',
    tags: [['DFIR','g'],['Malware Analysis','g'],['Forensics','g'],['Blue Team','g'],['IR','g']],
  },
  {
    logo: (
      <svg viewBox="0 0 42 42" fill="none">
        <rect width="42" height="42" rx="6" fill="#111927"/>
        <polygon points="21,5 34,12.5 34,29.5 21,37 8,29.5 8,12.5" fill="rgba(159,239,0,.06)" stroke="#9fef00" strokeWidth="1.4"/>
        <text x="21" y="24" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#9fef00" fontWeight="bold">HTB</text>
      </svg>
    ),
    name: 'HackTheBox', sub: 'Competitive hacking platform',
    desc: 'Solving machines and challenges focused on forensics, OSINT, reverse engineering, and web exploitation — sharpening red and blue team skills continuously.',
    tags: [['Pwn','r'],['Rev Eng','r'],['Web Exploitation','r'],['OSINT','r']],
  },
  {
    logo: (
      <svg viewBox="0 0 42 42" fill="none">
        <rect width="42" height="42" rx="6" fill="#0d1b2a"/>
        <text x="21" y="19" textAnchor="middle" fontFamily="sans-serif" fontSize="11.5" fill="#00c8f0" fontWeight="bold">pico</text>
        <text x="21" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="rgba(0,200,240,.5)" fontWeight="bold">CTF</text>
      </svg>
    ),
    name: 'PicoCTF', sub: 'Carnegie Mellon University',
    desc: 'Competed in CMU PicoCTF challenges covering cryptography, binary exploitation, forensics, and general skills — strong performance in forensics and web categories.',
    tags: [['Crypto','c'],['Forensics','c'],['Binary','c'],['Web','c']],
  },
  {
    logo: (
      <svg viewBox="0 0 42 42" fill="none">
        <rect width="42" height="42" rx="6" fill="#0c1422"/>
        <circle cx="21" cy="16" r="7" fill="none" stroke="#00c8f0" strokeWidth="1.3"/>
        <circle cx="21" cy="16" r="3" fill="rgba(0,200,240,.25)"/>
        <path d="M15 25 Q21 21 27 25 L28 36 L21 33 L14 36 Z" fill="rgba(0,200,240,.12)" stroke="#00c8f0" strokeWidth="1.2"/>
        <line x1="21" y1="9" x2="21" y2="6" stroke="#00c8f0" strokeWidth="1.2"/>
        <line x1="14.5" y1="11.5" x2="12.5" y2="9.5" stroke="#00c8f0" strokeWidth="1.2"/>
        <line x1="27.5" y1="11.5" x2="29.5" y2="9.5" stroke="#00c8f0" strokeWidth="1.2"/>
      </svg>
    ),
    name: 'Mr.Forensics', sub: 'CTF Team · DFIR Specialists',
    nameClass: 'ctf-team-name',
    desc: 'CTF team specializing in DFIR and forensics challenges — competing in national and international competitions. Blue-team focused with expertise in memory forensics, packet analysis, and log investigations.',
    tags: [['Team Lead','g'],['Memory Forensics','g'],['OSINT','g'],['Log Analysis','g']],
  },
]

const WINS = [
  { rank: '1st', name: 'TG Coders Challenge 2025', org: 'TechGig National Competition' },
  { rank: 'Top', name: 'KPMG CTF',                 org: 'KPMG India Cyber Challenge' },
  { rank: 'Top', name: 'PSYCH CTF',                org: 'Psychological OSINT Challenge' },
  { rank: 'Top', name: 'V1 CTF',                   org: 'V1 Security Competition' },
  { rank: '1st', name: 'Fintech Ideathon',          org: 'CubeAI Solutions' },
  { rank: 'Best', rankColor: 'var(--cyan)', name: 'Top CTF Categories', org: 'Forensics · Crypto · OSINT · Web' },
]

export default function CTF() {
  return (
    <section id="ctf" className="section section-alt">
      <div className="container">
        <FadeRight><div className="section-eyebrow">Capture The Flag</div></FadeRight>
        <FadeRight delay={.08}><div className="section-title">CTF <em>Hacking</em></div></FadeRight>

        <div className="ctf-platforms">
          {PLATFORMS.map((p, i) => (
            <FadeUp key={p.name} delay={i * .1}>
              <motion.div className="ctf-card" whileHover={{ borderColor: 'var(--border3)' }}>
                <div className="ctf-plat-row">
                  <div className="ctf-plat-logo">{p.logo}</div>
                  <div>
                    <div className={`ctf-plat-name${p.nameClass ? ' ' + p.nameClass : ''}`}>{p.name}</div>
                    <div className="ctf-plat-sub">{p.sub}</div>
                  </div>
                </div>
                <p className="ctf-card-desc">{p.desc}</p>
                <div className="tags">
                  {p.tags.map(([t,c]) => <span key={t} className={`tag ${c}`}>{t}</span>)}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <StaggerGrid className="ctf-wins-grid" delay={0.07}>
          {WINS.map((w) => (
            <StaggerItem key={w.name}>
              <motion.div className="ctf-win" whileHover={{ borderColor: 'rgba(255,190,60,.4)', y: -3 }}>
                <span className="ctf-win-rank" style={w.rankColor ? { color: w.rankColor } : {}}>
                  {w.rank}
                </span>
                <div className="ctf-win-name">{w.name}</div>
                <div className="ctf-win-org">{w.org}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
