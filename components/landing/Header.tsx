import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900 font-heading">Fynn</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
            Testimonials
          </Link>
        </div>
        <Button variant="outline">Sign In</Button>
      </nav>
    </header>
  )
}

