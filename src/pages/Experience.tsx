import { ExperienceDetails } from "@/components/ExperienceDetails";

const Experience = () => {
  // This would typically fetch data based on the experience ID
  const mockExperience = {
    title: "Kpatawee Waterfalls",
    location: "Bong County",
    description: "Experience the majestic twin waterfalls surrounded by lush rainforest. Perfect for hiking and nature photography. The Kpatawee Waterfalls are one of Liberia's most spectacular natural attractions, featuring two cascading waterfalls set amid pristine rainforest.",
    price: "From $75",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    amenities: [
      "Guided Tours",
      "Photography Spots",
      "Hiking Trails",
      "Picnic Areas",
      "Local Guide",
      "Safety Equipment",
    ],
    rules: [
      "Minimum age: 12 years",
      "Comfortable walking shoes required",
      "Bring water and snacks",
      "No littering",
      "Follow guide instructions at all times",
    ],
  };

  return <ExperienceDetails {...mockExperience} />;
};

export default Experience;