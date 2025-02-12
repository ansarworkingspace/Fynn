import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Social Media Manager",
    content: "Fynn has revolutionized our Instagram engagement. We've seen a 300% increase in response rates!",
    avatar: "",
  },
  {
    name: "Mike Chen",
    role: "E-commerce Owner",
    content: "The AI responses are incredibly natural. Our customers can't tell they're talking to a bot!",
    avatar: "",
  },
  {
    name: "Emily Rodriguez",
    role: "Influencer",
    content: "Fynn has saved me hours each day. Now I can focus on creating content while Fynn handles engagement.",
    avatar: "",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-700 font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold font-heading">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
