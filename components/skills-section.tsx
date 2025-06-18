"use client"

import { motion } from "framer-motion"
import { Shield, Code, Search, Database, Terminal, Eye, Fingerprint, Zap, HardDrive, Network } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Digital Forensics",
      icon: <Eye className="h-6 w-6 text-primary" />,
      skills: ["Autopsy", "FTK (Forensic Toolkit)", "Sleuth Kit", "Volatility", "X-Ways Forensics"],
    },
    {
      title: "Penetration Testing",
      icon: <Shield className="h-6 w-6 text-primary" />,
      skills: ["Burp Suite Professional", "OWASP ZAP", "Metasploit", "Nmap", "Wireshark"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["AI Threat Detection", "Prompt Engineering", "Machine Learning", "Neural Networks", "TensorFlow"],
    },
    {
      title: "Malware Analysis",
      icon: <Search className="h-6 w-6 text-primary" />,
      skills: ["IDA Pro", "Ghidra", "OllyDbg", "Cuckoo Sandbox", "YARA Rules"],
    },
    {
      title: "Network Security",
      icon: <Network className="h-6 w-6 text-primary" />,
      skills: ["Packet Analysis", "Network Forensics", "Intrusion Detection", "Traffic Analysis", "Protocol Analysis"],
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "PowerShell", "Bash", "SQL", "JavaScript"],
    },
  ]

  const forensicTools = [
    { name: "Autopsy", icon: <Eye className="h-5 w-5" />, category: "Digital Forensics" },
    { name: "FTK", icon: <Database className="h-5 w-5" />, category: "Evidence Processing" },
    { name: "Sleuth Kit", icon: <Terminal className="h-5 w-5" />, category: "CLI Forensics" },
    { name: "Burp Suite", icon: <Shield className="h-5 w-5" />, category: "Web Security" },
    { name: "OWASP ZAP", icon: <Zap className="h-5 w-5" />, category: "Vulnerability Assessment" },
    { name: "Volatility", icon: <HardDrive className="h-5 w-5" />, category: "Memory Analysis" },
    { name: "Wireshark", icon: <Network className="h-5 w-5" />, category: "Network Analysis" },
    { name: "Metasploit", icon: <Terminal className="h-5 w-5" />, category: "Exploitation" },
    { name: "IDA Pro", icon: <Search className="h-5 w-5" />, category: "Reverse Engineering" },
    { name: "Ghidra", icon: <Code className="h-5 w-5" />, category: "Malware Analysis" },
  ]

  return (
    <div className="space-y-16">
      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="detective-card p-6 rounded-xl group"
          >
            <motion.div className="flex items-center gap-3 mb-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <div className="bg-secondary p-2 rounded-lg group-hover:bg-primary/10 transition-all duration-300 tool-icon">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </motion.div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: skillIndex * 0.2 }}
                  />
                  <span className="text-muted-foreground text-sm">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Forensic Tools Arsenal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
        className="detective-card p-8 rounded-xl"
      >
        <motion.h3
          className="text-2xl font-semibold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional Tools Arsenal
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {forensicTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              className="bg-secondary p-4 rounded-xl text-center flex flex-col items-center gap-3 hover:bg-primary/10 transition-all duration-300 border border-primary/20 group tool-icon cursor-pointer"
            >
              <motion.div
                className="text-primary group-hover:text-primary transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {tool.icon}
              </motion.div>
              <span className="text-sm font-medium">{tool.name}</span>
              <motion.div className="evidence-badge text-xs" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                {tool.category}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Investigation Specializations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateX: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateX: 2 }}
          className="detective-card p-6 rounded-xl"
        >
          <motion.h4
            className="text-lg font-bold mb-4 flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Fingerprint className="h-5 w-5 text-primary" />
            Digital Evidence
          </motion.h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {[
              "File system forensics",
              "Deleted data recovery",
              "Metadata analysis",
              "Timeline reconstruction",
              "Hash verification",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateX: 2 }}
          className="detective-card p-6 rounded-xl"
        >
          <motion.h4
            className="text-lg font-bold mb-4 flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Search className="h-5 w-5 text-primary" />
            Threat Hunting
          </motion.h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {[
              "Advanced persistent threats",
              "Behavioral analysis",
              "IOC development",
              "Threat intelligence",
              "Attack pattern recognition",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotateX: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateX: 2 }}
          className="detective-card p-6 rounded-xl"
        >
          <motion.h4
            className="text-lg font-bold mb-4 flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Terminal className="h-5 w-5 text-primary" />
            Incident Response
          </motion.h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            {[
              "Rapid containment",
              "Evidence preservation",
              "Root cause analysis",
              "Recovery procedures",
              "Post-incident reporting",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
