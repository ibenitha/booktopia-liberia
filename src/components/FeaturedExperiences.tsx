import { Link } from "react-router-dom";
import { ExperienceCard } from "./ExperienceCard";

const featuredExperiences = [
  {
    id: 1,
    title: "Kpatawee Waterfalls",
    location: "Bong County",
    description: "Experience the majestic twin waterfalls surrounded by lush rainforest. Perfect for hiking and nature photography.",
    price: "From $75",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Nature", "Adventure", "Photography"],
  },
  {
    id: 2,
    title: "Sapo National Park",
    location: "Sinoe County",
    description: "Explore Liberia's largest protected area of rainforest, home to diverse wildlife and rare species.",
    price: "From $120",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Wildlife", "Nature", "Guided Tour"],
  },
  {
    id: 3,
    title: "Providence Island",
    location: "Monrovia",
    description: "Discover the historical landing site of freed American slaves and learn about Liberia's founding history.",
    price: "From $45",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Historical", "Cultural", "Educational"],
  },
];

export const FeaturedExperiences = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredExperiences.map((experience) => (
            <Link key={experience.id} to={`/experience/${experience.id}`}>
              <ExperienceCard {...experience} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};