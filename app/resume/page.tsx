import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-gray-900 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden purple-glow">
        {/* Header with navigation */}
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
              Nawin Prasath K
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
              <a href="mailto:heyitsmenawin010@gmail.com" className="flex items-center gap-1 hover:text-purple-400">
                <Mail className="h-4 w-4" />
                heyitsmenawin010@gmail.com
              </a>
              <a href="tel:8122002205" className="flex items-center gap-1 hover:text-purple-400">
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
                className="flex items-center gap-1 hover:text-purple-400"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Nawin-Cyber-10"
                target="_blank"
                className="flex items-center gap-1 hover:text-purple-400"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Profile</h2>
            <p className="text-gray-300">
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
            <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">
              Professional Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">Cyber Security Analyst, Revute AI</h3>
                <span className="text-sm text-gray-400">04/2025 – Present | Hyderabad</span>
              </div>
              <p className="font-medium mb-2">Key Responsibilities:</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>
                  Developed and tested AI/ML models for anomaly detection, phishing URL identification, and malware
                  classification using Python libraries such as scikit-learn and PyTorch.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">Cyber Security Intern, Quantumcona LLP</h3>
                <span className="text-sm text-gray-400">07/2024 – 09/2024 | Hyderabad</span>
              </div>
              <p className="font-medium mb-2">Key Responsibilities:</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
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
                <h3 className="font-bold">IoT Intern, Neura AI</h3>
                <span className="text-sm text-gray-400">08/2023 – 09/2023 | Tiruchengode</span>
              </div>
              <p className="font-medium mb-2">Key Responsibilities:</p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
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
              <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Skills</h2>
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
                  <span key={index} className="bg-gray-700 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Education</h2>
              <div className="mb-4">
                <h3 className="font-bold">B.E CSE Cyber Security</h3>
                <p className="text-gray-400">KSR Institute for Engineering and Technology</p>
                <p className="text-sm text-gray-300">2022 – 2026 | Tiruchengode</p>
                <p className="text-sm text-gray-300">CGPA - 8.03</p>
              </div>
            </section>
          </div>

          {/* Two-column layout for Courses and Awards/Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Courses */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Courses</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Python Developer, JetBrains Academy</li>
                <li>Jr. Cyber Security Analyst-Career Path, Cisco</li>
                <li>Mastering Network Intrusion Defense, EC-Council</li>
                <li>Palo Alto Cyber Security V6, Palo Alto Academy</li>
              </ul>
            </section>

            {/* Awards and Certificates */}
            <div>
              <section className="mb-4">
                <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Awards</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>Cyber Security Awareness, Skin Forum</li>
                  <li>Fintech Ideathon Winner, CubeAI Solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Certificates</h2>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
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
            <h2 className="text-xl font-bold mb-3 text-purple-500 border-b border-gray-700 pb-1">Projects</h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">Exploit Dojo</h3>
                <span className="text-sm text-purple-400">AI-Enhanced Cybersecurity Learning & Challenge Platform</span>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
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
                <h3 className="font-bold">Ransomware Simulator</h3>
                <span className="text-sm text-purple-400">
                  Cybersecurity Project | Python | Malware Analysis | Ethical Hacking
                </span>
              </div>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
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
