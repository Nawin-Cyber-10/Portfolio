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
    <Card className="bg-white border-slate-200 hover:border-blue-300 transition-all duration-300 card-hover shadow-sm">
      <CardHeader>
        <CardTitle className="text-slate-800">{title}</CardTitle>
        <CardDescription className="text-slate-600">{company}</CardDescription>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-slate-700">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
