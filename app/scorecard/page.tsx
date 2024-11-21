import { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: 'Scorecard Parser | ChessLens',
  description: 'Parse chess scorecards with ChessLens',
}

export default function ScorecardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Scorecard Parser</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="manual-input">Manual Input</Label>
              <Input id="manual-input" placeholder="Enter moves (e.g., 1. e4 e5 2. Nf3...)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload Scorecard</Label>
              <Input id="file-upload" type="file" accept="image/*" />
            </div>
            <Button type="submit" className="w-full">Parse Scorecard</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

