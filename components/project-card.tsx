import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { ReactNode } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: ReactNode
  link: string
}

export default function ProjectCard({ title, description, tags, icon, link }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-emerald-500 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-gray-900 p-3 rounded-lg">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-emerald-500/50 text-emerald-400">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 p-0">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
