"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Flag, Code, Database, Lock, Search, Shield } from "lucide-react"

export default function CTFSection() {
  const ctfCategories = [
    {
      name: "Web Exploitation",
      icon: <Code className="h-5 w-5 text-primary" />,
      description:
        "Advanced web application penetration testing including SQL injection, XSS, CSRF, and authentication bypass techniques.",
    },
    {
      name: "Cryptography",
      icon: <Lock className="h-5 w-5 text-primary" />,
      description:
        "Breaking cryptographic implementations, analyzing cipher weaknesses, and developing cryptanalysis solutions.",
    },
    {
      name: "Digital Forensics",
      icon: <Search className="h-5 w-5 text-primary" />,
      description:
        "Evidence recovery, timeline analysis, memory forensics, and digital artifact examination using professional tools.",
    },
    {
      name: "Binary Exploitation",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      description:
        "Advanced exploitation techniques including buffer overflows, ROP chains, and modern exploit mitigation bypass.",
    },
    {
      name: "Reverse Engineering",
      icon: <Database className="h-5 w-5 text-primary" />,
      description:
        "Malware analysis, binary disassembly, and understanding complex software architectures and obfuscation techniques.",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:col-span-1"
      >
        <Card className="detective-card h-full">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Flag className="h-6 w-6 text-primary" />
              <CardTitle>Tactical Operations Commander</CardTitle>
            </div>
            <CardDescription>Elite Cyber Warfare Unit</CardDescription>
            <div className="evidence-badge">Classified Operations</div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Leading advanced cyber warfare simulations and penetration testing operations. Commanding elite teams in
              sophisticated attack scenarios and conducting digital forensic investigations.
            </p>

            <div className="flex flex-wrap gap-2">
              {ctfCategories.map((category, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Mission Accomplishments:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  <span>Top 10 finish in National Collegiate Cyber Defense Championship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  <span>1st place in Regional Advanced Persistent Threat Simulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  <span>Qualified for International Cyber Warfare Finals</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-2"
      >
        <Card className="detective-card h-full">
          <CardHeader>
            <CardTitle>Tactical Specializations</CardTitle>
            <CardDescription>Advanced cyber warfare domains and operational expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ctfCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="tool-icon">{category.icon}</div>
                    <h4 className="font-semibold">{category.name}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-xl border border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Operational Methodology
              </h4>
              <p className="text-muted-foreground mb-4">
                Advanced tactical training combining theoretical knowledge with real-world simulation environments:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg text-center border border-primary/20">
                  <span className="block text-primary font-bold text-lg mb-1">Phase 01</span>
                  <span className="text-sm text-muted-foreground">Reconnaissance & Intelligence</span>
                </div>
                <div className="bg-background p-4 rounded-lg text-center border border-primary/20">
                  <span className="block text-primary font-bold text-lg mb-1">Phase 02</span>
                  <span className="text-sm text-muted-foreground">Exploitation & Infiltration</span>
                </div>
                <div className="bg-background p-4 rounded-lg text-center border border-primary/20">
                  <span className="block text-primary font-bold text-lg mb-1">Phase 03</span>
                  <span className="text-sm text-muted-foreground">Evidence Analysis & Reporting</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
