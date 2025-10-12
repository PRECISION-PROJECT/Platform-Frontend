import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { HStack } from "@/components/utilities";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavbarItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <HStack
            align={"center"}
            noWrap
            className="space-x-2"
          >
            <h6 className="!leading-none font-medium text-sm">{title}</h6>
          </HStack>
          <p
            title={children as string}
            className="line-clamp-1 text-sm leading-snug"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
NavbarItem.displayName = "NavbarItem";
export { NavbarItem };
