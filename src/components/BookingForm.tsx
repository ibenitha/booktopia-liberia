import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { BookingDatePartySize } from "./booking/BookingDatePartySize";
import { BookingCustomerInfo } from "./booking/BookingCustomerInfo";
import { BookingAmenitySelection } from "./booking/BookingAmenitySelection";
import { bookingFormSchema, type BookingFormData } from "./booking/types";

interface BookingFormProps {
  amenities: string[];
}

export const BookingForm = ({ amenities }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      adults: "1",
      children: "0",
      selectedAmenities: [],
      customerInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialRequests: "",
      },
    },
  });

  const onSubmit = (values: BookingFormData) => {
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      setStep(3);
      return;
    }

    console.log("Final form values:", values);
    toast({
      title: "Booking Submitted",
      description: "Your booking request has been received. We'll contact you shortly.",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && <BookingDatePartySize form={form} />}
        {step === 2 && <BookingAmenitySelection form={form} amenities={amenities} />}
        {step === 3 && <BookingCustomerInfo form={form} />}

        <div className="flex justify-between">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          <Button type="submit" className={step === 1 ? "w-full" : "w-auto"}>
            {step === 1 ? "Continue to Amenities" : step === 2 ? "Continue to Personal Info" : "Complete Booking"}
          </Button>
        </div>
      </form>
    </Form>
  );
};