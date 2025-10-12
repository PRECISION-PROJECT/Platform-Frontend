"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
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
import { NAV_LINKS } from "./config";
import { NavbarItem } from "./nav-bar-item";

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

type Props = {
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar = ({setIsMenuOpen}: Props) => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:flex" onValueChange={(value) => setIsMenuOpen(!!value)}>
      <NavigationMenuList>
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.title}>
            {link.menu ? (
              <>
                <NavigationMenuTrigger
                  className={cn("text-white hover:text-white", {
                    "text-muted-foreground": pathname.includes(link.href),
                  })}
                >
                  {link.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent 
                >
                  <ul
                    className={cn(
                      "grid gap-1 border-0 lg:grid-cols-2 bg-primary text-white p-4 w-[800px]",
                    )}
                  >
                    {link.menu.map((menuItem) => (
                      <NavbarItem
                        key={menuItem.title}
                        title={menuItem.title}
                        href={menuItem.href}
                      >
                        {menuItem.tagline}
                      </NavbarItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={link.href} passHref>
                <NavigationMenuLink
                  className={cn({
                    "text-muted-foreground": pathname.includes(link.href),
                  })}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
