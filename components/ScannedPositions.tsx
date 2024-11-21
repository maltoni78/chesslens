import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ScannedPositions() {
  const scannedPositions = [
    { id: 1, title: 'Opening Position', image: '/placeholder.svg?height=100&width=100' },
    { id: 2, title: 'Midgame Tactic', image: '/placeholder.svg?height=100&width=100' },
    { id: 3, title: 'Endgame Study', image: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scanned Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {scannedPositions.map((position) => (
            <div key={position.id} className="text-center group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={position.image}
                  alt={position.title}
                  width={100}
                  height={100}
                  className="mx-auto mb-2 transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary-foreground text-sm">View</span>
                </div>
              </div>
              <p className="text-sm mt-2">{position.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

