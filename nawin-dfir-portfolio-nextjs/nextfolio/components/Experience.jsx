'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeRight, FadeUp } from './Animate'

const JOBS = [
  {
    logo: '/images/nia.png', alt: 'NIA',
    badge: 'gov', badgeText: 'Government Agency',
    date: 'Sep 2025 — Present',
    title: 'Cyber Forensics & Network Security Analyst',
    company: 'National Investigation Agency (NIA) · Chennai, India',
    active: true,
    bullets: [
      'Conducted end-to-end digital forensic investigations on Windows endpoints — analyzing Event Logs, Registry hives, Prefetch files, LNK files, and Shellbags to reconstruct precise incident timelines for criminal investigations.',
      'Operated enterprise platforms FTK, EnCase, Magnet AXIOM, Cellebrite, and XAMN for disk imaging, mobile device forensics, and evidence acquisition while maintaining strict chain of custody protocols.',
      'Performed deep network traffic analysis and multi-source log correlation using Wireshark and security monitoring platforms to detect IOCs and produce actionable threat intelligence.',
      'Supported the full incident response lifecycle: threat containment, root cause analysis (RCA), forensic artifact preservation, and post-incident reporting for law enforcement submissions.',
      'Documented forensic investigation reports in compliance with evidentiary standards for submission to legal and judicial authorities.',
    ],
  },
  {
    logo: '/images/revute.jpg', alt: 'Revute AI',
    badge: 'intern', badgeText: 'Internship',
    date: 'Apr 2025 — Aug 2025',
    title: 'Cybersecurity Intern',
    company: 'Revute AI · Hyderabad, India',
    active: false,
    bullets: [
      'Built Web Raptor — a full-stack web reconnaissance platform integrating VirusTotal, IPinfo, WhoisXML, URLVoid, and OpenAI APIs for real-time vulnerability detection and AI-assisted threat intelligence generation.',
      'Engineered multi-API OSINT automation pipelines, reducing manual reconnaissance time by over 70% for penetration testing engagements.',
      'Performed web application security testing covering OWASP Top 10 vulnerabilities, API security assessments, and automated threat detection reporting for client projects.',
    ],
  },
  {
    logo: '/images/quantum.jpg', alt: 'Quantumcona',
    badge: 'intern', badgeText: 'Internship',
    date: 'Jun 2024 — Sep 2024',
    title: 'AI Security Intern',
    company: 'Quantumcona LLP · Bangalore, India',
    active: false,
    bullets: [
      'Implemented GCP and Azure cloud security controls — IAM configuration, privileged access management, VM provisioning, and threat detection setup in simulated attack environments.',
      'Developed expertise in cloud-native security monitoring, access control mechanisms, and multi-cloud incident response workflows across GCP and Azure ecosystems.',
      'Contributed to cloud security posture assessment documentation and security baseline configurations for enterprise-grade environments.',
    ],
  },
  {
    logo: '/images/neura.jpg', alt: 'Neura AI',
    badge: 'intern', badgeText: 'Internship',
    date: 'Aug 2023 — Sep 2023',
    title: 'IoT Security Intern',
    company: 'Neura AI · Tiruchengode',
    active: false,
    bullets: [
      'Built a Wi-Fi deauthentication attack tool and custom password cracker for authorized security testing using Raspberry Pi, ESP32/8266, and ATtiny microcontrollers.',
      'Conducted hardware exploitation and wireless attack simulation, building practical skills in embedded system security and RF protocol vulnerability analysis.',
      'Gained hands-on expertise in firmware analysis, hardware debugging, and IoT security assessment methodologies across multiple microcontroller platforms.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <FadeRight><div className="section-eyebrow">Track Record</div></FadeRight>
        <FadeRight delay={.08}>
          <div className="section-title">Field <em>Experience</em></div>
        </FadeRight>
        <div className="timeline">
          {JOBS.map((job, i) => (
            <FadeUp key={job.title} delay={i * .1}>
              <div className="tl-item">
                <div className={`tl-dot${job.active ? '' : ' off'}`} />
                <div className="tl-header">
                  <motion.div
                    className="co-logo"
                    whileHover={{ scale: 1.06, borderColor: 'var(--border3)' }}
                  >
                    <Image src={job.logo} alt={job.alt} width={56} height={56} style={{ objectFit:'contain' }}/>
                  </motion.div>
                  <div className="tl-meta-block">
                    <div className="tl-badges">
                      <span className={`badge ${job.badge}`}>{job.badgeText}</span>
                      <span className="tl-date">{job.date}</span>
                    </div>
                    <div className="tl-title">{job.title}</div>
                    <div className="tl-company">{job.company}</div>
                  </div>
                </div>
                <ul className="tl-bullets">
                  {job.bullets.map((b, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: bi * .06, duration: .5 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
