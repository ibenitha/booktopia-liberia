import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    title: "Kpatawee Waterfalls",
    location: "Bong County",
    description: "Experience the majestic twin waterfalls surrounded by lush rainforest. Perfect for hiking and nature photography.",
    price: "From $75",
    imageUrl: "/placeholder.svg",
    tags: ["Waterfall", "Hiking", "Nature"],
  },
  {
    title: "Nimba Ecolodge Resort",
    location: "Nimba County",
    description: "Luxury eco-friendly accommodation with panoramic mountain views and traditional Liberian hospitality.",
    price: "From $120",
    imageUrl: "/placeholder.svg",
    tags: ["Eco Resort", "Mountain View", "Luxury"],
  },
  {
    title: "Robertsport Beach",
    location: "Grand Cape Mount",
    description: "Pristine beaches perfect for surfing, fishing, and relaxation. Experience stunning sunset views.",
    price: "From $50",
    imageUrl: "/placeholder.svg",
    tags: ["Beach", "Surfing", "Sunset"],
  },
];

export const FeaturedExperiences = () => {
  return (
    <section className="py-16 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked experiences that showcase the best of Liberia's natural beauty and cultural heritage
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};