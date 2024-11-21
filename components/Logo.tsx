import { Frame } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Frame className="w-8 h-8 text-primary" />
      <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        ChessLens
      </span>
    </div>
  )
}

