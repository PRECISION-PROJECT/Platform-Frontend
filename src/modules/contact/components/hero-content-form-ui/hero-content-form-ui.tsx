"use client";

import { FormInput } from "@/components/forms/form-input";
import { FormTextarea } from "@/components/forms/form-textarea";
import { Button } from "@/components/ui/button";
import { VStack } from "@/components/utilities";
import { useFormContext } from "react-hook-form";
import { ContactFormData } from "../../hooks";

type Props = {
  isLoading: boolean;
};

const HeroContentFormUI = ({ isLoading }: Props) => {
  const { control } = useFormContext<ContactFormData>();

  return (
    <VStack className="flex-1" spacing={24}>
      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          control={control}
          name="firstName"
          placeholder="First Name *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none placeholder:text-tan"
        />
        <FormInput
          control={control}
          name="lastName"
          placeholder="Last Name *"
          required
          inputClassName="h-14 py-4 px-5 rounded-none placeholder:text-tan"
        />
      </div>

      <FormInput
        control={control}
        name="address"
        placeholder="City, Province, City *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none placeholder:text-tan"
      />

      <FormInput
        control={control}
        name="email"
        placeholder="Email Address *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none placeholder:text-tan"
      />

      <FormInput
        control={control}
        name="subject"
        placeholder="Subject *"
        required
        inputClassName="h-14 py-4 px-5 rounded-none placeholder:text-tan"
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
        inputClassName="h-40 rounded-none placeholder:text-tan"
        required
      />

      <div>
        <Button
          className="width-fit px-20 h-12 rounded-none font-light!"
          type="submit"
          disabled={isLoading}
        >
          SUBMIT
        </Button>
      </div>
    </VStack>
  );
};

export default HeroContentFormUI;
