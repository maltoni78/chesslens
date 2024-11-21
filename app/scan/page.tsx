import { Metadata } from 'next'
import { Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Scan Position | ChessLens',
  description: 'Scan and analyze chess positions with ChessLens',
}

export default function ScanPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Scan Chess Position</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-square bg-gray-200 mb-4 flex items-center justify-center">
            <Camera className="w-16 h-16 text-gray-400" />
          </div>
          <div className="space-y-2">
            <Button className="w-full">Take Photo</Button>
            <Button variant="outline" className="w-full">Upload Image</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

