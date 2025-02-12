import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: ["Basic automation", "Limited replies", "Essential features to get started","Limited Usage"],
    cta: "Get Started for Free",
  },
  {
    name: "Pro",
    price: "₹99",
    period: "/month",
    features: [
      "Unlimited AI responses",
      "Advanced personalization",
      "Full automation control",
      "24/7 priority support",
    ],
    cta: "Upgrade to Pro",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 font-heading">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-indigo-600">
                {plan.price}
                {plan.period && <span className="text-xl text-gray-600">{plan.period}</span>}
              </p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 0 ? "outline" : "default"}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

