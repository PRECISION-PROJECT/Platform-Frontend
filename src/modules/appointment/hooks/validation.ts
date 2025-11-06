import { parseTime } from "@/utils/parsers";
import { z } from "zod";

export const appointmentSchema = z
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
    message: z
      .string()
      .min(10, "Comment or question must be at least 10 characters")
      .max(500, "Comment or question must not exceed 500 characters"),
    serviceType: z
      .string()
      .min(2, "Service Type must be at least 2 characters")
      .max(50, "Service Type must not exceed 50 characters"),
    meetingType: z
      .string()
      .min(2, "Meeting Type must be at least 2 characters")
      .max(50, "Meeting Type must not exceed 50 characters"),
    selectedDate: z
      .date()
      .min(new Date(), "Selected Date must be today or later")
      .refine((date) => date >= new Date(), {
        message: "Selected Date must be today or later",
      }),
    timeFrom: z
      .string()
      .min(2, "Time From must be at least 2 characters")
      .max(50, "Time From must not exceed 50 characters"),
    timeTo: z
      .string()
      .min(2, "Time To must be at least 2 characters")
      .max(50, "Time To must not exceed 50 characters"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(20, "Phone number must not exceed 20 characters"),
    file: z.array(z.any()).optional(),
  })
  .refine(
    (data) => {
      const timeFromDate = parseTime(data.timeFrom, data.selectedDate);
      const timeToDate = parseTime(data.timeTo, data.selectedDate);

      // If parsing fails, let other validations handle it
      if (!timeFromDate || !timeToDate) return true;

      // Validate that timeFrom is before timeTo
      return timeFromDate < timeToDate;
    },
    {
      message: "Time From must be before Time To",
      path: ["timeFrom"], // This will show the error on the timeFrom field
    }
  )
  .refine(
    (data) => {
      const timeFromDate = parseTime(data.timeFrom, data.selectedDate);
      const timeToDate = parseTime(data.timeTo, data.selectedDate);

      // If parsing fails, let other validations handle it
      if (!timeFromDate || !timeToDate) return true;

      // Validate that timeFrom is before timeTo
      return timeFromDate < timeToDate;
    },
    {
      message: "Time To must be after Time From",
      path: ["timeTo"], // This will show the error on the timeTo field
    }
  );

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
