import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Shield, Search, Database, Terminal, Eye, Fingerprint } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"
import LeadershipSection from "@/components/leadership-section"
import TeachingSection from "@/components/teaching-section"
import AchievementsTimeline from "@/components/achievements-timeline"
import CTFSection from "@/components/ctf-section"
import ForensicsSection from "@/components/forensics-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground forensic-grid cyber-matrix">
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Digital Forensic Investigator</h2>
          <div className="investigation-badge inline-block">Professional Profile</div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="detective-card p-8 rounded-xl case-file-animation">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Fingerprint className="h-6 w-6 text-primary" />
                Investigative Profile
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Elite Digital Forensic Investigator and Penetration Testing Specialist with advanced AI engineering
                capabilities. Expert in uncovering digital evidence, analyzing complex cyber threats, and developing
                intelligent security solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Specialized in reverse engineering malicious code, reconstructing digital crime scenes, and leading
                tactical cyber operations. Proficient in advanced forensic analysis using industry-standard tools
                including Autopsy, FTK, and Sleuth Kit.
              </p>
            </div>

            <div className="detective-card p-6 rounded-xl case-file-animation">
              <h4 className="text-lg font-bold mb-4">Core Specializations</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Digital Forensics
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Penetration Testing
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  AI Engineering
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Malware Analysis
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Incident Response
                </Badge>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/resume">View Dossier</Link>
              </Button>
              <Button asChild className="detective-button">
                <Link href="#contact">Contact Investigator</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 security-alert"></div>
              <div className="detective-scan rounded-full">
                <img
                  src="/images/profile.png"
                  alt="Digital Forensic Investigator"
                  className="rounded-full w-80 h-80 object-cover border-4 border-primary p-2 enhanced-glow"
                />
              </div>
              <div className="absolute -top-4 -right-4 investigation-badge">Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Forensics Section */}
      <section id="forensics" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Forensic Analysis Capabilities</h2>
          <div className="investigation-badge inline-block">Evidence Processing Unit</div>
        </div>
        <ForensicsSection />
      </section>

      {/* Leadership & Roles Section */}
      <section id="leadership" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Leadership & Command Structure</h2>
          <div className="investigation-badge inline-block">Command Roles</div>
        </div>
        <LeadershipSection />
      </section>

      {/* Teaching & Education Outreach */}
      <section id="teaching" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Cybersecurity Education</h2>
          <div className="investigation-badge inline-block">Training Division</div>
        </div>
        <TeachingSection />
      </section>

      {/* CTF Experience */}
      <section id="ctf" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Tactical Operations</h2>
          <div className="investigation-badge inline-block">CTF Command</div>
        </div>
        <CTFSection />
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional History</h2>
          <div className="investigation-badge inline-block">Service Record</div>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            <ExperienceCard
              title="Cyber Security Analyst"
              company="Revute AI"
              period="04/2025 – Present"
              location="Hyderabad"
              description={[
                "Developed and deployed AI/ML models for advanced threat detection and behavioral analysis",
                "Engineered machine learning pipelines for automated phishing URL identification and malware classification",
                "Implemented real-time threat intelligence systems integrating multiple data sources",
              ]}
            />

            <ExperienceCard
              title="Cyber Security Intern"
              company="Quantumcona LLP"
              period="07/2024 – 09/2024"
              location="Hyderabad"
              description={[
                "Conducted comprehensive penetration testing using Burp Suite Professional and OWASP ZAP",
                "Performed digital forensic investigations on compromised systems and network infrastructure",
                "Specialized in Google Cloud Platform security assessments and vulnerability analysis",
              ]}
            />

            <ExperienceCard
              title="IoT Security Researcher"
              company="Neura AI"
              period="08/2023 – 09/2023"
              location="Tiruchengode"
              description={[
                "Designed secure IoT architectures with integrated threat detection capabilities",
                "Developed forensic analysis tools for IoT device investigation and evidence collection",
                "Implemented blockchain-based evidence integrity systems for forensic data preservation",
              ]}
            />
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="detective-card case-file-animation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  B.E CSE Cyber Security
                </CardTitle>
                <CardDescription>KSR Institute for Engineering and Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">2022 – 2026 | Tiruchengode</p>
                <p className="text-muted-foreground">CGPA - 8.03</p>
                <div className="investigation-badge mt-2">Active Enrollment</div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="detective-card case-file-animation">
                <CardHeader>
                  <CardTitle className="text-lg">Professional Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Certified in Cyber Security</p>
                      <p className="text-sm text-muted-foreground">ISC2 - Advanced Security Practitioner</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">MongoDB Associate Python Developer</p>
                      <p className="text-sm text-muted-foreground">MongoDB University</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Zscaler Zero Trust Associate (ZTCA)</p>
                      <p className="text-sm text-muted-foreground">Zscaler</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Terminal className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">ISO/IEC 27001 Information Security Associate™</p>
                      <p className="text-sm text-muted-foreground">SkillFront</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="detective-card case-file-animation">
                <CardHeader>
                  <CardTitle className="text-lg">Specialized Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Python Developer</p>
                      <p className="text-sm text-muted-foreground">JetBrains Academy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Jr. Cyber Security Analyst - Career Path</p>
                      <p className="text-sm text-muted-foreground">Professional Development Program</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Cisco Mastering Network Intrusion Defense</p>
                      <p className="text-sm text-muted-foreground">Cisco Systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Terminal className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">EC-Council Palo Alto Cyber Security V6</p>
                      <p className="text-sm text-muted-foreground">EC-Council</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Fingerprint className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Palo Alto Academy</p>
                      <p className="text-sm text-muted-foreground">Palo Alto Networks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Achievements Timeline */}
      <section id="achievements" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Achievements</h2>
          <div className="investigation-badge inline-block">Recognition Record</div>
        </div>
        <AchievementsTimeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="investigation-badge inline-block">Development Portfolio</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Exploit Dojo"
            description="A comprehensive cybersecurity training platform featuring over 200 hands-on challenges covering digital forensics, penetration testing, and AI-powered threat simulation. Built with modern web technologies and includes automated assessment systems."
            tags={["React", "Node.js", "AI/ML", "Cybersecurity", "Education Platform"]}
            icon={<Terminal className="h-10 w-10 text-primary" />}
            link="https://github.com/Nawin-Cyber-10/Exploit-Dojo"
          />

          <ProjectCard
            title="Web Raptor"
            description="An advanced reconnaissance and analysis tool designed for cybersecurity professionals. Features automated OSINT collection, network traffic analysis, and comprehensive reporting capabilities for security assessments."
            tags={["Python", "OSINT", "Network Analysis", "Security Tools", "Automation"]}
            icon={<Search className="h-10 w-10 text-primary" />}
            link="https://github.com/Nawin-Cyber-10/Web-Raptor"
          />

          <ProjectCard
            title="Forensic Malware Simulator"
            description="A controlled environment for malware analysis and digital forensics training. Provides safe simulation of malware behaviors, evidence generation, and hands-on learning experiences for cybersecurity education."
            tags={["Python", "Malware Analysis", "Digital Forensics", "Education", "Security Research"]}
            icon={<Eye className="h-10 w-10 text-primary" />}
            link="https://github.com/Nawin-Cyber-10/Ransomware_Simulator"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Arsenal</h2>
          <div className="investigation-badge inline-block">Tools & Expertise</div>
        </div>
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Contact</h2>
          <div className="investigation-badge inline-block">Secure Communication</div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="detective-card p-8 rounded-xl case-file-animation">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:heyitsmenawin010@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    heyitsmenawin010@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-muted-foreground">+91 81220 02205</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-muted-foreground">Tiruchengode, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <div className="detective-card p-8 rounded-xl case-file-animation">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Fingerprint className="h-5 w-5 text-primary" />
                Professional Networks
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nawin-Cyber-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors tool-icon"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nawin10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors tool-icon"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:heyitsmenawin010@gmail.com"
                  className="bg-secondary p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors tool-icon"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
