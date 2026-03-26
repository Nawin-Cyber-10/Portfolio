'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeRight, StaggerGrid, StaggerItem } from './Animate'

const PROJECTS = [
  {
    id: 'CASE #001 · OSINT',
    status: 'open',
    img: '/images/raptor.webp',
    title: 'Web Raptor',
    sub: 'Full-Stack OSINT & Recon Platform',
    desc: 'Comprehensive web reconnaissance platform integrating 5+ security APIs (VirusTotal, IPinfo, WhoisXML, URLVoid, ChatGPT) for automated domain analysis, real-time vulnerability detection, and AI-assisted threat intelligence. Reduces recon time by 70%+.',
    tags: [['Python','c'],['VirusTotal API','c'],['OSINT','c'],['ChatGPT API','c'],['Full-Stack','g']],
    links: [
      { href: 'https://webraptor.vercel.app/', label: 'Live Demo', cls: 'demo' },
      { href: 'https://github.com/Nawin-Cyber-10', label: 'GitHub', cls: '' },
    ],
  },
  {
    id: 'CASE #002 · MALWARE',
    status: 'open',
    img: '/images/ransom.png',
    title: 'Ransomware Simulator',
    sub: 'Python-Based Malware Analysis Tool',
    desc: 'Functional Python ransomware simulator for controlled malware analysis education — demonstrating file encryption, directory traversal, persistence mechanisms, and C2 communication patterns to improve analyst preparedness.',
    tags: [['Python','r'],['Malware Analysis','r'],['Encryption','r'],['C2','r']],
    links: [
      { href: 'https://github.com/Nawin-Cyber-10/Ransomware_Simulator', label: 'GitHub', cls: '' },
    ],
  },
  {
    id: 'CASE #003 · MALWARE',
    status: 'open',
    img: '/images/adware.webp',
    title: 'Adware Simulator',
    sub: 'Malware Behavior Analysis Platform',
    desc: 'Controlled adware simulation demonstrating infection vectors, persistence mechanisms (registry autoruns, scheduled tasks), and remediation techniques for hands-on malware behavior analysis training without real-world risk.',
    tags: [['Python','y'],['Persistence','y'],['Registry','y'],['Defense','y']],
    links: [
      { href: 'https://adware.vercel.app/', label: 'Live Demo', cls: 'demo' },
      { href: 'https://github.com/Nawin-Cyber-10', label: 'GitHub', cls: '' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeRight><div className="section-eyebrow">Case Files</div></FadeRight>
        <FadeRight delay={.08}>
          <div className="section-title">Security <em>Projects</em></div>
        </FadeRight>
        <StaggerGrid className="projects-grid">
          {PROJECTS.map(p => (
            <StaggerItem key={p.title}>
              <motion.div className="case-file" whileHover={{ y: -6 }}>
                <div className="cf-header">
                  <span className="cf-id">{p.id}</span>
                  <span className={`cf-status ${p.status}`}>Active</span>
                </div>
                <div className="cf-img">
                  <Image src={p.img} alt={p.title} width={480} height={148} style={{ objectFit:'cover', width:'100%', height:'100%' }}/>
                </div>
                <div className="cf-body">
                  <div className="cf-title">{p.title}</div>
                  <div className="cf-subtitle">{p.sub}</div>
                  <p className="cf-desc">{p.desc}</p>
                  <div className="tags">
                    {p.tags.map(([t, c]) => <span key={t} className={`tag ${c}`}>{t}</span>)}
                  </div>
                </div>
                <div className="cf-footer">
                  {p.links.map(l => (
                    <motion.a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cf-link ${l.cls}`}
                      whileHover={{ y: -2 }}
                    >
                      {l.label}
                    </motion.a>
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
