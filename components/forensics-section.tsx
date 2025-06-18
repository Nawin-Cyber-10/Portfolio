"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Search, Database, HardDrive, Fingerprint, Shield, Zap, Terminal } from "lucide-react"

export default function ForensicsSection() {
  const forensicTools = [
    {
      name: "Autopsy",
      description: "Digital forensics platform for analyzing hard drives and mobile devices",
      icon: <Eye className="h-8 w-8 text-primary" />,
      category: "Digital Forensics",
      features: ["Timeline Analysis", "Keyword Search", "Hash Analysis", "Registry Analysis"],
    },
    {
      name: "FTK (Forensic Toolkit)",
      description: "Comprehensive computer forensics software for evidence processing",
      icon: <Database className="h-8 w-8 text-primary" />,
      category: "Evidence Processing",
      features: ["Email Analysis", "Registry Examination", "Password Recovery", "Data Carving"],
    },
    {
      name: "Sleuth Kit",
      description: "Command-line digital investigation analysis tools",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      category: "CLI Forensics",
      features: ["File System Analysis", "Timeline Creation", "Metadata Extraction", "Deleted File Recovery"],
    },
    {
      name: "Burp Suite",
      description: "Advanced web application security testing platform",
      icon: <Shield className="h-8 w-8 text-primary" />,
      category: "Web Security",
      features: ["Proxy Interception", "Scanner", "Intruder", "Repeater"],
    },
    {
      name: "OWASP ZAP",
      description: "Open-source web application security scanner",
      icon: <Zap className="h-8 w-8 text-primary" />,
      category: "Vulnerability Assessment",
      features: ["Active Scanning", "Passive Scanning", "Fuzzing", "API Testing"],
    },
    {
      name: "Volatility",
      description: "Advanced memory forensics framework for incident response",
      icon: <HardDrive className="h-8 w-8 text-primary" />,
      category: "Memory Analysis",
      features: ["Process Analysis", "Network Connections", "Registry Hives", "Malware Detection"],
    },
  ]

  const investigationProcess = [
    {
      step: "01",
      title: "Evidence Acquisition",
      description: "Secure collection and preservation of digital evidence using forensically sound methods",
      icon: <Fingerprint className="h-6 w-6 text-primary" />,
    },
    {
      step: "02",
      title: "Data Analysis",
      description: "Deep examination of acquired data using advanced forensic tools and techniques",
      icon: <Search className="h-6 w-6 text-primary" />,
    },
    {
      step: "03",
      title: "Timeline Reconstruction",
      description: "Chronological reconstruction of events to establish sequence of activities",
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      step: "04",
      title: "Report Generation",
      description: "Comprehensive documentation of findings with legal admissibility standards",
      icon: <Eye className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="space-y-16">
      {/* Forensic Tools Arsenal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {forensicTools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="detective-card h-full group">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-secondary p-3 rounded-lg group-hover:bg-primary/10 transition-colors duration-300 tool-icon">
                  {tool.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {tool.category}
                    </Badge>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-primary">Key Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-primary"></span>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Investigation Process */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="detective-card p-8 rounded-xl"
      >
        <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Digital Investigation Protocol</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investigationProcess.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-secondary p-6 rounded-xl mb-4 border border-primary/20 professional-glow">
                <div className="flex items-center justify-center mb-3">{process.icon}</div>
                <div className="evidence-badge text-xs mb-2">Step {process.step}</div>
                <h4 className="font-bold text-primary">{process.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{process.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-secondary rounded-xl border border-primary/20">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Chain of Custody Protocol
          </h4>
          <p className="text-muted-foreground text-sm">
            All digital evidence is handled according to strict forensic standards ensuring legal admissibility. Every
            step is documented with cryptographic hashes, timestamps, and digital signatures to maintain evidence
            integrity throughout the investigation process.
          </p>
        </div>
      </motion.div>

      {/* Specialization Areas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="detective-card p-6 rounded-xl"
        >
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-primary" />
            Disk Forensics
          </h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• File system analysis (NTFS, FAT, EXT)</li>
            <li>• Deleted file recovery</li>
            <li>• Partition table reconstruction</li>
            <li>• Bad sector analysis</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="detective-card p-6 rounded-xl"
        >
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Network Forensics
          </h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Packet capture analysis</li>
            <li>• Network traffic reconstruction</li>
            <li>• Protocol analysis</li>
            <li>• Intrusion detection</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="detective-card p-6 rounded-xl"
        >
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Malware Analysis
          </h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Static analysis techniques</li>
            <li>• Dynamic behavior analysis</li>
            <li>• Reverse engineering</li>
            <li>• IOC extraction</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
