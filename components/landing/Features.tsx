import { MessageSquare, Zap, Instagram, Clock } from "lucide-react"

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
    title: "AI-powered DM & comment replies",
    description: "Our advanced AI understands context and responds naturally to your followers.",
  },
  {
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    title: "Customizable response flows",
    description: "Create personalized conversation paths to guide your audience effectively.",
  },
  {
    icon: <Instagram className="h-8 w-8 text-indigo-600" />,
    title: "Seamless Instagram integration",
    description: "Connect your Instagram account with just a few clicks and start automating.",
  },
  {
    icon: <Clock className="h-8 w-8 text-indigo-600" />,
    title: "24/7 automation to boost engagement",
    description: "Never miss an opportunity to connect with your audience, day or night.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-md">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

