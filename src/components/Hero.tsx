import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Liberian landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge 
          className="inline-flex mb-6 bg-white/10 text-white backdrop-blur-sm border-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Discover Liberia
        </Badge>
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Experience the Beauty of Liberia
        </h1>
        <p 
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          Explore breathtaking waterfalls, pristine beaches, and rich cultural heritage
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-white/90 animate-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          Start Your Journey
        </Button>
      </div>
    </div>
  );
};