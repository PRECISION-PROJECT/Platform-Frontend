"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NAV_ITEMS = [
  {
    title: "About",
    url: ROUTES.ABOUT,
  },
  {
    title: "Services",
    url: ROUTES.SERVICES,
  },
  {
    title: "Portfolio",
    url: ROUTES.PORTFOLIO,
  },
  {
    title: "Blog",
    url: ROUTES.BLOG,
  },
  {
    title: "Contact",
    url: ROUTES.CONTACT,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="flex items-center gap-8">
        {NAV_ITEMS.map((link) => (
          <NavigationMenuItem key={link.title}>
            <Link
              className={cn(
                "inline-flex text-sm font-medium transition-colors hover:underline hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {
                  "text-accent-foreground underline": pathname.includes(
                    link.url
                  ),
                }
              )}
              href={link.url}
            >
              {link.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
