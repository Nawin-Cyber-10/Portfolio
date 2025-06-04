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
        "Serving as the Department Secretary for Computer Science, coordinating academic activities, student initiatives, and department events.",
      icon: <Users className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "NICC Coordinator",
      organization: "National Information and Cyber Security Council",
      description:
        "Leading the National Information and Cyber Security Council chapter, organizing security awareness programs and coordinating with national cybersecurity initiatives.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "CTF Team Leader",
      organization: "College Cyber Security Team",
      description:
        "Leading the college's Capture The Flag team, training members in various cybersecurity domains, and participating in national and international competitions.",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Cyber Security Instructor",
      organization: "School Outreach Program",
      description:
        "Part-time instructor teaching cybersecurity awareness and safety to school students, developing curriculum for different age groups.",
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
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
          <Card className="bg-white border-slate-200 h-full hover:border-blue-300 transition-all duration-300 overflow-hidden group card-hover shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                {role.icon}
              </div>
              <div>
                <CardTitle className="text-xl text-slate-800">{role.title}</CardTitle>
                <CardDescription className="text-slate-600">{role.organization}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">{role.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
