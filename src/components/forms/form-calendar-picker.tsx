"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  BaseFormFieldProps,
  CalendarPickerConfig,
  DatePickerConfig,
} from "@/types/base-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldPath, FieldValues } from "react-hook-form";
import { Show } from "../utilities";

interface FormCalendarPickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName> {
  config?: CalendarPickerConfig;
}

function FormCalendarPicker<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  config = {},
  disabled,
  className,
  labelClassName,
}: FormCalendarPickerProps<TFieldValues, TName>) {
  const {
    minDate,
    maxDate,
    disabledDates = [],
    classNames,
    className: calendarClassName,
  } = config;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col ${className}`}>
          <Show when={!!label}>
            <FormLabel className={labelClassName}>
              {label}
              {required && <span className="ml-1 text-red-500">*</span>}
            </FormLabel>
          </Show>
          <FormControl>
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) => {
                if (disabled) return true;
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return disabledDates.some(
                  (disabledDate) => date.getTime() === disabledDate.getTime()
                );
              }}
              initialFocus
              showOutsideDays
              classNames={classNames}
              className={calendarClassName}
            />
          </FormControl>
          <Show when={!!description}>
            <FormDescription>{description}</FormDescription>
          </Show>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { FormCalendarPicker };
