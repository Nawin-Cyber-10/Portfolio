"use client"

import { motion } from "framer-motion"
import { Shield, Code, Cloud, Network, FileCode, Lock, Search, Database, Server, Brain } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      skills: ["AI Prompting", "Prompt Engineering", "Machine Learning", "AI Web Development", "LLM Integration"],
    },
    {
      title: "Cyber Security",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Threat Hunting",
        "Digital Forensics",
        "Zero Trust Architecture",
      ],
    },
    {
      title: "Programming & Development",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      skills: ["Python Development", "Full-Stack Development", "JavaScript", "Bash Scripting", "MongoDB"],
    },
    {
      title: "Reconnaissance & Tools",
      icon: <Search className="h-6 w-6 text-blue-600" />,
      skills: ["Web Reconnaissance", "Subdomain Enumeration", "Port Scanning", "OSINT", "Automation"],
    },
    {
      title: "Cloud Security",
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      skills: [
        "GCP Security",
        "Cloud Infrastructure",
        "Secure Architecture",
        "Identity Management",
        "Container Security",
      ],
    },
    {
      title: "Compliance & Standards",
      icon: <FileCode className="h-6 w-6 text-blue-600" />,
      skills: ["ISO/IEC 27001", "GDPR", "Security Frameworks", "Risk Assessment", "Security Policies"],
    },
  ]

  // Skill meter data
  const advancedSkills = [
    { name: "AI Prompting & Engineering", level: 95 },
    { name: "Python Development", level: 90 },
    { name: "Penetration Testing", level: 88 },
    { name: "Web Reconnaissance", level: 92 },
    { name: "Full-Stack Development", level: 85 },
  ]

  return (
    <div className="space-y-16">
      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-all duration-300 group card-hover shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  <span className="text-slate-700">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Skill Meters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
      >
        <h3 className="text-xl font-semibold mb-6 text-center text-slate-800">Advanced Proficiencies</h3>
        <div className="space-y-6">
          {advancedSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-800 font-medium">{skill.name}</span>
                <span className="text-blue-600 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
      >
        <h3 className="text-xl font-semibold mb-6 text-center text-slate-800">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "Python", icon: <Code className="h-5 w-5" /> },
            { name: "Burp Suite", icon: <Search className="h-5 w-5" /> },
            { name: "Nmap", icon: <Network className="h-5 w-5" /> },
            { name: "Metasploit", icon: <Shield className="h-5 w-5" /> },
            { name: "Wireshark", icon: <Network className="h-5 w-5" /> },
            { name: "OWASP ZAP", icon: <Lock className="h-5 w-5" /> },
            { name: "Nessus", icon: <Search className="h-5 w-5" /> },
            { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
            { name: "React", icon: <Code className="h-5 w-5" /> },
            { name: "Node.js", icon: <Server className="h-5 w-5" /> },
          ].map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-3 rounded-lg text-center flex flex-col items-center gap-2 hover:bg-blue-50 transition-colors duration-300 hover:border-blue-200 border border-transparent"
            >
              <div className="text-blue-600">{tool.icon}</div>
              <span className="text-sm text-slate-700">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
