"use client"

import { motion } from "framer-motion"
import { Award, Trophy, BadgeIcon as Certificate, Star } from "lucide-react"

export default function AchievementsTimeline() {
  const achievements = [
    {
      year: "2025",
      title: "Cyber Security Awareness Excellence",
      organization: "SKIN FORUM",
      icon: <Award className="h-6 w-6 text-primary" />,
      description:
        "Recognized for outstanding contributions to national cybersecurity awareness and digital forensics education initiatives.",
      classification: "Commendation",
    },
    {
      year: "2024",
      title: "Fintech Security Innovation Champion",
      organization: "CubeAI Solutions",
      icon: <Trophy className="h-6 w-6 text-primary" />,
      description:
        "First place in advanced Fintech security challenge for developing AI-powered threat detection and forensic analysis system.",
      classification: "Victory",
    },
    {
      year: "2024",
      title: "Elite Cyber Defense Recognition",
      organization: "National Cyber League",
      icon: <Star className="h-6 w-6 text-primary" />,
      description:
        "Led elite cyber defense team to top 10 finish among 200+ participating units in national collegiate cyber warfare championship.",
      classification: "Tactical Success",
    },
    {
      year: "2023",
      title: "Information Security Management Certification",
      organization: "SkillFront",
      icon: <Certificate className="h-6 w-6 text-primary" />,
      description:
        "Obtained advanced professional certification in ISO/IEC 27001 information security management systems and forensic protocols.",
      classification: "Credentials",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30 transform md:translate-x-px professional-glow"></div>

      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center md:items-start gap-8`}
          >
            {/* Timeline marker */}
            <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2.5 z-10 professional-glow pulse-glow"></div>

            {/* Year badge */}
            <div className="absolute left-6 md:static md:flex-none md:w-1/2 flex md:justify-center">
              <div className={`detective-card p-3 rounded-lg inline-block ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <span className="font-bold text-primary">{achievement.year}</span>
              </div>
            </div>

            {/* Achievement card */}
            <div
              className={`detective-card p-6 rounded-xl w-full md:w-1/2 ml-8 md:ml-0 ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              } group`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-secondary p-2 rounded-lg tool-icon">{achievement.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                  <div className="evidence-badge mt-1">{achievement.classification}</div>
                </div>
              </div>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
