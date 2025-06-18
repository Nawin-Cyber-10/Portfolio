"use client"

import { motion } from "framer-motion"
import { Users, Award, Shield, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "Department Secretary",
      organization: "Computer Science Department",
      description:
        "Coordinating departmental cybersecurity initiatives, managing student security research projects, and facilitating academic-industry partnerships in digital forensics and threat intelligence.",
      icon: <Users className="h-10 w-10 text-primary" />,
      clearance: "Academic Command",
    },
    {
      title: "NICC Coordinator",
      organization: "National Information and Cyber Security Council",
      description:
        "Leading national cybersecurity awareness programs, coordinating with government agencies on threat intelligence sharing, and developing incident response protocols for educational institutions.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      clearance: "National Security",
    },
    {
      title: "CTF Team Leader",
      organization: "Elite Cyber Operations Unit",
      description:
        "Commanding advanced penetration testing operations, training elite cyber warriors in digital forensics techniques, and leading tactical cyber defense exercises against sophisticated threat actors.",
      icon: <Award className="h-10 w-10 text-primary" />,
      clearance: "Tactical Operations",
    },
    {
      title: "Cyber Security Instructor",
      organization: "Digital Defense Academy",
      description:
        "Training next-generation cyber defenders in advanced forensic techniques, malware analysis methodologies, and incident response protocols. Developing specialized curriculum for digital investigation procedures.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      clearance: "Training Division",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {leadershipRoles.map((role, index) => (
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
                {role.icon}
              </div>
              <div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                <CardDescription>{role.organization}</CardDescription>
                <div className="evidence-badge mt-1">{role.clearance}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{role.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
