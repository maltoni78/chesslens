import { Metadata } from 'next'
import ScannedPositions from '@/components/ScannedPositions.tsx'
import Scorecards from '@/components/Scorecards'
import SavedGames from '@/components/SavedGames'
import QuickActions from '@/components/QuickActions'
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Dashboard | ChessLens',
  description: 'Manage your chess games and analysis with ChessLens',
}

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Connect Chess.com Account
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <QuickActions />
          <ScannedPositions />
          <Scorecards />
          <SavedGames />
        </div>
      </div>
    </div>
  )
}

