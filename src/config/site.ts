import { appConfig } from ".";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: "Precision Wood Platform",
  metaTitle: "Precision Wood - Smart Timber & Furniture Business Platform",
  description:
    "Precision Wood is an all-in-one platform for timber and furniture businesses. Manage inventory, track orders, and optimize sales with real-time analytics and integrated e-commerce tools.",
  ogImage: `${appConfig.appUrl}/logo.png`,
};
