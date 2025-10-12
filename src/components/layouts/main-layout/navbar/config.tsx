import { ROUTES } from "@/utils/routes";

export const NAV_LINKS = [
    {
       title: "PRODUCTS",
       href: "/products",
       menu: [
          {
             title: "SEO Strategy",
             tagline: "Optimize for SEO and monitor their performance.",
             href: "/products/seo-strategy",
          },
          {
             title: "Password Protection",
             tagline: "Protect your blogs with password security.",
             href: "/products/password-protection",
          },
          {
             title: "Advanced Analytics",
             tagline: "Discover who is engaging with your posts.",
             href: "/products/analytics",
          },
          {
             title: "Custom QR Codes",
             tagline: "Leverage QR codes to connect with your audience.",
             href: "/products/qr-codes",
          },
       ],
    },
    {
       title: "RESOURCES",
       href: ROUTES.RESOURCES,
       menu: [
         {
            title: "Blog",
            tagline: "Stay updated with articles about the latest tech trends.",
            href: ROUTES.BLOG,
         },
         {
            title: "Help",
            tagline: "Find solutions to your queries.",
            href: ROUTES.HELP,
         },
         {
            title: "Contact",
            tagline: "Get in touch with us.",
            href: ROUTES.CONTACT,
         },
         {
            title: "About",
            tagline: "Learn more about us.",
            href: ROUTES.ABOUT,
         }
      ],
    },
    
 ];