"use client";

import { handleToastError } from "@/utils/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppointmentFormData, appointmentSchema } from "./validation";

export const useAppointmentFormContainer = () => {
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    mode: "onChange",
    defaultValues: {
      selectedDate: new Date(),
      meetingType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
      file: [],
      timeFrom: "00:00:01",
      timeTo: "23:59:59",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      console.log("🚀 ~ onSubmit ~ data:", data);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    isLoading: false,
    form,
    onSubmit,
  };
};
