import { Calendar, Search, Check } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse our curated selection of authentic Liberian experiences",
  },
  {
    icon: Calendar,
    title: "Book",
    description: "Choose your dates and complete your reservation",
  },
  {
    icon: Check,
    title: "Experience",
    description: "Enjoy your unforgettable Liberian adventure",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-100 text-forest-600 mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};