import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "An unforgettable experience at Kpatawee Waterfalls. The guides were knowledgeable and friendly.",
    author: "Sarah M.",
    location: "United States",
  },
  {
    id: 2,
    text: "Sapo National Park exceeded all expectations. The wildlife viewing was incredible!",
    author: "James K.",
    location: "United Kingdom",
  },
  {
    id: 3,
    text: "The cultural tour of Providence Island was enlightening and deeply moving.",
    author: "Michael R.",
    location: "Canada",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-forest-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-forest-600 mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="text-sm">
                  <p className="font-semibold text-forest-800">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};