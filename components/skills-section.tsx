"use client"

import { motion } from "framer-motion"
import { Shield, Code, Cloud, Network, FileCode, Cpu, Lock, Search, Database, Server, Terminal } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cyber Security",
      icon: <Shield className="h-6 w-6 text-emerald-500" />,
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Threat Hunting",
        "Digital Forensics",
        "Zero Trust Architecture",
      ],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-emerald-500" />,
      skills: ["Python", "JavaScript", "Bash Scripting", "PowerShell", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6 text-emerald-500" />,
      skills: [
        "AI Prompting",
        "Anomaly Detection",
        "Threat Intelligence",
        "Malware Classification",
        "Security Automation",
      ],
    },
    {
      title: "Networking",
      icon: <Network className="h-6 w-6 text-emerald-500" />,
      skills: ["IDS/IPS", "Firewalls", "VPNs", "Network Monitoring", "Packet Analysis"],
    },
    {
      title: "Cloud Security",
      icon: <Cloud className="h-6 w-6 text-emerald-500" />,
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
      icon: <FileCode className="h-6 w-6 text-emerald-500" />,
      skills: ["ISO/IEC 27001", "GDPR", "Security Frameworks", "Risk Assessment", "Security Policies"],
    },
  ]

  // Skill meter data
  const advancedSkills = [
    { name: "Penetration Testing", level: 90 },
    { name: "Python Development", level: 85 },
    { name: "Network Security", level: 88 },
    { name: "Cryptography", level: 80 },
    { name: "Web Security", level: 92 },
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
            className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900/80 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-gray-300">{skill}</span>
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
        className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Advanced Proficiencies</h3>
        <div className="space-y-6">
          {advancedSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
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
        className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "Kali Linux", icon: <Terminal className="h-5 w-5" /> },
            { name: "Burp Suite", icon: <Search className="h-5 w-5" /> },
            { name: "Nmap", icon: <Network className="h-5 w-5" /> },
            { name: "Metasploit", icon: <Shield className="h-5 w-5" /> },
            { name: "Wireshark", icon: <Network className="h-5 w-5" /> },
            { name: "OWASP ZAP", icon: <Lock className="h-5 w-5" /> },
            { name: "Nessus", icon: <Search className="h-5 w-5" /> },
            { name: "Suricata", icon: <Shield className="h-5 w-5" /> },
            { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
            { name: "Plesk", icon: <Server className="h-5 w-5" /> },
          ].map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-3 rounded-lg text-center flex flex-col items-center gap-2 hover:bg-gray-900 transition-colors duration-300 hover:border-emerald-500/30 border border-transparent"
            >
              <div className="text-emerald-500">{tool.icon}</div>
              <span className="text-sm">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
