import Link from "next/link"
import { MessageCircle, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <MessageCircle className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-xl font-bold font-heading">Fynn</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#features" className="hover:text-indigo-400 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-indigo-400 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="hover:text-indigo-400 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Fynn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

