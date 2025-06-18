"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: ReactNode
  link: string
}

export default function ProjectCard({ title, description, tags, icon, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="digital-evidence case-file-animation overflow-hidden group h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <motion.div
            className="bg-secondary p-3 rounded-lg group-hover:bg-primary/10 transition-colors duration-300 tool-icon"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <motion.div
              className="investigation-badge mt-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Open Source
            </motion.div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="ghost"
              className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 enhanced-button"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View Project <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
