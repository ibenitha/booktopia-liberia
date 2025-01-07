import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookingForm } from "./BookingForm";

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
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">{location}</p>
          </div>

          <div className="prose max-w-none">
            <p>{description}</p>
          </div>

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

          {rules.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Booking Rules</h2>
              <ul className="list-disc list-inside space-y-2">
                {rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

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
                  <BookingForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};