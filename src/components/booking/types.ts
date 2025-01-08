import { z } from "zod";

export const bookingFormSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string().min(1, "Please select number of children"),
  customerInfo: z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
  }),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;