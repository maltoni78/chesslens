import { Metadata } from 'next'
import { Film } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export const metadata: Metadata = {
  title: 'GIF Creator | ChessLens',
  description: 'Create animated GIFs of your chess games with ChessLens',
}

export default function GifCreatorPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>GIF Creator</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="game-input">Game Moves</Label>
              <Input id="game-input" placeholder="Enter moves or upload PGN" />
            </div>
            <div className="space-y-2">
              <Label>Animation Speed</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="aspect-square bg-gray-200 mb-4 flex items-center justify-center">
              <Film className="w-16 h-16 text-gray-400" />
            </div>
            <Button type="submit" className="w-full">Create GIF</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

