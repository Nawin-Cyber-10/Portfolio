import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
        {/* Header with navigation */}
        <div className="p-6 flex justify-between items-center border-b border-slate-200 bg-slate-50">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button variant="default" size="sm" className="btn-professional gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Nawin Prasath K
            </h1>
            <div className="flex flex-wrap gap-4 text-slate-600 text-sm">
              <a href="mailto:heyitsmenawin010@gmail.com" className="flex items-center gap-1 hover:text-blue-600">
                <Mail className="h-4 w-4" />
                heyitsmenawin010@gmail.com
              </a>
              <a href="tel:8122002205" className="flex items-center gap-1 hover:text-blue-600">
                <Phone className="h-4 w-4" />
                81220 02205
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Tiruchengode
              </span>
              <a
                href="https://www.linkedin.com/in/nawin10"
                target="_blank"
                className="flex items-center gap-1 hover:text-blue-600"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Nawin-Cyber-10"
                target="_blank"
                className="flex items-center gap-1 hover:text-blue-600"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Profile</h2>
            <p className="text-slate-700 leading-relaxed">
              Innovative AI Engineer with a strong foundation in cybersecurity and deep expertise in prompt engineering,
              machine learning, and intelligent web application development. Skilled in leveraging modern AI tools and
              LLMs to build scalable, secure, and automated systems. Adept at integrating AI-driven solutions into web
              platforms, optimizing performance, and enhancing threat detection capabilities. Experienced in Python and
              full-stack development. Passionate about transforming cybersecurity with AI innovation and crafting
              intelligent, responsive applications that solve real-world challenges.
            </p>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Cyber Security Analyst, Revute AI</h3>
                <span className="text-sm text-slate-600">04/2025 – Present | Hyderabad</span>
              </div>
              <p className="font-medium mb-2 text-slate-700">Key Responsibilities:</p>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  Developed and tested AI/ML models for anomaly detection, phishing URL identification, and malware
                  classification using Python libraries such as scikit-learn and PyTorch.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Cyber Security Intern, Quantumcona LLP</h3>
                <span className="text-sm text-slate-600">07/2024 – 09/2024 | Hyderabad</span>
              </div>
              <p className="font-medium mb-2 text-slate-700">Key Responsibilities:</p>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>Conducted penetration testing and vulnerability assessments using Nessus, Burp Suite, and Nmap.</li>
                <li>
                  Gained expertise in Google Cloud Platform (GCP), focusing on Virtual Machines (VMs) and cloud
                  security.
                </li>
                <li>
                  Performed security assessments on web applications and infrastructure to identify and mitigate risks.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">IoT Intern, Neura AI</h3>
                <span className="text-sm text-slate-600">08/2023 – 09/2023 | Tiruchengode</span>
              </div>
              <p className="font-medium mb-2 text-slate-700">Key Responsibilities:</p>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>Developed Raspberry Pi-based security projects, integrating IoT devices with cloud platforms.</li>
                <li>Implemented IoT and cloud data API integrations to ensure secure data transmission.</li>
                <li>
                  Worked on securing IoT sensors and cloud-stored data, implementing encryption and access control
                  measures.
                </li>
              </ul>
            </div>
          </section>

          {/* Two-column layout for Skills and Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Prompting",
                  "AI Web Development",
                  "Pentesting",
                  "Python Development",
                  "MongoDB",
                  "Networking",
                  "Firewalls",
                ].map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Education</h2>
              <div className="mb-4">
                <h3 className="font-bold text-slate-800">B.E CSE Cyber Security</h3>
                <p className="text-slate-600">KSR Institute for Engineering and Technology</p>
                <p className="text-sm text-slate-700">2022 – 2026 | Tiruchengode</p>
                <p className="text-sm text-slate-700">CGPA - 8.03</p>
              </div>
            </section>
          </div>

          {/* Two-column layout for Courses and Awards/Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Courses */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Courses</h2>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>Python Developer, JetBrains Academy</li>
                <li>Jr. Cyber Security Analyst-Career Path, Cisco</li>
                <li>Mastering Network Intrusion Defense, EC-Council</li>
                <li>Palo Alto Cyber Security V6, Palo Alto Academy</li>
              </ul>
            </section>

            {/* Awards and Certificates */}
            <div>
              <section className="mb-4">
                <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Awards</h2>
                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                  <li>Cyber Security Awareness, Skin Forum</li>
                  <li>Fintech Ideathon Winner, CubeAI Solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Certificates</h2>
                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                  <li>Certified in Cyber Security, ISC2</li>
                  <li>MongoDB Associate Python Developer, MongoDB University</li>
                  <li>Zscaler Zero Trust Associate (ZTCA), Zscaler</li>
                  <li>ISO/IEC 27001 Information Security Associate™, SkillFront</li>
                  <li>Plesk Obsidian Professional, Plesk University</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold mb-3 text-blue-600 border-b border-slate-200 pb-1">Projects</h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Exploit Dojo</h3>
                <span className="text-sm text-blue-600">AI-Enhanced Cybersecurity Learning & Challenge Platform</span>
              </div>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  Built "Exploit Dojo", a full-stack CTF platform with 200+ challenges (Web, Crypto, Forensics, Pwn) and
                  AI-assisted hints, dynamic scoring, and user progress tracking.
                </li>
                <li>
                  Designed a responsive UI with animated learning paths, secure user authentication, and an admin panel
                  for course and challenge management.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Web Raptor</h3>
                <span className="text-sm text-blue-600">
                  Reconnaissance Tool | Python | Security Automation | OSINT
                </span>
              </div>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  Developed Web Raptor, a comprehensive reconnaissance tool for cybersecurity professionals featuring
                  automated subdomain enumeration, port scanning, and vulnerability detection.
                </li>
                <li>
                  Implemented detailed reporting capabilities and workflow automation for penetration testing
                  engagements.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">Ransomware Simulator</h3>
                <span className="text-sm text-blue-600">
                  Cybersecurity Project | Python | Malware Analysis | Ethical Hacking
                </span>
              </div>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  Developed a simulated ransomware tool in a controlled environment to demonstrate real-world ransomware
                  behaviors, including file encryption, ransom note deployment, and user lockout mechanisms.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
