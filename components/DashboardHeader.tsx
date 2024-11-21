import Link from 'next/link'
import { Frame, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Frame className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-bold">ChessLens</span>
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
              <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
              <Link href="/scan" className="text-gray-600 hover:text-gray-800">Scan Position</Link>
              <Link href="/scorecard" className="text-gray-600 hover:text-gray-800">Scorecard Parser</Link>
              <Link href="/gif-creator" className="text-gray-600 hover:text-gray-800">GIF Creator</Link>
              <Link href="/integration" className="text-gray-600 hover:text-gray-800">Integrations</Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link></li>
            <li><Link href="/scan" className="text-gray-600 hover:text-gray-800">Scan</Link></li>
            <li><Link href="/scorecard" className="text-gray-600 hover:text-gray-800">Scorecard</Link></li>
            <li><Link href="/gif-creator" className="text-gray-600 hover:text-gray-800">GIF</Link></li>
            <li><Link href="/integration" className="text-gray-600 hover:text-gray-800">Integrate</Link></li>
            <li><Link href="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

