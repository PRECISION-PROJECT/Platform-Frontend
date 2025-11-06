"use client";

import { Icons } from "@/assets/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserAvatarProfile } from "@/components/ui/user-avatar-profile";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "../navbar-menu/config";

const NavbarMobileMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, userData, onLogout, isLogoutLoading } = useAuth();

  const isRouteActive = (href: string): boolean => {
    if (href === ROUTES.HOME) return pathname === ROUTES.HOME;
    return pathname === href || pathname.startsWith(href + ROUTES.HOME);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="icon"
          className="text-foreground md:hidden"
          aria-label="Open menu"
        >
          <Icons.menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-sidebar-width sm:w-sidebar-width-larger"
      >
        <SheetTitle>
          <SheetHeader className="text-left">
            {isAuthenticated && userData ? (
              <div className="flex flex-col gap-4 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <UserAvatarProfile user={userData} />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">
                      {userData?.firstName ?? "-"} {userData?.lastName ?? "-"}
                    </p>
                    <p className="text-muted-foreground text-xs leading-none mt-1">
                      {userData?.email}
                    </p>
                  </div>
                </div>
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push("/dashboard/profile")}
                    className="w-full justify-start"
                  >
                    Profile
                  </Button>
                </SheetClose>
              </div>
            ) : (
              <SheetClose asChild>
                <Button
                  onClick={() => router.push(ROUTES.SIGN_IN)}
                  className="bg-white mt-10 text-black hover:bg-white/90 text-sm font-medium w-full"
                  size="sm"
                >
                  GET STARTED
                </Button>
              </SheetClose>
            )}
          </SheetHeader>
        </SheetTitle>

        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = isRouteActive(link.href);
            return (
              <SheetClose key={link.title} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors rounded-md",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  )}
                >
                  {link.title}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        {isAuthenticated && (
          <div className="mt-auto pt-6 border-t">
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                disabled={isLogoutLoading}
              >
                <Icons.logOutIcon className="mr-2 h-4 w-4" />
                {isLogoutLoading ? "Signing out..." : "Sign Out"}
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobileMenu;
