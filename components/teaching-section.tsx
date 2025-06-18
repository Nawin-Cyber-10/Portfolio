"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertTriangle, Lock, Users, Eye, Terminal } from "lucide-react"

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
        <div className="detective-card p-8 rounded-xl h-full">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            Cyber Defense Training
          </h3>
          <div className="evidence-badge mb-4">Training Curriculum</div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Specialized instructor in advanced cybersecurity defense protocols. Training the next generation of digital
            defenders in threat detection, incident response, and forensic investigation techniques.
          </p>
          <div className="flex justify-center">
            <Terminal className="h-24 w-24 text-primary/30 floating-animation" />
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
        <Card className="detective-card h-full">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Training Modules</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg mt-1 tool-icon">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Threat Identification</h4>
                  <p className="text-muted-foreground">
                    Advanced training in recognizing sophisticated cyber threats including APTs, zero-day exploits, and
                    social engineering attacks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg mt-1 tool-icon">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Cryptographic Security</h4>
                  <p className="text-muted-foreground">
                    Comprehensive education on encryption protocols, digital signatures, and quantum-resistant
                    cryptographic implementations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg mt-1 tool-icon">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Digital Privacy Protocols</h4>
                  <p className="text-muted-foreground">
                    Training in advanced privacy protection techniques, secure communications, and digital anonymity
                    methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg mt-1 tool-icon">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Forensic Investigation</h4>
                  <p className="text-muted-foreground">
                    Hands-on training in digital evidence collection, chain of custody procedures, and advanced forensic
                    analysis.
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
