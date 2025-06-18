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
    <Card className="digital-evidence case-file-animation group">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <div className="investigation-badge inline-block mt-2">Mission Record</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
