"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BaseFormFieldProps, FileUploadConfig } from "@/types/base-form";
import { FieldPath, FieldValues } from "react-hook-form";
import { InputFileDropzone } from "../ui/input-file-dropzone";
import { Show } from "../utilities";

interface FormFileUploadProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName> {
  config?: FileUploadConfig;
}

function FormFileUpload<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  required,
  config,
  disabled,
  className,
  inputFileClassName,
}: FormFileUploadProps<TFieldValues, TName>) {
  const {
    maxSize,
    acceptedTypes,
    multiple,
    maxFiles,
    onUpload,
    progresses,
    ...restConfig
  } = config || {};

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <Show when={!!label}>
            <FormLabel>
              {label}
              {required && <span className="ml-1 text-red-500">*</span>}
            </FormLabel>
          </Show>

          <FormControl>
            <InputFileDropzone
              value={field.value}
              onValueChange={field.onChange}
              onUpload={onUpload}
              progresses={progresses}
              accept={acceptedTypes?.reduce(
                (acc, type) => ({ ...acc, [type]: [] }),
                {}
              )}
              maxSize={maxSize}
              maxFiles={maxFiles}
              multiple={multiple}
              disabled={disabled}
              className={inputFileClassName}
              {...restConfig}
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

export { FormFileUpload, type FileUploadConfig };
