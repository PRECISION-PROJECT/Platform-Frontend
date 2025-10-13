"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./config";

type Props = {
  setIsMenuOpen: (value: boolean) => void;
};

const NavbarMenu = (props: Props) => {
  const pathname = usePathname();
  const isRouteActive = (pathname: string, href: string): boolean => {
    if (href === ROUTES.HOME) return pathname === ROUTES.HOME;
    return pathname === href || pathname.startsWith(href + ROUTES.HOME);
  };
  return (
    <NavigationMenu
      className="hidden md:block"
      onValueChange={(value) => props.setIsMenuOpen(!!value)}
    >
      <NavigationMenuList className="gap-1 space-x-0 text-sm">
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.title}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className={cn(
                  "block group relative after:content-[''] after:h-[1.5px] after:bg-primary after:bottom-0 after:left-0 after:absolute after:w-0 after:data-[state='open']:w-full after:data-[state='open']:transition-all after:transition-all",
                  {
                    "underline": isRouteActive(pathname, link.href),
                  }
                )}
              >
                {link.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarMenu;
