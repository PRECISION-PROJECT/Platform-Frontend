"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import Navbar from "../navbar";
import UserAction from "../user-action";
import UserActionMobile from "../user-action-mobile";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 left-0 right-0 z-50 bg-[#E5E7EB] text-[#374151] border-b border-gray-300 animate-in fade-in-up duration-500">
      <MaxWidthContainer className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="bg-[#d1d5db] px-12 py-6 rounded-sm">
          <span className="text-lg font-medium tracking-wide text-[#374151]">
            LOGO
          </span>
        </div>
        <Navbar />
        <UserAction />
        <UserActionMobile />
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
