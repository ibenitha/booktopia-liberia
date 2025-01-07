import { Badge } from "@/components/ui/badge";

interface AmenitiesListProps {
  amenities: string[];
}

export const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Amenities</h2>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity) => (
          <Badge key={amenity} variant="secondary">
            {amenity}
          </Badge>
        ))}
      </div>
    </div>
  );
};