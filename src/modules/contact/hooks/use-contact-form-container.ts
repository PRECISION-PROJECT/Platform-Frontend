"use client";

import { handleToastError } from "@/utils/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactFormData, contactSchema } from "./validation";

export const useContactFormContainer = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      address: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
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
