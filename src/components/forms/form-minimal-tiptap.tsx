import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Show } from "../utilities";
import {
  MinimalTiptap,
  MinimalTiptapProps,
} from "../ui/shadcn-io/minimal-tiptap";

interface Props<T extends FieldValues = FieldValues>
  extends MinimalTiptapProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  required?: boolean;
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  inputContainerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  suffixClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  subLabel?: string;
  isShowError?: boolean;
  initialContent?: string;
  description?: string;
}

const FormMinimalTiptap = <T extends FieldValues>({
  className,
  labelClassName,
  control,
  defaultValue,
  label,
  required,
  containerClassName,
  requiredClassName,
  subLabel,
  isShowError = true,
  initialContent,
  description,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={props.name}
      render={({ field }) => (
        <>
          <FormItem className={className}>
            <Show when={!!label}>
              <FormLabel>
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
              </FormLabel>
            </Show>
            <FormControl>
              <MinimalTiptap
                {...field}
                {...props}
                content={field.value}
                initialContent={initialContent}
                className={cn("min-h-96", className)}
              />
            </FormControl>
            <Show when={!!description}>
              <FormDescription>{description}</FormDescription>
            </Show>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
};

export { FormMinimalTiptap };
