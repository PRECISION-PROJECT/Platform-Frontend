"use client";

import { FormFileUpload } from "@/components/forms/form-file-upload";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { FormTextarea } from "@/components/forms/form-textarea";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { useFormContext } from "react-hook-form";
import { AppointmentFormData } from "../../hooks";

const serviceTypeOptions = [
  { value: "full-time", label: "Full Time" },
  { value: "part-time", label: "Part Time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
  { value: "temporary", label: "Temporary" },
  { value: "other", label: "Other" },
];

type Props = {
  isLoading: boolean;
};

const AppointmentFormUI = ({ isLoading }: Props) => {
  const { control } = useFormContext<AppointmentFormData>();

  return (
    <VStack className="w-full flex-1" spacing={24}>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          control={control}
          name="firstName"
          placeholder="First Name *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none text-foreground placeholder:text-tan"
          disabled={isLoading}
        />
        <FormInput
          control={control}
          name="lastName"
          placeholder="Last Name *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none text-foreground placeholder:text-tan"
          disabled={isLoading}
        />
      </div>

      <FormInput
        control={control}
        name="email"
        placeholder="Email Address *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none text-foreground placeholder:text-tan"
        disabled={isLoading}
      />

      <FormInput
        control={control}
        name="phone"
        placeholder="Phone number *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none text-foreground placeholder:text-tan"
        disabled={isLoading}
      />

      <FormSelect
        control={control}
        name="serviceType"
        placeholder="Service Type *"
        options={serviceTypeOptions}
        required
        selectTriggerClassName="py-[27px] px-5 rounded-none text-foreground w-full data-[placeholder]:text-tan"
        disabled={isLoading}
      />

      <FormTextarea
        control={control}
        name="message"
        placeholder="Comment or Questions *"
        config={{
          maxLength: 500,
          showCharCount: true,
          rows: 4,
        }}
        inputClassName="h-40 rounded-none text-foreground placeholder:text-tan"
        required
        disabled={isLoading}
        description='"Lorem ipsum" is a placeholder text used in graphic design and publishing to fill space and show what a document  "Lorem ipsum" is a placeholder'
      />

      <FormFileUpload
        control={control}
        name="file"
        description="Upload a file for preview (optional)"
        inputFileClassName="border-solid border-foreground border-1 text-tan"
        config={{
          maxSize: 2000000,
          acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
          multiple: false,
          maxFiles: 1,
        }}
      />

      <div>
        <Button className="width-fit" type="submit" disabled={isLoading}>
          BOOK AN APPOINTMENT
        </Button>
      </div>
    </VStack>
  );
};

export default AppointmentFormUI;
