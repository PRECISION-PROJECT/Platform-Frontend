import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),
  email: z.email("Invalid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must not exceed 100 characters"),
  message: z
    .string()
    .min(10, "Comment or question must be at least 10 characters")
    .max(500, "Comment or question must not exceed 500 characters"),
  address: z
    .string()
    .min(5, "City, Province, City must be at least 5 characters")
    .max(200, "City, Province, City must not exceed 200 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
