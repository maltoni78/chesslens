import Link from 'next/link'
import { CastleIcon as ChessKnight, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Logo } from '@/components/Logo'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4 text-center">
            <Logo />
            <h1 className="text-5xl font-bold mt-8 mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Welcome to ChessLens</h1>
            <p className="text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">Analyze, learn, and improve your chess game with cutting-edge AI technology</p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <ChessKnight className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Position Scanner</h3>
                <p className="text-muted-foreground">Instantly analyze chess positions from books or physical boards</p>
              </div>
              <div className="text-center">
                <Logo />
                <h3 className="text-xl font-semibold mb-2 mt-4">Scorecard Parser</h3>
                <p className="text-muted-foreground">Digitize and analyze your handwritten scoresheets</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">GIF Creator</h3>
                <p className="text-muted-foreground">Create and share animated GIFs of your best games</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

