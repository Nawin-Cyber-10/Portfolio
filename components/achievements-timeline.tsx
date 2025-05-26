"use client"

import { motion } from "framer-motion"
import { Award, Trophy, BadgeIcon as Certificate, Star } from "lucide-react"

export default function AchievementsTimeline() {
  const achievements = [
    {
      year: "2025",
      title: "Cyber Security Awareness",
      organization: "SKIN FORUM",
      icon: <Award className="h-6 w-6 text-purple-500" />,
      description: "Recognized for contributions to cyber security awareness initiatives.",
    },
    {
      year: "2024",
      title: "Fintech Ideathon Winner",
      organization: "CubeAI Solutions",
      icon: <Trophy className="h-6 w-6 text-purple-500" />,
      description: "First place in the Fintech Ideathon for innovative AI-powered security solution.",
    },
    {
      year: "2024",
      title: "Top 10 in National Collegiate CTF",
      organization: "National Cyber League",
      icon: <Star className="h-6 w-6 text-purple-500" />,
      description: "Led college team to a top 10 finish among 200+ participating teams.",
    },
    {
      year: "2023",
      title: "ISO/IEC 27001 Certification",
      organization: "SkillFront",
      icon: <Certificate className="h-6 w-6 text-purple-500" />,
      description: "Obtained professional certification in information security management systems.",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-violet-500 transform md:translate-x-px"></div>

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
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-purple-500 rounded-full transform -translate-x-2 md:-translate-x-2.5 z-10 shadow-lg shadow-purple-500/50 purple-glow"></div>

            {/* Year bubble - always on the line for mobile, alternating sides for desktop */}
            <div className="absolute left-6 md:static md:flex-none md:w-1/2 flex md:justify-center">
              <div
                className={`bg-gray-800 text-purple-500 font-bold py-1 px-3 rounded-full inline-block ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {achievement.year}
              </div>
            </div>

            {/* Content card - full width on mobile, half width alternating sides on desktop */}
            <div
              className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 w-full md:w-1/2 ml-8 md:ml-0 ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              } hover:border-purple-500/50 transition-all duration-300 purple-glow-hover`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 p-2 rounded-lg">{achievement.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.organization}</p>
                </div>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
