import { InputFileDropzoneProps } from "@/components/ui/input-file-dropzone";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { IOption } from ".";

export interface BaseFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  subLabel?: string;
}

export interface FormOption extends IOption<string> {}

// File upload specific types
export interface FileUploadConfig extends InputFileDropzoneProps {
  acceptedTypes?: string[];
}

// Date picker specific types
export interface DatePickerConfig {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  placeholder?: string;
}

// Slider specific types
export interface SliderConfig {
  min: number;
  max: number;
  step?: number;
  formatValue?: (value: number) => string;
}

// Checkbox group specific types
export interface CheckboxGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Radio group specific types
export interface RadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Textarea specific types
export interface TextareaConfig {
  maxLength?: number;
  showCharCount?: boolean;
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
}
