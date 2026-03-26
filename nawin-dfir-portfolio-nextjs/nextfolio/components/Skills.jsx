'use client'
import { motion } from 'framer-motion'
import { FadeRight, StaggerGrid, StaggerItem } from './Animate'

const SKILLS = [
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <rect x="14" y="2" width="8" height="14" rx="1" stroke="#00c8f0" strokeWidth="1.4"/>
        <rect x="16" y="4" width="4" height="10" fill="rgba(0,200,240,.15)"/>
        <line x1="18" y1="16" x2="18" y2="23" stroke="#00c8f0" strokeWidth="1.4"/>
        <path d="M10 23 Q18 19 26 23" stroke="#00c8f0" strokeWidth="1.4" fill="none"/>
        <line x1="8" y1="27" x2="28" y2="27" stroke="#00c8f0" strokeWidth="1.4"/>
        <circle cx="18" cy="8" r="2" fill="rgba(0,200,240,.3)"/>
      </svg>
    ),
    title: 'Digital Forensics',
    desc: 'End-to-end forensic investigations — disk, memory, mobile, and network artifacts with strict chain of custody protocols.',
    tags: ['FTK','EnCase','Magnet AXIOM','Cellebrite','XAMN','Autopsy'],
    tagClass: 'c',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <polygon points="18,3 33,30 3,30" stroke="#f03060" strokeWidth="1.4" fill="rgba(240,48,96,.08)"/>
        <line x1="18" y1="13" x2="18" y2="22" stroke="#f03060" strokeWidth="1.8"/>
        <circle cx="18" cy="26" r="1.5" fill="#f03060"/>
      </svg>
    ),
    title: 'Incident Response',
    desc: 'Threat detection, containment, root cause analysis, and post-incident reporting aligned to MITRE ATT&CK framework.',
    tags: ['MITRE ATT&CK','IOC Analysis','Threat Hunting','RCA'],
    tagClass: 'r',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="18" rx="1" stroke="#00e896" strokeWidth="1.4" fill="rgba(0,232,150,.05)"/>
        <polyline points="6,22 10,16 14,19 18,12 22,17 26,14 30,18" stroke="#00e896" strokeWidth="1.4" fill="none"/>
        <line x1="4" y1="30" x2="32" y2="30" stroke="#00e896" strokeWidth="1.4"/>
        <line x1="18" y1="26" x2="18" y2="30" stroke="#00e896" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'SOC Operations',
    desc: 'Log correlation, SIEM alert triage, and real-time network traffic analysis to detect and respond to security events.',
    tags: ['Wireshark','Splunk','MS Sentinel','Elastic','Trellix'],
    tagClass: 'g',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" stroke="#f03060" strokeWidth="1.4" fill="rgba(240,48,96,.05)"/>
        <circle cx="18" cy="18" r="7" stroke="#f03060" strokeWidth="1" strokeDasharray="3 2"/>
        <circle cx="18" cy="18" r="2.5" fill="#f03060"/>
        <line x1="18" y1="5" x2="18" y2="11" stroke="#f03060" strokeWidth="1.4"/>
        <line x1="18" y1="25" x2="18" y2="31" stroke="#f03060" strokeWidth="1.4"/>
        <line x1="5" y1="18" x2="11" y2="18" stroke="#f03060" strokeWidth="1.4"/>
        <line x1="25" y1="18" x2="31" y2="18" stroke="#f03060" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'Penetration Testing',
    desc: 'Web app security, OSINT automation, API testing, and vulnerability assessments using OWASP Top 10 methodology.',
    tags: ['Burp Suite','Nmap','OWASP ZAP','Nikto','Caido'],
    tagClass: 'r',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <path d="M26 24H11a7 7 0 1 1 2.1-13.7A8 8 0 1 1 26 24z" stroke="#ffbe3c" strokeWidth="1.4" fill="rgba(255,190,60,.07)"/>
        <line x1="14" y1="24" x2="14" y2="30" stroke="#ffbe3c" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="18" y1="24" x2="18" y2="32" stroke="#ffbe3c" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="22" y1="24" x2="22" y2="30" stroke="#ffbe3c" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
    title: 'Cloud Security',
    desc: 'Cloud security monitoring, IAM configuration, VM security, and threat detection across GCP, Azure, and OCI environments.',
    tags: ['GCP','Azure','OCI','IAM','Zero Trust'],
    tagClass: 'y',
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" fill="none">
        <rect x="3" y="6" width="30" height="24" rx="2" stroke="#00c8f0" strokeWidth="1.4" fill="rgba(0,200,240,.05)"/>
        <polyline points="10,14 6,18 10,22" stroke="#00c8f0" strokeWidth="1.4" fill="none"/>
        <polyline points="26,14 30,18 26,22" stroke="#00c8f0" strokeWidth="1.4" fill="none"/>
        <line x1="15" y1="24" x2="21" y2="12" stroke="#00c8f0" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'Security Engineering',
    desc: 'Python-powered security tooling, OSINT automation, Palo Alto 415 firewall management, and full-stack security platforms.',
    tags: ['Python','Linux','Palo Alto 415','PAN-OS','IDS/IPS'],
    tagClass: 'c',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeRight><div className="section-eyebrow">Arsenal</div></FadeRight>
        <FadeRight delay={.08}>
          <div className="section-title">Technical <em>Capabilities</em></div>
        </FadeRight>
        <StaggerGrid className="skills-grid">
          {SKILLS.map((sk) => (
            <StaggerItem key={sk.title}>
              <motion.div
                className="skill-card"
                whileHover={{ y: -4, transition: { duration: .25 } }}
              >
                <svg className="sk-icon" viewBox="0 0 36 36" fill="none">
                  {sk.icon.props.children}
                </svg>
                <h3>{sk.title}</h3>
                <p>{sk.desc}</p>
                <div className="tags">
                  {sk.tags.map(t => (
                    <span key={t} className={`tag ${sk.tagClass}`}>{t}</span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
