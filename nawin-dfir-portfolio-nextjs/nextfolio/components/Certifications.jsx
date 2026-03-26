'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeRight, StaggerGrid, StaggerItem } from './Animate'

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
    <circle cx="10" cy="10" r="9" stroke="#00e896" strokeWidth="1.4"/>
    <polyline points="6,10 9,13 14,7.5" stroke="#00e896" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const ISO_BADGE = () => (
  <svg viewBox="0 0 52 52" fill="none">
    <rect x="4" y="4" width="44" height="44" rx="2" stroke="#e0a020" strokeWidth="1.2"/>
    <text x="26" y="19" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#e0a020" fontWeight="bold">ISO/IEC</text>
    <text x="26" y="29" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fill="#e0a020">27001</text>
    <text x="26" y="37" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#e0a020" opacity=".7">2022</text>
  </svg>
)

const CERTS = [
  { img: '/images/oci.png',    issuer: 'Oracle',                 name: 'OCI Security Professional' },
  { img: '/images/zscaler.png',issuer: 'Zscaler',                name: 'Zero Trust Cyber Associate (ZTCA)' },
  { img: '/images/isc2.jpg',   issuer: 'ISC2',                   name: 'Certified in Cybersecurity (CC)' },
  { iso: true,                  issuer: 'Skillfront',             name: 'ISO/IEC 27001:2022 Information Security Associate' },
  { img: '/images/cisco.png',  issuer: 'Cisco Networking Academy',name: 'Ethical Hacker' },
  { img: '/images/cisco2.png', issuer: 'Cisco Networking Academy',name: 'Junior Cybersecurity Analyst' },
  { img: '/images/oci.png',    issuer: 'Oracle',                 name: 'OCI AI & Data Science Professional' },
  { img: '/images/alison.png', issuer: 'Alison',                 name: 'Diploma in GDPR' },
  { img: '/images/mongo.jpg',  issuer: 'MongoDB University',      name: 'Associate DB Developer — Python' },
  { img: '/images/cybrary.png',issuer: 'Cybrary',                name: 'Security Engineer Learning Path' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <FadeRight><div className="section-eyebrow">Credentials</div></FadeRight>
        <FadeRight delay={.08}><div className="section-title">Certifications &amp; <em>Badges</em></div></FadeRight>
        <StaggerGrid className="certs-grid" delay={0.05}>
          {CERTS.map((c) => (
            <StaggerItem key={c.name}>
              <motion.div className="cert-card" whileHover={{ x: 4 }}>
                <div className="cert-badge-img">
                  {c.iso
                    ? <ISO_BADGE />
                    : <Image src={c.img} alt={c.issuer} width={52} height={52} style={{ objectFit:'contain' }}/>
                  }
                </div>
                <div className="cert-info">
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-name">{c.name}</div>
                </div>
                <div className="cert-verified"><CheckIcon /></div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
