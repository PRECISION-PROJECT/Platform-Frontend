import { env } from "@/utils/const";
import { appConfig } from ".";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: env.APP_URL,
  name: "Precision Wood Platform",
  metaTitle: "Precision Wood - Smart Timber & Furniture Business Platform",
  description:
    "Precision Wood is an all-in-one platform for timber and furniture businesses. Manage inventory, track orders, and optimize sales with real-time analytics and integrated e-commerce tools.",
  ogImage: `${env.APP_URL}/logo.png`,
};
