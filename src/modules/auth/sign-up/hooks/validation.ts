import {
  regexLowerCase,
  regexNumber,
  regexSpace,
  regexSpecialCharacters,
  regexUpperCase,
} from "@/constants/regex";
import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must not exceed 50 characters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must not exceed 50 characters"),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must not exceed 100 characters")
      .superRefine((val, ctx) => {
        const hasUpperCase = regexUpperCase.test(val);
        const hasLowerCase = regexLowerCase.test(val);
        const hasNumber = regexNumber.test(val);
        const hasSpecialChar = regexSpecialCharacters.test(val);
        const hasSpace = regexSpace.test(val);

        if (!hasUpperCase) {
          ctx.addIssue({
            code: "custom",
            message: "Password must contain at least one uppercase letter",
          });
        }
        if (!hasLowerCase) {
          ctx.addIssue({
            code: "custom",
            message: "Password must contain at least one lowercase letter",
          });
        }
        if (!hasNumber) {
          ctx.addIssue({
            code: "custom",
            message: "Password must contain at least one number",
          });
        }
        if (!hasSpecialChar) {
          ctx.addIssue({
            code: "custom",
            message: "Password must contain at least one special character",
          });
        }
        if (hasSpace) {
          ctx.addIssue({
            code: "custom",
            message: "Password must not contain any spaces",
          });
        }
      }),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters")
      .max(200, "Address must not exceed 200 characters"),
    city: z
      .string()
      .min(2, "City must be at least 2 characters")
      .max(50, "City must not exceed 50 characters"),
    state: z
      .string()
      .min(2, "State must be at least 2 characters")
      .max(50, "State must not exceed 50 characters"),
    country: z.string().min(1, "Country is required"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(20, "Phone number must not exceed 20 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
