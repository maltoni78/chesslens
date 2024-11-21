import Link from 'next/link'
import { Logo } from './Logo'

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-foreground hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-center text-muted-foreground text-sm">
          © 2023 ChessLens. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

