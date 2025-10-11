"use client";

import MaxWidthContainer from "@/components/containers/max-width-container";
import Navbar from "../navbar";
import UserAction from "../user-action";
import UserActionMobile from "../user-action-mobile";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <Navbar />
          <UserAction />
          <UserActionMobile />
        </MaxWidthContainer>
      </motion.div>
    </header>
  );
};

export default Header;
