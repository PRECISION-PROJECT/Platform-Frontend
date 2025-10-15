"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import { useHeader } from "@/hooks/use-header";
import { ROUTES } from "@/utils/routes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "../navbar-menu/navbar-menu";
import UserAction from "../user-action";

const Header = () => {
  const { isMenuOpen, isAuthRoute, isScrolled, setIsMenuOpen } = useHeader();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAuthRoute || isScrolled || isMenuOpen
          ? "bg-background"
          : "bg-transparent"
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
          {/* Desktop Menu */}
          <NavbarMenu setIsMenuOpen={setIsMenuOpen} />

          <div className="flex items-center gap-3">
            <UserAction />
          </div>
        </MaxWidthContainer>
      </motion.div>
    </header>
  );
};

export default Header;
