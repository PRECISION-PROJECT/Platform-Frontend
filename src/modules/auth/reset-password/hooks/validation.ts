import {
  regexLowerCase,
  regexNumber,
  regexSpace,
  regexSpecialCharacters,
  regexUpperCase,
} from "@/constants/regex";
import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "New Password must be at least 8 characters")
      .max(100, "New Password must not exceed 100 characters")
      .superRefine((val, ctx) => {
        const hasUpperCase = regexUpperCase.test(val);
        const hasLowerCase = regexLowerCase.test(val);
        const hasNumber = regexNumber.test(val);
        const hasSpecialChar = regexSpecialCharacters.test(val);
        const hasSpace = regexSpace.test(val);

        if (!hasUpperCase) {
          ctx.addIssue({
            code: "custom",
            message: "New Password must contain at least one uppercase letter",
          });
        }
        if (!hasLowerCase) {
          ctx.addIssue({
            code: "custom",
            message: "New Password must contain at least one lowercase letter",
          });
        }
        if (!hasNumber) {
          ctx.addIssue({
            code: "custom",
            message: "New Password must contain at least one number",
          });
        }
        if (!hasSpecialChar) {
          ctx.addIssue({
            code: "custom",
            message: "New Password must contain at least one special character",
          });
        }
        if (hasSpace) {
          ctx.addIssue({
            code: "custom",
            message: "New Password must not contain any spaces",
          });
        }
      }),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
