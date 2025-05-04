import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Shield, Lock, Bug, Database, Server, FileCode, Code } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import SkillsSection from "@/components/skills-section"
import ContactForm from "@/components/contact-form"
import LeadershipSection from "@/components/leadership-section"
import TeachingSection from "@/components/teaching-section"
import ParticleBackground from "@/components/particle-background"
import AchievementsTimeline from "@/components/achievements-timeline"
import CTFSection from "@/components/ctf-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />

      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Passionate engineer with hands-on experience in offensive/defensive security, AI-based threat detection,
              and vulnerability assessment. Skilled in Python, machine learning, and security frameworks to build
              intelligent, secure systems. Proficient in penetration testing, ISO/IEC 27001, and developing scalable
              apps with Python. Focused on automating security workflows and tackling emerging cyber threats through AI
              innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-emerald-600 hover:bg-emerald-700">Cyber Security</Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">AI & ML</Badge>
              <Badge className="bg-purple-600 hover:bg-purple-700">Python</Badge>
              <Badge className="bg-red-600 hover:bg-red-700">Penetration Testing</Badge>
              <Badge className="bg-yellow-600 hover:bg-yellow-700">Cloud Security</Badge>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <Link href="/resume">View Resume</Link>
              </Button>
              <Button asChild variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse"></div>
              <img
                src="/images/profile.png"
                alt="Nawin Prasath"
                className="rounded-full w-full h-full object-cover border-4 border-emerald-500 p-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Roles Section */}
      <section id="leadership" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-900/50 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Leadership & Roles
          </span>
        </h2>
        <LeadershipSection />
      </section>

      {/* Teaching & Education Outreach */}
      <section id="teaching" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Cyber Security Education
          </span>
        </h2>
        <TeachingSection />
      </section>

      {/* CTF Experience */}
      <section id="ctf" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-900/50 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            CTF Experience
          </span>
        </h2>
        <CTFSection />
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Experience & Education
          </span>
        </h2>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education & Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            <ExperienceCard
              title="Cyber Security Analyst"
              company="Revute AI"
              period="04/2025 – Present"
              location="Hyderabad"
              description={[
                "Developed and tested AI/ML models for anomaly detection, phishing URL identification, and malware classification using Python libraries such as scikit-learn and PyTorch.",
              ]}
            />

            <ExperienceCard
              title="Cyber Security Intern"
              company="Quantumcona LLP"
              period="07/2024 – 09/2024"
              location="Hyderabad"
              description={[
                "Conducted penetration testing and vulnerability assessments using Nessus, Burp Suite, and Nmap.",
                "Gained expertise in Google Cloud Platform (GCP), focusing on Virtual Machines (VMs) and cloud security.",
                "Performed security assessments on web applications and infrastructure to identify and mitigate risks.",
              ]}
            />

            <ExperienceCard
              title="IoT Intern"
              company="Neura AI"
              period="08/2023 – 09/2023"
              location="Tiruchengode"
              description={[
                "Developed Raspberry Pi-based security projects, integrating IoT devices with cloud platforms.",
                "Implemented IoT and cloud data API integrations to ensure secure data transmission.",
                "Worked on securing IoT sensors and cloud-stored data, implementing encryption and access control measures.",
              ]}
            />
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>B.E CSE Cyber Security</CardTitle>
                <CardDescription className="text-gray-400">
                  KSR Institute for Engineering and Technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">2022 – 2026 | Tiruchengode</p>
                <p className="text-gray-300">CGPA - 8.03</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1" />
                    <div>
                      <p className="font-medium">Certified in Cyber Security</p>
                      <p className="text-sm text-gray-400">ISC2</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Database className="h-5 w-5 text-emerald-500 mt-1" />
                    <div>
                      <p className="font-medium">MongoDB Associate Python Developer</p>
                      <p className="text-sm text-gray-400">MongoDB University</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Server className="h-5 w-5 text-emerald-500 mt-1" />
                    <div>
                      <p className="font-medium">ISO/IEC 27001 Information Security Associate™</p>
                      <p className="text-sm text-gray-400">SkillFront</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Server className="h-5 w-5 text-emerald-500 mt-1" />
                    <div>
                      <p className="font-medium">Plesk Obsidian Professional</p>
                      <p className="text-sm text-gray-400">Plesk University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg">Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-emerald-500 mt-1" />
                    <p>Python Developer, JetBrains Academy</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1" />
                    <p>Jr. Cyber Security Analyst-Career Path, Cisco</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1" />
                    <p>Mastering Network Intrusion Defense Advanced, EC-Council</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1" />
                    <p>Palo Alto Cyber Security V6, Palo Alto Academy</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Achievements Timeline */}
      <section id="achievements" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-900/50 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Achievements
          </span>
        </h2>
        <AchievementsTimeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Ransomware Simulator"
            description="Developed a simulated ransomware tool in a controlled environment to demonstrate real-world ransomware behaviors, including file encryption, ransom note deployment, and user lockout mechanisms."
            tags={["Python", "Malware Analysis", "Ethical Hacking"]}
            icon={<Lock className="h-10 w-10 text-emerald-500" />}
            link="https://github.com/Nawin-Cyber-10/Ransomware_Simulator"
          />

          <ProjectCard
            title="Cipher Decoder"
            description="Developed a Python-based encryption and decryption application supporting multiple classical cryptographic algorithms for educational and data obfuscation purposes."
            tags={["Python", "Cryptography", "Information Security"]}
            icon={<Code className="h-10 w-10 text-emerald-500" />}
            link="https://github.com/Nawin-Cyber-10/File_Encryptor"
          />

          <ProjectCard
            title="Steganography Analysis Tool"
            description="Developed a powerful steganography analysis tool inspired by Aperi'Solve, capable of detecting and extracting hidden data from image files using automated analysis pipelines."
            tags={["Python", "Steganography", "Forensics"]}
            icon={<Bug className="h-10 w-10 text-emerald-500" />}
            link="https://github.com/Nawin-Cyber-10/Adware_Simulation"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Skills & Expertise
          </span>
        </h2>
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-900/50 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Get In Touch
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-500" />
                  <a
                    href="mailto:heyitsmenawin010@gmail.com"
                    className="text-gray-300 hover:text-emerald-500 transition-colors"
                  >
                    heyitsmenawin010@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-300">81220 02205</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-500"
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
                  <span className="text-gray-300">Tiruchengode</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nawin-Cyber-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-colors hover:scale-110 transform duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nawin10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-colors hover:scale-110 transform duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:heyitsmenawin010@gmail.com"
                  className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition-colors hover:scale-110 transform duration-300"
                >
                  <Mail className="h-5 w-5" />
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
