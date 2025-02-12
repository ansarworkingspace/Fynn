import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Automate Your Instagram DMs with AI</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
          Fynn instantly replies to comments and DMs, helping you engage and convert more customers—on autopilot.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            <Link href="#pricing">Get Started for Free</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600"
          >
            <Link href="#features">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

