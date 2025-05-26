"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield, Lock, Database, Server, Terminal, Brain } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Matrix effect for background
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
        const fontSize = 14
        const columns = canvas.width / fontSize

        const drops: number[] = []
        for (let i = 0; i < columns; i++) {
          drops[i] = 1
        }

        const draw = () => {
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          ctx.fillStyle = "#a855f7"
          ctx.font = `${fontSize}px monospace`

          for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)]
            ctx.fillText(text, i * fontSize, drops[i] * fontSize)

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0
            }

            drops[i]++
          }
        }

        const matrixInterval = setInterval(draw, 33)

        return () => clearInterval(matrixInterval)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix background */}
      <canvas id="matrix-canvas" className="absolute inset-0 opacity-10 z-0"></canvas>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-1/5"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Shield className="h-12 w-12 text-purple-500/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Lock className="h-14 w-14 text-purple-500/30" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/5"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Database className="h-10 w-10 text-purple-500/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Server className="h-12 w-12 text-purple-500/30" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/3"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Terminal className="h-16 w-16 text-purple-500/30" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/6"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Brain className="h-14 w-14 text-purple-500/30" />
      </motion.div>

      {/* Hero content */}
      <div ref={sectionRef} className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <img
              src="/images/profile.png"
              alt="Nawin Prasath"
              className="w-32 h-32 rounded-full border-4 border-purple-500 p-1 shadow-lg shadow-purple-500/20 purple-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
            Nawin Prasath K
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-12 mb-6"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer",
              1000,
              "Cyber Security Specialist",
              1000,
              "Prompt Engineering Expert",
              1000,
              "CTF Team Leader",
              1000,
              "Full-Stack Developer",
              1000,
              "NICC Coordinator",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-2xl md:text-3xl font-medium text-purple-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforming cybersecurity with AI innovation and crafting intelligent, responsive applications that solve
            real-world challenges
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <Link href="/resume">Resume</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </div>
  )
}
