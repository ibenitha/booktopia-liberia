import { Hero } from "@/components/Hero";
import { FeaturedExperiences } from "@/components/FeaturedExperiences";
import { SearchFilters } from "@/components/SearchFilters";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SearchFilters />
      <FeaturedExperiences />
    </main>
  );
};

export default Index;