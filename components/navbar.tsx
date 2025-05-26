"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "leadership",
        "teaching",
        "ctf",
        "experience",
        "achievements",
        "projects",
        "skills",
        "contact",
      ]

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Leadership", href: "#leadership", id: "leadership" },
    { name: "Teaching", href: "#teaching", id: "teaching" },
    { name: "CTF", href: "#ctf", id: "ctf" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 group">
          <Shield className="h-6 w-6 text-purple-500 group-hover:text-violet-400 transition-colors duration-300" />
          <span className="font-bold text-xl group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 transition-all duration-300">
            Nawin Prasath
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-gray-300 hover:text-purple-500 transition-colors ${
                activeSection === link.id ? "text-purple-500" : ""
              }`}
              onClick={closeMenu}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300"
          >
            <Link href="/resume">Resume</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-300 hover:text-purple-500 py-2 transition-colors ${
                    activeSection === link.id ? "text-purple-500" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 mt-2"
              >
                <Link href="/resume">Resume</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
