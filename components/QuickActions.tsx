import { Camera, FileText, Film, Share2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function QuickActions() {
  const actions = [
    { id: 1, title: 'Scan Position', icon: Camera, href: '/scan', color: 'text-primary' },
    { id: 2, title: 'Import Scorecard', icon: FileText, href: '/scorecard', color: 'text-accent' },
    { id: 3, title: 'Create GIF', icon: Film, href: '/gif-creator', color: 'text-primary' },
    { id: 4, title: 'Share Game', icon: Share2, href: '#', color: 'text-accent' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className="h-auto py-6 flex flex-col items-center justify-center transition-all hover:scale-105 hover:bg-secondary"
              asChild
            >
              <Link href={action.href}>
                <action.icon className={`w-8 h-8 mb-2 ${action.color}`} />
                <span className="text-sm font-medium">{action.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

