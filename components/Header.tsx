import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from './Logo'

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link href="/dashboard" className="text-primary hover:text-primary/80 transition-colors">Dashboard</Link>
              <Link href="/scan" className="text-foreground hover:text-primary transition-colors">Scan Position</Link>
              <Link href="/scorecard" className="text-foreground hover:text-primary transition-colors">Scorecard Parser</Link>
              <Link href="/gif-creator" className="text-foreground hover:text-primary transition-colors">GIF Creator</Link>
              <Link href="/integration" className="text-foreground hover:text-primary transition-colors">Integrations</Link>
              <Link href="/profile" className="text-foreground hover:text-primary transition-colors">Profile</Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</Link></li>
            <li><Link href="/scan" className="text-foreground hover:text-primary transition-colors">Scan</Link></li>
            <li><Link href="/scorecard" className="text-foreground hover:text-primary transition-colors">Scorecard</Link></li>
            <li><Link href="/gif-creator" className="text-foreground hover:text-primary transition-colors">GIF</Link></li>
            <li><Link href="/integration" className="text-foreground hover:text-primary transition-colors">Integrate</Link></li>
            <li><Link href="/profile" className="text-foreground hover:text-primary transition-colors">Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

