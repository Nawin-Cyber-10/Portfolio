import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Shield, Lock, Database, Server, FileCode, Brain, Search } from "lucide-react"
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900 relative overflow-hidden">
      <ParticleBackground />

      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Innovative AI Engineer with a strong foundation in cybersecurity and deep expertise in prompt engineering,
              machine learning, and intelligent web application development. Skilled in leveraging modern AI tools and
              LLMs to build scalable, secure, and automated systems. Adept at integrating AI-driven solutions into web
              platforms, optimizing performance, and enhancing threat detection capabilities.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Experienced in Python and full-stack development. Passionate about transforming cybersecurity with AI
              innovation and crafting intelligent, responsive applications that solve real-world challenges.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">AI Engineering</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Cyber Security</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Prompt Engineering</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Machine Learning</Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Full-Stack Development</Badge>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Link href="/resume">View Resume</Link>
              </Button>
              <Button asChild className="btn-professional">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse"></div>
              <img
                src="/images/profile.png"
                alt="Nawin Prasath"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500 p-1 shadow-blue-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Roles Section */}
      <section
        id="leadership"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white/50 backdrop-blur-sm relative z-10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Leadership & Roles
          </span>
        </h2>
        <LeadershipSection />
      </section>

      {/* Teaching & Education Outreach */}
      <section id="teaching" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Cyber Security Education
          </span>
        </h2>
        <TeachingSection />
      </section>

      {/* CTF Experience */}
      <section
        id="ctf"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white/50 backdrop-blur-sm relative z-10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            CTF Experience
          </span>
        </h2>
        <CTFSection />
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Experience & Education
          </span>
        </h2>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-blue-50">
            <TabsTrigger value="experience" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Education & Certifications
            </TabsTrigger>
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
            <Card className="bg-white border-slate-200 shadow-sm card-hover">
              <CardHeader>
                <CardTitle className="text-slate-800">B.E CSE Cyber Security</CardTitle>
                <CardDescription className="text-slate-600">
                  KSR Institute for Engineering and Technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">2022 – 2026 | Tiruchengode</p>
                <p className="text-slate-700">CGPA - 8.03</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white border-slate-200 shadow-sm card-hover">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Certified in Cyber Security</p>
                      <p className="text-sm text-slate-600">ISC2</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Database className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">MongoDB Associate Python Developer</p>
                      <p className="text-sm text-slate-600">MongoDB University</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Zscaler Zero Trust Associate (ZTCA)</p>
                      <p className="text-sm text-slate-600">Zscaler</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Server className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">ISO/IEC 27001 Information Security Associate™</p>
                      <p className="text-sm text-slate-600">SkillFront</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Server className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Plesk Obsidian Professional</p>
                      <p className="text-sm text-slate-600">Plesk University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200 shadow-sm card-hover">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-slate-700">Python Developer, JetBrains Academy</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-slate-700">Jr. Cyber Security Analyst-Career Path, Cisco</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-slate-700">Mastering Network Intrusion Defense, EC-Council</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-slate-700">Palo Alto Cyber Security V6, Palo Alto Academy</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Achievements Timeline */}
      <section
        id="achievements"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white/50 backdrop-blur-sm relative z-10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Achievements</span>
        </h2>
        <AchievementsTimeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Exploit Dojo"
            description="Built 'Exploit Dojo', a comprehensive full-stack CTF platform with 200+ challenges across Web, Crypto, Forensics, and Pwn categories. Features AI-assisted hints, dynamic scoring system, user progress tracking, and an intuitive learning path interface."
            tags={["AI-Enhanced", "Full-Stack", "CTF Platform", "React", "Node.js", "MongoDB"]}
            icon={<Brain className="h-10 w-10 text-blue-600" />}
            link="https://github.com/Nawin-Cyber-10/Exploit-Dojo"
          />

          <ProjectCard
            title="Web Raptor"
            description="Developed Web Raptor, a comprehensive reconnaissance tool for cybersecurity professionals. Features automated subdomain enumeration, port scanning, vulnerability detection, and detailed reporting capabilities for penetration testing workflows."
            tags={["Reconnaissance", "Python", "Security Tools", "Automation", "Pentesting"]}
            icon={<Search className="h-10 w-10 text-blue-600" />}
            link="https://github.com/Nawin-Cyber-10/Web-Raptor"
          />

          <ProjectCard
            title="Ransomware Simulator"
            description="Developed a simulated ransomware tool in a controlled environment to demonstrate real-world ransomware behaviors, including file encryption, ransom note deployment, and user lockout mechanisms for educational purposes."
            tags={["Python", "Malware Analysis", "Ethical Hacking", "Education"]}
            icon={<Lock className="h-10 w-10 text-blue-600" />}
            link="https://github.com/Nawin-Cyber-10/Ransomware_Simulator"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Skills & Expertise
          </span>
        </h2>
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white/50 backdrop-blur-sm relative z-10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Get In Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a
                    href="mailto:heyitsmenawin010@gmail.com"
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    heyitsmenawin010@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-slate-700">81220 02205</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
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
                  <span className="text-slate-700">Tiruchengode</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nawin-Cyber-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors hover:scale-110 transform duration-300 shadow-sm border border-slate-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nawin10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors hover:scale-110 transform duration-300 shadow-sm border border-slate-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:heyitsmenawin010@gmail.com"
                  className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors hover:scale-110 transform duration-300 shadow-sm border border-slate-200"
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
