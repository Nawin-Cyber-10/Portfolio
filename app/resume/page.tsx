import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Github, Linkedin, Mail, MapPin, Phone, Shield, Terminal } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-10 px-4 forensic-grid cyber-matrix">
      <div className="max-w-4xl mx-auto digital-evidence case-file-animation rounded-xl overflow-hidden">
        {/* Header with navigation */}
        <div className="p-6 flex justify-between items-center border-b border-border bg-secondary detective-terminal">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Portfolio
            </Button>
          </Link>
          <Button variant="default" size="sm" className="enhanced-button gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold gradient-text">NAWIN PRASATH K</h1>
              <Terminal className="h-8 w-8 text-primary" />
            </div>
            <div className="investigation-badge mb-4">Digital Forensic Investigator Dossier</div>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm">
              <a href="mailto:heyitsmenawin010@gmail.com" className="flex items-center gap-1 hover:text-primary">
                <Mail className="h-4 w-4" />
                heyitsmenawin010@gmail.com
              </a>
              <a href="tel:8122002205" className="flex items-center gap-1 hover:text-primary">
                <Phone className="h-4 w-4" />
                +91 81220 02205
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Tiruchengode, Tamil Nadu
              </span>
              <a
                href="https://www.linkedin.com/in/nawin10"
                target="_blank"
                className="flex items-center gap-1 hover:text-primary"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Nawin-Cyber-10"
                target="_blank"
                className="flex items-center gap-1 hover:text-primary"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Investigator Profile</h2>
            <div className="digital-evidence p-6 rounded-lg">
              <p className="text-muted-foreground leading-relaxed">
                Elite Digital Forensic Investigator and Penetration Testing Specialist with advanced AI engineering
                capabilities. Expert in uncovering digital evidence, analyzing complex cyber threats, and developing
                intelligent security solutions. Specialized in reverse engineering malicious code, reconstructing
                digital crime scenes, and leading tactical cyber operations. Proficient in advanced forensic analysis
                using industry-standard tools including Autopsy, FTK, and Sleuth Kit.
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Operational History</h2>

            <div className="space-y-6">
              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Cyber Security Analyst | Revute AI</h3>
                  <span className="text-sm text-muted-foreground">04/2025 – Present | Hyderabad</span>
                </div>
                <div className="investigation-badge mb-2">Active Mission</div>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li>▶ Developed and deployed AI/ML models for advanced threat detection and behavioral analysis</li>
                  <li>▶ Engineered automated phishing detection systems using machine learning algorithms</li>
                  <li>▶ Implemented real-time malware classification systems with 95% accuracy rate</li>
                </ul>
              </div>

              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Cyber Security Intern | Quantumcona LLP</h3>
                  <span className="text-sm text-muted-foreground">07/2024 – 09/2024 | Hyderabad</span>
                </div>
                <div className="investigation-badge mb-2">Completed Mission</div>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li>▶ Conducted advanced penetration testing using Burp Suite, OWASP ZAP, and custom tools</li>
                  <li>▶ Performed digital forensic investigations on compromised systems and networks</li>
                  <li>▶ Specialized in GCP security assessments and cloud infrastructure analysis</li>
                </ul>
              </div>

              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">IoT Security Researcher | Neura AI</h3>
                  <span className="text-sm text-muted-foreground">08/2023 – 09/2023 | Tiruchengode</span>
                </div>
                <div className="investigation-badge mb-2">Research Operation</div>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li>▶ Developed secure IoT forensic analysis frameworks for evidence collection</li>
                  <li>▶ Implemented blockchain-based evidence integrity systems</li>
                  <li>▶ Created advanced threat detection mechanisms for IoT networks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills and Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <section>
              <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Technical Arsenal</h2>
              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Digital Forensics",
                    "Penetration Testing",
                    "Malware Analysis",
                    "AI Threat Detection",
                    "Incident Response",
                    "Network Security",
                    "Cryptanalysis",
                  ].map((skill, index) => (
                    <span key={index} className="evidence-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Academic Credentials</h2>
              <div className="digital-evidence p-6 rounded-lg">
                <h3 className="font-bold">B.E CSE Cyber Security</h3>
                <p className="text-muted-foreground">KSR Institute for Engineering and Technology</p>
                <p className="text-sm text-muted-foreground">2022 – 2026 | Tiruchengode</p>
                <p className="text-sm text-muted-foreground">CGPA - 8.03</p>
                <div className="investigation-badge mt-2">Active Enrollment</div>
              </div>
            </section>
          </div>

          {/* Certifications and Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <section>
              <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Security Clearances</h2>
              <div className="digital-evidence p-6 rounded-lg">
                <ul className="space-y-2 text-muted-foreground">
                  <li>▶ Certified in Cyber Security (ISC2)</li>
                  <li>▶ MongoDB Associate Python Developer</li>
                  <li>▶ Zscaler Zero Trust Associate (ZTCA)</li>
                  <li>▶ ISO/IEC 27001 Information Security Associate™</li>
                  <li>▶ Advanced Digital Forensics Certification</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Commendations</h2>
              <div className="digital-evidence p-6 rounded-lg">
                <ul className="space-y-2 text-muted-foreground">
                  <li>▶ Cyber Security Awareness Excellence (SKIN FORUM)</li>
                  <li>▶ Fintech Security Innovation Champion (CubeAI)</li>
                  <li>▶ Elite Cyber Defense Recognition (National Cyber League)</li>
                  <li>▶ Top 10 National Collegiate CTF Championship</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Specialized Training */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Specialized Training</h2>
            <div className="digital-evidence p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>▶ Python Developer - JetBrains Academy</li>
                  <li>▶ Jr. Cyber Security Analyst - Career Path</li>
                  <li>▶ Cisco Mastering Network Intrusion Defense</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>▶ EC-Council Palo Alto Cyber Security V6</li>
                  <li>▶ Palo Alto Academy - Network Security</li>
                  <li>▶ Advanced Digital Forensics Certification</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold mb-3 gradient-text border-b border-border pb-1">Active Investigations</h2>

            <div className="space-y-4">
              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Exploit Dojo</h3>
                  <span className="text-sm text-muted-foreground">AI-Enhanced Cybersecurity Training Platform</span>
                </div>
                <div className="investigation-badge mb-2">Classified Project</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    ▶ Built comprehensive CTF platform with 200+ forensic challenges and AI-powered threat simulation
                  </li>
                  <li>
                    ▶ Implemented advanced digital evidence analysis modules and incident response training scenarios
                  </li>
                </ul>
              </div>

              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Web Raptor</h3>
                  <span className="text-sm text-muted-foreground">
                    Advanced Reconnaissance & Forensic Analysis Tool
                  </span>
                </div>
                <div className="investigation-badge mb-2">Tactical Tool</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>▶ Developed comprehensive digital investigation suite with automated evidence collection</li>
                  <li>
                    ▶ Integrated advanced OSINT capabilities and network traffic analysis for cybercrime investigations
                  </li>
                </ul>
              </div>

              <div className="digital-evidence p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Forensic Malware Simulator</h3>
                  <span className="text-sm text-muted-foreground">Controlled Malware Analysis Environment</span>
                </div>
                <div className="investigation-badge mb-2">Research Project</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    ▶ Created safe malware analysis environment for digital forensic training and evidence simulation
                  </li>
                  <li>▶ Developed advanced incident response scenarios for cybersecurity education</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
