"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield, Search, Database, Terminal, Eye, Fingerprint, Lock } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const floatingIcons = [
    { icon: Shield, position: { top: "25%", left: "20%" }, delay: 0 },
    { icon: Search, position: { bottom: "25%", right: "25%" }, delay: 1 },
    { icon: Database, position: { top: "33%", right: "20%" }, delay: 2 },
    { icon: Terminal, position: { bottom: "33%", left: "25%" }, delay: 3 },
    { icon: Eye, position: { top: "66%", right: "33%" }, delay: 4 },
    { icon: Fingerprint, position: { top: "50%", left: "16%" }, delay: 5 },
    { icon: Lock, position: { bottom: "20%", right: "20%" }, delay: 6 },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-slate-900/20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`absolute w-${64 + i * 8} h-${64 + i * 8} bg-primary/${3 + i} rounded-full filter blur-3xl`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced floating forensic icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon
        return (
          <motion.div
            key={index}
            className="absolute"
            style={item.position}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 0.3,
              scale: 1,
              rotate: 0,
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              initial: { duration: 1, delay: item.delay * 0.2 },
              y: { duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              x: { duration: 6 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.2,
              opacity: 0.6,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
          >
            <IconComponent className="h-12 w-12 text-primary/30 tool-icon" />
          </motion.div>
        )
      })}

      {/* Enhanced hero content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <motion.img
                src="/images/profile.png"
                alt="Digital Forensic Investigator"
                className="w-32 h-32 rounded-full border-4 border-primary p-1 professional-glow detective-scan"
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 evidence-badge text-xs"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ID: 010
              </motion.div>
              <div className="scan-line absolute inset-0 rounded-full"></div>
            </motion.div>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            NAWIN PRASATH K
          </motion.h1>

          <motion.div
            className="evidence-badge mb-8 text-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            Digital Forensic Investigator
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-16 mb-8"
        >
          <TypeAnimation
            sequence={[
              "Digital Forensic Investigator",
              1000,
              "Penetration Testing Specialist",
              1000,
              "AI Security Engineer",
              1000,
              "Malware Analysis Expert",
              1000,
              "Incident Response Lead",
              1000,
              "Cyber Threat Hunter",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-2xl md:text-4xl font-medium text-primary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Uncovering digital evidence • Analyzing cyber threats • Securing the digital realm through advanced forensic
          investigation and AI-powered security solutions
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {[
            { href: "#projects", text: "View Projects" },
            { href: "#contact", text: "Contact Me", variant: "outline" },
            { href: "/resume", text: "View Resume", variant: "outline" },
          ].map((button, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className={
                  button.variant === "outline"
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
                    : "detective-button text-lg px-8 py-4"
                }
                variant={button.variant as any}
                asChild
              >
                <Link href={button.href}>{button.text}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 100 }}
          className="mt-12"
        >
          <motion.div
            className="detective-card p-6 rounded-xl inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-lg">
              <span className="text-primary font-semibold">Status:</span> Active Investigation
              <motion.span
                className="ml-2 text-primary"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                ●
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
