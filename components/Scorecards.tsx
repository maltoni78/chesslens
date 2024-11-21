import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Scorecards() {
  const scorecards = [
    { id: 1, title: 'City Championship 2023', date: '2023-05-15', status: 'Completed' },
    { id: 2, title: 'Online Tournament', date: '2023-06-22', status: 'In Progress' },
    { id: 3, title: 'Club Match', date: '2023-07-03', status: 'Upcoming' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scorecards</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {scorecards.map((scorecard) => (
            <li key={scorecard.id} className="flex justify-between items-center p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <div>
                <h3 className="font-medium">{scorecard.title}</h3>
                <p className="text-sm text-muted-foreground">{scorecard.date}</p>
              </div>
              <Badge variant={scorecard.status === 'Completed' ? 'default' : scorecard.status === 'In Progress' ?
                'secondary' : 'outline'}
              >
                {scorecard.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

