"use client";

import { FormCalendarPicker } from "@/components/forms/form-calendar-picker";
import { FormFileUpload } from "@/components/forms/form-file-upload";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { FormTextarea } from "@/components/forms/form-textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { AppointmentFormData } from "../../hooks";

const meetingTypeOptions = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

type Props = {
  isLoading: boolean;
};

const AppointmentCalendarUI = ({ isLoading }: Props) => {
  const { control } = useFormContext<AppointmentFormData>();

  return (
    <VStack className="basis-1/2 md:basis-auto md:w-md" spacing={24}>
      <FormCalendarPicker
        control={control}
        name="selectedDate"
        labelClassName="text-tan"
        label="Selected Date *"
        disabled={isLoading}
        config={{
          className: cn("text-white h-96"),
          classNames: {
            months: "flex flex-col gap-4",
            month: "flex flex-col gap-4",
            caption:
              "flex justify-center items-center text-lg font-semibold text-white font-spring relative",
            caption_label: "text-xl font-semibold text-white",
            nav: "flex items-center gap-1",
            nav_button: "p-2 text-white hover:text-tan transition-colors",
            nav_button_previous: "absolute left-2",
            nav_button_next: "absolute right-2",

            head_row: "flex justify-between mt-2",
            head_cell:
              "w-10 text-center text-white font-medium text-sm font-spring",

            row: "flex justify-between mt-2",
            cell: cn(
              "relative w-10 md:w-14 h-10 text-center text-sm flex items-center justify-center",
              "[&:has([aria-selected])]:bg-white/5 [&:has([aria-selected])]:text-foreground",
              "[&:has([aria-selected])]:rounded-md"
            ),

            day: cn(
              "w-10 md:w-14 h-10 flex items-center justify-center rounded bg-white/5 text-foreground hover:bg-white/10 transition-all"
            ),
            day_today: "",
            day_selected:
              "bg-foreground text-background hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background",
            day_disabled: "opacity-30 text-gray-500",
            day_outside:
              "day-outside text-foreground aria-selected:text-foreground",
          },
        }}
      />

      <FormInput
        control={control}
        labelClassName="text-tan"
        name="timeFrom"
        label="Time From *"
        type="time"
        step="1"
        inputClassName="h-14 py-4 px-5 rounded-none text-foreground placeholder:text-tan appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        disabled={isLoading}
      />

      <FormInput
        control={control}
        labelClassName="text-tan"
        name="timeTo"
        type="time"
        label="Time To *"
        step="1"
        inputClassName="h-14 py-4 px-5 rounded-none text-foreground placeholder:text-tan appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        disabled={isLoading}
      />

      <FormSelect
        control={control}
        name="meetingType"
        placeholder="Meeting Type *"
        options={meetingTypeOptions}
        selectTriggerClassName="py-[27px] px-5 rounded-none w-full data-[placeholder]:text-tan"
        disabled={isLoading}
      />
    </VStack>
  );
};

export default AppointmentCalendarUI;
