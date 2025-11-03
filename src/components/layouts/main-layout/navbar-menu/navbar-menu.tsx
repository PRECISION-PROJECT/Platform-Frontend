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

export const LinkWithUnderline = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center",
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.15em] before:w-full before:bg-primary before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-left hover:before:scale-x-100",
        className
      )}
    >
      {children}
    </Link>
  );
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
              <LinkWithUnderline
                href={link.href}
                className={cn("py-1!", {
                  "before:scale-x-100 before:origin-left": isRouteActive(
                    pathname,
                    link.href
                  ),
                })}
              >
                {link.title}
              </LinkWithUnderline>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarMenu;
