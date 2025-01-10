import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { BookingFormData } from "./types";

interface BookingAmenitySelectionProps {
  form: UseFormReturn<BookingFormData>;
  amenities: string[];
}

export const BookingAmenitySelection = ({ form, amenities }: BookingAmenitySelectionProps) => {
  return (
    <FormField
      control={form.control}
      name="selectedAmenities"
      render={() => (
        <FormItem>
          <FormLabel>Select Amenities</FormLabel>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {amenities.map((amenity) => (
              <FormField
                key={amenity}
                control={form.control}
                name="selectedAmenities"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={amenity}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(amenity)}
                          onCheckedChange={(checked) => {
                            const currentValue = field.value || [];
                            return checked
                              ? field.onChange([...currentValue, amenity])
                              : field.onChange(
                                  currentValue.filter((value) => value !== amenity)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        {amenity}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};