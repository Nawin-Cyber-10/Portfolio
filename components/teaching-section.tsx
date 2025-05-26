"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertTriangle, Lock, Users, Eye } from "lucide-react"

export default function TeachingSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="lg:col-span-1"
      >
        <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 h-full hover:border-purple-500/50 transition-all duration-300 purple-glow-hover">
          <h3 className="text-2xl font-bold mb-4 text-purple-500">Cyber Safety Education</h3>
          <p className="text-gray-300 mb-6">
            As a part-time cyber security instructor, I'm passionate about educating the next generation on staying safe
            online. I develop and deliver age-appropriate curriculum for school students, focusing on practical safety
            measures and awareness.
          </p>
          <div className="flex justify-center">
            <Shield className="h-24 w-24 text-purple-500/30" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-2"
      >
        <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 h-full hover:border-purple-500/50 transition-all duration-300">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-500">Topics I Teach</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-900/80 p-3 rounded-lg mt-1">
                  <AlertTriangle className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Online Threats Awareness</h4>
                  <p className="text-gray-300">
                    Teaching students to recognize common online threats including phishing, social engineering, and
                    malware.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900/80 p-3 rounded-lg mt-1">
                  <Lock className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Password Security</h4>
                  <p className="text-gray-300">
                    Educating on creating strong passwords, using password managers, and implementing multi-factor
                    authentication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900/80 p-3 rounded-lg mt-1">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Social Media Safety</h4>
                  <p className="text-gray-300">
                    Guiding students on privacy settings, information sharing, and recognizing online predators.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900/80 p-3 rounded-lg mt-1">
                  <Eye className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Digital Footprint</h4>
                  <p className="text-gray-300">
                    Helping students understand the permanence of online actions and managing their digital reputation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
