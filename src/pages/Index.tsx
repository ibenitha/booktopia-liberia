import { Hero } from "@/components/Hero";
import { SearchFilters } from "@/components/SearchFilters";
import { FeaturedExperiences } from "@/components/FeaturedExperiences";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <Hero />
        <SearchFilters />
        <FeaturedExperiences />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;