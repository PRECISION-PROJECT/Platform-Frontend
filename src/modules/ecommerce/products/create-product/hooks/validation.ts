import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productFormSchema = z.object({
  imageUrl: z
    .any()
    .refine((files) => files?.length >= 1, "Image is required.")
    .refine((files) => files?.length <= 1, "Only 1 image is allowed.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  images: z
    .any()
    .optional()
    .refine(
      (files) => !files || files?.length <= 4,
      "Maximum 4 images allowed."
    )
    .refine(
      (files) =>
        !files || files.every((file: any) => file?.size <= MAX_FILE_SIZE),
      `Each image must be 5MB or less.`
    )
    .refine(
      (files) =>
        !files ||
        files.every((file: any) => ACCEPTED_IMAGE_TYPES.includes(file?.type)),
      "Only .jpg, .jpeg, .png and .webp files are accepted."
    ),
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be positive"),
  salePrice: z.number().min(0, "Sale price must be positive").optional(),
  sku: z.string().min(1, "SKU is required"),
  type: z.string(),
  status: z.enum(["active", "inactive"]),
  categoryId: z.string().min(1, "Category is required"),
  stockQuantity: z.number().min(0, "Stock quantity must be positive"),
  unit: z.string().min(1, "Unit is required"),
  weight: z.number().min(0, "Weight must be positive").optional(),
  length: z.number().min(0, "Length must be positive").optional(),
  width: z.number().min(0, "Width must be positive").optional(),
  height: z.number().min(0, "Height must be positive").optional(),
  material: z.string().optional(),
  finish: z.string().optional(),
  color: z.string().optional(),
  slug: z.string().min(1, "Slug is required"),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.array(z.string()),
  sortOrder: z.number(),
  isFeatured: z.boolean(),
});

export type CreateProductFormData = z.infer<typeof productFormSchema>;

export const defaultValues = {
  imageUrl: undefined,
  images: undefined,
  name: "",
  description: "",
  price: 0,
  salePrice: 0,
  sku: "",
  type: "" as const,
  status: "active" as const,
  categoryId: "",
  stockQuantity: 0,
  unit: "",
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  material: undefined,
  finish: undefined,
  color: undefined,
  slug: "",
  metaTitle: undefined,
  metaDescription: undefined,
  keywords: [],
  sortOrder: 0,
  isFeatured: false,
};
