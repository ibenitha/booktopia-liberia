import { Hero } from "@/components/Hero";
import { SearchFilters } from "@/components/SearchFilters";
import { FeaturedExperiences } from "@/components/FeaturedExperiences";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SearchFilters />
      <FeaturedExperiences />
      <HowItWorks />
      <Testimonials />
    </main>
  );
};

export default Index;