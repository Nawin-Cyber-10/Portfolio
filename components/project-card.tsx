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
    <Card className="bg-white border-slate-200 overflow-hidden group hover:border-blue-300 transition-all duration-300 card-hover shadow-sm">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">{icon}</div>
        <div>
          <CardTitle className="text-xl text-slate-800">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
