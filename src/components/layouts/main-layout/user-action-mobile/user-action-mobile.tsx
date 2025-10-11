"use client";

import { Icons } from "@/assets/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "../navbar";

const UserActionMobile = () => {
  const router = useRouter();

  const { isAuthenticated, isLogoutLoading, onLogout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="items-center gap-6 flex lg:hidden">
        <Button
          onClick={() => router.push(ROUTES.SIGN_IN)}
          variant="ghost"
          className="text-[#374151] hover:bg-gray-200 hover:text-gray-900"
        >
          Login
        </Button>
      </div>
    );
  }

  return (
    <div className="items-center gap-1 flex lg:hidden">
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Icons.menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-8">
            {NAV_ITEMS.map((item) => (
              <Link
                href={item.url}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <div className="border-t pt-4 mt-4 flex gap-4">
              <Link href={ROUTES.PROFILE}>
                <Button variant="outline" size="icon">
                  <Icons.userCircle className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={ROUTES.WHITE_LIST}>
                <Button variant="outline" size="icon">
                  <Icons.heart className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="icon" onClick={onLogout}>
                <Icons.logOutIcon className="mr-2 h-4 w-4" />
                {isLogoutLoading ? "Signing out..." : "Sign Out"}
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserActionMobile;
