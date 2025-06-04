"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Flag, Code, Database, Lock, Search } from "lucide-react"

export default function CTFSection() {
  const ctfCategories = [
    {
      name: "Web Exploitation",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      description:
        "Finding and exploiting vulnerabilities in web applications, including SQL injection, XSS, and CSRF attacks.",
    },
    {
      name: "Cryptography",
      icon: <Lock className="h-5 w-5 text-blue-600" />,
      description: "Breaking cryptographic algorithms, decoding ciphers, and solving encryption challenges.",
    },
    {
      name: "Forensics",
      icon: <Search className="h-5 w-5 text-blue-600" />,
      description: "Analyzing digital evidence, recovering deleted data, and extracting hidden information from files.",
    },
    {
      name: "Binary Exploitation",
      icon: <Terminal className="h-5 w-5 text-blue-600" />,
      description:
        "Exploiting vulnerabilities in binary applications, including buffer overflows and return-oriented programming.",
    },
    {
      name: "Reverse Engineering",
      icon: <Database className="h-5 w-5 text-blue-600" />,
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
        <Card className="bg-white border-slate-200 h-full hover:border-blue-300 transition-all duration-300 card-hover shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Flag className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-slate-800">CTF Team Leader</CardTitle>
            </div>
            <CardDescription className="text-slate-600">
              Leading and training the college's Capture The Flag team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              As the CTF team leader, I organize training sessions, develop practice challenges, and lead our team in
              national and international competitions. Our focus areas include:
            </p>

            <div className="flex flex-wrap gap-2">
              {ctfCategories.map((category, index) => (
                <Badge key={index} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2 text-slate-800">Notable Achievements:</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Top 10 finish in National Collegiate CTF 2024</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>1st place in Regional Cyber Security Challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
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
        <Card className="bg-white border-slate-200 h-full hover:border-blue-300 transition-all duration-300 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">CTF Categories & Training</CardTitle>
            <CardDescription className="text-slate-600">
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
                  className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <h4 className="font-semibold text-slate-800">{category.name}</h4>
                  </div>
                  <p className="text-slate-700 text-sm">{category.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-slate-800">
                <Terminal className="h-5 w-5 text-blue-600" />
                Training Methodology
              </h4>
              <p className="text-slate-700 mb-4">
                Our training combines theoretical knowledge with hands-on practice in a structured learning environment:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg text-center border border-slate-200">
                  <span className="block text-blue-600 font-bold text-lg mb-1">01</span>
                  <span className="text-sm text-slate-700">Fundamentals & Theory</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center border border-slate-200">
                  <span className="block text-blue-600 font-bold text-lg mb-1">02</span>
                  <span className="text-sm text-slate-700">Guided Practice</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center border border-slate-200">
                  <span className="block text-blue-600 font-bold text-lg mb-1">03</span>
                  <span className="text-sm text-slate-700">Competition Simulation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
