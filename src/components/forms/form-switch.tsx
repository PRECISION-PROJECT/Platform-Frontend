"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { BaseFormFieldProps } from "@/types/base-form";
import { FieldPath, FieldValues } from "react-hook-form";
import { Show } from "../utilities";

interface FormSwitchProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName> {
  showDescription?: boolean;
}

function FormSwitch<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  disabled,
  className,
}: FormSwitchProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-center justify-between rounded-lg border p-4 ${className}`}
        >
          <div className="space-y-0.5">
            <Show when={!!label}>
              <FormLabel className="text-base">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
              </FormLabel>
            </Show>
            <Show when={!!description}>
              <FormDescription>{description}</FormDescription>
            </Show>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export { FormSwitch };
