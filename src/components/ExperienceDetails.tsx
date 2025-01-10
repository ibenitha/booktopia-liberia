import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookingForm } from "./BookingForm";
import { ImageGallery } from "./ImageGallery";
import { AmenitiesList } from "./AmenitiesList";
import { BookingRules } from "./BookingRules";

interface ExperienceDetailsProps {
  title: string;
  location: string;
  description: string;
  price: string;
  images: string[];
  amenities: string[];
  rules?: string[];
}

export const ExperienceDetails = ({
  title,
  location,
  description,
  price,
  images,
  amenities,
  rules = [],
}: ExperienceDetailsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ImageGallery images={images} title={title} />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">{location}</p>
          </div>

          <div className="prose max-w-none">
            <p>{description}</p>
          </div>

          <AmenitiesList amenities={amenities} />
          <BookingRules rules={rules} />

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold">{price}</span>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Book {title}</DialogTitle>
                  </DialogHeader>
                  <BookingForm amenities={amenities} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};