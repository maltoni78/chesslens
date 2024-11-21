import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Platform Integration | ChessLens',
  description: 'Integrate ChessLens with Chess.com and Lichess',
}

export default function IntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Chess.com Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Image src="/placeholder.svg?height=50&width=50" alt="Chess.com logo" width={50} height={50} />
              <Button>Connect to Chess.com</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lichess Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Image src="/placeholder.svg?height=50&width=50" alt="Lichess logo" width={50} height={50} />
              <Button>Connect to Lichess</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

