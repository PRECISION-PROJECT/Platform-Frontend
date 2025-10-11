"use client";

import { Icons } from "@/assets/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
      <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="hover:bg-gray-200 ">
            {mobileMenuOpen ? (
              <Icons.x className="w-6 h-6" />
            ) : (
              <Icons.menu className="w-6 h-6" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56"
          align="end"
          sideOffset={10}
          forceMount
        >
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push(ROUTES.WHITE_LIST)}>
              <Icons.heart className="mr-2 h-4 w-4" />
              Favorites
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push(ROUTES.PROFILE)}>
              <Icons.userCircle className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLogout}>
            <Icons.logOutIcon className="mr-2 h-4 w-4" />
            {isLogoutLoading ? "Signing out..." : "Sign Out"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserActionMobile;
