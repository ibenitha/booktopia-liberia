import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-forest-900 to-forest-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Authentic Liberian Experiences
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Explore the natural wonders, rich culture, and hidden gems of Liberia through unique, curated experiences.
          </p>
          <Button size="lg" className="gap-2">
            Start Exploring <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
    </section>
  );
};