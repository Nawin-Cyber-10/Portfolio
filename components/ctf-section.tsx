"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Flag, Code, Database, Lock, Search } from "lucide-react"

export default function CTFSection() {
  const ctfCategories = [
    {
      name: "Web Exploitation",
      icon: <Code className="h-5 w-5 text-emerald-500" />,
      description:
        "Finding and exploiting vulnerabilities in web applications, including SQL injection, XSS, and CSRF attacks.",
    },
    {
      name: "Cryptography",
      icon: <Lock className="h-5 w-5 text-emerald-500" />,
      description: "Breaking cryptographic algorithms, decoding ciphers, and solving encryption challenges.",
    },
    {
      name: "Forensics",
      icon: <Search className="h-5 w-5 text-emerald-500" />,
      description: "Analyzing digital evidence, recovering deleted data, and extracting hidden information from files.",
    },
    {
      name: "Binary Exploitation",
      icon: <Terminal className="h-5 w-5 text-emerald-500" />,
      description:
        "Exploiting vulnerabilities in binary applications, including buffer overflows and return-oriented programming.",
    },
    {
      name: "Reverse Engineering",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      description: "Analyzing and understanding compiled code to determine functionality and find vulnerabilities.",
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
        <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 h-full hover:border-emerald-500/50 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Flag className="h-6 w-6 text-emerald-500" />
              <CardTitle>CTF Team Leader</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Leading and training the college's Capture The Flag team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              As the CTF team leader, I organize training sessions, develop practice challenges, and lead our team in
              national and international competitions. Our focus areas include:
            </p>

            <div className="flex flex-wrap gap-2">
              {ctfCategories.map((category, index) => (
                <Badge key={index} variant="outline" className="border-emerald-500/50 text-emerald-400">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Notable Achievements:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Top 10 finish in National Collegiate CTF 2024</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>1st place in Regional Cyber Security Challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Qualified for international CTF finals</span>
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
        <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 h-full hover:border-emerald-500/50 transition-all duration-300">
          <CardHeader>
            <CardTitle>CTF Categories & Training</CardTitle>
            <CardDescription className="text-gray-400">
              Specialized areas of focus in our CTF training program
            </CardDescription>
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
                  className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <h4 className="font-semibold">{category.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-emerald-500" />
                Training Methodology
              </h4>
              <p className="text-gray-300 mb-4">
                Our training combines theoretical knowledge with hands-on practice in a structured learning environment:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/80 p-3 rounded-lg text-center">
                  <span className="block text-emerald-500 font-bold text-lg mb-1">01</span>
                  <span className="text-sm">Fundamentals & Theory</span>
                </div>
                <div className="bg-gray-800/80 p-3 rounded-lg text-center">
                  <span className="block text-emerald-500 font-bold text-lg mb-1">02</span>
                  <span className="text-sm">Guided Practice</span>
                </div>
                <div className="bg-gray-800/80 p-3 rounded-lg text-center">
                  <span className="block text-emerald-500 font-bold text-lg mb-1">03</span>
                  <span className="text-sm">Competition Simulation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
