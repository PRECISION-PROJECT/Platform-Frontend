"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useHeader } from "@/hooks/use-header";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/routes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";
import UserAction from "../user-action";
import UserActionMobile from "../user-action-mobile";

const Header = () => {
  const { isMenuOpen, isScrolled, setIsMenuOpen } = useHeader();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-primary" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
      >
        <MaxWidthContainer className="flex items-center justify-between py-4">
          <Link href={ROUTES.HOME} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Precision Wood Logo"
              width={96}
              height={40}
              className="h-10 w-24 object-contain"
              priority
            />
          </Link>
          <Navbar setIsMenuOpen={setIsMenuOpen} />
          <UserAction />
          <UserActionMobile />
        </MaxWidthContainer>
      </motion.div>
    </header>
  );
};

export default Header;
