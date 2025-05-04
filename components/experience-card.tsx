import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string[]
}

export default function ExperienceCard({ title, company, period, location, description }: ExperienceCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-emerald-500 transition-all duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-gray-400">{company}</CardDescription>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Calendar className="h-4 w-4 text-emerald-500" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <MapPin className="h-4 w-4 text-emerald-500" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-gray-300">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
