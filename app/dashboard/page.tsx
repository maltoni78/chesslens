import { Metadata } from 'next'
import ScannedPositions from '@/components/ScannedPositions.tsx'
import Scorecards from '@/components/Scorecards'
import SavedGames from '@/components/SavedGames'
import QuickActions from '@/components/QuickActions'

export const metadata: Metadata = {
  title: 'Dashboard | ChessLens',
  description: 'Manage your chess games and analysis with ChessLens',
}

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dashboard</h1>
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

