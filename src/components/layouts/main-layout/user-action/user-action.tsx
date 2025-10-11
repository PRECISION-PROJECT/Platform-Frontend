"use client";

import { Icons } from "@/assets/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatarProfile } from "@/components/ui/user-avatar-profile";
import { ROUTES } from "@/utils/routes";
import { useKBar } from "kbar";
import { useRouter } from "next/navigation";
import React from "react";

const UserAction = () => {
  const router = useRouter();
  const { query } = useKBar();

  const { isAuthenticated, userData, isLogoutLoading, onLogout } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="items-center gap-6 hidden lg:flex">
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
    <div className="items-center gap-1 hidden lg:flex">
      <Button variant="ghost" onClick={query.toggle}>
        <Icons.search size={18} />
      </Button>
      <Button variant="ghost" onClick={() => router.push(ROUTES.WHITE_LIST)}>
        <Icons.heart size={18} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <UserAvatarProfile user={userData} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56"
          align="end"
          sideOffset={10}
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">
                {userData?.firstName ?? "-"} {userData?.lastName ?? "-"}
              </p>
              <p className="text-muted-foreground text-xs leading-none">
                {userData?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
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

export default UserAction;
